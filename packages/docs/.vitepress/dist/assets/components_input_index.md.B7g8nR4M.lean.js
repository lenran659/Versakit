import { Q as c, Z as m } from './chunks/theme.BKnsVfWH.js'
import {
  d as b,
  j as f,
  o as u,
  f as h,
  l as o,
  q as l,
  L as r,
  a as v,
  b as t,
  u as d,
  a8 as V,
  U as _,
} from './chunks/framework.D5-Ddbi5.js'
import { R as p } from './chunks/index.CeAE3Zgl.js'
const x = `<template>\r
  <VerRow>\r
    <VerInput disabled v-model="value" placeholder="Please input" />\r
  </VerRow>\r
</template>\r
\r
<script setup lang="ts">\r
import { ref } from 'vue'\r
import { VerInput, VerRow } from '@versakit/ui'\r
\r
const value = ref('')\r
<\/script>\r
\r
<style scoped></style>\r
`,
  B = b({
    __name: 'disabled',
    setup(i) {
      const n = f('')
      return (e, a) => (
        u(),
        h(r(m), null, {
          default: o(() => [
            l(
              r(c),
              {
                disabled: '',
                modelValue: n.value,
                'onUpdate:modelValue': a[0] || (a[0] = (s) => (n.value = s)),
                placeholder: 'Please input',
              },
              null,
              8,
              ['modelValue'],
            ),
          ]),
          _: 1,
        })
      )
    },
  }),
  w = `<template>\r
  <VerRow>\r
    <VerInput v-model="value" placeholder="Please input" />\r
  </VerRow>\r
</template>\r
\r
<script setup lang="ts">\r
import { ref } from 'vue'\r
import { VerInput, VerRow } from '@versakit/ui'\r
\r
const value = ref('')\r
<\/script>\r
\r
<style scoped></style>\r
`,
  A = b({
    __name: 'base',
    setup(i) {
      const n = f('')
      return (e, a) => (
        u(),
        h(r(m), null, {
          default: o(() => [
            l(
              r(c),
              {
                modelValue: n.value,
                'onUpdate:modelValue': a[0] || (a[0] = (s) => (n.value = s)),
                placeholder: 'Please input',
              },
              null,
              8,
              ['modelValue'],
            ),
          ]),
          _: 1,
        })
      )
    },
  }),
  P = JSON.parse(
    '{"title":"Input 输入框","description":"","frontmatter":{},"headers":[],"relativePath":"components/input/index.md","filePath":"components/input/index.md"}',
  ),
  y = { name: 'components/input/index.md' },
  k = Object.assign(y, {
    setup(i) {
      return (n, e) => {
        const a = _('ClientOnly')
        return (
          u(),
          v('div', null, [
            e[0] ||
              (e[0] = t(
                'h1',
                { id: 'input-输入框', tabindex: '-1' },
                [
                  d('Input 输入框 '),
                  t(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#input-输入框',
                      'aria-label': 'Permalink to "Input 输入框"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            e[1] ||
              (e[1] = t(
                'h2',
                { id: '基础使用', tabindex: '-1' },
                [
                  d('基础使用 '),
                  t(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#基础使用',
                      'aria-label': 'Permalink to "基础使用"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            e[2] || (e[2] = t('p', null, '通过鼠标或键盘输入字符.', -1)),
            l(a, null, {
              default: o(() => [
                l(
                  r(p),
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
                    vueCode: r(w),
                  },
                  { vue: o(() => [l(A)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            e[3] ||
              (e[3] = t(
                'h2',
                { id: '禁用状态', tabindex: '-1' },
                [
                  d('禁用状态 '),
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
            e[4] ||
              (e[4] = t(
                'p',
                null,
                [
                  d('通过 '),
                  t('code', null, 'disabled'),
                  d(' 属性指定是否禁用 input 组件'),
                ],
                -1,
              )),
            l(a, null, {
              default: o(() => [
                l(
                  r(p),
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
                    vueCode: r(x),
                  },
                  { vue: o(() => [l(B)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            e[5] ||
              (e[5] = V(
                '<h2 id="input-api" tabindex="-1">Input API <a class="header-anchor" href="#input-api" aria-label="Permalink to &quot;Input API&quot;">​</a></h2><h3 id="input-属性" tabindex="-1">Input 属性 <a class="header-anchor" href="#input-属性" aria-label="Permalink to &quot;Input 属性&quot;">​</a></h3><table tabindex="0"><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>placeholder</code></td><td>输入框中未输入时默认显示的文字</td><td><code>string</code></td><td>-</td></tr><tr><td><code>modelValue</code></td><td>输入框输入内容绑定的值</td><td><code>string</code></td><td>-</td></tr><tr><td><code>type</code></td><td>输入框的类型</td><td><code>string</code></td><td>text</td></tr><tr><td><code>disabled</code></td><td>是否禁用输入框</td><td><code>boolean</code></td><td>false</td></tr></tbody></table>',
                3,
              )),
          ])
        )
      }
    },
  })
export { P as __pageData, k as default }
