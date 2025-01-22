import { a as w, q as f } from './chunks/theme.BKnsVfWH.js'
import {
  d as V,
  j as m,
  o as p,
  a as h,
  q as n,
  L as r,
  _ as x,
  f as B,
  b as e,
  u as t,
  l as d,
  U as v,
} from './chunks/framework.D5-Ddbi5.js'
import { R as b } from './chunks/index.CeAE3Zgl.js'
const C = `<template>\r
  <div>\r
    <VerSegmented v-model="selectedValue" :options="options"></VerSegmented>\r
\r
    <VerSwitch :size="selectedValue" v-model="value" />\r
  </div>\r
</template>\r
\r
<script lang="ts" setup>\r
import { VerSwitch, VerSegmented } from '@versakit/ui'\r
import { ref } from 'vue'\r
\r
const value = ref(false)\r
const selectedValue = ref('md')\r
\r
const options = [\r
  { label: 'SM', value: 'sm' },\r
  { label: 'MD', value: 'md' },\r
  { label: 'LG', value: 'lg' },\r
]\r
<\/script>\r
\r
<style scoped>\r
.ver-switch {\r
  margin: 0px 10px;\r
}\r
</style>\r
`,
  S = V({
    __name: 'size',
    setup(c) {
      const o = m(!1),
        l = m('md'),
        a = [
          { label: 'SM', value: 'sm' },
          { label: 'MD', value: 'md' },
          { label: 'LG', value: 'lg' },
        ]
      return (s, u) => (
        p(),
        h('div', null, [
          n(
            r(w),
            {
              modelValue: l.value,
              'onUpdate:modelValue': u[0] || (u[0] = (i) => (l.value = i)),
              options: a,
            },
            null,
            8,
            ['modelValue'],
          ),
          n(
            r(f),
            {
              size: l.value,
              modelValue: o.value,
              'onUpdate:modelValue': u[1] || (u[1] = (i) => (o.value = i)),
            },
            null,
            8,
            ['size', 'modelValue'],
          ),
        ])
      )
    },
  }),
  A = x(S, [['__scopeId', 'data-v-75a4d362']]),
  D = `<template>\r
  <VerSwitch v-model="value" />\r
</template>\r
\r
<script lang="ts" setup>\r
import { VerSwitch } from '@versakit/ui'\r
import { ref } from 'vue'\r
\r
const value = ref(false)\r
<\/script>\r
`,
  X = V({
    __name: 'base',
    setup(c) {
      const o = m(!1)
      return (l, a) => (
        p(),
        B(
          r(f),
          {
            modelValue: o.value,
            'onUpdate:modelValue': a[0] || (a[0] = (s) => (o.value = s)),
          },
          null,
          8,
          ['modelValue'],
        )
      )
    },
  }),
  g = { tabindex: '0' },
  L = JSON.parse(
    '{"title":"Switch 开关","description":"","frontmatter":{},"headers":[],"relativePath":"components/switch/index.md","filePath":"components/switch/index.md"}',
  ),
  j = { name: 'components/switch/index.md' },
  N = Object.assign(j, {
    setup(c) {
      return (o, l) => {
        const a = v('ClientOnly'),
          s = v('Tool')
        return (
          p(),
          h('div', null, [
            l[6] ||
              (l[6] = e(
                'h1',
                { id: 'switch-开关', tabindex: '-1' },
                [
                  t('Switch 开关 '),
                  e(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#switch-开关',
                      'aria-label': 'Permalink to "Switch 开关"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            l[7] ||
              (l[7] = e(
                'p',
                null,
                '表示两种相互对立的状态间的切换，多用于触发「开/关」。',
                -1,
              )),
            l[8] ||
              (l[8] = e(
                'h2',
                { id: '基础用法', tabindex: '-1' },
                [
                  t('基础用法 '),
                  e(
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
            l[9] ||
              (l[9] = e(
                'p',
                null,
                [
                  t('绑定 '),
                  e('code', null, 'v-model'),
                  t(' 到一个 '),
                  e('code', null, 'Boolean'),
                  t(' 类型的变量。'),
                ],
                -1,
              )),
            n(a, null, {
              default: d(() => [
                n(
                  r(b),
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
                    vueCode: r(D),
                  },
                  { vue: d(() => [n(X)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            l[10] ||
              (l[10] = e(
                'h2',
                { id: '尺寸', tabindex: '-1' },
                [
                  t('尺寸 '),
                  e(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#尺寸',
                      'aria-label': 'Permalink to "尺寸"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            l[11] ||
              (l[11] = e(
                'p',
                null,
                [
                  t('可以通过 '),
                  e('code', null, 'size'),
                  t(' 属性来设置 switch 的大小。'),
                ],
                -1,
              )),
            n(a, null, {
              default: d(() => [
                n(
                  r(b),
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
                    vueCode: r(C),
                  },
                  { vue: d(() => [n(A)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            l[12] ||
              (l[12] = e(
                'h2',
                { id: 'switch-api', tabindex: '-1' },
                [
                  t('Switch API '),
                  e(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#switch-api',
                      'aria-label': 'Permalink to "Switch API"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            e('table', g, [
              l[5] ||
                (l[5] = e(
                  'thead',
                  null,
                  [
                    e('tr', null, [
                      e('th', null, '属性'),
                      e('th', null, '说明'),
                      e('th', null, '类型'),
                      e('th', null, '默认值'),
                    ]),
                  ],
                  -1,
                )),
              e('tbody', null, [
                l[4] ||
                  (l[4] = e(
                    'tr',
                    null,
                    [
                      e('td', null, [
                        e('code', null, 'v-model'),
                        t(' / '),
                        e('code', null, 'modelValue'),
                      ]),
                      e('td', null, '绑定值'),
                      e('td', null, [e('code', null, 'boolean')]),
                      e('td', null, 'false'),
                    ],
                    -1,
                  )),
                e('tr', null, [
                  l[1] || (l[1] = e('td', null, [e('code', null, 'size')], -1)),
                  l[2] || (l[2] = e('td', null, '设置尺寸', -1)),
                  e('td', null, [
                    l[0] || (l[0] = e('code', null, 'enum', -1)),
                    n(s, { value: 'lg,md,sm' }),
                  ]),
                  l[3] || (l[3] = e('td', null, 'md', -1)),
                ]),
              ]),
            ]),
          ])
        )
      }
    },
  })
export { L as __pageData, N as default }
