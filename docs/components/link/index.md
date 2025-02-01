# Link 链接

## 基础使用

我们提供了连接的一些基本样式，可以通过 `type` 来设置连接的基础样式。

<demo vue="./example/base.vue"></demo>

## 禁用状态

为链接添加 `disabled` 属性，让文字链接处于不可用状态。

<demo vue="./example/disable.vue"></demo>

## Link API

| 属性       | 说明                                                                       | 类型                                           | 默认值  |
| ---------- | -------------------------------------------------------------------------- | ---------------------------------------------- | ------- |
| `type`     | 链接的类型                                                                 | `enum`<Tool value="primary,success,default" /> | default |
| `disabled` | 控制链接是否处于禁用状态，禁用状态下按钮不可点击，常通过变灰等视觉样式体现 | `boolean`                                      | false   |
| `href`     | 链接的路径                                                                 | `string`                                       | -       |
