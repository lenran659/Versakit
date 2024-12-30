import { F as s, B as u } from './chunks/theme.C9e_0uVK.js'
import {
  d as y,
  a as d,
  j as b,
  p as l,
  x as e,
  u as n,
  q as f,
  z as o,
  ac as w,
  _ as B,
  b as v,
  F as g,
  e as r,
  a9 as A,
  V,
} from './chunks/framework.Ch9zL8Hq.js'
import { R as m } from './chunks/index.DbkfPGQe.js'
const F = `<script setup lang="ts">\r
import { VerButton, VerRow } from '@versakit/ui'\r
<\/script>\r
\r
<template>\r
  <ver-row>\r
    <VerButton style="margin: 0.5rem" circle icon="search" />\r
    <VerButton style="margin: 0.5rem" circle type="success" icon="check" />\r
    <VerButton style="margin: 0.5rem" circle type="error" icon="trash" />\r
  </ver-row>\r
</template>\r
`,
  D = y({
    __name: 'icon',
    setup(i) {
      return (p, t) => (
        d(),
        b(n(u), null, {
          default: l(() => [
            e(n(s), {
              style: { margin: '0.5rem' },
              circle: '',
              icon: 'search',
            }),
            e(n(s), {
              style: { margin: '0.5rem' },
              circle: '',
              type: 'success',
              icon: 'check',
            }),
            e(n(s), {
              style: { margin: '0.5rem' },
              circle: '',
              type: 'error',
              icon: 'trash',
            }),
          ]),
          _: 1,
        })
      )
    },
  }),
  G = `<script setup lang="ts">\r
import { VerButton, VerRow } from '@versakit/ui'\r
<\/script>\r
\r
<template>\r
  <ver-row class="mb-4">\r
    <ver-button v-ripple type="primary">按 钮</ver-button>\r
    <ver-button v-ripple type="success">按 钮</ver-button>\r
    <ver-button v-ripple type="info">按 钮</ver-button>\r
    <ver-button v-ripple type="warning">按 钮</ver-button>\r
    <ver-button v-ripple type="error">按 钮</ver-button>\r
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
  C = y({
    __name: 'ripple',
    setup(i) {
      return (p, t) => {
        const a = w('ripple')
        return (
          d(),
          b(
            n(u),
            { class: 'mb-4' },
            {
              default: l(() => [
                f(
                  (d(),
                  b(
                    n(s),
                    { type: 'primary' },
                    { default: l(() => t[0] || (t[0] = [o('按 钮')])), _: 1 },
                  )),
                  [[a]],
                ),
                f(
                  (d(),
                  b(
                    n(s),
                    { type: 'success' },
                    { default: l(() => t[1] || (t[1] = [o('按 钮')])), _: 1 },
                  )),
                  [[a]],
                ),
                f(
                  (d(),
                  b(
                    n(s),
                    { type: 'info' },
                    { default: l(() => t[2] || (t[2] = [o('按 钮')])), _: 1 },
                  )),
                  [[a]],
                ),
                f(
                  (d(),
                  b(
                    n(s),
                    { type: 'warning' },
                    { default: l(() => t[3] || (t[3] = [o('按 钮')])), _: 1 },
                  )),
                  [[a]],
                ),
                f(
                  (d(),
                  b(
                    n(s),
                    { type: 'error' },
                    { default: l(() => t[4] || (t[4] = [o('按 钮')])), _: 1 },
                  )),
                  [[a]],
                ),
              ]),
              _: 1,
            },
          )
        )
      }
    },
  }),
  X = B(C, [['__scopeId', 'data-v-715c3514']]),
  R = `<script setup lang="ts">\r
