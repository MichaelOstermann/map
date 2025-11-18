# forEach

```ts
function Map.forEach(map, fn)
```

## Example

::: code-group

```ts [data-first]
import { Map } from "@monstermann/map";

Map.forEach(
    new Map([
        ["a", 1],
        ["b", 2],
    ]),
    (value, key) => console.log(key, value),
); // Map(2) { "a" => 1, "b" => 2 }
```

```ts [data-last]
import { Map } from "@monstermann/map";

pipe(
    new Map([
        ["a", 1],
        ["b", 2],
    ]),
    Map.forEach((value, key) => console.log(key, value)),
); // Map(2) { "a" => 1, "b" => 2 }
```

:::
