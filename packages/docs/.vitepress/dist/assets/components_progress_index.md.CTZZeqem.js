import { n as l, i as f } from './chunks/theme.BKnsVfWH.js'
import {
  d as b,
  j as u,
  o as p,
  a as d,
  q as e,
  L as r,
  b as s,
  _ as y,
  l as c,
  u as i,
  U as _,
} from './chunks/framework.D5-Ddbi5.js'
import { R as v } from './chunks/index.CeAE3Zgl.js'
const g = `<template>\r
  <div>\r
    <VerProgress :animation="true" :percent />\r
\r
    <div>\r
      <VerProgress :animation="true" type="circle" :percent />\r
    </div>\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
import { ref } from 'vue'\r
import { VerProgress } from '@versakit/ui'\r
\r
const percent = ref(0)\r
\r
setInterval(() => {\r
  percent.value = percent.value >= 100 ? 0 : percent.value + 10\r
}, 1000)\r
<\/script>\r
`,
  B = b({
    __name: 'animation',
    setup(m) {
      const n = u(0)
      return (
        setInterval(() => {
          n.value = n.value >= 100 ? 0 : n.value + 10
        }, 1e3),
        (t, o) => (
          p(),
          d('div', null, [
            e(r(l), { animation: !0, percent: n.value }, null, 8, ['percent']),
            s('div', null, [
              e(
                r(l),
                { animation: !0, type: 'circle', percent: n.value },
                null,
                8,
                ['percent'],
              ),
            ]),
          ])
        )
      )
    },
  }),
  x = `<template>\r
  <div>\r
    <VerProgress type="circle" :percent />\r
    <VerProgress type="circle" :percent status="success" />\r
    <VerProgress type="circle" :percent status="error" />\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
import { ref } from 'vue'\r
import { VerProgress } from '@versakit/ui'\r
\r
const percent = ref(75)\r
<\/script>\r
\r
<style scoped>\r
.progress {\r
  margin: 20px;\r
}\r
</style>\r
`,
  h = b({
    __name: 'circle',
    setup(m) {
      const n = u(75)
      return (t, o) => (
        p(),
        d('div', null, [
          e(r(l), { type: 'circle', percent: n.value }, null, 8, ['percent']),
          e(
            r(l),
            { type: 'circle', percent: n.value, status: 'success' },
            null,
            8,
            ['percent'],
          ),
          e(
            r(l),
            { type: 'circle', percent: n.value, status: 'error' },
            null,
            8,
            ['percent'],
          ),
        ])
      )
    },
  }),
  X = y(h, [['__scopeId', 'data-v-6da9d0bd']]),
  A = `<template>\r
  <div>\r
    <VerProgress :percent />\r
    <VerProgress :percent status="success" />\r
    <VerProgress :percent status="error" />\r
\r
    <div\r
      style="\r
        display: flex;\r
        justify-content: center;\r
        align-items: center;\r
        flex-direction: column;\r
      "\r
    >\r
      <VerProgress :percent="value" />\r
      <div style="display: flex; justify-content: space-around">\r
        <VerButton @click="value++" type="success">+</VerButton>\r
        <VerButton @click="value--" type="error">-</VerButton>\r
      </div>\r
    </div>\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
import { ref } from 'vue'\r
import { VerProgress, VerButton } from '@versakit/ui'\r
\r
const percent = ref(75)\r
const value = ref(0)\r
<\/script>\r
\r
<style scoped>\r
.progress {\r
  margin: 20px;\r
}\r
</style>\r
`,
  F = {
    style: {
      display: 'flex',
      'justify-content': 'center',
      'align-items': 'center',
      'flex-direction': 'column',
    },
  },
  C = { style: { display: 'flex', 'justify-content': 'space-around' } },
  D = b({
    __name: 'base',
    setup(m) {
      const n = u(75),
        t = u(0)
      return (o, a) => (
        p(),
        d('div', null, [
          e(r(l), { percent: n.value }, null, 8, ['percent']),
          e(r(l), { percent: n.value, status: 'success' }, null, 8, [
            'percent',
          ]),
          e(r(l), { percent: n.value, status: 'error' }, null, 8, ['percent']),
          s('div', F, [
            e(r(l), { percent: t.value }, null, 8, ['percent']),
            s('div', C, [
              e(
                r(f),
                { onClick: a[0] || (a[0] = (V) => t.value++), type: 'success' },
                { default: c(() => a[2] || (a[2] = [i('+')])), _: 1 },
              ),
              e(
                r(f),
                { onClick: a[1] || (a[1] = (V) => t.value--), type: 'error' },
                { default: c(() => a[3] || (a[3] = [i('-')])), _: 1 },
              ),
            ]),
          ]),
        ])
      )
    },
  }),
  j = y(D, [['__scopeId', 'data-v-cf2d8b16']]),
  k = JSON.parse(
    '{"title":"Progress 进度条","description":"","frontmatter":{},"headers":[],"relativePath":"components/progress/index.md","filePath":"components/progress/index.md"}',
  ),
  P = { name: 'components/progress/index.md' },
  z = Object.assign(P, {
    setup(m) {
      return (n, t) => {
        const o = _('ClientOnly')
        return (
          p(),
          d('div', null, [
            t[0] ||
              (t[0] = s(
                'h1',
                { id: 'progress-进度条', tabindex: '-1' },
                [
                  i('Progress 进度条 '),
                  s(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#progress-进度条',
                      'aria-label': 'Permalink to "Progress 进度条"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            t[1] ||
              (t[1] = s(
                'p',
                null,
                '用于展示操作进度，告知用户当前状态和预期。',
                -1,
              )),
            t[2] ||
              (t[2] = s(
                'h2',
                { id: '基本使用', tabindex: '-1' },
                [
                  i('基本使用 '),
                  s(
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
            e(o, null, {
              default: c(() => [
                e(
                  r(v),
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
                    vueCode: r(A),
                  },
                  { vue: c(() => [e(j)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            t[3] ||
              (t[3] = s(
                'h2',
                { id: '环形进度条', tabindex: '-1' },
                [
                  i('环形进度条 '),
                  s(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#环形进度条',
                      'aria-label': 'Permalink to "环形进度条"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            e(o, null, {
              default: c(() => [
                e(
                  r(v),
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
                    vueCode: r(x),
                  },
                  { vue: c(() => [e(X)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            t[4] ||
              (t[4] = s(
                'h2',
                { id: '动画', tabindex: '-1' },
                [
                  i('动画 '),
                  s(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#动画',
                      'aria-label': 'Permalink to "动画"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            e(o, null, {
              default: c(() => [
                e(
                  r(v),
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
                    vueCode: r(g),
                  },
                  { vue: c(() => [e(B)]), _: 1 },
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
export { k as __pageData, z as default }
