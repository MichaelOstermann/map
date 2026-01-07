import { dfdlT } from "@monstermann/dfdl"

/**
 * # getOrElse
 *
 * ```ts
 * function Map.getOrElse<K, V, U>(
 *     target: ReadonlyMap<K, V>,
 *     key: NoInfer<K>,
 *     orElse: (target: ReadonlyMap<K, V>) => U,
 * ): Exclude<V, null | undefined> | U
 * ```
 *
 * Gets the value associated with the specified key, or calls the provided function to compute a fallback value if the value is `null` or `undefined`.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Map } from "@monstermann/map";
 *
 * Map.getOrElse(
 *     new Map([
 *         ["a", 1],
 *         ["b", null],
 *     ]),
 *     "a",
 *     () => 0,
 * ); // 1
 *
 * Map.getOrElse(
 *     new Map([
 *         ["a", 1],
 *         ["b", null],
 *     ]),
 *     "b",
 *     () => 0,
 * ); // 0
 *
 * Map.getOrElse(
 *     new Map([
 *         ["a", 1],
 *         ["b", null],
 *     ]),
 *     "c",
 *     (map) => map.size,
 * ); // 2
 * ```
 *
 * ```ts [data-last]
 * import { Map } from "@monstermann/map";
 *
 * pipe(
 *     new Map([
 *         ["a", 1],
 *         ["b", null],
 *     ]),
 *     Map.getOrElse("a", () => 0),
 * ); // 1
 *
 * pipe(
 *     new Map([
 *         ["a", 1],
 *         ["b", null],
 *     ]),
 *     Map.getOrElse("b", () => 0),
 * ); // 0
 *
 * pipe(
 *     new Map([
 *         ["a", 1],
 *         ["b", null],
 *     ]),
 *     Map.getOrElse("c", (map) => map.size),
 * ); // 2
 * ```
 *
 */
export const getOrElse: {
    <K, V, U>(key: NoInfer<K>, orElse: (target: ReadonlyMap<K, V>) => U): (target: ReadonlyMap<K, V>) => Exclude<V, null | undefined> | U
    <K, V, U>(target: ReadonlyMap<K, V>, key: NoInfer<K>, orElse: (target: ReadonlyMap<K, V>) => U): Exclude<V, null | undefined> | U
} = dfdlT(<K, V, U>(target: ReadonlyMap<K, V>, key: NoInfer<K>, orElse: (target: ReadonlyMap<K, V>) => U): any => {
    return target.get(key) ?? orElse(target)
}, 3)
