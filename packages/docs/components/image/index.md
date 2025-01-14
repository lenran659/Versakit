# Image 图片

<p>Image 组件可以用来代表人物或对象， 支持使用图片、图标或者文字作为组件内容。</p>

## 基础用法

<p>
使用 <code>shape</code> 和 <code>size</code> 属性来设置 Image 的形状和大小。
</p>

<demo vue="../../example/image/base.vue"></demo>

## 大小

<p>图片的 <code>size</code> 也支持使用 <code>string</code> 类型来设置尺寸大小，例如：<code>xs</code> , <code>s</code> , <code>md</code> , <code>lg</code> 。</p>

<demo vue="../../example/image/size.vue"></demo>

## 展示类型

<p>
支持使用图片或者文字作为 Image。
</p>

<demo vue="../../example/image/src.vue"></demo>

<p>图片加载失败时，可以使用 <code>error</code> 属性触发函数，默认触发图片填充效果。</p>

<demo vue="../../example/image/error.vue"></demo>

<p>Image组件支持使用 <code>object-fit</code> 属性设置该图片如何在容器中展示。</p>

<demo vue="../../example/image/fit.vue"></demo>

## Avatar API

### Avatar 属性

| 属性  | 说明           | 类型                                            | 默认值 |
| ----- | -------------- | ----------------------------------------------- | ------ |
| src   | 图片资源的路径 | `string`                                        | -      |
| size  | 尺寸大小       | `number` / `enum`<Tool value="xs,sm,lg"></Tool> | 50     |
| shape | 头像的形状     | `enum`<Tool value="square,circle"></Tool>       | circle |
| fit   | 头像的填充效果 | `enum`<Tool value="fill,contain,cover"></Tool>  | cover  |

### Avatar 事件

| 名称  | 说明               | 回调参数                                            |
| ----- | ------------------ | --------------------------------------------------- |
| error | 图片加载失败时触发 | `Function`<Tool value="(evt: MouseEvent) => void"/> |

### Avatar 插槽

| 插槽名  | 说明           |
| ------- | -------------- |
| default | 自定义默认内容 |
