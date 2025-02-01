# Flex 弹性布局

## 基本使用

<demo vue="./example/base.vue" />

## 对齐方式

<demo vue="./example/align.vue" />

## 间隙设置

<demo vue="./example/gap.vue" />

## 自动换行

<demo vue="./example/wrap.vue" />

## Flex API

| 属性       | 说明                                                   | 类型                                                                                             | 默认值 |
| ---------- | ------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------ |
| `vertical` | `flex` 主轴的方向是否垂直                              | `boolean`                                                                                        | false  |
| `wrap`     | 设置元素单行显示还是多行显示；参考 `flex-wrap`         | `enum`<Tool value="nowrap,wrap,wrap-reverse" />                                                  | nowrap |
| `justify`  | 设置元素在主轴方向上的对齐方式；参考 `justify-content` | `enum`<Tool value="normal,flex-start,center,flex-end,space-between,space-around,space-evenly" /> | normal |
| `align`    | 设置元素在交叉轴方向上的对齐方式；参考 `align-items`   | `enum`<Tool value="normal,flex-start,center,flex-end" />                                         | normal |
| `gap`      | 设置网格之间的间隙，数组时表示: `[水平间距, 垂直间距]` | `enum`<Tool value="number,number[],small,middle,large" />                                        | middle |
