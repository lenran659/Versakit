# Backtop 回到顶部

一个返回页面顶部的操作按钮。

## 基础用法

通过滑动来查看处于右下角的按钮，可以通过设置 `bottom`、`right` 设置 backtop 按钮具体的位置；通过设置 `visibilityHeight` 属性设置具体高度显示 backtop 按钮。

<demo vue="./example/base.vue" />

## 图标

其中的内容可设置为图标。

<demo vue="./example/icon.vue" />

## backtop API

### backtop 属性

| 属性             | 说明                             | 类型                   | 默认值 |
| ---------------- | -------------------------------- | ---------------------- | ------ |
| right            | 控制其显示位置，距离页面右边距   | `number`               | 60     |
| bottom           | 控制其显示位置，距离页面底部距离 | `number`               | 40     |
| visibilityHeight | 滚动到此参数值才显示按钮         | `number`               | 400    |
| icon             | 图标组件                         | `string` / `Component` | -      |

### Avatar 事件

| 名称  | 说明               | 回调参数                                            |
| ----- | ------------------ | --------------------------------------------------- |
| click | 点击按钮触发的事件 | `Function`<Tool value="(evt: MouseEvent) => void"/> |

### backtop 插槽

| 插槽名  | 说明           |
| ------- | -------------- |
| default | 自定义默认内容 |
