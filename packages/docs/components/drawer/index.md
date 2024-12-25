# Drawer 抽屉

有些时候, `Dialog` 组件并不满足我们的需求, 比如你的表单很长, 亦或是你需要临时展示一些文档。

## 基础使用

呼出一个临时的侧边栏，自定义内容。

<demo vue="../../example/drawer/base.vue"></demo>

## 不同方向

抽屉可以从四个方向呼出，可以用 `direction` 设置。

<demo vue="../../example/drawer/direction.vue"></demo>

## Drawer API

### Drawer 属性

| 属性        | 说明           | 类型                                       | 默认值 |
| ----------- | -------------- | ------------------------------------------ | ------ |
| `direction` | 设置呼出的方向 | `enum`<Tool value="left,top,right,bottom," | left   |
