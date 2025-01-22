const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      'assets/chunks/VPAlgoliaSearchBox.BdWFkJ5t.js',
      'assets/chunks/framework.D5-Ddbi5.js',
    ]),
) => i.map((i) => d[i])
import {
  s as P0,
  h as I0,
  r as t0,
  d as p,
  c as f,
  o as c,
  a as t,
  b as n,
  n as I,
  e as y,
  f as A,
  F as S,
  g as d,
  i as H,
  j as g,
  w as U,
  k as D,
  l as b,
  m as K,
  p as v0,
  t as B,
  q as V,
  v as a0,
  T as G,
  u as E,
  x as X0,
  y as j,
  z as h0,
  A as d0,
  B as j0,
  C as m0,
  D as s0,
  E as R,
  G as T0,
  _ as x,
  H as N0,
  I as Y0,
  J as a1,
  K as x0,
  L as m,
  M as Y,
  N as H0,
  O as b0,
  P as u0,
  Q as L0,
  R as l1,
  S as i1,
  U as l0,
  V as p0,
  W as F,
  X as E0,
  Y as f0,
  Z as o1,
  $ as e1,
  a0 as D0,
  a1 as y0,
  a2 as s1,
  a3 as c1,
  a4 as r1,
  a5 as O0,
  a6 as t1,
  a7 as h1,
} from './framework.D5-Ddbi5.js'
const q = (e, i) => (
    (e.install = (a) => {
      for (const l of [e, ...Object.values({})]) a.component(l.name, l)
    }),
    e
  ),
  n1 = p({
    name: 'VerIcon',
    inheritAttrs: !1,
    __name: 'index',
    props: {
      name: { type: String, required: !1, default: '' },
      size: { type: [Number, String], required: !1, default: 14 },
      color: { type: String, required: !1, default: '' },
    },
    setup(e, { expose: i }) {
      i()
      const a = e,
        l = a.size + 'px',
        o = f(() => `#icon-${a.name}`),
        s = { props: a, size: l, IconName: o }
      return (
        Object.defineProperty(s, '__isScriptSetup', {
          enumerable: !1,
          value: !0,
        }),
        s
      )
    },
  }),
  _ = (e, i) => {
    const a = e.__vccOpts || e
    for (const [l, o] of i) a[l] = o
    return a
  },
  v1 = ['xlink:href']
function d1(e, i, a, l, o, s) {
  return (
    c(),
    t(
      'svg',
      {
        class: 'ver-icon',
        'aria-hidden': 'true',
        style: I({ width: l.size, height: l.size, color: l.props.color }),
      },
      [n('use', { 'xlink:href': l.IconName }, null, 8, v1)],
      4,
    )
  )
}
const m1 = _(n1, [
    ['render', d1],
    ['__scopeId', 'data-v-793447e8'],
    [
      '__file',
      'C:/Users/Jannik/Desktop/Versakit/packages/ui/components/icon/src/index.vue',
    ],
  ]),
  J = q(m1),
  N = {
    'slate-0': '#f8fafc',
    'slate-1': '#f1f5f9',
    'slate-2': '#e2e8f0',
    'slate-3': '#cbd5e1',
    'slate-4': '#94a3b8',
    'slate-5': '#64748b',
    'slate-6': '#475569',
    'slate-7': '#334155',
    'slate-8': '#1e293b',
    'slate-9': '#0f172a',
    'slate-10': '#020617',
    'gray-0': '#f9fafb',
    'gray-1': '#f3f4f6',
    'gray-2': '#e5e7eb',
    'gray-3': '#d1d5db',
    'gray-4': '#9ca3af',
    'gray-5': '#6b7280',
    'gray-6': '#4b5563',
    'gray-7': '#374151',
    'gray-8': '#1f2937',
    'gray-9': '#111827',
    'gray-10': '#030712',
    'zinc-0': '#fafafa',
    'zinc-1': '#f4f4f5',
    'zinc-2': '#e4e4e7',
    'zinc-3': '#d4d4d8',
    'zinc-4': '#a1a1aa',
    'zinc-5': '#71717a',
    'zinc-6': '#52525b',
    'zinc-7': '#3f3f46',
    'zinc-8': '#27272a',
    'zinc-9': '#18181b',
    'zinc-10': '#09090b',
    'neutral-0': '#fafafa',
    'neutral-1': '#f5f5f5',
    'neutral-2': '#e5e5e5',
    'neutral-3': '#d4d4d4',
    'neutral-4': '#a3a3a3',
    'neutral-5': '#737373',
    'neutral-6': '#525252',
    'neutral-7': '#404040',
    'neutral-8': '#262626',
    'neutral-9': '#171717',
    'neutral-10': '#0a0a0a',
    'stone-0': '#fafaf9',
    'stone-1': '#f5f5f4',
    'stone-2': '#e7e5e4',
    'stone-3': '#d6d3d1',
    'stone-4': '#a8a29e',
    'stone-5': '#78716c',
    'stone-6': '#57534e',
    'stone-7': '#44403c',
    'stone-8': '#292524',
    'stone-9': '#1c1917',
    'stone-10': '#0c0a09',
    'orange-0': '#fff7ed',
    'orange-1': '#ffedd5',
    'orange-2': '#fed7aa',
    'orange-3': '#fdba74',
    'orange-4': '#fb923c',
    'orange-5': '#f97316',
    'orange-6': '#ea580c',
    'orange-7': '#c2410c',
    'orange-8': '#9a3412',
    'orange-9': '#7c2d12',
    'orange-10': '#431407',
    'amber-0': '#fffbeb',
    'amber-1': '#fef3c7',
    'amber-2': '#fde68a',
    'amber-3': '#fcd34d',
    'amber-4': '#fbbf24',
    'amber-5': '#f59e0b',
    'amber-6': '#d97706',
    'amber-7': '#b45309',
    'amber-8': '#92400e',
    'amber-9': '#78350f',
    'amber-10': '#451a03',
    'yellow-0': '#fefce8',
    'yellow-1': '#fef9c3',
    'yellow-2': '#fef08a',
    'yellow-3': '#fde047',
    'yellow-4': '#facc15',
    'yellow-5': '#eab308',
    'yellow-6': '#ca8a04',
    'yellow-7': '#a16207',
    'yellow-8': '#854d0e',
    'yellow-9': '#713f12',
    'yellow-10': '#422006',
    'lime-0': '#f7fee7',
    'lime-1': '#ecfccb',
    'lime-2': '#d9f99d',
    'lime-3': '#bef264',
    'lime-4': '#a3e635',
    'lime-5': '#84cc16',
    'lime-6': '#65a30d',
    'lime-7': '#4d7c0f',
    'lime-8': '#3f6212',
    'lime-9': '#365314',
    'lime-10': '#1a2e05',
    'green-0': '#f0fdf4',
    'green-1': '#dcfce7',
    'green-2': '#bbf7d0',
    'green-3': '#86efac',
    'green-4': '#4ade80',
    'green-5': '#22c55e',
    'green-6': '#16a34a',
    'green-7': '#15803d',
    'green-8': '#166534',
    'green-9': '#14532d',
    'green-10': '#052e16',
    'emerald-0': '#ecfdf5',
    'emerald-1': '#d1fae5',
    'emerald-2': '#a7f3d0',
    'emerald-3': '#6ee7b7',
    'emerald-4': '#34d399',
    'emerald-5': '#10b981',
    'emerald-6': '#059669',
    'emerald-7': '#047857',
    'emerald-8': '#065f46',
    'emerald-9': '#064e3b',
    'emerald-10': '#022c22',
    'teal-0': '#f0fdfa',
    'teal-1': '#ccfbf1',
    'teal-2': '#99f6e4',
    'teal-3': '#5eead4',
    'teal-4': '#2dd4bf',
    'teal-5': '#14b8a6',
    'teal-6': '#0d9488',
    'teal-7': '#0f766e',
    'teal-8': '#115e59',
    'teal-9': '#134e4a',
    'teal-10': '#042f2e',
    'cyan-0': '#ecfeff',
    'cyan-1': '#cffafe',
    'cyan-2': '#a5f3fc',
    'cyan-3': '#67e8f9',
    'cyan-4': '#22d3ee',
    'cyan-5': '#06b6d4',
    'cyan-6': '#0891b2',
    'cyan-7': '#0e7490',
    'cyan-8': '#155e75',
    'cyan-9': '#164e63',
    'cyan-10': '#083344',
    'sky-0': '#f0f9ff',
    'sky-1': '#e0f2fe',
    'sky-2': '#bae6fd',
    'sky-3': '#7dd3fc',
    'sky-4': '#38bdf8',
    'sky-5': '#0ea5e9',
    'sky-6': '#0284c7',
    'sky-7': '#0369a1',
    'sky-8': '#075985',
    'sky-9': '#0c4a6e',
    'sky-10': '#082f49',
    'blue-0': '#eff6ff',
    'blue-1': '#dbeafe',
    'blue-2': '#bfdbfe',
    'blue-3': '#93c5fd',
    'blue-4': '#60a5fa',
    'blue-5': '#3b82f6',
    'blue-6': '#2563eb',
    'blue-7': '#1d4ed8',
    'blue-8': '#1e40af',
    'blue-9': '#1e3a8a',
    'blue-10': '#172554',
    'indigo-0': '#eef2ff',
    'indigo-1': '#e0e7ff',
    'indigo-2': '#c7d2fe',
    'indigo-3': '#a5b4fc',
    'indigo-4': '#818cf8',
    'indigo-5': '#6366f1',
    'indigo-6': '#4f46e5',
    'indigo-7': '#4338ca',
    'indigo-8': '#3730a3',
    'indigo-9': '#312e81',
    'indigo-10': '#1e1b4b',
    'violet-0': '#f5f3ff',
    'violet-1': '#ede9fe',
    'violet-2': '#ddd6fe',
    'violet-3': '#c4b5fd',
    'violet-4': '#a78bfa',
    'violet-5': '#8b5cf6',
    'violet-6': '#7c3aed',
    'violet-7': '#6d28d9',
    'violet-8': '#5b21b6',
    'violet-9': '#4c1d95',
    'violet-10': '#2e1065',
    'purple-0': '#faf5ff',
    'purple-1': '#f3e8ff',
    'purple-2': '#e9d5ff',
    'purple-3': '#d8b4fe',
    'purple-4': '#c084fc',
    'purple-5': '#a855f7',
    'purple-6': '#9333ea',
    'purple-7': '#7e22ce',
    'purple-8': '#6b21a8',
    'purple-9': '#581c87',
    'purple-10': '#3b0764',
    'fuchsia-0': '#fdf4ff',
    'fuchsia-1': '#fae8ff',
    'fuchsia-2': '#f5d0fe',
    'fuchsia-3': '#f0abfc',
    'fuchsia-4': '#e879f9',
    'fuchsia-5': '#d946ef',
    'fuchsia-6': '#c026d3',
    'fuchsia-7': '#a21caf',
    'fuchsia-8': '#86198f',
    'fuchsia-9': '#701a75',
    'fuchsia-10': '#4a044e',
    'pink-0': '#fdf2f8',
    'pink-1': '#fce7f3',
    'pink-2': '#fbcfe8',
    'pink-3': '#f9a8d4',
    'pink-4': '#f472b6',
    'pink-5': '#ec4899',
    'pink-6': '#db2777',
    'pink-7': '#be185d',
    'pink-8': '#9d174d',
    'pink-9': '#831843',
    'pink-10': '#500724',
    'rose-0': '#fff1f2',
    'rose-1': '#ffe4e6',
    'rose-2': '#fecdd3',
    'rose-3': '#fda4af',
    'rose-4': '#fb7185',
    'rose-5': '#f43f5e',
    'rose-6': '#e11d48',
    'rose-7': '#be123c',
    'rose-8': '#9f1239',
    'rose-9': '#881337',
    'rose-10': '#4c0519',
  },
  b1 = p({
    name: 'VerButton',
    __name: 'index',
    props: {
      size: { type: String, required: !1, default: 'md' },
      disabled: { type: Boolean, required: !1, default: !1 },
      circle: { type: Boolean, required: !1, default: !1 },
      color: { type: String, required: !1, default: 'violet' },
      icon: { type: String, required: !1, default: '' },
      variant: { type: String, required: !1, default: '' },
    },
    setup(e, { expose: i }) {
      i()
      const a = e,
        l = f(() => {
          const r = a.variant.split(' ')
          return [
            'ver-btn',
            a.color == '' ? '' : `ver-btn-${a.color}`,
            ...r.map((h) => `is-${h}`),
            a.circle == !0 ? 'is-circle' : '',
            a.disabled == !1 ? '' : 'is-disabled',
            a.size == 'md' ? '' : `is-${a.size}`,
            `is-${a.color}`.toLowerCase(),
          ]
        }),
        o = f(() => {
          const r = `${a.color}-`
          return (
            console.log(1, r + '0'),
            console.log(2, N),
            console.log(3, 'violet-0' in N),
            console.log(4, N[`${r}0`]),
            console.log(4, N[`${r}1`]),
            console.log(4, N[`${r}6`]),
            {
              '--color0': N[`${r}0`],
              '--color1': N[`${r}1`],
              '--color2': N[`${r}2`],
              '--color3': N[`${r}3`],
              '--color4': N[`${r}4`],
              '--color5': N[`${r}5`],
              '--color6': N[`${r}6`],
              '--color7': N[`${r}7`],
              '--color8': N[`${r}8`],
              '--color9': N[`${r}9`],
              '--color10': N[`${r}10`],
            }
          )
        }),
        s = {
          props: a,
          Verclass: l,
          computedStyles: o,
          get VerIcon() {
            return J
          },
        }
      return (
        Object.defineProperty(s, '__isScriptSetup', {
          enumerable: !1,
          value: !0,
        }),
        s
      )
    },
  }),
  u1 = ['disabled', 'size', 'color', 'variant']
function p1(e, i, a, l, o, s) {
  return (
    c(),
    t(
      'button',
      {
        class: H(l.Verclass),
        disabled: l.props.disabled,
        size: l.props.size,
        color: l.props.color,
        variant: l.props.variant,
        style: I(l.computedStyles),
      },
      [
        y(' icon '),
        a.icon
          ? (c(), A(l.VerIcon, { key: 0, name: a.icon }, null, 8, ['name']))
          : (c(),
            t(
              S,
              { key: 1 },
              [
                y(' common '),
                n('span', null, [d(e.$slots, 'default', {}, void 0, !0)]),
              ],
              2112,
            )),
      ],
      14,
      u1,
    )
  )
}
const f1 = _(b1, [
    ['render', p1],
    ['__scopeId', 'data-v-59b2e43e'],
    [
      '__file',
      'C:/Users/Jannik/Desktop/Versakit/packages/ui/components/button/src/index.vue',
    ],
  ]),
  B0 = q(f1),
  y1 = p({
    name: 'VerText',
    __name: 'index',
    props: {
      type: { type: null, required: !1, default: 'info' },
      size: { type: null, required: !1, default: 'md' },
      truncated: { type: Boolean, required: !1, default: !1 },
    },
    setup(e, { expose: i }) {
      i()
      const a = e,
        l = f(() => [
          'ver-text',
          a.type == 'info' ? 'ver-text-info' : `ver-text-${a.type}`,
          a.size == 'md' ? '' : `is-${a.size}`,
          a.truncated == !1 ? '' : 'is-truncated',
        ]),
        o = { props: a, VerClass: l }
      return (
        Object.defineProperty(o, '__isScriptSetup', {
          enumerable: !1,
          value: !0,
        }),
        o
      )
    },
  })
function M1(e, i, a, l, o, s) {
  return (
    c(),
    t(
      'span',
      { class: H(l.VerClass) },
      [d(e.$slots, 'default', {}, void 0, !0)],
      2,
    )
  )
}
const z1 = _(y1, [
    ['render', M1],
    ['__scopeId', 'data-v-a87ab481'],
    [
      '__file',
      'C:/Users/Jannik/Desktop/Versakit/packages/ui/components/text/src/index.vue',
    ],
  ]),
  V1 = q(z1),
  H1 = p({
    name: 'VerLink',
    __name: 'index',
    props: {
      type: { type: String, required: !1, default: '' },
      disabled: { type: Boolean, required: !1, default: !1 },
      href: { type: String, required: !1, default: '' },
    },
    setup(e, { expose: i }) {
      i()
      const a = e,
        l = f(() => [
          'ver-link',
          a.type == '' ? '' : `ver-link-${a.type}`,
          a.disabled == !1 ? '' : 'is-disabled',
        ]),
        o = { props: a, VerClass: l }
      return (
        Object.defineProperty(o, '__isScriptSetup', {
          enumerable: !1,
          value: !0,
        }),
        o
      )
    },
  }),
  C1 = ['href']
function A1(e, i, a, l, o, s) {
  return (
    c(),
    t(
      'a',
      { class: H(l.VerClass), href: a.href },
      [n('span', null, [d(e.$slots, 'default', {}, void 0, !0)])],
      10,
      C1,
    )
  )
}
const w1 = _(H1, [
    ['render', A1],
    ['__scopeId', 'data-v-d24feda1'],
    [
      '__file',
      'C:/Users/Jannik/Desktop/Versakit/packages/ui/components/link/src/index.vue',
    ],
  ]),
  x1 = q(w1),
  L1 = p({
    name: 'VerRow',
    __name: 'index',
    props: { gutter: { type: Number, required: !1, default: 0 } },
    setup(e, { expose: i }) {
      i()
      const a = e,
        l = g(),
        o = (r) => {
          var h
          const v = (h = l.value) == null ? void 0 : h.children
          if (!(!v || r))
            for (let u = 0; u < v.length; u++) {
              const M = v[u],
                z = a.gutter / 2
              ;(M.style.paddingLeft = `${z}px`),
                (M.style.paddingRight = `${z}px`)
            }
        }
      U(
        () => a.gutter,
        () => o(!1),
      ),
        D(() => o(a.gutter === 0))
      const s = { props: a, row: l, setPaddings: o }
      return (
        Object.defineProperty(s, '__isScriptSetup', {
          enumerable: !1,
          value: !0,
        }),
        s
      )
    },
  }),
  B1 = { class: 'ver-row', ref: 'row' }
function g1(e, i, a, l, o, s) {
  return c(), t('div', B1, [d(e.$slots, 'default', {}, void 0, !0)], 512)
}
const k1 = _(L1, [
    ['render', g1],
    ['__scopeId', 'data-v-5ce90f13'],
    [
      '__file',
      'C:/Users/Jannik/Desktop/Versakit/packages/ui/components/row/src/index.vue',
    ],
  ]),
  q1 = q(k1),
  _1 = p({
    name: 'VerCol',
    __name: 'index',
    props: {
      span: { type: Number, required: !1, default: 24 },
      offset: { type: Number, required: !1, default: 0 },
      xs: { type: Number, required: !1 },
      sm: { type: Number, required: !1 },
      md: { type: Number, required: !1 },
      lg: { type: Number, required: !1 },
      xl: { type: Number, required: !1 },
    },
    setup(e, { expose: i }) {
      i()
      const a = e
      function l(v, u) {
        return ['xs', 'sm', 'md', 'lg', 'xl'].reduce(
          (M, z) => (v[z] && (M[`${u}-${z}-${v[z]}`] = !0), M),
          {},
        )
      }
      const o = f(() => l(a, 'ver-col')),
        s = f(() =>
          Object.keys(o.value).length !== 0
            ? ''
            : a.span <= 24 && a.span % 1 == 0
              ? (100 / 24) * a.span + '%'
              : '',
        ),
        r = f(() =>
          a.offset <= 24 && a.offset % 1 == 0
            ? (100 / 24) * a.offset + '%'
            : '',
        ),
        h = { props: a, generateClass: l, classOptions: o, width: s, offset: r }
      return (
        Object.defineProperty(h, '__isScriptSetup', {
          enumerable: !1,
          value: !0,
        }),
        h
      )
    },
  })
function $1(e, i, a, l, o, s) {
  return (
    c(),
    t(
      'div',
      {
        class: H([['ver-col', l.classOptions], 'ver-col']),
        style: I({ width: l.width, marginLeft: l.offset }),
      },
      [d(e.$slots, 'default', {}, void 0, !0)],
      6,
    )
  )
}
const S1 = _(_1, [
    ['render', $1],
    ['__scopeId', 'data-v-23666f5b'],
    [
      '__file',
      'C:/Users/Jannik/Desktop/Versakit/packages/ui/components/col/src/index.vue',
    ],
  ]),
  Z1 = q(S1),
  P1 = p({
    name: 'VerInput',
    __name: 'index',
    props: {
      placeholder: { type: String, required: !1, default: '' },
      modelValue: { type: [String, Number], required: !1, default: '' },
      disabled: { type: Boolean, required: !1, default: !1 },
      type: { type: String, required: !1, default: 'text' },
    },
    emits: ['update:modelValue'],
    setup(e, { expose: i, emit: a }) {
      i()
      const l = a,
        o = e,
        s = (v) => {
          const u = v.target
          l('update:modelValue', u.value)
        },
        r = f(() => ['ver-input', o.disabled == !1 ? '' : 'is-disabled']),
        h = { emit: l, props: o, input: s, VerClass: r }
      return (
        Object.defineProperty(h, '__isScriptSetup', {
          enumerable: !1,
          value: !0,
        }),
        h
      )
    },
  }),
  I1 = ['disabled', 'value', 'type', 'placeholder']
function j1(e, i, a, l, o, s) {
  return (
    c(),
    t(
      'div',
      { class: H(l.VerClass) },
      [
        n(
          'input',
          {
            disabled: a.disabled,
            value: a.modelValue,
            type: a.type,
            placeholder: a.placeholder,
            onInput: l.input,
          },
          null,
          40,
          I1,
        ),
      ],
      2,
    )
  )
}
const T1 = _(P1, [
    ['render', j1],
    ['__scopeId', 'data-v-aee5a951'],
    [
      '__file',
      'C:/Users/Jannik/Desktop/Versakit/packages/ui/components/input/src/index.vue',
    ],
  ]),
  N1 = q(T1),
  E1 = p({
    name: 'VerDialog',
    __name: 'index',
    props: {
      title: { type: String, required: !1, default: '标题' },
      modelValue: { type: Boolean, required: !1, default: !1 },
      width: { type: String, required: !1, default: '30%' },
      top: { type: String, required: !1, default: '15vh' },
    },
    emits: ['update:modelValue'],
    setup(e, { expose: i, emit: a }) {
      i()
      const l = e,
        o = a,
        s = {
          props: l,
          emit: o,
          close: () => {
            o('update:modelValue', !1)
          },
          get VerIcon() {
            return J
          },
        }
      return (
        Object.defineProperty(s, '__isScriptSetup', {
          enumerable: !1,
          value: !0,
        }),
        s
      )
    },
  }),
  D1 = { class: 'ver-dialog_header' },
  O1 = { class: 'ver-dialog_title' },
  U1 = { class: 'ver-dialog_body' },
  Q1 = { key: 0, class: 'ver-dialog_footer' }
function F1(e, i, a, l, o, s) {
  return (
    c(),
    A(
      G,
      { name: 'fade', persisted: '' },
      {
        default: b(() => [
          K(
            n(
              'div',
              { class: 'ver-dialog_wrapper', onClick: v0(l.close, ['self']) },
              [
                n(
                  'div',
                  {
                    class: 'ver-dialog',
                    style: I({ width: l.props.width, marginTop: l.props.top }),
                  },
                  [
                    n('div', D1, [
                      d(
                        e.$slots,
                        'title',
                        {},
                        () => [n('span', O1, B(l.props.title), 1)],
                        !0,
                      ),
                      n(
                        'button',
                        { class: 'ver-dialog_headerbtn', onClick: l.close },
                        [V(l.VerIcon, { name: 'x-lg' })],
                      ),
                    ]),
                    n('div', U1, [d(e.$slots, 'default', {}, void 0, !0)]),
                    e.$slots.footer
                      ? (c(),
                        t('div', Q1, [d(e.$slots, 'footer', {}, void 0, !0)]))
                      : y('v-if', !0),
                  ],
                  4,
                ),
              ],
              512,
            ),
            [[a0, l.props.modelValue]],
          ),
        ]),
        _: 3,
      },
    )
  )
}
const J1 = _(E1, [
    ['render', F1],
    ['__scopeId', 'data-v-738f5d96'],
    [
      '__file',
      'C:/Users/Jannik/Desktop/Versakit/packages/ui/components/dialog/src/index.vue',
    ],
  ]),
  R1 = q(J1),
  G1 = p({
    name: 'VerDivider',
    __name: 'index',
    props: {
      line: { type: String, required: !1, default: 'solid' },
      position: { type: String, required: !1, default: 'left' },
      direction: { type: null, required: !1, default: 'horizontal' },
    },
    setup(e, { expose: i }) {
      i()
      const a = { props: e }
      return (
        Object.defineProperty(a, '__isScriptSetup', {
          enumerable: !1,
          value: !0,
        }),
        a
      )
    },
  }),
  W1 = { key: 0, class: 'ver-divider-title' }
