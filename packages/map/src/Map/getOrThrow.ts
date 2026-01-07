import { dfdlT } from "@monstermann/dfdl"

/**
 * # getOrThrow
 *
 * ```ts
 * function Map.getOrThrow<K, V>(
 *     target: ReadonlyMap<K, V>,
 *     key: NoInfer<K>,
 * ): Exclude<V, null | undefined>
 * ```
 *
 * Gets the value associated with the specified key, or throws an error if the value is `null` or `undefined`.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Map } from "@monstermann/map";
 *
 * Map.getOrThrow(
 *     new Map([
 *         ["a", 1],
 *         ["b", 2],
 *     ]),
 *     "a",
 * ); // 1
 *
 * Map.getOrThrow(
 *     new Map([
 *         ["a", 1],
 *         ["b", null],
 *     ]),
 *     "b",
 * ); // throws FnError
 *
 * Map.getOrThrow(
 *     new Map([
 *         ["a", 1],
 *         ["b", 2],
 *     ]),
 *     "c",
 * ); // throws FnError
 * ```
 *
 * ```ts [data-last]
 * import { Map } from "@monstermann/map";
 *
 * pipe(
 *     new Map([
 *         ["a", 1],
 *         ["b", 2],
 *     ]),
 *     Map.getOrThrow("a"),
 * ); // 1
 *
 * pipe(
 *     new Map([
 *         ["a", 1],
 *         ["b", null],
 *     ]),
 *     Map.getOrThrow("b"),
 * ); // throws FnError
 *
 * pipe(
 *     new Map([
 *         ["a", 1],
 *         ["b", 2],
 *     ]),
 *     Map.getOrThrow("c"),
 * ); // throws FnError
 * ```
 *
 */
export const getOrThrow: {
    <K, V>(key: NoInfer<K>): (target: ReadonlyMap<K, V>) => Exclude<V, null | undefined>
    <K, V>(target: ReadonlyMap<K, V>, key: NoInfer<K>): Exclude<V, null | undefined>
} = dfdlT(<K, V>(target: ReadonlyMap<K, V>, key: NoInfer<K>): any => {
    const value = target.get(key)
    if (value != null) return value
    throw new Error("Map.getOrThrow: Value not found.")
}, 2)
