import type { NonNil } from "./internals/types"
import { dfdlT } from "@monstermann/dfdl"

/**
 * ```ts
 * function Map.getOr(map, key, or)
 * ```
 *
 * ## Example
 *
 * ```ts
 * Map.getOr(
 *     Map.create([
 *         ["a", 1],
 *         ["b", null],
 *     ]),
 *     "a",
 *     0,
 * ); // 1
 *
 * Map.getOr(
 *     Map.create([
 *         ["a", 1],
 *         ["b", null],
 *     ]),
 *     "b",
 *     0,
 * ); // 0
 *
 * Map.getOr(
 *     Map.create([
 *         ["a", 1],
 *         ["b", null],
 *     ]),
 *     "c",
 *     0,
 * ); // 0
 * ```
 *
 * ```ts
 * pipe(
 *     Map.create([
 *         ["a", 1],
 *         ["b", null],
 *     ]),
 *     Map.getOr("a", 0),
 * ); // 1
 *
 * pipe(
 *     Map.create([
 *         ["a", 1],
 *         ["b", null],
 *     ]),
 *     Map.getOr("b", 0),
 * ); // 0
 *
 * pipe(
 *     Map.create([
 *         ["a", 1],
 *         ["b", null],
 *     ]),
 *     Map.getOr("c", 0),
 * ); // 0
 * ```
 */
export const getOr: {
    <K, V, U>(key: NoInfer<K>, or: U): (target: ReadonlyMap<K, V>) => NonNil<V> | U
    <K, V, U>(target: ReadonlyMap<K, V>, key: NoInfer<K>, or: U): NonNil<V> | U
} = dfdlT(<K, V, U>(target: ReadonlyMap<K, V>, key: NoInfer<K>, or: U): any => {
    return target.get(key) ?? or
}, 3)
