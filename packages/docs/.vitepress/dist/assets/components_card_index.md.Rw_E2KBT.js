import { M as o, Z as x, i as C } from './chunks/theme.BKnsVfWH.js'
import {
  d as c,
  o as d,
  f as B,
  l as n,
  q as t,
  u as a,
  L as l,
  _ as b,
  a as i,
  b as e,
  F as h,
  y as f,
  t as y,
  a8 as X,
  U as v,
} from './chunks/framework.D5-Ddbi5.js'
import { R as m } from './chunks/index.CeAE3Zgl.js'
const A = `<template>\r
  <ver-row>\r
    <ver-card style="width: 480px" shadow="always">Always</ver-card>\r
    <ver-card style="width: 480px" shadow="hover">Hover</ver-card>\r
    <ver-card style="width: 480px" shadow="never">Never</ver-card>\r
  </ver-row>\r
</template>\r
\r
<script lang="ts" setup>\r
import { VerCard, VerRow } from '@versakit/ui'\r
<\/script>\r
\r
<style scoped>\r
.ver-card {\r
  margin: 20px 0;\r
}\r
</style>\r
`,
  V = c({
    __name: 'shadow',
    setup(u) {
      return (p, r) => (
        d(),
        B(l(x), null, {
          default: n(() => [
            t(
              l(o),
              { style: { width: '480px' }, shadow: 'always' },
              { default: n(() => r[0] || (r[0] = [a('Always')])), _: 1 },
            ),
            t(
              l(o),
              { style: { width: '480px' }, shadow: 'hover' },
              { default: n(() => r[1] || (r[1] = [a('Hover')])), _: 1 },
            ),
            t(
              l(o),
              { style: { width: '480px' }, shadow: 'never' },
              { default: n(() => r[2] || (r[2] = [a('Never')])), _: 1 },
            ),
          ]),
          _: 1,
        })
      )
    },
  }),
  F = b(V, [['__scopeId', 'data-v-a1630ba3']]),
  Z = `<template>\r
  <div>\r
    <ver-card>\r
      <template #header>\r
        <div>\r
          <span>头部</span>\r
        </div>\r
      </template>\r
      <div>\r
        <span>内容</span>\r
      </div>\r
      <template #footer>\r
        <div>\r
          <span>底部</span>\r
        </div>\r
      </template>\r
    </ver-card>\r
  </div>\r
</template>\r
\r
<script lang="ts" setup>\r
import { VerCard } from '@versakit/ui'\r
<\/script>\r
`,
  D = c({
    __name: 'template',
    setup(u) {
      return (p, r) => (
        d(),
        i('div', null, [
          t(l(o), null, {
            header: n(
              () =>
                r[0] ||
                (r[0] = [e('div', null, [e('span', null, '头部')], -1)]),
            ),
            footer: n(
              () =>
                r[1] ||
                (r[1] = [e('div', null, [e('span', null, '底部')], -1)]),
            ),
            default: n(() => [
              r[2] || (r[2] = e('div', null, [e('span', null, '内容')], -1)),
            ]),
            _: 1,
          }),
        ])
      )
    },
  }),
  _ = `<template>\r
  <div>\r
    <ver-card>\r
      <div v-for="o in 4" :key="o" class="text item">\r
        {{ 'List item ' + o }}\r
      </div>\r
    </ver-card>\r
  </div>\r
</template>\r
\r
<script lang="ts" setup>\r
import { VerCard } from '@versakit/ui'\r
<\/script>\r
\r
<style scoped>\r
.card-header {\r
  display: flex;\r
  justify-content: space-between;\r
  align-items: center;\r
}\r
.text {\r
  font-size: 14px;\r
}\r
\r
.item {\r
  margin-bottom: 18px;\r
}\r
</style>\r
`,
  k = c({
    __name: 'simple',
    setup(u) {
      return (p, r) => (
        d(),
        i('div', null, [
          t(l(o), null, {
            default: n(() => [
              (d(),
              i(
                h,
                null,
                f(4, (s) =>
                  e(
                    'div',
                    { key: s, class: 'text item' },
                    y('List item ' + s),
                    1,
                  ),
                ),
                64,
              )),
            ]),
            _: 1,
          }),
        ])
      )
    },
  }),
  j = b(k, [['__scopeId', 'data-v-0c8e15e0']]),
  N = `<template>\r
  <div>\r
    <ver-card>\r
      <template #header>\r
        <div class="card-header">\r
          <span>Card name</span>\r
          <ver-button size="sm" type="primary">按 钮</ver-button>\r
        </div>\r
      </template>\r
      <div v-for="o in 4" :key="o" class="text item">\r
        {{ 'List item ' + o }}\r
      </div>\r
    </ver-card>\r
  </div>\r
</template>\r
\r
<script lang="ts" setup>\r
import { VerCard, VerButton } from '@versakit/ui'\r
<\/script>\r
\r
<style scoped>\r
.card-header {\r
  display: flex;\r
  justify-content: space-between;\r
  align-items: center;\r
}\r
.text {\r
  font-size: 14px;\r
}\r
\r
.item {\r
  margin-bottom: 18px;\r
}\r
</style>\r
`,
  g = { class: 'card-header' },
  L = c({
    __name: 'base',
    setup(u) {
      return (p, r) => (
        d(),
        i('div', null, [
          t(l(o), null, {
            header: n(() => [
              e('div', g, [
                r[1] || (r[1] = e('span', null, 'Card name', -1)),
                t(
                  l(C),
                  { size: 'sm', type: 'primary' },
                  { default: n(() => r[0] || (r[0] = [a('按 钮')])), _: 1 },
                ),
              ]),
            ]),
            default: n(() => [
              (d(),
              i(
                h,
                null,
                f(4, (s) =>
                  e(
                    'div',
                    { key: s, class: 'text item' },
                    y('List item ' + s),
                    1,
                  ),
                ),
                64,
              )),
            ]),
            _: 1,
          }),
        ])
      )
    },
  }),
  z = b(L, [['__scopeId', 'data-v-79bf1b49']]),
  G = { tabindex: '0' },
  T = JSON.parse(
    '{"title":"Card 卡片","description":"","frontmatter":{},"headers":[],"relativePath":"components/card/index.md","filePath":"components/card/index.md"}',
  ),
  R = { name: 'components/card/index.md' },
  P = Object.assign(R, {
    setup(u) {
      return (p, r) => {
        const s = v('ClientOnly'),
          w = v('Tool')
        return (
          d(),
          i('div', null, [
            r[5] ||
              (r[5] = X(
                '<h1 id="card-卡片" tabindex="-1">Card 卡片 <a class="header-anchor" href="#card-卡片" aria-label="Permalink to &quot;Card 卡片&quot;">​</a></h1><p>将信息聚合在卡片容器中展示。</p><h2 id="基础用法" tabindex="-1">基础用法 <a class="header-anchor" href="#基础用法" aria-label="Permalink to &quot;基础用法&quot;">​</a></h2><p>卡片包含标题，内容以及操作区域。</p><p>Card 组件 由 <code>header</code> 和 <code>body</code> 组成。<code>header</code> 是可选的，其内容取决于一个具名的 <code>solt</code></p>',
                5,
              )),
            t(s, null, {
              default: n(() => [
                t(
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
                    vueCode: l(N),
                  },
                  { vue: n(() => [t(z)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            r[6] ||
              (r[6] = e(
                'h2',
                { id: '简单卡片', tabindex: '-1' },
                [
                  a('简单卡片 '),
                  e(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#简单卡片',
                      'aria-label': 'Permalink to "简单卡片"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            r[7] || (r[7] = e('p', null, '卡片可以只有内容区域。', -1)),
            t(s, null, {
              default: n(() => [
                t(
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
                    vueCode: l(_),
                  },
                  { vue: n(() => [t(j)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            r[8] ||
              (r[8] = e(
                'h2',
                { id: '插槽', tabindex: '-1' },
                [
                  a('插槽 '),
                  e(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#插槽',
                      'aria-label': 'Permalink to "插槽"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            r[9] || (r[9] = e('p', null, '卡片可以只有内容区域。', -1)),
            t(s, null, {
              default: n(() => [
                t(
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
                    vueCode: l(Z),
                  },
                  { vue: n(() => [t(D)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            r[10] ||
              (r[10] = e(
                'h2',
                { id: '带有阴影效果的卡片', tabindex: '-1' },
                [
                  a('带有阴影效果的卡片 '),
                  e(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#带有阴影效果的卡片',
                      'aria-label': 'Permalink to "带有阴影效果的卡片"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            r[11] ||
              (r[11] = e(
                'p',
                null,
                '你可以定义什么时候展示卡片的阴影效果。',
                -1,
              )),
            r[12] ||
              (r[12] = e(
                'p',
                null,
                [
                  a('通过 '),
                  e('code', null, 'shadow'),
                  a(' 属性设置卡片阴影出现的时刻。该属性的值可以是: '),
                  e('code', null, 'always'),
                  a('、'),
                  e('code', null, 'hover'),
                  a(' 或 '),
                  e('code', null, 'never'),
                ],
                -1,
              )),
            t(s, null, {
              default: n(() => [
                t(
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
                    vueCode: l(A),
                  },
                  { vue: n(() => [t(F)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            r[13] ||
              (r[13] = e(
                'h2',
                { id: 'card-api', tabindex: '-1' },
                [
                  a('Card API '),
                  e(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#card-api',
                      'aria-label': 'Permalink to "Card API"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            r[14] ||
              (r[14] = e(
                'h3',
                { id: 'card-属性', tabindex: '-1' },
                [
                  a('Card 属性 '),
                  e(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#card-属性',
                      'aria-label': 'Permalink to "Card 属性"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            e('table', G, [
              r[4] ||
                (r[4] = e(
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
                e('tr', null, [
                  r[1] ||
                    (r[1] = e('td', null, [e('code', null, 'shadow')], -1)),
                  r[2] ||
                    (r[2] = e(
                      'td',
                      null,
                      '可以使用shadow来决定卡片拥有阴影的时机',
                      -1,
                    )),
                  e('td', null, [
                    r[0] || (r[0] = e('code', null, 'enum', -1)),
                    t(w, { value: 'always,hover,never' }),
                  ]),
                  r[3] || (r[3] = e('td', null, 'always', -1)),
                ]),
              ]),
            ]),
            r[15] ||
              (r[15] = e(
                'h3',
                { id: 'card-插槽', tabindex: '-1' },
                [
                  a('Card 插槽 '),
                  e(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#card-插槽',
                      'aria-label': 'Permalink to "Card 插槽"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            r[16] ||
              (r[16] = e(
                'table',
                { tabindex: '0' },
                [
                  e('thead', null, [
                    e('tr', null, [
                      e('th', null, '插槽名'),
                      e('th', null, '说明'),
                    ]),
                  ]),
                  e('tbody', null, [
                    e('tr', null, [
                      e('td', null, [e('code', null, 'header')]),
                      e('td', null, '卡片标题内容'),
                    ]),
                  ]),
                ],
                -1,
              )),
          ])
        )
      }
    },
  })
export { T as __pageData, P as default }
