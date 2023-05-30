感谢Encinet提供的源码（MIT）

[Encinet/mikwiki: source (github.com)](https://github.com/Encinet/mikwiki) 原项目

# Wiki

https://mikwiki.netlify.app/

https://encinet.github.io/mikwiki/

## 命令

- `pnpm docs:dev` 启动开发服务器
- `pnpm docs:build` 构建项目并输出
- `pnpm docs:clean-dev` 清除缓存并启动开发服务器

## 升级

```sh
pnpm add @vuepress/client@next vuepress@next vuepress-theme-hope@next && pnpm i && pnpm up
```

> 注意
>
> 任何以 @vuepress/plugin- 开头的官方插件应该和 VuePress 保持相同版本。
>
> 如果你使用了其他第三方插件，请确保它兼容你要升级到的 VuePress 版本。
