import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  { text: "指南", icon: "fa-solid fa-book", link: "/guide/join" },
  { text: "规则", icon: "fa-solid fa-scale-balanced", link: "/rule/" },
  {
    text: "联系我们",
    icon: "fa-solid fa-phone",
    children: [
      {
        text: "QQ群",
        icon: "fa-brands fa-qq",
        link: "https://jq.qq.com/?_wv=1027&k=HSSe2Rxe",
      },
      {
        text: "QQ频道",
        icon: "fa-solid fa-hashtag",
        link: "https://pd.qq.com/s/dmq41qk2f",
      },
      {
        text: "KOOK",
        icon: "fa-brands fa-kickstarter",
        link: "https://kook.top/qJd74f",
      },
    ],
  },
]);
