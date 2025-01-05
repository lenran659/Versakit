import { a as o, e as h } from './chunks/theme.C9zyzoQC.js'
import {
  d as f,
  m as C,
  a as u,
  b as m,
  x as n,
  p as a,
  u as s,
  e as t,
  z as d,
  a9 as g,
  V as b,
} from './chunks/framework.Ch9zL8Hq.js'
import { R as c } from './chunks/index.DbkfPGQe.js'
const w = `<script setup lang="ts">\r
import { VerCollapse, VerCollapseItem } from '@versakit/ui'\r
\r
import { ref } from 'vue'\r
\r
const activeNames = ref(['1'])\r
<\/script>\r
\r
<template>\r
  <div>\r
    <VerCollapse v-model="activeNames" accordion>\r
      <VerCollapseItem title="Consistency" name="1">\r
        <div>\r
          Consistent with real life: in line with the process and logic of real\r
          life, and comply with languages and habits that the users are used to;\r
        </div>\r
      </VerCollapseItem>\r
      <VerCollapseItem title="Consistency" name="2">\r
        <div>\r
          Consistent with real life: in line with the process and logic of real\r
          life, and comply with languages and habits that the users are used to;\r
        </div>\r
      </VerCollapseItem>\r
      <VerCollapseItem title="Consistency" name="3">\r
        <div>\r
          Consistent with real life: in line with the process and logic of real\r
          life, and comply with languages and habits that the users are used to;\r
        </div>\r
      </VerCollapseItem>\r
    </VerCollapse>\r
  </div>\r
</template>\r
`,
  V = f({
    __name: 'accordion',
    setup(p) {
      const i = C(['1'])
      return (e, l) => (
        u(),
        m('div', null, [
          n(
            s(h),
            {
              modelValue: i.value,
              'onUpdate:modelValue': l[0] || (l[0] = (r) => (i.value = r)),
              accordion: '',
            },
            {
              default: a(() => [
                n(
                  s(o),
                  { title: 'Consistency', name: '1' },
                  {
                    default: a(
                      () =>
                        l[1] ||
                        (l[1] = [
                          t(
                            'div',
                            null,
                            ' Consistent with real life: in line with the process and logic of real life, and comply with languages and habits that the users are used to; ',
                            -1,
                          ),
                        ]),
                    ),
                    _: 1,
                  },
                ),
                n(
                  s(o),
                  { title: 'Consistency', name: '2' },
                  {
                    default: a(
                      () =>
                        l[2] ||
                        (l[2] = [
                          t(
                            'div',
                            null,
                            ' Consistent with real life: in line with the process and logic of real life, and comply with languages and habits that the users are used to; ',
                            -1,
                          ),
                        ]),
                    ),
                    _: 1,
                  },
                ),
                n(
                  s(o),
                  { title: 'Consistency', name: '3' },
                  {
                    default: a(
                      () =>
                        l[3] ||
                        (l[3] = [
                          t(
                            'div',
                            null,
                            ' Consistent with real life: in line with the process and logic of real life, and comply with languages and habits that the users are used to; ',
                            -1,
                          ),
                        ]),
                    ),
                    _: 1,
                  },
                ),
              ]),
              _: 1,
            },
            8,
            ['modelValue'],
          ),
        ])
      )
    },
  }),
  y = `<!--\r
 * @Author: 2171204141@qq.com\r
 * @Date: 2024-12-24 15:14:54\r
 * @LastEditors: Jannik 1337741710@qq.com\r
 * @Description: \r
-->\r
<script setup lang="ts">\r
import { VerCollapse, VerCollapseItem } from '@versakit/ui'\r
\r
import { ref } from 'vue'\r
\r
const activeNames = ref(['1'])\r
const handleChange = (val: string[]) => {\r
  console.log(val)\r
}\r
<\/script>\r
\r
<template>\r
  <div>\r
    <VerCollapse v-model="activeNames" @change="handleChange">\r
      <VerCollapseItem title="Consistency 1" name="1">\r
        <div>\r
          Consistent with real life: in line with the process and logic of real\r
          life, and comply with languages and habits that the users are used to;\r
        </div>\r
      </VerCollapseItem>\r
      <VerCollapseItem title="Consistency 2" name="2">\r
        <div>\r
          Consistent with real life: in line with the process and logic of real\r
          life, and comply with languages and habits that the users are used to;\r
        </div>\r
      </VerCollapseItem>\r
      <VerCollapseItem title="Consistency 3" name="3">\r
        <div>\r
          Consistent with real life: in line with the process and logic of real\r
          life, and comply with languages and habits that the users are used to;\r
        </div>\r
      </VerCollapseItem>\r
    </VerCollapse>\r
  </div>\r
</template>\r
`,
  x = f({
    __name: 'base',
    setup(p) {
      const i = C(['1']),
        e = (l) => {
          console.log(l)
        }
      return (l, r) => (
        u(),
        m('div', null, [
          n(
            s(h),
            {
              modelValue: i.value,
              'onUpdate:modelValue': r[0] || (r[0] = (v) => (i.value = v)),
              onChange: e,
            },
            {
              default: a(() => [
                n(
                  s(o),
                  { title: 'Consistency 1', name: '1' },
                  {
                    default: a(
                      () =>
                        r[1] ||
                        (r[1] = [
                          t(
                            'div',
                            null,
                            ' Consistent with real life: in line with the process and logic of real life, and comply with languages and habits that the users are used to; ',
                            -1,
                          ),
                        ]),
                    ),
                    _: 1,
                  },
                ),
                n(
                  s(o),
                  { title: 'Consistency 2', name: '2' },
                  {
                    default: a(
                      () =>
                        r[2] ||
                        (r[2] = [
                          t(
                            'div',
                            null,
                            ' Consistent with real life: in line with the process and logic of real life, and comply with languages and habits that the users are used to; ',
                            -1,
                          ),
                        ]),
                    ),
                    _: 1,
                  },
                ),
                n(
                  s(o),
                  { title: 'Consistency 3', name: '3' },
                  {
                    default: a(
                      () =>
                        r[3] ||
                        (r[3] = [
                          t(
                            'div',
                            null,
                            ' Consistent with real life: in line with the process and logic of real life, and comply with languages and habits that the users are used to; ',
                            -1,
                          ),
                        ]),
                    ),
                    _: 1,
                  },
                ),
              ]),
              _: 1,
            },
            8,
            ['modelValue'],
          ),
        ])
      )
    },
  }),
  N = JSON.parse(
    '{"title":"Collapse 折叠面板","description":"","frontmatter":{},"headers":[],"relativePath":"components/collapse/index.md","filePath":"components/collapse/index.md"}',
  ),
  I = { name: 'components/collapse/index.md' },
  k = Object.assign(I, {
    setup(p) {
      return (i, e) => {
        const l = b('ClientOnly')
        return (
          u(),
          m('div', null, [
            e[0] ||
              (e[0] = t(
                'h1',
                { id: 'collapse-折叠面板', tabindex: '-1' },
                [
                  d('Collapse 折叠面板 '),
                  t(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#collapse-折叠面板',
                      'aria-label': 'Permalink to "Collapse 折叠面板"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            e[1] || (e[1] = t('p', null, '通过折叠面板收纳内容区域。', -1)),
            e[2] ||
              (e[2] = t(
                'h2',
                { id: '基本使用', tabindex: '-1' },
                [
                  d('基本使用 '),
                  t(
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
            e[3] ||
              (e[3] = t('p', null, '可同时展开多个面板，面板之间不影响。', -1)),
            n(l, null, {
              default: a(() => [
                n(
                  s(c),
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
                    vueCode: s(y),
                  },
                  { vue: a(() => [n(x)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            e[4] ||
              (e[4] = t(
                'h2',
                { id: '手风琴效果', tabindex: '-1' },
                [
                  d('手风琴效果 '),
                  t(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#手风琴效果',
                      'aria-label': 'Permalink to "手风琴效果"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            e[5] || (e[5] = t('p', null, '每次只能展开一个面板', -1)),
            e[6] ||
              (e[6] = t(
                'p',
                null,
                [
                  d('通过 '),
                  t('code', null, 'accordion'),
                  d(' 属性来设置是否以手风琴模式显示。'),
                ],
                -1,
              )),
            n(l, null, {
              default: a(() => [
                n(
                  s(c),
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
                    vueCode: s(w),
                  },
                  { vue: a(() => [n(V)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            e[7] ||
              (e[7] = g(
                '<h2 id="collapse-item-api" tabindex="-1">Collapse Item API <a class="header-anchor" href="#collapse-item-api" aria-label="Permalink to &quot;Collapse Item API&quot;">​</a></h2><h3 id="collapse-item-属性" tabindex="-1">Collapse Item 属性 <a class="header-anchor" href="#collapse-item-属性" aria-label="Permalink to &quot;Collapse Item 属性&quot;">​</a></h3><table tabindex="0"><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>name</code></td><td>唯一标志符</td><td><code>string</code> / <code>number</code></td><td>-</td></tr><tr><td><code>title</code></td><td>面板标题</td><td><code>string</code></td><td>&#39;&#39;</td></tr><tr><td><code>accordion</code></td><td>是否设置为手风琴效果</td><td><code>boolean</code></td><td>false</td></tr></tbody></table>',
                3,
              )),
          ])
        )
      }
    },
  })
export { N as __pageData, k as default }
