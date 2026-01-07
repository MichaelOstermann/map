import { dfdlT } from "@monstermann/dfdl"

/**
 * # forEach
 *
 * ```ts
 * function Map.forEach<K, V>(
 *     target: ReadonlyMap<K, V>,
 *     fn: (
 *         value: NoInfer<V>,
 *         key: NoInfer<K>,
 *         target: ReadonlyMap<K, V>,
 *     ) => any,
 * ): ReadonlyMap<K, V>
 * ```
 *
 * Executes a function for each entry in the map and returns the original map.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Map } from "@monstermann/map";
 *
 * Map.forEach(
 *     new Map([
 *         ["a", 1],
 *         ["b", 2],
 *     ]),
 *     (value, key) => console.log(key, value),
 * ); // Map(2) { "a" => 1, "b" => 2 }
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
 *     Map.forEach((value, key) => console.log(key, value)),
 * ); // Map(2) { "a" => 1, "b" => 2 }
 * ```
 *
 */
export const forEach: {
    <K, V>(fn: (value: NoInfer<V>, key: NoInfer<K>, target: ReadonlyMap<K, V>) => any): (target: Map<K, V>) => Map<K, V>
    <K, V>(fn: (value: NoInfer<V>, key: NoInfer<K>, target: ReadonlyMap<K, V>) => any): (target: ReadonlyMap<K, V>) => ReadonlyMap<K, V>

    <K, V>(target: Map<K, V>, fn: (value: NoInfer<V>, key: NoInfer<K>, target: ReadonlyMap<K, V>) => any): Map<K, V>
    <K, V>(target: ReadonlyMap<K, V>, fn: (value: NoInfer<V>, key: NoInfer<K>, target: ReadonlyMap<K, V>) => any): ReadonlyMap<K, V>
} = dfdlT(<K, V>(target: Map<K, V>, fn: (value: NoInfer<V>, key: NoInfer<K>, target: ReadonlyMap<K, V>) => any): Map<K, V> => {
    target.forEach(fn)
    return target
}, 2)
