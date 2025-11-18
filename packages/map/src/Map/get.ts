import { dfdlT } from "@monstermann/dfdl"

/**
 * ```ts
 * function Map.get(map, key)
 * ```
 *
 * ## Example
 *
 * ```ts
 * import { Map } from "@monstermann/map";
 *
 * Map.get(
 *     Map.create([
 *         ["a", 1],
 *         ["b", 2],
 *     ]),
 *     "a",
 * ); // 1
 *
 * Map.get(
 *     Map.create([
 *         ["a", 1],
 *         ["b", 2],
 *     ]),
 *     "c",
 * ); // undefined
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
 *     Map.get("a"),
 * ); // 1
 *
 * pipe(
 *     Map.create([
 *         ["a", 1],
 *         ["b", 2],
 *     ]),
 *     Map.get("c"),
 * ); // undefined
 * ```
 */
export const get: {
    <K, V>(key: NoInfer<K>): (target: ReadonlyMap<K, V>) => V | undefined
    <K, V>(target: ReadonlyMap<K, V>, key: NoInfer<K>): V | undefined
} = dfdlT(<K, V>(target: ReadonlyMap<K, V>, key: NoInfer<K>): V | undefined => {
    return target.get(key)
}, 2)
