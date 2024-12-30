import { I as s } from './chunks/theme.C9e_0uVK.js'
import {
  d as v,
  m as f,
  a as u,
  b as m,
  x as d,
  p as o,
  z as r,
  u as n,
  e as l,
  a9 as c,
  V,
} from './chunks/framework.Ch9zL8Hq.js'
import { R as b } from './chunks/index.DbkfPGQe.js'
const h = `<template>\r
  <div>\r
    <VerRadio disabled label="1" v-model="gender">男</VerRadio>\r
    <VerRadio disabled label="0" v-model="gender">女</VerRadio>\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
import { ref } from 'vue'\r
import { VerRadio } from '@versakit/ui'\r
\r
const gender = ref(1)\r
<\/script>\r
`,
  R = v({
    __name: 'disabled',
    setup(p) {
      const a = f(1)
      return (t, e) => (
        u(),
        m('div', null, [
          d(
            n(s),
            {
              disabled: '',
              label: '1',
              modelValue: a.value,
              'onUpdate:modelValue': e[0] || (e[0] = (i) => (a.value = i)),
            },
            { default: o(() => e[2] || (e[2] = [r('男')])), _: 1 },
            8,
            ['modelValue'],
          ),
          d(
            n(s),
            {
              disabled: '',
              label: '0',
              modelValue: a.value,
              'onUpdate:modelValue': e[1] || (e[1] = (i) => (a.value = i)),
            },
            { default: o(() => e[3] || (e[3] = [r('女')])), _: 1 },
            8,
            ['modelValue'],
          ),
        ])
      )
    },
  }),
  x = `<template>\r
  <div>\r
    <VerRadio label="1" v-model="gender">男</VerRadio>\r
    <VerRadio label="0" v-model="gender">女</VerRadio>\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
import { ref } from 'vue'\r
import { VerRadio } from '@versakit/ui'\r
\r
const gender = ref(1)\r
<\/script>\r
`,
  g = v({
    __name: 'base',
    setup(p) {
      const a = f(1)
      return (t, e) => (
        u(),
        m('div', null, [
          d(
            n(s),
            {
              label: '1',
              modelValue: a.value,
              'onUpdate:modelValue': e[0] || (e[0] = (i) => (a.value = i)),
            },
            { default: o(() => e[2] || (e[2] = [r('男')])), _: 1 },
            8,
            ['modelValue'],
          ),
          d(
            n(s),
            {
              label: '0',
              modelValue: a.value,
              'onUpdate:modelValue': e[1] || (e[1] = (i) => (a.value = i)),
            },
            { default: o(() => e[3] || (e[3] = [r('女')])), _: 1 },
            8,
            ['modelValue'],
          ),
        ])
      )
    },
  }),
  k = JSON.parse(
    '{"title":"Radio 单选框","description":"","frontmatter":{},"headers":[],"relativePath":"components/radio/index.md","filePath":"components/radio/index.md"}',
  ),
  B = { name: 'components/radio/index.md' },
  F = Object.assign(B, {
    setup(p) {
      return (a, t) => {
        const e = V('ClientOnly')
        return (
          u(),
          m('div', null, [
            t[0] ||
              (t[0] = l(
                'h1',
                { id: 'radio-单选框', tabindex: '-1' },
                [
                  r('Radio 单选框 '),
                  l(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#radio-单选框',
                      'aria-label': 'Permalink to "Radio 单选框"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            t[1] || (t[1] = l('p', null, '在一组备选项中进行单选。', -1)),
            t[2] ||
              (t[2] = l(
                'h2',
                { id: '基础使用', tabindex: '-1' },
                [
                  r('基础使用 '),
                  l(
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
            t[3] || (t[3] = l('p', null, '单选框的基本使用。', -1)),
            d(e, null, {
              default: o(() => [
                d(
                  n(b),
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
                    vueCode: n(x),
                  },
                  { vue: o(() => [d(g)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            t[4] ||
              (t[4] = l(
                'h2',
                { id: '禁用状态', tabindex: '-1' },
                [
                  r('禁用状态 '),
                  l(
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
            t[5] ||
              (t[5] = l(
                'p',
                null,
                [
                  l('code', null, 'disabled'),
                  r(' 属性可以用来控制单选框的禁用状态。'),
                ],
                -1,
              )),
            d(e, null, {
              default: o(() => [
                d(
                  n(b),
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
                    vueCode: n(h),
                  },
                  { vue: o(() => [d(R)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            t[6] ||
              (t[6] = c(
                '<h2 id="radio-api" tabindex="-1">Radio API <a class="header-anchor" href="#radio-api" aria-label="Permalink to &quot;Radio API&quot;">​</a></h2><h3 id="radio-属性" tabindex="-1">Radio 属性 <a class="header-anchor" href="#radio-属性" aria-label="Permalink to &quot;Radio 属性&quot;">​</a></h3><table tabindex="0"><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>v-model</code> / <code>model-value</code></td><td>选中项绑定值</td><td><code>string</code> / <code>number</code> / <code>boolean</code></td><td>-</td></tr><tr><td><code>disabled</code></td><td>是否禁用单选框</td><td><code>boolean</code></td><td>false</td></tr></tbody></table>',
                3,
              )),
          ])
        )
      }
    },
  })
export { k as __pageData, F as default }
