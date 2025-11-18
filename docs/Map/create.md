# create

`create(iterable?)`

Creates a new Map, an alias for `new Map(iterable?)`.

## Example

```ts
import { Map } from "@monstermann/map"

Map.create([
    ["a", 1],
    ["b", 2],
    ["c", 3],
]); // Map(2) { "a" => 1, "b" => 2, "c" => 3 }
```
