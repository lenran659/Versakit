import { j as i } from './chunks/theme.C9e_0uVK.js'
import {
  d as m,
  a as l,
  j as c,
  p as r,
  z as n,
  u as o,
  b as p,
  e,
  x as s,
  a9 as u,
  V as h,
} from './chunks/framework.Ch9zL8Hq.js'
import { R as T } from './chunks/index.DbkfPGQe.js'
const f = `<script setup lang="ts">\r
import { VerTab } from '@versakit/ui'\r
\r
const customTabList: any = [\r
  { id: 'tab1', label: 'Tab1', name: 'tab1-content' },\r
  { id: 'tab2', label: 'Tab2', name: 'tab2-content' },\r
  { id: 'tab3', label: 'Tab3', name: 'tab3-content' },\r
]\r
<\/script>\r
\r
<template>\r
  <ver-tab :tabList="customTabList">\r
    <template #tab1-content>1</template>\r
    <template #tab2-content>2</template>\r
    <template #tab3-content>3</template>\r
  </ver-tab>\r
</template>\r
\r
<style scoped></style>\r
`,
  x = m({
    __name: 'base',
    setup(d) {
      const b = [
        { id: 'tab1', label: 'Tab1', name: 'tab1-content' },
        { id: 'tab2', label: 'Tab2', name: 'tab2-content' },
        { id: 'tab3', label: 'Tab3', name: 'tab3-content' },
      ]
      return (t, a) => (
        l(),
        c(
          o(i),
          { tabList: b },
          {
            'tab1-content': r(() => a[0] || (a[0] = [n('1')])),
            'tab2-content': r(() => a[1] || (a[1] = [n('2')])),
            'tab3-content': r(() => a[2] || (a[2] = [n('3')])),
            _: 1,
          },
        )
      )
    },
  }),
  C = JSON.parse(
    '{"title":"Tabs 标签页","description":"","frontmatter":{},"headers":[],"relativePath":"components/tab/index.md","filePath":"components/tab/index.md"}',
  ),
  v = { name: 'components/tab/index.md' },
  V = Object.assign(v, {
    setup(d) {
      return (b, t) => {
        const a = h('ClientOnly')
        return (
          l(),
          p('div', null, [
            t[0] ||
              (t[0] = e(
                'h1',
                { id: 'tabs-标签页', tabindex: '-1' },
                [
                  n('Tabs 标签页 '),
                  e(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#tabs-标签页',
                      'aria-label': 'Permalink to "Tabs 标签页"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            t[1] ||
              (t[1] = e(
                'p',
                null,
                '分隔内容上有关联但属于不同类别的数据集合。',
                -1,
              )),
            t[2] ||
              (t[2] = e(
                'h2',
                { id: '基础用法', tabindex: '-1' },
                [
                  n('基础用法 '),
                  e(
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
            t[3] ||
              (t[3] = e(
                'p',
                null,
                [
                  n('Tabs 组件提供了选项卡功能，通过 '),
                  e('code', null, 'tabList'),
                  n(' 绑定当前激活的 '),
                  e('code', null, 'Tab'),
                  n(' 名称。'),
                ],
                -1,
              )),
            s(a, null, {
              default: r(() => [
                s(
                  o(T),
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
                    vueCode: o(f),
                  },
                  { vue: r(() => [s(x)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            t[4] ||
              (t[4] = u(
                '<h2 id="tabs-api" tabindex="-1">Tabs API <a class="header-anchor" href="#tabs-api" aria-label="Permalink to &quot;Tabs API&quot;">​</a></h2><h3 id="tabs-属性" tabindex="-1">Tabs 属性 <a class="header-anchor" href="#tabs-属性" aria-label="Permalink to &quot;Tabs 属性&quot;">​</a></h3><table tabindex="0"><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>tabList</code></td><td>Tabs 中绑定的数据</td><td><code>array</code></td><td>-</td></tr></tbody></table><h3 id="tabs-插槽" tabindex="-1">Tabs 插槽 <a class="header-anchor" href="#tabs-插槽" aria-label="Permalink to &quot;Tabs 插槽&quot;">​</a></h3><table tabindex="0"><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>自定义</td><td>为 Tab 的唯一名称</td></tr></tbody></table>',
                5,
              )),
          ])
        )
      }
    },
  })
export { C as __pageData, V as default }
