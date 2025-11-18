# filter

`filter(map, predicate)`

Filters `map` by keeping only the entries where `predicate` returns true for the value.

## Example

::: code-group

```ts [data-first]
import { Map } from "@monstermann/map"

Map.filter(
    new Map([
        ["a", 1],
        ["b", 2],
        ["c", 3],
    ]),
    (value) => value > 1,
); // Map(2) { "b" => 2, "c" => 3 }
```

```ts [data-last]
import { Map } from "@monstermann/map"

pipe(
    new Map([
        ["a", 1],
        ["b", 2],
        ["c", 3],
    ]),
    Map.filter((value) => value > 1),
); // Map(2) { "b" => 2, "c" => 3 }
```

:::
