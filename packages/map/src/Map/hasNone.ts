import { dfdlT } from "@monstermann/dfdl"

/**
 * ```ts
 * function Map.hasNone(map, keys)
 * ```
 *
 * ## Example
 *
 * ```ts
 * Map.hasNone(
 *     Map.create([
 *         ["a", 1],
 *         ["b", 2],
 *     ]),
 *     ["c", "d"],
 * ); // true
 *
 * Map.hasNone(
 *     Map.create([
 *         ["a", 1],
 *         ["b", 2],
 *     ]),
 *     ["a", "c"],
 * ); // false
 * ```
 *
 * ```ts
 * pipe(
 *     Map.create([
 *         ["a", 1],
 *         ["b", 2],
 *     ]),
 *     Map.hasNone(["c", "d"]),
 * ); // true
 *
 * pipe(
 *     Map.create([
 *         ["a", 1],
 *         ["b", 2],
 *     ]),
 *     Map.hasNone(["a", "c"]),
 * ); // false
 * ```
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
