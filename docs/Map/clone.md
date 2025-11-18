# clone

`clone(target)`

Creates a shallow copy of a `Map`, unless marked as mutable with `markAsMutable` inside a mutation context (see [@monstermann/remmi](https://michaelostermann.github.io/remmi/#clonearray-array)).

## Example

::: code-group

```ts [data-first]
import { Map } from "@monstermann/map"

const original = new Map([
    ["a", 1],
    ["b", 2],
]);

const copy = Map.clone(original); // Map { 'a' => 1, 'b' => 2 }
```

```ts [data-last]
import { Map } from "@monstermann/map"

const original = new Map([
    ["a", 1],
    ["b", 2],
]);

const copy = pipe(original, Map.clone()); // Map { 'a' => 1, 'b' => 2 }
```

:::