import { VerButton, VerRow } from '@versakit/ui'\r
<\/script>\r
\r
<template>\r
  <VerRow>\r
    <VerButton style="margin: 0.5rem" shade>none</VerButton>\r
    <VerButton style="margin: 0.5rem" shade type="primary">primary</VerButton>\r
    <VerButton style="margin: 0.5rem" shade type="success">success</VerButton>\r
    <VerButton style="margin: 0.5rem" shade type="info">info</VerButton>\r
    <VerButton style="margin: 0.5rem" shade type="warning">warning</VerButton>\r
    <VerButton style="margin: 0.5rem" shade type="error">danger</VerButton>\r
  </VerRow>\r
\r
  <VerRow>\r
    <VerButton style="margin: 0.5rem" disabled shade>none</VerButton>\r
    <VerButton style="margin: 0.5rem" disabled shade type="primary">\r
      primary\r
    </VerButton>\r
    <VerButton style="margin: 0.5rem" disabled shade type="success">\r
      success\r
    </VerButton>\r
    <VerButton style="margin: 0.5rem" disabled shade type="info">\r
      info\r
    </VerButton>\r
    <VerButton style="margin: 0.5rem" disabled shade type="warning">\r
      warning\r
    </VerButton>\r
    <VerButton style="margin: 0.5rem" disabled shade type="error">\r
      danger\r
    </VerButton>\r
  </VerRow>\r
</template>\r
\r
<style></style>\r
`,
  k = y({
    __name: 'shadow',
    setup(i) {
      return (p, t) => (
        d(),
        v(
          g,
          null,
          [
            e(n(u), null, {
              default: l(() => [
                e(
                  n(s),
                  { style: { margin: '0.5rem' }, shade: '' },
                  { default: l(() => t[0] || (t[0] = [o('none')])), _: 1 },
                ),
                e(
                  n(s),
                  { style: { margin: '0.5rem' }, shade: '', type: 'primary' },
                  { default: l(() => t[1] || (t[1] = [o('primary')])), _: 1 },
                ),
                e(
                  n(s),
                  { style: { margin: '0.5rem' }, shade: '', type: 'success' },
                  { default: l(() => t[2] || (t[2] = [o('success')])), _: 1 },
                ),
                e(
                  n(s),
                  { style: { margin: '0.5rem' }, shade: '', type: 'info' },
                  { default: l(() => t[3] || (t[3] = [o('info')])), _: 1 },
                ),
                e(
                  n(s),
                  { style: { margin: '0.5rem' }, shade: '', type: 'warning' },
                  { default: l(() => t[4] || (t[4] = [o('warning')])), _: 1 },
                ),
                e(
                  n(s),
                  { style: { margin: '0.5rem' }, shade: '', type: 'error' },
                  { default: l(() => t[5] || (t[5] = [o('danger')])), _: 1 },
                ),
              ]),
              _: 1,
            }),
            e(n(u), null, {
              default: l(() => [
                e(
                  n(s),
                  { style: { margin: '0.5rem' }, disabled: '', shade: '' },
                  { default: l(() => t[6] || (t[6] = [o('none')])), _: 1 },
                ),
                e(
                  n(s),
                  {
                    style: { margin: '0.5rem' },
                    disabled: '',
                    shade: '',
                    type: 'primary',
                  },
                  { default: l(() => t[7] || (t[7] = [o(' primary ')])), _: 1 },
                ),
                e(
                  n(s),
                  {
                    style: { margin: '0.5rem' },
                    disabled: '',
                    shade: '',
                    type: 'success',
                  },
                  { default: l(() => t[8] || (t[8] = [o(' success ')])), _: 1 },
                ),
                e(
                  n(s),
                  {
                    style: { margin: '0.5rem' },
                    disabled: '',
                    shade: '',
                    type: 'info',
                  },
                  { default: l(() => t[9] || (t[9] = [o(' info ')])), _: 1 },
                ),
                e(
                  n(s),
                  {
                    style: { margin: '0.5rem' },
                    disabled: '',
                    shade: '',
                    type: 'warning',
                  },
                  {
                    default: l(() => t[10] || (t[10] = [o(' warning ')])),
                    _: 1,
                  },
                ),
                e(
                  n(s),
                  {
                    style: { margin: '0.5rem' },
                    disabled: '',
                    shade: '',
                    type: 'error',
                  },
                  {
                    default: l(() => t[11] || (t[11] = [o(' danger ')])),
                    _: 1,
                  },
                ),
              ]),
              _: 1,
            }),
          ],
          64,
        )
      )
    },
  }),
  j = `<script setup lang="ts">\r
