# Ripple 水波纹

## 基本用法

你可以在组件内通过v-ripple属性，让元素获得水波纹效果。

<demo vue="./example/base.vue" />

## 自定义颜色

此外，你还可以自定义水波纹的样式，以下是几个水波纹颜色的样式修改示例。

<demo vue="./example/color.vue" />

## Ripple API

### Ripple 属性

| 属性       | 说明                       | 类型     | 默认值                                |
| ---------- | -------------------------- | -------- | ------------------------------------- |
| `v-ripple` | 设置水波纹的颜色，持续时间 | `string` | `{ duration: 800, color: '#cccccc' }` |
