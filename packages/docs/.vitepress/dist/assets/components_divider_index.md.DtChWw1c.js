import { l as s } from './chunks/theme.BKnsVfWH.js'
import {
  d as m,
  o,
  a as d,
  b as t,
  q as r,
  L as l,
  l as n,
  u as i,
  U as b,
} from './chunks/framework.D5-Ddbi5.js'
import { R as v } from './chunks/index.CeAE3Zgl.js'
const f = `<template>\r
  <div>\r
    <span>Rain</span>\r
    <ver-divider direction="vertical" />\r
    <span>Home</span>\r
    <ver-divider direction="vertical" border-style="dashed" />\r
    <span>Grass</span>\r
  </div>\r
</template>\r
\r
<script lang="ts" setup>\r
import { VerDivider } from '@versakit/ui'\r
<\/script>\r
`,
  y = m({
    __name: 'vertical',
    setup(a) {
      return (u, e) => (
        o(),
        d('div', null, [
          e[0] || (e[0] = t('span', null, 'Rain', -1)),
          r(l(s), { direction: 'vertical' }),
          e[1] || (e[1] = t('span', null, 'Home', -1)),
          r(l(s), { direction: 'vertical', 'border-style': 'dashed' }),
          e[2] || (e[2] = t('span', null, 'Grass', -1)),
        ])
      )
    },
  }),
  D = `<template>\r
  <div>\r
    <ver-divider>🎇</ver-divider>\r
    <ver-divider position="center">🎇</ver-divider>\r
    <ver-divider position="right">🎇</ver-divider>\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
import { VerDivider } from '@versakit/ui'\r
<\/script>\r
`,
  B = m({
    __name: 'text',
    setup(a) {
      return (u, e) => (
        o(),
        d('div', null, [
          r(l(s), null, { default: n(() => e[0] || (e[0] = [i('🎇')])), _: 1 }),
          r(
            l(s),
            { position: 'center' },
            { default: n(() => e[1] || (e[1] = [i('🎇')])), _: 1 },
          ),
          r(
            l(s),
            { position: 'right' },
            { default: n(() => e[2] || (e[2] = [i('🎇')])), _: 1 },
          ),
        ])
      )
    },
  }),
  A = `<template>\r
  <div>\r
    <p>\r
      There little thoughts are the rustle of leaves; they have their whisper of\r
      joy in my mind.\r
    </p>\r
    <ver-divider line="dashed" />\r
    <p>\r
      There little thoughts are the rustle of leaves; they have their whisper of\r
      joy in my mind.\r
    </p>\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
import { VerDivider } from '@versakit/ui'\r
<\/script>\r
`,
  X = m({
    __name: 'style',
    setup(a) {
      return (u, e) => (
        o(),
        d('div', null, [
          e[0] ||
            (e[0] = t(
              'p',
              null,
              ' There little thoughts are the rustle of leaves; they have their whisper of joy in my mind. ',
              -1,
            )),
          r(l(s), { line: 'dashed' }),
          e[1] ||
            (e[1] = t(
              'p',
              null,
              ' There little thoughts are the rustle of leaves; they have their whisper of joy in my mind. ',
              -1,
            )),
        ])
      )
    },
  }),
  g = `<template>\r
  <div>\r
    <p>\r
      There little thoughts are the rustle of leaves; they have their whisper of\r
      joy in my mind.\r
    </p>\r
    <ver-divider />\r
    <p>\r
      There little thoughts are the rustle of leaves; they have their whisper of\r
      joy in my mind.\r
    </p>\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
import { VerDivider } from '@versakit/ui'\r
<\/script>\r
`,
  w = m({
    __name: 'base',
    setup(a) {
      return (u, e) => (
        o(),
        d('div', null, [
          e[0] ||
            (e[0] = t(
              'p',
              null,
              ' There little thoughts are the rustle of leaves; they have their whisper of joy in my mind. ',
              -1,
            )),
          r(l(s)),
          e[1] ||
            (e[1] = t(
              'p',
              null,
              ' There little thoughts are the rustle of leaves; they have their whisper of joy in my mind. ',
              -1,
            )),
        ])
      )
    },
  }),
  C = { tabindex: '0' },
  k = JSON.parse(
    '{"title":"Divider 分割线","description":"","frontmatter":{},"headers":[],"relativePath":"components/divider/index.md","filePath":"components/divider/index.md"}',
  ),
  x = { name: 'components/divider/index.md' },
  T = Object.assign(x, {
    setup(a) {
      return (u, e) => {
        const p = b('ClientOnly'),
          h = b('Tool')
        return (
          o(),
          d('div', null, [
            e[13] ||
              (e[13] = t(
                'h1',
                { id: 'divider-分割线', tabindex: '-1' },
                [
                  i('Divider 分割线 '),
                  t(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#divider-分割线',
                      'aria-label': 'Permalink to "Divider 分割线"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            e[14] || (e[14] = t('p', null, '区隔内容的分割线。', -1)),
            e[15] ||
              (e[15] = t(
                'h2',
                { id: '基础用法', tabindex: '-1' },
                [
                  i('基础用法 '),
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
            e[16] || (e[16] = t('p', null, '对不同段落的文本进行分割。', -1)),
            r(p, null, {
              default: n(() => [
                r(
                  l(v),
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
                    vueCode: l(g),
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
                { id: '虚线', tabindex: '-1' },
                [
                  i('虚线 '),
                  t(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#虚线',
                      'aria-label': 'Permalink to "虚线"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            e[18] || (e[18] = t('p', null, '您可以设置分隔符的样式。', -1)),
            r(p, null, {
              default: n(() => [
                r(
                  l(v),
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
                    vueCode: l(A),
                  },
                  { vue: n(() => [r(X)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            e[19] ||
              (e[19] = t(
                'h2',
                { id: '设置文案', tabindex: '-1' },
                [
                  i('设置文案 '),
                  t(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#设置文案',
                      'aria-label': 'Permalink to "设置文案"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            e[20] ||
              (e[20] = t('p', null, '可以在分割线上自定义文本内容。', -1)),
            r(p, null, {
              default: n(() => [
                r(
                  l(v),
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
                    vueCode: l(D),
                  },
                  { vue: n(() => [r(B)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            e[21] ||
              (e[21] = t(
                'h2',
                { id: '垂直分割线', tabindex: '-1' },
                [
                  i('垂直分割线 '),
                  t(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#垂直分割线',
                      'aria-label': 'Permalink to "垂直分割线"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            e[22] || (e[22] = t('p', null, '垂直方向的分割线。', -1)),
            r(p, null, {
              default: n(() => [
                r(
                  l(v),
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
                    vueCode: l(f),
                  },
                  { vue: n(() => [r(y)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            e[23] ||
              (e[23] = t(
                'h2',
                { id: 'divider-api', tabindex: '-1' },
                [
                  i('Divider API '),
                  t(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#divider-api',
                      'aria-label': 'Permalink to "Divider API"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            t('table', C, [
              e[12] ||
                (e[12] = t(
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
                  e[1] ||
                    (e[1] = t('td', null, [t('code', null, 'direction')], -1)),
                  e[2] || (e[2] = t('td', null, '分隔线的方向', -1)),
                  t('td', null, [
                    e[0] || (e[0] = t('code', null, 'enum', -1)),
                    r(h, { value: 'horizontal,vertical' }),
                  ]),
                  e[3] ||
                    (e[3] = t('td', null, [t('code', null, 'horizontal')], -1)),
                ]),
                t('tr', null, [
                  e[5] ||
                    (e[5] = t('td', null, [t('code', null, 'position')], -1)),
                  e[6] || (e[6] = t('td', null, '分割线的位置', -1)),
                  t('td', null, [
                    e[4] || (e[4] = t('code', null, 'enum', -1)),
                    r(h, { value: 'center,right,left' }),
                  ]),
                  e[7] || (e[7] = t('td', null, [t('code', null, 'left')], -1)),
                ]),
                t('tr', null, [
                  e[9] || (e[9] = t('td', null, [t('code', null, 'line')], -1)),
                  e[10] || (e[10] = t('td', null, '分隔线的虚实', -1)),
                  t('td', null, [
                    e[8] || (e[8] = t('code', null, 'enum', -1)),
                    r(h, { value: 'dashed,solid' }),
                  ]),
                  e[11] ||
                    (e[11] = t('td', null, [t('code', null, 'solid')], -1)),
                ]),
              ]),
            ]),
          ])
        )
      }
    },
  })
export { k as __pageData, T as default }
