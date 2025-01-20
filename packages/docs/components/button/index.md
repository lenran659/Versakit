# Button 按钮

<p>在日常开发中比较常用的操作按钮。</p>

## 基础使用

versakitUI 提供了一些基础样式来使用，我们可以通过 `type`、`plain`、`round` 来修改按钮的圆角，颜色和是否透明等属性。

<demo vue="./example/base.vue"></demo>

## 按钮风格

使用 `style` 和 `variant` 属性来改变按钮的视觉风格。

<demo vue="./example/style.vue"></demo>

## 禁止状态

您可以使用 `disabled` 属性来定义按钮是否被禁用，该属性接受一个 `Boolean` 类型的值。

<demo vue="./example/disabled.vue"></demo>

## 按钮大小

我们可以通过调整 `size` 属性来控制按钮大小。

<demo vue="./example/size.vue"></demo>

## 水波纹按钮

按钮可以结合水波纹一起使用。

<demo vue="./example/ripple.vue"></demo>

## 图标按钮

使用 `icon` 属性来设置按钮的图标样式，您可以在我们的 `Icon` 组件中找到所需图标。

<demo vue="./example/icon.vue"></demo>

## Button API

### Button 属性

| 属性       | 说明                                                                                                  | 类型                                             | 默认值  |
| ---------- | ----------------------------------------------------------------------------------------------------- | ------------------------------------------------ | ------- |
| `type`     | 按钮的类型，例如可以是 `primary`（主要按钮）、`success`（成功按钮）等不同分类来表示不同状态的样式风格 | `enum`<Tool value="primary,info,warning,error"/> | default |
| `plain`    | 用于指示按钮是否为朴素按钮样式，朴素按钮通常是背景透明、只有文字和边框等简单样式呈现                  | `boolean`                                        | false   |
| `round`    | 判断按钮是否呈现圆角的外观效果                                                                        | `boolean`                                        | false   |
| `disabled` | 确定按钮是否处于禁用状态，禁用状态下按钮不可点击，常通过变灰等视觉样式体现                            | `boolean`                                        | false   |
| `ghost`    | 是否为ghost                                                                                           | `boolean`                                        | false   |
| `text`     | 是否为文本按钮                                                                                        | `boolean`                                        | false   |
| `circle`   | 是否为圆角按钮                                                                                        | `boolean`                                        | false   |
| `shade`    | 是否是阴影按钮                                                                                        | `boolean`                                        | false   |
| `color`    | 自定义颜色按钮                                                                                        | `string`                                         | -       |
| `icon`     | 自定义图标按钮                                                                                        | `string`                                         | -       |
| `size`     | 自定义按钮大小                                                                                        | `string`                                         | default |