import { VerButton, VerRow } from '@versakit/ui'\r
<\/script>\r
\r
<template>\r
  <VerRow>\r
    <VerButton text>none</VerButton>\r
    <VerButton text type="primary">primary</VerButton>\r
    <VerButton text type="success">success</VerButton>\r
    <VerButton text type="info">info</VerButton>\r
    <VerButton text type="warning">warning</VerButton>\r
    <VerButton text type="error">error</VerButton>\r
  </VerRow>\r
  <VerRow>\r
    <VerButton disabled text>none</VerButton>\r
    <VerButton disabled text type="primary">primary</VerButton>\r
    <VerButton disabled text type="success">success</VerButton>\r
    <VerButton disabled text type="info">info</VerButton>\r
    <VerButton disabled text type="warning">warning</VerButton>\r
    <VerButton disabled text type="error">error</VerButton>\r
  </VerRow>\r
</template>\r
`,
  Z = y({
    __name: 'text',
    setup(i) {
      return (p, t) => (
        d(),
        v(
          g,
          null,
          [
            e(n(u), null, {
              default: l(() => [
                e(
                  n(s),
                  { text: '' },
                  { default: l(() => t[0] || (t[0] = [o('none')])), _: 1 },
                ),
                e(
                  n(s),
                  { text: '', type: 'primary' },
                  { default: l(() => t[1] || (t[1] = [o('primary')])), _: 1 },
                ),
                e(
                  n(s),
                  { text: '', type: 'success' },
                  { default: l(() => t[2] || (t[2] = [o('success')])), _: 1 },
                ),
                e(
                  n(s),
                  { text: '', type: 'info' },
                  { default: l(() => t[3] || (t[3] = [o('info')])), _: 1 },
                ),
                e(
                  n(s),
                  { text: '', type: 'warning' },
                  { default: l(() => t[4] || (t[4] = [o('warning')])), _: 1 },
                ),
                e(
                  n(s),
                  { text: '', type: 'error' },
                  { default: l(() => t[5] || (t[5] = [o('error')])), _: 1 },
                ),
              ]),
              _: 1,
            }),
            e(n(u), null, {
              default: l(() => [
                e(
                  n(s),
                  { disabled: '', text: '' },
                  { default: l(() => t[6] || (t[6] = [o('none')])), _: 1 },
                ),
                e(
                  n(s),
                  { disabled: '', text: '', type: 'primary' },
                  { default: l(() => t[7] || (t[7] = [o('primary')])), _: 1 },
                ),
                e(
                  n(s),
                  { disabled: '', text: '', type: 'success' },
                  { default: l(() => t[8] || (t[8] = [o('success')])), _: 1 },
                ),
                e(
                  n(s),
                  { disabled: '', text: '', type: 'info' },
                  { default: l(() => t[9] || (t[9] = [o('info')])), _: 1 },
                ),
                e(
                  n(s),
                  { disabled: '', text: '', type: 'warning' },
                  { default: l(() => t[10] || (t[10] = [o('warning')])), _: 1 },
                ),
                e(
                  n(s),
                  { disabled: '', text: '', type: 'error' },
                  { default: l(() => t[11] || (t[11] = [o('error')])), _: 1 },
                ),
              ]),
              _: 1,
            }),
          ],
          64,
        )
      )
    },
  }),
  z = `<script setup lang="ts">\r
