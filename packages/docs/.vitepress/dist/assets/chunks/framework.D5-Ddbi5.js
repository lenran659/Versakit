/**
 * @vue/shared v3.5.13
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ /*! #__NO_SIDE_EFFECTS__ */ function Ms(e) {
  const t = Object.create(null)
  for (const n of e.split(',')) t[n] = 1
  return (n) => n in t
}
const ee = {},
  xt = [],
  Ue = () => {},
  Do = () => !1,
  Qt = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97),
  Ps = (e) => e.startsWith('onUpdate:'),
  ae = Object.assign,
  Is = (e, t) => {
    const n = e.indexOf(t)
    n > -1 && e.splice(n, 1)
  },
  $o = Object.prototype.hasOwnProperty,
  z = (e, t) => $o.call(e, t),
  j = Array.isArray,
  Et = (e) => Zt(e) === '[object Map]',
  Xr = (e) => Zt(e) === '[object Set]',
  sr = (e) => Zt(e) === '[object Date]',
  K = (e) => typeof e == 'function',
  re = (e) => typeof e == 'string',
  He = (e) => typeof e == 'symbol',
  Z = (e) => e !== null && typeof e == 'object',
  Jr = (e) => (Z(e) || K(e)) && K(e.then) && K(e.catch),
  zr = Object.prototype.toString,
  Zt = (e) => zr.call(e),
  jo = (e) => Zt(e).slice(8, -1),
  Qr = (e) => Zt(e) === '[object Object]',
  Ls = (e) =>
    re(e) && e !== 'NaN' && e[0] !== '-' && '' + parseInt(e, 10) === e,
  Ct = Ms(
    ',key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted',
  ),
  In = (e) => {
    const t = Object.create(null)
    return (n) => t[n] || (t[n] = e(n))
  },
  Vo = /-(\w)/g,
  Ie = In((e) => e.replace(Vo, (t, n) => (n ? n.toUpperCase() : ''))),
  ko = /\B([A-Z])/g,
  st = In((e) => e.replace(ko, '-$1').toLowerCase()),
  Ln = In((e) => e.charAt(0).toUpperCase() + e.slice(1)),
  yn = In((e) => (e ? `on${Ln(e)}` : '')),
  et = (e, t) => !Object.is(e, t),
  vn = (e, ...t) => {
    for (let n = 0; n < e.length; n++) e[n](...t)
  },
  Zr = (e, t, n, s = !1) => {
    Object.defineProperty(e, t, {
      configurable: !0,
      enumerable: !1,
      writable: s,
      value: n,
    })
  },
  Uo = (e) => {
    const t = parseFloat(e)
    return isNaN(t) ? e : t
  },
  Bo = (e) => {
    const t = re(e) ? Number(e) : NaN
    return isNaN(t) ? e : t
  }
let rr
const Nn = () =>
  rr ||
  (rr =
    typeof globalThis < 'u'
      ? globalThis
      : typeof self < 'u'
        ? self
        : typeof window < 'u'
          ? window
          : typeof global < 'u'
            ? global
            : {})
function Ns(e) {
  if (j(e)) {
    const t = {}
    for (let n = 0; n < e.length; n++) {
      const s = e[n],
        r = re(s) ? Go(s) : Ns(s)
      if (r) for (const i in r) t[i] = r[i]
    }
    return t
  } else if (re(e) || Z(e)) return e
}
const Wo = /;(?![^(]*\))/g,
  Ko = /:([^]+)/,
  qo = /\/\*[^]*?\*\//g
function Go(e) {
  const t = {}
  return (
    e
      .replace(qo, '')
      .split(Wo)
      .forEach((n) => {
        if (n) {
          const s = n.split(Ko)
          s.length > 1 && (t[s[0].trim()] = s[1].trim())
        }
      }),
    t
  )
}
function Fs(e) {
  let t = ''
  if (re(e)) t = e
  else if (j(e))
    for (let n = 0; n < e.length; n++) {
      const s = Fs(e[n])
      s && (t += s + ' ')
    }
  else if (Z(e)) for (const n in e) e[n] && (t += n + ' ')
  return t.trim()
}
const Yo =
    'itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly',
  Xo = Ms(Yo)
