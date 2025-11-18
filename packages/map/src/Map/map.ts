import type { MapMap } from "./internals/types"
import { dfdlT } from "@monstermann/dfdl"
import { cloneMap } from "@monstermann/remmi"

/**
 * ```ts
 * function Map.map(map, key, transform)
 * ```
 *
 * ## Example
 *
 * ```ts
 * Map.map(
 *     Map.create([
 *         ["a", 1],
 *         ["b", 2],
 *     ]),
 *     "a",
 *     (value) => value * 2,
 * ); // Map(2) { "a" => 2, "b" => 2 }
 *
 * Map.map(
 *     Map.create([
 *         ["a", 1],
 *         ["b", 2],
 *     ]),
 *     "c",
 *     (value) => value * 2,
 * ); // Map(2) { "a" => 1, "b" => 2 }
 * ```
 *
 * ```ts
 * pipe(
 *     Map.create([
 *         ["a", 1],
 *         ["b", 2],
 *     ]),
 *     Map.map("a", (value) => value * 2),
 * ); // Map(2) { "a" => 2, "b" => 2 }
 *
 * pipe(
 *     Map.create([
 *         ["a", 1],
 *         ["b", 2],
 *     ]),
 *     Map.map("c", (value) => value * 2),
 */
export const map: {
    <K, V>(key: NoInfer<K>, transform: MapMap<K, V>): (target: Map<K, V>) => Map<K, V>
    <K, V>(key: NoInfer<K>, transform: MapMap<K, V>): (target: ReadonlyMap<K, V>) => ReadonlyMap<K, V>

    <K, V>(target: Map<K, V>, key: NoInfer<K>, transform: MapMap<K, V>): Map<K, V>
    <K, V>(target: ReadonlyMap<K, V>, key: NoInfer<K>, transform: MapMap<K, V>): ReadonlyMap<K, V>
} = dfdlT(<K, V>(target: Map<K, V>, key: NoInfer<K>, transform: MapMap<K, V>): Map<K, V> => {
    if (!target.has(key)) return target
    const prev = target.get(key)! as V
    const next = transform(prev, key, target)
    if (prev === next) return target
    const result = cloneMap(target)
    result.set(key, next)
    return result
}, 3)