function K1(e, i, a, l, o, s) {
  return (
    c(),
    t(
      'div',
      {
        class: H([
          'ver-divider',
          { 'ver-vertical': l.props.direction === 'vertical' },
        ]),
        style: I({
          'justify-content': l.props.position,
          'border-top': `1px ${l.props.line} #dcdfe6`,
        }),
      },
      [
        l.props.position
          ? (c(), t('div', W1, [d(e.$slots, 'default', {}, void 0, !0)]))
          : y('v-if', !0),
      ],
      6,
    )
  )
}
const X1 = _(G1, [
    ['render', K1],
    ['__scopeId', 'data-v-a8592bb2'],
    [
      '__file',
      'C:/Users/Jannik/Desktop/Versakit/packages/ui/components/divider/src/index.vue',
    ],
  ]),
  Y1 = q(X1),
  a5 = p({
    name: 'VerAvatar',
    __name: 'index',
    props: {
      shape: { type: String, required: !1, default: 'circle' },
      src: { type: String, required: !1, default: '' },
      size: { type: [Number, String], required: !1, default: 50 },
      fit: { type: String, required: !1, default: 'cover' },
      fallback: { type: String, required: !1, default: '' },
    },
    setup(e, { expose: i }) {
      i()
      const a = e
      let l = a.src
      const o = (u) => {
          const M = u.target
          return (M.src = a.fallback)
        },
        s = f(() => {
          if (typeof a.size == 'number') return a.size + 'px'
          if (typeof a.size == 'string')
            switch (a.size) {
              case 'xs':
                return '25px'
              case 'sm':
                return '32px'
              case 'lg':
                return '42px'
              default:
                return '50px'
            }
          else return 50
        }),
        r = f(() => [
          'ver-avatar',
          a.shape == 'circle' ? 'is-circle' : 'is-square',
        ]),
        h = f(() => [`fit-${a.fit}`]),
        v = {
          props: a,
          get imgURL() {
            return l
          },
          set imgURL(u) {
            l = u
          },
          handleImgError: o,
          size: s,
          VerClass: r,
          imgClass: h,
        }
      return (
        Object.defineProperty(v, '__isScriptSetup', {
          enumerable: !1,
          value: !0,
        }),
        v
      )
    },
  }),
  l5 = ['src'],
  i5 = { key: 1, class: 'ver-avatar-inline' }
function o5(e, i, a, l, o, s) {
  return (
    c(),
    t(
      'span',
      { class: H(l.VerClass), style: I({ width: l.size, height: l.size }) },
      [
        l.imgURL
          ? (c(),
            t(
              'img',
              {
                key: 0,
                class: H(l.imgClass),
                src: a.src,
                alt: '',
                onError: l.handleImgError,
              },
              null,
              42,
              l5,
            ))
          : (c(), t('span', i5, [d(e.$slots, 'default', {}, void 0, !0)])),
        y(' 错误处理 '),
        d(e.$slots, 'error', { class: 'ver-avatar-inline' }, void 0, !0),
      ],
      6,
    )
  )
}
const e5 = _(a5, [
    ['render', o5],
    ['__scopeId', 'data-v-01b83522'],
    [
      '__file',
      'C:/Users/Jannik/Desktop/Versakit/packages/ui/components/avatar/src/index.vue',
    ],
  ]),
  s5 = q(e5),
  c5 = p({
    name: 'VerBadge',
    __name: 'index',
    props: {
      type: { type: String, required: !1, default: 'dot' },
      value: { type: [String, Number], required: !1 },
    },
    setup(e, { expose: i }) {
      i()
      const a = e,
        l = f(() =>
          typeof a.value == 'number' && a.value > 99 ? '99+' : a.value,
        ),
        o = f(() => {
          const r = ['ver-badge']
          return (
            a.type === 'dot' && r.push('ver-badge-dot'),
            a.type === 'number' && r.push('ver-badge-num'),
            a.type === 'text' && r.push('ver-badge-text'),
            r
          )
        }),
        s = { props: a, calcValue: l, badgeClass: o }
      return (
        Object.defineProperty(s, '__isScriptSetup', {
          enumerable: !1,
          value: !0,
        }),
        s
      )
    },
  }),
  r5 = { class: 'ver-badge' }
function t5(e, i, a, l, o, s) {
  return (
    c(),
    t('div', r5, [
      d(e.$slots, 'default', {}, void 0, !0),
      y(' 通过上标文本标签实现徽标 '),
      n(
        'sup',
        { ref: 'verBadge', class: H(l.badgeClass) },
        [
          a.type !== 'dot'
            ? (c(), t(S, { key: 0 }, [E(B(l.calcValue), 1)], 64))
            : y('v-if', !0),
        ],
        2,
      ),
    ])
  )
}
const h5 = _(c5, [
    ['render', t5],
    ['__scopeId', 'data-v-2161f8bd'],
    [
      '__file',
      'C:/Users/Jannik/Desktop/Versakit/packages/ui/components/badge/src/index.vue',
    ],
  ]),
  n5 = q(h5),
  v5 = p({
    name: 'VerCard',
    __name: 'index',
    props: { shadow: { type: String, required: !1, default: 'always' } },
    setup(e, { expose: i }) {
      i()
      const a = e,
        l = f(() => [
          'ver-card',
          a.shadow == 'always'
            ? 'is-shadow-always'
            : a.shadow == 'hover'
              ? 'is-shadow-hover'
              : 'is-shadow-never',
        ]),
        o = { props: a, VerClass: l }
      return (
        Object.defineProperty(o, '__isScriptSetup', {
          enumerable: !1,
          value: !0,
        }),
        o
      )
    },
  }),
  d5 = { key: 0, class: 'ver-card-header' },
  m5 = { class: 'ver-card-body' },
  b5 = { key: 1, class: 'ver-card-footer' }
function u5(e, i, a, l, o, s) {
  return (
    c(),
    t(
      'div',
      { class: H(l.VerClass) },
      [
        e.$slots.header
          ? (c(), t('div', d5, [d(e.$slots, 'header', {}, void 0, !0)]))
          : y('v-if', !0),
        n('div', m5, [d(e.$slots, 'default', {}, void 0, !0)]),
        e.$slots.footer
          ? (c(), t('div', b5, [d(e.$slots, 'footer', {}, void 0, !0)]))
          : y('v-if', !0),
      ],
      2,
    )
  )
}
const p5 = _(v5, [
    ['render', u5],
    ['__scopeId', 'data-v-50b94cc5'],
    [
      '__file',
      'C:/Users/Jannik/Desktop/Versakit/packages/ui/components/card/src/index.vue',
    ],
  ]),
  f5 = q(p5),
  y5 = p({
    name: 'VerTag',
    __name: 'index',
    props: {
      type: { type: null, required: !1, default: 'primary' },
      plain: { type: Boolean, required: !1, default: !1 },
      size: { type: null, required: !1, default: 'md' },
      round: { type: Boolean, required: !1, default: !1 },
    },
    setup(e, { expose: i }) {
      i()
      const a = e,
        l = f(() => [
          'ver-tag',
          a.type == 'primary' ? 'ver-tag-primary' : `ver-tag-${a.type}`,
          a.round == !1 ? '' : 'is-round',
          a.plain == !1 ? '' : 'is-plain',
          a.size == 'md' ? '' : `is-${a.size}`,
        ]),
        o = { props: a, tClass: l }
      return (
        Object.defineProperty(o, '__isScriptSetup', {
          enumerable: !1,
          value: !0,
        }),
        o
      )
    },
  })
function M5(e, i, a, l, o, s) {
  return (
    c(),
    t(
      'span',
      { class: H(l.tClass) },
      [d(e.$slots, 'default', {}, void 0, !0)],
      2,
    )
  )
}
const z5 = _(y5, [
    ['render', M5],
    ['__scopeId', 'data-v-5c23025e'],
    [
      '__file',
      'C:/Users/Jannik/Desktop/Versakit/packages/ui/components/tag/src/index.vue',
    ],
  ]),
  V5 = q(z5),
  H5 = p({
    name: 'VerDrawer',
    __name: 'index',
    props: {
      title: { type: String, required: !1 },
      modelValue: { type: Boolean, required: !1, default: !1 },
      direction: { type: String, required: !1, default: 'left' },
    },
    emits: ['update:modelValue'],
    setup(e, { expose: i, emit: a }) {
      i()
      const l = e,
        o = a,
        s = {
          props: l,
          emit: o,
          handleClose: () => {
            o('update:modelValue', !1)
          },
          get VerIcon() {
            return J
          },
        }
      return (
        Object.defineProperty(s, '__isScriptSetup', {
          enumerable: !1,
          value: !0,
        }),
        s
      )
    },
  }),
  C5 = { class: 'ver-drawer' },
  A5 = { class: 'ver-drawer_header' },
  w5 = { class: 'ver-drawer_title' },
  x5 = { class: 'ver-drawer_body' }
function L5(e, i, a, l, o, s) {
  return (
    c(),
    A(
      G,
      { name: 'fade', persisted: '' },
      {
        default: b(() => [
          K(
            n(
              'div',
              {
                class: H([
                  'ver-drawer-wrapper',
                  `ver-drawer-${l.props.direction}`,
                ]),
                onClick: v0(l.handleClose, ['self']),
              },
              [
                n('div', C5, [
                  n('div', A5, [
                    n('span', w5, B(l.props.title ? l.props.title : '标题'), 1),
                    n(
                      'button',
                      { class: 'ver-drawer_headerbtn', onClick: l.handleClose },
                      [V(l.VerIcon, { name: 'x-lg' })],
                    ),
                  ]),
                  n('div', x5, [d(e.$slots, 'default', {}, void 0, !0)]),
                ]),
              ],
              2,
            ),
            [[a0, l.props.modelValue]],
          ),
        ]),
        _: 3,
      },
    )
  )
}
const B5 = _(H5, [
    ['render', L5],
    ['__scopeId', 'data-v-ae7ab880'],
    [
      '__file',
      'C:/Users/Jannik/Desktop/Versakit/packages/ui/components/drawer/src/index.vue',
    ],
  ]),
  g5 = q(B5),
  k5 = p({
    name: 'VerSwitch',
    __name: 'index',
    props: {
      modelValue: { type: Boolean, required: !1, default: !1 },
      size: { type: null, required: !1, default: 'md' },
    },
    emits: ['input', 'update:modelValue'],
    setup(e, { expose: i, emit: a }) {
      i()
      const l = e,
        o = a,
        s = f(() => [
          'ver-switch',
          l.modelValue === !1 ? '' : 'is-checked',
          l.size && l.size !== 'md' ? `is-${l.size}` : '',
        ]),
        r = {
          props: l,
          emit: o,
          VerClass: s,
          handClick: () => {
            o('input', !l.modelValue), o('update:modelValue', !l.modelValue)
          },
        }
      return (
        Object.defineProperty(r, '__isScriptSetup', {
          enumerable: !1,
          value: !0,
        }),
        r
      )
    },
  }),
  q5 = { ref: 'core', class: 'ver-switch-core' }
function _5(e, i, a, l, o, s) {
  return (
    c(),
    t(
      'label',
      { class: H(l.VerClass), onClick: l.handClick },
      [
        n(
          'span',
          q5,
          i[0] ||
            (i[0] = [n('span', { class: 'ver-switch-button' }, null, -1)]),
          512,
        ),
      ],
      2,
    )
  )
}
const $5 = _(k5, [
    ['render', _5],
    ['__scopeId', 'data-v-e94b38ff'],
    [
      '__file',
      'C:/Users/Jannik/Desktop/Versakit/packages/ui/components/switch/src/index.vue',
    ],
  ]),
  S5 = q($5),
  Z5 = p({
    name: 'VerRadio',
    __name: 'index',
    props: {
      label: { type: [String, Number, Boolean], required: !1, default: '' },
      modelValue: {
        type: [String, Number, Boolean, null],
        required: !1,
        default: null,
      },
      name: { type: String, required: !1, default: '' },
      disabled: { type: Boolean, required: !1, default: !1 },
    },
    emits: ['update:modelValue'],
    setup(e, { expose: i, emit: a }) {
      i()
      const l = g(),
        o = a,
        s = e,
        r = f({
          get: () => s.modelValue,
          set: (v) => {
            o('update:modelValue', v),
              l.value && (l.value.checked == r.value) == s.label
          },
        }),
        h = { radio: l, emit: o, props: s, modelValue: r }
      return (
        Object.defineProperty(h, '__isScriptSetup', {
          enumerable: !1,
          value: !0,
        }),
        h
      )
    },
  }),
  P5 = { class: 'ver-radio_input' },
  I5 = ['disabled', 'name', 'value'],
  j5 = { class: 'ver-radio_label' }
function T5(e, i, a, l, o, s) {
  return (
    c(),
    t(
      'label',
      {
        class: H([
          'ver-radio',
          { 'is-checked': a.label == l.modelValue, 'is-disabled': a.disabled },
        ]),
      },
      [
        n('span', P5, [
          i[1] || (i[1] = n('span', { class: 'ver-radio_inner' }, null, -1)),
          K(
            n(
              'input',
              {
                disabled: a.disabled,
                ref: 'radio',
                class: 'ver-radio_original',
                name: a.name,
                'onUpdate:modelValue':
                  i[0] || (i[0] = (r) => (l.modelValue = r)),
                value: l.props.label,
                type: 'radio',
              },
              null,
              8,
              I5,
            ),
            [[X0, l.modelValue]],
          ),
        ]),
        n('span', j5, [
          d(e.$slots, 'default', {}, void 0, !0),
          e.$slots.default
            ? y('v-if', !0)
            : (c(), t(S, { key: 0 }, [E(B(a.label), 1)], 64)),
        ]),
      ],
      2,
    )
  )
}
const N5 = _(Z5, [
    ['render', T5],
    ['__scopeId', 'data-v-b50043c3'],
    [
      '__file',
      'C:/Users/Jannik/Desktop/Versakit/packages/ui/components/radio/src/index.vue',
    ],
  ]),
  E5 = q(N5),
  D5 = p({
    name: 'VerMessage',
    __name: 'index',
    props: {
      id: { type: null, required: !1 },
      type: { type: null, required: !1, default: 'info' },
      content: { type: String, required: !1, default: '' },
      duration: { type: Number, required: !1, default: 0 },
      plain: { type: Boolean, required: !1, default: !1 },
      offset: { type: Number, required: !1, default: 25 },
      destroy: { type: Function, required: !1, default: () => {} },
    },
    setup(e, { expose: i }) {
      const a = g(!1),
        l = e,
        o = g(0),
        s = f(() => R5(l.id)),
        r = f(() => l.offset + s.value),
        h = f(() => o.value + r.value),
        v = f(() => ({ top: r.value + 'px' })),
        u = f(() => {
          switch (l.type) {
            case 'success':
              return '#4ade80'
            case 'warning':
              return 'orange'
            case 'error':
              return 'red'
            default:
              return 'gray'
          }
        }),
        M = f(() => {
          switch (l.type) {
            case 'success':
              return 'check-circle-fill'
            case 'warning':
              return 'exclamation-triangle-fill'
            case 'error':
              return 'x-circle-fill'
            default:
              return 'info-circle-fill'
          }
        }),
        z = f(() => [
          'ver-message',
          l.type == 'info' ? '' : `ver-message-${l.type}`,
          l.plain == !1 ? '' : `ver-message-${l.type}-plain`,
        ])
      D(() => {
        ;(a.value = !0),
          setTimeout(() => {
            a.value = !1
          }, l.duration)
      }),
        i({ bottomOffset: h })
      const C = {
        isVisable: a,
        props: l,
        height: o,
        lastOffset: s,
        topOffset: r,
        bottomOffset: h,
        cssStyle: v,
        iconColor: u,
        iconName: M,
        VerClass: z,
        get VerIcon() {
          return J
        },
      }
      return (
        Object.defineProperty(C, '__isScriptSetup', {
          enumerable: !1,
          value: !0,
        }),
        C
      )
    },
  }),
  O5 = { class: 'text' }
function U5(e, i, a, l, o, s) {
  return (
    c(),
    A(
      G,
      { name: 'down', onAfterLeave: a.destroy, persisted: '' },
      {
        default: b(() => [
          K(
            n(
              'div',
              { class: H(l.VerClass), style: I(l.cssStyle) },
              [
                V(
                  l.VerIcon,
                  { color: l.iconColor, name: l.iconName },
                  null,
                  8,
                  ['color', 'name'],
                ),
                n('span', O5, B(a.content), 1),
              ],
              6,
            ),
            [[a0, l.isVisable]],
          ),
        ]),
        _: 1,
      },
      8,
      ['onAfterLeave'],
    )
  )
}
const Q5 = _(D5, [
    ['render', U5],
    ['__scopeId', 'data-v-07a73df1'],
    [
      '__file',
      'C:/Users/Jannik/Desktop/Versakit/packages/ui/components/message/src/index.vue',
    ],
  ]),
  o0 = P0([])
let F5 = 1
const J5 = ({ type: e, content: i, plain: a, duration: l = 3e3 }) => {
    const o = `message_${F5++}`,
      s = document.createElement('div'),
      r = {
        type: e,
        content: i,
        plain: a,
        duration: l,
        id: o,
        destroy: () => {
          const M = o0.findIndex((z) => z.id === o)
          M !== -1 && (o0.splice(M, 1), t0(null, s))
        },
      },
      h = I0(Q5, r)
    t0(h, s), document.body.appendChild(s.firstElementChild)
    const v = h.component,
      u = { id: o, vnode: h, vm: v, props: r }
    return o0.push(u), u
  },
  R5 = (e) => {
    const i = o0.findIndex((a) => a.id === e)
    return i <= 0 ? 0 : o0[i - 1].vm.exposed.bottomOffset.value + 50
  },
  fl = q(J5),
  G5 = p({
    name: 'VerTextArea',
    __name: 'index',
    props: {
      disabled: { type: Boolean, required: !1, default: !1 },
      placeholder: { type: String, required: !1, default: '' },
      modelValue: { type: String, required: !1, default: '' },
      maxlength: { type: null, required: !1, default: void 0 },
    },
    emits: ['update:modelValue', 'input'],
    setup(e, { expose: i, emit: a }) {
      var l
      i()
      const o = e,
        s = g(((l = o.modelValue) == null ? void 0 : l.length) || 0),
        r = g(),
        h = a,
        v = () => {
          h('update:modelValue', r.value.value),
            (s.value = r.value.value.length)
        },
        u = f(() => ['ver-textarea', o.disabled == !1 ? '' : 'is-disabled']),
        M = { props: o, n: s, textareaRef: r, emit: h, input: v, tClass: u }
      return (
        Object.defineProperty(M, '__isScriptSetup', {
          enumerable: !1,
          value: !0,
        }),
        M
      )
    },
  }),
  W5 = ['disabled', 'placeholder', 'maxlength', 'value'],
  K5 = { key: 0, class: 'maxlength-box' }
function X5(e, i, a, l, o, s) {
  return (
    c(),
    t(
      'div',
      { class: H(l.tClass) },
      [
        n(
          'textarea',
          {
            ref: 'textareaRef',
            disabled: l.props.disabled,
            placeholder: a.placeholder,
            maxlength: a.maxlength,
            value: a.modelValue,
            onInput: l.input,
          },
          null,
          40,
          W5,
        ),
        a.maxlength != null && a.maxlength > 0
          ? (c(), t('div', K5, B(`${l.n}/${a.maxlength}`), 1))
          : y('v-if', !0),
      ],
      2,
    )
  )
}
const Y5 = _(G5, [
    ['render', X5],
    ['__scopeId', 'data-v-314a872f'],
    [
      '__file',
      'C:/Users/Jannik/Desktop/Versakit/packages/ui/components/textarea/src/index.vue',
    ],
  ]),
  a2 = q(Y5),
  l2 = p({
    name: 'VerContainer',
    __name: 'index',
    props: { direction: { type: String, required: !0, default: 'row' } },
    setup(e, { expose: i }) {
      i()
      const a = e,
        l = { 'flex-direction': a.direction },
        o = { props: a, style: l }
      return (
        Object.defineProperty(o, '__isScriptSetup', {
          enumerable: !1,
          value: !0,
        }),
        o
      )
    },
  })
function i2(e, i, a, l, o, s) {
  return (
    c(),
    t('section', { class: 'ver-container', style: l.style }, [
      d(e.$slots, 'default', {}, void 0, !0),
    ])
  )
}
const o2 = _(l2, [
    ['render', i2],
    ['__scopeId', 'data-v-05f18007'],
    [
      '__file',
      'C:/Users/Jannik/Desktop/Versakit/packages/ui/components/container/src/index.vue',
    ],
  ]),
  e2 = q(o2),
  s2 = p({
    name: 'VerHeader',
    __name: 'index',
    setup(e, { expose: i }) {
      i()
      const a = {}
      return (
        Object.defineProperty(a, '__isScriptSetup', {
          enumerable: !1,
          value: !0,
        }),
        a
      )
    },
  }),
  c2 = { class: 'ver-header' }
function r2(e, i, a, l, o, s) {
  return c(), t('header', c2, [d(e.$slots, 'default', {}, void 0, !0)])
}
const t2 = _(s2, [
    ['render', r2],
    ['__scopeId', 'data-v-5c84cd81'],
    [
      '__file',
      'C:/Users/Jannik/Desktop/Versakit/packages/ui/components/header/src/index.vue',
    ],
  ]),
  h2 = q(t2),
  n2 = p({
    name: 'VerMain',
    __name: 'index',
    setup(e, { expose: i }) {
      i()
      const a = {}
      return (
        Object.defineProperty(a, '__isScriptSetup', {
          enumerable: !1,
          value: !0,
        }),
        a
      )
    },
  }),
  v2 = { class: 'ver-main' }
function d2(e, i, a, l, o, s) {
  return c(), t('main', v2, [d(e.$slots, 'default', {}, void 0, !0)])
}
const m2 = _(n2, [
    ['render', d2],
    ['__scopeId', 'data-v-843ea6c9'],
    [
      '__file',
      'C:/Users/Jannik/Desktop/Versakit/packages/ui/components/main/src/index.vue',
    ],
  ]),
  b2 = q(m2),
  u2 = p({
    name: 'VerNotifivation',
    __name: 'index',
    props: {
      id: { type: null, required: !1 },
      type: { type: null, required: !1, default: 'info' },
      title: { type: String, required: !1, default: '' },
      plain: { type: Boolean, required: !1, default: !1 },
      content: { type: String, required: !1, default: '' },
      offset: { type: [Number, String], required: !1, default: 25 },
      duration: { type: Number, required: !1, default: 3e3 },
      position: { type: String, required: !1, default: 'top-right' },
      destroy: { type: Function, required: !1, default: () => {} },
    },
    setup(e, { expose: i }) {
      const a = e,
        l = g(0),
        o = f(() => C2(a.id)),
        s = f(() => a.offset + o.value),
        r = f(() => l.value + s.value),
        h = f(() => {
          switch (a.type) {
            case 'success':
              return '#4ade80'
            case 'warning':
              return 'orange'
            case 'error':
              return 'red'
            default:
              return 'gray'
          }
        }),
        v = f(() => {
          switch (a.type) {
            case 'success':
              return 'check-circle-fill'
            case 'warning':
              return 'exclamation-triangle-fill'
            case 'error':
              return 'x-circle-fill'
            default:
              return 'info-circle-fill'
          }
        }),
        u = f(() => {
          const w = {}
          switch (a.position) {
            case 'top-right':
              return {
                ...w,
                position: 'fixed',
                top: s.value + 'px',
                right: '20px',
              }
            case 'top-left':
              return {
                ...w,
                position: 'fixed',
                top: s.value + 'px',
                left: '20px',
              }
            case 'bottom-right':
              return {
                ...w,
                position: 'fixed',
                bottom: r.value + 'px',
                right: '20px',
              }
            case 'bottom-left':
              return {
                ...w,
                position: 'fixed',
                bottom: r.value + 'px',
                left: '20px',
              }
            default:
              return w
          }
        }),
        M = g(!1),
        z = () => {
          M.value = !1
        },
        C = f(() => [
          'ver-notification',
          a.plain == !1 ? '' : `ver-notification-${a.type}-plain`,
        ])
      D(() => {
        ;(M.value = !0),
          setTimeout(() => {
            M.value = !1
          }, a.duration)
      }),
        i({ bottomOffset: r })
      const L = {
        props: a,
        height: l,
        lastOffset: o,
        topOffset: s,
        bottomOffset: r,
        iconColor: h,
        iconName: v,
        positionStyle: u,
        isVisable: M,
        handClose: z,
        VerClass: C,
        get VerIcon() {
          return J
        },
      }
      return (
        Object.defineProperty(L, '__isScriptSetup', {
          enumerable: !1,
          value: !0,
        }),
        L
      )
    },
  }),
  p2 = { class: 'ver-notification-top' },
  f2 = { class: 'ver-notification-title' },
  y2 = { class: 'ver-notification-content' }
function M2(e, i, a, l, o, s) {
  return (
    c(),
    A(
      G,
      { name: 'slide-fade', onAfterLeave: l.props.destroy, persisted: '' },
      {
        default: b(() => [
          K(
            n(
              'div',
              { class: H(l.VerClass), style: I(l.positionStyle) },
              [
                n('div', p2, [
                  V(
                    l.VerIcon,
                    { size: 25, color: l.iconColor, name: l.iconName },
                    null,
                    8,
                    ['color', 'name'],
                  ),
                  n('h2', f2, B(a.title), 1),
                ]),
                n('div', y2, [n('span', null, B(a.content), 1)]),
                n(
                  'div',
                  { class: 'ver-notification-closebtn', onClick: l.handClose },
                  [V(l.VerIcon, { name: 'cross' })],
                ),
              ],
              6,
            ),
            [[a0, l.isVisable]],
          ),
        ]),
        _: 1,
      },
      8,
      ['onAfterLeave'],
    )
  )
}
const z2 = _(u2, [
    ['render', M2],
    ['__scopeId', 'data-v-ff8b07c1'],
    [
      '__file',
      'C:/Users/Jannik/Desktop/Versakit/packages/ui/components/notification/src/index.vue',
    ],
  ]),
  e0 = P0([])
