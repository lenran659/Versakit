import { i as s, X as m, Z as c, Q as D } from './chunks/theme.BKnsVfWH.js'
import {
  d as g,
  j as p,
  o as b,
  f as V,
  l as o,
  q as r,
  u as i,
  L as n,
  b as a,
  _ as x,
  a as y,
  a8 as h,
  U as F,
} from './chunks/framework.D5-Ddbi5.js'
import { R as f } from './chunks/index.CeAE3Zgl.js'
const B = `<template>\r
  <ver-row>\r
    <ver-button @click="dialogVisible = true">点击打开对话框</ver-button>\r
\r
    <VerDialog v-model="dialogVisible">\r
      <template #title>\r
        <div class="title">\r
          <h4>This is a custom header!</h4>\r
        </div>\r
      </template>\r
    </VerDialog>\r
  </ver-row>\r
</template>\r
\r
<script lang="ts" setup>\r
import { VerRow, VerButton, VerDialog } from '@versakit/ui'\r
\r
import { ref } from 'vue'\r
\r
const dialogVisible = ref(false)\r
<\/script>\r
`,
  k = g({
    __name: 'header',
    setup(v) {
      const d = p(!1)
      return (l, t) => (
        b(),
        V(n(c), null, {
          default: o(() => [
            r(
              n(s),
              { onClick: t[0] || (t[0] = (e) => (d.value = !0)) },
              {
                default: o(() => t[2] || (t[2] = [i('点击打开对话框')])),
                _: 1,
              },
            ),
            r(
              n(m),
              {
                modelValue: d.value,
                'onUpdate:modelValue': t[1] || (t[1] = (e) => (d.value = e)),
              },
              {
                title: o(
                  () =>
                    t[3] ||
                    (t[3] = [
                      a(
                        'div',
                        { class: 'title' },
                        [a('h4', null, 'This is a custom header!')],
                        -1,
                      ),
                    ]),
                ),
                _: 1,
              },
              8,
              ['modelValue'],
            ),
          ]),
          _: 1,
        })
      )
    },
  }),
  C = `<template>\r
  <ver-row>\r
    <ver-button @click="dialogVisible = true">点击打开对话框</ver-button>\r
    <ver-button @click="dialogFromVisible = true">点击打开对话框</ver-button>\r
    <!-- 普通 -->\r
    <ver-dialog v-model="dialogVisible" title="测试">\r
      <p>这是一个信息</p>\r
    </ver-dialog>\r
    <!-- 表单 -->\r
    <ver-dialog v-model="dialogFromVisible" title="表单">\r
      <div>\r
        <ver-input />\r
      </div>\r
      <template #footer>\r
        <ver-button>取消</ver-button>\r
        <ver-button type="primary" @click="dialogFromVisible = false">\r
          确定\r
        </ver-button>\r
      </template>\r
    </ver-dialog>\r
  </ver-row>\r
</template>\r
\r
<script lang="ts" setup>\r
import { VerRow, VerButton, VerDialog, VerInput } from '@versakit/ui'\r
\r
import { ref } from 'vue'\r
\r
const dialogVisible = ref(false)\r
const dialogFromVisible = ref(false)\r
<\/script>\r
\r
<style scoped>\r
.t-dialog_footer .t-btn {\r
  margin-right: 20px;\r
}\r
\r
.t-btn + .t-btn {\r
  margin: 0px 10px;\r
}\r
</style>\r
`,
  A = g({
    __name: 'content',
    setup(v) {
      const d = p(!1),
        l = p(!1)
      return (t, e) => (
        b(),
        V(n(c), null, {
          default: o(() => [
            r(
              n(s),
              { onClick: e[0] || (e[0] = (u) => (d.value = !0)) },
              {
                default: o(() => e[5] || (e[5] = [i('点击打开对话框')])),
                _: 1,
              },
            ),
            r(
              n(s),
              { onClick: e[1] || (e[1] = (u) => (l.value = !0)) },
              {
                default: o(() => e[6] || (e[6] = [i('点击打开对话框')])),
                _: 1,
              },
            ),
            r(
              n(m),
              {
                modelValue: d.value,
                'onUpdate:modelValue': e[2] || (e[2] = (u) => (d.value = u)),
                title: '测试',
              },
              {
                default: o(
                  () => e[7] || (e[7] = [a('p', null, '这是一个信息', -1)]),
                ),
                _: 1,
              },
              8,
              ['modelValue'],
            ),
            r(
              n(m),
              {
                modelValue: l.value,
                'onUpdate:modelValue': e[4] || (e[4] = (u) => (l.value = u)),
                title: '表单',
              },
              {
                footer: o(() => [
                  r(n(s), null, {
                    default: o(() => e[8] || (e[8] = [i('取消')])),
                    _: 1,
                  }),
                  r(
                    n(s),
                    {
                      type: 'primary',
                      onClick: e[3] || (e[3] = (u) => (l.value = !1)),
                    },
                    { default: o(() => e[9] || (e[9] = [i(' 确定 ')])), _: 1 },
                  ),
                ]),
                default: o(() => [a('div', null, [r(n(D))])]),
                _: 1,
              },
              8,
              ['modelValue'],
            ),
          ]),
          _: 1,
        })
      )
    },
  }),
  w = x(A, [['__scopeId', 'data-v-76f61fc9']]),
  R = `<template>\r
  <div>\r
    <ver-button @click="dialogVisible = true">点击打开对话框</ver-button>\r
\r
    <ver-dialog v-model="dialogVisible">\r
      <span>这是一段信息</span>\r
      <template #footer>\r
        <ver-button>取消</ver-button>\r
        <ver-button type="primary" @click="dialogVisible = false">\r
          确定\r
        </ver-button>\r
      </template>\r
    </ver-dialog>\r
  </div>\r
</template>\r
\r
<script lang="ts" setup>\r
import { VerButton, VerDialog } from '@versakit/ui'\r
\r
import { ref } from 'vue'\r
\r
const dialogVisible = ref(false)\r
<\/script>\r
\r
<style scoped>\r
.ver-dialog_footer .ver-btn {\r
  margin-right: 20px;\r
}\r
</style>\r
`,
  G = g({
    __name: 'base',
    setup(v) {
      const d = p(!1)
      return (l, t) => (
        b(),
        y('div', null, [
          r(
            n(s),
            { onClick: t[0] || (t[0] = (e) => (d.value = !0)) },
            { default: o(() => t[3] || (t[3] = [i('点击打开对话框')])), _: 1 },
          ),
          r(
            n(m),
            {
              modelValue: d.value,
              'onUpdate:modelValue': t[2] || (t[2] = (e) => (d.value = e)),
            },
            {
              footer: o(() => [
                r(n(s), null, {
                  default: o(() => t[4] || (t[4] = [i('取消')])),
                  _: 1,
                }),
                r(
                  n(s),
                  {
                    type: 'primary',
                    onClick: t[1] || (t[1] = (e) => (d.value = !1)),
                  },
                  { default: o(() => t[5] || (t[5] = [i(' 确定 ')])), _: 1 },
                ),
              ]),
              default: o(() => [
                t[6] || (t[6] = a('span', null, '这是一段信息', -1)),
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
  j = x(G, [['__scopeId', 'data-v-d4c5e3a2']]),
  q = JSON.parse(
    '{"title":"Dialog 对话框","description":"","frontmatter":{},"headers":[],"relativePath":"components/dialog/index.md","filePath":"components/dialog/index.md"}',
  ),
  X = { name: 'components/dialog/index.md' },
  N = Object.assign(X, {
    setup(v) {
      return (d, l) => {
        const t = F('ClientOnly')
        return (
          b(),
          y('div', null, [
            l[0] ||
              (l[0] = a(
                'h1',
                { id: 'dialog-对话框', tabindex: '-1' },
                [
                  i('Dialog 对话框 '),
                  a(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#dialog-对话框',
                      'aria-label': 'Permalink to "Dialog 对话框"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            l[1] ||
              (l[1] = a(
                'h2',
                { id: '基础用法', tabindex: '-1' },
                [
                  i('基础用法 '),
                  a(
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
            l[2] ||
              (l[2] = a(
                'p',
                null,
                [
                  i(
                    '在保留当前页面状态的情况下，告知用户并承载相关操作。 绑定 ',
                  ),
                  a('code', null, 'v-model'),
                  i(' 到一个 '),
                  a('code', null, 'Boolean'),
                  i(' 类型的变量。'),
                ],
                -1,
              )),
            r(t, null, {
              default: o(() => [
                r(
                  n(f),
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
                    vueCode: n(R),
                  },
                  { vue: o(() => [r(j)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            l[3] ||
              (l[3] = a(
                'h2',
                { id: '自定义内容', tabindex: '-1' },
                [
                  i('自定义内容 '),
                  a(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#自定义内容',
                      'aria-label': 'Permalink to "自定义内容"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            l[4] || (l[4] = a('p', null, '对话框的内容可以是任何东西。', -1)),
            r(t, null, {
              default: o(() => [
                r(
                  n(f),
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
                    vueCode: n(C),
                  },
                  { vue: o(() => [r(w)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            l[5] ||
              (l[5] = a(
                'h2',
                { id: '自定义标题', tabindex: '-1' },
                [
                  i('自定义标题 '),
                  a(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#自定义标题',
                      'aria-label': 'Permalink to "自定义标题"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            l[6] ||
              (l[6] = a(
                'p',
                null,
                [
                  i(
                    '可用于自定义显示标题区域。为了保持可用性，除了使用此插槽外，使用 ',
                  ),
                  a('code', null, 'title'),
                  i(' 属性来指定哪些元素应该读取为对话框标题。'),
                ],
                -1,
              )),
            r(t, null, {
              default: o(() => [
                r(
                  n(f),
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
                    vueCode: n(B),
                  },
                  { vue: o(() => [r(k)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            l[7] ||
              (l[7] = h(
                '<h2 id="dialog-api" tabindex="-1">Dialog API <a class="header-anchor" href="#dialog-api" aria-label="Permalink to &quot;Dialog API&quot;">​</a></h2><h3 id="dialog-属性" tabindex="-1">Dialog 属性 <a class="header-anchor" href="#dialog-属性" aria-label="Permalink to &quot;Dialog 属性&quot;">​</a></h3><table tabindex="0"><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>title</code></td><td>标题</td><td><code>string</code></td><td>-</td></tr><tr><td><code>modelValue</code></td><td>绑定值</td><td><code>string</code></td><td>-</td></tr><tr><td><code>width</code></td><td>dialog 的宽度</td><td><code>string</code></td><td>30%</td></tr><tr><td><code>top</code></td><td>距顶部距离</td><td><code>string</code></td><td>15vh</td></tr></tbody></table><h3 id="dialog-插槽" tabindex="-1">Dialog 插槽 <a class="header-anchor" href="#dialog-插槽" aria-label="Permalink to &quot;Dialog 插槽&quot;">​</a></h3><table tabindex="0"><thead><tr><th>插槽名</th><th>说明</th></tr></thead><tbody><tr><td><code>title</code></td><td>dialog 的标题部分</td></tr><tr><td><code>footer</code></td><td>dialog 的 <code>footer</code> 部分</td></tr></tbody></table>',
                5,
              )),
          ])
        )
      }
    },
  })
export { q as __pageData, N as default }
