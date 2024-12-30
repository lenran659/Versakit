import { F as i, t as u } from './chunks/theme.C9e_0uVK.js'
import {
  d as y,
  a as c,
  b as m,
  x as t,
  p as l,
  z as s,
  u as o,
  _ as b,
  e as n,
  V,
} from './chunks/framework.Ch9zL8Hq.js'
import { R as g } from './chunks/index.DbkfPGQe.js'
const v = `<template>\r
  <div>\r
    <VerButton type="success" @click="success">success</VerButton>\r
    <VerButton type="warning" @click="warning">warning</VerButton>\r
    <VerButton type="info" @click="info">info</VerButton>\r
    <VerButton type="error" @click="error">error</VerButton>\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
import { VerButton, VerMessage } from '@versakit/ui'\r
\r
const success = () => {\r
  VerMessage({\r
    type: 'success',\r
    plain: true,\r
    content: '这是一条消息',\r
  })\r
}\r
const warning = () => {\r
  VerMessage({\r
    type: 'warning',\r
    plain: true,\r
    content: '这是一条消息',\r
  })\r
}\r
\r
const info = () => {\r
  VerMessage({\r
    type: 'info',\r
    plain: true,\r
    content: '这是一条消息',\r
  })\r
}\r
\r
const error = () => {\r
  VerMessage({\r
    type: 'error',\r
    plain: true,\r
    content: '这是一条消息',\r
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
  x = y({
    __name: 'plain',
    setup(f) {
      const d = () => {
          u({ type: 'success', plain: !0, content: '这是一条消息' })
        },
        e = () => {
          u({ type: 'warning', plain: !0, content: '这是一条消息' })
        },
        a = () => {
          u({ type: 'info', plain: !0, content: '这是一条消息' })
        },
        p = () => {
          u({ type: 'error', plain: !0, content: '这是一条消息' })
        }
      return (B, r) => (
        c(),
        m('div', null, [
          t(
            o(i),
            { type: 'success', onClick: d },
            { default: l(() => r[0] || (r[0] = [s('success')])), _: 1 },
          ),
          t(
            o(i),
            { type: 'warning', onClick: e },
            { default: l(() => r[1] || (r[1] = [s('warning')])), _: 1 },
          ),
          t(
            o(i),
            { type: 'info', onClick: a },
            { default: l(() => r[2] || (r[2] = [s('info')])), _: 1 },
          ),
          t(
            o(i),
            { type: 'error', onClick: p },
            { default: l(() => r[3] || (r[3] = [s('error')])), _: 1 },
          ),
        ])
      )
    },
  }),
  M = b(x, [['__scopeId', 'data-v-5737f663']]),
  k = `<template>\r
  <div>\r
    <VerButton type="success" @click="success">success</VerButton>\r
    <VerButton type="warning" @click="warning">warning</VerButton>\r
    <VerButton type="info" @click="info">info</VerButton>\r
    <VerButton type="error" @click="error">error</VerButton>\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
