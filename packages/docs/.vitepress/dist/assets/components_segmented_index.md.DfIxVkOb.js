import { a as d } from './chunks/theme.BKnsVfWH.js'
import {
  d as f,
  j as u,
  o as p,
  a as v,
  q as n,
  L as o,
  b as l,
  t as i,
  u as c,
  l as m,
  U as _,
} from './chunks/framework.D5-Ddbi5.js'
import { R as g } from './chunks/index.CeAE3Zgl.js'
const h = `<script setup lang="ts">\r
import { ref } from 'vue'\r
import { VerSegmented } from '@versakit/ui'\r
\r
const selectedValue = ref('苹果')\r
const options = [\r
  { label: '苹果', value: '苹果' },\r
  { label: '芒果', value: '芒果' },\r
  { label: '西瓜', value: '西瓜' },\r
]\r
\r
const selectedValue2 = ref('苹果1')\r
const options2 = [\r
  { label: '苹果1', value: '苹果1' },\r
  { label: '芒果1', value: '芒果1' },\r
  { label: '西瓜1', value: '西瓜1' },\r
]\r
<\/script>\r
\r
<template>\r
  <div>\r
    <VerSegmented v-model="selectedValue" :options="options"></VerSegmented>\r
\r
    <p class="selected-value">选择值: {{ selectedValue }}</p>\r
\r
    <VerSegmented v-model="selectedValue2" :options="options2"></VerSegmented>\r
\r
    <p class="selected-value">选择值: {{ selectedValue2 }}</p>\r
  </div>\r
</template>\r
`,
  x = { class: 'selected-value' },
  C = { class: 'selected-value' },
  S = f({
    __name: 'base',
    setup(b) {
      const a = u('苹果'),
        e = [
          { label: '苹果', value: '苹果' },
          { label: '芒果', value: '芒果' },
          { label: '西瓜', value: '西瓜' },
        ],
        t = u('苹果1'),
        V = [
          { label: '苹果1', value: '苹果1' },
          { label: '芒果1', value: '芒果1' },
          { label: '西瓜1', value: '西瓜1' },
        ]
      return (D, s) => (
        p(),
        v('div', null, [
          n(
            o(d),
            {
              modelValue: a.value,
              'onUpdate:modelValue': s[0] || (s[0] = (r) => (a.value = r)),
              options: e,
            },
            null,
            8,
            ['modelValue'],
          ),
          l('p', x, '选择值: ' + i(a.value), 1),
          n(
            o(d),
            {
              modelValue: t.value,
              'onUpdate:modelValue': s[1] || (s[1] = (r) => (t.value = r)),
              options: V,
            },
            null,
            8,
            ['modelValue'],
          ),
          l('p', C, '选择值: ' + i(t.value), 1),
        ])
      )
    },
  }),
  N = JSON.parse(
    '{"title":"Segmented 分段控制器","description":"","frontmatter":{},"headers":[],"relativePath":"components/segmented/index.md","filePath":"components/segmented/index.md"}',
  ),
  B = { name: 'components/segmented/index.md' },
  j = Object.assign(B, {
    setup(b) {
      return (a, e) => {
        const t = _('ClientOnly')
        return (
          p(),
          v('div', null, [
            e[0] ||
              (e[0] = l(
                'h1',
                { id: 'segmented-分段控制器', tabindex: '-1' },
                [
                  c('Segmented 分段控制器 '),
                  l(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#segmented-分段控制器',
                      'aria-label': 'Permalink to "Segmented 分段控制器"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            e[1] ||
              (e[1] = l(
                'h2',
                { id: '基本使用', tabindex: '-1' },
                [
                  c('基本使用 '),
                  l(
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
            n(t, null, {
              default: m(() => [
                n(
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
                    vueCode: o(h),
                  },
                  { vue: m(() => [n(S)]), _: 1 },
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
export { N as __pageData, j as default }
