# compact

```ts
function Map.compact(map)
```

## Example

::: code-group

```ts [data-first]
import { Map } from "@monstermann/map";

Map.compact(
    new Map([
        ["a", 1],
        ["b", null],
        ["c", undefined],
    ]),
); // Map(1) { "a" => 1 }
```

```ts [data-last]
import { Map } from "@monstermann/map";

pipe(
    new Map([
        ["a", 1],
        ["b", null],
        ["c", undefined],
    ]),
    Map.compact(),
); // Map(1) { "a" => 1 }
```

:::
