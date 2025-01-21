# Layout 布局

通过基础的 24 分栏，迅速简便地创建布局。

## 基础布局

使用列创建基础网格布局。

通过 `row` 和 `col` 组件，并通过 `col` 组件的 `span` 属性我们就可以自由地组合布局。

<demo vue="./example/base.vue"></demo>

## 列偏移

通过 `offset` 属性指定分栏偏移的栏数

<demo vue="./example/offset.vue"></demo>

## 分栏间隔

行提供 `gutter` 属性来指定列之间的间距，其默认值为0。

<demo vue="../../example/layout/gutter.vue"></demo>

## 混合布局

通过基础的 1/24 分栏任意扩展组合形成较为复杂的混合布局。

<demo vue="./example/mix.vue"></demo>

## 响应式布局

参照了 Bootstrap 的 响应式设计，预设了五个响应尺寸：xs、sm、md、lg 和 xl。

<demo vue="../../example/layout/reactive.vue"></demo>

## Layout API

### Layout 属性

| 属性     | 说明                                   | 类型     | 默认值 |
| -------- | -------------------------------------- | -------- | ------ |
| `span`   | 栅格占据的列数                         | `number` | 24     |
| `offset` | 栅格左侧的间隔格数                     | `number` | 0      |
| `xs`     | `<768px` 响应式栅格数或者栅格属性对象  | `number` | -      |
| `sm`     | `≥768px` 响应式栅格数或者栅格属性对象  | `number` | -      |
| `md`     | `≥992px` 响应式栅格数或者栅格属性对象  | `number` | -      |
| `lg`     | `≥1200px` 响应式栅格数或者栅格属性对象 | `number` | -      |
| `xl`     | `≥1920px` 响应式栅格数或者栅格属性对象 | `number` | -      |
