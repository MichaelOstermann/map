# mapOr

```ts
function Map.mapOr(map, key, transform, or)
```

## Example

::: code-group

```ts [data-first]
import { Map } from "@monstermann/map";

Map.mapOr(
    new Map([
        ["a", 1],
        ["b", 2],
    ]),
    "a",
    (value) => value * 2,
    null,
); // Map(2) { "a" => 2, "b" => 2 }

Map.mapOr(
    new Map([
        ["a", 1],
        ["b", 2],
    ]),
    "c",
    (value) => value * 2,
    null,
); // null
```

```ts [data-last]
import { Map } from "@monstermann/map";

pipe(
    new Map([
        ["a", 1],
        ["b", 2],
    ]),
    Map.mapOr("a", (value) => value * 2, null),
); // Map(2) { "a" => 2, "b" => 2 }

pipe(
    new Map([
        ["a", 1],
        ["b", 2],
    ]),
    Map.mapOr("c", (value) => value * 2, null),
); // null
```

:::
