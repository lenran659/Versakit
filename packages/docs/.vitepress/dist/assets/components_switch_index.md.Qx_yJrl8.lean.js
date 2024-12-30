import { i } from './chunks/theme.C9e_0uVK.js'
import {
  d as v,
  m as f,
  a as d,
  b as V,
  x as r,
  u as s,
  _ as b,
  j as h,
  e,
  z as a,
  p as u,
  V as p,
} from './chunks/framework.Ch9zL8Hq.js'
import { R as c } from './chunks/index.DbkfPGQe.js'
const w = `<template>\r
  <div>\r
    <VerSwitch size="lg" v-model="value" />\r
    <VerSwitch v-model="value" />\r
    <VerSwitch size="sm" v-model="value" />\r
  </div>\r
</template>\r
\r
<script lang="ts" setup>\r
import { VerSwitch } from '@versakit/ui'\r
import { ref } from 'vue'\r
\r
const value = ref(false)\r
<\/script>\r
\r
<style scoped>\r
.ver-switch {\r
  margin: 0px 10px;\r
}\r
</style>\r
`,
  x = v({
    __name: 'size',
    setup(m) {
      const n = f(!1)
      return (l, t) => (
        d(),
        V('div', null, [
          r(
            s(i),
            {
              size: 'lg',
              modelValue: n.value,
              'onUpdate:modelValue': t[0] || (t[0] = (o) => (n.value = o)),
            },
            null,
            8,
            ['modelValue'],
          ),
          r(
            s(i),
            {
              modelValue: n.value,
              'onUpdate:modelValue': t[1] || (t[1] = (o) => (n.value = o)),
            },
            null,
            8,
            ['modelValue'],
          ),
          r(
            s(i),
            {
              size: 'sm',
              modelValue: n.value,
              'onUpdate:modelValue': t[2] || (t[2] = (o) => (n.value = o)),
            },
            null,
            8,
            ['modelValue'],
          ),
        ])
      )
    },
  }),
  B = b(x, [['__scopeId', 'data-v-884f5489']]),
  C = `<template>\r
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
  X = v({
    __name: 'base',
    setup(m) {
      const n = f(!1)
      return (l, t) => (
        d(),
        h(
          s(i),
          {
            modelValue: n.value,
            'onUpdate:modelValue': t[0] || (t[0] = (o) => (n.value = o)),
          },
          null,
          8,
          ['modelValue'],
        )
      )
    },
  }),
  A = { tabindex: '0' },
  y = JSON.parse(
    '{"title":"Switch 开关","description":"","frontmatter":{},"headers":[],"relativePath":"components/switch/index.md","filePath":"components/switch/index.md"}',
  ),
  D = { name: 'components/switch/index.md' },
  z = Object.assign(D, {
    setup(m) {
      return (n, l) => {
        const t = p('ClientOnly'),
          o = p('Tool')
        return (
          d(),
          V('div', null, [
            l[6] ||
              (l[6] = e(
                'h1',
                { id: 'switch-开关', tabindex: '-1' },
                [
                  a('Switch 开关 '),
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
                  a('基础用法 '),
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
                  a('绑定 '),
                  e('code', null, 'v-model'),
                  a(' 到一个 '),
                  e('code', null, 'Boolean'),
                  a(' 类型的变量。'),
                ],
                -1,
              )),
            r(t, null, {
              default: u(() => [
                r(
                  s(c),
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
                    vueCode: s(C),
                  },
                  { vue: u(() => [r(X)]), _: 1 },
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
                  a('尺寸 '),
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
                  a('可以通过 '),
                  e('code', null, 'size'),
                  a(' 属性来设置 switch 的大小。'),
                ],
                -1,
              )),
            r(t, null, {
              default: u(() => [
                r(
                  s(c),
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
                    vueCode: s(w),
                  },
                  { vue: u(() => [r(B)]), _: 1 },
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
                  a('Switch API '),
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
            e('table', A, [
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
                        a(' / '),
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
                    r(o, { value: 'lg,md,sm,' }),
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
export { y as __pageData, z as default }
