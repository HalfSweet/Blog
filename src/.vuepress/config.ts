import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "HalfSweet's Blog",
  description: "半糖的博客",

  theme,

  bundler: viteBundler({
    viteOptions: {},
    vuePluginOptions: {},
  }),

  // Enable it with pwa
  // shouldPrefetch: false,
});
