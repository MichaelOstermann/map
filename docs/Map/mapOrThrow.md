# mapOrThrow

`mapOrThrow(map, key, transform)`

Transforms the value at `key` in `map` using `transform`, throwing an error if the key doesn't exist.

## Example

::: code-group

```ts [data-first]
import { Map } from "@monstermann/map"

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
import { Map } from "@monstermann/map"

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
