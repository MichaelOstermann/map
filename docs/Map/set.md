# set

`set(map, key, value)`

Sets the `value` for the specified `key` in `map`, returning a new map if the value changes.

## Example

::: code-group

```ts [data-first]
import { Map } from "@monstermann/map"

Map.set(
    new Map([
        ["a", 1],
        ["b", 2],
    ]),
    "a",
    10,
); // Map(2) { "a" => 10, "b" => 2 }

Map.set(
    new Map([
        ["a", 1],
        ["b", 2],
    ]),
    "c",
    3,
); // Map(3) { "a" => 1, "b" => 2, "c" => 3 }
```

```ts [data-last]
import { Map } from "@monstermann/map"

pipe(
    new Map([
        ["a", 1],
        ["b", 2],
    ]),
    Map.set("a", 10),
); // Map(2) { "a" => 10, "b" => 2 }

pipe(
    new Map([
        ["a", 1],
        ["b", 2],
    ]),
    Map.set("c", 3),
); // Map(3) { "a" => 1, "b" => 2, "c" => 3 }
```

:::
