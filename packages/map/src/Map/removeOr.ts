import { dfdlT } from "@monstermann/dfdl"
import { cloneMap } from "@monstermann/remmi"

/**
 * ```ts
 * function Map.removeOr(map, key, or)
 * ```
 *
 * ## Example
 *
 * ```ts
 * Map.removeOr(
 *     Map.create([
 *         ["a", 1],
 *         ["b", 2],
 *     ]),
 *     "a",
 *     null,
 * ); // Map(1) { "b" => 2 }
 *
 * Map.removeOr(
 *     Map.create([
 *         ["a", 1],
 *         ["b", 2],
 *     ]),
 *     "c",
 *     null,
 * ); // null
 * ```
 *
 * ```ts
 * pipe(
 *     Map.create([
 *         ["a", 1],
 *         ["b", 2],
 *     ]),
 *     Map.removeOr("a", null),
 * ); // Map(1) { "b" => 2 }
 *
 * pipe(
 *     Map.create([
 *         ["a", 1],
 *         ["b", 2],
 *     ]),
 *     Map.removeOr("c", null),
 * ); // null
 * ```
 */
export const removeOr: {
    <K, V, U>(key: NoInfer<K>, or: U): (target: ReadonlyMap<K, V>) => Map<K, V> | U
    <K, V, U>(target: ReadonlyMap<K, V>, key: NoInfer<K>, or: U): Map<K, V> | U
} = dfdlT(<K, V, U>(target: ReadonlyMap<K, V>, key: NoInfer<K>, or: U): Map<K, V> | U => {
    if (!target.has(key)) return or
    const result = cloneMap(target)
    result.delete(key)
    return result
}, 3)
