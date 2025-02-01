# Collapse 折叠面板

通过折叠面板收纳内容区域。

## 基本使用

可同时展开多个面板，面板之间不影响。

<demo vue="./example/base.vue"></demo>

## 手风琴效果

每次只能展开一个面板

通过 `accordion` 属性来设置是否以手风琴模式显示。

<demo vue="./example/accordion.vue"></demo>

## Collapse Item API

### Collapse Item 属性

| 属性        | 说明                 | 类型                | 默认值 |
| ----------- | -------------------- | ------------------- | ------ |
| `name`      | 唯一标志符           | `string` / `number` | -      |
| `title`     | 面板标题             | `string`            | ''     |
| `accordion` | 是否设置为手风琴效果 | `boolean`           | false  |
