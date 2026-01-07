# mapOrThrow

```ts
function Map.mapOrThrow<K, V>(
    target: ReadonlyMap<K, V>,
    key: NoInfer<K>,
    transform: (
        value: NoInfer<V>,
        key: NoInfer<K>,
        target: ReadonlyMap<K, V>,
    ) => V,
): ReadonlyMap<K, V>
```

Transforms the value at the specified key using the provided function, or throws an error if the key doesn't exist.

## Example

::: code-group

```ts [data-first]
import { Map } from "@monstermann/map";

Map.mapOrThrow(
    new Map([
        ["a", 1],
        ["b", 2],
    ]),
    "a",
    (value) => value * 2,
); // Map(2) { "a" => 2, "b" => 2 }

Map.mapOrThrow(
    new Map([
        ["a", 1],
        ["b", 2],
    ]),
    "c",
    (value) => value * 2,
); // throws FnError
```

```ts [data-last]
import { Map } from "@monstermann/map";

pipe(
    new Map([
        ["a", 1],
        ["b", 2],
    ]),
    Map.mapOrThrow("a", (value) => value * 2),
); // Map(2) { "a" => 2, "b" => 2 }

pipe(
    new Map([
        ["a", 1],
        ["b", 2],
    ]),
    Map.mapOrThrow("c", (value) => value * 2),
); // throws FnError
```

:::
