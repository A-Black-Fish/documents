---
title: 颜色
prev: chat
next: lock
---

目前已支持使用位置: `聊天` `告示牌` `铁砧` `书`

## 普通颜色

> 格式: & + (0-9 or a-f)
>
> 示例: &atext

::: tip 有用的链接
格式化代码 https://wiki.biligame.com/mc/%E6%A0%BC%E5%BC%8F%E5%8C%96%E4%BB%A3%E7%A0%81
:::

|代码|名称|英文名|
|---|---|---|
|&0|黑色|black|
|&1|深蓝色|dark_blue|
|&2|深绿色|dark_green|
|&3|湖蓝色|dark_aqua|
|&4|深红色|dark_red|
|&5|紫色|dark_purple|
|&6|金色|gold|
|&7|灰色|gray|
|&8|深灰色|dark_gray|
|&9|蓝色|blue|
|&a|绿色|green|
|&b|天蓝色|aqua|
|&c|红色|red|
|&d|粉红色|light_purple|
|&e|黄色|yellow|
|&f|白色|white|

|代码|格式效果|
|---|---|
|§k|随机字符|
|§l|粗体|
|§m|删除线|
|§n|下划线|
|§o|斜体|
|§r|重置文字样式|

## HEX

> 格式: & + HEX
>
> 示例: &#FFAA00 (这个相当于&6)

## 渐变色

> 格式: `<g(or 'gradient')#<speed(ignorable)>:<hex range>>test<loop(or 'l')>`
>
> 示例: `<g#2:#ffffff:#bbbbbb:#cccccc:#777777>text<l> and <g:#ffffff:#bbbbbb>text`

## 彩虹色

> 格式: `<r(or 'rainbow')#<speed(ignorable)>:<saturation(ignorable)>:<brightness(ignorable)>>test<loop(or 'l')>`
>
> 示例: `<r:0.4>text`
