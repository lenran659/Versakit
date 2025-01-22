import {
  z as f,
  s as a,
  c as b,
  p as m,
  d as y,
} from './chunks/theme.BKnsVfWH.js'
import {
  d as p,
  o,
  a as c,
  q as e,
  l as r,
  L as t,
  u as l,
  _ as v,
  a8 as _,
  U as h,
} from './chunks/framework.D5-Ddbi5.js'
import { R as u } from './chunks/index.CeAE3Zgl.js'
const g = `<template>\r
  <div class="common-layout">\r
    <ver-container>\r
      <ver-aside width="200px">Aside</ver-aside>\r
      <ver-container direction="column">\r
        <ver-header>Header</ver-header>\r
        <ver-main>Main</ver-main>\r
        <ver-footer>Footer</ver-footer>\r
      </ver-container>\r
    </ver-container>\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
import {\r
  VerContainer,\r
  VerHeader,\r
  VerMain,\r
  VerAside,\r
  VerFooter,\r
} from '@versakit/ui'\r
<\/script>\r
\r
<style scoped>\r
.common-layout {\r
  .ver-header {\r
    display: flex;\r
    justify-content: center;\r
    align-items: center;\r
    background-color: #c6e2ff;\r
  }\r
\r
  .ver-aside {\r
    display: flex;\r
    justify-content: center;\r
    align-items: center;\r
    text-align: center;\r
    color: #303133;\r
    background-color: rgb(216.8, 235.6, 255);\r
  }\r
\r
  .ver-main {\r
    display: flex;\r
    justify-content: center;\r
    align-items: center;\r
    background-color: #ecf5ff;\r
    height: 150px;\r
  }\r
\r
  .ver-footer {\r
    display: flex;\r
    justify-content: center;\r
    align-items: center;\r
    background-color: #c6e2ff;\r
  }\r
}\r
</style>\r
`,
  x = { class: 'common-layout' },
  V = p({
    __name: 'partSeven',
    setup(i) {
      return (s, n) => (
        o(),
        c('div', x, [
          e(t(a), null, {
            default: r(() => [
              e(
                t(f),
                { width: '200px' },
                { default: r(() => n[0] || (n[0] = [l('Aside')])), _: 1 },
              ),
              e(
                t(a),
                { direction: 'column' },
                {
                  default: r(() => [
                    e(t(b), null, {
                      default: r(() => n[1] || (n[1] = [l('Header')])),
                      _: 1,
                    }),
                    e(t(m), null, {
                      default: r(() => n[2] || (n[2] = [l('Main')])),
                      _: 1,
                    }),
                    e(t(y), null, {
                      default: r(() => n[3] || (n[3] = [l('Footer')])),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                },
              ),
            ]),
            _: 1,
          }),
        ])
      )
    },
  }),
  F = v(V, [['__scopeId', 'data-v-d8577821']]),
  A = `<template>\r
  <div class="common-layout">\r
    <ver-container>\r
      <ver-aside width="200px">Aside</ver-aside>\r
      <ver-container direction="column">\r
        <ver-header>Header</ver-header>\r
        <ver-main>Main</ver-main>\r
      </ver-container>\r
    </ver-container>\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
import { VerContainer, VerHeader, VerMain, VerAside } from '@versakit/ui'\r
<\/script>\r
\r
<style scoped>\r
.common-layout {\r
  .ver-header {\r
    display: flex;\r
    justify-content: center;\r
    align-items: center;\r
    background-color: #c6e2ff;\r
  }\r
\r
  .ver-aside {\r
    display: flex;\r
    justify-content: center;\r
    align-items: center;\r
    text-align: center;\r
    color: #303133;\r
    background-color: rgb(216.8, 235.6, 255);\r
  }\r
\r
  .ver-main {\r
    display: flex;\r
    justify-content: center;\r
    align-items: center;\r
    background-color: #ecf5ff;\r
    height: 150px;\r
  }\r
\r
  .ver-footer {\r
    display: flex;\r
    justify-content: center;\r
    align-items: center;\r
    background-color: #c6e2ff;\r
  }\r
}\r
</style>\r
`,
  j = { class: 'common-layout' },
  B = p({
    __name: 'partSix',
    setup(i) {
      return (s, n) => (
        o(),
        c('div', j, [
          e(t(a), null, {
            default: r(() => [
              e(
                t(f),
                { width: '200px' },
                { default: r(() => n[0] || (n[0] = [l('Aside')])), _: 1 },
              ),
              e(
                t(a),
                { direction: 'column' },
                {
                  default: r(() => [
                    e(t(b), null, {
                      default: r(() => n[1] || (n[1] = [l('Header')])),
                      _: 1,
                    }),
                    e(t(m), null, {
                      default: r(() => n[2] || (n[2] = [l('Main')])),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                },
              ),
            ]),
            _: 1,
          }),
        ])
      )
    },
  }),
  X = v(B, [['__scopeId', 'data-v-f8d3be10']]),
  G = `<template>\r
  <div class="common-layout">\r
    <ver-container direction="column">\r
      <ver-header>Header</ver-header>\r
      <ver-container>\r
        <ver-aside width="200px">Aside</ver-aside>\r
        <ver-container direction="column">\r
          <ver-main>Main</ver-main>\r
          <ver-footer>Footer</ver-footer>\r
        </ver-container>\r
      </ver-container>\r
    </ver-container>\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
import {\r
  VerContainer,\r
  VerHeader,\r
  VerMain,\r
  VerAside,\r
  VerFooter,\r
} from '@versakit/ui'\r
<\/script>\r
\r
<style scoped>\r
.common-layout {\r
  .ver-header {\r
    display: flex;\r
    justify-content: center;\r
    align-items: center;\r
    background-color: #c6e2ff;\r
  }\r
\r
  .ver-aside {\r
    display: flex;\r
    justify-content: center;\r
    align-items: center;\r
    text-align: center;\r
    color: #303133;\r
    background-color: rgb(216.8, 235.6, 255);\r
  }\r
\r
  .ver-main {\r
    display: flex;\r
    justify-content: center;\r
    align-items: center;\r
    background-color: #ecf5ff;\r
    height: 150px;\r
  }\r
\r
  .ver-footer {\r
    display: flex;\r
    justify-content: center;\r
    align-items: center;\r
    background-color: #c6e2ff;\r
  }\r
}\r
</style>\r
`,
  R = { class: 'common-layout' },
  C = p({
    __name: 'partFive',
    setup(i) {
      return (s, n) => (
        o(),
        c('div', R, [
          e(
            t(a),
            { direction: 'column' },
            {
              default: r(() => [
                e(t(b), null, {
                  default: r(() => n[0] || (n[0] = [l('Header')])),
                  _: 1,
                }),
                e(t(a), null, {
                  default: r(() => [
                    e(
                      t(f),
                      { width: '200px' },
                      { default: r(() => n[1] || (n[1] = [l('Aside')])), _: 1 },
                    ),
                    e(
                      t(a),
                      { direction: 'column' },
                      {
                        default: r(() => [
                          e(t(m), null, {
                            default: r(() => n[2] || (n[2] = [l('Main')])),
                            _: 1,
                          }),
                          e(t(y), null, {
                            default: r(() => n[3] || (n[3] = [l('Footer')])),
                            _: 1,
                          }),
                        ]),
                        _: 1,
                      },
                    ),
                  ]),
                  _: 1,
                }),
              ]),
              _: 1,
            },
          ),
        ])
      )
    },
  }),
  D = v(C, [['__scopeId', 'data-v-2c2970ad']]),
  w = `<template>\r
  <div class="common-layout">\r
    <ver-container direction="column">\r
      <ver-header>Header</ver-header>\r
      <ver-container>\r
        <ver-aside width="200px">Aside</ver-aside>\r
        <ver-main>Main</ver-main>\r
      </ver-container>\r
    </ver-container>\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
import { VerContainer, VerHeader, VerMain, VerAside } from '@versakit/ui'\r
<\/script>\r
\r
<style scoped>\r
.common-layout {\r
  .ver-header {\r
    display: flex;\r
    justify-content: center;\r
    align-items: center;\r
    background-color: #c6e2ff;\r
  }\r
\r
  .ver-aside {\r
    display: flex;\r
    justify-content: center;\r
    align-items: center;\r
    text-align: center;\r
    color: #303133;\r
    background-color: rgb(216.8, 235.6, 255);\r
  }\r
\r
  .ver-main {\r
    display: flex;\r
    justify-content: center;\r
    align-items: center;\r
    background-color: #ecf5ff;\r
    height: 150px;\r
  }\r
}\r
</style>\r
`,
  M = { class: 'common-layout' },
  L = p({
    __name: 'partFour',
    setup(i) {
      return (s, n) => (
        o(),
        c('div', M, [
          e(
            t(a),
            { direction: 'column' },
            {
              default: r(() => [
                e(t(b), null, {
                  default: r(() => n[0] || (n[0] = [l('Header')])),
                  _: 1,
                }),
                e(t(a), null, {
                  default: r(() => [
                    e(
                      t(f),
                      { width: '200px' },
                      { default: r(() => n[1] || (n[1] = [l('Aside')])), _: 1 },
                    ),
                    e(t(m), null, {
                      default: r(() => n[2] || (n[2] = [l('Main')])),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
              ]),
              _: 1,
            },
          ),
        ])
      )
    },
  }),
  k = v(L, [['__scopeId', 'data-v-47867854']]),
  Z = `<template>\r
  <div class="common-layout">\r
    <ver-container>\r
      <ver-aside width="200px">Aside</ver-aside>\r
      <ver-main>Main</ver-main>\r
      <ver-aside width="200px">Aside</ver-aside>\r
    </ver-container>\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
import { VerContainer, VerAside, VerMain } from '@versakit/ui'\r
<\/script>\r
\r
<style scoped>\r
.common-layout {\r
  .is-vertical {\r
    flex-direction: column;\r
  }\r
\r
  .ver-aside {\r
    display: flex;\r
    justify-content: center;\r
    align-items: center;\r
    background-color: #c1deff;\r
  }\r
\r
  .ver-main {\r
    display: flex;\r
    justify-content: center;\r
    align-items: center;\r
    background-color: #ecf5ff;\r
    height: 150px;\r
  }\r
}\r
</style>\r
`,
  N = { class: 'common-layout' },
  T = p({
    __name: 'partThree',
    setup(i) {
      return (s, n) => (
        o(),
        c('div', N, [
          e(t(a), null, {
            default: r(() => [
              e(
                t(f),
                { width: '200px' },
                { default: r(() => n[0] || (n[0] = [l('Aside')])), _: 1 },
              ),
              e(t(m), null, {
                default: r(() => n[1] || (n[1] = [l('Main')])),
                _: 1,
              }),
              e(
                t(f),
                { width: '200px' },
                { default: r(() => n[2] || (n[2] = [l('Aside')])), _: 1 },
              ),
            ]),
            _: 1,
          }),
        ])
      )
    },
  }),
  W = v(T, [['__scopeId', 'data-v-19ecd1d0']]),
  z = `<template>\r
  <div class="common-layout">\r
    <ver-container direction="column">\r
      <ver-header>Header</ver-header>\r
      <ver-main>Main</ver-main>\r
      <ver-footer>Footer</ver-footer>\r
    </ver-container>\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
import { VerContainer, VerHeader, VerMain, VerFooter } from '@versakit/ui'\r
<\/script>\r
\r
<style scoped>\r
.common-layout {\r
  .ver-header {\r
    display: flex;\r
    justify-content: center;\r
    align-items: center;\r
    background-color: #c6e2ff;\r
  }\r
  .ver-main {\r
    display: flex;\r
    justify-content: center;\r
    align-items: center;\r
    background-color: #ecf5ff;\r
    height: 150px;\r
  }\r
\r
  .ver-footer {\r
    display: flex;\r
    justify-content: center;\r
    align-items: center;\r
    background-color: #c6e2ff;\r
  }\r
}\r
</style>\r
`,
  q = { class: 'common-layout' },
  U = p({
    __name: 'partTow',
    setup(i) {
      return (s, n) => (
        o(),
        c('div', q, [
          e(
            t(a),
            { direction: 'column' },
            {
              default: r(() => [
                e(t(b), null, {
                  default: r(() => n[0] || (n[0] = [l('Header')])),
                  _: 1,
                }),
                e(t(m), null, {
                  default: r(() => n[1] || (n[1] = [l('Main')])),
                  _: 1,
                }),
                e(t(y), null, {
                  default: r(() => n[2] || (n[2] = [l('Footer')])),
                  _: 1,
                }),
              ]),
              _: 1,
            },
          ),
        ])
      )
    },
  }),
  H = v(U, [['__scopeId', 'data-v-a2fad046']]),
  S = `<template>\r
  <div class="common-layout">\r
    <ver-container direction="column">\r
      <ver-header>Header</ver-header>\r
      <ver-main>Main</ver-main>\r
    </ver-container>\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
import { VerContainer, VerHeader, VerMain } from '@versakit/ui'\r
<\/script>\r
\r
<style scoped>\r
.common-layout {\r
  .ver-header {\r
    display: flex;\r
    justify-content: center;\r
    align-items: center;\r
    background-color: #c6e2ff;\r
  }\r
  .ver-main {\r
    display: flex;\r
    justify-content: center;\r
    align-items: center;\r
    background-color: #ecf5ff;\r
    height: 150px;\r
  }\r
}\r
</style>\r
`,
  Q = { class: 'common-layout' },
  E = p({
    __name: 'partOne',
    setup(i) {
      return (s, n) => (
        o(),
        c('div', Q, [
          e(
            t(a),
            { direction: 'column' },
            {
              default: r(() => [
                e(t(b), null, {
                  default: r(() => n[0] || (n[0] = [l('Header')])),
                  _: 1,
                }),
                e(t(m), null, {
                  default: r(() => n[1] || (n[1] = [l('Main')])),
                  _: 1,
                }),
              ]),
              _: 1,
            },
          ),
        ])
      )
    },
  }),
  $ = v(E, [['__scopeId', 'data-v-7aa54d7e']]),
  K = JSON.parse(
    '{"title":"Container 布局容器","description":"","frontmatter":{},"headers":[],"relativePath":"components/container/index.md","filePath":"components/container/index.md"}',
  ),
  I = { name: 'components/container/index.md' },
  Y = Object.assign(I, {
    setup(i) {
      return (s, n) => {
        const d = h('ClientOnly')
        return (
          o(),
          c('div', null, [
            n[0] ||
              (n[0] = _(
                '<h1 id="container-布局容器" tabindex="-1">Container 布局容器 <a class="header-anchor" href="#container-布局容器" aria-label="Permalink to &quot;Container 布局容器&quot;">​</a></h1><p>用于布局的容器组件，方便快速搭建页面的基本结构：</p><p><code>ver-container</code>外层容器。当子元素中包含 <code>ver-header</code> 或 <code>t-footer</code> 时，全部子元素会垂直上下排列，否则会水平左右排列。</p><p><code>ver-header</code>：顶栏容器。</p><p><code>ver-aside</code>：侧边栏容器。</p><p><code>ver-main</code>：主要区域容器。</p><p><code>ver-footer</code>：底栏容器。</p><blockquote><p><strong>Tips</strong></p><p>以上组件采用了 flex 布局，使用前请确定目标浏览器是否兼容。 此外， <code>ver-container</code> 的直接子元素必须是&gt; 后四个组件中的一个或多个。 后四个组件的亲元素必须是一个 <code>ver-container</code></p></blockquote><h2 id="常见布局" tabindex="-1">常见布局 <a class="header-anchor" href="#常见布局" aria-label="Permalink to &quot;常见布局&quot;">​</a></h2>',
                9,
              )),
            e(d, null, {
              default: r(() => [
                e(
                  t(u),
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
                    vueCode: t(S),
                  },
                  { vue: r(() => [e($)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            e(d, null, {
              default: r(() => [
                e(
                  t(u),
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
                    vueCode: t(z),
                  },
                  { vue: r(() => [e(H)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            e(d, null, {
              default: r(() => [
                e(
                  t(u),
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
                    vueCode: t(Z),
                  },
                  { vue: r(() => [e(W)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            e(d, null, {
              default: r(() => [
                e(
                  t(u),
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
                    vueCode: t(w),
                  },
                  { vue: r(() => [e(k)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            e(d, null, {
              default: r(() => [
                e(
                  t(u),
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
                    vueCode: t(G),
                  },
                  { vue: r(() => [e(D)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            e(d, null, {
              default: r(() => [
                e(
                  t(u),
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
                    vueCode: t(A),
                  },
                  { vue: r(() => [e(X)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            e(d, null, {
              default: r(() => [
                e(
                  t(u),
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
                    vueCode: t(g),
                  },
                  { vue: r(() => [e(F)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
          ])
        )
      }
    },
  })
export { K as __pageData, Y as default }
