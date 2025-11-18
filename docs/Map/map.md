# map

`map(map, key, transform)`

Transforms the value at `key` in `map` using `transform`, returning a new map if the value changes.

## Example

::: code-group

```ts [data-first]
import { Map } from "@monstermann/map"

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
import { Map } from "@monstermann/map"

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
