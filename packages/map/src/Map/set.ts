import { dfdlT } from "@monstermann/dfdl"
import { cloneMap } from "@monstermann/remmi"

/**
 * # set
 *
 * ```ts
 * function Map.set<K, V>(
 *     target: ReadonlyMap<K, V>,
 *     key: NoInfer<K>,
 *     value: NoInfer<V>,
 * ): ReadonlyMap<K, V>
 * ```
 *
 * Sets or updates the value for the specified key in the map.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Map } from "@monstermann/map";
 *
 * Map.set(
 *     new Map([
 *         ["a", 1],
 *         ["b", 2],
 *     ]),
 *     "a",
 *     10,
 * ); // Map(2) { "a" => 10, "b" => 2 }
 *
 * Map.set(
 *     new Map([
 *         ["a", 1],
 *         ["b", 2],
 *     ]),
 *     "c",
 *     3,
 * ); // Map(3) { "a" => 1, "b" => 2, "c" => 3 }
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
 *     Map.set("a", 10),
 * ); // Map(2) { "a" => 10, "b" => 2 }
 *
 * pipe(
 *     new Map([
 *         ["a", 1],
 *         ["b", 2],
 *     ]),
 *     Map.set("c", 3),
 * ); // Map(3) { "a" => 1, "b" => 2, "c" => 3 }
 * ```
 *
 */
export const set: {
    <K, V>(key: NoInfer<K>, value: NoInfer<V>): (target: Map<K, V>) => Map<K, V>
    <K, V>(key: NoInfer<K>, value: NoInfer<V>): (target: ReadonlyMap<K, V>) => ReadonlyMap<K, V>

    <K, V>(target: Map<K, V>, key: NoInfer<K>, value: NoInfer<V>): Map<K, V>
    <K, V>(target: ReadonlyMap<K, V>, key: NoInfer<K>, value: NoInfer<V>): ReadonlyMap<K, V>
} = dfdlT(<K, V>(target: Map<K, V>, key: NoInfer<K>, value: NoInfer<V>): Map<K, V> => {
    if (target.get(key) === value) return target
    target = cloneMap(target)
    target.set(key, value)
    return target
}, 3)
