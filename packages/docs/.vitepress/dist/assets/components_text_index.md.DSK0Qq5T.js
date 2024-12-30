import { m as a, B as x } from './chunks/theme.C9e_0uVK.js'
import {
  d as p,
  a as o,
  j as f,
  p as n,
  x as r,
  z as l,
  u as s,
  _ as c,
  b as y,
  e as t,
  V as b,
} from './chunks/framework.Ch9zL8Hq.js'
import { R as i } from './chunks/index.DbkfPGQe.js'
const V = `c\r
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
  F = p({
    __name: 'truncated',
    setup(u) {
      return (d, e) => (
        o(),
        f(s(x), null, {
          default: n(() => [
            r(
              s(a),
              { class: 'w-100px', truncated: '' },
              {
                default: n(
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
  w = c(F, [['__scopeId', 'data-v-9683304d']]),
  B = `<script setup lang="ts">\r
import { VerRow, VerText } from '@versakit/ui'\r
<\/script>\r
\r
<template>\r
  <ver-row>\r
    <ver-text class="mx4" size="lg">lg</ver-text>\r
    <ver-text class="mx4">md</ver-text>\r
    <ver-text class="mx4" size="sm">sm</ver-text>\r
    <ver-text class="mx4" size="xs">xs</ver-text>\r
  </ver-row>\r
</template>\r
\r
<style scoped>\r
.mx4 {\r
  margin: 0px 10px;\r
}\r
</style>\r
`,
  A = p({
    __name: 'size',
    setup(u) {
      return (d, e) => (
        o(),
        f(s(x), null, {
          default: n(() => [
            r(
              s(a),
              { class: 'mx4', size: 'lg' },
              { default: n(() => e[0] || (e[0] = [l('lg')])), _: 1 },
            ),
            r(
              s(a),
              { class: 'mx4' },
              { default: n(() => e[1] || (e[1] = [l('md')])), _: 1 },
            ),
            r(
              s(a),
              { class: 'mx4', size: 'sm' },
              { default: n(() => e[2] || (e[2] = [l('sm')])), _: 1 },
            ),
            r(
              s(a),
              { class: 'mx4', size: 'xs' },
              { default: n(() => e[3] || (e[3] = [l('xs')])), _: 1 },
            ),
          ]),
          _: 1,
        })
      )
    },
  }),
  D = c(A, [['__scopeId', 'data-v-b9cfb24c']]),
  G = `<script setup lang="ts">\r
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
  g = p({
    __name: 'base',
    setup(u) {
      return (d, e) => (
        o(),
        f(s(x), null, {
          default: n(() => [
            r(
              s(a),
              { class: 'mx4' },
              { default: n(() => e[0] || (e[0] = [l('Default')])), _: 1 },
            ),
            r(
              s(a),
              { class: 'mx4', type: 'primary' },
              { default: n(() => e[1] || (e[1] = [l('Primary')])), _: 1 },
            ),
            r(
              s(a),
              { class: 'mx4', type: 'success' },
              { default: n(() => e[2] || (e[2] = [l('Success')])), _: 1 },
            ),
            r(
              s(a),
              { class: 'mx4', type: 'info' },
              { default: n(() => e[3] || (e[3] = [l('Info')])), _: 1 },
            ),
            r(
              s(a),
              { class: 'mx4', type: 'warning' },
              { default: n(() => e[4] || (e[4] = [l('Warning')])), _: 1 },
            ),
            r(
              s(a),
              { class: 'mx4', type: 'error' },
              { default: n(() => e[5] || (e[5] = [l('Drange')])), _: 1 },
            ),
          ]),
          _: 1,
        })
      )
    },
  }),
  X = c(g, [['__scopeId', 'data-v-3f5ff8fe']]),
  T = { tabindex: '0' },
  Z = JSON.parse(
    '{"title":"Text 文本","description":"","frontmatter":{},"headers":[],"relativePath":"components/text/index.md","filePath":"components/text/index.md"}',
  ),
  C = { name: 'components/text/index.md' },
  z = Object.assign(C, {
    setup(u) {
      return (d, e) => {
        const m = b('ClientOnly'),
          v = b('Tool')
        return (
          o(),
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
            r(m, null, {
              default: n(() => [
                r(
                  s(i),
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
                    vueCode: s(G),
                  },
                  { vue: n(() => [r(X)]), _: 1 },
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
            r(m, null, {
              default: n(() => [
                r(
                  s(i),
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
                    vueCode: s(B),
                  },
                  { vue: n(() => [r(D)]), _: 1 },
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
            r(m, null, {
              default: n(() => [
                r(
                  s(i),
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
                    vueCode: s(V),
                  },
                  { vue: n(() => [r(w)]), _: 1 },
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
            t('table', T, [
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
                    r(v, { value: 'default,primary,secondary,' }),
                  ]),
                  e[3] || (e[3] = t('td', null, 'default', -1)),
                ]),
                t('tr', null, [
                  e[5] || (e[5] = t('td', null, [t('code', null, 'size')], -1)),
                  e[6] || (e[6] = t('td', null, '用于调整文本的大小', -1)),
                  t('td', null, [
                    e[4] || (e[4] = t('code', null, 'enum', -1)),
                    r(v, { value: 'large,default,small,' }),
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
export { Z as __pageData, z as default }
