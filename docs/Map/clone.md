# clone

```ts
function Map.clone(target)
```

## Example

::: code-group

```ts [data-first]
import { Map } from "@monstermann/map";

const original = new Map([
    ["a", 1],
    ["b", 2],
]);

const copy = Map.clone(original); // Map { 'a' => 1, 'b' => 2 }
```

```ts [data-last]
import { Map } from "@monstermann/map";

const original = new Map([
    ["a", 1],
    ["b", 2],
]);

const copy = pipe(original, Map.clone()); // Map { 'a' => 1, 'b' => 2 }
```

:::
