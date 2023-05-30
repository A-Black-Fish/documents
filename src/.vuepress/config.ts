import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { searchProPlugin } from "vuepress-plugin-search-pro";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "米客",
      description: "Minecraft Java版纯净公益生存服",
    },
    "/en/": {
      lang: "en-US",
      title: "Mik",
      description: "Minecraft Java version of pure public welfare survival server",
    },
  },

  theme,

  shouldPrefetch: false,
  
  plugins: [
    searchProPlugin({
      // 索引全部内容
      indexContent: true,
    }),
  ],
});
