import type { MapMap } from "./internals/types"
import { dfdlT } from "@monstermann/dfdl"
import { cloneMap } from "@monstermann/remmi"

/**
 * `Map.mapOrThrow(map, key, transform)`
 *
 * Transforms the value at `key` in `map` using `transform`, throwing an error if the key doesn't exist.
 *
 * ## Example
 *
 * ```ts
 * Map.mapOrThrow(
 *     Map.create([
 *         ["a", 1],
 *         ["b", 2],
 *     ]),
 *     "a",
 *     (value) => value * 2,
 * ); // Map(2) { "a" => 2, "b" => 2 }
 *
 * Map.mapOrThrow(
 *     Map.create([
 *         ["a", 1],
 *         ["b", 2],
 *     ]),
 *     "c",
 *     (value) => value * 2,
 * ); // throws FnError
 * ```
 *
 * ```ts
 * pipe(
 *     Map.create([
 *         ["a", 1],
 *         ["b", 2],
 *     ]),
 *     Map.mapOrThrow("a", (value) => value * 2),
 * ); // Map(2) { "a" => 2, "b" => 2 }
 *
 * pipe(
 *     Map.create([
 *         ["a", 1],
 *         ["b", 2],
 *     ]),
 *     Map.mapOrThrow("c", (value) => value * 2),
 * ); // throws FnError
 * ```
 */
export const mapOrThrow: {
    <K, V>(key: NoInfer<K>, transform: MapMap<K, V>): (target: Map<K, V>) => Map<K, V>
    <K, V>(key: NoInfer<K>, transform: MapMap<K, V>): (target: ReadonlyMap<K, V>) => ReadonlyMap<K, V>

    <K, V>(target: Map<K, V>, key: NoInfer<K>, transform: MapMap<K, V>): Map<K, V>
    <K, V>(target: ReadonlyMap<K, V>, key: NoInfer<K>, transform: MapMap<K, V>): ReadonlyMap<K, V>
} = dfdlT(<K, V>(target: Map<K, V>, key: NoInfer<K>, transform: MapMap<K, V>): Map<K, V> => {
    if (!target.has(key)) throw new Error("Map.mapOrThrow: Key does not exist.")
    const prev = target.get(key)! as V
    const next = transform(prev, key, target)
    if (prev === next) return target
    const result = cloneMap(target)
    result.set(key, next)
    return result
}, 3)
