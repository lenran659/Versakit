# Badge 徽标

按钮和图标上的数字或状态标记。

## 基础用法

可以通过设置 `type` 属性改变徽标类型。
数量值可接受 `Number` 或 `String。`

<demo vue="./example/base.vue"></demo>

## 最大值徽标

当徽标中数字大于 `99` 时候会显示 `99+`，使用数字徽标需将 `type` 属性设置为 `number`

<demo vue="./example/number.vue"></demo>

## Badge API

### Badge 属性

| 属性    | 说明           | 类型                                | 默认值 |
| ------- | -------------- | ----------------------------------- | ------ |
| `type`  | 指定徽标的类型 | `enum`<Tool value="number,string"/> | number |
| `value` | 徽标显示的值   | `number` / `string`                 | -      |