import { VerButton, VerMessage } from '@versakit/ui'\r
\r
const success = () => {\r
  VerMessage({\r
    type: 'success',\r
    content: '这是一条消息',\r
  })\r
}\r
const warning = () => {\r
  VerMessage({\r
    type: 'warning',\r
    content: '这是一条消息',\r
  })\r
}\r
\r
const info = () => {\r
  VerMessage({\r
    type: 'info',\r
    content: '这是一条消息',\r
  })\r
}\r
\r
const error = () => {\r
  VerMessage({\r
    type: 'error',\r
    content: '这是一条消息',\r
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
  w = y({
    __name: 'status',
    setup(f) {
      const d = () => {
          u({ type: 'success', content: '这是一条消息' })
        },
        e = () => {
          u({ type: 'warning', content: '这是一条消息' })
        },
        a = () => {
          u({ type: 'info', content: '这是一条消息' })
        },
        p = () => {
          u({ type: 'error', content: '这是一条消息' })
        }
      return (B, r) => (
        c(),
        m('div', null, [
          t(
            o(i),
            { type: 'success', onClick: d },
            { default: l(() => r[0] || (r[0] = [s('success')])), _: 1 },
          ),
          t(
            o(i),
            { type: 'warning', onClick: e },
            { default: l(() => r[1] || (r[1] = [s('warning')])), _: 1 },
          ),
          t(
            o(i),
            { type: 'info', onClick: a },
            { default: l(() => r[2] || (r[2] = [s('info')])), _: 1 },
          ),
          t(
            o(i),
            { type: 'error', onClick: p },
            { default: l(() => r[3] || (r[3] = [s('error')])), _: 1 },
          ),
        ])
      )
    },
  }),
  C = b(w, [['__scopeId', 'data-v-7b69b044']]),
  F = `<template>\r
  <div>\r
    <VerButton @click="openMessage">点击</VerButton>\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
import { VerButton, VerMessage } from '@versakit/ui'\r
\r
const openMessage = () => {\r
  VerMessage({\r
    type: 'info',\r
    content: '这是一条消息',\r
    duration: 2000,\r
  })\r
}\r
<\/script>\r
`,
  A = y({
    __name: 'base',
    setup(f) {
      const d = () => {
        u({ type: 'info', content: '这是一条消息', duration: 2e3 })
      }
      return (e, a) => (
        c(),
        m('div', null, [
          t(
            o(i),
            { onClick: d },
            { default: l(() => a[0] || (a[0] = [s('点击')])), _: 1 },
          ),
        ])
      )
    },
  }),
  D = { tabindex: '0' },
  G = { tabindex: '0' },
  j = JSON.parse(
    '{"title":"Message 消息提示","description":"","frontmatter":{},"headers":[],"relativePath":"components/message/index.md","filePath":"components/message/index.md"}',
  ),
  Z = { name: 'components/message/index.md' },
  P = Object.assign(Z, {
    setup(f) {
      return (d, e) => {
        const a = V('ClientOnly'),
          p = V('Tool')
        return (
          c(),
          m('div', null, [
            e[11] ||
              (e[11] = n(
                'h1',
                { id: 'message-消息提示', tabindex: '-1' },
                [
                  s('Message 消息提示 '),
                  n(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#message-消息提示',
                      'aria-label': 'Permalink to "Message 消息提示"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            e[12] ||
              (e[12] = n(
                'p',
                null,
                '常用于主动操作后的反馈提示。 与 Notification 的区别是后者更多用于系统级通知的被动提醒。',
                -1,
              )),
            e[13] ||
              (e[13] = n(
                'h2',
                { id: '基本用法', tabindex: '-1' },
                [
                  s('基本用法 '),
                  n(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#基本用法',
                      'aria-label': 'Permalink to "基本用法"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            e[14] || (e[14] = n('p', null, '从顶部出现，3 秒后自动消失。', -1)),
            t(a, null, {
              default: l(() => [
                t(
                  o(g),
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
                    vueCode: o(F),
                  },
                  { vue: l(() => [t(A)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            e[15] ||
              (e[15] = n(
                'h2',
                { id: '不同状态', tabindex: '-1' },
                [
                  s('不同状态 '),
                  n(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#不同状态',
                      'aria-label': 'Permalink to "不同状态"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            e[16] ||
              (e[16] = n(
                'p',
                null,
                '用来显示「成功、警告、消息、错误」类的操作反馈。',
                -1,
              )),
            t(a, null, {
              default: l(() => [
                t(
                  o(g),
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
                    vueCode: o(k),
                  },
                  { vue: l(() => [t(C)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            e[17] ||
              (e[17] = n(
                'h2',
                { id: '不同风格', tabindex: '-1' },
                [
                  s('不同风格 '),
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
            e[18] ||
              (e[18] = n(
                'p',
                null,
                '用来显示「成功、警告、消息、错误」类的操作反馈。',
                -1,
              )),
            t(a, null, {
              default: l(() => [
                t(
                  o(g),
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
                    vueCode: o(v),
                  },
                  { vue: l(() => [t(M)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            e[19] ||
              (e[19] = n(
                'h2',
                { id: 'message-api', tabindex: '-1' },
                [
                  s('Message API '),
                  n(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#message-api',
                      'aria-label': 'Permalink to "Message API"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            e[20] ||
              (e[20] = n(
                'h3',
                { id: 'message-属性', tabindex: '-1' },
                [
                  s('Message 属性 '),
                  n(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#message-属性',
                      'aria-label': 'Permalink to "Message 属性"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            n('table', D, [
              e[6] ||
                (e[6] = n(
                  'thead',
                  null,
                  [
                    n('tr', null, [
                      n('th', null, '属性'),
                      n('th', null, '说明'),
                      n('th', null, '类型'),
                      n('th', null, '默认值'),
                    ]),
                  ],
                  -1,
                )),
              n('tbody', null, [
                n('tr', null, [
                  e[1] || (e[1] = n('td', null, [n('code', null, 'type')], -1)),
                  e[2] || (e[2] = n('td', null, '绑定值', -1)),
                  n('td', null, [
                    e[0] || (e[0] = n('code', null, 'enum', -1)),
                    t(p, { value: 'success,warning,info,error,' }),
                  ]),
                  e[3] || (e[3] = n('td', null, [n('code', null, 'info')], -1)),
                ]),
                e[4] ||
                  (e[4] = n(
                    'tr',
                    null,
                    [
                      n('td', null, [n('code', null, 'content')]),
                      n('td', null, '消息的内容'),
                      n('td', null, [n('code', null, 'string')]),
                      n('td', null, '-'),
                    ],
                    -1,
                  )),
                e[5] ||
                  (e[5] = n(
                    'tr',
                    null,
                    [
                      n('td', null, [n('code', null, 'duration')]),
                      n('td', null, '消息的持续时间'),
                      n('td', null, [n('code', null, 'number')]),
                      n('td', null, [n('code', null, '3000')]),
                    ],
                    -1,
                  )),
              ]),
            ]),
            e[21] ||
              (e[21] = n(
                'h3',
                { id: 'message-方法', tabindex: '-1' },
                [
                  s('Message 方法 '),
                  n(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#message-方法',
                      'aria-label': 'Permalink to "Message 方法"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            n('table', G, [
              e[10] ||
                (e[10] = n(
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
                  e[8] ||
                    (e[8] = n('td', null, [n('code', null, 'destroy')], -1)),
                  e[9] || (e[9] = n('td', null, 'message 的销毁函数', -1)),
                  n('td', null, [
                    e[7] || (e[7] = n('code', null, 'function', -1)),
                    t(p, { value: '() => void' }),
                  ]),
                ]),
              ]),
            ]),
          ])
        )
      }
    },
  })
export { j as __pageData, P as default }
