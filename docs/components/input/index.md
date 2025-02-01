# Input 输入框

## 基础使用

通过鼠标或键盘输入字符.

<demo vue="./example/base.vue"></demo>

## 禁用状态

通过 `disabled` 属性指定是否禁用 input 组件

<demo vue="./example/disabled.vue"></demo>

## Input API

### Input 属性

| 属性          | 说明                           | 类型      | 默认值 |
| ------------- | ------------------------------ | --------- | ------ |
| `placeholder` | 输入框中未输入时默认显示的文字 | `string`  | -      |
| `modelValue`  | 输入框输入内容绑定的值         | `string`  | -      |
| `type`        | 输入框的类型                   | `string`  | text   |
| `disabled`    | 是否禁用输入框                 | `boolean` | false  |
