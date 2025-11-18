import { dfdlT } from "@monstermann/dfdl"

/**
 * ```ts
 * function Map.has(map, key)
 * ```
 *
 * ## Example
 *
 * ```ts
 * import { Map } from "@monstermann/map";
 *
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
 * import { Map } from "@monstermann/map";
 *
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
