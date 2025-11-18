# reject

```ts
function Map.reject(map, by)
```

## Example

::: code-group

```ts [data-first]
import { Map } from "@monstermann/map";

Map.reject(
    new Map([
        ["a", 1],
        ["b", 2],
        ["c", 3],
    ]),
    (value) => value > 1,
); // Map(1) { "a" => 1 }
```

```ts [data-last]
import { Map } from "@monstermann/map";

pipe(
    new Map([
        ["a", 1],
        ["b", 2],
        ["c", 3],
    ]),
    Map.reject((value) => value > 1),
); // Map(1) { "a" => 1 }
```

:::
