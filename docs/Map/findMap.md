# findMap

```ts
function Map.findMap<K, V>(
    target: ReadonlyMap<K, V>,
    predicate: (
        value: NoInfer<V>,
        key: NoInfer<K>,
        target: ReadonlyMap<K, V>,
    ) => boolean,
    mapper: (
        value: NoInfer<V>,
        key: NoInfer<K>,
        target: ReadonlyMap<K, V>,
    ) => V,
): ReadonlyMap<K, V>
```

Finds the first entry in the map that satisfies the provided `predicate` function and applies the `mapper` function to it, returning a new map with the mapped value.

## Example

::: code-group

```ts [data-first]
import { Map } from "@monstermann/map";

Map.findMap(
    new Map([
        ["a", 1],
        ["b", 2],
        ["c", 3],
    ]),
    (value) => value > 1,
    (value) => value * 10,
); // Map(3) { "a" => 1, "b" => 20, "c" => 3 }
```

```ts [data-last]
import { Map } from "@monstermann/map";

pipe(
    new Map([
        ["a", 1],
        ["b", 2],
        ["c", 3],
    ]),
    Map.findMap(
        (value) => value > 1,
        (value) => value * 10,
    ),
); // Map(3) { "a" => 1, "b" => 20, "c" => 3 }
```

:::
