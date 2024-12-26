# Layout 布局

通过基础的 24 分栏，迅速简便地创建布局。

## 基础布局

使用列创建基础网格布局。

通过 `row` 和 `col` 组件，并通过 `col` 组件的 `span` 属性我们就可以自由地组合布局。

<demo vue="../../example/layout/base.vue"></demo>

## 分栏间隔

通过 `offset` 属性偏移占用指定的列数。

<demo vue="../../example/layout/offset.vue"></demo>

## 混合布局

通过基础的 1/24 分栏任意扩展组合形成较为复杂的混合布局。

<demo vue="../../example/layout/mix.vue"></demo>

## Layout API

### Layout 属性

| 属性     | 说明               | 类型     | 默认值 |
| -------- | ------------------ | -------- | ------ |
| `span`   | 栅格占据的列数     | `number` | 24     |
| `offset` | 栅格左侧的间隔格数 | `number` | 0      |
