import { T as g, P as f, e as j, a as Z } from './chunks/theme.BKnsVfWH.js'
import {
  d as y,
  o as m,
  f as B,
  l as u,
  a as p,
  y as F,
  b as e,
  F as v,
  L as a,
  _ as X,
  j as c,
  c as S,
  q as t,
  u as i,
  m as A,
  v as R,
  U as w,
} from './chunks/framework.D5-Ddbi5.js'
import { R as V } from './chunks/index.CeAE3Zgl.js'
const z = `<script setup lang="ts">\r
import { VerFlex } from '@versakit/ui'\r
<\/script>\r
<template>\r
  <VerFlex wrap="wrap">\r
    <div v-for="n in 20" :key="n" class="flex-item" />\r
  </VerFlex>\r
</template>\r
\r
<style scoped>\r
.flex-item {\r
  width: 80px;\r
  height: 40px;\r
  background-color: #c4b5fd;\r
}\r
</style>\r
`,
  h = y({
    __name: 'wrap',
    setup(x) {
      return (n, l) => (
        m(),
        B(
          a(g),
          { wrap: 'wrap' },
          {
            default: u(() => [
              (m(),
              p(
                v,
                null,
                F(20, (r) => e('div', { key: r, class: 'flex-item' })),
                64,
              )),
            ]),
            _: 1,
          },
        )
      )
    },
  }),
  k = X(h, [['__scopeId', 'data-v-70597645']]),
  D = `<script setup lang="ts">\r
import { ref, computed } from 'vue'\r
import { VerRadio, VerSlider, VerFlex } from '@versakit/ui'\r
\r
const gapSize = ref<'small' | 'middle' | 'large' | 'custom'>('small')\r
const customGapSize = ref(16)\r
\r
const computedGap = computed<number | 'small' | 'middle' | 'large'>(() => {\r
  if (gapSize.value === 'custom') {\r
    return customGapSize.value\r
  }\r
  return gapSize.value\r
})\r
<\/script>\r
<template>\r
  <div>\r
    <VerRadio label="small" v-model="gapSize">small</VerRadio>\r
    <VerRadio label="middle" v-model="gapSize">middle</VerRadio>\r
    <VerRadio label="large" v-model="gapSize">large</VerRadio>\r
    <VerRadio label="custom" v-model="gapSize">custom</VerRadio>\r
    <VerSlider\r
      v-model="customGapSize"\r
      v-show="gapSize === 'custom'"\r
    ></VerSlider>\r
  </div>\r
  <VerFlex :gap="computedGap" style="margin-top: 10px">\r
    <div v-for="n in 4" :key="n" class="flex-item" />\r
  </VerFlex>\r
</template>\r
\r
<style scoped>\r
.flex-item {\r
  width: 80px;\r
  height: 40px;\r
  background-color: #c4b5fd;\r
}\r
</style>\r
`,
  C = y({
    __name: 'gap',
    setup(x) {
      const n = c('small'),
        l = c(16),
        r = S(() => (n.value === 'custom' ? l.value : n.value))
      return (d, s) => (
        m(),
        p(
          v,
          null,
          [
            e('div', null, [
              t(
                a(f),
                {
                  label: 'small',
                  modelValue: n.value,
                  'onUpdate:modelValue': s[0] || (s[0] = (o) => (n.value = o)),
                },
                { default: u(() => s[5] || (s[5] = [i('small')])), _: 1 },
                8,
                ['modelValue'],
              ),
              t(
                a(f),
                {
                  label: 'middle',
                  modelValue: n.value,
                  'onUpdate:modelValue': s[1] || (s[1] = (o) => (n.value = o)),
                },
                { default: u(() => s[6] || (s[6] = [i('middle')])), _: 1 },
                8,
                ['modelValue'],
              ),
              t(
                a(f),
                {
                  label: 'large',
                  modelValue: n.value,
                  'onUpdate:modelValue': s[2] || (s[2] = (o) => (n.value = o)),
                },
                { default: u(() => s[7] || (s[7] = [i('large')])), _: 1 },
                8,
                ['modelValue'],
              ),
              t(
                a(f),
                {
                  label: 'custom',
                  modelValue: n.value,
                  'onUpdate:modelValue': s[3] || (s[3] = (o) => (n.value = o)),
                },
                { default: u(() => s[8] || (s[8] = [i('custom')])), _: 1 },
                8,
                ['modelValue'],
              ),
              A(
                t(
                  a(j),
                  {
                    modelValue: l.value,
                    'onUpdate:modelValue':
                      s[4] || (s[4] = (o) => (l.value = o)),
                  },
                  null,
                  8,
                  ['modelValue'],
                ),
                [[R, n.value === 'custom']],
              ),
            ]),
            t(
              a(g),
              { gap: r.value, style: { 'margin-top': '10px' } },
              {
                default: u(() => [
                  (m(),
                  p(
                    v,
                    null,
                    F(4, (o) => e('div', { key: o, class: 'flex-item' })),
                    64,
                  )),
                ]),
                _: 1,
              },
              8,
              ['gap'],
            ),
          ],
          64,
        )
      )
    },
  }),
  G = X(C, [['__scopeId', 'data-v-7504aee7']]),
  L = `<script setup lang="ts">\r
import { ref } from 'vue'\r
import { VerSegmented, VerFlex } from '@versakit/ui'\r
import { AlignProps, JustifyProps } from '@versakit/ui/components/flex/type'\r
\r
const justify = ref<JustifyProps>('flex-start')\r
const justifyOptions = [\r
  { label: 'flex-start', value: 'flex-start' },\r
  { label: 'center', value: 'center' },\r
  { label: 'flex-end', value: 'flex-end' },\r
  { label: 'space-between', value: 'space-between' },\r
  { label: 'space-around', value: 'space-around' },\r
  { label: 'space-evenly', value: 'space-evenly' },\r
]\r
\r
const align = ref<AlignProps>('flex-start')\r
const alignOptions = [\r
  { label: 'flex-start', value: 'flex-start' },\r
  { label: 'center', value: 'center' },\r
  { label: 'flex-end', value: 'flex-end' },\r
]\r
<\/script>\r
<template>\r
  <div style="line-height: 36px">justify-content:</div>\r
  <VerSegmented v-model="justify" :options="justifyOptions"></VerSegmented>\r
  <div style="line-height: 36px">align-items:</div>\r
  <VerSegmented v-model="align" :options="alignOptions"></VerSegmented>\r
  <VerFlex class="flex-container" :align="align" :justify="justify">\r
    <div v-for="n in 4" :key="n" class="flex-item" />\r
  </VerFlex>\r
</template>\r
<style scoped>\r
.flex-container {\r
  height: 150px;\r
  border-radius: 5px;\r
  border: 1px solid #c4b5fd;\r
  margin-top: 15px;\r
}\r
\r
.flex-item {\r
  width: 80px;\r
  height: 40px;\r
  background-color: #c4b5fd;\r
}\r
</style>\r
`,
  U = y({
    __name: 'align',
    setup(x) {
      const n = c('flex-start'),
        l = [
          { label: 'flex-start', value: 'flex-start' },
          { label: 'center', value: 'center' },
          { label: 'flex-end', value: 'flex-end' },
          { label: 'space-between', value: 'space-between' },
          { label: 'space-around', value: 'space-around' },
          { label: 'space-evenly', value: 'space-evenly' },
        ],
        r = c('flex-start'),
        d = [
          { label: 'flex-start', value: 'flex-start' },
          { label: 'center', value: 'center' },
          { label: 'flex-end', value: 'flex-end' },
        ]
      return (s, o) => (
        m(),
        p(
          v,
          null,
          [
            o[2] ||
              (o[2] = e(
                'div',
                { style: { 'line-height': '36px' } },
                'justify-content:',
                -1,
              )),
            t(
              a(Z),
              {
                modelValue: n.value,
                'onUpdate:modelValue': o[0] || (o[0] = (b) => (n.value = b)),
                options: l,
              },
              null,
              8,
              ['modelValue'],
            ),
            o[3] ||
              (o[3] = e(
                'div',
                { style: { 'line-height': '36px' } },
                'align-items:',
                -1,
              )),
            t(
              a(Z),
              {
                modelValue: r.value,
                'onUpdate:modelValue': o[1] || (o[1] = (b) => (r.value = b)),
                options: d,
              },
              null,
              8,
              ['modelValue'],
            ),
            t(
              a(g),
              { class: 'flex-container', align: r.value, justify: n.value },
              {
                default: u(() => [
                  (m(),
                  p(
                    v,
                    null,
                    F(4, (b) => e('div', { key: b, class: 'flex-item' })),
                    64,
                  )),
                ]),
                _: 1,
              },
              8,
              ['align', 'justify'],
            ),
          ],
          64,
        )
      )
    },
  }),
  T = X(U, [['__scopeId', 'data-v-92b44497']]),
  M = `<script setup lang="ts">\r
import { ref } from 'vue'\r
import { VerFlex, VerRadio } from '@versakit/ui'\r
\r
const direction = ref('horizontal')\r
<\/script>\r
\r
<template>\r
  <div>\r
    <VerRadio label="horizontal" v-model="direction">horizontal</VerRadio>\r
    <VerRadio label="vertical" v-model="direction">vertical</VerRadio>\r
  </div>\r
  <VerFlex :vertical="direction === 'vertical'">\r
    <div v-for="n in 4" :key="n" class="flex-item" />\r
  </VerFlex>\r
</template>\r
\r
<style scoped>\r
.flex-item {\r
  width: 25%;\r
  height: 80px;\r
  background-color: #c4b5fd;\r
}\r
</style>\r
`,
  P = y({
    __name: 'base',
    setup(x) {
      const n = c('horizontal')
      return (l, r) => (
        m(),
        p(
          v,
          null,
          [
            e('div', null, [
              t(
                a(f),
                {
                  label: 'horizontal',
                  modelValue: n.value,
                  'onUpdate:modelValue': r[0] || (r[0] = (d) => (n.value = d)),
                },
                { default: u(() => r[2] || (r[2] = [i('horizontal')])), _: 1 },
                8,
                ['modelValue'],
              ),
              t(
                a(f),
                {
                  label: 'vertical',
                  modelValue: n.value,
                  'onUpdate:modelValue': r[1] || (r[1] = (d) => (n.value = d)),
                },
                { default: u(() => r[3] || (r[3] = [i('vertical')])), _: 1 },
                8,
                ['modelValue'],
              ),
            ]),
            t(
              a(g),
              { vertical: n.value === 'vertical' },
              {
                default: u(() => [
                  (m(),
                  p(
                    v,
                    null,
                    F(4, (d) => e('div', { key: d, class: 'flex-item' })),
                    64,
                  )),
                ]),
                _: 1,
              },
              8,
              ['vertical'],
            ),
          ],
          64,
        )
      )
    },
  }),
  N = X(P, [['__scopeId', 'data-v-512677d6']]),
  O = { tabindex: '0' },
  I = JSON.parse(
    '{"title":"Flex 弹性布局","description":"","frontmatter":{},"headers":[],"relativePath":"components/flex/index.md","filePath":"components/flex/index.md"}',
  ),
  Q = { name: 'components/flex/index.md' },
  Y = Object.assign(Q, {
    setup(x) {
      return (n, l) => {
        const r = w('ClientOnly'),
          d = w('Tool')
        return (
          m(),
          p('div', null, [
            l[18] ||
              (l[18] = e(
                'h1',
                { id: 'flex-弹性布局', tabindex: '-1' },
                [
                  i('Flex 弹性布局 '),
                  e(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#flex-弹性布局',
                      'aria-label': 'Permalink to "Flex 弹性布局"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            l[19] ||
              (l[19] = e(
                'h2',
                { id: '基本使用', tabindex: '-1' },
                [
                  i('基本使用 '),
                  e(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#基本使用',
                      'aria-label': 'Permalink to "基本使用"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            t(r, null, {
              default: u(() => [
                t(
                  a(V),
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
                    vueCode: a(M),
                  },
                  { vue: u(() => [t(N)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            l[20] ||
              (l[20] = e(
                'h2',
                { id: '对齐方式', tabindex: '-1' },
                [
                  i('对齐方式 '),
                  e(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#对齐方式',
                      'aria-label': 'Permalink to "对齐方式"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            t(r, null, {
              default: u(() => [
                t(
                  a(V),
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
                    vueCode: a(L),
                  },
                  { vue: u(() => [t(T)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            l[21] ||
              (l[21] = e(
                'h2',
                { id: '间隙设置', tabindex: '-1' },
                [
                  i('间隙设置 '),
                  e(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#间隙设置',
                      'aria-label': 'Permalink to "间隙设置"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            t(r, null, {
              default: u(() => [
                t(
                  a(V),
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
                    vueCode: a(D),
                  },
                  { vue: u(() => [t(G)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            l[22] ||
              (l[22] = e(
                'h2',
                { id: '自动换行', tabindex: '-1' },
                [
                  i('自动换行 '),
                  e(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#自动换行',
                      'aria-label': 'Permalink to "自动换行"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            t(r, null, {
              default: u(() => [
                t(
                  a(V),
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
                    vueCode: a(z),
                  },
                  { vue: u(() => [t(k)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            l[23] ||
              (l[23] = e(
                'h2',
                { id: 'flex-api', tabindex: '-1' },
                [
                  i('Flex API '),
                  e(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#flex-api',
                      'aria-label': 'Permalink to "Flex API"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            e('table', O, [
              l[17] ||
                (l[17] = e(
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
                l[16] ||
                  (l[16] = e(
                    'tr',
                    null,
                    [
                      e('td', null, [e('code', null, 'vertical')]),
                      e('td', null, [
                        e('code', null, 'flex'),
                        i(' 主轴的方向是否垂直'),
                      ]),
                      e('td', null, [e('code', null, 'boolean')]),
                      e('td', null, 'false'),
                    ],
                    -1,
                  )),
                e('tr', null, [
                  l[1] || (l[1] = e('td', null, [e('code', null, 'wrap')], -1)),
                  l[2] ||
                    (l[2] = e(
                      'td',
                      null,
                      [
                        i('设置元素单行显示还是多行显示；参考 '),
                        e('code', null, 'flex-wrap'),
                      ],
                      -1,
                    )),
                  e('td', null, [
                    l[0] || (l[0] = e('code', null, 'enum', -1)),
                    t(d, { value: 'nowrap,wrap,wrap-reverse' }),
                  ]),
                  l[3] || (l[3] = e('td', null, 'nowrap', -1)),
                ]),
                e('tr', null, [
                  l[5] ||
                    (l[5] = e('td', null, [e('code', null, 'justify')], -1)),
                  l[6] ||
                    (l[6] = e(
                      'td',
                      null,
                      [
                        i('设置元素在主轴方向上的对齐方式；参考 '),
                        e('code', null, 'justify-content'),
                      ],
                      -1,
                    )),
                  e('td', null, [
                    l[4] || (l[4] = e('code', null, 'enum', -1)),
                    t(d, {
                      value:
                        'normal,flex-start,center,flex-end,space-between,space-around,space-evenly',
                    }),
                  ]),
                  l[7] || (l[7] = e('td', null, 'normal', -1)),
                ]),
                e('tr', null, [
                  l[9] ||
                    (l[9] = e('td', null, [e('code', null, 'align')], -1)),
                  l[10] ||
                    (l[10] = e(
                      'td',
                      null,
                      [
                        i('设置元素在交叉轴方向上的对齐方式；参考 '),
                        e('code', null, 'align-items'),
                      ],
                      -1,
                    )),
                  e('td', null, [
                    l[8] || (l[8] = e('code', null, 'enum', -1)),
                    t(d, { value: 'normal,flex-start,center,flex-end' }),
                  ]),
                  l[11] || (l[11] = e('td', null, 'normal', -1)),
                ]),
                e('tr', null, [
                  l[13] ||
                    (l[13] = e('td', null, [e('code', null, 'gap')], -1)),
                  l[14] ||
                    (l[14] = e(
                      'td',
                      null,
                      [
                        i('设置网格之间的间隙，数组时表示: '),
                        e('code', null, '[水平间距, 垂直间距]'),
                      ],
                      -1,
                    )),
                  e('td', null, [
                    l[12] || (l[12] = e('code', null, 'enum', -1)),
                    t(d, { value: 'number,number[],small,middle,large' }),
                  ]),
                  l[15] || (l[15] = e('td', null, 'middle', -1)),
                ]),
              ]),
            ]),
          ])
        )
      }
    },
  })
export { I as __pageData, Y as default }
