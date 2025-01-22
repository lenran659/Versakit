import { I as t, Z as s } from './chunks/theme.BKnsVfWH.js'
import {
  d as x,
  o as c,
  f as V,
  l as r,
  q as o,
  b as n,
  L as e,
  _ as v,
  a as p,
  F as m,
  y as C,
  a8 as f,
  u as d,
  U as y,
} from './chunks/framework.D5-Ddbi5.js'
import { R as u } from './chunks/index.CeAE3Zgl.js'
const g = `<template>\r
  <ver-row :gutter="4">\r
    <ver-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">\r
      <div class="col-box"></div>\r
    </ver-col>\r
    <ver-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">\r
      <div class="col-box col-box-1"></div>\r
    </ver-col>\r
    <ver-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">\r
      <div class="col-box"></div>\r
    </ver-col>\r
    <ver-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">\r
      <div class="col-box col-box-1"></div>\r
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
  background-color: #d3dce6;\r
}\r
\r
.col-box-1 {\r
  background-color: #e5e9f2;\r
}\r
</style>\r
`,
  w = x({
    __name: 'reactive',
    setup(b) {
      return (i, l) => (
        c(),
        V(
          e(s),
          { gutter: 4 },
          {
            default: r(() => [
              o(
                e(t),
                { xs: 8, sm: 6, md: 4, lg: 3, xl: 1 },
                {
                  default: r(
                    () =>
                      l[0] ||
                      (l[0] = [n('div', { class: 'col-box' }, null, -1)]),
                  ),
                  _: 1,
                },
              ),
              o(
                e(t),
                { xs: 4, sm: 6, md: 8, lg: 9, xl: 11 },
                {
                  default: r(
                    () =>
                      l[1] ||
                      (l[1] = [
                        n('div', { class: 'col-box col-box-1' }, null, -1),
                      ]),
                  ),
                  _: 1,
                },
              ),
              o(
                e(t),
                { xs: 4, sm: 6, md: 8, lg: 9, xl: 11 },
                {
                  default: r(
                    () =>
                      l[2] ||
                      (l[2] = [n('div', { class: 'col-box' }, null, -1)]),
                  ),
                  _: 1,
                },
              ),
              o(
                e(t),
                { xs: 8, sm: 6, md: 4, lg: 3, xl: 1 },
                {
                  default: r(
                    () =>
                      l[3] ||
                      (l[3] = [
                        n('div', { class: 'col-box col-box-1' }, null, -1),
                      ]),
                  ),
                  _: 1,
                },
              ),
            ]),
            _: 1,
          },
        )
      )
    },
  }),
  F = v(w, [['__scopeId', 'data-v-6f667a57']]),
  A = `<template>\r
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
  B = x({
    __name: 'mix',
    setup(b) {
      return (i, l) => (
        c(),
        p(
          m,
          null,
          [
            o(
              e(s),
              { class: 'mb-4' },
              {
                default: r(() => [
                  o(
                    e(t),
                    { span: 10 },
                    {
                      default: r(
                        () =>
                          l[0] ||
                          (l[0] = [
                            n('div', { class: 'col-box col-box-1' }, null, -1),
                          ]),
                      ),
                      _: 1,
                    },
                  ),
                  o(
                    e(t),
                    { span: 14 },
                    {
                      default: r(
                        () =>
                          l[1] ||
                          (l[1] = [
                            n('div', { class: 'col-box col-box-2' }, null, -1),
                          ]),
                      ),
                      _: 1,
                    },
                  ),
                ]),
                _: 1,
              },
            ),
            o(
              e(s),
              { class: 'mb-4' },
              {
                default: r(() => [
                  o(
                    e(t),
                    { span: 6 },
                    {
                      default: r(
                        () =>
                          l[2] ||
                          (l[2] = [
                            n('div', { class: 'col-box col-box-1' }, null, -1),
                          ]),
                      ),
                      _: 1,
                    },
                  ),
                  o(
                    e(t),
                    { span: 8 },
                    {
                      default: r(
                        () =>
                          l[3] ||
                          (l[3] = [
                            n('div', { class: 'col-box col-box-2' }, null, -1),
                          ]),
                      ),
                      _: 1,
                    },
                  ),
                  o(
                    e(t),
                    { span: 10 },
                    {
                      default: r(
                        () =>
                          l[4] ||
                          (l[4] = [
                            n('div', { class: 'col-box col-box-1' }, null, -1),
                          ]),
                      ),
                      _: 1,
                    },
                  ),
                ]),
                _: 1,
              },
            ),
            o(
              e(s),
              { class: 'mb-4' },
              {
                default: r(() => [
                  o(
                    e(t),
                    { span: 4 },
                    {
                      default: r(
                        () =>
                          l[5] ||
                          (l[5] = [
                            n('div', { class: 'col-box col-box-1' }, null, -1),
                          ]),
                      ),
                      _: 1,
                    },
                  ),
                  o(
                    e(t),
                    { span: 16 },
                    {
                      default: r(
                        () =>
                          l[6] ||
                          (l[6] = [
                            n('div', { class: 'col-box col-box-2' }, null, -1),
                          ]),
                      ),
                      _: 1,
                    },
                  ),
                  o(
                    e(t),
                    { span: 4 },
                    {
                      default: r(
                        () =>
                          l[7] ||
                          (l[7] = [
                            n('div', { class: 'col-box col-box-1' }, null, -1),
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
  G = v(B, [['__scopeId', 'data-v-19d058cd']]),
  L = `<template>\r
  <ver-row :gutter="20">\r
    <ver-col :span="6" v-for="n in 4" :key="n">\r
      <div class="col-box"></div>\r
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
</style>\r
`,
  R = x({
    __name: 'gutter',
    setup(b) {
      return (i, l) => (
        c(),
        V(
          e(s),
          { gutter: 20 },
          {
            default: r(() => [
              (c(),
              p(
                m,
                null,
                C(4, (a) =>
                  o(
                    e(t),
                    { span: 6, key: a },
                    {
                      default: r(
                        () =>
                          l[0] ||
                          (l[0] = [n('div', { class: 'col-box' }, null, -1)]),
                      ),
                      _: 2,
                    },
                    1024,
                  ),
                ),
                64,
              )),
            ]),
            _: 1,
          },
        )
      )
    },
  }),
  D = v(R, [['__scopeId', 'data-v-80b4c387']]),
  _ = `<template>\r
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
  k = x({
    __name: 'offset',
    setup(b) {
      return (i, l) => (
        c(),
        p(
          m,
          null,
          [
            o(
              e(s),
              { class: 'mb-4' },
              {
                default: r(() => [
                  o(
                    e(t),
                    { span: 10 },
                    {
                      default: r(
                        () =>
                          l[0] ||
                          (l[0] = [
                            n('div', { class: 'col-box col-box-1' }, '10', -1),
                          ]),
                      ),
                      _: 1,
                    },
                  ),
                  o(
                    e(t),
                    { span: 12, offset: 2 },
                    {
                      default: r(
                        () =>
                          l[1] ||
                          (l[1] = [
                            n('div', { class: 'col-box col-box-2' }, '12', -1),
                          ]),
                      ),
                      _: 1,
                    },
                  ),
                ]),
                _: 1,
              },
            ),
            o(
              e(s),
              { class: 'mb-4' },
              {
                default: r(() => [
                  o(
                    e(t),
                    { span: 8 },
                    {
                      default: r(
                        () =>
                          l[2] ||
                          (l[2] = [
                            n('div', { class: 'col-box col-box-1' }, '8', -1),
                          ]),
                      ),
                      _: 1,
                    },
                  ),
                  o(
                    e(t),
                    { span: 8, offset: 8 },
                    {
                      default: r(
                        () =>
                          l[3] ||
                          (l[3] = [
                            n('div', { class: 'col-box col-box-2' }, '8', -1),
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
  X = v(k, [['__scopeId', 'data-v-0ad19b5f']]),
  j = `<template>\r
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
  W = x({
    __name: 'base',
    setup(b) {
      return (i, l) => (
        c(),
        p(
          m,
          null,
          [
            o(
              e(s),
              { class: 'mb-4' },
              {
                default: r(() => [
                  o(
                    e(t),
                    { span: 24 },
                    {
                      default: r(
                        () =>
                          l[0] ||
                          (l[0] = [n('div', { class: 'col-box' }, null, -1)]),
                      ),
                      _: 1,
                    },
                  ),
                ]),
                _: 1,
              },
            ),
            o(
              e(s),
              { class: 'mb-4' },
              {
                default: r(() => [
                  o(
                    e(t),
                    { span: 12 },
                    {
                      default: r(
                        () =>
                          l[1] ||
                          (l[1] = [
                            n('div', { class: 'col-box col-box-1' }, null, -1),
                          ]),
                      ),
                      _: 1,
                    },
                  ),
                  o(
                    e(t),
                    { span: 12 },
                    {
                      default: r(
                        () =>
                          l[2] ||
                          (l[2] = [
                            n('div', { class: 'col-box col-box-2' }, null, -1),
                          ]),
                      ),
                      _: 1,
                    },
                  ),
                ]),
                _: 1,
              },
            ),
            o(
              e(s),
              { class: 'mb-4' },
              {
                default: r(() => [
                  o(
                    e(t),
                    { span: 8 },
                    {
                      default: r(
                        () =>
                          l[3] ||
                          (l[3] = [
                            n('div', { class: 'col-box col-box-1' }, null, -1),
                          ]),
                      ),
                      _: 1,
                    },
                  ),
                  o(
                    e(t),
                    { span: 8 },
                    {
                      default: r(
                        () =>
                          l[4] ||
                          (l[4] = [
                            n('div', { class: 'col-box col-box-2' }, null, -1),
                          ]),
                      ),
                      _: 1,
                    },
                  ),
                  o(
                    e(t),
                    { span: 8 },
                    {
                      default: r(
                        () =>
                          l[5] ||
                          (l[5] = [
                            n('div', { class: 'col-box col-box-1' }, null, -1),
                          ]),
                      ),
                      _: 1,
                    },
                  ),
                ]),
                _: 1,
              },
            ),
            o(
              e(s),
              { class: 'mb-4' },
              {
                default: r(() => [
                  o(
                    e(t),
                    { span: 6 },
                    {
                      default: r(
                        () =>
                          l[6] ||
                          (l[6] = [
                            n('div', { class: 'col-box col-box-1' }, null, -1),
                          ]),
                      ),
                      _: 1,
                    },
                  ),
                  o(
                    e(t),
                    { span: 6 },
                    {
                      default: r(
                        () =>
                          l[7] ||
                          (l[7] = [
                            n('div', { class: 'col-box col-box-2' }, null, -1),
                          ]),
                      ),
                      _: 1,
                    },
                  ),
                  o(
                    e(t),
                    { span: 6 },
                    {
                      default: r(
                        () =>
                          l[8] ||
                          (l[8] = [
                            n('div', { class: 'col-box col-box-1' }, null, -1),
                          ]),
                      ),
                      _: 1,
                    },
                  ),
                  o(
                    e(t),
                    { span: 6 },
                    {
                      default: r(
                        () =>
                          l[9] ||
                          (l[9] = [
                            n('div', { class: 'col-box col-box-2' }, null, -1),
                          ]),
                      ),
                      _: 1,
                    },
                  ),
                ]),
                _: 1,
              },
            ),
            o(
              e(s),
              { class: 'mb-4' },
              {
                default: r(() => [
                  o(
                    e(t),
                    { span: 4 },
                    {
                      default: r(
                        () =>
                          l[10] ||
                          (l[10] = [
                            n('div', { class: 'col-box col-box-1' }, null, -1),
                          ]),
                      ),
                      _: 1,
                    },
                  ),
                  o(
                    e(t),
                    { span: 4 },
                    {
                      default: r(
                        () =>
                          l[11] ||
                          (l[11] = [
                            n('div', { class: 'col-box col-box-2' }, null, -1),
                          ]),
                      ),
                      _: 1,
                    },
                  ),
                  o(
                    e(t),
                    { span: 4 },
                    {
                      default: r(
                        () =>
                          l[12] ||
                          (l[12] = [
                            n('div', { class: 'col-box col-box-1' }, null, -1),
                          ]),
                      ),
                      _: 1,
                    },
                  ),
                  o(
                    e(t),
                    { span: 4 },
                    {
                      default: r(
                        () =>
                          l[13] ||
                          (l[13] = [
                            n('div', { class: 'col-box col-box-2' }, null, -1),
                          ]),
                      ),
                      _: 1,
                    },
                  ),
                  o(
                    e(t),
                    { span: 4 },
                    {
                      default: r(
                        () =>
                          l[14] ||
                          (l[14] = [
                            n('div', { class: 'col-box col-box-1' }, null, -1),
                          ]),
                      ),
                      _: 1,
                    },
                  ),
                  o(
                    e(t),
                    { span: 4 },
                    {
                      default: r(
                        () =>
                          l[15] ||
                          (l[15] = [
                            n('div', { class: 'col-box col-box-2' }, null, -1),
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
  Z = v(W, [['__scopeId', 'data-v-e8992b7d']]),
  T = JSON.parse(
    '{"title":"Layout 布局","description":"","frontmatter":{},"headers":[],"relativePath":"components/layout/index.md","filePath":"components/layout/index.md"}',
  ),
  q = { name: 'components/layout/index.md' },
  z = Object.assign(q, {
    setup(b) {
      return (i, l) => {
        const a = y('ClientOnly')
        return (
          c(),
          p('div', null, [
            l[0] ||
              (l[0] = f(
                '<h1 id="layout-布局" tabindex="-1">Layout 布局 <a class="header-anchor" href="#layout-布局" aria-label="Permalink to &quot;Layout 布局&quot;">​</a></h1><p>通过基础的 24 分栏，迅速简便地创建布局。</p><h2 id="基础布局" tabindex="-1">基础布局 <a class="header-anchor" href="#基础布局" aria-label="Permalink to &quot;基础布局&quot;">​</a></h2><p>使用列创建基础网格布局。</p><p>通过 <code>row</code> 和 <code>col</code> 组件，并通过 <code>col</code> 组件的 <code>span</code> 属性我们就可以自由地组合布局。</p>',
                5,
              )),
            o(a, null, {
              default: r(() => [
                o(
                  e(u),
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
                    vueCode: e(j),
                  },
                  { vue: r(() => [o(Z)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            l[1] ||
              (l[1] = n(
                'h2',
                { id: '列偏移', tabindex: '-1' },
                [
                  d('列偏移 '),
                  n(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#列偏移',
                      'aria-label': 'Permalink to "列偏移"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            l[2] ||
              (l[2] = n(
                'p',
                null,
                [
                  d('通过 '),
                  n('code', null, 'offset'),
                  d(' 属性指定分栏偏移的栏数'),
                ],
                -1,
              )),
            o(a, null, {
              default: r(() => [
                o(
                  e(u),
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
                    vueCode: e(_),
                  },
                  { vue: r(() => [o(X)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            l[3] ||
              (l[3] = n(
                'h2',
                { id: '分栏间隔', tabindex: '-1' },
                [
                  d('分栏间隔 '),
                  n(
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
            l[4] ||
              (l[4] = n(
                'p',
                null,
                [
                  d('行提供 '),
                  n('code', null, 'gutter'),
                  d(' 属性来指定列之间的间距，其默认值为0。'),
                ],
                -1,
              )),
            o(a, null, {
              default: r(() => [
                o(
                  e(u),
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
                    vueCode: e(L),
                  },
                  { vue: r(() => [o(D)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            l[5] ||
              (l[5] = n(
                'h2',
                { id: '混合布局', tabindex: '-1' },
                [
                  d('混合布局 '),
                  n(
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
            l[6] ||
              (l[6] = n(
                'p',
                null,
                '通过基础的 1/24 分栏任意扩展组合形成较为复杂的混合布局。',
                -1,
              )),
            o(a, null, {
              default: r(() => [
                o(
                  e(u),
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
                    vueCode: e(A),
                  },
                  { vue: r(() => [o(G)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            l[7] ||
              (l[7] = n(
                'h2',
                { id: '响应式布局', tabindex: '-1' },
                [
                  d('响应式布局 '),
                  n(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#响应式布局',
                      'aria-label': 'Permalink to "响应式布局"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            l[8] ||
              (l[8] = n(
                'p',
                null,
                '参照了 Bootstrap 的 响应式设计，预设了五个响应尺寸：xs、sm、md、lg 和 xl。',
                -1,
              )),
            o(a, null, {
              default: r(() => [
                o(
                  e(u),
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
                    vueCode: e(g),
                  },
                  { vue: r(() => [o(F)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            l[9] ||
              (l[9] = f(
                '<h2 id="layout-api" tabindex="-1">Layout API <a class="header-anchor" href="#layout-api" aria-label="Permalink to &quot;Layout API&quot;">​</a></h2><h3 id="layout-属性" tabindex="-1">Layout 属性 <a class="header-anchor" href="#layout-属性" aria-label="Permalink to &quot;Layout 属性&quot;">​</a></h3><table tabindex="0"><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>span</code></td><td>栅格占据的列数</td><td><code>number</code></td><td>24</td></tr><tr><td><code>offset</code></td><td>栅格左侧的间隔格数</td><td><code>number</code></td><td>0</td></tr><tr><td><code>xs</code></td><td><code>&lt;768px</code> 响应式栅格数或者栅格属性对象</td><td><code>number</code></td><td>-</td></tr><tr><td><code>sm</code></td><td><code>≥768px</code> 响应式栅格数或者栅格属性对象</td><td><code>number</code></td><td>-</td></tr><tr><td><code>md</code></td><td><code>≥992px</code> 响应式栅格数或者栅格属性对象</td><td><code>number</code></td><td>-</td></tr><tr><td><code>lg</code></td><td><code>≥1200px</code> 响应式栅格数或者栅格属性对象</td><td><code>number</code></td><td>-</td></tr><tr><td><code>xl</code></td><td><code>≥1920px</code> 响应式栅格数或者栅格属性对象</td><td><code>number</code></td><td>-</td></tr></tbody></table>',
                3,
              )),
          ])
        )
      }
    },
  })
export { T as __pageData, z as default }
