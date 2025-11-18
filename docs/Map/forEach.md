# forEach

`forEach(map, fn)`

Executes `fn` for each entry in `map` and returns the original map.

## Example

::: code-group

```ts [data-first]
import { Map } from "@monstermann/map"

Map.forEach(
    new Map([
        ["a", 1],
        ["b", 2],
    ]),
    (value, key) => console.log(key, value),
); // Map(2) { "a" => 1, "b" => 2 }
```

```ts [data-last]
import { Map } from "@monstermann/map"

pipe(
    new Map([
        ["a", 1],
        ["b", 2],
    ]),
    Map.forEach((value, key) => console.log(key, value)),
); // Map(2) { "a" => 1, "b" => 2 }
```

:::
