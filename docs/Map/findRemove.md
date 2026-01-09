# findRemove

```ts
function Map.findRemove<K, V>(
    target: ReadonlyMap<K, V>,
    predicate: (
        value: NoInfer<V>,
        key: NoInfer<K>,
        target: ReadonlyMap<K, V>,
    ) => boolean,
): ReadonlyMap<K, V>
```

Finds the first entry in the map that satisfies the provided `predicate` function and removes it, returning a new map without the removed entry.

## Example

::: code-group

```ts [data-first]
import { Map } from "@monstermann/map";

Map.findRemove(
    new Map([
        ["a", 1],
        ["b", 2],
        ["c", 3],
    ]),
    (value) => value > 1,
); // Map(2) { "a" => 1, "c" => 3 }
```

```ts [data-last]
import { Map } from "@monstermann/map";

pipe(
    new Map([
        ["a", 1],
        ["b", 2],
        ["c", 3],
    ]),
    Map.findRemove((value) => value > 1),
); // Map(2) { "a" => 1, "c" => 3 }
```

:::
