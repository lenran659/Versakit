import { W as p } from './chunks/theme.C9e_0uVK.js'
import {
  d as u,
  m as b,
  a as s,
  j as h,
  u as l,
  _ as x,
  b as V,
  e as t,
  z as n,
  x as r,
  p as d,
  a9 as f,
  V as v,
} from './chunks/framework.Ch9zL8Hq.js'
import { R as m } from './chunks/index.DbkfPGQe.js'
const F = `<template>\r
  <VerTextarea v-model="textarea" :maxlength="10" placeholder="请输入内容" />\r
</template>\r
\r
<script lang="ts" setup>\r
import { ref } from 'vue'\r
import { VerTextarea } from '@versakit/ui'\r
const textarea = ref('')\r
<\/script>\r
\r
<style scoped>\r
.ver-textarea {\r
  width: 300px;\r
  height: 100px;\r
}\r
</style>\r
`,
  A = u({
    __name: 'maxlength',
    setup(c) {
      const o = b('')
      return (e, a) => (
        s(),
        h(
          l(p),
          {
            modelValue: o.value,
            'onUpdate:modelValue': a[0] || (a[0] = (i) => (o.value = i)),
            maxlength: 10,
            placeholder: '请输入内容',
          },
          null,
          8,
          ['modelValue'],
        )
      )
    },
  }),
  _ = x(A, [['__scopeId', 'data-v-a9f71251']]),
  G = `<template>\r
  <VerTextarea disabled placeholder="请输入内容" />\r
</template>\r
\r
<script lang="ts" setup>\r
import { VerTextarea } from '@versakit/ui'\r
<\/script>\r
\r
<style scoped>\r
.ver-textarea {\r
  width: 300px;\r
  height: 100px;\r
}\r
</style>\r
`,
  y = u({
    __name: 'disabled',
    setup(c) {
      return (o, e) => (
        s(), h(l(p), { disabled: '', placeholder: '请输入内容' })
      )
    },
  }),
  B = x(y, [['__scopeId', 'data-v-f8b71e44']]),
  X = `<template>\r
  <VerTextarea v-model="textareaVal" placeholder="请输入内容" />\r
</template>\r
\r
<script lang="ts" setup>\r
import { ref } from 'vue'\r
import { VerTextarea } from '@versakit/ui'\r
const textareaVal = ref('')\r
<\/script>\r
\r
<style scoped>\r
.ver-textarea {\r
  width: 300px;\r
  height: 100px;\r
}\r
</style>\r
`,
  T = u({
    __name: 'base',
    setup(c) {
      const o = b('')
      return (e, a) => (
        s(),
        h(
          l(p),
          {
            modelValue: o.value,
            'onUpdate:modelValue': a[0] || (a[0] = (i) => (o.value = i)),
            placeholder: '请输入内容',
          },
          null,
          8,
          ['modelValue'],
        )
      )
    },
  }),
  g = x(T, [['__scopeId', 'data-v-17fbdcb4']]),
  k = JSON.parse(
    '{"title":"TextArea 文本域","description":"","frontmatter":{},"headers":[],"relativePath":"components/textarea/index.md","filePath":"components/textarea/index.md"}',
  ),
  D = { name: 'components/textarea/index.md' },
  j = Object.assign(D, {
    setup(c) {
      return (o, e) => {
        const a = v('ClientOnly')
        return (
          s(),
          V('div', null, [
            e[0] ||
              (e[0] = t(
                'h1',
                { id: 'textarea-文本域', tabindex: '-1' },
                [
                  n('TextArea 文本域 '),
                  t(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#textarea-文本域',
                      'aria-label': 'Permalink to "TextArea 文本域"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            e[1] ||
              (e[1] = t(
                'p',
                null,
                '多行纯文本编辑控件，适用于评论或反馈表单中的一段意见。',
                -1,
              )),
            e[2] ||
              (e[2] = t(
                'h2',
                { id: '基础用法', tabindex: '-1' },
                [
                  n('基础用法 '),
                  t(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#基础用法',
                      'aria-label': 'Permalink to "基础用法"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            e[3] || (e[3] = t('p', null, '用于多行输入。', -1)),
            r(a, null, {
              default: d(() => [
                r(
                  l(m),
                  {
                    title: '',
                    description: '',
                    select: 'vue',
                    order: 'vue,react,html',
                    github: '',
                    gitlab: '',
                    stackblitz: '%7B%22show%22%3Afalse%7D',
                    codesandbox: '%7B%22show%22%3Afalse%7D',
                    codeplayer: '%7B%22show%22%3Afalse%7D',
                    files:
                      '%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D',
                    scope: '',
                    visible: !0,
                    vueCode: l(X),
                  },
                  { vue: d(() => [r(g)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            e[4] ||
              (e[4] = t(
                'h2',
                { id: '禁用状态', tabindex: '-1' },
                [
                  n('禁用状态 '),
                  t(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#禁用状态',
                      'aria-label': 'Permalink to "禁用状态"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            e[5] ||
              (e[5] = t(
                'p',
                null,
                [
                  n('使用 '),
                  t('code', null, 'disabled'),
                  n(' 属性设置不可点击。'),
                ],
                -1,
              )),
            r(a, null, {
              default: d(() => [
                r(
                  l(m),
                  {
                    title: '',
                    description: '',
                    select: 'vue',
                    order: 'vue,react,html',
                    github: '',
                    gitlab: '',
                    stackblitz: '%7B%22show%22%3Afalse%7D',
                    codesandbox: '%7B%22show%22%3Afalse%7D',
                    codeplayer: '%7B%22show%22%3Afalse%7D',
                    files:
                      '%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D',
                    scope: '',
                    visible: !0,
                    vueCode: l(G),
                  },
                  { vue: d(() => [r(B)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            e[6] ||
              (e[6] = t(
                'h2',
                { id: '限制长度', tabindex: '-1' },
                [
                  n('限制长度 '),
                  t(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#限制长度',
                      'aria-label': 'Permalink to "限制长度"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            e[7] ||
              (e[7] = t(
                'p',
                null,
                [
                  n('使用 '),
                  t('code', null, 'maxlength'),
                  n(' 属性限制最大输入长度。'),
                ],
                -1,
              )),
            r(a, null, {
              default: d(() => [
                r(
                  l(m),
                  {
                    title: '',
                    description: '',
                    select: 'vue',
                    order: 'vue,react,html',
                    github: '',
                    gitlab: '',
                    stackblitz: '%7B%22show%22%3Afalse%7D',
                    codesandbox: '%7B%22show%22%3Afalse%7D',
                    codeplayer: '%7B%22show%22%3Afalse%7D',
                    files:
                      '%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D',
                    scope: '',
                    visible: !0,
                    vueCode: l(F),
                  },
                  { vue: d(() => [r(_)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            e[8] ||
              (e[8] = f(
                '<h2 id="textarea-api" tabindex="-1">Textarea API <a class="header-anchor" href="#textarea-api" aria-label="Permalink to &quot;Textarea API&quot;">​</a></h2><h3 id="textarea-属性" tabindex="-1">Textarea 属性 <a class="header-anchor" href="#textarea-属性" aria-label="Permalink to &quot;Textarea 属性&quot;">​</a></h3><table tabindex="0"><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>disabled</code></td><td>是否禁用</td><td><code>boolean</code></td><td>false</td></tr><tr><td><code>placeholder </code></td><td>输入框占位文本</td><td><code>string</code></td><td>-</td></tr><tr><td><code>v-model</code> / <code>modelValue</code></td><td>绑定值</td><td><code>string</code></td><td>-</td></tr><tr><td><code>maxlength</code></td><td>最大值</td><td><code>string</code></td><td>-</td></tr></tbody></table>',
                3,
              )),
          ])
        )
      }
    },
  })
export { k as __pageData, j as default }
