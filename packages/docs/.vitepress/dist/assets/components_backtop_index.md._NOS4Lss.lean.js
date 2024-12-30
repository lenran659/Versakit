import { _ as m } from './chunks/theme.C9e_0uVK.js'
import {
  d as h,
  a as n,
  b as d,
  z as r,
  x as a,
  u as o,
  F as k,
  p as l,
  a9 as c,
  e,
  V as p,
} from './chunks/framework.Ch9zL8Hq.js'
import { R as b } from './chunks/index.DbkfPGQe.js'
const v = `<template>\r
  往下滑可以看到右下方的按钮。\r
  <ver-backtop icon="caret-up-fill" />\r
</template>\r
\r
<script setup lang="ts">\r
import { VerBacktop } from '@versakit/ui'\r
<\/script>\r
`,
  x = h({
    __name: 'icon',
    setup(i) {
      return (s, t) => (
        n(),
        d(
          k,
          null,
          [
            t[0] || (t[0] = r(' 往下滑可以看到右下方的按钮。 ')),
            a(o(m), { icon: 'caret-up-fill' }),
          ],
          64,
        )
      )
    },
  }),
  B = `<template>\r
  往下滑可以看到右下方的按钮。\r
  <ver-backtop right="130" bottom="40">UP</ver-backtop>\r
</template>\r
\r
<script setup lang="ts">\r
import { VerBacktop } from '@versakit/ui'\r
<\/script>\r
`,
  A = h({
    __name: 'base',
    setup(i) {
      return (s, t) => (
        n(),
        d(
          k,
          null,
          [
            t[1] || (t[1] = r(' 往下滑可以看到右下方的按钮。 ')),
            a(
              o(m),
              { right: '130', bottom: '40' },
              { default: l(() => t[0] || (t[0] = [r('UP')])), _: 1 },
            ),
          ],
          64,
        )
      )
    },
  }),
  g = { tabindex: '0' },
  q = JSON.parse(
    '{"title":"Backtop 回到顶部","description":"","frontmatter":{},"headers":[],"relativePath":"components/backtop/index.md","filePath":"components/backtop/index.md"}',
  ),
  C = { name: 'components/backtop/index.md' },
  y = Object.assign(C, {
    setup(i) {
      return (s, t) => {
        const u = p('ClientOnly'),
          f = p('Tool')
        return (
          n(),
          d('div', null, [
            t[4] ||
              (t[4] = c(
                '<h1 id="backtop-回到顶部" tabindex="-1">Backtop 回到顶部 <a class="header-anchor" href="#backtop-回到顶部" aria-label="Permalink to &quot;Backtop 回到顶部&quot;">​</a></h1><p>一个返回页面顶部的操作按钮。</p><h2 id="基础用法" tabindex="-1">基础用法 <a class="header-anchor" href="#基础用法" aria-label="Permalink to &quot;基础用法&quot;">​</a></h2><p>通过滑动来查看处于右下角的按钮，可以通过设置 <code>bottom</code>、<code>right</code> 设置 backtop 按钮具体的位置；通过设置 <code>visibilityHeight</code> 属性设置具体高度显示 backtop 按钮。</p>',
                4,
              )),
            a(u, null, {
              default: l(() => [
                a(
                  o(b),
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
                    vueCode: o(B),
                  },
                  { vue: l(() => [a(A)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            t[5] ||
              (t[5] = e(
                'h2',
                { id: '图标', tabindex: '-1' },
                [
                  r('图标 '),
                  e(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#图标',
                      'aria-label': 'Permalink to "图标"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            t[6] || (t[6] = e('p', null, '其中的内容可设置为图标。', -1)),
            a(u, null, {
              default: l(() => [
                a(
                  o(b),
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
                    vueCode: o(v),
                  },
                  { vue: l(() => [a(x)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            t[7] ||
              (t[7] = c(
                '<h2 id="backtop-api" tabindex="-1">backtop API <a class="header-anchor" href="#backtop-api" aria-label="Permalink to &quot;backtop API&quot;">​</a></h2><h3 id="backtop-属性" tabindex="-1">backtop 属性 <a class="header-anchor" href="#backtop-属性" aria-label="Permalink to &quot;backtop 属性&quot;">​</a></h3><table tabindex="0"><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>right</td><td>控制其显示位置，距离页面右边距</td><td><code>number</code></td><td>60</td></tr><tr><td>bottom</td><td>控制其显示位置，距离页面底部距离</td><td><code>number</code></td><td>40</td></tr><tr><td>visibilityHeight</td><td>滚动到此参数值才显示按钮</td><td><code>number</code></td><td>400</td></tr><tr><td>icon</td><td>图标组件</td><td><code>string</code> / <code>Component</code></td><td>-</td></tr></tbody></table><h3 id="avatar-事件" tabindex="-1">Avatar 事件 <a class="header-anchor" href="#avatar-事件" aria-label="Permalink to &quot;Avatar 事件&quot;">​</a></h3>',
                4,
              )),
            e('table', g, [
              t[3] ||
                (t[3] = e(
                  'thead',
                  null,
                  [
                    e('tr', null, [
                      e('th', null, '名称'),
                      e('th', null, '说明'),
                      e('th', null, '回调参数'),
                    ]),
                  ],
                  -1,
                )),
              e('tbody', null, [
                e('tr', null, [
                  t[1] || (t[1] = e('td', null, 'click', -1)),
                  t[2] || (t[2] = e('td', null, '点击按钮触发的事件', -1)),
                  e('td', null, [
                    t[0] || (t[0] = e('code', null, 'Function', -1)),
                    a(f, { value: '(evt: MouseEvent) => void' }),
                  ]),
                ]),
              ]),
            ]),
            t[8] ||
              (t[8] = e(
                'h3',
                { id: 'backtop-插槽', tabindex: '-1' },
                [
                  r('backtop 插槽 '),
                  e(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#backtop-插槽',
                      'aria-label': 'Permalink to "backtop 插槽"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            t[9] ||
              (t[9] = e(
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
                      e('td', null, 'default'),
                      e('td', null, '自定义默认内容'),
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
export { q as __pageData, y as default }
