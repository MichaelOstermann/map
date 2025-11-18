import type { NonNil } from "./internals/types"
import { dfdlT } from "@monstermann/dfdl"

/**
 * ```ts
 * function Map.getOrThrow(map, key)
 * ```
 *
 * ## Example
 *
 * ```ts
 * import { Map } from "@monstermann/map";
 *
 * Map.getOrThrow(
 *     Map.create([
 *         ["a", 1],
 *         ["b", 2],
 *     ]),
 *     "a",
 * ); // 1
 *
 * Map.getOrThrow(
 *     Map.create([
 *         ["a", 1],
 *         ["b", null],
 *     ]),
 *     "b",
 * ); // throws FnError
 *
 * Map.getOrThrow(
 *     Map.create([
 *         ["a", 1],
 *         ["b", 2],
 *     ]),
 *     "c",
 * ); // throws FnError
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
 *     Map.getOrThrow("a"),
 * ); // 1
 *
 * pipe(
 *     Map.create([
 *         ["a", 1],
 *         ["b", null],
 *     ]),
 *     Map.getOrThrow("b"),
 * ); // throws FnError
 *
 * pipe(
 *     Map.create([
 *         ["a", 1],
 *         ["b", 2],
 *     ]),
 *     Map.getOrThrow("c"),
 * ); // throws FnError
 * ```
 */
export const getOrThrow: {
    <K, V>(key: NoInfer<K>): (target: ReadonlyMap<K, V>) => NonNil<V>
    <K, V>(target: ReadonlyMap<K, V>, key: NoInfer<K>): NonNil<V>
} = dfdlT(<K, V>(target: ReadonlyMap<K, V>, key: NoInfer<K>): any => {
    const value = target.get(key)
    if (value != null) return value
    throw new Error("Map.getOrThrow: Value not found.")
}, 2)
