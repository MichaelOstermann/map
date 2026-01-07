import { dfdlT } from "@monstermann/dfdl"

/**
 * # hasNone
 *
 * ```ts
 * function Map.hasNone<K, V>(
 *     target: ReadonlyMap<K, V>,
 *     keys: Iterable<NoInfer<K>>,
 * ): boolean
 * ```
 *
 * Checks whether the map contains none of the specified keys.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Map } from "@monstermann/map";
 *
 * Map.hasNone(
 *     new Map([
 *         ["a", 1],
 *         ["b", 2],
 *     ]),
 *     ["c", "d"],
 * ); // true
 *
 * Map.hasNone(
 *     new Map([
 *         ["a", 1],
 *         ["b", 2],
 *     ]),
 *     ["a", "c"],
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
 *     Map.hasNone(["c", "d"]),
 * ); // true
 *
 * pipe(
 *     new Map([
 *         ["a", 1],
 *         ["b", 2],
 *     ]),
 *     Map.hasNone(["a", "c"]),
 * ); // false
 * ```
 *
 */
export const hasNone: {
    <K, V>(keys: Iterable<NoInfer<K>>): (target: ReadonlyMap<K, V>) => boolean
    <K, V>(target: ReadonlyMap<K, V>, keys: Iterable<NoInfer<K>>): boolean
} = dfdlT(<K, V>(target: ReadonlyMap<K, V>, keys: Iterable<NoInfer<K>>): boolean => {
    for (const key of keys) {
        if (target.has(key)) return false
    }
    return true
}, 2)
