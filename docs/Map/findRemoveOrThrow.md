# findRemoveOrThrow

```ts
function Map.findRemoveOrThrow<K, V>(
    target: ReadonlyMap<K, V>,
    predicate: (
        value: NoInfer<V>,
        key: NoInfer<K>,
        target: ReadonlyMap<K, V>,
    ) => boolean,
): ReadonlyMap<K, V>
```

Finds the first entry in the map that satisfies the provided `predicate` function and removes it, returning a new map without the removed entry, or throws an error if no entry is found.

## Example

::: code-group

```ts [data-first]
import { Map } from "@monstermann/map";

Map.findRemoveOrThrow(
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
    Map.findRemoveOrThrow((value) => value > 1),
); // Map(2) { "a" => 1, "c" => 3 }
```

:::