function ei(e) {
  return !!e || e === ''
}
function Jo(e, t) {
  if (e.length !== t.length) return !1
  let n = !0
  for (let s = 0; n && s < e.length; s++) n = xn(e[s], t[s])
  return n
}
function xn(e, t) {
  if (e === t) return !0
  let n = sr(e),
    s = sr(t)
  if (n || s) return n && s ? e.getTime() === t.getTime() : !1
  if (((n = He(e)), (s = He(t)), n || s)) return e === t
  if (((n = j(e)), (s = j(t)), n || s)) return n && s ? Jo(e, t) : !1
  if (((n = Z(e)), (s = Z(t)), n || s)) {
    if (!n || !s) return !1
    const r = Object.keys(e).length,
      i = Object.keys(t).length
    if (r !== i) return !1
    for (const o in e) {
      const l = e.hasOwnProperty(o),
        c = t.hasOwnProperty(o)
      if ((l && !c) || (!l && c) || !xn(e[o], t[o])) return !1
    }
  }
  return String(e) === String(t)
}
const ti = (e) => !!(e && e.__v_isRef === !0),
  zo = (e) =>
    re(e)
      ? e
      : e == null
        ? ''
        : j(e) || (Z(e) && (e.toString === zr || !K(e.toString)))
          ? ti(e)
            ? zo(e.value)
            : JSON.stringify(e, ni, 2)
          : String(e),
  ni = (e, t) =>
    ti(t)
      ? ni(e, t.value)
      : Et(t)
        ? {
            [`Map(${t.size})`]: [...t.entries()].reduce(
              (n, [s, r], i) => ((n[Xn(s, i) + ' =>'] = r), n),
              {},
            ),
          }
        : Xr(t)
          ? { [`Set(${t.size})`]: [...t.values()].map((n) => Xn(n)) }
          : He(t)
            ? Xn(t)
            : Z(t) && !j(t) && !Qr(t)
              ? String(t)
              : t,
  Xn = (e, t = '') => {
    var n
    return He(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  }
/**
 * @vue/reactivity v3.5.13
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ let be
class Qo {
  constructor(t = !1) {
    ;(this.detached = t),
      (this._active = !0),
      (this.effects = []),
      (this.cleanups = []),
      (this._isPaused = !1),
      (this.parent = be),
      !t && be && (this.index = (be.scopes || (be.scopes = [])).push(this) - 1)
  }
  get active() {
    return this._active
  }
  pause() {
    if (this._active) {
      this._isPaused = !0
      let t, n
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++) this.scopes[t].pause()
      for (t = 0, n = this.effects.length; t < n; t++) this.effects[t].pause()
    }
  }
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1
      let t, n
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++) this.scopes[t].resume()
      for (t = 0, n = this.effects.length; t < n; t++) this.effects[t].resume()
    }
  }
  run(t) {
    if (this._active) {
      const n = be
      try {
        return (be = this), t()
      } finally {
        be = n
      }
    }
  }
  on() {
    be = this
  }
  off() {
    be = this.parent
  }
  stop(t) {
    if (this._active) {
      this._active = !1
      let n, s
      for (n = 0, s = this.effects.length; n < s; n++) this.effects[n].stop()
      for (this.effects.length = 0, n = 0, s = this.cleanups.length; n < s; n++)
        this.cleanups[n]()
      if (((this.cleanups.length = 0), this.scopes)) {
        for (n = 0, s = this.scopes.length; n < s; n++) this.scopes[n].stop(!0)
        this.scopes.length = 0
      }
      if (!this.detached && this.parent && !t) {
        const r = this.parent.scopes.pop()
        r &&
          r !== this &&
          ((this.parent.scopes[this.index] = r), (r.index = this.index))
      }
      this.parent = void 0
    }
  }
}
function si() {
  return be
}
function Zo(e, t = !1) {
  be && be.cleanups.push(e)
}
let ne
const Jn = new WeakSet()
class ri {
  constructor(t) {
    ;(this.fn = t),
      (this.deps = void 0),
      (this.depsTail = void 0),
      (this.flags = 5),
      (this.next = void 0),
      (this.cleanup = void 0),
      (this.scheduler = void 0),
      be && be.active && be.effects.push(this)
  }
  pause() {
    this.flags |= 64
  }
  resume() {
    this.flags & 64 &&
      ((this.flags &= -65), Jn.has(this) && (Jn.delete(this), this.trigger()))
  }
  notify() {
    ;(this.flags & 2 && !(this.flags & 32)) || this.flags & 8 || oi(this)
  }
  run() {
    if (!(this.flags & 1)) return this.fn()
    ;(this.flags |= 2), ir(this), li(this)
    const t = ne,
      n = Ne
    ;(ne = this), (Ne = !0)
    try {
      return this.fn()
    } finally {
      ci(this), (ne = t), (Ne = n), (this.flags &= -3)
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep) $s(t)
      ;(this.deps = this.depsTail = void 0),
        ir(this),
        this.onStop && this.onStop(),
        (this.flags &= -2)
    }
  }
  trigger() {
    this.flags & 64
      ? Jn.add(this)
      : this.scheduler
        ? this.scheduler()
        : this.runIfDirty()
  }
  runIfDirty() {
    ms(this) && this.run()
  }
  get dirty() {
    return ms(this)
  }
}
let ii = 0,
  $t,
  jt
function oi(e, t = !1) {
  if (((e.flags |= 8), t)) {
    ;(e.next = jt), (jt = e)
    return
  }
  ;(e.next = $t), ($t = e)
}
function Hs() {
  ii++
}
function Ds() {
  if (--ii > 0) return
  if (jt) {
    let t = jt
    for (jt = void 0; t; ) {
      const n = t.next
      ;(t.next = void 0), (t.flags &= -9), (t = n)
    }
  }
  let e
  for (; $t; ) {
    let t = $t
    for ($t = void 0; t; ) {
      const n = t.next
      if (((t.next = void 0), (t.flags &= -9), t.flags & 1))
        try {
          t.trigger()
        } catch (s) {
          e || (e = s)
        }
      t = n
    }
  }
  if (e) throw e
}
function li(e) {
  for (let t = e.deps; t; t = t.nextDep)
    (t.version = -1),
      (t.prevActiveLink = t.dep.activeLink),
      (t.dep.activeLink = t)
}
function ci(e) {
  let t,
    n = e.depsTail,
    s = n
  for (; s; ) {
    const r = s.prevDep
    s.version === -1 ? (s === n && (n = r), $s(s), el(s)) : (t = s),
      (s.dep.activeLink = s.prevActiveLink),
      (s.prevActiveLink = void 0),
      (s = r)
  }
  ;(e.deps = t), (e.depsTail = n)
}
function ms(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (
      t.dep.version !== t.version ||
      (t.dep.computed && (ai(t.dep.computed) || t.dep.version !== t.version))
    )
      return !0
  return !!e._dirty
}
function ai(e) {
  if (
    (e.flags & 4 && !(e.flags & 16)) ||
    ((e.flags &= -17), e.globalVersion === Wt)
  )
    return
  e.globalVersion = Wt
  const t = e.dep
  if (((e.flags |= 2), t.version > 0 && !e.isSSR && e.deps && !ms(e))) {
    e.flags &= -3
    return
  }
  const n = ne,
    s = Ne
  ;(ne = e), (Ne = !0)
  try {
    li(e)
    const r = e.fn(e._value)
    ;(t.version === 0 || et(r, e._value)) && ((e._value = r), t.version++)
  } catch (r) {
    throw (t.version++, r)
  } finally {
    ;(ne = n), (Ne = s), ci(e), (e.flags &= -3)
  }
}
function $s(e, t = !1) {
  const { dep: n, prevSub: s, nextSub: r } = e
  if (
    (s && ((s.nextSub = r), (e.prevSub = void 0)),
    r && ((r.prevSub = s), (e.nextSub = void 0)),
    n.subs === e && ((n.subs = s), !s && n.computed))
  ) {
    n.computed.flags &= -5
    for (let i = n.computed.deps; i; i = i.nextDep) $s(i, !0)
  }
  !t && !--n.sc && n.map && n.map.delete(n.key)
}
function el(e) {
  const { prevDep: t, nextDep: n } = e
  t && ((t.nextDep = n), (e.prevDep = void 0)),
    n && ((n.prevDep = t), (e.nextDep = void 0))
}
let Ne = !0
const fi = []
function rt() {
  fi.push(Ne), (Ne = !1)
}
function it() {
  const e = fi.pop()
  Ne = e === void 0 ? !0 : e
}
function ir(e) {
  const { cleanup: t } = e
  if (((e.cleanup = void 0), t)) {
    const n = ne
    ne = void 0
    try {
      t()
    } finally {
      ne = n
    }
  }
}
let Wt = 0
class tl {
  constructor(t, n) {
    ;(this.sub = t),
      (this.dep = n),
      (this.version = n.version),
      (this.nextDep =
        this.prevDep =
        this.nextSub =
        this.prevSub =
        this.prevActiveLink =
          void 0)
  }
}
class Fn {
  constructor(t) {
    ;(this.computed = t),
      (this.version = 0),
      (this.activeLink = void 0),
      (this.subs = void 0),
      (this.map = void 0),
      (this.key = void 0),
      (this.sc = 0)
  }
  track(t) {
    if (!ne || !Ne || ne === this.computed) return
    let n = this.activeLink
    if (n === void 0 || n.sub !== ne)
      (n = this.activeLink = new tl(ne, this)),
        ne.deps
          ? ((n.prevDep = ne.depsTail),
            (ne.depsTail.nextDep = n),
            (ne.depsTail = n))
          : (ne.deps = ne.depsTail = n),
        ui(n)
    else if (n.version === -1 && ((n.version = this.version), n.nextDep)) {
      const s = n.nextDep
      ;(s.prevDep = n.prevDep),
        n.prevDep && (n.prevDep.nextDep = s),
        (n.prevDep = ne.depsTail),
        (n.nextDep = void 0),
        (ne.depsTail.nextDep = n),
        (ne.depsTail = n),
        ne.deps === n && (ne.deps = s)
    }
    return n
  }
  trigger(t) {
    this.version++, Wt++, this.notify(t)
  }
  notify(t) {
    Hs()
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify()
    } finally {
      Ds()
    }
  }
}
function ui(e) {
  if ((e.dep.sc++, e.sub.flags & 4)) {
    const t = e.dep.computed
    if (t && !e.dep.subs) {
      t.flags |= 20
      for (let s = t.deps; s; s = s.nextDep) ui(s)
    }
    const n = e.dep.subs
    n !== e && ((e.prevSub = n), n && (n.nextSub = e)), (e.dep.subs = e)
  }
}
const En = new WeakMap(),
  dt = Symbol(''),
  ys = Symbol(''),
  Kt = Symbol('')
function me(e, t, n) {
  if (Ne && ne) {
    let s = En.get(e)
    s || En.set(e, (s = new Map()))
    let r = s.get(n)
    r || (s.set(n, (r = new Fn())), (r.map = s), (r.key = n)), r.track()
  }
}
function qe(e, t, n, s, r, i) {
  const o = En.get(e)
  if (!o) {
    Wt++
    return
  }
  const l = (c) => {
    c && c.trigger()
  }
  if ((Hs(), t === 'clear')) o.forEach(l)
  else {
    const c = j(e),
      u = c && Ls(n)
    if (c && n === 'length') {
      const a = Number(s)
      o.forEach((h, y) => {
        ;(y === 'length' || y === Kt || (!He(y) && y >= a)) && l(h)
      })
    } else
      switch (
        ((n !== void 0 || o.has(void 0)) && l(o.get(n)), u && l(o.get(Kt)), t)
      ) {
        case 'add':
          c ? u && l(o.get('length')) : (l(o.get(dt)), Et(e) && l(o.get(ys)))
          break
        case 'delete':
          c || (l(o.get(dt)), Et(e) && l(o.get(ys)))
          break
        case 'set':
          Et(e) && l(o.get(dt))
          break
      }
  }
  Ds()
}
function nl(e, t) {
  const n = En.get(e)
  return n && n.get(t)
}
function _t(e) {
  const t = J(e)
  return t === e ? t : (me(t, 'iterate', Kt), Pe(e) ? t : t.map(ye))
}
function Hn(e) {
  return me((e = J(e)), 'iterate', Kt), e
}
const sl = {
  __proto__: null,
  [Symbol.iterator]() {
    return zn(this, Symbol.iterator, ye)
  },
  concat(...e) {
    return _t(this).concat(...e.map((t) => (j(t) ? _t(t) : t)))
  },
  entries() {
    return zn(this, 'entries', (e) => ((e[1] = ye(e[1])), e))
  },
  every(e, t) {
    return Be(this, 'every', e, t, void 0, arguments)
  },
  filter(e, t) {
    return Be(this, 'filter', e, t, (n) => n.map(ye), arguments)
  },
  find(e, t) {
    return Be(this, 'find', e, t, ye, arguments)
  },
  findIndex(e, t) {
    return Be(this, 'findIndex', e, t, void 0, arguments)
  },
  findLast(e, t) {
    return Be(this, 'findLast', e, t, ye, arguments)
  },
  findLastIndex(e, t) {
    return Be(this, 'findLastIndex', e, t, void 0, arguments)
  },
  forEach(e, t) {
    return Be(this, 'forEach', e, t, void 0, arguments)
  },
  includes(...e) {
    return Qn(this, 'includes', e)
  },
  indexOf(...e) {
    return Qn(this, 'indexOf', e)
  },
  join(e) {
    return _t(this).join(e)
  },
  lastIndexOf(...e) {
    return Qn(this, 'lastIndexOf', e)
  },
  map(e, t) {
    return Be(this, 'map', e, t, void 0, arguments)
  },
  pop() {
    return Nt(this, 'pop')
  },
  push(...e) {
    return Nt(this, 'push', e)
  },
  reduce(e, ...t) {
    return or(this, 'reduce', e, t)
  },
  reduceRight(e, ...t) {
    return or(this, 'reduceRight', e, t)
  },
  shift() {
    return Nt(this, 'shift')
  },
  some(e, t) {
    return Be(this, 'some', e, t, void 0, arguments)
  },
  splice(...e) {
    return Nt(this, 'splice', e)
  },
  toReversed() {
    return _t(this).toReversed()
  },
  toSorted(e) {
    return _t(this).toSorted(e)
  },
  toSpliced(...e) {
    return _t(this).toSpliced(...e)
  },
  unshift(...e) {
    return Nt(this, 'unshift', e)
  },
  values() {
    return zn(this, 'values', ye)
  },
}
function zn(e, t, n) {
  const s = Hn(e),
    r = s[t]()
  return (
    s !== e &&
      !Pe(e) &&
      ((r._next = r.next),
      (r.next = () => {
        const i = r._next()
        return i.value && (i.value = n(i.value)), i
      })),
    r
  )
}
const rl = Array.prototype
function Be(e, t, n, s, r, i) {
  const o = Hn(e),
    l = o !== e && !Pe(e),
    c = o[t]
  if (c !== rl[t]) {
    const h = c.apply(e, i)
    return l ? ye(h) : h
  }
  let u = n
  o !== e &&
    (l
      ? (u = function (h, y) {
          return n.call(this, ye(h), y, e)
        })
      : n.length > 2 &&
        (u = function (h, y) {
          return n.call(this, h, y, e)
        }))
  const a = c.call(o, u, s)
  return l && r ? r(a) : a
}
function or(e, t, n, s) {
  const r = Hn(e)
  let i = n
  return (
    r !== e &&
      (Pe(e)
        ? n.length > 3 &&
          (i = function (o, l, c) {
            return n.call(this, o, l, c, e)
          })
        : (i = function (o, l, c) {
            return n.call(this, o, ye(l), c, e)
          })),
    r[t](i, ...s)
  )
}
function Qn(e, t, n) {
  const s = J(e)
  me(s, 'iterate', Kt)
  const r = s[t](...n)
  return (r === -1 || r === !1) && ks(n[0]) ? ((n[0] = J(n[0])), s[t](...n)) : r
}
function Nt(e, t, n = []) {
  rt(), Hs()
  const s = J(e)[t].apply(e, n)
  return Ds(), it(), s
}
const il = Ms('__proto__,__v_isRef,__isVue'),
  di = new Set(
    Object.getOwnPropertyNames(Symbol)
      .filter((e) => e !== 'arguments' && e !== 'caller')
      .map((e) => Symbol[e])
      .filter(He),
  )
function ol(e) {
  He(e) || (e = String(e))
  const t = J(this)
  return me(t, 'has', e), t.hasOwnProperty(e)
}
class hi {
  constructor(t = !1, n = !1) {
    ;(this._isReadonly = t), (this._isShallow = n)
  }
  get(t, n, s) {
    if (n === '__v_skip') return t.__v_skip
    const r = this._isReadonly,
      i = this._isShallow
    if (n === '__v_isReactive') return !r
    if (n === '__v_isReadonly') return r
    if (n === '__v_isShallow') return i
    if (n === '__v_raw')
      return s === (r ? (i ? ml : yi) : i ? mi : gi).get(t) ||
        Object.getPrototypeOf(t) === Object.getPrototypeOf(s)
        ? t
        : void 0
    const o = j(t)
    if (!r) {
      let c
      if (o && (c = sl[n])) return c
      if (n === 'hasOwnProperty') return ol
    }
    const l = Reflect.get(t, n, de(t) ? t : s)
    return (He(n) ? di.has(n) : il(n)) || (r || me(t, 'get', n), i)
      ? l
      : de(l)
        ? o && Ls(n)
          ? l
          : l.value
        : Z(l)
          ? r
            ? $n(l)
            : Dn(l)
          : l
  }
}
class pi extends hi {
  constructor(t = !1) {
    super(!1, t)
  }
  set(t, n, s, r) {
    let i = t[n]
    if (!this._isShallow) {
      const c = yt(i)
      if (
        (!Pe(s) && !yt(s) && ((i = J(i)), (s = J(s))), !j(t) && de(i) && !de(s))
      )
        return c ? !1 : ((i.value = s), !0)
    }
    const o = j(t) && Ls(n) ? Number(n) < t.length : z(t, n),
      l = Reflect.set(t, n, s, de(t) ? t : r)
    return (
      t === J(r) && (o ? et(s, i) && qe(t, 'set', n, s) : qe(t, 'add', n, s)), l
    )
  }
  deleteProperty(t, n) {
    const s = z(t, n)
    t[n]
    const r = Reflect.deleteProperty(t, n)
    return r && s && qe(t, 'delete', n, void 0), r
  }
  has(t, n) {
    const s = Reflect.has(t, n)
    return (!He(n) || !di.has(n)) && me(t, 'has', n), s
  }
  ownKeys(t) {
    return me(t, 'iterate', j(t) ? 'length' : dt), Reflect.ownKeys(t)
  }
}
class ll extends hi {
  constructor(t = !1) {
    super(!0, t)
  }
  set(t, n) {
    return !0
  }
  deleteProperty(t, n) {
    return !0
  }
}
const cl = new pi(),
  al = new ll(),
  fl = new pi(!0)
const vs = (e) => e,
  ln = (e) => Reflect.getPrototypeOf(e)
function ul(e, t, n) {
  return function (...s) {
    const r = this.__v_raw,
      i = J(r),
      o = Et(i),
      l = e === 'entries' || (e === Symbol.iterator && o),
      c = e === 'keys' && o,
      u = r[e](...s),
      a = n ? vs : t ? _s : ye
    return (
      !t && me(i, 'iterate', c ? ys : dt),
      {
        next() {
          const { value: h, done: y } = u.next()
          return y
            ? { value: h, done: y }
            : { value: l ? [a(h[0]), a(h[1])] : a(h), done: y }
        },
        [Symbol.iterator]() {
          return this
        },
      }
    )
  }
}
function cn(e) {
  return function (...t) {
    return e === 'delete' ? !1 : e === 'clear' ? void 0 : this
  }
}
function dl(e, t) {
  const n = {
    get(r) {
      const i = this.__v_raw,
        o = J(i),
        l = J(r)
      e || (et(r, l) && me(o, 'get', r), me(o, 'get', l))
      const { has: c } = ln(o),
        u = t ? vs : e ? _s : ye
      if (c.call(o, r)) return u(i.get(r))
      if (c.call(o, l)) return u(i.get(l))
      i !== o && i.get(r)
    },
    get size() {
      const r = this.__v_raw
      return !e && me(J(r), 'iterate', dt), Reflect.get(r, 'size', r)
    },
    has(r) {
      const i = this.__v_raw,
        o = J(i),
        l = J(r)
      return (
        e || (et(r, l) && me(o, 'has', r), me(o, 'has', l)),
        r === l ? i.has(r) : i.has(r) || i.has(l)
      )
    },
    forEach(r, i) {
      const o = this,
        l = o.__v_raw,
        c = J(l),
        u = t ? vs : e ? _s : ye
      return (
        !e && me(c, 'iterate', dt),
        l.forEach((a, h) => r.call(i, u(a), u(h), o))
      )
    },
  }
  return (
    ae(
      n,
      e
        ? {
            add: cn('add'),
            set: cn('set'),
            delete: cn('delete'),
            clear: cn('clear'),
          }
        : {
            add(r) {
              !t && !Pe(r) && !yt(r) && (r = J(r))
              const i = J(this)
              return (
                ln(i).has.call(i, r) || (i.add(r), qe(i, 'add', r, r)), this
              )
            },
            set(r, i) {
              !t && !Pe(i) && !yt(i) && (i = J(i))
              const o = J(this),
                { has: l, get: c } = ln(o)
              let u = l.call(o, r)
              u || ((r = J(r)), (u = l.call(o, r)))
              const a = c.call(o, r)
              return (
                o.set(r, i),
                u ? et(i, a) && qe(o, 'set', r, i) : qe(o, 'add', r, i),
                this
              )
            },
            delete(r) {
              const i = J(this),
                { has: o, get: l } = ln(i)
              let c = o.call(i, r)
              c || ((r = J(r)), (c = o.call(i, r))), l && l.call(i, r)
              const u = i.delete(r)
              return c && qe(i, 'delete', r, void 0), u
            },
            clear() {
              const r = J(this),
                i = r.size !== 0,
                o = r.clear()
              return i && qe(r, 'clear', void 0, void 0), o
            },
          },
    ),
    ['keys', 'values', 'entries', Symbol.iterator].forEach((r) => {
      n[r] = ul(r, e, t)
    }),
    n
  )
}
function js(e, t) {
  const n = dl(e, t)
  return (s, r, i) =>
    r === '__v_isReactive'
      ? !e
      : r === '__v_isReadonly'
        ? e
        : r === '__v_raw'
          ? s
          : Reflect.get(z(n, r) && r in s ? n : s, r, i)
}
const hl = { get: js(!1, !1) },
  pl = { get: js(!1, !0) },
  gl = { get: js(!0, !1) }
const gi = new WeakMap(),
  mi = new WeakMap(),
  yi = new WeakMap(),
  ml = new WeakMap()
function yl(e) {
  switch (e) {
    case 'Object':
    case 'Array':
      return 1
    case 'Map':
    case 'Set':
    case 'WeakMap':
    case 'WeakSet':
      return 2
    default:
      return 0
  }
}
function vl(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : yl(jo(e))
}
function Dn(e) {
  return yt(e) ? e : Vs(e, !1, cl, hl, gi)
}
function _l(e) {
  return Vs(e, !1, fl, pl, mi)
}
function $n(e) {
  return Vs(e, !0, al, gl, yi)
}
function Vs(e, t, n, s, r) {
  if (!Z(e) || (e.__v_raw && !(t && e.__v_isReactive))) return e
  const i = r.get(e)
  if (i) return i
  const o = vl(e)
  if (o === 0) return e
  const l = new Proxy(e, o === 2 ? s : n)
  return r.set(e, l), l
}
function ht(e) {
  return yt(e) ? ht(e.__v_raw) : !!(e && e.__v_isReactive)
}
function yt(e) {
  return !!(e && e.__v_isReadonly)
}
function Pe(e) {
  return !!(e && e.__v_isShallow)
}
function ks(e) {
  return e ? !!e.__v_raw : !1
}
function J(e) {
  const t = e && e.__v_raw
  return t ? J(t) : e
}
function _n(e) {
  return !z(e, '__v_skip') && Object.isExtensible(e) && Zr(e, '__v_skip', !0), e
}
const ye = (e) => (Z(e) ? Dn(e) : e),
  _s = (e) => (Z(e) ? $n(e) : e)
function de(e) {
  return e ? e.__v_isRef === !0 : !1
}
function ce(e) {
  return _i(e, !1)
}
function vi(e) {
  return _i(e, !0)
}
function _i(e, t) {
  return de(e) ? e : new bl(e, t)
}
class bl {
  constructor(t, n) {
    ;(this.dep = new Fn()),
      (this.__v_isRef = !0),
      (this.__v_isShallow = !1),
      (this._rawValue = n ? t : J(t)),
      (this._value = n ? t : ye(t)),
      (this.__v_isShallow = n)
  }
  get value() {
    return this.dep.track(), this._value
  }
  set value(t) {
    const n = this._rawValue,
      s = this.__v_isShallow || Pe(t) || yt(t)
    ;(t = s ? t : J(t)),
      et(t, n) &&
        ((this._rawValue = t),
        (this._value = s ? t : ye(t)),
        this.dep.trigger())
  }
}
function bi(e) {
  return de(e) ? e.value : e
}
const wl = {
  get: (e, t, n) => (t === '__v_raw' ? e : bi(Reflect.get(e, t, n))),
  set: (e, t, n, s) => {
    const r = e[t]
    return de(r) && !de(n) ? ((r.value = n), !0) : Reflect.set(e, t, n, s)
  },
}
function wi(e) {
  return ht(e) ? e : new Proxy(e, wl)
}
class Sl {
  constructor(t) {
    ;(this.__v_isRef = !0), (this._value = void 0)
    const n = (this.dep = new Fn()),
      { get: s, set: r } = t(n.track.bind(n), n.trigger.bind(n))
    ;(this._get = s), (this._set = r)
  }
  get value() {
    return (this._value = this._get())
  }
  set value(t) {
    this._set(t)
  }
}
function xl(e) {
  return new Sl(e)
}
function df(e) {
  const t = j(e) ? new Array(e.length) : {}
  for (const n in e) t[n] = Si(e, n)
  return t
}
class El {
  constructor(t, n, s) {
    ;(this._object = t),
      (this._key = n),
      (this._defaultValue = s),
      (this.__v_isRef = !0),
      (this._value = void 0)
  }
  get value() {
    const t = this._object[this._key]
    return (this._value = t === void 0 ? this._defaultValue : t)
  }
  set value(t) {
    this._object[this._key] = t
  }
  get dep() {
    return nl(J(this._object), this._key)
  }
}
class Cl {
  constructor(t) {
    ;(this._getter = t),
      (this.__v_isRef = !0),
      (this.__v_isReadonly = !0),
      (this._value = void 0)
  }
  get value() {
    return (this._value = this._getter())
  }
}
function Tl(e, t, n) {
  return de(e)
    ? e
    : K(e)
      ? new Cl(e)
      : Z(e) && arguments.length > 1
        ? Si(e, t, n)
        : ce(e)
}
function Si(e, t, n) {
  const s = e[t]
  return de(s) ? s : new El(e, t, n)
}
class Al {
  constructor(t, n, s) {
    ;(this.fn = t),
      (this.setter = n),
      (this._value = void 0),
      (this.dep = new Fn(this)),
      (this.__v_isRef = !0),
      (this.deps = void 0),
      (this.depsTail = void 0),
      (this.flags = 16),
      (this.globalVersion = Wt - 1),
      (this.next = void 0),
      (this.effect = this),
      (this.__v_isReadonly = !n),
      (this.isSSR = s)
  }
  notify() {
    if (((this.flags |= 16), !(this.flags & 8) && ne !== this))
      return oi(this, !0), !0
  }
  get value() {
    const t = this.dep.track()
    return ai(this), t && (t.version = this.dep.version), this._value
  }
  set value(t) {
    this.setter && this.setter(t)
  }
}
function Rl(e, t, n = !1) {
  let s, r
  return K(e) ? (s = e) : ((s = e.get), (r = e.set)), new Al(s, r, n)
}
const an = {},
  Cn = new WeakMap()
let ft
function Ol(e, t = !1, n = ft) {
  if (n) {
    let s = Cn.get(n)
    s || Cn.set(n, (s = [])), s.push(e)
  }
}
function Ml(e, t, n = ee) {
  const {
      immediate: s,
      deep: r,
      once: i,
      scheduler: o,
      augmentJob: l,
      call: c,
    } = n,
    u = (g) => (r ? g : Pe(g) || r === !1 || r === 0 ? Ge(g, 1) : Ge(g))
  let a,
    h,
    y,
    v,
    A = !1,
    x = !1
  if (
    (de(e)
      ? ((h = () => e.value), (A = Pe(e)))
      : ht(e)
        ? ((h = () => u(e)), (A = !0))
        : j(e)
          ? ((x = !0),
            (A = e.some((g) => ht(g) || Pe(g))),
            (h = () =>
              e.map((g) => {
                if (de(g)) return g.value
                if (ht(g)) return u(g)
                if (K(g)) return c ? c(g, 2) : g()
              })))
          : K(e)
            ? t
              ? (h = c ? () => c(e, 2) : e)
              : (h = () => {
                  if (y) {
                    rt()
                    try {
                      y()
                    } finally {
                      it()
                    }
                  }
                  const g = ft
                  ft = a
                  try {
                    return c ? c(e, 3, [v]) : e(v)
                  } finally {
                    ft = g
                  }
                })
            : (h = Ue),
    t && r)
  ) {
    const g = h,
      O = r === !0 ? 1 / 0 : r
    h = () => Ge(g(), O)
  }
  const W = si(),
    N = () => {
      a.stop(), W && W.active && Is(W.effects, a)
    }
  if (i && t) {
    const g = t
    t = (...O) => {
      g(...O), N()
    }
  }
  let $ = x ? new Array(e.length).fill(an) : an
  const p = (g) => {
    if (!(!(a.flags & 1) || (!a.dirty && !g)))
      if (t) {
        const O = a.run()
        if (r || A || (x ? O.some((k, U) => et(k, $[U])) : et(O, $))) {
          y && y()
          const k = ft
          ft = a
          try {
            const U = [O, $ === an ? void 0 : x && $[0] === an ? [] : $, v]
            c ? c(t, 3, U) : t(...U), ($ = O)
          } finally {
            ft = k
          }
        }
      } else a.run()
  }
  return (
    l && l(p),
    (a = new ri(h)),
    (a.scheduler = o ? () => o(p, !1) : p),
    (v = (g) => Ol(g, !1, a)),
    (y = a.onStop =
      () => {
        const g = Cn.get(a)
        if (g) {
          if (c) c(g, 4)
          else for (const O of g) O()
          Cn.delete(a)
        }
      }),
    t ? (s ? p(!0) : ($ = a.run())) : o ? o(p.bind(null, !0), !0) : a.run(),
    (N.pause = a.pause.bind(a)),
    (N.resume = a.resume.bind(a)),
    (N.stop = N),
    N
  )
}
function Ge(e, t = 1 / 0, n) {
  if (t <= 0 || !Z(e) || e.__v_skip || ((n = n || new Set()), n.has(e)))
    return e
  if ((n.add(e), t--, de(e))) Ge(e.value, t, n)
  else if (j(e)) for (let s = 0; s < e.length; s++) Ge(e[s], t, n)
  else if (Xr(e) || Et(e))
    e.forEach((s) => {
      Ge(s, t, n)
    })
  else if (Qr(e)) {
    for (const s in e) Ge(e[s], t, n)
    for (const s of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, s) && Ge(e[s], t, n)
  }
  return e
}
/**
 * @vue/runtime-core v3.5.13
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ function en(e, t, n, s) {
  try {
    return s ? e(...s) : e()
  } catch (r) {
    tn(r, t, n)
  }
}
function De(e, t, n, s) {
  if (K(e)) {
    const r = en(e, t, n, s)
    return (
      r &&
        Jr(r) &&
        r.catch((i) => {
          tn(i, t, n)
        }),
      r
    )
  }
  if (j(e)) {
    const r = []
    for (let i = 0; i < e.length; i++) r.push(De(e[i], t, n, s))
    return r
  }
}
function tn(e, t, n, s = !0) {
  const r = t ? t.vnode : null,
    { errorHandler: i, throwUnhandledErrorInProduction: o } =
      (t && t.appContext.config) || ee
  if (t) {
    let l = t.parent
    const c = t.proxy,
      u = `https://vuejs.org/error-reference/#runtime-${n}`
    for (; l; ) {
      const a = l.ec
      if (a) {
        for (let h = 0; h < a.length; h++) if (a[h](e, c, u) === !1) return
      }
      l = l.parent
    }
    if (i) {
      rt(), en(i, null, 10, [e, c, u]), it()
      return
    }
  }
  Pl(e, n, r, s, o)
}
function Pl(e, t, n, s = !0, r = !1) {
  if (r) throw e
  console.error(e)
}
const we = []
let Ve = -1
const Tt = []
let ze = null,
  wt = 0
const xi = Promise.resolve()
let Tn = null
function jn(e) {
  const t = Tn || xi
  return e ? t.then(this ? e.bind(this) : e) : t
}
function Il(e) {
  let t = Ve + 1,
    n = we.length
  for (; t < n; ) {
    const s = (t + n) >>> 1,
      r = we[s],
      i = qt(r)
    i < e || (i === e && r.flags & 2) ? (t = s + 1) : (n = s)
  }
  return t
}
function Us(e) {
  if (!(e.flags & 1)) {
    const t = qt(e),
      n = we[we.length - 1]
    !n || (!(e.flags & 2) && t >= qt(n)) ? we.push(e) : we.splice(Il(t), 0, e),
      (e.flags |= 1),
      Ei()
  }
}
function Ei() {
  Tn || (Tn = xi.then(Ci))
}
function Ll(e) {
  j(e)
    ? Tt.push(...e)
    : ze && e.id === -1
      ? ze.splice(wt + 1, 0, e)
      : e.flags & 1 || (Tt.push(e), (e.flags |= 1)),
    Ei()
}
function lr(e, t, n = Ve + 1) {
  for (; n < we.length; n++) {
    const s = we[n]
    if (s && s.flags & 2) {
      if (e && s.id !== e.uid) continue
      we.splice(n, 1),
        n--,
        s.flags & 4 && (s.flags &= -2),
        s(),
        s.flags & 4 || (s.flags &= -2)
    }
  }
}
function An(e) {
  if (Tt.length) {
    const t = [...new Set(Tt)].sort((n, s) => qt(n) - qt(s))
    if (((Tt.length = 0), ze)) {
      ze.push(...t)
      return
    }
    for (ze = t, wt = 0; wt < ze.length; wt++) {
      const n = ze[wt]
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), (n.flags &= -2)
    }
    ;(ze = null), (wt = 0)
  }
}
const qt = (e) => (e.id == null ? (e.flags & 2 ? -1 : 1 / 0) : e.id)
function Ci(e) {
  try {
    for (Ve = 0; Ve < we.length; Ve++) {
      const t = we[Ve]
      t &&
        !(t.flags & 8) &&
        (t.flags & 4 && (t.flags &= -2),
        en(t, t.i, t.i ? 15 : 14),
        t.flags & 4 || (t.flags &= -2))
    }
  } finally {
    for (; Ve < we.length; Ve++) {
      const t = we[Ve]
      t && (t.flags &= -2)
    }
    ;(Ve = -1),
      (we.length = 0),
      An(),
      (Tn = null),
      (we.length || Tt.length) && Ci()
  }
}
let ue = null,
  Ti = null
function Rn(e) {
  const t = ue
  return (ue = e), (Ti = (e && e.type.__scopeId) || null), t
}
function Nl(e, t = ue, n) {
  if (!t || e._n) return e
  const s = (...r) => {
    s._d && _r(-1)
    const i = Rn(t)
    let o
    try {
      o = e(...r)
    } finally {
      Rn(i), s._d && _r(1)
    }
    return o
  }
  return (s._n = !0), (s._c = !0), (s._d = !0), s
}
function hf(e, t) {
  if (ue === null) return e
  const n = Kn(ue),
    s = e.dirs || (e.dirs = [])
  for (let r = 0; r < t.length; r++) {
    let [i, o, l, c = ee] = t[r]
    i &&
      (K(i) && (i = { mounted: i, updated: i }),
      i.deep && Ge(o),
      s.push({
        dir: i,
        instance: n,
        value: o,
        oldValue: void 0,
        arg: l,
        modifiers: c,
      }))
  }
  return e
}
function ke(e, t, n, s) {
  const r = e.dirs,
    i = t && t.dirs
  for (let o = 0; o < r.length; o++) {
    const l = r[o]
    i && (l.oldValue = i[o].value)
    let c = l.dir[s]
    c && (rt(), De(c, n, 8, [e.el, l, e, t]), it())
  }
}
const Fl = Symbol('_vte'),
  Ai = (e) => e.__isTeleport,
  Qe = Symbol('_leaveCb'),
  fn = Symbol('_enterCb')
function Hl() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: new Map(),
  }
  return (
    Pt(() => {
      e.isMounted = !0
    }),
    Ni(() => {
      e.isUnmounting = !0
    }),
    e
  )
}
const Re = [Function, Array],
  Ri = {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    onBeforeEnter: Re,
    onEnter: Re,
    onAfterEnter: Re,
    onEnterCancelled: Re,
    onBeforeLeave: Re,
    onLeave: Re,
    onAfterLeave: Re,
    onLeaveCancelled: Re,
    onBeforeAppear: Re,
    onAppear: Re,
    onAfterAppear: Re,
    onAppearCancelled: Re,
  },
  Oi = (e) => {
    const t = e.subTree
    return t.component ? Oi(t.component) : t
  },
  Dl = {
    name: 'BaseTransition',
    props: Ri,
    setup(e, { slots: t }) {
      const n = Wn(),
        s = Hl()
      return () => {
        const r = t.default && Ii(t.default(), !0)
        if (!r || !r.length) return
        const i = Mi(r),
          o = J(e),
          { mode: l } = o
        if (s.isLeaving) return Zn(i)
        const c = cr(i)
        if (!c) return Zn(i)
        let u = bs(c, o, s, n, (h) => (u = h))
        c.type !== ve && Gt(c, u)
        let a = n.subTree && cr(n.subTree)
        if (a && a.type !== ve && !ut(c, a) && Oi(n).type !== ve) {
          let h = bs(a, o, s, n)
          if ((Gt(a, h), l === 'out-in' && c.type !== ve))
            return (
              (s.isLeaving = !0),
              (h.afterLeave = () => {
                ;(s.isLeaving = !1),
                  n.job.flags & 8 || n.update(),
                  delete h.afterLeave,
                  (a = void 0)
              }),
              Zn(i)
            )
          l === 'in-out' && c.type !== ve
            ? (h.delayLeave = (y, v, A) => {
                const x = Pi(s, a)
                ;(x[String(a.key)] = a),
                  (y[Qe] = () => {
                    v(), (y[Qe] = void 0), delete u.delayedLeave, (a = void 0)
                  }),
                  (u.delayedLeave = () => {
                    A(), delete u.delayedLeave, (a = void 0)
                  })
              })
            : (a = void 0)
        } else a && (a = void 0)
        return i
      }
    },
  }
function Mi(e) {
  let t = e[0]
  if (e.length > 1) {
    for (const n of e)
      if (n.type !== ve) {
        t = n
        break
      }
  }
  return t
}
const $l = Dl
function Pi(e, t) {
  const { leavingVNodes: n } = e
  let s = n.get(t.type)
  return s || ((s = Object.create(null)), n.set(t.type, s)), s
}
function bs(e, t, n, s, r) {
  const {
      appear: i,
      mode: o,
      persisted: l = !1,
      onBeforeEnter: c,
      onEnter: u,
      onAfterEnter: a,
      onEnterCancelled: h,
      onBeforeLeave: y,
      onLeave: v,
      onAfterLeave: A,
      onLeaveCancelled: x,
      onBeforeAppear: W,
      onAppear: N,
      onAfterAppear: $,
      onAppearCancelled: p,
    } = t,
    g = String(e.key),
    O = Pi(n, e),
    k = (I, b) => {
      I && De(I, s, 9, b)
    },
    U = (I, b) => {
      const L = b[1]
      k(I, b),
        j(I) ? I.every((w) => w.length <= 1) && L() : I.length <= 1 && L()
    },
    G = {
      mode: o,
      persisted: l,
      beforeEnter(I) {
        let b = c
        if (!n.isMounted)
          if (i) b = W || c
          else return
        I[Qe] && I[Qe](!0)
        const L = O[g]
        L && ut(e, L) && L.el[Qe] && L.el[Qe](), k(b, [I])
      },
      enter(I) {
        let b = u,
          L = a,
          w = h
        if (!n.isMounted)
          if (i) (b = N || u), (L = $ || a), (w = p || h)
          else return
        let B = !1
        const se = (I[fn] = (ie) => {
          B ||
            ((B = !0),
            ie ? k(w, [I]) : k(L, [I]),
            G.delayedLeave && G.delayedLeave(),
            (I[fn] = void 0))
        })
        b ? U(b, [I, se]) : se()
      },
      leave(I, b) {
        const L = String(e.key)
        if ((I[fn] && I[fn](!0), n.isUnmounting)) return b()
        k(y, [I])
        let w = !1
        const B = (I[Qe] = (se) => {
          w ||
            ((w = !0),
            b(),
            se ? k(x, [I]) : k(A, [I]),
            (I[Qe] = void 0),
            O[L] === e && delete O[L])
        })
        ;(O[L] = e), v ? U(v, [I, B]) : B()
      },
      clone(I) {
        const b = bs(I, t, n, s, r)
        return r && r(b), b
      },
    }
  return G
}
function Zn(e) {
  if (nn(e)) return (e = nt(e)), (e.children = null), e
}
function cr(e) {
  if (!nn(e)) return Ai(e.type) && e.children ? Mi(e.children) : e
  const { shapeFlag: t, children: n } = e
  if (n) {
    if (t & 16) return n[0]
    if (t & 32 && K(n.default)) return n.default()
  }
}
function Gt(e, t) {
  e.shapeFlag & 6 && e.component
    ? ((e.transition = t), Gt(e.component.subTree, t))
    : e.shapeFlag & 128
      ? ((e.ssContent.transition = t.clone(e.ssContent)),
        (e.ssFallback.transition = t.clone(e.ssFallback)))
      : (e.transition = t)
}
function Ii(e, t = !1, n) {
  let s = [],
    r = 0
  for (let i = 0; i < e.length; i++) {
    let o = e[i]
    const l = n == null ? o.key : String(n) + String(o.key != null ? o.key : i)
    o.type === Se
      ? (o.patchFlag & 128 && r++, (s = s.concat(Ii(o.children, t, l))))
      : (t || o.type !== ve) && s.push(l != null ? nt(o, { key: l }) : o)
  }
  if (r > 1) for (let i = 0; i < s.length; i++) s[i].patchFlag = -2
  return s
}
/*! #__NO_SIDE_EFFECTS__ */ function Bs(e, t) {
  return K(e) ? ae({ name: e.name }, t, { setup: e }) : e
}
function Ws(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + '-', 0, 0]
}
function Yt(e, t, n, s, r = !1) {
  if (j(e)) {
    e.forEach((A, x) => Yt(A, t && (j(t) ? t[x] : t), n, s, r))
    return
  }
  if (pt(s) && !r) {
    s.shapeFlag & 512 &&
      s.type.__asyncResolved &&
      s.component.subTree.component &&
      Yt(e, t, n, s.component.subTree)
    return
  }
  const i = s.shapeFlag & 4 ? Kn(s.component) : s.el,
    o = r ? null : i,
    { i: l, r: c } = e,
    u = t && t.r,
    a = l.refs === ee ? (l.refs = {}) : l.refs,
    h = l.setupState,
    y = J(h),
    v = h === ee ? () => !1 : (A) => z(y, A)
  if (
    (u != null &&
      u !== c &&
      (re(u)
        ? ((a[u] = null), v(u) && (h[u] = null))
        : de(u) && (u.value = null)),
    K(c))
  )
    en(c, l, 12, [o, a])
  else {
    const A = re(c),
      x = de(c)
    if (A || x) {
      const W = () => {
        if (e.f) {
          const N = A ? (v(c) ? h[c] : a[c]) : c.value
          r
            ? j(N) && Is(N, i)
            : j(N)
              ? N.includes(i) || N.push(i)
              : A
                ? ((a[c] = [i]), v(c) && (h[c] = a[c]))
                : ((c.value = [i]), e.k && (a[e.k] = c.value))
        } else
          A
            ? ((a[c] = o), v(c) && (h[c] = o))
            : x && ((c.value = o), e.k && (a[e.k] = o))
      }
      o ? ((W.id = -1), Te(W, n)) : W()
    }
  }
}
let ar = !1
const bt = () => {
    ar ||
      (console.error('Hydration completed but contains mismatches.'), (ar = !0))
  },
  jl = (e) => e.namespaceURI.includes('svg') && e.tagName !== 'foreignObject',
  Vl = (e) => e.namespaceURI.includes('MathML'),
  un = (e) => {
    if (e.nodeType === 1) {
      if (jl(e)) return 'svg'
      if (Vl(e)) return 'mathml'
    }
  },
  St = (e) => e.nodeType === 8
