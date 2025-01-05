import { R as o } from './chunks/theme.C9zyzoQC.js'
import {
  a as s,
  b,
  x as t,
  p as a,
  z as n,
  u as r,
  F as v,
  j as h,
  e as l,
  V as p,
} from './chunks/framework.Ch9zL8Hq.js'
import { R as m } from './chunks/index.DbkfPGQe.js'
const P = `<template>\r
  <VerPanel shadow="always">始终</VerPanel>\r
  <VerPanel shadow="hover">悬浮</VerPanel>\r
  <VerPanel shadow="never">永不</VerPanel>\r
</template>\r
\r
<script setup>\r
import { VerPanel } from '@versakit/ui'\r
<\/script>\r
`,
  V = {
    __name: 'shadow',
    setup(d) {
      return (u, e) => (
        s(),
        b(
          v,
          null,
          [
            t(
              r(o),
              { shadow: 'always' },
              { default: a(() => e[0] || (e[0] = [n('始终')])), _: 1 },
            ),
            t(
              r(o),
              { shadow: 'hover' },
              { default: a(() => e[1] || (e[1] = [n('悬浮')])), _: 1 },
            ),
            t(
              r(o),
              { shadow: 'never' },
              { default: a(() => e[2] || (e[2] = [n('永不')])), _: 1 },
            ),
          ],
          64,
        )
      )
    },
  },
  w = `<template>\r
  <VerPanel>基本面板</VerPanel>\r
</template>\r
\r
<script setup>\r
import { VerPanel } from '@versakit/ui'\r
<\/script>\r
`,
  x = {
    __name: 'base',
    setup(d) {
      return (u, e) => (
        s(),
        h(r(o), null, {
          default: a(() => e[0] || (e[0] = [n('基本面板')])),
          _: 1,
        })
      )
    },
  },
  B = { tabindex: '0' },
  C = JSON.parse(
    '{"title":"Panel 面板","description":"","frontmatter":{},"headers":[],"relativePath":"components/panel/index.md","filePath":"components/panel/index.md"}',
  ),
  A = { name: 'components/panel/index.md' },
  k = Object.assign(A, {
    setup(d) {
      return (u, e) => {
        const i = p('ClientOnly'),
          f = p('Tool')
        return (
          s(),
          b('div', null, [
            e[5] ||
              (e[5] = l(
                'h1',
                { id: 'panel-面板', tabindex: '-1' },
                [
                  n('Panel 面板 '),
                  l(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#panel-面板',
                      'aria-label': 'Permalink to "Panel 面板"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            e[6] ||
              (e[6] = l(
                'p',
                null,
                '面板通常是指一个独立的容器，用于承载内容。',
                -1,
              )),
            e[7] ||
              (e[7] = l(
                'h2',
                { id: '基础用法', tabindex: '-1' },
                [
                  n('基础用法 '),
                  l(
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
            e[8] || (e[8] = l('p', null, '这是一个很简单的面板。', -1)),
            t(i, null, {
              default: a(() => [
                t(
                  r(m),
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
                    vueCode: r(w),
                  },
                  { vue: a(() => [t(x)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            e[9] ||
              (e[9] = l(
                'h2',
                { id: '阴影', tabindex: '-1' },
                [
                  n('阴影 '),
                  l(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#阴影',
                      'aria-label': 'Permalink to "阴影"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            e[10] ||
              (e[10] = l(
                'p',
                null,
                '你可以定义什么时候展示面板的阴影效果。',
                -1,
              )),
            e[11] ||
              (e[11] = l(
                'p',
                null,
                [
                  n('通过'),
                  l('code', null, 'shadow'),
                  n('属性设置卡片阴影出现的时刻。该属性的值可以是: '),
                  l('code', null, 'always'),
                  n('、'),
                  l('code', null, 'hover'),
                  n(' 或 '),
                  l('code', null, 'never'),
                ],
                -1,
              )),
            t(i, null, {
              default: a(() => [
                t(
                  r(m),
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
                    vueCode: r(P),
                  },
                  { vue: a(() => [t(V)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            e[12] ||
              (e[12] = l(
                'h2',
                { id: 'panel-api', tabindex: '-1' },
                [
                  n('Panel API '),
                  l(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#panel-api',
                      'aria-label': 'Permalink to "Panel API"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            e[13] ||
              (e[13] = l(
                'h3',
                { id: 'panel-属性', tabindex: '-1' },
                [
                  n('Panel 属性 '),
                  l(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#panel-属性',
                      'aria-label': 'Permalink to "Panel 属性"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            l('table', B, [
              e[4] ||
                (e[4] = l(
                  'thead',
                  null,
                  [
                    l('tr', null, [
                      l('th', null, '属性'),
                      l('th', null, '说明'),
                      l('th', null, '类型'),
                      l('th', null, '默认值'),
                    ]),
                  ],
                  -1,
                )),
              l('tbody', null, [
                l('tr', null, [
                  e[1] ||
                    (e[1] = l('td', null, [l('code', null, 'shadow')], -1)),
                  e[2] ||
                    (e[2] = l(
                      'td',
                      null,
                      '可以使用 shadow 来决定卡片拥有阴影的时机',
                      -1,
                    )),
                  l('td', null, [
                    e[0] || (e[0] = l('code', null, 'enum', -1)),
                    t(f, { value: 'always,hover,never,' }),
                  ]),
                  e[3] ||
                    (e[3] = l('td', null, [l('code', null, 'always')], -1)),
                ]),
              ]),
            ]),
          ])
        )
      }
    },
  })
export { C as __pageData, k as default }
