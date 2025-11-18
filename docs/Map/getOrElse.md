# getOrElse

`getOrElse(map, key, orElse)`

Gets the value associated with `key` from `map`, calling `orElse` with the map if the key doesn't exist or the value is nullable.

## Example

::: code-group

```ts [data-first]
import { Map } from "@monstermann/map"

Map.getOrElse(
    new Map([
        ["a", 1],
        ["b", null],
    ]),
    "a",
    () => 0,
); // 1

Map.getOrElse(
    new Map([
        ["a", 1],
        ["b", null],
    ]),
    "b",
    () => 0,
); // 0

Map.getOrElse(
    new Map([
        ["a", 1],
        ["b", null],
    ]),
    "c",
    (map) => map.size,
); // 2
```

```ts [data-last]
import { Map } from "@monstermann/map"

pipe(
    new Map([
        ["a", 1],
        ["b", null],
    ]),
    Map.getOrElse("a", () => 0),
); // 1

pipe(
    new Map([
        ["a", 1],
        ["b", null],
    ]),
    Map.getOrElse("b", () => 0),
); // 0

pipe(
    new Map([
        ["a", 1],
        ["b", null],
    ]),
    Map.getOrElse("c", (map) => map.size),
); // 2
```

:::
