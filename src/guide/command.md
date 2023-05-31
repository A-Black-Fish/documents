---
title: 命令
icon: fa-solid fa-terminal
prev: join
next: ./feature/skin
---

::: tip 说明

`<>` 为必须参数

`[]` 为非必须参数

:::

## 账号类

#### **/register <密码> <重复密码>**

> 别名: /reg

注册账号

#### **/login <密码>**

> 别名: /l

登录账号

#### **/unregister <密码>**

> 别名: /unreg

注销账号

#### **/changepassword <旧密码> <新密码>**

> 别名: /cp

更改密码

## 传送类

#### **/tpahere <玩家>**

邀请玩家传送到自己

#### **/tpa <玩家>**

请求传送到指定玩家

#### **/tpaccept [玩家]**

> 别名: /tpyes

同意某人的传送申请

#### **/tpdecline [玩家]**

> 别名: /tpdeny, /tpno

拒绝某人的传送申请

#### **/rtp**

在当前世界随机传送

#### **/tpignore**

开关传送请求免打扰

#### **/tpaall**

邀请所有人传送到你这里

#### **/back**

返回上一个位置

## 家类

#### **/home [家名]**

如果指定 `家名` 则传送到指定家, `没有指定`或`指定的家不存在`则输出家的列表

#### **/sethome <家名>**

在当前位置设置一个指定名字的家

#### **/homelist [页码]**

> 别名: /homes

输出家的列表

#### **/delhome <家名>**

删除指定的家

#### **/edithome <家名> [rename/description/relocate/privacy] [args]**

::: warning 此命令的功能建议改用/homes命令实现
:::

编辑指定的家

#### **/publichome [玩家名.家名]**

> 别名: /phome

如果指定 `[玩家名.家名]` 则传送到对应的公共家, `没有指定`或`指定的公共家不存在`则输出公共家的列表

::: info 快速输入

这个命令的TAB补全比较特别

你要输入公共家的命名而不是公共家的持有者

输入公共家的持有者不会给你返回tab补全

比如一个公共家的完整名是`xiaobug.winery`

应输入winery

:::

#### **/publichomelist [页码]**

> 别名: /phomelist, /phomes

输出公共家列表

## 趣味类

#### **/sit**

> 别名: /gsit

坐在当前方块上

(当你/playertoggle开启时, 楼梯和半砖和地毯可以直接右键坐下)

#### **/lay**

> 别名: /glay

躺在当前方块上(头为目前站立位, 脚为视角方向的前一格)

#### **/bellyflop**

> 别名: /gbellyflop

跳水

#### **/spin**

> 别名: /gsipn

快速旋转

#### **/crawl**

> 别名: /gcrawl

爬行

#### **/sit toggle**

> 别名: /playertoggle

开关右键坐下

#### **/music**

> 别名: /jukebox

::: warning 警告

此功能极度依赖网速, 如果当前你的网络状态较差请不要使用

:::

打开红石音乐菜单

#### **/hat**

把手上的东西带到头上(前提头上无东西)

## 功能类

#### **/mik**

::: tip 也可以使用<kbd>Ctrl</kbd>+<kbd>F</kbd>快捷键打开
:::

打开服务器菜单

#### **/watch**

观看玩家(实验性)

#### **/pvp**

开关PVP状态

#### **/skin**

皮肤主命令(支持使用正版玩家皮肤, 自定义url皮肤链接)

- 查看详情 [皮肤](./feature/skin)