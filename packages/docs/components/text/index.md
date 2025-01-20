# Text 文本

## 基础使用

由 `type` 属性来选择 Text 的类型。

<demo vue="./example/base.vue"></demo>

## 尺寸

使用 `size` 属性配置尺寸，可选的尺寸大小有：`large`， `default` 或 `small`。

<demo vue="./example/size.vue"></demo>

## 省略

通过 `truncated` 属性,在文本超过视图或最大宽度设置时展示省略符。

<demo vue="./example/truncated.vue"></demo>

## Text API

### Text属性

| 属性         | 说明                                       | 类型                                             | 默认值  |
| ------------ | ------------------------------------------ | ------------------------------------------------ | ------- |
| `type`       | 文本的类型                                 | `enum`<Tool value="default,primary,secondary" /> | default |
| `size`       | 用于调整文本的大小                         | `enum`<Tool value="lg,md,sm,xs" />               | default |
| `truncated ` | 在文本超过视图或最大宽度设置时展示省略符。 | `boolean`                                        | false   |
