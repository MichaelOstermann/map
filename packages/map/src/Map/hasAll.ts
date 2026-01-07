import { dfdlT } from "@monstermann/dfdl"

/**
 * # hasAll
 *
 * ```ts
 * function Map.hasAll<K, V>(
 *     target: ReadonlyMap<K, V>,
 *     keys: Iterable<NoInfer<K>>,
 * ): boolean
 * ```
 *
 * Checks whether the map contains all of the specified keys.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Map } from "@monstermann/map";
 *
 * Map.hasAll(
 *     new Map([
 *         ["a", 1],
 *         ["b", 2],
 *         ["c", 3],
 *     ]),
 *     ["a", "b"],
 * ); // true
 *
 * Map.hasAll(
 *     new Map([
 *         ["a", 1],
 *         ["b", 2],
 *         ["c", 3],
 *     ]),
 *     ["a", "d"],
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
 *         ["c", 3],
 *     ]),
 *     Map.hasAll(["a", "b"]),
 * ); // true
 *
 * pipe(
 *     new Map([
 *         ["a", 1],
 *         ["b", 2],
 *         ["c", 3],
 *     ]),
 *     Map.hasAll(["a", "d"]),
 * ); // false
 * ```
 *
 */
export const hasAll: {
    <K, V>(keys: Iterable<NoInfer<K>>): (target: ReadonlyMap<K, V>) => boolean
    <K, V>(target: ReadonlyMap<K, V>, keys: Iterable<NoInfer<K>>): boolean
} = dfdlT(<K, V>(target: ReadonlyMap<K, V>, keys: Iterable<NoInfer<K>>): boolean => {
    for (const key of keys) {
        if (!target.has(key)) return false
    }
    return true
}, 2)
