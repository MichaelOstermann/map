import type { NonNil, OrElse } from "./internals/types"
import { dfdlT } from "@monstermann/dfdl"

/**
 * `Map.getOrElse(map, key, orElse)`
 *
 * Gets the value associated with `key` from `map`, calling `orElse` with the map if the key doesn't exist or the value is nullable.
 *
 * ## Example
 *
 * ```ts
 * Map.getOrElse(
 *     Map.create([
 *         ["a", 1],
 *         ["b", null],
 *     ]),
 *     "a",
 *     () => 0,
 * ); // 1
 *
 * Map.getOrElse(
 *     Map.create([
 *         ["a", 1],
 *         ["b", null],
 *     ]),
 *     "b",
 *     () => 0,
 * ); // 0
 *
 * Map.getOrElse(
 *     Map.create([
 *         ["a", 1],
 *         ["b", null],
 *     ]),
 *     "c",
 *     (map) => map.size,
 * ); // 2
 * ```
 *
 * ```ts
 * pipe(
 *     Map.create([
 *         ["a", 1],
 *         ["b", null],
 *     ]),
 *     Map.getOrElse("a", () => 0),
 * ); // 1
 *
 * pipe(
 *     Map.create([
 *         ["a", 1],
 *         ["b", null],
 *     ]),
 *     Map.getOrElse("b", () => 0),
 * ); // 0
 *
 * pipe(
 *     Map.create([
 *         ["a", 1],
 *         ["b", null],
 *     ]),
 *     Map.getOrElse("c", (map) => map.size),
 * ); // 2
 * ```
 */
export const getOrElse: {
    <K, V, U>(key: NoInfer<K>, orElse: OrElse<K, V, U>): (target: ReadonlyMap<K, V>) => NonNil<V> | U
    <K, V, U>(target: ReadonlyMap<K, V>, key: NoInfer<K>, orElse: OrElse<K, V, U>): NonNil<V> | U
} = dfdlT(<K, V, U>(target: ReadonlyMap<K, V>, key: NoInfer<K>, orElse: OrElse<K, V, U>): any => {
    return target.get(key) ?? orElse(target)
}, 3)
