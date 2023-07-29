import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "HalfSweet's Blog",
  description: "半糖的博客",

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
