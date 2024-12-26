# TextArea 文本域

多行纯文本编辑控件，适用于评论或反馈表单中的一段意见。

## 基础用法

用于多行输入。

<demo vue="../../example/textarea/base.vue"></demo>

## 禁用状态

使用 `disabled` 属性设置不可点击。

<demo vue="../../example/textarea/disabled.vue"></demo>

## 限制长度

使用 `maxlength` 属性限制最大输入长度。

<demo vue="../../example/textarea/maxlength.vue"></demo>

## Textarea API

### Textarea 属性

| 属性                     | 说明           | 类型      | 默认值 |
| ------------------------ | -------------- | --------- | ------ |
| `disabled`               | 是否禁用       | `boolean` | false  |
| `placeholder	`            | 输入框占位文本 | `string`  | -      |
| `v-model` / `modelValue` | 绑定值         | `string`  | -      |
| `maxlength`              | 最大值         | `string`  | -      |
