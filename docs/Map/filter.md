# filter

```ts
function Map.filter<K, V>(
    target: ReadonlyMap<K, V>,
    predicate: (
        value: NoInfer<V>,
        key: NoInfer<K>,
        target: ReadonlyMap<K, V>,
    ) => boolean,
): ReadonlyMap<K, V>
```

Returns a new map containing only entries that satisfy the predicate function.

## Example

::: code-group

```ts [data-first]
import { Map } from "@monstermann/map";

Map.filter(
    new Map([
        ["a", 1],
        ["b", 2],
        ["c", 3],
    ]),
    (value) => value > 1,
); // Map(2) { "b" => 2, "c" => 3 }
```

```ts [data-last]
import { Map } from "@monstermann/map";

pipe(
    new Map([
        ["a", 1],
        ["b", 2],
        ["c", 3],
    ]),
    Map.filter((value) => value > 1),
); // Map(2) { "b" => 2, "c" => 3 }
```

:::
