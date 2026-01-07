import { dfdlT } from "@monstermann/dfdl"

/**
 * # hasAny
 *
 * ```ts
 * function Map.hasAny<K, V>(
 *     target: ReadonlyMap<K, V>,
 *     keys: Iterable<NoInfer<K>>,
 * ): boolean
 * ```
 *
 * Checks whether the map contains any of the specified keys.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Map } from "@monstermann/map";
 *
 * Map.hasAny(
 *     new Map([
 *         ["a", 1],
 *         ["b", 2],
 *     ]),
 *     ["a", "c"],
 * ); // true
 *
 * Map.hasAny(
 *     new Map([
 *         ["a", 1],
 *         ["b", 2],
 *     ]),
 *     ["c", "d"],
 * ); // false
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
 *     Map.hasAny(["a", "c"]),
 * ); // true
 *
 * pipe(
 *     new Map([
 *         ["a", 1],
 *         ["b", 2],
 *     ]),
 *     Map.hasAny(["c", "d"]),
 * ); // false
 * ```
 *
 */
export const hasAny: {
    <K, V>(keys: Iterable<NoInfer<K>>): (target: ReadonlyMap<K, V>) => boolean
    <K, V>(target: ReadonlyMap<K, V>, keys: Iterable<NoInfer<K>>): boolean
} = dfdlT(<K, V>(target: ReadonlyMap<K, V>, keys: Iterable<NoInfer<K>>): boolean => {
    for (const key of keys) {
        if (target.has(key)) return true
    }
    return false
}, 2)
