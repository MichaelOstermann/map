# mapEach

```ts
function Map.mapEach(map, fn)
```

## Example

::: code-group

```ts [data-first]
import { Map } from "@monstermann/map";

Map.mapEach(
    new Map([
        ["a", 1],
        ["b", 2],
    ]),
    (value, key) => value * 2,
); // Map(2) { "a" => 2, "b" => 4 }
```

```ts [data-last]
import { Map } from "@monstermann/map";

pipe(
    new Map([
        ["a", 1],
        ["b", 2],
    ]),
    Map.mapEach((value, key) => value * 2),
); // Map(2) { "a" => 2, "b" => 4 }
```

:::