let V2 = 1
const H2 = ({
    type: e,
    title: i,
    content: a,
    plain: l,
    position: o,
    duration: s = 3e3,
  }) => {
    const r = `message_${V2++}`,
      h = document.createElement('div'),
      v = {
        type: e,
        title: i,
        plain: l,
        content: a,
        position: o,
        duration: s,
        destroy: () => {
          const C = e0.findIndex((L) => L.id === r)
          C !== -1 && (e0.splice(C, 1), t0(null, h))
        },
        id: r,
      },
      u = I0(z2, v)
    t0(u, h), document.body.appendChild(h.firstElementChild)
    const M = u.component,
      z = { id: r, vnode: u, vm: M, props: v }
    return e0.push(z), z
  },
  C2 = (e) => {
    const i = e0.findIndex((a) => a.id === e)
    return i <= 0 ? 0 : e0[i - 1].vm.exposed.bottomOffset.value + 70
  },
  yl = q(H2),
  A2 = p({
    name: 'VerTab',
    __name: 'index',
    props: { tabList: { type: Array, required: !1, default: () => [] } },
    setup(e, { expose: i }) {
      i()
      const a = e,
        l = g(0),
        o = {
          props: a,
          currentTabIndex: l,
          switchTab: (s) => {
            l.value = s
          },
        }
      return (
        Object.defineProperty(o, '__isScriptSetup', {
          enumerable: !1,
          value: !0,
        }),
        o
      )
    },
  }),
  w2 = { class: 'ver-tab' },
  x2 = { class: 'tab-header' },
  L2 = ['onClick'],
  B2 = { class: 'tab-label' }
function g2(e, i, a, l, o, s) {
  return (
    c(),
    t('div', w2, [
      n('div', x2, [
        (c(!0),
        t(
          S,
          null,
          j(
            l.props.tabList,
            (r, h) => (
              c(),
              t(
                'div',
                {
                  key: r.id,
                  class: H([
                    'tab-item',
                    { 'active-tab': l.currentTabIndex === h },
                  ]),
                  onClick: (v) => l.switchTab(h),
                },
                [n('span', B2, B(r.label), 1)],
                10,
                L2,
              )
            ),
          ),
          128,
        )),
      ]),
      (c(),
      t(
        'div',
        {
          class: 'tab-content',
          key: `tab-content-${l.props.tabList[l.currentTabIndex].name}`,
        },
        [d(e.$slots, l.props.tabList[l.currentTabIndex].name, {}, void 0, !0)],
      )),
    ])
  )
}
const k2 = _(A2, [
    ['render', g2],
    ['__scopeId', 'data-v-0f852bbb'],
    [
      '__file',
      'C:/Users/Jannik/Desktop/Versakit/packages/ui/components/tab/src/index.vue',
    ],
  ]),
  q2 = q(k2),
  _2 = p({
    __name: 'index',
    props: {
      right: { type: String, required: !1, default: '60' },
      bottom: { type: String, required: !1, default: '40' },
      visibleHeight: { type: String, required: !1 },
      icon: { type: String, required: !1, default: '' },
      iconColor: { type: String, required: !1, default: '#8b5cf6' },
      visibilityHeight: { type: String, required: !1, default: '150' },
    },
    setup(e, { expose: i }) {
      i()
      const a = e,
        l = f(() => a.iconColor || '#8b5cf6'),
        o = f(() => [
          'ver-backTop',
          a.visibleHeight ? `is-visibleHeight-${a.visibleHeight}` : '',
        ]),
        s = f(() => ({ right: `${a.right}px`, bottom: `${a.bottom}px` })),
        r = h0(null),
        h = h0(),
        v = g(!0),
        u = () => {
          var L
          ;(L = r.value) == null || L.scrollTo({ top: 0, behavior: 'smooth' })
        },
        M = () => {
          r.value &&
            (v.value = r.value.scrollTop >= parseInt(a.visibilityHeight))
        },
        z = (L, w) => {
          let k = null
          k ||
            (L(),
            (k = window.setTimeout(() => {
              k = null
            }, w)))
        }
      D(() => {
        ;(h.value = document),
          (r.value = document.documentElement),
          M(),
          h.value.addEventListener('scroll', () => {
            z(M, 300)
          })
      })
      const C = {
        props: a,
        iconColor: l,
        Verclass: o,
        backTopStyle: s,
        el: r,
        container: h,
        visible: v,
        handleClick: u,
        handleScroll: M,
        throttle: z,
        get VerIcon() {
          return J
        },
      }
      return (
        Object.defineProperty(C, '__isScriptSetup', {
          enumerable: !1,
          value: !0,
        }),
        C
      )
    },
  }),
  $2 = { key: 1 }
function S2(e, i, a, l, o, s) {
  return l.visible
    ? (c(),
      t(
        'div',
        {
          key: 0,
          class: H(l.Verclass),
          style: I(l.backTopStyle),
          onClick: v0(l.handleClick, ['stop']),
        },
        [
          a.icon != ''
            ? (c(),
              A(
                l.VerIcon,
                { key: 0, name: a.icon, color: l.iconColor, size: '26' },
                null,
                8,
                ['name', 'color'],
              ))
            : (c(), t('span', $2, [d(e.$slots, 'default', {}, void 0, !0)])),
        ],
        6,
      ))
    : y('v-if', !0)
}
const Z2 = _(_2, [
    ['render', S2],
    ['__scopeId', 'data-v-809c9ab7'],
    [
      '__file',
      'C:/Users/Jannik/Desktop/Versakit/packages/ui/components/backtop/src/index.vue',
    ],
  ]),
  P2 = q(Z2),
  I2 = p({
    name: 'VerResult',
    __name: 'index',
    props: {
      status: { type: String, required: !1, default: 'success' },
      iconName: { type: String, required: !1, default: '' },
    },
    setup(e, { expose: i }) {
      i()
      const a = e,
        l = f(() => {
          switch (a.status) {
            case 'success':
              return ['ver-result', 'is-result-success']
            case 'warning':
              return ['ver-result', 'is-result-warning']
            case 'error':
              return ['ver-result', 'is-result-error']
            case 'info':
              return ['ver-result', 'is-result-info']
            case '403':
              return ['ver-result', 'is-result-403']
            case '404':
              return ['ver-result', 'is-result-404']
            case '500':
              return ['ver-result', 'is-result-500']
            default:
              return ['ver-result', 'is-result-success']
          }
        }),
        o = f(() => {
          switch (a.status) {
            case 'success':
              return '成功'
            case 'warning':
              return '警告'
            case 'error':
              return '错误'
            case 'info':
              return '信息'
            case '403':
              return '403 禁止访问'
            case '404':
              return '404 资源不存在'
            case '500':
              return '500 服务器错误'
            default:
              return ''
          }
        }),
        s = f(() => {
          if (a.iconName) return a.iconName
          switch (a.status) {
            case 'success':
              return 'check-lg'
            case 'warning':
              return 'exclamation-circle-fill'
            case 'error':
              return 'emoji-frown-fill'
            case 'info':
              return 'info-circle-fill'
            case '403':
              return 'ban'
            case '404':
              return 'search'
            case '500':
              return 'server'
            default:
              return 'check-lg'
          }
        }),
        r = f(() => {
          switch (a.status) {
            case 'success':
              return '#28a745'
            case 'warning':
              return '#ffc107'
            case 'error':
              return '#dc3545'
            case 'info':
              return '#17a2b8'
            case '403':
              return '#6c757d'
            case '404':
              return '#fd7e14'
            case '500':
              return '#6610f2'
            default:
              return '#28a745'
          }
        }),
        h = {
          props: a,
          VerClass: l,
          VerContent: o,
          computedIconName: s,
          computedColor: r,
          get VerIcon() {
            return J
          },
        }
      return (
        Object.defineProperty(h, '__isScriptSetup', {
          enumerable: !1,
          value: !0,
        }),
        h
      )
    },
  }),
  j2 = { class: 'result-content' }
function T2(e, i, a, l, o, s) {
  return (
    c(),
    t(
      'div',
      { class: H(l.VerClass) },
      [
        V(
          l.VerIcon,
          { name: l.computedIconName, size: '120', color: l.computedColor },
          null,
          8,
          ['name', 'color'],
        ),
        n('div', j2, [
          d(e.$slots, 'content', {}, () => [E(B(l.VerContent), 1)], !0),
        ]),
      ],
      2,
    )
  )
}
const N2 = _(I2, [
    ['render', T2],
    ['__scopeId', 'data-v-291e3111'],
    [
      '__file',
      'C:/Users/Jannik/Desktop/Versakit/packages/ui/components/result/src/index.vue',
    ],
  ]),
  E2 = q(N2),
  D2 = p({
    name: 'VerEmpty',
    __name: 'index',
    props: {
      iconName: { type: String, required: !1, default: '' },
      content: { type: String, required: !1, default: '你什么也找不到' },
      showDescription: { type: Boolean, required: !1, default: !0 },
      showButton: { type: Boolean, required: !1, default: !0 },
    },
    setup(e, { expose: i }) {
      i()
      const a = e,
        l = f(() => (a.iconName ? a.iconName : 'ban')),
        o = {
          props: a,
          computedIconName: l,
          get VerIcon() {
            return J
          },
          get VerButton() {
            return B0
          },
        }
      return (
        Object.defineProperty(o, '__isScriptSetup', {
          enumerable: !1,
          value: !0,
        }),
        o
      )
    },
  }),
  O2 = { class: 'ver-empty' },
  U2 = { key: 0, class: 'ver-empty__button' }
function Q2(e, i, a, l, o, s) {
  return (
    c(),
    t('div', O2, [
      V(
        l.VerIcon,
        {
          name: l.computedIconName,
          size: '80',
          class: 'ver-empty__icon',
          color: 'c1c1c1',
        },
        null,
        8,
        ['name'],
      ),
      n('div', null, [
        l.props.showDescription
          ? d(
              e.$slots,
              'content',
              { key: 0, class: 'ver-empty__description' },
              () => [E(B(l.props.content), 1)],
            )
          : y('v-if', !0),
      ]),
      a.showButton
        ? (c(),
          t('div', U2, [
            V(
              l.VerButton,
              { ghost: '' },
              { default: b(() => i[0] || (i[0] = [E('看看别的')])), _: 1 },
            ),
          ]))
        : y('v-if', !0),
    ])
  )
}
const F2 = _(D2, [
    ['render', Q2],
    [
      '__file',
      'C:/Users/Jannik/Desktop/Versakit/packages/ui/components/empty/src/index.vue',
    ],
  ]),
  J2 = q(F2),
  R2 = p({
    name: 'VerPanel',
    __name: 'index',
    props: { shadow: { type: String, required: !1, default: 'always' } },
    setup(e, { expose: i }) {
      i()
      const a = e,
        l = f(() => [
          'ver-panel',
          a.shadow === 'always'
            ? 'is-shadow-always'
            : a.shadow === 'hover'
              ? 'is-shadow-hover'
              : 'is-shadow-never',
        ]),
        o = { props: a, classes: l }
      return (
        Object.defineProperty(o, '__isScriptSetup', {
          enumerable: !1,
          value: !0,
        }),
        o
      )
    },
  })
function G2(e, i, a, l, o, s) {
  return (
    c(),
    t(
      'div',
      { class: H(['ver-panel', l.classes]) },
      [d(e.$slots, 'default', {}, void 0, !0)],
      2,
    )
  )
}
const W2 = _(R2, [
    ['render', G2],
    ['__scopeId', 'data-v-bfe039ac'],
    [
      '__file',
      'C:/Users/Jannik/Desktop/Versakit/packages/ui/components/panel/src/index.vue',
    ],
  ]),
  K2 = q(W2),
  X2 = p({
    __name: 'index',
    props: {
      modelValue: { type: [String, Number], required: !0 },
      options: { type: null, required: !1 },
      size: { type: null, required: !1 },
    },
    emits: ['update:modelValue'],
    setup(e, { expose: i, emit: a }) {
      i()
      const l = e,
        o = `segmented-${Math.random().toString(36).slice(2, 11)}`,
        s = g([]),
        r = a,
        h = (z) => {
          r('update:modelValue', z)
        },
        v = f(() => l.options.findIndex((z) => z.value === l.modelValue)),
        u = f(() => {
          if (s.value.length === 0) return {}
          const z = s.value[v.value]
          if (!z) return {}
          let C = 0
          for (let L = 0; L < v.value; L++) {
            const w = s.value[L]
            w && (C += w.offsetWidth)
          }
          return {
            transform: `translateX(${C}px)`,
            width: `${z.offsetWidth}px`,
          }
        })
      D(async () => {
        await d0(),
          (s.value = Array.from(
            document.querySelectorAll(`[data-segmented-id="${o}"]`),
          ))
      })
      const M = {
        props: l,
        componentId: o,
        labelRefs: s,
        emit: r,
        updateValue: h,
        activeIndex: v,
        highlightStyle: u,
      }
      return (
        Object.defineProperty(M, '__isScriptSetup', {
          enumerable: !1,
          value: !0,
        }),
        M
      )
    },
  }),
  Y2 = { class: 'segmented-control' },
  a3 = { class: 'segmented-control-container', role: 'radiogroup' },
  l3 = ['id', 'value', 'checked', 'onChange'],
  i3 = ['for']
function o3(e, i, a, l, o, s) {
  return (
    c(),
    t('div', Y2, [
      n('div', a3, [
        n(
          'div',
          { class: 'segmented-control-highlight', style: I(l.highlightStyle) },
          null,
          4,
        ),
        (c(!0),
        t(
          S,
          null,
          j(
            a.options,
            (r, h) => (
              c(),
              t('div', { key: r.value, class: 'segmented-control-item' }, [
                n(
                  'input',
                  {
                    type: 'radio',
                    id: `${l.componentId}-${h}`,
                    name: l.componentId,
                    value: r.value,
                    checked: a.modelValue === r.value,
                    onChange: (v) => l.updateValue(r.value),
                  },
                  null,
                  40,
                  l3,
                ),
                n(
                  'label',
                  {
                    for: `${l.componentId}-${h}`,
                    'data-segmented-id': l.componentId,
                    ref_for: !0,
                    ref: 'labelRefs',
                  },
                  B(r.label),
                  9,
                  i3,
                ),
              ])
            ),
          ),
          128,
        )),
      ]),
    ])
  )
}
const e3 = _(X2, [
    ['render', o3],
    ['__scopeId', 'data-v-a288916d'],
    [
      '__file',
      'C:/Users/Jannik/Desktop/Versakit/packages/ui/components/segmented/src/index.vue',
    ],
  ]),
  s3 = q(e3),
  c3 = p({
    __name: 'index',
    props: {
      type: { type: String, required: !1, default: 'error' },
      size: { type: [String, Number], required: !1, default: 'md' },
      gradient: {
        type: Object,
        required: !1,
        default: () => ({ rotate: 0, start: '', end: '' }),
      },
    },
    setup(e, { expose: i }) {
      i()
      const a = e,
        l = f(() => {
          if (typeof a.size == 'number') return `${a.size}px`
          switch (a.size) {
            case 'xs':
              return '12px'
            case 'sm':
              return '14px'
            case 'lg':
              return '18px'
            default:
              return '16px'
          }
        }),
        o = f(() => ({
          fontSize: l.value,
          backgroundImage: `linear-gradient(
    ${a.gradient.rotate}deg,
    ${a.gradient.start},
    ${a.gradient.end}
  )`,
        })),
        s = { props: a, textSize: l, style: o }
      return (
        Object.defineProperty(s, '__isScriptSetup', {
          enumerable: !1,
          value: !0,
        }),
        s
      )
    },
  })
function r3(e, i, a, l, o, s) {
  return (
    c(),
    t(
      'div',
      { class: H(['ver-gradient-text', l.props.type]), style: I(l.style) },
      [d(e.$slots, 'default')],
      6,
    )
  )
}
const t3 = _(c3, [
    ['render', r3],
    [
      '__file',
      'C:/Users/Jannik/Desktop/Versakit/packages/ui/components/gradienttext/src/index.vue',
    ],
  ]),
  h3 = q(t3),
  n3 = p({
    name: 'VerFooter',
    __name: 'index',
    setup(e, { expose: i }) {
      i()
      const a = {}
      return (
        Object.defineProperty(a, '__isScriptSetup', {
          enumerable: !1,
          value: !0,
        }),
        a
      )
    },
  }),
  v3 = { class: 'ver-footer' }
function d3(e, i, a, l, o, s) {
  return c(), t('footer', v3, [d(e.$slots, 'default', {}, void 0, !0)])
}
const m3 = _(n3, [
    ['render', d3],
    ['__scopeId', 'data-v-d63ef56a'],
    [
      '__file',
      'C:/Users/Jannik/Desktop/Versakit/packages/ui/components/footer/src/index.vue',
    ],
  ]),
  b3 = q(m3),
  u3 = p({
    name: 'VerAside',
    __name: 'index',
    props: { width: { type: String, required: !1, default: '300px' } },
    setup(e, { expose: i }) {
      i()
      const a = { props: e }
      return (
        Object.defineProperty(a, '__isScriptSetup', {
          enumerable: !1,
          value: !0,
        }),
        a
      )
    },
  })
function p3(e, i, a, l, o, s) {
  return (
    c(),
    t(
      'aside',
      { class: 'ver-aside', style: I({ width: l.props.width }) },
      [d(e.$slots, 'default', {}, void 0, !0)],
      4,
    )
  )
}
const f3 = _(u3, [
    ['render', p3],
    ['__scopeId', 'data-v-c35f7103'],
    [
      '__file',
      'C:/Users/Jannik/Desktop/Versakit/packages/ui/components/aside/src/index.vue',
    ],
  ]),
  y3 = q(f3),
  M3 = p({
    __name: 'index',
    props: {
      type: { type: String, required: !1, default: 'line' },
      percent: { type: Number, required: !0 },
      animation: { type: Boolean, required: !1, default: !1 },
      isShowText: { type: Boolean, required: !1, default: !0 },
      status: { type: String, required: !1, default: 'normal' },
    },
    setup(e, { expose: i }) {
      i()
      const a = {
        statusColor: {
          normal: '#1890ff',
          success: '#52c41a',
          error: '#ff4d4f',
        },
      }
      return (
        Object.defineProperty(a, '__isScriptSetup', {
          enumerable: !1,
          value: !0,
        }),
        a
      )
    },
  }),
  z3 = { class: 'progress' },
  V3 = { key: 0, class: 'progress-line' },
  H3 = { viewBox: '0 0 100 100' },
  C3 = ['stroke', 'stroke-dasharray']
function A3(e, i, a, l, o, s) {
  return (
    c(),
    t('div', z3, [
      a.type === 'line'
        ? (c(),
          t('div', V3, [
            n(
              'div',
              {
                class: H([
                  'progress-line-outer',
                  { 'with-animation': a.animation },
                ]),
              },
              [
                n(
                  'div',
                  {
                    class: 'progress-line-inner',
                    style: I({
                      width: `${a.percent}%`,
                      backgroundColor: l.statusColor[a.status],
                    }),
                  },
                  null,
                  4,
                ),
              ],
              2,
            ),
            a.isShowText
              ? (c(),
                t(
                  'span',
                  {
                    key: 0,
                    class: H([
                      'progress-text',
                      { 'with-animation': a.animation },
                    ]),
                    style: I({ color: l.statusColor[a.status] }),
                  },
                  B(a.percent) + '% ',
                  7,
                ))
              : y('v-if', !0),
          ]))
        : (c(),
          t(
            'div',
            {
              key: 1,
              class: H(['progress-circle', { 'with-animation': a.animation }]),
            },
            [
              (c(),
              t('svg', H3, [
                i[0] ||
                  (i[0] = n(
                    'circle',
                    {
                      class: 'progress-circle-background',
                      cx: '50',
                      cy: '50',
                      r: '45',
                      fill: 'none',
                    },
                    null,
                    -1,
                  )),
                n(
                  'circle',
                  {
                    class: 'progress-circle-bar',
                    cx: '50',
                    cy: '50',
                    r: '45',
                    fill: 'none',
                    stroke: l.statusColor[a.status],
                    'stroke-dasharray': `${a.percent * 2.83}, 283`,
                  },
                  null,
                  8,
                  C3,
                ),
              ])),
              a.isShowText
                ? (c(),
                  t(
                    'span',
                    {
                      key: 0,
                      class: H([
                        'progress-circle-text',
                        { 'with-animation': a.animation },
                      ]),
                      style: I({ color: l.statusColor[a.status] }),
                    },
                    B(a.percent) + '% ',
                    7,
                  ))
                : y('v-if', !0),
            ],
            2,
          )),
    ])
  )
}
const w3 = _(M3, [
    ['render', A3],
    ['__scopeId', 'data-v-1fd2aff1'],
    [
      '__file',
      'C:/Users/Jannik/Desktop/Versakit/packages/ui/components/progress/src/index.vue',
    ],
  ]),
  x3 = q(w3),
  L3 = p({
    name: 'VerTooltip',
    __name: 'index',
    props: {
      content: { type: String, required: !0 },
      position: { type: String, required: !1, default: 'top' },
      color: { type: String, required: !1, default: '#fff' },
      backgroundColor: { type: String, required: !1, default: '#333' },
    },
    setup(e, { expose: i }) {
      i()
      const a = e,
        l = g(null),
        o = g(null),
        s = g(!1),
        r = () => {
          if (!l.value || !o.value) return
          const v = l.value.getBoundingClientRect(),
            u = o.value,
            M = {
              top: {
                top: -u.offsetHeight - 8,
                left: (v.width - u.offsetWidth) / 2,
              },
              'top-left': { top: -u.offsetHeight - 8, left: 0 },
              'top-right': {
                top: -u.offsetHeight - 8,
                left: v.width - u.offsetWidth,
              },
              bottom: {
                top: v.height + 8,
                left: (v.width - u.offsetWidth) / 2,
              },
              'bottom-left': { top: v.height + 8, left: 0 },
              'bottom-right': {
                top: v.height + 8,
                left: v.width - u.offsetWidth,
              },
              left: {
                top: (v.height - u.offsetHeight) / 2,
                left: -u.offsetWidth - 8,
              },
              'left-top': { top: 0, left: -u.offsetWidth - 8 },
              'left-bottom': {
                top: v.height - u.offsetHeight,
                left: -u.offsetWidth - 8,
              },
              right: {
                top: (v.height - u.offsetHeight) / 2,
                left: v.width + 8,
              },
              'right-top': { top: 0, left: v.width + 8 },
              'right-bottom': {
                top: v.height - u.offsetHeight,
                left: v.width + 8,
              },
            }[a.position]
          ;(u.style.top = `${M.top}px`), (u.style.left = `${M.left}px`)
        }
      D(() => {
        window.addEventListener('resize', r)
      }),
        j0(() => {
          window.removeEventListener('resize', r)
        })
      const h = {
        props: a,
        tooltipRef: l,
        contentRef: o,
        showTooltip: s,
        updatePosition: r,
      }
      return (
        Object.defineProperty(h, '__isScriptSetup', {
          enumerable: !1,
          value: !0,
        }),
        h
      )
    },
  })
function B3(e, i, a, l, o, s) {
  return (
    c(),
    t(
      'div',
      {
        ref: 'tooltipRef',
        class: 'tooltip',
        onMouseenter: i[0] || (i[0] = (r) => (l.showTooltip = !0)),
        onMouseleave: i[1] || (i[1] = (r) => (l.showTooltip = !1)),
      },
      [
        d(e.$slots, 'default', {}, void 0, !0),
        V(
          G,
          { name: 'tooltip', onEnter: l.updatePosition, persisted: '' },
          {
            default: b(() => [
              K(
                n(
                  'div',
                  {
                    ref: 'contentRef',
                    class: H(['tooltip-content', a.position]),
                    style: I({
                      color: a.color,
                      backgroundColor: a.backgroundColor,
                      '--bg-color': a.backgroundColor,
                    }),
                  },
                  B(a.content),
                  7,
                ),
                [[a0, l.showTooltip]],
              ),
            ]),
            _: 1,
          },
        ),
      ],
      544,
    )
  )
}
const g3 = _(L3, [
    ['render', B3],
    ['__scopeId', 'data-v-f7a9491a'],
    [
      '__file',
      'C:/Users/Jannik/Desktop/Versakit/packages/ui/components/tooltip/src/index.vue',
    ],
  ]),
  k3 = q(g3),
  q3 = p({
    __name: 'index',
    props: {
      modelValue: { type: Number, required: !0 },
      min: { type: Number, required: !1, default: 0 },
      max: { type: Number, required: !1, default: 100 },
      step: { type: Number, required: !1, default: 1 },
      disabled: { type: Boolean, required: !1, default: !1 },
      showValue: { type: Boolean, required: !1, default: !1 },
    },
    emits: ['update:modelValue', 'change'],
    setup(e, { expose: i, emit: a }) {
      i()
      const l = e,
        o = a,
        s = g(!1),
        r = g(null),
        h = (P) => {
          const T = Math.round((P - l.min) / l.step) * l.step + l.min
          return Math.max(l.min, Math.min(l.max, T))
        }
      U(
        () => l.modelValue,
        (P) => {
          const T = h(P)
          T !== P && o('update:modelValue', T)
        },
        { immediate: !0 },
      )
      const v = f(() => ((h(l.modelValue) - l.min) / (l.max - l.min)) * 100),
        u = (P) => {
          if (l.disabled || !r.value) return
          const T = r.value.getBoundingClientRect()
          let Q =
            (('touches' in P ? P.touches[0].clientX : P.clientX) - T.left) /
            T.width
          Q = Math.max(0, Math.min(1, Q))
          const i0 = l.min + Q * (l.max - l.min),
            X = h(i0)
          X !== l.modelValue && (o('update:modelValue', X), o('change', X))
        },
        M = (P) => {
          l.disabled ||
            (P.preventDefault(),
            (s.value = !0),
            u(P),
            window.addEventListener('mousemove', z),
            window.addEventListener('mouseup', C))
        },
        z = (P) => {
          s.value && (P.preventDefault(), u(P))
        },
        C = () => {
          s.value &&
            ((s.value = !1),
            window.removeEventListener('mousemove', z),
            window.removeEventListener('mouseup', C))
        },
        L = (P) => {
          l.disabled ||
            (P.preventDefault(),
            (s.value = !0),
            u(P),
            window.addEventListener('touchmove', w, { passive: !1 }),
            window.addEventListener('touchend', k),
            window.addEventListener('touchcancel', k))
        },
        w = (P) => {
          s.value && (P.preventDefault(), u(P))
        },
        k = () => {
          s.value &&
            ((s.value = !1),
            window.removeEventListener('touchmove', w),
            window.removeEventListener('touchend', k),
            window.removeEventListener('touchcancel', k))
        },
        Z = {
          props: l,
          emit: o,
          isDragging: s,
          sliderRef: r,
          normalizeValue: h,
          percentage: v,
          updateValue: u,
          handleMouseDown: M,
          handleMouseMove: z,
          handleMouseUp: C,
          handleTouchStart: L,
          handleTouchMove: w,
          handleTouchEnd: k,
        }
      return (
        Object.defineProperty(Z, '__isScriptSetup', {
          enumerable: !1,
          value: !0,
        }),
        Z
      )
    },
  }),
  _3 = { key: 0, class: 'slider-tooltip' }
