import { i as a, Z as s, a as w } from './chunks/theme.BKnsVfWH.js'
import {
  d as f,
  o as i,
  f as v,
  l as e,
  q as n,
  L as t,
  _ as B,
  m as V,
  u as o,
  ab as z,
  j as x,
  a as y,
  F as D,
  ac as A,
  a8 as R,
  b as r,
  U as G,
} from './chunks/framework.D5-Ddbi5.js'
import { R as c } from './chunks/index.CeAE3Zgl.js'
const X = `<script setup lang="ts">\r
import { VerButton, VerRow } from '@versakit/ui'\r
<\/script>\r
\r
<template>\r
  <ver-row>\r
    <VerButton color="pink" circle icon="search" />\r
    <VerButton color="green" circle icon="check" />\r
    <VerButton circle icon="trash" />\r
  </ver-row>\r
</template>\r
<style scoped>\r
.ver-btn {\r
  margin: 0.5rem;\r
}\r
</style>\r
`,
  j = f({
    __name: 'icon',
    setup(p) {
      return (d, l) => (
        i(),
        v(t(s), null, {
          default: e(() => [
            n(t(a), { color: 'pink', circle: '', icon: 'search' }),
            n(t(a), { color: 'green', circle: '', icon: 'check' }),
            n(t(a), { circle: '', icon: 'trash' }),
          ]),
          _: 1,
        })
      )
    },
  }),
  L = B(j, [['__scopeId', 'data-v-89473ca0']]),
  C = `<script setup lang="ts">\r
import { VerButton, VerRow } from '@versakit/ui'\r
<\/script>\r
\r
<template>\r
  <ver-row class="mb-4">\r
    <ver-button v-ripple color="blue-1">按 钮</ver-button>\r
    <ver-button v-ripple color="blue-2">按 钮</ver-button>\r
    <ver-button v-ripple color="blue-3">按 钮</ver-button>\r
    <ver-button v-ripple color="blue-4">按 钮</ver-button>\r
    <ver-button v-ripple color="blue-5">按 钮</ver-button>\r
  </ver-row>\r
</template>\r
\r
<style scoped lang="scss">\r
.mb-4 {\r
  display: flex;\r
  justify-content: space-between;\r
  margin-bottom: 1rem;\r
}\r
\r
.ver-btn + .ver-btn {\r
  margin: 0px 6px;\r
}\r
</style>\r
`,
  k = f({
    __name: 'ripple',
    setup(p) {
      return (d, l) => {
        const u = z('ripple')
        return (
          i(),
          v(
            t(s),
            { class: 'mb-4' },
            {
              default: e(() => [
                V(
                  (i(),
                  v(
                    t(a),
                    { color: 'blue-1' },
                    { default: e(() => l[0] || (l[0] = [o('按 钮')])), _: 1 },
                  )),
                  [[u]],
                ),
                V(
                  (i(),
                  v(
                    t(a),
                    { color: 'blue-2' },
                    { default: e(() => l[1] || (l[1] = [o('按 钮')])), _: 1 },
                  )),
                  [[u]],
                ),
                V(
                  (i(),
                  v(
                    t(a),
                    { color: 'blue-3' },
                    { default: e(() => l[2] || (l[2] = [o('按 钮')])), _: 1 },
                  )),
                  [[u]],
                ),
                V(
                  (i(),
                  v(
                    t(a),
                    { color: 'blue-4' },
                    { default: e(() => l[3] || (l[3] = [o('按 钮')])), _: 1 },
                  )),
                  [[u]],
                ),
                V(
                  (i(),
                  v(
                    t(a),
                    { color: 'blue-5' },
                    { default: e(() => l[4] || (l[4] = [o('按 钮')])), _: 1 },
                  )),
                  [[u]],
                ),
              ]),
              _: 1,
            },
          )
        )
      }
    },
  }),
  M = B(k, [['__scopeId', 'data-v-33ea882f']]),
  Z = `<script setup lang="ts">\r
import { ref } from 'vue'\r
import { VerButton, VerSegmented } from '@versakit/ui'\r
\r
const selectedValue = ref('md')\r
const options = [\r
  { label: 'XS', value: 'xs' },\r
  { label: 'SM', value: 'sm' },\r
  { label: 'MD', value: 'md' },\r
  { label: 'LG', value: 'lg' },\r
]\r
<\/script>\r
\r
<template>\r
  <div>\r
    <VerSegmented v-model="selectedValue" :options="options"></VerSegmented>\r
\r
    <ver-button class="mx-2" color="blue-5" :size="selectedValue">\r
      主要按钮\r
    </ver-button>\r
  </div>\r
</template>\r
\r
<style scoped>\r
.ver-btn {\r
  margin: 10px 0px;\r
}\r
</style>\r
`,
  S = f({
    __name: 'size',
    setup(p) {
      const d = x('md'),
        l = [
          { label: 'XS', value: 'xs' },
          { label: 'SM', value: 'sm' },
          { label: 'MD', value: 'md' },
          { label: 'LG', value: 'lg' },
        ]
      return (u, b) => (
        i(),
        y('div', null, [
          n(
            t(w),
            {
              modelValue: d.value,
              'onUpdate:modelValue': b[0] || (b[0] = (F) => (d.value = F)),
              options: l,
            },
            null,
            8,
            ['modelValue'],
          ),
          n(
            t(a),
            { class: 'mx-2', color: 'blue-5', size: d.value },
            { default: e(() => b[1] || (b[1] = [o(' 主要按钮 ')])), _: 1 },
            8,
            ['size'],
          ),
        ])
      )
    },
  }),
  T = B(S, [['__scopeId', 'data-v-98ba07b5']]),
  U = `<script setup lang="ts">\r
import { VerButton, VerRow } from '@versakit/ui'\r
<\/script>\r
\r
<template>\r
  <ver-row class="mb-4">\r
    <ver-button disabled color="red-5">按 钮</ver-button>\r
    <ver-button disabled variant="plain round" color="red-1">按 钮</ver-button>\r
  </ver-row>\r
\r
  <ver-row class="mb-4">\r
    <ver-button disabled color="blue-5">按 钮</ver-button>\r
    <ver-button disabled variant="plain round" color="blue-1">按 钮</ver-button>\r
  </ver-row>\r
\r
  <ver-row class="mb-4">\r
    <ver-button disabled color="green-5">按 钮</ver-button>\r
    <ver-button disabled variant="plain round" color="green-1">\r
      按 钮\r
    </ver-button>\r
  </ver-row>\r
\r
  <ver-row class="mb-4">\r
    <ver-button disabled color="zinc-5">按 钮</ver-button>\r
    <ver-button disabled variant="plain round" color="zinc-1">按 钮</ver-button>\r
  </ver-row>\r
\r
  <ver-row class="mb-4">\r
    <ver-button disabled color="violet-5">按 钮</ver-button>\r
    <ver-button disabled variant="plain round" color="violet-1">\r
      按 钮\r
    </ver-button>\r
  </ver-row>\r
</template>\r
\r
<style scoped>\r
.mb-4 {\r
  display: flex;\r
  align-items: center;\r
  margin-bottom: 1rem;\r
}\r
\r
.ver-btn + .ver-btn {\r
  margin: 0px 10px;\r
}\r
</style>\r
`,
  N = f({
    __name: 'disabled',
    setup(p) {
      return (d, l) => (
        i(),
        y(
          D,
          null,
          [
            n(
              t(s),
              { class: 'mb-4' },
              {
                default: e(() => [
                  n(
                    t(a),
                    { disabled: '', color: 'red-5' },
                    { default: e(() => l[0] || (l[0] = [o('按 钮')])), _: 1 },
                  ),
                  n(
                    t(a),
                    { disabled: '', variant: 'plain round', color: 'red-1' },
                    { default: e(() => l[1] || (l[1] = [o('按 钮')])), _: 1 },
                  ),
                ]),
                _: 1,
              },
            ),
            n(
              t(s),
              { class: 'mb-4' },
              {
                default: e(() => [
                  n(
                    t(a),
                    { disabled: '', color: 'blue-5' },
                    { default: e(() => l[2] || (l[2] = [o('按 钮')])), _: 1 },
                  ),
                  n(
                    t(a),
                    { disabled: '', variant: 'plain round', color: 'blue-1' },
                    { default: e(() => l[3] || (l[3] = [o('按 钮')])), _: 1 },
                  ),
                ]),
                _: 1,
              },
            ),
            n(
              t(s),
              { class: 'mb-4' },
              {
                default: e(() => [
                  n(
                    t(a),
                    { disabled: '', color: 'green-5' },
                    { default: e(() => l[4] || (l[4] = [o('按 钮')])), _: 1 },
                  ),
                  n(
                    t(a),
                    { disabled: '', variant: 'plain round', color: 'green-1' },
                    { default: e(() => l[5] || (l[5] = [o(' 按 钮 ')])), _: 1 },
                  ),
                ]),
                _: 1,
              },
            ),
            n(
              t(s),
              { class: 'mb-4' },
              {
                default: e(() => [
                  n(
                    t(a),
                    { disabled: '', color: 'zinc-5' },
                    { default: e(() => l[6] || (l[6] = [o('按 钮')])), _: 1 },
                  ),
                  n(
                    t(a),
                    { disabled: '', variant: 'plain round', color: 'zinc-1' },
                    { default: e(() => l[7] || (l[7] = [o('按 钮')])), _: 1 },
                  ),
                ]),
                _: 1,
              },
            ),
            n(
              t(s),
              { class: 'mb-4' },
              {
                default: e(() => [
                  n(
                    t(a),
                    { disabled: '', color: 'violet-5' },
                    { default: e(() => l[8] || (l[8] = [o('按 钮')])), _: 1 },
                  ),
                  n(
                    t(a),
                    { disabled: '', variant: 'plain round', color: 'violet-1' },
                    { default: e(() => l[9] || (l[9] = [o(' 按 钮 ')])), _: 1 },
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
  W = B(N, [['__scopeId', 'data-v-e861c951']]),
  J = `<template>\r
  <div>\r
    <VerSegmented v-model="typeValue" :options="typeOptions"></VerSegmented>\r
    <VerSegmented\r
      v-model="variantValue"\r
      :options="variantOptions"\r
    ></VerSegmented>\r
    <ver-button :color="typeValue" :variant="variantValue">按 钮</ver-button>\r
  </div>\r
</template>\r
<script setup lang="ts">\r
import { VerButton, VerSegmented } from '@versakit/ui'\r
import { ref } from 'vue'\r
let typeValue = ref('primary')\r
let variantValue = ref('plain')\r
let typeOptions = [\r
  { label: 'blue', value: 'blue-5' },\r
  { label: 'red', value: 'red-5' },\r
  { label: 'violet', value: 'violet-5' },\r
  { label: 'orange', value: 'orange-5' },\r
  { label: 'zinc', value: 'zinc-5' },\r
]\r
let variantOptions = [\r
  { label: 'ghost', value: 'ghost' },\r
  { label: 'round', value: 'round' },\r
  { label: 'plain', value: 'plain' },\r
  { label: 'text', value: 'text' },\r
  { label: 'shade', value: 'shade' },\r
  { label: 'full', value: 'full' },\r
]\r
<\/script>\r
<style scoped></style>\r
`,
  q = f({
    __name: 'style',
    setup(p) {
      let d = x('primary'),
        l = x('plain'),
        u = [
          { label: 'blue', value: 'blue-5' },
          { label: 'red', value: 'red-5' },
          { label: 'violet', value: 'violet-5' },
          { label: 'orange', value: 'orange-5' },
          { label: 'zinc', value: 'zinc-5' },
        ],
        b = [
          { label: 'ghost', value: 'ghost' },
          { label: 'round', value: 'round' },
          { label: 'plain', value: 'plain' },
          { label: 'text', value: 'text' },
          { label: 'shade', value: 'shade' },
          { label: 'full', value: 'full' },
        ]
      return (F, m) => (
        i(),
        y('div', null, [
          n(
            t(w),
            {
              modelValue: t(d),
              'onUpdate:modelValue':
                m[0] || (m[0] = (g) => (A(d) ? (d.value = g) : (d = g))),
              options: t(u),
            },
            null,
            8,
            ['modelValue', 'options'],
          ),
          n(
            t(w),
            {
              modelValue: t(l),
              'onUpdate:modelValue':
                m[1] || (m[1] = (g) => (A(l) ? (l.value = g) : (l = g))),
              options: t(b),
            },
            null,
            8,
            ['modelValue', 'options'],
          ),
          n(
            t(a),
            { color: t(d), variant: t(l) },
            { default: e(() => m[2] || (m[2] = [o('按 钮')])), _: 1 },
            8,
            ['color', 'variant'],
          ),
        ])
      )
    },
  }),
  H = `<script setup lang="ts">\r
import { VerButton, VerRow } from '@versakit/ui'\r
<\/script>\r
\r
<template>\r
  <ver-row class="mb-4">\r
    <ver-button color="red-5">按 钮</ver-button>\r
    <ver-button variant="round" color="red-5">按 钮</ver-button>\r
    <ver-button variant="plain" color="red-1">按 钮</ver-button>\r
    <ver-button variant="plain round" color="red-1">按 钮</ver-button>\r
    <ver-button variant="ghost" color="red-5">按 钮</ver-button>\r
    <ver-button variant="ghost round" color="red-5">按 钮</ver-button>\r
  </ver-row>\r
\r
  <ver-row class="mb-4">\r
    <ver-button color="blue-5">按 钮</ver-button>\r
    <ver-button variant="round" color="blue-5">按 钮</ver-button>\r
    <ver-button variant="plain " color="blue-1">按 钮</ver-button>\r
    <ver-button variant="plain round" color="blue-1">按 钮</ver-button>\r
    <ver-button variant="ghost" color="blue-5">按 钮</ver-button>\r
    <ver-button variant="ghost round" color="blue-5">按 钮</ver-button>\r
  </ver-row>\r
\r
  <ver-row class="mb-4">\r
    <ver-button color="green-5">按 钮</ver-button>\r
    <ver-button variant="round" color="green-5">按 钮</ver-button>\r
    <ver-button variant="plain" color="green-1">按 钮</ver-button>\r
    <ver-button variant="plain round" color="green-1">按 钮</ver-button>\r
    <ver-button variant="ghost" color="green-5">按 钮</ver-button>\r
    <ver-button variant="ghost round" color="green-5">按 钮</ver-button>\r
  </ver-row>\r
\r
  <ver-row class="mb-4">\r
    <ver-button color="zinc-5">按 钮</ver-button>\r
    <ver-button variant="round" color="zinc-5">按 钮</ver-button>\r
    <ver-button variant="plain" color="zinc-1">按 钮</ver-button>\r
    <ver-button variant="plain round" color="zinc-1">按 钮</ver-button>\r
    <ver-button variant="ghost" color="zinc-5">按 钮</ver-button>\r
    <ver-button variant="ghost round" color="zinc-5">按 钮</ver-button>\r
  </ver-row>\r
\r
  <ver-row class="mb-4">\r
    <ver-button color="orange-5">按 钮</ver-button>\r
    <ver-button variant="round" color="orange-5">按 钮</ver-button>\r
    <ver-button variant="plain" color="orange-1">按 钮</ver-button>\r
    <ver-button variant="plain round" color="orange-1">按 钮</ver-button>\r
    <ver-button variant="ghost" color="orange-5">按 钮</ver-button>\r
    <ver-button variant="ghost round" color="orange-5">按 钮</ver-button>\r
  </ver-row>\r
</template>\r
\r
<style scoped lang="scss">\r
.mb-4 {\r
  display: flex;\r
  justify-content: space-between;\r
  margin-bottom: 1rem;\r
}\r
\r
.ver-btn + .ver-btn {\r
  margin: 0px 6px;\r
}\r
</style>\r
`,
  P = f({
    __name: 'base',
    setup(p) {
      return (d, l) => (
        i(),
        y(
          D,
          null,
          [
            n(
              t(s),
              { class: 'mb-4' },
              {
                default: e(() => [
                  n(
                    t(a),
                    { color: 'red-5' },
                    { default: e(() => l[0] || (l[0] = [o('按 钮')])), _: 1 },
                  ),
                  n(
                    t(a),
                    { variant: 'round', color: 'red-5' },
                    { default: e(() => l[1] || (l[1] = [o('按 钮')])), _: 1 },
                  ),
                  n(
                    t(a),
                    { variant: 'plain', color: 'red-1' },
                    { default: e(() => l[2] || (l[2] = [o('按 钮')])), _: 1 },
                  ),
                  n(
                    t(a),
                    { variant: 'plain round', color: 'red-1' },
                    { default: e(() => l[3] || (l[3] = [o('按 钮')])), _: 1 },
                  ),
                  n(
                    t(a),
                    { variant: 'ghost', color: 'red-5' },
                    { default: e(() => l[4] || (l[4] = [o('按 钮')])), _: 1 },
                  ),
                  n(
                    t(a),
                    { variant: 'ghost round', color: 'red-5' },
                    { default: e(() => l[5] || (l[5] = [o('按 钮')])), _: 1 },
                  ),
                ]),
                _: 1,
              },
            ),
            n(
              t(s),
              { class: 'mb-4' },
              {
                default: e(() => [
                  n(
                    t(a),
                    { color: 'blue-5' },
                    { default: e(() => l[6] || (l[6] = [o('按 钮')])), _: 1 },
                  ),
                  n(
                    t(a),
                    { variant: 'round', color: 'blue-5' },
                    { default: e(() => l[7] || (l[7] = [o('按 钮')])), _: 1 },
                  ),
                  n(
                    t(a),
                    { variant: 'plain ', color: 'blue-1' },
                    { default: e(() => l[8] || (l[8] = [o('按 钮')])), _: 1 },
                  ),
                  n(
                    t(a),
                    { variant: 'plain round', color: 'blue-1' },
                    { default: e(() => l[9] || (l[9] = [o('按 钮')])), _: 1 },
                  ),
                  n(
                    t(a),
                    { variant: 'ghost', color: 'blue-5' },
                    { default: e(() => l[10] || (l[10] = [o('按 钮')])), _: 1 },
                  ),
                  n(
                    t(a),
                    { variant: 'ghost round', color: 'blue-5' },
                    { default: e(() => l[11] || (l[11] = [o('按 钮')])), _: 1 },
                  ),
                ]),
                _: 1,
              },
            ),
            n(
              t(s),
              { class: 'mb-4' },
              {
                default: e(() => [
                  n(
                    t(a),
                    { color: 'green-5' },
                    { default: e(() => l[12] || (l[12] = [o('按 钮')])), _: 1 },
                  ),
                  n(
                    t(a),
                    { variant: 'round', color: 'green-5' },
                    { default: e(() => l[13] || (l[13] = [o('按 钮')])), _: 1 },
                  ),
                  n(
                    t(a),
                    { variant: 'plain', color: 'green-1' },
                    { default: e(() => l[14] || (l[14] = [o('按 钮')])), _: 1 },
                  ),
                  n(
                    t(a),
                    { variant: 'plain round', color: 'green-1' },
                    { default: e(() => l[15] || (l[15] = [o('按 钮')])), _: 1 },
                  ),
                  n(
                    t(a),
                    { variant: 'ghost', color: 'green-5' },
                    { default: e(() => l[16] || (l[16] = [o('按 钮')])), _: 1 },
                  ),
                  n(
                    t(a),
                    { variant: 'ghost round', color: 'green-5' },
                    { default: e(() => l[17] || (l[17] = [o('按 钮')])), _: 1 },
                  ),
                ]),
                _: 1,
              },
            ),
            n(
              t(s),
              { class: 'mb-4' },
              {
                default: e(() => [
                  n(
                    t(a),
                    { color: 'zinc-5' },
                    { default: e(() => l[18] || (l[18] = [o('按 钮')])), _: 1 },
                  ),
                  n(
                    t(a),
                    { variant: 'round', color: 'zinc-5' },
                    { default: e(() => l[19] || (l[19] = [o('按 钮')])), _: 1 },
                  ),
                  n(
                    t(a),
                    { variant: 'plain', color: 'zinc-1' },
                    { default: e(() => l[20] || (l[20] = [o('按 钮')])), _: 1 },
                  ),
                  n(
                    t(a),
                    { variant: 'plain round', color: 'zinc-1' },
                    { default: e(() => l[21] || (l[21] = [o('按 钮')])), _: 1 },
                  ),
                  n(
                    t(a),
                    { variant: 'ghost', color: 'zinc-5' },
                    { default: e(() => l[22] || (l[22] = [o('按 钮')])), _: 1 },
                  ),
                  n(
                    t(a),
                    { variant: 'ghost round', color: 'zinc-5' },
                    { default: e(() => l[23] || (l[23] = [o('按 钮')])), _: 1 },
                  ),
                ]),
                _: 1,
              },
            ),
            n(
              t(s),
              { class: 'mb-4' },
              {
                default: e(() => [
                  n(
                    t(a),
                    { color: 'orange-5' },
                    { default: e(() => l[24] || (l[24] = [o('按 钮')])), _: 1 },
                  ),
                  n(
                    t(a),
                    { variant: 'round', color: 'orange-5' },
                    { default: e(() => l[25] || (l[25] = [o('按 钮')])), _: 1 },
                  ),
                  n(
                    t(a),
                    { variant: 'plain', color: 'orange-1' },
                    { default: e(() => l[26] || (l[26] = [o('按 钮')])), _: 1 },
                  ),
                  n(
                    t(a),
                    { variant: 'plain round', color: 'orange-1' },
                    { default: e(() => l[27] || (l[27] = [o('按 钮')])), _: 1 },
                  ),
                  n(
                    t(a),
                    { variant: 'ghost', color: 'orange-5' },
                    { default: e(() => l[28] || (l[28] = [o('按 钮')])), _: 1 },
                  ),
                  n(
                    t(a),
                    { variant: 'ghost round', color: 'orange-5' },
                    { default: e(() => l[29] || (l[29] = [o('按 钮')])), _: 1 },
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
  Q = B(P, [['__scopeId', 'data-v-089486de']]),
  E = { tabindex: '0' },
  Y = JSON.parse(
    '{"title":"Button 按钮","description":"","frontmatter":{},"headers":[],"relativePath":"components/button/index.md","filePath":"components/button/index.md"}',
  ),
  O = { name: 'components/button/index.md' },
  _ = Object.assign(O, {
    setup(p) {
      return (d, l) => {
        const u = G('ClientOnly'),
          b = G('Tool')
        return (
          i(),
          y('div', null, [
            l[15] ||
              (l[15] = R(
                '<h1 id="button-按钮" tabindex="-1">Button 按钮 <a class="header-anchor" href="#button-按钮" aria-label="Permalink to &quot;Button 按钮&quot;">​</a></h1><p>在日常开发中比较常用的操作按钮。</p><h2 id="基础使用" tabindex="-1">基础使用 <a class="header-anchor" href="#基础使用" aria-label="Permalink to &quot;基础使用&quot;">​</a></h2><p>versakitUI 提供了一些基础样式来使用，我们可以通过 <code>type</code>、<code>plain</code>、<code>round</code> 来修改按钮的圆角，颜色和是否透明等属性。</p>',
                4,
              )),
            n(u, null, {
              default: e(() => [
                n(
                  t(c),
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
                    vueCode: t(H),
                  },
                  { vue: e(() => [n(Q)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            l[16] ||
              (l[16] = r(
                'h2',
                { id: '按钮风格', tabindex: '-1' },
                [
                  o('按钮风格 '),
                  r(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#按钮风格',
                      'aria-label': 'Permalink to "按钮风格"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            l[17] ||
              (l[17] = r(
                'p',
                null,
                [
                  o('使用 '),
                  r('code', null, 'style'),
                  o(' 和 '),
                  r('code', null, 'variant'),
                  o(' 属性来改变按钮的视觉风格。'),
                ],
                -1,
              )),
            n(u, null, {
              default: e(() => [
                n(
                  t(c),
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
                    vueCode: t(J),
                  },
                  { vue: e(() => [n(q)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            l[18] ||
              (l[18] = r(
                'h2',
                { id: '禁止状态', tabindex: '-1' },
                [
                  o('禁止状态 '),
                  r(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#禁止状态',
                      'aria-label': 'Permalink to "禁止状态"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            l[19] ||
              (l[19] = r(
                'p',
                null,
                [
                  o('您可以使用 '),
                  r('code', null, 'disabled'),
                  o(' 属性来定义按钮是否被禁用，该属性接受一个 '),
                  r('code', null, 'Boolean'),
                  o(' 类型的值。'),
                ],
                -1,
              )),
            n(u, null, {
              default: e(() => [
                n(
                  t(c),
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
                    vueCode: t(U),
                  },
                  { vue: e(() => [n(W)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            l[20] ||
              (l[20] = r(
                'h2',
                { id: '按钮大小', tabindex: '-1' },
                [
                  o('按钮大小 '),
                  r(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#按钮大小',
                      'aria-label': 'Permalink to "按钮大小"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            l[21] ||
              (l[21] = r(
                'p',
                null,
                [
                  o('我们可以通过调整 '),
                  r('code', null, 'size'),
                  o(' 属性来控制按钮大小。'),
                ],
                -1,
              )),
            n(u, null, {
              default: e(() => [
                n(
                  t(c),
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
                  { vue: e(() => [n(T)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            l[22] ||
              (l[22] = r(
                'h2',
                { id: '水波纹按钮', tabindex: '-1' },
                [
                  o('水波纹按钮 '),
                  r(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#水波纹按钮',
                      'aria-label': 'Permalink to "水波纹按钮"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            l[23] || (l[23] = r('p', null, '按钮可以结合水波纹一起使用。', -1)),
            n(u, null, {
              default: e(() => [
                n(
                  t(c),
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
                    vueCode: t(C),
                  },
                  { vue: e(() => [n(M)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            l[24] ||
              (l[24] = r(
                'h2',
                { id: '图标按钮', tabindex: '-1' },
                [
                  o('图标按钮 '),
                  r(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#图标按钮',
                      'aria-label': 'Permalink to "图标按钮"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            l[25] ||
              (l[25] = r(
                'p',
                null,
                [
                  o('使用 '),
                  r('code', null, 'icon'),
                  o(' 属性来设置按钮的图标样式，您可以在我们的 '),
                  r('code', null, 'Icon'),
                  o(' 组件中找到所需图标。'),
                ],
                -1,
              )),
            n(u, null, {
              default: e(() => [
                n(
                  t(c),
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
                    vueCode: t(X),
                  },
                  { vue: e(() => [n(L)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            l[26] ||
              (l[26] = r(
                'h2',
                { id: 'button-api', tabindex: '-1' },
                [
                  o('Button API '),
                  r(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#button-api',
                      'aria-label': 'Permalink to "Button API"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            l[27] ||
              (l[27] = r(
                'h3',
                { id: 'button-属性', tabindex: '-1' },
                [
                  o('Button 属性 '),
                  r(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#button-属性',
                      'aria-label': 'Permalink to "Button 属性"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            r('table', E, [
              l[14] ||
                (l[14] = r(
                  'thead',
                  null,
                  [
                    r('tr', null, [
                      r('th', null, '属性'),
                      r('th', null, '说明'),
                      r('th', null, '类型'),
                      r('th', null, '默认值'),
                    ]),
                  ],
                  -1,
                )),
              r('tbody', null, [
                r('tr', null, [
                  l[1] || (l[1] = r('td', null, [r('code', null, 'type')], -1)),
                  l[2] ||
                    (l[2] = r(
                      'td',
                      null,
                      [
                        o('按钮的类型，例如可以是 '),
                        r('code', null, 'primary'),
                        o('（主要按钮）、'),
                        r('code', null, 'success'),
                        o('（成功按钮）等不同分类来表示不同状态的样式风格'),
                      ],
                      -1,
                    )),
                  r('td', null, [
                    l[0] || (l[0] = r('code', null, 'enum', -1)),
                    n(b, { value: 'primary,info,warning,error' }),
                  ]),
                  l[3] || (l[3] = r('td', null, 'default', -1)),
                ]),
                l[4] ||
                  (l[4] = r(
                    'tr',
                    null,
                    [
                      r('td', null, [r('code', null, 'plain')]),
                      r(
                        'td',
                        null,
                        '用于指示按钮是否为朴素按钮样式，朴素按钮通常是背景透明、只有文字和边框等简单样式呈现',
                      ),
                      r('td', null, [r('code', null, 'boolean')]),
                      r('td', null, 'false'),
                    ],
                    -1,
                  )),
                l[5] ||
                  (l[5] = r(
                    'tr',
                    null,
                    [
                      r('td', null, [r('code', null, 'round')]),
                      r('td', null, '判断按钮是否呈现圆角的外观效果'),
                      r('td', null, [r('code', null, 'boolean')]),
                      r('td', null, 'false'),
                    ],
                    -1,
                  )),
                l[6] ||
                  (l[6] = r(
                    'tr',
                    null,
                    [
                      r('td', null, [r('code', null, 'disabled')]),
                      r(
                        'td',
                        null,
                        '确定按钮是否处于禁用状态，禁用状态下按钮不可点击，常通过变灰等视觉样式体现',
                      ),
                      r('td', null, [r('code', null, 'boolean')]),
                      r('td', null, 'false'),
                    ],
                    -1,
                  )),
                l[7] ||
                  (l[7] = r(
                    'tr',
                    null,
                    [
                      r('td', null, [r('code', null, 'ghost')]),
                      r('td', null, '是否为ghost'),
                      r('td', null, [r('code', null, 'boolean')]),
                      r('td', null, 'false'),
                    ],
                    -1,
                  )),
                l[8] ||
                  (l[8] = r(
                    'tr',
                    null,
                    [
                      r('td', null, [r('code', null, 'text')]),
                      r('td', null, '是否为文本按钮'),
                      r('td', null, [r('code', null, 'boolean')]),
                      r('td', null, 'false'),
                    ],
                    -1,
                  )),
                l[9] ||
                  (l[9] = r(
                    'tr',
                    null,
                    [
                      r('td', null, [r('code', null, 'circle')]),
                      r('td', null, '是否为圆角按钮'),
                      r('td', null, [r('code', null, 'boolean')]),
                      r('td', null, 'false'),
                    ],
                    -1,
                  )),
                l[10] ||
                  (l[10] = r(
                    'tr',
                    null,
                    [
                      r('td', null, [r('code', null, 'shade')]),
                      r('td', null, '是否是阴影按钮'),
                      r('td', null, [r('code', null, 'boolean')]),
                      r('td', null, 'false'),
                    ],
                    -1,
                  )),
                l[11] ||
                  (l[11] = r(
                    'tr',
                    null,
                    [
                      r('td', null, [r('code', null, 'color')]),
                      r('td', null, '自定义颜色按钮'),
                      r('td', null, [r('code', null, 'string')]),
                      r('td', null, '-'),
                    ],
                    -1,
                  )),
                l[12] ||
                  (l[12] = r(
                    'tr',
                    null,
                    [
                      r('td', null, [r('code', null, 'icon')]),
                      r('td', null, '自定义图标按钮'),
                      r('td', null, [r('code', null, 'string')]),
                      r('td', null, '-'),
                    ],
                    -1,
                  )),
                l[13] ||
                  (l[13] = r(
                    'tr',
                    null,
                    [
                      r('td', null, [r('code', null, 'size')]),
                      r('td', null, '自定义按钮大小'),
                      r('td', null, [r('code', null, 'string')]),
                      r('td', null, 'default'),
                    ],
                    -1,
                  )),
              ]),
            ]),
          ])
        )
      }
    },
  })
export { Y as __pageData, _ as default }
