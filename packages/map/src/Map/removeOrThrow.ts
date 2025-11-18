import { dfdlT } from "@monstermann/dfdl"
import { cloneMap } from "@monstermann/remmi"

/**
 * `Map.removeOrThrow(map, key)`
 *
 * Removes the entry with the specified `key` from `map`, throwing an error if the key doesn't exist.
 *
 * ## Example
 *
 * ```ts
 * Map.removeOrThrow(
 *     Map.create([
 *         ["a", 1],
 *         ["b", 2],
 *     ]),
 *     "a",
 * ); // Map(1) { "b" => 2 }
 *
 * Map.removeOrThrow(
 *     Map.create([
 *         ["a", 1],
 *         ["b", 2],
 *     ]),
 *     "c",
 * ); // throws FnError
 * ```
 *
 * ```ts
 * pipe(
 *     Map.create([
 *         ["a", 1],
 *         ["b", 2],
 *     ]),
 *     Map.removeOrThrow("a"),
 * ); // Map(1) { "b" => 2 }
 *
 * pipe(
 *     Map.create([
 *         ["a", 1],
 *         ["b", 2],
 *     ]),
 *     Map.removeOrThrow("c"),
 * ); // throws FnError
 * ```
 */
export const removeOrThrow: {
    <K, V>(key: NoInfer<K>): (target: ReadonlyMap<K, V>) => Map<K, V>
    <K, V>(target: ReadonlyMap<K, V>, key: NoInfer<K>): Map<K, V>
} = dfdlT(<K, V>(target: ReadonlyMap<K, V>, key: NoInfer<K>): Map<K, V> => {
    if (!target.has(key)) throw new Error("Map.removeOrThrow: Key does not exist.")
    const result = cloneMap(target)
    result.delete(key)
    return result
}, 2)
