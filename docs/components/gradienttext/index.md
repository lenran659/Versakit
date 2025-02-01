# GradientText 渐变文字

用于展示渐变色的文字。

## 基础用法

它有不同的类型。

<demo vue="./example/base.vue"></demo>

## 尺寸

它可以自定义数值，也可以写规定尺寸。

<demo vue="./example/size.vue"></demo>

## 自定义颜色

靠你的天马行空。

<demo vue="./example/color.vue"></demo>

## GradientText API

### GradientText 属性

| 属性       | 说明                                       | 类型              | 默认值    |
| ---------- | ------------------------------------------ | ----------------- | --------- |
| `type`     | 渐变文字的类型                             | `string`          | primary   |
| `size`     | 文字大小（当不指定单位时，默认单位: `px`） | `number` `string` | undefined |
| `gradient` | 自定义渐变色                               | `object`          | undefined |

### GradientText 插槽

| 插槽名    | 说明           |
| --------- | -------------- |
| `default` | 渐变文字的内容 |
