# isMap

`isMap(target)`

Checks if `target` is a Map instance.

## Example

::: code-group

```ts [data-first]
import { Map } from "@monstermann/map"

Map.isMap(new Map()); // true
Map.isMap({}); // false
Map.isMap([]); // false
```

```ts [data-last]
import { Map } from "@monstermann/map"

pipe(new Map(), Map.isMap()); // true
pipe({}, Map.isMap()); // false
pipe([], Map.isMap()); // false
```

:::
