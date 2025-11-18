import { dfdlT } from "@monstermann/dfdl"
import { cloneMap } from "@monstermann/remmi"

/**
 * ```ts
 * function Map.removeAll(map, keys)
 * ```
 *
 * ## Example
 *
 * ```ts
 * Map.removeAll(
 *     Map.create([
 *         ["a", 1],
 *         ["b", 2],
 *         ["c", 3],
 *     ]),
 *     ["a", "c"],
 * ); // Map(1) { "b" => 2 }
 *
 * Map.removeAll(
 *     Map.create([
 *         ["a", 1],
 *         ["b", 2],
 *         ["c", 3],
 *     ]),
 *     ["d", "e"],
 * ); // Map(3) { "a" => 1, "b" => 2, "c" => 3 }
 * ```
 *
 * ```ts
 * pipe(
 *     Map.create([
 *         ["a", 1],
 *         ["b", 2],
 *         ["c", 3],
 *     ]),
 *     Map.removeAll(["a", "c"]),
 * ); // Map(1) { "b" => 2 }
 *
 * pipe(
 *     Map.create([
 *         ["a", 1],
 *         ["b", 2],
 *         ["c", 3],
 *     ]),
 *     Map.removeAll(["d", "e"]),
 * ); // Map(3) { "a" => 1, "b" => 2, "c" => 3 }
 * ```
 */
export const removeAll: {
    <K, V>(keys: Iterable<NoInfer<K>>): (target: Map<K, V>) => Map<K, V>
    <K, V>(keys: Iterable<NoInfer<K>>): (target: ReadonlyMap<K, V>) => ReadonlyMap<K, V>

    <K, V>(target: Map<K, V>, keys: Iterable<NoInfer<K>>): Map<K, V>
    <K, V>(target: ReadonlyMap<K, V>, keys: Iterable<NoInfer<K>>): ReadonlyMap<K, V>
} = dfdlT(<K, V>(target: Map<K, V>, keys: Iterable<NoInfer<K>>): Map<K, V> => {
    let result
    for (const key of keys) {
        if (!target.has(key)) continue
        result ??= cloneMap(target)
        result.delete(key)
    }
    return result ?? target
}, 2)