import { VerButton } from '@versakit/ui'\r
<\/script>\r
\r
<template>\r
  <div>\r
    <span class="mx-2">\r
      <ver-button class="mx-2" type="primary" size="lg">主要按钮</ver-button>\r
    </span>\r
    <span class="mx-2">\r
      <ver-button class="mx-2" type="primary">主要按钮</ver-button>\r
    </span>\r
    <span class="mx-2">\r
      <ver-button class="mx-2" type="primary" size="sm">主要按钮</ver-button>\r
    </span>\r
    <span class="mx-2">\r
      <ver-button class="mx-2" type="primary" size="sm">主要按钮</ver-button>\r
    </span>\r
\r
    <span class="mx-2">\r
      <ver-button class="mx-2" type="primary" size="xs">主要按钮</ver-button>\r
    </span>\r
  </div>\r
</template>\r
\r
<style>\r
.mx-2 {\r
  margin: 0 6px;\r
}\r
</style>\r
`,
  L = { class: 'mx-2' },
  M = { class: 'mx-2' },
  T = { class: 'mx-2' },
  N = { class: 'mx-2' },
  c = { class: 'mx-2' },
  P = y({
    __name: 'size',
    setup(i) {
      return (p, t) => (
        d(),
        v('div', null, [
          r('span', L, [
            e(
              n(s),
              { class: 'mx-2', type: 'primary', size: 'lg' },
              { default: l(() => t[0] || (t[0] = [o('主要按钮')])), _: 1 },
            ),
          ]),
          r('span', M, [
            e(
              n(s),
              { class: 'mx-2', type: 'primary' },
              { default: l(() => t[1] || (t[1] = [o('主要按钮')])), _: 1 },
            ),
          ]),
          r('span', T, [
            e(
              n(s),
              { class: 'mx-2', type: 'primary', size: 'sm' },
              { default: l(() => t[2] || (t[2] = [o('主要按钮')])), _: 1 },
            ),
          ]),
          r('span', N, [
            e(
              n(s),
              { class: 'mx-2', type: 'primary', size: 'sm' },
              { default: l(() => t[3] || (t[3] = [o('主要按钮')])), _: 1 },
            ),
          ]),
          r('span', c, [
            e(
              n(s),
              { class: 'mx-2', type: 'primary', size: 'xs' },
              { default: l(() => t[4] || (t[4] = [o('主要按钮')])), _: 1 },
            ),
          ]),
        ])
      )
    },
  }),
  U = `<script setup lang="ts">\r
import { VerButton, VerRow } from '@versakit/ui'\r
<\/script>\r
\r
<template>\r
  <ver-row class="mb-4">\r
    <ver-button disabled type="primary">按 钮</ver-button>\r
    <ver-button disabled plain round type="primary">按 钮</ver-button>\r
  </ver-row>\r
\r
  <ver-row class="mb-4">\r
    <ver-button disabled type="success">按 钮</ver-button>\r
    <ver-button disabled plain round type="success">按 钮</ver-button>\r
  </ver-row>\r
\r
  <ver-row class="mb-4">\r
    <ver-button disabled type="info">按 钮</ver-button>\r
    <ver-button disabled plain round type="info">按 钮</ver-button>\r
  </ver-row>\r
\r
  <ver-row class="mb-4">\r
    <ver-button disabled type="warning">按 钮</ver-button>\r
    <ver-button disabled plain round type="warning">按 钮</ver-button>\r
  </ver-row>\r
