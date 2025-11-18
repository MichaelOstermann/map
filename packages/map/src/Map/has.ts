import { dfdlT } from "@monstermann/dfdl"

/**
 * `Map.has(map, key)`
 *
 * Checks if `map` contains the specified `key`.
 *
 * ## Example
 *
 * ```ts
 * Map.has(
 *     Map.create([
 *         ["a", 1],
 *         ["b", 2],
 *     ]),
 *     "a",
 * ); // true
 *
 * Map.has(
 *     Map.create([
 *         ["a", 1],
 *         ["b", 2],
 *     ]),
 *     "c",
 * ); // false
 * ```
 *
 * ```ts
 * pipe(
 *     Map.create([
 *         ["a", 1],
 *         ["b", 2],
 *     ]),
 *     Map.has("a"),
 * ); // true
 *
 * pipe(
 *     Map.create([
 *         ["a", 1],
 *         ["b", 2],
 *     ]),
 *     Map.has("c"),
 * ); // false
 * ```
 */
export const has: {
    <K, V>(key: NoInfer<K>): (target: ReadonlyMap<K, V>) => boolean
    <K, V>(target: ReadonlyMap<K, V>, key: NoInfer<K>): boolean
} = dfdlT(<K, V>(target: ReadonlyMap<K, V>, key: NoInfer<K>): boolean => {
    return target.has(key)
}, 2)