function kl(e) {
  const {
      mt: t,
      p: n,
      o: {
        patchProp: s,
        createText: r,
        nextSibling: i,
        parentNode: o,
        remove: l,
        insert: c,
        createComment: u,
      },
    } = e,
    a = (p, g) => {
      if (!g.hasChildNodes()) {
        n(null, p, g), An(), (g._vnode = p)
        return
      }
      h(g.firstChild, p, null, null, null), An(), (g._vnode = p)
    },
    h = (p, g, O, k, U, G = !1) => {
      G = G || !!g.dynamicChildren
      const I = St(p) && p.data === '[',
        b = () => x(p, g, O, k, U, I),
        { type: L, ref: w, shapeFlag: B, patchFlag: se } = g
      let ie = p.nodeType
      ;(g.el = p), se === -2 && ((G = !1), (g.dynamicChildren = null))
      let D = null
      switch (L) {
        case gt:
          ie !== 3
            ? g.children === ''
              ? (c((g.el = r('')), o(p), p), (D = p))
              : (D = b())
            : (p.data !== g.children && (bt(), (p.data = g.children)),
              (D = i(p)))
          break
        case ve:
          $(p)
            ? ((D = i(p)), N((g.el = p.content.firstChild), p, O))
            : ie !== 8 || I
              ? (D = b())
              : (D = i(p))
          break
        case kt:
          if ((I && ((p = i(p)), (ie = p.nodeType)), ie === 1 || ie === 3)) {
            D = p
            const Y = !g.children.length
            for (let H = 0; H < g.staticCount; H++)
              Y && (g.children += D.nodeType === 1 ? D.outerHTML : D.data),
                H === g.staticCount - 1 && (g.anchor = D),
                (D = i(D))
            return I ? i(D) : D
          } else b()
          break
        case Se:
          I ? (D = A(p, g, O, k, U, G)) : (D = b())
          break
        default:
          if (B & 1)
            (ie !== 1 || g.type.toLowerCase() !== p.tagName.toLowerCase()) &&
            !$(p)
              ? (D = b())
              : (D = y(p, g, O, k, U, G))
          else if (B & 6) {
            g.slotScopeIds = U
            const Y = o(p)
            if (
              (I
                ? (D = W(p))
                : St(p) && p.data === 'teleport start'
                  ? (D = W(p, p.data, 'teleport end'))
                  : (D = i(p)),
              t(g, Y, null, O, k, un(Y), G),
              pt(g) && !g.type.__asyncResolved)
            ) {
              let H
              I
                ? ((H = le(Se)),
                  (H.anchor = D ? D.previousSibling : Y.lastChild))
                : (H = p.nodeType === 3 ? lo('') : le('div')),
                (H.el = p),
                (g.component.subTree = H)
            }
          } else
            B & 64
              ? ie !== 8
                ? (D = b())
                : (D = g.type.hydrate(p, g, O, k, U, G, e, v))
              : B & 128 &&
                (D = g.type.hydrate(p, g, O, k, un(o(p)), U, G, e, h))
      }
      return w != null && Yt(w, null, k, g), D
    },
    y = (p, g, O, k, U, G) => {
      G = G || !!g.dynamicChildren
      const {
          type: I,
          props: b,
          patchFlag: L,
          shapeFlag: w,
          dirs: B,
          transition: se,
        } = g,
        ie = I === 'input' || I === 'option'
      if (ie || L !== -1) {
        B && ke(g, null, O, 'created')
        let D = !1
        if ($(p)) {
          D = Xi(null, se) && O && O.vnode.props && O.vnode.props.appear
          const H = p.content.firstChild
          D && se.beforeEnter(H), N(H, p, O), (g.el = p = H)
        }
        if (w & 16 && !(b && (b.innerHTML || b.textContent))) {
          let H = v(p.firstChild, g, p, O, k, U, G)
          for (; H; ) {
            dn(p, 1) || bt()
            const he = H
            ;(H = H.nextSibling), l(he)
          }
        } else if (w & 8) {
          let H = g.children
          H[0] ===
            `
` &&
            (p.tagName === 'PRE' || p.tagName === 'TEXTAREA') &&
            (H = H.slice(1)),
            p.textContent !== H &&
              (dn(p, 0) || bt(), (p.textContent = g.children))
        }
        if (b) {
          if (ie || !G || L & 48) {
            const H = p.tagName.includes('-')
            for (const he in b)
              ((ie && (he.endsWith('value') || he === 'indeterminate')) ||
                (Qt(he) && !Ct(he)) ||
                he[0] === '.' ||
                H) &&
                s(p, he, null, b[he], void 0, O)
          } else if (b.onClick) s(p, 'onClick', null, b.onClick, void 0, O)
          else if (L & 4 && ht(b.style)) for (const H in b.style) b.style[H]
        }
        let Y
        ;(Y = b && b.onVnodeBeforeMount) && Oe(Y, O, g),
          B && ke(g, null, O, 'beforeMount'),
          ((Y = b && b.onVnodeMounted) || B || D) &&
            so(() => {
              Y && Oe(Y, O, g), D && se.enter(p), B && ke(g, null, O, 'mounted')
            }, k)
      }
      return p.nextSibling
    },
    v = (p, g, O, k, U, G, I) => {
      I = I || !!g.dynamicChildren
      const b = g.children,
        L = b.length
      for (let w = 0; w < L; w++) {
        const B = I ? b[w] : (b[w] = Me(b[w])),
          se = B.type === gt
        p
          ? (se &&
              !I &&
              w + 1 < L &&
              Me(b[w + 1]).type === gt &&
              (c(r(p.data.slice(B.children.length)), O, i(p)),
              (p.data = B.children)),
            (p = h(p, B, k, U, G, I)))
          : se && !B.children
            ? c((B.el = r('')), O)
            : (dn(O, 1) || bt(), n(null, B, O, null, k, U, un(O), G))
      }
      return p
    },
    A = (p, g, O, k, U, G) => {
      const { slotScopeIds: I } = g
      I && (U = U ? U.concat(I) : I)
      const b = o(p),
        L = v(i(p), g, b, O, k, U, G)
      return L && St(L) && L.data === ']'
        ? i((g.anchor = L))
        : (bt(), c((g.anchor = u(']')), b, L), L)
    },
    x = (p, g, O, k, U, G) => {
      if ((dn(p.parentElement, 1) || bt(), (g.el = null), G)) {
        const L = W(p)
        for (;;) {
          const w = i(p)
          if (w && w !== L) l(w)
          else break
        }
      }
      const I = i(p),
        b = o(p)
      return (
        l(p),
        n(null, g, b, I, O, k, un(b), U),
        O && ((O.vnode.el = g.el), to(O, g.el)),
        I
      )
    },
    W = (p, g = '[', O = ']') => {
      let k = 0
      for (; p; )
        if (((p = i(p)), p && St(p) && (p.data === g && k++, p.data === O))) {
          if (k === 0) return i(p)
          k--
        }
      return p
    },
    N = (p, g, O) => {
      const k = g.parentNode
      k && k.replaceChild(p, g)
      let U = O
      for (; U; )
        U.vnode.el === g && (U.vnode.el = U.subTree.el = p), (U = U.parent)
    },
    $ = (p) => p.nodeType === 1 && p.tagName === 'TEMPLATE'
  return [a, h]
}
const fr = 'data-allow-mismatch',
  Ul = { 0: 'text', 1: 'children', 2: 'class', 3: 'style', 4: 'attribute' }
function dn(e, t) {
  if (t === 0 || t === 1) for (; e && !e.hasAttribute(fr); ) e = e.parentElement
  const n = e && e.getAttribute(fr)
  if (n == null) return !1
  if (n === '') return !0
  {
    const s = n.split(',')
    return t === 0 && s.includes('children') ? !0 : n.split(',').includes(Ul[t])
  }
}
Nn().requestIdleCallback
Nn().cancelIdleCallback
function Bl(e, t) {
  if (St(e) && e.data === '[') {
    let n = 1,
      s = e.nextSibling
    for (; s; ) {
      if (s.nodeType === 1) {
        if (t(s) === !1) break
      } else if (St(s))
        if (s.data === ']') {
          if (--n === 0) break
        } else s.data === '[' && n++
      s = s.nextSibling
    }
  } else t(e)
}
const pt = (e) => !!e.type.__asyncLoader
/*! #__NO_SIDE_EFFECTS__ */ function pf(e) {
  K(e) && (e = { loader: e })
  const {
    loader: t,
    loadingComponent: n,
    errorComponent: s,
    delay: r = 200,
    hydrate: i,
    timeout: o,
    suspensible: l = !0,
    onError: c,
  } = e
  let u = null,
    a,
    h = 0
  const y = () => (h++, (u = null), v()),
    v = () => {
      let A
      return (
        u ||
        (A = u =
          t()
            .catch((x) => {
              if (((x = x instanceof Error ? x : new Error(String(x))), c))
                return new Promise((W, N) => {
                  c(
                    x,
                    () => W(y()),
                    () => N(x),
                    h + 1,
                  )
                })
              throw x
            })
            .then((x) =>
              A !== u && u
                ? u
                : (x &&
                    (x.__esModule || x[Symbol.toStringTag] === 'Module') &&
                    (x = x.default),
                  (a = x),
                  x),
            ))
      )
    }
  return Bs({
    name: 'AsyncComponentWrapper',
    __asyncLoader: v,
    __asyncHydrate(A, x, W) {
      const N = i
        ? () => {
            const $ = i(W, (p) => Bl(A, p))
            $ && (x.bum || (x.bum = [])).push($)
          }
        : W
      a ? N() : v().then(() => !x.isUnmounted && N())
    },
    get __asyncResolved() {
      return a
    },
    setup() {
      const A = fe
      if ((Ws(A), a)) return () => es(a, A)
      const x = (p) => {
        ;(u = null), tn(p, A, 13, !s)
      }
      if ((l && A.suspense) || Ot)
        return v()
          .then((p) => () => es(p, A))
          .catch((p) => (x(p), () => (s ? le(s, { error: p }) : null)))
      const W = ce(!1),
        N = ce(),
        $ = ce(!!r)
      return (
        r &&
          setTimeout(() => {
            $.value = !1
          }, r),
        o != null &&
          setTimeout(() => {
            if (!W.value && !N.value) {
              const p = new Error(`Async component timed out after ${o}ms.`)
              x(p), (N.value = p)
            }
          }, o),
        v()
          .then(() => {
            ;(W.value = !0), A.parent && nn(A.parent.vnode) && A.parent.update()
          })
          .catch((p) => {
            x(p), (N.value = p)
          }),
        () => {
          if (W.value && a) return es(a, A)
          if (N.value && s) return le(s, { error: N.value })
          if (n && !$.value) return le(n)
        }
      )
    },
  })
}
function es(e, t) {
  const { ref: n, props: s, children: r, ce: i } = t.vnode,
    o = le(e, s, r)
  return (o.ref = n), (o.ce = i), delete t.vnode.ce, o
}
const nn = (e) => e.type.__isKeepAlive
function Wl(e, t) {
  Li(e, 'a', t)
}
function Kl(e, t) {
  Li(e, 'da', t)
}
function Li(e, t, n = fe) {
  const s =
    e.__wdc ||
    (e.__wdc = () => {
      let r = n
      for (; r; ) {
        if (r.isDeactivated) return
        r = r.parent
      }
      return e()
    })
  if ((Vn(t, s, n), n)) {
    let r = n.parent
    for (; r && r.parent; ) nn(r.parent.vnode) && ql(s, t, n, r), (r = r.parent)
  }
}
function ql(e, t, n, s) {
  const r = Vn(t, e, s, !0)
  kn(() => {
    Is(s[t], r)
  }, n)
}
function Vn(e, t, n = fe, s = !1) {
  if (n) {
    const r = n[e] || (n[e] = []),
      i =
        t.__weh ||
        (t.__weh = (...o) => {
          rt()
          const l = sn(n),
            c = De(t, n, e, o)
          return l(), it(), c
        })
    return s ? r.unshift(i) : r.push(i), i
  }
}
const Xe =
    (e) =>
    (t, n = fe) => {
      ;(!Ot || e === 'sp') && Vn(e, (...s) => t(...s), n)
    },
  Gl = Xe('bm'),
  Pt = Xe('m'),
  Yl = Xe('bu'),
  Xl = Xe('u'),
  Ni = Xe('bum'),
  kn = Xe('um'),
  Jl = Xe('sp'),
  zl = Xe('rtg'),
  Ql = Xe('rtc')
function Zl(e, t = fe) {
  Vn('ec', e, t)
}
const Ks = 'components',
  ec = 'directives'
function gf(e, t) {
  return qs(Ks, e, !0, t) || e
}
const Fi = Symbol.for('v-ndc')
function mf(e) {
  return re(e) ? qs(Ks, e, !1) || e : e || Fi
}
function yf(e) {
  return qs(ec, e)
}
function qs(e, t, n = !0, s = !1) {
  const r = ue || fe
  if (r) {
    const i = r.type
    if (e === Ks) {
      const l = $c(i, !1)
      if (l && (l === t || l === Ie(t) || l === Ln(Ie(t)))) return i
    }
    const o = ur(r[e] || i[e], t) || ur(r.appContext[e], t)
    return !o && s ? i : o
  }
}
function ur(e, t) {
  return e && (e[t] || e[Ie(t)] || e[Ln(Ie(t))])
}
function vf(e, t, n, s) {
  let r
  const i = n,
    o = j(e)
  if (o || re(e)) {
    const l = o && ht(e)
    let c = !1
    l && ((c = !Pe(e)), (e = Hn(e))), (r = new Array(e.length))
    for (let u = 0, a = e.length; u < a; u++)
      r[u] = t(c ? ye(e[u]) : e[u], u, void 0, i)
  } else if (typeof e == 'number') {
    r = new Array(e)
    for (let l = 0; l < e; l++) r[l] = t(l + 1, l, void 0, i)
  } else if (Z(e))
    if (e[Symbol.iterator]) r = Array.from(e, (l, c) => t(l, c, void 0, i))
    else {
      const l = Object.keys(e)
      r = new Array(l.length)
      for (let c = 0, u = l.length; c < u; c++) {
        const a = l[c]
        r[c] = t(e[a], a, c, i)
      }
    }
  else r = []
  return r
}
function _f(e, t, n = {}, s, r) {
  if (ue.ce || (ue.parent && pt(ue.parent) && ue.parent.ce))
    return (
      t !== 'default' && (n.name = t),
      Cs(),
      Ts(Se, null, [le('slot', n, s && s())], 64)
    )
  let i = e[t]
  i && i._c && (i._d = !1), Cs()
  const o = i && Hi(i(n)),
    l = n.key || (o && o.key),
    c = Ts(
      Se,
      { key: (l && !He(l) ? l : `_${t}`) + (!o && s ? '_fb' : '') },
      o || (s ? s() : []),
      o && e._ === 1 ? 64 : -2,
    )
  return (
    !r && c.scopeId && (c.slotScopeIds = [c.scopeId + '-s']),
    i && i._c && (i._d = !0),
    c
  )
}
function Hi(e) {
  return e.some((t) =>
    Jt(t) ? !(t.type === ve || (t.type === Se && !Hi(t.children))) : !0,
  )
    ? e
    : null
}
function bf(e, t) {
  const n = {}
  for (const s in e) n[t && /[A-Z]/.test(s) ? `on:${s}` : yn(s)] = e[s]
  return n
}
const ws = (e) => (e ? (co(e) ? Kn(e) : ws(e.parent)) : null),
  Vt = ae(Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => ws(e.parent),
    $root: (e) => ws(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Gs(e),
    $forceUpdate: (e) =>
      e.f ||
      (e.f = () => {
        Us(e.update)
      }),
    $nextTick: (e) => e.n || (e.n = jn.bind(e.proxy)),
    $watch: (e) => Sc.bind(e),
  }),
  ts = (e, t) => e !== ee && !e.__isScriptSetup && z(e, t),
  tc = {
    get({ _: e }, t) {
      if (t === '__v_skip') return !0
      const {
        ctx: n,
        setupState: s,
        data: r,
        props: i,
        accessCache: o,
        type: l,
        appContext: c,
      } = e
      let u
      if (t[0] !== '$') {
        const v = o[t]
        if (v !== void 0)
          switch (v) {
            case 1:
              return s[t]
            case 2:
              return r[t]
            case 4:
              return n[t]
            case 3:
              return i[t]
          }
        else {
          if (ts(s, t)) return (o[t] = 1), s[t]
          if (r !== ee && z(r, t)) return (o[t] = 2), r[t]
          if ((u = e.propsOptions[0]) && z(u, t)) return (o[t] = 3), i[t]
          if (n !== ee && z(n, t)) return (o[t] = 4), n[t]
          Ss && (o[t] = 0)
        }
      }
      const a = Vt[t]
      let h, y
      if (a) return t === '$attrs' && me(e.attrs, 'get', ''), a(e)
      if ((h = l.__cssModules) && (h = h[t])) return h
      if (n !== ee && z(n, t)) return (o[t] = 4), n[t]
      if (((y = c.config.globalProperties), z(y, t))) return y[t]
    },
    set({ _: e }, t, n) {
      const { data: s, setupState: r, ctx: i } = e
      return ts(r, t)
        ? ((r[t] = n), !0)
        : s !== ee && z(s, t)
          ? ((s[t] = n), !0)
          : z(e.props, t) || (t[0] === '$' && t.slice(1) in e)
            ? !1
            : ((i[t] = n), !0)
    },
    has(
      {
        _: {
          data: e,
          setupState: t,
          accessCache: n,
          ctx: s,
          appContext: r,
          propsOptions: i,
        },
      },
      o,
    ) {
      let l
      return (
        !!n[o] ||
        (e !== ee && z(e, o)) ||
        ts(t, o) ||
        ((l = i[0]) && z(l, o)) ||
        z(s, o) ||
        z(Vt, o) ||
        z(r.config.globalProperties, o)
      )
    },
    defineProperty(e, t, n) {
      return (
        n.get != null
          ? (e._.accessCache[t] = 0)
          : z(n, 'value') && this.set(e, t, n.value, null),
        Reflect.defineProperty(e, t, n)
      )
    },
  }
