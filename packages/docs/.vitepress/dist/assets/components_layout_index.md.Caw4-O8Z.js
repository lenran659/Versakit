import { k as s, B as a } from './chunks/theme.C9e_0uVK.js'
import {
  d as v,
  a as c,
  b as d,
  x as l,
  p as r,
  u as n,
  e,
  F as p,
  _ as m,
  a9 as f,
  z as t,
  V,
} from './chunks/framework.Ch9zL8Hq.js'
import { R as x } from './chunks/index.DbkfPGQe.js'
const C = `<template>\r
  <VerRow class="mb-4">\r
    <VerCol :span="10"><div class="col-box col-box-1"></div></VerCol>\r
    <VerCol :span="14">\r
      <div class="col-box col-box-2"></div>\r
    </VerCol>\r
  </VerRow>\r
  <VerRow class="mb-4">\r
    <VerCol :span="6"><div class="col-box col-box-1"></div></VerCol>\r
    <VerCol :span="8"><div class="col-box col-box-2"></div></VerCol>\r
    <VerCol :span="10"><div class="col-box col-box-1"></div></VerCol>\r
  </VerRow>\r
  <VerRow class="mb-4">\r
    <VerCol :span="4"><div class="col-box col-box-1"></div></VerCol>\r
    <VerCol :span="16"><div class="col-box col-box-2"></div></VerCol>\r
    <VerCol :span="4"><div class="col-box col-box-1"></div></VerCol>\r
  </VerRow>\r
</template>\r
\r
<script setup lang="ts">\r
import { VerRow, VerCol } from '@versakit/ui'\r
<\/script>\r
\r
<style scoped>\r
.col-box {\r
  display: flex;\r
  align-items: center;\r
  justify-content: center;\r
  border-radius: 4px;\r
  min-height: 36px;\r
  background-color: #99a9bf;\r
}\r
\r
.col-box-1 {\r
  background-color: #d3dce6;\r
}\r
\r
.col-box-2 {\r
  background-color: #e5e9f2;\r
}\r
\r
.mb-4 {\r
  margin-bottom: 1rem;\r
}\r
</style>\r
`,
  y = v({
    __name: 'mix',
    setup(b) {
      return (i, o) => (
        c(),
        d(
          p,
          null,
          [
            l(
              n(a),
              { class: 'mb-4' },
              {
                default: r(() => [
                  l(
                    n(s),
                    { span: 10 },
                    {
                      default: r(
                        () =>
                          o[0] ||
                          (o[0] = [
                            e('div', { class: 'col-box col-box-1' }, null, -1),
                          ]),
                      ),
                      _: 1,
                    },
                  ),
                  l(
                    n(s),
                    { span: 14 },
                    {
                      default: r(
                        () =>
                          o[1] ||
                          (o[1] = [
                            e('div', { class: 'col-box col-box-2' }, null, -1),
                          ]),
                      ),
                      _: 1,
                    },
                  ),
                ]),
                _: 1,
              },
            ),
            l(
              n(a),
              { class: 'mb-4' },
              {
                default: r(() => [
                  l(
                    n(s),
                    { span: 6 },
                    {
                      default: r(
                        () =>
                          o[2] ||
                          (o[2] = [
                            e('div', { class: 'col-box col-box-1' }, null, -1),
                          ]),
                      ),
                      _: 1,
                    },
                  ),
                  l(
                    n(s),
                    { span: 8 },
                    {
                      default: r(
                        () =>
                          o[3] ||
                          (o[3] = [
                            e('div', { class: 'col-box col-box-2' }, null, -1),
                          ]),
                      ),
                      _: 1,
                    },
                  ),
                  l(
                    n(s),
                    { span: 10 },
                    {
                      default: r(
                        () =>
                          o[4] ||
                          (o[4] = [
                            e('div', { class: 'col-box col-box-1' }, null, -1),
                          ]),
                      ),
                      _: 1,
                    },
                  ),
                ]),
                _: 1,
              },
            ),
            l(
              n(a),
              { class: 'mb-4' },
              {
                default: r(() => [
                  l(
                    n(s),
                    { span: 4 },
                    {
                      default: r(
                        () =>
                          o[5] ||
                          (o[5] = [
                            e('div', { class: 'col-box col-box-1' }, null, -1),
                          ]),
                      ),
                      _: 1,
                    },
                  ),
                  l(
                    n(s),
                    { span: 16 },
                    {
                      default: r(
                        () =>
                          o[6] ||
                          (o[6] = [
                            e('div', { class: 'col-box col-box-2' }, null, -1),
                          ]),
                      ),
                      _: 1,
                    },
                  ),
                  l(
                    n(s),
                    { span: 4 },
                    {
                      default: r(
                        () =>
                          o[7] ||
                          (o[7] = [
                            e('div', { class: 'col-box col-box-1' }, null, -1),
                          ]),
                      ),
                      _: 1,
                    },
                  ),
                ]),
                _: 1,
              },
            ),
          ],
          64,
        )
      )
    },
  }),
  w = m(y, [['__scopeId', 'data-v-76552a02']]),
  F = `<template>\r
  <VerRow class="mb-4">\r
    <VerCol :span="10"><div class="col-box col-box-1">10</div></VerCol>\r
    <VerCol :span="12" :offset="2">\r
      <div class="col-box col-box-2">12</div>\r
    </VerCol>\r
  </VerRow>\r
  <VerRow class="mb-4">\r
    <VerCol :span="8"><div class="col-box col-box-1">8</div></VerCol>\r
    <VerCol :span="8" :offset="8">\r
      <div class="col-box col-box-2">8</div>\r
    </VerCol>\r
  </VerRow>\r
</template>\r
\r
<script setup lang="ts">\r
import { VerRow, VerCol } from '@versakit/ui'\r
<\/script>\r
\r
<style scoped>\r
.col-box {\r
  display: flex;\r
  align-items: center;\r
  justify-content: center;\r
  border-radius: 4px;\r
  min-height: 36px;\r
  background-color: #99a9bf;\r
}\r
\r
.col-box-1 {\r
  background-color: #d3dce6;\r
}\r
\r
.col-box-2 {\r
  background-color: #e5e9f2;\r
}\r
\r
.mb-4 {\r
  margin-bottom: 1rem;\r
}\r
</style>\r
`,
  g = v({
    __name: 'offset',
    setup(b) {
      return (i, o) => (
        c(),
        d(
          p,
          null,
          [
            l(
              n(a),
              { class: 'mb-4' },
              {
                default: r(() => [
                  l(
                    n(s),
                    { span: 10 },
                    {
                      default: r(
                        () =>
                          o[0] ||
                          (o[0] = [
                            e('div', { class: 'col-box col-box-1' }, '10', -1),
                          ]),
                      ),
                      _: 1,
                    },
                  ),
                  l(
                    n(s),
                    { span: 12, offset: 2 },
                    {
                      default: r(
                        () =>
                          o[1] ||
                          (o[1] = [
                            e('div', { class: 'col-box col-box-2' }, '12', -1),
                          ]),
                      ),
                      _: 1,
                    },
                  ),
                ]),
                _: 1,
              },
            ),
            l(
              n(a),
              { class: 'mb-4' },
              {
                default: r(() => [
                  l(
                    n(s),
                    { span: 8 },
                    {
                      default: r(
                        () =>
                          o[2] ||
                          (o[2] = [
                            e('div', { class: 'col-box col-box-1' }, '8', -1),
                          ]),
                      ),
                      _: 1,
                    },
                  ),
                  l(
                    n(s),
                    { span: 8, offset: 8 },
                    {
                      default: r(
                        () =>
                          o[3] ||
                          (o[3] = [
                            e('div', { class: 'col-box col-box-2' }, '8', -1),
                          ]),
                      ),
                      _: 1,
                    },
                  ),
                ]),
                _: 1,
              },
            ),
          ],
          64,
        )
      )
    },
  }),
  A = m(g, [['__scopeId', 'data-v-9c5cd5f9']]),
  B = `<template>\r
  <ver-row class="mb-4">\r
    <ver-col :span="24">\r
      <div class="col-box"></div>\r
    </ver-col>\r
  </ver-row>\r
  <ver-row class="mb-4">\r
    <ver-col :span="12">\r
      <div class="col-box col-box-1"></div>\r
    </ver-col>\r
    <ver-col :span="12">\r
      <div class="col-box col-box-2"></div>\r
    </ver-col>\r
  </ver-row>\r
  <ver-row class="mb-4">\r
    <ver-col :span="8">\r
      <div class="col-box col-box-1"></div>\r
    </ver-col>\r
    <ver-col :span="8">\r
      <div class="col-box col-box-2"></div>\r
    </ver-col>\r
    <ver-col :span="8">\r
      <div class="col-box col-box-1"></div>\r
    </ver-col>\r
  </ver-row>\r
  <ver-row class="mb-4">\r
    <ver-col :span="6">\r
      <div class="col-box col-box-1"></div>\r
    </ver-col>\r
    <ver-col :span="6">\r
      <div class="col-box col-box-2"></div>\r
    </ver-col>\r
    <ver-col :span="6">\r
      <div class="col-box col-box-1"></div>\r
    </ver-col>\r
    <ver-col :span="6">\r
      <div class="col-box col-box-2"></div>\r
    </ver-col>\r
  </ver-row>\r
  <ver-row class="mb-4">\r
    <ver-col :span="4">\r
      <div class="col-box col-box-1"></div>\r
    </ver-col>\r
    <ver-col :span="4">\r
      <div class="col-box col-box-2"></div>\r
    </ver-col>\r
    <ver-col :span="4">\r
      <div class="col-box col-box-1"></div>\r
    </ver-col>\r
    <ver-col :span="4">\r
      <div class="col-box col-box-2"></div>\r
    </ver-col>\r
    <ver-col :span="4">\r
      <div class="col-box col-box-1"></div>\r
    </ver-col>\r
    <ver-col :span="4">\r
      <div class="col-box col-box-2"></div>\r
    </ver-col>\r
  </ver-row>\r
</template>\r
\r
<script setup lang="ts">\r
import { VerRow, VerCol } from '@versakit/ui'\r
<\/script>\r
\r
<style scoped>\r
.col-box {\r
  border-radius: 4px;\r
  min-height: 36px;\r
  background-color: #99a9bf;\r
}\r
\r
.col-box-1 {\r
  background-color: #d3dce6;\r
}\r
\r
.col-box-2 {\r
  background-color: #e5e9f2;\r
}\r
\r
.mb-4 {\r
  margin-bottom: 1rem;\r
}\r
</style>\r
`,
  k = v({
    __name: 'base',
    setup(b) {
      return (i, o) => (
        c(),
        d(
          p,
          null,
          [
            l(
              n(a),
              { class: 'mb-4' },
              {
                default: r(() => [
                  l(
                    n(s),
                    { span: 24 },
                    {
                      default: r(
                        () =>
                          o[0] ||
                          (o[0] = [e('div', { class: 'col-box' }, null, -1)]),
                      ),
                      _: 1,
                    },
                  ),
                ]),
                _: 1,
              },
            ),
            l(
              n(a),
              { class: 'mb-4' },
              {
                default: r(() => [
                  l(
                    n(s),
                    { span: 12 },
                    {
                      default: r(
                        () =>
                          o[1] ||
                          (o[1] = [
                            e('div', { class: 'col-box col-box-1' }, null, -1),
                          ]),
                      ),
                      _: 1,
                    },
                  ),
                  l(
                    n(s),
                    { span: 12 },
                    {
                      default: r(
                        () =>
                          o[2] ||
                          (o[2] = [
                            e('div', { class: 'col-box col-box-2' }, null, -1),
                          ]),
                      ),
                      _: 1,
                    },
                  ),
                ]),
                _: 1,
              },
            ),
            l(
              n(a),
              { class: 'mb-4' },
              {
                default: r(() => [
                  l(
                    n(s),
                    { span: 8 },
                    {
                      default: r(
                        () =>
                          o[3] ||
                          (o[3] = [
                            e('div', { class: 'col-box col-box-1' }, null, -1),
                          ]),
                      ),
                      _: 1,
                    },
                  ),
                  l(
                    n(s),
                    { span: 8 },
                    {
                      default: r(
                        () =>
                          o[4] ||
                          (o[4] = [
                            e('div', { class: 'col-box col-box-2' }, null, -1),
                          ]),
                      ),
                      _: 1,
                    },
                  ),
                  l(
                    n(s),
                    { span: 8 },
                    {
                      default: r(
                        () =>
                          o[5] ||
                          (o[5] = [
                            e('div', { class: 'col-box col-box-1' }, null, -1),
                          ]),
                      ),
                      _: 1,
                    },
                  ),
                ]),
                _: 1,
              },
            ),
            l(
              n(a),
              { class: 'mb-4' },
              {
                default: r(() => [
                  l(
                    n(s),
                    { span: 6 },
                    {
                      default: r(
                        () =>
                          o[6] ||
                          (o[6] = [
                            e('div', { class: 'col-box col-box-1' }, null, -1),
                          ]),
                      ),
                      _: 1,
                    },
                  ),
                  l(
                    n(s),
                    { span: 6 },
                    {
                      default: r(
                        () =>
                          o[7] ||
                          (o[7] = [
                            e('div', { class: 'col-box col-box-2' }, null, -1),
                          ]),
                      ),
                      _: 1,
                    },
                  ),
                  l(
                    n(s),
                    { span: 6 },
                    {
                      default: r(
                        () =>
                          o[8] ||
                          (o[8] = [
                            e('div', { class: 'col-box col-box-1' }, null, -1),
                          ]),
                      ),
                      _: 1,
                    },
                  ),
                  l(
                    n(s),
                    { span: 6 },
                    {
                      default: r(
                        () =>
                          o[9] ||
                          (o[9] = [
                            e('div', { class: 'col-box col-box-2' }, null, -1),
                          ]),
                      ),
                      _: 1,
                    },
                  ),
                ]),
                _: 1,
              },
            ),
            l(
              n(a),
              { class: 'mb-4' },
              {
                default: r(() => [
                  l(
                    n(s),
                    { span: 4 },
                    {
                      default: r(
                        () =>
                          o[10] ||
                          (o[10] = [
                            e('div', { class: 'col-box col-box-1' }, null, -1),
                          ]),
                      ),
                      _: 1,
                    },
                  ),
                  l(
                    n(s),
                    { span: 4 },
                    {
                      default: r(
                        () =>
                          o[11] ||
                          (o[11] = [
                            e('div', { class: 'col-box col-box-2' }, null, -1),
                          ]),
                      ),
                      _: 1,
                    },
                  ),
                  l(
                    n(s),
                    { span: 4 },
                    {
                      default: r(
                        () =>
                          o[12] ||
                          (o[12] = [
                            e('div', { class: 'col-box col-box-1' }, null, -1),
                          ]),
                      ),
                      _: 1,
                    },
                  ),
                  l(
                    n(s),
                    { span: 4 },
                    {
                      default: r(
                        () =>
                          o[13] ||
                          (o[13] = [
                            e('div', { class: 'col-box col-box-2' }, null, -1),
                          ]),
                      ),
                      _: 1,
                    },
                  ),
                  l(
                    n(s),
                    { span: 4 },
                    {
                      default: r(
                        () =>
                          o[14] ||
                          (o[14] = [
                            e('div', { class: 'col-box col-box-1' }, null, -1),
                          ]),
                      ),
                      _: 1,
                    },
                  ),
                  l(
                    n(s),
                    { span: 4 },
                    {
                      default: r(
                        () =>
                          o[15] ||
                          (o[15] = [
                            e('div', { class: 'col-box col-box-2' }, null, -1),
                          ]),
                      ),
                      _: 1,
                    },
                  ),
                ]),
                _: 1,
              },
            ),
          ],
          64,
        )
      )
    },
  }),
  G = m(k, [['__scopeId', 'data-v-5ab5ee70']]),
  L = JSON.parse(
    '{"title":"Layout 布局","description":"","frontmatter":{},"headers":[],"relativePath":"components/layout/index.md","filePath":"components/layout/index.md"}',
  ),
  X = { name: 'components/layout/index.md' },
  Z = Object.assign(X, {
    setup(b) {
      return (i, o) => {
        const u = V('ClientOnly')
        return (
          c(),
          d('div', null, [
            o[0] ||
              (o[0] = f(
                '<h1 id="layout-布局" tabindex="-1">Layout 布局 <a class="header-anchor" href="#layout-布局" aria-label="Permalink to &quot;Layout 布局&quot;">​</a></h1><p>通过基础的 24 分栏，迅速简便地创建布局。</p><h2 id="基础布局" tabindex="-1">基础布局 <a class="header-anchor" href="#基础布局" aria-label="Permalink to &quot;基础布局&quot;">​</a></h2><p>使用列创建基础网格布局。</p><p>通过 <code>row</code> 和 <code>col</code> 组件，并通过 <code>col</code> 组件的 <code>span</code> 属性我们就可以自由地组合布局。</p>',
                5,
              )),
            l(u, null, {
              default: r(() => [
                l(
                  n(x),
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
                  { vue: r(() => [l(G)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            o[1] ||
              (o[1] = e(
                'h2',
                { id: '分栏间隔', tabindex: '-1' },
                [
                  t('分栏间隔 '),
                  e(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#分栏间隔',
                      'aria-label': 'Permalink to "分栏间隔"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            o[2] ||
              (o[2] = e(
                'p',
                null,
                [
                  t('通过 '),
                  e('code', null, 'offset'),
                  t(' 属性偏移占用指定的列数。'),
                ],
                -1,
              )),
            l(u, null, {
              default: r(() => [
                l(
                  n(x),
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
                    vueCode: n(F),
                  },
                  { vue: r(() => [l(A)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            o[3] ||
              (o[3] = e(
                'h2',
                { id: '混合布局', tabindex: '-1' },
                [
                  t('混合布局 '),
                  e(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#混合布局',
                      'aria-label': 'Permalink to "混合布局"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            o[4] ||
              (o[4] = e(
                'p',
                null,
                '通过基础的 1/24 分栏任意扩展组合形成较为复杂的混合布局。',
                -1,
              )),
            l(u, null, {
              default: r(() => [
                l(
                  n(x),
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
                  { vue: r(() => [l(w)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            o[5] ||
              (o[5] = f(
                '<h2 id="layout-api" tabindex="-1">Layout API <a class="header-anchor" href="#layout-api" aria-label="Permalink to &quot;Layout API&quot;">​</a></h2><h3 id="layout-属性" tabindex="-1">Layout 属性 <a class="header-anchor" href="#layout-属性" aria-label="Permalink to &quot;Layout 属性&quot;">​</a></h3><table tabindex="0"><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>span</code></td><td>栅格占据的列数</td><td><code>number</code></td><td>24</td></tr><tr><td><code>offset</code></td><td>栅格左侧的间隔格数</td><td><code>number</code></td><td>0</td></tr></tbody></table>',
                3,
              )),
          ])
        )
      }
    },
  })
export { L as __pageData, Z as default }
