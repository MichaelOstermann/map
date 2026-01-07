import { dfdlT } from "@monstermann/dfdl"
import { cloneMap } from "@monstermann/remmi"

/**
 * # mapEach
 *
 * ```ts
 * function Map.mapEach<K, V, U>(
 *     target: ReadonlyMap<K, V>,
 *     fn: (
 *         value: NoInfer<V>,
 *         key: NoInfer<K>,
 *         target: ReadonlyMap<K, V>,
 *     ) => U,
 * ): ReadonlyMap<K, U>
 * ```
 *
 * Transforms all values in the map using the provided function.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Map } from "@monstermann/map";
 *
 * Map.mapEach(
 *     new Map([
 *         ["a", 1],
 *         ["b", 2],
 *     ]),
 *     (value, key) => value * 2,
 * ); // Map(2) { "a" => 2, "b" => 4 }
 * ```
 *
 * ```ts [data-last]
 * import { Map } from "@monstermann/map";
 *
 * pipe(
 *     new Map([
 *         ["a", 1],
 *         ["b", 2],
 *     ]),
 *     Map.mapEach((value, key) => value * 2),
 * ); // Map(2) { "a" => 2, "b" => 4 }
 * ```
 *
 */
export const mapEach: {
    <K, V, U>(fn: (value: NoInfer<V>, key: NoInfer<K>, target: ReadonlyMap<K, V>) => U): (target: Map<K, V>) => Map<K, U>
    <K, V, U>(fn: (value: NoInfer<V>, key: NoInfer<K>, target: ReadonlyMap<K, V>) => U): (target: ReadonlyMap<K, V>) => ReadonlyMap<K, U>

    <K, V, U>(target: Map<K, V>, fn: (value: NoInfer<V>, key: NoInfer<K>, target: ReadonlyMap<K, V>) => U): Map<K, U>
    <K, V, U>(target: ReadonlyMap<K, V>, fn: (value: NoInfer<V>, key: NoInfer<K>, target: ReadonlyMap<K, V>) => U): ReadonlyMap<K, U>
} = dfdlT((target: any, fn: any): any => {
    let result
    for (const [k, prev] of target) {
        const next = fn(prev, k, target)
        if (prev === next) continue
        result ??= cloneMap(target)
        result.set(k, next)
    }
    return result ?? target
}, 2)
