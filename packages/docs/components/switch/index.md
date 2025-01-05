# Switch 开关

表示两种相互对立的状态间的切换，多用于触发「开/关」。

## 基础用法

绑定 `v-model` 到一个 `Boolean` 类型的变量。

<demo vue="../../example/switch/base.vue"></demo>

## 尺寸

可以通过 `size` 属性来设置 switch 的大小。

<demo vue="../../example/switch/size.vue"></demo>

## Switch API

| 属性                     | 说明     | 类型                            | 默认值 |
| ------------------------ | -------- | ------------------------------- | ------ |
| `v-model` / `modelValue` | 绑定值   | `boolean`                       | false  |
| `size`                   | 设置尺寸 | `enum`<Tool value="lg,md,sm" /> | md     |
