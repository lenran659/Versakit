# Link 链接

## 基础使用

<p>我们提供了连接的一些基本样式，可以通过type来设置连接的基础样式。</p>

<demo vue="../../example/link/base.vue"></demo>

## 禁用状态

<p>为链接添加disabled属性，让文字链接处于不可用状态。</p>

<demo vue="../../example/link/disable.vue"></demo>

## Link API

| 属性       | 说明                                                                                              | 类型      | 默认值    |
| ---------- | ------------------------------------------------------------------------------------------------- | --------- | --------- |
| `type`     | 链接的类型，可以是`primary`、`success` | `string`  | `default` |
| `disabled` | 控制链接是否处于禁用状态，禁用状态下按钮不可点击，常通过变灰等视觉样式体现                        | `boolean` | `false`   |
| `href` | 链接的路径    | `string` | `空`   |
