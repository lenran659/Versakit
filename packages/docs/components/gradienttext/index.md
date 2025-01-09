# GradientText 渐变文字

用于展示渐变色的文字。

## 基础用法

它有不同的类型。

<demo vue="../../example/gradienttext/base.vue"></demo>

## 尺寸

<demo vue="../../example/gradienttext/size.vue"></demo>

## GradientText API

### GradientText 属性

| 属性   | 说明                                       | 类型              | 默认值    |
| ------ | ------------------------------------------ | ----------------- | --------- |
| `type` | 渐变文字的类型                             | `string`          | primary   |
| `size` | 文字大小（当不指定单位时，默认单位: `px`） | `number` `string` | undefined |

### GradientText 插槽

| 插槽名    | 说明           |
| --------- | -------------- |
| `default` | 渐变文字的内容 |
