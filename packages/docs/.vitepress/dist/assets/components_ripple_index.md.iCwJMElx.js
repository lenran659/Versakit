import { Y as p } from './chunks/theme.BKnsVfWH.js'
import {
  d as f,
  o as n,
  a as c,
  m as s,
  f as d,
  l as t,
  u as i,
  L as l,
  ab as v,
  b as a,
  q as o,
  a8 as h,
  U as V,
} from './chunks/framework.D5-Ddbi5.js'
import { R as b } from './chunks/index.CeAE3Zgl.js'
const P = `<script setup lang="ts">\r
import { VerPanel } from '@versakit/ui'\r
<\/script>\r
\r
<template>\r
  <div>\r
    <VerPanel v-ripple="{ duration: 800, color: '#c4b5fd' }">Primary</VerPanel>\r
\r
    <VerPanel v-ripple="{ duration: 800, color: '#86efac' }">success</VerPanel>\r
\r
    <VerPanel v-ripple="{ duration: 800, color: '#fdba74' }">warn</VerPanel>\r
\r
    <VerPanel v-ripple="{ duration: 800, color: '#fca5a5' }">error</VerPanel>\r
  </div>\r
</template>\r
`,
  _ = f({
    __name: 'color',
    setup(u) {
      return (m, e) => {
        const r = v('ripple')
        return (
          n(),
          c('div', null, [
            s(
              (n(),
              d(l(p), null, {
                default: t(() => e[0] || (e[0] = [i('Primary')])),
                _: 1,
              })),
              [[r, { duration: 800, color: '#c4b5fd' }]],
            ),
            s(
              (n(),
              d(l(p), null, {
                default: t(() => e[1] || (e[1] = [i('success')])),
                _: 1,
              })),
              [[r, { duration: 800, color: '#86efac' }]],
            ),
            s(
              (n(),
              d(l(p), null, {
                default: t(() => e[2] || (e[2] = [i('warn')])),
                _: 1,
              })),
              [[r, { duration: 800, color: '#fdba74' }]],
            ),
            s(
              (n(),
              d(l(p), null, {
                default: t(() => e[3] || (e[3] = [i('error')])),
                _: 1,
              })),
              [[r, { duration: 800, color: '#fca5a5' }]],
            ),
          ])
        )
      }
    },
  }),
  B = `<script setup lang="ts">\r
import { VerPanel } from '@versakit/ui'\r
<\/script>\r
\r
<template>\r
  <div>\r
    <VerPanel v-ripple>组件内使用v-ripple</VerPanel>\r
  </div>\r
</template>\r
`,
  x = f({
    __name: 'base',
    setup(u) {
      return (m, e) => {
        const r = v('ripple')
        return (
          n(),
          c('div', null, [
            s(
              (n(),
              d(l(p), null, {
                default: t(() => e[0] || (e[0] = [i('组件内使用v-ripple')])),
                _: 1,
              })),
              [[r]],
            ),
          ])
        )
      }
    },
  }),
  R = JSON.parse(
    '{"title":"Ripple 水波纹","description":"","frontmatter":{},"headers":[],"relativePath":"components/ripple/index.md","filePath":"components/ripple/index.md"}',
  ),
  D = { name: 'components/ripple/index.md' },
  k = Object.assign(D, {
    setup(u) {
      return (m, e) => {
        const r = V('ClientOnly')
        return (
          n(),
          c('div', null, [
            e[0] ||
              (e[0] = a(
                'h1',
                { id: 'ripple-水波纹', tabindex: '-1' },
                [
                  i('Ripple 水波纹 '),
                  a(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#ripple-水波纹',
                      'aria-label': 'Permalink to "Ripple 水波纹"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            e[1] ||
              (e[1] = a(
                'h2',
                { id: '基本用法', tabindex: '-1' },
                [
                  i('基本用法 '),
                  a(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#基本用法',
                      'aria-label': 'Permalink to "基本用法"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            e[2] ||
              (e[2] = a(
                'p',
                null,
                '你可以在组件内通过v-ripple属性，让元素获得水波纹效果。',
                -1,
              )),
            o(r, null, {
              default: t(() => [
                o(
                  l(b),
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
                    vueCode: l(B),
                  },
                  { vue: t(() => [o(x)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            e[3] ||
              (e[3] = a(
                'h2',
                { id: '自定义颜色', tabindex: '-1' },
                [
                  i('自定义颜色 '),
                  a(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#自定义颜色',
                      'aria-label': 'Permalink to "自定义颜色"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            e[4] ||
              (e[4] = a(
                'p',
                null,
                '此外，你还可以自定义水波纹的样式，以下是几个水波纹颜色的样式修改示例。',
                -1,
              )),
            o(r, null, {
              default: t(() => [
                o(
                  l(b),
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
                    vueCode: l(P),
                  },
                  { vue: t(() => [o(_)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            e[5] ||
              (e[5] = h(
                '<h2 id="ripple-api" tabindex="-1">Ripple API <a class="header-anchor" href="#ripple-api" aria-label="Permalink to &quot;Ripple API&quot;">​</a></h2><h3 id="ripple-属性" tabindex="-1">Ripple 属性 <a class="header-anchor" href="#ripple-属性" aria-label="Permalink to &quot;Ripple 属性&quot;">​</a></h3><table tabindex="0"><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>v-ripple</code></td><td>设置水波纹的颜色，持续时间</td><td><code>string</code></td><td><code>{ duration: 800, color: &#39;#cccccc&#39; }</code></td></tr></tbody></table>',
                3,
              )),
          ])
        )
      }
    },
  })
export { R as __pageData, k as default }
