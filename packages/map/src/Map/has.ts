import { dfdlT } from "@monstermann/dfdl"

/**
 * # has
 *
 * ```ts
 * function Map.has<K, V>(
 *     target: ReadonlyMap<K, V>,
 *     key: NoInfer<K>,
 * ): boolean
 * ```
 *
 * Checks whether the map contains the specified key.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Map } from "@monstermann/map";
 *
 * Map.has(
 *     new Map([
 *         ["a", 1],
 *         ["b", 2],
 *     ]),
 *     "a",
 * ); // true
 *
 * Map.has(
 *     new Map([
 *         ["a", 1],
 *         ["b", 2],
 *     ]),
 *     "c",
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
 *     Map.has("a"),
 * ); // true
 *
 * pipe(
 *     new Map([
 *         ["a", 1],
 *         ["b", 2],
 *     ]),
 *     Map.has("c"),
 * ); // false
 * ```
 *
 */
export const has: {
    <K, V>(key: NoInfer<K>): (target: ReadonlyMap<K, V>) => boolean
    <K, V>(target: ReadonlyMap<K, V>, key: NoInfer<K>): boolean
} = dfdlT(<K, V>(target: ReadonlyMap<K, V>, key: NoInfer<K>): boolean => {
    return target.has(key)
}, 2)
