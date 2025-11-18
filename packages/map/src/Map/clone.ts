import { dfdlT } from "@monstermann/dfdl"
import { cloneMap } from "@monstermann/remmi"

/**
 * ```ts
 * function Map.clone(target)
 * ```
 *
 * ## Example
 *
 * ```ts
 * import { Map } from "@monstermann/map";
 *
 * const original = Map.create([
 *     ["a", 1],
 *     ["b", 2],
 * ]);
 *
 * const copy = Map.clone(original); // Map { 'a' => 1, 'b' => 2 }
 * ```
 *
 * ```ts
 * import { Map } from "@monstermann/map";
 *
 * const original = Map.create([
 *     ["a", 1],
 *     ["b", 2],
 * ]);
 *
 * const copy = pipe(original, Map.clone()); // Map { 'a' => 1, 'b' => 2 }
 * ```
 */
export const clone: {
    (): <K, V>(target: ReadonlyMap<K, V>) => Map<K, V>
    <K, V>(target: ReadonlyMap<K, V>): Map<K, V>
} = dfdlT(cloneMap, 1)
