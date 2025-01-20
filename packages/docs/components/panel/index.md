# Panel 面板

面板通常是指一个独立的容器，用于承载内容。

## 基础用法

这是一个很简单的面板。

<demo vue="./example/base.vue"></demo>

## 阴影

你可以定义什么时候展示面板的阴影效果。

通过`shadow`属性设置卡片阴影出现的时刻。该属性的值可以是: `always`、`hover` 或 `never`

<demo vue="./example/shadow.vue"></demo>

## Panel API

### Panel 属性

| 属性     | 说明                                     | 类型                                      | 默认值   |
| -------- | ---------------------------------------- | ----------------------------------------- | -------- |
| `shadow` | 可以使用 shadow 来决定卡片拥有阴影的时机 | `enum`<Tool value="always,hover,never" /> | `always` |
