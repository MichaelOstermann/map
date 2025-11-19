# is

```ts
function Map.is(target)
```

## Example

::: code-group

```ts [data-first]
import { Map } from "@monstermann/map";

Map.is(new Map()); // true
Map.is({}); // false
Map.is([]); // false
```

```ts [data-last]
import { Map } from "@monstermann/map";

pipe(new Map(), Map.is()); // true
pipe({}, Map.is()); // false
pipe([], Map.is()); // false
```

:::
