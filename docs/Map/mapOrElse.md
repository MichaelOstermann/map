# mapOrElse

`mapOrElse(map, key, transform, orElse)`

Transforms the value at `key` in `map` using `transform`, calling `orElse` with the map if the key doesn't exist.

## Example

::: code-group

```ts [data-first]
import { Map } from "@monstermann/map"

Map.mapOrElse(
    new Map([
        ["a", 1],
        ["b", 2],
    ]),
    "a",
    (value) => value * 2,
    () => null,
); // Map(2) { "a" => 2, "b" => 2 }

Map.mapOrElse(
    new Map([
        ["a", 1],
        ["b", 2],
    ]),
    "c",
    (value) => value * 2,
    (map) => map.size,
); // 2
```

```ts [data-last]
import { Map } from "@monstermann/map"

pipe(
    new Map([
        ["a", 1],
        ["b", 2],
    ]),
    Map.mapOrElse(
        "a",
        (value) => value * 2,
        () => null,
    ),
); // Map(2) { "a" => 2, "b" => 2 }

pipe(
    new Map([
        ["a", 1],
        ["b", 2],
    ]),
    Map.mapOrElse(
        "c",
        (value) => value * 2,
        (map) => map.size,
    ),
); // 2
```

:::
