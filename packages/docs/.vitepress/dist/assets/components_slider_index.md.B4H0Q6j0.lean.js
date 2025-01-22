import { e as d } from './chunks/theme.BKnsVfWH.js'
import {
  d as b,
  j as i,
  o as v,
  a as f,
  q as n,
  L as r,
  b as o,
  u as c,
  l as p,
  U as V,
} from './chunks/framework.D5-Ddbi5.js'
import { R as C } from './chunks/index.CeAE3Zgl.js'
const g = `<script setup lang="ts">\r
import { VerSlider } from '@versakit/ui'\r
import { ref } from 'vue'\r
\r
const value = ref(0)\r
const value2 = ref(20)\r
const value3 = ref(50)\r
\r
const handleChange = (val: number) => {\r
  console.log('Changed:', val)\r
}\r
<\/script>\r
\r
<template>\r
  <div>\r
    <VerSlider v-model="value" />\r
\r
    <VerSlider\r
      v-model="value2"\r
      :min="0"\r
      :max="200"\r
      :step="5"\r
      @change="handleChange"\r
    />\r
\r
    <VerSlider v-model="value3" disabled @change="handleChange" />\r
  </div>\r
</template>\r
`,
  x = b({
    __name: 'base',
    setup(h) {
      const s = i(0),
        e = i(20),
        t = i(50),
        u = (m) => {
          console.log('Changed:', m)
        }
      return (m, l) => (
        v(),
        f('div', null, [
          n(
            r(d),
            {
              modelValue: s.value,
              'onUpdate:modelValue': l[0] || (l[0] = (a) => (s.value = a)),
            },
            null,
            8,
            ['modelValue'],
          ),
          n(
            r(d),
            {
              modelValue: e.value,
              'onUpdate:modelValue': l[1] || (l[1] = (a) => (e.value = a)),
              min: 0,
              max: 200,
              step: 5,
              onChange: u,
            },
            null,
            8,
            ['modelValue'],
          ),
          n(
            r(d),
            {
              modelValue: t.value,
              'onUpdate:modelValue': l[2] || (l[2] = (a) => (t.value = a)),
              disabled: '',
              onChange: u,
            },
            null,
            8,
            ['modelValue'],
          ),
        ])
      )
    },
  }),
  A = JSON.parse(
    '{"title":"Slider 滑块","description":"","frontmatter":{},"headers":[],"relativePath":"components/slider/index.md","filePath":"components/slider/index.md"}',
  ),
  _ = { name: 'components/slider/index.md' },
  k = Object.assign(_, {
    setup(h) {
      return (s, e) => {
        const t = V('ClientOnly')
        return (
          v(),
          f('div', null, [
            e[0] ||
              (e[0] = o(
                'h1',
                { id: 'slider-滑块', tabindex: '-1' },
                [
                  c('Slider 滑块 '),
                  o(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#slider-滑块',
                      'aria-label': 'Permalink to "Slider 滑块"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            e[1] ||
              (e[1] = o(
                'h2',
                { id: '基本用法', tabindex: '-1' },
                [
                  c('基本用法 '),
                  o(
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
            n(t, null, {
              default: p(() => [
                n(
                  r(C),
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
                  { vue: p(() => [n(x)]), _: 1 },
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
export { A as __pageData, k as default }
