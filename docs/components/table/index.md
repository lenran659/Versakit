# Table 表格

展示行列数据。

## 基础用法

简单的表格

<demo vue="./example/base.vue"></demo>

## 带斑马纹表格

使用带斑马纹的表格，可以更容易区分出不同行的数据。

`stripe` 可以创建带斑马纹的表格。 如果 `true`, 表格将会带有斑马纹。

<demo vue="./example/stripe.vue"></demo>

## 带边框表格​

默认情况下，Table 组件是不具有竖直方向的边框的， 如果需要，可以使用 `border` 属性，把该属性设置为 `true` 即可启用。

<demo vue="./example/border.vue"></demo>

## Table API

### Table 属性

| 属性       | 说明           | 类型      | 默认值 |
| ---------- | -------------- | --------- | ------ |
| `bordered` | 是否显示边框   | `boolean` | true   |
| `stripe`   | 是否显示斑马纹 | `boolean` | false  |

### Table 插槽

| 名称 | 说明 |
| ---- | ---- |
