import { i as s, m as i } from './chunks/theme.BKnsVfWH.js'
import {
  j as f,
  o as m,
  f as g,
  l as r,
  q as l,
  L as a,
  u as n,
  _ as v,
  a as B,
  F as V,
  a8 as y,
  b as e,
  U as b,
} from './chunks/framework.D5-Ddbi5.js'
import { R as c } from './chunks/index.CeAE3Zgl.js'
const h = `<template>\r
  <VerBadge type="number" :value="value1">\r
    <VerButton @click="countUp()">点我增加</VerButton>\r
  </VerBadge>\r
</template>\r
\r
<script setup>\r
import { VerBadge, VerButton } from '@versakit/ui'\r
import { ref } from 'vue'\r
\r
const value1 = ref(95)\r
\r
const countUp = () => {\r
  value1.value++\r
}\r
<\/script>\r
`,
  x = {
    __name: 'number',
    setup(p) {
      const u = f(95),
        t = () => {
          u.value++
        }
      return (d, o) => (
        m(),
        g(
          a(i),
          { type: 'number', value: u.value },
          {
            default: r(() => [
              l(
                a(s),
                { onClick: o[0] || (o[0] = (D) => t()) },
                { default: r(() => o[1] || (o[1] = [n('点我增加')])), _: 1 },
              ),
            ]),
            _: 1,
          },
          8,
          ['value'],
        )
      )
    },
  },
  _ = `<template>\r
  <VerBadge>\r
    <VerButton type="primary">点我没啥</VerButton>\r
  </VerBadge>\r
  <VerBadge type="text" value="new">\r
    <VerButton>点我没事</VerButton>\r
  </VerBadge>\r
</template>\r
\r
<script setup>\r
import { VerBadge, VerButton } from '@versakit/ui'\r
<\/script>\r
\r
<style scoped lang="scss">\r
.ver-badge {\r
  margin-right: 20px;\r
}\r
</style>\r
`,
  A = {
    __name: 'base',
    setup(p) {
      return (u, t) => (
        m(),
        B(
          V,
          null,
          [
            l(a(i), null, {
              default: r(() => [
                l(
                  a(s),
                  { type: 'primary' },
                  { default: r(() => t[0] || (t[0] = [n('点我没啥')])), _: 1 },
                ),
              ]),
              _: 1,
            }),
            l(
              a(i),
              { type: 'text', value: 'new' },
              {
                default: r(() => [
                  l(a(s), null, {
                    default: r(() => t[1] || (t[1] = [n('点我没事')])),
                    _: 1,
                  }),
                ]),
                _: 1,
              },
            ),
          ],
          64,
        )
      )
    },
  },
  F = v(A, [['__scopeId', 'data-v-be15925e']]),
  w = { tabindex: '0' },
  Z = JSON.parse(
    '{"title":"Badge 徽标","description":"","frontmatter":{},"headers":[],"relativePath":"components/badge/index.md","filePath":"components/badge/index.md"}',
  ),
  C = { name: 'components/badge/index.md' },
  L = Object.assign(C, {
    setup(p) {
      return (u, t) => {
        const d = b('ClientOnly'),
          o = b('Tool')
        return (
          m(),
          B('div', null, [
            t[6] ||
              (t[6] = y(
                '<h1 id="badge-徽标" tabindex="-1">Badge 徽标 <a class="header-anchor" href="#badge-徽标" aria-label="Permalink to &quot;Badge 徽标&quot;">​</a></h1><p>按钮和图标上的数字或状态标记。</p><h2 id="基础用法" tabindex="-1">基础用法 <a class="header-anchor" href="#基础用法" aria-label="Permalink to &quot;基础用法&quot;">​</a></h2><p>可以通过设置 <code>type</code> 属性改变徽标类型。 数量值可接受 <code>Number</code> 或 <code>String。</code></p>',
                4,
              )),
            l(d, null, {
              default: r(() => [
                l(
                  a(c),
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
                    vueCode: a(_),
                  },
                  { vue: r(() => [l(F)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            t[7] ||
              (t[7] = e(
                'h2',
                { id: '最大值徽标', tabindex: '-1' },
                [
                  n('最大值徽标 '),
                  e(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#最大值徽标',
                      'aria-label': 'Permalink to "最大值徽标"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            t[8] ||
              (t[8] = e(
                'p',
                null,
                [
                  n('当徽标中数字大于 '),
                  e('code', null, '99'),
                  n(' 时候会显示 '),
                  e('code', null, '99+'),
                  n('，使用数字徽标需将 '),
                  e('code', null, 'type'),
                  n(' 属性设置为 '),
                  e('code', null, 'number'),
                ],
                -1,
              )),
            l(d, null, {
              default: r(() => [
                l(
                  a(c),
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
                    vueCode: a(h),
                  },
                  { vue: r(() => [l(x)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            t[9] ||
              (t[9] = e(
                'h2',
                { id: 'badge-api', tabindex: '-1' },
                [
                  n('Badge API '),
                  e(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#badge-api',
                      'aria-label': 'Permalink to "Badge API"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            t[10] ||
              (t[10] = e(
                'h3',
                { id: 'badge-属性', tabindex: '-1' },
                [
                  n('Badge 属性 '),
                  e(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#badge-属性',
                      'aria-label': 'Permalink to "Badge 属性"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            e('table', w, [
              t[5] ||
                (t[5] = e(
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
                  t[1] || (t[1] = e('td', null, [e('code', null, 'type')], -1)),
                  t[2] || (t[2] = e('td', null, '指定徽标的类型', -1)),
                  e('td', null, [
                    t[0] || (t[0] = e('code', null, 'enum', -1)),
                    l(o, { value: 'number,string' }),
                  ]),
                  t[3] || (t[3] = e('td', null, 'number', -1)),
                ]),
                t[4] ||
                  (t[4] = e(
                    'tr',
                    null,
                    [
                      e('td', null, [e('code', null, 'value')]),
                      e('td', null, '徽标显示的值'),
                      e('td', null, [
                        e('code', null, 'number'),
                        n(' / '),
                        e('code', null, 'string'),
                      ]),
                      e('td', null, '-'),
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
export { Z as __pageData, L as default }
