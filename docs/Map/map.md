# map

```ts
function Map.map<K, V>(
    target: ReadonlyMap<K, V>,
    key: NoInfer<K>,
    transform: (
        value: NoInfer<V>,
        key: NoInfer<K>,
        target: ReadonlyMap<K, V>,
    ) => V,
): ReadonlyMap<K, V>
```

Transforms the value at the specified key using the provided function. Returns the original map if the key doesn't exist.

## Example

::: code-group

```ts [data-first]
import { Map } from "@monstermann/map";

Map.map(
    new Map([
        ["a", 1],
        ["b", 2],
    ]),
    "a",
    (value) => value * 2,
); // Map(2) { "a" => 2, "b" => 2 }

Map.map(
    new Map([
        ["a", 1],
        ["b", 2],
    ]),
    "c",
    (value) => value * 2,
); // Map(2) { "a" => 1, "b" => 2 }
```

```ts [data-last]
import { Map } from "@monstermann/map";

pipe(
    new Map([
        ["a", 1],
        ["b", 2],
    ]),
    Map.map("a", (value) => value * 2),
); // Map(2) { "a" => 2, "b" => 2 }

pipe(
    new Map([
        ["a", 1],
        ["b", 2],
    ]),
    Map.map("c", (value) => value * 2),
); // Map(2) { "a" => 1, "b" => 2 }
```
