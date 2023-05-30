import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/": [
    "/",
    {
      icon: "fa-solid fa-book",
      text: "指南",
      prefix: "guide/",
      link: "guide/join",
      children: [
          "join",
          "command",
          "robot",
          {
            icon: "fa-solid fa-lightbulb",
            text: "特色",
            prefix: "feature/",
            children: "structure",
          },
          {
            icon: "fa-solid fa-earth-americas",
            text: "世界",
            prefix: "worlds/",
            children: "structure",
          },
        ],
    },
    "rule/",
    "manager",
  ],
});