function $3(e, i, a, l, o, s) {
  return (
    c(),
    t(
      'div',
      {
        class: H([
          'slider',
          { 'is-disabled': a.disabled, 'is-dragging': l.isDragging },
        ]),
      },
      [
        n(
          'div',
          {
            ref: 'sliderRef',
            class: 'slider-rail',
            onMousedown: l.handleMouseDown,
            onTouchstart: l.handleTouchStart,
          },
          [
            n(
              'div',
              {
                class: 'slider-track',
                style: I({ width: `${l.percentage}%` }),
              },
              null,
              4,
            ),
            n(
              'div',
              {
                class: 'slider-handle',
                style: I({ left: `${l.percentage}%` }),
              },
              [
                l.isDragging || a.showValue
                  ? (c(), t('div', _3, B(l.normalizeValue(a.modelValue)), 1))
                  : y('v-if', !0),
              ],
              4,
            ),
          ],
          544,
        ),
      ],
      2,
    )
  )
}
const S3 = _(q3, [
    ['render', $3],
    ['__scopeId', 'data-v-17227939'],
    [
      '__file',
      'C:/Users/Jannik/Desktop/Versakit/packages/ui/components/slider/src/index.vue',
    ],
  ]),
  Z3 = q(S3),
  P3 = p({
    __name: 'index',
    props: {
      vertical: { type: Boolean, required: !1, default: !1 },
      wrap: { type: String, required: !1, default: 'nowrap' },
      justify: { type: String, required: !1, default: 'normal' },
      align: { type: String, required: !1, default: 'normal' },
      gap: { type: [Number, Array, String], required: !1, default: 'middle' },
    },
    setup(e, { expose: i }) {
      i()
      const a = e,
        l = f(() => {
          let s
          switch (a.gap) {
            case 'small':
              s = '8px'
              break
            case 'middle':
              s = '16px'
              break
            case 'large':
              s = '24px'
              break
            default:
              typeof a.gap == 'number'
                ? (s = a.gap + 'px')
                : Array.isArray(a.gap) &&
                  (s = a.gap.map((r) => r + 'px').join(' '))
          }
          return s
        }),
        o = { props: a, gap: l }
      return (
        Object.defineProperty(o, '__isScriptSetup', {
          enumerable: !1,
          value: !0,
        }),
        o
      )
    },
  })
function I3(e, i, a, l, o, s) {
  return (
    c(),
    t(
      'div',
      {
        class: H(['ver-flex', { 'ver-flex--vertical': a.vertical }]),
        style: I({
          '--ver-flex-gap': l.gap,
          '--ver-flex-justify': a.justify,
          '--ver-flex-align': a.align,
          '--ver-flex-wrap': a.wrap,
        }),
      },
      [d(e.$slots, 'default')],
      6,
    )
  )
}
const j3 = _(P3, [
    ['render', I3],
    [
      '__file',
      'C:/Users/Jannik/Desktop/Versakit/packages/ui/components/flex/src/index.vue',
    ],
  ]),
  T3 = q(j3),
  N3 = p({
    name: 'VerTable',
    __name: 'index',
    props: {
      data: { type: Array, required: !0, default: () => [] },
      columns: { type: Array, required: !0, default: () => [] },
      border: { type: Boolean, required: !1, default: !1 },
      stripe: { type: Boolean, required: !1, default: !1 },
    },
    setup(e, { expose: i }) {
      i()
      const a = { props: e }
      return (
        Object.defineProperty(a, '__isScriptSetup', {
          enumerable: !1,
          value: !0,
        }),
        a
      )
    },
  }),
  E3 = { class: 'ver-table' },
  D3 = { class: 'ver-table-wrapper' },
  O3 = { class: 'ver-table-header' },
  U3 = { class: 'ver-table-body' }
function Q3(e, i, a, l, o, s) {
  return (
    c(),
    t('div', E3, [
      n('div', D3, [
        n('div', O3, [
          n(
            'div',
            {
              class: H([
                'ver-table-header-row',
                l.props.stripe ? 'is-stripe' : '',
              ]),
            },
            [
              (c(!0),
              t(
                S,
                null,
                j(
                  l.props.columns,
                  (r) => (
                    c(),
                    t(
                      'div',
                      {
                        class: H([
                          'ver-table-header-cell',
                          l.props.border ? 'is-border' : '',
                        ]),
                        key: r.key,
                      },
                      B(r.title),
                      3,
                    )
                  ),
                ),
                128,
              )),
            ],
            2,
          ),
        ]),
        n('div', U3, [
          (c(!0),
          t(
            S,
            null,
            j(
              l.props.data,
              (r) => (
                c(),
                t(
                  'div',
                  {
                    class: H([
                      'ver-table-row',
                      l.props.stripe ? 'is-stripe' : '',
                    ]),
                    key: r.key,
                  },
                  [
                    (c(!0),
                    t(
                      S,
                      null,
                      j(
                        l.props.columns,
                        (h) => (
                          c(),
                          t(
                            'div',
                            {
                              key: h.key,
                              class: H([
                                'ver-table-row-cell',
                                l.props.border ? 'is-border' : '',
                              ]),
                            },
                            B(r[h.dataIndex]),
                            3,
                          )
                        ),
                      ),
                      128,
                    )),
                  ],
                  2,
                )
              ),
            ),
            128,
          )),
        ]),
      ]),
    ])
  )
}
const F3 = _(N3, [
    ['render', Q3],
    ['__scopeId', 'data-v-2816f437'],
    [
      '__file',
      'C:/Users/Jannik/Desktop/Versakit/packages/ui/components/table/src/index.vue',
    ],
  ]),
  J3 = q(F3),
  U0 = Symbol('collapseContextKey'),
  R3 = p({
    name: 'VerCollapse',
    __name: 'index',
    props: {
      modelValue: { type: Array, required: !0 },
      accordion: { type: Boolean, required: !1 },
    },
    emits: ['update:modelValue', 'change'],
    setup(e, { expose: i, emit: a }) {
      i()
      const l = e,
        o = a,
        s = g(l.modelValue)
      U(
        () => l.modelValue,
        () => {
          s.value = l.modelValue
        },
      ),
        l.accordion &&
          s.value.length > 1 &&
          console.warn('accordion mode should only have one acitve item')
      const r = (v) => {
        let u = [...s.value]
        if (l.accordion) (u = [s.value[0] === v ? '' : v]), (s.value = u)
        else {
          const M = u.indexOf(v)
          M > -1 ? u.splice(M, 1) : u.push(v), (s.value = u)
        }
        o('update:modelValue', u), o('change', u)
      }
      m0(U0, { activeNames: s, handleItemClick: r })
      const h = { props: l, emits: o, activeNames: s, handleItemClick: r }
      return (
        Object.defineProperty(h, '__isScriptSetup', {
          enumerable: !1,
          value: !0,
        }),
        h
      )
    },
  }),
  G3 = { class: 'ver-collapse' }
function W3(e, i, a, l, o, s) {
  return c(), t('div', G3, [d(e.$slots, 'default', {}, void 0, !0)])
}
const K3 = _(R3, [
    ['render', W3],
    ['__scopeId', 'data-v-879e9e18'],
    [
      '__file',
      'C:/Users/Jannik/Desktop/Versakit/packages/ui/components/collapse/src/index.vue',
    ],
  ]),
  X3 = p({
    name: 'VerCollapseItem',
    __name: 'item',
    props: {
      name: { type: [String, Number], required: !0 },
      title: { type: String, required: !1 },
      disabled: { type: Boolean, required: !1 },
    },
    setup(e, { expose: i }) {
      i()
      const a = e,
        l = s0(U0),
        o = f(() =>
          l == null ? void 0 : l.activeNames.value.includes(a.name),
        ),
        s = {
          props: a,
          collapseContext: l,
          isActive: o,
          handleClick: () => {
            a.disabled || l == null || l.handleItemClick(a.name)
          },
          transitionEvents: {
            beforeEnter(r) {
              ;(r.style.height = '0px'), (r.style.overflow = 'hidden')
            },
            enter(r) {
              r.style.height = `${r.scrollHeight}px`
            },
            afterEnter(r) {
              ;(r.style.height = ''), (r.style.overflow = '')
            },
            beforeLeave(r) {
              ;(r.style.height = `${r.scrollHeight}px`),
                (r.style.overflow = 'hidden')
            },
            leave(r) {
              r.style.height = '0px'
            },
            afterLeave(r) {
              ;(r.style.height = ''), (r.style.overflow = '')
            },
          },
          get VerIcon() {
            return J
          },
        }
      return (
        Object.defineProperty(s, '__isScriptSetup', {
          enumerable: !1,
          value: !0,
        }),
        s
      )
    },
  }),
  Y3 = ['id'],
  a4 = { class: 'header-angle' },
  l4 = { class: 'ver-collapse-item__wrapper' },
  i4 = ['id']
function o4(e, i, a, l, o, s) {
  return (
    c(),
    t(
      'div',
      { class: H(['ver-collapse-item', { 'is-disabled': a.disabled }]) },
      [
        n(
          'div',
          {
            class: H([
              'ver-collapse-item__header',
              { 'is-disabled': a.disabled, 'is-active': l.isActive },
            ]),
            id: `item-header-${a.name}`,
            onClick: l.handleClick,
          },
          [
            d(e.$slots, 'title', {}, () => [E(B(a.title), 1)], !0),
            n('div', a4, [V(l.VerIcon, { name: 'caret-right-fill' })]),
          ],
          10,
          Y3,
        ),
        V(
          G,
          R({ name: 'slide' }, T0(l.transitionEvents), { persisted: '' }),
          {
            default: b(() => [
              K(
                n(
                  'div',
                  l4,
                  [
                    n(
                      'div',
                      {
                        class: 'ver-collapse-item__content',
                        id: `item-content-${a.name}`,
                      },
                      [d(e.$slots, 'default', {}, void 0, !0)],
                      8,
                      i4,
                    ),
                  ],
                  512,
                ),
                [[a0, l.isActive]],
              ),
            ]),
            _: 3,
          },
          16,
        ),
      ],
      2,
    )
  )
}
const e4 = _(X3, [
    ['render', o4],
    ['__scopeId', 'data-v-70e460b5'],
    [
      '__file',
      'C:/Users/Jannik/Desktop/Versakit/packages/ui/components/collapse/src/item.vue',
    ],
  ]),
  s4 = q(K3),
  c4 = q(e4),
  r4 = {
    mounted(e, i) {
      const { position: a, overflow: l } = getComputedStyle(e)
      a == 'static' && (e.style.position = 'relative'),
        l !== 'hidden' && (e.style.overflow = 'hidden'),
        e.addEventListener('click', function (o) {
          var s, r
          const h = document.createElement('span'),
            v = Math.max(e.offsetWidth, e.offsetHeight) * 2,
            u = (((s = i.value) == null ? void 0 : s.duration) ?? 500) / 1e3,
            M =
              ((r = i.value) == null ? void 0 : r.color) ??
              'rgba(0, 0, 0, .15)',
            { x: z, y: C } = e.getBoundingClientRect(),
            { clientX: L, clientY: w } = o
          ;(h.style.width = v + 'px'),
            (h.style.height = v + 'px'),
            (h.style.position = 'absolute'),
            (h.style.backgroundColor = M),
            (h.style.top = w - C - v / 2 + 'px'),
            (h.style.left = L - z - v / 2 + 'px'),
            (h.style.transform = 'scale(0)'),
            (h.style.transition = `transform ${u}s ease-in, opacity ${u}s ease-in`),
            (h.style.borderRadius = '50%'),
            (h.style.pointerEvents = 'none'),
            e.appendChild(h),
            h.addEventListener('transitionend', function () {
              var k
              ;(k = h.parentElement) == null || k.removeChild(this)
            }),
            requestAnimationFrame(() => {
              ;(h.style.transform = 'scale(1)'), (h.style.opacity = '0')
            })
        })
    },
  }
