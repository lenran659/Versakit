import { F as a, g as s } from './chunks/theme.C9e_0uVK.js'
import {
  d as V,
  a as p,
  b as f,
  x as o,
  p as i,
  z as r,
  u as l,
  _ as y,
  a9 as v,
  e as n,
  V as g,
} from './chunks/framework.Ch9zL8Hq.js'
import { R as b } from './chunks/index.DbkfPGQe.js'
const h = `<template>\r
  <div>\r
    <VerButton @click="topleft">top-left</VerButton>\r
    <VerButton @click="topright">top-right</VerButton>\r
    <VerButton @click="bottomleft">bottom-left</VerButton>\r
    <VerButton @click="bottomright">bottom-right</VerButton>\r
  </div>\r
</template>\r
\r
<script lang="ts" setup>\r
import { VerButton, VerNotification } from '@versakit/ui'\r
\r
const topleft = () => {\r
  VerNotification({\r
    title: 'title',\r
    content: 'content',\r
    position: 'top-left',\r
  })\r
}\r
\r
const topright = () => {\r
  VerNotification({\r
    title: 'title',\r
    content: 'content',\r
  })\r
}\r
\r
const bottomleft = () => {\r
  VerNotification({\r
    title: 'title',\r
    content: 'content',\r
    position: 'bottom-left',\r
  })\r
}\r
\r
const bottomright = () => {\r
  VerNotification({\r
    title: 'title',\r
    content: 'content',\r
    position: 'bottom-right',\r
  })\r
}\r
<\/script>\r
\r
<style scoped>\r
.ver-btn {\r
  margin: 0px 10px;\r
}\r
</style>\r
`,
  N = V({
    __name: 'position',
    setup(m) {
      const d = () => {
          s({ title: 'title', content: 'content', position: 'top-left' })
        },
        t = () => {
          s({ title: 'title', content: 'content' })
        },
        c = () => {
          s({ title: 'title', content: 'content', position: 'bottom-left' })
        },
        u = () => {
          s({ title: 'title', content: 'content', position: 'bottom-right' })
        }
      return (B, e) => (
        p(),
        f('div', null, [
          o(
            l(a),
            { onClick: d },
            { default: i(() => e[0] || (e[0] = [r('top-left')])), _: 1 },
          ),
          o(
            l(a),
            { onClick: t },
            { default: i(() => e[1] || (e[1] = [r('top-right')])), _: 1 },
          ),
          o(
            l(a),
            { onClick: c },
            { default: i(() => e[2] || (e[2] = [r('bottom-left')])), _: 1 },
          ),
          o(
            l(a),
            { onClick: u },
            { default: i(() => e[3] || (e[3] = [r('bottom-right')])), _: 1 },
          ),
        ])
      )
    },
  }),
  G = y(N, [['__scopeId', 'data-v-2b1c00f5']]),
  k = `<template>\r
  <div>\r
    <VerButton type="info" @click="info">info</VerButton>\r
    <VerButton type="success" @click="success">success</VerButton>\r
    <VerButton type="warning" @click="warning">warning</VerButton>\r
    <VerButton type="error" @click="error">error</VerButton>\r
  </div>\r
</template>\r
\r
<script lang="ts" setup>\r
import { VerButton, VerNotification } from '@versakit/ui'\r
\r
const info = () => {\r
  VerNotification({\r
    title: 'title',\r
    type: 'info',\r
    plain: true,\r
    content: 'content',\r
  })\r
}\r
\r
const success = () => {\r
  VerNotification({\r
    title: 'title',\r
    type: 'success',\r
    plain: true,\r
    content: 'content',\r
  })\r
}\r
\r
const warning = () => {\r
  VerNotification({\r
    title: 'title',\r
    type: 'warning',\r
    plain: true,\r
    content: 'content',\r
  })\r
}\r
\r
const error = () => {\r
  VerNotification({\r
    title: 'title',\r
    type: 'error',\r
    plain: true,\r
    content: 'content',\r
  })\r
}\r
<\/script>\r
\r
<style scoped>\r
.ver-btn {\r
  margin: 0px 10px;\r
}\r
</style>\r
`,
  x = V({
    __name: 'plain',
    setup(m) {
      const d = () => {
          s({ title: 'title', type: 'info', plain: !0, content: 'content' })
        },
        t = () => {
          s({ title: 'title', type: 'success', plain: !0, content: 'content' })
        },
        c = () => {
          s({ title: 'title', type: 'warning', plain: !0, content: 'content' })
        },
        u = () => {
          s({ title: 'title', type: 'error', plain: !0, content: 'content' })
        }
      return (B, e) => (
        p(),
        f('div', null, [
          o(
            l(a),
            { type: 'info', onClick: d },
            { default: i(() => e[0] || (e[0] = [r('info')])), _: 1 },
          ),
          o(
            l(a),
            { type: 'success', onClick: t },
            { default: i(() => e[1] || (e[1] = [r('success')])), _: 1 },
          ),
          o(
            l(a),
            { type: 'warning', onClick: c },
            { default: i(() => e[2] || (e[2] = [r('warning')])), _: 1 },
          ),
          o(
            l(a),
            { type: 'error', onClick: u },
            { default: i(() => e[3] || (e[3] = [r('error')])), _: 1 },
          ),
        ])
      )
    },
  }),
  C = y(x, [['__scopeId', 'data-v-c6853a32']]),
  F = `<template>\r
  <div>\r
    <VerButton type="info" @click="info">info</VerButton>\r
    <VerButton type="success" @click="success">success</VerButton>\r
    <VerButton type="warning" @click="warning">warning</VerButton>\r
    <VerButton type="error" @click="error">error</VerButton>\r
  </div>\r
</template>\r
\r
<script lang="ts" setup>\r
import { VerButton, VerNotification } from '@versakit/ui'\r
\r
const info = () => {\r
  VerNotification({\r
    title: 'title',\r
    type: 'info',\r
    content: 'content',\r
  })\r
}\r
\r
const success = () => {\r
  VerNotification({\r
    title: 'title',\r
    type: 'success',\r
    content: 'content',\r
  })\r
}\r
\r
const warning = () => {\r
  VerNotification({\r
    title: 'title',\r
    type: 'warning',\r
    content: 'content',\r
  })\r
}\r
\r
const error = () => {\r
  VerNotification({\r
    title: 'title',\r
    type: 'error',\r
    content: 'content',\r
  })\r
}\r
<\/script>\r
\r
<style scoped>\r
.ver-btn {\r
  margin: 0px 10px;\r
}\r
</style>\r
`,
  w = V({
    __name: 'type',
    setup(m) {
      const d = () => {
          s({ title: 'title', type: 'info', content: 'content' })
        },
        t = () => {
          s({ title: 'title', type: 'success', content: 'content' })
        },
        c = () => {
          s({ title: 'title', type: 'warning', content: 'content' })
        },
        u = () => {
          s({ title: 'title', type: 'error', content: 'content' })
        }
      return (B, e) => (
        p(),
        f('div', null, [
          o(
            l(a),
            { type: 'info', onClick: d },
            { default: i(() => e[0] || (e[0] = [r('info')])), _: 1 },
          ),
          o(
            l(a),
            { type: 'success', onClick: t },
            { default: i(() => e[1] || (e[1] = [r('success')])), _: 1 },
          ),
          o(
            l(a),
            { type: 'warning', onClick: c },
            { default: i(() => e[2] || (e[2] = [r('warning')])), _: 1 },
          ),
          o(
            l(a),
            { type: 'error', onClick: u },
            { default: i(() => e[3] || (e[3] = [r('error')])), _: 1 },
          ),
        ])
      )
    },
  }),
  A = y(w, [['__scopeId', 'data-v-fbbb6373']]),
  _ = `<template>\r
  <div>\r
    <VerButton @click="openNotification">openNotification</VerButton>\r
  </div>\r
</template>\r
\r
<script lang="ts" setup>\r
import { VerButton, VerNotification } from '@versakit/ui'\r
\r
const openNotification = () => {\r
  VerNotification({\r
    title: 'title',\r
    content: 'content',\r
  })\r
}\r
<\/script>\r
`,
  D = V({
    __name: 'base',
    setup(m) {
      const d = () => {
        s({ title: 'title', content: 'content' })
      }
      return (t, c) => (
        p(),
        f('div', null, [
          o(
            l(a),
            { onClick: d },
            {
              default: i(() => c[0] || (c[0] = [r('openNotification')])),
              _: 1,
            },
          ),
        ])
      )
    },
  }),
  X = { tabindex: '0' },
  T = JSON.parse(
    '{"title":"Notification 通知","description":"","frontmatter":{},"headers":[],"relativePath":"components/notification/index.md","filePath":"components/notification/index.md"}',
  ),
  q = { name: 'components/notification/index.md' },
  W = Object.assign(q, {
    setup(m) {
      return (d, t) => {
        const c = g('ClientOnly'),
          u = g('Tool')
        return (
          p(),
          f('div', null, [
            t[4] ||
              (t[4] = v(
                '<h1 id="notification-通知" tabindex="-1">Notification 通知 <a class="header-anchor" href="#notification-通知" aria-label="Permalink to &quot;Notification 通知&quot;">​</a></h1><p>悬浮出现在页面角落，显示全局的通知提醒消息。</p><h2 id="基础用法" tabindex="-1">基础用法 <a class="header-anchor" href="#基础用法" aria-label="Permalink to &quot;基础用法&quot;">​</a></h2><p>你可以通过设置 <code>title</code> 和 <code>message</code> 属性来设置通知的标题和正文内容。 默认情况下，通知在 4500 毫秒后自动关闭，但你可以通过设置 <code>duration</code> 属性来自定义通知的展示时间。 如果你将它设置为 0，那么通知将不会自动关闭。 需要注意的是 <code>duration</code> 接收一个 Number，单位为毫秒。</p>',
                4,
              )),
            o(c, null, {
              default: i(() => [
                o(
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
                    vueCode: l(_),
                  },
                  { vue: i(() => [o(D)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            t[5] ||
              (t[5] = n(
                'h2',
                { id: '不同类型', tabindex: '-1' },
                [
                  r('不同类型 '),
                  n(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#不同类型',
                      'aria-label': 'Permalink to "不同类型"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            t[6] ||
              (t[6] = n(
                'p',
                null,
                [
                  r('我们提供了四种不同类型的提醒框：'),
                  n('code', null, 'success'),
                  r('、'),
                  n('code', null, 'warning'),
                  r('、'),
                  n('code', null, 'info'),
                  r(' 和 '),
                  n('code', null, 'error'),
                  r('。'),
                ],
                -1,
              )),
            o(c, null, {
              default: i(() => [
                o(
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
                    vueCode: l(F),
                  },
                  { vue: i(() => [o(A)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            t[7] ||
              (t[7] = n(
                'h2',
                { id: '不同风格', tabindex: '-1' },
                [
                  r('不同风格 '),
                  n(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#不同风格',
                      'aria-label': 'Permalink to "不同风格"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            t[8] ||
              (t[8] = n(
                'p',
                null,
                [
                  r('通知色彩更加鲜明，支持 '),
                  n('code', null, 'success'),
                  r('、'),
                  n('code', null, 'warning'),
                  r('、'),
                  n('code', null, 'info'),
                  r(' 和 '),
                  n('code', null, 'error'),
                  r(' 四种类型。'),
                ],
                -1,
              )),
            o(c, null, {
              default: i(() => [
                o(
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
                    vueCode: l(k),
                  },
                  { vue: i(() => [o(C)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            t[9] ||
              (t[9] = v(
                '<h2 id="自定义消息弹出的位置" tabindex="-1">自定义消息弹出的位置 <a class="header-anchor" href="#自定义消息弹出的位置" aria-label="Permalink to &quot;自定义消息弹出的位置&quot;">​</a></h2><p>可以让 Notification 从屏幕四角中的任意一角弹出。</p><p>使用 <code>position</code> 属性设置 Notification 的弹出位置， 支持四个选项：<code>top-right</code>、<code>top-left</code>、<code>bottom-right</code> 和 <code>bottom-left</code>， 默认为 <code>top-right</code>。</p>',
                3,
              )),
            o(c, null, {
              default: i(() => [
                o(
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
                    vueCode: l(h),
                  },
                  { vue: i(() => [o(G)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            t[10] ||
              (t[10] = v(
                '<h2 id="notification-api" tabindex="-1">Notification API <a class="header-anchor" href="#notification-api" aria-label="Permalink to &quot;Notification API&quot;">​</a></h2><h3 id="notification-属性" tabindex="-1">Notification 属性 <a class="header-anchor" href="#notification-属性" aria-label="Permalink to &quot;Notification 属性&quot;">​</a></h3><table tabindex="0"><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>title</code></td><td>标题</td><td><code>string</code></td><td>-</td></tr><tr><td><code>modelValue</code></td><td>绑定值</td><td><code>string</code></td><td>-</td></tr><tr><td><code>duration</code></td><td>notification 的持续时间</td><td><code>number</code></td><td><code>4500</code></td></tr></tbody></table><h3 id="notification-方法" tabindex="-1">Notification 方法 <a class="header-anchor" href="#notification-方法" aria-label="Permalink to &quot;Notification 方法&quot;">​</a></h3>',
                4,
              )),
            n('table', X, [
              t[3] ||
                (t[3] = n(
                  'thead',
                  null,
                  [
                    n('tr', null, [
                      n('th', null, '名称'),
                      n('th', null, '描述'),
                      n('th', null, '类型'),
                    ]),
                  ],
                  -1,
                )),
              n('tbody', null, [
                n('tr', null, [
                  t[1] ||
                    (t[1] = n('td', null, [n('code', null, 'destroy')], -1)),
                  t[2] || (t[2] = n('td', null, 'notification 的销毁函数', -1)),
                  n('td', null, [
                    t[0] || (t[0] = n('code', null, 'function', -1)),
                    o(u, { value: '() => void' }),
                  ]),
                ]),
              ]),
            ]),
          ])
        )
      }
    },
  })
export { T as __pageData, W as default }
