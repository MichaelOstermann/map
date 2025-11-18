# isEmpty

`isEmpty(map)`

Checks if `map` is empty (has no entries).

## Example

::: code-group

```ts [data-first]
import { Map } from "@monstermann/map"

Map.isEmpty(new Map()); // true
Map.isEmpty(new Map([["a", 1]])); // false
```

```ts [data-last]
import { Map } from "@monstermann/map"

pipe(new Map(), Map.isEmpty()); // true
pipe(new Map([["a", 1]]), Map.isEmpty()); // false
```

:::
