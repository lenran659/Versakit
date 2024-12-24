import {
  u as v,
  i as R0,
  g as W0,
  o as K0,
  w as D,
  s as S0,
  h as Z0,
  r as o0,
  d as p,
  c as u,
  a as c,
  b as t,
  e as m,
  n as E,
  f,
  j as H,
  F as _,
  k as n,
  l as w,
  m as L,
  p as d,
  q as a0,
  t as c0,
  v as g,
  x as V,
  y as r0,
  T as R,
  z as I,
  A as Y0,
  B as P,
  C as e0,
  D as T,
  _ as A,
  E as X0,
  G as a1,
  H as l1,
  I as H0,
  J as G,
  K as f0,
  L as h0,
  M as C0,
  N as A0,
  O as i1,
  P as o1,
  Q as W,
  R as t0,
  S as P0,
  U as N,
  V as v0,
  W as J,
  X as n0,
  Y as e1,
  Z as s1,
  $ as j0,
  a0 as I0,
  a1 as m0,
  a2 as c1,
  a3 as T0,
  a4 as N0,
  a5 as r1,
  a6 as h1,
  a7 as t1,
  a8 as v1,
} from './framework.D7H_7AjQ.js'
function n1(e) {
  return W0() ? (K0(e), !0) : !1
}
function w0(e) {
  return typeof e == 'function' ? e() : v(e)
}
const m1 = typeof window < 'u' && typeof document < 'u'
typeof WorkerGlobalScope < 'u' && globalThis instanceof WorkerGlobalScope
const b1 = Object.prototype.toString,
  d1 = (e) => b1.call(e) === '[object Object]',
  y0 = () => {}
function p1(e, l) {
  function a(...i) {
    return new Promise((o, s) => {
      Promise.resolve(
        e(() => l.apply(this, i), { fn: l, thisArg: this, args: i }),
      )
        .then(o)
        .catch(s)
    })
  }
  return a
}
function u1(...e) {
  let l = 0,
    a,
    i = !0,
    o = y0,
    s,
    r,
    h,
    b,
    y
  !R0(e[0]) && typeof e[0] == 'object'
    ? ({
        delay: r,
        trailing: h = !0,
        leading: b = !0,
        rejectOnCancel: y = !1,
      } = e[0])
    : ([r, h = !0, b = !0, y = !1] = e)
  const M = () => {
    a && (clearTimeout(a), (a = void 0), o(), (o = y0))
  }
  return (C) => {
    const x = w0(r),
      q = Date.now() - l,
      Z = () => (s = C())
    return (
      M(),
      x <= 0
        ? ((l = Date.now()), Z())
        : (q > x && (b || !i)
            ? ((l = Date.now()), Z())
            : h &&
              (s = new Promise((k, j) => {
                ;(o = y ? j : k),
                  (a = setTimeout(
                    () => {
                      ;(l = Date.now()), (i = !0), k(Z()), M()
                    },
                    Math.max(0, x - q),
                  ))
              })),
          !b && !a && (a = setTimeout(() => (i = !0), x)),
          (i = !1),
          s)
    )
  }
}
function f1(e, l = 200, a = !1, i = !0, o = !1) {
  return p1(u1(l, a, i, o), e)
}
const y1 = m1 ? window : void 0
function M1(e) {
  var l
  const a = w0(e)
  return (l = a == null ? void 0 : a.$el) != null ? l : a
}
function z1(...e) {
  let l, a, i, o
  if (
    (typeof e[0] == 'string' || Array.isArray(e[0])
      ? (([a, i, o] = e), (l = y1))
      : ([l, a, i, o] = e),
    !l)
  )
    return y0
  Array.isArray(a) || (a = [a]), Array.isArray(i) || (i = [i])
  const s = [],
    r = () => {
      s.forEach((M) => M()), (s.length = 0)
    },
    h = (M, z, C, x) => (
      M.addEventListener(z, C, x), () => M.removeEventListener(z, C, x)
    ),
    b = D(
      () => [M1(l), w0(o)],
      ([M, z]) => {
        if ((r(), !M)) return
        const C = d1(z) ? { ...z } : z
        s.push(...a.flatMap((x) => i.map((q) => h(M, x, q, C))))
      },
      { immediate: !0, flush: 'post' },
    ),
    y = () => {
      b(), r()
    }
  return n1(y), y
}
const $ = (e, l) => (
    (e.install = (a) => {
      for (const i of [e, ...Object.values({})]) a.component(i.name, i)
    }),
    e
  ),
  V1 = p({
    name: 'VerIcon',
    inheritAttrs: !1,
    __name: 'index',
    props: {
      name: { type: String, required: !1, default: '' },
      size: { type: [Number, String], required: !1, default: 14 },
      color: { type: String, required: !1, default: '' },
    },
    setup(e, { expose: l }) {
      l()
      const a = e,
        i = a.size + 'px',
        o = u(() => `#icon-${a.name}`),
        s = { props: a, size: i, IconName: o }
      return (
        Object.defineProperty(s, '__isScriptSetup', {
          enumerable: !1,
          value: !0,
        }),
        s
      )
    },
  }),
  S = (e, l) => {
    const a = e.__vccOpts || e
    for (const [i, o] of l) a[i] = o
    return a
  },
  H1 = ['xlink:href']
