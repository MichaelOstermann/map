import { defineConfig } from "@monstermann/barrels"
import { flat } from "@monstermann/barrels-flat"
import { namespace } from "@monstermann/barrels-namespace"

export default defineConfig([
    namespace({
        entries: "./packages/map/src/Map",
    }),
    flat({
        entries: "./packages/map/src",
        include: ["*", "Map/index.js"],
    }),
])
