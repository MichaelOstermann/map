import { defineConfig } from "vitepress"
import { groupIconMdPlugin, groupIconVitePlugin } from "vitepress-plugin-group-icons"

export default defineConfig({
    base: "/map/",
    description: "Functional utilities for maps.",
    title: "map",
    markdown: {
        theme: {
            dark: "catppuccin-macchiato",
            light: "github-light-default",
        },
        config(md) {
            md.use(groupIconMdPlugin)
        },
    },
    themeConfig: {
        aside: false,
        outline: "deep",
        docFooter: {
            next: false,
            prev: false,
        },
        search: {
            provider: "local",
        },
        sidebar: [
            {
                base: "/Map/",
                text: "Map",
                items: [
                    { link: "create", text: "create" },
                    { link: "clone", text: "clone" },
                    { link: "compact", text: "compact" },
                    { link: "filter", text: "filter" },
                    { link: "find", text: "find" },
                    { link: "findOr", text: "findOr" },
                    { link: "findOrElse", text: "findOrElse" },
                    { link: "findOrThrow", text: "findOrThrow" },
                    { link: "findMap", text: "findMap" },
                    { link: "findMapAll", text: "findMapAll" },
                    { link: "findMapOr", text: "findMapOr" },
                    { link: "findMapOrElse", text: "findMapOrElse" },
                    { link: "findMapOrThrow", text: "findMapOrThrow" },
                    { link: "forEach", text: "forEach" },
                    { link: "get", text: "get" },
                    { link: "getOr", text: "getOr" },
                    { link: "getOrElse", text: "getOrElse" },
                    { link: "getOrThrow", text: "getOrThrow" },
                    { link: "has", text: "has" },
                    { link: "hasAll", text: "hasAll" },
                    { link: "hasAny", text: "hasAny" },
                    { link: "hasNone", text: "hasNone" },
                    { link: "is", text: "is" },
                    { link: "isEmpty", text: "isEmpty" },
                    { link: "isShallowEqual", text: "isShallowEqual" },
                    { link: "map", text: "map" },
                    { link: "mapEach", text: "mapEach" },
                    { link: "mapOr", text: "mapOr" },
                    { link: "mapOrElse", text: "mapOrElse" },
                    { link: "mapOrThrow", text: "mapOrThrow" },
                    { link: "reject", text: "reject" },
                    { link: "remove", text: "remove" },
                    { link: "removeAll", text: "removeAll" },
                    { link: "removeOr", text: "removeOr" },
                    { link: "removeOrElse", text: "removeOrElse" },
                    { link: "removeOrThrow", text: "removeOrThrow" },
                    { link: "set", text: "set" },
                ],
            },
        ],
        socialLinks: [
            { icon: "github", link: "https://github.com/MichaelOstermann/map" },
        ],
    },
    vite: {
        plugins: [
            groupIconVitePlugin(),
        ],
    },
})