function wf() {
  return nc().slots
}
function nc() {
  const e = Wn()
  return e.setupContext || (e.setupContext = fo(e))
}
function dr(e) {
  return j(e) ? e.reduce((t, n) => ((t[n] = null), t), {}) : e
}
let Ss = !0
function sc(e) {
  const t = Gs(e),
    n = e.proxy,
    s = e.ctx
  ;(Ss = !1), t.beforeCreate && hr(t.beforeCreate, e, 'bc')
  const {
    data: r,
    computed: i,
    methods: o,
    watch: l,
    provide: c,
    inject: u,
    created: a,
    beforeMount: h,
    mounted: y,
    beforeUpdate: v,
    updated: A,
    activated: x,
    deactivated: W,
    beforeDestroy: N,
    beforeUnmount: $,
    destroyed: p,
    unmounted: g,
    render: O,
    renderTracked: k,
    renderTriggered: U,
    errorCaptured: G,
    serverPrefetch: I,
    expose: b,
    inheritAttrs: L,
    components: w,
    directives: B,
    filters: se,
  } = t
  if ((u && rc(u, s, null), o))
    for (const Y in o) {
      const H = o[Y]
      K(H) && (s[Y] = H.bind(n))
    }
  if (r) {
    const Y = r.call(n, n)
    Z(Y) && (e.data = Dn(Y))
  }
  if (((Ss = !0), i))
    for (const Y in i) {
      const H = i[Y],
        he = K(H) ? H.bind(n, n) : K(H.get) ? H.get.bind(n, n) : Ue,
        rn = !K(H) && K(H.set) ? H.set.bind(n) : Ue,
        ot = oe({ get: he, set: rn })
      Object.defineProperty(s, Y, {
        enumerable: !0,
        configurable: !0,
        get: () => ot.value,
        set: ($e) => (ot.value = $e),
      })
    }
  if (l) for (const Y in l) Di(l[Y], s, n, Y)
  if (c) {
    const Y = K(c) ? c.call(n) : c
    Reflect.ownKeys(Y).forEach((H) => {
      fc(H, Y[H])
    })
  }
  a && hr(a, e, 'c')
  function D(Y, H) {
    j(H) ? H.forEach((he) => Y(he.bind(n))) : H && Y(H.bind(n))
  }
  if (
    (D(Gl, h),
    D(Pt, y),
    D(Yl, v),
    D(Xl, A),
    D(Wl, x),
    D(Kl, W),
    D(Zl, G),
    D(Ql, k),
    D(zl, U),
    D(Ni, $),
    D(kn, g),
    D(Jl, I),
    j(b))
  )
    if (b.length) {
      const Y = e.exposed || (e.exposed = {})
      b.forEach((H) => {
        Object.defineProperty(Y, H, {
          get: () => n[H],
          set: (he) => (n[H] = he),
        })
      })
    } else e.exposed || (e.exposed = {})
  O && e.render === Ue && (e.render = O),
    L != null && (e.inheritAttrs = L),
    w && (e.components = w),
    B && (e.directives = B),
    I && Ws(e)
}
function rc(e, t, n = Ue) {
  j(e) && (e = xs(e))
  for (const s in e) {
    const r = e[s]
    let i
    Z(r)
      ? 'default' in r
        ? (i = Rt(r.from || s, r.default, !0))
        : (i = Rt(r.from || s))
      : (i = Rt(r)),
      de(i)
        ? Object.defineProperty(t, s, {
            enumerable: !0,
            configurable: !0,
            get: () => i.value,
            set: (o) => (i.value = o),
          })
        : (t[s] = i)
  }
}
function hr(e, t, n) {
  De(j(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy), t, n)
}
function Di(e, t, n, s) {
  let r = s.includes('.') ? Zi(n, s) : () => n[s]
  if (re(e)) {
    const i = t[e]
    K(i) && Fe(r, i)
  } else if (K(e)) Fe(r, e.bind(n))
  else if (Z(e))
    if (j(e)) e.forEach((i) => Di(i, t, n, s))
    else {
      const i = K(e.handler) ? e.handler.bind(n) : t[e.handler]
      K(i) && Fe(r, i, e)
    }
}
function Gs(e) {
  const t = e.type,
    { mixins: n, extends: s } = t,
    {
      mixins: r,
      optionsCache: i,
      config: { optionMergeStrategies: o },
    } = e.appContext,
    l = i.get(t)
  let c
  return (
    l
      ? (c = l)
      : !r.length && !n && !s
        ? (c = t)
        : ((c = {}),
          r.length && r.forEach((u) => On(c, u, o, !0)),
          On(c, t, o)),
    Z(t) && i.set(t, c),
    c
  )
}
function On(e, t, n, s = !1) {
  const { mixins: r, extends: i } = t
  i && On(e, i, n, !0), r && r.forEach((o) => On(e, o, n, !0))
  for (const o in t)
    if (!(s && o === 'expose')) {
      const l = ic[o] || (n && n[o])
      e[o] = l ? l(e[o], t[o]) : t[o]
    }
  return e
}
const ic = {
  data: pr,
  props: gr,
  emits: gr,
  methods: Dt,
  computed: Dt,
  beforeCreate: _e,
  created: _e,
  beforeMount: _e,
  mounted: _e,
  beforeUpdate: _e,
  updated: _e,
  beforeDestroy: _e,
  beforeUnmount: _e,
  destroyed: _e,
  unmounted: _e,
  activated: _e,
  deactivated: _e,
  errorCaptured: _e,
  serverPrefetch: _e,
  components: Dt,
  directives: Dt,
  watch: lc,
  provide: pr,
  inject: oc,
}
function pr(e, t) {
  return t
    ? e
      ? function () {
          return ae(
            K(e) ? e.call(this, this) : e,
            K(t) ? t.call(this, this) : t,
          )
        }
      : t
    : e
}
function oc(e, t) {
  return Dt(xs(e), xs(t))
}
function xs(e) {
  if (j(e)) {
    const t = {}
    for (let n = 0; n < e.length; n++) t[e[n]] = e[n]
    return t
  }
  return e
}
function _e(e, t) {
  return e ? [...new Set([].concat(e, t))] : t
}
function Dt(e, t) {
  return e ? ae(Object.create(null), e, t) : t
}
function gr(e, t) {
  return e
    ? j(e) && j(t)
      ? [...new Set([...e, ...t])]
      : ae(Object.create(null), dr(e), dr(t ?? {}))
    : t
}
function lc(e, t) {
  if (!e) return t
  if (!t) return e
  const n = ae(Object.create(null), e)
  for (const s in t) n[s] = _e(e[s], t[s])
  return n
}
function $i() {
  return {
    app: null,
    config: {
      isNativeTag: Do,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {},
    },
    mixins: [],
    components: {},
    directives: {},
    provides: Object.create(null),
    optionsCache: new WeakMap(),
    propsCache: new WeakMap(),
    emitsCache: new WeakMap(),
  }
}
let cc = 0
function ac(e, t) {
  return function (s, r = null) {
    K(s) || (s = ae({}, s)), r != null && !Z(r) && (r = null)
    const i = $i(),
      o = new WeakSet(),
      l = []
    let c = !1
    const u = (i.app = {
      _uid: cc++,
      _component: s,
      _props: r,
      _container: null,
      _context: i,
      _instance: null,
      version: Vc,
      get config() {
        return i.config
      },
      set config(a) {},
      use(a, ...h) {
        return (
          o.has(a) ||
            (a && K(a.install)
              ? (o.add(a), a.install(u, ...h))
              : K(a) && (o.add(a), a(u, ...h))),
          u
        )
      },
      mixin(a) {
        return i.mixins.includes(a) || i.mixins.push(a), u
      },
      component(a, h) {
        return h ? ((i.components[a] = h), u) : i.components[a]
      },
      directive(a, h) {
        return h ? ((i.directives[a] = h), u) : i.directives[a]
      },
      mount(a, h, y) {
        if (!c) {
          const v = u._ceVNode || le(s, r)
          return (
            (v.appContext = i),
            y === !0 ? (y = 'svg') : y === !1 && (y = void 0),
            h && t ? t(v, a) : e(v, a, y),
            (c = !0),
            (u._container = a),
            (a.__vue_app__ = u),
            Kn(v.component)
          )
        }
      },
      onUnmount(a) {
        l.push(a)
      },
      unmount() {
        c &&
          (De(l, u._instance, 16),
          e(null, u._container),
          delete u._container.__vue_app__)
      },
      provide(a, h) {
        return (i.provides[a] = h), u
      },
      runWithContext(a) {
        const h = At
        At = u
        try {
          return a()
        } finally {
          At = h
        }
      },
    })
    return u
  }
}
let At = null
function fc(e, t) {
  if (fe) {
    let n = fe.provides
    const s = fe.parent && fe.parent.provides
    s === n && (n = fe.provides = Object.create(s)), (n[e] = t)
  }
}
function Rt(e, t, n = !1) {
  const s = fe || ue
  if (s || At) {
    const r = At
      ? At._context.provides
      : s
        ? s.parent == null
          ? s.vnode.appContext && s.vnode.appContext.provides
          : s.parent.provides
        : void 0
    if (r && e in r) return r[e]
    if (arguments.length > 1) return n && K(t) ? t.call(s && s.proxy) : t
  }
}
const ji = {},
  Vi = () => Object.create(ji),
  ki = (e) => Object.getPrototypeOf(e) === ji
function uc(e, t, n, s = !1) {
  const r = {},
    i = Vi()
  ;(e.propsDefaults = Object.create(null)), Ui(e, t, r, i)
  for (const o in e.propsOptions[0]) o in r || (r[o] = void 0)
  n ? (e.props = s ? r : _l(r)) : e.type.props ? (e.props = r) : (e.props = i),
    (e.attrs = i)
}
function dc(e, t, n, s) {
  const {
      props: r,
      attrs: i,
      vnode: { patchFlag: o },
    } = e,
    l = J(r),
    [c] = e.propsOptions
  let u = !1
  if ((s || o > 0) && !(o & 16)) {
    if (o & 8) {
      const a = e.vnode.dynamicProps
      for (let h = 0; h < a.length; h++) {
        let y = a[h]
        if (Bn(e.emitsOptions, y)) continue
        const v = t[y]
        if (c)
          if (z(i, y)) v !== i[y] && ((i[y] = v), (u = !0))
          else {
            const A = Ie(y)
            r[A] = Es(c, l, A, v, e, !1)
          }
        else v !== i[y] && ((i[y] = v), (u = !0))
      }
    }
  } else {
    Ui(e, t, r, i) && (u = !0)
    let a
    for (const h in l)
      (!t || (!z(t, h) && ((a = st(h)) === h || !z(t, a)))) &&
        (c
          ? n &&
            (n[h] !== void 0 || n[a] !== void 0) &&
            (r[h] = Es(c, l, h, void 0, e, !0))
          : delete r[h])
    if (i !== l) for (const h in i) (!t || !z(t, h)) && (delete i[h], (u = !0))
  }
  u && qe(e.attrs, 'set', '')
}
function Ui(e, t, n, s) {
  const [r, i] = e.propsOptions
  let o = !1,
    l
  if (t)
    for (let c in t) {
      if (Ct(c)) continue
      const u = t[c]
      let a
      r && z(r, (a = Ie(c)))
        ? !i || !i.includes(a)
          ? (n[a] = u)
          : ((l || (l = {}))[a] = u)
        : Bn(e.emitsOptions, c) ||
          ((!(c in s) || u !== s[c]) && ((s[c] = u), (o = !0)))
    }
  if (i) {
    const c = J(n),
      u = l || ee
    for (let a = 0; a < i.length; a++) {
      const h = i[a]
      n[h] = Es(r, c, h, u[h], e, !z(u, h))
    }
  }
  return o
}
function Es(e, t, n, s, r, i) {
  const o = e[n]
  if (o != null) {
    const l = z(o, 'default')
    if (l && s === void 0) {
      const c = o.default
      if (o.type !== Function && !o.skipFactory && K(c)) {
        const { propsDefaults: u } = r
        if (n in u) s = u[n]
        else {
          const a = sn(r)
          ;(s = u[n] = c.call(null, t)), a()
        }
      } else s = c
      r.ce && r.ce._setProp(n, s)
    }
    o[0] && (i && !l ? (s = !1) : o[1] && (s === '' || s === st(n)) && (s = !0))
  }
  return s
}
const hc = new WeakMap()
function Bi(e, t, n = !1) {
  const s = n ? hc : t.propsCache,
    r = s.get(e)
  if (r) return r
  const i = e.props,
    o = {},
    l = []
  let c = !1
  if (!K(e)) {
    const a = (h) => {
      c = !0
      const [y, v] = Bi(h, t, !0)
      ae(o, y), v && l.push(...v)
    }
    !n && t.mixins.length && t.mixins.forEach(a),
      e.extends && a(e.extends),
      e.mixins && e.mixins.forEach(a)
  }
  if (!i && !c) return Z(e) && s.set(e, xt), xt
  if (j(i))
    for (let a = 0; a < i.length; a++) {
      const h = Ie(i[a])
      mr(h) && (o[h] = ee)
    }
  else if (i)
    for (const a in i) {
      const h = Ie(a)
      if (mr(h)) {
        const y = i[a],
          v = (o[h] = j(y) || K(y) ? { type: y } : ae({}, y)),
          A = v.type
        let x = !1,
          W = !0
        if (j(A))
          for (let N = 0; N < A.length; ++N) {
            const $ = A[N],
              p = K($) && $.name
            if (p === 'Boolean') {
              x = !0
              break
            } else p === 'String' && (W = !1)
          }
        else x = K(A) && A.name === 'Boolean'
        ;(v[0] = x), (v[1] = W), (x || z(v, 'default')) && l.push(h)
      }
    }
  const u = [o, l]
  return Z(e) && s.set(e, u), u
}
function mr(e) {
  return e[0] !== '$' && !Ct(e)
}
const Wi = (e) => e[0] === '_' || e === '$stable',
  Ys = (e) => (j(e) ? e.map(Me) : [Me(e)]),
  pc = (e, t, n) => {
    if (t._n) return t
    const s = Nl((...r) => Ys(t(...r)), n)
    return (s._c = !1), s
  },
  Ki = (e, t, n) => {
    const s = e._ctx
    for (const r in e) {
      if (Wi(r)) continue
      const i = e[r]
      if (K(i)) t[r] = pc(r, i, s)
      else if (i != null) {
        const o = Ys(i)
        t[r] = () => o
      }
    }
  },
  qi = (e, t) => {
    const n = Ys(t)
    e.slots.default = () => n
  },
  Gi = (e, t, n) => {
    for (const s in t) (n || s !== '_') && (e[s] = t[s])
  },
  gc = (e, t, n) => {
    const s = (e.slots = Vi())
    if (e.vnode.shapeFlag & 32) {
      const r = t._
      r ? (Gi(s, t, n), n && Zr(s, '_', r, !0)) : Ki(t, s)
    } else t && qi(e, t)
  },
  mc = (e, t, n) => {
    const { vnode: s, slots: r } = e
    let i = !0,
      o = ee
    if (s.shapeFlag & 32) {
      const l = t._
      l
        ? n && l === 1
          ? (i = !1)
          : Gi(r, t, n)
        : ((i = !t.$stable), Ki(t, r)),
        (o = t)
    } else t && (qi(e, t), (o = { default: 1 }))
    if (i) for (const l in r) !Wi(l) && o[l] == null && delete r[l]
  },
  Te = so
