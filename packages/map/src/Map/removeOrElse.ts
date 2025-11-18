import type { OrElse } from "./internals/types"
import { dfdlT } from "@monstermann/dfdl"
import { cloneMap } from "@monstermann/remmi"

/**
 * ```ts
 * function Map.removeOrElse(map, key, orElse)
 * ```
 *
 * ## Example
 *
 * ```ts
 * import { Map } from "@monstermann/map";
 *
 * Map.removeOrElse(
 *     Map.create([
 *         ["a", 1],
 *         ["b", 2],
 *     ]),
 *     "a",
 *     () => null,
 * ); // Map(1) { "b" => 2 }
 *
 * Map.removeOrElse(
 *     Map.create([
 *         ["a", 1],
 *         ["b", 2],
 *     ]),
 *     "c",
 *     (map) => map.size,
 * ); // 2
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
 *     Map.removeOrElse("a", () => null),
 * ); // Map(1) { "b" => 2 }
 *
 * pipe(
 *     Map.create([
 *         ["a", 1],
 *         ["b", 2],
 *     ]),
 *     Map.removeOrElse("c", (map) => map.size),
 * ); // 2
 * ```
 */
export const removeOrElse: {
    <K, V, U>(key: NoInfer<K>, orElse: OrElse<K, V, U>): (target: ReadonlyMap<K, V>) => Map<K, V> | U
    <K, V, U>(target: ReadonlyMap<K, V>, key: NoInfer<K>, orElse: OrElse<K, V, U>): Map<K, V> | U
} = dfdlT(<K, V, U>(target: ReadonlyMap<K, V>, key: NoInfer<K>, orElse: OrElse<K, V, U>): Map<K, V> | U => {
    if (!target.has(key)) return orElse(target)
    const result = cloneMap(target)
    result.delete(key)
    return result
}, 3)
