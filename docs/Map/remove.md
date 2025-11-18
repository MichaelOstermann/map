# remove

```ts
function Map.remove(map, key)
```

## Example

::: code-group

```ts [data-first]
import { Map } from "@monstermann/map";

Map.remove(
    new Map([
        ["a", 1],
        ["b", 2],
    ]),
    "a",
); // Map(1) { "b" => 2 }

Map.remove(
    new Map([
        ["a", 1],
        ["b", 2],
    ]),
    "c",
); // Map(2) { "a" => 1, "b" => 2 }
```

```ts [data-last]
import { Map } from "@monstermann/map";

pipe(
    new Map([
        ["a", 1],
        ["b", 2],
    ]),
    Map.remove("a"),
); // Map(1) { "b" => 2 }

pipe(
    new Map([
        ["a", 1],
        ["b", 2],
    ]),
    Map.remove("c"),
); // Map(2) { "a" => 1, "b" => 2 }
```

:::