function yc(e) {
  return Yi(e)
}
function vc(e) {
  return Yi(e, kl)
}
function Yi(e, t) {
  const n = Nn()
  n.__VUE__ = !0
  const {
      insert: s,
      remove: r,
      patchProp: i,
      createElement: o,
      createText: l,
      createComment: c,
      setText: u,
      setElementText: a,
      parentNode: h,
      nextSibling: y,
      setScopeId: v = Ue,
      insertStaticContent: A,
    } = e,
    x = (
      f,
      d,
      m,
      E = null,
      _ = null,
      S = null,
      M = void 0,
      R = null,
      T = !!d.dynamicChildren,
    ) => {
      if (f === d) return
      f && !ut(f, d) && ((E = on(f)), $e(f, _, S, !0), (f = null)),
        d.patchFlag === -2 && ((T = !1), (d.dynamicChildren = null))
      const { type: C, ref: V, shapeFlag: P } = d
      switch (C) {
        case gt:
          W(f, d, m, E)
          break
        case ve:
          N(f, d, m, E)
          break
        case kt:
          f == null && $(d, m, E, M)
          break
        case Se:
          w(f, d, m, E, _, S, M, R, T)
          break
        default:
          P & 1
            ? O(f, d, m, E, _, S, M, R, T)
            : P & 6
              ? B(f, d, m, E, _, S, M, R, T)
              : (P & 64 || P & 128) && C.process(f, d, m, E, _, S, M, R, T, vt)
      }
      V != null && _ && Yt(V, f && f.ref, S, d || f, !d)
    },
    W = (f, d, m, E) => {
      if (f == null) s((d.el = l(d.children)), m, E)
      else {
        const _ = (d.el = f.el)
        d.children !== f.children && u(_, d.children)
      }
    },
    N = (f, d, m, E) => {
      f == null ? s((d.el = c(d.children || '')), m, E) : (d.el = f.el)
    },
    $ = (f, d, m, E) => {
      ;[f.el, f.anchor] = A(f.children, d, m, E, f.el, f.anchor)
    },
    p = ({ el: f, anchor: d }, m, E) => {
      let _
      for (; f && f !== d; ) (_ = y(f)), s(f, m, E), (f = _)
      s(d, m, E)
    },
    g = ({ el: f, anchor: d }) => {
      let m
      for (; f && f !== d; ) (m = y(f)), r(f), (f = m)
      r(d)
    },
    O = (f, d, m, E, _, S, M, R, T) => {
      d.type === 'svg' ? (M = 'svg') : d.type === 'math' && (M = 'mathml'),
        f == null ? k(d, m, E, _, S, M, R, T) : I(f, d, _, S, M, R, T)
    },
    k = (f, d, m, E, _, S, M, R) => {
      let T, C
      const { props: V, shapeFlag: P, transition: F, dirs: q } = f
      if (
        ((T = f.el = o(f.type, S, V && V.is, V)),
        P & 8
          ? a(T, f.children)
          : P & 16 && G(f.children, T, null, E, _, ns(f, S), M, R),
        q && ke(f, null, E, 'created'),
        U(T, f, f.scopeId, M, E),
        V)
      ) {
        for (const te in V)
          te !== 'value' && !Ct(te) && i(T, te, null, V[te], S, E)
        'value' in V && i(T, 'value', null, V.value, S),
          (C = V.onVnodeBeforeMount) && Oe(C, E, f)
      }
      q && ke(f, null, E, 'beforeMount')
      const X = Xi(_, F)
      X && F.beforeEnter(T),
        s(T, d, m),
        ((C = V && V.onVnodeMounted) || X || q) &&
          Te(() => {
            C && Oe(C, E, f), X && F.enter(T), q && ke(f, null, E, 'mounted')
          }, _)
    },
    U = (f, d, m, E, _) => {
      if ((m && v(f, m), E)) for (let S = 0; S < E.length; S++) v(f, E[S])
      if (_) {
        let S = _.subTree
        if (
          d === S ||
          (no(S.type) && (S.ssContent === d || S.ssFallback === d))
        ) {
          const M = _.vnode
          U(f, M, M.scopeId, M.slotScopeIds, _.parent)
        }
      }
    },
    G = (f, d, m, E, _, S, M, R, T = 0) => {
      for (let C = T; C < f.length; C++) {
        const V = (f[C] = R ? Ze(f[C]) : Me(f[C]))
        x(null, V, d, m, E, _, S, M, R)
      }
    },
    I = (f, d, m, E, _, S, M) => {
      const R = (d.el = f.el)
      let { patchFlag: T, dynamicChildren: C, dirs: V } = d
      T |= f.patchFlag & 16
      const P = f.props || ee,
        F = d.props || ee
      let q
      if (
        (m && lt(m, !1),
        (q = F.onVnodeBeforeUpdate) && Oe(q, m, d, f),
        V && ke(d, f, m, 'beforeUpdate'),
        m && lt(m, !0),
        ((P.innerHTML && F.innerHTML == null) ||
          (P.textContent && F.textContent == null)) &&
          a(R, ''),
        C
          ? b(f.dynamicChildren, C, R, m, E, ns(d, _), S)
          : M || H(f, d, R, null, m, E, ns(d, _), S, !1),
        T > 0)
      ) {
        if (T & 16) L(R, P, F, m, _)
        else if (
          (T & 2 && P.class !== F.class && i(R, 'class', null, F.class, _),
          T & 4 && i(R, 'style', P.style, F.style, _),
          T & 8)
        ) {
          const X = d.dynamicProps
          for (let te = 0; te < X.length; te++) {
            const Q = X[te],
              xe = P[Q],
              pe = F[Q]
            ;(pe !== xe || Q === 'value') && i(R, Q, xe, pe, _, m)
          }
        }
        T & 1 && f.children !== d.children && a(R, d.children)
      } else !M && C == null && L(R, P, F, m, _)
      ;((q = F.onVnodeUpdated) || V) &&
        Te(() => {
          q && Oe(q, m, d, f), V && ke(d, f, m, 'updated')
        }, E)
    },
    b = (f, d, m, E, _, S, M) => {
      for (let R = 0; R < d.length; R++) {
        const T = f[R],
          C = d[R],
          V =
            T.el && (T.type === Se || !ut(T, C) || T.shapeFlag & 70)
              ? h(T.el)
              : m
        x(T, C, V, null, E, _, S, M, !0)
      }
    },
    L = (f, d, m, E, _) => {
      if (d !== m) {
        if (d !== ee)
          for (const S in d) !Ct(S) && !(S in m) && i(f, S, d[S], null, _, E)
        for (const S in m) {
          if (Ct(S)) continue
          const M = m[S],
            R = d[S]
          M !== R && S !== 'value' && i(f, S, R, M, _, E)
        }
        'value' in m && i(f, 'value', d.value, m.value, _)
      }
    },
    w = (f, d, m, E, _, S, M, R, T) => {
      const C = (d.el = f ? f.el : l('')),
        V = (d.anchor = f ? f.anchor : l(''))
      let { patchFlag: P, dynamicChildren: F, slotScopeIds: q } = d
      q && (R = R ? R.concat(q) : q),
        f == null
          ? (s(C, m, E), s(V, m, E), G(d.children || [], m, V, _, S, M, R, T))
          : P > 0 && P & 64 && F && f.dynamicChildren
            ? (b(f.dynamicChildren, F, m, _, S, M, R),
              (d.key != null || (_ && d === _.subTree)) && Ji(f, d, !0))
            : H(f, d, m, V, _, S, M, R, T)
    },
    B = (f, d, m, E, _, S, M, R, T) => {
      ;(d.slotScopeIds = R),
        f == null
          ? d.shapeFlag & 512
            ? _.ctx.activate(d, m, E, M, T)
            : se(d, m, E, _, S, M, T)
          : ie(f, d, T)
    },
    se = (f, d, m, E, _, S, M) => {
      const R = (f.component = Nc(f, E, _))
      if ((nn(f) && (R.ctx.renderer = vt), Fc(R, !1, M), R.asyncDep)) {
        if ((_ && _.registerDep(R, D, M), !f.el)) {
          const T = (R.subTree = le(ve))
          N(null, T, d, m)
        }
      } else D(R, f, d, m, _, S, M)
    },
    ie = (f, d, m) => {
      const E = (d.component = f.component)
      if (Ac(f, d, m))
        if (E.asyncDep && !E.asyncResolved) {
          Y(E, d, m)
          return
        } else (E.next = d), E.update()
      else (d.el = f.el), (E.vnode = d)
    },
    D = (f, d, m, E, _, S, M) => {
      const R = () => {
        if (f.isMounted) {
          let { next: P, bu: F, u: q, parent: X, vnode: te } = f
          {
            const Ee = zi(f)
            if (Ee) {
              P && ((P.el = te.el), Y(f, P, M)),
                Ee.asyncDep.then(() => {
                  f.isUnmounted || R()
                })
              return
            }
          }
          let Q = P,
            xe
          lt(f, !1),
            P ? ((P.el = te.el), Y(f, P, M)) : (P = te),
            F && vn(F),
            (xe = P.props && P.props.onVnodeBeforeUpdate) && Oe(xe, X, P, te),
            lt(f, !0)
          const pe = ss(f),
            Le = f.subTree
          ;(f.subTree = pe),
            x(Le, pe, h(Le.el), on(Le), f, _, S),
            (P.el = pe.el),
            Q === null && to(f, pe.el),
            q && Te(q, _),
            (xe = P.props && P.props.onVnodeUpdated) &&
              Te(() => Oe(xe, X, P, te), _)
        } else {
          let P
          const { el: F, props: q } = d,
            { bm: X, m: te, parent: Q, root: xe, type: pe } = f,
            Le = pt(d)
          if (
            (lt(f, !1),
            X && vn(X),
            !Le && (P = q && q.onVnodeBeforeMount) && Oe(P, Q, d),
            lt(f, !0),
            F && Yn)
          ) {
            const Ee = () => {
              ;(f.subTree = ss(f)), Yn(F, f.subTree, f, _, null)
            }
            Le && pe.__asyncHydrate ? pe.__asyncHydrate(F, f, Ee) : Ee()
          } else {
            xe.ce && xe.ce._injectChildStyle(pe)
            const Ee = (f.subTree = ss(f))
            x(null, Ee, m, E, f, _, S), (d.el = Ee.el)
          }
          if ((te && Te(te, _), !Le && (P = q && q.onVnodeMounted))) {
            const Ee = d
            Te(() => Oe(P, Q, Ee), _)
          }
          ;(d.shapeFlag & 256 ||
            (Q && pt(Q.vnode) && Q.vnode.shapeFlag & 256)) &&
            f.a &&
            Te(f.a, _),
            (f.isMounted = !0),
            (d = m = E = null)
        }
      }
      f.scope.on()
      const T = (f.effect = new ri(R))
      f.scope.off()
      const C = (f.update = T.run.bind(T)),
        V = (f.job = T.runIfDirty.bind(T))
      ;(V.i = f), (V.id = f.uid), (T.scheduler = () => Us(V)), lt(f, !0), C()
    },
    Y = (f, d, m) => {
      d.component = f
      const E = f.vnode.props
      ;(f.vnode = d),
        (f.next = null),
        dc(f, d.props, E, m),
        mc(f, d.children, m),
        rt(),
        lr(f),
        it()
    },
    H = (f, d, m, E, _, S, M, R, T = !1) => {
      const C = f && f.children,
        V = f ? f.shapeFlag : 0,
        P = d.children,
        { patchFlag: F, shapeFlag: q } = d
      if (F > 0) {
        if (F & 128) {
          rn(C, P, m, E, _, S, M, R, T)
          return
        } else if (F & 256) {
          he(C, P, m, E, _, S, M, R, T)
          return
        }
      }
      q & 8
        ? (V & 16 && It(C, _, S), P !== C && a(m, P))
        : V & 16
          ? q & 16
            ? rn(C, P, m, E, _, S, M, R, T)
            : It(C, _, S, !0)
          : (V & 8 && a(m, ''), q & 16 && G(P, m, E, _, S, M, R, T))
    },
    he = (f, d, m, E, _, S, M, R, T) => {
      ;(f = f || xt), (d = d || xt)
      const C = f.length,
        V = d.length,
        P = Math.min(C, V)
      let F
      for (F = 0; F < P; F++) {
        const q = (d[F] = T ? Ze(d[F]) : Me(d[F]))
        x(f[F], q, m, null, _, S, M, R, T)
      }
      C > V ? It(f, _, S, !0, !1, P) : G(d, m, E, _, S, M, R, T, P)
    },
    rn = (f, d, m, E, _, S, M, R, T) => {
      let C = 0
      const V = d.length
      let P = f.length - 1,
        F = V - 1
      for (; C <= P && C <= F; ) {
        const q = f[C],
          X = (d[C] = T ? Ze(d[C]) : Me(d[C]))
        if (ut(q, X)) x(q, X, m, null, _, S, M, R, T)
        else break
        C++
      }
      for (; C <= P && C <= F; ) {
        const q = f[P],
          X = (d[F] = T ? Ze(d[F]) : Me(d[F]))
        if (ut(q, X)) x(q, X, m, null, _, S, M, R, T)
        else break
        P--, F--
      }
      if (C > P) {
        if (C <= F) {
          const q = F + 1,
            X = q < V ? d[q].el : E
          for (; C <= F; )
            x(null, (d[C] = T ? Ze(d[C]) : Me(d[C])), m, X, _, S, M, R, T), C++
        }
      } else if (C > F) for (; C <= P; ) $e(f[C], _, S, !0), C++
      else {
        const q = C,
          X = C,
          te = new Map()
        for (C = X; C <= F; C++) {
          const Ce = (d[C] = T ? Ze(d[C]) : Me(d[C]))
          Ce.key != null && te.set(Ce.key, C)
        }
        let Q,
          xe = 0
        const pe = F - X + 1
        let Le = !1,
          Ee = 0
        const Lt = new Array(pe)
        for (C = 0; C < pe; C++) Lt[C] = 0
        for (C = q; C <= P; C++) {
          const Ce = f[C]
          if (xe >= pe) {
            $e(Ce, _, S, !0)
            continue
          }
          let je
          if (Ce.key != null) je = te.get(Ce.key)
          else
            for (Q = X; Q <= F; Q++)
              if (Lt[Q - X] === 0 && ut(Ce, d[Q])) {
                je = Q
                break
              }
          je === void 0
            ? $e(Ce, _, S, !0)
            : ((Lt[je - X] = C + 1),
              je >= Ee ? (Ee = je) : (Le = !0),
              x(Ce, d[je], m, null, _, S, M, R, T),
              xe++)
        }
        const tr = Le ? _c(Lt) : xt
        for (Q = tr.length - 1, C = pe - 1; C >= 0; C--) {
          const Ce = X + C,
            je = d[Ce],
            nr = Ce + 1 < V ? d[Ce + 1].el : E
          Lt[C] === 0
            ? x(null, je, m, nr, _, S, M, R, T)
            : Le && (Q < 0 || C !== tr[Q] ? ot(je, m, nr, 2) : Q--)
        }
      }
    },
    ot = (f, d, m, E, _ = null) => {
      const { el: S, type: M, transition: R, children: T, shapeFlag: C } = f
      if (C & 6) {
        ot(f.component.subTree, d, m, E)
        return
      }
      if (C & 128) {
        f.suspense.move(d, m, E)
        return
      }
      if (C & 64) {
        M.move(f, d, m, vt)
        return
      }
      if (M === Se) {
        s(S, d, m)
        for (let P = 0; P < T.length; P++) ot(T[P], d, m, E)
        s(f.anchor, d, m)
        return
      }
      if (M === kt) {
        p(f, d, m)
        return
      }
      if (E !== 2 && C & 1 && R)
        if (E === 0) R.beforeEnter(S), s(S, d, m), Te(() => R.enter(S), _)
        else {
          const { leave: P, delayLeave: F, afterLeave: q } = R,
            X = () => s(S, d, m),
            te = () => {
              P(S, () => {
                X(), q && q()
              })
            }
          F ? F(S, X, te) : te()
        }
      else s(S, d, m)
    },
    $e = (f, d, m, E = !1, _ = !1) => {
      const {
        type: S,
        props: M,
        ref: R,
        children: T,
        dynamicChildren: C,
        shapeFlag: V,
        patchFlag: P,
        dirs: F,
        cacheIndex: q,
      } = f
      if (
        (P === -2 && (_ = !1),
        R != null && Yt(R, null, m, f, !0),
        q != null && (d.renderCache[q] = void 0),
        V & 256)
      ) {
        d.ctx.deactivate(f)
        return
      }
      const X = V & 1 && F,
        te = !pt(f)
      let Q
      if ((te && (Q = M && M.onVnodeBeforeUnmount) && Oe(Q, d, f), V & 6))
        Ho(f.component, m, E)
      else {
        if (V & 128) {
          f.suspense.unmount(m, E)
          return
        }
        X && ke(f, null, d, 'beforeUnmount'),
          V & 64
            ? f.type.remove(f, d, m, vt, E)
            : C && !C.hasOnce && (S !== Se || (P > 0 && P & 64))
              ? It(C, d, m, !1, !0)
              : ((S === Se && P & 384) || (!_ && V & 16)) && It(T, d, m),
          E && Zs(f)
      }
      ;((te && (Q = M && M.onVnodeUnmounted)) || X) &&
        Te(() => {
          Q && Oe(Q, d, f), X && ke(f, null, d, 'unmounted')
        }, m)
    },
    Zs = (f) => {
      const { type: d, el: m, anchor: E, transition: _ } = f
      if (d === Se) {
        Fo(m, E)
        return
      }
      if (d === kt) {
        g(f)
        return
      }
      const S = () => {
        r(m), _ && !_.persisted && _.afterLeave && _.afterLeave()
      }
      if (f.shapeFlag & 1 && _ && !_.persisted) {
        const { leave: M, delayLeave: R } = _,
          T = () => M(m, S)
        R ? R(f.el, S, T) : T()
      } else S()
    },
    Fo = (f, d) => {
      let m
      for (; f !== d; ) (m = y(f)), r(f), (f = m)
      r(d)
    },
    Ho = (f, d, m) => {
      const { bum: E, scope: _, job: S, subTree: M, um: R, m: T, a: C } = f
      yr(T),
        yr(C),
        E && vn(E),
        _.stop(),
        S && ((S.flags |= 8), $e(M, f, d, m)),
        R && Te(R, d),
        Te(() => {
          f.isUnmounted = !0
        }, d),
        d &&
          d.pendingBranch &&
          !d.isUnmounted &&
          f.asyncDep &&
          !f.asyncResolved &&
          f.suspenseId === d.pendingId &&
          (d.deps--, d.deps === 0 && d.resolve())
    },
    It = (f, d, m, E = !1, _ = !1, S = 0) => {
      for (let M = S; M < f.length; M++) $e(f[M], d, m, E, _)
    },
    on = (f) => {
      if (f.shapeFlag & 6) return on(f.component.subTree)
      if (f.shapeFlag & 128) return f.suspense.next()
      const d = y(f.anchor || f.el),
        m = d && d[Fl]
      return m ? y(m) : d
    }
  let qn = !1
  const er = (f, d, m) => {
      f == null
        ? d._vnode && $e(d._vnode, null, null, !0)
        : x(d._vnode || null, f, d, null, null, null, m),
        (d._vnode = f),
        qn || ((qn = !0), lr(), An(), (qn = !1))
    },
    vt = {
      p: x,
      um: $e,
      m: ot,
      r: Zs,
      mt: se,
      mc: G,
      pc: H,
      pbc: b,
      n: on,
      o: e,
    }
  let Gn, Yn
  return (
    t && ([Gn, Yn] = t(vt)), { render: er, hydrate: Gn, createApp: ac(er, Gn) }
  )
}
function ns({ type: e, props: t }, n) {
  return (n === 'svg' && e === 'foreignObject') ||
    (n === 'mathml' &&
      e === 'annotation-xml' &&
      t &&
      t.encoding &&
      t.encoding.includes('html'))
    ? void 0
    : n
}
function lt({ effect: e, job: t }, n) {
  n ? ((e.flags |= 32), (t.flags |= 4)) : ((e.flags &= -33), (t.flags &= -5))
}
function Xi(e, t) {
  return (!e || (e && !e.pendingBranch)) && t && !t.persisted
}
function Ji(e, t, n = !1) {
  const s = e.children,
    r = t.children
  if (j(s) && j(r))
    for (let i = 0; i < s.length; i++) {
      const o = s[i]
      let l = r[i]
      l.shapeFlag & 1 &&
        !l.dynamicChildren &&
        ((l.patchFlag <= 0 || l.patchFlag === 32) &&
          ((l = r[i] = Ze(r[i])), (l.el = o.el)),
        !n && l.patchFlag !== -2 && Ji(o, l)),
        l.type === gt && (l.el = o.el)
    }
}
function _c(e) {
  const t = e.slice(),
    n = [0]
  let s, r, i, o, l
  const c = e.length
  for (s = 0; s < c; s++) {
    const u = e[s]
    if (u !== 0) {
      if (((r = n[n.length - 1]), e[r] < u)) {
        ;(t[s] = r), n.push(s)
        continue
      }
      for (i = 0, o = n.length - 1; i < o; )
        (l = (i + o) >> 1), e[n[l]] < u ? (i = l + 1) : (o = l)
      u < e[n[i]] && (i > 0 && (t[s] = n[i - 1]), (n[i] = s))
    }
  }
  for (i = n.length, o = n[i - 1]; i-- > 0; ) (n[i] = o), (o = t[o])
  return n
}
function zi(e) {
  const t = e.subTree.component
  if (t) return t.asyncDep && !t.asyncResolved ? t : zi(t)
}
function yr(e) {
  if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8
}
const bc = Symbol.for('v-scx'),
  wc = () => Rt(bc)
function Qi(e, t) {
  return Un(e, null, t)
}
function Sf(e, t) {
  return Un(e, null, { flush: 'post' })
}
function Fe(e, t, n) {
  return Un(e, t, n)
}
function Un(e, t, n = ee) {
  const { immediate: s, deep: r, flush: i, once: o } = n,
    l = ae({}, n),
    c = (t && s) || (!t && i !== 'post')
  let u
  if (Ot) {
    if (i === 'sync') {
      const v = wc()
      u = v.__watcherHandles || (v.__watcherHandles = [])
    } else if (!c) {
      const v = () => {}
      return (v.stop = Ue), (v.resume = Ue), (v.pause = Ue), v
    }
  }
  const a = fe
  l.call = (v, A, x) => De(v, a, A, x)
  let h = !1
  i === 'post'
    ? (l.scheduler = (v) => {
        Te(v, a && a.suspense)
      })
    : i !== 'sync' &&
      ((h = !0),
      (l.scheduler = (v, A) => {
        A ? v() : Us(v)
      })),
    (l.augmentJob = (v) => {
      t && (v.flags |= 4),
        h && ((v.flags |= 2), a && ((v.id = a.uid), (v.i = a)))
    })
  const y = Ml(e, t, l)
  return Ot && (u ? u.push(y) : c && y()), y
}
function Sc(e, t, n) {
  const s = this.proxy,
    r = re(e) ? (e.includes('.') ? Zi(s, e) : () => s[e]) : e.bind(s, s)
  let i
  K(t) ? (i = t) : ((i = t.handler), (n = t))
  const o = sn(this),
    l = Un(r, i.bind(s), n)
  return o(), l
}
function Zi(e, t) {
  const n = t.split('.')
  return () => {
    let s = e
    for (let r = 0; r < n.length && s; r++) s = s[n[r]]
    return s
  }
}
const xc = (e, t) =>
  t === 'modelValue' || t === 'model-value'
    ? e.modelModifiers
    : e[`${t}Modifiers`] || e[`${Ie(t)}Modifiers`] || e[`${st(t)}Modifiers`]
function Ec(e, t, ...n) {
  if (e.isUnmounted) return
  const s = e.vnode.props || ee
  let r = n
  const i = t.startsWith('update:'),
    o = i && xc(s, t.slice(7))
  o &&
    (o.trim && (r = n.map((a) => (re(a) ? a.trim() : a))),
    o.number && (r = n.map(Uo)))
  let l,
    c = s[(l = yn(t))] || s[(l = yn(Ie(t)))]
  !c && i && (c = s[(l = yn(st(t)))]), c && De(c, e, 6, r)
  const u = s[l + 'Once']
  if (u) {
    if (!e.emitted) e.emitted = {}
    else if (e.emitted[l]) return
    ;(e.emitted[l] = !0), De(u, e, 6, r)
  }
}
function eo(e, t, n = !1) {
  const s = t.emitsCache,
    r = s.get(e)
  if (r !== void 0) return r
  const i = e.emits
  let o = {},
    l = !1
  if (!K(e)) {
    const c = (u) => {
      const a = eo(u, t, !0)
      a && ((l = !0), ae(o, a))
    }
    !n && t.mixins.length && t.mixins.forEach(c),
      e.extends && c(e.extends),
      e.mixins && e.mixins.forEach(c)
  }
  return !i && !l
    ? (Z(e) && s.set(e, null), null)
    : (j(i) ? i.forEach((c) => (o[c] = null)) : ae(o, i),
      Z(e) && s.set(e, o),
      o)
}
function Bn(e, t) {
  return !e || !Qt(t)
    ? !1
    : ((t = t.slice(2).replace(/Once$/, '')),
      z(e, t[0].toLowerCase() + t.slice(1)) || z(e, st(t)) || z(e, t))
}
function ss(e) {
  const {
      type: t,
      vnode: n,
      proxy: s,
      withProxy: r,
      propsOptions: [i],
      slots: o,
      attrs: l,
      emit: c,
      render: u,
      renderCache: a,
      props: h,
      data: y,
      setupState: v,
      ctx: A,
      inheritAttrs: x,
    } = e,
    W = Rn(e)
  let N, $
  try {
    if (n.shapeFlag & 4) {
      const g = r || s,
        O = g
      ;(N = Me(u.call(O, g, a, h, v, y, A))), ($ = l)
    } else {
      const g = t
      ;(N = Me(
        g.length > 1 ? g(h, { attrs: l, slots: o, emit: c }) : g(h, null),
      )),
        ($ = t.props ? l : Cc(l))
    }
  } catch (g) {
    ;(Ut.length = 0), tn(g, e, 1), (N = le(ve))
  }
  let p = N
  if ($ && x !== !1) {
    const g = Object.keys($),
      { shapeFlag: O } = p
    g.length &&
      O & 7 &&
      (i && g.some(Ps) && ($ = Tc($, i)), (p = nt(p, $, !1, !0)))
  }
  return (
    n.dirs &&
      ((p = nt(p, null, !1, !0)),
      (p.dirs = p.dirs ? p.dirs.concat(n.dirs) : n.dirs)),
    n.transition && Gt(p, n.transition),
    (N = p),
    Rn(W),
    N
  )
}
const Cc = (e) => {
    let t
    for (const n in e)
      (n === 'class' || n === 'style' || Qt(n)) && ((t || (t = {}))[n] = e[n])
    return t
  },
  Tc = (e, t) => {
    const n = {}
    for (const s in e) (!Ps(s) || !(s.slice(9) in t)) && (n[s] = e[s])
    return n
  }
function Ac(e, t, n) {
  const { props: s, children: r, component: i } = e,
    { props: o, children: l, patchFlag: c } = t,
    u = i.emitsOptions
  if (t.dirs || t.transition) return !0
  if (n && c >= 0) {
    if (c & 1024) return !0
    if (c & 16) return s ? vr(s, o, u) : !!o
    if (c & 8) {
      const a = t.dynamicProps
      for (let h = 0; h < a.length; h++) {
        const y = a[h]
        if (o[y] !== s[y] && !Bn(u, y)) return !0
      }
    }
  } else
    return (r || l) && (!l || !l.$stable)
      ? !0
      : s === o
        ? !1
        : s
          ? o
            ? vr(s, o, u)
            : !0
          : !!o
  return !1
}
function vr(e, t, n) {
  const s = Object.keys(t)
  if (s.length !== Object.keys(e).length) return !0
  for (let r = 0; r < s.length; r++) {
    const i = s[r]
    if (t[i] !== e[i] && !Bn(n, i)) return !0
  }
  return !1
}
function to({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const s = t.subTree
    if ((s.suspense && s.suspense.activeBranch === e && (s.el = e.el), s === e))
      ((e = t.vnode).el = n), (t = t.parent)
    else break
  }
}
const no = (e) => e.__isSuspense
function so(e, t) {
  t && t.pendingBranch
    ? j(e)
      ? t.effects.push(...e)
      : t.effects.push(e)
    : Ll(e)
}
const Se = Symbol.for('v-fgt'),
  gt = Symbol.for('v-txt'),
  ve = Symbol.for('v-cmt'),
  kt = Symbol.for('v-stc'),
  Ut = []
let Ae = null
function Cs(e = !1) {
  Ut.push((Ae = e ? null : []))
}
function Rc() {
  Ut.pop(), (Ae = Ut[Ut.length - 1] || null)
}
let Xt = 1
function _r(e, t = !1) {
  ;(Xt += e), e < 0 && Ae && t && (Ae.hasOnce = !0)
}
function ro(e) {
  return (
    (e.dynamicChildren = Xt > 0 ? Ae || xt : null),
    Rc(),
    Xt > 0 && Ae && Ae.push(e),
    e
  )
}
function xf(e, t, n, s, r, i) {
  return ro(oo(e, t, n, s, r, i, !0))
}
function Ts(e, t, n, s, r) {
  return ro(le(e, t, n, s, r, !0))
}
function Jt(e) {
  return e ? e.__v_isVNode === !0 : !1
}
function ut(e, t) {
  return e.type === t.type && e.key === t.key
}
const io = ({ key: e }) => e ?? null,
  bn = ({ ref: e, ref_key: t, ref_for: n }) => (
    typeof e == 'number' && (e = '' + e),
    e != null
      ? re(e) || de(e) || K(e)
        ? { i: ue, r: e, k: t, f: !!n }
        : e
      : null
  )
