# Descriptions 详细列表

列表形式展示多个字段。

## 基础用法

<demo vue="../../example/descriptions/base.vue"></demo>

## 插槽用法

<demo vue="../../example/descriptions/header.vue"></demo>

## 边框用法

可以通过设置 `border` 属性来设置详细列表是否存在边框

<demo vue="../../example/descriptions/border.vue"></demo>

## Descriptions API

### Descriptions 属性

| 属性     | 说明                  | 类型      | 默认值 |
| -------- | --------------------- | --------- | ------ |
| `label`  | 小标题                | `string`  | -      |
| `value`  | 内容                  | `string`  | -      |
| `title`  | Descriptions 的标题   | `string`  | -      |
| `extra`  | Descriptions 的副标题 | `string`  | -      |
| `border` | 是否存在边框          | `boolean` | true   |

### Descriptions 插槽

| 插槽名  | 说明                  |
| ------- | --------------------- |
| `title` | Descriptions 的标题   |
| `extra` | Descriptions 的副标题 |
