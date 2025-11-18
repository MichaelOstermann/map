import type { NonNil } from "./internals/types"
import { dfdlT } from "@monstermann/dfdl"
import { filter } from "./filter"

/**
 * ```ts
 * function Map.compact(map)
 * ```
 *
 * ## Example
 *
 * ```ts
 * import { Map } from "@monstermann/map";
 *
 * Map.compact(
 *     Map.create([
 *         ["a", 1],
 *         ["b", null],
 *         ["c", undefined],
 *     ]),
 * ); // Map(1) { "a" => 1 }
 * ```
 *
 * ```ts
 * import { Map } from "@monstermann/map";
 *
 * pipe(
 *     Map.create([
 *         ["a", 1],
 *         ["b", null],
 *         ["c", undefined],
 *     ]),
 *     Map.compact(),
 * ); // Map(1) { "a" => 1 }
 * ```
 */
export const compact: {
    (): <K, V>(target: Map<K, V>) => Map<K, NonNil<V>>
    (): <K, V>(target: ReadonlyMap<K, V>) => ReadonlyMap<K, NonNil<V>>

    <K, V>(target: Map<K, V>): Map<K, NonNil<V>>
    <K, V>(target: ReadonlyMap<K, V>): ReadonlyMap<K, NonNil<V>>
} = dfdlT((target: any): any => {
    return filter(target, v => v != null)
}, 1)