function oo(
  e,
  t = null,
  n = null,
  s = 0,
  r = null,
  i = e === Se ? 0 : 1,
  o = !1,
  l = !1,
) {
  const c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && io(t),
    ref: t && bn(t),
    scopeId: Ti,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: i,
    patchFlag: s,
    dynamicProps: r,
    dynamicChildren: null,
    appContext: null,
    ctx: ue,
  }
  return (
    l
      ? (Xs(c, n), i & 128 && e.normalize(c))
      : n && (c.shapeFlag |= re(n) ? 8 : 16),
    Xt > 0 &&
      !o &&
      Ae &&
      (c.patchFlag > 0 || i & 6) &&
      c.patchFlag !== 32 &&
      Ae.push(c),
    c
  )
}
const le = Oc
function Oc(e, t = null, n = null, s = 0, r = null, i = !1) {
  if (((!e || e === Fi) && (e = ve), Jt(e))) {
    const l = nt(e, t, !0)
    return (
      n && Xs(l, n),
      Xt > 0 &&
        !i &&
        Ae &&
        (l.shapeFlag & 6 ? (Ae[Ae.indexOf(e)] = l) : Ae.push(l)),
      (l.patchFlag = -2),
      l
    )
  }
  if ((jc(e) && (e = e.__vccOpts), t)) {
    t = Mc(t)
    let { class: l, style: c } = t
    l && !re(l) && (t.class = Fs(l)),
      Z(c) && (ks(c) && !j(c) && (c = ae({}, c)), (t.style = Ns(c)))
  }
  const o = re(e) ? 1 : no(e) ? 128 : Ai(e) ? 64 : Z(e) ? 4 : K(e) ? 2 : 0
  return oo(e, t, n, s, r, o, i, !0)
}
function Mc(e) {
  return e ? (ks(e) || ki(e) ? ae({}, e) : e) : null
}
function nt(e, t, n = !1, s = !1) {
  const { props: r, ref: i, patchFlag: o, children: l, transition: c } = e,
    u = t ? Pc(r || {}, t) : r,
    a = {
      __v_isVNode: !0,
      __v_skip: !0,
      type: e.type,
      props: u,
      key: u && io(u),
      ref:
        t && t.ref
          ? n && i
            ? j(i)
              ? i.concat(bn(t))
              : [i, bn(t)]
            : bn(t)
          : i,
      scopeId: e.scopeId,
      slotScopeIds: e.slotScopeIds,
      children: l,
      target: e.target,
      targetStart: e.targetStart,
      targetAnchor: e.targetAnchor,
      staticCount: e.staticCount,
      shapeFlag: e.shapeFlag,
      patchFlag: t && e.type !== Se ? (o === -1 ? 16 : o | 16) : o,
      dynamicProps: e.dynamicProps,
      dynamicChildren: e.dynamicChildren,
      appContext: e.appContext,
      dirs: e.dirs,
      transition: c,
      component: e.component,
      suspense: e.suspense,
      ssContent: e.ssContent && nt(e.ssContent),
      ssFallback: e.ssFallback && nt(e.ssFallback),
      el: e.el,
      anchor: e.anchor,
      ctx: e.ctx,
      ce: e.ce,
    }
  return c && s && Gt(a, c.clone(a)), a
}
function lo(e = ' ', t = 0) {
  return le(gt, null, e, t)
}
function Ef(e, t) {
  const n = le(kt, null, e)
  return (n.staticCount = t), n
}
function Cf(e = '', t = !1) {
  return t ? (Cs(), Ts(ve, null, e)) : le(ve, null, e)
}
function Me(e) {
  return e == null || typeof e == 'boolean'
    ? le(ve)
    : j(e)
      ? le(Se, null, e.slice())
      : Jt(e)
        ? Ze(e)
        : le(gt, null, String(e))
}
function Ze(e) {
  return (e.el === null && e.patchFlag !== -1) || e.memo ? e : nt(e)
}
function Xs(e, t) {
  let n = 0
  const { shapeFlag: s } = e
  if (t == null) t = null
  else if (j(t)) n = 16
  else if (typeof t == 'object')
    if (s & 65) {
      const r = t.default
      r && (r._c && (r._d = !1), Xs(e, r()), r._c && (r._d = !0))
      return
    } else {
      n = 32
      const r = t._
      !r && !ki(t)
        ? (t._ctx = ue)
        : r === 3 &&
          ue &&
          (ue.slots._ === 1 ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024)))
    }
  else
    K(t)
      ? ((t = { default: t, _ctx: ue }), (n = 32))
      : ((t = String(t)), s & 64 ? ((n = 16), (t = [lo(t)])) : (n = 8))
  ;(e.children = t), (e.shapeFlag |= n)
}
function Pc(...e) {
  const t = {}
  for (let n = 0; n < e.length; n++) {
    const s = e[n]
    for (const r in s)
      if (r === 'class')
        t.class !== s.class && (t.class = Fs([t.class, s.class]))
      else if (r === 'style') t.style = Ns([t.style, s.style])
      else if (Qt(r)) {
        const i = t[r],
          o = s[r]
        o &&
          i !== o &&
          !(j(i) && i.includes(o)) &&
          (t[r] = i ? [].concat(i, o) : o)
      } else r !== '' && (t[r] = s[r])
  }
  return t
}
function Oe(e, t, n, s = null) {
  De(e, t, 7, [n, s])
}
const Ic = $i()
let Lc = 0
function Nc(e, t, n) {
  const s = e.type,
    r = (t ? t.appContext : e.appContext) || Ic,
    i = {
      uid: Lc++,
      vnode: e,
      type: s,
      parent: t,
      appContext: r,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      job: null,
      scope: new Qo(!0),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: t ? t.provides : Object.create(r.provides),
      ids: t ? t.ids : ['', 0, 0],
      accessCache: null,
      renderCache: [],
      components: null,
      directives: null,
      propsOptions: Bi(s, r),
      emitsOptions: eo(s, r),
      emit: null,
      emitted: null,
      propsDefaults: ee,
      inheritAttrs: s.inheritAttrs,
      ctx: ee,
      data: ee,
      props: ee,
      attrs: ee,
      slots: ee,
      refs: ee,
      setupState: ee,
      setupContext: null,
      suspense: n,
      suspenseId: n ? n.pendingId : 0,
      asyncDep: null,
      asyncResolved: !1,
      isMounted: !1,
      isUnmounted: !1,
      isDeactivated: !1,
      bc: null,
      c: null,
      bm: null,
      m: null,
      bu: null,
      u: null,
      um: null,
      bum: null,
      da: null,
      a: null,
      rtg: null,
      rtc: null,
      ec: null,
      sp: null,
    }
  return (
    (i.ctx = { _: i }),
    (i.root = t ? t.root : i),
    (i.emit = Ec.bind(null, i)),
    e.ce && e.ce(i),
    i
  )
}
let fe = null
const Wn = () => fe || ue
let Mn, As
{
  const e = Nn(),
    t = (n, s) => {
      let r
      return (
        (r = e[n]) || (r = e[n] = []),
        r.push(s),
        (i) => {
          r.length > 1 ? r.forEach((o) => o(i)) : r[0](i)
        }
      )
    }
  ;(Mn = t('__VUE_INSTANCE_SETTERS__', (n) => (fe = n))),
    (As = t('__VUE_SSR_SETTERS__', (n) => (Ot = n)))
}
const sn = (e) => {
    const t = fe
    return (
      Mn(e),
      e.scope.on(),
      () => {
        e.scope.off(), Mn(t)
      }
    )
  },
  br = () => {
    fe && fe.scope.off(), Mn(null)
  }
