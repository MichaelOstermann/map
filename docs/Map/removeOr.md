# removeOr

```ts
function Map.removeOr(map, key, or)
```

## Example

::: code-group

```ts [data-first]
import { Map } from "@monstermann/map";

Map.removeOr(
    new Map([
        ["a", 1],
        ["b", 2],
    ]),
    "a",
    null,
); // Map(1) { "b" => 2 }

Map.removeOr(
    new Map([
        ["a", 1],
        ["b", 2],
    ]),
    "c",
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
    Map.removeOr("a", null),
); // Map(1) { "b" => 2 }

pipe(
    new Map([
        ["a", 1],
        ["b", 2],
    ]),
    Map.removeOr("c", null),
); // null
```

:::
