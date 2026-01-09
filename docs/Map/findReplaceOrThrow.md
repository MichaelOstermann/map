# findReplaceOrThrow

```ts
function Map.findReplaceOrThrow<K, V>(
    target: ReadonlyMap<K, V>,
    predicate: (
        value: NoInfer<V>,
        key: NoInfer<K>,
        target: ReadonlyMap<K, V>,
    ) => boolean,
    replacement: NoInfer<V>,
): ReadonlyMap<K, V>
```

Finds the first entry in the map that satisfies the provided `predicate` function and replaces its value with `replacement`, returning a new map with the replaced value, or throws an error if no entry is found.

## Example

::: code-group

```ts [data-first]
import { Map } from "@monstermann/map";

Map.findReplaceOrThrow(
    new Map([
        ["a", 1],
        ["b", 2],
        ["c", 3],
    ]),
    (value) => value > 1,
    99,
); // Map(3) { "a" => 1, "b" => 99, "c" => 3 }
```

```ts [data-last]
import { Map } from "@monstermann/map";

pipe(
    new Map([
        ["a", 1],
        ["b", 2],
        ["c", 3],
    ]),
    Map.findReplaceOrThrow((value) => value > 1, 99),
); // Map(3) { "a" => 1, "b" => 99, "c" => 3 }
```

:::