if (typeof window < 'u') {
  let e = function () {
    var i = document.body,
      a = document.getElementById('__svg__icons__dom__')
    a ||
      ((a = document.createElementNS('http://www.w3.org/2000/svg', 'svg')),
      (a.style.position = 'absolute'),
      (a.style.width = '0'),
      (a.style.height = '0'),
      (a.id = '__svg__icons__dom__'),
      a.setAttribute('xmlns', 'http://www.w3.org/2000/svg'),
      a.setAttribute('xmlns:link', 'http://www.w3.org/1999/xlink')),
      (a.innerHTML =
      i.insertBefore(a, i.lastChild)
  }
  document.readyState === 'loading'
    ? document.addEventListener('DOMContentLoaded', e)
    : e()
}
const S0 = [
    T3,
    Z3,
    k3,
    x3,
    y3,
    b3,
    s4,
    c4,
    B0,
    q1,
    V1,
    x1,
    Z1,
    N1,
    R1,
    s5,
    n5,
    f5,
    K2,
    V5,
    Y1,
    g5,
    S5,
    E5,
    a2,
    e2,
    h2,
    b2,
    q2,
    J,
    P2,
    E2,
    J2,
    s3,
    h3,
    J3,
  ],
  t4 = {
    install: (e) => {
      for (const i in S0) e.component(i, S0[i])
      e.directive('ripple', r4)
    },
  },
  h4 = p({
    __name: 'VPBadge',
    props: { text: {}, type: { default: 'tip' } },
    setup(e) {
      return (i, a) => (
        c(),
        t(
          'span',
          { class: H(['VPBadge', i.type]) },
          [d(i.$slots, 'default', {}, () => [E(B(i.text), 1)])],
          2,
        )
      )
    },
  }),
  n4 = { key: 0, class: 'VPBackdrop' },
  v4 = p({
    __name: 'VPBackdrop',
    props: { show: { type: Boolean } },
    setup(e) {
      return (i, a) => (
        c(),
        A(
          G,
          { name: 'fade' },
          {
            default: b(() => [i.show ? (c(), t('div', n4)) : y('', !0)]),
            _: 1,
          },
        )
      )
    },
  }),
  d4 = x(v4, [['__scopeId', 'data-v-25587554']]),
  $ = N0
function m4(e, i) {
  let a,
    l = !1
  return () => {
    a && clearTimeout(a),
      l
        ? (a = setTimeout(e, i))
        : (e(), (l = !0) && setTimeout(() => (l = !1), i))
  }
}
function C0(e) {
  return /^\//.test(e) ? e : `/${e}`
}
function g0(e) {
  const {
    pathname: i,
    search: a,
    hash: l,
    protocol: o,
  } = new URL(e, 'http://a.com')
  if (Y0(e) || e.startsWith('#') || !o.startsWith('http') || !a1(i)) return e
  const { site: s } = $(),
    r =
      i.endsWith('/') || i.endsWith('.html')
        ? e
        : e.replace(
            /(?:(^\.+)\/)?.*$/,
            `$1${i.replace(/(\.md)?$/, s.value.cleanUrls ? '' : '.html')}${a}${l}`,
          )
  return x0(r)
}
function c0({ correspondingLink: e = !1 } = {}) {
  const { site: i, localeIndex: a, page: l, theme: o, hash: s } = $(),
    r = f(() => {
      var v, u
      return {
        label: (v = i.value.locales[a.value]) == null ? void 0 : v.label,
        link:
          ((u = i.value.locales[a.value]) == null ? void 0 : u.link) ||
          (a.value === 'root' ? '/' : `/${a.value}/`),
      }
    })
  return {
    localeLinks: f(() =>
      Object.entries(i.value.locales).flatMap(([v, u]) =>
        r.value.label === u.label
          ? []
          : {
              text: u.label,
              link:
                b4(
                  u.link || (v === 'root' ? '/' : `/${v}/`),
                  o.value.i18nRouting !== !1 && e,
                  l.value.relativePath.slice(r.value.link.length - 1),
                  !i.value.cleanUrls,
                ) + s.value,
            },
      ),
    ),
    currentLang: r,
  }
}
function b4(e, i, a, l) {
  return i
    ? e.replace(/\/$/, '') +
        C0(
          a
            .replace(/(^|\/)index\.md$/, '$1')
            .replace(/\.md$/, l ? '.html' : ''),
        )
    : e
}
const u4 = { class: 'NotFound' },
  p4 = { class: 'code' },
  f4 = { class: 'title' },
  y4 = { class: 'quote' },
  M4 = { class: 'action' },
  z4 = ['href', 'aria-label'],
  V4 = p({
    __name: 'NotFound',
    setup(e) {
      const { theme: i } = $(),
        { currentLang: a } = c0()
      return (l, o) => {
        var s, r, h, v, u
        return (
          c(),
          t('div', u4, [
            n(
              'p',
              p4,
              B(((s = m(i).notFound) == null ? void 0 : s.code) ?? '404'),
              1,
            ),
            n(
              'h1',
              f4,
              B(
                ((r = m(i).notFound) == null ? void 0 : r.title) ??
                  'PAGE NOT FOUND',
              ),
              1,
            ),
            o[0] || (o[0] = n('div', { class: 'divider' }, null, -1)),
            n(
              'blockquote',
              y4,
              B(
                ((h = m(i).notFound) == null ? void 0 : h.quote) ??
                  "But if you don't change your direction, and if you keep looking, you may end up where you are heading.",
              ),
              1,
            ),
            n('div', M4, [
              n(
                'a',
                {
                  class: 'link',
                  href: m(x0)(m(a).link),
                  'aria-label':
                    ((v = m(i).notFound) == null ? void 0 : v.linkLabel) ??
                    'go to home',
                },
                B(
                  ((u = m(i).notFound) == null ? void 0 : u.linkText) ??
                    'Take me home',
                ),
                9,
                z4,
              ),
            ]),
          ])
        )
      }
    },
  }),
  H4 = x(V4, [['__scopeId', 'data-v-d09902d5']])
function Q0(e, i) {
  if (Array.isArray(e)) return r0(e)
  if (e == null) return []
  i = C0(i)
  const a = Object.keys(e)
      .sort((o, s) => s.split('/').length - o.split('/').length)
      .find((o) => i.startsWith(C0(o))),
    l = a ? e[a] : []
  return Array.isArray(l) ? r0(l) : r0(l.items, l.base)
}
function C4(e) {
  const i = []
  let a = 0
  for (const l in e) {
    const o = e[l]
    if (o.items) {
      a = i.push(o)
      continue
    }
    i[a] || i.push({ items: [] }), i[a].items.push(o)
  }
  return i
}
function A4(e) {
  const i = []
  function a(l) {
    for (const o of l)
      o.text &&
        o.link &&
        i.push({ text: o.text, link: o.link, docFooterText: o.docFooterText }),
        o.items && a(o.items)
  }
  return a(e), i
}
function A0(e, i) {
  return Array.isArray(i)
    ? i.some((a) => A0(e, a))
    : Y(e, i.link)
      ? !0
      : i.items
        ? A0(e, i.items)
        : !1
}
function r0(e, i) {
  return [...e].map((a) => {
    const l = { ...a },
      o = l.base || i
    return (
      o && l.link && (l.link = o + l.link),
      l.items && (l.items = r0(l.items, o)),
      l
    )
  })
}
function W() {
  const { frontmatter: e, page: i, theme: a } = $(),
    l = H0('(min-width: 960px)'),
    o = g(!1),
    s = f(() => {
      const k = a.value.sidebar,
        Z = i.value.relativePath
      return k ? Q0(k, Z) : []
    }),
    r = g(s.value)
  U(s, (k, Z) => {
    JSON.stringify(k) !== JSON.stringify(Z) && (r.value = s.value)
  })
  const h = f(
      () =>
        e.value.sidebar !== !1 &&
        r.value.length > 0 &&
        e.value.layout !== 'home',
    ),
    v = f(() =>
      u
        ? e.value.aside == null
          ? a.value.aside === 'left'
          : e.value.aside === 'left'
        : !1,
    ),
    u = f(() =>
      e.value.layout === 'home'
        ? !1
        : e.value.aside != null
          ? !!e.value.aside
          : a.value.aside !== !1,
    ),
    M = f(() => h.value && l.value),
    z = f(() => (h.value ? C4(r.value) : []))
  function C() {
    o.value = !0
  }
  function L() {
    o.value = !1
  }
  function w() {
    o.value ? L() : C()
  }
  return {
    isOpen: o,
    sidebar: r,
    sidebarGroups: z,
    hasSidebar: h,
    hasAside: u,
    leftAside: v,
    isSidebarEnabled: M,
    open: C,
    close: L,
    toggle: w,
  }
}
function w4(e, i) {
  let a
  b0(() => {
    a = e.value ? document.activeElement : void 0
  }),
    D(() => {
      window.addEventListener('keyup', l)
    }),
    u0(() => {
      window.removeEventListener('keyup', l)
    })
  function l(o) {
    o.key === 'Escape' && e.value && (i(), a == null || a.focus())
  }
}
function x4(e) {
  const { page: i, hash: a } = $(),
    l = g(!1),
    o = f(() => e.value.collapsed != null),
    s = f(() => !!e.value.link),
    r = g(!1),
    h = () => {
      r.value = Y(i.value.relativePath, e.value.link)
    }
  U([i, e, a], h), D(h)
  const v = f(() =>
      r.value
        ? !0
        : e.value.items
          ? A0(i.value.relativePath, e.value.items)
          : !1,
    ),
    u = f(() => !!(e.value.items && e.value.items.length))
  b0(() => {
    l.value = !!(o.value && e.value.collapsed)
  }),
    L0(() => {
      ;(r.value || v.value) && (l.value = !1)
    })
  function M() {
    o.value && (l.value = !l.value)
  }
  return {
    collapsed: l,
    collapsible: o,
    isLink: s,
    isActiveLink: r,
    hasActiveLink: v,
    hasChildren: u,
    toggle: M,
  }
}
function L4() {
  const { hasSidebar: e } = W(),
    i = H0('(min-width: 960px)'),
    a = H0('(min-width: 1280px)')
  return {
    isAsideEnabled: f(() =>
      !a.value && !i.value ? !1 : e.value ? a.value : i.value,
    ),
  }
}
const w0 = []
function F0(e) {
  return (
    (typeof e.outline == 'object' &&
      !Array.isArray(e.outline) &&
      e.outline.label) ||
    e.outlineTitle ||
    'On this page'
  )
}
function k0(e) {
  const i = [...document.querySelectorAll('.VPDoc :where(h1,h2,h3,h4,h5,h6)')]
    .filter((a) => a.id && a.hasChildNodes())
    .map((a) => {
      const l = Number(a.tagName[1])
      return { element: a, title: B4(a), link: '#' + a.id, level: l }
    })
  return g4(i, e)
}
function B4(e) {
  let i = ''
  for (const a of e.childNodes)
    if (a.nodeType === 1) {
      if (
        a.classList.contains('VPBadge') ||
        a.classList.contains('header-anchor') ||
        a.classList.contains('ignore-header')
      )
        continue
      i += a.textContent
    } else a.nodeType === 3 && (i += a.textContent)
  return i.trim()
}
function g4(e, i) {
  if (i === !1) return []
  const a = (typeof i == 'object' && !Array.isArray(i) ? i.level : i) || 2,
    [l, o] = typeof a == 'number' ? [a, a] : a === 'deep' ? [2, 6] : a
  return _4(e, l, o)
}
function k4(e, i) {
  const { isAsideEnabled: a } = L4(),
    l = m4(s, 100)
  let o = null
  D(() => {
    requestAnimationFrame(s), window.addEventListener('scroll', l)
  }),
    l1(() => {
      r(location.hash)
    }),
    u0(() => {
      window.removeEventListener('scroll', l)
    })
  function s() {
    if (!a.value) return
    const h = window.scrollY,
      v = window.innerHeight,
      u = document.body.offsetHeight,
      M = Math.abs(h + v - u) < 1,
      z = w0
        .map(({ element: L, link: w }) => ({ link: w, top: q4(L) }))
        .filter(({ top: L }) => !Number.isNaN(L))
        .sort((L, w) => L.top - w.top)
    if (!z.length) {
      r(null)
      return
    }
    if (h < 1) {
      r(null)
      return
    }
    if (M) {
      r(z[z.length - 1].link)
      return
    }
    let C = null
    for (const { link: L, top: w } of z) {
      if (w > h + i1() + 4) break
      C = L
    }
    r(C)
  }
  function r(h) {
    o && o.classList.remove('active'),
      h == null
        ? (o = null)
        : (o = e.value.querySelector(`a[href="${decodeURIComponent(h)}"]`))
    const v = o
    v
      ? (v.classList.add('active'),
        (i.value.style.top = v.offsetTop + 39 + 'px'),
        (i.value.style.opacity = '1'))
      : ((i.value.style.top = '33px'), (i.value.style.opacity = '0'))
  }
}
function q4(e) {
  let i = 0
  for (; e !== document.body; ) {
    if (e === null) return NaN
    ;(i += e.offsetTop), (e = e.offsetParent)
  }
  return i
}
function _4(e, i, a) {
  w0.length = 0
  const l = [],
    o = []
  return (
    e.forEach((s) => {
      const r = { ...s, children: [] }
      let h = o[o.length - 1]
      for (; h && h.level >= r.level; ) o.pop(), (h = o[o.length - 1])
      if (
        r.element.classList.contains('ignore-header') ||
        (h && 'shouldIgnore' in h)
      ) {
        o.push({ level: r.level, shouldIgnore: !0 })
        return
      }
      r.level > a ||
        r.level < i ||
        (w0.push({ element: r.element, link: r.link }),
        h ? h.children.push(r) : l.push(r),
        o.push(r))
    }),
    l
  )
}
const $4 = ['href', 'title'],
  S4 = p({
    __name: 'VPDocOutlineItem',
    props: { headers: {}, root: { type: Boolean } },
    setup(e) {
      function i({ target: a }) {
        const l = a.href.split('#')[1],
          o = document.getElementById(decodeURIComponent(l))
        o == null || o.focus({ preventScroll: !0 })
      }
      return (a, l) => {
        const o = l0('VPDocOutlineItem', !0)
        return (
          c(),
          t(
            'ul',
            { class: H(['VPDocOutlineItem', a.root ? 'root' : 'nested']) },
            [
              (c(!0),
              t(
                S,
                null,
                j(
                  a.headers,
                  ({ children: s, link: r, title: h }) => (
                    c(),
                    t('li', null, [
                      n(
                        'a',
                        {
                          class: 'outline-link',
                          href: r,
                          onClick: i,
                          title: h,
                        },
                        B(h),
                        9,
                        $4,
                      ),
                      s != null && s.length
                        ? (c(),
                          A(o, { key: 0, headers: s }, null, 8, ['headers']))
                        : y('', !0),
                    ])
                  ),
                ),
                256,
              )),
            ],
            2,
          )
        )
      }
    },
  }),
  J0 = x(S4, [['__scopeId', 'data-v-3a541de0']]),
  Z4 = { class: 'content' },
  P4 = {
    'aria-level': '2',
    class: 'outline-title',
    id: 'doc-outline-aria-label',
    role: 'heading',
  },
  I4 = p({
    __name: 'VPDocAsideOutline',
    setup(e) {
      const { frontmatter: i, theme: a } = $(),
        l = h0([])
      p0(() => {
        l.value = k0(i.value.outline ?? a.value.outline)
      })
      const o = g(),
        s = g()
      return (
        k4(o, s),
        (r, h) => (
          c(),
          t(
            'nav',
            {
              'aria-labelledby': 'doc-outline-aria-label',
              class: H([
                'VPDocAsideOutline',
                { 'has-outline': l.value.length > 0 },
              ]),
              ref_key: 'container',
              ref: o,
            },
            [
              n('div', Z4, [
                n(
                  'div',
                  { class: 'outline-marker', ref_key: 'marker', ref: s },
                  null,
                  512,
                ),
                n('div', P4, B(m(F0)(m(a))), 1),
                V(J0, { headers: l.value, root: !0 }, null, 8, ['headers']),
              ]),
            ],
            2,
          )
        )
      )
    },
  }),
  j4 = x(I4, [['__scopeId', 'data-v-11b268fb']]),
  T4 = { class: 'VPDocAsideCarbonAds' },
  N4 = p({
    __name: 'VPDocAsideCarbonAds',
    props: { carbonAds: {} },
    setup(e) {
      const i = () => null
      return (a, l) => (
        c(),
        t('div', T4, [
          V(m(i), { 'carbon-ads': a.carbonAds }, null, 8, ['carbon-ads']),
        ])
      )
    },
  }),
  E4 = { class: 'VPDocAside' },
  D4 = p({
    __name: 'VPDocAside',
    setup(e) {
      const { theme: i } = $()
      return (a, l) => (
        c(),
        t('div', E4, [
          d(a.$slots, 'aside-top', {}, void 0, !0),
          d(a.$slots, 'aside-outline-before', {}, void 0, !0),
          V(j4),
          d(a.$slots, 'aside-outline-after', {}, void 0, !0),
          l[0] || (l[0] = n('div', { class: 'spacer' }, null, -1)),
          d(a.$slots, 'aside-ads-before', {}, void 0, !0),
          m(i).carbonAds
            ? (c(),
              A(N4, { key: 0, 'carbon-ads': m(i).carbonAds }, null, 8, [
                'carbon-ads',
              ]))
            : y('', !0),
          d(a.$slots, 'aside-ads-after', {}, void 0, !0),
          d(a.$slots, 'aside-bottom', {}, void 0, !0),
        ])
      )
    },
  }),
  O4 = x(D4, [['__scopeId', 'data-v-43680472']])
function U4() {
  const { theme: e, page: i } = $()
  return f(() => {
    const { text: a = 'Edit this page', pattern: l = '' } =
      e.value.editLink || {}
    let o
    return (
      typeof l == 'function'
        ? (o = l(i.value))
        : (o = l.replace(/:path/g, i.value.filePath)),
      { url: o, text: a }
    )
  })
}
function Q4() {
  const { page: e, theme: i, frontmatter: a } = $()
  return f(() => {
    var u, M, z, C, L, w, k, Z
    const l = Q0(i.value.sidebar, e.value.relativePath),
      o = A4(l),
      s = F4(o, (P) => P.link.replace(/[?#].*$/, '')),
      r = s.findIndex((P) => Y(e.value.relativePath, P.link)),
      h =
        (((u = i.value.docFooter) == null ? void 0 : u.prev) === !1 &&
          !a.value.prev) ||
        a.value.prev === !1,
      v =
        (((M = i.value.docFooter) == null ? void 0 : M.next) === !1 &&
          !a.value.next) ||
        a.value.next === !1
    return {
      prev: h
        ? void 0
        : {
            text:
              (typeof a.value.prev == 'string'
                ? a.value.prev
                : typeof a.value.prev == 'object'
                  ? a.value.prev.text
                  : void 0) ??
              ((z = s[r - 1]) == null ? void 0 : z.docFooterText) ??
              ((C = s[r - 1]) == null ? void 0 : C.text),
            link:
              (typeof a.value.prev == 'object' ? a.value.prev.link : void 0) ??
              ((L = s[r - 1]) == null ? void 0 : L.link),
          },
      next: v
        ? void 0
        : {
            text:
              (typeof a.value.next == 'string'
                ? a.value.next
                : typeof a.value.next == 'object'
                  ? a.value.next.text
                  : void 0) ??
              ((w = s[r + 1]) == null ? void 0 : w.docFooterText) ??
              ((k = s[r + 1]) == null ? void 0 : k.text),
            link:
              (typeof a.value.next == 'object' ? a.value.next.link : void 0) ??
              ((Z = s[r + 1]) == null ? void 0 : Z.link),
          },
    }
  })
}
function F4(e, i) {
  const a = new Set()
  return e.filter((l) => {
    const o = i(l)
    return a.has(o) ? !1 : a.add(o)
  })
}
const O = p({
    __name: 'VPLink',
    props: {
      tag: {},
      href: {},
      noIcon: { type: Boolean },
      target: {},
      rel: {},
    },
    setup(e) {
      const i = e,
        a = f(() => i.tag ?? (i.href ? 'a' : 'span')),
        l = f(() => (i.href && E0.test(i.href)) || i.target === '_blank')
      return (o, s) => (
        c(),
        A(
          F(a.value),
          {
            class: H([
              'VPLink',
              {
                link: o.href,
                'vp-external-link-icon': l.value,
                'no-icon': o.noIcon,
              },
            ]),
            href: o.href ? m(g0)(o.href) : void 0,
            target: o.target ?? (l.value ? '_blank' : void 0),
            rel: o.rel ?? (l.value ? 'noreferrer' : void 0),
          },
          { default: b(() => [d(o.$slots, 'default')]), _: 3 },
          8,
          ['class', 'href', 'target', 'rel'],
        )
      )
    },
  }),
  J4 = { class: 'VPLastUpdated' },
  R4 = ['datetime'],
  G4 = p({
    __name: 'VPDocFooterLastUpdated',
    setup(e) {
      const { theme: i, page: a, lang: l } = $(),
        o = f(() => new Date(a.value.lastUpdated)),
        s = f(() => o.value.toISOString()),
        r = g('')
      return (
        D(() => {
          b0(() => {
            var h, v, u
            r.value = new Intl.DateTimeFormat(
              (v =
                (h = i.value.lastUpdated) == null ? void 0 : h.formatOptions) !=
                null && v.forceLocale
                ? l.value
                : void 0,
              ((u = i.value.lastUpdated) == null
                ? void 0
                : u.formatOptions) ?? {
                dateStyle: 'short',
                timeStyle: 'short',
              },
            ).format(o.value)
          })
        }),
        (h, v) => {
          var u
          return (
            c(),
            t('p', J4, [
              E(
                B(
                  ((u = m(i).lastUpdated) == null ? void 0 : u.text) ||
                    m(i).lastUpdatedText ||
                    'Last updated',
                ) + ': ',
                1,
              ),
              n('time', { datetime: s.value }, B(r.value), 9, R4),
            ])
          )
        }
      )
    },
  }),
  W4 = x(G4, [['__scopeId', 'data-v-c194a2a6']]),
  K4 = { key: 0, class: 'VPDocFooter' },
  X4 = { key: 0, class: 'edit-info' },
  Y4 = { key: 0, class: 'edit-link' },
  a6 = { key: 1, class: 'last-updated' },
  l6 = {
    key: 1,
    class: 'prev-next',
    'aria-labelledby': 'doc-footer-aria-label',
  },
  i6 = { class: 'pager' },
  o6 = ['innerHTML'],
  e6 = ['innerHTML'],
  s6 = { class: 'pager' },
  c6 = ['innerHTML'],
  r6 = ['innerHTML'],
  t6 = p({
    __name: 'VPDocFooter',
    setup(e) {
      const { theme: i, page: a, frontmatter: l } = $(),
        o = U4(),
        s = Q4(),
        r = f(() => i.value.editLink && l.value.editLink !== !1),
        h = f(() => a.value.lastUpdated),
        v = f(() => r.value || h.value || s.value.prev || s.value.next)
      return (u, M) => {
        var z, C, L, w
        return v.value
          ? (c(),
            t('footer', K4, [
              d(u.$slots, 'doc-footer-before', {}, void 0, !0),
              r.value || h.value
                ? (c(),
                  t('div', X4, [
                    r.value
                      ? (c(),
                        t('div', Y4, [
                          V(
                            O,
                            {
                              class: 'edit-link-button',
                              href: m(o).url,
                              'no-icon': !0,
                            },
                            {
                              default: b(() => [
                                M[0] ||
                                  (M[0] = n(
                                    'span',
                                    { class: 'vpi-square-pen edit-link-icon' },
                                    null,
                                    -1,
                                  )),
                                E(' ' + B(m(o).text), 1),
                              ]),
                              _: 1,
                            },
                            8,
                            ['href'],
                          ),
                        ]))
                      : y('', !0),
                    h.value ? (c(), t('div', a6, [V(W4)])) : y('', !0),
                  ]))
                : y('', !0),
              ((z = m(s).prev) != null && z.link) ||
              ((C = m(s).next) != null && C.link)
                ? (c(),
                  t('nav', l6, [
                    M[1] ||
                      (M[1] = n(
                        'span',
                        {
                          class: 'visually-hidden',
                          id: 'doc-footer-aria-label',
                        },
                        'Pager',
                        -1,
                      )),
                    n('div', i6, [
                      (L = m(s).prev) != null && L.link
                        ? (c(),
                          A(
                            O,
                            {
                              key: 0,
                              class: 'pager-link prev',
                              href: m(s).prev.link,
                            },
                            {
                              default: b(() => {
                                var k
                                return [
                                  n(
                                    'span',
                                    {
                                      class: 'desc',
                                      innerHTML:
                                        ((k = m(i).docFooter) == null
                                          ? void 0
                                          : k.prev) || 'Previous page',
                                    },
                                    null,
                                    8,
                                    o6,
                                  ),
                                  n(
                                    'span',
                                    {
                                      class: 'title',
                                      innerHTML: m(s).prev.text,
                                    },
                                    null,
                                    8,
                                    e6,
                                  ),
                                ]
                              }),
                              _: 1,
                            },
                            8,
                            ['href'],
                          ))
                        : y('', !0),
                    ]),
                    n('div', s6, [
                      (w = m(s).next) != null && w.link
                        ? (c(),
                          A(
                            O,
                            {
                              key: 0,
                              class: 'pager-link next',
                              href: m(s).next.link,
                            },
                            {
                              default: b(() => {
                                var k
                                return [
                                  n(
                                    'span',
                                    {
                                      class: 'desc',
                                      innerHTML:
                                        ((k = m(i).docFooter) == null
                                          ? void 0
                                          : k.next) || 'Next page',
                                    },
                                    null,
                                    8,
                                    c6,
                                  ),
                                  n(
                                    'span',
                                    {
                                      class: 'title',
                                      innerHTML: m(s).next.text,
                                    },
                                    null,
                                    8,
                                    r6,
                                  ),
                                ]
                              }),
                              _: 1,
                            },
                            8,
                            ['href'],
                          ))
                        : y('', !0),
                    ]),
                  ]))
                : y('', !0),
            ]))
          : y('', !0)
      }
    },
  }),
  h6 = x(t6, [['__scopeId', 'data-v-d6bf9531']]),
  n6 = { class: 'container' },
  v6 = { class: 'aside-container' },
  d6 = { class: 'aside-content' },
  m6 = { class: 'content' },
  b6 = { class: 'content-container' },
  u6 = { class: 'main' },
  p6 = p({
    __name: 'VPDoc',
    setup(e) {
      const { theme: i } = $(),
        a = f0(),
        { hasSidebar: l, hasAside: o, leftAside: s } = W(),
        r = f(() => a.path.replace(/[./]+/g, '_').replace(/_html$/, ''))
      return (h, v) => {
        const u = l0('Content')
        return (
          c(),
          t(
            'div',
            { class: H(['VPDoc', { 'has-sidebar': m(l), 'has-aside': m(o) }]) },
            [
              d(h.$slots, 'doc-top', {}, void 0, !0),
              n('div', n6, [
                m(o)
                  ? (c(),
                    t(
                      'div',
                      { key: 0, class: H(['aside', { 'left-aside': m(s) }]) },
                      [
                        v[0] ||
                          (v[0] = n(
                            'div',
                            { class: 'aside-curtain' },
                            null,
                            -1,
                          )),
                        n('div', v6, [
                          n('div', d6, [
                            V(O4, null, {
                              'aside-top': b(() => [
                                d(h.$slots, 'aside-top', {}, void 0, !0),
                              ]),
                              'aside-bottom': b(() => [
                                d(h.$slots, 'aside-bottom', {}, void 0, !0),
                              ]),
                              'aside-outline-before': b(() => [
                                d(
                                  h.$slots,
                                  'aside-outline-before',
                                  {},
                                  void 0,
                                  !0,
                                ),
                              ]),
                              'aside-outline-after': b(() => [
                                d(
                                  h.$slots,
                                  'aside-outline-after',
                                  {},
                                  void 0,
                                  !0,
                                ),
                              ]),
                              'aside-ads-before': b(() => [
                                d(h.$slots, 'aside-ads-before', {}, void 0, !0),
                              ]),
                              'aside-ads-after': b(() => [
                                d(h.$slots, 'aside-ads-after', {}, void 0, !0),
                              ]),
                              _: 3,
                            }),
                          ]),
                        ]),
                      ],
                      2,
                    ))
                  : y('', !0),
                n('div', m6, [
                  n('div', b6, [
                    d(h.$slots, 'doc-before', {}, void 0, !0),
                    n('main', u6, [
                      V(
                        u,
                        {
                          class: H([
                            'vp-doc',
                            [
                              r.value,
                              m(i).externalLinkIcon &&
                                'external-link-icon-enabled',
                            ],
                          ]),
                        },
                        null,
                        8,
                        ['class'],
                      ),
                    ]),
                    V(h6, null, {
                      'doc-footer-before': b(() => [
                        d(h.$slots, 'doc-footer-before', {}, void 0, !0),
                      ]),
                      _: 3,
                    }),
                    d(h.$slots, 'doc-after', {}, void 0, !0),
                  ]),
                ]),
              ]),
              d(h.$slots, 'doc-bottom', {}, void 0, !0),
            ],
            2,
          )
        )
      }
    },
  }),
  f6 = x(p6, [['__scopeId', 'data-v-90e7acd6']]),
  y6 = p({
    __name: 'VPButton',
    props: {
      tag: {},
      size: { default: 'medium' },
      theme: { default: 'brand' },
      text: {},
      href: {},
      target: {},
      rel: {},
    },
    setup(e) {
      const i = e,
        a = f(() => i.href && E0.test(i.href)),
        l = f(() => i.tag || (i.href ? 'a' : 'button'))
      return (o, s) => (
        c(),
        A(
          F(l.value),
          {
            class: H(['VPButton', [o.size, o.theme]]),
            href: o.href ? m(g0)(o.href) : void 0,
            target: i.target ?? (a.value ? '_blank' : void 0),
            rel: i.rel ?? (a.value ? 'noreferrer' : void 0),
          },
          { default: b(() => [E(B(o.text), 1)]), _: 1 },
          8,
          ['class', 'href', 'target', 'rel'],
        )
      )
    },
  }),
  M6 = x(y6, [['__scopeId', 'data-v-67c8f08a']]),
  z6 = ['src', 'alt'],
  V6 = p({
    inheritAttrs: !1,
    __name: 'VPImage',
    props: { image: {}, alt: {} },
    setup(e) {
      return (i, a) => {
        const l = l0('VPImage', !0)
        return i.image
          ? (c(),
            t(
              S,
              { key: 0 },
              [
                typeof i.image == 'string' || 'src' in i.image
                  ? (c(),
                    t(
                      'img',
                      R(
                        { key: 0, class: 'VPImage' },
                        typeof i.image == 'string'
                          ? i.$attrs
                          : { ...i.image, ...i.$attrs },
                        {
                          src: m(x0)(
                            typeof i.image == 'string' ? i.image : i.image.src,
                          ),
                          alt:
                            i.alt ??
                            (typeof i.image == 'string'
                              ? ''
                              : i.image.alt || ''),
                        },
                      ),
                      null,
                      16,
                      z6,
                    ))
                  : (c(),
                    t(
                      S,
                      { key: 1 },
                      [
                        V(
                          l,
                          R(
                            {
                              class: 'dark',
                              image: i.image.dark,
                              alt: i.image.alt,
                            },
                            i.$attrs,
                          ),
                          null,
                          16,
                          ['image', 'alt'],
                        ),
                        V(
                          l,
                          R(
                            {
                              class: 'light',
                              image: i.image.light,
                              alt: i.image.alt,
                            },
                            i.$attrs,
                          ),
                          null,
                          16,
                          ['image', 'alt'],
                        ),
                      ],
                      64,
                    )),
              ],
              64,
            ))
          : y('', !0)
      }
    },
  }),
  n0 = x(V6, [['__scopeId', 'data-v-3c4d2f13']]),
  H6 = { class: 'container' },
  C6 = { class: 'main' },
  A6 = { key: 0, class: 'name' },
  w6 = ['innerHTML'],
  x6 = ['innerHTML'],
  L6 = ['innerHTML'],
  B6 = { key: 0, class: 'actions' },
  g6 = { key: 0, class: 'image' },
  k6 = { class: 'image-container' },
  q6 = p({
    __name: 'VPHero',
    props: { name: {}, text: {}, tagline: {}, image: {}, actions: {} },
    setup(e) {
      const i = s0('hero-image-slot-exists')
      return (a, l) => (
        c(),
        t(
          'div',
          { class: H(['VPHero', { 'has-image': a.image || m(i) }]) },
          [
            n('div', H6, [
              n('div', C6, [
                d(a.$slots, 'home-hero-info-before', {}, void 0, !0),
                d(
                  a.$slots,
                  'home-hero-info',
                  {},
                  () => [
                    a.name
                      ? (c(),
                        t('h1', A6, [
                          n(
                            'span',
                            { innerHTML: a.name, class: 'clip' },
                            null,
                            8,
                            w6,
                          ),
                        ]))
                      : y('', !0),
                    a.text
                      ? (c(),
                        t(
                          'p',
                          { key: 1, innerHTML: a.text, class: 'text' },
                          null,
                          8,
                          x6,
                        ))
                      : y('', !0),
                    a.tagline
                      ? (c(),
                        t(
                          'p',
                          { key: 2, innerHTML: a.tagline, class: 'tagline' },
                          null,
                          8,
                          L6,
                        ))
                      : y('', !0),
                  ],
                  !0,
                ),
                d(a.$slots, 'home-hero-info-after', {}, void 0, !0),
                a.actions
                  ? (c(),
                    t('div', B6, [
                      (c(!0),
                      t(
                        S,
                        null,
                        j(
                          a.actions,
                          (o) => (
                            c(),
                            t('div', { key: o.link, class: 'action' }, [
                              V(
                                M6,
                                {
                                  tag: 'a',
                                  size: 'medium',
                                  theme: o.theme,
                                  text: o.text,
                                  href: o.link,
                                  target: o.target,
                                  rel: o.rel,
                                },
                                null,
                                8,
                                ['theme', 'text', 'href', 'target', 'rel'],
                              ),
                            ])
                          ),
                        ),
                        128,
                      )),
                    ]))
                  : y('', !0),
                d(a.$slots, 'home-hero-actions-after', {}, void 0, !0),
              ]),
              a.image || m(i)
                ? (c(),
                  t('div', g6, [
                    n('div', k6, [
                      l[0] ||
                        (l[0] = n('div', { class: 'image-bg' }, null, -1)),
                      d(
                        a.$slots,
                        'home-hero-image',
                        {},
                        () => [
                          a.image
                            ? (c(),
                              A(
                                n0,
                                { key: 0, class: 'image-src', image: a.image },
                                null,
                                8,
                                ['image'],
                              ))
                            : y('', !0),
                        ],
                        !0,
                      ),
                    ]),
                  ]))
                : y('', !0),
            ]),
          ],
          2,
        )
      )
    },
  }),
  _6 = x(q6, [['__scopeId', 'data-v-3890c04f']]),
  $6 = p({
    __name: 'VPHomeHero',
    setup(e) {
      const { frontmatter: i } = $()
      return (a, l) =>
        m(i).hero
          ? (c(),
            A(
              _6,
              {
                key: 0,
                class: 'VPHomeHero',
                name: m(i).hero.name,
                text: m(i).hero.text,
                tagline: m(i).hero.tagline,
                image: m(i).hero.image,
                actions: m(i).hero.actions,
              },
              {
                'home-hero-info-before': b(() => [
                  d(a.$slots, 'home-hero-info-before'),
                ]),
                'home-hero-info': b(() => [d(a.$slots, 'home-hero-info')]),
                'home-hero-info-after': b(() => [
                  d(a.$slots, 'home-hero-info-after'),
                ]),
                'home-hero-actions-after': b(() => [
                  d(a.$slots, 'home-hero-actions-after'),
                ]),
                'home-hero-image': b(() => [d(a.$slots, 'home-hero-image')]),
                _: 3,
              },
              8,
              ['name', 'text', 'tagline', 'image', 'actions'],
            ))
          : y('', !0)
    },
  }),
  S6 = { class: 'box' },
  Z6 = { key: 0, class: 'icon' },
  P6 = ['innerHTML'],
  I6 = ['innerHTML'],
  j6 = ['innerHTML'],
  T6 = { key: 4, class: 'link-text' },
  N6 = { class: 'link-text-value' },
  E6 = p({
    __name: 'VPFeature',
    props: {
      icon: {},
      title: {},
      details: {},
      link: {},
      linkText: {},
      rel: {},
      target: {},
    },
    setup(e) {
      return (i, a) => (
        c(),
        A(
          O,
          {
            class: 'VPFeature',
            href: i.link,
            rel: i.rel,
            target: i.target,
            'no-icon': !0,
            tag: i.link ? 'a' : 'div',
          },
          {
            default: b(() => [
              n('article', S6, [
                typeof i.icon == 'object' && i.icon.wrap
                  ? (c(),
                    t('div', Z6, [
                      V(
                        n0,
                        {
                          image: i.icon,
                          alt: i.icon.alt,
                          height: i.icon.height || 48,
                          width: i.icon.width || 48,
                        },
                        null,
                        8,
                        ['image', 'alt', 'height', 'width'],
                      ),
                    ]))
                  : typeof i.icon == 'object'
                    ? (c(),
                      A(
                        n0,
                        {
                          key: 1,
                          image: i.icon,
                          alt: i.icon.alt,
                          height: i.icon.height || 48,
                          width: i.icon.width || 48,
                        },
                        null,
                        8,
                        ['image', 'alt', 'height', 'width'],
                      ))
                    : i.icon
                      ? (c(),
                        t(
                          'div',
                          { key: 2, class: 'icon', innerHTML: i.icon },
                          null,
                          8,
                          P6,
                        ))
                      : y('', !0),
                n('h2', { class: 'title', innerHTML: i.title }, null, 8, I6),
                i.details
                  ? (c(),
                    t(
                      'p',
                      { key: 3, class: 'details', innerHTML: i.details },
                      null,
                      8,
                      j6,
                    ))
                  : y('', !0),
                i.linkText
                  ? (c(),
                    t('div', T6, [
                      n('p', N6, [
                        E(B(i.linkText) + ' ', 1),
                        a[0] ||
                          (a[0] = n(
                            'span',
                            { class: 'vpi-arrow-right link-text-icon' },
                            null,
                            -1,
                          )),
                      ]),
                    ]))
                  : y('', !0),
              ]),
            ]),
            _: 1,
          },
          8,
          ['href', 'rel', 'target', 'tag'],
        )
      )
    },
  }),
  D6 = x(E6, [['__scopeId', 'data-v-2fcc54f0']]),
  O6 = { key: 0, class: 'VPFeatures' },
  U6 = { class: 'container' },
  Q6 = { class: 'items' },
  F6 = p({
    __name: 'VPFeatures',
    props: { features: {} },
    setup(e) {
      const i = e,
        a = f(() => {
          const l = i.features.length
          if (l) {
            if (l === 2) return 'grid-2'
            if (l === 3) return 'grid-3'
            if (l % 3 === 0) return 'grid-6'
            if (l > 3) return 'grid-4'
          } else return
        })
      return (l, o) =>
        l.features
          ? (c(),
            t('div', O6, [
              n('div', U6, [
                n('div', Q6, [
                  (c(!0),
                  t(
                    S,
                    null,
                    j(
                      l.features,
                      (s) => (
                        c(),
                        t(
                          'div',
                          { key: s.title, class: H(['item', [a.value]]) },
                          [
                            V(
                              D6,
                              {
                                icon: s.icon,
                                title: s.title,
                                details: s.details,
                                link: s.link,
                                'link-text': s.linkText,
                                rel: s.rel,
                                target: s.target,
                              },
                              null,
                              8,
                              [
                                'icon',
                                'title',
                                'details',
                                'link',
                                'link-text',
                                'rel',
                                'target',
                              ],
                            ),
                          ],
                          2,
                        )
                      ),
                    ),
                    128,
                  )),
                ]),
              ]),
            ]))
          : y('', !0)
    },
  }),
  J6 = x(F6, [['__scopeId', 'data-v-3bc29ff9']]),
  R6 = p({
    __name: 'VPHomeFeatures',
    setup(e) {
      const { frontmatter: i } = $()
      return (a, l) =>
        m(i).features
          ? (c(),
            A(
              J6,
              { key: 0, class: 'VPHomeFeatures', features: m(i).features },
              null,
              8,
              ['features'],
            ))
          : y('', !0)
    },
  }),
  G6 = p({
    __name: 'VPHomeContent',
    setup(e) {
      const { width: i } = o1({ initialWidth: 0, includeScrollbar: !1 })
      return (a, l) => (
        c(),
        t(
          'div',
          {
            class: 'vp-doc container',
            style: I(
              m(i) ? { '--vp-offset': `calc(50% - ${m(i) / 2}px)` } : {},
            ),
          },
          [d(a.$slots, 'default', {}, void 0, !0)],
          4,
        )
      )
    },
  }),
  W6 = x(G6, [['__scopeId', 'data-v-5ed7c18f']]),
  K6 = { class: 'VPHome' },
  X6 = p({
    __name: 'VPHome',
    setup(e) {
      const { frontmatter: i } = $()
      return (a, l) => {
        const o = l0('Content')
        return (
          c(),
          t('div', K6, [
            d(a.$slots, 'home-hero-before', {}, void 0, !0),
            V($6, null, {
              'home-hero-info-before': b(() => [
                d(a.$slots, 'home-hero-info-before', {}, void 0, !0),
              ]),
              'home-hero-info': b(() => [
                d(a.$slots, 'home-hero-info', {}, void 0, !0),
              ]),
              'home-hero-info-after': b(() => [
                d(a.$slots, 'home-hero-info-after', {}, void 0, !0),
              ]),
              'home-hero-actions-after': b(() => [
                d(a.$slots, 'home-hero-actions-after', {}, void 0, !0),
              ]),
              'home-hero-image': b(() => [
                d(a.$slots, 'home-hero-image', {}, void 0, !0),
              ]),
              _: 3,
            }),
            d(a.$slots, 'home-hero-after', {}, void 0, !0),
            d(a.$slots, 'home-features-before', {}, void 0, !0),
            V(R6),
            d(a.$slots, 'home-features-after', {}, void 0, !0),
            m(i).markdownStyles !== !1
              ? (c(), A(W6, { key: 0 }, { default: b(() => [V(o)]), _: 1 }))
              : (c(), A(o, { key: 1 })),
          ])
        )
      }
    },
  }),
  Y6 = x(X6, [['__scopeId', 'data-v-2e9be07d']]),
  aa = {},
  la = { class: 'VPPage' }
function ia(e, i) {
  const a = l0('Content')
  return (
    c(),
    t('div', la, [d(e.$slots, 'page-top'), V(a), d(e.$slots, 'page-bottom')])
  )
}
const oa = x(aa, [['render', ia]]),
  ea = p({
    __name: 'VPContent',
    setup(e) {
      const { page: i, frontmatter: a } = $(),
        { hasSidebar: l } = W()
      return (o, s) => (
        c(),
        t(
          'div',
          {
            class: H([
              'VPContent',
              { 'has-sidebar': m(l), 'is-home': m(a).layout === 'home' },
            ]),
            id: 'VPContent',
          },
          [
            m(i).isNotFound
              ? d(o.$slots, 'not-found', { key: 0 }, () => [V(H4)], !0)
              : m(a).layout === 'page'
                ? (c(),
                  A(
                    oa,
                    { key: 1 },
                    {
                      'page-top': b(() => [
                        d(o.$slots, 'page-top', {}, void 0, !0),
                      ]),
                      'page-bottom': b(() => [
                        d(o.$slots, 'page-bottom', {}, void 0, !0),
                      ]),
                      _: 3,
                    },
                  ))
                : m(a).layout === 'home'
                  ? (c(),
                    A(
                      Y6,
                      { key: 2 },
                      {
                        'home-hero-before': b(() => [
                          d(o.$slots, 'home-hero-before', {}, void 0, !0),
                        ]),
                        'home-hero-info-before': b(() => [
                          d(o.$slots, 'home-hero-info-before', {}, void 0, !0),
                        ]),
                        'home-hero-info': b(() => [
                          d(o.$slots, 'home-hero-info', {}, void 0, !0),
                        ]),
                        'home-hero-info-after': b(() => [
                          d(o.$slots, 'home-hero-info-after', {}, void 0, !0),
                        ]),
                        'home-hero-actions-after': b(() => [
                          d(
                            o.$slots,
                            'home-hero-actions-after',
                            {},
                            void 0,
                            !0,
                          ),
                        ]),
                        'home-hero-image': b(() => [
                          d(o.$slots, 'home-hero-image', {}, void 0, !0),
                        ]),
                        'home-hero-after': b(() => [
                          d(o.$slots, 'home-hero-after', {}, void 0, !0),
                        ]),
                        'home-features-before': b(() => [
                          d(o.$slots, 'home-features-before', {}, void 0, !0),
                        ]),
                        'home-features-after': b(() => [
                          d(o.$slots, 'home-features-after', {}, void 0, !0),
                        ]),
                        _: 3,
                      },
                    ))
                  : m(a).layout && m(a).layout !== 'doc'
                    ? (c(), A(F(m(a).layout), { key: 3 }))
                    : (c(),
                      A(
                        f6,
                        { key: 4 },
                        {
                          'doc-top': b(() => [
                            d(o.$slots, 'doc-top', {}, void 0, !0),
                          ]),
                          'doc-bottom': b(() => [
                            d(o.$slots, 'doc-bottom', {}, void 0, !0),
                          ]),
                          'doc-footer-before': b(() => [
                            d(o.$slots, 'doc-footer-before', {}, void 0, !0),
                          ]),
                          'doc-before': b(() => [
                            d(o.$slots, 'doc-before', {}, void 0, !0),
                          ]),
                          'doc-after': b(() => [
                            d(o.$slots, 'doc-after', {}, void 0, !0),
                          ]),
                          'aside-top': b(() => [
                            d(o.$slots, 'aside-top', {}, void 0, !0),
                          ]),
                          'aside-outline-before': b(() => [
                            d(o.$slots, 'aside-outline-before', {}, void 0, !0),
                          ]),
                          'aside-outline-after': b(() => [
                            d(o.$slots, 'aside-outline-after', {}, void 0, !0),
                          ]),
                          'aside-ads-before': b(() => [
                            d(o.$slots, 'aside-ads-before', {}, void 0, !0),
                          ]),
                          'aside-ads-after': b(() => [
                            d(o.$slots, 'aside-ads-after', {}, void 0, !0),
                          ]),
                          'aside-bottom': b(() => [
                            d(o.$slots, 'aside-bottom', {}, void 0, !0),
                          ]),
                          _: 3,
                        },
                      )),
          ],
          2,
        )
      )
    },
  }),
  sa = x(ea, [['__scopeId', 'data-v-86d75bcf']]),
  ca = { class: 'container' },
  ra = ['innerHTML'],
  ta = ['innerHTML'],
  ha = p({
    __name: 'VPFooter',
    setup(e) {
      const { theme: i, frontmatter: a } = $(),
        { hasSidebar: l } = W()
      return (o, s) =>
        m(i).footer && m(a).footer !== !1
          ? (c(),
            t(
              'footer',
              { key: 0, class: H(['VPFooter', { 'has-sidebar': m(l) }]) },
              [
                n('div', ca, [
                  m(i).footer.message
                    ? (c(),
                      t(
                        'p',
                        {
                          key: 0,
                          class: 'message',
                          innerHTML: m(i).footer.message,
                        },
                        null,
                        8,
                        ra,
                      ))
                    : y('', !0),
                  m(i).footer.copyright
                    ? (c(),
                      t(
                        'p',
                        {
                          key: 1,
                          class: 'copyright',
                          innerHTML: m(i).footer.copyright,
                        },
                        null,
                        8,
                        ta,
                      ))
                    : y('', !0),
                ]),
              ],
              2,
            ))
          : y('', !0)
    },
  }),
  na = x(ha, [['__scopeId', 'data-v-477dcb91']])
function va() {
  const { theme: e, frontmatter: i } = $(),
    a = h0([]),
    l = f(() => a.value.length > 0)
  return (
    p0(() => {
      a.value = k0(i.value.outline ?? e.value.outline)
    }),
    { headers: a, hasLocalNav: l }
  )
}
const da = { class: 'menu-text' },
  ma = { class: 'header' },
  ba = { class: 'outline' },
  ua = p({
    __name: 'VPLocalNavOutlineDropdown',
    props: { headers: {}, navHeight: {} },
    setup(e) {
      const i = e,
        { theme: a } = $(),
        l = g(!1),
        o = g(0),
        s = g(),
        r = g()
      function h(z) {
        var C
        ;((C = s.value) != null && C.contains(z.target)) || (l.value = !1)
      }
      U(l, (z) => {
        if (z) {
          document.addEventListener('click', h)
          return
        }
        document.removeEventListener('click', h)
      }),
        e1('Escape', () => {
          l.value = !1
        }),
        p0(() => {
          l.value = !1
        })
      function v() {
        ;(l.value = !l.value),
          (o.value =
            window.innerHeight + Math.min(window.scrollY - i.navHeight, 0))
      }
      function u(z) {
        z.target.classList.contains('outline-link') &&
          (r.value && (r.value.style.transition = 'none'),
          d0(() => {
            l.value = !1
          }))
      }
      function M() {
        ;(l.value = !1),
          window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
      }
      return (z, C) => (
        c(),
        t(
          'div',
          {
            class: 'VPLocalNavOutlineDropdown',
            style: I({ '--vp-vh': o.value + 'px' }),
            ref_key: 'main',
            ref: s,
          },
          [
            z.headers.length > 0
              ? (c(),
                t(
                  'button',
                  { key: 0, onClick: v, class: H({ open: l.value }) },
                  [
                    n('span', da, B(m(F0)(m(a))), 1),
                    C[0] ||
                      (C[0] = n(
                        'span',
                        { class: 'vpi-chevron-right icon' },
                        null,
                        -1,
                      )),
                  ],
                  2,
                ))
              : (c(),
                t(
                  'button',
                  { key: 1, onClick: M },
                  B(m(a).returnToTopLabel || 'Return to top'),
                  1,
                )),
            V(
              G,
              { name: 'flyout' },
              {
                default: b(() => [
                  l.value
                    ? (c(),
                      t(
                        'div',
                        {
                          key: 0,
                          ref_key: 'items',
                          ref: r,
                          class: 'items',
                          onClick: u,
                        },
                        [
                          n('div', ma, [
                            n(
                              'a',
                              { class: 'top-link', href: '#', onClick: M },
                              B(m(a).returnToTopLabel || 'Return to top'),
                              1,
                            ),
                          ]),
                          n('div', ba, [
                            V(J0, { headers: z.headers }, null, 8, ['headers']),
                          ]),
                        ],
                        512,
                      ))
                    : y('', !0),
                ]),
                _: 1,
              },
            ),
          ],
          4,
        )
      )
    },
  }),
  pa = x(ua, [['__scopeId', 'data-v-e9d369fb']]),
  fa = { class: 'container' },
  ya = ['aria-expanded'],
  Ma = { class: 'menu-text' },
  za = p({
    __name: 'VPLocalNav',
    props: { open: { type: Boolean } },
    emits: ['open-menu'],
    setup(e) {
      const { theme: i, frontmatter: a } = $(),
        { hasSidebar: l } = W(),
        { headers: o } = va(),
        { y: s } = D0(),
        r = g(0)
      D(() => {
        r.value = parseInt(
          getComputedStyle(document.documentElement).getPropertyValue(
            '--vp-nav-height',
          ),
        )
      }),
        p0(() => {
          o.value = k0(a.value.outline ?? i.value.outline)
        })
      const h = f(() => o.value.length === 0),
        v = f(() => h.value && !l.value),
        u = f(() => ({
          VPLocalNav: !0,
          'has-sidebar': l.value,
          empty: h.value,
          fixed: v.value,
        }))
      return (M, z) =>
        m(a).layout !== 'home' && (!v.value || m(s) >= r.value)
          ? (c(),
            t(
              'div',
              { key: 0, class: H(u.value) },
              [
                n('div', fa, [
                  m(l)
                    ? (c(),
                      t(
                        'button',
                        {
                          key: 0,
                          class: 'menu',
                          'aria-expanded': M.open,
                          'aria-controls': 'VPSidebarNav',
                          onClick: z[0] || (z[0] = (C) => M.$emit('open-menu')),
                        },
                        [
                          z[1] ||
                            (z[1] = n(
                              'span',
                              { class: 'vpi-align-left menu-icon' },
                              null,
                              -1,
                            )),
                          n('span', Ma, B(m(i).sidebarMenuLabel || 'Menu'), 1),
                        ],
                        8,
                        ya,
                      ))
                    : y('', !0),
                  V(pa, { headers: m(o), navHeight: r.value }, null, 8, [
                    'headers',
                    'navHeight',
                  ]),
                ]),
              ],
              2,
            ))
          : y('', !0)
    },
  }),
  Va = x(za, [['__scopeId', 'data-v-31495a73']])
function Ha() {
  const e = g(!1)
  function i() {
    ;(e.value = !0), window.addEventListener('resize', o)
  }
  function a() {
    ;(e.value = !1), window.removeEventListener('resize', o)
  }
  function l() {
    e.value ? a() : i()
  }
  function o() {
    window.outerWidth >= 768 && a()
  }
  const s = f0()
  return (
    U(() => s.path, a),
    { isScreenOpen: e, openScreen: i, closeScreen: a, toggleScreen: l }
  )
}
const Ca = {},
  Aa = { class: 'VPSwitch', type: 'button', role: 'switch' },
  wa = { class: 'check' },
  xa = { key: 0, class: 'icon' }
function La(e, i) {
  return (
    c(),
    t('button', Aa, [
      n('span', wa, [
        e.$slots.default
          ? (c(), t('span', xa, [d(e.$slots, 'default', {}, void 0, !0)]))
          : y('', !0),
      ]),
    ])
  )
}
const Ba = x(Ca, [
    ['render', La],
    ['__scopeId', 'data-v-ff12b4d8'],
  ]),
  ga = p({
    __name: 'VPSwitchAppearance',
    setup(e) {
      const { isDark: i, theme: a } = $(),
        l = s0('toggle-appearance', () => {
          i.value = !i.value
        }),
        o = g('')
      return (
        L0(() => {
          o.value = i.value
            ? a.value.lightModeSwitchTitle || 'Switch to light theme'
            : a.value.darkModeSwitchTitle || 'Switch to dark theme'
        }),
        (s, r) => (
          c(),
          A(
            Ba,
            {
              title: o.value,
              class: 'VPSwitchAppearance',
              'aria-checked': m(i),
              onClick: m(l),
            },
            {
              default: b(
                () =>
                  r[0] ||
                  (r[0] = [
                    n('span', { class: 'vpi-sun sun' }, null, -1),
                    n('span', { class: 'vpi-moon moon' }, null, -1),
                  ]),
              ),
              _: 1,
            },
            8,
            ['title', 'aria-checked', 'onClick'],
          )
        )
      )
    },
  }),
  q0 = x(ga, [['__scopeId', 'data-v-9fb689da']]),
  ka = { key: 0, class: 'VPNavBarAppearance' },
  qa = p({
    __name: 'VPNavBarAppearance',
    setup(e) {
      const { site: i } = $()
      return (a, l) =>
        m(i).appearance &&
        m(i).appearance !== 'force-dark' &&
        m(i).appearance !== 'force-auto'
          ? (c(), t('div', ka, [V(q0)]))
          : y('', !0)
    },
  }),
  _a = x(qa, [['__scopeId', 'data-v-6261bf04']]),
  _0 = g()
let R0 = !1,
  V0 = 0
function $a(e) {
  const i = g(!1)
  if (y0) {
    !R0 && Sa(), V0++
    const a = U(_0, (l) => {
      var o, s, r
      l === e.el.value || ((o = e.el.value) != null && o.contains(l))
        ? ((i.value = !0), (s = e.onFocus) == null || s.call(e))
        : ((i.value = !1), (r = e.onBlur) == null || r.call(e))
    })
    u0(() => {
      a(), V0--, V0 || Za()
    })
  }
  return s1(i)
}
function Sa() {
  document.addEventListener('focusin', G0),
    (R0 = !0),
    (_0.value = document.activeElement)
}
function Za() {
  document.removeEventListener('focusin', G0)
}
function G0() {
  _0.value = document.activeElement
}
const Pa = { class: 'VPMenuLink' },
  Ia = ['innerHTML'],
  ja = p({
    __name: 'VPMenuLink',
    props: { item: {} },
    setup(e) {
      const { page: i } = $()
      return (a, l) => (
        c(),
        t('div', Pa, [
          V(
            O,
            {
              class: H({
                active: m(Y)(
                  m(i).relativePath,
                  a.item.activeMatch || a.item.link,
                  !!a.item.activeMatch,
                ),
              }),
              href: a.item.link,
              target: a.item.target,
              rel: a.item.rel,
              'no-icon': a.item.noIcon,
            },
            {
              default: b(() => [
                n('span', { innerHTML: a.item.text }, null, 8, Ia),
              ]),
              _: 1,
            },
            8,
            ['class', 'href', 'target', 'rel', 'no-icon'],
          ),
        ])
      )
    },
  }),
  M0 = x(ja, [['__scopeId', 'data-v-4ebda3bb']]),
  Ta = { class: 'VPMenuGroup' },
  Na = { key: 0, class: 'title' },
  Ea = p({
    __name: 'VPMenuGroup',
    props: { text: {}, items: {} },
    setup(e) {
      return (i, a) => (
        c(),
        t('div', Ta, [
          i.text ? (c(), t('p', Na, B(i.text), 1)) : y('', !0),
          (c(!0),
          t(
            S,
            null,
            j(
              i.items,
              (l) => (
                c(),
                t(
                  S,
                  null,
                  [
                    'link' in l
                      ? (c(), A(M0, { key: 0, item: l }, null, 8, ['item']))
                      : y('', !0),
                  ],
                  64,
                )
              ),
            ),
            256,
          )),
        ])
      )
    },
  }),
  Da = x(Ea, [['__scopeId', 'data-v-51877c49']]),
  Oa = { class: 'VPMenu' },
  Ua = { key: 0, class: 'items' },
  Qa = p({
    __name: 'VPMenu',
    props: { items: {} },
    setup(e) {
      return (i, a) => (
        c(),
        t('div', Oa, [
          i.items
            ? (c(),
              t('div', Ua, [
                (c(!0),
                t(
                  S,
                  null,
                  j(
                    i.items,
                    (l) => (
                      c(),
                      t(
                        S,
                        { key: JSON.stringify(l) },
                        [
                          'link' in l
                            ? (c(),
                              A(M0, { key: 0, item: l }, null, 8, ['item']))
                            : 'component' in l
                              ? (c(),
                                A(
                                  F(l.component),
                                  R({ key: 1, ref_for: !0 }, l.props),
                                  null,
                                  16,
                                ))
                              : (c(),
                                A(
                                  Da,
                                  { key: 2, text: l.text, items: l.items },
                                  null,
                                  8,
                                  ['text', 'items'],
                                )),
                        ],
                        64,
                      )
                    ),
                  ),
                  128,
                )),
              ]))
            : y('', !0),
          d(i.$slots, 'default', {}, void 0, !0),
        ])
      )
    },
  }),
  Fa = x(Qa, [['__scopeId', 'data-v-898163cf']]),
  Ja = ['aria-expanded', 'aria-label'],
  Ra = { key: 0, class: 'text' },
  Ga = ['innerHTML'],
  Wa = { key: 1, class: 'vpi-more-horizontal icon' },
  Ka = { class: 'menu' },
  Xa = p({
    __name: 'VPFlyout',
    props: { icon: {}, button: {}, label: {}, items: {} },
    setup(e) {
      const i = g(!1),
        a = g()
      $a({ el: a, onBlur: l })
      function l() {
        i.value = !1
      }
      return (o, s) => (
        c(),
        t(
          'div',
          {
            class: 'VPFlyout',
            ref_key: 'el',
            ref: a,
            onMouseenter: s[1] || (s[1] = (r) => (i.value = !0)),
            onMouseleave: s[2] || (s[2] = (r) => (i.value = !1)),
          },
          [
            n(
              'button',
              {
                type: 'button',
                class: 'button',
                'aria-haspopup': 'true',
                'aria-expanded': i.value,
                'aria-label': o.label,
                onClick: s[0] || (s[0] = (r) => (i.value = !i.value)),
              },
              [
                o.button || o.icon
                  ? (c(),
                    t('span', Ra, [
                      o.icon
                        ? (c(),
                          t(
                            'span',
                            { key: 0, class: H([o.icon, 'option-icon']) },
                            null,
                            2,
                          ))
                        : y('', !0),
                      o.button
                        ? (c(),
                          t(
                            'span',
                            { key: 1, innerHTML: o.button },
                            null,
                            8,
                            Ga,
                          ))
                        : y('', !0),
                      s[3] ||
                        (s[3] = n(
                          'span',
                          { class: 'vpi-chevron-down text-icon' },
                          null,
                          -1,
                        )),
                    ]))
                  : (c(), t('span', Wa)),
              ],
              8,
              Ja,
            ),
            n('div', Ka, [
              V(
                Fa,
                { items: o.items },
                {
                  default: b(() => [d(o.$slots, 'default', {}, void 0, !0)]),
                  _: 3,
                },
                8,
                ['items'],
              ),
            ]),
          ],
          544,
        )
      )
    },
  }),
  $0 = x(Xa, [['__scopeId', 'data-v-c646b95b']]),
  Ya = ['href', 'aria-label', 'innerHTML'],
  a8 = p({
    __name: 'VPSocialLink',
    props: { icon: {}, link: {}, ariaLabel: {} },
    setup(e) {
      const i = e,
        a = g()
      D(async () => {
        var s
        await d0()
        const o = (s = a.value) == null ? void 0 : s.children[0]
        o instanceof HTMLElement &&
          o.className.startsWith('vpi-social-') &&
          (getComputedStyle(o).maskImage ||
            getComputedStyle(o).webkitMaskImage) === 'none' &&
          o.style.setProperty(
            '--icon',
            `url('https://api.iconify.design/simple-icons/${i.icon}.svg')`,
          )
      })
      const l = f(() =>
        typeof i.icon == 'object'
          ? i.icon.svg
          : `<span class="vpi-social-${i.icon}"></span>`,
      )
      return (o, s) => (
        c(),
        t(
          'a',
          {
            ref_key: 'el',
            ref: a,
            class: 'VPSocialLink no-icon',
            href: o.link,
            'aria-label':
              o.ariaLabel ?? (typeof o.icon == 'string' ? o.icon : ''),
            target: '_blank',
            rel: 'noopener',
            innerHTML: l.value,
          },
          null,
          8,
          Ya,
        )
      )
    },
  }),
  l8 = x(a8, [['__scopeId', 'data-v-0e77b584']]),
  i8 = { class: 'VPSocialLinks' },
  o8 = p({
    __name: 'VPSocialLinks',
    props: { links: {} },
    setup(e) {
      return (i, a) => (
        c(),
        t('div', i8, [
          (c(!0),
          t(
            S,
            null,
            j(
              i.links,
              ({ link: l, icon: o, ariaLabel: s }) => (
                c(),
                A(l8, { key: l, icon: o, link: l, ariaLabel: s }, null, 8, [
                  'icon',
                  'link',
                  'ariaLabel',
                ])
              ),
            ),
            128,
          )),
        ])
      )
    },
  }),
  z0 = x(o8, [['__scopeId', 'data-v-975a148e']]),
  e8 = { key: 0, class: 'group translations' },
  s8 = { class: 'trans-title' },
  c8 = { key: 1, class: 'group' },
  r8 = { class: 'item appearance' },
  t8 = { class: 'label' },
  h8 = { class: 'appearance-action' },
  n8 = { key: 2, class: 'group' },
  v8 = { class: 'item social-links' },
  d8 = p({
    __name: 'VPNavBarExtra',
    setup(e) {
      const { site: i, theme: a } = $(),
        { localeLinks: l, currentLang: o } = c0({ correspondingLink: !0 }),
        s = f(
          () =>
            (l.value.length && o.value.label) ||
            i.value.appearance ||
            a.value.socialLinks,
        )
      return (r, h) =>
        s.value
          ? (c(),
            A(
              $0,
              { key: 0, class: 'VPNavBarExtra', label: 'extra navigation' },
              {
                default: b(() => [
                  m(l).length && m(o).label
                    ? (c(),
                      t('div', e8, [
                        n('p', s8, B(m(o).label), 1),
                        (c(!0),
                        t(
                          S,
                          null,
                          j(
                            m(l),
                            (v) => (
                              c(),
                              A(M0, { key: v.link, item: v }, null, 8, ['item'])
                            ),
                          ),
                          128,
                        )),
                      ]))
                    : y('', !0),
                  m(i).appearance &&
                  m(i).appearance !== 'force-dark' &&
                  m(i).appearance !== 'force-auto'
                    ? (c(),
                      t('div', c8, [
                        n('div', r8, [
                          n(
                            'p',
                            t8,
                            B(m(a).darkModeSwitchLabel || 'Appearance'),
                            1,
                          ),
                          n('div', h8, [V(q0)]),
                        ]),
                      ]))
                    : y('', !0),
                  m(a).socialLinks
                    ? (c(),
                      t('div', n8, [
                        n('div', v8, [
                          V(
                            z0,
                            {
                              class: 'social-links-list',
                              links: m(a).socialLinks,
                            },
                            null,
                            8,
                            ['links'],
                          ),
                        ]),
                      ]))
                    : y('', !0),
                ]),
                _: 1,
              },
            ))
          : y('', !0)
    },
  }),
  m8 = x(d8, [['__scopeId', 'data-v-622ac43c']]),
  b8 = ['aria-expanded'],
  u8 = p({
    __name: 'VPNavBarHamburger',
    props: { active: { type: Boolean } },
    emits: ['click'],
    setup(e) {
      return (i, a) => (
        c(),
        t(
          'button',
          {
            type: 'button',
            class: H(['VPNavBarHamburger', { active: i.active }]),
            'aria-label': 'mobile navigation',
            'aria-expanded': i.active,
            'aria-controls': 'VPNavScreen',
            onClick: a[0] || (a[0] = (l) => i.$emit('click')),
          },
          a[1] ||
            (a[1] = [
              n(
                'span',
                { class: 'container' },
                [
                  n('span', { class: 'top' }),
                  n('span', { class: 'middle' }),
                  n('span', { class: 'bottom' }),
                ],
                -1,
              ),
            ]),
          10,
          b8,
        )
      )
    },
  }),
  p8 = x(u8, [['__scopeId', 'data-v-fcdaa27e']]),
  f8 = ['innerHTML'],
  y8 = p({
    __name: 'VPNavBarMenuLink',
    props: { item: {} },
    setup(e) {
      const { page: i } = $()
      return (a, l) => (
        c(),
        A(
          O,
          {
            class: H({
              VPNavBarMenuLink: !0,
              active: m(Y)(
                m(i).relativePath,
                a.item.activeMatch || a.item.link,
                !!a.item.activeMatch,
              ),
            }),
            href: a.item.link,
            target: a.item.target,
            rel: a.item.rel,
            'no-icon': a.item.noIcon,
            tabindex: '0',
          },
          {
            default: b(() => [
              n('span', { innerHTML: a.item.text }, null, 8, f8),
            ]),
            _: 1,
          },
          8,
          ['class', 'href', 'target', 'rel', 'no-icon'],
        )
      )
    },
  }),
  M8 = x(y8, [['__scopeId', 'data-v-5bd038d9']]),
  z8 = p({
    __name: 'VPNavBarMenuGroup',
    props: { item: {} },
    setup(e) {
      const i = e,
        { page: a } = $(),
        l = (s) =>
          'component' in s
            ? !1
            : 'link' in s
              ? Y(a.value.relativePath, s.link, !!i.item.activeMatch)
              : s.items.some(l),
        o = f(() => l(i.item))
      return (s, r) => (
        c(),
        A(
          $0,
          {
            class: H({
              VPNavBarMenuGroup: !0,
              active:
                m(Y)(
                  m(a).relativePath,
                  s.item.activeMatch,
                  !!s.item.activeMatch,
                ) || o.value,
            }),
            button: s.item.text,
            items: s.item.items,
          },
          null,
          8,
          ['class', 'button', 'items'],
        )
      )
    },
  }),
  V8 = {
    key: 0,
    'aria-labelledby': 'main-nav-aria-label',
    class: 'VPNavBarMenu',
  },
  H8 = p({
    __name: 'VPNavBarMenu',
    setup(e) {
      const { theme: i } = $()
      return (a, l) =>
        m(i).nav
          ? (c(),
            t('nav', V8, [
              l[0] ||
                (l[0] = n(
                  'span',
                  { id: 'main-nav-aria-label', class: 'visually-hidden' },
                  ' Main Navigation ',
                  -1,
                )),
              (c(!0),
              t(
                S,
                null,
                j(
                  m(i).nav,
                  (o) => (
                    c(),
                    t(
                      S,
                      { key: JSON.stringify(o) },
                      [
                        'link' in o
                          ? (c(), A(M8, { key: 0, item: o }, null, 8, ['item']))
                          : 'component' in o
                            ? (c(),
                              A(
                                F(o.component),
                                R({ key: 1, ref_for: !0 }, o.props),
                                null,
                                16,
                              ))
                            : (c(),
                              A(z8, { key: 2, item: o }, null, 8, ['item'])),
                      ],
                      64,
                    )
                  ),
                ),
                128,
              )),
            ]))
          : y('', !0)
    },
  }),
  C8 = x(H8, [['__scopeId', 'data-v-9c9c04b5']])
function A8(e) {
  const { localeIndex: i, theme: a } = $()
  function l(o) {
    var w, k, Z
    const s = o.split('.'),
      r = (w = a.value.search) == null ? void 0 : w.options,
      h = r && typeof r == 'object',
      v =
        (h &&
          ((Z = (k = r.locales) == null ? void 0 : k[i.value]) == null
            ? void 0
            : Z.translations)) ||
        null,
      u = (h && r.translations) || null
    let M = v,
      z = u,
      C = e
    const L = s.pop()
    for (const P of s) {
      let T = null
      const Q = C == null ? void 0 : C[P]
      Q && (T = C = Q)
      const i0 = z == null ? void 0 : z[P]
      i0 && (T = z = i0)
      const X = M == null ? void 0 : M[P]
      X && (T = M = X), Q || (C = T), i0 || (z = T), X || (M = T)
    }
    return (
      (M == null ? void 0 : M[L]) ??
      (z == null ? void 0 : z[L]) ??
      (C == null ? void 0 : C[L]) ??
      ''
    )
  }
  return l
}
const w8 = ['aria-label'],
  x8 = { class: 'DocSearch-Button-Container' },
  L8 = { class: 'DocSearch-Button-Placeholder' },
  Z0 = p({
    __name: 'VPNavBarSearchButton',
    setup(e) {
      const a = A8({
        button: { buttonText: 'Search', buttonAriaLabel: 'Search' },
      })
      return (l, o) => (
        c(),
        t(
          'button',
          {
            type: 'button',
            class: 'DocSearch DocSearch-Button',
            'aria-label': m(a)('button.buttonAriaLabel'),
          },
          [
            n('span', x8, [
              o[0] ||
                (o[0] = n(
                  'span',
                  { class: 'vp-icon DocSearch-Search-Icon' },
                  null,
                  -1,
                )),
              n('span', L8, B(m(a)('button.buttonText')), 1),
            ]),
            o[1] ||
              (o[1] = n(
                'span',
                { class: 'DocSearch-Button-Keys' },
                [
                  n('kbd', { class: 'DocSearch-Button-Key' }),
                  n('kbd', { class: 'DocSearch-Button-Key' }, 'K'),
                ],
                -1,
              )),
          ],
          8,
          w8,
        )
      )
    },
  }),
  B8 = { class: 'VPNavBarSearch' },
  g8 = { id: 'local-search' },
  k8 = { key: 1, id: 'docsearch' },
  q8 = p({
    __name: 'VPNavBarSearch',
    setup(e) {
      const i = () => null,
        a = c1(() =>
          r1(
            () => import('./VPAlgoliaSearchBox.BdWFkJ5t.js'),
            __vite__mapDeps([0, 1]),
          ),
        ),
        { theme: l } = $(),
        o = g(!1),
        s = g(!1),
        r = () => {
          const C = 'VPAlgoliaPreconnect'
          ;(window.requestIdleCallback || setTimeout)(() => {
            var k
            const w = document.createElement('link')
            ;(w.id = C),
              (w.rel = 'preconnect'),
              (w.href = `https://${(((k = l.value.search) == null ? void 0 : k.options) ?? l.value.algolia).appId}-dsn.algolia.net`),
              (w.crossOrigin = ''),
              document.head.appendChild(w)
          })
        }
      D(() => {
        r()
        const C = (w) => {
            ;((w.key.toLowerCase() === 'k' && (w.metaKey || w.ctrlKey)) ||
              (!u(w) && w.key === '/')) &&
              (w.preventDefault(), h(), L())
          },
          L = () => {
            window.removeEventListener('keydown', C)
          }
        window.addEventListener('keydown', C), u0(L)
      })
      function h() {
        o.value || ((o.value = !0), setTimeout(v, 16))
      }
      function v() {
        const C = new Event('keydown')
        ;(C.key = 'k'),
          (C.metaKey = !0),
          window.dispatchEvent(C),
          setTimeout(() => {
            document.querySelector('.DocSearch-Modal') || v()
          }, 16)
      }
      function u(C) {
        const L = C.target,
          w = L.tagName
        return (
          L.isContentEditable ||
          w === 'INPUT' ||
          w === 'SELECT' ||
          w === 'TEXTAREA'
        )
      }
      const M = g(!1),
        z = 'algolia'
      return (C, L) => {
        var w
        return (
          c(),
          t('div', B8, [
            m(z) === 'local'
              ? (c(),
                t(
                  S,
                  { key: 0 },
                  [
                    M.value
                      ? (c(),
                        A(m(i), {
                          key: 0,
                          onClose: L[0] || (L[0] = (k) => (M.value = !1)),
                        }))
                      : y('', !0),
                    n('div', g8, [
                      V(Z0, {
                        onClick: L[1] || (L[1] = (k) => (M.value = !0)),
                      }),
                    ]),
                  ],
                  64,
                ))
              : m(z) === 'algolia'
                ? (c(),
                  t(
                    S,
                    { key: 1 },
                    [
                      o.value
                        ? (c(),
                          A(
                            m(a),
                            {
                              key: 0,
                              algolia:
                                ((w = m(l).search) == null
                                  ? void 0
                                  : w.options) ?? m(l).algolia,
                              onVnodeBeforeMount:
                                L[2] || (L[2] = (k) => (s.value = !0)),
                            },
                            null,
                            8,
                            ['algolia'],
                          ))
                        : y('', !0),
                      s.value
                        ? y('', !0)
                        : (c(), t('div', k8, [V(Z0, { onClick: h })])),
                    ],
                    64,
                  ))
                : y('', !0),
          ])
        )
      }
    },
  }),
  _8 = p({
    __name: 'VPNavBarSocialLinks',
    setup(e) {
      const { theme: i } = $()
      return (a, l) =>
        m(i).socialLinks
          ? (c(),
            A(
              z0,
              { key: 0, class: 'VPNavBarSocialLinks', links: m(i).socialLinks },
              null,
              8,
              ['links'],
            ))
          : y('', !0)
    },
  }),
  $8 = x(_8, [['__scopeId', 'data-v-6b14c465']]),
  S8 = ['href', 'rel', 'target'],
  Z8 = ['innerHTML'],
  P8 = { key: 2 },
  I8 = p({
    __name: 'VPNavBarTitle',
    setup(e) {
      const { site: i, theme: a } = $(),
        { hasSidebar: l } = W(),
        { currentLang: o } = c0(),
        s = f(() => {
          var v
          return typeof a.value.logoLink == 'string'
            ? a.value.logoLink
            : (v = a.value.logoLink) == null
              ? void 0
              : v.link
        }),
        r = f(() => {
          var v
          return typeof a.value.logoLink == 'string' ||
            (v = a.value.logoLink) == null
            ? void 0
            : v.rel
        }),
        h = f(() => {
          var v
          return typeof a.value.logoLink == 'string' ||
            (v = a.value.logoLink) == null
            ? void 0
            : v.target
        })
      return (v, u) => (
        c(),
        t(
          'div',
          { class: H(['VPNavBarTitle', { 'has-sidebar': m(l) }]) },
          [
            n(
              'a',
              {
                class: 'title',
                href: s.value ?? m(g0)(m(o).link),
                rel: r.value,
                target: h.value,
              },
              [
                d(v.$slots, 'nav-bar-title-before', {}, void 0, !0),
                m(a).logo
                  ? (c(),
                    A(
                      n0,
                      { key: 0, class: 'logo', image: m(a).logo },
                      null,
                      8,
                      ['image'],
                    ))
                  : y('', !0),
                m(a).siteTitle
                  ? (c(),
                    t(
                      'span',
                      { key: 1, innerHTML: m(a).siteTitle },
                      null,
                      8,
                      Z8,
                    ))
                  : m(a).siteTitle === void 0
                    ? (c(), t('span', P8, B(m(i).title), 1))
                    : y('', !0),
                d(v.$slots, 'nav-bar-title-after', {}, void 0, !0),
              ],
              8,
              S8,
            ),
          ],
          2,
        )
      )
    },
  }),
  j8 = x(I8, [['__scopeId', 'data-v-8ca0c626']]),
  T8 = { class: 'items' },
  N8 = { class: 'title' },
  E8 = p({
    __name: 'VPNavBarTranslations',
    setup(e) {
      const { theme: i } = $(),
        { localeLinks: a, currentLang: l } = c0({ correspondingLink: !0 })
      return (o, s) =>
        m(a).length && m(l).label
          ? (c(),
            A(
              $0,
              {
                key: 0,
                class: 'VPNavBarTranslations',
                icon: 'vpi-languages',
                label: m(i).langMenuLabel || 'Change language',
              },
              {
                default: b(() => [
                  n('div', T8, [
                    n('p', N8, B(m(l).label), 1),
                    (c(!0),
                    t(
                      S,
                      null,
                      j(
                        m(a),
                        (r) => (
                          c(),
                          A(M0, { key: r.link, item: r }, null, 8, ['item'])
                        ),
                      ),
                      128,
                    )),
                  ]),
                ]),
                _: 1,
              },
              8,
              ['label'],
            ))
          : y('', !0)
    },
  }),
  D8 = x(E8, [['__scopeId', 'data-v-565f7665']]),
  O8 = { class: 'wrapper' },
  U8 = { class: 'container' },
  Q8 = { class: 'title' },
  F8 = { class: 'content' },
  J8 = { class: 'content-body' },
  R8 = p({
    __name: 'VPNavBar',
    props: { isScreenOpen: { type: Boolean } },
    emits: ['toggle-screen'],
    setup(e) {
      const i = e,
        { y: a } = D0(),
        { hasSidebar: l } = W(),
        { frontmatter: o } = $(),
        s = g({})
      return (
        L0(() => {
          s.value = {
            'has-sidebar': l.value,
            home: o.value.layout === 'home',
            top: a.value === 0,
            'screen-open': i.isScreenOpen,
          }
        }),
        (r, h) => (
          c(),
          t(
            'div',
            { class: H(['VPNavBar', s.value]) },
            [
              n('div', O8, [
                n('div', U8, [
                  n('div', Q8, [
                    V(j8, null, {
                      'nav-bar-title-before': b(() => [
                        d(r.$slots, 'nav-bar-title-before', {}, void 0, !0),
                      ]),
                      'nav-bar-title-after': b(() => [
                        d(r.$slots, 'nav-bar-title-after', {}, void 0, !0),
                      ]),
                      _: 3,
                    }),
                  ]),
                  n('div', F8, [
                    n('div', J8, [
                      d(r.$slots, 'nav-bar-content-before', {}, void 0, !0),
                      V(q8, { class: 'search' }),
                      V(C8, { class: 'menu' }),
                      V(D8, { class: 'translations' }),
                      V(_a, { class: 'appearance' }),
                      V($8, { class: 'social-links' }),
                      V(m8, { class: 'extra' }),
                      d(r.$slots, 'nav-bar-content-after', {}, void 0, !0),
                      V(
                        p8,
                        {
                          class: 'hamburger',
                          active: r.isScreenOpen,
                          onClick:
                            h[0] || (h[0] = (v) => r.$emit('toggle-screen')),
                        },
                        null,
                        8,
                        ['active'],
                      ),
                    ]),
                  ]),
                ]),
              ]),
              h[1] ||
                (h[1] = n(
                  'div',
                  { class: 'divider' },
                  [n('div', { class: 'divider-line' })],
                  -1,
                )),
            ],
            2,
          )
        )
      )
    },
  }),
  G8 = x(R8, [['__scopeId', 'data-v-f9d2f94e']]),
  W8 = { key: 0, class: 'VPNavScreenAppearance' },
  K8 = { class: 'text' },
  X8 = p({
    __name: 'VPNavScreenAppearance',
    setup(e) {
      const { site: i, theme: a } = $()
      return (l, o) =>
        m(i).appearance &&
        m(i).appearance !== 'force-dark' &&
        m(i).appearance !== 'force-auto'
          ? (c(),
            t('div', W8, [
              n('p', K8, B(m(a).darkModeSwitchLabel || 'Appearance'), 1),
              V(q0),
            ]))
          : y('', !0)
    },
  }),
  Y8 = x(X8, [['__scopeId', 'data-v-65157c8f']]),
  a7 = ['innerHTML'],
  l7 = p({
    __name: 'VPNavScreenMenuLink',
    props: { item: {} },
    setup(e) {
      const i = s0('close-screen')
      return (a, l) => (
        c(),
        A(
          O,
          {
            class: 'VPNavScreenMenuLink',
            href: a.item.link,
            target: a.item.target,
            rel: a.item.rel,
            'no-icon': a.item.noIcon,
            onClick: m(i),
          },
          {
            default: b(() => [
              n('span', { innerHTML: a.item.text }, null, 8, a7),
            ]),
            _: 1,
          },
          8,
          ['href', 'target', 'rel', 'no-icon', 'onClick'],
        )
      )
    },
  }),
  i7 = x(l7, [['__scopeId', 'data-v-7bea6e7a']]),
  o7 = ['innerHTML'],
  e7 = p({
    __name: 'VPNavScreenMenuGroupLink',
    props: { item: {} },
    setup(e) {
      const i = s0('close-screen')
      return (a, l) => (
        c(),
        A(
          O,
          {
            class: 'VPNavScreenMenuGroupLink',
            href: a.item.link,
            target: a.item.target,
            rel: a.item.rel,
            'no-icon': a.item.noIcon,
            onClick: m(i),
          },
          {
            default: b(() => [
              n('span', { innerHTML: a.item.text }, null, 8, o7),
            ]),
            _: 1,
          },
          8,
          ['href', 'target', 'rel', 'no-icon', 'onClick'],
        )
      )
    },
  }),
  W0 = x(e7, [['__scopeId', 'data-v-aa653106']]),
  s7 = { class: 'VPNavScreenMenuGroupSection' },
  c7 = { key: 0, class: 'title' },
  r7 = p({
    __name: 'VPNavScreenMenuGroupSection',
    props: { text: {}, items: {} },
    setup(e) {
      return (i, a) => (
        c(),
        t('div', s7, [
          i.text ? (c(), t('p', c7, B(i.text), 1)) : y('', !0),
          (c(!0),
          t(
            S,
            null,
            j(
              i.items,
              (l) => (c(), A(W0, { key: l.text, item: l }, null, 8, ['item'])),
            ),
            128,
          )),
        ])
      )
    },
  }),
  t7 = x(r7, [['__scopeId', 'data-v-5bf1f535']]),
  h7 = ['aria-controls', 'aria-expanded'],
  n7 = ['innerHTML'],
  v7 = ['id'],
  d7 = { key: 0, class: 'item' },
  m7 = { key: 1, class: 'item' },
  b7 = { key: 2, class: 'group' },
  u7 = p({
    __name: 'VPNavScreenMenuGroup',
    props: { text: {}, items: {} },
    setup(e) {
      const i = e,
        a = g(!1),
        l = f(() => `NavScreenGroup-${i.text.replace(' ', '-').toLowerCase()}`)
      function o() {
        a.value = !a.value
      }
      return (s, r) => (
        c(),
        t(
          'div',
          { class: H(['VPNavScreenMenuGroup', { open: a.value }]) },
          [
            n(
              'button',
              {
                class: 'button',
                'aria-controls': l.value,
                'aria-expanded': a.value,
                onClick: o,
              },
              [
                n(
                  'span',
                  { class: 'button-text', innerHTML: s.text },
                  null,
                  8,
                  n7,
                ),
                r[0] ||
                  (r[0] = n(
                    'span',
                    { class: 'vpi-plus button-icon' },
                    null,
                    -1,
                  )),
              ],
              8,
              h7,
            ),
            n(
              'div',
              { id: l.value, class: 'items' },
              [
                (c(!0),
                t(
                  S,
                  null,
                  j(
                    s.items,
                    (h) => (
                      c(),
                      t(
                        S,
                        { key: JSON.stringify(h) },
                        [
                          'link' in h
                            ? (c(),
                              t('div', d7, [
                                V(W0, { item: h }, null, 8, ['item']),
                              ]))
                            : 'component' in h
                              ? (c(),
                                t('div', m7, [
                                  (c(),
                                  A(
                                    F(h.component),
                                    R({ ref_for: !0 }, h.props, {
                                      'screen-menu': '',
                                    }),
                                    null,
                                    16,
                                  )),
                                ]))
                              : (c(),
                                t('div', b7, [
                                  V(
                                    t7,
                                    { text: h.text, items: h.items },
                                    null,
                                    8,
                                    ['text', 'items'],
                                  ),
                                ])),
                        ],
                        64,
                      )
                    ),
                  ),
                  128,
                )),
              ],
              8,
              v7,
            ),
          ],
          2,
        )
      )
    },
  }),
  p7 = x(u7, [['__scopeId', 'data-v-784e0cf9']]),
  f7 = { key: 0, class: 'VPNavScreenMenu' },
  y7 = p({
    __name: 'VPNavScreenMenu',
    setup(e) {
      const { theme: i } = $()
      return (a, l) =>
        m(i).nav
          ? (c(),
            t('nav', f7, [
              (c(!0),
              t(
                S,
                null,
                j(
                  m(i).nav,
                  (o) => (
                    c(),
                    t(
                      S,
                      { key: JSON.stringify(o) },
                      [
                        'link' in o
                          ? (c(), A(i7, { key: 0, item: o }, null, 8, ['item']))
                          : 'component' in o
                            ? (c(),
                              A(
                                F(o.component),
                                R({ key: 1, ref_for: !0 }, o.props, {
                                  'screen-menu': '',
                                }),
                                null,
                                16,
                              ))
                            : (c(),
                              A(
                                p7,
                                { key: 2, text: o.text || '', items: o.items },
                                null,
                                8,
                                ['text', 'items'],
                              )),
                      ],
                      64,
                    )
                  ),
                ),
                128,
              )),
            ]))
          : y('', !0)
    },
  }),
  M7 = p({
    __name: 'VPNavScreenSocialLinks',
    setup(e) {
      const { theme: i } = $()
      return (a, l) =>
        m(i).socialLinks
          ? (c(),
            A(
              z0,
              {
                key: 0,
                class: 'VPNavScreenSocialLinks',
                links: m(i).socialLinks,
              },
              null,
              8,
              ['links'],
            ))
          : y('', !0)
    },
  }),
  z7 = { class: 'list' },
  V7 = p({
    __name: 'VPNavScreenTranslations',
    setup(e) {
      const { localeLinks: i, currentLang: a } = c0({ correspondingLink: !0 }),
        l = g(!1)
      function o() {
        l.value = !l.value
      }
      return (s, r) =>
        m(i).length && m(a).label
          ? (c(),
            t(
              'div',
              {
                key: 0,
                class: H(['VPNavScreenTranslations', { open: l.value }]),
              },
              [
                n('button', { class: 'title', onClick: o }, [
                  r[0] ||
                    (r[0] = n(
                      'span',
                      { class: 'vpi-languages icon lang' },
                      null,
                      -1,
                    )),
                  E(' ' + B(m(a).label) + ' ', 1),
                  r[1] ||
                    (r[1] = n(
                      'span',
                      { class: 'vpi-chevron-down icon chevron' },
                      null,
                      -1,
                    )),
                ]),
                n('ul', z7, [
                  (c(!0),
                  t(
                    S,
                    null,
                    j(
                      m(i),
                      (h) => (
                        c(),
                        t('li', { key: h.link, class: 'item' }, [
                          V(
                            O,
                            { class: 'link', href: h.link },
                            { default: b(() => [E(B(h.text), 1)]), _: 2 },
                            1032,
                            ['href'],
                          ),
                        ])
                      ),
                    ),
                    128,
                  )),
                ]),
              ],
              2,
            ))
          : y('', !0)
    },
  }),
  H7 = x(V7, [['__scopeId', 'data-v-2dd0964c']]),
  C7 = { class: 'container' },
  A7 = p({
    __name: 'VPNavScreen',
    props: { open: { type: Boolean } },
    setup(e) {
      const i = g(null),
        a = O0(y0 ? document.body : null)
      return (l, o) => (
        c(),
        A(
          G,
          {
            name: 'fade',
            onEnter: o[0] || (o[0] = (s) => (a.value = !0)),
            onAfterLeave: o[1] || (o[1] = (s) => (a.value = !1)),
          },
          {
            default: b(() => [
              l.open
                ? (c(),
                  t(
                    'div',
                    {
                      key: 0,
                      class: 'VPNavScreen',
                      ref_key: 'screen',
                      ref: i,
                      id: 'VPNavScreen',
                    },
                    [
                      n('div', C7, [
                        d(
                          l.$slots,
                          'nav-screen-content-before',
                          {},
                          void 0,
                          !0,
                        ),
                        V(y7, { class: 'menu' }),
                        V(H7, { class: 'translations' }),
                        V(Y8, { class: 'appearance' }),
                        V(M7, { class: 'social-links' }),
                        d(l.$slots, 'nav-screen-content-after', {}, void 0, !0),
                      ]),
                    ],
                    512,
                  ))
                : y('', !0),
            ]),
            _: 3,
          },
        )
      )
    },
  }),
  w7 = x(A7, [['__scopeId', 'data-v-9305edfe']]),
  x7 = { key: 0, class: 'VPNav' },
  L7 = p({
    __name: 'VPNav',
    setup(e) {
      const { isScreenOpen: i, closeScreen: a, toggleScreen: l } = Ha(),
        { frontmatter: o } = $(),
        s = f(() => o.value.navbar !== !1)
      return (
        m0('close-screen', a),
        b0(() => {
          y0 && document.documentElement.classList.toggle('hide-nav', !s.value)
        }),
        (r, h) =>
          s.value
            ? (c(),
              t('header', x7, [
                V(
                  G8,
                  { 'is-screen-open': m(i), onToggleScreen: m(l) },
                  {
                    'nav-bar-title-before': b(() => [
                      d(r.$slots, 'nav-bar-title-before', {}, void 0, !0),
                    ]),
                    'nav-bar-title-after': b(() => [
                      d(r.$slots, 'nav-bar-title-after', {}, void 0, !0),
                    ]),
                    'nav-bar-content-before': b(() => [
                      d(r.$slots, 'nav-bar-content-before', {}, void 0, !0),
                    ]),
                    'nav-bar-content-after': b(() => [
                      d(r.$slots, 'nav-bar-content-after', {}, void 0, !0),
                    ]),
                    _: 3,
                  },
                  8,
                  ['is-screen-open', 'onToggleScreen'],
                ),
                V(
                  w7,
                  { open: m(i) },
                  {
                    'nav-screen-content-before': b(() => [
                      d(r.$slots, 'nav-screen-content-before', {}, void 0, !0),
                    ]),
                    'nav-screen-content-after': b(() => [
                      d(r.$slots, 'nav-screen-content-after', {}, void 0, !0),
                    ]),
                    _: 3,
                  },
                  8,
                  ['open'],
                ),
              ]))
            : y('', !0)
      )
    },
  }),
  B7 = x(L7, [['__scopeId', 'data-v-38a54cc5']]),
  g7 = ['role', 'tabindex'],
  k7 = { key: 1, class: 'items' },
  q7 = p({
    __name: 'VPSidebarItem',
    props: { item: {}, depth: {} },
    setup(e) {
      const i = e,
        {
          collapsed: a,
          collapsible: l,
          isLink: o,
          isActiveLink: s,
          hasActiveLink: r,
          hasChildren: h,
          toggle: v,
        } = x4(f(() => i.item)),
        u = f(() => (h.value ? 'section' : 'div')),
        M = f(() => (o.value ? 'a' : 'div')),
        z = f(() =>
          h.value ? (i.depth + 2 === 7 ? 'p' : `h${i.depth + 2}`) : 'p',
        ),
        C = f(() => (o.value ? void 0 : 'button')),
        L = f(() => [
          [`level-${i.depth}`],
          { collapsible: l.value },
          { collapsed: a.value },
          { 'is-link': o.value },
          { 'is-active': s.value },
          { 'has-active': r.value },
        ])
      function w(Z) {
        ;('key' in Z && Z.key !== 'Enter') || (!i.item.link && v())
      }
      function k() {
        i.item.link && v()
      }
      return (Z, P) => {
        const T = l0('VPSidebarItem', !0)
        return (
          c(),
          A(
            F(u.value),
            { class: H(['VPSidebarItem', L.value]) },
            {
              default: b(() => [
                Z.item.text
                  ? (c(),
                    t(
                      'div',
                      R(
                        { key: 0, class: 'item', role: C.value },
                        T0(Z.item.items ? { click: w, keydown: w } : {}, !0),
                        { tabindex: Z.item.items && 0 },
                      ),
                      [
                        P[1] ||
                          (P[1] = n('div', { class: 'indicator' }, null, -1)),
                        Z.item.link
                          ? (c(),
                            A(
                              O,
                              {
                                key: 0,
                                tag: M.value,
                                class: 'link',
                                href: Z.item.link,
                                rel: Z.item.rel,
                                target: Z.item.target,
                              },
                              {
                                default: b(() => [
                                  (c(),
                                  A(
                                    F(z.value),
                                    { class: 'text', innerHTML: Z.item.text },
                                    null,
                                    8,
                                    ['innerHTML'],
                                  )),
                                ]),
                                _: 1,
                              },
                              8,
                              ['tag', 'href', 'rel', 'target'],
                            ))
                          : (c(),
                            A(
                              F(z.value),
                              { key: 1, class: 'text', innerHTML: Z.item.text },
                              null,
                              8,
                              ['innerHTML'],
                            )),
                        Z.item.collapsed != null &&
                        Z.item.items &&
                        Z.item.items.length
                          ? (c(),
                            t(
                              'div',
                              {
                                key: 2,
                                class: 'caret',
                                role: 'button',
                                'aria-label': 'toggle section',
                                onClick: k,
                                onKeydown: t1(k, ['enter']),
                                tabindex: '0',
                              },
                              P[0] ||
                                (P[0] = [
                                  n(
                                    'span',
                                    { class: 'vpi-chevron-right caret-icon' },
                                    null,
                                    -1,
                                  ),
                                ]),
                              32,
                            ))
                          : y('', !0),
                      ],
                      16,
                      g7,
                    ))
                  : y('', !0),
                Z.item.items && Z.item.items.length
                  ? (c(),
                    t('div', k7, [
                      Z.depth < 5
                        ? (c(!0),
                          t(
                            S,
                            { key: 0 },
                            j(
                              Z.item.items,
                              (Q) => (
                                c(),
                                A(
                                  T,
                                  { key: Q.text, item: Q, depth: Z.depth + 1 },
                                  null,
                                  8,
                                  ['item', 'depth'],
                                )
                              ),
                            ),
                            128,
                          ))
                        : y('', !0),
                    ]))
                  : y('', !0),
              ]),
              _: 1,
            },
            8,
            ['class'],
          )
        )
      }
    },
  }),
  _7 = x(q7, [['__scopeId', 'data-v-3b49f268']]),
  $7 = p({
    __name: 'VPSidebarGroup',
    props: { items: {} },
    setup(e) {
      const i = g(!0)
      let a = null
      return (
        D(() => {
          a = setTimeout(() => {
            ;(a = null), (i.value = !1)
          }, 300)
        }),
        j0(() => {
          a != null && (clearTimeout(a), (a = null))
        }),
        (l, o) => (
          c(!0),
          t(
            S,
            null,
            j(
              l.items,
              (s) => (
                c(),
                t(
                  'div',
                  {
                    key: s.text,
                    class: H(['group', { 'no-transition': i.value }]),
                  },
                  [V(_7, { item: s, depth: 0 }, null, 8, ['item'])],
                  2,
                )
              ),
            ),
            128,
          )
        )
      )
    },
  }),
  S7 = x($7, [['__scopeId', 'data-v-404a94b2']]),
  Z7 = {
    class: 'nav',
    id: 'VPSidebarNav',
    'aria-labelledby': 'sidebar-aria-label',
    tabindex: '-1',
  },
  P7 = p({
    __name: 'VPSidebar',
    props: { open: { type: Boolean } },
    setup(e) {
      const { sidebarGroups: i, hasSidebar: a } = W(),
        l = e,
        o = g(null),
        s = O0(y0 ? document.body : null)
      U(
        [l, o],
        () => {
          var h
          l.open
            ? ((s.value = !0), (h = o.value) == null || h.focus())
            : (s.value = !1)
        },
        { immediate: !0, flush: 'post' },
      )
      const r = g(0)
      return (
        U(
          i,
          () => {
            r.value += 1
          },
          { deep: !0 },
        ),
        (h, v) =>
          m(a)
            ? (c(),
              t(
                'aside',
                {
                  key: 0,
                  class: H(['VPSidebar', { open: h.open }]),
                  ref_key: 'navEl',
                  ref: o,
                  onClick: v[0] || (v[0] = v0(() => {}, ['stop'])),
                },
                [
                  v[2] || (v[2] = n('div', { class: 'curtain' }, null, -1)),
                  n('nav', Z7, [
                    v[1] ||
                      (v[1] = n(
                        'span',
                        { class: 'visually-hidden', id: 'sidebar-aria-label' },
                        ' Sidebar Navigation ',
                        -1,
                      )),
                    d(h.$slots, 'sidebar-nav-before', {}, void 0, !0),
                    (c(),
                    A(S7, { items: m(i), key: r.value }, null, 8, ['items'])),
                    d(h.$slots, 'sidebar-nav-after', {}, void 0, !0),
                  ]),
                ],
                2,
              ))
            : y('', !0)
      )
    },
  }),
  I7 = x(P7, [['__scopeId', 'data-v-148fc3ae']]),
  j7 = p({
    __name: 'VPSkipLink',
    setup(e) {
      const i = f0(),
        a = g()
      U(
        () => i.path,
        () => a.value.focus(),
      )
      function l({ target: o }) {
        const s = document.getElementById(decodeURIComponent(o.hash).slice(1))
        if (s) {
          const r = () => {
            s.removeAttribute('tabindex'), s.removeEventListener('blur', r)
          }
          s.setAttribute('tabindex', '-1'),
            s.addEventListener('blur', r),
            s.focus(),
            window.scrollTo(0, 0)
        }
      }
      return (o, s) => (
        c(),
        t(
          S,
          null,
          [
            n(
              'span',
              { ref_key: 'backToTop', ref: a, tabindex: '-1' },
              null,
              512,
            ),
            n(
              'a',
              {
                href: '#VPContent',
                class: 'VPSkipLink visually-hidden',
                onClick: l,
              },
              ' Skip to content ',
            ),
          ],
          64,
        )
      )
    },
  }),
  T7 = x(j7, [['__scopeId', 'data-v-dab30db6']]),
  N7 = p({
    __name: 'Layout',
    setup(e) {
      const { isOpen: i, open: a, close: l } = W(),
        o = f0()
      U(() => o.path, l), w4(i, l)
      const { frontmatter: s } = $(),
        r = h1(),
        h = f(() => !!r['home-hero-image'])
      return (
        m0('hero-image-slot-exists', h),
        (v, u) => {
          const M = l0('Content')
          return m(s).layout !== !1
            ? (c(),
              t(
                'div',
                { key: 0, class: H(['Layout', m(s).pageClass]) },
                [
                  d(v.$slots, 'layout-top', {}, void 0, !0),
                  V(T7),
                  V(
                    d4,
                    { class: 'backdrop', show: m(i), onClick: m(l) },
                    null,
                    8,
                    ['show', 'onClick'],
                  ),
                  V(B7, null, {
                    'nav-bar-title-before': b(() => [
                      d(v.$slots, 'nav-bar-title-before', {}, void 0, !0),
                    ]),
                    'nav-bar-title-after': b(() => [
                      d(v.$slots, 'nav-bar-title-after', {}, void 0, !0),
                    ]),
                    'nav-bar-content-before': b(() => [
                      d(v.$slots, 'nav-bar-content-before', {}, void 0, !0),
                    ]),
                    'nav-bar-content-after': b(() => [
                      d(v.$slots, 'nav-bar-content-after', {}, void 0, !0),
                    ]),
                    'nav-screen-content-before': b(() => [
                      d(v.$slots, 'nav-screen-content-before', {}, void 0, !0),
                    ]),
                    'nav-screen-content-after': b(() => [
                      d(v.$slots, 'nav-screen-content-after', {}, void 0, !0),
                    ]),
                    _: 3,
                  }),
                  V(Va, { open: m(i), onOpenMenu: m(a) }, null, 8, [
                    'open',
                    'onOpenMenu',
                  ]),
                  V(
                    I7,
                    { open: m(i) },
                    {
                      'sidebar-nav-before': b(() => [
                        d(v.$slots, 'sidebar-nav-before', {}, void 0, !0),
                      ]),
                      'sidebar-nav-after': b(() => [
                        d(v.$slots, 'sidebar-nav-after', {}, void 0, !0),
                      ]),
                      _: 3,
                    },
                    8,
                    ['open'],
                  ),
                  V(sa, null, {
                    'page-top': b(() => [
                      d(v.$slots, 'page-top', {}, void 0, !0),
                    ]),
                    'page-bottom': b(() => [
                      d(v.$slots, 'page-bottom', {}, void 0, !0),
                    ]),
                    'not-found': b(() => [
                      d(v.$slots, 'not-found', {}, void 0, !0),
                    ]),
                    'home-hero-before': b(() => [
                      d(v.$slots, 'home-hero-before', {}, void 0, !0),
                    ]),
                    'home-hero-info-before': b(() => [
                      d(v.$slots, 'home-hero-info-before', {}, void 0, !0),
                    ]),
                    'home-hero-info': b(() => [
                      d(v.$slots, 'home-hero-info', {}, void 0, !0),
                    ]),
                    'home-hero-info-after': b(() => [
                      d(v.$slots, 'home-hero-info-after', {}, void 0, !0),
                    ]),
                    'home-hero-actions-after': b(() => [
                      d(v.$slots, 'home-hero-actions-after', {}, void 0, !0),
                    ]),
                    'home-hero-image': b(() => [
                      d(v.$slots, 'home-hero-image', {}, void 0, !0),
                    ]),
                    'home-hero-after': b(() => [
                      d(v.$slots, 'home-hero-after', {}, void 0, !0),
                    ]),
                    'home-features-before': b(() => [
                      d(v.$slots, 'home-features-before', {}, void 0, !0),
                    ]),
                    'home-features-after': b(() => [
                      d(v.$slots, 'home-features-after', {}, void 0, !0),
                    ]),
                    'doc-footer-before': b(() => [
                      d(v.$slots, 'doc-footer-before', {}, void 0, !0),
                    ]),
                    'doc-before': b(() => [
                      d(v.$slots, 'doc-before', {}, void 0, !0),
                    ]),
                    'doc-after': b(() => [
                      d(v.$slots, 'doc-after', {}, void 0, !0),
                    ]),
                    'doc-top': b(() => [
                      d(v.$slots, 'doc-top', {}, void 0, !0),
                    ]),
                    'doc-bottom': b(() => [
                      d(v.$slots, 'doc-bottom', {}, void 0, !0),
                    ]),
                    'aside-top': b(() => [
                      d(v.$slots, 'aside-top', {}, void 0, !0),
                    ]),
                    'aside-bottom': b(() => [
                      d(v.$slots, 'aside-bottom', {}, void 0, !0),
                    ]),
                    'aside-outline-before': b(() => [
                      d(v.$slots, 'aside-outline-before', {}, void 0, !0),
                    ]),
                    'aside-outline-after': b(() => [
                      d(v.$slots, 'aside-outline-after', {}, void 0, !0),
                    ]),
                    'aside-ads-before': b(() => [
                      d(v.$slots, 'aside-ads-before', {}, void 0, !0),
                    ]),
                    'aside-ads-after': b(() => [
                      d(v.$slots, 'aside-ads-after', {}, void 0, !0),
                    ]),
                    _: 3,
                  }),
                  V(na),
                  d(v.$slots, 'layout-bottom', {}, void 0, !0),
                ],
                2,
              ))
            : (c(), A(M, { key: 1 }))
        }
      )
    },
  }),
  E7 = x(N7, [['__scopeId', 'data-v-73056ea6']]),
  D7 = {},
  O7 = { class: 'VPTeamPage' }
function U7(e, i) {
  return c(), t('div', O7, [d(e.$slots, 'default')])
}
const Ml = x(D7, [
    ['render', U7],
    ['__scopeId', 'data-v-fb441374'],
  ]),
  Q7 = {},
  F7 = { class: 'VPTeamPageTitle' },
  J7 = { key: 0, class: 'title' },
  R7 = { key: 1, class: 'lead' }
function G7(e, i) {
  return (
    c(),
    t('div', F7, [
      e.$slots.title
        ? (c(), t('h1', J7, [d(e.$slots, 'title', {}, void 0, !0)]))
        : y('', !0),
      e.$slots.lead
        ? (c(), t('p', R7, [d(e.$slots, 'lead', {}, void 0, !0)]))
        : y('', !0),
    ])
  )
}
const zl = x(Q7, [
    ['render', G7],
    ['__scopeId', 'data-v-3151fdba'],
  ]),
  W7 = { class: 'profile' },
  K7 = { class: 'avatar' },
  X7 = ['src', 'alt'],
  Y7 = { class: 'data' },
  al = { class: 'name' },
  ll = { key: 0, class: 'affiliation' },
  il = { key: 0, class: 'title' },
  ol = { key: 1, class: 'at' },
  el = ['innerHTML'],
  sl = { key: 2, class: 'links' },
  cl = { key: 0, class: 'sp' },
  rl = p({
    __name: 'VPTeamMembersItem',
    props: { size: { default: 'medium' }, member: {} },
    setup(e) {
      return (i, a) => (
        c(),
        t(
          'article',
          { class: H(['VPTeamMembersItem', [i.size]]) },
          [
            n('div', W7, [
              n('figure', K7, [
                n(
                  'img',
                  {
                    class: 'avatar-img',
                    src: i.member.avatar,
                    alt: i.member.name,
                  },
                  null,
                  8,
                  X7,
                ),
              ]),
              n('div', Y7, [
                n('h1', al, B(i.member.name), 1),
                i.member.title || i.member.org
                  ? (c(),
                    t('p', ll, [
                      i.member.title
                        ? (c(), t('span', il, B(i.member.title), 1))
                        : y('', !0),
                      i.member.title && i.member.org
                        ? (c(), t('span', ol, ' @ '))
                        : y('', !0),
                      i.member.org
                        ? (c(),
                          A(
                            O,
                            {
                              key: 2,
                              class: H(['org', { link: i.member.orgLink }]),
                              href: i.member.orgLink,
                              'no-icon': '',
                            },
                            { default: b(() => [E(B(i.member.org), 1)]), _: 1 },
                            8,
                            ['class', 'href'],
                          ))
                        : y('', !0),
                    ]))
                  : y('', !0),
                i.member.desc
                  ? (c(),
                    t(
                      'p',
                      { key: 1, class: 'desc', innerHTML: i.member.desc },
                      null,
                      8,
                      el,
                    ))
                  : y('', !0),
                i.member.links
                  ? (c(),
                    t('div', sl, [
                      V(z0, { links: i.member.links }, null, 8, ['links']),
                    ]))
                  : y('', !0),
              ]),
            ]),
            i.member.sponsor
              ? (c(),
                t('div', cl, [
                  V(
                    O,
                    { class: 'sp-link', href: i.member.sponsor, 'no-icon': '' },
                    {
                      default: b(() => [
                        a[0] ||
                          (a[0] = n(
                            'span',
                            { class: 'vpi-heart sp-icon' },
                            null,
                            -1,
                          )),
                        E(' ' + B(i.member.actionText || 'Sponsor'), 1),
                      ]),
                      _: 1,
                    },
                    8,
                    ['href'],
                  ),
                ]))
              : y('', !0),
          ],
          2,
        )
      )
    },
  }),
  tl = x(rl, [['__scopeId', 'data-v-b9eba3b2']]),
  hl = { class: 'container' },
  nl = p({
    __name: 'VPTeamMembers',
    props: { size: { default: 'medium' }, members: {} },
    setup(e) {
      const i = e,
        a = f(() => [i.size, `count-${i.members.length}`])
      return (l, o) => (
        c(),
        t(
          'div',
          { class: H(['VPTeamMembers', a.value]) },
          [
            n('div', hl, [
              (c(!0),
              t(
                S,
                null,
                j(
                  l.members,
                  (s) => (
                    c(),
                    t('div', { key: s.name, class: 'item' }, [
                      V(tl, { size: l.size, member: s }, null, 8, [
                        'size',
                        'member',
                      ]),
                    ])
                  ),
                ),
                128,
              )),
            ]),
          ],
          2,
        )
      )
    },
  }),
  Vl = x(nl, [['__scopeId', 'data-v-239f0f14']]),
  K0 = {
    Layout: E7,
    enhanceApp: ({ app: e }) => {
      e.component('Badge', h4)
    },
  },
  vl = { class: 'button-container' },
  dl = ['innerHTML'],
  ml = p({
    __name: 'tool',
    props: { value: { type: String, default: '' } },
    setup(e) {
      const i = e,
        a = f(() =>
          i.value
            ? i.value
                .split(',')
                .map((o) => (o == '' ? "<code>''</code>" : `<code>${o}</code>`))
                .join(' | ')
            : '',
        ),
        l = g(!1)
      return (o, s) => (
        c(),
        t('div', vl, [
          V(m(B0), {
            text: '',
            size: 'xs',
            icon: 'tag-fill',
            onClick: s[0] || (s[0] = (r) => (l.value = !l.value)),
          }),
          K(
            n(
              'div',
              { class: 'tooltip-content', innerHTML: a.value },
              null,
              8,
              dl,
            ),
            [[a0, l.value]],
          ),
        ])
      )
    },
  }),
  bl = x(ml, [['__scopeId', 'data-v-487f6af2']]),
  ul = p({
    __name: 'Layout',
    setup(e) {
      const { isDark: i } = N0(),
        { Layout: a } = K0,
        l = () =>
          'startViewTransition' in document &&
          window.matchMedia('(prefers-reduced-motion: no-preference)').matches
      return (
        m0('toggle-appearance', async ({ clientX: o, clientY: s }) => {
          if (!l()) {
            i.value = !i.value
            return
          }
          const r = [
            `circle(0px at ${o}px ${s}px)`,
            `circle(${Math.hypot(Math.max(o, innerWidth - o), Math.max(s, innerHeight - s))}px at ${o}px ${s}px)`,
          ]
          await document.startViewTransition(async () => {
            ;(i.value = !i.value), await d0()
          }).ready,
            document.documentElement.animate(
              { clipPath: i.value ? r.reverse() : r },
              {
                duration: 300,
                easing: 'ease-in',
                pseudoElement: `::view-transition-${i.value ? 'old' : 'new'}(root)`,
              },
            )
        }),
        (o, s) => (c(), A(m(a)))
      )
    },
  }),
  Hl = {
    ...K0,
    Layout: ul,
    enhanceApp({ app: e }) {
      e.component('Tool', bl), e.use(t4)
    },
  }
export {
  Ml as A,
  $ as B,
  V5 as C,
  P2 as D,
  Z1 as I,
  x1 as L,
  f5 as M,
  E5 as P,
  N1 as Q,
  Hl as R,
  T3 as T,
  zl as V,
  J2 as W,
  R1 as X,
  K2 as Y,
  q1 as Z,
  J as _,
  s3 as a,
  s4 as b,
  h2 as c,
  b3 as d,
  Z3 as e,
  h3 as f,
  fl as g,
  c4 as h,
  B0 as i,
  yl as j,
  g5 as k,
  Y1 as l,
  n5 as m,
  x3 as n,
  E2 as o,
  b2 as p,
  S5 as q,
  s5 as r,
  e2 as s,
  q2 as t,
  J3 as u,
  V1 as v,
  a2 as w,
  k3 as x,
  Vl as y,
  y3 as z,
}