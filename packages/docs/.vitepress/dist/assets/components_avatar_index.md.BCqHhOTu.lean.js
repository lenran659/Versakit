import { r as a, _ as h, I as d, Z as _ } from './chunks/theme.BKnsVfWH.js'
import {
  d as p,
  a9 as A,
  aa as F,
  o as c,
  a as m,
  F as y,
  y as V,
  b as e,
  t as q,
  q as n,
  L as s,
  _ as f,
  l as t,
  f as x,
  u as l,
  a8 as j,
  U as k,
} from './chunks/framework.D5-Ddbi5.js'
import { R as v } from './chunks/index.CeAE3Zgl.js'
const w = `<template>\r
  <div class="demo">\r
    <div v-for="fit in fits" :key="fit" class="block">\r
      <div class="title">{{ fit }}</div>\r
      <ver-avatar shape="square" :size="100" :fit="fit" :src="url" />\r
    </div>\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
import { reactive, toRefs } from 'vue'\r
import { VerAvatar } from '@versakit/ui'\r
\r
const state = reactive({\r
  fits: ['fill', 'contain', 'cover', 'none'],\r
  url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',\r
})\r
const { fits, url } = toRefs(state)\r
<\/script>\r
\r
<style scoped>\r
.demo {\r
  display: flex;\r
  justify-content: center;\r
  align-items: center;\r
}\r
.title {\r
  width: 100%;\r
  text-align: center;\r
}\r
.block {\r
  margin-left: 15px;\r
  margin-right: 15px;\r
}\r
</style>\r
`,
  X = { class: 'demo' },
  z = { class: 'title' },
  G = p({
    __name: 'fit',
    setup(b) {
      const i = A({
          fits: ['fill', 'contain', 'cover', 'none'],
          url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
        }),
        { fits: r, url: o } = F(i)
      return (u, je) => (
        c(),
        m('div', X, [
          (c(!0),
          m(
            y,
            null,
            V(
              s(r),
              (g) => (
                c(),
                m('div', { key: g, class: 'block' }, [
                  e('div', z, q(g), 1),
                  n(
                    s(a),
                    { shape: 'square', size: 100, fit: g, src: s(o) },
                    null,
                    8,
                    ['fit', 'src'],
                  ),
                ])
              ),
            ),
            128,
          )),
        ])
      )
    },
  }),
  B = f(G, [['__scopeId', 'data-v-71586171']]),
  R = `<template>\r
  <div class="demo-basic">\r
    <div class="demo-error">\r
      <ver-avatar\r
        src="http://wrong"\r
        fallback="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"\r
      />\r
    </div>\r
    <div class="demo-error">\r
      <ver-avatar src="http://wrong">\r
        <template #error>\r
          <ver-icon name="card-image" />\r
        </template>\r
      </ver-avatar>\r
    </div>\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
import { VerAvatar, VerIcon } from '@versakit/ui'\r
<\/script>\r
\r
<style scoped>\r
.demo-basic {\r
  display: flex;\r
}\r
.demo-error {\r
  margin: 5px;\r
}\r
</style>\r
`,
  D = { class: 'demo-basic' },
  C = { class: 'demo-error' },
  L = { class: 'demo-error' },
  $ = p({
    __name: 'error',
    setup(b) {
      return (i, r) => (
        c(),
        m('div', D, [
          e('div', C, [
            n(s(a), {
              src: 'http://wrong',
              fallback:
                'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
            }),
          ]),
          e('div', L, [
            n(
              s(a),
              { src: 'http://wrong' },
              { error: t(() => [n(s(h), { name: 'card-image' })]), _: 1 },
            ),
          ]),
        ])
      )
    },
  }),
  Z = f($, [['__scopeId', 'data-v-f94f1cba']]),
  M = `<template>\r
  <ver-row>\r
    <ver-col :span="12">\r
      <div class="demo-basic">\r
        <div class="sub-title">circle</div>\r
        <div class="demo-basic--circle">\r
          <div class="block">\r
            <ver-avatar\r
              src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"\r
            />\r
          </div>\r
          <div class="block">\r
            <ver-avatar>user</ver-avatar>\r
          </div>\r
          <div class="block">\r
            <ver-avatar>\r
              <VerIcon name="card-image" />\r
            </ver-avatar>\r
          </div>\r
        </div>\r
      </div>\r
    </ver-col>\r
    <ver-col :span="12">\r
      <div class="demo-basic">\r
        <div class="sub-title">square</div>\r
        <div class="demo-basic--square">\r
          <div class="block">\r
            <ver-avatar\r
              src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"\r
              shape="square"\r
            />\r
          </div>\r
          <div class="block">\r
            <ver-avatar shape="square">user</ver-avatar>\r
          </div>\r
          <div class="block">\r
            <ver-avatar shape="square">\r
              <VerIcon name="card-image" />\r
            </ver-avatar>\r
          </div>\r
        </div>\r
      </div>\r
    </ver-col>\r
  </ver-row>\r
</template>\r
\r
<script setup lang="ts">\r
import { VerAvatar, VerIcon, VerRow, VerCol } from '@versakit/ui'\r
<\/script>\r
\r
<style scoped>\r
.demo-basic {\r
  text-align: center;\r
}\r
\r
.demo-basic .sub-title {\r
  margin-bottom: 10px;\r
  font-size: 14px;\r
  color: #909399;\r
}\r
\r
.demo-basic .demo-basic--circle,\r
.demo-basic .demo-basic--square {\r
  margin-top: 20px;\r
  display: flex;\r
  justify-content: space-between;\r
  align-items: center;\r
}\r
\r
.demo-basic .block:not(:last-child) {\r
  border-right: 1px solid #dcdfe6;\r
}\r
\r
.demo-basic .block {\r
  flex: 1;\r
}\r
\r
.demo-basic .el-col:not(:last-child) {\r
  border-right: 1px solid #dcdfe6;\r
}\r
</style>\r
`,
  N = { class: 'demo-basic' },
  T = { class: 'demo-basic--circle' },
  W = { class: 'block' },
  U = { class: 'block' },
  E = { class: 'block' },
  I = { class: 'demo-basic' },
  S = { class: 'demo-basic--square' },
  P = { class: 'block' },
  Y = { class: 'block' },
  Q = { class: 'block' },
  O = p({
    __name: 'src',
    setup(b) {
      return (i, r) => (
        c(),
        x(s(_), null, {
          default: t(() => [
            n(
              s(d),
              { span: 12 },
              {
                default: t(() => [
                  e('div', N, [
                    r[1] ||
                      (r[1] = e('div', { class: 'sub-title' }, 'circle', -1)),
                    e('div', T, [
                      e('div', W, [
                        n(s(a), {
                          src: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
                        }),
                      ]),
                      e('div', U, [
                        n(s(a), null, {
                          default: t(() => r[0] || (r[0] = [l('user')])),
                          _: 1,
                        }),
                      ]),
                      e('div', E, [
                        n(s(a), null, {
                          default: t(() => [n(s(h), { name: 'card-image' })]),
                          _: 1,
                        }),
                      ]),
                    ]),
                  ]),
                ]),
                _: 1,
              },
            ),
            n(
              s(d),
              { span: 12 },
              {
                default: t(() => [
                  e('div', I, [
                    r[3] ||
                      (r[3] = e('div', { class: 'sub-title' }, 'square', -1)),
                    e('div', S, [
                      e('div', P, [
                        n(s(a), {
                          src: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
                          shape: 'square',
                        }),
                      ]),
                      e('div', Y, [
                        n(
                          s(a),
                          { shape: 'square' },
                          {
                            default: t(() => r[2] || (r[2] = [l('user')])),
                            _: 1,
                          },
                        ),
                      ]),
                      e('div', Q, [
                        n(
                          s(a),
                          { shape: 'square' },
                          {
                            default: t(() => [n(s(h), { name: 'card-image' })]),
                            _: 1,
                          },
                        ),
                      ]),
                    ]),
                  ]),
                ]),
                _: 1,
              },
            ),
          ]),
          _: 1,
        })
      )
    },
  }),
  J = f(O, [['__scopeId', 'data-v-d686a1ef']]),
  H = `<template>\r
  <ver-row>\r
    <ver-col :span="12">\r
      <div class="demo-basic">\r
        <div class="sub-title">circle</div>\r
        <div class="demo-basic--circle">\r
          <div class="block">\r
            <ver-avatar\r
              size="lg"\r
              src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"\r
            />\r
          </div>\r
          <div class="block">\r
            <ver-avatar\r
              size="lg"\r
              src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"\r
            />\r
          </div>\r
          <div class="block">\r
            <ver-avatar\r
              src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"\r
            />\r
          </div>\r
        </div>\r
      </div>\r
    </ver-col>\r
    <ver-col :span="12">\r
      <div class="demo-basic">\r
        <div class="sub-title">square</div>\r
        <div class="demo-basic--square">\r
          <div class="block">\r
            <ver-avatar\r
              size="xs"\r
              src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"\r
              shape="square"\r
            />\r
          </div>\r
          <div class="block">\r
            <ver-avatar\r
              size="sm"\r
              src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"\r
              shape="square"\r
            />\r
          </div>\r
          <div class="block">\r
            <ver-avatar\r
              size="md"\r
              src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"\r
              shape="square"\r
            />\r
          </div>\r
        </div>\r
      </div>\r
    </ver-col>\r
  </ver-row>\r
</template>\r
\r
<script lang="ts" setup>\r
import { VerAvatar, VerRow, VerCol } from '@versakit/ui'\r
<\/script>\r
\r
<style scoped>\r
.demo-basic {\r
  text-align: center;\r
}\r
\r
.demo-basic .sub-title {\r
  margin-bottom: 10px;\r
  font-size: 14px;\r
  color: #909399;\r
}\r
\r
.demo-basic .demo-basic--circle,\r
.demo-basic .demo-basic--square {\r
  margin-top: 20px;\r
  display: flex;\r
  justify-content: space-between;\r
  align-items: center;\r
}\r
\r
.demo-basic .block:not(:last-child) {\r
  border-right: 1px solid #dcdfe6;\r
}\r
\r
.demo-basic .block {\r
  flex: 1;\r
}\r
\r
.demo-basic .el-col:not(:last-child) {\r
  border-right: 1px solid #dcdfe6;\r
}\r
</style>\r
`,
  K = { class: 'demo-basic' },
  ee = { class: 'demo-basic--circle' },
  re = { class: 'block' },
  ne = { class: 'block' },
  se = { class: 'block' },
  te = { class: 'demo-basic' },
  ae = { class: 'demo-basic--square' },
  le = { class: 'block' },
  ce = { class: 'block' },
  oe = { class: 'block' },
  ie = p({
    __name: 'size',
    setup(b) {
      return (i, r) => (
        c(),
        x(s(_), null, {
          default: t(() => [
            n(
              s(d),
              { span: 12 },
              {
                default: t(() => [
                  e('div', K, [
                    r[0] ||
                      (r[0] = e('div', { class: 'sub-title' }, 'circle', -1)),
                    e('div', ee, [
                      e('div', re, [
                        n(s(a), {
                          size: 'lg',
                          src: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
                        }),
                      ]),
                      e('div', ne, [
                        n(s(a), {
                          size: 'lg',
                          src: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
                        }),
                      ]),
                      e('div', se, [
                        n(s(a), {
                          src: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
                        }),
                      ]),
                    ]),
                  ]),
                ]),
                _: 1,
              },
            ),
            n(
              s(d),
              { span: 12 },
              {
                default: t(() => [
                  e('div', te, [
                    r[1] ||
                      (r[1] = e('div', { class: 'sub-title' }, 'square', -1)),
                    e('div', ae, [
                      e('div', le, [
                        n(s(a), {
                          size: 'xs',
                          src: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
                          shape: 'square',
                        }),
                      ]),
                      e('div', ce, [
                        n(s(a), {
                          size: 'sm',
                          src: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
                          shape: 'square',
                        }),
                      ]),
                      e('div', oe, [
                        n(s(a), {
                          size: 'md',
                          src: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
                          shape: 'square',
                        }),
                      ]),
                    ]),
                  ]),
                ]),
                _: 1,
              },
            ),
          ]),
          _: 1,
        })
      )
    },
  }),
  de = f(ie, [['__scopeId', 'data-v-f23956cb']]),
  be = `<template>\r
  <ver-row>\r
    <ver-col :span="12">\r
      <div class="demo-basic">\r
        <div class="sub-title">circle</div>\r
        <div class="demo-basic--circle">\r
          <div class="block">\r
            <ver-avatar\r
              :size="24"\r
              src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"\r
            />\r
          </div>\r
          <div class="block">\r
            <ver-avatar\r
              :size="36"\r
              src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"\r
            />\r
          </div>\r
          <div class="block">\r
            <ver-avatar\r
              src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"\r
            />\r
          </div>\r
        </div>\r
      </div>\r
    </ver-col>\r
    <ver-col :span="12">\r
      <div class="demo-basic">\r
        <div class="sub-title">square</div>\r
        <div class="demo-basic--square">\r
          <div class="block">\r
            <ver-avatar\r
              :size="24"\r
              src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"\r
              shape="square"\r
            />\r
          </div>\r
          <div class="block">\r
            <ver-avatar\r
              :size="36"\r
              src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"\r
              shape="square"\r
            />\r
          </div>\r
          <div class="block">\r
            <ver-avatar\r
              src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"\r
              shape="square"\r
            />\r
          </div>\r
        </div>\r
      </div>\r
    </ver-col>\r
  </ver-row>\r
</template>\r
\r
<script lang="ts" setup>\r
import { VerAvatar, VerRow, VerCol } from '@versakit/ui'\r
<\/script>\r
\r
<style scoped>\r
.demo-basic {\r
  text-align: center;\r
}\r
\r
.demo-basic .sub-title {\r
  margin-bottom: 10px;\r
  font-size: 14px;\r
  color: #909399;\r
}\r
\r
.demo-basic .demo-basic--circle,\r
.demo-basic .demo-basic--square {\r
  margin-top: 20px;\r
  display: flex;\r
  justify-content: space-between;\r
  align-items: center;\r
}\r
\r
.demo-basic .block:not(:last-child) {\r
  border-right: 1px solid #dcdfe6;\r
}\r
\r
.demo-basic .block {\r
  flex: 1;\r
}\r
\r
.demo-basic .el-col:not(:last-child) {\r
  border-right: 1px solid #dcdfe6;\r
}\r
</style>\r
`,
  ue = { class: 'demo-basic' },
  ve = { class: 'demo-basic--circle' },
  me = { class: 'block' },
  pe = { class: 'block' },
  fe = { class: 'block' },
  ge = { class: 'demo-basic' },
  he = { class: 'demo-basic--square' },
  _e = { class: 'block' },
  xe = { class: 'block' },
  ke = { class: 'block' },
  Ae = p({
    __name: 'base',
    setup(b) {
      return (i, r) => (
        c(),
        x(s(_), null, {
          default: t(() => [
            n(
              s(d),
              { span: 12 },
              {
                default: t(() => [
                  e('div', ue, [
                    r[0] ||
                      (r[0] = e('div', { class: 'sub-title' }, 'circle', -1)),
                    e('div', ve, [
                      e('div', me, [
                        n(s(a), {
                          size: 24,
                          src: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
                        }),
                      ]),
                      e('div', pe, [
                        n(s(a), {
                          size: 36,
                          src: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
                        }),
                      ]),
                      e('div', fe, [
                        n(s(a), {
                          src: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
                        }),
                      ]),
                    ]),
                  ]),
                ]),
                _: 1,
              },
            ),
            n(
              s(d),
              { span: 12 },
              {
                default: t(() => [
                  e('div', ge, [
                    r[1] ||
                      (r[1] = e('div', { class: 'sub-title' }, 'square', -1)),
                    e('div', he, [
                      e('div', _e, [
                        n(s(a), {
                          size: 24,
                          src: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
                          shape: 'square',
                        }),
                      ]),
                      e('div', xe, [
                        n(s(a), {
                          size: 36,
                          src: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
                          shape: 'square',
                        }),
                      ]),
                      e('div', ke, [
                        n(s(a), {
                          src: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
                          shape: 'square',
                        }),
                      ]),
                    ]),
                  ]),
                ]),
                _: 1,
              },
            ),
          ]),
          _: 1,
        })
      )
    },
  }),
  Fe = f(Ae, [['__scopeId', 'data-v-42888fb5']]),
  ye = { tabindex: '0' },
  Ve = { tabindex: '0' },
  Ge = JSON.parse(
    '{"title":"Avatar 头像","description":"","frontmatter":{},"headers":[],"relativePath":"components/avatar/index.md","filePath":"components/avatar/index.md"}',
  ),
  qe = { name: 'components/avatar/index.md' },
  Be = Object.assign(qe, {
    setup(b) {
      return (i, r) => {
        const o = k('ClientOnly'),
          u = k('Tool')
        return (
          c(),
          m('div', null, [
            r[20] ||
              (r[20] = e(
                'h1',
                { id: 'avatar-头像', tabindex: '-1' },
                [
                  l('Avatar 头像 '),
                  e(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#avatar-头像',
                      'aria-label': 'Permalink to "Avatar 头像"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            r[21] ||
              (r[21] = e(
                'p',
                null,
                'Avatar 组件可以用来代表人物或对象， 支持使用图片、图标或者文字作为 Avatar。',
                -1,
              )),
            r[22] ||
              (r[22] = e(
                'h2',
                { id: '基础用法', tabindex: '-1' },
                [
                  l('基础用法 '),
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
            r[23] ||
              (r[23] = e(
                'p',
                null,
                [
                  l(' 使用 '),
                  e('code', null, 'shape'),
                  l(' 和 '),
                  e('code', null, 'size'),
                  l(' 属性来设置 Avatar 的形状和大小。 '),
                ],
                -1,
              )),
            n(o, null, {
              default: t(() => [
                n(
                  s(v),
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
                    vueCode: s(be),
                  },
                  { vue: t(() => [n(Fe)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            r[24] ||
              (r[24] = j(
                '<h2 id="头像大小" tabindex="-1">头像大小 <a class="header-anchor" href="#头像大小" aria-label="Permalink to &quot;头像大小&quot;">​</a></h2><p>图片的 <code>size</code> 也支持使用 <code>string</code> 类型来设置尺寸大小，例如：<code>xs</code> , <code>s</code> , <code>md</code> , <code>lg</code> 。</p>',
                2,
              )),
            n(o, null, {
              default: t(() => [
                n(
                  s(v),
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
                    vueCode: s(H),
                  },
                  { vue: t(() => [n(de)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            r[25] ||
              (r[25] = e(
                'h2',
                { id: '展示类型', tabindex: '-1' },
                [
                  l('展示类型 '),
                  e(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#展示类型',
                      'aria-label': 'Permalink to "展示类型"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            r[26] ||
              (r[26] = e('p', null, ' 支持使用图片或者文字作为 Avatar。 ', -1)),
            n(o, null, {
              default: t(() => [
                n(
                  s(v),
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
                    vueCode: s(M),
                  },
                  { vue: t(() => [n(J)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            r[27] ||
              (r[27] = e(
                'p',
                null,
                [
                  l('图片加载失败时，可以使用 '),
                  e('code', null, 'error'),
                  l(' 属性触发函数，默认触发图片填充效果。'),
                ],
                -1,
              )),
            n(o, null, {
              default: t(() => [
                n(
                  s(v),
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
                    vueCode: s(R),
                  },
                  { vue: t(() => [n(Z)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            r[28] ||
              (r[28] = e(
                'p',
                null,
                [
                  l('当使用图片作为用户头像时，使用 '),
                  e('code', null, 'object-fit'),
                  l(' 属性设置该图片如何在容器中展示。'),
                ],
                -1,
              )),
            n(o, null, {
              default: t(() => [
                n(
                  s(v),
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
                  { vue: t(() => [n(B)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            r[29] ||
              (r[29] = e(
                'h2',
                { id: 'avatar-api', tabindex: '-1' },
                [
                  l('Avatar API '),
                  e(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#avatar-api',
                      'aria-label': 'Permalink to "Avatar API"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            r[30] ||
              (r[30] = e(
                'h3',
                { id: 'avatar-属性', tabindex: '-1' },
                [
                  l('Avatar 属性 '),
                  e(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#avatar-属性',
                      'aria-label': 'Permalink to "Avatar 属性"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            e('table', ye, [
              r[15] ||
                (r[15] = e(
                  'thead',
                  null,
                  [
                    e('tr', null, [
                      e('th', null, '属性'),
                      e('th', null, '说明'),
                      e('th', null, '类型'),
                      e('th', null, '默认值'),
                    ]),
                  ],
                  -1,
                )),
              e('tbody', null, [
                r[14] ||
                  (r[14] = e(
                    'tr',
                    null,
                    [
                      e('td', null, 'src'),
                      e('td', null, '图片资源的路径'),
                      e('td', null, [e('code', null, 'string')]),
                      e('td', null, '-'),
                    ],
                    -1,
                  )),
                e('tr', null, [
                  r[3] || (r[3] = e('td', null, 'size', -1)),
                  r[4] || (r[4] = e('td', null, '尺寸大小', -1)),
                  e('td', null, [
                    r[0] || (r[0] = e('code', null, 'number', -1)),
                    r[1] || (r[1] = l(' / ')),
                    r[2] || (r[2] = e('code', null, 'enum', -1)),
                    n(u, { value: 'xs,sm,lg' }),
                  ]),
                  r[5] || (r[5] = e('td', null, '50', -1)),
                ]),
                e('tr', null, [
                  r[7] || (r[7] = e('td', null, 'shape', -1)),
                  r[8] || (r[8] = e('td', null, '头像的形状', -1)),
                  e('td', null, [
                    r[6] || (r[6] = e('code', null, 'enum', -1)),
                    n(u, { value: 'square,circle' }),
                  ]),
                  r[9] || (r[9] = e('td', null, 'circle', -1)),
                ]),
                e('tr', null, [
                  r[11] || (r[11] = e('td', null, 'fit', -1)),
                  r[12] || (r[12] = e('td', null, '头像的填充效果', -1)),
                  e('td', null, [
                    r[10] || (r[10] = e('code', null, 'enum', -1)),
                    n(u, { value: 'fill,contain,cover' }),
                  ]),
                  r[13] || (r[13] = e('td', null, 'cover', -1)),
                ]),
              ]),
            ]),
            r[31] ||
              (r[31] = e(
                'h3',
                { id: 'avatar-事件', tabindex: '-1' },
                [
                  l('Avatar 事件 '),
                  e(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#avatar-事件',
                      'aria-label': 'Permalink to "Avatar 事件"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            e('table', Ve, [
              r[19] ||
                (r[19] = e(
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
                  r[17] || (r[17] = e('td', null, 'error', -1)),
                  r[18] || (r[18] = e('td', null, '图片加载失败时触发', -1)),
                  e('td', null, [
                    r[16] || (r[16] = e('code', null, 'Function', -1)),
                    n(u, { value: '(evt: MouseEvent) => void' }),
                  ]),
                ]),
              ]),
            ]),
            r[32] ||
              (r[32] = e(
                'h3',
                { id: 'avatar-插槽', tabindex: '-1' },
                [
                  l('Avatar 插槽 '),
                  e(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#avatar-插槽',
                      'aria-label': 'Permalink to "Avatar 插槽"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            r[33] ||
              (r[33] = e(
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
export { Ge as __pageData, Be as default }
