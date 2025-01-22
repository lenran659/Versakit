import { v as a, Z as f, a as V } from './chunks/theme.BKnsVfWH.js'
import {
  d as x,
  o as i,
  f as c,
  l as s,
  q as r,
  u as l,
  L as n,
  _ as b,
  j as B,
  a as y,
  b as t,
  U as v,
} from './chunks/framework.D5-Ddbi5.js'
import { R as p } from './chunks/index.CeAE3Zgl.js'
const w = `c\r
<script setup lang="ts">\r
import { VerRow, VerText } from '@versakit/ui'\r
<\/script>\r
\r
<template>\r
  <ver-row>\r
    <ver-text class="w-100px" truncated>Self element set width 100px</ver-text>\r
  </ver-row>\r
</template>\r
\r
<style scoped>\r
.w-100px {\r
  width: 100px;\r
}\r
</style>\r
`,
  D = x({
    __name: 'truncated',
    setup(m) {
      return (u, e) => (
        i(),
        c(n(f), null, {
          default: s(() => [
            r(
              n(a),
              { class: 'w-100px', truncated: '' },
              {
                default: s(
                  () => e[0] || (e[0] = [l('Self element set width 100px')]),
                ),
                _: 1,
              },
            ),
          ]),
          _: 1,
        })
      )
    },
  }),
  Z = b(D, [['__scopeId', 'data-v-3e10e7a9']]),
  A = `<script setup lang="ts">\r
import { ref } from 'vue'\r
import { VerText, VerSegmented } from '@versakit/ui'\r
\r
const selectedValue = ref('md')\r
const options = [\r
  { label: 'XS', value: 'xs' },\r
  { label: 'SM', value: 'sm' },\r
  { label: 'MD', value: 'md' },\r
  { label: 'LG', value: 'lg' },\r
]\r
<\/script>\r
\r
<template>\r
  <div>\r
    <VerSegmented :options v-model="selectedValue" />\r
\r
    <ver-text class="mx4" :size="selectedValue">我是文本</ver-text>\r
  </div>\r
</template>\r
\r
<style scoped>\r
.mx4 {\r
  margin: 0px 10px;\r
}\r
</style>\r
`,
  F = x({
    __name: 'size',
    setup(m) {
      const u = B('md'),
        e = [
          { label: 'XS', value: 'xs' },
          { label: 'SM', value: 'sm' },
          { label: 'MD', value: 'md' },
          { label: 'LG', value: 'lg' },
        ]
      return (d, o) => (
        i(),
        y('div', null, [
          r(
            n(V),
            {
              options: e,
              modelValue: u.value,
              'onUpdate:modelValue': o[0] || (o[0] = (X) => (u.value = X)),
            },
            null,
            8,
            ['modelValue'],
          ),
          r(
            n(a),
            { class: 'mx4', size: u.value },
            { default: s(() => o[1] || (o[1] = [l('我是文本')])), _: 1 },
            8,
            ['size'],
          ),
        ])
      )
    },
  }),
  g = b(F, [['__scopeId', 'data-v-d608a1f8']]),
  S = `<script setup lang="ts">\r
import { VerRow, VerText } from '@versakit/ui'\r
<\/script>\r
\r
<template>\r
  <ver-row>\r
    <ver-text class="mx4">Default</ver-text>\r
    <ver-text class="mx4" type="primary">Primary</ver-text>\r
    <ver-text class="mx4" type="success">Success</ver-text>\r
    <ver-text class="mx4" type="info">Info</ver-text>\r
    <ver-text class="mx4" type="warning">Warning</ver-text>\r
    <ver-text class="mx4" type="error">Drange</ver-text>\r
  </ver-row>\r
</template>\r
\r
<style scoped>\r
.mx4 {\r
  margin: 0px 10px;\r
}\r
</style>\r
`,
  T = x({
    __name: 'base',
    setup(m) {
      return (u, e) => (
        i(),
        c(n(f), null, {
          default: s(() => [
            r(
              n(a),
              { class: 'mx4' },
              { default: s(() => e[0] || (e[0] = [l('Default')])), _: 1 },
            ),
            r(
              n(a),
              { class: 'mx4', type: 'primary' },
              { default: s(() => e[1] || (e[1] = [l('Primary')])), _: 1 },
            ),
            r(
              n(a),
              { class: 'mx4', type: 'success' },
              { default: s(() => e[2] || (e[2] = [l('Success')])), _: 1 },
            ),
            r(
              n(a),
              { class: 'mx4', type: 'info' },
              { default: s(() => e[3] || (e[3] = [l('Info')])), _: 1 },
            ),
            r(
              n(a),
              { class: 'mx4', type: 'warning' },
              { default: s(() => e[4] || (e[4] = [l('Warning')])), _: 1 },
            ),
            r(
              n(a),
              { class: 'mx4', type: 'error' },
              { default: s(() => e[5] || (e[5] = [l('Drange')])), _: 1 },
            ),
          ]),
          _: 1,
        })
      )
    },
  }),
  R = b(T, [['__scopeId', 'data-v-fb73800d']]),
  C = { tabindex: '0' },
  k = JSON.parse(
    '{"title":"Text 文本","description":"","frontmatter":{},"headers":[],"relativePath":"components/text/index.md","filePath":"components/text/index.md"}',
  ),
  j = { name: 'components/text/index.md' },
  L = Object.assign(j, {
    setup(m) {
      return (u, e) => {
        const d = v('ClientOnly'),
          o = v('Tool')
        return (
          i(),
          y('div', null, [
            e[10] ||
              (e[10] = t(
                'h1',
                { id: 'text-文本', tabindex: '-1' },
                [
                  l('Text 文本 '),
                  t(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#text-文本',
                      'aria-label': 'Permalink to "Text 文本"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            e[11] ||
              (e[11] = t(
                'h2',
                { id: '基础使用', tabindex: '-1' },
                [
                  l('基础使用 '),
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
            e[12] ||
              (e[12] = t(
                'p',
                null,
                [
                  l('由 '),
                  t('code', null, 'type'),
                  l(' 属性来选择 Text 的类型。'),
                ],
                -1,
              )),
            r(d, null, {
              default: s(() => [
                r(
                  n(p),
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
                    vueCode: n(S),
                  },
                  { vue: s(() => [r(R)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            e[13] ||
              (e[13] = t(
                'h2',
                { id: '尺寸', tabindex: '-1' },
                [
                  l('尺寸 '),
                  t(
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
            e[14] ||
              (e[14] = t(
                'p',
                null,
                [
                  l('使用 '),
                  t('code', null, 'size'),
                  l(' 属性配置尺寸，可选的尺寸大小有：'),
                  t('code', null, 'large'),
                  l('， '),
                  t('code', null, 'default'),
                  l(' 或 '),
                  t('code', null, 'small'),
                  l('。'),
                ],
                -1,
              )),
            r(d, null, {
              default: s(() => [
                r(
                  n(p),
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
                    vueCode: n(A),
                  },
                  { vue: s(() => [r(g)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            e[15] ||
              (e[15] = t(
                'h2',
                { id: '省略', tabindex: '-1' },
                [
                  l('省略 '),
                  t(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#省略',
                      'aria-label': 'Permalink to "省略"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            e[16] ||
              (e[16] = t(
                'p',
                null,
                [
                  l('通过 '),
                  t('code', null, 'truncated'),
                  l(' 属性,在文本超过视图或最大宽度设置时展示省略符。'),
                ],
                -1,
              )),
            r(d, null, {
              default: s(() => [
                r(
                  n(p),
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
                    vueCode: n(w),
                  },
                  { vue: s(() => [r(Z)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            e[17] ||
              (e[17] = t(
                'h2',
                { id: 'text-api', tabindex: '-1' },
                [
                  l('Text API '),
                  t(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#text-api',
                      'aria-label': 'Permalink to "Text API"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            e[18] ||
              (e[18] = t(
                'h3',
                { id: 'text属性', tabindex: '-1' },
                [
                  l('Text属性 '),
                  t(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#text属性',
                      'aria-label': 'Permalink to "Text属性"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            t('table', C, [
              e[9] ||
                (e[9] = t(
                  'thead',
                  null,
                  [
                    t('tr', null, [
                      t('th', null, '属性'),
                      t('th', null, '说明'),
                      t('th', null, '类型'),
                      t('th', null, '默认值'),
                    ]),
                  ],
                  -1,
                )),
              t('tbody', null, [
                t('tr', null, [
                  e[1] || (e[1] = t('td', null, [t('code', null, 'type')], -1)),
                  e[2] || (e[2] = t('td', null, '文本的类型', -1)),
                  t('td', null, [
                    e[0] || (e[0] = t('code', null, 'enum', -1)),
                    r(o, { value: 'default,primary,secondary' }),
                  ]),
                  e[3] || (e[3] = t('td', null, 'default', -1)),
                ]),
                t('tr', null, [
                  e[5] || (e[5] = t('td', null, [t('code', null, 'size')], -1)),
                  e[6] || (e[6] = t('td', null, '用于调整文本的大小', -1)),
                  t('td', null, [
                    e[4] || (e[4] = t('code', null, 'enum', -1)),
                    r(o, { value: 'lg,md,sm,xs' }),
                  ]),
                  e[7] || (e[7] = t('td', null, 'default', -1)),
                ]),
                e[8] ||
                  (e[8] = t(
                    'tr',
                    null,
                    [
                      t('td', null, [t('code', null, 'truncated ')]),
                      t(
                        'td',
                        null,
                        '在文本超过视图或最大宽度设置时展示省略符。',
                      ),
                      t('td', null, [t('code', null, 'boolean')]),
                      t('td', null, 'false'),
                    ],
                    -1,
                  )),
              ]),
            ]),
          ])
        )
      }
    },
  })
export { k as __pageData, L as default }
