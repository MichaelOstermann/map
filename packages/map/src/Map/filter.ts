import { dfdlT } from "@monstermann/dfdl"
import { cloneMap } from "@monstermann/remmi"

/**
 * # filter
 *
 * ```ts
 * function Map.filter<K, V>(
 *     target: ReadonlyMap<K, V>,
 *     predicate: (
 *         value: NoInfer<V>,
 *         key: NoInfer<K>,
 *         target: ReadonlyMap<K, V>,
 *     ) => boolean,
 * ): ReadonlyMap<K, V>
 * ```
 *
 * Returns a new map containing only entries that satisfy the predicate function.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Map } from "@monstermann/map";
 *
 * Map.filter(
 *     new Map([
 *         ["a", 1],
 *         ["b", 2],
 *         ["c", 3],
 *     ]),
 *     (value) => value > 1,
 * ); // Map(2) { "b" => 2, "c" => 3 }
 * ```
 *
 * ```ts [data-last]
 * import { Map } from "@monstermann/map";
 *
 * pipe(
 *     new Map([
 *         ["a", 1],
 *         ["b", 2],
 *         ["c", 3],
 *     ]),
 *     Map.filter((value) => value > 1),
 * ); // Map(2) { "b" => 2, "c" => 3 }
 * ```
 *
 */
export const filter: {
    <K, V, U extends V>(predicate: (value: NoInfer<V>, key: NoInfer<K>, target: ReadonlyMap<K, V>) => value is U): (target: Map<K, V>) => Map<K, U>
    <K, V, U extends V>(predicate: (value: NoInfer<V>, key: NoInfer<K>, target: ReadonlyMap<K, V>) => value is U): (target: ReadonlyMap<K, V>) => ReadonlyMap<K, U>

    <K, V>(predicate: (value: NoInfer<V>, key: NoInfer<K>, target: ReadonlyMap<K, V>) => boolean): (target: Map<K, V>) => Map<K, V>
    <K, V>(predicate: (value: NoInfer<V>, key: NoInfer<K>, target: ReadonlyMap<K, V>) => boolean): (target: ReadonlyMap<K, V>) => ReadonlyMap<K, V>

    <K, V, U extends V>(target: Map<K, V>, predicate: (value: NoInfer<V>, key: NoInfer<K>, target: ReadonlyMap<K, V>) => value is U): Map<K, U>
    <K, V, U extends V>(target: ReadonlyMap<K, V>, predicate: (value: NoInfer<V>, key: NoInfer<K>, target: ReadonlyMap<K, V>) => value is U): ReadonlyMap<K, U>

    <K, V>(target: Map<K, V>, predicate: (value: NoInfer<V>, key: NoInfer<K>, target: ReadonlyMap<K, V>) => boolean): Map<K, V>
    <K, V>(target: ReadonlyMap<K, V>, predicate: (value: NoInfer<V>, key: NoInfer<K>, target: ReadonlyMap<K, V>) => boolean): ReadonlyMap<K, V>
} = dfdlT((target: any, predicate: any): any => {
    let result
    for (const [key, value] of target) {
        if (!predicate(value, key, target)) {
            result ??= cloneMap(target)
            result.delete(key)
        }
    }
    return result ?? target
}, 2)
