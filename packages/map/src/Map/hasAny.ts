import { dfdlT } from "@monstermann/dfdl"

/**
 * ```ts
 * function Map.hasAny(map, keys)
 * ```
 *
 * ## Example
 *
 * ```ts
 * import { Map } from "@monstermann/map";
 *
 * Map.hasAny(
 *     Map.create([
 *         ["a", 1],
 *         ["b", 2],
 *     ]),
 *     ["a", "c"],
 * ); // true
 *
 * Map.hasAny(
 *     Map.create([
 *         ["a", 1],
 *         ["b", 2],
 *     ]),
 *     ["c", "d"],
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
 *     Map.hasAny(["a", "c"]),
 * ); // true
 *
 * pipe(
 *     Map.create([
 *         ["a", 1],
 *         ["b", 2],
 *     ]),
 *     Map.hasAny(["c", "d"]),
 * ); // false
 * ```
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