\r
  <ver-row class="mb-4">\r
    <ver-button disabled type="error">按 钮</ver-button>\r
    <ver-button disabled plain round type="error">按 钮</ver-button>\r
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
  q = y({
    __name: 'disabled',
    setup(i) {
      return (p, t) => (
        d(),
        v(
          g,
          null,
          [
            e(
              n(u),
              { class: 'mb-4' },
              {
                default: l(() => [
                  e(
                    n(s),
                    { disabled: '', type: 'primary' },
                    { default: l(() => t[0] || (t[0] = [o('按 钮')])), _: 1 },
                  ),
                  e(
                    n(s),
                    { disabled: '', plain: '', round: '', type: 'primary' },
                    { default: l(() => t[1] || (t[1] = [o('按 钮')])), _: 1 },
                  ),
                ]),
                _: 1,
              },
            ),
            e(
              n(u),
              { class: 'mb-4' },
              {
                default: l(() => [
                  e(
                    n(s),
                    { disabled: '', type: 'success' },
                    { default: l(() => t[2] || (t[2] = [o('按 钮')])), _: 1 },
                  ),
                  e(
                    n(s),
                    { disabled: '', plain: '', round: '', type: 'success' },
                    { default: l(() => t[3] || (t[3] = [o('按 钮')])), _: 1 },
                  ),
                ]),
                _: 1,
              },
            ),
            e(
              n(u),
              { class: 'mb-4' },
              {
                default: l(() => [
                  e(
                    n(s),
                    { disabled: '', type: 'info' },
                    { default: l(() => t[4] || (t[4] = [o('按 钮')])), _: 1 },
                  ),
                  e(
                    n(s),
                    { disabled: '', plain: '', round: '', type: 'info' },
                    { default: l(() => t[5] || (t[5] = [o('按 钮')])), _: 1 },
                  ),
                ]),
                _: 1,
              },
            ),
            e(
              n(u),
              { class: 'mb-4' },
              {
                default: l(() => [
                  e(
                    n(s),
                    { disabled: '', type: 'warning' },
                    { default: l(() => t[6] || (t[6] = [o('按 钮')])), _: 1 },
                  ),
                  e(
                    n(s),
                    { disabled: '', plain: '', round: '', type: 'warning' },
                    { default: l(() => t[7] || (t[7] = [o('按 钮')])), _: 1 },
                  ),
                ]),
                _: 1,
              },
            ),
            e(
              n(u),
              { class: 'mb-4' },
              {
                default: l(() => [
                  e(
                    n(s),
                    { disabled: '', type: 'error' },
                    { default: l(() => t[8] || (t[8] = [o('按 钮')])), _: 1 },
                  ),
                  e(
                    n(s),
                    { disabled: '', plain: '', round: '', type: 'error' },
                    { default: l(() => t[9] || (t[9] = [o('按 钮')])), _: 1 },
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
  S = B(q, [['__scopeId', 'data-v-7146f0d0']]),
  J = `<script setup lang="ts">\r
import { VerButton, VerRow } from '@versakit/ui'\r
<\/script>\r
\r
<template>\r
  <ver-row class="mb-4">\r
    <ver-button type="primary">按 钮</ver-button>\r
    <ver-button round type="primary">按 钮</ver-button>\r
    <ver-button plain type="primary">按 钮</ver-button>\r
    <ver-button plain round type="primary">按 钮</ver-button>\r
    <ver-button ghost type="primary">按 钮</ver-button>\r
    <ver-button ghost round type="primary">按 钮</ver-button>\r
  </ver-row>\r
\r
  <ver-row class="mb-4">\r
    <ver-button type="success">按 钮</ver-button>\r
    <ver-button round type="success">按 钮</ver-button>\r
    <ver-button plain type="success">按 钮</ver-button>\r
    <ver-button plain round type="success">按 钮</ver-button>\r
    <ver-button ghost type="success">按 钮</ver-button>\r
    <ver-button ghost round type="success">按 钮</ver-button>\r
  </ver-row>\r
\r
  <ver-row class="mb-4">\r
    <ver-button type="info">按 钮</ver-button>\r
    <ver-button round type="info">按 钮</ver-button>\r
    <ver-button plain type="info">按 钮</ver-button>\r
    <ver-button plain round type="info">按 钮</ver-button>\r
    <ver-button ghost type="info">按 钮</ver-button>\r
    <ver-button ghost round type="info">按 钮</ver-button>\r
  </ver-row>\r
\r
  <ver-row class="mb-4">\r
    <ver-button type="warning">按 钮</ver-button>\r
    <ver-button round type="warning">按 钮</ver-button>\r
    <ver-button plain type="warning">按 钮</ver-button>\r
    <ver-button plain round type="warning">按 钮</ver-button>\r
    <ver-button ghost type="warning">按 钮</ver-button>\r
    <ver-button ghost round type="warning">按 钮</ver-button>\r
  </ver-row>\r
\r
  <ver-row class="mb-4">\r
    <ver-button type="error">按 钮</ver-button>\r
    <ver-button round type="error">按 钮</ver-button>\r
    <ver-button plain type="error">按 钮</ver-button>\r
    <ver-button plain round type="error">按 钮</ver-button>\r
    <ver-button ghost type="error">按 钮</ver-button>\r
    <ver-button ghost round type="error">按 钮</ver-button>\r
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
  H = y({
    __name: 'base',
    setup(i) {
      return (p, t) => (
        d(),
        v(
          g,
          null,
          [
            e(
              n(u),
              { class: 'mb-4' },
              {
                default: l(() => [
                  e(
                    n(s),
                    { type: 'primary' },
                    { default: l(() => t[0] || (t[0] = [o('按 钮')])), _: 1 },
                  ),
                  e(
                    n(s),
                    { round: '', type: 'primary' },
                    { default: l(() => t[1] || (t[1] = [o('按 钮')])), _: 1 },
                  ),
                  e(
                    n(s),
                    { plain: '', type: 'primary' },
                    { default: l(() => t[2] || (t[2] = [o('按 钮')])), _: 1 },
                  ),
                  e(
                    n(s),
                    { plain: '', round: '', type: 'primary' },
                    { default: l(() => t[3] || (t[3] = [o('按 钮')])), _: 1 },
                  ),
                  e(
                    n(s),
                    { ghost: '', type: 'primary' },
                    { default: l(() => t[4] || (t[4] = [o('按 钮')])), _: 1 },
                  ),
                  e(
                    n(s),
                    { ghost: '', round: '', type: 'primary' },
                    { default: l(() => t[5] || (t[5] = [o('按 钮')])), _: 1 },
                  ),
                ]),
                _: 1,
              },
            ),
            e(
              n(u),
              { class: 'mb-4' },
              {
                default: l(() => [
                  e(
                    n(s),
                    { type: 'success' },
                    { default: l(() => t[6] || (t[6] = [o('按 钮')])), _: 1 },
                  ),
                  e(
                    n(s),
                    { round: '', type: 'success' },
                    { default: l(() => t[7] || (t[7] = [o('按 钮')])), _: 1 },
                  ),
                  e(
                    n(s),
                    { plain: '', type: 'success' },
                    { default: l(() => t[8] || (t[8] = [o('按 钮')])), _: 1 },
                  ),
                  e(
                    n(s),
                    { plain: '', round: '', type: 'success' },
                    { default: l(() => t[9] || (t[9] = [o('按 钮')])), _: 1 },
                  ),
                  e(
                    n(s),
                    { ghost: '', type: 'success' },
                    { default: l(() => t[10] || (t[10] = [o('按 钮')])), _: 1 },
                  ),
                  e(
                    n(s),
                    { ghost: '', round: '', type: 'success' },
                    { default: l(() => t[11] || (t[11] = [o('按 钮')])), _: 1 },
                  ),
                ]),
                _: 1,
              },
            ),
            e(
              n(u),
              { class: 'mb-4' },
              {
                default: l(() => [
                  e(
                    n(s),
                    { type: 'info' },
                    { default: l(() => t[12] || (t[12] = [o('按 钮')])), _: 1 },
                  ),
                  e(
                    n(s),
                    { round: '', type: 'info' },
                    { default: l(() => t[13] || (t[13] = [o('按 钮')])), _: 1 },
                  ),
                  e(
                    n(s),
                    { plain: '', type: 'info' },
                    { default: l(() => t[14] || (t[14] = [o('按 钮')])), _: 1 },
                  ),
                  e(
                    n(s),
                    { plain: '', round: '', type: 'info' },
                    { default: l(() => t[15] || (t[15] = [o('按 钮')])), _: 1 },
                  ),
                  e(
                    n(s),
                    { ghost: '', type: 'info' },
                    { default: l(() => t[16] || (t[16] = [o('按 钮')])), _: 1 },
                  ),
                  e(
                    n(s),
                    { ghost: '', round: '', type: 'info' },
                    { default: l(() => t[17] || (t[17] = [o('按 钮')])), _: 1 },
                  ),
                ]),
                _: 1,
              },
            ),
            e(
              n(u),
              { class: 'mb-4' },
              {
                default: l(() => [
                  e(
                    n(s),
                    { type: 'warning' },
                    { default: l(() => t[18] || (t[18] = [o('按 钮')])), _: 1 },
                  ),
                  e(
                    n(s),
                    { round: '', type: 'warning' },
                    { default: l(() => t[19] || (t[19] = [o('按 钮')])), _: 1 },
                  ),
                  e(
                    n(s),
                    { plain: '', type: 'warning' },
                    { default: l(() => t[20] || (t[20] = [o('按 钮')])), _: 1 },
                  ),
                  e(
                    n(s),
                    { plain: '', round: '', type: 'warning' },
                    { default: l(() => t[21] || (t[21] = [o('按 钮')])), _: 1 },
                  ),
                  e(
                    n(s),
                    { ghost: '', type: 'warning' },
                    { default: l(() => t[22] || (t[22] = [o('按 钮')])), _: 1 },
                  ),
                  e(
                    n(s),
                    { ghost: '', round: '', type: 'warning' },
                    { default: l(() => t[23] || (t[23] = [o('按 钮')])), _: 1 },
                  ),
                ]),
                _: 1,
              },
            ),
            e(
              n(u),
              { class: 'mb-4' },
              {
                default: l(() => [
                  e(
                    n(s),
                    { type: 'error' },
                    { default: l(() => t[24] || (t[24] = [o('按 钮')])), _: 1 },
                  ),
                  e(
                    n(s),
                    { round: '', type: 'error' },
                    { default: l(() => t[25] || (t[25] = [o('按 钮')])), _: 1 },
                  ),
                  e(
                    n(s),
                    { plain: '', type: 'error' },
                    { default: l(() => t[26] || (t[26] = [o('按 钮')])), _: 1 },
                  ),
                  e(
                    n(s),
                    { plain: '', round: '', type: 'error' },
                    { default: l(() => t[27] || (t[27] = [o('按 钮')])), _: 1 },
                  ),
                  e(
                    n(s),
                    { ghost: '', type: 'error' },
                    { default: l(() => t[28] || (t[28] = [o('按 钮')])), _: 1 },
                  ),
                  e(
                    n(s),
                    { ghost: '', round: '', type: 'error' },
                    { default: l(() => t[29] || (t[29] = [o('按 钮')])), _: 1 },
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
  Q = B(H, [['__scopeId', 'data-v-61c152c5']]),
  W = { tabindex: '0' },
  O = JSON.parse(
    '{"title":"Button 按钮","description":"","frontmatter":{},"headers":[],"relativePath":"components/button/index.md","filePath":"components/button/index.md"}',
  ),
  E = { name: 'components/button/index.md' },
  K = Object.assign(E, {
    setup(i) {
      return (p, t) => {
        const a = V('ClientOnly'),
          x = V('Tool')
        return (
          d(),
          v('div', null, [
            t[15] ||
              (t[15] = A(
                '<h1 id="button-按钮" tabindex="-1">Button 按钮 <a class="header-anchor" href="#button-按钮" aria-label="Permalink to &quot;Button 按钮&quot;">​</a></h1><p>在日常开发中比较常用的操作按钮。</p><h2 id="基础使用" tabindex="-1">基础使用 <a class="header-anchor" href="#基础使用" aria-label="Permalink to &quot;基础使用&quot;">​</a></h2><p>versakitUI 提供了一些基础样式来使用，我们可以通过 <code>type</code>、<code>plain</code>、<code>round</code> 来修改按钮的圆角，颜色和是否透明等属性。</p>',
                4,
              )),
            e(a, null, {
              default: l(() => [
                e(
                  n(m),
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
                    vueCode: n(J),
                  },
                  { vue: l(() => [e(Q)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            t[16] ||
              (t[16] = r(
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
            t[17] ||
              (t[17] = r(
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
            e(a, null, {
              default: l(() => [
                e(
                  n(m),
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
                    vueCode: n(U),
                  },
                  { vue: l(() => [e(S)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            t[18] ||
              (t[18] = r(
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
            t[19] ||
              (t[19] = r(
                'p',
                null,
                [
                  o('我们可以通过调整 '),
                  r('code', null, 'size'),
                  o(' 属性来控制按钮大小。'),
                ],
                -1,
              )),
            e(a, null, {
              default: l(() => [
                e(
                  n(m),
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
                    vueCode: n(z),
                  },
                  { vue: l(() => [e(P)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            t[20] ||
              (t[20] = r(
                'h2',
                { id: '文本按钮', tabindex: '-1' },
                [
                  o('文本按钮 '),
                  r(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#文本按钮',
                      'aria-label': 'Permalink to "文本按钮"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            t[21] ||
              (t[21] = r(
                'p',
                null,
                [
                  o('我们可以设置 '),
                  r('code', null, 'text'),
                  o(' 属性，实现没有边框和背景的按钮。'),
                ],
                -1,
              )),
            e(a, null, {
              default: l(() => [
                e(
                  n(m),
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
                    vueCode: n(j),
                  },
                  { vue: l(() => [e(Z)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            t[22] ||
              (t[22] = r(
                'h2',
                { id: '阴影按钮', tabindex: '-1' },
                [
                  o('阴影按钮 '),
                  r(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#阴影按钮',
                      'aria-label': 'Permalink to "阴影按钮"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            t[23] ||
              (t[23] = r(
                'p',
                null,
                [
                  o('我们可以通过 '),
                  r('code', null, 'shade'),
                  o(' 属性来设置按钮的阴影样式。'),
                ],
                -1,
              )),
            e(a, null, {
              default: l(() => [
                e(
                  n(m),
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
                    vueCode: n(R),
                  },
                  { vue: l(() => [e(k)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            t[24] ||
              (t[24] = r(
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
            t[25] || (t[25] = r('p', null, '按钮可以结合水波纹一起使用。', -1)),
            e(a, null, {
              default: l(() => [
                e(
                  n(m),
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
                    vueCode: n(G),
                  },
                  { vue: l(() => [e(X)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            t[26] ||
              (t[26] = r(
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
            t[27] ||
              (t[27] = r(
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
            e(a, null, {
              default: l(() => [
                e(
                  n(m),
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
                  { vue: l(() => [e(D)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            t[28] ||
              (t[28] = r(
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
            t[29] ||
              (t[29] = r(
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
            r('table', W, [
              t[14] ||
                (t[14] = r(
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
                  t[1] || (t[1] = r('td', null, [r('code', null, 'type')], -1)),
                  t[2] ||
                    (t[2] = r(
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
                    t[0] || (t[0] = r('code', null, 'enum', -1)),
                    e(x, { value: 'primary,primary,info,warning,error,' }),
                  ]),
                  t[3] || (t[3] = r('td', null, 'default', -1)),
                ]),
                t[4] ||
                  (t[4] = r(
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
                t[5] ||
                  (t[5] = r(
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
                t[6] ||
                  (t[6] = r(
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
                t[7] ||
                  (t[7] = r(
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
                t[8] ||
                  (t[8] = r(
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
                t[9] ||
                  (t[9] = r(
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
                t[10] ||
                  (t[10] = r(
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
                t[11] ||
                  (t[11] = r(
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
                t[12] ||
                  (t[12] = r(
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
                t[13] ||
                  (t[13] = r(
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
export { O as __pageData, K as default }
