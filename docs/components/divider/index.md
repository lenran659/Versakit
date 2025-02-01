# Divider 分割线

区隔内容的分割线。

## 基础用法

对不同段落的文本进行分割。

<demo vue="./example/base.vue"></demo>

## 虚线

您可以设置分隔符的样式。

<demo vue="./example/style.vue"></demo>

## 设置文案

可以在分割线上自定义文本内容。

<demo vue="./example/text.vue"></demo>

## 垂直分割线

垂直方向的分割线。

<demo vue="./example/vertical.vue"></demo>

## Divider API

| 属性        | 说明         | 类型                                      | 默认值       |
| ----------- | ------------ | ----------------------------------------- | ------------ |
| `direction` | 分隔线的方向 | `enum`<Tool value="horizontal,vertical"/> | `horizontal` |
| `position`  | 分割线的位置 | `enum`<Tool value="center,right,left"/>   | `left`       |
| `line`      | 分隔线的虚实 | `enum`<Tool value="dashed,solid"/>        | `solid`      |