function co(e) {
  return e.vnode.shapeFlag & 4
}
let Ot = !1
function Fc(e, t = !1, n = !1) {
  t && As(t)
  const { props: s, children: r } = e.vnode,
    i = co(e)
  uc(e, s, i, t), gc(e, r, n)
  const o = i ? Hc(e, t) : void 0
  return t && As(!1), o
}
function Hc(e, t) {
  const n = e.type
  ;(e.accessCache = Object.create(null)), (e.proxy = new Proxy(e.ctx, tc))
  const { setup: s } = n
  if (s) {
    rt()
    const r = (e.setupContext = s.length > 1 ? fo(e) : null),
      i = sn(e),
      o = en(s, e, 0, [e.props, r]),
      l = Jr(o)
    if ((it(), i(), (l || e.sp) && !pt(e) && Ws(e), l)) {
      if ((o.then(br, br), t))
        return o
          .then((c) => {
            wr(e, c, t)
          })
          .catch((c) => {
            tn(c, e, 0)
          })
      e.asyncDep = o
    } else wr(e, o, t)
  } else ao(e, t)
}
function wr(e, t, n) {
  K(t)
    ? e.type.__ssrInlineRender
      ? (e.ssrRender = t)
      : (e.render = t)
    : Z(t) && (e.setupState = wi(t)),
    ao(e, n)
}
let Sr
function ao(e, t, n) {
  const s = e.type
  if (!e.render) {
    if (!t && Sr && !s.render) {
      const r = s.template || Gs(e).template
      if (r) {
        const { isCustomElement: i, compilerOptions: o } = e.appContext.config,
          { delimiters: l, compilerOptions: c } = s,
          u = ae(ae({ isCustomElement: i, delimiters: l }, o), c)
        s.render = Sr(r, u)
      }
    }
    e.render = s.render || Ue
  }
  {
    const r = sn(e)
    rt()
    try {
      sc(e)
    } finally {
      it(), r()
    }
  }
}
const Dc = {
  get(e, t) {
    return me(e, 'get', ''), e[t]
  },
}
function fo(e) {
  const t = (n) => {
    e.exposed = n || {}
  }
  return {
    attrs: new Proxy(e.attrs, Dc),
    slots: e.slots,
    emit: e.emit,
    expose: t,
  }
}
function Kn(e) {
  return e.exposed
    ? e.exposeProxy ||
        (e.exposeProxy = new Proxy(wi(_n(e.exposed)), {
          get(t, n) {
            if (n in t) return t[n]
            if (n in Vt) return Vt[n](e)
          },
          has(t, n) {
            return n in t || n in Vt
          },
        }))
    : e.proxy
}
function $c(e, t = !0) {
  return K(e) ? e.displayName || e.name : e.name || (t && e.__name)
}
function jc(e) {
  return K(e) && '__vccOpts' in e
}
const oe = (e, t) => Rl(e, t, Ot)
function Rs(e, t, n) {
  const s = arguments.length
  return s === 2
    ? Z(t) && !j(t)
      ? Jt(t)
        ? le(e, null, [t])
        : le(e, t)
      : le(e, null, t)
    : (s > 3
        ? (n = Array.prototype.slice.call(arguments, 2))
        : s === 3 && Jt(n) && (n = [n]),
      le(e, t, n))
}
const Vc = '3.5.13'
/**
 * @vue/runtime-dom v3.5.13
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ let Os
const xr = typeof window < 'u' && window.trustedTypes
if (xr)
  try {
    Os = xr.createPolicy('vue', { createHTML: (e) => e })
  } catch {}
const uo = Os ? (e) => Os.createHTML(e) : (e) => e,
  kc = 'http://www.w3.org/2000/svg',
  Uc = 'http://www.w3.org/1998/Math/MathML',
  Ke = typeof document < 'u' ? document : null,
  Er = Ke && Ke.createElement('template'),
  Bc = {
    insert: (e, t, n) => {
      t.insertBefore(e, n || null)
    },
    remove: (e) => {
      const t = e.parentNode
      t && t.removeChild(e)
    },
    createElement: (e, t, n, s) => {
      const r =
        t === 'svg'
          ? Ke.createElementNS(kc, e)
          : t === 'mathml'
            ? Ke.createElementNS(Uc, e)
            : n
              ? Ke.createElement(e, { is: n })
              : Ke.createElement(e)
      return (
        e === 'select' &&
          s &&
          s.multiple != null &&
          r.setAttribute('multiple', s.multiple),
        r
      )
    },
    createText: (e) => Ke.createTextNode(e),
    createComment: (e) => Ke.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t
    },
    setElementText: (e, t) => {
      e.textContent = t
    },
    parentNode: (e) => e.parentNode,
    nextSibling: (e) => e.nextSibling,
    querySelector: (e) => Ke.querySelector(e),
    setScopeId(e, t) {
      e.setAttribute(t, '')
    },
    insertStaticContent(e, t, n, s, r, i) {
      const o = n ? n.previousSibling : t.lastChild
      if (r && (r === i || r.nextSibling))
        for (
          ;
          t.insertBefore(r.cloneNode(!0), n),
            !(r === i || !(r = r.nextSibling));

        );
      else {
        Er.innerHTML = uo(
          s === 'svg'
            ? `<svg>${e}</svg>`
            : s === 'mathml'
              ? `<math>${e}</math>`
              : e,
        )
        const l = Er.content
        if (s === 'svg' || s === 'mathml') {
          const c = l.firstChild
          for (; c.firstChild; ) l.appendChild(c.firstChild)
          l.removeChild(c)
        }
        t.insertBefore(l, n)
      }
      return [
        o ? o.nextSibling : t.firstChild,
        n ? n.previousSibling : t.lastChild,
      ]
    },
  },
  Je = 'transition',
  Ft = 'animation',
  zt = Symbol('_vtc'),
  ho = {
    name: String,
    type: String,
    css: { type: Boolean, default: !0 },
    duration: [String, Number, Object],
    enterFromClass: String,
    enterActiveClass: String,
    enterToClass: String,
    appearFromClass: String,
    appearActiveClass: String,
    appearToClass: String,
    leaveFromClass: String,
    leaveActiveClass: String,
    leaveToClass: String,
  },
  Wc = ae({}, Ri, ho),
  Kc = (e) => ((e.displayName = 'Transition'), (e.props = Wc), e),
  Tf = Kc((e, { slots: t }) => Rs($l, qc(e), t)),
  ct = (e, t = []) => {
    j(e) ? e.forEach((n) => n(...t)) : e && e(...t)
  },
  Cr = (e) => (e ? (j(e) ? e.some((t) => t.length > 1) : e.length > 1) : !1)
function qc(e) {
  const t = {}
  for (const w in e) w in ho || (t[w] = e[w])
  if (e.css === !1) return t
  const {
      name: n = 'v',
      type: s,
      duration: r,
      enterFromClass: i = `${n}-enter-from`,
      enterActiveClass: o = `${n}-enter-active`,
      enterToClass: l = `${n}-enter-to`,
      appearFromClass: c = i,
      appearActiveClass: u = o,
      appearToClass: a = l,
      leaveFromClass: h = `${n}-leave-from`,
      leaveActiveClass: y = `${n}-leave-active`,
      leaveToClass: v = `${n}-leave-to`,
    } = e,
    A = Gc(r),
    x = A && A[0],
    W = A && A[1],
    {
      onBeforeEnter: N,
      onEnter: $,
      onEnterCancelled: p,
      onLeave: g,
      onLeaveCancelled: O,
      onBeforeAppear: k = N,
      onAppear: U = $,
      onAppearCancelled: G = p,
    } = t,
    I = (w, B, se, ie) => {
      ;(w._enterCancelled = ie), at(w, B ? a : l), at(w, B ? u : o), se && se()
    },
    b = (w, B) => {
      ;(w._isLeaving = !1), at(w, h), at(w, v), at(w, y), B && B()
    },
    L = (w) => (B, se) => {
      const ie = w ? U : $,
        D = () => I(B, w, se)
      ct(ie, [B, D]),
        Tr(() => {
          at(B, w ? c : i), We(B, w ? a : l), Cr(ie) || Ar(B, s, x, D)
        })
    }
  return ae(t, {
    onBeforeEnter(w) {
      ct(N, [w]), We(w, i), We(w, o)
    },
    onBeforeAppear(w) {
      ct(k, [w]), We(w, c), We(w, u)
    },
    onEnter: L(!1),
    onAppear: L(!0),
    onLeave(w, B) {
      w._isLeaving = !0
      const se = () => b(w, B)
      We(w, h),
        w._enterCancelled ? (We(w, y), Mr()) : (Mr(), We(w, y)),
        Tr(() => {
          w._isLeaving && (at(w, h), We(w, v), Cr(g) || Ar(w, s, W, se))
        }),
        ct(g, [w, se])
    },
    onEnterCancelled(w) {
      I(w, !1, void 0, !0), ct(p, [w])
    },
    onAppearCancelled(w) {
      I(w, !0, void 0, !0), ct(G, [w])
    },
    onLeaveCancelled(w) {
      b(w), ct(O, [w])
    },
  })
}
function Gc(e) {
  if (e == null) return null
  if (Z(e)) return [rs(e.enter), rs(e.leave)]
  {
    const t = rs(e)
    return [t, t]
  }
}
function rs(e) {
  return Bo(e)
}
function We(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)),
    (e[zt] || (e[zt] = new Set())).add(t)
}
function at(e, t) {
  t.split(/\s+/).forEach((s) => s && e.classList.remove(s))
  const n = e[zt]
  n && (n.delete(t), n.size || (e[zt] = void 0))
}
function Tr(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e)
  })
}
let Yc = 0
function Ar(e, t, n, s) {
  const r = (e._endId = ++Yc),
    i = () => {
      r === e._endId && s()
    }
  if (n != null) return setTimeout(i, n)
  const { type: o, timeout: l, propCount: c } = Xc(e, t)
  if (!o) return s()
  const u = o + 'end'
  let a = 0
  const h = () => {
      e.removeEventListener(u, y), i()
    },
    y = (v) => {
      v.target === e && ++a >= c && h()
    }
  setTimeout(() => {
    a < c && h()
  }, l + 1),
    e.addEventListener(u, y)
}
function Xc(e, t) {
  const n = window.getComputedStyle(e),
    s = (A) => (n[A] || '').split(', '),
    r = s(`${Je}Delay`),
    i = s(`${Je}Duration`),
    o = Rr(r, i),
    l = s(`${Ft}Delay`),
    c = s(`${Ft}Duration`),
    u = Rr(l, c)
  let a = null,
    h = 0,
    y = 0
  t === Je
    ? o > 0 && ((a = Je), (h = o), (y = i.length))
    : t === Ft
      ? u > 0 && ((a = Ft), (h = u), (y = c.length))
      : ((h = Math.max(o, u)),
        (a = h > 0 ? (o > u ? Je : Ft) : null),
        (y = a ? (a === Je ? i.length : c.length) : 0))
  const v =
    a === Je && /\b(transform|all)(,|$)/.test(s(`${Je}Property`).toString())
  return { type: a, timeout: h, propCount: y, hasTransform: v }
}
function Rr(e, t) {
  for (; e.length < t.length; ) e = e.concat(e)
  return Math.max(...t.map((n, s) => Or(n) + Or(e[s])))
}
function Or(e) {
  return e === 'auto' ? 0 : Number(e.slice(0, -1).replace(',', '.')) * 1e3
}
function Mr() {
  return document.body.offsetHeight
}
function Jc(e, t, n) {
  const s = e[zt]
  s && (t = (t ? [t, ...s] : [...s]).join(' ')),
    t == null
      ? e.removeAttribute('class')
      : n
        ? e.setAttribute('class', t)
        : (e.className = t)
}
const Pn = Symbol('_vod'),
  po = Symbol('_vsh'),
  Af = {
    beforeMount(e, { value: t }, { transition: n }) {
      ;(e[Pn] = e.style.display === 'none' ? '' : e.style.display),
        n && t ? n.beforeEnter(e) : Ht(e, t)
    },
    mounted(e, { value: t }, { transition: n }) {
      n && t && n.enter(e)
    },
    updated(e, { value: t, oldValue: n }, { transition: s }) {
      !t != !n &&
        (s
          ? t
            ? (s.beforeEnter(e), Ht(e, !0), s.enter(e))
            : s.leave(e, () => {
                Ht(e, !1)
              })
          : Ht(e, t))
    },
    beforeUnmount(e, { value: t }) {
      Ht(e, t)
    },
  }
function Ht(e, t) {
  ;(e.style.display = t ? e[Pn] : 'none'), (e[po] = !t)
}
const zc = Symbol(''),
  Qc = /(^|;)\s*display\s*:/
function Zc(e, t, n) {
  const s = e.style,
    r = re(n)
  let i = !1
  if (n && !r) {
    if (t)
      if (re(t))
        for (const o of t.split(';')) {
          const l = o.slice(0, o.indexOf(':')).trim()
          n[l] == null && wn(s, l, '')
        }
      else for (const o in t) n[o] == null && wn(s, o, '')
    for (const o in n) o === 'display' && (i = !0), wn(s, o, n[o])
  } else if (r) {
    if (t !== n) {
      const o = s[zc]
      o && (n += ';' + o), (s.cssText = n), (i = Qc.test(n))
    }
  } else t && e.removeAttribute('style')
  Pn in e && ((e[Pn] = i ? s.display : ''), e[po] && (s.display = 'none'))
}
const Pr = /\s*!important$/
function wn(e, t, n) {
  if (j(n)) n.forEach((s) => wn(e, t, s))
  else if ((n == null && (n = ''), t.startsWith('--'))) e.setProperty(t, n)
  else {
    const s = ea(e, t)
    Pr.test(n)
      ? e.setProperty(st(s), n.replace(Pr, ''), 'important')
      : (e[s] = n)
  }
}
const Ir = ['Webkit', 'Moz', 'ms'],
  is = {}
function ea(e, t) {
  const n = is[t]
  if (n) return n
  let s = Ie(t)
  if (s !== 'filter' && s in e) return (is[t] = s)
  s = Ln(s)
  for (let r = 0; r < Ir.length; r++) {
    const i = Ir[r] + s
    if (i in e) return (is[t] = i)
  }
  return t
}
const Lr = 'http://www.w3.org/1999/xlink'
function Nr(e, t, n, s, r, i = Xo(t)) {
  s && t.startsWith('xlink:')
    ? n == null
      ? e.removeAttributeNS(Lr, t.slice(6, t.length))
      : e.setAttributeNS(Lr, t, n)
    : n == null || (i && !ei(n))
      ? e.removeAttribute(t)
      : e.setAttribute(t, i ? '' : He(n) ? String(n) : n)
}
function Fr(e, t, n, s, r) {
  if (t === 'innerHTML' || t === 'textContent') {
    n != null && (e[t] = t === 'innerHTML' ? uo(n) : n)
    return
  }
  const i = e.tagName
  if (t === 'value' && i !== 'PROGRESS' && !i.includes('-')) {
    const l = i === 'OPTION' ? e.getAttribute('value') || '' : e.value,
      c = n == null ? (e.type === 'checkbox' ? 'on' : '') : String(n)
    ;(l !== c || !('_value' in e)) && (e.value = c),
      n == null && e.removeAttribute(t),
      (e._value = n)
    return
  }
  let o = !1
  if (n === '' || n == null) {
    const l = typeof e[t]
    l === 'boolean'
      ? (n = ei(n))
      : n == null && l === 'string'
        ? ((n = ''), (o = !0))
        : l === 'number' && ((n = 0), (o = !0))
  }
  try {
    e[t] = n
  } catch {}
  o && e.removeAttribute(r || t)
}
function go(e, t, n, s) {
  e.addEventListener(t, n, s)
}
function ta(e, t, n, s) {
  e.removeEventListener(t, n, s)
}
const Hr = Symbol('_vei')
function na(e, t, n, s, r = null) {
  const i = e[Hr] || (e[Hr] = {}),
    o = i[t]
  if (s && o) o.value = s
  else {
    const [l, c] = sa(t)
    if (s) {
      const u = (i[t] = oa(s, r))
      go(e, l, u, c)
    } else o && (ta(e, l, o, c), (i[t] = void 0))
  }
}
const Dr = /(?:Once|Passive|Capture)$/
function sa(e) {
  let t
  if (Dr.test(e)) {
    t = {}
    let s
    for (; (s = e.match(Dr)); )
      (e = e.slice(0, e.length - s[0].length)), (t[s[0].toLowerCase()] = !0)
  }
  return [e[2] === ':' ? e.slice(3) : st(e.slice(2)), t]
}
let os = 0
const ra = Promise.resolve(),
  ia = () => os || (ra.then(() => (os = 0)), (os = Date.now()))
function oa(e, t) {
  const n = (s) => {
    if (!s._vts) s._vts = Date.now()
    else if (s._vts <= n.attached) return
    De(la(s, n.value), t, 5, [s])
  }
  return (n.value = e), (n.attached = ia()), n
}
function la(e, t) {
  if (j(t)) {
    const n = e.stopImmediatePropagation
    return (
      (e.stopImmediatePropagation = () => {
        n.call(e), (e._stopped = !0)
      }),
      t.map((s) => (r) => !r._stopped && s && s(r))
    )
  } else return t
}
const $r = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    e.charCodeAt(2) > 96 &&
    e.charCodeAt(2) < 123,
  ca = (e, t, n, s, r, i) => {
    const o = r === 'svg'
    t === 'class'
      ? Jc(e, s, o)
      : t === 'style'
        ? Zc(e, n, s)
        : Qt(t)
          ? Ps(t) || na(e, t, n, s, i)
          : (
                t[0] === '.'
                  ? ((t = t.slice(1)), !0)
                  : t[0] === '^'
                    ? ((t = t.slice(1)), !1)
                    : aa(e, t, s, o)
              )
            ? (Fr(e, t, s),
              !e.tagName.includes('-') &&
                (t === 'value' || t === 'checked' || t === 'selected') &&
                Nr(e, t, s, o, i, t !== 'value'))
            : e._isVueCE && (/[A-Z]/.test(t) || !re(s))
              ? Fr(e, Ie(t), s, i, t)
              : (t === 'true-value'
                  ? (e._trueValue = s)
                  : t === 'false-value' && (e._falseValue = s),
                Nr(e, t, s, o))
  }
function aa(e, t, n, s) {
  if (s)
    return !!(
      t === 'innerHTML' ||
      t === 'textContent' ||
      (t in e && $r(t) && K(n))
    )
  if (
    t === 'spellcheck' ||
    t === 'draggable' ||
    t === 'translate' ||
    t === 'form' ||
    (t === 'list' && e.tagName === 'INPUT') ||
    (t === 'type' && e.tagName === 'TEXTAREA')
  )
    return !1
  if (t === 'width' || t === 'height') {
    const r = e.tagName
    if (r === 'IMG' || r === 'VIDEO' || r === 'CANVAS' || r === 'SOURCE')
      return !1
  }
  return $r(t) && re(n) ? !1 : t in e
}
const jr = (e) => {
    const t = e.props['onUpdate:modelValue'] || !1
    return j(t) ? (n) => vn(t, n) : t
  },
  ls = Symbol('_assign'),
  Rf = {
    created(e, { value: t }, n) {
      ;(e.checked = xn(t, n.props.value)),
        (e[ls] = jr(n)),
        go(e, 'change', () => {
          e[ls](fa(e))
        })
    },
    beforeUpdate(e, { value: t, oldValue: n }, s) {
      ;(e[ls] = jr(s)), t !== n && (e.checked = xn(t, s.props.value))
    },
  }
function fa(e) {
  return '_value' in e ? e._value : e.value
}
const ua = ['ctrl', 'shift', 'alt', 'meta'],
  da = {
    stop: (e) => e.stopPropagation(),
    prevent: (e) => e.preventDefault(),
    self: (e) => e.target !== e.currentTarget,
    ctrl: (e) => !e.ctrlKey,
    shift: (e) => !e.shiftKey,
    alt: (e) => !e.altKey,
    meta: (e) => !e.metaKey,
    left: (e) => 'button' in e && e.button !== 0,
    middle: (e) => 'button' in e && e.button !== 1,
    right: (e) => 'button' in e && e.button !== 2,
    exact: (e, t) => ua.some((n) => e[`${n}Key`] && !t.includes(n)),
  },
  Of = (e, t) => {
    const n = e._withMods || (e._withMods = {}),
      s = t.join('.')
    return (
      n[s] ||
      (n[s] = (r, ...i) => {
        for (let o = 0; o < t.length; o++) {
          const l = da[t[o]]
          if (l && l(r, t)) return
        }
        return e(r, ...i)
      })
    )
  },
  ha = {
    esc: 'escape',
    space: ' ',
    up: 'arrow-up',
    left: 'arrow-left',
    right: 'arrow-right',
    down: 'arrow-down',
    delete: 'backspace',
  },
  Mf = (e, t) => {
    const n = e._withKeys || (e._withKeys = {}),
      s = t.join('.')
    return (
      n[s] ||
      (n[s] = (r) => {
        if (!('key' in r)) return
        const i = st(r.key)
        if (t.some((o) => o === i || ha[o] === i)) return e(r)
      })
    )
  },
  mo = ae({ patchProp: ca }, Bc)
let Bt,
  Vr = !1
function yo() {
  return Bt || (Bt = yc(mo))
}
function pa() {
  return (Bt = Vr ? Bt : vc(mo)), (Vr = !0), Bt
}
const Pf = (...e) => {
    yo().render(...e)
  },
  If = (...e) => {
    const t = yo().createApp(...e),
      { mount: n } = t
    return (
      (t.mount = (s) => {
        const r = _o(s)
        if (!r) return
        const i = t._component
        !K(i) && !i.render && !i.template && (i.template = r.innerHTML),
          r.nodeType === 1 && (r.textContent = '')
        const o = n(r, !1, vo(r))
        return (
          r instanceof Element &&
            (r.removeAttribute('v-cloak'), r.setAttribute('data-v-app', '')),
          o
        )
      }),
      t
    )
  },
  Lf = (...e) => {
    const t = pa().createApp(...e),
      { mount: n } = t
    return (
      (t.mount = (s) => {
        const r = _o(s)
        if (r) return n(r, !0, vo(r))
      }),
      t
    )
  }
function vo(e) {
  if (e instanceof SVGElement) return 'svg'
  if (typeof MathMLElement == 'function' && e instanceof MathMLElement)
    return 'mathml'
}
function _o(e) {
  return re(e) ? document.querySelector(e) : e
}
const Nf = (e, t) => {
    const n = e.__vccOpts || e
    for (const [s, r] of t) n[s] = r
    return n
  },
  ga = window.__VP_SITE_DATA__
function Js(e) {
  return si() ? (Zo(e), !0) : !1
}
function tt(e) {
  return typeof e == 'function' ? e() : bi(e)
}
const bo = typeof window < 'u' && typeof document < 'u'
typeof WorkerGlobalScope < 'u' && globalThis instanceof WorkerGlobalScope
const ma = Object.prototype.toString,
  ya = (e) => ma.call(e) === '[object Object]',
  wo = () => {},
  kr = va()
function va() {
  var e, t
  return (
    bo &&
    ((e = window == null ? void 0 : window.navigator) == null
      ? void 0
      : e.userAgent) &&
    (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) ||
      (((t = window == null ? void 0 : window.navigator) == null
        ? void 0
        : t.maxTouchPoints) > 2 &&
        /iPad|Macintosh/.test(
          window == null ? void 0 : window.navigator.userAgent,
        )))
  )
}
function _a(e, t) {
  function n(...s) {
    return new Promise((r, i) => {
      Promise.resolve(
        e(() => t.apply(this, s), { fn: t, thisArg: this, args: s }),
      )
        .then(r)
        .catch(i)
    })
  }
  return n
}
const So = (e) => e()
function ba(e = So) {
  const t = ce(!0)
  function n() {
    t.value = !1
  }
  function s() {
    t.value = !0
  }
  const r = (...i) => {
    t.value && e(...i)
  }
  return { isActive: $n(t), pause: n, resume: s, eventFilter: r }
}
function wa(e) {
  return Wn()
}
function xo(...e) {
  if (e.length !== 1) return Tl(...e)
  const t = e[0]
  return typeof t == 'function' ? $n(xl(() => ({ get: t, set: wo }))) : ce(t)
}
function Sa(e, t, n = {}) {
  const { eventFilter: s = So, ...r } = n
  return Fe(e, _a(s, t), r)
}
function xa(e, t, n = {}) {
  const { eventFilter: s, ...r } = n,
    { eventFilter: i, pause: o, resume: l, isActive: c } = ba(s)
  return {
    stop: Sa(e, t, { ...r, eventFilter: i }),
    pause: o,
    resume: l,
    isActive: c,
  }
}
function zs(e, t = !0, n) {
  wa() ? Pt(e, n) : t ? e() : jn(e)
}
const Ye = bo ? window : void 0
function Eo(e) {
  var t
  const n = tt(e)
  return (t = n == null ? void 0 : n.$el) != null ? t : n
}
function Mt(...e) {
  let t, n, s, r
  if (
    (typeof e[0] == 'string' || Array.isArray(e[0])
      ? (([n, s, r] = e), (t = Ye))
      : ([t, n, s, r] = e),
    !t)
  )
    return wo
  Array.isArray(n) || (n = [n]), Array.isArray(s) || (s = [s])
  const i = [],
    o = () => {
      i.forEach((a) => a()), (i.length = 0)
    },
    l = (a, h, y, v) => (
      a.addEventListener(h, y, v), () => a.removeEventListener(h, y, v)
    ),
    c = Fe(
      () => [Eo(t), tt(r)],
      ([a, h]) => {
        if ((o(), !a)) return
        const y = ya(h) ? { ...h } : h
        i.push(...n.flatMap((v) => s.map((A) => l(a, v, A, y))))
      },
      { immediate: !0, flush: 'post' },
    ),
    u = () => {
      c(), o()
    }
  return Js(u), u
}
function Ea(e) {
  return typeof e == 'function'
    ? e
    : typeof e == 'string'
      ? (t) => t.key === e
      : Array.isArray(e)
        ? (t) => e.includes(t.key)
        : () => !0
}
function Ff(...e) {
  let t,
    n,
    s = {}
  e.length === 3
    ? ((t = e[0]), (n = e[1]), (s = e[2]))
    : e.length === 2
      ? typeof e[1] == 'object'
        ? ((t = !0), (n = e[0]), (s = e[1]))
        : ((t = e[0]), (n = e[1]))
      : ((t = !0), (n = e[0]))
  const {
      target: r = Ye,
      eventName: i = 'keydown',
      passive: o = !1,
      dedupe: l = !1,
    } = s,
    c = Ea(t)
  return Mt(
    r,
    i,
    (a) => {
      ;(a.repeat && tt(l)) || (c(a) && n(a))
    },
    o,
  )
}
function Ca() {
  const e = ce(!1),
    t = Wn()
  return (
    t &&
      Pt(() => {
        e.value = !0
      }, t),
    e
  )
}
function Ta(e) {
  const t = Ca()
  return oe(() => (t.value, !!e()))
}
function Co(e, t = {}) {
  const { window: n = Ye } = t,
    s = Ta(() => n && 'matchMedia' in n && typeof n.matchMedia == 'function')
  let r
  const i = ce(!1),
    o = (u) => {
      i.value = u.matches
    },
    l = () => {
      r &&
        ('removeEventListener' in r
          ? r.removeEventListener('change', o)
          : r.removeListener(o))
    },
    c = Qi(() => {
      s.value &&
        (l(),
        (r = n.matchMedia(tt(e))),
        'addEventListener' in r
          ? r.addEventListener('change', o)
          : r.addListener(o),
        (i.value = r.matches))
    })
  return (
    Js(() => {
      c(), l(), (r = void 0)
    }),
    i
  )
}
const hn =
    typeof globalThis < 'u'
      ? globalThis
      : typeof window < 'u'
        ? window
        : typeof global < 'u'
          ? global
          : typeof self < 'u'
            ? self
            : {},
  pn = '__vueuse_ssr_handlers__',
  Aa = Ra()
function Ra() {
  return pn in hn || (hn[pn] = hn[pn] || {}), hn[pn]
}
function To(e, t) {
  return Aa[e] || t
}
function Qs(e) {
  return Co('(prefers-color-scheme: dark)', e)
}
function Oa(e) {
  return e == null
    ? 'any'
    : e instanceof Set
      ? 'set'
      : e instanceof Map
        ? 'map'
        : e instanceof Date
          ? 'date'
          : typeof e == 'boolean'
            ? 'boolean'
            : typeof e == 'string'
              ? 'string'
              : typeof e == 'object'
                ? 'object'
                : Number.isNaN(e)
                  ? 'any'
                  : 'number'
}
const Ma = {
    boolean: { read: (e) => e === 'true', write: (e) => String(e) },
    object: { read: (e) => JSON.parse(e), write: (e) => JSON.stringify(e) },
    number: { read: (e) => Number.parseFloat(e), write: (e) => String(e) },
    any: { read: (e) => e, write: (e) => String(e) },
    string: { read: (e) => e, write: (e) => String(e) },
    map: {
      read: (e) => new Map(JSON.parse(e)),
      write: (e) => JSON.stringify(Array.from(e.entries())),
    },
    set: {
      read: (e) => new Set(JSON.parse(e)),
      write: (e) => JSON.stringify(Array.from(e)),
    },
    date: { read: (e) => new Date(e), write: (e) => e.toISOString() },
  },
  Ur = 'vueuse-storage'
function Pa(e, t, n, s = {}) {
  var r
  const {
      flush: i = 'pre',
      deep: o = !0,
      listenToStorageChanges: l = !0,
      writeDefaults: c = !0,
      mergeDefaults: u = !1,
      shallow: a,
      window: h = Ye,
      eventFilter: y,
      onError: v = (b) => {
        console.error(b)
      },
      initOnMounted: A,
    } = s,
    x = (a ? vi : ce)(typeof t == 'function' ? t() : t)
  if (!n)
    try {
      n = To('getDefaultStorage', () => {
        var b
        return (b = Ye) == null ? void 0 : b.localStorage
      })()
    } catch (b) {
      v(b)
    }
  if (!n) return x
  const W = tt(t),
    N = Oa(W),
    $ = (r = s.serializer) != null ? r : Ma[N],
    { pause: p, resume: g } = xa(x, () => k(x.value), {
      flush: i,
      deep: o,
      eventFilter: y,
    })
  h &&
    l &&
    zs(() => {
      n instanceof Storage ? Mt(h, 'storage', G) : Mt(h, Ur, I), A && G()
    }),
    A || G()
  function O(b, L) {
    if (h) {
      const w = { key: e, oldValue: b, newValue: L, storageArea: n }
      h.dispatchEvent(
        n instanceof Storage
          ? new StorageEvent('storage', w)
          : new CustomEvent(Ur, { detail: w }),
      )
    }
  }
  function k(b) {
    try {
      const L = n.getItem(e)
      if (b == null) O(L, null), n.removeItem(e)
      else {
        const w = $.write(b)
        L !== w && (n.setItem(e, w), O(L, w))
      }
    } catch (L) {
      v(L)
    }
  }
  function U(b) {
    const L = b ? b.newValue : n.getItem(e)
    if (L == null) return c && W != null && n.setItem(e, $.write(W)), W
    if (!b && u) {
      const w = $.read(L)
      return typeof u == 'function'
        ? u(w, W)
        : N === 'object' && !Array.isArray(w)
          ? { ...W, ...w }
          : w
    } else return typeof L != 'string' ? L : $.read(L)
  }
  function G(b) {
    if (!(b && b.storageArea !== n)) {
      if (b && b.key == null) {
        x.value = W
        return
      }
      if (!(b && b.key !== e)) {
        p()
        try {
          ;(b == null ? void 0 : b.newValue) !== $.write(x.value) &&
            (x.value = U(b))
        } catch (L) {
          v(L)
        } finally {
          b ? jn(g) : g()
        }
      }
    }
  }
  function I(b) {
    G(b.detail)
  }
  return x
}
const Ia =
  '*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}'
function La(e = {}) {
  const {
      selector: t = 'html',
      attribute: n = 'class',
      initialValue: s = 'auto',
      window: r = Ye,
      storage: i,
      storageKey: o = 'vueuse-color-scheme',
      listenToStorageChanges: l = !0,
      storageRef: c,
      emitAuto: u,
      disableTransition: a = !0,
    } = e,
    h = { auto: '', light: 'light', dark: 'dark', ...(e.modes || {}) },
    y = Qs({ window: r }),
    v = oe(() => (y.value ? 'dark' : 'light')),
    A =
      c ||
      (o == null
        ? xo(s)
        : Pa(o, s, i, { window: r, listenToStorageChanges: l })),
    x = oe(() => (A.value === 'auto' ? v.value : A.value)),
    W = To('updateHTMLAttrs', (g, O, k) => {
      const U =
        typeof g == 'string'
          ? r == null
            ? void 0
            : r.document.querySelector(g)
          : Eo(g)
      if (!U) return
      const G = new Set(),
        I = new Set()
      let b = null
      if (O === 'class') {
        const w = k.split(/\s/g)
        Object.values(h)
          .flatMap((B) => (B || '').split(/\s/g))
          .filter(Boolean)
          .forEach((B) => {
            w.includes(B) ? G.add(B) : I.add(B)
          })
      } else b = { key: O, value: k }
      if (G.size === 0 && I.size === 0 && b === null) return
      let L
      a &&
        ((L = r.document.createElement('style')),
        L.appendChild(document.createTextNode(Ia)),
        r.document.head.appendChild(L))
      for (const w of G) U.classList.add(w)
      for (const w of I) U.classList.remove(w)
      b && U.setAttribute(b.key, b.value),
        a && (r.getComputedStyle(L).opacity, document.head.removeChild(L))
    })
  function N(g) {
    var O
    W(t, n, (O = h[g]) != null ? O : g)
  }
  function $(g) {
    e.onChanged ? e.onChanged(g, N) : N(g)
  }
  Fe(x, $, { flush: 'post', immediate: !0 }), zs(() => $(x.value))
  const p = oe({
    get() {
      return u ? A.value : x.value
    },
    set(g) {
      A.value = g
    },
  })
  try {
    return Object.assign(p, { store: A, system: v, state: x })
  } catch {
    return p
  }
}
function Na(e = {}) {
  const { valueDark: t = 'dark', valueLight: n = '', window: s = Ye } = e,
    r = La({
      ...e,
      onChanged: (l, c) => {
        var u
        e.onChanged
          ? (u = e.onChanged) == null || u.call(e, l === 'dark', c, l)
          : c(l)
      },
      modes: { dark: t, light: n },
    }),
    i = oe(() =>
      r.system ? r.system.value : Qs({ window: s }).value ? 'dark' : 'light',
    )
  return oe({
    get() {
      return r.value === 'dark'
    },
    set(l) {
      const c = l ? 'dark' : 'light'
      i.value === c ? (r.value = 'auto') : (r.value = c)
    },
  })
}
function cs(e) {
  return typeof Window < 'u' && e instanceof Window
    ? e.document.documentElement
    : typeof Document < 'u' && e instanceof Document
      ? e.documentElement
      : e
}
function Ao(e) {
  const t = window.getComputedStyle(e)
  if (
    t.overflowX === 'scroll' ||
    t.overflowY === 'scroll' ||
    (t.overflowX === 'auto' && e.clientWidth < e.scrollWidth) ||
    (t.overflowY === 'auto' && e.clientHeight < e.scrollHeight)
  )
    return !0
  {
    const n = e.parentNode
    return !n || n.tagName === 'BODY' ? !1 : Ao(n)
  }
}
function Fa(e) {
  const t = e || window.event,
    n = t.target
  return Ao(n)
    ? !1
    : t.touches.length > 1
      ? !0
      : (t.preventDefault && t.preventDefault(), !1)
}
const as = new WeakMap()
function Hf(e, t = !1) {
  const n = ce(t)
  let s = null,
    r = ''
  Fe(
    xo(e),
    (l) => {
      const c = cs(tt(l))
      if (c) {
        const u = c
        if (
          (as.get(u) || as.set(u, u.style.overflow),
          u.style.overflow !== 'hidden' && (r = u.style.overflow),
          u.style.overflow === 'hidden')
        )
          return (n.value = !0)
        if (n.value) return (u.style.overflow = 'hidden')
      }
    },
    { immediate: !0 },
  )
  const i = () => {
      const l = cs(tt(e))
      !l ||
        n.value ||
        (kr &&
          (s = Mt(
            l,
            'touchmove',
            (c) => {
              Fa(c)
            },
            { passive: !1 },
          )),
        (l.style.overflow = 'hidden'),
        (n.value = !0))
    },
    o = () => {
      const l = cs(tt(e))
      !l ||
        !n.value ||
        (kr && (s == null || s()),
        (l.style.overflow = r),
        as.delete(l),
        (n.value = !1))
    }
  return (
    Js(o),
    oe({
      get() {
        return n.value
      },
      set(l) {
        l ? i() : o()
      },
    })
  )
}
function Df(e = {}) {
  const { window: t = Ye, behavior: n = 'auto' } = e
  if (!t) return { x: ce(0), y: ce(0) }
  const s = ce(t.scrollX),
    r = ce(t.scrollY),
    i = oe({
      get() {
        return s.value
      },
      set(l) {
        scrollTo({ left: l, behavior: n })
      },
    }),
    o = oe({
      get() {
        return r.value
      },
      set(l) {
        scrollTo({ top: l, behavior: n })
      },
    })
  return (
    Mt(
      t,
      'scroll',
      () => {
        ;(s.value = t.scrollX), (r.value = t.scrollY)
      },
      { capture: !1, passive: !0 },
    ),
    { x: i, y: o }
  )
}
function $f(e = {}) {
  const {
      window: t = Ye,
      initialWidth: n = Number.POSITIVE_INFINITY,
      initialHeight: s = Number.POSITIVE_INFINITY,
      listenOrientation: r = !0,
      includeScrollbar: i = !0,
      type: o = 'inner',
    } = e,
    l = ce(n),
    c = ce(s),
    u = () => {
      t &&
        (o === 'outer'
          ? ((l.value = t.outerWidth), (c.value = t.outerHeight))
          : i
            ? ((l.value = t.innerWidth), (c.value = t.innerHeight))
            : ((l.value = t.document.documentElement.clientWidth),
              (c.value = t.document.documentElement.clientHeight)))
    }
  if ((u(), zs(u), Mt('resize', u, { passive: !0 }), r)) {
    const a = Co('(orientation: portrait)')
    Fe(a, () => u())
  }
  return { width: l, height: c }
}
const fs = {
  BASE_URL: '/Versakit/',
  DEV: !1,
  MODE: 'production',
  PROD: !0,
  SSR: !1,
}
var us = {}
const Ro = /^(?:[a-z]+:|\/\/)/i,
  Ha = 'vitepress-theme-appearance',
  Da = /#.*$/,
  $a = /[?#].*$/,
  ja = /(?:(^|\/)index)?\.(?:md|html)$/,
  ge = typeof document < 'u',
  Oo = {
    relativePath: '404.md',
    filePath: '',
    title: '404',
    description: 'Not Found',
    headers: [],
    frontmatter: { sidebar: !1, layout: 'page' },
    lastUpdated: 0,
    isNotFound: !0,
  }
function Va(e, t, n = !1) {
  if (t === void 0) return !1
  if (((e = Br(`/${e}`)), n)) return new RegExp(t).test(e)
  if (Br(t) !== e) return !1
  const s = t.match(Da)
  return s ? (ge ? location.hash : '') === s[0] : !0
}
function Br(e) {
  return decodeURI(e).replace($a, '').replace(ja, '$1')
}
function ka(e) {
  return Ro.test(e)
}
function Ua(e, t) {
  return (
    Object.keys((e == null ? void 0 : e.locales) || {}).find(
      (n) => n !== 'root' && !ka(n) && Va(t, `/${n}/`, !0),
    ) || 'root'
  )
}
function Ba(e, t) {
  var s, r, i, o, l, c, u
  const n = Ua(e, t)
  return Object.assign({}, e, {
    localeIndex: n,
    lang: ((s = e.locales[n]) == null ? void 0 : s.lang) ?? e.lang,
    dir: ((r = e.locales[n]) == null ? void 0 : r.dir) ?? e.dir,
    title: ((i = e.locales[n]) == null ? void 0 : i.title) ?? e.title,
    titleTemplate:
      ((o = e.locales[n]) == null ? void 0 : o.titleTemplate) ??
      e.titleTemplate,
    description:
      ((l = e.locales[n]) == null ? void 0 : l.description) ?? e.description,
    head: Po(e.head, ((c = e.locales[n]) == null ? void 0 : c.head) ?? []),
    themeConfig: {
      ...e.themeConfig,
      ...((u = e.locales[n]) == null ? void 0 : u.themeConfig),
    },
  })
}
function Mo(e, t) {
  const n = t.title || e.title,
    s = t.titleTemplate ?? e.titleTemplate
  if (typeof s == 'string' && s.includes(':title'))
    return s.replace(/:title/g, n)
  const r = Wa(e.title, s)
  return n === r.slice(3) ? n : `${n}${r}`
}
function Wa(e, t) {
  return t === !1
    ? ''
    : t === !0 || t === void 0
      ? ` | ${e}`
      : e === t
        ? ''
        : ` | ${t}`
}
function Ka(e, t) {
  const [n, s] = t
  if (n !== 'meta') return !1
  const r = Object.entries(s)[0]
  return r == null ? !1 : e.some(([i, o]) => i === n && o[r[0]] === r[1])
}
function Po(e, t) {
  return [...e.filter((n) => !Ka(t, n)), ...t]
}
const qa = /[\u0000-\u001F"#$&*+,:;<=>?[\]^`{|}\u007F]/g,
  Ga = /^[a-z]:/i
function Wr(e) {
  const t = Ga.exec(e),
    n = t ? t[0] : ''
  return (
    n +
    e
      .slice(n.length)
      .replace(qa, '_')
      .replace(/(^|\/)_+(?=[^/]*$)/, '$1')
  )
}
const ds = new Set()
function Ya(e) {
  if (ds.size === 0) {
    const n =
      (typeof process == 'object' &&
        (us == null ? void 0 : us.VITE_EXTRA_EXTENSIONS)) ||
      (fs == null ? void 0 : fs.VITE_EXTRA_EXTENSIONS) ||
      ''
    ;(
      '3g2,3gp,aac,ai,apng,au,avif,bin,bmp,cer,class,conf,crl,css,csv,dll,doc,eps,epub,exe,gif,gz,ics,ief,jar,jpe,jpeg,jpg,js,json,jsonld,m4a,man,mid,midi,mjs,mov,mp2,mp3,mp4,mpe,mpeg,mpg,mpp,oga,ogg,ogv,ogx,opus,otf,p10,p7c,p7m,p7s,pdf,png,ps,qt,roff,rtf,rtx,ser,svg,t,tif,tiff,tr,ts,tsv,ttf,txt,vtt,wav,weba,webm,webp,woff,woff2,xhtml,xml,yaml,yml,zip' +
      (n && typeof n == 'string' ? ',' + n : '')
    )
      .split(',')
      .forEach((s) => ds.add(s))
  }
  const t = e.split('.').pop()
  return t == null || !ds.has(t.toLowerCase())
}
const Xa = Symbol(),
  mt = vi(ga)
function jf(e) {
  const t = oe(() => Ba(mt.value, e.data.relativePath)),
    n = t.value.appearance,
    s =
      n === 'force-dark'
        ? ce(!0)
        : n === 'force-auto'
          ? Qs()
          : n
            ? Na({
                storageKey: Ha,
                initialValue: () => (n === 'dark' ? 'dark' : 'auto'),
                ...(typeof n == 'object' ? n : {}),
              })
            : ce(!1),
    r = ce(ge ? location.hash : '')
  return (
    ge &&
      window.addEventListener('hashchange', () => {
        r.value = location.hash
      }),
    Fe(
      () => e.data,
      () => {
        r.value = ge ? location.hash : ''
      },
    ),
    {
      site: t,
      theme: oe(() => t.value.themeConfig),
      page: oe(() => e.data),
      frontmatter: oe(() => e.data.frontmatter),
      params: oe(() => e.data.params),
      lang: oe(() => t.value.lang),
      dir: oe(() => e.data.frontmatter.dir || t.value.dir),
      localeIndex: oe(() => t.value.localeIndex || 'root'),
      title: oe(() => Mo(t.value, e.data)),
      description: oe(() => e.data.description || t.value.description),
      isDark: s,
      hash: oe(() => r.value),
    }
  )
}
function Ja() {
  const e = Rt(Xa)
  if (!e) throw new Error('vitepress data not properly injected in app')
  return e
}
function za(e, t) {
  return `${e}${t}`.replace(/\/+/g, '/')
}
function Kr(e) {
  return Ro.test(e) || !e.startsWith('/') ? e : za(mt.value.base, e)
}
function Qa(e) {
  let t = e.replace(/\.html$/, '')
  if (((t = decodeURIComponent(t)), (t = t.replace(/\/$/, '/index')), ge)) {
    const n = '/Versakit/'
    t = Wr(t.slice(n.length).replace(/\//g, '_') || 'index') + '.md'
    let s = __VP_HASH_MAP__[t.toLowerCase()]
    if (
      (s ||
        ((t = t.endsWith('_index.md')
          ? t.slice(0, -9) + '.md'
          : t.slice(0, -3) + '_index.md'),
        (s = __VP_HASH_MAP__[t.toLowerCase()])),
      !s)
    )
      return null
    t = `${n}assets/${t}.${s}.js`
  } else t = `./${Wr(t.slice(1).replace(/\//g, '_'))}.md.js`
  return t
}
let Sn = []
function Vf(e) {
  Sn.push(e),
    kn(() => {
      Sn = Sn.filter((t) => t !== e)
    })
}
function Za() {
  let e = mt.value.scrollOffset,
    t = 0,
    n = 24
  if (
    (typeof e == 'object' &&
      'padding' in e &&
      ((n = e.padding), (e = e.selector)),
    typeof e == 'number')
  )
    t = e
  else if (typeof e == 'string') t = qr(e, n)
  else if (Array.isArray(e))
    for (const s of e) {
      const r = qr(s, n)
      if (r) {
        t = r
        break
      }
    }
  return t
}
function qr(e, t) {
  const n = document.querySelector(e)
  if (!n) return 0
  const s = n.getBoundingClientRect().bottom
  return s < 0 ? 0 : s + t
}
const ef = Symbol(),
  Io = 'http://a.com',
  tf = () => ({ path: '/', component: null, data: Oo })
function kf(e, t) {
  const n = Dn(tf()),
    s = { route: n, go: r }
  async function r(l = ge ? location.href : '/') {
    var c, u
    ;(l = hs(l)),
      (await ((c = s.onBeforeRouteChange) == null ? void 0 : c.call(s, l))) !==
        !1 &&
        (ge &&
          l !== hs(location.href) &&
          (history.replaceState({ scrollPosition: window.scrollY }, ''),
          history.pushState({}, '', l)),
        await o(l),
        await ((u = s.onAfterRouteChanged) == null ? void 0 : u.call(s, l)))
  }
  let i = null
  async function o(l, c = 0, u = !1) {
    var y, v
    if (
      (await ((y = s.onBeforePageLoad) == null ? void 0 : y.call(s, l))) === !1
    )
      return
    const a = new URL(l, Io),
      h = (i = a.pathname)
    try {
      let A = await e(h)
      if (!A) throw new Error(`Page not found: ${h}`)
      if (i === h) {
        i = null
        const { default: x, __pageData: W } = A
        if (!x) throw new Error(`Invalid route component: ${x}`)
        await ((v = s.onAfterPageLoad) == null ? void 0 : v.call(s, l)),
          (n.path = ge ? h : Kr(h)),
          (n.component = _n(x)),
          (n.data = _n(W)),
          ge &&
            jn(() => {
              let N =
                mt.value.base +
                W.relativePath.replace(/(?:(^|\/)index)?\.md$/, '$1')
              if (
                (!mt.value.cleanUrls && !N.endsWith('/') && (N += '.html'),
                N !== a.pathname &&
                  ((a.pathname = N),
                  (l = N + a.search + a.hash),
                  history.replaceState({}, '', l)),
                a.hash && !c)
              ) {
                let $ = null
                try {
                  $ = document.getElementById(
                    decodeURIComponent(a.hash).slice(1),
                  )
                } catch (p) {
                  console.warn(p)
                }
                if ($) {
                  Gr($, a.hash)
                  return
                }
              }
              window.scrollTo(0, c)
            })
      }
    } catch (A) {
      if (
        (!/fetch|Page not found/.test(A.message) &&
          !/^\/404(\.html|\/)?$/.test(l) &&
          console.error(A),
        !u)
      )
        try {
          const x = await fetch(mt.value.base + 'hashmap.json')
          ;(window.__VP_HASH_MAP__ = await x.json()), await o(l, c, !0)
          return
        } catch {}
      if (i === h) {
        ;(i = null), (n.path = ge ? h : Kr(h)), (n.component = t ? _n(t) : null)
        const x = ge
          ? h
              .replace(/(^|\/)$/, '$1index')
              .replace(/(\.html)?$/, '.md')
              .replace(/^\//, '')
          : '404.md'
        n.data = { ...Oo, relativePath: x }
      }
    }
  }
  return (
    ge &&
      (history.state === null && history.replaceState({}, ''),
      window.addEventListener(
        'click',
        (l) => {
          if (
            l.defaultPrevented ||
            !(l.target instanceof Element) ||
            l.target.closest('button') ||
            l.button !== 0 ||
            l.ctrlKey ||
            l.shiftKey ||
            l.altKey ||
            l.metaKey
          )
            return
          const c = l.target.closest('a')
          if (
            !c ||
            c.closest('.vp-raw') ||
            c.hasAttribute('download') ||
            c.hasAttribute('target')
          )
            return
          const u =
            c.getAttribute('href') ??
            (c instanceof SVGAElement ? c.getAttribute('xlink:href') : null)
          if (u == null) return
          const {
              href: a,
              origin: h,
              pathname: y,
              hash: v,
              search: A,
            } = new URL(u, c.baseURI),
            x = new URL(location.href)
          h === x.origin &&
            Ya(y) &&
            (l.preventDefault(),
            y === x.pathname && A === x.search
              ? (v !== x.hash &&
                  (history.pushState({}, '', a),
                  window.dispatchEvent(
                    new HashChangeEvent('hashchange', {
                      oldURL: x.href,
                      newURL: a,
                    }),
                  )),
                v
                  ? Gr(c, v, c.classList.contains('header-anchor'))
                  : window.scrollTo(0, 0))
              : r(a))
        },
        { capture: !0 },
      ),
      window.addEventListener('popstate', async (l) => {
        var c
        l.state !== null &&
          (await o(hs(location.href), (l.state && l.state.scrollPosition) || 0),
          (c = s.onAfterRouteChanged) == null || c.call(s, location.href))
      }),
      window.addEventListener('hashchange', (l) => {
        l.preventDefault()
      })),
    s
  )
}
function nf() {
  const e = Rt(ef)
  if (!e) throw new Error('useRouter() is called without provider.')
  return e
}
function Lo() {
  return nf().route
}
function Gr(e, t, n = !1) {
  let s = null
  try {
    s = e.classList.contains('header-anchor')
      ? e
      : document.getElementById(decodeURIComponent(t).slice(1))
  } catch (r) {
    console.warn(r)
  }
  if (s) {
    let r = function () {
      !n || Math.abs(o - window.scrollY) > window.innerHeight
        ? window.scrollTo(0, o)
        : window.scrollTo({ left: 0, top: o, behavior: 'smooth' })
    }
    const i = parseInt(window.getComputedStyle(s).paddingTop, 10),
      o = window.scrollY + s.getBoundingClientRect().top - Za() + i
    requestAnimationFrame(r)
  }
}
function hs(e) {
  const t = new URL(e, Io)
  return (
    (t.pathname = t.pathname.replace(/(^|\/)index(\.html)?$/, '$1')),
    mt.value.cleanUrls
      ? (t.pathname = t.pathname.replace(/\.html$/, ''))
      : !t.pathname.endsWith('/') &&
        !t.pathname.endsWith('.html') &&
        (t.pathname += '.html'),
    t.pathname + t.search + t.hash
  )
}
const gn = () => Sn.forEach((e) => e()),
  Uf = Bs({
    name: 'VitePressContent',
    props: { as: { type: [Object, String], default: 'div' } },
    setup(e) {
      const t = Lo(),
        { frontmatter: n, site: s } = Ja()
      return (
        Fe(n, gn, { deep: !0, flush: 'post' }),
        () =>
          Rs(
            e.as,
            s.value.contentProps ?? { style: { position: 'relative' } },
            [
              t.component
                ? Rs(t.component, {
                    onVnodeMounted: gn,
                    onVnodeUpdated: gn,
                    onVnodeUnmounted: gn,
                  })
                : '404 Page Not Found',
            ],
          )
      )
    },
  }),
  sf = 'modulepreload',
  rf = function (e) {
    return '/Versakit/' + e
  },
  Yr = {},
  Bf = function (t, n, s) {
    let r = Promise.resolve()
    if (n && n.length > 0) {
      document.getElementsByTagName('link')
      const o = document.querySelector('meta[property=csp-nonce]'),
        l =
          (o == null ? void 0 : o.nonce) ||
          (o == null ? void 0 : o.getAttribute('nonce'))
      r = Promise.allSettled(
        n.map((c) => {
          if (((c = rf(c)), c in Yr)) return
          Yr[c] = !0
          const u = c.endsWith('.css'),
            a = u ? '[rel="stylesheet"]' : ''
          if (document.querySelector(`link[href="${c}"]${a}`)) return
          const h = document.createElement('link')
          if (
            ((h.rel = u ? 'stylesheet' : sf),
            u || (h.as = 'script'),
            (h.crossOrigin = ''),
            (h.href = c),
            l && h.setAttribute('nonce', l),
            document.head.appendChild(h),
            u)
          )
            return new Promise((y, v) => {
              h.addEventListener('load', y),
                h.addEventListener('error', () =>
                  v(new Error(`Unable to preload CSS for ${c}`)),
                )
            })
        }),
      )
    }
    function i(o) {
      const l = new Event('vite:preloadError', { cancelable: !0 })
      if (((l.payload = o), window.dispatchEvent(l), !l.defaultPrevented))
        throw o
    }
    return r.then((o) => {
      for (const l of o || []) l.status === 'rejected' && i(l.reason)
      return t().catch(i)
    })
  },
  Wf = Bs({
    setup(e, { slots: t }) {
      const n = ce(!1)
      return (
        Pt(() => {
          n.value = !0
        }),
        () => (n.value && t.default ? t.default() : null)
      )
    },
  })
function Kf() {
  ge &&
    window.addEventListener('click', (e) => {
      var n
      const t = e.target
      if (t.matches('.vp-code-group input')) {
        const s = (n = t.parentElement) == null ? void 0 : n.parentElement
        if (!s) return
        const r = Array.from(s.querySelectorAll('input')).indexOf(t)
        if (r < 0) return
        const i = s.querySelector('.blocks')
        if (!i) return
        const o = Array.from(i.children).find((u) =>
          u.classList.contains('active'),
        )
        if (!o) return
        const l = i.children[r]
        if (!l || o === l) return
        o.classList.remove('active'), l.classList.add('active')
        const c = s == null ? void 0 : s.querySelector(`label[for="${t.id}"]`)
        c == null || c.scrollIntoView({ block: 'nearest' })
      }
    })
}
function qf() {
  if (ge) {
    const e = new WeakMap()
    window.addEventListener('click', (t) => {
      var s
      const n = t.target
      if (n.matches('div[class*="language-"] > button.copy')) {
        const r = n.parentElement,
          i = (s = n.nextElementSibling) == null ? void 0 : s.nextElementSibling
        if (!r || !i) return
        const o = /language-(shellscript|shell|bash|sh|zsh)/.test(r.className),
          l = ['.vp-copy-ignore', '.diff.remove'],
          c = i.cloneNode(!0)
        c.querySelectorAll(l.join(',')).forEach((a) => a.remove())
        let u = c.textContent || ''
        o && (u = u.replace(/^ *(\$|>) /gm, '').trim()),
          of(u).then(() => {
            n.classList.add('copied'), clearTimeout(e.get(n))
            const a = setTimeout(() => {
              n.classList.remove('copied'), n.blur(), e.delete(n)
            }, 2e3)
            e.set(n, a)
          })
      }
    })
  }
}
async function of(e) {
  try {
    return navigator.clipboard.writeText(e)
  } catch {
    const t = document.createElement('textarea'),
      n = document.activeElement
    ;(t.value = e),
      t.setAttribute('readonly', ''),
      (t.style.contain = 'strict'),
      (t.style.position = 'absolute'),
      (t.style.left = '-9999px'),
      (t.style.fontSize = '12pt')
    const s = document.getSelection(),
      r = s ? s.rangeCount > 0 && s.getRangeAt(0) : null
    document.body.appendChild(t),
      t.select(),
      (t.selectionStart = 0),
      (t.selectionEnd = e.length),
      document.execCommand('copy'),
      document.body.removeChild(t),
      r && (s.removeAllRanges(), s.addRange(r)),
      n && n.focus()
  }
}
function Gf(e, t) {
  let n = !0,
    s = []
  const r = (i) => {
    if (n) {
      ;(n = !1),
        i.forEach((l) => {
          const c = ps(l)
          for (const u of document.head.children)
            if (u.isEqualNode(c)) {
              s.push(u)
              return
            }
        })
      return
    }
    const o = i.map(ps)
    s.forEach((l, c) => {
      const u = o.findIndex((a) =>
        a == null ? void 0 : a.isEqualNode(l ?? null),
      )
      u !== -1 ? delete o[u] : (l == null || l.remove(), delete s[c])
    }),
      o.forEach((l) => l && document.head.appendChild(l)),
      (s = [...s, ...o].filter(Boolean))
  }
  Qi(() => {
    const i = e.data,
      o = t.value,
      l = i && i.description,
      c = (i && i.frontmatter.head) || [],
      u = Mo(o, i)
    u !== document.title && (document.title = u)
    const a = l || o.description
    let h = document.querySelector('meta[name=description]')
    h
      ? h.getAttribute('content') !== a && h.setAttribute('content', a)
      : ps(['meta', { name: 'description', content: a }]),
      r(Po(o.head, cf(c)))
  })
}
function ps([e, t, n]) {
  const s = document.createElement(e)
  for (const r in t) s.setAttribute(r, t[r])
  return (
    n && (s.innerHTML = n),
    e === 'script' && t.async == null && (s.async = !1),
    s
  )
}
function lf(e) {
  return e[0] === 'meta' && e[1] && e[1].name === 'description'
}
function cf(e) {
  return e.filter((t) => !lf(t))
}
const gs = new Set(),
  No = () => document.createElement('link'),
  af = (e) => {
    const t = No()
    ;(t.rel = 'prefetch'), (t.href = e), document.head.appendChild(t)
  },
  ff = (e) => {
    const t = new XMLHttpRequest()
    t.open('GET', e, (t.withCredentials = !0)), t.send()
  }
let mn
const uf =
  ge &&
  (mn = No()) &&
  mn.relList &&
  mn.relList.supports &&
  mn.relList.supports('prefetch')
    ? af
    : ff
function Yf() {
  if (!ge || !window.IntersectionObserver) return
  let e
  if ((e = navigator.connection) && (e.saveData || /2g/.test(e.effectiveType)))
    return
  const t = window.requestIdleCallback || setTimeout
  let n = null
  const s = () => {
    n && n.disconnect(),
      (n = new IntersectionObserver((i) => {
        i.forEach((o) => {
          if (o.isIntersecting) {
            const l = o.target
            n.unobserve(l)
            const { pathname: c } = l
            if (!gs.has(c)) {
              gs.add(c)
              const u = Qa(c)
              u && uf(u)
            }
          }
        })
      })),
      t(() => {
        document.querySelectorAll('#app a').forEach((i) => {
          const { hostname: o, pathname: l } = new URL(
              i.href instanceof SVGAnimatedString ? i.href.animVal : i.href,
              i.baseURI,
            ),
            c = l.match(/\.\w+$/)
          ;(c && c[0] !== '.html') ||
            (i.target !== '_blank' &&
              o === location.hostname &&
              (l !== location.pathname ? n.observe(i) : gs.add(l)))
        })
      })
  }
  Pt(s)
  const r = Lo()
  Fe(() => r.path, s),
    kn(() => {
      n && n.disconnect()
    })
}
export {
  Ff as $,
  jn as A,
  Ni as B,
  fc as C,
  Rt as D,
  Pc as E,
  Se as F,
  bf as G,
  Ja as H,
  ka as I,
  Ya as J,
  Kr as K,
  bi as L,
  Va as M,
  Co as N,
  Qi as O,
  kn as P,
  Sf as Q,
  Xl as R,
  Za as S,
  Tf as T,
  gf as U,
  Vf as V,
  mf as W,
  Ro as X,
  Lo as Y,
  $f as Z,
  Nf as _,
  xf as a,
  Df as a0,
  ge as a1,
  $n as a2,
  pf as a3,
  Bf as a4,
  Hf as a5,
  Mf as a6,
  wf as a7,
  Ef as a8,
  Dn as a9,
  df as aa,
  yf as ab,
  de as ac,
  If as ad,
  Gf as ae,
  ef as af,
  jf as ag,
  Xa as ah,
  Uf as ai,
  Wf as aj,
  mt as ak,
  Lf as al,
  kf as am,
  Qa as an,
  Yf as ao,
  qf as ap,
  Kf as aq,
  nf as ar,
  oo as b,
  oe as c,
  Bs as d,
  Cf as e,
  Ts as f,
  _f as g,
  Rs as h,
  Fs as i,
  ce as j,
  Pt as k,
  Nl as l,
  hf as m,
  Ns as n,
  Cs as o,
  Of as p,
  le as q,
  Pf as r,
  _l as s,
  zo as t,
  lo as u,
  Af as v,
  Fe as w,
  Rf as x,
  vf as y,
  vi as z,
}
