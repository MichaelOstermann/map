# findMapAll

```ts
function Map.findMapAll<K, V>(
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

Finds all entries in the map that satisfy the provided `predicate` function and applies the `mapper` function to each of them, returning a new map with the mapped values.

## Example

::: code-group

```ts [data-first]
import { Map } from "@monstermann/map";

Map.findMapAll(
    new Map([
        ["a", 1],
        ["b", 2],
        ["c", 3],
    ]),
    (value) => value > 1,
    (value) => value * 10,
); // Map(3) { "a" => 1, "b" => 20, "c" => 30 }
```

```ts [data-last]
import { Map } from "@monstermann/map";

pipe(
    new Map([
        ["a", 1],
        ["b", 2],
        ["c", 3],
    ]),
    Map.findMapAll(
        (value) => value > 1,
        (value) => value * 10,
    ),
); // Map(3) { "a" => 1, "b" => 20, "c" => 30 }
```

:::
