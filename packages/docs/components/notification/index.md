# Notification 通知

悬浮出现在页面角落，显示全局的通知提醒消息。

## 基础用法

你可以通过设置 `title` 和 `message` 属性来设置通知的标题和正文内容。 默认情况下，通知在 4500 毫秒后自动关闭，但你可以通过设置 `duration` 属性来自定义通知的展示时间。 如果你将它设置为 0，那么通知将不会自动关闭。 需要注意的是 `duration` 接收一个 Number，单位为毫秒。

<demo vue="./example/base.vue"></demo>

## 不同类型

我们提供了四种不同类型的提醒框：`success`、`warning`、`info` 和 `error`。

<demo vue="./example/type.vue"></demo>

## 不同风格

通知色彩更加鲜明，支持 `success`、`warning`、`info` 和 `error` 四种类型。

<demo vue="./example/plain.vue"></demo>

## 自定义消息弹出的位置

可以让 Notification 从屏幕四角中的任意一角弹出。

使用 `position` 属性设置 Notification 的弹出位置， 支持四个选项：`top-right`、`top-left`、`bottom-right` 和 `bottom-left`， 默认为 `top-right`。

<demo vue="./example/position.vue"></demo>

## Notification API

### Notification 属性

| 属性         | 说明                    | 类型     | 默认值 |
| ------------ | ----------------------- | -------- | ------ |
| `title`      | 标题                    | `string` | -      |
| `modelValue` | 绑定值                  | `string` | -      |
| `duration`   | notification 的持续时间 | `number` | `4500` |

### Notification 方法

| 名称      | 描述                    | 类型                                  |
| --------- | ----------------------- | ------------------------------------- |
| `destroy` | notification 的销毁函数 | `function`<Tool value="() => void" /> |
