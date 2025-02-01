# Result 结果页

用于反馈一系列操作任务的处理结果。

## 何时使用

当有重要操作需告知用户处理结果，且反馈内容较为复杂时使用。

## 演示

<demo vue="./example/success.vue"></demo>
<demo vue="./example/error.vue"></demo>
<demo vue="./example/warning.vue"></demo>
<demo vue="./example/info.vue"></demo>
<demo vue="./example/403.vue"></demo>
<demo vue="./example/404.vue"></demo>
<demo vue="./example/500.vue"></demo>

## Result API

### Result 属性

| 属性     | 说明                       | 类型     | 默认值    |
| -------- | -------------------------- | -------- | --------- |
| `status` | 结果的状态，决定图标和颜色 | `string` | `success` |

### Result 插槽

| 插槽名    | 说明           |
| --------- | -------------- |
| `content` | 结果页中的内容 |