function C1(e, l, a, i, o, s) {
  return (
    c(),
    t(
      'svg',
      {
        class: 'ver-icon',
        'aria-hidden': 'true',
        style: E({ width: i.size, height: i.size, color: i.props.color }),
      },
      [m('use', { 'xlink:href': i.IconName }, null, 8, H1)],
      4,
    )
  )
}
const A1 = S(V1, [
    ['render', C1],
    ['__scopeId', 'data-v-793447e8'],
    [
      '__file',
      'C:/Users/Jannik/Desktop/Versakit/packages/ui/components/icon/src/index.vue',
    ],
  ]),
  F = $(A1),
  w1 = p({
    name: 'VerButton',
    __name: 'index',
    props: {
      type: { type: null, required: !1, default: '' },
      ghost: { type: Boolean, required: !1, default: !1 },
      round: { type: Boolean, required: !1, default: !1 },
      plain: { type: Boolean, required: !1, default: !1 },
      text: { type: Boolean, required: !1, default: !1 },
      shade: { type: Boolean, required: !1, default: !1 },
      slide: { type: Boolean, required: !1 },
      disabled: { type: Boolean, required: !1, default: !1 },
      size: { type: null, required: !1, default: 'md' },
      color: { type: String, required: !1 },
      circle: { type: Boolean, required: !1, default: !1 },
      icon: { type: String, required: !1, default: '' },
    },
    setup(e, { expose: l }) {
      l()
      const a = e,
        i = u(() => [
          'ver-btn',
          a.type == '' ? '' : `ver-btn-${a.type}`,
          a.ghost == !1 ? '' : 'is-ghost',
          a.round == !1 ? '' : 'is-round',
          a.plain == !1 ? '' : 'is-plain',
          a.text == !1 ? '' : 'is-text',
          a.shade == !1 ? '' : 'is-shade',
          a.disabled == !1 ? '' : 'is-disabled',
          a.size == 'md' ? '' : `is-${a.size}`,
          a.circle == !1 ? '' : 'is-circle',
        ]),
        o = {
          props: a,
          Verclass: i,
          get VerIcon() {
            return F
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
  x1 = ['disabled', 'size', 'color']
function L1(e, l, a, i, o, s) {
  return (
    c(),
    t(
      'button',
      {
        class: w(i.Verclass),
        disabled: i.props.disabled,
        size: i.props.size,
        color: i.props.color,
      },
      [
        f(' icon '),
        a.icon
          ? (c(), H(i.VerIcon, { key: 0, name: a.icon }, null, 8, ['name']))
          : (c(),
            t(
              _,
              { key: 1 },
              [
                f(' common '),
                m('span', null, [n(e.$slots, 'default', {}, void 0, !0)]),
              ],
              2112,
            )),
      ],
      10,
      x1,
    )
  )
}
const B1 = S(w1, [
    ['render', L1],
    ['__scopeId', 'data-v-59b2e43e'],
    [
      '__file',
      'C:/Users/Jannik/Desktop/Versakit/packages/ui/components/button/src/index.vue',
    ],
  ]),
  O0 = $(B1),
  g1 = p({
    name: 'VerText',
    __name: 'index',
    props: {
      type: { type: null, required: !1, default: 'info' },
      size: { type: null, required: !1, default: 'md' },
      truncated: { type: Boolean, required: !1, default: !1 },
    },
    setup(e, { expose: l }) {
      l()
      const a = e,
        i = u(() => [
          'ver-text',
          a.type == 'info' ? 'ver-text-info' : `ver-text-${a.type}`,
          a.size == 'md' ? '' : `is-${a.size}`,
          a.truncated == !1 ? '' : 'is-truncated',
        ]),
        o = { props: a, VerClass: i }
      return (
        Object.defineProperty(o, '__isScriptSetup', {
          enumerable: !1,
          value: !0,
        }),
        o
      )
    },
  })
function k1(e, l, a, i, o, s) {
  return (
    c(),
    t(
      'span',
      { class: w(i.VerClass) },
      [n(e.$slots, 'default', {}, void 0, !0)],
      2,
    )
  )
}
const q1 = S(g1, [
    ['render', k1],
    ['__scopeId', 'data-v-a87ab481'],
    [
      '__file',
      'C:/Users/Jannik/Desktop/Versakit/packages/ui/components/text/src/index.vue',
    ],
  ]),
  _1 = $(q1),
  $1 = p({
    name: 'VerLink',
    __name: 'index',
    props: {
      type: { type: String, required: !1, default: '' },
      disabled: { type: Boolean, required: !1, default: !1 },
      href: { type: String, required: !1, default: '' },
    },
    setup(e, { expose: l }) {
      l()
      const a = e,
        i = u(() => [
          'ver-link',
          a.type == '' ? '' : `ver-link-${a.type}`,
          a.disabled == !1 ? '' : 'is-disabled',
        ]),
        o = { props: a, VerClass: i }
      return (
        Object.defineProperty(o, '__isScriptSetup', {
          enumerable: !1,
          value: !0,
        }),
        o
      )
    },
  }),
  S1 = ['href']
function Z1(e, l, a, i, o, s) {
  return (
    c(),
    t(
      'a',
      { class: w(i.VerClass), href: a.href },
      [m('span', null, [n(e.$slots, 'default', {}, void 0, !0)])],
      10,
      S1,
    )
  )
}
const P1 = S($1, [
    ['render', Z1],
    ['__scopeId', 'data-v-d24feda1'],
    [
      '__file',
      'C:/Users/Jannik/Desktop/Versakit/packages/ui/components/link/src/index.vue',
    ],
  ]),
  j1 = $(P1),
  I1 = p({
    name: 'VerRow',
    __name: 'index',
    setup(e, { expose: l }) {
      l()
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
  T1 = { class: 'ver-row' }
function N1(e, l, a, i, o, s) {
  return c(), t('div', T1, [n(e.$slots, 'default', {}, void 0, !0)])
}
const O1 = S(I1, [
    ['render', N1],
    ['__scopeId', 'data-v-5ce90f13'],
    [
      '__file',
      'C:/Users/Jannik/Desktop/Versakit/packages/ui/components/row/src/index.vue',
    ],
  ]),
  D1 = $(O1),
  E1 = p({
    name: 'VerCol',
    __name: 'index',
    props: {
      span: { type: Number, required: !1, default: 24 },
      offset: { type: Number, required: !1, default: 0 },
    },
    setup(e, { expose: l }) {
      l()
      const a = e,
        i = L(a.span <= 24 && a.span % 1 == 0 ? (100 / 24) * a.span + '%' : ''),
        o = L(
          a.offset <= 24 && a.offset % 1 == 0
            ? (100 / 24) * a.offset + '%'
            : '',
        ),
        s = { props: a, width: i, offset: o }
      return (
        Object.defineProperty(s, '__isScriptSetup', {
          enumerable: !1,
          value: !0,
        }),
        s
      )
    },
  })
function F1(e, l, a, i, o, s) {
  return (
    c(),
    t(
      'div',
      { class: 'ver-col', style: E({ width: i.width, marginLeft: i.offset }) },
      [n(e.$slots, 'default', {}, void 0, !0)],
      4,
    )
  )
}
const Q1 = S(E1, [
    ['render', F1],
    ['__scopeId', 'data-v-23666f5b'],
    [
      '__file',
      'C:/Users/Jannik/Desktop/Versakit/packages/ui/components/col/src/index.vue',
    ],
  ]),
  U1 = $(Q1),
  J1 = p({
    name: 'VerInput',
    __name: 'index',
    props: {
      placeholder: { type: String, required: !1, default: '' },
      modelValue: { type: [String, Number], required: !1, default: '' },
      disabled: { type: Boolean, required: !1, default: !1 },
      type: { type: String, required: !1, default: 'text' },
    },
    emits: ['update:modelValue'],
    setup(e, { expose: l, emit: a }) {
      l()
      const i = a,
        o = e,
        s = (b) => {
          const y = b.target
          i('update:modelValue', y.value)
        },
        r = u(() => ['ver-input', o.disabled == !1 ? '' : 'is-disabled']),
        h = { emit: i, props: o, input: s, VerClass: r }
      return (
        Object.defineProperty(h, '__isScriptSetup', {
          enumerable: !1,
          value: !0,
        }),
        h
      )
    },
  }),
  G1 = ['disabled', 'value', 'type', 'placeholder']
function R1(e, l, a, i, o, s) {
  return (
    c(),
    t(
      'div',
      { class: w(i.VerClass) },
      [
        m(
          'input',
          {
            disabled: a.disabled,
            value: a.modelValue,
            type: a.type,
            placeholder: a.placeholder,
            onInput: i.input,
          },
          null,
          40,
          G1,
        ),
      ],
      2,
    )
  )
}
const W1 = S(J1, [
    ['render', R1],
    ['__scopeId', 'data-v-aee5a951'],
    [
      '__file',
      'C:/Users/Jannik/Desktop/Versakit/packages/ui/components/input/src/index.vue',
    ],
  ]),
  K1 = $(W1),
  Y1 = p({
    name: 'VerDialog',
    __name: 'index',
    props: {
      title: { type: String, required: !1, default: '标题' },
      modelValue: { type: Boolean, required: !1, default: !1 },
      width: { type: String, required: !1, default: '30%' },
      top: { type: String, required: !1, default: '15vh' },
    },
    emits: ['update:modelValue'],
    setup(e, { expose: l, emit: a }) {
      l()
      const i = e,
        o = a,
        s = {
          props: i,
          emit: o,
          close: () => {
            o('update:modelValue', !1)
          },
          get VerIcon() {
            return F
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
  X1 = { class: 'ver-dialog_header' },
  a5 = { class: 'ver-dialog_title' },
  l5 = { class: 'ver-dialog_body' },
  i5 = { key: 0, class: 'ver-dialog_footer' }
function o5(e, l, a, i, o, s) {
  return (
    c(),
    H(
      R,
      { name: 'fade', persisted: '' },
      {
        default: d(() => [
          a0(
            m(
              'div',
              { class: 'ver-dialog_wrapper', onClick: c0(i.close, ['self']) },
              [
                m(
                  'div',
                  {
                    class: 'ver-dialog',
                    style: E({ width: i.props.width, marginTop: i.props.top }),
                  },
                  [
                    m('div', X1, [
                      n(
                        e.$slots,
                        'title',
                        {},
                        () => [m('span', a5, g(i.props.title), 1)],
                        !0,
                      ),
                      m(
                        'button',
                        { class: 'ver-dialog_headerbtn', onClick: i.close },
                        [V(i.VerIcon, { name: 'x-lg' })],
                      ),
                    ]),
                    m('div', l5, [n(e.$slots, 'default', {}, void 0, !0)]),
                    e.$slots.footer
                      ? (c(),
                        t('div', i5, [n(e.$slots, 'footer', {}, void 0, !0)]))
                      : f('v-if', !0),
                  ],
                  4,
                ),
              ],
              512,
            ),
            [[r0, i.props.modelValue]],
          ),
        ]),
        _: 3,
      },
    )
  )
}
const e5 = S(Y1, [
    ['render', o5],
    ['__scopeId', 'data-v-738f5d96'],
    [
      '__file',
      'C:/Users/Jannik/Desktop/Versakit/packages/ui/components/dialog/src/index.vue',
    ],
  ]),
  s5 = $(e5),
  c5 = p({
    name: 'VerDivider',
    __name: 'index',
    props: {
      line: { type: String, required: !1, default: 'solid' },
      position: { type: String, required: !1, default: 'left' },
      direction: { type: null, required: !1, default: 'horizontal' },
    },
    setup(e, { expose: l }) {
      l()
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
  r5 = { key: 0, class: 'ver-divider-title' }
function h5(e, l, a, i, o, s) {
  return (
    c(),
    t(
      'div',
      {
        class: w([
          'ver-divider',
          { 'ver-vertical': i.props.direction === 'vertical' },
        ]),
        style: E({
          'justify-content': i.props.position,
          'border-top': `1px ${i.props.line} #dcdfe6`,
        }),
      },
      [
        i.props.position
          ? (c(), t('div', r5, [n(e.$slots, 'default', {}, void 0, !0)]))
          : f('v-if', !0),
      ],
      6,
    )
  )
}
const t5 = S(c5, [
    ['render', h5],
    ['__scopeId', 'data-v-a8592bb2'],
    [
      '__file',
      'C:/Users/Jannik/Desktop/Versakit/packages/ui/components/divider/src/index.vue',
    ],
  ]),
  v5 = $(t5),
  n5 = p({
    name: 'VerAvatar',
    __name: 'index',
    props: {
      shape: { type: String, required: !1, default: 'circle' },
      src: { type: String, required: !1, default: '' },
      size: { type: [Number, String], required: !1, default: 50 },
      fit: { type: String, required: !1, default: 'cover' },
      fallback: { type: String, required: !1, default: '' },
    },
    setup(e, { expose: l }) {
      l()
      const a = e
      let i = a.src
      const o = (y) => {
          const M = y.target
          return (M.src = a.fallback)
        },
        s = u(() => {
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
        r = u(() => [
          'ver-avatar',
          a.shape == 'circle' ? 'is-circle' : 'is-square',
        ]),
        h = u(() => [`fit-${a.fit}`]),
        b = {
          props: a,
          get imgURL() {
            return i
          },
          set imgURL(y) {
            i = y
          },
          handleImgError: o,
          size: s,
          VerClass: r,
          imgClass: h,
        }
      return (
        Object.defineProperty(b, '__isScriptSetup', {
          enumerable: !1,
          value: !0,
        }),
        b
      )
    },
  }),
  m5 = ['src'],
  b5 = { key: 1, class: 'ver-avatar-inline' }
function d5(e, l, a, i, o, s) {
  return (
    c(),
    t(
      'span',
      { class: w(i.VerClass), style: E({ width: i.size, height: i.size }) },
      [
        i.imgURL
          ? (c(),
            t(
              'img',
              {
                key: 0,
                class: w(i.imgClass),
                src: a.src,
                alt: '',
                onError: i.handleImgError,
              },
              null,
              42,
              m5,
            ))
          : (c(), t('span', b5, [n(e.$slots, 'default', {}, void 0, !0)])),
        f(' 错误处理 '),
        n(e.$slots, 'error', { class: 'ver-avatar-inline' }, void 0, !0),
      ],
      6,
    )
  )
}
const p5 = S(n5, [
    ['render', d5],
    ['__scopeId', 'data-v-01b83522'],
    [
      '__file',
      'C:/Users/Jannik/Desktop/Versakit/packages/ui/components/avatar/src/index.vue',
    ],
  ]),
  u5 = $(p5),
  f5 = p({
    name: 'VerBadge',
    __name: 'index',
    props: {
      type: { type: String, required: !1, default: 'dot' },
      value: { type: [String, Number], required: !1 },
    },
    setup(e, { expose: l }) {
      l()
      const a = e,
        i = u(() =>
          typeof a.value == 'number' && a.value > 99 ? '99+' : a.value,
        ),
        o = u(() => {
          const r = ['ver-badge']
          return (
            a.type === 'dot' && r.push('ver-badge-dot'),
            a.type === 'number' && r.push('ver-badge-num'),
            a.type === 'text' && r.push('ver-badge-text'),
            r
          )
        }),
        s = { props: a, calcValue: i, badgeClass: o }
      return (
        Object.defineProperty(s, '__isScriptSetup', {
          enumerable: !1,
          value: !0,
        }),
        s
      )
    },
  }),
  y5 = { class: 'ver-badge' }
function M5(e, l, a, i, o, s) {
  return (
    c(),
    t('div', y5, [
      n(e.$slots, 'default', {}, void 0, !0),
      f(' 通过上标文本标签实现徽标 '),
      m(
        'sup',
        { ref: 'verBadge', class: w(i.badgeClass) },
        [
          a.type !== 'dot'
            ? (c(), t(_, { key: 0 }, [I(g(i.calcValue), 1)], 64))
            : f('v-if', !0),
        ],
        2,
      ),
    ])
  )
}
const z5 = S(f5, [
    ['render', M5],
    ['__scopeId', 'data-v-2161f8bd'],
    [
      '__file',
      'C:/Users/Jannik/Desktop/Versakit/packages/ui/components/badge/src/index.vue',
    ],
  ]),
  V5 = $(z5),
  H5 = p({
    name: 'VerCard',
    __name: 'index',
    props: { shadow: { type: String, required: !1, default: 'always' } },
    setup(e, { expose: l }) {
      l()
      const a = e,
        i = u(() => [
          'ver-card',
          a.shadow == 'always'
            ? 'is-shadow-always'
            : a.shadow == 'hover'
              ? 'is-shadow-hover'
              : 'is-shadow-never',
        ]),
        o = { props: a, VerClass: i }
      return (
        Object.defineProperty(o, '__isScriptSetup', {
          enumerable: !1,
          value: !0,
        }),
        o
      )
    },
  }),
  C5 = { key: 0, class: 'ver-card-header' },
  A5 = { class: 'ver-card-body' },
  w5 = { key: 1, class: 'ver-card-footer' }
function x5(e, l, a, i, o, s) {
  return (
    c(),
    t(
      'div',
      { class: w(i.VerClass) },
      [
        e.$slots.header
          ? (c(), t('div', C5, [n(e.$slots, 'header', {}, void 0, !0)]))
          : f('v-if', !0),
        m('div', A5, [n(e.$slots, 'default', {}, void 0, !0)]),
        e.$slots.footer
          ? (c(), t('div', w5, [n(e.$slots, 'footer', {}, void 0, !0)]))
          : f('v-if', !0),
      ],
      2,
    )
  )
}
const L5 = S(H5, [
    ['render', x5],
    ['__scopeId', 'data-v-50b94cc5'],
    [
      '__file',
      'C:/Users/Jannik/Desktop/Versakit/packages/ui/components/card/src/index.vue',
    ],
  ]),
  B5 = $(L5),
  g5 = p({
    name: 'VerTag',
    __name: 'index',
    props: {
      type: { type: null, required: !1, default: 'primary' },
      plain: { type: Boolean, required: !1, default: !1 },
      size: { type: null, required: !1, default: 'md' },
      round: { type: Boolean, required: !1, default: !1 },
    },
    setup(e, { expose: l }) {
      l()
      const a = e,
        i = u(() => [
          'ver-tag',
          a.type == 'primary' ? 'ver-tag-primary' : `ver-tag-${a.type}`,
          a.round == !1 ? '' : 'is-round',
          a.plain == !1 ? '' : 'is-plain',
          a.size == 'md' ? '' : `is-${a.size}`,
        ]),
        o = { props: a, tClass: i }
      return (
        Object.defineProperty(o, '__isScriptSetup', {
          enumerable: !1,
          value: !0,
        }),
        o
      )
    },
  })
function k5(e, l, a, i, o, s) {
  return (
    c(),
    t(
      'span',
      { class: w(i.tClass) },
      [n(e.$slots, 'default', {}, void 0, !0)],
      2,
    )
  )
}
const q5 = S(g5, [
    ['render', k5],
    ['__scopeId', 'data-v-5c23025e'],
    [
      '__file',
      'C:/Users/Jannik/Desktop/Versakit/packages/ui/components/tag/src/index.vue',
    ],
  ]),
  _5 = $(q5),
  $5 = p({
    name: 'VerDrawer',
    __name: 'index',
    props: {
      title: { type: String, required: !1 },
      modelValue: { type: Boolean, required: !1, default: !1 },
      direction: { type: String, required: !1, default: 'left' },
    },
    emits: ['update:modelValue'],
    setup(e, { expose: l, emit: a }) {
      l()
      const i = e,
        o = a,
        s = {
          props: i,
          emit: o,
          handleClose: () => {
            o('update:modelValue', !1)
          },
          get VerIcon() {
            return F
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
  S5 = { class: 'ver-drawer' },
  Z5 = { class: 'ver-drawer_header' },
  P5 = { class: 'ver-drawer_title' },
  j5 = { class: 'ver-drawer_body' }
function I5(e, l, a, i, o, s) {
  return (
    c(),
    H(
      R,
      { name: 'fade', persisted: '' },
      {
        default: d(() => [
          a0(
            m(
              'div',
              {
                class: w([
                  'ver-drawer-wrapper',
                  `ver-drawer-${i.props.direction}`,
                ]),
                onClick: c0(i.handleClose, ['self']),
              },
              [
                m('div', S5, [
                  m('div', Z5, [
                    m('span', P5, g(i.props.title ? i.props.title : '标题'), 1),
                    m(
                      'button',
                      { class: 'ver-drawer_headerbtn', onClick: i.handleClose },
                      [V(i.VerIcon, { name: 'x-lg' })],
                    ),
                  ]),
                  m('div', j5, [n(e.$slots, 'default', {}, void 0, !0)]),
                ]),
              ],
              2,
            ),
            [[r0, i.props.modelValue]],
          ),
        ]),
        _: 3,
      },
    )
  )
}
const T5 = S($5, [
    ['render', I5],
    ['__scopeId', 'data-v-ae7ab880'],
    [
      '__file',
      'C:/Users/Jannik/Desktop/Versakit/packages/ui/components/drawer/src/index.vue',
    ],
  ]),
  N5 = $(T5),
  O5 = p({
    name: 'VerSwitch',
    __name: 'index',
    props: {
      modelValue: { type: Boolean, required: !1, default: !1 },
      size: { type: null, required: !1, default: 'md' },
    },
    emits: ['input', 'update:modelValue'],
    setup(e, { expose: l, emit: a }) {
      l()
      const i = e,
        o = a,
        s = u(() => [
          'ver-switch',
          i.modelValue === !1 ? '' : 'is-checked',
          i.size && i.size !== 'md' ? `is-${i.size}` : '',
        ]),
        r = {
          props: i,
          emit: o,
          VerClass: s,
          handClick: () => {
            o('input', !i.modelValue), o('update:modelValue', !i.modelValue)
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
  D5 = { ref: 'core', class: 'ver-switch-core' }
function E5(e, l, a, i, o, s) {
  return (
    c(),
    t(
      'label',
      { class: w(i.VerClass), onClick: i.handClick },
      [
        m(
          'span',
          D5,
          l[0] ||
            (l[0] = [m('span', { class: 'ver-switch-button' }, null, -1)]),
          512,
        ),
      ],
      2,
    )
  )
}
const F5 = S(O5, [
    ['render', E5],
    ['__scopeId', 'data-v-e94b38ff'],
    [
      '__file',
      'C:/Users/Jannik/Desktop/Versakit/packages/ui/components/switch/src/index.vue',
    ],
  ]),
  Q5 = $(F5),
  U5 = p({
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
    setup(e, { expose: l, emit: a }) {
      l()
      const i = L(),
        o = a,
        s = e,
        r = u({
          get: () => s.modelValue,
          set: (b) => {
            o('update:modelValue', b),
              i.value && (i.value.checked == r.value) == s.label
          },
        }),
        h = { radio: i, emit: o, props: s, modelValue: r }
      return (
        Object.defineProperty(h, '__isScriptSetup', {
          enumerable: !1,
          value: !0,
        }),
        h
      )
    },
  }),
  J5 = { class: 'ver-radio_input' },
  G5 = ['disabled', 'name', 'value'],
  R5 = { class: 'ver-radio_label' }
function W5(e, l, a, i, o, s) {
  return (
    c(),
    t(
      'label',
      {
        class: w([
          'ver-radio',
          { 'is-checked': a.label == i.modelValue, 'is-disabled': a.disabled },
        ]),
      },
      [
        m('span', J5, [
          l[1] || (l[1] = m('span', { class: 'ver-radio_inner' }, null, -1)),
          a0(
            m(
              'input',
              {
                disabled: a.disabled,
                ref: 'radio',
                class: 'ver-radio_original',
                name: a.name,
                'onUpdate:modelValue':
                  l[0] || (l[0] = (r) => (i.modelValue = r)),
                value: i.props.label,
                type: 'radio',
              },
              null,
              8,
              G5,
            ),
            [[Y0, i.modelValue]],
          ),
        ]),
        m('span', R5, [
          n(e.$slots, 'default', {}, void 0, !0),
          e.$slots.default
            ? f('v-if', !0)
            : (c(), t(_, { key: 0 }, [I(g(a.label), 1)], 64)),
        ]),
      ],
      2,
    )
  )
}
const K5 = S(U5, [
    ['render', W5],
    ['__scopeId', 'data-v-b50043c3'],
    [
      '__file',
      'C:/Users/Jannik/Desktop/Versakit/packages/ui/components/radio/src/index.vue',
    ],
  ]),
  Y5 = $(K5),
  X5 = p({
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
    setup(e, { expose: l }) {
      const a = L(!1),
        i = e,
        o = L(0),
        s = u(() => s2(i.id)),
        r = u(() => i.offset + s.value),
        h = u(() => o.value + r.value),
        b = u(() => ({ top: r.value + 'px' })),
        y = u(() => {
          switch (i.type) {
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
        M = u(() => {
          switch (i.type) {
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
        z = u(() => [
          'ver-message',
          i.type == 'info' ? '' : `ver-message-${i.type}`,
          i.plain == !1 ? '' : `ver-message-${i.type}-plain`,
        ])
      T(() => {
        ;(a.value = !0),
          setTimeout(() => {
            a.value = !1
          }, i.duration)
      }),
        l({ bottomOffset: h })
      const C = {
        isVisable: a,
        props: i,
        height: o,
        lastOffset: s,
        topOffset: r,
        bottomOffset: h,
        cssStyle: b,
        iconColor: y,
        iconName: M,
        VerClass: z,
        get VerIcon() {
          return F
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
  a2 = { class: 'text' }
function l2(e, l, a, i, o, s) {
  return (
    c(),
    H(
      R,
      { name: 'down', onAfterLeave: a.destroy, persisted: '' },
      {
        default: d(() => [
          a0(
            m(
              'div',
              { class: w(i.VerClass), style: E(i.cssStyle) },
              [
                V(
                  i.VerIcon,
                  { color: i.iconColor, name: i.iconName },
                  null,
                  8,
                  ['color', 'name'],
                ),
                m('span', a2, g(a.content), 1),
              ],
              6,
            ),
            [[r0, i.isVisable]],
          ),
        ]),
        _: 1,
      },
      8,
      ['onAfterLeave'],
    )
  )
}
const i2 = S(X5, [
    ['render', l2],
    ['__scopeId', 'data-v-07a73df1'],
    [
      '__file',
      'C:/Users/Jannik/Desktop/Versakit/packages/ui/components/message/src/index.vue',
    ],
  ]),
  Y = S0([])
let o2 = 1
const e2 = ({ type: e, content: l, plain: a, duration: i = 3e3 }) => {
    const o = `message_${o2++}`,
      s = document.createElement('div'),
      r = {
        type: e,
        content: l,
        plain: a,
        duration: i,
        id: o,
        destroy: () => {
          const M = Y.findIndex((z) => z.id === o)
          M !== -1 && (Y.splice(M, 1), o0(null, s))
        },
      },
      h = Z0(i2, r)
    o0(h, s), document.body.appendChild(s.firstElementChild)
    const b = h.component,
      y = { id: o, vnode: h, vm: b, props: r }
    return Y.push(y), y
  },
  s2 = (e) => {
    const l = Y.findIndex((a) => a.id === e)
    return l <= 0 ? 0 : Y[l - 1].vm.exposed.bottomOffset.value + 50
  },
  Ua = $(e2),
  c2 = p({
    name: 'VerTextArea',
    __name: 'index',
    props: {
      disabled: { type: Boolean, required: !1, default: !1 },
      placeholder: { type: String, required: !1, default: '' },
      modelValue: { type: String, required: !1, default: '' },
      maxlength: { type: null, required: !1, default: void 0 },
    },
    emits: ['update:modelValue', 'input'],
    setup(e, { expose: l, emit: a }) {
      var i
      l()
      const o = e,
        s = L(((i = o.modelValue) == null ? void 0 : i.length) || 0),
        r = L(),
        h = a,
        b = () => {
          h('update:modelValue', r.value.value),
            (s.value = r.value.value.length)
        },
        y = u(() => ['ver-textarea', o.disabled == !1 ? '' : 'is-disabled']),
        M = { props: o, n: s, textareaRef: r, emit: h, input: b, tClass: y }
      return (
        Object.defineProperty(M, '__isScriptSetup', {
          enumerable: !1,
          value: !0,
        }),
        M
      )
    },
  }),
  r2 = ['disabled', 'placeholder', 'maxlength', 'value'],
  h2 = { key: 0, class: 'maxlength-box' }
function t2(e, l, a, i, o, s) {
  return (
    c(),
    t(
      'div',
      { class: w(i.tClass) },
      [
        m(
          'textarea',
          {
            ref: 'textareaRef',
            disabled: i.props.disabled,
            placeholder: a.placeholder,
            maxlength: a.maxlength,
            value: a.modelValue,
            onInput: i.input,
          },
          null,
          40,
          r2,
        ),
        a.maxlength != null && a.maxlength > 0
          ? (c(), t('div', h2, g(`${i.n}/${a.maxlength}`), 1))
          : f('v-if', !0),
      ],
      2,
    )
  )
}
const v2 = S(c2, [
    ['render', t2],
    ['__scopeId', 'data-v-314a872f'],
    [
      '__file',
      'C:/Users/Jannik/Desktop/Versakit/packages/ui/components/textarea/src/index.vue',
    ],
  ]),
  n2 = $(v2),
  m2 = p({
    name: 'VerContainer',
    __name: 'index',
    setup(e, { expose: l }) {
      l()
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
  b2 = { class: 'ver-container' }
function d2(e, l, a, i, o, s) {
  return c(), t('div', b2, [n(e.$slots, 'default', {}, void 0, !0)])
}
const p2 = S(m2, [
    ['render', d2],
    ['__scopeId', 'data-v-05f18007'],
    [
      '__file',
      'C:/Users/Jannik/Desktop/Versakit/packages/ui/components/container/src/index.vue',
    ],
  ]),
  u2 = $(p2),
  f2 = p({
    name: 'VerHeader',
    __name: 'index',
    setup(e, { expose: l }) {
      l()
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
  y2 = { class: 'ver-header' }
function M2(e, l, a, i, o, s) {
  return c(), t('div', y2, [n(e.$slots, 'default', {}, void 0, !0)])
}
const z2 = S(f2, [
    ['render', M2],
    ['__scopeId', 'data-v-5c84cd81'],
    [
      '__file',
      'C:/Users/Jannik/Desktop/Versakit/packages/ui/components/header/src/index.vue',
    ],
  ]),
  V2 = $(z2),
  H2 = p({
    name: 'VerMain',
    __name: 'index',
    setup(e, { expose: l }) {
      l()
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
  C2 = { class: 'ver-main' }
function A2(e, l, a, i, o, s) {
  return c(), t('div', C2, [n(e.$slots, 'default', {}, void 0, !0)])
}
const w2 = S(H2, [
    ['render', A2],
    ['__scopeId', 'data-v-843ea6c9'],
    [
      '__file',
      'C:/Users/Jannik/Desktop/Versakit/packages/ui/components/main/src/index.vue',
    ],
  ]),
  x2 = $(w2),
  L2 = p({
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
    setup(e, { expose: l }) {
      const a = e,
        i = L(0),
        o = u(() => S2(a.id)),
        s = u(() => a.offset + o.value),
        r = u(() => i.value + s.value),
        h = u(() => {
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
        b = u(() => {
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
        y = u(() => {
          const q = {}
          switch (a.position) {
            case 'top-right':
              return {
                ...q,
                position: 'fixed',
                top: s.value + 'px',
                right: '20px',
              }
            case 'top-left':
              return {
                ...q,
                position: 'fixed',
                top: s.value + 'px',
                left: '20px',
              }
            case 'bottom-right':
              return {
                ...q,
                position: 'fixed',
                bottom: r.value + 'px',
                right: '20px',
              }
            case 'bottom-left':
              return {
                ...q,
                position: 'fixed',
                bottom: r.value + 'px',
                left: '20px',
              }
            default:
              return q
          }
        }),
        M = L(!1),
        z = () => {
          M.value = !1
        },
        C = u(() => [
          'ver-notification',
          a.plain == !1 ? '' : `ver-notification-${a.type}-plain`,
        ])
      T(() => {
        ;(M.value = !0),
          setTimeout(() => {
            M.value = !1
          }, a.duration)
      }),
        l({ bottomOffset: r })
      const x = {
        props: a,
        height: i,
        lastOffset: o,
        topOffset: s,
        bottomOffset: r,
        iconColor: h,
        iconName: b,
        positionStyle: y,
        isVisable: M,
        handClose: z,
        VerClass: C,
        get VerIcon() {
          return F
        },
      }
      return (
        Object.defineProperty(x, '__isScriptSetup', {
          enumerable: !1,
          value: !0,
        }),
        x
      )
    },
  }),
  B2 = { class: 'ver-notification-top' },
  g2 = { class: 'ver-notification-title' },
  k2 = { class: 'ver-notification-content' }
function q2(e, l, a, i, o, s) {
  return (
    c(),
    H(
      R,
      { name: 'slide-fade', onAfterLeave: i.props.destroy, persisted: '' },
      {
        default: d(() => [
          a0(
            m(
              'div',
              { class: w(i.VerClass), style: E(i.positionStyle) },
              [
                m('div', B2, [
                  V(
                    i.VerIcon,
                    { size: 25, color: i.iconColor, name: i.iconName },
                    null,
                    8,
                    ['color', 'name'],
                  ),
                  m('h2', g2, g(a.title), 1),
                ]),
                m('div', k2, [m('span', null, g(a.content), 1)]),
                m(
                  'div',
                  { class: 'ver-notification-closebtn', onClick: i.handClose },
                  [V(i.VerIcon, { name: 'cross' })],
                ),
              ],
              6,
            ),
            [[r0, i.isVisable]],
          ),
        ]),
        _: 1,
      },
      8,
      ['onAfterLeave'],
    )
  )
}
const D0 = S(L2, [
    ['render', q2],
    ['__scopeId', 'data-v-ff8b07c1'],
    [
      '__file',
      'C:/Users/Jannik/Desktop/Versakit/packages/ui/components/notification/src/index.vue',
    ],
  ]),
  X = S0([])
let _2 = 1
const $2 = ({
    type: e,
    title: l,
    content: a,
    plain: i,
    position: o,
    duration: s = 3e3,
  }) => {
    const r = `message_${_2++}`,
      h = document.createElement('div'),
      b = {
        type: e,
        title: l,
        plain: i,
        content: a,
        position: o,
        duration: s,
        destroy: () => {
          const C = X.findIndex((x) => x.id === r)
          C !== -1 && (X.splice(C, 1), o0(null, h))
        },
        id: r,
      },
      y = Z0(D0, b)
    o0(y, h), document.body.appendChild(h.firstElementChild)
    const M = y.component,
      z = { id: r, vnode: y, vm: M, props: b }
    return X.push(z), z
  },
  S2 = (e) => {
    const l = X.findIndex((a) => a.id === e)
    return l <= 0 ? 0 : X[l - 1].vm.exposed.bottomOffset.value + 70
  },
  Ja = $($2),
  Z2 = p({
    name: 'VerTab',
    __name: 'index',
    props: { tabList: { type: Array, required: !1, default: () => [] } },
    setup(e, { expose: l }) {
      l()
      const a = e,
        i = L(0),
        o = {
          props: a,
          currentTabIndex: i,
          switchTab: (s) => {
            i.value = s
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
  P2 = { class: 'ver-tab' },
  j2 = { class: 'tab-header' },
  I2 = ['onClick'],
  T2 = { class: 'tab-label' }
function N2(e, l, a, i, o, s) {
  return (
    c(),
    t('div', P2, [
      m('div', j2, [
        (c(!0),
        t(
          _,
          null,
          P(
            i.props.tabList,
            (r, h) => (
              c(),
              t(
                'div',
                {
                  key: r.id,
                  class: w([
                    'tab-item',
                    { 'active-tab': i.currentTabIndex === h },
                  ]),
                  onClick: (b) => i.switchTab(h),
                },
                [m('span', T2, g(r.label), 1)],
                10,
                I2,
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
          key: `tab-content-${i.props.tabList[i.currentTabIndex].name}`,
        },
        [n(e.$slots, i.props.tabList[i.currentTabIndex].name, {}, void 0, !0)],
      )),
    ])
  )
}
const O2 = S(Z2, [
    ['render', N2],
    ['__scopeId', 'data-v-0f852bbb'],
    [
      '__file',
      'C:/Users/Jannik/Desktop/Versakit/packages/ui/components/tab/src/index.vue',
    ],
  ]),
  D2 = $(O2),
  E2 = p({
    __name: 'index',
    props: {
      right: { type: String, required: !1, default: '60' },
      bottom: { type: String, required: !1, default: '40' },
      visibleHeight: { type: String, required: !1 },
      icon: { type: String, required: !1, default: 'caret-up-fill' },
      iconColor: { type: String, required: !1, default: '#8b5cf6' },
      visibilityHeight: { type: String, required: !1, default: '150' },
    },
    setup(e, { expose: l }) {
      l()
      const a = e,
        i = u(() => a.iconColor || '#8b5cf6'),
        o = u(() => [
          'ver-backTop',
          a.visibleHeight ? `is-visibleHeight-${a.visibleHeight}` : '',
        ]),
        s = u(() => ({ right: `${a.right}px`, bottom: `${a.bottom}px` })),
        r = e0(null),
        h = e0(),
        b = L(!0),
        y = () => {
          var x
          ;(x = r.value) == null || x.scrollTo({ top: 0, behavior: 'smooth' })
        },
        M = () => {
          r.value &&
            (b.value = r.value.scrollTop >= parseInt(a.visibilityHeight))
        },
        z = f1(M, 300, !0)
      z1(h, 'scroll', z),
        T(() => {
          ;(h.value = document), (r.value = document.documentElement), M()
        })
      const C = {
        props: a,
        iconColor: i,
        Verclass: o,
        backTopStyle: s,
        el: r,
        container: h,
        visible: b,
        handleClick: y,
        handleScroll: M,
        handleScrollThrottled: z,
        get VerIcon() {
          return F
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
  F2 = { key: 1 }
function Q2(e, l, a, i, o, s) {
  return i.visible
    ? (c(),
      t(
        'div',
        {
          key: 0,
          class: w(i.Verclass),
          style: E(i.backTopStyle),
          onClick: c0(i.handleClick, ['stop']),
        },
        [
          a.icon
            ? (c(),
              H(
                i.VerIcon,
                { key: 0, name: a.icon, color: i.iconColor, size: '26' },
                null,
                8,
                ['name', 'color'],
              ))
            : (c(), t('span', F2, [n(e.$slots, 'default', {}, void 0, !0)])),
        ],
        6,
      ))
    : f('v-if', !0)
}
const U2 = S(E2, [
    ['render', Q2],
    ['__scopeId', 'data-v-809c9ab7'],
    [
      '__file',
      'C:/Users/Jannik/Desktop/Versakit/packages/ui/components/backtop/src/index.vue',
    ],
  ]),
  J2 = $(U2),
  G2 = p({
    name: 'VerResult',
    __name: 'index',
    props: {
      status: { type: String, required: !1, default: 'success' },
      iconName: { type: String, required: !1, default: '' },
    },
    setup(e, { expose: l }) {
      l()
      const a = e,
        i = u(() => {
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
        o = u(() => {
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
        s = u(() => {
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
        r = u(() => {
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
          VerClass: i,
          VerContent: o,
          computedIconName: s,
          computedColor: r,
          get VerIcon() {
            return F
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
  R2 = { class: 'result-content' }
function W2(e, l, a, i, o, s) {
  return (
    c(),
    t(
      'div',
      { class: w(i.VerClass) },
      [
        V(
          i.VerIcon,
          { name: i.computedIconName, size: '120', color: i.computedColor },
          null,
          8,
          ['name', 'color'],
        ),
        m('div', R2, [
          n(e.$slots, 'content', {}, () => [I(g(i.VerContent), 1)], !0),
        ]),
      ],
      2,
    )
  )
}
const K2 = S(G2, [
    ['render', W2],
    ['__scopeId', 'data-v-291e3111'],
    [
      '__file',
      'C:/Users/Jannik/Desktop/Versakit/packages/ui/components/result/src/index.vue',
    ],
  ]),
  Y2 = $(K2),
  X2 = p({
    name: 'VerEmpty',
    __name: 'index',
    props: {
      iconName: { type: String, required: !1, default: '' },
      content: { type: String, required: !1, default: '你什么也找不到' },
      showDescription: { type: Boolean, required: !1, default: !0 },
      showButton: { type: Boolean, required: !1, default: !0 },
    },
    setup(e, { expose: l }) {
      l()
      const a = e,
        i = u(() => (a.iconName ? a.iconName : 'ban')),
        o = {
          props: a,
          computedIconName: i,
          get VerIcon() {
            return F
          },
          get VerButton() {
            return O0
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
  a3 = { class: 'ver-empty' },
  l3 = { key: 0, class: 'ver-empty__button' }
function i3(e, l, a, i, o, s) {
  return (
    c(),
    t('div', a3, [
      V(
        i.VerIcon,
        {
          name: i.computedIconName,
          size: '80',
          class: 'ver-empty__icon',
          color: 'c1c1c1',
        },
        null,
        8,
        ['name'],
      ),
      m('div', null, [
        i.props.showDescription
          ? n(
              e.$slots,
              'content',
              { key: 0, class: 'ver-empty__description' },
              () => [I(g(i.props.content), 1)],
            )
          : f('v-if', !0),
      ]),
      a.showButton
        ? (c(),
          t('div', l3, [
            V(
              i.VerButton,
              { ghost: '' },
              { default: d(() => l[0] || (l[0] = [I('看看别的')])), _: 1 },
            ),
          ]))
        : f('v-if', !0),
    ])
  )
}
const o3 = S(X2, [
    ['render', i3],
    [
      '__file',
      'C:/Users/Jannik/Desktop/Versakit/packages/ui/components/empty/src/index.vue',
    ],
  ]),
  e3 = $(o3),
  s3 = p({
    name: 'VerPanel',
    __name: 'index',
    props: { shadow: { type: String, required: !1, default: 'always' } },
    setup(e, { expose: l }) {
      l()
      const a = e,
        i = u(() => [
          'ver-panel',
          a.shadow === 'always'
            ? 'is-shadow-always'
            : a.shadow === 'hover'
              ? 'is-shadow-hover'
              : 'is-shadow-never',
        ]),
        o = { props: a, classes: i }
      return (
        Object.defineProperty(o, '__isScriptSetup', {
          enumerable: !1,
          value: !0,
        }),
        o
      )
    },
  })
function c3(e, l, a, i, o, s) {
  return (
    c(),
    t(
      'div',
      { class: w(['ver-panel', i.classes]) },
      [n(e.$slots, 'default', {}, void 0, !0)],
      2,
    )
  )
}
const r3 = S(s3, [
    ['render', c3],
    ['__scopeId', 'data-v-bfe039ac'],
    [
      '__file',
      'C:/Users/Jannik/Desktop/Versakit/packages/ui/components/panel/src/index.vue',
    ],
  ]),
  h3 = $(r3),
  t3 = {
    mounted(e, l) {
      const { position: a, overflow: i } = getComputedStyle(e)
      a == 'static' && (e.style.position = 'relative'),
        i !== 'hidden' && (e.style.overflow = 'hidden'),
        e.addEventListener('click', function (o) {
          var s, r
          const h = document.createElement('span'),
            b = Math.max(e.offsetWidth, e.offsetHeight) * 2,
            y = (((s = l.value) == null ? void 0 : s.duration) ?? 500) / 1e3,
            M =
              ((r = l.value) == null ? void 0 : r.color) ??
              'rgba(0, 0, 0, .15)',
            { x: z, y: C } = e.getBoundingClientRect(),
            { clientX: x, clientY: q } = o
          ;(h.style.width = b + 'px'),
            (h.style.height = b + 'px'),
            (h.style.position = 'absolute'),
            (h.style.backgroundColor = M),
            (h.style.top = q - C - b / 2 + 'px'),
            (h.style.left = x - z - b / 2 + 'px'),
            (h.style.transform = 'scale(0)'),
            (h.style.transition = `transform ${y}s ease-in, opacity ${y}s ease-in`),
            (h.style.borderRadius = '50%'),
            (h.style.pointerEvents = 'none'),
            e.appendChild(h),
            h.addEventListener('transitionend', function () {
              var Z
              ;(Z = h.parentElement) == null || Z.removeChild(this)
            }),
            requestAnimationFrame(() => {
              ;(h.style.transform = 'scale(1)'), (h.style.opacity = '0')
            })
        })
    },
  }
if (typeof window < 'u') {
  let e = function () {
    var l = document.body,
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
      l.insertBefore(a, l.lastChild)
  }
  document.readyState === 'loading'
    ? document.addEventListener('DOMContentLoaded', e)
    : e()
}
const _0 = [
    O0,
    D1,
    _1,
    j1,
    U1,
    K1,
    s5,
    u5,
    V5,
    B5,
    h3,
    _5,
    v5,
    N5,
    Q5,
    Y5,
    n2,
    u2,
    V2,
    x2,
    D0,
    D2,
    F,
    J2,
    Y2,
    e3,
  ],
  v3 = {
    install: (e) => {
      for (const l in _0) e.component(l, _0[l]), e.directive('ripple', t3)
    },
  },
  n3 = p({
    __name: 'VPBadge',
    props: { text: {}, type: { default: 'tip' } },
    setup(e) {
      return (l, a) => (
        c(),
        t(
          'span',
          { class: w(['VPBadge', l.type]) },
          [n(l.$slots, 'default', {}, () => [I(g(l.text), 1)])],
          2,
        )
      )
    },
  }),
  m3 = { key: 0, class: 'VPBackdrop' },
  b3 = p({
    __name: 'VPBackdrop',
    props: { show: { type: Boolean } },
    setup(e) {
      return (l, a) => (
        c(),
        H(
          R,
          { name: 'fade' },
          {
            default: d(() => [l.show ? (c(), t('div', m3)) : f('', !0)]),
            _: 1,
          },
        )
      )
    },
  }),
  d3 = A(b3, [['__scopeId', 'data-v-25587554']]),
  B = X0
function p3(e, l) {
  let a,
    i = !1
  return () => {
    a && clearTimeout(a),
      i
        ? (a = setTimeout(e, l))
        : (e(), (i = !0) && setTimeout(() => (i = !1), l))
  }
}
function M0(e) {
  return /^\//.test(e) ? e : `/${e}`
}
function x0(e) {
  const {
    pathname: l,
    search: a,
    hash: i,
    protocol: o,
  } = new URL(e, 'http://a.com')
  if (a1(e) || e.startsWith('#') || !o.startsWith('http') || !l1(l)) return e
  const { site: s } = B(),
    r =
      l.endsWith('/') || l.endsWith('.html')
        ? e
        : e.replace(
            /(?:(^\.+)\/)?.*$/,
            `$1${l.replace(/(\.md)?$/, s.value.cleanUrls ? '' : '.html')}${a}${i}`,
          )
  return H0(r)
}
function l0({ correspondingLink: e = !1 } = {}) {
  const { site: l, localeIndex: a, page: i, theme: o, hash: s } = B(),
    r = u(() => {
      var b, y
      return {
        label: (b = l.value.locales[a.value]) == null ? void 0 : b.label,
        link:
          ((y = l.value.locales[a.value]) == null ? void 0 : y.link) ||
          (a.value === 'root' ? '/' : `/${a.value}/`),
      }
    })
  return {
    localeLinks: u(() =>
      Object.entries(l.value.locales).flatMap(([b, y]) =>
        r.value.label === y.label
          ? []
          : {
              text: y.label,
              link:
                u3(
                  y.link || (b === 'root' ? '/' : `/${b}/`),
                  o.value.i18nRouting !== !1 && e,
                  i.value.relativePath.slice(r.value.link.length - 1),
                  !l.value.cleanUrls,
                ) + s.value,
            },
      ),
    ),
    currentLang: r,
  }
}
function u3(e, l, a, i) {
  return l
    ? e.replace(/\/$/, '') +
        M0(
          a
            .replace(/(^|\/)index\.md$/, '$1')
            .replace(/\.md$/, i ? '.html' : ''),
        )
    : e
}
const f3 = { class: 'NotFound' },
  y3 = { class: 'code' },
  M3 = { class: 'title' },
  z3 = { class: 'quote' },
  V3 = { class: 'action' },
  H3 = ['href', 'aria-label'],
  C3 = p({
    __name: 'NotFound',
    setup(e) {
      const { theme: l } = B(),
        { currentLang: a } = l0()
      return (i, o) => {
        var s, r, h, b, y
        return (
          c(),
          t('div', f3, [
            m(
              'p',
              y3,
              g(((s = v(l).notFound) == null ? void 0 : s.code) ?? '404'),
              1,
            ),
            m(
              'h1',
              M3,
              g(
                ((r = v(l).notFound) == null ? void 0 : r.title) ??
                  'PAGE NOT FOUND',
              ),
              1,
            ),
            o[0] || (o[0] = m('div', { class: 'divider' }, null, -1)),
            m(
              'blockquote',
              z3,
              g(
                ((h = v(l).notFound) == null ? void 0 : h.quote) ??
                  "But if you don't change your direction, and if you keep looking, you may end up where you are heading.",
              ),
              1,
            ),
            m('div', V3, [
              m(
                'a',
                {
                  class: 'link',
                  href: v(H0)(v(a).link),
                  'aria-label':
                    ((b = v(l).notFound) == null ? void 0 : b.linkLabel) ??
                    'go to home',
                },
                g(
                  ((y = v(l).notFound) == null ? void 0 : y.linkText) ??
                    'Take me home',
                ),
                9,
                H3,
              ),
            ]),
          ])
        )
      }
    },
  }),
  A3 = A(C3, [['__scopeId', 'data-v-d09902d5']])
function E0(e, l) {
  if (Array.isArray(e)) return i0(e)
  if (e == null) return []
  l = M0(l)
  const a = Object.keys(e)
      .sort((o, s) => s.split('/').length - o.split('/').length)
      .find((o) => l.startsWith(M0(o))),
    i = a ? e[a] : []
  return Array.isArray(i) ? i0(i) : i0(i.items, i.base)
}
function w3(e) {
  const l = []
  let a = 0
  for (const i in e) {
    const o = e[i]
    if (o.items) {
      a = l.push(o)
      continue
    }
    l[a] || l.push({ items: [] }), l[a].items.push(o)
  }
  return l
}
function x3(e) {
  const l = []
  function a(i) {
    for (const o of i)
      o.text &&
        o.link &&
        l.push({ text: o.text, link: o.link, docFooterText: o.docFooterText }),
        o.items && a(o.items)
  }
  return a(e), l
}
function z0(e, l) {
  return Array.isArray(l)
    ? l.some((a) => z0(e, a))
    : G(e, l.link)
      ? !0
      : l.items
        ? z0(e, l.items)
        : !1
}
function i0(e, l) {
  return [...e].map((a) => {
    const i = { ...a },
      o = i.base || l
    return (
      o && i.link && (i.link = o + i.link),
      i.items && (i.items = i0(i.items, o)),
      i
    )
  })
}
function Q() {
  const { frontmatter: e, page: l, theme: a } = B(),
    i = f0('(min-width: 960px)'),
    o = L(!1),
    s = u(() => {
      const Z = a.value.sidebar,
        k = l.value.relativePath
      return Z ? E0(Z, k) : []
    }),
    r = L(s.value)
  D(s, (Z, k) => {
    JSON.stringify(Z) !== JSON.stringify(k) && (r.value = s.value)
  })
  const h = u(
      () =>
        e.value.sidebar !== !1 &&
        r.value.length > 0 &&
        e.value.layout !== 'home',
    ),
    b = u(() =>
      y
        ? e.value.aside == null
          ? a.value.aside === 'left'
          : e.value.aside === 'left'
        : !1,
    ),
    y = u(() =>
      e.value.layout === 'home'
        ? !1
        : e.value.aside != null
          ? !!e.value.aside
          : a.value.aside !== !1,
    ),
    M = u(() => h.value && i.value),
    z = u(() => (h.value ? w3(r.value) : []))
  function C() {
    o.value = !0
  }
  function x() {
    o.value = !1
  }
  function q() {
    o.value ? x() : C()
  }
  return {
    isOpen: o,
    sidebar: r,
    sidebarGroups: z,
    hasSidebar: h,
    hasAside: y,
    leftAside: b,
    isSidebarEnabled: M,
    open: C,
    close: x,
    toggle: q,
  }
}
function L3(e, l) {
  let a
  h0(() => {
    a = e.value ? document.activeElement : void 0
  }),
    T(() => {
      window.addEventListener('keyup', i)
    }),
    C0(() => {
      window.removeEventListener('keyup', i)
    })
  function i(o) {
    o.key === 'Escape' && e.value && (l(), a == null || a.focus())
  }
}
function B3(e) {
  const { page: l, hash: a } = B(),
    i = L(!1),
    o = u(() => e.value.collapsed != null),
    s = u(() => !!e.value.link),
    r = L(!1),
    h = () => {
      r.value = G(l.value.relativePath, e.value.link)
    }
  D([l, e, a], h), T(h)
  const b = u(() =>
      r.value
        ? !0
        : e.value.items
          ? z0(l.value.relativePath, e.value.items)
          : !1,
    ),
    y = u(() => !!(e.value.items && e.value.items.length))
  h0(() => {
    i.value = !!(o.value && e.value.collapsed)
  }),
    A0(() => {
      ;(r.value || b.value) && (i.value = !1)
    })
  function M() {
    o.value && (i.value = !i.value)
  }
  return {
    collapsed: i,
    collapsible: o,
    isLink: s,
    isActiveLink: r,
    hasActiveLink: b,
    hasChildren: y,
    toggle: M,
  }
}
function g3() {
  const { hasSidebar: e } = Q(),
    l = f0('(min-width: 960px)'),
    a = f0('(min-width: 1280px)')
  return {
    isAsideEnabled: u(() =>
      !a.value && !l.value ? !1 : e.value ? a.value : l.value,
    ),
  }
}
const V0 = []
function F0(e) {
  return (
    (typeof e.outline == 'object' &&
      !Array.isArray(e.outline) &&
      e.outline.label) ||
    e.outlineTitle ||
    'On this page'
  )
}
function L0(e) {
  const l = [...document.querySelectorAll('.VPDoc :where(h1,h2,h3,h4,h5,h6)')]
    .filter((a) => a.id && a.hasChildNodes())
    .map((a) => {
      const i = Number(a.tagName[1])
      return { element: a, title: k3(a), link: '#' + a.id, level: i }
    })
  return q3(l, e)
}
function k3(e) {
  let l = ''
  for (const a of e.childNodes)
    if (a.nodeType === 1) {
      if (
        a.classList.contains('VPBadge') ||
        a.classList.contains('header-anchor') ||
        a.classList.contains('ignore-header')
      )
        continue
      l += a.textContent
    } else a.nodeType === 3 && (l += a.textContent)
  return l.trim()
}
function q3(e, l) {
  if (l === !1) return []
  const a = (typeof l == 'object' && !Array.isArray(l) ? l.level : l) || 2,
    [i, o] = typeof a == 'number' ? [a, a] : a === 'deep' ? [2, 6] : a
  return S3(e, i, o)
}
function _3(e, l) {
  const { isAsideEnabled: a } = g3(),
    i = p3(s, 100)
  let o = null
  T(() => {
    requestAnimationFrame(s), window.addEventListener('scroll', i)
  }),
    i1(() => {
      r(location.hash)
    }),
    C0(() => {
      window.removeEventListener('scroll', i)
    })
  function s() {
    if (!a.value) return
    const h = window.scrollY,
      b = window.innerHeight,
      y = document.body.offsetHeight,
      M = Math.abs(h + b - y) < 1,
      z = V0.map(({ element: x, link: q }) => ({ link: q, top: $3(x) }))
        .filter(({ top: x }) => !Number.isNaN(x))
        .sort((x, q) => x.top - q.top)
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
    for (const { link: x, top: q } of z) {
      if (q > h + o1() + 4) break
      C = x
    }
    r(C)
  }
  function r(h) {
    o && o.classList.remove('active'),
      h == null
        ? (o = null)
        : (o = e.value.querySelector(`a[href="${decodeURIComponent(h)}"]`))
    const b = o
    b
      ? (b.classList.add('active'),
        (l.value.style.top = b.offsetTop + 39 + 'px'),
        (l.value.style.opacity = '1'))
      : ((l.value.style.top = '33px'), (l.value.style.opacity = '0'))
  }
}
function $3(e) {
  let l = 0
  for (; e !== document.body; ) {
    if (e === null) return NaN
    ;(l += e.offsetTop), (e = e.offsetParent)
  }
  return l
}
function S3(e, l, a) {
  V0.length = 0
  const i = [],
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
        r.level < l ||
        (V0.push({ element: r.element, link: r.link }),
        h ? h.children.push(r) : i.push(r),
        o.push(r))
    }),
    i
  )
}
const Z3 = ['href', 'title'],
  P3 = p({
    __name: 'VPDocOutlineItem',
    props: { headers: {}, root: { type: Boolean } },
    setup(e) {
      function l({ target: a }) {
        const i = a.href.split('#')[1],
          o = document.getElementById(decodeURIComponent(i))
        o == null || o.focus({ preventScroll: !0 })
      }
      return (a, i) => {
        const o = W('VPDocOutlineItem', !0)
        return (
          c(),
          t(
            'ul',
            { class: w(['VPDocOutlineItem', a.root ? 'root' : 'nested']) },
            [
              (c(!0),
              t(
                _,
                null,
                P(
                  a.headers,
                  ({ children: s, link: r, title: h }) => (
                    c(),
                    t('li', null, [
                      m(
                        'a',
                        {
                          class: 'outline-link',
                          href: r,
                          onClick: l,
                          title: h,
                        },
                        g(h),
                        9,
                        Z3,
                      ),
                      s != null && s.length
                        ? (c(),
                          H(o, { key: 0, headers: s }, null, 8, ['headers']))
                        : f('', !0),
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
  Q0 = A(P3, [['__scopeId', 'data-v-3a541de0']]),
  j3 = { class: 'content' },
  I3 = {
    'aria-level': '2',
    class: 'outline-title',
    id: 'doc-outline-aria-label',
    role: 'heading',
  },
  T3 = p({
    __name: 'VPDocAsideOutline',
    setup(e) {
      const { frontmatter: l, theme: a } = B(),
        i = e0([])
      t0(() => {
        i.value = L0(l.value.outline ?? a.value.outline)
      })
      const o = L(),
        s = L()
      return (
        _3(o, s),
        (r, h) => (
          c(),
          t(
            'nav',
            {
              'aria-labelledby': 'doc-outline-aria-label',
              class: w([
                'VPDocAsideOutline',
                { 'has-outline': i.value.length > 0 },
              ]),
              ref_key: 'container',
              ref: o,
            },
            [
              m('div', j3, [
                m(
                  'div',
                  { class: 'outline-marker', ref_key: 'marker', ref: s },
                  null,
                  512,
                ),
                m('div', I3, g(v(F0)(v(a))), 1),
                V(Q0, { headers: i.value, root: !0 }, null, 8, ['headers']),
              ]),
            ],
            2,
          )
        )
      )
    },
  }),
  N3 = A(T3, [['__scopeId', 'data-v-11b268fb']]),
  O3 = { class: 'VPDocAsideCarbonAds' },
  D3 = p({
    __name: 'VPDocAsideCarbonAds',
    props: { carbonAds: {} },
    setup(e) {
      const l = () => null
      return (a, i) => (
        c(),
        t('div', O3, [
          V(v(l), { 'carbon-ads': a.carbonAds }, null, 8, ['carbon-ads']),
        ])
      )
    },
  }),
  E3 = { class: 'VPDocAside' },
  F3 = p({
    __name: 'VPDocAside',
    setup(e) {
      const { theme: l } = B()
      return (a, i) => (
        c(),
        t('div', E3, [
          n(a.$slots, 'aside-top', {}, void 0, !0),
          n(a.$slots, 'aside-outline-before', {}, void 0, !0),
          V(N3),
          n(a.$slots, 'aside-outline-after', {}, void 0, !0),
          i[0] || (i[0] = m('div', { class: 'spacer' }, null, -1)),
          n(a.$slots, 'aside-ads-before', {}, void 0, !0),
          v(l).carbonAds
            ? (c(),
              H(D3, { key: 0, 'carbon-ads': v(l).carbonAds }, null, 8, [
                'carbon-ads',
              ]))
            : f('', !0),
          n(a.$slots, 'aside-ads-after', {}, void 0, !0),
          n(a.$slots, 'aside-bottom', {}, void 0, !0),
        ])
      )
    },
  }),
  Q3 = A(F3, [['__scopeId', 'data-v-43680472']])
function U3() {
  const { theme: e, page: l } = B()
  return u(() => {
    const { text: a = 'Edit this page', pattern: i = '' } =
      e.value.editLink || {}
    let o
    return (
      typeof i == 'function'
        ? (o = i(l.value))
        : (o = i.replace(/:path/g, l.value.filePath)),
      { url: o, text: a }
    )
  })
}
function J3() {
  const { page: e, theme: l, frontmatter: a } = B()
  return u(() => {
    var y, M, z, C, x, q, Z, k
    const i = E0(l.value.sidebar, e.value.relativePath),
      o = x3(i),
      s = G3(o, (j) => j.link.replace(/[?#].*$/, '')),
      r = s.findIndex((j) => G(e.value.relativePath, j.link)),
      h =
        (((y = l.value.docFooter) == null ? void 0 : y.prev) === !1 &&
          !a.value.prev) ||
        a.value.prev === !1,
      b =
        (((M = l.value.docFooter) == null ? void 0 : M.next) === !1 &&
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
              ((x = s[r - 1]) == null ? void 0 : x.link),
          },
      next: b
        ? void 0
        : {
            text:
              (typeof a.value.next == 'string'
                ? a.value.next
                : typeof a.value.next == 'object'
                  ? a.value.next.text
                  : void 0) ??
              ((q = s[r + 1]) == null ? void 0 : q.docFooterText) ??
              ((Z = s[r + 1]) == null ? void 0 : Z.text),
            link:
              (typeof a.value.next == 'object' ? a.value.next.link : void 0) ??
              ((k = s[r + 1]) == null ? void 0 : k.link),
          },
    }
  })
}
function G3(e, l) {
  const a = new Set()
  return e.filter((i) => {
    const o = l(i)
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
      const l = e,
        a = u(() => l.tag ?? (l.href ? 'a' : 'span')),
        i = u(() => (l.href && P0.test(l.href)) || l.target === '_blank')
      return (o, s) => (
        c(),
        H(
          N(a.value),
          {
            class: w([
              'VPLink',
              {
                link: o.href,
                'vp-external-link-icon': i.value,
                'no-icon': o.noIcon,
              },
            ]),
            href: o.href ? v(x0)(o.href) : void 0,
            target: o.target ?? (i.value ? '_blank' : void 0),
            rel: o.rel ?? (i.value ? 'noreferrer' : void 0),
          },
          { default: d(() => [n(o.$slots, 'default')]), _: 3 },
          8,
          ['class', 'href', 'target', 'rel'],
        )
      )
    },
  }),
  R3 = { class: 'VPLastUpdated' },
  W3 = ['datetime'],
  K3 = p({
    __name: 'VPDocFooterLastUpdated',
    setup(e) {
      const { theme: l, page: a, lang: i } = B(),
        o = u(() => new Date(a.value.lastUpdated)),
        s = u(() => o.value.toISOString()),
        r = L('')
      return (
        T(() => {
          h0(() => {
            var h, b, y
            r.value = new Intl.DateTimeFormat(
              (b =
                (h = l.value.lastUpdated) == null ? void 0 : h.formatOptions) !=
                null && b.forceLocale
                ? i.value
                : void 0,
              ((y = l.value.lastUpdated) == null
                ? void 0
                : y.formatOptions) ?? {
                dateStyle: 'short',
                timeStyle: 'short',
              },
            ).format(o.value)
          })
        }),
        (h, b) => {
          var y
          return (
            c(),
            t('p', R3, [
              I(
                g(
                  ((y = v(l).lastUpdated) == null ? void 0 : y.text) ||
                    v(l).lastUpdatedText ||
                    'Last updated',
                ) + ': ',
                1,
              ),
              m('time', { datetime: s.value }, g(r.value), 9, W3),
            ])
          )
        }
      )
    },
  }),
  Y3 = A(K3, [['__scopeId', 'data-v-c194a2a6']]),
  X3 = { key: 0, class: 'VPDocFooter' },
  a4 = { key: 0, class: 'edit-info' },
  l4 = { key: 0, class: 'edit-link' },
  i4 = { key: 1, class: 'last-updated' },
  o4 = {
    key: 1,
    class: 'prev-next',
    'aria-labelledby': 'doc-footer-aria-label',
  },
  e4 = { class: 'pager' },
  s4 = ['innerHTML'],
  c4 = ['innerHTML'],
  r4 = { class: 'pager' },
  h4 = ['innerHTML'],
  t4 = ['innerHTML'],
  v4 = p({
    __name: 'VPDocFooter',
    setup(e) {
      const { theme: l, page: a, frontmatter: i } = B(),
        o = U3(),
        s = J3(),
        r = u(() => l.value.editLink && i.value.editLink !== !1),
        h = u(() => a.value.lastUpdated),
        b = u(() => r.value || h.value || s.value.prev || s.value.next)
      return (y, M) => {
        var z, C, x, q
        return b.value
          ? (c(),
            t('footer', X3, [
              n(y.$slots, 'doc-footer-before', {}, void 0, !0),
              r.value || h.value
                ? (c(),
                  t('div', a4, [
                    r.value
                      ? (c(),
                        t('div', l4, [
                          V(
                            O,
                            {
                              class: 'edit-link-button',
                              href: v(o).url,
                              'no-icon': !0,
                            },
                            {
                              default: d(() => [
                                M[0] ||
                                  (M[0] = m(
                                    'span',
                                    { class: 'vpi-square-pen edit-link-icon' },
                                    null,
                                    -1,
                                  )),
                                I(' ' + g(v(o).text), 1),
                              ]),
                              _: 1,
                            },
                            8,
                            ['href'],
                          ),
                        ]))
                      : f('', !0),
                    h.value ? (c(), t('div', i4, [V(Y3)])) : f('', !0),
                  ]))
                : f('', !0),
              ((z = v(s).prev) != null && z.link) ||
              ((C = v(s).next) != null && C.link)
                ? (c(),
                  t('nav', o4, [
                    M[1] ||
                      (M[1] = m(
                        'span',
                        {
                          class: 'visually-hidden',
                          id: 'doc-footer-aria-label',
                        },
                        'Pager',
                        -1,
                      )),
                    m('div', e4, [
                      (x = v(s).prev) != null && x.link
                        ? (c(),
                          H(
                            O,
                            {
                              key: 0,
                              class: 'pager-link prev',
                              href: v(s).prev.link,
                            },
                            {
                              default: d(() => {
                                var Z
                                return [
                                  m(
                                    'span',
                                    {
                                      class: 'desc',
                                      innerHTML:
                                        ((Z = v(l).docFooter) == null
                                          ? void 0
                                          : Z.prev) || 'Previous page',
                                    },
                                    null,
                                    8,
                                    s4,
                                  ),
                                  m(
                                    'span',
                                    {
                                      class: 'title',
                                      innerHTML: v(s).prev.text,
                                    },
                                    null,
                                    8,
                                    c4,
                                  ),
                                ]
                              }),
                              _: 1,
                            },
                            8,
                            ['href'],
                          ))
                        : f('', !0),
                    ]),
                    m('div', r4, [
                      (q = v(s).next) != null && q.link
                        ? (c(),
                          H(
                            O,
                            {
                              key: 0,
                              class: 'pager-link next',
                              href: v(s).next.link,
                            },
                            {
                              default: d(() => {
                                var Z
                                return [
                                  m(
                                    'span',
                                    {
                                      class: 'desc',
                                      innerHTML:
                                        ((Z = v(l).docFooter) == null
                                          ? void 0
                                          : Z.next) || 'Next page',
                                    },
                                    null,
                                    8,
                                    h4,
                                  ),
                                  m(
                                    'span',
                                    {
                                      class: 'title',
                                      innerHTML: v(s).next.text,
                                    },
                                    null,
                                    8,
                                    t4,
                                  ),
                                ]
                              }),
                              _: 1,
                            },
                            8,
                            ['href'],
                          ))
                        : f('', !0),
                    ]),
                  ]))
                : f('', !0),
            ]))
          : f('', !0)
      }
    },
  }),
  n4 = A(v4, [['__scopeId', 'data-v-d6bf9531']]),
  m4 = { class: 'container' },
  b4 = { class: 'aside-container' },
  d4 = { class: 'aside-content' },
  p4 = { class: 'content' },
  u4 = { class: 'content-container' },
  f4 = { class: 'main' },
  y4 = p({
    __name: 'VPDoc',
    setup(e) {
      const { theme: l } = B(),
        a = v0(),
        { hasSidebar: i, hasAside: o, leftAside: s } = Q(),
        r = u(() => a.path.replace(/[./]+/g, '_').replace(/_html$/, ''))
      return (h, b) => {
        const y = W('Content')
        return (
          c(),
          t(
            'div',
            { class: w(['VPDoc', { 'has-sidebar': v(i), 'has-aside': v(o) }]) },
            [
              n(h.$slots, 'doc-top', {}, void 0, !0),
              m('div', m4, [
                v(o)
                  ? (c(),
                    t(
                      'div',
                      { key: 0, class: w(['aside', { 'left-aside': v(s) }]) },
                      [
                        b[0] ||
                          (b[0] = m(
                            'div',
                            { class: 'aside-curtain' },
                            null,
                            -1,
                          )),
                        m('div', b4, [
                          m('div', d4, [
                            V(Q3, null, {
                              'aside-top': d(() => [
                                n(h.$slots, 'aside-top', {}, void 0, !0),
                              ]),
                              'aside-bottom': d(() => [
                                n(h.$slots, 'aside-bottom', {}, void 0, !0),
                              ]),
                              'aside-outline-before': d(() => [
                                n(
                                  h.$slots,
                                  'aside-outline-before',
                                  {},
                                  void 0,
                                  !0,
                                ),
                              ]),
                              'aside-outline-after': d(() => [
                                n(
                                  h.$slots,
                                  'aside-outline-after',
                                  {},
                                  void 0,
                                  !0,
                                ),
                              ]),
                              'aside-ads-before': d(() => [
                                n(h.$slots, 'aside-ads-before', {}, void 0, !0),
                              ]),
                              'aside-ads-after': d(() => [
                                n(h.$slots, 'aside-ads-after', {}, void 0, !0),
                              ]),
                              _: 3,
                            }),
                          ]),
                        ]),
                      ],
                      2,
                    ))
                  : f('', !0),
                m('div', p4, [
                  m('div', u4, [
                    n(h.$slots, 'doc-before', {}, void 0, !0),
                    m('main', f4, [
                      V(
                        y,
                        {
                          class: w([
                            'vp-doc',
                            [
                              r.value,
                              v(l).externalLinkIcon &&
                                'external-link-icon-enabled',
                            ],
                          ]),
                        },
                        null,
                        8,
                        ['class'],
                      ),
                    ]),
                    V(n4, null, {
                      'doc-footer-before': d(() => [
                        n(h.$slots, 'doc-footer-before', {}, void 0, !0),
                      ]),
                      _: 3,
                    }),
                    n(h.$slots, 'doc-after', {}, void 0, !0),
                  ]),
                ]),
              ]),
              n(h.$slots, 'doc-bottom', {}, void 0, !0),
            ],
            2,
          )
        )
      }
    },
  }),
  M4 = A(y4, [['__scopeId', 'data-v-90e7acd6']]),
  z4 = p({
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
      const l = e,
        a = u(() => l.href && P0.test(l.href)),
        i = u(() => l.tag || (l.href ? 'a' : 'button'))
      return (o, s) => (
        c(),
        H(
          N(i.value),
          {
            class: w(['VPButton', [o.size, o.theme]]),
            href: o.href ? v(x0)(o.href) : void 0,
            target: l.target ?? (a.value ? '_blank' : void 0),
            rel: l.rel ?? (a.value ? 'noreferrer' : void 0),
          },
          { default: d(() => [I(g(o.text), 1)]), _: 1 },
          8,
          ['class', 'href', 'target', 'rel'],
        )
      )
    },
  }),
  V4 = A(z4, [['__scopeId', 'data-v-67c8f08a']]),
  H4 = ['src', 'alt'],
  C4 = p({
    inheritAttrs: !1,
    __name: 'VPImage',
    props: { image: {}, alt: {} },
    setup(e) {
      return (l, a) => {
        const i = W('VPImage', !0)
        return l.image
          ? (c(),
            t(
              _,
              { key: 0 },
              [
                typeof l.image == 'string' || 'src' in l.image
                  ? (c(),
                    t(
                      'img',
                      J(
                        { key: 0, class: 'VPImage' },
                        typeof l.image == 'string'
                          ? l.$attrs
                          : { ...l.image, ...l.$attrs },
                        {
                          src: v(H0)(
                            typeof l.image == 'string' ? l.image : l.image.src,
                          ),
                          alt:
                            l.alt ??
                            (typeof l.image == 'string'
                              ? ''
                              : l.image.alt || ''),
                        },
                      ),
                      null,
                      16,
                      H4,
                    ))
                  : (c(),
                    t(
                      _,
                      { key: 1 },
                      [
                        V(
                          i,
                          J(
                            {
                              class: 'dark',
                              image: l.image.dark,
                              alt: l.image.alt,
                            },
                            l.$attrs,
                          ),
                          null,
                          16,
                          ['image', 'alt'],
                        ),
                        V(
                          i,
                          J(
                            {
                              class: 'light',
                              image: l.image.light,
                              alt: l.image.alt,
                            },
                            l.$attrs,
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
          : f('', !0)
      }
    },
  }),
  s0 = A(C4, [['__scopeId', 'data-v-3c4d2f13']]),
  A4 = { class: 'container' },
  w4 = { class: 'main' },
  x4 = { key: 0, class: 'name' },
  L4 = ['innerHTML'],
  B4 = ['innerHTML'],
  g4 = ['innerHTML'],
  k4 = { key: 0, class: 'actions' },
  q4 = { key: 0, class: 'image' },
  _4 = { class: 'image-container' },
  $4 = p({
    __name: 'VPHero',
    props: { name: {}, text: {}, tagline: {}, image: {}, actions: {} },
    setup(e) {
      const l = n0('hero-image-slot-exists')
      return (a, i) => (
        c(),
        t(
          'div',
          { class: w(['VPHero', { 'has-image': a.image || v(l) }]) },
          [
            m('div', A4, [
              m('div', w4, [
                n(a.$slots, 'home-hero-info-before', {}, void 0, !0),
                n(
                  a.$slots,
                  'home-hero-info',
                  {},
                  () => [
                    a.name
                      ? (c(),
                        t('h1', x4, [
                          m(
                            'span',
                            { innerHTML: a.name, class: 'clip' },
                            null,
                            8,
                            L4,
                          ),
                        ]))
                      : f('', !0),
                    a.text
                      ? (c(),
                        t(
                          'p',
                          { key: 1, innerHTML: a.text, class: 'text' },
                          null,
                          8,
                          B4,
                        ))
                      : f('', !0),
                    a.tagline
                      ? (c(),
                        t(
                          'p',
                          { key: 2, innerHTML: a.tagline, class: 'tagline' },
                          null,
                          8,
                          g4,
                        ))
                      : f('', !0),
                  ],
                  !0,
                ),
                n(a.$slots, 'home-hero-info-after', {}, void 0, !0),
                a.actions
                  ? (c(),
                    t('div', k4, [
                      (c(!0),
                      t(
                        _,
                        null,
                        P(
                          a.actions,
                          (o) => (
                            c(),
                            t('div', { key: o.link, class: 'action' }, [
                              V(
                                V4,
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
                  : f('', !0),
                n(a.$slots, 'home-hero-actions-after', {}, void 0, !0),
              ]),
              a.image || v(l)
                ? (c(),
                  t('div', q4, [
                    m('div', _4, [
                      i[0] ||
                        (i[0] = m('div', { class: 'image-bg' }, null, -1)),
                      n(
                        a.$slots,
                        'home-hero-image',
                        {},
                        () => [
                          a.image
                            ? (c(),
                              H(
                                s0,
                                { key: 0, class: 'image-src', image: a.image },
                                null,
                                8,
                                ['image'],
                              ))
                            : f('', !0),
                        ],
                        !0,
                      ),
                    ]),
                  ]))
                : f('', !0),
            ]),
          ],
          2,
        )
      )
    },
  }),
  S4 = A($4, [['__scopeId', 'data-v-3890c04f']]),
  Z4 = p({
    __name: 'VPHomeHero',
    setup(e) {
      const { frontmatter: l } = B()
      return (a, i) =>
        v(l).hero
          ? (c(),
            H(
              S4,
              {
                key: 0,
                class: 'VPHomeHero',
                name: v(l).hero.name,
                text: v(l).hero.text,
                tagline: v(l).hero.tagline,
                image: v(l).hero.image,
                actions: v(l).hero.actions,
              },
              {
                'home-hero-info-before': d(() => [
                  n(a.$slots, 'home-hero-info-before'),
                ]),
                'home-hero-info': d(() => [n(a.$slots, 'home-hero-info')]),
                'home-hero-info-after': d(() => [
                  n(a.$slots, 'home-hero-info-after'),
                ]),
                'home-hero-actions-after': d(() => [
                  n(a.$slots, 'home-hero-actions-after'),
                ]),
                'home-hero-image': d(() => [n(a.$slots, 'home-hero-image')]),
                _: 3,
              },
              8,
              ['name', 'text', 'tagline', 'image', 'actions'],
            ))
          : f('', !0)
    },
  }),
  P4 = { class: 'box' },
  j4 = { key: 0, class: 'icon' },
  I4 = ['innerHTML'],
  T4 = ['innerHTML'],
  N4 = ['innerHTML'],
  O4 = { key: 4, class: 'link-text' },
  D4 = { class: 'link-text-value' },
  E4 = p({
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
      return (l, a) => (
        c(),
        H(
          O,
          {
            class: 'VPFeature',
            href: l.link,
            rel: l.rel,
            target: l.target,
            'no-icon': !0,
            tag: l.link ? 'a' : 'div',
          },
          {
            default: d(() => [
              m('article', P4, [
                typeof l.icon == 'object' && l.icon.wrap
                  ? (c(),
                    t('div', j4, [
                      V(
                        s0,
                        {
                          image: l.icon,
                          alt: l.icon.alt,
                          height: l.icon.height || 48,
                          width: l.icon.width || 48,
                        },
                        null,
                        8,
                        ['image', 'alt', 'height', 'width'],
                      ),
                    ]))
                  : typeof l.icon == 'object'
                    ? (c(),
                      H(
                        s0,
                        {
                          key: 1,
                          image: l.icon,
                          alt: l.icon.alt,
                          height: l.icon.height || 48,
                          width: l.icon.width || 48,
                        },
                        null,
                        8,
                        ['image', 'alt', 'height', 'width'],
                      ))
                    : l.icon
                      ? (c(),
                        t(
                          'div',
                          { key: 2, class: 'icon', innerHTML: l.icon },
                          null,
                          8,
                          I4,
                        ))
                      : f('', !0),
                m('h2', { class: 'title', innerHTML: l.title }, null, 8, T4),
                l.details
                  ? (c(),
                    t(
                      'p',
                      { key: 3, class: 'details', innerHTML: l.details },
                      null,
                      8,
                      N4,
                    ))
                  : f('', !0),
                l.linkText
                  ? (c(),
                    t('div', O4, [
                      m('p', D4, [
                        I(g(l.linkText) + ' ', 1),
                        a[0] ||
                          (a[0] = m(
                            'span',
                            { class: 'vpi-arrow-right link-text-icon' },
                            null,
                            -1,
                          )),
                      ]),
                    ]))
                  : f('', !0),
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
  F4 = A(E4, [['__scopeId', 'data-v-2fcc54f0']]),
  Q4 = { key: 0, class: 'VPFeatures' },
  U4 = { class: 'container' },
  J4 = { class: 'items' },
  G4 = p({
    __name: 'VPFeatures',
    props: { features: {} },
    setup(e) {
      const l = e,
        a = u(() => {
          const i = l.features.length
          if (i) {
            if (i === 2) return 'grid-2'
            if (i === 3) return 'grid-3'
            if (i % 3 === 0) return 'grid-6'
            if (i > 3) return 'grid-4'
          } else return
        })
      return (i, o) =>
        i.features
          ? (c(),
            t('div', Q4, [
              m('div', U4, [
                m('div', J4, [
                  (c(!0),
                  t(
                    _,
                    null,
                    P(
                      i.features,
                      (s) => (
                        c(),
                        t(
                          'div',
                          { key: s.title, class: w(['item', [a.value]]) },
                          [
                            V(
                              F4,
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
          : f('', !0)
    },
  }),
  R4 = A(G4, [['__scopeId', 'data-v-3bc29ff9']]),
  W4 = p({
    __name: 'VPHomeFeatures',
    setup(e) {
      const { frontmatter: l } = B()
      return (a, i) =>
        v(l).features
          ? (c(),
            H(
              R4,
              { key: 0, class: 'VPHomeFeatures', features: v(l).features },
              null,
              8,
              ['features'],
            ))
          : f('', !0)
    },
  }),
  K4 = p({
    __name: 'VPHomeContent',
    setup(e) {
      const { width: l } = e1({ initialWidth: 0, includeScrollbar: !1 })
      return (a, i) => (
        c(),
        t(
          'div',
          {
            class: 'vp-doc container',
            style: E(
              v(l) ? { '--vp-offset': `calc(50% - ${v(l) / 2}px)` } : {},
            ),
          },
          [n(a.$slots, 'default', {}, void 0, !0)],
          4,
        )
      )
    },
  }),
  Y4 = A(K4, [['__scopeId', 'data-v-5ed7c18f']]),
  X4 = { class: 'VPHome' },
  a6 = p({
    __name: 'VPHome',
    setup(e) {
      const { frontmatter: l } = B()
      return (a, i) => {
        const o = W('Content')
        return (
          c(),
          t('div', X4, [
            n(a.$slots, 'home-hero-before', {}, void 0, !0),
            V(Z4, null, {
              'home-hero-info-before': d(() => [
                n(a.$slots, 'home-hero-info-before', {}, void 0, !0),
              ]),
              'home-hero-info': d(() => [
                n(a.$slots, 'home-hero-info', {}, void 0, !0),
              ]),
              'home-hero-info-after': d(() => [
                n(a.$slots, 'home-hero-info-after', {}, void 0, !0),
              ]),
              'home-hero-actions-after': d(() => [
                n(a.$slots, 'home-hero-actions-after', {}, void 0, !0),
              ]),
              'home-hero-image': d(() => [
                n(a.$slots, 'home-hero-image', {}, void 0, !0),
              ]),
              _: 3,
            }),
            n(a.$slots, 'home-hero-after', {}, void 0, !0),
            n(a.$slots, 'home-features-before', {}, void 0, !0),
            V(W4),
            n(a.$slots, 'home-features-after', {}, void 0, !0),
            v(l).markdownStyles !== !1
              ? (c(), H(Y4, { key: 0 }, { default: d(() => [V(o)]), _: 1 }))
              : (c(), H(o, { key: 1 })),
          ])
        )
      }
    },
  }),
  l6 = A(a6, [['__scopeId', 'data-v-2e9be07d']]),
  i6 = {},
  o6 = { class: 'VPPage' }
function e6(e, l) {
  const a = W('Content')
  return (
    c(),
    t('div', o6, [n(e.$slots, 'page-top'), V(a), n(e.$slots, 'page-bottom')])
  )
}
const s6 = A(i6, [['render', e6]]),
  c6 = p({
    __name: 'VPContent',
    setup(e) {
      const { page: l, frontmatter: a } = B(),
        { hasSidebar: i } = Q()
      return (o, s) => (
        c(),
        t(
          'div',
          {
            class: w([
              'VPContent',
              { 'has-sidebar': v(i), 'is-home': v(a).layout === 'home' },
            ]),
            id: 'VPContent',
          },
          [
            v(l).isNotFound
              ? n(o.$slots, 'not-found', { key: 0 }, () => [V(A3)], !0)
              : v(a).layout === 'page'
                ? (c(),
                  H(
                    s6,
                    { key: 1 },
                    {
                      'page-top': d(() => [
                        n(o.$slots, 'page-top', {}, void 0, !0),
                      ]),
                      'page-bottom': d(() => [
                        n(o.$slots, 'page-bottom', {}, void 0, !0),
                      ]),
                      _: 3,
                    },
                  ))
                : v(a).layout === 'home'
                  ? (c(),
                    H(
                      l6,
                      { key: 2 },
                      {
                        'home-hero-before': d(() => [
                          n(o.$slots, 'home-hero-before', {}, void 0, !0),
                        ]),
                        'home-hero-info-before': d(() => [
                          n(o.$slots, 'home-hero-info-before', {}, void 0, !0),
                        ]),
                        'home-hero-info': d(() => [
                          n(o.$slots, 'home-hero-info', {}, void 0, !0),
                        ]),
                        'home-hero-info-after': d(() => [
                          n(o.$slots, 'home-hero-info-after', {}, void 0, !0),
                        ]),
                        'home-hero-actions-after': d(() => [
                          n(
                            o.$slots,
                            'home-hero-actions-after',
                            {},
                            void 0,
                            !0,
                          ),
                        ]),
                        'home-hero-image': d(() => [
                          n(o.$slots, 'home-hero-image', {}, void 0, !0),
                        ]),
                        'home-hero-after': d(() => [
                          n(o.$slots, 'home-hero-after', {}, void 0, !0),
                        ]),
                        'home-features-before': d(() => [
                          n(o.$slots, 'home-features-before', {}, void 0, !0),
                        ]),
                        'home-features-after': d(() => [
                          n(o.$slots, 'home-features-after', {}, void 0, !0),
                        ]),
                        _: 3,
                      },
                    ))
                  : v(a).layout && v(a).layout !== 'doc'
                    ? (c(), H(N(v(a).layout), { key: 3 }))
                    : (c(),
                      H(
                        M4,
                        { key: 4 },
                        {
                          'doc-top': d(() => [
                            n(o.$slots, 'doc-top', {}, void 0, !0),
                          ]),
                          'doc-bottom': d(() => [
                            n(o.$slots, 'doc-bottom', {}, void 0, !0),
                          ]),
                          'doc-footer-before': d(() => [
                            n(o.$slots, 'doc-footer-before', {}, void 0, !0),
                          ]),
                          'doc-before': d(() => [
                            n(o.$slots, 'doc-before', {}, void 0, !0),
                          ]),
                          'doc-after': d(() => [
                            n(o.$slots, 'doc-after', {}, void 0, !0),
                          ]),
                          'aside-top': d(() => [
                            n(o.$slots, 'aside-top', {}, void 0, !0),
                          ]),
                          'aside-outline-before': d(() => [
                            n(o.$slots, 'aside-outline-before', {}, void 0, !0),
                          ]),
                          'aside-outline-after': d(() => [
                            n(o.$slots, 'aside-outline-after', {}, void 0, !0),
                          ]),
                          'aside-ads-before': d(() => [
                            n(o.$slots, 'aside-ads-before', {}, void 0, !0),
                          ]),
                          'aside-ads-after': d(() => [
                            n(o.$slots, 'aside-ads-after', {}, void 0, !0),
                          ]),
                          'aside-bottom': d(() => [
                            n(o.$slots, 'aside-bottom', {}, void 0, !0),
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
  r6 = A(c6, [['__scopeId', 'data-v-86d75bcf']]),
  h6 = { class: 'container' },
  t6 = ['innerHTML'],
  v6 = ['innerHTML'],
  n6 = p({
    __name: 'VPFooter',
    setup(e) {
      const { theme: l, frontmatter: a } = B(),
        { hasSidebar: i } = Q()
      return (o, s) =>
        v(l).footer && v(a).footer !== !1
          ? (c(),
            t(
              'footer',
              { key: 0, class: w(['VPFooter', { 'has-sidebar': v(i) }]) },
              [
                m('div', h6, [
                  v(l).footer.message
                    ? (c(),
                      t(
                        'p',
                        {
                          key: 0,
                          class: 'message',
                          innerHTML: v(l).footer.message,
                        },
                        null,
                        8,
                        t6,
                      ))
                    : f('', !0),
                  v(l).footer.copyright
                    ? (c(),
                      t(
                        'p',
                        {
                          key: 1,
                          class: 'copyright',
                          innerHTML: v(l).footer.copyright,
                        },
                        null,
                        8,
                        v6,
                      ))
                    : f('', !0),
                ]),
              ],
              2,
            ))
          : f('', !0)
    },
  }),
  m6 = A(n6, [['__scopeId', 'data-v-477dcb91']])
function b6() {
  const { theme: e, frontmatter: l } = B(),
    a = e0([]),
    i = u(() => a.value.length > 0)
  return (
    t0(() => {
      a.value = L0(l.value.outline ?? e.value.outline)
    }),
    { headers: a, hasLocalNav: i }
  )
}
const d6 = { class: 'menu-text' },
  p6 = { class: 'header' },
  u6 = { class: 'outline' },
  f6 = p({
    __name: 'VPLocalNavOutlineDropdown',
    props: { headers: {}, navHeight: {} },
    setup(e) {
      const l = e,
        { theme: a } = B(),
        i = L(!1),
        o = L(0),
        s = L(),
        r = L()
      function h(z) {
        var C
        ;((C = s.value) != null && C.contains(z.target)) || (i.value = !1)
      }
      D(i, (z) => {
        if (z) {
          document.addEventListener('click', h)
          return
        }
        document.removeEventListener('click', h)
      }),
        s1('Escape', () => {
          i.value = !1
        }),
        t0(() => {
          i.value = !1
        })
      function b() {
        ;(i.value = !i.value),
          (o.value =
            window.innerHeight + Math.min(window.scrollY - l.navHeight, 0))
      }
      function y(z) {
        z.target.classList.contains('outline-link') &&
          (r.value && (r.value.style.transition = 'none'),
          j0(() => {
            i.value = !1
          }))
      }
      function M() {
        ;(i.value = !1),
          window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
      }
      return (z, C) => (
        c(),
        t(
          'div',
          {
            class: 'VPLocalNavOutlineDropdown',
            style: E({ '--vp-vh': o.value + 'px' }),
            ref_key: 'main',
            ref: s,
          },
          [
            z.headers.length > 0
              ? (c(),
                t(
                  'button',
                  { key: 0, onClick: b, class: w({ open: i.value }) },
                  [
                    m('span', d6, g(v(F0)(v(a))), 1),
                    C[0] ||
                      (C[0] = m(
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
                  g(v(a).returnToTopLabel || 'Return to top'),
                  1,
                )),
            V(
              R,
              { name: 'flyout' },
              {
                default: d(() => [
                  i.value
                    ? (c(),
                      t(
                        'div',
                        {
                          key: 0,
                          ref_key: 'items',
                          ref: r,
                          class: 'items',
                          onClick: y,
                        },
                        [
                          m('div', p6, [
                            m(
                              'a',
                              { class: 'top-link', href: '#', onClick: M },
                              g(v(a).returnToTopLabel || 'Return to top'),
                              1,
                            ),
                          ]),
                          m('div', u6, [
                            V(Q0, { headers: z.headers }, null, 8, ['headers']),
                          ]),
                        ],
                        512,
                      ))
                    : f('', !0),
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
  y6 = A(f6, [['__scopeId', 'data-v-e9d369fb']]),
  M6 = { class: 'container' },
  z6 = ['aria-expanded'],
  V6 = { class: 'menu-text' },
  H6 = p({
    __name: 'VPLocalNav',
    props: { open: { type: Boolean } },
    emits: ['open-menu'],
    setup(e) {
      const { theme: l, frontmatter: a } = B(),
        { hasSidebar: i } = Q(),
        { headers: o } = b6(),
        { y: s } = I0(),
        r = L(0)
      T(() => {
        r.value = parseInt(
          getComputedStyle(document.documentElement).getPropertyValue(
            '--vp-nav-height',
          ),
        )
      }),
        t0(() => {
          o.value = L0(a.value.outline ?? l.value.outline)
        })
      const h = u(() => o.value.length === 0),
        b = u(() => h.value && !i.value),
        y = u(() => ({
          VPLocalNav: !0,
          'has-sidebar': i.value,
          empty: h.value,
          fixed: b.value,
        }))
      return (M, z) =>
        v(a).layout !== 'home' && (!b.value || v(s) >= r.value)
          ? (c(),
            t(
              'div',
              { key: 0, class: w(y.value) },
              [
                m('div', M6, [
                  v(i)
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
                            (z[1] = m(
                              'span',
                              { class: 'vpi-align-left menu-icon' },
                              null,
                              -1,
                            )),
                          m('span', V6, g(v(l).sidebarMenuLabel || 'Menu'), 1),
                        ],
                        8,
                        z6,
                      ))
                    : f('', !0),
                  V(y6, { headers: v(o), navHeight: r.value }, null, 8, [
                    'headers',
                    'navHeight',
                  ]),
                ]),
              ],
              2,
            ))
          : f('', !0)
    },
  }),
  C6 = A(H6, [['__scopeId', 'data-v-31495a73']])
function A6() {
  const e = L(!1)
  function l() {
    ;(e.value = !0), window.addEventListener('resize', o)
  }
  function a() {
    ;(e.value = !1), window.removeEventListener('resize', o)
  }
  function i() {
    e.value ? a() : l()
  }
  function o() {
    window.outerWidth >= 768 && a()
  }
  const s = v0()
  return (
    D(() => s.path, a),
    { isScreenOpen: e, openScreen: l, closeScreen: a, toggleScreen: i }
  )
}
const w6 = {},
  x6 = { class: 'VPSwitch', type: 'button', role: 'switch' },
  L6 = { class: 'check' },
  B6 = { key: 0, class: 'icon' }
function g6(e, l) {
  return (
    c(),
    t('button', x6, [
      m('span', L6, [
        e.$slots.default
          ? (c(), t('span', B6, [n(e.$slots, 'default', {}, void 0, !0)]))
          : f('', !0),
      ]),
    ])
  )
}
const k6 = A(w6, [
    ['render', g6],
    ['__scopeId', 'data-v-ff12b4d8'],
  ]),
  q6 = p({
    __name: 'VPSwitchAppearance',
    setup(e) {
      const { isDark: l, theme: a } = B(),
        i = n0('toggle-appearance', () => {
          l.value = !l.value
        }),
        o = L('')
      return (
        A0(() => {
          o.value = l.value
            ? a.value.lightModeSwitchTitle || 'Switch to light theme'
            : a.value.darkModeSwitchTitle || 'Switch to dark theme'
        }),
        (s, r) => (
          c(),
          H(
            k6,
            {
              title: o.value,
              class: 'VPSwitchAppearance',
              'aria-checked': v(l),
              onClick: v(i),
            },
            {
              default: d(
                () =>
                  r[0] ||
                  (r[0] = [
                    m('span', { class: 'vpi-sun sun' }, null, -1),
                    m('span', { class: 'vpi-moon moon' }, null, -1),
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
  B0 = A(q6, [['__scopeId', 'data-v-9fb689da']]),
  _6 = { key: 0, class: 'VPNavBarAppearance' },
  $6 = p({
    __name: 'VPNavBarAppearance',
    setup(e) {
      const { site: l } = B()
      return (a, i) =>
        v(l).appearance &&
        v(l).appearance !== 'force-dark' &&
        v(l).appearance !== 'force-auto'
          ? (c(), t('div', _6, [V(B0)]))
          : f('', !0)
    },
  }),
  S6 = A($6, [['__scopeId', 'data-v-6261bf04']]),
  g0 = L()
let U0 = !1,
  u0 = 0
function Z6(e) {
  const l = L(!1)
  if (m0) {
    !U0 && P6(), u0++
    const a = D(g0, (i) => {
      var o, s, r
      i === e.el.value || ((o = e.el.value) != null && o.contains(i))
        ? ((l.value = !0), (s = e.onFocus) == null || s.call(e))
        : ((l.value = !1), (r = e.onBlur) == null || r.call(e))
    })
    C0(() => {
      a(), u0--, u0 || j6()
    })
  }
  return c1(l)
}
function P6() {
  document.addEventListener('focusin', J0),
    (U0 = !0),
    (g0.value = document.activeElement)
}
function j6() {
  document.removeEventListener('focusin', J0)
}
function J0() {
  g0.value = document.activeElement
}
const I6 = { class: 'VPMenuLink' },
  T6 = ['innerHTML'],
  N6 = p({
    __name: 'VPMenuLink',
    props: { item: {} },
    setup(e) {
      const { page: l } = B()
      return (a, i) => (
        c(),
        t('div', I6, [
          V(
            O,
            {
              class: w({
                active: v(G)(
                  v(l).relativePath,
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
              default: d(() => [
                m('span', { innerHTML: a.item.text }, null, 8, T6),
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
  b0 = A(N6, [['__scopeId', 'data-v-4ebda3bb']]),
  O6 = { class: 'VPMenuGroup' },
  D6 = { key: 0, class: 'title' },
  E6 = p({
    __name: 'VPMenuGroup',
    props: { text: {}, items: {} },
    setup(e) {
      return (l, a) => (
        c(),
        t('div', O6, [
          l.text ? (c(), t('p', D6, g(l.text), 1)) : f('', !0),
          (c(!0),
          t(
            _,
            null,
            P(
              l.items,
              (i) => (
                c(),
                t(
                  _,
                  null,
                  [
                    'link' in i
                      ? (c(), H(b0, { key: 0, item: i }, null, 8, ['item']))
                      : f('', !0),
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
  F6 = A(E6, [['__scopeId', 'data-v-51877c49']]),
  Q6 = { class: 'VPMenu' },
  U6 = { key: 0, class: 'items' },
  J6 = p({
    __name: 'VPMenu',
    props: { items: {} },
    setup(e) {
      return (l, a) => (
        c(),
        t('div', Q6, [
          l.items
            ? (c(),
              t('div', U6, [
                (c(!0),
                t(
                  _,
                  null,
                  P(
                    l.items,
                    (i) => (
                      c(),
                      t(
                        _,
                        { key: JSON.stringify(i) },
                        [
                          'link' in i
                            ? (c(),
                              H(b0, { key: 0, item: i }, null, 8, ['item']))
                            : 'component' in i
                              ? (c(),
                                H(
                                  N(i.component),
                                  J({ key: 1, ref_for: !0 }, i.props),
                                  null,
                                  16,
                                ))
                              : (c(),
                                H(
                                  F6,
                                  { key: 2, text: i.text, items: i.items },
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
            : f('', !0),
          n(l.$slots, 'default', {}, void 0, !0),
        ])
      )
    },
  }),
  G6 = A(J6, [['__scopeId', 'data-v-898163cf']]),
  R6 = ['aria-expanded', 'aria-label'],
  W6 = { key: 0, class: 'text' },
  K6 = ['innerHTML'],
  Y6 = { key: 1, class: 'vpi-more-horizontal icon' },
  X6 = { class: 'menu' },
  a8 = p({
    __name: 'VPFlyout',
    props: { icon: {}, button: {}, label: {}, items: {} },
    setup(e) {
      const l = L(!1),
        a = L()
      Z6({ el: a, onBlur: i })
      function i() {
        l.value = !1
      }
      return (o, s) => (
        c(),
        t(
          'div',
          {
            class: 'VPFlyout',
            ref_key: 'el',
            ref: a,
            onMouseenter: s[1] || (s[1] = (r) => (l.value = !0)),
            onMouseleave: s[2] || (s[2] = (r) => (l.value = !1)),
          },
          [
            m(
              'button',
              {
                type: 'button',
                class: 'button',
                'aria-haspopup': 'true',
                'aria-expanded': l.value,
                'aria-label': o.label,
                onClick: s[0] || (s[0] = (r) => (l.value = !l.value)),
              },
              [
                o.button || o.icon
                  ? (c(),
                    t('span', W6, [
                      o.icon
                        ? (c(),
                          t(
                            'span',
                            { key: 0, class: w([o.icon, 'option-icon']) },
                            null,
                            2,
                          ))
                        : f('', !0),
                      o.button
                        ? (c(),
                          t(
                            'span',
                            { key: 1, innerHTML: o.button },
                            null,
                            8,
                            K6,
                          ))
                        : f('', !0),
                      s[3] ||
                        (s[3] = m(
                          'span',
                          { class: 'vpi-chevron-down text-icon' },
                          null,
                          -1,
                        )),
                    ]))
                  : (c(), t('span', Y6)),
              ],
              8,
              R6,
            ),
            m('div', X6, [
              V(
                G6,
                { items: o.items },
                {
                  default: d(() => [n(o.$slots, 'default', {}, void 0, !0)]),
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
  k0 = A(a8, [['__scopeId', 'data-v-c646b95b']]),
  l8 = ['href', 'aria-label', 'innerHTML'],
  i8 = p({
    __name: 'VPSocialLink',
    props: { icon: {}, link: {}, ariaLabel: {} },
    setup(e) {
      const l = e,
        a = L()
      T(async () => {
        var s
        await j0()
        const o = (s = a.value) == null ? void 0 : s.children[0]
        o instanceof HTMLElement &&
          o.className.startsWith('vpi-social-') &&
          (getComputedStyle(o).maskImage ||
            getComputedStyle(o).webkitMaskImage) === 'none' &&
          o.style.setProperty(
            '--icon',
            `url('https://api.iconify.design/simple-icons/${l.icon}.svg')`,
          )
      })
      const i = u(() =>
        typeof l.icon == 'object'
          ? l.icon.svg
          : `<span class="vpi-social-${l.icon}"></span>`,
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
            innerHTML: i.value,
          },
          null,
          8,
          l8,
        )
      )
    },
  }),
  o8 = A(i8, [['__scopeId', 'data-v-0e77b584']]),
  e8 = { class: 'VPSocialLinks' },
  s8 = p({
    __name: 'VPSocialLinks',
    props: { links: {} },
    setup(e) {
      return (l, a) => (
        c(),
        t('div', e8, [
          (c(!0),
          t(
            _,
            null,
            P(
              l.links,
              ({ link: i, icon: o, ariaLabel: s }) => (
                c(),
                H(o8, { key: i, icon: o, link: i, ariaLabel: s }, null, 8, [
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
  q0 = A(s8, [['__scopeId', 'data-v-975a148e']]),
  c8 = { key: 0, class: 'group translations' },
  r8 = { class: 'trans-title' },
  h8 = { key: 1, class: 'group' },
  t8 = { class: 'item appearance' },
  v8 = { class: 'label' },
  n8 = { class: 'appearance-action' },
  m8 = { key: 2, class: 'group' },
  b8 = { class: 'item social-links' },
  d8 = p({
    __name: 'VPNavBarExtra',
    setup(e) {
      const { site: l, theme: a } = B(),
        { localeLinks: i, currentLang: o } = l0({ correspondingLink: !0 }),
        s = u(
          () =>
            (i.value.length && o.value.label) ||
            l.value.appearance ||
            a.value.socialLinks,
        )
      return (r, h) =>
        s.value
          ? (c(),
            H(
              k0,
              { key: 0, class: 'VPNavBarExtra', label: 'extra navigation' },
              {
                default: d(() => [
                  v(i).length && v(o).label
                    ? (c(),
                      t('div', c8, [
                        m('p', r8, g(v(o).label), 1),
                        (c(!0),
                        t(
                          _,
                          null,
                          P(
                            v(i),
                            (b) => (
                              c(),
                              H(b0, { key: b.link, item: b }, null, 8, ['item'])
                            ),
                          ),
                          128,
                        )),
                      ]))
                    : f('', !0),
                  v(l).appearance &&
                  v(l).appearance !== 'force-dark' &&
                  v(l).appearance !== 'force-auto'
                    ? (c(),
                      t('div', h8, [
                        m('div', t8, [
                          m(
                            'p',
                            v8,
                            g(v(a).darkModeSwitchLabel || 'Appearance'),
                            1,
                          ),
                          m('div', n8, [V(B0)]),
                        ]),
                      ]))
                    : f('', !0),
                  v(a).socialLinks
                    ? (c(),
                      t('div', m8, [
                        m('div', b8, [
                          V(
                            q0,
                            {
                              class: 'social-links-list',
                              links: v(a).socialLinks,
                            },
                            null,
                            8,
                            ['links'],
                          ),
                        ]),
                      ]))
                    : f('', !0),
                ]),
                _: 1,
              },
            ))
          : f('', !0)
    },
  }),
  p8 = A(d8, [['__scopeId', 'data-v-622ac43c']]),
  u8 = ['aria-expanded'],
  f8 = p({
    __name: 'VPNavBarHamburger',
    props: { active: { type: Boolean } },
    emits: ['click'],
    setup(e) {
      return (l, a) => (
        c(),
        t(
          'button',
          {
            type: 'button',
            class: w(['VPNavBarHamburger', { active: l.active }]),
            'aria-label': 'mobile navigation',
            'aria-expanded': l.active,
            'aria-controls': 'VPNavScreen',
            onClick: a[0] || (a[0] = (i) => l.$emit('click')),
          },
          a[1] ||
            (a[1] = [
              m(
                'span',
                { class: 'container' },
                [
                  m('span', { class: 'top' }),
                  m('span', { class: 'middle' }),
                  m('span', { class: 'bottom' }),
                ],
                -1,
              ),
            ]),
          10,
          u8,
        )
      )
    },
  }),
  y8 = A(f8, [['__scopeId', 'data-v-fcdaa27e']]),
  M8 = ['innerHTML'],
  z8 = p({
    __name: 'VPNavBarMenuLink',
    props: { item: {} },
    setup(e) {
      const { page: l } = B()
      return (a, i) => (
        c(),
        H(
          O,
          {
            class: w({
              VPNavBarMenuLink: !0,
              active: v(G)(
                v(l).relativePath,
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
            default: d(() => [
              m('span', { innerHTML: a.item.text }, null, 8, M8),
            ]),
            _: 1,
          },
          8,
          ['class', 'href', 'target', 'rel', 'no-icon'],
        )
      )
    },
  }),
  V8 = A(z8, [['__scopeId', 'data-v-5bd038d9']]),
  H8 = p({
    __name: 'VPNavBarMenuGroup',
    props: { item: {} },
    setup(e) {
      const l = e,
        { page: a } = B(),
        i = (s) =>
          'component' in s
            ? !1
            : 'link' in s
              ? G(a.value.relativePath, s.link, !!l.item.activeMatch)
              : s.items.some(i),
        o = u(() => i(l.item))
      return (s, r) => (
        c(),
        H(
          k0,
          {
            class: w({
              VPNavBarMenuGroup: !0,
              active:
                v(G)(
                  v(a).relativePath,
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
  C8 = {
    key: 0,
    'aria-labelledby': 'main-nav-aria-label',
    class: 'VPNavBarMenu',
  },
  A8 = p({
    __name: 'VPNavBarMenu',
    setup(e) {
      const { theme: l } = B()
      return (a, i) =>
        v(l).nav
          ? (c(),
            t('nav', C8, [
              i[0] ||
                (i[0] = m(
                  'span',
                  { id: 'main-nav-aria-label', class: 'visually-hidden' },
                  ' Main Navigation ',
                  -1,
                )),
              (c(!0),
              t(
                _,
                null,
                P(
                  v(l).nav,
                  (o) => (
                    c(),
                    t(
                      _,
                      { key: JSON.stringify(o) },
                      [
                        'link' in o
                          ? (c(), H(V8, { key: 0, item: o }, null, 8, ['item']))
                          : 'component' in o
                            ? (c(),
                              H(
                                N(o.component),
                                J({ key: 1, ref_for: !0 }, o.props),
                                null,
                                16,
                              ))
                            : (c(),
                              H(H8, { key: 2, item: o }, null, 8, ['item'])),
                      ],
                      64,
                    )
                  ),
                ),
                128,
              )),
            ]))
          : f('', !0)
    },
  }),
  w8 = A(A8, [['__scopeId', 'data-v-9c9c04b5']])
function x8(e) {
  const { localeIndex: l, theme: a } = B()
  function i(o) {
    var q, Z, k
    const s = o.split('.'),
      r = (q = a.value.search) == null ? void 0 : q.options,
      h = r && typeof r == 'object',
      b =
        (h &&
          ((k = (Z = r.locales) == null ? void 0 : Z[l.value]) == null
            ? void 0
            : k.translations)) ||
        null,
      y = (h && r.translations) || null
    let M = b,
      z = y,
      C = e
    const x = s.pop()
    for (const j of s) {
      let U = null
      const K = C == null ? void 0 : C[j]
      K && (U = C = K)
      const d0 = z == null ? void 0 : z[j]
      d0 && (U = z = d0)
      const p0 = M == null ? void 0 : M[j]
      p0 && (U = M = p0), K || (C = U), d0 || (z = U), p0 || (M = U)
    }
    return (
      (M == null ? void 0 : M[x]) ??
      (z == null ? void 0 : z[x]) ??
      (C == null ? void 0 : C[x]) ??
      ''
    )
  }
  return i
}
const L8 = ['aria-label'],
  B8 = { class: 'DocSearch-Button-Container' },
  g8 = { class: 'DocSearch-Button-Placeholder' },
  $0 = p({
    __name: 'VPNavBarSearchButton',
    setup(e) {
      const a = x8({
        button: { buttonText: 'Search', buttonAriaLabel: 'Search' },
      })
      return (i, o) => (
        c(),
        t(
          'button',
          {
            type: 'button',
            class: 'DocSearch DocSearch-Button',
            'aria-label': v(a)('button.buttonAriaLabel'),
          },
          [
            m('span', B8, [
              o[0] ||
                (o[0] = m(
                  'span',
                  { class: 'vp-icon DocSearch-Search-Icon' },
                  null,
                  -1,
                )),
              m('span', g8, g(v(a)('button.buttonText')), 1),
            ]),
            o[1] ||
              (o[1] = m(
                'span',
                { class: 'DocSearch-Button-Keys' },
                [
                  m('kbd', { class: 'DocSearch-Button-Key' }),
                  m('kbd', { class: 'DocSearch-Button-Key' }, 'K'),
                ],
                -1,
              )),
          ],
          8,
          L8,
        )
      )
    },
  }),
  k8 = { class: 'VPNavBarSearch' },
  q8 = { id: 'local-search' },
  _8 = { key: 1, id: 'docsearch' },
  $8 = p({
    __name: 'VPNavBarSearch',
    setup(e) {
      const l = () => null,
        a = () => null,
        { theme: i } = B(),
        o = L(!1),
        s = L(!1)
      T(() => {})
      function r() {
        o.value || ((o.value = !0), setTimeout(h, 16))
      }
      function h() {
        const M = new Event('keydown')
        ;(M.key = 'k'),
          (M.metaKey = !0),
          window.dispatchEvent(M),
          setTimeout(() => {
            document.querySelector('.DocSearch-Modal') || h()
          }, 16)
      }
      const b = L(!1),
        y = ''
      return (M, z) => {
        var C
        return (
          c(),
          t('div', k8, [
            v(y) === 'local'
              ? (c(),
                t(
                  _,
                  { key: 0 },
                  [
                    b.value
                      ? (c(),
                        H(v(l), {
                          key: 0,
                          onClose: z[0] || (z[0] = (x) => (b.value = !1)),
                        }))
                      : f('', !0),
                    m('div', q8, [
                      V($0, {
                        onClick: z[1] || (z[1] = (x) => (b.value = !0)),
                      }),
                    ]),
                  ],
                  64,
                ))
              : v(y) === 'algolia'
                ? (c(),
                  t(
                    _,
                    { key: 1 },
                    [
                      o.value
                        ? (c(),
                          H(
                            v(a),
                            {
                              key: 0,
                              algolia:
                                ((C = v(i).search) == null
                                  ? void 0
                                  : C.options) ?? v(i).algolia,
                              onVnodeBeforeMount:
                                z[2] || (z[2] = (x) => (s.value = !0)),
                            },
                            null,
                            8,
                            ['algolia'],
                          ))
                        : f('', !0),
                      s.value
                        ? f('', !0)
                        : (c(), t('div', _8, [V($0, { onClick: r })])),
                    ],
                    64,
                  ))
                : f('', !0),
          ])
        )
      }
    },
  }),
  S8 = p({
    __name: 'VPNavBarSocialLinks',
    setup(e) {
      const { theme: l } = B()
      return (a, i) =>
        v(l).socialLinks
          ? (c(),
            H(
              q0,
              { key: 0, class: 'VPNavBarSocialLinks', links: v(l).socialLinks },
              null,
              8,
              ['links'],
            ))
          : f('', !0)
    },
  }),
  Z8 = A(S8, [['__scopeId', 'data-v-6b14c465']]),
  P8 = ['href', 'rel', 'target'],
  j8 = ['innerHTML'],
  I8 = { key: 2 },
  T8 = p({
    __name: 'VPNavBarTitle',
    setup(e) {
      const { site: l, theme: a } = B(),
        { hasSidebar: i } = Q(),
        { currentLang: o } = l0(),
        s = u(() => {
          var b
          return typeof a.value.logoLink == 'string'
            ? a.value.logoLink
            : (b = a.value.logoLink) == null
              ? void 0
              : b.link
        }),
        r = u(() => {
          var b
          return typeof a.value.logoLink == 'string' ||
            (b = a.value.logoLink) == null
            ? void 0
            : b.rel
        }),
        h = u(() => {
          var b
          return typeof a.value.logoLink == 'string' ||
            (b = a.value.logoLink) == null
            ? void 0
            : b.target
        })
      return (b, y) => (
        c(),
        t(
          'div',
          { class: w(['VPNavBarTitle', { 'has-sidebar': v(i) }]) },
          [
            m(
              'a',
              {
                class: 'title',
                href: s.value ?? v(x0)(v(o).link),
                rel: r.value,
                target: h.value,
              },
              [
                n(b.$slots, 'nav-bar-title-before', {}, void 0, !0),
                v(a).logo
                  ? (c(),
                    H(
                      s0,
                      { key: 0, class: 'logo', image: v(a).logo },
                      null,
                      8,
                      ['image'],
                    ))
                  : f('', !0),
                v(a).siteTitle
                  ? (c(),
                    t(
                      'span',
                      { key: 1, innerHTML: v(a).siteTitle },
                      null,
                      8,
                      j8,
                    ))
                  : v(a).siteTitle === void 0
                    ? (c(), t('span', I8, g(v(l).title), 1))
                    : f('', !0),
                n(b.$slots, 'nav-bar-title-after', {}, void 0, !0),
              ],
              8,
              P8,
            ),
          ],
          2,
        )
      )
    },
  }),
  N8 = A(T8, [['__scopeId', 'data-v-8ca0c626']]),
  O8 = { class: 'items' },
  D8 = { class: 'title' },
  E8 = p({
    __name: 'VPNavBarTranslations',
    setup(e) {
      const { theme: l } = B(),
        { localeLinks: a, currentLang: i } = l0({ correspondingLink: !0 })
      return (o, s) =>
        v(a).length && v(i).label
          ? (c(),
            H(
              k0,
              {
                key: 0,
                class: 'VPNavBarTranslations',
                icon: 'vpi-languages',
                label: v(l).langMenuLabel || 'Change language',
              },
              {
                default: d(() => [
                  m('div', O8, [
                    m('p', D8, g(v(i).label), 1),
                    (c(!0),
                    t(
                      _,
                      null,
                      P(
                        v(a),
                        (r) => (
                          c(),
                          H(b0, { key: r.link, item: r }, null, 8, ['item'])
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
          : f('', !0)
    },
  }),
  F8 = A(E8, [['__scopeId', 'data-v-565f7665']]),
  Q8 = { class: 'wrapper' },
  U8 = { class: 'container' },
  J8 = { class: 'title' },
  G8 = { class: 'content' },
  R8 = { class: 'content-body' },
  W8 = p({
    __name: 'VPNavBar',
    props: { isScreenOpen: { type: Boolean } },
    emits: ['toggle-screen'],
    setup(e) {
      const l = e,
        { y: a } = I0(),
        { hasSidebar: i } = Q(),
        { frontmatter: o } = B(),
        s = L({})
      return (
        A0(() => {
          s.value = {
            'has-sidebar': i.value,
            home: o.value.layout === 'home',
            top: a.value === 0,
            'screen-open': l.isScreenOpen,
          }
        }),
        (r, h) => (
          c(),
          t(
            'div',
            { class: w(['VPNavBar', s.value]) },
            [
              m('div', Q8, [
                m('div', U8, [
                  m('div', J8, [
                    V(N8, null, {
                      'nav-bar-title-before': d(() => [
                        n(r.$slots, 'nav-bar-title-before', {}, void 0, !0),
                      ]),
                      'nav-bar-title-after': d(() => [
                        n(r.$slots, 'nav-bar-title-after', {}, void 0, !0),
                      ]),
                      _: 3,
                    }),
                  ]),
                  m('div', G8, [
                    m('div', R8, [
                      n(r.$slots, 'nav-bar-content-before', {}, void 0, !0),
                      V($8, { class: 'search' }),
                      V(w8, { class: 'menu' }),
                      V(F8, { class: 'translations' }),
                      V(S6, { class: 'appearance' }),
                      V(Z8, { class: 'social-links' }),
                      V(p8, { class: 'extra' }),
                      n(r.$slots, 'nav-bar-content-after', {}, void 0, !0),
                      V(
                        y8,
                        {
                          class: 'hamburger',
                          active: r.isScreenOpen,
                          onClick:
                            h[0] || (h[0] = (b) => r.$emit('toggle-screen')),
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
                (h[1] = m(
                  'div',
                  { class: 'divider' },
                  [m('div', { class: 'divider-line' })],
                  -1,
                )),
            ],
            2,
          )
        )
      )
    },
  }),
  K8 = A(W8, [['__scopeId', 'data-v-f9d2f94e']]),
  Y8 = { key: 0, class: 'VPNavScreenAppearance' },
  X8 = { class: 'text' },
  aa = p({
    __name: 'VPNavScreenAppearance',
    setup(e) {
      const { site: l, theme: a } = B()
      return (i, o) =>
        v(l).appearance &&
        v(l).appearance !== 'force-dark' &&
        v(l).appearance !== 'force-auto'
          ? (c(),
            t('div', Y8, [
              m('p', X8, g(v(a).darkModeSwitchLabel || 'Appearance'), 1),
              V(B0),
            ]))
          : f('', !0)
    },
  }),
  la = A(aa, [['__scopeId', 'data-v-65157c8f']]),
  ia = ['innerHTML'],
  oa = p({
    __name: 'VPNavScreenMenuLink',
    props: { item: {} },
    setup(e) {
      const l = n0('close-screen')
      return (a, i) => (
        c(),
        H(
          O,
          {
            class: 'VPNavScreenMenuLink',
            href: a.item.link,
            target: a.item.target,
            rel: a.item.rel,
            'no-icon': a.item.noIcon,
            onClick: v(l),
          },
          {
            default: d(() => [
              m('span', { innerHTML: a.item.text }, null, 8, ia),
            ]),
            _: 1,
          },
          8,
          ['href', 'target', 'rel', 'no-icon', 'onClick'],
        )
      )
    },
  }),
  ea = A(oa, [['__scopeId', 'data-v-7bea6e7a']]),
  sa = ['innerHTML'],
  ca = p({
    __name: 'VPNavScreenMenuGroupLink',
    props: { item: {} },
    setup(e) {
      const l = n0('close-screen')
      return (a, i) => (
        c(),
        H(
          O,
          {
            class: 'VPNavScreenMenuGroupLink',
            href: a.item.link,
            target: a.item.target,
            rel: a.item.rel,
            'no-icon': a.item.noIcon,
            onClick: v(l),
          },
          {
            default: d(() => [
              m('span', { innerHTML: a.item.text }, null, 8, sa),
            ]),
            _: 1,
          },
          8,
          ['href', 'target', 'rel', 'no-icon', 'onClick'],
        )
      )
    },
  }),
  G0 = A(ca, [['__scopeId', 'data-v-aa653106']]),
  ra = { class: 'VPNavScreenMenuGroupSection' },
  ha = { key: 0, class: 'title' },
  ta = p({
    __name: 'VPNavScreenMenuGroupSection',
    props: { text: {}, items: {} },
    setup(e) {
      return (l, a) => (
        c(),
        t('div', ra, [
          l.text ? (c(), t('p', ha, g(l.text), 1)) : f('', !0),
          (c(!0),
          t(
            _,
            null,
            P(
              l.items,
              (i) => (c(), H(G0, { key: i.text, item: i }, null, 8, ['item'])),
            ),
            128,
          )),
        ])
      )
    },
  }),
  va = A(ta, [['__scopeId', 'data-v-5bf1f535']]),
  na = ['aria-controls', 'aria-expanded'],
  ma = ['innerHTML'],
  ba = ['id'],
  da = { key: 0, class: 'item' },
  pa = { key: 1, class: 'item' },
  ua = { key: 2, class: 'group' },
  fa = p({
    __name: 'VPNavScreenMenuGroup',
    props: { text: {}, items: {} },
    setup(e) {
      const l = e,
        a = L(!1),
        i = u(() => `NavScreenGroup-${l.text.replace(' ', '-').toLowerCase()}`)
      function o() {
        a.value = !a.value
      }
      return (s, r) => (
        c(),
        t(
          'div',
          { class: w(['VPNavScreenMenuGroup', { open: a.value }]) },
          [
            m(
              'button',
              {
                class: 'button',
                'aria-controls': i.value,
                'aria-expanded': a.value,
                onClick: o,
              },
              [
                m(
                  'span',
                  { class: 'button-text', innerHTML: s.text },
                  null,
                  8,
                  ma,
                ),
                r[0] ||
                  (r[0] = m(
                    'span',
                    { class: 'vpi-plus button-icon' },
                    null,
                    -1,
                  )),
              ],
              8,
              na,
            ),
            m(
              'div',
              { id: i.value, class: 'items' },
              [
                (c(!0),
                t(
                  _,
                  null,
                  P(
                    s.items,
                    (h) => (
                      c(),
                      t(
                        _,
                        { key: JSON.stringify(h) },
                        [
                          'link' in h
                            ? (c(),
                              t('div', da, [
                                V(G0, { item: h }, null, 8, ['item']),
                              ]))
                            : 'component' in h
                              ? (c(),
                                t('div', pa, [
                                  (c(),
                                  H(
                                    N(h.component),
                                    J({ ref_for: !0 }, h.props, {
                                      'screen-menu': '',
                                    }),
                                    null,
                                    16,
                                  )),
                                ]))
                              : (c(),
                                t('div', ua, [
                                  V(
                                    va,
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
              ba,
            ),
          ],
          2,
        )
      )
    },
  }),
  ya = A(fa, [['__scopeId', 'data-v-784e0cf9']]),
  Ma = { key: 0, class: 'VPNavScreenMenu' },
  za = p({
    __name: 'VPNavScreenMenu',
    setup(e) {
      const { theme: l } = B()
      return (a, i) =>
        v(l).nav
          ? (c(),
            t('nav', Ma, [
              (c(!0),
              t(
                _,
                null,
                P(
                  v(l).nav,
                  (o) => (
                    c(),
                    t(
                      _,
                      { key: JSON.stringify(o) },
                      [
                        'link' in o
                          ? (c(), H(ea, { key: 0, item: o }, null, 8, ['item']))
                          : 'component' in o
                            ? (c(),
                              H(
                                N(o.component),
                                J({ key: 1, ref_for: !0 }, o.props, {
                                  'screen-menu': '',
                                }),
                                null,
                                16,
                              ))
                            : (c(),
                              H(
                                ya,
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
          : f('', !0)
    },
  }),
  Va = p({
    __name: 'VPNavScreenSocialLinks',
    setup(e) {
      const { theme: l } = B()
      return (a, i) =>
        v(l).socialLinks
          ? (c(),
            H(
              q0,
              {
                key: 0,
                class: 'VPNavScreenSocialLinks',
                links: v(l).socialLinks,
              },
              null,
              8,
              ['links'],
            ))
          : f('', !0)
    },
  }),
  Ha = { class: 'list' },
  Ca = p({
    __name: 'VPNavScreenTranslations',
    setup(e) {
      const { localeLinks: l, currentLang: a } = l0({ correspondingLink: !0 }),
        i = L(!1)
      function o() {
        i.value = !i.value
      }
      return (s, r) =>
        v(l).length && v(a).label
          ? (c(),
            t(
              'div',
              {
                key: 0,
                class: w(['VPNavScreenTranslations', { open: i.value }]),
              },
              [
                m('button', { class: 'title', onClick: o }, [
                  r[0] ||
                    (r[0] = m(
                      'span',
                      { class: 'vpi-languages icon lang' },
                      null,
                      -1,
                    )),
                  I(' ' + g(v(a).label) + ' ', 1),
                  r[1] ||
                    (r[1] = m(
                      'span',
                      { class: 'vpi-chevron-down icon chevron' },
                      null,
                      -1,
                    )),
                ]),
                m('ul', Ha, [
                  (c(!0),
                  t(
                    _,
                    null,
                    P(
                      v(l),
                      (h) => (
                        c(),
                        t('li', { key: h.link, class: 'item' }, [
                          V(
                            O,
                            { class: 'link', href: h.link },
                            { default: d(() => [I(g(h.text), 1)]), _: 2 },
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
          : f('', !0)
    },
  }),
  Aa = A(Ca, [['__scopeId', 'data-v-2dd0964c']]),
  wa = { class: 'container' },
  xa = p({
    __name: 'VPNavScreen',
    props: { open: { type: Boolean } },
    setup(e) {
      const l = L(null),
        a = T0(m0 ? document.body : null)
      return (i, o) => (
        c(),
        H(
          R,
          {
            name: 'fade',
            onEnter: o[0] || (o[0] = (s) => (a.value = !0)),
            onAfterLeave: o[1] || (o[1] = (s) => (a.value = !1)),
          },
          {
            default: d(() => [
              i.open
                ? (c(),
                  t(
                    'div',
                    {
                      key: 0,
                      class: 'VPNavScreen',
                      ref_key: 'screen',
                      ref: l,
                      id: 'VPNavScreen',
                    },
                    [
                      m('div', wa, [
                        n(
                          i.$slots,
                          'nav-screen-content-before',
                          {},
                          void 0,
                          !0,
                        ),
                        V(za, { class: 'menu' }),
                        V(Aa, { class: 'translations' }),
                        V(la, { class: 'appearance' }),
                        V(Va, { class: 'social-links' }),
                        n(i.$slots, 'nav-screen-content-after', {}, void 0, !0),
                      ]),
                    ],
                    512,
                  ))
                : f('', !0),
            ]),
            _: 3,
          },
        )
      )
    },
  }),
  La = A(xa, [['__scopeId', 'data-v-9305edfe']]),
  Ba = { key: 0, class: 'VPNav' },
  ga = p({
    __name: 'VPNav',
    setup(e) {
      const { isScreenOpen: l, closeScreen: a, toggleScreen: i } = A6(),
        { frontmatter: o } = B(),
        s = u(() => o.value.navbar !== !1)
      return (
        N0('close-screen', a),
        h0(() => {
          m0 && document.documentElement.classList.toggle('hide-nav', !s.value)
        }),
        (r, h) =>
          s.value
            ? (c(),
              t('header', Ba, [
                V(
                  K8,
                  { 'is-screen-open': v(l), onToggleScreen: v(i) },
                  {
                    'nav-bar-title-before': d(() => [
                      n(r.$slots, 'nav-bar-title-before', {}, void 0, !0),
                    ]),
                    'nav-bar-title-after': d(() => [
                      n(r.$slots, 'nav-bar-title-after', {}, void 0, !0),
                    ]),
                    'nav-bar-content-before': d(() => [
                      n(r.$slots, 'nav-bar-content-before', {}, void 0, !0),
                    ]),
                    'nav-bar-content-after': d(() => [
                      n(r.$slots, 'nav-bar-content-after', {}, void 0, !0),
                    ]),
                    _: 3,
                  },
                  8,
                  ['is-screen-open', 'onToggleScreen'],
                ),
                V(
                  La,
                  { open: v(l) },
                  {
                    'nav-screen-content-before': d(() => [
                      n(r.$slots, 'nav-screen-content-before', {}, void 0, !0),
                    ]),
                    'nav-screen-content-after': d(() => [
                      n(r.$slots, 'nav-screen-content-after', {}, void 0, !0),
                    ]),
                    _: 3,
                  },
                  8,
                  ['open'],
                ),
              ]))
            : f('', !0)
      )
    },
  }),
  ka = A(ga, [['__scopeId', 'data-v-38a54cc5']]),
  qa = ['role', 'tabindex'],
  _a = { key: 1, class: 'items' },
  $a = p({
    __name: 'VPSidebarItem',
    props: { item: {}, depth: {} },
    setup(e) {
      const l = e,
        {
          collapsed: a,
          collapsible: i,
          isLink: o,
          isActiveLink: s,
          hasActiveLink: r,
          hasChildren: h,
          toggle: b,
        } = B3(u(() => l.item)),
        y = u(() => (h.value ? 'section' : 'div')),
        M = u(() => (o.value ? 'a' : 'div')),
        z = u(() =>
          h.value ? (l.depth + 2 === 7 ? 'p' : `h${l.depth + 2}`) : 'p',
        ),
        C = u(() => (o.value ? void 0 : 'button')),
        x = u(() => [
          [`level-${l.depth}`],
          { collapsible: i.value },
          { collapsed: a.value },
          { 'is-link': o.value },
          { 'is-active': s.value },
          { 'has-active': r.value },
        ])
      function q(k) {
        ;('key' in k && k.key !== 'Enter') || (!l.item.link && b())
      }
      function Z() {
        l.item.link && b()
      }
      return (k, j) => {
        const U = W('VPSidebarItem', !0)
        return (
          c(),
          H(
            N(y.value),
            { class: w(['VPSidebarItem', x.value]) },
            {
              default: d(() => [
                k.item.text
                  ? (c(),
                    t(
                      'div',
                      J(
                        { key: 0, class: 'item', role: C.value },
                        r1(k.item.items ? { click: q, keydown: q } : {}, !0),
                        { tabindex: k.item.items && 0 },
                      ),
                      [
                        j[1] ||
                          (j[1] = m('div', { class: 'indicator' }, null, -1)),
                        k.item.link
                          ? (c(),
                            H(
                              O,
                              {
                                key: 0,
                                tag: M.value,
                                class: 'link',
                                href: k.item.link,
                                rel: k.item.rel,
                                target: k.item.target,
                              },
                              {
                                default: d(() => [
                                  (c(),
                                  H(
                                    N(z.value),
                                    { class: 'text', innerHTML: k.item.text },
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
                            H(
                              N(z.value),
                              { key: 1, class: 'text', innerHTML: k.item.text },
                              null,
                              8,
                              ['innerHTML'],
                            )),
                        k.item.collapsed != null &&
                        k.item.items &&
                        k.item.items.length
                          ? (c(),
                            t(
                              'div',
                              {
                                key: 2,
                                class: 'caret',
                                role: 'button',
                                'aria-label': 'toggle section',
                                onClick: Z,
                                onKeydown: h1(Z, ['enter']),
                                tabindex: '0',
                              },
                              j[0] ||
                                (j[0] = [
                                  m(
                                    'span',
                                    { class: 'vpi-chevron-right caret-icon' },
                                    null,
                                    -1,
                                  ),
                                ]),
                              32,
                            ))
                          : f('', !0),
                      ],
                      16,
                      qa,
                    ))
                  : f('', !0),
                k.item.items && k.item.items.length
                  ? (c(),
                    t('div', _a, [
                      k.depth < 5
                        ? (c(!0),
                          t(
                            _,
                            { key: 0 },
                            P(
                              k.item.items,
                              (K) => (
                                c(),
                                H(
                                  U,
                                  { key: K.text, item: K, depth: k.depth + 1 },
                                  null,
                                  8,
                                  ['item', 'depth'],
                                )
                              ),
                            ),
                            128,
                          ))
                        : f('', !0),
                    ]))
                  : f('', !0),
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
  Sa = A($a, [['__scopeId', 'data-v-3b49f268']]),
  Za = p({
    __name: 'VPSidebarGroup',
    props: { items: {} },
    setup(e) {
      const l = L(!0)
      let a = null
      return (
        T(() => {
          a = setTimeout(() => {
            ;(a = null), (l.value = !1)
          }, 300)
        }),
        t1(() => {
          a != null && (clearTimeout(a), (a = null))
        }),
        (i, o) => (
          c(!0),
          t(
            _,
            null,
            P(
              i.items,
              (s) => (
                c(),
                t(
                  'div',
                  {
                    key: s.text,
                    class: w(['group', { 'no-transition': l.value }]),
                  },
                  [V(Sa, { item: s, depth: 0 }, null, 8, ['item'])],
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
  Pa = A(Za, [['__scopeId', 'data-v-404a94b2']]),
  ja = {
    class: 'nav',
    id: 'VPSidebarNav',
    'aria-labelledby': 'sidebar-aria-label',
    tabindex: '-1',
  },
  Ia = p({
    __name: 'VPSidebar',
    props: { open: { type: Boolean } },
    setup(e) {
      const { sidebarGroups: l, hasSidebar: a } = Q(),
        i = e,
        o = L(null),
        s = T0(m0 ? document.body : null)
      D(
        [i, o],
        () => {
          var h
          i.open
            ? ((s.value = !0), (h = o.value) == null || h.focus())
            : (s.value = !1)
        },
        { immediate: !0, flush: 'post' },
      )
      const r = L(0)
      return (
        D(
          l,
          () => {
            r.value += 1
          },
          { deep: !0 },
        ),
        (h, b) =>
          v(a)
            ? (c(),
              t(
                'aside',
                {
                  key: 0,
                  class: w(['VPSidebar', { open: h.open }]),
                  ref_key: 'navEl',
                  ref: o,
                  onClick: b[0] || (b[0] = c0(() => {}, ['stop'])),
                },
                [
                  b[2] || (b[2] = m('div', { class: 'curtain' }, null, -1)),
                  m('nav', ja, [
                    b[1] ||
                      (b[1] = m(
                        'span',
                        { class: 'visually-hidden', id: 'sidebar-aria-label' },
                        ' Sidebar Navigation ',
                        -1,
                      )),
                    n(h.$slots, 'sidebar-nav-before', {}, void 0, !0),
                    (c(),
                    H(Pa, { items: v(l), key: r.value }, null, 8, ['items'])),
                    n(h.$slots, 'sidebar-nav-after', {}, void 0, !0),
                  ]),
                ],
                2,
              ))
            : f('', !0)
      )
    },
  }),
  Ta = A(Ia, [['__scopeId', 'data-v-148fc3ae']]),
  Na = p({
    __name: 'VPSkipLink',
    setup(e) {
      const l = v0(),
        a = L()
      D(
        () => l.path,
        () => a.value.focus(),
      )
      function i({ target: o }) {
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
          _,
          null,
          [
            m(
              'span',
              { ref_key: 'backToTop', ref: a, tabindex: '-1' },
              null,
              512,
            ),
            m(
              'a',
              {
                href: '#VPContent',
                class: 'VPSkipLink visually-hidden',
                onClick: i,
              },
              ' Skip to content ',
            ),
          ],
          64,
        )
      )
    },
  }),
  Oa = A(Na, [['__scopeId', 'data-v-dab30db6']]),
  Da = p({
    __name: 'Layout',
    setup(e) {
      const { isOpen: l, open: a, close: i } = Q(),
        o = v0()
      D(() => o.path, i), L3(l, i)
      const { frontmatter: s } = B(),
        r = v1(),
        h = u(() => !!r['home-hero-image'])
      return (
        N0('hero-image-slot-exists', h),
        (b, y) => {
          const M = W('Content')
          return v(s).layout !== !1
            ? (c(),
              t(
                'div',
                { key: 0, class: w(['Layout', v(s).pageClass]) },
                [
                  n(b.$slots, 'layout-top', {}, void 0, !0),
                  V(Oa),
                  V(
                    d3,
                    { class: 'backdrop', show: v(l), onClick: v(i) },
                    null,
                    8,
                    ['show', 'onClick'],
                  ),
                  V(ka, null, {
                    'nav-bar-title-before': d(() => [
                      n(b.$slots, 'nav-bar-title-before', {}, void 0, !0),
                    ]),
                    'nav-bar-title-after': d(() => [
                      n(b.$slots, 'nav-bar-title-after', {}, void 0, !0),
                    ]),
                    'nav-bar-content-before': d(() => [
                      n(b.$slots, 'nav-bar-content-before', {}, void 0, !0),
                    ]),
                    'nav-bar-content-after': d(() => [
                      n(b.$slots, 'nav-bar-content-after', {}, void 0, !0),
                    ]),
                    'nav-screen-content-before': d(() => [
                      n(b.$slots, 'nav-screen-content-before', {}, void 0, !0),
                    ]),
                    'nav-screen-content-after': d(() => [
                      n(b.$slots, 'nav-screen-content-after', {}, void 0, !0),
                    ]),
                    _: 3,
                  }),
                  V(C6, { open: v(l), onOpenMenu: v(a) }, null, 8, [
                    'open',
                    'onOpenMenu',
                  ]),
                  V(
                    Ta,
                    { open: v(l) },
                    {
                      'sidebar-nav-before': d(() => [
                        n(b.$slots, 'sidebar-nav-before', {}, void 0, !0),
                      ]),
                      'sidebar-nav-after': d(() => [
                        n(b.$slots, 'sidebar-nav-after', {}, void 0, !0),
                      ]),
                      _: 3,
                    },
                    8,
                    ['open'],
                  ),
                  V(r6, null, {
                    'page-top': d(() => [
                      n(b.$slots, 'page-top', {}, void 0, !0),
                    ]),
                    'page-bottom': d(() => [
                      n(b.$slots, 'page-bottom', {}, void 0, !0),
                    ]),
                    'not-found': d(() => [
                      n(b.$slots, 'not-found', {}, void 0, !0),
                    ]),
                    'home-hero-before': d(() => [
                      n(b.$slots, 'home-hero-before', {}, void 0, !0),
                    ]),
                    'home-hero-info-before': d(() => [
                      n(b.$slots, 'home-hero-info-before', {}, void 0, !0),
                    ]),
                    'home-hero-info': d(() => [
                      n(b.$slots, 'home-hero-info', {}, void 0, !0),
                    ]),
                    'home-hero-info-after': d(() => [
                      n(b.$slots, 'home-hero-info-after', {}, void 0, !0),
                    ]),
                    'home-hero-actions-after': d(() => [
                      n(b.$slots, 'home-hero-actions-after', {}, void 0, !0),
                    ]),
                    'home-hero-image': d(() => [
                      n(b.$slots, 'home-hero-image', {}, void 0, !0),
                    ]),
                    'home-hero-after': d(() => [
                      n(b.$slots, 'home-hero-after', {}, void 0, !0),
                    ]),
                    'home-features-before': d(() => [
                      n(b.$slots, 'home-features-before', {}, void 0, !0),
                    ]),
                    'home-features-after': d(() => [
                      n(b.$slots, 'home-features-after', {}, void 0, !0),
                    ]),
                    'doc-footer-before': d(() => [
                      n(b.$slots, 'doc-footer-before', {}, void 0, !0),
                    ]),
                    'doc-before': d(() => [
                      n(b.$slots, 'doc-before', {}, void 0, !0),
                    ]),
                    'doc-after': d(() => [
                      n(b.$slots, 'doc-after', {}, void 0, !0),
                    ]),
                    'doc-top': d(() => [
                      n(b.$slots, 'doc-top', {}, void 0, !0),
                    ]),
                    'doc-bottom': d(() => [
                      n(b.$slots, 'doc-bottom', {}, void 0, !0),
                    ]),
                    'aside-top': d(() => [
                      n(b.$slots, 'aside-top', {}, void 0, !0),
                    ]),
                    'aside-bottom': d(() => [
                      n(b.$slots, 'aside-bottom', {}, void 0, !0),
                    ]),
                    'aside-outline-before': d(() => [
                      n(b.$slots, 'aside-outline-before', {}, void 0, !0),
                    ]),
                    'aside-outline-after': d(() => [
                      n(b.$slots, 'aside-outline-after', {}, void 0, !0),
                    ]),
                    'aside-ads-before': d(() => [
                      n(b.$slots, 'aside-ads-before', {}, void 0, !0),
                    ]),
                    'aside-ads-after': d(() => [
                      n(b.$slots, 'aside-ads-after', {}, void 0, !0),
                    ]),
                    _: 3,
                  }),
                  V(m6),
                  n(b.$slots, 'layout-bottom', {}, void 0, !0),
                ],
                2,
              ))
            : (c(), H(M, { key: 1 }))
        }
      )
    },
  }),
  Ea = A(Da, [['__scopeId', 'data-v-73056ea6']]),
  Fa = {
    Layout: Ea,
    enhanceApp: ({ app: e }) => {
      e.component('Badge', n3)
    },
  },
  Ga = {
    ...Fa,
    enhanceApp({ app: e }) {
      e.use(v3)
    },
  }
export {
  Q5 as A,
  F as B,
  Ja as E,
  O0 as F,
  e3 as I,
  Ua as J,
  h3 as N,
  n2 as P,
  s5 as Q,
  Ga as R,
  v5 as U,
  D1 as V,
  u5 as W,
  V5 as a,
  V2 as b,
  u2 as c,
  Y2 as d,
  D2 as e,
  _5 as f,
  K1 as g,
  B5 as h,
  _1 as i,
  Y5 as k,
  j1 as p,
  x2 as s,
  N5 as u,
  U1 as w,
  J2 as x,
}