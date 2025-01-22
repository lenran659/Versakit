import { C as o } from './chunks/theme.BKnsVfWH.js'
import {
  d as m,
  o as d,
  a as g,
  b as a,
  q as n,
  l as t,
  u as r,
  L as l,
  F as y,
  _ as f,
  a8 as V,
  U as s,
} from './chunks/framework.D5-Ddbi5.js'
import { R as b } from './chunks/index.CeAE3Zgl.js'
const v = `<template>\r
  <div class="my">\r
    <VerTag>Tag 1</VerTag>\r
    <VerTag type="success">Tag 2</VerTag>\r
    <VerTag type="info">Tag 3</VerTag>\r
    <VerTag type="warning">Tag 4</VerTag>\r
    <VerTag type="error">Tag 5</VerTag>\r
  </div>\r
\r
  <div class="my">\r
    <VerTag plain>Tag 1</VerTag>\r
    <VerTag plain type="success">Tag 2</VerTag>\r
    <VerTag plain type="info">Tag 3</VerTag>\r
    <VerTag plain type="warning">Tag 4</VerTag>\r
    <VerTag plain type="error">Tag 5</VerTag>\r
  </div>\r
\r
  <div class="my">\r
    <VerTag round>Tag 1</VerTag>\r
    <VerTag round type="success">Tag 2</VerTag>\r
    <VerTag round type="info">Tag 3</VerTag>\r
    <VerTag round type="warning">Tag 4</VerTag>\r
    <VerTag round type="error">Tag 5</VerTag>\r
  </div>\r
</template>\r
\r
<script lang="ts" setup>\r
import { VerTag } from '@versakit/ui'\r
<\/script>\r
\r
<style scoped>\r
.my {\r
  margin: 1rem 0;\r
}\r
\r
.ver-tag + .ver-tag {\r
  margin: 0px 10px;\r
}\r
</style>\r
`,
  x = { class: 'my' },
  w = { class: 'my' },
  C = { class: 'my' },
  F = m({
    __name: 'base',
    setup(u) {
      return (i, e) => (
        d(),
        g(
          y,
          null,
          [
            a('div', x, [
              n(l(o), null, {
                default: t(() => e[0] || (e[0] = [r('Tag 1')])),
                _: 1,
              }),
              n(
                l(o),
                { type: 'success' },
                { default: t(() => e[1] || (e[1] = [r('Tag 2')])), _: 1 },
              ),
              n(
                l(o),
                { type: 'info' },
                { default: t(() => e[2] || (e[2] = [r('Tag 3')])), _: 1 },
              ),
              n(
                l(o),
                { type: 'warning' },
                { default: t(() => e[3] || (e[3] = [r('Tag 4')])), _: 1 },
              ),
              n(
                l(o),
                { type: 'error' },
                { default: t(() => e[4] || (e[4] = [r('Tag 5')])), _: 1 },
              ),
            ]),
            a('div', w, [
              n(
                l(o),
                { plain: '' },
                { default: t(() => e[5] || (e[5] = [r('Tag 1')])), _: 1 },
              ),
              n(
                l(o),
                { plain: '', type: 'success' },
                { default: t(() => e[6] || (e[6] = [r('Tag 2')])), _: 1 },
              ),
              n(
                l(o),
                { plain: '', type: 'info' },
                { default: t(() => e[7] || (e[7] = [r('Tag 3')])), _: 1 },
              ),
              n(
                l(o),
                { plain: '', type: 'warning' },
                { default: t(() => e[8] || (e[8] = [r('Tag 4')])), _: 1 },
              ),
              n(
                l(o),
                { plain: '', type: 'error' },
                { default: t(() => e[9] || (e[9] = [r('Tag 5')])), _: 1 },
              ),
            ]),
            a('div', C, [
              n(
                l(o),
                { round: '' },
                { default: t(() => e[10] || (e[10] = [r('Tag 1')])), _: 1 },
              ),
              n(
                l(o),
                { round: '', type: 'success' },
                { default: t(() => e[11] || (e[11] = [r('Tag 2')])), _: 1 },
              ),
              n(
                l(o),
                { round: '', type: 'info' },
                { default: t(() => e[12] || (e[12] = [r('Tag 3')])), _: 1 },
              ),
              n(
                l(o),
                { round: '', type: 'warning' },
                { default: t(() => e[13] || (e[13] = [r('Tag 4')])), _: 1 },
              ),
              n(
                l(o),
                { round: '', type: 'error' },
                { default: t(() => e[14] || (e[14] = [r('Tag 5')])), _: 1 },
              ),
            ]),
          ],
          64,
        )
      )
    },
  }),
  A = f(F, [['__scopeId', 'data-v-d3396de4']]),
  B = { tabindex: '0' },
  R = JSON.parse(
    '{"title":"Tag 标签","description":"","frontmatter":{},"headers":[],"relativePath":"components/tag/index.md","filePath":"components/tag/index.md"}',
  ),
  k = { name: 'components/tag/index.md' },
  X = Object.assign(k, {
    setup(u) {
      return (i, e) => {
        const p = s('ClientOnly'),
          T = s('Tool')
        return (
          d(),
          g('div', null, [
            e[7] ||
              (e[7] = V(
                '<h1 id="tag-标签" tabindex="-1">Tag 标签 <a class="header-anchor" href="#tag-标签" aria-label="Permalink to &quot;Tag 标签&quot;">​</a></h1><p>用于标记和选择。</p><h2 id="基础用法" tabindex="-1">基础用法 <a class="header-anchor" href="#基础用法" aria-label="Permalink to &quot;基础用法&quot;">​</a></h2><p>由<code>type</code>属性来选择 tag 类型。也能通过 <code>plain</code> 让 tag 的背景变得半透明，可以通过 <code>color</code> 属性自定义颜色。</p>',
                4,
              )),
            n(p, null, {
              default: t(() => [
                n(
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
                    vueCode: l(v),
                  },
                  { vue: t(() => [n(A)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            e[8] ||
              (e[8] = a(
                'h2',
                { id: 'tag-api', tabindex: '-1' },
                [
                  r('Tag API '),
                  a(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#tag-api',
                      'aria-label': 'Permalink to "Tag API"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            e[9] ||
              (e[9] = a(
                'h3',
                { id: 'tag-属性', tabindex: '-1' },
                [
                  r('Tag 属性 '),
                  a(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#tag-属性',
                      'aria-label': 'Permalink to "Tag 属性"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            a('table', B, [
              e[6] ||
                (e[6] = a(
                  'thead',
                  null,
                  [
                    a('tr', null, [
                      a('th', null, '属性'),
                      a('th', null, '说明'),
                      a('th', null, '类型'),
                      a('th', null, '默认值'),
                    ]),
                  ],
                  -1,
                )),
              a('tbody', null, [
                a('tr', null, [
                  e[1] || (e[1] = a('td', null, [a('code', null, 'type')], -1)),
                  e[2] || (e[2] = a('td', null, 'Tag 的类型', -1)),
                  a('td', null, [
                    e[0] || (e[0] = a('code', null, 'enum', -1)),
                    n(T, { value: 'primary,success,info,warning,danger' }),
                  ]),
                  e[3] || (e[3] = a('td', null, 'primary', -1)),
                ]),
                e[4] ||
                  (e[4] = a(
                    'tr',
                    null,
                    [
                      a('td', null, [a('code', null, 'plain')]),
                      a('td', null, '背景是否半透明'),
                      a('td', null, [a('code', null, 'boolean')]),
                      a('td', null, 'false'),
                    ],
                    -1,
                  )),
                e[5] ||
                  (e[5] = a(
                    'tr',
                    null,
                    [
                      a('td', null, [a('code', null, 'round')]),
                      a('td', null, 'Tag 是否为圆角'),
                      a('td', null, [a('code', null, 'boolean')]),
                      a('td', null, 'false'),
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
export { R as __pageData, X as default }
