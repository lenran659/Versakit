import {
  Fragment,
  Transition,
  computed,
  createApp,
  createBaseVNode,
  createBlock,
  createCommentVNode,
  createElementBlock,
  createStaticVNode,
  createTextVNode,
  createVNode,
  defineComponent,
  inject,
  nextTick,
  normalizeClass,
  normalizeStyle,
  onMounted,
  onUnmounted,
  openBlock,
  ref,
  renderList,
  renderSlot,
  toDisplayString,
  unref,
  watch,
  withCtx,
} from './chunk-TZZCICVN.js'
import { __commonJS, __toESM } from './chunk-5WRI5ZAA.js'

// browser-external:fs
var require_fs = __commonJS({
  'browser-external:fs'(exports, module) {
    module.exports = Object.create(
      new Proxy(
        {},
        {
          get(_, key) {
            if (
              key !== '__esModule' &&
              key !== '__proto__' &&
              key !== 'constructor' &&
              key !== 'splice'
            ) {
              console.warn(
                `Module "fs" has been externalized for browser compatibility. Cannot access "fs.${key}" in client code. See https://vite.dev/guide/troubleshooting.html#module-externalized-for-browser-compatibility for more details.`,
              )
            }
          },
        },
      ),
    )
  },
})

// ../node_modules/.pnpm/vitepress-demo-plugin@1.2.3_vitepress@1.6.3_@algolia+client-search@5.20.0_@types+node@22.10.1_ei7j6yevi6m3um6sbmyeo6guye/node_modules/vitepress-demo-plugin/dist/index.js
var import_fs = __toESM(require_fs())
var Te = (e, t) => {
  const i = e.__vccOpts || e
  for (const [n, s] of t) i[n] = s
  return i
}
var es = {}
var ts = {
  xmlns: 'http://www.w3.org/2000/svg',
  width: '24',
  height: '24',
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  'stroke-width': '2',
  'stroke-linecap': 'round',
  'stroke-linejoin': 'round',
  class: 'lucide lucide-code',
}
function is(e, t) {
  return (
    openBlock(),
    createElementBlock(
      'svg',
      ts,
      t[0] ||
        (t[0] = [
          createBaseVNode('polyline', { points: '16 18 22 12 16 6' }, null, -1),
          createBaseVNode('polyline', { points: '8 6 2 12 8 18' }, null, -1),
        ]),
    )
  )
}
var ns = Te(es, [['render', is]])
var ss = {}
var rs = {
  xmlns: 'http://www.w3.org/2000/svg',
  width: '24',
  height: '24',
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  'stroke-width': '2',
  'stroke-linecap': 'round',
  'stroke-linejoin': 'round',
  class: 'lucide lucide-code-xml',
}
function as(e, t) {
  return (
    openBlock(),
    createElementBlock(
      'svg',
      rs,
      t[0] ||
        (t[0] = [
          createBaseVNode('path', { d: 'm18 16 4-4-4-4' }, null, -1),
          createBaseVNode('path', { d: 'm6 8-4 4 4 4' }, null, -1),
          createBaseVNode('path', { d: 'm14.5 4-5 16' }, null, -1),
        ]),
    )
  )
}
var os = Te(ss, [['render', as]])
var ls = {}
var us = {
  xmlns: 'http://www.w3.org/2000/svg',
  width: '24',
  height: '24',
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  'stroke-width': '2',
  'stroke-linecap': 'round',
  'stroke-linejoin': 'round',
  class: 'lucide lucide-copy',
}
function _s(e, t) {
  return (
    openBlock(),
    createElementBlock(
      'svg',
      us,
      t[0] ||
        (t[0] = [
          createBaseVNode(
            'rect',
            {
              width: '14',
              height: '14',
              x: '8',
              y: '8',
              rx: '2',
              ry: '2',
            },
            null,
            -1,
          ),
          createBaseVNode(
            'path',
            { d: 'M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2' },
            null,
            -1,
          ),
        ]),
    )
  )
}
var cs = Te(ls, [['render', _s]])
var ps = {}
var fs = {
  xmlns: 'http://www.w3.org/2000/svg',
  width: '16',
  height: '16',
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  'stroke-width': '2',
  'stroke-linecap': 'round',
  'stroke-linejoin': 'round',
  class: 'lucide lucide-arrow-up-from-line',
}
function hs(e, t) {
  return (
    openBlock(),
    createElementBlock(
      'svg',
      fs,
      t[0] ||
        (t[0] = [
          createBaseVNode('path', { d: 'm18 9-6-6-6 6' }, null, -1),
          createBaseVNode('path', { d: 'M12 3v14' }, null, -1),
          createBaseVNode('path', { d: 'M5 21h14' }, null, -1),
        ]),
    )
  )
}
var ds = Te(ps, [['render', hs]])
function gs(e) {
  return e === 'vue'
    ? '/src/Demo.vue'
    : e === 'react'
      ? '/src/Demo.tsx'
      : 'index.html'
}
var W = ((e) => ((e.VUE = 'vue'), (e.REACT = 'react'), (e.HTML = 'html'), e))(
  W || {},
)
var ye = ((e) => (
  (e.STACKBLITZ = 'stackblitz'), (e.CODESANDBOX = 'codesandbox'), e
))(ye || {})
var en = 'vitepress-demo'
var tn = 'This is a demo from vitepress-demo-plugin'
var ft = {}
var nn = { exports: {} }
;(function (e) {
  var t = (function () {
    var i = String.fromCharCode,
      n = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
      s = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$',
      l = {}
    function u(o, c) {
      if (!l[o]) {
        l[o] = {}
        for (var g = 0; g < o.length; g++) l[o][o.charAt(g)] = g
      }
      return l[o][c]
    }
    var r = {
      compressToBase64: function (o) {
        if (o == null) return ''
        var c = r._compress(o, 6, function (g) {
          return n.charAt(g)
        })
        switch (c.length % 4) {
          default:
          case 0:
            return c
          case 1:
            return c + '==='
          case 2:
            return c + '=='
          case 3:
            return c + '='
        }
      },
      decompressFromBase64: function (o) {
        return o == null
          ? ''
          : o == ''
            ? null
            : r._decompress(o.length, 32, function (c) {
                return u(n, o.charAt(c))
              })
      },
      compressToUTF16: function (o) {
        return o == null
          ? ''
          : r._compress(o, 15, function (c) {
              return i(c + 32)
            }) + ' '
      },
      decompressFromUTF16: function (o) {
        return o == null
          ? ''
          : o == ''
            ? null
            : r._decompress(o.length, 16384, function (c) {
                return o.charCodeAt(c) - 32
              })
      },
      compressToUint8Array: function (o) {
        for (
          var c = r.compress(o),
            g = new Uint8Array(c.length * 2),
            h = 0,
            m = c.length;
          h < m;
          h++
        ) {
          var S = c.charCodeAt(h)
          ;(g[h * 2] = S >>> 8), (g[h * 2 + 1] = S % 256)
        }
        return g
      },
      decompressFromUint8Array: function (o) {
        if (o == null) return r.decompress(o)
        for (var c = new Array(o.length / 2), g = 0, h = c.length; g < h; g++)
          c[g] = o[g * 2] * 256 + o[g * 2 + 1]
        var m = []
        return (
          c.forEach(function (S) {
            m.push(i(S))
          }),
          r.decompress(m.join(''))
        )
      },
      compressToEncodedURIComponent: function (o) {
        return o == null
          ? ''
          : r._compress(o, 6, function (c) {
              return s.charAt(c)
            })
      },
      decompressFromEncodedURIComponent: function (o) {
        return o == null
          ? ''
          : o == ''
            ? null
            : ((o = o.replace(/ /g, '+')),
              r._decompress(o.length, 32, function (c) {
                return u(s, o.charAt(c))
              }))
      },
      compress: function (o) {
        return r._compress(o, 16, function (c) {
          return i(c)
        })
      },
      _compress: function (o, c, g) {
        if (o == null) return ''
        var h,
          m,
          S = {},
          C = {},
          L = '',
          d = '',
          _ = '',
          b = 2,
          A = 3,
          x = 2,
          k = [],
          p = 0,
          v = 0,
          f
        for (f = 0; f < o.length; f += 1)
          if (
            ((L = o.charAt(f)),
            Object.prototype.hasOwnProperty.call(S, L) ||
              ((S[L] = A++), (C[L] = true)),
            (d = _ + L),
            Object.prototype.hasOwnProperty.call(S, d))
          )
            _ = d
          else {
            if (Object.prototype.hasOwnProperty.call(C, _)) {
              if (_.charCodeAt(0) < 256) {
                for (h = 0; h < x; h++)
                  (p = p << 1),
                    v == c - 1 ? ((v = 0), k.push(g(p)), (p = 0)) : v++
                for (m = _.charCodeAt(0), h = 0; h < 8; h++)
                  (p = (p << 1) | (m & 1)),
                    v == c - 1 ? ((v = 0), k.push(g(p)), (p = 0)) : v++,
                    (m = m >> 1)
              } else {
                for (m = 1, h = 0; h < x; h++)
                  (p = (p << 1) | m),
                    v == c - 1 ? ((v = 0), k.push(g(p)), (p = 0)) : v++,
                    (m = 0)
                for (m = _.charCodeAt(0), h = 0; h < 16; h++)
                  (p = (p << 1) | (m & 1)),
                    v == c - 1 ? ((v = 0), k.push(g(p)), (p = 0)) : v++,
                    (m = m >> 1)
              }
              b--, b == 0 && ((b = Math.pow(2, x)), x++), delete C[_]
            } else
              for (m = S[_], h = 0; h < x; h++)
                (p = (p << 1) | (m & 1)),
                  v == c - 1 ? ((v = 0), k.push(g(p)), (p = 0)) : v++,
                  (m = m >> 1)
            b--,
              b == 0 && ((b = Math.pow(2, x)), x++),
              (S[d] = A++),
              (_ = String(L))
          }
        if (_ !== '') {
          if (Object.prototype.hasOwnProperty.call(C, _)) {
            if (_.charCodeAt(0) < 256) {
              for (h = 0; h < x; h++)
                (p = p << 1),
                  v == c - 1 ? ((v = 0), k.push(g(p)), (p = 0)) : v++
              for (m = _.charCodeAt(0), h = 0; h < 8; h++)
                (p = (p << 1) | (m & 1)),
                  v == c - 1 ? ((v = 0), k.push(g(p)), (p = 0)) : v++,
                  (m = m >> 1)
            } else {
              for (m = 1, h = 0; h < x; h++)
                (p = (p << 1) | m),
                  v == c - 1 ? ((v = 0), k.push(g(p)), (p = 0)) : v++,
                  (m = 0)
              for (m = _.charCodeAt(0), h = 0; h < 16; h++)
                (p = (p << 1) | (m & 1)),
                  v == c - 1 ? ((v = 0), k.push(g(p)), (p = 0)) : v++,
                  (m = m >> 1)
            }
            b--, b == 0 && ((b = Math.pow(2, x)), x++), delete C[_]
          } else
            for (m = S[_], h = 0; h < x; h++)
              (p = (p << 1) | (m & 1)),
                v == c - 1 ? ((v = 0), k.push(g(p)), (p = 0)) : v++,
                (m = m >> 1)
          b--, b == 0 && ((b = Math.pow(2, x)), x++)
        }
        for (m = 2, h = 0; h < x; h++)
          (p = (p << 1) | (m & 1)),
            v == c - 1 ? ((v = 0), k.push(g(p)), (p = 0)) : v++,
            (m = m >> 1)
        for (;;)
          if (((p = p << 1), v == c - 1)) {
            k.push(g(p))
            break
          } else v++
        return k.join('')
      },
      decompress: function (o) {
        return o == null
          ? ''
          : o == ''
            ? null
            : r._decompress(o.length, 32768, function (c) {
                return o.charCodeAt(c)
              })
      },
      _decompress: function (o, c, g) {
        var h = [],
          m = 4,
          S = 4,
          C = 3,
          L = '',
          d = [],
          _,
          b,
          A,
          x,
          k,
          p,
          v,
          f = { val: g(0), position: c, index: 1 }
        for (_ = 0; _ < 3; _ += 1) h[_] = _
        for (A = 0, k = Math.pow(2, 2), p = 1; p != k; )
          (x = f.val & f.position),
            (f.position >>= 1),
            f.position == 0 && ((f.position = c), (f.val = g(f.index++))),
            (A |= (x > 0 ? 1 : 0) * p),
            (p <<= 1)
        switch (A) {
          case 0:
            for (A = 0, k = Math.pow(2, 8), p = 1; p != k; )
              (x = f.val & f.position),
                (f.position >>= 1),
                f.position == 0 && ((f.position = c), (f.val = g(f.index++))),
                (A |= (x > 0 ? 1 : 0) * p),
                (p <<= 1)
            v = i(A)
            break
          case 1:
            for (A = 0, k = Math.pow(2, 16), p = 1; p != k; )
              (x = f.val & f.position),
                (f.position >>= 1),
                f.position == 0 && ((f.position = c), (f.val = g(f.index++))),
                (A |= (x > 0 ? 1 : 0) * p),
                (p <<= 1)
            v = i(A)
            break
          case 2:
            return ''
        }
        for (h[3] = v, b = v, d.push(v); ; ) {
          if (f.index > o) return ''
          for (A = 0, k = Math.pow(2, C), p = 1; p != k; )
            (x = f.val & f.position),
              (f.position >>= 1),
              f.position == 0 && ((f.position = c), (f.val = g(f.index++))),
              (A |= (x > 0 ? 1 : 0) * p),
              (p <<= 1)
          switch ((v = A)) {
            case 0:
              for (A = 0, k = Math.pow(2, 8), p = 1; p != k; )
                (x = f.val & f.position),
                  (f.position >>= 1),
                  f.position == 0 && ((f.position = c), (f.val = g(f.index++))),
                  (A |= (x > 0 ? 1 : 0) * p),
                  (p <<= 1)
              ;(h[S++] = i(A)), (v = S - 1), m--
              break
            case 1:
              for (A = 0, k = Math.pow(2, 16), p = 1; p != k; )
                (x = f.val & f.position),
                  (f.position >>= 1),
                  f.position == 0 && ((f.position = c), (f.val = g(f.index++))),
                  (A |= (x > 0 ? 1 : 0) * p),
                  (p <<= 1)
              ;(h[S++] = i(A)), (v = S - 1), m--
              break
            case 2:
              return d.join('')
          }
          if ((m == 0 && ((m = Math.pow(2, C)), C++), h[v])) L = h[v]
          else if (v === S) L = b + b.charAt(0)
          else return null
          d.push(L),
            (h[S++] = b + L.charAt(0)),
            m--,
            (b = L),
            m == 0 && ((m = Math.pow(2, C)), C++)
        }
      },
    }
    return r
  })()
  e != null
    ? (e.exports = t)
    : typeof angular < 'u' &&
      angular != null &&
      angular.module('LZString', []).factory('LZString', function () {
        return t
      })
})(nn)
Object.defineProperty(ft, '__esModule', { value: true })
ft.getParameters = void 0
var ms = nn.exports
function bs(e) {
  return ms
    .compressToBase64(e)
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '')
}
function vs(e) {
  return bs(JSON.stringify(e))
}
ft.getParameters = vs
var ht = void 0
var ys = ft
ht = ys.getParameters
var sn = { exports: {} }
var We = {}
var Je = { exports: {} }
var Ot = {}
var kt = {}
var pi
function Ht() {
  if (pi) return kt
  pi = 1
  function e(n) {
    ;(this.__parent = n),
      (this.__character_count = 0),
      (this.__indent_count = -1),
      (this.__alignment_count = 0),
      (this.__wrap_point_index = 0),
      (this.__wrap_point_character_count = 0),
      (this.__wrap_point_indent_count = -1),
      (this.__wrap_point_alignment_count = 0),
      (this.__items = [])
  }
  ;(e.prototype.clone_empty = function () {
    var n = new e(this.__parent)
    return n.set_indent(this.__indent_count, this.__alignment_count), n
  }),
    (e.prototype.item = function (n) {
      return n < 0 ? this.__items[this.__items.length + n] : this.__items[n]
    }),
    (e.prototype.has_match = function (n) {
      for (var s = this.__items.length - 1; s >= 0; s--)
        if (this.__items[s].match(n)) return true
      return false
    }),
    (e.prototype.set_indent = function (n, s) {
      this.is_empty() &&
        ((this.__indent_count = n || 0),
        (this.__alignment_count = s || 0),
        (this.__character_count = this.__parent.get_indent_size(
          this.__indent_count,
          this.__alignment_count,
        )))
    }),
    (e.prototype._set_wrap_point = function () {
      this.__parent.wrap_line_length &&
        ((this.__wrap_point_index = this.__items.length),
        (this.__wrap_point_character_count = this.__character_count),
        (this.__wrap_point_indent_count =
          this.__parent.next_line.__indent_count),
        (this.__wrap_point_alignment_count =
          this.__parent.next_line.__alignment_count))
    }),
    (e.prototype._should_wrap = function () {
      return (
        this.__wrap_point_index &&
        this.__character_count > this.__parent.wrap_line_length &&
        this.__wrap_point_character_count >
          this.__parent.next_line.__character_count
      )
    }),
    (e.prototype._allow_wrap = function () {
      if (this._should_wrap()) {
        this.__parent.add_new_line()
        var n = this.__parent.current_line
        return (
          n.set_indent(
            this.__wrap_point_indent_count,
            this.__wrap_point_alignment_count,
          ),
          (n.__items = this.__items.slice(this.__wrap_point_index)),
          (this.__items = this.__items.slice(0, this.__wrap_point_index)),
          (n.__character_count +=
            this.__character_count - this.__wrap_point_character_count),
          (this.__character_count = this.__wrap_point_character_count),
          n.__items[0] === ' ' &&
            (n.__items.splice(0, 1), (n.__character_count -= 1)),
          true
        )
      }
      return false
    }),
    (e.prototype.is_empty = function () {
      return this.__items.length === 0
    }),
    (e.prototype.last = function () {
      return this.is_empty() ? null : this.__items[this.__items.length - 1]
    }),
    (e.prototype.push = function (n) {
      this.__items.push(n)
      var s = n.lastIndexOf(`
`)
      s !== -1
        ? (this.__character_count = n.length - s)
        : (this.__character_count += n.length)
    }),
    (e.prototype.pop = function () {
      var n = null
      return (
        this.is_empty() ||
          ((n = this.__items.pop()), (this.__character_count -= n.length)),
        n
      )
    }),
    (e.prototype._remove_indent = function () {
      this.__indent_count > 0 &&
        ((this.__indent_count -= 1),
        (this.__character_count -= this.__parent.indent_size))
    }),
    (e.prototype._remove_wrap_indent = function () {
      this.__wrap_point_indent_count > 0 &&
        (this.__wrap_point_indent_count -= 1)
    }),
    (e.prototype.trim = function () {
      for (; this.last() === ' '; )
        this.__items.pop(), (this.__character_count -= 1)
    }),
    (e.prototype.toString = function () {
      var n = ''
      return (
        this.is_empty()
          ? this.__parent.indent_empty_lines &&
            (n = this.__parent.get_indent_string(this.__indent_count))
          : ((n = this.__parent.get_indent_string(
              this.__indent_count,
              this.__alignment_count,
            )),
            (n += this.__items.join(''))),
        n
      )
    })
  function t(n, s) {
    ;(this.__cache = ['']),
      (this.__indent_size = n.indent_size),
      (this.__indent_string = n.indent_char),
      n.indent_with_tabs ||
        (this.__indent_string = new Array(n.indent_size + 1).join(
          n.indent_char,
        )),
      (s = s || ''),
      n.indent_level > 0 &&
        (s = new Array(n.indent_level + 1).join(this.__indent_string)),
      (this.__base_string = s),
      (this.__base_string_length = s.length)
  }
  ;(t.prototype.get_indent_size = function (n, s) {
    var l = this.__base_string_length
    return (
      (s = s || 0), n < 0 && (l = 0), (l += n * this.__indent_size), (l += s), l
    )
  }),
    (t.prototype.get_indent_string = function (n, s) {
      var l = this.__base_string
      return (
        (s = s || 0),
        n < 0 && ((n = 0), (l = '')),
        (s += n * this.__indent_size),
        this.__ensure_cache(s),
        (l += this.__cache[s]),
        l
      )
    }),
    (t.prototype.__ensure_cache = function (n) {
      for (; n >= this.__cache.length; ) this.__add_column()
    }),
    (t.prototype.__add_column = function () {
      var n = this.__cache.length,
        s = 0,
        l = ''
      this.__indent_size &&
        n >= this.__indent_size &&
        ((s = Math.floor(n / this.__indent_size)),
        (n -= s * this.__indent_size),
        (l = new Array(s + 1).join(this.__indent_string))),
        n && (l += new Array(n + 1).join(' ')),
        this.__cache.push(l)
    })
  function i(n, s) {
    ;(this.__indent_cache = new t(n, s)),
      (this.raw = false),
      (this._end_with_newline = n.end_with_newline),
      (this.indent_size = n.indent_size),
      (this.wrap_line_length = n.wrap_line_length),
      (this.indent_empty_lines = n.indent_empty_lines),
      (this.__lines = []),
      (this.previous_line = null),
      (this.current_line = null),
      (this.next_line = new e(this)),
      (this.space_before_token = false),
      (this.non_breaking_space = false),
      (this.previous_token_wrapped = false),
      this.__add_outputline()
  }
  return (
    (i.prototype.__add_outputline = function () {
      ;(this.previous_line = this.current_line),
        (this.current_line = this.next_line.clone_empty()),
        this.__lines.push(this.current_line)
    }),
    (i.prototype.get_line_number = function () {
      return this.__lines.length
    }),
    (i.prototype.get_indent_string = function (n, s) {
      return this.__indent_cache.get_indent_string(n, s)
    }),
    (i.prototype.get_indent_size = function (n, s) {
      return this.__indent_cache.get_indent_size(n, s)
    }),
    (i.prototype.is_empty = function () {
      return !this.previous_line && this.current_line.is_empty()
    }),
    (i.prototype.add_new_line = function (n) {
      return this.is_empty() || (!n && this.just_added_newline())
        ? false
        : (this.raw || this.__add_outputline(), true)
    }),
    (i.prototype.get_code = function (n) {
      this.trim(true)
      var s = this.current_line.pop()
      s &&
        (s[s.length - 1] ===
          `
` && (s = s.replace(/\n+$/g, '')),
        this.current_line.push(s)),
        this._end_with_newline && this.__add_outputline()
      var l = this.__lines.join(`
`)
      return (
        n !==
          `
` && (l = l.replace(/[\n]/g, n)),
        l
      )
    }),
    (i.prototype.set_wrap_point = function () {
      this.current_line._set_wrap_point()
    }),
    (i.prototype.set_indent = function (n, s) {
      return (
        (n = n || 0),
        (s = s || 0),
        this.next_line.set_indent(n, s),
        this.__lines.length > 1
          ? (this.current_line.set_indent(n, s), true)
          : (this.current_line.set_indent(), false)
      )
    }),
    (i.prototype.add_raw_token = function (n) {
      for (var s = 0; s < n.newlines; s++) this.__add_outputline()
      this.current_line.set_indent(-1),
        this.current_line.push(n.whitespace_before),
        this.current_line.push(n.text),
        (this.space_before_token = false),
        (this.non_breaking_space = false),
        (this.previous_token_wrapped = false)
    }),
    (i.prototype.add_token = function (n) {
      this.__add_space_before_token(),
        this.current_line.push(n),
        (this.space_before_token = false),
        (this.non_breaking_space = false),
        (this.previous_token_wrapped = this.current_line._allow_wrap())
    }),
    (i.prototype.__add_space_before_token = function () {
      this.space_before_token &&
        !this.just_added_newline() &&
        (this.non_breaking_space || this.set_wrap_point(),
        this.current_line.push(' '))
    }),
    (i.prototype.remove_indent = function (n) {
      for (var s = this.__lines.length; n < s; )
        this.__lines[n]._remove_indent(), n++
      this.current_line._remove_wrap_indent()
    }),
    (i.prototype.trim = function (n) {
      for (
        n = n === void 0 ? false : n, this.current_line.trim();
        n && this.__lines.length > 1 && this.current_line.is_empty();

      )
        this.__lines.pop(),
          (this.current_line = this.__lines[this.__lines.length - 1]),
          this.current_line.trim()
      this.previous_line =
        this.__lines.length > 1 ? this.__lines[this.__lines.length - 2] : null
    }),
    (i.prototype.just_added_newline = function () {
      return this.current_line.is_empty()
    }),
    (i.prototype.just_added_blankline = function () {
      return (
        this.is_empty() ||
        (this.current_line.is_empty() && this.previous_line.is_empty())
      )
    }),
    (i.prototype.ensure_empty_line_above = function (n, s) {
      for (var l = this.__lines.length - 2; l >= 0; ) {
        var u = this.__lines[l]
        if (u.is_empty()) break
        if (u.item(0).indexOf(n) !== 0 && u.item(-1) !== s) {
          this.__lines.splice(l + 1, 0, new e(this)),
            (this.previous_line = this.__lines[this.__lines.length - 2])
          break
        }
        l--
      }
    }),
    (kt.Output = i),
    kt
  )
}
var St = {}
var fi
function rn() {
  if (fi) return St
  fi = 1
  function e(t, i, n, s) {
    ;(this.type = t),
      (this.text = i),
      (this.comments_before = null),
      (this.newlines = n || 0),
      (this.whitespace_before = s || ''),
      (this.parent = null),
      (this.next = null),
      (this.previous = null),
      (this.opened = null),
      (this.closed = null),
      (this.directives = null)
  }
  return (St.Token = e), St
}
var At = {}
var hi
function an() {
  return (
    hi ||
      ((hi = 1),
      (function (e) {
        var t = '\\x23\\x24\\x40\\x41-\\x5a\\x5f\\x61-\\x7a',
          i = '\\x24\\x30-\\x39\\x41-\\x5a\\x5f\\x61-\\x7a',
          n =
            '\\xaa\\xb5\\xba\\xc0-\\xd6\\xd8-\\xf6\\xf8-\\u02c1\\u02c6-\\u02d1\\u02e0-\\u02e4\\u02ec\\u02ee\\u0370-\\u0374\\u0376\\u0377\\u037a-\\u037d\\u0386\\u0388-\\u038a\\u038c\\u038e-\\u03a1\\u03a3-\\u03f5\\u03f7-\\u0481\\u048a-\\u0527\\u0531-\\u0556\\u0559\\u0561-\\u0587\\u05d0-\\u05ea\\u05f0-\\u05f2\\u0620-\\u064a\\u066e\\u066f\\u0671-\\u06d3\\u06d5\\u06e5\\u06e6\\u06ee\\u06ef\\u06fa-\\u06fc\\u06ff\\u0710\\u0712-\\u072f\\u074d-\\u07a5\\u07b1\\u07ca-\\u07ea\\u07f4\\u07f5\\u07fa\\u0800-\\u0815\\u081a\\u0824\\u0828\\u0840-\\u0858\\u08a0\\u08a2-\\u08ac\\u0904-\\u0939\\u093d\\u0950\\u0958-\\u0961\\u0971-\\u0977\\u0979-\\u097f\\u0985-\\u098c\\u098f\\u0990\\u0993-\\u09a8\\u09aa-\\u09b0\\u09b2\\u09b6-\\u09b9\\u09bd\\u09ce\\u09dc\\u09dd\\u09df-\\u09e1\\u09f0\\u09f1\\u0a05-\\u0a0a\\u0a0f\\u0a10\\u0a13-\\u0a28\\u0a2a-\\u0a30\\u0a32\\u0a33\\u0a35\\u0a36\\u0a38\\u0a39\\u0a59-\\u0a5c\\u0a5e\\u0a72-\\u0a74\\u0a85-\\u0a8d\\u0a8f-\\u0a91\\u0a93-\\u0aa8\\u0aaa-\\u0ab0\\u0ab2\\u0ab3\\u0ab5-\\u0ab9\\u0abd\\u0ad0\\u0ae0\\u0ae1\\u0b05-\\u0b0c\\u0b0f\\u0b10\\u0b13-\\u0b28\\u0b2a-\\u0b30\\u0b32\\u0b33\\u0b35-\\u0b39\\u0b3d\\u0b5c\\u0b5d\\u0b5f-\\u0b61\\u0b71\\u0b83\\u0b85-\\u0b8a\\u0b8e-\\u0b90\\u0b92-\\u0b95\\u0b99\\u0b9a\\u0b9c\\u0b9e\\u0b9f\\u0ba3\\u0ba4\\u0ba8-\\u0baa\\u0bae-\\u0bb9\\u0bd0\\u0c05-\\u0c0c\\u0c0e-\\u0c10\\u0c12-\\u0c28\\u0c2a-\\u0c33\\u0c35-\\u0c39\\u0c3d\\u0c58\\u0c59\\u0c60\\u0c61\\u0c85-\\u0c8c\\u0c8e-\\u0c90\\u0c92-\\u0ca8\\u0caa-\\u0cb3\\u0cb5-\\u0cb9\\u0cbd\\u0cde\\u0ce0\\u0ce1\\u0cf1\\u0cf2\\u0d05-\\u0d0c\\u0d0e-\\u0d10\\u0d12-\\u0d3a\\u0d3d\\u0d4e\\u0d60\\u0d61\\u0d7a-\\u0d7f\\u0d85-\\u0d96\\u0d9a-\\u0db1\\u0db3-\\u0dbb\\u0dbd\\u0dc0-\\u0dc6\\u0e01-\\u0e30\\u0e32\\u0e33\\u0e40-\\u0e46\\u0e81\\u0e82\\u0e84\\u0e87\\u0e88\\u0e8a\\u0e8d\\u0e94-\\u0e97\\u0e99-\\u0e9f\\u0ea1-\\u0ea3\\u0ea5\\u0ea7\\u0eaa\\u0eab\\u0ead-\\u0eb0\\u0eb2\\u0eb3\\u0ebd\\u0ec0-\\u0ec4\\u0ec6\\u0edc-\\u0edf\\u0f00\\u0f40-\\u0f47\\u0f49-\\u0f6c\\u0f88-\\u0f8c\\u1000-\\u102a\\u103f\\u1050-\\u1055\\u105a-\\u105d\\u1061\\u1065\\u1066\\u106e-\\u1070\\u1075-\\u1081\\u108e\\u10a0-\\u10c5\\u10c7\\u10cd\\u10d0-\\u10fa\\u10fc-\\u1248\\u124a-\\u124d\\u1250-\\u1256\\u1258\\u125a-\\u125d\\u1260-\\u1288\\u128a-\\u128d\\u1290-\\u12b0\\u12b2-\\u12b5\\u12b8-\\u12be\\u12c0\\u12c2-\\u12c5\\u12c8-\\u12d6\\u12d8-\\u1310\\u1312-\\u1315\\u1318-\\u135a\\u1380-\\u138f\\u13a0-\\u13f4\\u1401-\\u166c\\u166f-\\u167f\\u1681-\\u169a\\u16a0-\\u16ea\\u16ee-\\u16f0\\u1700-\\u170c\\u170e-\\u1711\\u1720-\\u1731\\u1740-\\u1751\\u1760-\\u176c\\u176e-\\u1770\\u1780-\\u17b3\\u17d7\\u17dc\\u1820-\\u1877\\u1880-\\u18a8\\u18aa\\u18b0-\\u18f5\\u1900-\\u191c\\u1950-\\u196d\\u1970-\\u1974\\u1980-\\u19ab\\u19c1-\\u19c7\\u1a00-\\u1a16\\u1a20-\\u1a54\\u1aa7\\u1b05-\\u1b33\\u1b45-\\u1b4b\\u1b83-\\u1ba0\\u1bae\\u1baf\\u1bba-\\u1be5\\u1c00-\\u1c23\\u1c4d-\\u1c4f\\u1c5a-\\u1c7d\\u1ce9-\\u1cec\\u1cee-\\u1cf1\\u1cf5\\u1cf6\\u1d00-\\u1dbf\\u1e00-\\u1f15\\u1f18-\\u1f1d\\u1f20-\\u1f45\\u1f48-\\u1f4d\\u1f50-\\u1f57\\u1f59\\u1f5b\\u1f5d\\u1f5f-\\u1f7d\\u1f80-\\u1fb4\\u1fb6-\\u1fbc\\u1fbe\\u1fc2-\\u1fc4\\u1fc6-\\u1fcc\\u1fd0-\\u1fd3\\u1fd6-\\u1fdb\\u1fe0-\\u1fec\\u1ff2-\\u1ff4\\u1ff6-\\u1ffc\\u2071\\u207f\\u2090-\\u209c\\u2102\\u2107\\u210a-\\u2113\\u2115\\u2119-\\u211d\\u2124\\u2126\\u2128\\u212a-\\u212d\\u212f-\\u2139\\u213c-\\u213f\\u2145-\\u2149\\u214e\\u2160-\\u2188\\u2c00-\\u2c2e\\u2c30-\\u2c5e\\u2c60-\\u2ce4\\u2ceb-\\u2cee\\u2cf2\\u2cf3\\u2d00-\\u2d25\\u2d27\\u2d2d\\u2d30-\\u2d67\\u2d6f\\u2d80-\\u2d96\\u2da0-\\u2da6\\u2da8-\\u2dae\\u2db0-\\u2db6\\u2db8-\\u2dbe\\u2dc0-\\u2dc6\\u2dc8-\\u2dce\\u2dd0-\\u2dd6\\u2dd8-\\u2dde\\u2e2f\\u3005-\\u3007\\u3021-\\u3029\\u3031-\\u3035\\u3038-\\u303c\\u3041-\\u3096\\u309d-\\u309f\\u30a1-\\u30fa\\u30fc-\\u30ff\\u3105-\\u312d\\u3131-\\u318e\\u31a0-\\u31ba\\u31f0-\\u31ff\\u3400-\\u4db5\\u4e00-\\u9fcc\\ua000-\\ua48c\\ua4d0-\\ua4fd\\ua500-\\ua60c\\ua610-\\ua61f\\ua62a\\ua62b\\ua640-\\ua66e\\ua67f-\\ua697\\ua6a0-\\ua6ef\\ua717-\\ua71f\\ua722-\\ua788\\ua78b-\\ua78e\\ua790-\\ua793\\ua7a0-\\ua7aa\\ua7f8-\\ua801\\ua803-\\ua805\\ua807-\\ua80a\\ua80c-\\ua822\\ua840-\\ua873\\ua882-\\ua8b3\\ua8f2-\\ua8f7\\ua8fb\\ua90a-\\ua925\\ua930-\\ua946\\ua960-\\ua97c\\ua984-\\ua9b2\\ua9cf\\uaa00-\\uaa28\\uaa40-\\uaa42\\uaa44-\\uaa4b\\uaa60-\\uaa76\\uaa7a\\uaa80-\\uaaaf\\uaab1\\uaab5\\uaab6\\uaab9-\\uaabd\\uaac0\\uaac2\\uaadb-\\uaadd\\uaae0-\\uaaea\\uaaf2-\\uaaf4\\uab01-\\uab06\\uab09-\\uab0e\\uab11-\\uab16\\uab20-\\uab26\\uab28-\\uab2e\\uabc0-\\uabe2\\uac00-\\ud7a3\\ud7b0-\\ud7c6\\ud7cb-\\ud7fb\\uf900-\\ufa6d\\ufa70-\\ufad9\\ufb00-\\ufb06\\ufb13-\\ufb17\\ufb1d\\ufb1f-\\ufb28\\ufb2a-\\ufb36\\ufb38-\\ufb3c\\ufb3e\\ufb40\\ufb41\\ufb43\\ufb44\\ufb46-\\ufbb1\\ufbd3-\\ufd3d\\ufd50-\\ufd8f\\ufd92-\\ufdc7\\ufdf0-\\ufdfb\\ufe70-\\ufe74\\ufe76-\\ufefc\\uff21-\\uff3a\\uff41-\\uff5a\\uff66-\\uffbe\\uffc2-\\uffc7\\uffca-\\uffcf\\uffd2-\\uffd7\\uffda-\\uffdc',
          s =
            '\\u0300-\\u036f\\u0483-\\u0487\\u0591-\\u05bd\\u05bf\\u05c1\\u05c2\\u05c4\\u05c5\\u05c7\\u0610-\\u061a\\u0620-\\u0649\\u0672-\\u06d3\\u06e7-\\u06e8\\u06fb-\\u06fc\\u0730-\\u074a\\u0800-\\u0814\\u081b-\\u0823\\u0825-\\u0827\\u0829-\\u082d\\u0840-\\u0857\\u08e4-\\u08fe\\u0900-\\u0903\\u093a-\\u093c\\u093e-\\u094f\\u0951-\\u0957\\u0962-\\u0963\\u0966-\\u096f\\u0981-\\u0983\\u09bc\\u09be-\\u09c4\\u09c7\\u09c8\\u09d7\\u09df-\\u09e0\\u0a01-\\u0a03\\u0a3c\\u0a3e-\\u0a42\\u0a47\\u0a48\\u0a4b-\\u0a4d\\u0a51\\u0a66-\\u0a71\\u0a75\\u0a81-\\u0a83\\u0abc\\u0abe-\\u0ac5\\u0ac7-\\u0ac9\\u0acb-\\u0acd\\u0ae2-\\u0ae3\\u0ae6-\\u0aef\\u0b01-\\u0b03\\u0b3c\\u0b3e-\\u0b44\\u0b47\\u0b48\\u0b4b-\\u0b4d\\u0b56\\u0b57\\u0b5f-\\u0b60\\u0b66-\\u0b6f\\u0b82\\u0bbe-\\u0bc2\\u0bc6-\\u0bc8\\u0bca-\\u0bcd\\u0bd7\\u0be6-\\u0bef\\u0c01-\\u0c03\\u0c46-\\u0c48\\u0c4a-\\u0c4d\\u0c55\\u0c56\\u0c62-\\u0c63\\u0c66-\\u0c6f\\u0c82\\u0c83\\u0cbc\\u0cbe-\\u0cc4\\u0cc6-\\u0cc8\\u0cca-\\u0ccd\\u0cd5\\u0cd6\\u0ce2-\\u0ce3\\u0ce6-\\u0cef\\u0d02\\u0d03\\u0d46-\\u0d48\\u0d57\\u0d62-\\u0d63\\u0d66-\\u0d6f\\u0d82\\u0d83\\u0dca\\u0dcf-\\u0dd4\\u0dd6\\u0dd8-\\u0ddf\\u0df2\\u0df3\\u0e34-\\u0e3a\\u0e40-\\u0e45\\u0e50-\\u0e59\\u0eb4-\\u0eb9\\u0ec8-\\u0ecd\\u0ed0-\\u0ed9\\u0f18\\u0f19\\u0f20-\\u0f29\\u0f35\\u0f37\\u0f39\\u0f41-\\u0f47\\u0f71-\\u0f84\\u0f86-\\u0f87\\u0f8d-\\u0f97\\u0f99-\\u0fbc\\u0fc6\\u1000-\\u1029\\u1040-\\u1049\\u1067-\\u106d\\u1071-\\u1074\\u1082-\\u108d\\u108f-\\u109d\\u135d-\\u135f\\u170e-\\u1710\\u1720-\\u1730\\u1740-\\u1750\\u1772\\u1773\\u1780-\\u17b2\\u17dd\\u17e0-\\u17e9\\u180b-\\u180d\\u1810-\\u1819\\u1920-\\u192b\\u1930-\\u193b\\u1951-\\u196d\\u19b0-\\u19c0\\u19c8-\\u19c9\\u19d0-\\u19d9\\u1a00-\\u1a15\\u1a20-\\u1a53\\u1a60-\\u1a7c\\u1a7f-\\u1a89\\u1a90-\\u1a99\\u1b46-\\u1b4b\\u1b50-\\u1b59\\u1b6b-\\u1b73\\u1bb0-\\u1bb9\\u1be6-\\u1bf3\\u1c00-\\u1c22\\u1c40-\\u1c49\\u1c5b-\\u1c7d\\u1cd0-\\u1cd2\\u1d00-\\u1dbe\\u1e01-\\u1f15\\u200c\\u200d\\u203f\\u2040\\u2054\\u20d0-\\u20dc\\u20e1\\u20e5-\\u20f0\\u2d81-\\u2d96\\u2de0-\\u2dff\\u3021-\\u3028\\u3099\\u309a\\ua640-\\ua66d\\ua674-\\ua67d\\ua69f\\ua6f0-\\ua6f1\\ua7f8-\\ua800\\ua806\\ua80b\\ua823-\\ua827\\ua880-\\ua881\\ua8b4-\\ua8c4\\ua8d0-\\ua8d9\\ua8f3-\\ua8f7\\ua900-\\ua909\\ua926-\\ua92d\\ua930-\\ua945\\ua980-\\ua983\\ua9b3-\\ua9c0\\uaa00-\\uaa27\\uaa40-\\uaa41\\uaa4c-\\uaa4d\\uaa50-\\uaa59\\uaa7b\\uaae0-\\uaae9\\uaaf2-\\uaaf3\\uabc0-\\uabe1\\uabec\\uabed\\uabf0-\\uabf9\\ufb20-\\ufb28\\ufe00-\\ufe0f\\ufe20-\\ufe26\\ufe33\\ufe34\\ufe4d-\\ufe4f\\uff10-\\uff19\\uff3f',
          l = '\\\\u[0-9a-fA-F]{4}|\\\\u\\{[0-9a-fA-F]+\\}',
          u = '(?:' + l + '|[' + t + n + '])',
          r = '(?:' + l + '|[' + i + n + s + '])*'
        ;(e.identifier = new RegExp(u + r, 'g')),
          (e.identifierStart = new RegExp(u)),
          (e.identifierMatch = new RegExp(
            '(?:' + l + '|[' + i + n + s + '])+',
          )),
          (e.newline = /[\n\r\u2028\u2029]/),
          (e.lineBreak = new RegExp(
            `\r
|` + e.newline.source,
          )),
          (e.allLineBreaks = new RegExp(e.lineBreak.source, 'g'))
      })(At)),
    At
  )
}
var Rt = {}
var Ke = {}
var di
function qt() {
  if (di) return Ke
  di = 1
  function e(n, s) {
    ;(this.raw_options = t(n, s)),
      (this.disabled = this._get_boolean('disabled')),
      (this.eol = this._get_characters('eol', 'auto')),
      (this.end_with_newline = this._get_boolean('end_with_newline')),
      (this.indent_size = this._get_number('indent_size', 4)),
      (this.indent_char = this._get_characters('indent_char', ' ')),
      (this.indent_level = this._get_number('indent_level')),
      (this.preserve_newlines = this._get_boolean('preserve_newlines', true)),
      (this.max_preserve_newlines = this._get_number(
        'max_preserve_newlines',
        32786,
      )),
      this.preserve_newlines || (this.max_preserve_newlines = 0),
      (this.indent_with_tabs = this._get_boolean(
        'indent_with_tabs',
        this.indent_char === '	',
      )),
      this.indent_with_tabs &&
        ((this.indent_char = '	'),
        this.indent_size === 1 && (this.indent_size = 4)),
      (this.wrap_line_length = this._get_number(
        'wrap_line_length',
        this._get_number('max_char'),
      )),
      (this.indent_empty_lines = this._get_boolean('indent_empty_lines')),
      (this.templating = this._get_selection_list(
        'templating',
        [
          'auto',
          'none',
          'angular',
          'django',
          'erb',
          'handlebars',
          'php',
          'smarty',
        ],
        ['auto'],
      ))
  }
  ;(e.prototype._get_array = function (n, s) {
    var l = this.raw_options[n],
      u = s || []
    return (
      typeof l == 'object'
        ? l !== null && typeof l.concat == 'function' && (u = l.concat())
        : typeof l == 'string' && (u = l.split(/[^a-zA-Z0-9_\/\-]+/)),
      u
    )
  }),
    (e.prototype._get_boolean = function (n, s) {
      var l = this.raw_options[n],
        u = l === void 0 ? !!s : !!l
      return u
    }),
    (e.prototype._get_characters = function (n, s) {
      var l = this.raw_options[n],
        u = s || ''
      return (
        typeof l == 'string' &&
          (u = l
            .replace(/\\r/, '\r')
            .replace(
              /\\n/,
              `
`,
            )
            .replace(/\\t/, '	')),
        u
      )
    }),
    (e.prototype._get_number = function (n, s) {
      var l = this.raw_options[n]
      ;(s = parseInt(s, 10)), isNaN(s) && (s = 0)
      var u = parseInt(l, 10)
      return isNaN(u) && (u = s), u
    }),
    (e.prototype._get_selection = function (n, s, l) {
      var u = this._get_selection_list(n, s, l)
      if (u.length !== 1)
        throw new Error(
          "Invalid Option Value: The option '" +
            n +
            `' can only be one of the following values:
` +
            s +
            `
You passed in: '` +
            this.raw_options[n] +
            "'",
        )
      return u[0]
    }),
    (e.prototype._get_selection_list = function (n, s, l) {
      if (!s || s.length === 0)
        throw new Error('Selection list cannot be empty.')
      if (((l = l || [s[0]]), !this._is_valid_selection(l, s)))
        throw new Error('Invalid Default Value!')
      var u = this._get_array(n, l)
      if (!this._is_valid_selection(u, s))
        throw new Error(
          "Invalid Option Value: The option '" +
            n +
            `' can contain only the following values:
` +
            s +
            `
You passed in: '` +
            this.raw_options[n] +
            "'",
        )
      return u
    }),
    (e.prototype._is_valid_selection = function (n, s) {
      return (
        n.length &&
        s.length &&
        !n.some(function (l) {
          return s.indexOf(l) === -1
        })
      )
    })
  function t(n, s) {
    var l = {}
    n = i(n)
    var u
    for (u in n) u !== s && (l[u] = n[u])
    if (s && n[s]) for (u in n[s]) l[u] = n[s][u]
    return l
  }
  function i(n) {
    var s = {},
      l
    for (l in n) {
      var u = l.replace(/-/g, '_')
      s[u] = n[l]
    }
    return s
  }
  return (Ke.Options = e), (Ke.normalizeOpts = i), (Ke.mergeOpts = t), Ke
}
var gi
function on() {
  if (gi) return Rt
  gi = 1
  var e = qt().Options,
    t = ['before-newline', 'after-newline', 'preserve-newline']
  function i(n) {
    e.call(this, n, 'js')
    var s = this.raw_options.brace_style || null
    s === 'expand-strict'
      ? (this.raw_options.brace_style = 'expand')
      : s === 'collapse-preserve-inline'
        ? (this.raw_options.brace_style = 'collapse,preserve-inline')
        : this.raw_options.braces_on_own_line !== void 0 &&
          (this.raw_options.brace_style = this.raw_options.braces_on_own_line
            ? 'expand'
            : 'collapse')
    var l = this._get_selection_list('brace_style', [
      'collapse',
      'expand',
      'end-expand',
      'none',
      'preserve-inline',
    ])
    ;(this.brace_preserve_inline = false), (this.brace_style = 'collapse')
    for (var u = 0; u < l.length; u++)
      l[u] === 'preserve-inline'
        ? (this.brace_preserve_inline = true)
        : (this.brace_style = l[u])
    ;(this.unindent_chained_methods = this._get_boolean(
      'unindent_chained_methods',
    )),
      (this.break_chained_methods = this._get_boolean('break_chained_methods')),
      (this.space_in_paren = this._get_boolean('space_in_paren')),
      (this.space_in_empty_paren = this._get_boolean('space_in_empty_paren')),
      (this.jslint_happy = this._get_boolean('jslint_happy')),
      (this.space_after_anon_function = this._get_boolean(
        'space_after_anon_function',
      )),
      (this.space_after_named_function = this._get_boolean(
        'space_after_named_function',
      )),
      (this.keep_array_indentation = this._get_boolean(
        'keep_array_indentation',
      )),
      (this.space_before_conditional = this._get_boolean(
        'space_before_conditional',
        true,
      )),
      (this.unescape_strings = this._get_boolean('unescape_strings')),
      (this.e4x = this._get_boolean('e4x')),
      (this.comma_first = this._get_boolean('comma_first')),
      (this.operator_position = this._get_selection('operator_position', t)),
      (this.test_output_raw = this._get_boolean('test_output_raw')),
      this.jslint_happy && (this.space_after_anon_function = true)
  }
  return (i.prototype = new e()), (Rt.Options = i), Rt
}
var Me = {}
var Nt = {}
var mi
function Xt() {
  if (mi) return Nt
  mi = 1
  var e = RegExp.prototype.hasOwnProperty('sticky')
  function t(i) {
    ;(this.__input = i || ''),
      (this.__input_length = this.__input.length),
      (this.__position = 0)
  }
  return (
    (t.prototype.restart = function () {
      this.__position = 0
    }),
    (t.prototype.back = function () {
      this.__position > 0 && (this.__position -= 1)
    }),
    (t.prototype.hasNext = function () {
      return this.__position < this.__input_length
    }),
    (t.prototype.next = function () {
      var i = null
      return (
        this.hasNext() &&
          ((i = this.__input.charAt(this.__position)), (this.__position += 1)),
        i
      )
    }),
    (t.prototype.peek = function (i) {
      var n = null
      return (
        (i = i || 0),
        (i += this.__position),
        i >= 0 && i < this.__input_length && (n = this.__input.charAt(i)),
        n
      )
    }),
    (t.prototype.__match = function (i, n) {
      i.lastIndex = n
      var s = i.exec(this.__input)
      return s && !(e && i.sticky) && s.index !== n && (s = null), s
    }),
    (t.prototype.test = function (i, n) {
      return (
        (n = n || 0),
        (n += this.__position),
        n >= 0 && n < this.__input_length ? !!this.__match(i, n) : false
      )
    }),
    (t.prototype.testChar = function (i, n) {
      var s = this.peek(n)
      return (i.lastIndex = 0), s !== null && i.test(s)
    }),
    (t.prototype.match = function (i) {
      var n = this.__match(i, this.__position)
      return n ? (this.__position += n[0].length) : (n = null), n
    }),
    (t.prototype.read = function (i, n, s) {
      var l = '',
        u
      return (
        i && ((u = this.match(i)), u && (l += u[0])),
        n && (u || !i) && (l += this.readUntil(n, s)),
        l
      )
    }),
    (t.prototype.readUntil = function (i, n) {
      var s = '',
        l = this.__position
      i.lastIndex = this.__position
      var u = i.exec(this.__input)
      return (
        u
          ? ((l = u.index), n && (l += u[0].length))
          : (l = this.__input_length),
        (s = this.__input.substring(this.__position, l)),
        (this.__position = l),
        s
      )
    }),
    (t.prototype.readUntilAfter = function (i) {
      return this.readUntil(i, true)
    }),
    (t.prototype.get_regexp = function (i, n) {
      var s = null,
        l = 'g'
      return (
        n && e && (l = 'y'),
        typeof i == 'string' && i !== ''
          ? (s = new RegExp(i, l))
          : i && (s = new RegExp(i.source, l)),
        s
      )
    }),
    (t.prototype.get_literal_regexp = function (i) {
      return RegExp(i.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'))
    }),
    (t.prototype.peekUntilAfter = function (i) {
      var n = this.__position,
        s = this.readUntilAfter(i)
      return (this.__position = n), s
    }),
    (t.prototype.lookBack = function (i) {
      var n = this.__position - 1
      return (
        n >= i.length &&
        this.__input.substring(n - i.length, n).toLowerCase() === i
      )
    }),
    (Nt.InputScanner = t),
    Nt
  )
}
var Ye = {}
var Ct = {}
var bi
function ws() {
  if (bi) return Ct
  bi = 1
  function e(t) {
    ;(this.__tokens = []),
      (this.__tokens_length = this.__tokens.length),
      (this.__position = 0),
      (this.__parent_token = t)
  }
  return (
    (e.prototype.restart = function () {
      this.__position = 0
    }),
    (e.prototype.isEmpty = function () {
      return this.__tokens_length === 0
    }),
    (e.prototype.hasNext = function () {
      return this.__position < this.__tokens_length
    }),
    (e.prototype.next = function () {
      var t = null
      return (
        this.hasNext() &&
          ((t = this.__tokens[this.__position]), (this.__position += 1)),
        t
      )
    }),
    (e.prototype.peek = function (t) {
      var i = null
      return (
        (t = t || 0),
        (t += this.__position),
        t >= 0 && t < this.__tokens_length && (i = this.__tokens[t]),
        i
      )
    }),
    (e.prototype.add = function (t) {
      this.__parent_token && (t.parent = this.__parent_token),
        this.__tokens.push(t),
        (this.__tokens_length += 1)
    }),
    (Ct.TokenStream = e),
    Ct
  )
}
var Lt = {}
var Mt = {}
var vi
function dt() {
  if (vi) return Mt
  vi = 1
  function e(t, i) {
    ;(this._input = t),
      (this._starting_pattern = null),
      (this._match_pattern = null),
      (this._until_pattern = null),
      (this._until_after = false),
      i &&
        ((this._starting_pattern = this._input.get_regexp(
          i._starting_pattern,
          true,
        )),
        (this._match_pattern = this._input.get_regexp(i._match_pattern, true)),
        (this._until_pattern = this._input.get_regexp(i._until_pattern)),
        (this._until_after = i._until_after))
  }
  return (
    (e.prototype.read = function () {
      var t = this._input.read(this._starting_pattern)
      return (
        (!this._starting_pattern || t) &&
          (t += this._input.read(
            this._match_pattern,
            this._until_pattern,
            this._until_after,
          )),
        t
      )
    }),
    (e.prototype.read_match = function () {
      return this._input.match(this._match_pattern)
    }),
    (e.prototype.until_after = function (t) {
      var i = this._create()
      return (
        (i._until_after = true),
        (i._until_pattern = this._input.get_regexp(t)),
        i._update(),
        i
      )
    }),
    (e.prototype.until = function (t) {
      var i = this._create()
      return (
        (i._until_after = false),
        (i._until_pattern = this._input.get_regexp(t)),
        i._update(),
        i
      )
    }),
    (e.prototype.starting_with = function (t) {
      var i = this._create()
      return (
        (i._starting_pattern = this._input.get_regexp(t, true)), i._update(), i
      )
    }),
    (e.prototype.matching = function (t) {
      var i = this._create()
      return (
        (i._match_pattern = this._input.get_regexp(t, true)), i._update(), i
      )
    }),
    (e.prototype._create = function () {
      return new e(this._input, this)
    }),
    (e.prototype._update = function () {}),
    (Mt.Pattern = e),
    Mt
  )
}
var yi
function Es() {
  if (yi) return Lt
  yi = 1
  var e = dt().Pattern
  function t(i, n) {
    e.call(this, i, n),
      n
        ? (this._line_regexp = this._input.get_regexp(n._line_regexp))
        : this.__set_whitespace_patterns('', ''),
      (this.newline_count = 0),
      (this.whitespace_before_token = '')
  }
  return (
    (t.prototype = new e()),
    (t.prototype.__set_whitespace_patterns = function (i, n) {
      ;(i += '\\t '),
        (n += '\\n\\r'),
        (this._match_pattern = this._input.get_regexp(
          '[' + i + n + ']+',
          true,
        )),
        (this._newline_regexp = this._input.get_regexp('\\r\\n|[' + n + ']'))
    }),
    (t.prototype.read = function () {
      ;(this.newline_count = 0), (this.whitespace_before_token = '')
      var i = this._input.read(this._match_pattern)
      if (i === ' ') this.whitespace_before_token = ' '
      else if (i) {
        var n = this.__split(this._newline_regexp, i)
        ;(this.newline_count = n.length - 1),
          (this.whitespace_before_token = n[this.newline_count])
      }
      return i
    }),
    (t.prototype.matching = function (i, n) {
      var s = this._create()
      return s.__set_whitespace_patterns(i, n), s._update(), s
    }),
    (t.prototype._create = function () {
      return new t(this._input, this)
    }),
    (t.prototype.__split = function (i, n) {
      i.lastIndex = 0
      for (var s = 0, l = [], u = i.exec(n); u; )
        l.push(n.substring(s, u.index)),
          (s = u.index + u[0].length),
          (u = i.exec(n))
      return s < n.length ? l.push(n.substring(s, n.length)) : l.push(''), l
    }),
    (Lt.WhitespacePattern = t),
    Lt
  )
}
var wi
function _t() {
  if (wi) return Ye
  wi = 1
  var e = Xt().InputScanner,
    t = rn().Token,
    i = ws().TokenStream,
    n = Es().WhitespacePattern,
    s = {
      START: 'TK_START',
      RAW: 'TK_RAW',
      EOF: 'TK_EOF',
    },
    l = function (u, r) {
      ;(this._input = new e(u)),
        (this._options = r || {}),
        (this.__tokens = null),
        (this._patterns = {}),
        (this._patterns.whitespace = new n(this._input))
    }
  return (
    (l.prototype.tokenize = function () {
      this._input.restart(), (this.__tokens = new i()), this._reset()
      for (
        var u, r = new t(s.START, ''), o = null, c = [], g = new i();
        r.type !== s.EOF;

      ) {
        for (u = this._get_next_token(r, o); this._is_comment(u); )
          g.add(u), (u = this._get_next_token(r, o))
        g.isEmpty() || ((u.comments_before = g), (g = new i())),
          (u.parent = o),
          this._is_opening(u)
            ? (c.push(o), (o = u))
            : o &&
              this._is_closing(u, o) &&
              ((u.opened = o), (o.closed = u), (o = c.pop()), (u.parent = o)),
          (u.previous = r),
          (r.next = u),
          this.__tokens.add(u),
          (r = u)
      }
      return this.__tokens
    }),
    (l.prototype._is_first_token = function () {
      return this.__tokens.isEmpty()
    }),
    (l.prototype._reset = function () {}),
    (l.prototype._get_next_token = function (u, r) {
      this._readWhitespace()
      var o = this._input.read(/.+/g)
      return o ? this._create_token(s.RAW, o) : this._create_token(s.EOF, '')
    }),
    (l.prototype._is_comment = function (u) {
      return false
    }),
    (l.prototype._is_opening = function (u) {
      return false
    }),
    (l.prototype._is_closing = function (u, r) {
      return false
    }),
    (l.prototype._create_token = function (u, r) {
      var o = new t(
        u,
        r,
        this._patterns.whitespace.newline_count,
        this._patterns.whitespace.whitespace_before_token,
      )
      return o
    }),
    (l.prototype._readWhitespace = function () {
      return this._patterns.whitespace.read()
    }),
    (Ye.Tokenizer = l),
    (Ye.TOKEN = s),
    Ye
  )
}
var It = {}
var Ei
function Vt() {
  if (Ei) return It
  Ei = 1
  function e(t, i) {
    ;(t = typeof t == 'string' ? t : t.source),
      (i = typeof i == 'string' ? i : i.source),
      (this.__directives_block_pattern = new RegExp(
        t + / beautify( \w+[:]\w+)+ /.source + i,
        'g',
      )),
      (this.__directive_pattern = / (\w+)[:](\w+)/g),
      (this.__directives_end_ignore_pattern = new RegExp(
        t + /\sbeautify\signore:end\s/.source + i,
        'g',
      ))
  }
  return (
    (e.prototype.get_directives = function (t) {
      if (!t.match(this.__directives_block_pattern)) return null
      var i = {}
      this.__directive_pattern.lastIndex = 0
      for (var n = this.__directive_pattern.exec(t); n; )
        (i[n[1]] = n[2]), (n = this.__directive_pattern.exec(t))
      return i
    }),
    (e.prototype.readIgnored = function (t) {
      return t.readUntilAfter(this.__directives_end_ignore_pattern)
    }),
    (It.Directives = e),
    It
  )
}
var Dt = {}
var xi
function ln() {
  if (xi) return Dt
  xi = 1
  var e = dt().Pattern,
    t = {
      django: false,
      erb: false,
      handlebars: false,
      php: false,
      smarty: false,
      angular: false,
    }
  function i(n, s) {
    e.call(this, n, s),
      (this.__template_pattern = null),
      (this._disabled = Object.assign({}, t)),
      (this._excluded = Object.assign({}, t)),
      s &&
        ((this.__template_pattern = this._input.get_regexp(
          s.__template_pattern,
        )),
        (this._excluded = Object.assign(this._excluded, s._excluded)),
        (this._disabled = Object.assign(this._disabled, s._disabled)))
    var l = new e(n)
    this.__patterns = {
      handlebars_comment: l.starting_with(/{{!--/).until_after(/--}}/),
      handlebars_unescaped: l.starting_with(/{{{/).until_after(/}}}/),
      handlebars: l.starting_with(/{{/).until_after(/}}/),
      php: l.starting_with(/<\?(?:[= ]|php)/).until_after(/\?>/),
      erb: l.starting_with(/<%[^%]/).until_after(/[^%]%>/),
      django: l.starting_with(/{%/).until_after(/%}/),
      django_value: l.starting_with(/{{/).until_after(/}}/),
      django_comment: l.starting_with(/{#/).until_after(/#}/),
      smarty: l.starting_with(/{(?=[^}{\s\n])/).until_after(/[^\s\n]}/),
      smarty_comment: l.starting_with(/{\*/).until_after(/\*}/),
      smarty_literal: l.starting_with(/{literal}/).until_after(/{\/literal}/),
    }
  }
  return (
    (i.prototype = new e()),
    (i.prototype._create = function () {
      return new i(this._input, this)
    }),
    (i.prototype._update = function () {
      this.__set_templated_pattern()
    }),
    (i.prototype.disable = function (n) {
      var s = this._create()
      return (s._disabled[n] = true), s._update(), s
    }),
    (i.prototype.read_options = function (n) {
      var s = this._create()
      for (var l in t) s._disabled[l] = n.templating.indexOf(l) === -1
      return s._update(), s
    }),
    (i.prototype.exclude = function (n) {
      var s = this._create()
      return (s._excluded[n] = true), s._update(), s
    }),
    (i.prototype.read = function () {
      var n = ''
      this._match_pattern
        ? (n = this._input.read(this._starting_pattern))
        : (n = this._input.read(
            this._starting_pattern,
            this.__template_pattern,
          ))
      for (var s = this._read_template(); s; )
        this._match_pattern
          ? (s += this._input.read(this._match_pattern))
          : (s += this._input.readUntil(this.__template_pattern)),
          (n += s),
          (s = this._read_template())
      return (
        this._until_after &&
          (n += this._input.readUntilAfter(this._until_pattern)),
        n
      )
    }),
    (i.prototype.__set_templated_pattern = function () {
      var n = []
      this._disabled.php ||
        n.push(this.__patterns.php._starting_pattern.source),
        this._disabled.handlebars ||
          n.push(this.__patterns.handlebars._starting_pattern.source),
        this._disabled.erb ||
          n.push(this.__patterns.erb._starting_pattern.source),
        this._disabled.django ||
          (n.push(this.__patterns.django._starting_pattern.source),
          n.push(this.__patterns.django_value._starting_pattern.source),
          n.push(this.__patterns.django_comment._starting_pattern.source)),
        this._disabled.smarty ||
          n.push(this.__patterns.smarty._starting_pattern.source),
        this._until_pattern && n.push(this._until_pattern.source),
        (this.__template_pattern = this._input.get_regexp(
          '(?:' + n.join('|') + ')',
        ))
    }),
    (i.prototype._read_template = function () {
      var n = '',
        s = this._input.peek()
      if (s === '<') {
        var l = this._input.peek(1)
        !this._disabled.php &&
          !this._excluded.php &&
          l === '?' &&
          (n = n || this.__patterns.php.read()),
          !this._disabled.erb &&
            !this._excluded.erb &&
            l === '%' &&
            (n = n || this.__patterns.erb.read())
      } else
        s === '{' &&
          (!this._disabled.handlebars &&
            !this._excluded.handlebars &&
            ((n = n || this.__patterns.handlebars_comment.read()),
            (n = n || this.__patterns.handlebars_unescaped.read()),
            (n = n || this.__patterns.handlebars.read())),
          this._disabled.django ||
            (!this._excluded.django &&
              !this._excluded.handlebars &&
              (n = n || this.__patterns.django_value.read()),
            this._excluded.django ||
              ((n = n || this.__patterns.django_comment.read()),
              (n = n || this.__patterns.django.read()))),
          this._disabled.smarty ||
            (this._disabled.django &&
              this._disabled.handlebars &&
              ((n = n || this.__patterns.smarty_comment.read()),
              (n = n || this.__patterns.smarty_literal.read()),
              (n = n || this.__patterns.smarty.read()))))
      return n
    }),
    (Dt.TemplatablePattern = i),
    Dt
  )
}
var Ti
function et() {
  if (Ti) return Me
  Ti = 1
  var e = Xt().InputScanner,
    t = _t().Tokenizer,
    i = _t().TOKEN,
    n = Vt().Directives,
    s = an(),
    l = dt().Pattern,
    u = ln().TemplatablePattern
  function r(p, v) {
    return v.indexOf(p) !== -1
  }
  var o = {
      START_EXPR: 'TK_START_EXPR',
      END_EXPR: 'TK_END_EXPR',
      START_BLOCK: 'TK_START_BLOCK',
      END_BLOCK: 'TK_END_BLOCK',
      WORD: 'TK_WORD',
      RESERVED: 'TK_RESERVED',
      SEMICOLON: 'TK_SEMICOLON',
      STRING: 'TK_STRING',
      EQUALS: 'TK_EQUALS',
      OPERATOR: 'TK_OPERATOR',
      COMMA: 'TK_COMMA',
      BLOCK_COMMENT: 'TK_BLOCK_COMMENT',
      COMMENT: 'TK_COMMENT',
      DOT: 'TK_DOT',
      UNKNOWN: 'TK_UNKNOWN',
      START: i.START,
      RAW: i.RAW,
      EOF: i.EOF,
    },
    c = new n(/\/\*/, /\*\//),
    g =
      /0[xX][0123456789abcdefABCDEF_]*n?|0[oO][01234567_]*n?|0[bB][01_]*n?|\d[\d_]*n|(?:\.\d[\d_]*|\d[\d_]*\.?[\d_]*)(?:[eE][+-]?[\d_]+)?/,
    h = /[0-9]/,
    m = /[^\d\.]/,
    S =
      '>>> === !== &&= ??= ||= << && >= ** != == <= >> || ?? |> < / - + > : & % ? ^ | *'.split(
        ' ',
      ),
    C =
      '>>>= ... >>= <<= === >>> !== **= &&= ??= ||= => ^= :: /= << <= == && -= >= >> != -- += ** || ?? ++ %= &= *= |= |> = ! ? > < : / ^ - + * & % ~ |'
  ;(C = C.replace(/[-[\]{}()*+?.,\\^$|#]/g, '\\$&')),
    (C = '\\?\\.(?!\\d) ' + C),
    (C = C.replace(/ /g, '|'))
  var L = new RegExp(C),
    d =
      'continue,try,throw,return,var,let,const,if,switch,case,default,for,while,break,function,import,export'.split(
        ',',
      ),
    _ = d.concat([
      'do',
      'in',
      'of',
      'else',
      'get',
      'set',
      'new',
      'catch',
      'finally',
      'typeof',
      'yield',
      'async',
      'await',
      'from',
      'as',
      'class',
      'extends',
    ]),
    b = new RegExp('^(?:' + _.join('|') + ')$'),
    A,
    x = function (p, v) {
      t.call(this, p, v),
        (this._patterns.whitespace = this._patterns.whitespace.matching(
          /\u00A0\u1680\u180e\u2000-\u200a\u202f\u205f\u3000\ufeff/.source,
          /\u2028\u2029/.source,
        ))
      var f = new l(this._input),
        O = new u(this._input).read_options(this._options)
      this.__patterns = {
        template: O,
        identifier: O.starting_with(s.identifier).matching(s.identifierMatch),
        number: f.matching(g),
        punct: f.matching(L),
        comment: f.starting_with(/\/\//).until(/[\n\r\u2028\u2029]/),
        block_comment: f.starting_with(/\/\*/).until_after(/\*\//),
        html_comment_start: f.matching(/<!--/),
        html_comment_end: f.matching(/-->/),
        include: f.starting_with(/#include/).until_after(s.lineBreak),
        shebang: f.starting_with(/#!/).until_after(s.lineBreak),
        xml: f.matching(
          /[\s\S]*?<(\/?)([-a-zA-Z:0-9_.]+|{[^}]+?}|!\[CDATA\[[^\]]*?\]\]|)(\s*{[^}]+?}|\s+[-a-zA-Z:0-9_.]+|\s+[-a-zA-Z:0-9_.]+\s*=\s*('[^']*'|"[^"]*"|{([^{}]|{[^}]+?})+?}))*\s*(\/?)\s*>/,
        ),
        single_quote: O.until(/['\\\n\r\u2028\u2029]/),
        double_quote: O.until(/["\\\n\r\u2028\u2029]/),
        template_text: O.until(/[`\\$]/),
        template_expression: O.until(/[`}\\]/),
      }
    }
  ;(x.prototype = new t()),
    (x.prototype._is_comment = function (p) {
      return (
        p.type === o.COMMENT ||
        p.type === o.BLOCK_COMMENT ||
        p.type === o.UNKNOWN
      )
    }),
    (x.prototype._is_opening = function (p) {
      return p.type === o.START_BLOCK || p.type === o.START_EXPR
    }),
    (x.prototype._is_closing = function (p, v) {
      return (
        (p.type === o.END_BLOCK || p.type === o.END_EXPR) &&
        v &&
        ((p.text === ']' && v.text === '[') ||
          (p.text === ')' && v.text === '(') ||
          (p.text === '}' && v.text === '{'))
      )
    }),
    (x.prototype._reset = function () {
      A = false
    }),
    (x.prototype._get_next_token = function (p, v) {
      var f = null
      this._readWhitespace()
      var O = this._input.peek()
      return O === null
        ? this._create_token(o.EOF, '')
        : ((f = f || this._read_non_javascript(O)),
          (f = f || this._read_string(O)),
          (f = f || this._read_pair(O, this._input.peek(1))),
          (f = f || this._read_word(p)),
          (f = f || this._read_singles(O)),
          (f = f || this._read_comment(O)),
          (f = f || this._read_regexp(O, p)),
          (f = f || this._read_xml(O, p)),
          (f = f || this._read_punctuation()),
          (f = f || this._create_token(o.UNKNOWN, this._input.next())),
          f)
    }),
    (x.prototype._read_word = function (p) {
      var v
      if (((v = this.__patterns.identifier.read()), v !== ''))
        return (
          (v = v.replace(
            s.allLineBreaks,
            `
`,
          )),
          !(
            p.type === o.DOT ||
            (p.type === o.RESERVED && (p.text === 'set' || p.text === 'get'))
          ) && b.test(v)
            ? (v === 'in' || v === 'of') &&
              (p.type === o.WORD || p.type === o.STRING)
              ? this._create_token(o.OPERATOR, v)
              : this._create_token(o.RESERVED, v)
            : this._create_token(o.WORD, v)
        )
      if (((v = this.__patterns.number.read()), v !== ''))
        return this._create_token(o.WORD, v)
    }),
    (x.prototype._read_singles = function (p) {
      var v = null
      return (
        p === '(' || p === '['
          ? (v = this._create_token(o.START_EXPR, p))
          : p === ')' || p === ']'
            ? (v = this._create_token(o.END_EXPR, p))
            : p === '{'
              ? (v = this._create_token(o.START_BLOCK, p))
              : p === '}'
                ? (v = this._create_token(o.END_BLOCK, p))
                : p === ';'
                  ? (v = this._create_token(o.SEMICOLON, p))
                  : p === '.' && m.test(this._input.peek(1))
                    ? (v = this._create_token(o.DOT, p))
                    : p === ',' && (v = this._create_token(o.COMMA, p)),
        v && this._input.next(),
        v
      )
    }),
    (x.prototype._read_pair = function (p, v) {
      var f = null
      return (
        p === '#' &&
          v === '{' &&
          (f = this._create_token(o.START_BLOCK, p + v)),
        f && (this._input.next(), this._input.next()),
        f
      )
    }),
    (x.prototype._read_punctuation = function () {
      var p = this.__patterns.punct.read()
      if (p !== '')
        return p === '='
          ? this._create_token(o.EQUALS, p)
          : p === '?.'
            ? this._create_token(o.DOT, p)
            : this._create_token(o.OPERATOR, p)
    }),
    (x.prototype._read_non_javascript = function (p) {
      var v = ''
      if (p === '#') {
        if (this._is_first_token() && ((v = this.__patterns.shebang.read()), v))
          return this._create_token(
            o.UNKNOWN,
            v.trim() +
              `
`,
          )
        if (((v = this.__patterns.include.read()), v))
          return this._create_token(
            o.UNKNOWN,
            v.trim() +
              `
`,
          )
        p = this._input.next()
        var f = '#'
        if (this._input.hasNext() && this._input.testChar(h)) {
          do (p = this._input.next()), (f += p)
          while (this._input.hasNext() && p !== '#' && p !== '=')
          return (
            p === '#' ||
              (this._input.peek() === '[' && this._input.peek(1) === ']'
                ? ((f += '[]'), this._input.next(), this._input.next())
                : this._input.peek() === '{' &&
                  this._input.peek(1) === '}' &&
                  ((f += '{}'), this._input.next(), this._input.next())),
            this._create_token(o.WORD, f)
          )
        }
        this._input.back()
      } else if (p === '<' && this._is_first_token()) {
        if (((v = this.__patterns.html_comment_start.read()), v)) {
          for (; this._input.hasNext() && !this._input.testChar(s.newline); )
            v += this._input.next()
          return (A = true), this._create_token(o.COMMENT, v)
        }
      } else if (
        A &&
        p === '-' &&
        ((v = this.__patterns.html_comment_end.read()), v)
      )
        return (A = false), this._create_token(o.COMMENT, v)
      return null
    }),
    (x.prototype._read_comment = function (p) {
      var v = null
      if (p === '/') {
        var f = ''
        if (this._input.peek(1) === '*') {
          f = this.__patterns.block_comment.read()
          var O = c.get_directives(f)
          O && O.ignore === 'start' && (f += c.readIgnored(this._input)),
            (f = f.replace(
              s.allLineBreaks,
              `
`,
            )),
            (v = this._create_token(o.BLOCK_COMMENT, f)),
            (v.directives = O)
        } else
          this._input.peek(1) === '/' &&
            ((f = this.__patterns.comment.read()),
            (v = this._create_token(o.COMMENT, f)))
      }
      return v
    }),
    (x.prototype._read_string = function (p) {
      if (p === '`' || p === "'" || p === '"') {
        var v = this._input.next()
        return (
          (this.has_char_escapes = false),
          p === '`'
            ? (v += this._read_string_recursive('`', true, '${'))
            : (v += this._read_string_recursive(p)),
          this.has_char_escapes && this._options.unescape_strings && (v = k(v)),
          this._input.peek() === p && (v += this._input.next()),
          (v = v.replace(
            s.allLineBreaks,
            `
`,
          )),
          this._create_token(o.STRING, v)
        )
      }
      return null
    }),
    (x.prototype._allow_regexp_or_xml = function (p) {
      return (
        (p.type === o.RESERVED &&
          r(p.text, [
            'return',
            'case',
            'throw',
            'else',
            'do',
            'typeof',
            'yield',
          ])) ||
        (p.type === o.END_EXPR &&
          p.text === ')' &&
          p.opened.previous.type === o.RESERVED &&
          r(p.opened.previous.text, ['if', 'while', 'for'])) ||
        r(p.type, [
          o.COMMENT,
          o.START_EXPR,
          o.START_BLOCK,
          o.START,
          o.END_BLOCK,
          o.OPERATOR,
          o.EQUALS,
          o.EOF,
          o.SEMICOLON,
          o.COMMA,
        ])
      )
    }),
    (x.prototype._read_regexp = function (p, v) {
      if (p === '/' && this._allow_regexp_or_xml(v)) {
        for (
          var f = this._input.next(), O = false, a = false;
          this._input.hasNext() &&
          (O || a || this._input.peek() !== p) &&
          !this._input.testChar(s.newline);

        )
          (f += this._input.peek()),
            O
              ? (O = false)
              : ((O = this._input.peek() === '\\'),
                this._input.peek() === '['
                  ? (a = true)
                  : this._input.peek() === ']' && (a = false)),
            this._input.next()
        return (
          this._input.peek() === p &&
            ((f += this._input.next()), (f += this._input.read(s.identifier))),
          this._create_token(o.STRING, f)
        )
      }
      return null
    }),
    (x.prototype._read_xml = function (p, v) {
      if (this._options.e4x && p === '<' && this._allow_regexp_or_xml(v)) {
        var f = '',
          O = this.__patterns.xml.read_match()
        if (O) {
          for (
            var a = O[2].replace(/^{\s+/, '{').replace(/\s+}$/, '}'),
              E = a.indexOf('{') === 0,
              w = 0;
            O;

          ) {
            var M = !!O[1],
              P = O[2],
              j = !!O[O.length - 1] || P.slice(0, 8) === '![CDATA['
            if (
              (!j &&
                (P === a ||
                  (E && P.replace(/^{\s+/, '{').replace(/\s+}$/, '}'))) &&
                (M ? --w : ++w),
              (f += O[0]),
              w <= 0)
            )
              break
            O = this.__patterns.xml.read_match()
          }
          return (
            O || (f += this._input.match(/[\s\S]*/g)[0]),
            (f = f.replace(
              s.allLineBreaks,
              `
`,
            )),
            this._create_token(o.STRING, f)
          )
        }
      }
      return null
    })
  function k(p) {
    for (var v = '', f = 0, O = new e(p), a = null; O.hasNext(); )
      if (
        ((a = O.match(/([\s]|[^\\]|\\\\)+/g)),
        a && (v += a[0]),
        O.peek() === '\\')
      ) {
        if ((O.next(), O.peek() === 'x')) a = O.match(/x([0-9A-Fa-f]{2})/g)
        else if (O.peek() === 'u')
          (a = O.match(/u([0-9A-Fa-f]{4})/g)),
            a || (a = O.match(/u\{([0-9A-Fa-f]+)\}/g))
        else {
          ;(v += '\\'), O.hasNext() && (v += O.next())
          continue
        }
        if (
          !a ||
          ((f = parseInt(a[1], 16)),
          f > 126 && f <= 255 && a[0].indexOf('x') === 0)
        )
          return p
        ;(f >= 0 && f < 32) || f > 1114111
          ? (v += '\\' + a[0])
          : f === 34 || f === 39 || f === 92
            ? (v += '\\' + String.fromCharCode(f))
            : (v += String.fromCharCode(f))
      }
    return v
  }
  return (
    (x.prototype._read_string_recursive = function (p, v, f) {
      var O, a
      p === "'"
        ? (a = this.__patterns.single_quote)
        : p === '"'
          ? (a = this.__patterns.double_quote)
          : p === '`'
            ? (a = this.__patterns.template_text)
            : p === '}' && (a = this.__patterns.template_expression)
      for (var E = a.read(), w = ''; this._input.hasNext(); ) {
        if (((w = this._input.next()), w === p || (!v && s.newline.test(w)))) {
          this._input.back()
          break
        } else
          w === '\\' && this._input.hasNext()
            ? ((O = this._input.peek()),
              O === 'x' || O === 'u'
                ? (this.has_char_escapes = true)
                : O === '\r' &&
                  this._input.peek(1) ===
                    `
` &&
                  this._input.next(),
              (w += this._input.next()))
            : f &&
              (f === '${' &&
                w === '$' &&
                this._input.peek() === '{' &&
                (w += this._input.next()),
              f === w &&
                (p === '`'
                  ? (w += this._read_string_recursive('}', v, '`'))
                  : (w += this._read_string_recursive('`', v, '${')),
                this._input.hasNext() && (w += this._input.next())))
        ;(w += a.read()), (E += w)
      }
      return E
    }),
    (Me.Tokenizer = x),
    (Me.TOKEN = o),
    (Me.positionable_operators = S.slice()),
    (Me.line_starters = d.slice()),
    Me
  )
}
var Oi
function xs() {
  if (Oi) return Ot
  Oi = 1
  var e = Ht().Output,
    t = rn().Token,
    i = an(),
    n = on().Options,
    s = et().Tokenizer,
    l = et().line_starters,
    u = et().positionable_operators,
    r = et().TOKEN
  function o(a, E) {
    return E.indexOf(a) !== -1
  }
  function c(a) {
    return a.replace(/^\s+/g, '')
  }
  function g(a) {
    for (var E = {}, w = 0; w < a.length; w++) E[a[w].replace(/-/g, '_')] = a[w]
    return E
  }
  function h(a, E) {
    return a && a.type === r.RESERVED && a.text === E
  }
  function m(a, E) {
    return a && a.type === r.RESERVED && o(a.text, E)
  }
  var S = [
      'case',
      'return',
      'do',
      'if',
      'throw',
      'else',
      'await',
      'break',
      'continue',
      'async',
    ],
    C = ['before-newline', 'after-newline', 'preserve-newline'],
    L = g(C),
    d = [L.before_newline, L.preserve_newline],
    _ = {
      BlockStatement: 'BlockStatement',
      Statement: 'Statement',
      ObjectLiteral: 'ObjectLiteral',
      ArrayLiteral: 'ArrayLiteral',
      ForInitializer: 'ForInitializer',
      Conditional: 'Conditional',
      Expression: 'Expression',
    }
  function b(a, E) {
    E.multiline_frame ||
      E.mode === _.ForInitializer ||
      E.mode === _.Conditional ||
      a.remove_indent(E.start_line_index)
  }
  function A(a) {
    a = a.replace(
      i.allLineBreaks,
      `
`,
    )
    for (
      var E = [],
        w = a.indexOf(`
`);
      w !== -1;

    )
      E.push(a.substring(0, w)),
        (a = a.substring(w + 1)),
        (w = a.indexOf(`
`))
    return a.length && E.push(a), E
  }
  function x(a) {
    return a === _.ArrayLiteral
  }
  function k(a) {
    return o(a, [_.Expression, _.ForInitializer, _.Conditional])
  }
  function p(a, E) {
    for (var w = 0; w < a.length; w++) {
      var M = a[w].trim()
      if (M.charAt(0) !== E) return false
    }
    return true
  }
  function v(a, E) {
    for (var w = 0, M = a.length, P; w < M; w++)
      if (((P = a[w]), P && P.indexOf(E) !== 0)) return false
    return true
  }
  function f(a, E) {
    ;(E = E || {}),
      (this._source_text = a || ''),
      (this._output = null),
      (this._tokens = null),
      (this._last_last_text = null),
      (this._flags = null),
      (this._previous_flags = null),
      (this._flag_store = null),
      (this._options = new n(E))
  }
  ;(f.prototype.create_flags = function (a, E) {
    var w = 0
    a &&
      ((w = a.indentation_level),
      !this._output.just_added_newline() &&
        a.line_indent_level > w &&
        (w = a.line_indent_level))
    var M = {
      mode: E,
      parent: a,
      last_token: a ? a.last_token : new t(r.START_BLOCK, ''),
      last_word: a ? a.last_word : '',
      declaration_statement: false,
      declaration_assignment: false,
      multiline_frame: false,
      inline_frame: false,
      if_block: false,
      else_block: false,
      class_start_block: false,
      do_block: false,
      do_while: false,
      import_block: false,
      in_case_statement: false,
      in_case: false,
      case_body: false,
      case_block: false,
      indentation_level: w,
      alignment: 0,
      line_indent_level: a ? a.line_indent_level : w,
      start_line_index: this._output.get_line_number(),
      ternary_depth: 0,
    }
    return M
  }),
    (f.prototype._reset = function (a) {
      var E = a.match(/^[\t ]*/)[0]
      ;(this._last_last_text = ''),
        (this._output = new e(this._options, E)),
        (this._output.raw = this._options.test_output_raw),
        (this._flag_store = []),
        this.set_mode(_.BlockStatement)
      var w = new s(a, this._options)
      return (this._tokens = w.tokenize()), a
    }),
    (f.prototype.beautify = function () {
      if (this._options.disabled) return this._source_text
      var a,
        E = this._reset(this._source_text),
        w = this._options.eol
      this._options.eol === 'auto' &&
        ((w = `
`),
        E && i.lineBreak.test(E || '') && (w = E.match(i.lineBreak)[0]))
      for (var M = this._tokens.next(); M; )
        this.handle_token(M),
          (this._last_last_text = this._flags.last_token.text),
          (this._flags.last_token = M),
          (M = this._tokens.next())
      return (a = this._output.get_code(w)), a
    }),
    (f.prototype.handle_token = function (a, E) {
      a.type === r.START_EXPR
        ? this.handle_start_expr(a)
        : a.type === r.END_EXPR
          ? this.handle_end_expr(a)
          : a.type === r.START_BLOCK
            ? this.handle_start_block(a)
            : a.type === r.END_BLOCK
              ? this.handle_end_block(a)
              : a.type === r.WORD
                ? this.handle_word(a)
                : a.type === r.RESERVED
                  ? this.handle_word(a)
                  : a.type === r.SEMICOLON
                    ? this.handle_semicolon(a)
                    : a.type === r.STRING
                      ? this.handle_string(a)
                      : a.type === r.EQUALS
                        ? this.handle_equals(a)
                        : a.type === r.OPERATOR
                          ? this.handle_operator(a)
                          : a.type === r.COMMA
                            ? this.handle_comma(a)
                            : a.type === r.BLOCK_COMMENT
                              ? this.handle_block_comment(a, E)
                              : a.type === r.COMMENT
                                ? this.handle_comment(a, E)
                                : a.type === r.DOT
                                  ? this.handle_dot(a)
                                  : a.type === r.EOF
                                    ? this.handle_eof(a)
                                    : a.type === r.UNKNOWN
                                      ? this.handle_unknown(a, E)
                                      : this.handle_unknown(a, E)
    }),
    (f.prototype.handle_whitespace_and_comments = function (a, E) {
      var w = a.newlines,
        M = this._options.keep_array_indentation && x(this._flags.mode)
      if (a.comments_before)
        for (var P = a.comments_before.next(); P; )
          this.handle_whitespace_and_comments(P, E),
            this.handle_token(P, E),
            (P = a.comments_before.next())
      if (M) for (var j = 0; j < w; j += 1) this.print_newline(j > 0, E)
      else if (
        (this._options.max_preserve_newlines &&
          w > this._options.max_preserve_newlines &&
          (w = this._options.max_preserve_newlines),
        this._options.preserve_newlines && w > 1)
      ) {
        this.print_newline(false, E)
        for (var F = 1; F < w; F += 1) this.print_newline(true, E)
      }
    })
  var O = ['async', 'break', 'continue', 'return', 'throw', 'yield']
  return (
    (f.prototype.allow_wrap_or_preserved_newline = function (a, E) {
      if (
        ((E = E === void 0 ? false : E), !this._output.just_added_newline())
      ) {
        var w = (this._options.preserve_newlines && a.newlines) || E,
          M = o(this._flags.last_token.text, u) || o(a.text, u)
        if (M) {
          var P =
            (o(this._flags.last_token.text, u) &&
              o(this._options.operator_position, d)) ||
            o(a.text, u)
          w = w && P
        }
        if (w) this.print_newline(false, true)
        else if (this._options.wrap_line_length) {
          if (m(this._flags.last_token, O)) return
          this._output.set_wrap_point()
        }
      }
    }),
    (f.prototype.print_newline = function (a, E) {
      if (
        !E &&
        this._flags.last_token.text !== ';' &&
        this._flags.last_token.text !== ',' &&
        this._flags.last_token.text !== '=' &&
        (this._flags.last_token.type !== r.OPERATOR ||
          this._flags.last_token.text === '--' ||
          this._flags.last_token.text === '++')
      )
        for (
          var w = this._tokens.peek();
          this._flags.mode === _.Statement &&
          !(this._flags.if_block && h(w, 'else')) &&
          !this._flags.do_block;

        )
          this.restore_mode()
      this._output.add_new_line(a) && (this._flags.multiline_frame = true)
    }),
    (f.prototype.print_token_line_indentation = function (a) {
      this._output.just_added_newline() &&
        (this._options.keep_array_indentation &&
        a.newlines &&
        (a.text === '[' || x(this._flags.mode))
          ? (this._output.current_line.set_indent(-1),
            this._output.current_line.push(a.whitespace_before),
            (this._output.space_before_token = false))
          : this._output.set_indent(
              this._flags.indentation_level,
              this._flags.alignment,
            ) &&
            (this._flags.line_indent_level = this._flags.indentation_level))
    }),
    (f.prototype.print_token = function (a) {
      if (this._output.raw) {
        this._output.add_raw_token(a)
        return
      }
      if (
        this._options.comma_first &&
        a.previous &&
        a.previous.type === r.COMMA &&
        this._output.just_added_newline() &&
        this._output.previous_line.last() === ','
      ) {
        var E = this._output.previous_line.pop()
        this._output.previous_line.is_empty() &&
          (this._output.previous_line.push(E),
          this._output.trim(true),
          this._output.current_line.pop(),
          this._output.trim()),
          this.print_token_line_indentation(a),
          this._output.add_token(','),
          (this._output.space_before_token = true)
      }
      this.print_token_line_indentation(a),
        (this._output.non_breaking_space = true),
        this._output.add_token(a.text),
        this._output.previous_token_wrapped &&
          (this._flags.multiline_frame = true)
    }),
    (f.prototype.indent = function () {
      ;(this._flags.indentation_level += 1),
        this._output.set_indent(
          this._flags.indentation_level,
          this._flags.alignment,
        )
    }),
    (f.prototype.deindent = function () {
      this._flags.indentation_level > 0 &&
        (!this._flags.parent ||
          this._flags.indentation_level >
            this._flags.parent.indentation_level) &&
        ((this._flags.indentation_level -= 1),
        this._output.set_indent(
          this._flags.indentation_level,
          this._flags.alignment,
        ))
    }),
    (f.prototype.set_mode = function (a) {
      this._flags
        ? (this._flag_store.push(this._flags),
          (this._previous_flags = this._flags))
        : (this._previous_flags = this.create_flags(null, a)),
        (this._flags = this.create_flags(this._previous_flags, a)),
        this._output.set_indent(
          this._flags.indentation_level,
          this._flags.alignment,
        )
    }),
    (f.prototype.restore_mode = function () {
      this._flag_store.length > 0 &&
        ((this._previous_flags = this._flags),
        (this._flags = this._flag_store.pop()),
        this._previous_flags.mode === _.Statement &&
          b(this._output, this._previous_flags),
        this._output.set_indent(
          this._flags.indentation_level,
          this._flags.alignment,
        ))
    }),
    (f.prototype.start_of_object_property = function () {
      return (
        this._flags.parent.mode === _.ObjectLiteral &&
        this._flags.mode === _.Statement &&
        ((this._flags.last_token.text === ':' &&
          this._flags.ternary_depth === 0) ||
          m(this._flags.last_token, ['get', 'set']))
      )
    }),
    (f.prototype.start_of_statement = function (a) {
      var E = false
      return (
        (E =
          E ||
          (m(this._flags.last_token, ['var', 'let', 'const']) &&
            a.type === r.WORD)),
        (E = E || h(this._flags.last_token, 'do')),
        (E =
          E ||
          (!(
            this._flags.parent.mode === _.ObjectLiteral &&
            this._flags.mode === _.Statement
          ) &&
            m(this._flags.last_token, O) &&
            !a.newlines)),
        (E =
          E ||
          (h(this._flags.last_token, 'else') &&
            !(h(a, 'if') && !a.comments_before))),
        (E =
          E ||
          (this._flags.last_token.type === r.END_EXPR &&
            (this._previous_flags.mode === _.ForInitializer ||
              this._previous_flags.mode === _.Conditional))),
        (E =
          E ||
          (this._flags.last_token.type === r.WORD &&
            this._flags.mode === _.BlockStatement &&
            !this._flags.in_case &&
            !(a.text === '--' || a.text === '++') &&
            this._last_last_text !== 'function' &&
            a.type !== r.WORD &&
            a.type !== r.RESERVED)),
        (E =
          E ||
          (this._flags.mode === _.ObjectLiteral &&
            ((this._flags.last_token.text === ':' &&
              this._flags.ternary_depth === 0) ||
              m(this._flags.last_token, ['get', 'set'])))),
        E
          ? (this.set_mode(_.Statement),
            this.indent(),
            this.handle_whitespace_and_comments(a, true),
            this.start_of_object_property() ||
              this.allow_wrap_or_preserved_newline(
                a,
                m(a, ['do', 'for', 'if', 'while']),
              ),
            true)
          : false
      )
    }),
    (f.prototype.handle_start_expr = function (a) {
      this.start_of_statement(a) || this.handle_whitespace_and_comments(a)
      var E = _.Expression
      if (a.text === '[') {
        if (
          this._flags.last_token.type === r.WORD ||
          this._flags.last_token.text === ')'
        ) {
          m(this._flags.last_token, l) &&
            (this._output.space_before_token = true),
            this.print_token(a),
            this.set_mode(E),
            this.indent(),
            this._options.space_in_paren &&
              (this._output.space_before_token = true)
          return
        }
        ;(E = _.ArrayLiteral),
          x(this._flags.mode) &&
            (this._flags.last_token.text === '[' ||
              (this._flags.last_token.text === ',' &&
                (this._last_last_text === ']' ||
                  this._last_last_text === '}'))) &&
            (this._options.keep_array_indentation || this.print_newline()),
          o(this._flags.last_token.type, [
            r.START_EXPR,
            r.END_EXPR,
            r.WORD,
            r.OPERATOR,
            r.DOT,
          ]) || (this._output.space_before_token = true)
      } else {
        if (this._flags.last_token.type === r.RESERVED)
          this._flags.last_token.text === 'for'
            ? ((this._output.space_before_token =
                this._options.space_before_conditional),
              (E = _.ForInitializer))
            : o(this._flags.last_token.text, ['if', 'while', 'switch'])
              ? ((this._output.space_before_token =
                  this._options.space_before_conditional),
                (E = _.Conditional))
              : o(this._flags.last_word, ['await', 'async'])
                ? (this._output.space_before_token = true)
                : this._flags.last_token.text === 'import' &&
                    a.whitespace_before === ''
                  ? (this._output.space_before_token = false)
                  : (o(this._flags.last_token.text, l) ||
                      this._flags.last_token.text === 'catch') &&
                    (this._output.space_before_token = true)
        else if (
          this._flags.last_token.type === r.EQUALS ||
          this._flags.last_token.type === r.OPERATOR
        )
          this.start_of_object_property() ||
            this.allow_wrap_or_preserved_newline(a)
        else if (this._flags.last_token.type === r.WORD) {
          this._output.space_before_token = false
          var w = this._tokens.peek(-3)
          if (this._options.space_after_named_function && w) {
            var M = this._tokens.peek(-4)
            m(w, ['async', 'function']) ||
            (w.text === '*' && m(M, ['async', 'function']))
              ? (this._output.space_before_token = true)
              : this._flags.mode === _.ObjectLiteral
                ? (w.text === '{' ||
                    w.text === ',' ||
                    (w.text === '*' && (M.text === '{' || M.text === ','))) &&
                  (this._output.space_before_token = true)
                : this._flags.parent &&
                  this._flags.parent.class_start_block &&
                  (this._output.space_before_token = true)
          }
        } else this.allow_wrap_or_preserved_newline(a)
        ;((this._flags.last_token.type === r.RESERVED &&
          (this._flags.last_word === 'function' ||
            this._flags.last_word === 'typeof')) ||
          (this._flags.last_token.text === '*' &&
            (o(this._last_last_text, ['function', 'yield']) ||
              (this._flags.mode === _.ObjectLiteral &&
                o(this._last_last_text, ['{', ',']))))) &&
          (this._output.space_before_token =
            this._options.space_after_anon_function)
      }
      this._flags.last_token.text === ';' ||
      this._flags.last_token.type === r.START_BLOCK
        ? this.print_newline()
        : (this._flags.last_token.type === r.END_EXPR ||
            this._flags.last_token.type === r.START_EXPR ||
            this._flags.last_token.type === r.END_BLOCK ||
            this._flags.last_token.text === '.' ||
            this._flags.last_token.type === r.COMMA) &&
          this.allow_wrap_or_preserved_newline(a, a.newlines),
        this.print_token(a),
        this.set_mode(E),
        this._options.space_in_paren &&
          (this._output.space_before_token = true),
        this.indent()
    }),
    (f.prototype.handle_end_expr = function (a) {
      for (; this._flags.mode === _.Statement; ) this.restore_mode()
      this.handle_whitespace_and_comments(a),
        this._flags.multiline_frame &&
          this.allow_wrap_or_preserved_newline(
            a,
            a.text === ']' &&
              x(this._flags.mode) &&
              !this._options.keep_array_indentation,
          ),
        this._options.space_in_paren &&
          (this._flags.last_token.type === r.START_EXPR &&
          !this._options.space_in_empty_paren
            ? (this._output.trim(), (this._output.space_before_token = false))
            : (this._output.space_before_token = true)),
        this.deindent(),
        this.print_token(a),
        this.restore_mode(),
        b(this._output, this._previous_flags),
        this._flags.do_while &&
          this._previous_flags.mode === _.Conditional &&
          ((this._previous_flags.mode = _.Expression),
          (this._flags.do_block = false),
          (this._flags.do_while = false))
    }),
    (f.prototype.handle_start_block = function (a) {
      this.handle_whitespace_and_comments(a)
      var E = this._tokens.peek(),
        w = this._tokens.peek(1)
      this._flags.last_word === 'switch' &&
      this._flags.last_token.type === r.END_EXPR
        ? (this.set_mode(_.BlockStatement),
          (this._flags.in_case_statement = true))
        : this._flags.case_body
          ? this.set_mode(_.BlockStatement)
          : w &&
              ((o(w.text, [':', ',']) &&
                o(E.type, [r.STRING, r.WORD, r.RESERVED])) ||
                (o(E.text, ['get', 'set', '...']) &&
                  o(w.type, [r.WORD, r.RESERVED])))
            ? o(this._last_last_text, ['class', 'interface']) &&
              !o(w.text, [':', ','])
              ? this.set_mode(_.BlockStatement)
              : this.set_mode(_.ObjectLiteral)
            : this._flags.last_token.type === r.OPERATOR &&
                this._flags.last_token.text === '=>'
              ? this.set_mode(_.BlockStatement)
              : o(this._flags.last_token.type, [
                    r.EQUALS,
                    r.START_EXPR,
                    r.COMMA,
                    r.OPERATOR,
                  ]) ||
                  m(this._flags.last_token, [
                    'return',
                    'throw',
                    'import',
                    'default',
                  ])
                ? this.set_mode(_.ObjectLiteral)
                : this.set_mode(_.BlockStatement),
        this._flags.last_token &&
          m(this._flags.last_token.previous, ['class', 'extends']) &&
          (this._flags.class_start_block = true)
      var M = !E.comments_before && E.text === '}',
        P =
          M &&
          this._flags.last_word === 'function' &&
          this._flags.last_token.type === r.END_EXPR
      if (this._options.brace_preserve_inline) {
        var j = 0,
          F = null
        this._flags.inline_frame = true
        do
          if (((j += 1), (F = this._tokens.peek(j - 1)), F.newlines)) {
            this._flags.inline_frame = false
            break
          }
        while (F.type !== r.EOF && !(F.type === r.END_BLOCK && F.opened === a))
      }
      ;(this._options.brace_style === 'expand' ||
        (this._options.brace_style === 'none' && a.newlines)) &&
      !this._flags.inline_frame
        ? this._flags.last_token.type !== r.OPERATOR &&
          (P ||
            this._flags.last_token.type === r.EQUALS ||
            (m(this._flags.last_token, S) &&
              this._flags.last_token.text !== 'else'))
          ? (this._output.space_before_token = true)
          : this.print_newline(false, true)
        : (x(this._previous_flags.mode) &&
            (this._flags.last_token.type === r.START_EXPR ||
              this._flags.last_token.type === r.COMMA) &&
            ((this._flags.last_token.type === r.COMMA ||
              this._options.space_in_paren) &&
              (this._output.space_before_token = true),
            (this._flags.last_token.type === r.COMMA ||
              (this._flags.last_token.type === r.START_EXPR &&
                this._flags.inline_frame)) &&
              (this.allow_wrap_or_preserved_newline(a),
              (this._previous_flags.multiline_frame =
                this._previous_flags.multiline_frame ||
                this._flags.multiline_frame),
              (this._flags.multiline_frame = false))),
          this._flags.last_token.type !== r.OPERATOR &&
            this._flags.last_token.type !== r.START_EXPR &&
            (o(this._flags.last_token.type, [r.START_BLOCK, r.SEMICOLON]) &&
            !this._flags.inline_frame
              ? this.print_newline()
              : (this._output.space_before_token = true))),
        this.print_token(a),
        this.indent(),
        !M &&
          !(this._options.brace_preserve_inline && this._flags.inline_frame) &&
          this.print_newline()
    }),
    (f.prototype.handle_end_block = function (a) {
      for (
        this.handle_whitespace_and_comments(a);
        this._flags.mode === _.Statement;

      )
        this.restore_mode()
      var E = this._flags.last_token.type === r.START_BLOCK
      this._flags.inline_frame && !E
        ? (this._output.space_before_token = true)
        : this._options.brace_style === 'expand'
          ? E || this.print_newline()
          : E ||
            (x(this._flags.mode) && this._options.keep_array_indentation
              ? ((this._options.keep_array_indentation = false),
                this.print_newline(),
                (this._options.keep_array_indentation = true))
              : this.print_newline()),
        this.restore_mode(),
        this.print_token(a)
    }),
    (f.prototype.handle_word = function (a) {
      if (a.type === r.RESERVED) {
        if (o(a.text, ['set', 'get']) && this._flags.mode !== _.ObjectLiteral)
          a.type = r.WORD
        else if (a.text === 'import' && o(this._tokens.peek().text, ['(', '.']))
          a.type = r.WORD
        else if (o(a.text, ['as', 'from']) && !this._flags.import_block)
          a.type = r.WORD
        else if (this._flags.mode === _.ObjectLiteral) {
          var E = this._tokens.peek()
          E.text === ':' && (a.type = r.WORD)
        }
      }
      if (
        (this.start_of_statement(a)
          ? m(this._flags.last_token, ['var', 'let', 'const']) &&
            a.type === r.WORD &&
            (this._flags.declaration_statement = true)
          : a.newlines &&
              !k(this._flags.mode) &&
              (this._flags.last_token.type !== r.OPERATOR ||
                this._flags.last_token.text === '--' ||
                this._flags.last_token.text === '++') &&
              this._flags.last_token.type !== r.EQUALS &&
              (this._options.preserve_newlines ||
                !m(this._flags.last_token, [
                  'var',
                  'let',
                  'const',
                  'set',
                  'get',
                ]))
            ? (this.handle_whitespace_and_comments(a), this.print_newline())
            : this.handle_whitespace_and_comments(a),
        this._flags.do_block && !this._flags.do_while)
      )
        if (h(a, 'while')) {
          ;(this._output.space_before_token = true),
            this.print_token(a),
            (this._output.space_before_token = true),
            (this._flags.do_while = true)
          return
        } else this.print_newline(), (this._flags.do_block = false)
      if (this._flags.if_block)
        if (!this._flags.else_block && h(a, 'else'))
          this._flags.else_block = true
        else {
          for (; this._flags.mode === _.Statement; ) this.restore_mode()
          ;(this._flags.if_block = false), (this._flags.else_block = false)
        }
      if (this._flags.in_case_statement && m(a, ['case', 'default'])) {
        this.print_newline(),
          !this._flags.case_block &&
            (this._flags.case_body || this._options.jslint_happy) &&
            this.deindent(),
          (this._flags.case_body = false),
          this.print_token(a),
          (this._flags.in_case = true)
        return
      }
      if (
        ((this._flags.last_token.type === r.COMMA ||
          this._flags.last_token.type === r.START_EXPR ||
          this._flags.last_token.type === r.EQUALS ||
          this._flags.last_token.type === r.OPERATOR) &&
          !this.start_of_object_property() &&
          !(
            o(this._flags.last_token.text, ['+', '-']) &&
            this._last_last_text === ':' &&
            this._flags.parent.mode === _.ObjectLiteral
          ) &&
          this.allow_wrap_or_preserved_newline(a),
        h(a, 'function'))
      ) {
        ;(o(this._flags.last_token.text, ['}', ';']) ||
          (this._output.just_added_newline() &&
            !(
              o(this._flags.last_token.text, ['(', '[', '{', ':', '=', ',']) ||
              this._flags.last_token.type === r.OPERATOR
            ))) &&
          !this._output.just_added_blankline() &&
          !a.comments_before &&
          (this.print_newline(), this.print_newline(true)),
          this._flags.last_token.type === r.RESERVED ||
          this._flags.last_token.type === r.WORD
            ? m(this._flags.last_token, ['get', 'set', 'new', 'export']) ||
              m(this._flags.last_token, O)
              ? (this._output.space_before_token = true)
              : h(this._flags.last_token, 'default') &&
                  this._last_last_text === 'export'
                ? (this._output.space_before_token = true)
                : this._flags.last_token.text === 'declare'
                  ? (this._output.space_before_token = true)
                  : this.print_newline()
            : this._flags.last_token.type === r.OPERATOR ||
                this._flags.last_token.text === '='
              ? (this._output.space_before_token = true)
              : (!this._flags.multiline_frame &&
                  (k(this._flags.mode) || x(this._flags.mode))) ||
                this.print_newline(),
          this.print_token(a),
          (this._flags.last_word = a.text)
        return
      }
      var w = 'NONE'
      if (
        (this._flags.last_token.type === r.END_BLOCK
          ? this._previous_flags.inline_frame
            ? (w = 'SPACE')
            : m(a, ['else', 'catch', 'finally', 'from'])
              ? this._options.brace_style === 'expand' ||
                this._options.brace_style === 'end-expand' ||
                (this._options.brace_style === 'none' && a.newlines)
                ? (w = 'NEWLINE')
                : ((w = 'SPACE'), (this._output.space_before_token = true))
              : (w = 'NEWLINE')
          : this._flags.last_token.type === r.SEMICOLON &&
              this._flags.mode === _.BlockStatement
            ? (w = 'NEWLINE')
            : this._flags.last_token.type === r.SEMICOLON && k(this._flags.mode)
              ? (w = 'SPACE')
              : this._flags.last_token.type === r.STRING
                ? (w = 'NEWLINE')
                : this._flags.last_token.type === r.RESERVED ||
                    this._flags.last_token.type === r.WORD ||
                    (this._flags.last_token.text === '*' &&
                      (o(this._last_last_text, ['function', 'yield']) ||
                        (this._flags.mode === _.ObjectLiteral &&
                          o(this._last_last_text, ['{', ',']))))
                  ? (w = 'SPACE')
                  : this._flags.last_token.type === r.START_BLOCK
                    ? this._flags.inline_frame
                      ? (w = 'SPACE')
                      : (w = 'NEWLINE')
                    : this._flags.last_token.type === r.END_EXPR &&
                      ((this._output.space_before_token = true),
                      (w = 'NEWLINE')),
        m(a, l) &&
          this._flags.last_token.text !== ')' &&
          (this._flags.inline_frame ||
          this._flags.last_token.text === 'else' ||
          this._flags.last_token.text === 'export'
            ? (w = 'SPACE')
            : (w = 'NEWLINE')),
        m(a, ['else', 'catch', 'finally']))
      )
        if (
          (!(
            this._flags.last_token.type === r.END_BLOCK &&
            this._previous_flags.mode === _.BlockStatement
          ) ||
            this._options.brace_style === 'expand' ||
            this._options.brace_style === 'end-expand' ||
            (this._options.brace_style === 'none' && a.newlines)) &&
          !this._flags.inline_frame
        )
          this.print_newline()
        else {
          this._output.trim(true)
          var M = this._output.current_line
          M.last() !== '}' && this.print_newline(),
            (this._output.space_before_token = true)
        }
      else
        w === 'NEWLINE'
          ? m(this._flags.last_token, S)
            ? (this._output.space_before_token = true)
            : this._flags.last_token.text === 'declare' &&
                m(a, ['var', 'let', 'const'])
              ? (this._output.space_before_token = true)
              : this._flags.last_token.type !== r.END_EXPR
                ? (this._flags.last_token.type !== r.START_EXPR ||
                    !m(a, ['var', 'let', 'const'])) &&
                  this._flags.last_token.text !== ':' &&
                  (h(a, 'if') && h(a.previous, 'else')
                    ? (this._output.space_before_token = true)
                    : this.print_newline())
                : m(a, l) &&
                  this._flags.last_token.text !== ')' &&
                  this.print_newline()
          : this._flags.multiline_frame &&
              x(this._flags.mode) &&
              this._flags.last_token.text === ',' &&
              this._last_last_text === '}'
            ? this.print_newline()
            : w === 'SPACE' && (this._output.space_before_token = true)
      a.previous &&
        (a.previous.type === r.WORD || a.previous.type === r.RESERVED) &&
        (this._output.space_before_token = true),
        this.print_token(a),
        (this._flags.last_word = a.text),
        a.type === r.RESERVED &&
          (a.text === 'do'
            ? (this._flags.do_block = true)
            : a.text === 'if'
              ? (this._flags.if_block = true)
              : a.text === 'import'
                ? (this._flags.import_block = true)
                : this._flags.import_block &&
                  h(a, 'from') &&
                  (this._flags.import_block = false))
    }),
    (f.prototype.handle_semicolon = function (a) {
      this.start_of_statement(a)
        ? (this._output.space_before_token = false)
        : this.handle_whitespace_and_comments(a)
      for (
        var E = this._tokens.peek();
        this._flags.mode === _.Statement &&
        !(this._flags.if_block && h(E, 'else')) &&
        !this._flags.do_block;

      )
        this.restore_mode()
      this._flags.import_block && (this._flags.import_block = false),
        this.print_token(a)
    }),
    (f.prototype.handle_string = function (a) {
      ;(a.text.startsWith('`') &&
        a.newlines === 0 &&
        a.whitespace_before === '' &&
        (a.previous.text === ')' || this._flags.last_token.type === r.WORD)) ||
        (this.start_of_statement(a)
          ? (this._output.space_before_token = true)
          : (this.handle_whitespace_and_comments(a),
            this._flags.last_token.type === r.RESERVED ||
            this._flags.last_token.type === r.WORD ||
            this._flags.inline_frame
              ? (this._output.space_before_token = true)
              : this._flags.last_token.type === r.COMMA ||
                  this._flags.last_token.type === r.START_EXPR ||
                  this._flags.last_token.type === r.EQUALS ||
                  this._flags.last_token.type === r.OPERATOR
                ? this.start_of_object_property() ||
                  this.allow_wrap_or_preserved_newline(a)
                : a.text.startsWith('`') &&
                    this._flags.last_token.type === r.END_EXPR &&
                    (a.previous.text === ']' || a.previous.text === ')') &&
                    a.newlines === 0
                  ? (this._output.space_before_token = true)
                  : this.print_newline())),
        this.print_token(a)
    }),
    (f.prototype.handle_equals = function (a) {
      this.start_of_statement(a) || this.handle_whitespace_and_comments(a),
        this._flags.declaration_statement &&
          (this._flags.declaration_assignment = true),
        (this._output.space_before_token = true),
        this.print_token(a),
        (this._output.space_before_token = true)
    }),
    (f.prototype.handle_comma = function (a) {
      this.handle_whitespace_and_comments(a, true),
        this.print_token(a),
        (this._output.space_before_token = true),
        this._flags.declaration_statement
          ? (k(this._flags.parent.mode) &&
              (this._flags.declaration_assignment = false),
            this._flags.declaration_assignment
              ? ((this._flags.declaration_assignment = false),
                this.print_newline(false, true))
              : this._options.comma_first &&
                this.allow_wrap_or_preserved_newline(a))
          : this._flags.mode === _.ObjectLiteral ||
              (this._flags.mode === _.Statement &&
                this._flags.parent.mode === _.ObjectLiteral)
            ? (this._flags.mode === _.Statement && this.restore_mode(),
              this._flags.inline_frame || this.print_newline())
            : this._options.comma_first &&
              this.allow_wrap_or_preserved_newline(a)
    }),
    (f.prototype.handle_operator = function (a) {
      var E =
          a.text === '*' &&
          (m(this._flags.last_token, ['function', 'yield']) ||
            o(this._flags.last_token.type, [
              r.START_BLOCK,
              r.COMMA,
              r.END_BLOCK,
              r.SEMICOLON,
            ])),
        w =
          o(a.text, ['-', '+']) &&
          (o(this._flags.last_token.type, [
            r.START_BLOCK,
            r.START_EXPR,
            r.EQUALS,
            r.OPERATOR,
          ]) ||
            o(this._flags.last_token.text, l) ||
            this._flags.last_token.text === ',')
      if (!this.start_of_statement(a)) {
        var M = !E
        this.handle_whitespace_and_comments(a, M)
      }
      if (a.text === '*' && this._flags.last_token.type === r.DOT) {
        this.print_token(a)
        return
      }
      if (a.text === '::') {
        this.print_token(a)
        return
      }
      if (o(a.text, ['-', '+']) && this.start_of_object_property()) {
        this.print_token(a)
        return
      }
      if (
        (this._flags.last_token.type === r.OPERATOR &&
          o(this._options.operator_position, d) &&
          this.allow_wrap_or_preserved_newline(a),
        a.text === ':' && this._flags.in_case)
      ) {
        this.print_token(a),
          (this._flags.in_case = false),
          (this._flags.case_body = true),
          this._tokens.peek().type !== r.START_BLOCK
            ? (this.indent(),
              this.print_newline(),
              (this._flags.case_block = false))
            : ((this._flags.case_block = true),
              (this._output.space_before_token = true))
        return
      }
      var P = true,
        j = true,
        F = false
      if (
        (a.text === ':'
          ? this._flags.ternary_depth === 0
            ? (P = false)
            : ((this._flags.ternary_depth -= 1), (F = true))
          : a.text === '?' && (this._flags.ternary_depth += 1),
        !w && !E && this._options.preserve_newlines && o(a.text, u))
      ) {
        var y = a.text === ':',
          T = y && F,
          R = y && !F
        switch (this._options.operator_position) {
          case L.before_newline:
            ;(this._output.space_before_token = !R),
              this.print_token(a),
              (!y || T) && this.allow_wrap_or_preserved_newline(a),
              (this._output.space_before_token = true)
            return
          case L.after_newline:
            ;(this._output.space_before_token = true),
              !y || T
                ? this._tokens.peek().newlines
                  ? this.print_newline(false, true)
                  : this.allow_wrap_or_preserved_newline(a)
                : (this._output.space_before_token = false),
              this.print_token(a),
              (this._output.space_before_token = true)
            return
          case L.preserve_newline:
            R || this.allow_wrap_or_preserved_newline(a),
              (P = !(this._output.just_added_newline() || R)),
              (this._output.space_before_token = P),
              this.print_token(a),
              (this._output.space_before_token = true)
            return
        }
      }
      if (E) {
        this.allow_wrap_or_preserved_newline(a), (P = false)
        var I = this._tokens.peek()
        j = I && o(I.type, [r.WORD, r.RESERVED])
      } else if (a.text === '...')
        this.allow_wrap_or_preserved_newline(a),
          (P = this._flags.last_token.type === r.START_BLOCK),
          (j = false)
      else if (o(a.text, ['--', '++', '!', '~']) || w) {
        if (
          ((this._flags.last_token.type === r.COMMA ||
            this._flags.last_token.type === r.START_EXPR) &&
            this.allow_wrap_or_preserved_newline(a),
          (P = false),
          (j = false),
          a.newlines && (a.text === '--' || a.text === '++' || a.text === '~'))
        ) {
          var $ = m(this._flags.last_token, S) && a.newlines
          $ &&
            (this._previous_flags.if_block ||
              this._previous_flags.else_block) &&
            this.restore_mode(),
            this.print_newline($, true)
        }
        this._flags.last_token.text === ';' &&
          k(this._flags.mode) &&
          (P = true),
          this._flags.last_token.type === r.RESERVED
            ? (P = true)
            : this._flags.last_token.type === r.END_EXPR
              ? (P = !(
                  this._flags.last_token.text === ']' &&
                  (a.text === '--' || a.text === '++')
                ))
              : this._flags.last_token.type === r.OPERATOR &&
                ((P =
                  o(a.text, ['--', '-', '++', '+']) &&
                  o(this._flags.last_token.text, ['--', '-', '++', '+'])),
                o(a.text, ['+', '-']) &&
                  o(this._flags.last_token.text, ['--', '++']) &&
                  (j = true)),
          ((this._flags.mode === _.BlockStatement &&
            !this._flags.inline_frame) ||
            this._flags.mode === _.Statement) &&
            (this._flags.last_token.text === '{' ||
              this._flags.last_token.text === ';') &&
            this.print_newline()
      }
      ;(this._output.space_before_token = this._output.space_before_token || P),
        this.print_token(a),
        (this._output.space_before_token = j)
    }),
    (f.prototype.handle_block_comment = function (a, E) {
      if (this._output.raw) {
        this._output.add_raw_token(a),
          a.directives &&
            a.directives.preserve === 'end' &&
            (this._output.raw = this._options.test_output_raw)
        return
      }
      if (a.directives) {
        this.print_newline(false, E),
          this.print_token(a),
          a.directives.preserve === 'start' && (this._output.raw = true),
          this.print_newline(false, true)
        return
      }
      if (!i.newline.test(a.text) && !a.newlines) {
        ;(this._output.space_before_token = true),
          this.print_token(a),
          (this._output.space_before_token = true)
        return
      } else this.print_block_commment(a, E)
    }),
    (f.prototype.print_block_commment = function (a, E) {
      var w = A(a.text),
        M,
        P = false,
        j = false,
        F = a.whitespace_before,
        y = F.length
      if (
        (this.print_newline(false, E),
        this.print_token_line_indentation(a),
        this._output.add_token(w[0]),
        this.print_newline(false, E),
        w.length > 1)
      ) {
        for (
          w = w.slice(1),
            P = p(w, '*'),
            j = v(w, F),
            P && (this._flags.alignment = 1),
            M = 0;
          M < w.length;
          M++
        )
          P
            ? (this.print_token_line_indentation(a),
              this._output.add_token(c(w[M])))
            : j && w[M]
              ? (this.print_token_line_indentation(a),
                this._output.add_token(w[M].substring(y)))
              : (this._output.current_line.set_indent(-1),
                this._output.add_token(w[M])),
            this.print_newline(false, E)
        this._flags.alignment = 0
      }
    }),
    (f.prototype.handle_comment = function (a, E) {
      a.newlines ? this.print_newline(false, E) : this._output.trim(true),
        (this._output.space_before_token = true),
        this.print_token(a),
        this.print_newline(false, E)
    }),
    (f.prototype.handle_dot = function (a) {
      this.start_of_statement(a) ||
        this.handle_whitespace_and_comments(a, true),
        this._flags.last_token.text.match('^[0-9]+$') &&
          (this._output.space_before_token = true),
        m(this._flags.last_token, S)
          ? (this._output.space_before_token = false)
          : this.allow_wrap_or_preserved_newline(
              a,
              this._flags.last_token.text === ')' &&
                this._options.break_chained_methods,
            ),
        this._options.unindent_chained_methods &&
          this._output.just_added_newline() &&
          this.deindent(),
        this.print_token(a)
    }),
    (f.prototype.handle_unknown = function (a, E) {
      this.print_token(a),
        a.text[a.text.length - 1] ===
          `
` && this.print_newline(false, E)
    }),
    (f.prototype.handle_eof = function (a) {
      for (; this._flags.mode === _.Statement; ) this.restore_mode()
      this.handle_whitespace_and_comments(a)
    }),
    (Ot.Beautifier = f),
    Ot
  )
}
var ki
function Ts() {
  if (ki) return Je.exports
  ki = 1
  var e = xs().Beautifier,
    t = on().Options
  function i(n, s) {
    var l = new e(n, s)
    return l.beautify()
  }
  return (
    (Je.exports = i),
    (Je.exports.defaultOptions = function () {
      return new t()
    }),
    Je.exports
  )
}
var tt = { exports: {} }
var Pt = {}
var Bt = {}
var Si
function un() {
  if (Si) return Bt
  Si = 1
  var e = qt().Options
  function t(i) {
    e.call(this, i, 'css'),
      (this.selector_separator_newline = this._get_boolean(
        'selector_separator_newline',
        true,
      )),
      (this.newline_between_rules = this._get_boolean(
        'newline_between_rules',
        true,
      ))
    var n = this._get_boolean('space_around_selector_separator')
    this.space_around_combinator =
      this._get_boolean('space_around_combinator') || n
    var s = this._get_selection_list('brace_style', [
      'collapse',
      'expand',
      'end-expand',
      'none',
      'preserve-inline',
    ])
    this.brace_style = 'collapse'
    for (var l = 0; l < s.length; l++)
      s[l] !== 'expand'
        ? (this.brace_style = 'collapse')
        : (this.brace_style = s[l])
  }
  return (t.prototype = new e()), (Bt.Options = t), Bt
}
var Ai
function Os() {
  if (Ai) return Pt
  Ai = 1
  var e = un().Options,
    t = Ht().Output,
    i = Xt().InputScanner,
    n = Vt().Directives,
    s = new n(/\/\*/, /\*\//),
    l = /\r\n|[\r\n]/,
    u = /\r\n|[\r\n]/g,
    r = /\s/,
    o = /(?:\s|\n)+/g,
    c = /\/\*(?:[\s\S]*?)((?:\*\/)|$)/g,
    g = /\/\/(?:[^\n\r\u2028\u2029]*)/g
  function h(m, S) {
    ;(this._source_text = m || ''),
      (this._options = new e(S)),
      (this._ch = null),
      (this._input = null),
      (this.NESTED_AT_RULE = {
        page: true,
        'font-face': true,
        keyframes: true,
        media: true,
        supports: true,
        document: true,
      }),
      (this.CONDITIONAL_GROUP_RULE = {
        media: true,
        supports: true,
        document: true,
      }),
      (this.NON_SEMICOLON_NEWLINE_PROPERTY = [
        'grid-template-areas',
        'grid-template',
      ])
  }
  return (
    (h.prototype.eatString = function (m) {
      var S = ''
      for (this._ch = this._input.next(); this._ch; ) {
        if (((S += this._ch), this._ch === '\\')) S += this._input.next()
        else if (
          m.indexOf(this._ch) !== -1 ||
          this._ch ===
            `
`
        )
          break
        this._ch = this._input.next()
      }
      return S
    }),
    (h.prototype.eatWhitespace = function (m) {
      for (
        var S = r.test(this._input.peek()), C = 0;
        r.test(this._input.peek());

      )
        (this._ch = this._input.next()),
          m &&
            this._ch ===
              `
` &&
            (C === 0 || C < this._options.max_preserve_newlines) &&
            (C++, this._output.add_new_line(true))
      return S
    }),
    (h.prototype.foundNestedPseudoClass = function () {
      for (var m = 0, S = 1, C = this._input.peek(S); C; ) {
        if (C === '{') return true
        if (C === '(') m += 1
        else if (C === ')') {
          if (m === 0) return false
          m -= 1
        } else if (C === ';' || C === '}') return false
        S++, (C = this._input.peek(S))
      }
      return false
    }),
    (h.prototype.print_string = function (m) {
      this._output.set_indent(this._indentLevel),
        (this._output.non_breaking_space = true),
        this._output.add_token(m)
    }),
    (h.prototype.preserveSingleSpace = function (m) {
      m && (this._output.space_before_token = true)
    }),
    (h.prototype.indent = function () {
      this._indentLevel++
    }),
    (h.prototype.outdent = function () {
      this._indentLevel > 0 && this._indentLevel--
    }),
    (h.prototype.beautify = function () {
      if (this._options.disabled) return this._source_text
      var m = this._source_text,
        S = this._options.eol
      S === 'auto' &&
        ((S = `
`),
        m && l.test(m || '') && (S = m.match(l)[0])),
        (m = m.replace(
          u,
          `
`,
        ))
      var C = m.match(/^[\t ]*/)[0]
      ;(this._output = new t(this._options, C)),
        (this._input = new i(m)),
        (this._indentLevel = 0),
        (this._nestedLevel = 0),
        (this._ch = null)
      for (
        var L = 0,
          d = false,
          _ = false,
          b = false,
          A = false,
          x = false,
          k = this._ch,
          p = false,
          v,
          f,
          O;
        (v = this._input.read(o)),
          (f = v !== ''),
          (O = k),
          (this._ch = this._input.next()),
          this._ch === '\\' &&
            this._input.hasNext() &&
            (this._ch += this._input.next()),
          (k = this._ch),
          this._ch;

      )
        if (this._ch === '/' && this._input.peek() === '*') {
          this._output.add_new_line(), this._input.back()
          var a = this._input.read(c),
            E = s.get_directives(a)
          E && E.ignore === 'start' && (a += s.readIgnored(this._input)),
            this.print_string(a),
            this.eatWhitespace(true),
            this._output.add_new_line()
        } else if (this._ch === '/' && this._input.peek() === '/')
          (this._output.space_before_token = true),
            this._input.back(),
            this.print_string(this._input.read(g)),
            this.eatWhitespace(true)
        else if (this._ch === '$') {
          this.preserveSingleSpace(f), this.print_string(this._ch)
          var w = this._input.peekUntilAfter(/[: ,;{}()[\]\/='"]/g)
          w.match(/[ :]$/) &&
            ((w = this.eatString(': ').replace(/\s+$/, '')),
            this.print_string(w),
            (this._output.space_before_token = true)),
            L === 0 && w.indexOf(':') !== -1 && ((_ = true), this.indent())
        } else if (this._ch === '@')
          if ((this.preserveSingleSpace(f), this._input.peek() === '{'))
            this.print_string(this._ch + this.eatString('}'))
          else {
            this.print_string(this._ch)
            var M = this._input.peekUntilAfter(/[: ,;{}()[\]\/='"]/g)
            M.match(/[ :]$/) &&
              ((M = this.eatString(': ').replace(/\s+$/, '')),
              this.print_string(M),
              (this._output.space_before_token = true)),
              L === 0 && M.indexOf(':') !== -1
                ? ((_ = true), this.indent())
                : M in this.NESTED_AT_RULE
                  ? ((this._nestedLevel += 1),
                    M in this.CONDITIONAL_GROUP_RULE && (b = true))
                  : L === 0 && !_ && (A = true)
          }
        else if (this._ch === '#' && this._input.peek() === '{')
          this.preserveSingleSpace(f),
            this.print_string(this._ch + this.eatString('}'))
        else if (this._ch === '{')
          _ && ((_ = false), this.outdent()),
            (A = false),
            b
              ? ((b = false), (d = this._indentLevel >= this._nestedLevel))
              : (d = this._indentLevel >= this._nestedLevel - 1),
            this._options.newline_between_rules &&
              d &&
              this._output.previous_line &&
              this._output.previous_line.item(-1) !== '{' &&
              this._output.ensure_empty_line_above('/', ','),
            (this._output.space_before_token = true),
            this._options.brace_style === 'expand'
              ? (this._output.add_new_line(),
                this.print_string(this._ch),
                this.indent(),
                this._output.set_indent(this._indentLevel))
              : (O === '('
                  ? (this._output.space_before_token = false)
                  : O !== ',' && this.indent(),
                this.print_string(this._ch)),
            this.eatWhitespace(true),
            this._output.add_new_line()
        else if (this._ch === '}')
          this.outdent(),
            this._output.add_new_line(),
            O === '{' && this._output.trim(true),
            _ && (this.outdent(), (_ = false)),
            this.print_string(this._ch),
            (d = false),
            this._nestedLevel && this._nestedLevel--,
            this.eatWhitespace(true),
            this._output.add_new_line(),
            this._options.newline_between_rules &&
              !this._output.just_added_blankline() &&
              this._input.peek() !== '}' &&
              this._output.add_new_line(true),
            this._input.peek() === ')' &&
              (this._output.trim(true),
              this._options.brace_style === 'expand' &&
                this._output.add_new_line(true))
        else if (this._ch === ':') {
          for (var P = 0; P < this.NON_SEMICOLON_NEWLINE_PROPERTY.length; P++)
            if (this._input.lookBack(this.NON_SEMICOLON_NEWLINE_PROPERTY[P])) {
              p = true
              break
            }
          ;(d || b) &&
          !(this._input.lookBack('&') || this.foundNestedPseudoClass()) &&
          !this._input.lookBack('(') &&
          !A &&
          L === 0
            ? (this.print_string(':'),
              _ ||
                ((_ = true),
                (this._output.space_before_token = true),
                this.eatWhitespace(true),
                this.indent()))
            : (this._input.lookBack(' ') &&
                (this._output.space_before_token = true),
              this._input.peek() === ':'
                ? ((this._ch = this._input.next()), this.print_string('::'))
                : this.print_string(':'))
        } else if (this._ch === '"' || this._ch === "'") {
          var j = O === '"' || O === "'"
          this.preserveSingleSpace(j || f),
            this.print_string(this._ch + this.eatString(this._ch)),
            this.eatWhitespace(true)
        } else if (this._ch === ';')
          (p = false),
            L === 0
              ? (_ && (this.outdent(), (_ = false)),
                (A = false),
                this.print_string(this._ch),
                this.eatWhitespace(true),
                this._input.peek() !== '/' && this._output.add_new_line())
              : (this.print_string(this._ch),
                this.eatWhitespace(true),
                (this._output.space_before_token = true))
        else if (this._ch === '(')
          if (this._input.lookBack('url'))
            this.print_string(this._ch),
              this.eatWhitespace(),
              L++,
              this.indent(),
              (this._ch = this._input.next()),
              this._ch === ')' || this._ch === '"' || this._ch === "'"
                ? this._input.back()
                : this._ch &&
                  (this.print_string(this._ch + this.eatString(')')),
                  L && (L--, this.outdent()))
          else {
            var F = false
            this._input.lookBack('with') && (F = true),
              this.preserveSingleSpace(f || F),
              this.print_string(this._ch),
              _ && O === '$' && this._options.selector_separator_newline
                ? (this._output.add_new_line(), (x = true))
                : (this.eatWhitespace(), L++, this.indent())
          }
        else if (this._ch === ')')
          L && (L--, this.outdent()),
            x &&
              this._input.peek() === ';' &&
              this._options.selector_separator_newline &&
              ((x = false), this.outdent(), this._output.add_new_line()),
            this.print_string(this._ch)
        else if (this._ch === ',')
          this.print_string(this._ch),
            this.eatWhitespace(true),
            this._options.selector_separator_newline &&
            (!_ || x) &&
            L === 0 &&
            !A
              ? this._output.add_new_line()
              : (this._output.space_before_token = true)
        else if (
          (this._ch === '>' || this._ch === '+' || this._ch === '~') &&
          !_ &&
          L === 0
        )
          this._options.space_around_combinator
            ? ((this._output.space_before_token = true),
              this.print_string(this._ch),
              (this._output.space_before_token = true))
            : (this.print_string(this._ch),
              this.eatWhitespace(),
              this._ch && r.test(this._ch) && (this._ch = ''))
        else if (this._ch === ']') this.print_string(this._ch)
        else if (this._ch === '[')
          this.preserveSingleSpace(f), this.print_string(this._ch)
        else if (this._ch === '=')
          this.eatWhitespace(),
            this.print_string('='),
            r.test(this._ch) && (this._ch = '')
        else if (this._ch === '!' && !this._input.lookBack('\\'))
          (this._output.space_before_token = true), this.print_string(this._ch)
        else {
          var y = O === '"' || O === "'"
          this.preserveSingleSpace(y || f),
            this.print_string(this._ch),
            !this._output.just_added_newline() &&
              this._input.peek() ===
                `
` &&
              p &&
              this._output.add_new_line()
        }
      var T = this._output.get_code(S)
      return T
    }),
    (Pt.Beautifier = h),
    Pt
  )
}
var Ri
function ks() {
  if (Ri) return tt.exports
  Ri = 1
  var e = Os().Beautifier,
    t = un().Options
  function i(n, s) {
    var l = new e(n, s)
    return l.beautify()
  }
  return (
    (tt.exports = i),
    (tt.exports.defaultOptions = function () {
      return new t()
    }),
    tt.exports
  )
}
var it = { exports: {} }
var $t = {}
var Ut = {}
var Ni
function _n() {
  if (Ni) return Ut
  Ni = 1
  var e = qt().Options
  function t(i) {
    e.call(this, i, 'html'),
      this.templating.length === 1 &&
        this.templating[0] === 'auto' &&
        (this.templating = ['django', 'erb', 'handlebars', 'php']),
      (this.indent_inner_html = this._get_boolean('indent_inner_html')),
      (this.indent_body_inner_html = this._get_boolean(
        'indent_body_inner_html',
        true,
      )),
      (this.indent_head_inner_html = this._get_boolean(
        'indent_head_inner_html',
        true,
      )),
      (this.indent_handlebars = this._get_boolean('indent_handlebars', true)),
      (this.wrap_attributes = this._get_selection('wrap_attributes', [
        'auto',
        'force',
        'force-aligned',
        'force-expand-multiline',
        'aligned-multiple',
        'preserve',
        'preserve-aligned',
      ])),
      (this.wrap_attributes_min_attrs = this._get_number(
        'wrap_attributes_min_attrs',
        2,
      )),
      (this.wrap_attributes_indent_size = this._get_number(
        'wrap_attributes_indent_size',
        this.indent_size,
      )),
      (this.extra_liners = this._get_array('extra_liners', [
        'head',
        'body',
        '/html',
      ])),
      (this.inline = this._get_array('inline', [
        'a',
        'abbr',
        'area',
        'audio',
        'b',
        'bdi',
        'bdo',
        'br',
        'button',
        'canvas',
        'cite',
        'code',
        'data',
        'datalist',
        'del',
        'dfn',
        'em',
        'embed',
        'i',
        'iframe',
        'img',
        'input',
        'ins',
        'kbd',
        'keygen',
        'label',
        'map',
        'mark',
        'math',
        'meter',
        'noscript',
        'object',
        'output',
        'progress',
        'q',
        'ruby',
        's',
        'samp',
        'select',
        'small',
        'span',
        'strong',
        'sub',
        'sup',
        'svg',
        'template',
        'textarea',
        'time',
        'u',
        'var',
        'video',
        'wbr',
        'text',
        'acronym',
        'big',
        'strike',
        'tt',
      ])),
      (this.inline_custom_elements = this._get_boolean(
        'inline_custom_elements',
        true,
      )),
      (this.void_elements = this._get_array('void_elements', [
        'area',
        'base',
        'br',
        'col',
        'embed',
        'hr',
        'img',
        'input',
        'keygen',
        'link',
        'menuitem',
        'meta',
        'param',
        'source',
        'track',
        'wbr',
        '!doctype',
        '?xml',
        'basefont',
        'isindex',
      ])),
      (this.unformatted = this._get_array('unformatted', [])),
      (this.content_unformatted = this._get_array('content_unformatted', [
        'pre',
        'textarea',
      ])),
      (this.unformatted_content_delimiter = this._get_characters(
        'unformatted_content_delimiter',
      )),
      (this.indent_scripts = this._get_selection('indent_scripts', [
        'normal',
        'keep',
        'separate',
      ]))
  }
  return (t.prototype = new e()), (Ut.Options = t), Ut
}
var nt = {}
var Ci
function Li() {
  if (Ci) return nt
  Ci = 1
  var e = _t().Tokenizer,
    t = _t().TOKEN,
    i = Vt().Directives,
    n = ln().TemplatablePattern,
    s = dt().Pattern,
    l = {
      TAG_OPEN: 'TK_TAG_OPEN',
      TAG_CLOSE: 'TK_TAG_CLOSE',
      CONTROL_FLOW_OPEN: 'TK_CONTROL_FLOW_OPEN',
      CONTROL_FLOW_CLOSE: 'TK_CONTROL_FLOW_CLOSE',
      ATTRIBUTE: 'TK_ATTRIBUTE',
      EQUALS: 'TK_EQUALS',
      VALUE: 'TK_VALUE',
      COMMENT: 'TK_COMMENT',
      TEXT: 'TK_TEXT',
      UNKNOWN: 'TK_UNKNOWN',
      START: t.START,
      RAW: t.RAW,
      EOF: t.EOF,
    },
    u = new i(/<\!--/, /-->/),
    r = function (o, c) {
      e.call(this, o, c), (this._current_tag_name = '')
      var g = new n(this._input).read_options(this._options),
        h = new s(this._input)
      if (
        ((this.__patterns = {
          word: g.until(/[\n\r\t <]/),
          word_control_flow_close_excluded: g.until(/[\n\r\t <}]/),
          single_quote: g.until_after(/'/),
          double_quote: g.until_after(/"/),
          attribute: g.until(/[\n\r\t =>]|\/>/),
          element_name: g.until(/[\n\r\t >\/]/),
          angular_control_flow_start: h.matching(/\@[a-zA-Z]+[^({]*[({]/),
          handlebars_comment: h.starting_with(/{{!--/).until_after(/--}}/),
          handlebars: h.starting_with(/{{/).until_after(/}}/),
          handlebars_open: h.until(/[\n\r\t }]/),
          handlebars_raw_close: h.until(/}}/),
          comment: h.starting_with(/<!--/).until_after(/-->/),
          cdata: h.starting_with(/<!\[CDATA\[/).until_after(/]]>/),
          conditional_comment: h.starting_with(/<!\[/).until_after(/]>/),
          processing: h.starting_with(/<\?/).until_after(/\?>/),
        }),
        this._options.indent_handlebars &&
          ((this.__patterns.word = this.__patterns.word.exclude('handlebars')),
          (this.__patterns.word_control_flow_close_excluded =
            this.__patterns.word_control_flow_close_excluded.exclude(
              'handlebars',
            ))),
        (this._unformatted_content_delimiter = null),
        this._options.unformatted_content_delimiter)
      ) {
        var m = this._input.get_literal_regexp(
          this._options.unformatted_content_delimiter,
        )
        this.__patterns.unformatted_content_delimiter = h
          .matching(m)
          .until_after(m)
      }
    }
  return (
    (r.prototype = new e()),
    (r.prototype._is_comment = function (o) {
      return false
    }),
    (r.prototype._is_opening = function (o) {
      return o.type === l.TAG_OPEN || o.type === l.CONTROL_FLOW_OPEN
    }),
    (r.prototype._is_closing = function (o, c) {
      return (
        (o.type === l.TAG_CLOSE &&
          c &&
          (((o.text === '>' || o.text === '/>') && c.text[0] === '<') ||
            (o.text === '}}' && c.text[0] === '{' && c.text[1] === '{'))) ||
        (o.type === l.CONTROL_FLOW_CLOSE &&
          o.text === '}' &&
          c.text.endsWith('{'))
      )
    }),
    (r.prototype._reset = function () {
      this._current_tag_name = ''
    }),
    (r.prototype._get_next_token = function (o, c) {
      var g = null
      this._readWhitespace()
      var h = this._input.peek()
      return h === null
        ? this._create_token(l.EOF, '')
        : ((g = g || this._read_open_handlebars(h, c)),
          (g = g || this._read_attribute(h, o, c)),
          (g = g || this._read_close(h, c)),
          (g = g || this._read_control_flows(h, c)),
          (g = g || this._read_raw_content(h, o, c)),
          (g = g || this._read_content_word(h, c)),
          (g = g || this._read_comment_or_cdata(h)),
          (g = g || this._read_processing(h)),
          (g = g || this._read_open(h, c)),
          (g = g || this._create_token(l.UNKNOWN, this._input.next())),
          g)
    }),
    (r.prototype._read_comment_or_cdata = function (o) {
      var c = null,
        g = null,
        h = null
      if (o === '<') {
        var m = this._input.peek(1)
        m === '!' &&
          ((g = this.__patterns.comment.read()),
          g
            ? ((h = u.get_directives(g)),
              h && h.ignore === 'start' && (g += u.readIgnored(this._input)))
            : (g = this.__patterns.cdata.read())),
          g && ((c = this._create_token(l.COMMENT, g)), (c.directives = h))
      }
      return c
    }),
    (r.prototype._read_processing = function (o) {
      var c = null,
        g = null,
        h = null
      if (o === '<') {
        var m = this._input.peek(1)
        ;(m === '!' || m === '?') &&
          ((g = this.__patterns.conditional_comment.read()),
          (g = g || this.__patterns.processing.read())),
          g && ((c = this._create_token(l.COMMENT, g)), (c.directives = h))
      }
      return c
    }),
    (r.prototype._read_open = function (o, c) {
      var g = null,
        h = null
      return (
        (!c || c.type === l.CONTROL_FLOW_OPEN) &&
          o === '<' &&
          ((g = this._input.next()),
          this._input.peek() === '/' && (g += this._input.next()),
          (g += this.__patterns.element_name.read()),
          (h = this._create_token(l.TAG_OPEN, g))),
        h
      )
    }),
    (r.prototype._read_open_handlebars = function (o, c) {
      var g = null,
        h = null
      return (
        (!c || c.type === l.CONTROL_FLOW_OPEN) &&
          this._options.indent_handlebars &&
          o === '{' &&
          this._input.peek(1) === '{' &&
          (this._input.peek(2) === '!'
            ? ((g = this.__patterns.handlebars_comment.read()),
              (g = g || this.__patterns.handlebars.read()),
              (h = this._create_token(l.COMMENT, g)))
            : ((g = this.__patterns.handlebars_open.read()),
              (h = this._create_token(l.TAG_OPEN, g)))),
        h
      )
    }),
    (r.prototype._read_control_flows = function (o, c) {
      var g = '',
        h = null
      if (
        !this._options.templating.includes('angular') ||
        !this._options.indent_handlebars
      )
        return h
      if (o === '@') {
        if (((g = this.__patterns.angular_control_flow_start.read()), g === ''))
          return h
        for (
          var m = g.endsWith('(') ? 1 : 0, S = 0;
          !(g.endsWith('{') && m === S);

        ) {
          var C = this._input.next()
          if (C === null) break
          C === '(' ? m++ : C === ')' && S++, (g += C)
        }
        h = this._create_token(l.CONTROL_FLOW_OPEN, g)
      } else
        o === '}' &&
          c &&
          c.type === l.CONTROL_FLOW_OPEN &&
          ((g = this._input.next()),
          (h = this._create_token(l.CONTROL_FLOW_CLOSE, g)))
      return h
    }),
    (r.prototype._read_close = function (o, c) {
      var g = null,
        h = null
      return (
        c &&
          c.type === l.TAG_OPEN &&
          (c.text[0] === '<' &&
          (o === '>' || (o === '/' && this._input.peek(1) === '>'))
            ? ((g = this._input.next()),
              o === '/' && (g += this._input.next()),
              (h = this._create_token(l.TAG_CLOSE, g)))
            : c.text[0] === '{' &&
              o === '}' &&
              this._input.peek(1) === '}' &&
              (this._input.next(),
              this._input.next(),
              (h = this._create_token(l.TAG_CLOSE, '}}')))),
        h
      )
    }),
    (r.prototype._read_attribute = function (o, c, g) {
      var h = null,
        m = ''
      if (g && g.text[0] === '<')
        if (o === '=') h = this._create_token(l.EQUALS, this._input.next())
        else if (o === '"' || o === "'") {
          var S = this._input.next()
          o === '"'
            ? (S += this.__patterns.double_quote.read())
            : (S += this.__patterns.single_quote.read()),
            (h = this._create_token(l.VALUE, S))
        } else
          (m = this.__patterns.attribute.read()),
            m &&
              (c.type === l.EQUALS
                ? (h = this._create_token(l.VALUE, m))
                : (h = this._create_token(l.ATTRIBUTE, m)))
      return h
    }),
    (r.prototype._is_content_unformatted = function (o) {
      return (
        this._options.void_elements.indexOf(o) === -1 &&
        (this._options.content_unformatted.indexOf(o) !== -1 ||
          this._options.unformatted.indexOf(o) !== -1)
      )
    }),
    (r.prototype._read_raw_content = function (o, c, g) {
      var h = ''
      if (g && g.text[0] === '{')
        h = this.__patterns.handlebars_raw_close.read()
      else if (
        c.type === l.TAG_CLOSE &&
        c.opened.text[0] === '<' &&
        c.text[0] !== '/'
      ) {
        var m = c.opened.text.substr(1).toLowerCase()
        if (m === 'script' || m === 'style') {
          var S = this._read_comment_or_cdata(o)
          if (S) return (S.type = l.TEXT), S
          h = this._input.readUntil(
            new RegExp('</' + m + '[\\n\\r\\t ]*?>', 'ig'),
          )
        } else
          this._is_content_unformatted(m) &&
            (h = this._input.readUntil(
              new RegExp('</' + m + '[\\n\\r\\t ]*?>', 'ig'),
            ))
      }
      return h ? this._create_token(l.TEXT, h) : null
    }),
    (r.prototype._read_content_word = function (o, c) {
      var g = ''
      if (
        (this._options.unformatted_content_delimiter &&
          o === this._options.unformatted_content_delimiter[0] &&
          (g = this.__patterns.unformatted_content_delimiter.read()),
        g ||
          (g =
            c && c.type === l.CONTROL_FLOW_OPEN
              ? this.__patterns.word_control_flow_close_excluded.read()
              : this.__patterns.word.read()),
        g)
      )
        return this._create_token(l.TEXT, g)
    }),
    (nt.Tokenizer = r),
    (nt.TOKEN = l),
    nt
  )
}
var Mi
function Ss() {
  if (Mi) return $t
  Mi = 1
  var e = _n().Options,
    t = Ht().Output,
    i = Li().Tokenizer,
    n = Li().TOKEN,
    s = /\r\n|[\r\n]/,
    l = /\r\n|[\r\n]/g,
    u = function (d, _) {
      ;(this.indent_level = 0),
        (this.alignment_size = 0),
        (this.max_preserve_newlines = d.max_preserve_newlines),
        (this.preserve_newlines = d.preserve_newlines),
        (this._output = new t(d, _))
    }
  ;(u.prototype.current_line_has_match = function (d) {
    return this._output.current_line.has_match(d)
  }),
    (u.prototype.set_space_before_token = function (d, _) {
      ;(this._output.space_before_token = d),
        (this._output.non_breaking_space = _)
    }),
    (u.prototype.set_wrap_point = function () {
      this._output.set_indent(this.indent_level, this.alignment_size),
        this._output.set_wrap_point()
    }),
    (u.prototype.add_raw_token = function (d) {
      this._output.add_raw_token(d)
    }),
    (u.prototype.print_preserved_newlines = function (d) {
      var _ = 0
      d.type !== n.TEXT &&
        d.previous.type !== n.TEXT &&
        (_ = d.newlines ? 1 : 0),
        this.preserve_newlines &&
          (_ =
            d.newlines < this.max_preserve_newlines + 1
              ? d.newlines
              : this.max_preserve_newlines + 1)
      for (var b = 0; b < _; b++) this.print_newline(b > 0)
      return _ !== 0
    }),
    (u.prototype.traverse_whitespace = function (d) {
      return d.whitespace_before || d.newlines
        ? (this.print_preserved_newlines(d) ||
            (this._output.space_before_token = true),
          true)
        : false
    }),
    (u.prototype.previous_token_wrapped = function () {
      return this._output.previous_token_wrapped
    }),
    (u.prototype.print_newline = function (d) {
      this._output.add_new_line(d)
    }),
    (u.prototype.print_token = function (d) {
      d.text &&
        (this._output.set_indent(this.indent_level, this.alignment_size),
        this._output.add_token(d.text))
    }),
    (u.prototype.indent = function () {
      this.indent_level++
    }),
    (u.prototype.deindent = function () {
      this.indent_level > 0 &&
        (this.indent_level--,
        this._output.set_indent(this.indent_level, this.alignment_size))
    }),
    (u.prototype.get_full_indent = function (d) {
      return (
        (d = this.indent_level + (d || 0)),
        d < 1 ? '' : this._output.get_indent_string(d)
      )
    })
  var r = function (d) {
      for (var _ = null, b = d.next; b.type !== n.EOF && d.closed !== b; ) {
        if (b.type === n.ATTRIBUTE && b.text === 'type') {
          b.next &&
            b.next.type === n.EQUALS &&
            b.next.next &&
            b.next.next.type === n.VALUE &&
            (_ = b.next.next.text)
          break
        }
        b = b.next
      }
      return _
    },
    o = function (d, _) {
      var b = null,
        A = null
      return _.closed
        ? (d === 'script'
            ? (b = 'text/javascript')
            : d === 'style' && (b = 'text/css'),
          (b = r(_) || b),
          b.search('text/css') > -1
            ? (A = 'css')
            : b.search(
                  /module|((text|application|dojo)\/(x-)?(javascript|ecmascript|jscript|livescript|(ld\+)?json|method|aspect))/,
                ) > -1
              ? (A = 'javascript')
              : b.search(/(text|application|dojo)\/(x-)?(html)/) > -1
                ? (A = 'html')
                : b.search(/test\/null/) > -1 && (A = 'null'),
          A)
        : null
    }
  function c(d, _) {
    return _.indexOf(d) !== -1
  }
  function g(d, _, b) {
    ;(this.parent = d || null),
      (this.tag = _ ? _.tag_name : ''),
      (this.indent_level = b || 0),
      (this.parser_token = _ || null)
  }
  function h(d) {
    ;(this._printer = d), (this._current_frame = null)
  }
  ;(h.prototype.get_parser_token = function () {
    return this._current_frame ? this._current_frame.parser_token : null
  }),
    (h.prototype.record_tag = function (d) {
      var _ = new g(this._current_frame, d, this._printer.indent_level)
      this._current_frame = _
    }),
    (h.prototype._try_pop_frame = function (d) {
      var _ = null
      return (
        d &&
          ((_ = d.parser_token),
          (this._printer.indent_level = d.indent_level),
          (this._current_frame = d.parent)),
        _
      )
    }),
    (h.prototype._get_frame = function (d, _) {
      for (var b = this._current_frame; b && d.indexOf(b.tag) === -1; ) {
        if (_ && _.indexOf(b.tag) !== -1) {
          b = null
          break
        }
        b = b.parent
      }
      return b
    }),
    (h.prototype.try_pop = function (d, _) {
      var b = this._get_frame([d], _)
      return this._try_pop_frame(b)
    }),
    (h.prototype.indent_to_tag = function (d) {
      var _ = this._get_frame(d)
      _ && (this._printer.indent_level = _.indent_level)
    })
  function m(d, _, b, A) {
    ;(this._source_text = d || ''),
      (_ = _ || {}),
      (this._js_beautify = b),
      (this._css_beautify = A),
      (this._tag_stack = null)
    var x = new e(_, 'html')
    ;(this._options = x),
      (this._is_wrap_attributes_force =
        this._options.wrap_attributes.substr(0, 5) === 'force'),
      (this._is_wrap_attributes_force_expand_multiline =
        this._options.wrap_attributes === 'force-expand-multiline'),
      (this._is_wrap_attributes_force_aligned =
        this._options.wrap_attributes === 'force-aligned'),
      (this._is_wrap_attributes_aligned_multiple =
        this._options.wrap_attributes === 'aligned-multiple'),
      (this._is_wrap_attributes_preserve =
        this._options.wrap_attributes.substr(0, 8) === 'preserve'),
      (this._is_wrap_attributes_preserve_aligned =
        this._options.wrap_attributes === 'preserve-aligned')
  }
  ;(m.prototype.beautify = function () {
    if (this._options.disabled) return this._source_text
    var d = this._source_text,
      _ = this._options.eol
    this._options.eol === 'auto' &&
      ((_ = `
`),
      d && s.test(d) && (_ = d.match(s)[0])),
      (d = d.replace(
        l,
        `
`,
      ))
    var b = d.match(/^[\t ]*/)[0],
      A = {
        text: '',
        type: '',
      },
      x = new S(),
      k = new u(this._options, b),
      p = new i(d, this._options).tokenize()
    this._tag_stack = new h(k)
    for (var v = null, f = p.next(); f.type !== n.EOF; )
      f.type === n.TAG_OPEN || f.type === n.COMMENT
        ? ((v = this._handle_tag_open(k, f, x, A, p)), (x = v))
        : f.type === n.ATTRIBUTE ||
            f.type === n.EQUALS ||
            f.type === n.VALUE ||
            (f.type === n.TEXT && !x.tag_complete)
          ? (v = this._handle_inside_tag(k, f, x, A))
          : f.type === n.TAG_CLOSE
            ? (v = this._handle_tag_close(k, f, x))
            : f.type === n.TEXT
              ? (v = this._handle_text(k, f, x))
              : f.type === n.CONTROL_FLOW_OPEN
                ? (v = this._handle_control_flow_open(k, f))
                : f.type === n.CONTROL_FLOW_CLOSE
                  ? (v = this._handle_control_flow_close(k, f))
                  : k.add_raw_token(f),
        (A = v),
        (f = p.next())
    var O = k._output.get_code(_)
    return O
  }),
    (m.prototype._handle_control_flow_open = function (d, _) {
      var b = {
        text: _.text,
        type: _.type,
      }
      return (
        d.set_space_before_token(
          _.newlines || _.whitespace_before !== '',
          true,
        ),
        _.newlines
          ? d.print_preserved_newlines(_)
          : d.set_space_before_token(
              _.newlines || _.whitespace_before !== '',
              true,
            ),
        d.print_token(_),
        d.indent(),
        b
      )
    }),
    (m.prototype._handle_control_flow_close = function (d, _) {
      var b = {
        text: _.text,
        type: _.type,
      }
      return (
        d.deindent(),
        _.newlines
          ? d.print_preserved_newlines(_)
          : d.set_space_before_token(
              _.newlines || _.whitespace_before !== '',
              true,
            ),
        d.print_token(_),
        b
      )
    }),
    (m.prototype._handle_tag_close = function (d, _, b) {
      var A = {
        text: _.text,
        type: _.type,
      }
      return (
        (d.alignment_size = 0),
        (b.tag_complete = true),
        d.set_space_before_token(
          _.newlines || _.whitespace_before !== '',
          true,
        ),
        b.is_unformatted
          ? d.add_raw_token(_)
          : (b.tag_start_char === '<' &&
              (d.set_space_before_token(_.text[0] === '/', true),
              this._is_wrap_attributes_force_expand_multiline &&
                b.has_wrapped_attrs &&
                d.print_newline(false)),
            d.print_token(_)),
        b.indent_content &&
          !(b.is_unformatted || b.is_content_unformatted) &&
          (d.indent(), (b.indent_content = false)),
        !b.is_inline_element &&
          !(b.is_unformatted || b.is_content_unformatted) &&
          d.set_wrap_point(),
        A
      )
    }),
    (m.prototype._handle_inside_tag = function (d, _, b, A) {
      var x = b.has_wrapped_attrs,
        k = {
          text: _.text,
          type: _.type,
        }
      return (
        d.set_space_before_token(
          _.newlines || _.whitespace_before !== '',
          true,
        ),
        b.is_unformatted
          ? d.add_raw_token(_)
          : b.tag_start_char === '{' && _.type === n.TEXT
            ? d.print_preserved_newlines(_)
              ? ((_.newlines = 0), d.add_raw_token(_))
              : d.print_token(_)
            : (_.type === n.ATTRIBUTE
                ? d.set_space_before_token(true)
                : (_.type === n.EQUALS ||
                    (_.type === n.VALUE && _.previous.type === n.EQUALS)) &&
                  d.set_space_before_token(false),
              _.type === n.ATTRIBUTE &&
                b.tag_start_char === '<' &&
                ((this._is_wrap_attributes_preserve ||
                  this._is_wrap_attributes_preserve_aligned) &&
                  (d.traverse_whitespace(_), (x = x || _.newlines !== 0)),
                this._is_wrap_attributes_force &&
                  b.attr_count >= this._options.wrap_attributes_min_attrs &&
                  (A.type !== n.TAG_OPEN ||
                    this._is_wrap_attributes_force_expand_multiline) &&
                  (d.print_newline(false), (x = true))),
              d.print_token(_),
              (x = x || d.previous_token_wrapped()),
              (b.has_wrapped_attrs = x)),
        k
      )
    }),
    (m.prototype._handle_text = function (d, _, b) {
      var A = {
        text: _.text,
        type: 'TK_CONTENT',
      }
      return (
        b.custom_beautifier_name
          ? this._print_custom_beatifier_text(d, _, b)
          : b.is_unformatted || b.is_content_unformatted
            ? d.add_raw_token(_)
            : (d.traverse_whitespace(_), d.print_token(_)),
        A
      )
    }),
    (m.prototype._print_custom_beatifier_text = function (d, _, b) {
      var A = this
      if (_.text !== '') {
        var x = _.text,
          k,
          p = 1,
          v = '',
          f = ''
        b.custom_beautifier_name === 'javascript' &&
        typeof this._js_beautify == 'function'
          ? (k = this._js_beautify)
          : b.custom_beautifier_name === 'css' &&
              typeof this._css_beautify == 'function'
            ? (k = this._css_beautify)
            : b.custom_beautifier_name === 'html' &&
              (k = function (P, j) {
                var F = new m(P, j, A._js_beautify, A._css_beautify)
                return F.beautify()
              }),
          this._options.indent_scripts === 'keep'
            ? (p = 0)
            : this._options.indent_scripts === 'separate' &&
              (p = -d.indent_level)
        var O = d.get_full_indent(p)
        if (
          ((x = x.replace(/\n[ \t]*$/, '')),
          b.custom_beautifier_name !== 'html' &&
            x[0] === '<' &&
            x.match(/^(<!--|<!\[CDATA\[)/))
        ) {
          var a =
            /^(<!--[^\n]*|<!\[CDATA\[)(\n?)([ \t\n]*)([\s\S]*)(-->|]]>)$/.exec(
              x,
            )
          if (!a) {
            d.add_raw_token(_)
            return
          }
          ;(v =
            O +
            a[1] +
            `
`),
            (x = a[4]),
            a[5] && (f = O + a[5]),
            (x = x.replace(/\n[ \t]*$/, '')),
            (a[2] ||
              a[3].indexOf(`
`) !== -1) &&
              ((a = a[3].match(/[ \t]+$/)), a && (_.whitespace_before = a[0]))
        }
        if (x)
          if (k) {
            var E = function () {
              this.eol = `
`
            }
            E.prototype = this._options.raw_options
            var w = new E()
            x = k(O + x, w)
          } else {
            var M = _.whitespace_before
            M &&
              (x = x.replace(
                new RegExp(
                  `
(` +
                    M +
                    ')?',
                  'g',
                ),
                `
`,
              )),
              (x =
                O +
                x.replace(
                  /\n/g,
                  `
` + O,
                ))
          }
        v &&
          (x
            ? (x =
                v +
                x +
                `
` +
                f)
            : (x = v + f)),
          d.print_newline(false),
          x &&
            ((_.text = x),
            (_.whitespace_before = ''),
            (_.newlines = 0),
            d.add_raw_token(_),
            d.print_newline(true))
      }
    }),
    (m.prototype._handle_tag_open = function (d, _, b, A, x) {
      var k = this._get_tag_open_token(_)
      if (
        ((b.is_unformatted || b.is_content_unformatted) &&
        !b.is_empty_element &&
        _.type === n.TAG_OPEN &&
        !k.is_start_tag
          ? (d.add_raw_token(_),
            (k.start_tag_token = this._tag_stack.try_pop(k.tag_name)))
          : (d.traverse_whitespace(_),
            this._set_tag_position(d, _, k, b, A),
            k.is_inline_element || d.set_wrap_point(),
            d.print_token(_)),
        k.is_start_tag && this._is_wrap_attributes_force)
      ) {
        var p = 0,
          v
        do
          (v = x.peek(p)),
            v.type === n.ATTRIBUTE && (k.attr_count += 1),
            (p += 1)
        while (v.type !== n.EOF && v.type !== n.TAG_CLOSE)
      }
      return (
        (this._is_wrap_attributes_force_aligned ||
          this._is_wrap_attributes_aligned_multiple ||
          this._is_wrap_attributes_preserve_aligned) &&
          (k.alignment_size = _.text.length + 1),
        !k.tag_complete &&
          !k.is_unformatted &&
          (d.alignment_size = k.alignment_size),
        k
      )
    })
  var S = function (d, _) {
    if (
      ((this.parent = d || null),
      (this.text = ''),
      (this.type = 'TK_TAG_OPEN'),
      (this.tag_name = ''),
      (this.is_inline_element = false),
      (this.is_unformatted = false),
      (this.is_content_unformatted = false),
      (this.is_empty_element = false),
      (this.is_start_tag = false),
      (this.is_end_tag = false),
      (this.indent_content = false),
      (this.multiline_content = false),
      (this.custom_beautifier_name = null),
      (this.start_tag_token = null),
      (this.attr_count = 0),
      (this.has_wrapped_attrs = false),
      (this.alignment_size = 0),
      (this.tag_complete = false),
      (this.tag_start_char = ''),
      (this.tag_check = ''),
      !_)
    )
      this.tag_complete = true
    else {
      var b
      ;(this.tag_start_char = _.text[0]),
        (this.text = _.text),
        this.tag_start_char === '<'
          ? ((b = _.text.match(/^<([^\s>]*)/)),
            (this.tag_check = b ? b[1] : ''))
          : ((b = _.text.match(/^{{~?(?:[\^]|#\*?)?([^\s}]+)/)),
            (this.tag_check = b ? b[1] : ''),
            (_.text.startsWith('{{#>') || _.text.startsWith('{{~#>')) &&
              this.tag_check[0] === '>' &&
              (this.tag_check === '>' && _.next !== null
                ? (this.tag_check = _.next.text.split(' ')[0])
                : (this.tag_check = _.text.split('>')[1]))),
        (this.tag_check = this.tag_check.toLowerCase()),
        _.type === n.COMMENT && (this.tag_complete = true),
        (this.is_start_tag = this.tag_check.charAt(0) !== '/'),
        (this.tag_name = this.is_start_tag
          ? this.tag_check
          : this.tag_check.substr(1)),
        (this.is_end_tag =
          !this.is_start_tag || (_.closed && _.closed.text === '/>'))
      var A = 2
      this.tag_start_char === '{' &&
        this.text.length >= 3 &&
        this.text.charAt(2) === '~' &&
        (A = 3),
        (this.is_end_tag =
          this.is_end_tag ||
          (this.tag_start_char === '{' &&
            (this.text.length < 3 || /[^#\^]/.test(this.text.charAt(A)))))
    }
  }
  ;(m.prototype._get_tag_open_token = function (d) {
    var _ = new S(this._tag_stack.get_parser_token(), d)
    return (
      (_.alignment_size = this._options.wrap_attributes_indent_size),
      (_.is_end_tag =
        _.is_end_tag || c(_.tag_check, this._options.void_elements)),
      (_.is_empty_element = _.tag_complete || (_.is_start_tag && _.is_end_tag)),
      (_.is_unformatted =
        !_.tag_complete && c(_.tag_check, this._options.unformatted)),
      (_.is_content_unformatted =
        !_.is_empty_element &&
        c(_.tag_check, this._options.content_unformatted)),
      (_.is_inline_element =
        c(_.tag_name, this._options.inline) ||
        (this._options.inline_custom_elements && _.tag_name.includes('-')) ||
        _.tag_start_char === '{'),
      _
    )
  }),
    (m.prototype._set_tag_position = function (d, _, b, A, x) {
      if (
        (b.is_empty_element ||
          (b.is_end_tag
            ? (b.start_tag_token = this._tag_stack.try_pop(b.tag_name))
            : (this._do_optional_end_element(b) &&
                (b.is_inline_element || d.print_newline(false)),
              this._tag_stack.record_tag(b),
              (b.tag_name === 'script' || b.tag_name === 'style') &&
                !(b.is_unformatted || b.is_content_unformatted) &&
                (b.custom_beautifier_name = o(b.tag_check, _)))),
        c(b.tag_check, this._options.extra_liners) &&
          (d.print_newline(false),
          d._output.just_added_blankline() || d.print_newline(true)),
        b.is_empty_element)
      ) {
        if (b.tag_start_char === '{' && b.tag_check === 'else') {
          this._tag_stack.indent_to_tag(['if', 'unless', 'each']),
            (b.indent_content = true)
          var k = d.current_line_has_match(/{{#if/)
          k || d.print_newline(false)
        }
        ;(b.tag_name === '!--' &&
          x.type === n.TAG_CLOSE &&
          A.is_end_tag &&
          b.text.indexOf(`
`) === -1) ||
          (b.is_inline_element || b.is_unformatted || d.print_newline(false),
          this._calcluate_parent_multiline(d, b))
      } else if (b.is_end_tag) {
        var p = false
        ;(p = b.start_tag_token && b.start_tag_token.multiline_content),
          (p =
            p ||
            (!b.is_inline_element &&
              !(A.is_inline_element || A.is_unformatted) &&
              !(x.type === n.TAG_CLOSE && b.start_tag_token === A) &&
              x.type !== 'TK_CONTENT')),
          (b.is_content_unformatted || b.is_unformatted) && (p = false),
          p && d.print_newline(false)
      } else
        (b.indent_content = !b.custom_beautifier_name),
          b.tag_start_char === '<' &&
            (b.tag_name === 'html'
              ? (b.indent_content = this._options.indent_inner_html)
              : b.tag_name === 'head'
                ? (b.indent_content = this._options.indent_head_inner_html)
                : b.tag_name === 'body' &&
                  (b.indent_content = this._options.indent_body_inner_html)),
          !(b.is_inline_element || b.is_unformatted) &&
            (x.type !== 'TK_CONTENT' || b.is_content_unformatted) &&
            d.print_newline(false),
          this._calcluate_parent_multiline(d, b)
    }),
    (m.prototype._calcluate_parent_multiline = function (d, _) {
      _.parent &&
        d._output.just_added_newline() &&
        !(
          (_.is_inline_element || _.is_unformatted) &&
          _.parent.is_inline_element
        ) &&
        (_.parent.multiline_content = true)
    })
  var C = [
      'address',
      'article',
      'aside',
      'blockquote',
      'details',
      'div',
      'dl',
      'fieldset',
      'figcaption',
      'figure',
      'footer',
      'form',
      'h1',
      'h2',
      'h3',
      'h4',
      'h5',
      'h6',
      'header',
      'hr',
      'main',
      'menu',
      'nav',
      'ol',
      'p',
      'pre',
      'section',
      'table',
      'ul',
    ],
    L = ['a', 'audio', 'del', 'ins', 'map', 'noscript', 'video']
  return (
    (m.prototype._do_optional_end_element = function (d) {
      var _ = null
      if (!(d.is_empty_element || !d.is_start_tag || !d.parent)) {
        if (d.tag_name === 'body') _ = _ || this._tag_stack.try_pop('head')
        else if (d.tag_name === 'li')
          _ = _ || this._tag_stack.try_pop('li', ['ol', 'ul', 'menu'])
        else if (d.tag_name === 'dd' || d.tag_name === 'dt')
          (_ = _ || this._tag_stack.try_pop('dt', ['dl'])),
            (_ = _ || this._tag_stack.try_pop('dd', ['dl']))
        else if (d.parent.tag_name === 'p' && C.indexOf(d.tag_name) !== -1) {
          var b = d.parent.parent
          ;(!b || L.indexOf(b.tag_name) === -1) &&
            (_ = _ || this._tag_stack.try_pop('p'))
        } else
          d.tag_name === 'rp' || d.tag_name === 'rt'
            ? ((_ = _ || this._tag_stack.try_pop('rt', ['ruby', 'rtc'])),
              (_ = _ || this._tag_stack.try_pop('rp', ['ruby', 'rtc'])))
            : d.tag_name === 'optgroup'
              ? (_ = _ || this._tag_stack.try_pop('optgroup', ['select']))
              : d.tag_name === 'option'
                ? (_ =
                    _ ||
                    this._tag_stack.try_pop('option', [
                      'select',
                      'datalist',
                      'optgroup',
                    ]))
                : d.tag_name === 'colgroup'
                  ? (_ = _ || this._tag_stack.try_pop('caption', ['table']))
                  : d.tag_name === 'thead'
                    ? ((_ = _ || this._tag_stack.try_pop('caption', ['table'])),
                      (_ = _ || this._tag_stack.try_pop('colgroup', ['table'])))
                    : d.tag_name === 'tbody' || d.tag_name === 'tfoot'
                      ? ((_ =
                          _ || this._tag_stack.try_pop('caption', ['table'])),
                        (_ =
                          _ || this._tag_stack.try_pop('colgroup', ['table'])),
                        (_ = _ || this._tag_stack.try_pop('thead', ['table'])),
                        (_ = _ || this._tag_stack.try_pop('tbody', ['table'])))
                      : d.tag_name === 'tr'
                        ? ((_ =
                            _ || this._tag_stack.try_pop('caption', ['table'])),
                          (_ =
                            _ ||
                            this._tag_stack.try_pop('colgroup', ['table'])),
                          (_ =
                            _ ||
                            this._tag_stack.try_pop('tr', [
                              'table',
                              'thead',
                              'tbody',
                              'tfoot',
                            ])))
                        : (d.tag_name === 'th' || d.tag_name === 'td') &&
                          ((_ =
                            _ ||
                            this._tag_stack.try_pop('td', [
                              'table',
                              'thead',
                              'tbody',
                              'tfoot',
                              'tr',
                            ])),
                          (_ =
                            _ ||
                            this._tag_stack.try_pop('th', [
                              'table',
                              'thead',
                              'tbody',
                              'tfoot',
                              'tr',
                            ])))
        return (d.parent = this._tag_stack.get_parser_token()), _
      }
    }),
    ($t.Beautifier = m),
    $t
  )
}
var Ii
function As() {
  if (Ii) return it.exports
  Ii = 1
  var e = Ss().Beautifier,
    t = _n().Options
  function i(n, s, l, u) {
    var r = new e(n, s, l, u)
    return r.beautify()
  }
  return (
    (it.exports = i),
    (it.exports.defaultOptions = function () {
      return new t()
    }),
    it.exports
  )
}
var Di
function Rs() {
  if (Di) return We
  Di = 1
  var e = Ts(),
    t = ks(),
    i = As()
  function n(s, l, u, r) {
    return (u = u || e), (r = r || t), i(s, l, u, r)
  }
  return (
    (n.defaultOptions = i.defaultOptions),
    (We.js = e),
    (We.css = t),
    (We.html = n),
    We
  )
}
;(function (e) {
  function t(i, n, s) {
    var l = function (u, r) {
      return i.js_beautify(u, r)
    }
    return (
      (l.js = i.js_beautify),
      (l.css = n.css_beautify),
      (l.html = s.html_beautify),
      (l.js_beautify = i.js_beautify),
      (l.css_beautify = n.css_beautify),
      (l.html_beautify = s.html_beautify),
      l
    )
  }
  ;(function (i) {
    var n = Rs()
    ;(n.js_beautify = n.js),
      (n.css_beautify = n.css),
      (n.html_beautify = n.html),
      (i.exports = t(n, n, n))
  })(e)
})(sn)
var Pi
var Ns = function (t) {
  return typeof t == 'string' && Cs().test(t)
}
function Cs() {
  return (
    Pi ||
    (Pi = new RegExp(`^[\\s	
\v\f\r   ᠎             　\u2028\u2029\uFEFF"]+$`))
  )
}
var Ls = function (t) {
  return (
    typeof t < 'u' &&
    t !== null &&
    (typeof t == 'object' || typeof t == 'function')
  )
}
var Bi = Ls
var cn = function (t) {
  Bi(t) || (t = {})
  for (var i = arguments.length, n = 1; n < i; n++) {
    var s = arguments[n]
    Bi(s) && Ms(t, s)
  }
  return t
}
function Ms(e, t) {
  for (var i in t) Is(t, i) && (e[i] = t[i])
}
function Is(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t)
}
var Ds = function (e) {
  return e != null && (pn(e) || Ps(e) || !!e._isBuffer)
}
function pn(e) {
  return (
    !!e.constructor &&
    typeof e.constructor.isBuffer == 'function' &&
    e.constructor.isBuffer(e)
  )
}
function Ps(e) {
  return (
    typeof e.readFloatLE == 'function' &&
    typeof e.slice == 'function' &&
    pn(e.slice(0, 0))
  )
}
var Bs = Ds
var $s = Object.prototype.toString
var Us = function (t) {
  if (typeof t > 'u') return 'undefined'
  if (t === null) return 'null'
  if (t === true || t === false || t instanceof Boolean) return 'boolean'
  if (typeof t == 'string' || t instanceof String) return 'string'
  if (typeof t == 'number' || t instanceof Number) return 'number'
  if (typeof t == 'function' || t instanceof Function) return 'function'
  if (typeof Array.isArray < 'u' && Array.isArray(t)) return 'array'
  if (t instanceof RegExp) return 'regexp'
  if (t instanceof Date) return 'date'
  var i = $s.call(t)
  return i === '[object RegExp]'
    ? 'regexp'
    : i === '[object Date]'
      ? 'date'
      : i === '[object Arguments]'
        ? 'arguments'
        : i === '[object Error]'
          ? 'error'
          : Bs(t)
            ? 'buffer'
            : i === '[object Set]'
              ? 'set'
              : i === '[object WeakSet]'
                ? 'weakset'
                : i === '[object Map]'
                  ? 'map'
                  : i === '[object WeakMap]'
                    ? 'weakmap'
                    : i === '[object Symbol]'
                      ? 'symbol'
                      : i === '[object Int8Array]'
                        ? 'int8array'
                        : i === '[object Uint8Array]'
                          ? 'uint8array'
                          : i === '[object Uint8ClampedArray]'
                            ? 'uint8clampedarray'
                            : i === '[object Int16Array]'
                              ? 'int16array'
                              : i === '[object Uint16Array]'
                                ? 'uint16array'
                                : i === '[object Int32Array]'
                                  ? 'int32array'
                                  : i === '[object Uint32Array]'
                                    ? 'uint32array'
                                    : i === '[object Float32Array]'
                                      ? 'float32array'
                                      : i === '[object Float64Array]'
                                        ? 'float64array'
                                        : 'object'
}
var js = Ns
var zs = cn
var Fs = Us
var Ws = function (e, t) {
  var i = zs({}, t),
    n =
      i.sep ||
      `

`,
    s = i.min,
    l
  return (
    typeof s == 'number' &&
      s !== 2 &&
      (l = new RegExp('(\\r\\n|\\n|\\u2424) {' + s + ',}')),
    typeof l > 'u' && (l = i.regex || /(\r\n|\n|\u2424){2,}/g),
    i.keepWhitespace !== true &&
      (e = e
        .split(
          `
`,
        )
        .map(function (u) {
          return js(u) ? u.trim() : u
        }).join(`
`)),
    (e = Ks(e, i)),
    e.replace(l, n)
  )
}
function Ks(e, t) {
  var i = t.trailingNewline
  if (i === false) return e
  switch (Fs(i)) {
    case 'string':
      e = e.replace(/\s+$/, t.trailingNewline)
      break
    case 'function':
      e = t.trailingNewline(e)
      break
    case 'undefined':
    case 'boolean':
    default: {
      e = e.replace(
        /\s+$/,
        `
`,
      )
      break
    }
  }
  return e
}
var Gs = sn.exports
var Hs = Ws
var qs = cn
var Xs = {
  unformatted: ['code', 'pre', 'em', 'strong', 'span'],
  indent_inner_html: true,
  indent_char: ' ',
  indent_size: 2,
  sep: `
`,
}
var Vs = function (t, i) {
  var n = qs({}, Xs, i)
  return (
    (t = Gs.html(t, n)),
    n.ocd === true ? (n.newlines && (n.sep = n.newlines), Zs(t, n)) : t
  )
}
function Zs(e, t) {
  return Hs(e, t)
    .replace(/^\s+/g, '')
    .replace(
      /\s+$/g,
      `
`,
    )
    .replace(
      /(\s*<!--)/g,
      `
$1`,
    )
    .replace(/>(\s*)(?=<!--\s*\/)/g, '> ')
}
function $e(e) {
  let { code: t, src: i } = e || {}
  t || (t = '<div id="app"></div>'),
    i &&
      (t += `
<script type="module" src="${i}"><\/script>`)
  const s = new DOMParser().parseFromString(t, 'text/html')
  return Vs(
    `<!DOCTYPE html>
${s.documentElement.outerHTML}`,
    {
      ocd: true,
    },
  )
}
function gt(e) {
  const t = {}
  return (
    e === W.REACT && (t.jsx = 'react'),
    JSON.stringify(
      {
        compilerOptions: {
          target: 'es5',
          lib: ['dom', 'dom.iterable', 'esnext'],
          allowJs: true,
          skipLibCheck: true,
          esModuleInterop: true,
          allowImportingTsExtensions: true,
          allowSyntheticDefaultImports: true,
          strict: true,
          forceConsistentCasingInFileNames: true,
          module: 'esnext',
          moduleResolution: 'node',
          resolveJsonModule: true,
          isolatedModules: true,
          noEmit: true,
          ...t,
        },
        include: ['src'],
      },
      null,
      2,
    )
  )
}
var fn = () =>
  JSON.stringify(
    {
      installDependencies: false,
      startCommand: 'npm install && npm run dev',
    },
    null,
    2,
  )
var Qs = `import { createApp } from "vue";
import Demo from "./Demo.vue";

const app = createApp(Demo);
app.mount("#app");
`
var Js = `import React from "react";
import { createRoot } from "react-dom/client";
import Demo from "./Demo.tsx";

const root = createRoot(document.querySelector("#app"));
root.render(<Demo />);
`
function mt(e) {
  return e === W.VUE ? Qs : e === W.REACT ? Js : ''
}
var Ys = `import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
export default defineConfig({
  plugins: [vue(), vueJsx()],
});
`
var er = `import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
export default defineConfig({
  plugins: [react()],
});
`
function hn(e) {
  return e === W.VUE ? Ys : e === W.REACT ? er : ''
}
var tr = () => ({
  copyContent: ref(''),
  clickCopy: async (i) => {
    await navigator.clipboard.writeText(i)
  },
})
var ir = () => {
  const e = ref(true)
  return {
    isCodeFold: e,
    setCodeFold: (i) => {
      e.value = i
    },
  }
}
function nr(e) {
  return [
    ...(e.match(/from '([^']+)'(;)?(\r)?\n/g) || []),
    ...(e.match(/from "([^"]+)"(;)?(\r)?\n/g) || []),
  ]
    .map((t) => {
      let i = ''
      return (
        t.includes("'")
          ? (i = t.split("'")[1])
          : t.includes('"') && (i = t.split('"')[1]),
        i.includes('/') &&
          (i.startsWith('@')
            ? (i = i.split('/')[0] + '/' + i.split('/')[1])
            : (i = i.split('/')[0])),
        i
      )
    })
    .filter((t) => t !== '')
    .reduce((t, i) => ((t[i] = 'latest'), t), {})
}
function dn(e) {
  return (
    e instanceof Map
      ? (e.clear =
          e.delete =
          e.set =
            function () {
              throw new Error('map is read-only')
            })
      : e instanceof Set &&
        (e.add =
          e.clear =
          e.delete =
            function () {
              throw new Error('set is read-only')
            }),
    Object.freeze(e),
    Object.getOwnPropertyNames(e).forEach((t) => {
      const i = e[t],
        n = typeof i
      ;(n === 'object' || n === 'function') && !Object.isFrozen(i) && dn(i)
    }),
    e
  )
}
var $i = class {
  constructor(t) {
    t.data === void 0 && (t.data = {}),
      (this.data = t.data),
      (this.isMatchIgnored = false)
  }
  ignoreMatch() {
    this.isMatchIgnored = true
  }
}
function gn(e) {
  return e
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
}
function xe(e, ...t) {
  const i = /* @__PURE__ */ Object.create(null)
  for (const n in e) i[n] = e[n]
  return (
    t.forEach(function (n) {
      for (const s in n) i[s] = n[s]
    }),
    i
  )
}
var sr = '</span>'
var Ui = (e) => !!e.scope
var rr = (e, { prefix: t }) => {
  if (e.startsWith('language:')) return e.replace('language:', 'language-')
  if (e.includes('.')) {
    const i = e.split('.')
    return [
      `${t}${i.shift()}`,
      ...i.map((n, s) => `${n}${'_'.repeat(s + 1)}`),
    ].join(' ')
  }
  return `${t}${e}`
}
var ar = class {
  constructor(t, i) {
    ;(this.buffer = ''), (this.classPrefix = i.classPrefix), t.walk(this)
  }
  addText(t) {
    this.buffer += gn(t)
  }
  openNode(t) {
    if (!Ui(t)) return
    const i = rr(t.scope, { prefix: this.classPrefix })
    this.span(i)
  }
  closeNode(t) {
    !Ui(t) || (this.buffer += sr)
  }
  value() {
    return this.buffer
  }
  span(t) {
    this.buffer += `<span class="${t}">`
  }
}
var ji = (e = {}) => {
  const t = { children: [] }
  return Object.assign(t, e), t
}
var Zt = class _Zt {
  constructor() {
    ;(this.rootNode = ji()), (this.stack = [this.rootNode])
  }
  get top() {
    return this.stack[this.stack.length - 1]
  }
  get root() {
    return this.rootNode
  }
  add(t) {
    this.top.children.push(t)
  }
  openNode(t) {
    const i = ji({ scope: t })
    this.add(i), this.stack.push(i)
  }
  closeNode() {
    if (this.stack.length > 1) return this.stack.pop()
  }
  closeAllNodes() {
    for (; this.closeNode(); );
  }
  toJSON() {
    return JSON.stringify(this.rootNode, null, 4)
  }
  walk(t) {
    return this.constructor._walk(t, this.rootNode)
  }
  static _walk(t, i) {
    return (
      typeof i == 'string'
        ? t.addText(i)
        : i.children &&
          (t.openNode(i),
          i.children.forEach((n) => this._walk(t, n)),
          t.closeNode(i)),
      t
    )
  }
  static _collapse(t) {
    typeof t != 'string' &&
      (!t.children ||
        (t.children.every((i) => typeof i == 'string')
          ? (t.children = [t.children.join('')])
          : t.children.forEach((i) => {
              _Zt._collapse(i)
            })))
  }
}
var or = class extends Zt {
  constructor(t) {
    super(), (this.options = t)
  }
  addText(t) {
    t !== '' && this.add(t)
  }
  startScope(t) {
    this.openNode(t)
  }
  endScope() {
    this.closeNode()
  }
  __addSublanguage(t, i) {
    const n = t.root
    i && (n.scope = `language:${i}`), this.add(n)
  }
  toHTML() {
    return new ar(this, this.options).value()
  }
  finalize() {
    return this.closeAllNodes(), true
  }
}
function He(e) {
  return e ? (typeof e == 'string' ? e : e.source) : null
}
function mn(e) {
  return Ce('(?=', e, ')')
}
function lr(e) {
  return Ce('(?:', e, ')*')
}
function ur(e) {
  return Ce('(?:', e, ')?')
}
function Ce(...e) {
  return e.map((i) => He(i)).join('')
}
function _r(e) {
  const t = e[e.length - 1]
  return typeof t == 'object' && t.constructor === Object
    ? (e.splice(e.length - 1, 1), t)
    : {}
}
function Qt(...e) {
  return '(' + (_r(e).capture ? '' : '?:') + e.map((n) => He(n)).join('|') + ')'
}
function bn(e) {
  return new RegExp(e.toString() + '|').exec('').length - 1
}
function cr(e, t) {
  const i = e && e.exec(t)
  return i && i.index === 0
}
var pr = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./
function Jt(e, { joinWith: t }) {
  let i = 0
  return e
    .map((n) => {
      i += 1
      const s = i
      let l = He(n),
        u = ''
      for (; l.length > 0; ) {
        const r = pr.exec(l)
        if (!r) {
          u += l
          break
        }
        ;(u += l.substring(0, r.index)),
          (l = l.substring(r.index + r[0].length)),
          r[0][0] === '\\' && r[1]
            ? (u += '\\' + String(Number(r[1]) + s))
            : ((u += r[0]), r[0] === '(' && i++)
      }
      return u
    })
    .map((n) => `(${n})`)
    .join(t)
}
var fr = /\b\B/
var vn = '[a-zA-Z]\\w*'
var Yt = '[a-zA-Z_]\\w*'
var yn = '\\b\\d+(\\.\\d+)?'
var wn =
  '(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)'
var En = '\\b(0b[01]+)'
var hr =
  '!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~'
var dr = (e = {}) => {
  const t = /^#![ ]*\//
  return (
    e.binary && (e.begin = Ce(t, /.*\b/, e.binary, /\b.*/)),
    xe(
      {
        scope: 'meta',
        begin: t,
        end: /$/,
        relevance: 0,
        'on:begin': (i, n) => {
          i.index !== 0 && n.ignoreMatch()
        },
      },
      e,
    )
  )
}
var qe = {
  begin: '\\\\[\\s\\S]',
  relevance: 0,
}
var gr = {
  scope: 'string',
  begin: "'",
  end: "'",
  illegal: '\\n',
  contains: [qe],
}
var mr = {
  scope: 'string',
  begin: '"',
  end: '"',
  illegal: '\\n',
  contains: [qe],
}
var br = {
  begin:
    /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/,
}
var bt = function (e, t, i = {}) {
  const n = xe(
    {
      scope: 'comment',
      begin: e,
      end: t,
      contains: [],
    },
    i,
  )
  n.contains.push({
    scope: 'doctag',
    begin: '[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)',
    end: /(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,
    excludeBegin: true,
    relevance: 0,
  })
  const s = Qt(
    'I',
    'a',
    'is',
    'so',
    'us',
    'to',
    'at',
    'if',
    'in',
    'it',
    'on',
    /[A-Za-z]+['](d|ve|re|ll|t|s|n)/,
    /[A-Za-z]+[-][a-z]+/,
    /[A-Za-z][a-z]{2,}/,
  )
  return (
    n.contains.push({
      begin: Ce(/[ ]+/, '(', s, /[.]?[:]?([.][ ]|[ ])/, '){3}'),
    }),
    n
  )
}
var vr = bt('//', '$')
var yr = bt('/\\*', '\\*/')
var wr = bt('#', '$')
var Er = {
  scope: 'number',
  begin: yn,
  relevance: 0,
}
var xr = {
  scope: 'number',
  begin: wn,
  relevance: 0,
}
var Tr = {
  scope: 'number',
  begin: En,
  relevance: 0,
}
var Or = {
  scope: 'regexp',
  begin: /\/(?=[^/\n]*\/)/,
  end: /\/[gimuy]*/,
  contains: [
    qe,
    {
      begin: /\[/,
      end: /\]/,
      relevance: 0,
      contains: [qe],
    },
  ],
}
var kr = {
  scope: 'title',
  begin: vn,
  relevance: 0,
}
var Sr = {
  scope: 'title',
  begin: Yt,
  relevance: 0,
}
var Ar = {
  begin: '\\.\\s*' + Yt,
  relevance: 0,
}
var Rr = function (e) {
  return Object.assign(e, {
    'on:begin': (t, i) => {
      i.data._beginMatch = t[1]
    },
    'on:end': (t, i) => {
      i.data._beginMatch !== t[1] && i.ignoreMatch()
    },
  })
}
var st = Object.freeze({
  __proto__: null,
  APOS_STRING_MODE: gr,
  BACKSLASH_ESCAPE: qe,
  BINARY_NUMBER_MODE: Tr,
  BINARY_NUMBER_RE: En,
  COMMENT: bt,
  C_BLOCK_COMMENT_MODE: yr,
  C_LINE_COMMENT_MODE: vr,
  C_NUMBER_MODE: xr,
  C_NUMBER_RE: wn,
  END_SAME_AS_BEGIN: Rr,
  HASH_COMMENT_MODE: wr,
  IDENT_RE: vn,
  MATCH_NOTHING_RE: fr,
  METHOD_GUARD: Ar,
  NUMBER_MODE: Er,
  NUMBER_RE: yn,
  PHRASAL_WORDS_MODE: br,
  QUOTE_STRING_MODE: mr,
  REGEXP_MODE: Or,
  RE_STARTERS_RE: hr,
  SHEBANG: dr,
  TITLE_MODE: kr,
  UNDERSCORE_IDENT_RE: Yt,
  UNDERSCORE_TITLE_MODE: Sr,
})
function Nr(e, t) {
  e.input[e.index - 1] === '.' && t.ignoreMatch()
}
function Cr(e, t) {
  e.className !== void 0 && ((e.scope = e.className), delete e.className)
}
function Lr(e, t) {
  !t ||
    !e.beginKeywords ||
    ((e.begin =
      '\\b(' + e.beginKeywords.split(' ').join('|') + ')(?!\\.)(?=\\b|\\s)'),
    (e.__beforeBegin = Nr),
    (e.keywords = e.keywords || e.beginKeywords),
    delete e.beginKeywords,
    e.relevance === void 0 && (e.relevance = 0))
}
function Mr(e, t) {
  !Array.isArray(e.illegal) || (e.illegal = Qt(...e.illegal))
}
function Ir(e, t) {
  if (!!e.match) {
    if (e.begin || e.end)
      throw new Error('begin & end are not supported with match')
    ;(e.begin = e.match), delete e.match
  }
}
function Dr(e, t) {
  e.relevance === void 0 && (e.relevance = 1)
}
var Pr = (e, t) => {
  if (!e.beforeMatch) return
  if (e.starts) throw new Error('beforeMatch cannot be used with starts')
  const i = Object.assign({}, e)
  Object.keys(e).forEach((n) => {
    delete e[n]
  }),
    (e.keywords = i.keywords),
    (e.begin = Ce(i.beforeMatch, mn(i.begin))),
    (e.starts = {
      relevance: 0,
      contains: [Object.assign(i, { endsParent: true })],
    }),
    (e.relevance = 0),
    delete i.beforeMatch
}
var Br = [
  'of',
  'and',
  'for',
  'in',
  'not',
  'or',
  'if',
  'then',
  'parent',
  'list',
  'value',
]
var $r = 'keyword'
function xn(e, t, i = $r) {
  const n = /* @__PURE__ */ Object.create(null)
  return (
    typeof e == 'string'
      ? s(i, e.split(' '))
      : Array.isArray(e)
        ? s(i, e)
        : Object.keys(e).forEach(function (l) {
            Object.assign(n, xn(e[l], t, l))
          }),
    n
  )
  function s(l, u) {
    t && (u = u.map((r) => r.toLowerCase())),
      u.forEach(function (r) {
        const o = r.split('|')
        n[o[0]] = [l, Ur(o[0], o[1])]
      })
  }
}
function Ur(e, t) {
  return t ? Number(t) : jr(e) ? 0 : 1
}
function jr(e) {
  return Br.includes(e.toLowerCase())
}
var zi = {}
var Ne = (e) => {
  console.error(e)
}
var Fi = (e, ...t) => {
  console.log(`WARN: ${e}`, ...t)
}
var Ie = (e, t) => {
  zi[`${e}/${t}`] ||
    (console.log(`Deprecated as of ${e}. ${t}`), (zi[`${e}/${t}`] = true))
}
var ct = new Error()
function Tn(e, t, { key: i }) {
  let n = 0
  const s = e[i],
    l = {},
    u = {}
  for (let r = 1; r <= t.length; r++)
    (u[r + n] = s[r]), (l[r + n] = true), (n += bn(t[r - 1]))
  ;(e[i] = u), (e[i]._emit = l), (e[i]._multi = true)
}
function zr(e) {
  if (!!Array.isArray(e.begin)) {
    if (e.skip || e.excludeBegin || e.returnBegin)
      throw (
        (Ne(
          'skip, excludeBegin, returnBegin not compatible with beginScope: {}',
        ),
        ct)
      )
    if (typeof e.beginScope != 'object' || e.beginScope === null)
      throw (Ne('beginScope must be object'), ct)
    Tn(e, e.begin, { key: 'beginScope' }),
      (e.begin = Jt(e.begin, { joinWith: '' }))
  }
}
function Fr(e) {
  if (!!Array.isArray(e.end)) {
    if (e.skip || e.excludeEnd || e.returnEnd)
      throw (
        (Ne('skip, excludeEnd, returnEnd not compatible with endScope: {}'), ct)
      )
    if (typeof e.endScope != 'object' || e.endScope === null)
      throw (Ne('endScope must be object'), ct)
    Tn(e, e.end, { key: 'endScope' }), (e.end = Jt(e.end, { joinWith: '' }))
  }
}
function Wr(e) {
  e.scope &&
    typeof e.scope == 'object' &&
    e.scope !== null &&
    ((e.beginScope = e.scope), delete e.scope)
}
function Kr(e) {
  Wr(e),
    typeof e.beginScope == 'string' && (e.beginScope = { _wrap: e.beginScope }),
    typeof e.endScope == 'string' && (e.endScope = { _wrap: e.endScope }),
    zr(e),
    Fr(e)
}
function Gr(e) {
  function t(u, r) {
    return new RegExp(
      He(u),
      'm' +
        (e.case_insensitive ? 'i' : '') +
        (e.unicodeRegex ? 'u' : '') +
        (r ? 'g' : ''),
    )
  }
  class i {
    constructor() {
      ;(this.matchIndexes = {}),
        (this.regexes = []),
        (this.matchAt = 1),
        (this.position = 0)
    }
    addRule(r, o) {
      ;(o.position = this.position++),
        (this.matchIndexes[this.matchAt] = o),
        this.regexes.push([o, r]),
        (this.matchAt += bn(r) + 1)
    }
    compile() {
      this.regexes.length === 0 && (this.exec = () => null)
      const r = this.regexes.map((o) => o[1])
      ;(this.matcherRe = t(Jt(r, { joinWith: '|' }), true)),
        (this.lastIndex = 0)
    }
    exec(r) {
      this.matcherRe.lastIndex = this.lastIndex
      const o = this.matcherRe.exec(r)
      if (!o) return null
      const c = o.findIndex((h, m) => m > 0 && h !== void 0),
        g = this.matchIndexes[c]
      return o.splice(0, c), Object.assign(o, g)
    }
  }
  class n {
    constructor() {
      ;(this.rules = []),
        (this.multiRegexes = []),
        (this.count = 0),
        (this.lastIndex = 0),
        (this.regexIndex = 0)
    }
    getMatcher(r) {
      if (this.multiRegexes[r]) return this.multiRegexes[r]
      const o = new i()
      return (
        this.rules.slice(r).forEach(([c, g]) => o.addRule(c, g)),
        o.compile(),
        (this.multiRegexes[r] = o),
        o
      )
    }
    resumingScanAtSamePosition() {
      return this.regexIndex !== 0
    }
    considerAll() {
      this.regexIndex = 0
    }
    addRule(r, o) {
      this.rules.push([r, o]), o.type === 'begin' && this.count++
    }
    exec(r) {
      const o = this.getMatcher(this.regexIndex)
      o.lastIndex = this.lastIndex
      let c = o.exec(r)
      if (
        this.resumingScanAtSamePosition() &&
        !(c && c.index === this.lastIndex)
      ) {
        const g = this.getMatcher(0)
        ;(g.lastIndex = this.lastIndex + 1), (c = g.exec(r))
      }
      return (
        c &&
          ((this.regexIndex += c.position + 1),
          this.regexIndex === this.count && this.considerAll()),
        c
      )
    }
  }
  function s(u) {
    const r = new n()
    return (
      u.contains.forEach((o) => r.addRule(o.begin, { rule: o, type: 'begin' })),
      u.terminatorEnd && r.addRule(u.terminatorEnd, { type: 'end' }),
      u.illegal && r.addRule(u.illegal, { type: 'illegal' }),
      r
    )
  }
  function l(u, r) {
    const o = u
    if (u.isCompiled) return o
    ;[Cr, Ir, Kr, Pr].forEach((g) => g(u, r)),
      e.compilerExtensions.forEach((g) => g(u, r)),
      (u.__beforeBegin = null),
      [Lr, Mr, Dr].forEach((g) => g(u, r)),
      (u.isCompiled = true)
    let c = null
    return (
      typeof u.keywords == 'object' &&
        u.keywords.$pattern &&
        ((u.keywords = Object.assign({}, u.keywords)),
        (c = u.keywords.$pattern),
        delete u.keywords.$pattern),
      (c = c || /\w+/),
      u.keywords && (u.keywords = xn(u.keywords, e.case_insensitive)),
      (o.keywordPatternRe = t(c, true)),
      r &&
        (u.begin || (u.begin = /\B|\b/),
        (o.beginRe = t(o.begin)),
        !u.end && !u.endsWithParent && (u.end = /\B|\b/),
        u.end && (o.endRe = t(o.end)),
        (o.terminatorEnd = He(o.end) || ''),
        u.endsWithParent &&
          r.terminatorEnd &&
          (o.terminatorEnd += (u.end ? '|' : '') + r.terminatorEnd)),
      u.illegal && (o.illegalRe = t(u.illegal)),
      u.contains || (u.contains = []),
      (u.contains = [].concat(
        ...u.contains.map(function (g) {
          return Hr(g === 'self' ? u : g)
        }),
      )),
      u.contains.forEach(function (g) {
        l(g, o)
      }),
      u.starts && l(u.starts, r),
      (o.matcher = s(o)),
      o
    )
  }
  if (
    (e.compilerExtensions || (e.compilerExtensions = []),
    e.contains && e.contains.includes('self'))
  )
    throw new Error(
      'ERR: contains `self` is not supported at the top-level of a language.  See documentation.',
    )
  return (e.classNameAliases = xe(e.classNameAliases || {})), l(e)
}
function On(e) {
  return e ? e.endsWithParent || On(e.starts) : false
}
function Hr(e) {
  return (
    e.variants &&
      !e.cachedVariants &&
      (e.cachedVariants = e.variants.map(function (t) {
        return xe(e, { variants: null }, t)
      })),
    e.cachedVariants
      ? e.cachedVariants
      : On(e)
        ? xe(e, { starts: e.starts ? xe(e.starts) : null })
        : Object.isFrozen(e)
          ? xe(e)
          : e
  )
}
var qr = '11.10.0'
var Xr = class extends Error {
  constructor(t, i) {
    super(t), (this.name = 'HTMLInjectionError'), (this.html = i)
  }
}
var jt = gn
var Wi = xe
var Ki = Symbol('nomatch')
var Vr = 7
var kn = function (e) {
  const t = /* @__PURE__ */ Object.create(null),
    i = /* @__PURE__ */ Object.create(null),
    n = []
  let s = true
  const l =
      "Could not find the language '{}', did you forget to load/include a language module?",
    u = { disableAutodetect: true, name: 'Plain text', contains: [] }
  let r = {
    ignoreUnescapedHTML: false,
    throwUnescapedHTML: false,
    noHighlightRe: /^(no-?highlight)$/i,
    languageDetectRe: /\blang(?:uage)?-([\w-]+)\b/i,
    classPrefix: 'hljs-',
    cssSelector: 'pre code',
    languages: null,
    __emitter: or,
  }
  function o(y) {
    return r.noHighlightRe.test(y)
  }
  function c(y) {
    let T = y.className + ' '
    T += y.parentNode ? y.parentNode.className : ''
    const R = r.languageDetectRe.exec(T)
    if (R) {
      const I = O(R[1])
      return (
        I ||
          (Fi(l.replace('{}', R[1])),
          Fi('Falling back to no-highlight mode for this block.', y)),
        I ? R[1] : 'no-highlight'
      )
    }
    return T.split(/\s+/).find((I) => o(I) || O(I))
  }
  function g(y, T, R) {
    let I = '',
      $ = ''
    typeof T == 'object'
      ? ((I = y), (R = T.ignoreIllegals), ($ = T.language))
      : (Ie('10.7.0', 'highlight(lang, code, ...args) has been deprecated.'),
        Ie(
          '10.7.0',
          `Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`,
        ),
        ($ = y),
        (I = T)),
      R === void 0 && (R = true)
    const G = {
      code: I,
      language: $,
    }
    j('before:highlight', G)
    const Y = G.result ? G.result : h(G.language, G.code, R)
    return (Y.code = G.code), j('after:highlight', Y), Y
  }
  function h(y, T, R, I) {
    const $ = /* @__PURE__ */ Object.create(null)
    function G(N, D) {
      return N.keywords[D]
    }
    function Y() {
      if (!B.keywords) {
        ee.addText(q)
        return
      }
      let N = 0
      B.keywordPatternRe.lastIndex = 0
      let D = B.keywordPatternRe.exec(q),
        U = ''
      for (; D; ) {
        U += q.substring(N, D.index)
        const H = re.case_insensitive ? D[0].toLowerCase() : D[0],
          te = G(B, H)
        if (te) {
          const [me, Hn] = te
          if (
            (ee.addText(U),
            (U = ''),
            ($[H] = ($[H] || 0) + 1),
            $[H] <= Vr && (Qe += Hn),
            me.startsWith('_'))
          )
            U += D[0]
          else {
            const qn = re.classNameAliases[me] || me
            J(D[0], qn)
          }
        } else U += D[0]
        ;(N = B.keywordPatternRe.lastIndex), (D = B.keywordPatternRe.exec(q))
      }
      ;(U += q.substring(N)), ee.addText(U)
    }
    function he() {
      if (q === '') return
      let N = null
      if (typeof B.subLanguage == 'string') {
        if (!t[B.subLanguage]) {
          ee.addText(q)
          return
        }
        ;(N = h(B.subLanguage, q, true, oi[B.subLanguage])),
          (oi[B.subLanguage] = N._top)
      } else N = S(q, B.subLanguage.length ? B.subLanguage : null)
      B.relevance > 0 && (Qe += N.relevance),
        ee.__addSublanguage(N._emitter, N.language)
    }
    function X() {
      B.subLanguage != null ? he() : Y(), (q = '')
    }
    function J(N, D) {
      N !== '' && (ee.startScope(D), ee.addText(N), ee.endScope())
    }
    function Ue(N, D) {
      let U = 1
      const H = D.length - 1
      for (; U <= H; ) {
        if (!N._emit[U]) {
          U++
          continue
        }
        const te = re.classNameAliases[N[U]] || N[U],
          me = D[U]
        te ? J(me, te) : ((q = me), Y(), (q = '')), U++
      }
    }
    function wt(N, D) {
      return (
        N.scope &&
          typeof N.scope == 'string' &&
          ee.openNode(re.classNameAliases[N.scope] || N.scope),
        N.beginScope &&
          (N.beginScope._wrap
            ? (J(
                q,
                re.classNameAliases[N.beginScope._wrap] || N.beginScope._wrap,
              ),
              (q = ''))
            : N.beginScope._multi && (Ue(N.beginScope, D), (q = ''))),
        (B = Object.create(N, { parent: { value: B } })),
        B
      )
    }
    function je(N, D, U) {
      let H = cr(N.endRe, U)
      if (H) {
        if (N['on:end']) {
          const te = new $i(N)
          N['on:end'](D, te), te.isMatchIgnored && (H = false)
        }
        if (H) {
          for (; N.endsParent && N.parent; ) N = N.parent
          return N
        }
      }
      if (N.endsWithParent) return je(N.parent, D, U)
    }
    function se(N) {
      return B.matcher.regexIndex === 0 ? ((q += N[0]), 1) : ((Tt = true), 0)
    }
    function Ze(N) {
      const D = N[0],
        U = N.rule,
        H = new $i(U),
        te = [U.__beforeBegin, U['on:begin']]
      for (const me of te)
        if (!!me && (me(N, H), H.isMatchIgnored)) return se(D)
      return (
        U.skip
          ? (q += D)
          : (U.excludeBegin && (q += D),
            X(),
            !U.returnBegin && !U.excludeBegin && (q = D)),
        wt(U, N),
        U.returnBegin ? 0 : D.length
      )
    }
    function Le(N) {
      const D = N[0],
        U = T.substring(N.index),
        H = je(B, N, U)
      if (!H) return Ki
      const te = B
      B.endScope && B.endScope._wrap
        ? (X(), J(D, B.endScope._wrap))
        : B.endScope && B.endScope._multi
          ? (X(), Ue(B.endScope, N))
          : te.skip
            ? (q += D)
            : (te.returnEnd || te.excludeEnd || (q += D),
              X(),
              te.excludeEnd && (q = D))
      do
        B.scope && ee.closeNode(),
          !B.skip && !B.subLanguage && (Qe += B.relevance),
          (B = B.parent)
      while (B !== H.parent)
      return H.starts && wt(H.starts, N), te.returnEnd ? 0 : D.length
    }
    function de() {
      const N = []
      for (let D = B; D !== re; D = D.parent) D.scope && N.unshift(D.scope)
      N.forEach((D) => ee.openNode(D))
    }
    let ge = {}
    function ze(N, D) {
      const U = D && D[0]
      if (((q += N), U == null)) return X(), 0
      if (
        ge.type === 'begin' &&
        D.type === 'end' &&
        ge.index === D.index &&
        U === ''
      ) {
        if (((q += T.slice(D.index, D.index + 1)), !s)) {
          const H = new Error(`0 width match regex (${y})`)
          throw ((H.languageName = y), (H.badRule = ge.rule), H)
        }
        return 1
      }
      if (((ge = D), D.type === 'begin')) return Ze(D)
      if (D.type === 'illegal' && !R) {
        const H = new Error(
          'Illegal lexeme "' +
            U +
            '" for mode "' +
            (B.scope || '<unnamed>') +
            '"',
        )
        throw ((H.mode = B), H)
      } else if (D.type === 'end') {
        const H = Le(D)
        if (H !== Ki) return H
      }
      if (D.type === 'illegal' && U === '') return 1
      if (xt > 1e5 && xt > D.index * 3)
        throw new Error(
          'potential infinite loop, way more iterations than matches',
        )
      return (q += U), U.length
    }
    const re = O(y)
    if (!re)
      throw (Ne(l.replace('{}', y)), new Error('Unknown language: "' + y + '"'))
    const Gn = Gr(re)
    let Et = '',
      B = I || Gn
    const oi = {},
      ee = new r.__emitter(r)
    de()
    let q = '',
      Qe = 0,
      Oe = 0,
      xt = 0,
      Tt = false
    try {
      if (re.__emitTokens) re.__emitTokens(T, ee)
      else {
        for (B.matcher.considerAll(); ; ) {
          xt++,
            Tt ? (Tt = false) : B.matcher.considerAll(),
            (B.matcher.lastIndex = Oe)
          const N = B.matcher.exec(T)
          if (!N) break
          const D = T.substring(Oe, N.index),
            U = ze(D, N)
          Oe = N.index + U
        }
        ze(T.substring(Oe))
      }
      return (
        ee.finalize(),
        (Et = ee.toHTML()),
        {
          language: y,
          value: Et,
          relevance: Qe,
          illegal: false,
          _emitter: ee,
          _top: B,
        }
      )
    } catch (N) {
      if (N.message && N.message.includes('Illegal'))
        return {
          language: y,
          value: jt(T),
          illegal: true,
          relevance: 0,
          _illegalBy: {
            message: N.message,
            index: Oe,
            context: T.slice(Oe - 100, Oe + 100),
            mode: N.mode,
            resultSoFar: Et,
          },
          _emitter: ee,
        }
      if (s)
        return {
          language: y,
          value: jt(T),
          illegal: false,
          relevance: 0,
          errorRaised: N,
          _emitter: ee,
          _top: B,
        }
      throw N
    }
  }
  function m(y) {
    const T = {
      value: jt(y),
      illegal: false,
      relevance: 0,
      _top: u,
      _emitter: new r.__emitter(r),
    }
    return T._emitter.addText(y), T
  }
  function S(y, T) {
    T = T || r.languages || Object.keys(t)
    const R = m(y),
      I = T.filter(O)
        .filter(E)
        .map((X) => h(X, y, false))
    I.unshift(R)
    const $ = I.sort((X, J) => {
        if (X.relevance !== J.relevance) return J.relevance - X.relevance
        if (X.language && J.language) {
          if (O(X.language).supersetOf === J.language) return 1
          if (O(J.language).supersetOf === X.language) return -1
        }
        return 0
      }),
      [G, Y] = $,
      he = G
    return (he.secondBest = Y), he
  }
  function C(y, T, R) {
    const I = (T && i[T]) || R
    y.classList.add('hljs'), y.classList.add(`language-${I}`)
  }
  function L(y) {
    let T = null
    const R = c(y)
    if (o(R)) return
    if (
      (j('before:highlightElement', { el: y, language: R }),
      y.dataset.highlighted)
    ) {
      console.log(
        'Element previously highlighted. To highlight again, first unset `dataset.highlighted`.',
        y,
      )
      return
    }
    if (
      y.children.length > 0 &&
      (r.ignoreUnescapedHTML ||
        (console.warn(
          'One of your code blocks includes unescaped HTML. This is a potentially serious security risk.',
        ),
        console.warn(
          'https://github.com/highlightjs/highlight.js/wiki/security',
        ),
        console.warn('The element with unescaped HTML:'),
        console.warn(y)),
      r.throwUnescapedHTML)
    )
      throw new Xr(
        'One of your code blocks includes unescaped HTML.',
        y.innerHTML,
      )
    T = y
    const I = T.textContent,
      $ = R ? g(I, { language: R, ignoreIllegals: true }) : S(I)
    ;(y.innerHTML = $.value),
      (y.dataset.highlighted = 'yes'),
      C(y, R, $.language),
      (y.result = {
        language: $.language,
        re: $.relevance,
        relevance: $.relevance,
      }),
      $.secondBest &&
        (y.secondBest = {
          language: $.secondBest.language,
          relevance: $.secondBest.relevance,
        }),
      j('after:highlightElement', { el: y, result: $, text: I })
  }
  function d(y) {
    r = Wi(r, y)
  }
  const _ = () => {
    x(), Ie('10.6.0', 'initHighlighting() deprecated.  Use highlightAll() now.')
  }
  function b() {
    x(),
      Ie(
        '10.6.0',
        'initHighlightingOnLoad() deprecated.  Use highlightAll() now.',
      )
  }
  let A = false
  function x() {
    if (document.readyState === 'loading') {
      A = true
      return
    }
    document.querySelectorAll(r.cssSelector).forEach(L)
  }
  function k() {
    A && x()
  }
  typeof window < 'u' &&
    window.addEventListener &&
    window.addEventListener('DOMContentLoaded', k, false)
  function p(y, T) {
    let R = null
    try {
      R = T(e)
    } catch (I) {
      if (
        (Ne(
          "Language definition for '{}' could not be registered.".replace(
            '{}',
            y,
          ),
        ),
        s)
      )
        Ne(I)
      else throw I
      R = u
    }
    R.name || (R.name = y),
      (t[y] = R),
      (R.rawDefinition = T.bind(null, e)),
      R.aliases && a(R.aliases, { languageName: y })
  }
  function v(y) {
    delete t[y]
    for (const T of Object.keys(i)) i[T] === y && delete i[T]
  }
  function f() {
    return Object.keys(t)
  }
  function O(y) {
    return (y = (y || '').toLowerCase()), t[y] || t[i[y]]
  }
  function a(y, { languageName: T }) {
    typeof y == 'string' && (y = [y]),
      y.forEach((R) => {
        i[R.toLowerCase()] = T
      })
  }
  function E(y) {
    const T = O(y)
    return T && !T.disableAutodetect
  }
  function w(y) {
    y['before:highlightBlock'] &&
      !y['before:highlightElement'] &&
      (y['before:highlightElement'] = (T) => {
        y['before:highlightBlock'](Object.assign({ block: T.el }, T))
      }),
      y['after:highlightBlock'] &&
        !y['after:highlightElement'] &&
        (y['after:highlightElement'] = (T) => {
          y['after:highlightBlock'](Object.assign({ block: T.el }, T))
        })
  }
  function M(y) {
    w(y), n.push(y)
  }
  function P(y) {
    const T = n.indexOf(y)
    T !== -1 && n.splice(T, 1)
  }
  function j(y, T) {
    const R = y
    n.forEach(function (I) {
      I[R] && I[R](T)
    })
  }
  function F(y) {
    return (
      Ie('10.7.0', 'highlightBlock will be removed entirely in v12.0'),
      Ie('10.7.0', 'Please use highlightElement now.'),
      L(y)
    )
  }
  Object.assign(e, {
    highlight: g,
    highlightAuto: S,
    highlightAll: x,
    highlightElement: L,
    highlightBlock: F,
    configure: d,
    initHighlighting: _,
    initHighlightingOnLoad: b,
    registerLanguage: p,
    unregisterLanguage: v,
    listLanguages: f,
    getLanguage: O,
    registerAliases: a,
    autoDetection: E,
    inherit: Wi,
    addPlugin: M,
    removePlugin: P,
  }),
    (e.debugMode = function () {
      s = false
    }),
    (e.safeMode = function () {
      s = true
    }),
    (e.versionString = qr),
    (e.regex = {
      concat: Ce,
      lookahead: mn,
      either: Qt,
      optional: ur,
      anyNumberOfTimes: lr,
    })
  for (const y in st) typeof st[y] == 'object' && dn(st[y])
  return Object.assign(e, st), e
}
var Be = kn({})
Be.newInstance = () => kn({})
var Zr = Be
Be.HighlightJS = Be
Be.default = Be
var Ve = Zr
var pt = '[A-Za-z$_][0-9A-Za-z$_]*'
var Sn = [
  'as',
  'in',
  'of',
  'if',
  'for',
  'while',
  'finally',
  'var',
  'new',
  'function',
  'do',
  'return',
  'void',
  'else',
  'break',
  'catch',
  'instanceof',
  'with',
  'throw',
  'case',
  'default',
  'try',
  'switch',
  'continue',
  'typeof',
  'delete',
  'let',
  'yield',
  'const',
  'class',
  'debugger',
  'async',
  'await',
  'static',
  'import',
  'from',
  'export',
  'extends',
]
var An = ['true', 'false', 'null', 'undefined', 'NaN', 'Infinity']
var Rn = [
  'Object',
  'Function',
  'Boolean',
  'Symbol',
  'Math',
  'Date',
  'Number',
  'BigInt',
  'String',
  'RegExp',
  'Array',
  'Float32Array',
  'Float64Array',
  'Int8Array',
  'Uint8Array',
  'Uint8ClampedArray',
  'Int16Array',
  'Int32Array',
  'Uint16Array',
  'Uint32Array',
  'BigInt64Array',
  'BigUint64Array',
  'Set',
  'Map',
  'WeakSet',
  'WeakMap',
  'ArrayBuffer',
  'SharedArrayBuffer',
  'Atomics',
  'DataView',
  'JSON',
  'Promise',
  'Generator',
  'GeneratorFunction',
  'AsyncFunction',
  'Reflect',
  'Proxy',
  'Intl',
  'WebAssembly',
]
var Nn = [
  'Error',
  'EvalError',
  'InternalError',
  'RangeError',
  'ReferenceError',
  'SyntaxError',
  'TypeError',
  'URIError',
]
var Cn = [
  'setInterval',
  'setTimeout',
  'clearInterval',
  'clearTimeout',
  'require',
  'exports',
  'eval',
  'isFinite',
  'isNaN',
  'parseFloat',
  'parseInt',
  'decodeURI',
  'decodeURIComponent',
  'encodeURI',
  'encodeURIComponent',
  'escape',
  'unescape',
]
var Ln = [
  'arguments',
  'this',
  'super',
  'console',
  'window',
  'document',
  'localStorage',
  'sessionStorage',
  'module',
  'global',
]
var Mn = [].concat(Cn, Rn, Nn)
function Qr(e) {
  const t = e.regex,
    i = (T, { after: R }) => {
      const I = '</' + T[0].slice(1)
      return T.input.indexOf(I, R) !== -1
    },
    n = pt,
    s = {
      begin: '<>',
      end: '</>',
    },
    l = /<[A-Za-z0-9\\._:-]+\s*\/>/,
    u = {
      begin: /<[A-Za-z0-9\\._:-]+/,
      end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
      isTrulyOpeningTag: (T, R) => {
        const I = T[0].length + T.index,
          $ = T.input[I]
        if ($ === '<' || $ === ',') {
          R.ignoreMatch()
          return
        }
        $ === '>' && (i(T, { after: I }) || R.ignoreMatch())
        let G
        const Y = T.input.substring(I)
        if ((G = Y.match(/^\s*=/))) {
          R.ignoreMatch()
          return
        }
        if ((G = Y.match(/^\s+extends\s+/)) && G.index === 0) {
          R.ignoreMatch()
          return
        }
      },
    },
    r = {
      $pattern: pt,
      keyword: Sn,
      literal: An,
      built_in: Mn,
      'variable.language': Ln,
    },
    o = '[0-9](_?[0-9])*',
    c = `\\.(${o})`,
    g = '0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*',
    h = {
      className: 'number',
      variants: [
        { begin: `(\\b(${g})((${c})|\\.)?|(${c}))[eE][+-]?(${o})\\b` },
        { begin: `\\b(${g})\\b((${c})\\b|\\.)?|(${c})\\b` },
        { begin: '\\b(0|[1-9](_?[0-9])*)n\\b' },
        { begin: '\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b' },
        { begin: '\\b0[bB][0-1](_?[0-1])*n?\\b' },
        { begin: '\\b0[oO][0-7](_?[0-7])*n?\\b' },
        { begin: '\\b0[0-7]+n?\\b' },
      ],
      relevance: 0,
    },
    m = {
      className: 'subst',
      begin: '\\$\\{',
      end: '\\}',
      keywords: r,
      contains: [],
    },
    S = {
      begin: '.?html`',
      end: '',
      starts: {
        end: '`',
        returnEnd: false,
        contains: [e.BACKSLASH_ESCAPE, m],
        subLanguage: 'xml',
      },
    },
    C = {
      begin: '.?css`',
      end: '',
      starts: {
        end: '`',
        returnEnd: false,
        contains: [e.BACKSLASH_ESCAPE, m],
        subLanguage: 'css',
      },
    },
    L = {
      begin: '.?gql`',
      end: '',
      starts: {
        end: '`',
        returnEnd: false,
        contains: [e.BACKSLASH_ESCAPE, m],
        subLanguage: 'graphql',
      },
    },
    d = {
      className: 'string',
      begin: '`',
      end: '`',
      contains: [e.BACKSLASH_ESCAPE, m],
    },
    b = {
      className: 'comment',
      variants: [
        e.COMMENT(/\/\*\*(?!\/)/, '\\*/', {
          relevance: 0,
          contains: [
            {
              begin: '(?=@[A-Za-z]+)',
              relevance: 0,
              contains: [
                {
                  className: 'doctag',
                  begin: '@[A-Za-z]+',
                },
                {
                  className: 'type',
                  begin: '\\{',
                  end: '\\}',
                  excludeEnd: true,
                  excludeBegin: true,
                  relevance: 0,
                },
                {
                  className: 'variable',
                  begin: n + '(?=\\s*(-)|$)',
                  endsParent: true,
                  relevance: 0,
                },
                {
                  begin: /(?=[^\n])\s/,
                  relevance: 0,
                },
              ],
            },
          ],
        }),
        e.C_BLOCK_COMMENT_MODE,
        e.C_LINE_COMMENT_MODE,
      ],
    },
    A = [
      e.APOS_STRING_MODE,
      e.QUOTE_STRING_MODE,
      S,
      C,
      L,
      d,
      { match: /\$\d+/ },
      h,
    ]
  m.contains = A.concat({
    begin: /\{/,
    end: /\}/,
    keywords: r,
    contains: ['self'].concat(A),
  })
  const x = [].concat(b, m.contains),
    k = x.concat([
      {
        begin: /(\s*)\(/,
        end: /\)/,
        keywords: r,
        contains: ['self'].concat(x),
      },
    ]),
    p = {
      className: 'params',
      begin: /(\s*)\(/,
      end: /\)/,
      excludeBegin: true,
      excludeEnd: true,
      keywords: r,
      contains: k,
    },
    v = {
      variants: [
        {
          match: [
            /class/,
            /\s+/,
            n,
            /\s+/,
            /extends/,
            /\s+/,
            t.concat(n, '(', t.concat(/\./, n), ')*'),
          ],
          scope: {
            1: 'keyword',
            3: 'title.class',
            5: 'keyword',
            7: 'title.class.inherited',
          },
        },
        {
          match: [/class/, /\s+/, n],
          scope: {
            1: 'keyword',
            3: 'title.class',
          },
        },
      ],
    },
    f = {
      relevance: 0,
      match: t.either(
        /\bJSON/,
        /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,
        /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,
        /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/,
      ),
      className: 'title.class',
      keywords: {
        _: [...Rn, ...Nn],
      },
    },
    O = {
      label: 'use_strict',
      className: 'meta',
      relevance: 10,
      begin: /^\s*['"]use (strict|asm)['"]/,
    },
    a = {
      variants: [
        {
          match: [/function/, /\s+/, n, /(?=\s*\()/],
        },
        {
          match: [/function/, /\s*(?=\()/],
        },
      ],
      className: {
        1: 'keyword',
        3: 'title.function',
      },
      label: 'func.def',
      contains: [p],
      illegal: /%/,
    },
    E = {
      relevance: 0,
      match: /\b[A-Z][A-Z_0-9]+\b/,
      className: 'variable.constant',
    }
  function w(T) {
    return t.concat('(?!', T.join('|'), ')')
  }
  const M = {
      match: t.concat(
        /\b/,
        w([...Cn, 'super', 'import'].map((T) => `${T}\\s*\\(`)),
        n,
        t.lookahead(/\s*\(/),
      ),
      className: 'title.function',
      relevance: 0,
    },
    P = {
      begin: t.concat(/\./, t.lookahead(t.concat(n, /(?![0-9A-Za-z$_(])/))),
      end: n,
      excludeBegin: true,
      keywords: 'prototype',
      className: 'property',
      relevance: 0,
    },
    j = {
      match: [/get|set/, /\s+/, n, /(?=\()/],
      className: {
        1: 'keyword',
        3: 'title.function',
      },
      contains: [
        {
          begin: /\(\)/,
        },
        p,
      ],
    },
    F =
      '(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|' +
      e.UNDERSCORE_IDENT_RE +
      ')\\s*=>',
    y = {
      match: [
        /const|var|let/,
        /\s+/,
        n,
        /\s*/,
        /=\s*/,
        /(async\s*)?/,
        t.lookahead(F),
      ],
      keywords: 'async',
      className: {
        1: 'keyword',
        3: 'title.function',
      },
      contains: [p],
    }
  return {
    name: 'JavaScript',
    aliases: ['js', 'jsx', 'mjs', 'cjs'],
    keywords: r,
    exports: { PARAMS_CONTAINS: k, CLASS_REFERENCE: f },
    illegal: /#(?![$_A-z])/,
    contains: [
      e.SHEBANG({
        label: 'shebang',
        binary: 'node',
        relevance: 5,
      }),
      O,
      e.APOS_STRING_MODE,
      e.QUOTE_STRING_MODE,
      S,
      C,
      L,
      d,
      b,
      { match: /\$\d+/ },
      h,
      f,
      {
        className: 'attr',
        begin: n + t.lookahead(':'),
        relevance: 0,
      },
      y,
      {
        begin: '(' + e.RE_STARTERS_RE + '|\\b(case|return|throw)\\b)\\s*',
        keywords: 'return throw case',
        relevance: 0,
        contains: [
          b,
          e.REGEXP_MODE,
          {
            className: 'function',
            begin: F,
            returnBegin: true,
            end: '\\s*=>',
            contains: [
              {
                className: 'params',
                variants: [
                  {
                    begin: e.UNDERSCORE_IDENT_RE,
                    relevance: 0,
                  },
                  {
                    className: null,
                    begin: /\(\s*\)/,
                    skip: true,
                  },
                  {
                    begin: /(\s*)\(/,
                    end: /\)/,
                    excludeBegin: true,
                    excludeEnd: true,
                    keywords: r,
                    contains: k,
                  },
                ],
              },
            ],
          },
          {
            begin: /,/,
            relevance: 0,
          },
          {
            match: /\s+/,
            relevance: 0,
          },
          {
            variants: [
              { begin: s.begin, end: s.end },
              { match: l },
              {
                begin: u.begin,
                'on:begin': u.isTrulyOpeningTag,
                end: u.end,
              },
            ],
            subLanguage: 'xml',
            contains: [
              {
                begin: u.begin,
                end: u.end,
                skip: true,
                contains: ['self'],
              },
            ],
          },
        ],
      },
      a,
      {
        beginKeywords: 'while if switch catch for',
      },
      {
        begin:
          '\\b(?!function)' +
          e.UNDERSCORE_IDENT_RE +
          '\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{',
        returnBegin: true,
        label: 'func.def',
        contains: [
          p,
          e.inherit(e.TITLE_MODE, { begin: n, className: 'title.function' }),
        ],
      },
      {
        match: /\.\.\./,
        relevance: 0,
      },
      P,
      {
        match: '\\$' + n,
        relevance: 0,
      },
      {
        match: [/\bconstructor(?=\s*\()/],
        className: { 1: 'title.function' },
        contains: [p],
      },
      M,
      E,
      v,
      j,
      {
        match: /\$[(.]/,
      },
    ],
  }
}
function Jr(e) {
  const t = Qr(e),
    i = pt,
    n = [
      'any',
      'void',
      'number',
      'boolean',
      'string',
      'object',
      'never',
      'symbol',
      'bigint',
      'unknown',
    ],
    s = {
      begin: [/namespace/, /\s+/, e.IDENT_RE],
      beginScope: {
        1: 'keyword',
        3: 'title.class',
      },
    },
    l = {
      beginKeywords: 'interface',
      end: /\{/,
      excludeEnd: true,
      keywords: {
        keyword: 'interface extends',
        built_in: n,
      },
      contains: [t.exports.CLASS_REFERENCE],
    },
    u = {
      className: 'meta',
      relevance: 10,
      begin: /^\s*['"]use strict['"]/,
    },
    r = [
      'type',
      'interface',
      'public',
      'private',
      'protected',
      'implements',
      'declare',
      'abstract',
      'readonly',
      'enum',
      'override',
      'satisfies',
    ],
    o = {
      $pattern: pt,
      keyword: Sn.concat(r),
      literal: An,
      built_in: Mn.concat(n),
      'variable.language': Ln,
    },
    c = {
      className: 'meta',
      begin: '@' + i,
    },
    g = (S, C, L) => {
      const d = S.contains.findIndex((_) => _.label === C)
      if (d === -1) throw new Error('can not find mode to replace')
      S.contains.splice(d, 1, L)
    }
  Object.assign(t.keywords, o), t.exports.PARAMS_CONTAINS.push(c)
  const h = t.contains.find((S) => S.className === 'attr')
  t.exports.PARAMS_CONTAINS.push([t.exports.CLASS_REFERENCE, h]),
    (t.contains = t.contains.concat([c, s, l])),
    g(t, 'shebang', e.SHEBANG()),
    g(t, 'use_strict', u)
  const m = t.contains.find((S) => S.label === 'func.def')
  return (
    (m.relevance = 0),
    Object.assign(t, {
      name: 'TypeScript',
      aliases: ['ts', 'tsx', 'mts', 'cts'],
    }),
    t
  )
}
var Gi = '[A-Za-z$_][0-9A-Za-z$_]*'
var Yr = [
  'as',
  'in',
  'of',
  'if',
  'for',
  'while',
  'finally',
  'var',
  'new',
  'function',
  'do',
  'return',
  'void',
  'else',
  'break',
  'catch',
  'instanceof',
  'with',
  'throw',
  'case',
  'default',
  'try',
  'switch',
  'continue',
  'typeof',
  'delete',
  'let',
  'yield',
  'const',
  'class',
  'debugger',
  'async',
  'await',
  'static',
  'import',
  'from',
  'export',
  'extends',
]
var ea = ['true', 'false', 'null', 'undefined', 'NaN', 'Infinity']
var In = [
  'Object',
  'Function',
  'Boolean',
  'Symbol',
  'Math',
  'Date',
  'Number',
  'BigInt',
  'String',
  'RegExp',
  'Array',
  'Float32Array',
  'Float64Array',
  'Int8Array',
  'Uint8Array',
  'Uint8ClampedArray',
  'Int16Array',
  'Int32Array',
  'Uint16Array',
  'Uint32Array',
  'BigInt64Array',
  'BigUint64Array',
  'Set',
  'Map',
  'WeakSet',
  'WeakMap',
  'ArrayBuffer',
  'SharedArrayBuffer',
  'Atomics',
  'DataView',
  'JSON',
  'Promise',
  'Generator',
  'GeneratorFunction',
  'AsyncFunction',
  'Reflect',
  'Proxy',
  'Intl',
  'WebAssembly',
]
var Dn = [
  'Error',
  'EvalError',
  'InternalError',
  'RangeError',
  'ReferenceError',
  'SyntaxError',
  'TypeError',
  'URIError',
]
var Pn = [
  'setInterval',
  'setTimeout',
  'clearInterval',
  'clearTimeout',
  'require',
  'exports',
  'eval',
  'isFinite',
  'isNaN',
  'parseFloat',
  'parseInt',
  'decodeURI',
  'decodeURIComponent',
  'encodeURI',
  'encodeURIComponent',
  'escape',
  'unescape',
]
var ta = [
  'arguments',
  'this',
  'super',
  'console',
  'window',
  'document',
  'localStorage',
  'sessionStorage',
  'module',
  'global',
]
var ia = [].concat(Pn, In, Dn)
function na(e) {
  const t = e.regex,
    i = (T, { after: R }) => {
      const I = '</' + T[0].slice(1)
      return T.input.indexOf(I, R) !== -1
    },
    n = Gi,
    s = {
      begin: '<>',
      end: '</>',
    },
    l = /<[A-Za-z0-9\\._:-]+\s*\/>/,
    u = {
      begin: /<[A-Za-z0-9\\._:-]+/,
      end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
      isTrulyOpeningTag: (T, R) => {
        const I = T[0].length + T.index,
          $ = T.input[I]
        if ($ === '<' || $ === ',') {
          R.ignoreMatch()
          return
        }
        $ === '>' && (i(T, { after: I }) || R.ignoreMatch())
        let G
        const Y = T.input.substring(I)
        if ((G = Y.match(/^\s*=/))) {
          R.ignoreMatch()
          return
        }
        if ((G = Y.match(/^\s+extends\s+/)) && G.index === 0) {
          R.ignoreMatch()
          return
        }
      },
    },
    r = {
      $pattern: Gi,
      keyword: Yr,
      literal: ea,
      built_in: ia,
      'variable.language': ta,
    },
    o = '[0-9](_?[0-9])*',
    c = `\\.(${o})`,
    g = '0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*',
    h = {
      className: 'number',
      variants: [
        { begin: `(\\b(${g})((${c})|\\.)?|(${c}))[eE][+-]?(${o})\\b` },
        { begin: `\\b(${g})\\b((${c})\\b|\\.)?|(${c})\\b` },
        { begin: '\\b(0|[1-9](_?[0-9])*)n\\b' },
        { begin: '\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b' },
        { begin: '\\b0[bB][0-1](_?[0-1])*n?\\b' },
        { begin: '\\b0[oO][0-7](_?[0-7])*n?\\b' },
        { begin: '\\b0[0-7]+n?\\b' },
      ],
      relevance: 0,
    },
    m = {
      className: 'subst',
      begin: '\\$\\{',
      end: '\\}',
      keywords: r,
      contains: [],
    },
    S = {
      begin: '.?html`',
      end: '',
      starts: {
        end: '`',
        returnEnd: false,
        contains: [e.BACKSLASH_ESCAPE, m],
        subLanguage: 'xml',
      },
    },
    C = {
      begin: '.?css`',
      end: '',
      starts: {
        end: '`',
        returnEnd: false,
        contains: [e.BACKSLASH_ESCAPE, m],
        subLanguage: 'css',
      },
    },
    L = {
      begin: '.?gql`',
      end: '',
      starts: {
        end: '`',
        returnEnd: false,
        contains: [e.BACKSLASH_ESCAPE, m],
        subLanguage: 'graphql',
      },
    },
    d = {
      className: 'string',
      begin: '`',
      end: '`',
      contains: [e.BACKSLASH_ESCAPE, m],
    },
    b = {
      className: 'comment',
      variants: [
        e.COMMENT(/\/\*\*(?!\/)/, '\\*/', {
          relevance: 0,
          contains: [
            {
              begin: '(?=@[A-Za-z]+)',
              relevance: 0,
              contains: [
                {
                  className: 'doctag',
                  begin: '@[A-Za-z]+',
                },
                {
                  className: 'type',
                  begin: '\\{',
                  end: '\\}',
                  excludeEnd: true,
                  excludeBegin: true,
                  relevance: 0,
                },
                {
                  className: 'variable',
                  begin: n + '(?=\\s*(-)|$)',
                  endsParent: true,
                  relevance: 0,
                },
                {
                  begin: /(?=[^\n])\s/,
                  relevance: 0,
                },
              ],
            },
          ],
        }),
        e.C_BLOCK_COMMENT_MODE,
        e.C_LINE_COMMENT_MODE,
      ],
    },
    A = [
      e.APOS_STRING_MODE,
      e.QUOTE_STRING_MODE,
      S,
      C,
      L,
      d,
      { match: /\$\d+/ },
      h,
    ]
  m.contains = A.concat({
    begin: /\{/,
    end: /\}/,
    keywords: r,
    contains: ['self'].concat(A),
  })
  const x = [].concat(b, m.contains),
    k = x.concat([
      {
        begin: /(\s*)\(/,
        end: /\)/,
        keywords: r,
        contains: ['self'].concat(x),
      },
    ]),
    p = {
      className: 'params',
      begin: /(\s*)\(/,
      end: /\)/,
      excludeBegin: true,
      excludeEnd: true,
      keywords: r,
      contains: k,
    },
    v = {
      variants: [
        {
          match: [
            /class/,
            /\s+/,
            n,
            /\s+/,
            /extends/,
            /\s+/,
            t.concat(n, '(', t.concat(/\./, n), ')*'),
          ],
          scope: {
            1: 'keyword',
            3: 'title.class',
            5: 'keyword',
            7: 'title.class.inherited',
          },
        },
        {
          match: [/class/, /\s+/, n],
          scope: {
            1: 'keyword',
            3: 'title.class',
          },
        },
      ],
    },
    f = {
      relevance: 0,
      match: t.either(
        /\bJSON/,
        /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,
        /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,
        /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/,
      ),
      className: 'title.class',
      keywords: {
        _: [...In, ...Dn],
      },
    },
    O = {
      label: 'use_strict',
      className: 'meta',
      relevance: 10,
      begin: /^\s*['"]use (strict|asm)['"]/,
    },
    a = {
      variants: [
        {
          match: [/function/, /\s+/, n, /(?=\s*\()/],
        },
        {
          match: [/function/, /\s*(?=\()/],
        },
      ],
      className: {
        1: 'keyword',
        3: 'title.function',
      },
      label: 'func.def',
      contains: [p],
      illegal: /%/,
    },
    E = {
      relevance: 0,
      match: /\b[A-Z][A-Z_0-9]+\b/,
      className: 'variable.constant',
    }
  function w(T) {
    return t.concat('(?!', T.join('|'), ')')
  }
  const M = {
      match: t.concat(
        /\b/,
        w([...Pn, 'super', 'import'].map((T) => `${T}\\s*\\(`)),
        n,
        t.lookahead(/\s*\(/),
      ),
      className: 'title.function',
      relevance: 0,
    },
    P = {
      begin: t.concat(/\./, t.lookahead(t.concat(n, /(?![0-9A-Za-z$_(])/))),
      end: n,
      excludeBegin: true,
      keywords: 'prototype',
      className: 'property',
      relevance: 0,
    },
    j = {
      match: [/get|set/, /\s+/, n, /(?=\()/],
      className: {
        1: 'keyword',
        3: 'title.function',
      },
      contains: [
        {
          begin: /\(\)/,
        },
        p,
      ],
    },
    F =
      '(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|' +
      e.UNDERSCORE_IDENT_RE +
      ')\\s*=>',
    y = {
      match: [
        /const|var|let/,
        /\s+/,
        n,
        /\s*/,
        /=\s*/,
        /(async\s*)?/,
        t.lookahead(F),
      ],
      keywords: 'async',
      className: {
        1: 'keyword',
        3: 'title.function',
      },
      contains: [p],
    }
  return {
    name: 'JavaScript',
    aliases: ['js', 'jsx', 'mjs', 'cjs'],
    keywords: r,
    exports: { PARAMS_CONTAINS: k, CLASS_REFERENCE: f },
    illegal: /#(?![$_A-z])/,
    contains: [
      e.SHEBANG({
        label: 'shebang',
        binary: 'node',
        relevance: 5,
      }),
      O,
      e.APOS_STRING_MODE,
      e.QUOTE_STRING_MODE,
      S,
      C,
      L,
      d,
      b,
      { match: /\$\d+/ },
      h,
      f,
      {
        className: 'attr',
        begin: n + t.lookahead(':'),
        relevance: 0,
      },
      y,
      {
        begin: '(' + e.RE_STARTERS_RE + '|\\b(case|return|throw)\\b)\\s*',
        keywords: 'return throw case',
        relevance: 0,
        contains: [
          b,
          e.REGEXP_MODE,
          {
            className: 'function',
            begin: F,
            returnBegin: true,
            end: '\\s*=>',
            contains: [
              {
                className: 'params',
                variants: [
                  {
                    begin: e.UNDERSCORE_IDENT_RE,
                    relevance: 0,
                  },
                  {
                    className: null,
                    begin: /\(\s*\)/,
                    skip: true,
                  },
                  {
                    begin: /(\s*)\(/,
                    end: /\)/,
                    excludeBegin: true,
                    excludeEnd: true,
                    keywords: r,
                    contains: k,
                  },
                ],
              },
            ],
          },
          {
            begin: /,/,
            relevance: 0,
          },
          {
            match: /\s+/,
            relevance: 0,
          },
          {
            variants: [
              { begin: s.begin, end: s.end },
              { match: l },
              {
                begin: u.begin,
                'on:begin': u.isTrulyOpeningTag,
                end: u.end,
              },
            ],
            subLanguage: 'xml',
            contains: [
              {
                begin: u.begin,
                end: u.end,
                skip: true,
                contains: ['self'],
              },
            ],
          },
        ],
      },
      a,
      {
        beginKeywords: 'while if switch catch for',
      },
      {
        begin:
          '\\b(?!function)' +
          e.UNDERSCORE_IDENT_RE +
          '\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{',
        returnBegin: true,
        label: 'func.def',
        contains: [
          p,
          e.inherit(e.TITLE_MODE, { begin: n, className: 'title.function' }),
        ],
      },
      {
        match: /\.\.\./,
        relevance: 0,
      },
      P,
      {
        match: '\\$' + n,
        relevance: 0,
      },
      {
        match: [/\bconstructor(?=\s*\()/],
        className: { 1: 'title.function' },
        contains: [p],
      },
      M,
      E,
      v,
      j,
      {
        match: /\$[(.]/,
      },
    ],
  }
}
var sa = (e) => ({
  IMPORTANT: {
    scope: 'meta',
    begin: '!important',
  },
  BLOCK_COMMENT: e.C_BLOCK_COMMENT_MODE,
  HEXCOLOR: {
    scope: 'number',
    begin: /#(([0-9a-fA-F]{3,4})|(([0-9a-fA-F]{2}){3,4}))\b/,
  },
  FUNCTION_DISPATCH: {
    className: 'built_in',
    begin: /[\w-]+(?=\()/,
  },
  ATTRIBUTE_SELECTOR_MODE: {
    scope: 'selector-attr',
    begin: /\[/,
    end: /\]/,
    illegal: '$',
    contains: [e.APOS_STRING_MODE, e.QUOTE_STRING_MODE],
  },
  CSS_NUMBER_MODE: {
    scope: 'number',
    begin:
      e.NUMBER_RE +
      '(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?',
    relevance: 0,
  },
  CSS_VARIABLE: {
    className: 'attr',
    begin: /--[A-Za-z_][A-Za-z0-9_-]*/,
  },
})
var ra = [
  'a',
  'abbr',
  'address',
  'article',
  'aside',
  'audio',
  'b',
  'blockquote',
  'body',
  'button',
  'canvas',
  'caption',
  'cite',
  'code',
  'dd',
  'del',
  'details',
  'dfn',
  'div',
  'dl',
  'dt',
  'em',
  'fieldset',
  'figcaption',
  'figure',
  'footer',
  'form',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'header',
  'hgroup',
  'html',
  'i',
  'iframe',
  'img',
  'input',
  'ins',
  'kbd',
  'label',
  'legend',
  'li',
  'main',
  'mark',
  'menu',
  'nav',
  'object',
  'ol',
  'optgroup',
  'option',
  'p',
  'picture',
  'q',
  'quote',
  'samp',
  'section',
  'select',
  'source',
  'span',
  'strong',
  'summary',
  'sup',
  'table',
  'tbody',
  'td',
  'textarea',
  'tfoot',
  'th',
  'thead',
  'time',
  'tr',
  'ul',
  'var',
  'video',
]
var aa = [
  'defs',
  'g',
  'marker',
  'mask',
  'pattern',
  'svg',
  'switch',
  'symbol',
  'feBlend',
  'feColorMatrix',
  'feComponentTransfer',
  'feComposite',
  'feConvolveMatrix',
  'feDiffuseLighting',
  'feDisplacementMap',
  'feFlood',
  'feGaussianBlur',
  'feImage',
  'feMerge',
  'feMorphology',
  'feOffset',
  'feSpecularLighting',
  'feTile',
  'feTurbulence',
  'linearGradient',
  'radialGradient',
  'stop',
  'circle',
  'ellipse',
  'image',
  'line',
  'path',
  'polygon',
  'polyline',
  'rect',
  'text',
  'use',
  'textPath',
  'tspan',
  'foreignObject',
  'clipPath',
]
var oa = [...ra, ...aa]
var la = [
  'any-hover',
  'any-pointer',
  'aspect-ratio',
  'color',
  'color-gamut',
  'color-index',
  'device-aspect-ratio',
  'device-height',
  'device-width',
  'display-mode',
  'forced-colors',
  'grid',
  'height',
  'hover',
  'inverted-colors',
  'monochrome',
  'orientation',
  'overflow-block',
  'overflow-inline',
  'pointer',
  'prefers-color-scheme',
  'prefers-contrast',
  'prefers-reduced-motion',
  'prefers-reduced-transparency',
  'resolution',
  'scan',
  'scripting',
  'update',
  'width',
  'min-width',
  'max-width',
  'min-height',
  'max-height',
]
  .sort()
  .reverse()
var ua = [
  'active',
  'any-link',
  'blank',
  'checked',
  'current',
  'default',
  'defined',
  'dir',
  'disabled',
  'drop',
  'empty',
  'enabled',
  'first',
  'first-child',
  'first-of-type',
  'fullscreen',
  'future',
  'focus',
  'focus-visible',
  'focus-within',
  'has',
  'host',
  'host-context',
  'hover',
  'indeterminate',
  'in-range',
  'invalid',
  'is',
  'lang',
  'last-child',
  'last-of-type',
  'left',
  'link',
  'local-link',
  'not',
  'nth-child',
  'nth-col',
  'nth-last-child',
  'nth-last-col',
  'nth-last-of-type',
  'nth-of-type',
  'only-child',
  'only-of-type',
  'optional',
  'out-of-range',
  'past',
  'placeholder-shown',
  'read-only',
  'read-write',
  'required',
  'right',
  'root',
  'scope',
  'target',
  'target-within',
  'user-invalid',
  'valid',
  'visited',
  'where',
]
  .sort()
  .reverse()
var _a = [
  'after',
  'backdrop',
  'before',
  'cue',
  'cue-region',
  'first-letter',
  'first-line',
  'grammar-error',
  'marker',
  'part',
  'placeholder',
  'selection',
  'slotted',
  'spelling-error',
]
  .sort()
  .reverse()
var ca = [
  'accent-color',
  'align-content',
  'align-items',
  'align-self',
  'alignment-baseline',
  'all',
  'animation',
  'animation-delay',
  'animation-direction',
  'animation-duration',
  'animation-fill-mode',
  'animation-iteration-count',
  'animation-name',
  'animation-play-state',
  'animation-timing-function',
  'appearance',
  'backface-visibility',
  'background',
  'background-attachment',
  'background-blend-mode',
  'background-clip',
  'background-color',
  'background-image',
  'background-origin',
  'background-position',
  'background-repeat',
  'background-size',
  'baseline-shift',
  'block-size',
  'border',
  'border-block',
  'border-block-color',
  'border-block-end',
  'border-block-end-color',
  'border-block-end-style',
  'border-block-end-width',
  'border-block-start',
  'border-block-start-color',
  'border-block-start-style',
  'border-block-start-width',
  'border-block-style',
  'border-block-width',
  'border-bottom',
  'border-bottom-color',
  'border-bottom-left-radius',
  'border-bottom-right-radius',
  'border-bottom-style',
  'border-bottom-width',
  'border-collapse',
  'border-color',
  'border-image',
  'border-image-outset',
  'border-image-repeat',
  'border-image-slice',
  'border-image-source',
  'border-image-width',
  'border-inline',
  'border-inline-color',
  'border-inline-end',
  'border-inline-end-color',
  'border-inline-end-style',
  'border-inline-end-width',
  'border-inline-start',
  'border-inline-start-color',
  'border-inline-start-style',
  'border-inline-start-width',
  'border-inline-style',
  'border-inline-width',
  'border-left',
  'border-left-color',
  'border-left-style',
  'border-left-width',
  'border-radius',
  'border-right',
  'border-end-end-radius',
  'border-end-start-radius',
  'border-right-color',
  'border-right-style',
  'border-right-width',
  'border-spacing',
  'border-start-end-radius',
  'border-start-start-radius',
  'border-style',
  'border-top',
  'border-top-color',
  'border-top-left-radius',
  'border-top-right-radius',
  'border-top-style',
  'border-top-width',
  'border-width',
  'bottom',
  'box-decoration-break',
  'box-shadow',
  'box-sizing',
  'break-after',
  'break-before',
  'break-inside',
  'cx',
  'cy',
  'caption-side',
  'caret-color',
  'clear',
  'clip',
  'clip-path',
  'clip-rule',
  'color',
  'color-interpolation',
  'color-interpolation-filters',
  'color-profile',
  'color-rendering',
  'color-scheme',
  'column-count',
  'column-fill',
  'column-gap',
  'column-rule',
  'column-rule-color',
  'column-rule-style',
  'column-rule-width',
  'column-span',
  'column-width',
  'columns',
  'contain',
  'content',
  'content-visibility',
  'counter-increment',
  'counter-reset',
  'cue',
  'cue-after',
  'cue-before',
  'cursor',
  'direction',
  'display',
  'dominant-baseline',
  'empty-cells',
  'enable-background',
  'fill',
  'fill-opacity',
  'fill-rule',
  'filter',
  'flex',
  'flex-basis',
  'flex-direction',
  'flex-flow',
  'flex-grow',
  'flex-shrink',
  'flex-wrap',
  'float',
  'flow',
  'flood-color',
  'flood-opacity',
  'font',
  'font-display',
  'font-family',
  'font-feature-settings',
  'font-kerning',
  'font-language-override',
  'font-size',
  'font-size-adjust',
  'font-smoothing',
  'font-stretch',
  'font-style',
  'font-synthesis',
  'font-variant',
  'font-variant-caps',
  'font-variant-east-asian',
  'font-variant-ligatures',
  'font-variant-numeric',
  'font-variant-position',
  'font-variation-settings',
  'font-weight',
  'gap',
  'glyph-orientation-horizontal',
  'glyph-orientation-vertical',
  'grid',
  'grid-area',
  'grid-auto-columns',
  'grid-auto-flow',
  'grid-auto-rows',
  'grid-column',
  'grid-column-end',
  'grid-column-start',
  'grid-gap',
  'grid-row',
  'grid-row-end',
  'grid-row-start',
  'grid-template',
  'grid-template-areas',
  'grid-template-columns',
  'grid-template-rows',
  'hanging-punctuation',
  'height',
  'hyphens',
  'icon',
  'image-orientation',
  'image-rendering',
  'image-resolution',
  'ime-mode',
  'inline-size',
  'inset',
  'inset-block',
  'inset-block-end',
  'inset-block-start',
  'inset-inline',
  'inset-inline-end',
  'inset-inline-start',
  'isolation',
  'kerning',
  'justify-content',
  'justify-items',
  'justify-self',
  'left',
  'letter-spacing',
  'lighting-color',
  'line-break',
  'line-height',
  'list-style',
  'list-style-image',
  'list-style-position',
  'list-style-type',
  'marker',
  'marker-end',
  'marker-mid',
  'marker-start',
  'mask',
  'margin',
  'margin-block',
  'margin-block-end',
  'margin-block-start',
  'margin-bottom',
  'margin-inline',
  'margin-inline-end',
  'margin-inline-start',
  'margin-left',
  'margin-right',
  'margin-top',
  'marks',
  'mask',
  'mask-border',
  'mask-border-mode',
  'mask-border-outset',
  'mask-border-repeat',
  'mask-border-slice',
  'mask-border-source',
  'mask-border-width',
  'mask-clip',
  'mask-composite',
  'mask-image',
  'mask-mode',
  'mask-origin',
  'mask-position',
  'mask-repeat',
  'mask-size',
  'mask-type',
  'max-block-size',
  'max-height',
  'max-inline-size',
  'max-width',
  'min-block-size',
  'min-height',
  'min-inline-size',
  'min-width',
  'mix-blend-mode',
  'nav-down',
  'nav-index',
  'nav-left',
  'nav-right',
  'nav-up',
  'none',
  'normal',
  'object-fit',
  'object-position',
  'opacity',
  'order',
  'orphans',
  'outline',
  'outline-color',
  'outline-offset',
  'outline-style',
  'outline-width',
  'overflow',
  'overflow-wrap',
  'overflow-x',
  'overflow-y',
  'padding',
  'padding-block',
  'padding-block-end',
  'padding-block-start',
  'padding-bottom',
  'padding-inline',
  'padding-inline-end',
  'padding-inline-start',
  'padding-left',
  'padding-right',
  'padding-top',
  'page-break-after',
  'page-break-before',
  'page-break-inside',
  'pause',
  'pause-after',
  'pause-before',
  'perspective',
  'perspective-origin',
  'pointer-events',
  'position',
  'quotes',
  'r',
  'resize',
  'rest',
  'rest-after',
  'rest-before',
  'right',
  'rotate',
  'row-gap',
  'scale',
  'scroll-margin',
  'scroll-margin-block',
  'scroll-margin-block-end',
  'scroll-margin-block-start',
  'scroll-margin-bottom',
  'scroll-margin-inline',
  'scroll-margin-inline-end',
  'scroll-margin-inline-start',
  'scroll-margin-left',
  'scroll-margin-right',
  'scroll-margin-top',
  'scroll-padding',
  'scroll-padding-block',
  'scroll-padding-block-end',
  'scroll-padding-block-start',
  'scroll-padding-bottom',
  'scroll-padding-inline',
  'scroll-padding-inline-end',
  'scroll-padding-inline-start',
  'scroll-padding-left',
  'scroll-padding-right',
  'scroll-padding-top',
  'scroll-snap-align',
  'scroll-snap-stop',
  'scroll-snap-type',
  'scrollbar-color',
  'scrollbar-gutter',
  'scrollbar-width',
  'shape-image-threshold',
  'shape-margin',
  'shape-outside',
  'shape-rendering',
  'stop-color',
  'stop-opacity',
  'stroke',
  'stroke-dasharray',
  'stroke-dashoffset',
  'stroke-linecap',
  'stroke-linejoin',
  'stroke-miterlimit',
  'stroke-opacity',
  'stroke-width',
  'speak',
  'speak-as',
  'src',
  'tab-size',
  'table-layout',
  'text-anchor',
  'text-align',
  'text-align-all',
  'text-align-last',
  'text-combine-upright',
  'text-decoration',
  'text-decoration-color',
  'text-decoration-line',
  'text-decoration-skip-ink',
  'text-decoration-style',
  'text-decoration-thickness',
  'text-emphasis',
  'text-emphasis-color',
  'text-emphasis-position',
  'text-emphasis-style',
  'text-indent',
  'text-justify',
  'text-orientation',
  'text-overflow',
  'text-rendering',
  'text-shadow',
  'text-transform',
  'text-underline-offset',
  'text-underline-position',
  'top',
  'transform',
  'transform-box',
  'transform-origin',
  'transform-style',
  'transition',
  'transition-delay',
  'transition-duration',
  'transition-property',
  'transition-timing-function',
  'translate',
  'unicode-bidi',
  'vector-effect',
  'vertical-align',
  'visibility',
  'voice-balance',
  'voice-duration',
  'voice-family',
  'voice-pitch',
  'voice-range',
  'voice-rate',
  'voice-stress',
  'voice-volume',
  'white-space',
  'widows',
  'width',
  'will-change',
  'word-break',
  'word-spacing',
  'word-wrap',
  'writing-mode',
  'x',
  'y',
  'z-index',
]
  .sort()
  .reverse()
function pa(e) {
  const t = e.regex,
    i = sa(e),
    n = { begin: /-(webkit|moz|ms|o)-(?=[a-z])/ },
    s = 'and or not only',
    l = /@-?\w[\w]*(-\w+)*/,
    u = '[a-zA-Z-][a-zA-Z0-9_-]*',
    r = [e.APOS_STRING_MODE, e.QUOTE_STRING_MODE]
  return {
    name: 'CSS',
    case_insensitive: true,
    illegal: /[=|'\$]/,
    keywords: { keyframePosition: 'from to' },
    classNameAliases: {
      keyframePosition: 'selector-tag',
    },
    contains: [
      i.BLOCK_COMMENT,
      n,
      i.CSS_NUMBER_MODE,
      {
        className: 'selector-id',
        begin: /#[A-Za-z0-9_-]+/,
        relevance: 0,
      },
      {
        className: 'selector-class',
        begin: '\\.' + u,
        relevance: 0,
      },
      i.ATTRIBUTE_SELECTOR_MODE,
      {
        className: 'selector-pseudo',
        variants: [
          { begin: ':(' + ua.join('|') + ')' },
          { begin: ':(:)?(' + _a.join('|') + ')' },
        ],
      },
      i.CSS_VARIABLE,
      {
        className: 'attribute',
        begin: '\\b(' + ca.join('|') + ')\\b',
      },
      {
        begin: /:/,
        end: /[;}{]/,
        contains: [
          i.BLOCK_COMMENT,
          i.HEXCOLOR,
          i.IMPORTANT,
          i.CSS_NUMBER_MODE,
          ...r,
          {
            begin: /(url|data-uri)\(/,
            end: /\)/,
            relevance: 0,
            keywords: { built_in: 'url data-uri' },
            contains: [
              ...r,
              {
                className: 'string',
                begin: /[^)]/,
                endsWithParent: true,
                excludeEnd: true,
              },
            ],
          },
          i.FUNCTION_DISPATCH,
        ],
      },
      {
        begin: t.lookahead(/@/),
        end: '[{;]',
        relevance: 0,
        illegal: /:/,
        contains: [
          {
            className: 'keyword',
            begin: l,
          },
          {
            begin: /\s/,
            endsWithParent: true,
            excludeEnd: true,
            relevance: 0,
            keywords: {
              $pattern: /[a-z-]+/,
              keyword: s,
              attribute: la.join(' '),
            },
            contains: [
              {
                begin: /[a-z-]+(?=:)/,
                className: 'attribute',
              },
              ...r,
              i.CSS_NUMBER_MODE,
            ],
          },
        ],
      },
      {
        className: 'selector-tag',
        begin: '\\b(' + oa.join('|') + ')\\b',
      },
    ],
  }
}
function fa(e) {
  const t = e.regex,
    i = t.concat(
      /[\p{L}_]/u,
      t.optional(/[\p{L}0-9_.-]*:/u),
      /[\p{L}0-9_.-]*/u,
    ),
    n = /[\p{L}0-9._:-]+/u,
    s = {
      className: 'symbol',
      begin: /&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;/,
    },
    l = {
      begin: /\s/,
      contains: [
        {
          className: 'keyword',
          begin: /#?[a-z_][a-z1-9_-]+/,
          illegal: /\n/,
        },
      ],
    },
    u = e.inherit(l, {
      begin: /\(/,
      end: /\)/,
    }),
    r = e.inherit(e.APOS_STRING_MODE, { className: 'string' }),
    o = e.inherit(e.QUOTE_STRING_MODE, { className: 'string' }),
    c = {
      endsWithParent: true,
      illegal: /</,
      relevance: 0,
      contains: [
        {
          className: 'attr',
          begin: n,
          relevance: 0,
        },
        {
          begin: /=\s*/,
          relevance: 0,
          contains: [
            {
              className: 'string',
              endsParent: true,
              variants: [
                {
                  begin: /"/,
                  end: /"/,
                  contains: [s],
                },
                {
                  begin: /'/,
                  end: /'/,
                  contains: [s],
                },
                { begin: /[^\s"'=<>`]+/ },
              ],
            },
          ],
        },
      ],
    }
  return {
    name: 'HTML, XML',
    aliases: [
      'html',
      'xhtml',
      'rss',
      'atom',
      'xjb',
      'xsd',
      'xsl',
      'plist',
      'wsf',
      'svg',
    ],
    case_insensitive: true,
    unicodeRegex: true,
    contains: [
      {
        className: 'meta',
        begin: /<![a-z]/,
        end: />/,
        relevance: 10,
        contains: [
          l,
          o,
          r,
          u,
          {
            begin: /\[/,
            end: /\]/,
            contains: [
              {
                className: 'meta',
                begin: /<![a-z]/,
                end: />/,
                contains: [l, u, o, r],
              },
            ],
          },
        ],
      },
      e.COMMENT(/<!--/, /-->/, { relevance: 10 }),
      {
        begin: /<!\[CDATA\[/,
        end: /\]\]>/,
        relevance: 10,
      },
      s,
      {
        className: 'meta',
        end: /\?>/,
        variants: [
          {
            begin: /<\?xml/,
            relevance: 10,
            contains: [o],
          },
          {
            begin: /<\?[a-z][a-z0-9]+/,
          },
        ],
      },
      {
        className: 'tag',
        begin: /<style(?=\s|>)/,
        end: />/,
        keywords: { name: 'style' },
        contains: [c],
        starts: {
          end: /<\/style>/,
          returnEnd: true,
          subLanguage: ['css', 'xml'],
        },
      },
      {
        className: 'tag',
        begin: /<script(?=\s|>)/,
        end: />/,
        keywords: { name: 'script' },
        contains: [c],
        starts: {
          end: /<\/script>/,
          returnEnd: true,
          subLanguage: ['javascript', 'handlebars', 'xml'],
        },
      },
      {
        className: 'tag',
        begin: /<>|<\/>/,
      },
      {
        className: 'tag',
        begin: t.concat(
          /</,
          t.lookahead(t.concat(i, t.either(/\/>/, />/, /\s/))),
        ),
        end: /\/?>/,
        contains: [
          {
            className: 'name',
            begin: i,
            relevance: 0,
            starts: c,
          },
        ],
      },
      {
        className: 'tag',
        begin: t.concat(/<\//, t.lookahead(t.concat(i, />/))),
        contains: [
          {
            className: 'name',
            begin: i,
            relevance: 0,
          },
          {
            begin: />/,
            relevance: 0,
            endsParent: true,
          },
        ],
      },
    ],
  }
}
Ve.registerLanguage('typescript', Jr)
Ve.registerLanguage('javascript', na)
Ve.registerLanguage('xml', fa)
Ve.registerLanguage('css', pa)
var Hi = (e) => Ve.highlightAuto(e).value
var rt = 'vitepress-demo-plugin'
var at = (e, t, i, n) => {
  let s = t === '' ? `${e}` : `${e}-${t}`
  return i && (s += `__${i}`), n && (s += `--${n}`), s
}
var ei = (e = '') => ({
  b: () => at(rt, e),
  e: (l = '') => at(rt, e, l),
  m: (l = '') => at(rt, e, '', l),
  bem: (l, u, r) => at(rt, l, u, r),
})
var ha = ({ code: e, styles: t, links: i }) => `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    ${t}
    ${i}
    <style>
      body {
        min-height: 0;
      }
    </style>
  </head>
  <body>
    ${e}
  </body>
</html>
  `
var da = (e, t) => {
  const i = {
    dependencies: {},
    devDependencies: {
      typescript: 'latest',
    },
  }
  return (
    e === W.VUE
      ? ((i.dependencies.vue = 'latest'),
        t === ye.STACKBLITZ
          ? ((i.devDependencies.vite = 'latest'),
            (i.devDependencies['@vitejs/plugin-vue'] = 'latest'),
            (i.devDependencies['@vitejs/plugin-vue-jsx'] = 'latest'))
          : t === ye.CODESANDBOX &&
            (i.devDependencies['@vue/cli-plugin-babel'] = 'latest'))
      : e === W.REACT &&
        ((i.dependencies.react = 'latest'),
        (i.dependencies['react-dom'] = 'latest'),
        (i.dependencies['@emotion/react'] = 'latest'),
        (i.dependencies['@emotion/styled'] = 'latest'),
        (i.devDependencies['@types/react'] = 'latest'),
        (i.devDependencies['@types/react-dom'] = 'latest'),
        t === ye.STACKBLITZ &&
          ((i.devDependencies.vite = 'latest'),
          (i.devDependencies['@vitejs/plugin-react'] = 'latest'))),
    i
  )
}
function vt(e) {
  const { type: t, platform: i, code: n, title: s, description: l } = e,
    u =
      i === ye.STACKBLITZ
        ? {
            scripts: {
              dev: 'vite',
              build: 'vite build',
              serve: 'vite preview',
            },
          }
        : {},
    { dependencies: r, devDependencies: o } = da(t, i),
    c = {
      name: s,
      description: l,
      version: '0.0.0',
      private: true,
      ...u,
      dependencies: {
        ...nr(n),
        ...r,
      },
      devDependencies: {
        ...o,
      },
    }
  return JSON.stringify(c, null, 2)
}
function ga(e) {
  const { code: t } = e
  return ht({
    files: {
      'package.json': {
        content: vt({
          type: W.VUE,
          platform: ye.CODESANDBOX,
          code: t,
        }),
      },
      'tsconfig.json': {
        content: gt(W.VUE),
      },
      'index.html': {
        content: $e(),
      },
      'src/main.ts': {
        content: mt(W.VUE),
      },
      'src/Demo.vue': {
        content: t,
      },
      ...e.customFiles,
    },
  })
}
function ma(e) {
  const { code: t } = e
  return ht({
    files: {
      'package.json': {
        content: vt({
          type: W.REACT,
          platform: ye.CODESANDBOX,
          code: t,
        }),
      },
      'tsconfig.json': {
        content: gt(W.REACT),
      },
      'index.html': {
        content: $e(),
      },
      'src/main.tsx': {
        content: mt(W.REACT),
      },
      'src/Demo.tsx': {
        content: t,
      },
      ...e.customFiles,
    },
  })
}
function ba(e) {
  const { code: t } = e
  return ht({
    files: {
      'index.html': {
        content: $e({ code: t }),
      },
      ...e.customFiles,
    },
    template: 'static',
  })
}
function va(e) {
  var s, l, u
  const t =
      (s = (e.templates || []).find((r) => r.scope === 'global')) == null
        ? void 0
        : s.files,
    i =
      (l = (e.templates || []).find((r) => r.scope === e.type)) == null
        ? void 0
        : l.files,
    n =
      (u = (e.templates || []).find((r) => r.scope === e.scope)) == null
        ? void 0
        : u.files
  e.customFiles = {
    ...t,
    ...i,
    ...n,
  }
  for (let r in e.customFiles)
    e.customFiles[r] = {
      content: e.customFiles[r] || '',
    }
  if (e.type === W.VUE) return ga(e)
  if (e.type === W.REACT) return ma(e)
  if (e.type === W.HTML) return ba(e)
}
var ya = {
  action: 'https://codesandbox.io/api/v1/sandboxes/define',
  method: 'post',
  target: '_blank',
  style: { display: 'flex' },
}
var wa = ['value']
var Ea = ['value']
var xa = defineComponent({
  __name: 'codesandbox',
  props: {
    code: {},
    type: {},
    title: {},
    description: {},
    scope: {},
    templates: {},
  },
  setup(e) {
    const t = e,
      i = computed(() =>
        va({
          code: t.code,
          type: t.type,
          title: t.title || en,
          description: t.description || tn,
          scope: t.scope,
          templates: t.templates,
        }),
      ),
      n = computed(() => gs(t.type))
    return (s, l) => (
      openBlock(),
      createElementBlock('form', ya, [
        createBaseVNode(
          'input',
          {
            style: { display: 'none' },
            name: 'parameters',
            value: i.value,
          },
          null,
          8,
          wa,
        ),
        l[0] ||
          (l[0] = createBaseVNode(
            'input',
            {
              style: { display: 'none' },
              name: 'embed',
              value: 1,
            },
            null,
            -1,
          )),
        createBaseVNode(
          'input',
          {
            style: { display: 'none' },
            name: 'query',
            value: `module=${n.value}`,
          },
          null,
          8,
          Ea,
        ),
        l[1] ||
          (l[1] = createStaticVNode(
            '<button type="submit"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-codesandbox"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="7.5 4.21 12 6.81 16.5 4.21"></polyline><polyline points="7.5 19.79 7.5 14.6 3 12"></polyline><polyline points="21 12 16.5 14.6 16.5 19.79"></polyline><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" x2="12" y1="22.08" y2="12"></line></svg></button>',
            1,
          )),
      ])
    )
  },
})
var Ta = 500
var Oa = 20
var ka = 300
var Sa = 'https://stackblitz.com'
var qi = [
  'angular-cli',
  'create-react-app',
  'html',
  'javascript',
  'node',
  'polymer',
  'typescript',
  'vue',
]
var Aa = ['project', 'search', 'ports', 'settings']
var Ra = ['light', 'dark']
var Na = ['editor', 'preview']
var Xi = {
  clickToLoad: (e) => ke('ctl', e),
  devToolsHeight: (e) => Vi('devtoolsheight', e),
  forceEmbedLayout: (e) => ke('embed', e),
  hideDevTools: (e) => ke('hidedevtools', e),
  hideExplorer: (e) => ke('hideExplorer', e),
  hideNavigation: (e) => ke('hideNavigation', e),
  openFile: (e) => ot('file', e),
  showSidebar: (e) => Ca('showSidebar', e),
  sidebarView: (e) => zt('sidebarView', e, Aa),
  startScript: (e) => ot('startScript', e),
  terminalHeight: (e) => Vi('terminalHeight', e),
  theme: (e) => zt('theme', e, Ra),
  view: (e) => zt('view', e, Na),
  zenMode: (e) => ke('zenMode', e),
  organization: (e) =>
    `${ot('orgName', e == null ? void 0 : e.name)}&${ot('orgProvider', e == null ? void 0 : e.provider)}`,
  crossOriginIsolated: (e) => ke('corp', e),
}
function Bn(e = {}) {
  const t = Object.entries(e)
    .map(([i, n]) => (n != null && Xi.hasOwnProperty(i) ? Xi[i](n) : ''))
    .filter(Boolean)
  return t.length ? `?${t.join('&')}` : ''
}
function ke(e, t) {
  return t === true ? `${e}=1` : ''
}
function Ca(e, t) {
  return typeof t == 'boolean' ? `${e}=${t ? '1' : '0'}` : ''
}
function Vi(e, t) {
  if (typeof t == 'number' && !Number.isNaN(t)) {
    const i = Math.min(100, Math.max(0, t))
    return `${e}=${encodeURIComponent(Math.round(i))}`
  }
  return ''
}
function zt(e, t = '', i = []) {
  return i.includes(t) ? `${e}=${encodeURIComponent(t)}` : ''
}
function ot(e, t) {
  return (Array.isArray(t) ? t : [t])
    .filter((n) => typeof n == 'string' && n.trim() !== '')
    .map((n) => `${e}=${encodeURIComponent(n)}`)
    .join('&')
}
function $n() {
  return (
    Math.random().toString(36).slice(2, 6) +
    Math.random().toString(36).slice(2, 6)
  )
}
function ti(e, t) {
  return `${Un(t)}${e}${Bn(t)}`
}
function ii(e, t) {
  const i = {
    forceEmbedLayout: true,
  }
  return (
    t && typeof t == 'object' && Object.assign(i, t), `${Un(i)}${e}${Bn(i)}`
  )
}
function Un(e = {}) {
  return (typeof e.origin == 'string' ? e.origin : Sa).replace(/\/$/, '')
}
function ni(e, t, i) {
  if (!t || !e || !e.parentNode) throw new Error('Invalid Element')
  e.id && (t.id = e.id),
    e.className && (t.className = e.className),
    La(t, i),
    Ma(e, t, i),
    e.replaceWith(t)
}
function si(e) {
  if (typeof e == 'string') {
    const t = document.getElementById(e)
    if (!t) throw new Error(`Could not find element with id '${e}'`)
    return t
  } else if (e instanceof HTMLElement) return e
  throw new Error(`Invalid element: ${e}`)
}
function ri(e) {
  return e && e.newWindow === false ? '_self' : '_blank'
}
function La(e, t = {}) {
  const i = Object.hasOwnProperty.call(t, 'height') ? `${t.height}` : `${ka}`,
    n = Object.hasOwnProperty.call(t, 'width') ? `${t.width}` : void 0
  e.setAttribute('height', i),
    n ? e.setAttribute('width', n) : e.setAttribute('style', 'width:100%;')
}
function Ma(e, t, i = {}) {
  var s, l, u
  const n =
    (u =
      (l = (s = e.allow) == null ? void 0 : s.split(';')) == null
        ? void 0
        : l.map((r) => r.trim())) != null
      ? u
      : []
  i.crossOriginIsolated &&
    !n.includes('cross-origin-isolated') &&
    n.push('cross-origin-isolated'),
    n.length > 0 && (t.allow = n.join('; '))
}
var Ia = class {
  constructor(t) {
    ;(this.pending = {}),
      (this.port = t),
      (this.port.onmessage = this.messageListener.bind(this))
  }
  request({ type: t, payload: i }) {
    return new Promise((n, s) => {
      const l = $n()
      ;(this.pending[l] = { resolve: n, reject: s }),
        this.port.postMessage({
          type: t,
          payload: {
            ...i,
            __reqid: l,
          },
        })
    })
  }
  messageListener(t) {
    var r
    if (typeof ((r = t.data.payload) == null ? void 0 : r.__reqid) != 'string')
      return
    const { type: i, payload: n } = t.data,
      { __reqid: s, __success: l, __error: u } = n
    this.pending[s] &&
      (l
        ? this.pending[s].resolve(this.cleanResult(n))
        : this.pending[s].reject(u ? `${i}: ${u}` : i),
      delete this.pending[s])
  }
  cleanResult(t) {
    const i = { ...t }
    return (
      delete i.__reqid,
      delete i.__success,
      delete i.__error,
      Object.keys(i).length ? i : null
    )
  }
}
var Da = class {
  constructor(t, i) {
    ;(this.editor = {
      openFile: (n) =>
        this._rdc.request({
          type: 'SDK_OPEN_FILE',
          payload: { path: n },
        }),
      setCurrentFile: (n) =>
        this._rdc.request({
          type: 'SDK_SET_CURRENT_FILE',
          payload: { path: n },
        }),
      setTheme: (n) =>
        this._rdc.request({
          type: 'SDK_SET_UI_THEME',
          payload: { theme: n },
        }),
      setView: (n) =>
        this._rdc.request({
          type: 'SDK_SET_UI_VIEW',
          payload: { view: n },
        }),
      showSidebar: (n = true) =>
        this._rdc.request({
          type: 'SDK_TOGGLE_SIDEBAR',
          payload: { visible: n },
        }),
    }),
      (this.preview = {
        origin: '',
        getUrl: () =>
          this._rdc
            .request({
              type: 'SDK_GET_PREVIEW_URL',
              payload: {},
            })
            .then((n) => {
              var s
              return (s = n == null ? void 0 : n.url) != null ? s : null
            }),
        setUrl: (n = '/') => {
          if (typeof n != 'string' || !n.startsWith('/'))
            throw new Error(
              `Invalid argument: expected a path starting with '/', got '${n}'`,
            )
          return this._rdc.request({
            type: 'SDK_SET_PREVIEW_URL',
            payload: { path: n },
          })
        },
      }),
      (this._rdc = new Ia(t)),
      Object.defineProperty(this.preview, 'origin', {
        value: typeof i.previewOrigin == 'string' ? i.previewOrigin : null,
        writable: false,
      })
  }
  applyFsDiff(t) {
    const i = (n) => n !== null && typeof n == 'object'
    if (!i(t) || !i(t.create))
      throw new Error(
        'Invalid diff object: expected diff.create to be an object.',
      )
    if (!Array.isArray(t.destroy))
      throw new Error(
        'Invalid diff object: expected diff.destroy to be an array.',
      )
    return this._rdc.request({
      type: 'SDK_APPLY_FS_DIFF',
      payload: t,
    })
  }
  getDependencies() {
    return this._rdc.request({
      type: 'SDK_GET_DEPS_SNAPSHOT',
      payload: {},
    })
  }
  getFsSnapshot() {
    return this._rdc.request({
      type: 'SDK_GET_FS_SNAPSHOT',
      payload: {},
    })
  }
}
var lt = []
var Pa = class {
  constructor(t) {
    ;(this.id = $n()),
      (this.element = t),
      (this.pending = new Promise((i, n) => {
        const s = ({ data: c, ports: g }) => {
            ;(c == null ? void 0 : c.action) === 'SDK_INIT_SUCCESS' &&
              c.id === this.id &&
              ((this.vm = new Da(g[0], c.payload)), i(this.vm), u())
          },
          l = () => {
            var c
            ;(c = this.element.contentWindow) == null ||
              c.postMessage(
                {
                  action: 'SDK_INIT',
                  id: this.id,
                },
                '*',
              )
          }
        function u() {
          window.clearInterval(o), window.removeEventListener('message', s)
        }
        window.addEventListener('message', s), l()
        let r = 0
        const o = window.setInterval(() => {
          if (this.vm) {
            u()
            return
          }
          if (r >= Oa) {
            u(),
              n(
                'Timeout: Unable to establish a connection with the StackBlitz VM',
              ),
              lt.forEach((c, g) => {
                c.id === this.id && lt.splice(g, 1)
              })
            return
          }
          r++, l()
        }, Ta)
      })),
      lt.push(this)
  }
}
var Ba = (e) => {
  var i
  const t = e instanceof Element ? 'element' : 'id'
  return (i = lt.find((n) => n[t] === e)) != null ? i : null
}
function $a(e, t) {
  const i = document.createElement('input')
  return (i.type = 'hidden'), (i.name = e), (i.value = t), i
}
function Ua(e) {
  return e.replace(/\[/g, '%5B').replace(/\]/g, '%5D')
}
function jn({
  template: e,
  title: t,
  description: i,
  dependencies: n,
  files: s,
  settings: l,
}) {
  if (!qi.includes(e)) {
    const c = qi.map((g) => `'${g}'`).join(', ')
    console.warn(`Unsupported project.template: must be one of ${c}`)
  }
  const u = [],
    r = (c, g, h = '') => {
      u.push($a(c, typeof g == 'string' ? g : h))
    }
  r('project[title]', t),
    typeof i == 'string' && i.length > 0 && r('project[description]', i),
    r('project[template]', e, 'javascript'),
    n &&
      (e === 'node'
        ? console.warn(
            "Invalid project.dependencies: dependencies must be provided as a 'package.json' file when using the 'node' template.",
          )
        : r('project[dependencies]', JSON.stringify(n))),
    l && r('project[settings]', JSON.stringify(l)),
    Object.entries(s).forEach(([c, g]) => {
      r(`project[files][${Ua(c)}]`, g)
    })
  const o = document.createElement('form')
  return (
    (o.method = 'POST'),
    o.setAttribute('style', 'display:none!important;'),
    o.append(...u),
    o
  )
}
function ja(e, t) {
  const i = jn(e)
  return (
    (i.action = ii('/run', t)),
    (i.id = 'sb_run'),
    `<!doctype html>
<html>
<head><title></title></head>
<body>
  ${i.outerHTML}
  <script>document.getElementById('${i.id}').submit();<\/script>
</body>
</html>`
  )
}
function za(e, t) {
  const i = jn(e)
  ;(i.action = ti('/run', t)),
    (i.target = ri(t)),
    document.body.appendChild(i),
    i.submit(),
    document.body.removeChild(i)
}
function yt(e) {
  var i
  return e != null && e.contentWindow
    ? ((i = Ba(e)) != null ? i : new Pa(e)).pending
    : Promise.reject('Provided element is not an iframe.')
}
function Fa(e, t) {
  za(e, t)
}
function Wa(e, t) {
  const i = ti(`/edit/${e}`, t),
    n = ri(t)
  window.open(i, n)
}
function Ka(e, t) {
  const i = ti(`/github/${e}`, t),
    n = ri(t)
  window.open(i, n)
}
function Ga(e, t, i) {
  var u
  const n = si(e),
    s = ja(t, i),
    l = document.createElement('iframe')
  return ni(n, l, i), (u = l.contentDocument) == null || u.write(s), yt(l)
}
function Ha(e, t, i) {
  const n = si(e),
    s = document.createElement('iframe')
  return (s.src = ii(`/edit/${t}`, i)), ni(n, s, i), yt(s)
}
function qa(e, t, i) {
  const n = si(e),
    s = document.createElement('iframe')
  return (s.src = ii(`/github/${t}`, i)), ni(n, s, i), yt(s)
}
var ai = {
  connect: yt,
  embedGithubProject: qa,
  embedProject: Ga,
  embedProjectId: Ha,
  openGithubProject: Ka,
  openProject: Fa,
  openProjectId: Wa,
}
var Xa = (e) => {
  const { code: t, title: i, description: n } = e
  ai.openProject(
    {
      title: i,
      description: n,
      template: 'html',
      files: {
        'index.html': $e({ code: t }),
        ...e.customFiles,
      },
    },
    {
      openFile: 'index.html',
    },
  )
}
var Va = (e) => {
  const { code: t, title: i, description: n } = e
  ai.openProject(
    {
      title: i,
      description: n,
      template: 'node',
      files: {
        'src/Demo.tsx': t,
        'src/main.tsx': mt(W.REACT),
        'index.html': $e({ src: '/src/main.tsx' }),
        'package.json': vt({
          type: W.REACT,
          platform: ye.STACKBLITZ,
          code: t,
        }),
        'vite.config.js': hn(W.REACT),
        '.stackblitzrc': fn(),
        'tsconfig.json': gt(W.REACT),
        ...e.customFiles,
      },
    },
    {
      openFile: 'src/Demo.tsx',
    },
  )
}
var Za = (e) => {
  const { code: t, title: i, description: n } = e
  ai.openProject(
    {
      title: i,
      description: n,
      template: 'node',
      files: {
        'src/Demo.vue': t,
        'src/main.ts': mt(W.VUE),
        'index.html': $e({ src: '/src/main.ts' }),
        'package.json': vt({
          type: W.VUE,
          platform: ye.STACKBLITZ,
          code: t,
        }),
        'vite.config.js': hn(W.VUE),
        '.stackblitzrc': fn(),
        'tsconfig.json': gt(W.VUE),
        ...e.customFiles,
      },
    },
    {
      openFile: 'src/Demo.vue',
    },
  )
}
function Qa(e) {
  var s, l, u
  const t =
      (s = (e.templates || []).find((r) => r.scope === 'global')) == null
        ? void 0
        : s.files,
    i =
      (l = (e.templates || []).find((r) => r.scope === e.type)) == null
        ? void 0
        : l.files,
    n =
      (u = (e.templates || []).find((r) => r.scope === e.scope)) == null
        ? void 0
        : u.files
  if (
    ((e.customFiles = {
      ...t,
      ...i,
      ...n,
    }),
    e.type === W.VUE)
  )
    return Za(e)
  if (e.type === W.REACT) return Va(e)
  if (e.type === W.HTML) return Xa(e)
}
var Ja = defineComponent({
  __name: 'stackblitz',
  props: {
    code: {},
    type: {},
    title: {},
    description: {},
    templates: {},
    scope: {},
  },
  setup(e) {
    const t = e
    function i() {
      Qa({
        code: t.code,
        type: t.type,
        title: t.title || en,
        description: t.description || tn,
        templates: t.templates || [],
        scope: t.scope,
      })
    }
    return (n, s) => (
      openBlock(),
      createElementBlock(
        'svg',
        {
          onClick: i,
          viewBox: '64 64 896 896',
          focusable: 'false',
          'data-icon': 'thunderbolt',
          width: '20px',
          height: '20px',
          fill: 'currentColor',
          'aria-hidden': 'true',
        },
        s[0] ||
          (s[0] = [
            createBaseVNode(
              'path',
              {
                d: 'M848 359.3H627.7L825.8 109c4.1-5.3.4-13-6.3-13H436c-2.8 0-5.5 1.5-6.9 4L170 547.5c-3.1 5.3.7 12 6.9 12h174.4l-89.4 357.6c-1.9 7.8 7.5 13.3 13.3 7.7L853.5 373c5.2-4.9 1.7-13.7-5.5-13.7zM378.2 732.5l60.3-241H281.1l189.6-327.4h224.6L487 427.4h211L378.2 732.5z',
              },
              null,
              -1,
            ),
          ]),
      )
    )
  },
})
var Ya = {}
var eo = {
  xmlns: 'http://www.w3.org/2000/svg',
  width: '20',
  height: '20',
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  'stroke-width': '2',
  'stroke-linecap': 'round',
  'stroke-linejoin': 'round',
  class: 'lucide lucide-github',
}
function to(e, t) {
  return (
    openBlock(),
    createElementBlock(
      'svg',
      eo,
      t[0] ||
        (t[0] = [
          createBaseVNode(
            'path',
            {
              d: 'M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4',
            },
            null,
            -1,
          ),
          createBaseVNode('path', { d: 'M9 18c-4.51 2-5-2-7-2' }, null, -1),
        ]),
    )
  )
}
var io = Te(Ya, [['render', to]])
var no = {}
var so = {
  xmlns: 'http://www.w3.org/2000/svg',
  width: '20',
  height: '20',
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  'stroke-width': '2',
  'stroke-linecap': 'round',
  'stroke-linejoin': 'round',
  class: 'lucide lucide-gitlab',
}
function ro(e, t) {
  return (
    openBlock(),
    createElementBlock(
      'svg',
      so,
      t[0] ||
        (t[0] = [
          createBaseVNode(
            'path',
            {
              d: 'm22 13.29-3.33-10a.42.42 0 0 0-.14-.18.38.38 0 0 0-.22-.11.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18l-2.26 6.67H8.32L6.1 3.26a.42.42 0 0 0-.1-.18.38.38 0 0 0-.26-.08.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18L2 13.29a.74.74 0 0 0 .27.83L12 21l9.69-6.88a.71.71 0 0 0 .31-.83Z',
            },
            null,
            -1,
          ),
        ]),
    )
  )
}
var ao = Te(no, [['render', ro]])
var oo = {}
var lo = {
  xmlns: 'http://www.w3.org/2000/svg',
  'xmlns:xlink': 'http://www.w3.org/1999/xlink',
  fill: 'none',
  version: '1.1',
  width: '18',
  height: '18',
  viewBox: '0 0 24 24',
}
function uo(e, t) {
  return (
    openBlock(),
    createElementBlock(
      'svg',
      lo,
      t[0] ||
        (t[0] = [
          createBaseVNode(
            'defs',
            null,
            [
              createBaseVNode('clipPath', { id: 'master_svg0_27_0291' }, [
                createBaseVNode('rect', {
                  x: '0',
                  y: '0',
                  width: '24',
                  height: '24',
                  rx: '0',
                }),
              ]),
            ],
            -1,
          ),
          createBaseVNode(
            'g',
            { 'clip-path': 'url(#master_svg0_27_0291)' },
            [
              createBaseVNode('g', null, [
                createBaseVNode('path', {
                  d: 'M4.707482,11.29327L4.707107,11.29289Q4.566455,11.152239999999999,4.382683,11.07612Q4.198912,11,4,11Q3.801088,11,3.617317,11.07612Q3.433545,11.152239999999999,3.292893,11.29289Q3.152241,11.43355,3.07612,11.61732Q3,11.80109,3,12Q3,12.02403,3.001154,12.04804Q3.010111,12.23427,3.085581,12.40477Q3.161051,12.57527,3.292893,12.70711L3.293268,12.70748L8.29289,17.7071Q8.36254,17.776699999999998,8.44443,17.8315Q8.52632,17.886200000000002,8.61732,17.9239Q8.70831,17.9616,8.80491,17.980800000000002Q8.90151,18,9,18Q9.09849,18,9.19509,17.980800000000002Q9.29169,17.9616,9.38268,17.9239Q9.47368,17.886200000000002,9.55557,17.8315Q9.63746,17.776699999999998,9.70711,17.7071L20.7071,6.707107Q20.8478,6.566454,20.9239,6.382683Q21,6.198912,21,6Q21,5.801088,20.9239,5.617317Q20.8478,5.433546,20.7071,5.292894Q20.5665,5.152241,20.3827,5.076121Q20.1989,5,20,5Q19.9741,5,19.9483,5.001339Q19.762999999999998,5.010937,19.5935,5.086334Q19.4241,5.16173,19.2929,5.292893L19.2925,5.293268L9,15.58579L4.707482,11.29327Z',
                  'fill-rule': 'evenodd',
                  fill: 'currentColor',
                  'fill-opacity': '0.8500000238418579',
                }),
              ]),
            ],
            -1,
          ),
        ]),
    )
  )
}
var _o = Te(oo, [['render', uo]])
var co = { style: { color: 'var(--vp-c-text-1)' } }
var po = 3e3
var fo = defineComponent({
  __name: 'message',
  props: {
    content: { default: '复制成功！' },
    close: {},
  },
  setup(e, { expose: t }) {
    const i = ei(),
      n = e,
      s = ref(false),
      l = (c) => {
        s.value = c
      },
      u = ref(-9999),
      r = (c) => {
        u.value = c
      }
    watch(s, (c) => {
      c === true &&
        setTimeout(() => {
          s.value = false
        }, po)
    })
    const o = () => {
      n.close()
    }
    return (
      t({
        setVisible: l,
        setTopHeight: r,
      }),
      (c, g) => (
        openBlock(),
        createBlock(
          Transition,
          {
            name: 'slide-fade',
            onAfterLeave: o,
          },
          {
            default: withCtx(() => [
              s.value
                ? (openBlock(),
                  createElementBlock(
                    'div',
                    {
                      key: 0,
                      class: normalizeClass([
                        unref(i).bem('message-notice', 'container'),
                      ]),
                      style: normalizeStyle({ top: u.value + 'px' }),
                    },
                    [
                      createVNode(_o),
                      createBaseVNode(
                        'span',
                        co,
                        toDisplayString(c.content),
                        1,
                      ),
                    ],
                    6,
                  ))
                : createCommentVNode('', true),
            ]),
            _: 1,
          },
        )
      )
    )
  },
})
var Ft = []
var ho = {
  open: () => {
    const e = document.createElement('div'),
      t = createApp(fo, {
        content: '已将代码复制至剪切板！',
        close: () => {
          document.body.removeChild(e), Ft.pop(), t.unmount()
        },
      }),
      i = t.mount(e)
    document.body.appendChild(e)
    const n = Ft.length,
      s = n === 0 ? 10 : (n + 1) * 10 + n * 42
    i.setTopHeight(s), i.setVisible(true), Ft.push(i)
  },
}
var go = defineComponent({
  __name: 'index',
  props: {
    content: {},
  },
  setup(e) {
    const t = ei(),
      i = e
    return (n, s) => (
      openBlock(),
      createElementBlock(
        'div',
        {
          class: normalizeClass([unref(t).bem('tooltip', 'wrapper')]),
        },
        [
          createBaseVNode(
            'div',
            {
              class: normalizeClass([unref(t).bem('tooltip', 'content')]),
            },
            [
              renderSlot(
                n.$slots,
                'content',
                {},
                () => [createTextVNode(toDisplayString(i.content), 1)],
                true,
              ),
            ],
            2,
          ),
          renderSlot(n.$slots, 'default', {}, void 0, true),
        ],
        2,
      )
    )
  },
})
var Se = Te(go, [['__scopeId', 'data-v-6bd5801c']])
var mo = { style: { 'flex-shrink': '0' } }
var bo = ['innerHTML']
var vo = ['onClick']
var yo = ['onClick']
var wo = { class: 'language-html' }
var Eo = ['innerHTML']
var Qo = defineComponent({
  __name: 'index',
  props: {
    title: { default: '默认标题' },
    description: { default: '描述内容' },
    reactComponent: {},
    vueCode: {},
    reactCode: {},
    htmlCode: {},
    order: { default: 'vue,react,html' },
    visible: { type: Boolean, default: true },
    select: { default: W.VUE },
    github: { default: '' },
    gitlab: { default: '' },
    reactCreateElement: {},
    reactCreateRoot: {},
    stackblitz: {},
    codesandbox: {},
    codeplayer: {},
    scope: {},
    files: {},
    lightTheme: {},
    darkTheme: {},
    theme: {},
  },
  setup(e) {
    const t = e,
      i = computed(() => JSON.parse(decodeURIComponent(t.stackblitz || '{}'))),
      n = computed(() => JSON.parse(decodeURIComponent(t.codesandbox || '{}')))
    computed(() => JSON.parse(decodeURIComponent(t.codeplayer || '{}')))
    const s = ref(''),
      l = computed(() => {
        var R
        const T = JSON.parse(decodeURIComponent(t.files || '{}'))[c.value]
        return (
          T &&
            !T[s.value] &&
            (s.value = ((R = Object.keys(T)) == null ? void 0 : R[0]) || ''),
          T
        )
      }),
      u = computed(() => t.order.split(',').map((y) => y.trim())),
      r = inject('coot-code-type', {}),
      o = inject('set-coot-code-type', (y) => {}),
      c = ref(W.VUE)
    function g(y) {
      ;(c.value = y),
        typeof o == 'function' && o(y),
        nextTick(() => {
          w.value &&
            !m.value &&
            (w.value.style.height = M.value.scrollHeight + 'px')
        })
    }
    const h = ei(),
      { isCodeFold: m, setCodeFold: S } = ir(),
      { clickCopy: C } = tr(),
      L = computed(() => t[`${c.value}Code`]),
      d = computed(() =>
        l.value && l.value[s.value] ? Hi(l.value[s.value]) : Hi(L.value),
      ),
      _ = computed(() =>
        [W.VUE, W.REACT, W.HTML]
          .filter((y) => t[`${y}Code`])
          .sort((y, T) => u.value.indexOf(y) - u.value.indexOf(T)),
      )
    watch(
      () => (r == null ? void 0 : r.value),
      (y) => {
        y && t[`${y}Code`] && (c.value = y)
      },
      { immediate: true },
    )
    const b = () => {
        window.open(t.github, '_blank')
      },
      A = () => {
        window.open(t.gitlab, '_blank')
      }
    watch(
      () => c.value,
      (y) => {
        !y || (y === 'html' ? v() : y === 'react' && a())
      },
      {
        immediate: true,
      },
    )
    const x = () => {
        C(L.value || ''), ho.open()
      },
      k = ref()
    let p
    function v() {
      nextTick(() => {
        if (!k.value) return
        const y = k.value.querySelector('iframe'),
          T = y.contentDocument || y.contentWindow.document
        T.open()
        const R = document.head.querySelectorAll('style'),
          I = document.head.querySelectorAll('link[as="style"]'),
          $ = document.head.querySelectorAll('link[as="font"]'),
          G = Array.from(R).map(
            (J) => `<style replace="true">${J.innerText}</style>`,
          ).join(`
`),
          Y = Array.from(I).map((J) => J.outerHTML).join(`
`),
          he = Array.from($).map((J) => J.outerHTML).join(`
`)
        T.write(
          ha({
            code: t.htmlCode || '',
            styles: G,
            links:
              Y +
              `
` +
              he,
          }),
        ),
          T.close()
        const X = (p = function () {
          requestAnimationFrame(() => {
            ;(y.style.height = T.body.scrollHeight + 'px'),
              T.documentElement &&
                (T.documentElement.className =
                  document.documentElement.className),
              X === p && p()
          })
        })
        p()
      })
    }
    watch(
      () => t.htmlCode,
      (y) => {
        y && v()
      },
      { immediate: true },
    )
    const f = ref()
    let O = null
    function a() {
      nextTick(() => {
        t.reactComponent &&
          c.value === 'react' &&
          t.reactCode &&
          (O || (O = t.reactCreateRoot(f.value)),
          O.render(t.reactCreateElement(t.reactComponent, {}, null)))
      })
    }
    onUnmounted(() => {
      O && (O.unmount(), (O = null))
    }),
      watch(
        () => [f.value, t.reactComponent],
        (y) => {
          f.value ? a() : O && (O.unmount(), (O = null))
        },
        { immediate: true, deep: true },
      ),
      watch(
        () => t.reactCode,
        (y) => {
          y && O && O.render(t.reactCreateElement(t.reactComponent, {}, null))
        },
        { immediate: true, deep: true },
      ),
      watch(
        () => t.select,
        (y) => {
          y && t[`${y}Code`] && (c.value = y)
        },
        {
          immediate: true,
        },
      ),
      watch(
        () => _.value,
        () => {
          t[`${c.value}Code`] || (c.value = _.value[0])
        },
        { immediate: true, deep: true },
      )
    function E(y) {
      ;(s.value = y),
        w.value && (w.value.style.height = 'auto'),
        nextTick(() => {
          w.value.style.height = M.value.scrollHeight + 'px'
        })
    }
    const w = ref(),
      M = ref()
    watch(
      () => m.value,
      (y) => {
        nextTick(() => {
          w.value &&
            (y
              ? (w.value.style.height = 0)
              : (w.value.style.height = M.value.scrollHeight + 'px'))
        })
      },
    )
    function P(y) {
      const T = document.querySelector('link[data-vitepress-demo-plugin-theme]')
      T && T.remove()
      const R = t.lightTheme || t.theme || 'vs',
        I = t.darkTheme || t.theme || 'vs2015',
        $ = y === 'light' ? R : I,
        G = document.createElement('link')
      ;(G.href = `https://cdn.jsdelivr.net/npm/highlight.js/styles/${$}.css`),
        (G.rel = 'stylesheet'),
        (G.type = 'text/css'),
        (G.dataset.vitepressDemoPluginTheme = y),
        document.head.appendChild(G)
    }
    function j() {
      const y = document.documentElement,
        T = new MutationObserver((I) => {
          for (const $ of I)
            $.type === 'attributes' &&
              $.attributeName === 'class' &&
              (y.classList.contains('dark') ? P('dark') : P('light'))
        }),
        R = { attributes: true }
      T.observe(y, R)
    }
    function F() {
      document.documentElement.classList.contains('dark')
        ? P('dark')
        : P('light')
    }
    return (
      onMounted(() => {
        F(), j()
      }),
      (y, T) => (
        openBlock(),
        createElementBlock(
          'div',
          {
            class: normalizeClass([unref(h).e('container')]),
          },
          [
            createBaseVNode(
              'section',
              {
                class: normalizeClass([unref(h).bem('preview'), 'vp-raw']),
              },
              [
                c.value === 'vue'
                  ? renderSlot(y.$slots, 'vue', { key: 0 })
                  : c.value === 'html'
                    ? (openBlock(),
                      createElementBlock(
                        'div',
                        {
                          key: 1,
                          ref_key: 'htmlContainerRef',
                          ref: k,
                        },
                        T[3] ||
                          (T[3] = [
                            createBaseVNode(
                              'iframe',
                              {
                                style: {
                                  width: '100%',
                                  height: 'auto',
                                  border: 'none',
                                },
                              },
                              null,
                              -1,
                            ),
                          ]),
                        512,
                      ))
                    : c.value === 'react'
                      ? (openBlock(),
                        createElementBlock(
                          'div',
                          {
                            key: 2,
                            ref_key: 'reactContainerRef',
                            ref: f,
                          },
                          null,
                          512,
                        ))
                      : createCommentVNode('', true),
              ],
              2,
            ),
            createBaseVNode(
              'section',
              {
                class: normalizeClass([unref(h).bem('description')]),
              },
              [
                y.title
                  ? (openBlock(),
                    createElementBlock(
                      'div',
                      {
                        key: 0,
                        class: normalizeClass([
                          unref(h).bem('description', 'title'),
                        ]),
                      },
                      [createBaseVNode('div', mo, toDisplayString(y.title), 1)],
                      2,
                    ))
                  : createCommentVNode('', true),
                y.description
                  ? (openBlock(),
                    createElementBlock(
                      'div',
                      {
                        key: 1,
                        class: normalizeClass([
                          unref(h).bem('description', 'content'),
                        ]),
                        innerHTML: y.description,
                      },
                      null,
                      10,
                      bo,
                    ))
                  : createCommentVNode('', true),
                t.description || (!t.title && !t.description)
                  ? (openBlock(),
                    createElementBlock(
                      'div',
                      {
                        key: 2,
                        class: normalizeClass([
                          unref(h).bem('description', 'split-line'),
                        ]),
                      },
                      null,
                      2,
                    ))
                  : createCommentVNode('', true),
                _.value.length > 1 && y.visible
                  ? (openBlock(),
                    createElementBlock(
                      'div',
                      {
                        key: 3,
                        class: normalizeClass([unref(h).bem('lang-tabs')]),
                      },
                      [
                        (openBlock(true),
                        createElementBlock(
                          Fragment,
                          null,
                          renderList(
                            _.value,
                            (R) => (
                              openBlock(),
                              createElementBlock(
                                'div',
                                {
                                  key: R,
                                  class: normalizeClass([
                                    unref(h).bem('tab'),
                                    c.value === R && unref(h).bem('active-tab'),
                                  ]),
                                  onClick: (I) => (g == null ? void 0 : g(R)),
                                },
                                toDisplayString(R),
                                11,
                                vo,
                              )
                            ),
                          ),
                          128,
                        )),
                      ],
                      2,
                    ))
                  : createCommentVNode('', true),
                createBaseVNode(
                  'div',
                  {
                    class: normalizeClass([
                      unref(h).bem('description', 'handle-btn'),
                    ]),
                  },
                  [
                    i.value.show
                      ? (openBlock(),
                        createBlock(
                          Se,
                          {
                            key: 0,
                            content: '在 stackblitz 中打开',
                          },
                          {
                            default: withCtx(() => [
                              createVNode(
                                Ja,
                                {
                                  code: L.value,
                                  type: c.value,
                                  scope: y.scope || '',
                                  templates: i.value.templates || [],
                                },
                                null,
                                8,
                                ['code', 'type', 'scope', 'templates'],
                              ),
                            ]),
                            _: 1,
                          },
                        ))
                      : createCommentVNode('', true),
                    n.value.show
                      ? (openBlock(),
                        createBlock(
                          Se,
                          {
                            key: 1,
                            content: '在 codesandbox 中打开',
                          },
                          {
                            default: withCtx(() => [
                              createVNode(
                                xa,
                                {
                                  code: L.value,
                                  type: c.value,
                                  scope: y.scope || '',
                                  templates: n.value.templates || [],
                                },
                                null,
                                8,
                                ['code', 'type', 'scope', 'templates'],
                              ),
                            ]),
                            _: 1,
                          },
                        ))
                      : createCommentVNode('', true),
                    y.github
                      ? (openBlock(),
                        createBlock(
                          Se,
                          {
                            key: 2,
                            content: '在 github 中打开',
                          },
                          {
                            default: withCtx(() => [
                              createVNode(io, { onClick: b }),
                            ]),
                            _: 1,
                          },
                        ))
                      : createCommentVNode('', true),
                    y.gitlab
                      ? (openBlock(),
                        createBlock(
                          Se,
                          {
                            key: 3,
                            content: '在 gitlab 中打开',
                          },
                          {
                            default: withCtx(() => [
                              createVNode(ao, { onClick: A }),
                            ]),
                            _: 1,
                          },
                        ))
                      : createCommentVNode('', true),
                    unref(m)
                      ? (openBlock(),
                        createBlock(
                          Se,
                          {
                            key: 5,
                            content: '展开代码',
                          },
                          {
                            default: withCtx(() => [
                              createVNode(ns, {
                                onClick:
                                  T[1] || (T[1] = (R) => unref(S)(false)),
                              }),
                            ]),
                            _: 1,
                          },
                        ))
                      : (openBlock(),
                        createBlock(
                          Se,
                          {
                            key: 4,
                            content: '收起代码',
                          },
                          {
                            default: withCtx(() => [
                              createVNode(os, {
                                onClick: T[0] || (T[0] = (R) => unref(S)(true)),
                              }),
                            ]),
                            _: 1,
                          },
                        )),
                    createVNode(
                      Se,
                      { content: '复制代码' },
                      {
                        default: withCtx(() => [
                          createVNode(cs, { onClick: x }),
                        ]),
                        _: 1,
                      },
                    ),
                  ],
                  2,
                ),
              ],
              2,
            ),
            createBaseVNode(
              'section',
              {
                class: normalizeClass([unref(h).bem('source')]),
                ref_key: 'sourceRef',
                ref: w,
              },
              [
                createBaseVNode(
                  'div',
                  {
                    ref_key: 'sourceContentRef',
                    ref: M,
                  },
                  [
                    Object.keys(l.value).length
                      ? (openBlock(),
                        createElementBlock(
                          'div',
                          {
                            key: 0,
                            class: normalizeClass([unref(h).bem('file-tabs')]),
                          },
                          [
                            (openBlock(true),
                            createElementBlock(
                              Fragment,
                              null,
                              renderList(
                                Object.keys(l.value),
                                (R) => (
                                  openBlock(),
                                  createElementBlock(
                                    'div',
                                    {
                                      key: R,
                                      class: normalizeClass([
                                        unref(h).bem('tab'),
                                        s.value === R &&
                                          unref(h).bem('active-tab'),
                                      ]),
                                      onClick: (I) => E(R),
                                    },
                                    toDisplayString(R),
                                    11,
                                    yo,
                                  )
                                ),
                              ),
                              128,
                            )),
                          ],
                          2,
                        ))
                      : createCommentVNode('', true),
                    createBaseVNode('pre', wo, [
                      createBaseVNode(
                        'code',
                        { innerHTML: d.value },
                        null,
                        8,
                        Eo,
                      ),
                    ]),
                  ],
                  512,
                ),
              ],
              2,
            ),
            unref(m)
              ? createCommentVNode('', true)
              : (openBlock(),
                createElementBlock(
                  'div',
                  {
                    key: 0,
                    class: normalizeClass(unref(h).bem('fold')),
                    onClick: T[2] || (T[2] = (R) => unref(S)(true)),
                  },
                  [
                    createVNode(ds),
                    T[4] || (T[4] = createTextVNode('收起代码 ')),
                  ],
                  2,
                )),
          ],
          2,
        )
      )
    )
  },
})
var Zi = [/<demo(\s|\n)((.|\n)*)><\/demo>/, /<demo(\s|\n)((.|\n)*)\/>/]
var xo = /<\s*script[^>]*\blang=['"]ts['"][^>]*/
var To = /<\s*script[^>]*\bsetup\b[^>]*/
var Oo =
  /<\s*script\s+(setup|lang='ts'|lang="ts")?\s*(setup|lang='ts'|lang="ts")?\s*>/
var oe = (e, t, i, n) => {
  const s = e.sfcBlocks.scripts,
    l = s.findIndex((o) => !!(To.test(o.tagOpen) || xo.test(o.tagOpen))),
    u = i || ''
  let r = ''
  if (
    (n
      ? (r = i
          ? `
      const ${u} = ref();
      onMounted(async () => {
        ${u}.value = (await import('${t}')).default;
      });
      `.trim()
          : `
      onMounted(async () => {
        await import('${t}');
      });
      `.trim())
      : (r = i ? `import ${u} from '${t}'` : `import '${t}'`),
    l === -1)
  ) {
    const o = {
      type: 'script',
      tagClose: '<\/script>',
      tagOpen: "<script setup lang='ts'>",
      content: `<script setup lang='ts'>
        ${r}
        <\/script>`,
      contentStripped: r,
    }
    s.push(o)
  } else {
    const o = s[0]
    if (o.content.includes(t) && (!i || o.content.includes(u)))
      s[0].content = o.content
    else {
      const c = `<script lang="ts" setup>
`
      ;(s[0].content = s[0].content.replace(Oo, c)),
        (s[0].content = s[0].content.replace(
          c,
          `<script setup>

      ${r}
`,
        ))
    }
  }
}
var ko = (e) => {
  let t = true
  const i = []
  for (; t; ) {
    const n = e.lastIndexOf('/')
    if (n === -1) t = false
    else {
      const s = e.substring(n + 1)
      i.unshift(s), (e = e.substring(0, n))
    }
  }
  return (
    'Temp' +
    btoa(
      encodeURIComponent(i.join('-').split('.').slice(0, -1).join('.')),
    ).replace(/=/g, 'Equal')
  )
}
function So(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default')
    ? e.default
    : e
}
var zn = { exports: {} }
var Q = (zn.exports = {})
var ce
var pe
function Kt() {
  throw new Error('setTimeout has not been defined')
}
function Gt() {
  throw new Error('clearTimeout has not been defined')
}
;(function () {
  try {
    typeof setTimeout == 'function' ? (ce = setTimeout) : (ce = Kt)
  } catch {
    ce = Kt
  }
  try {
    typeof clearTimeout == 'function' ? (pe = clearTimeout) : (pe = Gt)
  } catch {
    pe = Gt
  }
})()
function Fn(e) {
  if (ce === setTimeout) return setTimeout(e, 0)
  if ((ce === Kt || !ce) && setTimeout)
    return (ce = setTimeout), setTimeout(e, 0)
  try {
    return ce(e, 0)
  } catch {
    try {
      return ce.call(null, e, 0)
    } catch {
      return ce.call(this, e, 0)
    }
  }
}
function Ao(e) {
  if (pe === clearTimeout) return clearTimeout(e)
  if ((pe === Gt || !pe) && clearTimeout)
    return (pe = clearTimeout), clearTimeout(e)
  try {
    return pe(e)
  } catch {
    try {
      return pe.call(null, e)
    } catch {
      return pe.call(this, e)
    }
  }
}
var ve = []
var De = false
var Re
var ut = -1
function Ro() {
  !De ||
    !Re ||
    ((De = false),
    Re.length ? (ve = Re.concat(ve)) : (ut = -1),
    ve.length && Wn())
}
function Wn() {
  if (!De) {
    var e = Fn(Ro)
    De = true
    for (var t = ve.length; t; ) {
      for (Re = ve, ve = []; ++ut < t; ) Re && Re[ut].run()
      ;(ut = -1), (t = ve.length)
    }
    ;(Re = null), (De = false), Ao(e)
  }
}
Q.nextTick = function (e) {
  var t = new Array(arguments.length - 1)
  if (arguments.length > 1)
    for (var i = 1; i < arguments.length; i++) t[i - 1] = arguments[i]
  ve.push(new Kn(e, t)), ve.length === 1 && !De && Fn(Wn)
}
function Kn(e, t) {
  ;(this.fun = e), (this.array = t)
}
Kn.prototype.run = function () {
  this.fun.apply(null, this.array)
}
Q.title = 'browser'
Q.browser = true
Q.env = {}
Q.argv = []
Q.version = ''
Q.versions = {}
function we() {}
Q.on = we
Q.addListener = we
Q.once = we
Q.off = we
Q.removeListener = we
Q.removeAllListeners = we
Q.emit = we
Q.prependListener = we
Q.prependOnceListener = we
Q.listeners = function (e) {
  return []
}
Q.binding = function (e) {
  throw new Error('process.binding is not supported')
}
Q.cwd = function () {
  return '/'
}
Q.chdir = function (e) {
  throw new Error('process.chdir is not supported')
}
Q.umask = function () {
  return 0
}
var No = zn.exports
var Co = So(No)
function le(e) {
  if (typeof e != 'string')
    throw new TypeError('Path must be a string. Received ' + JSON.stringify(e))
}
function Qi(e, t) {
  for (var i = '', n = 0, s = -1, l = 0, u, r = 0; r <= e.length; ++r) {
    if (r < e.length) u = e.charCodeAt(r)
    else {
      if (u === 47) break
      u = 47
    }
    if (u === 47) {
      if (!(s === r - 1 || l === 1))
        if (s !== r - 1 && l === 2) {
          if (
            i.length < 2 ||
            n !== 2 ||
            i.charCodeAt(i.length - 1) !== 46 ||
            i.charCodeAt(i.length - 2) !== 46
          ) {
            if (i.length > 2) {
              var o = i.lastIndexOf('/')
              if (o !== i.length - 1) {
                o === -1
                  ? ((i = ''), (n = 0))
                  : ((i = i.slice(0, o)),
                    (n = i.length - 1 - i.lastIndexOf('/'))),
                  (s = r),
                  (l = 0)
                continue
              }
            } else if (i.length === 2 || i.length === 1) {
              ;(i = ''), (n = 0), (s = r), (l = 0)
              continue
            }
          }
          t && (i.length > 0 ? (i += '/..') : (i = '..'), (n = 2))
        } else
          i.length > 0
            ? (i += '/' + e.slice(s + 1, r))
            : (i = e.slice(s + 1, r)),
            (n = r - s - 1)
      ;(s = r), (l = 0)
    } else u === 46 && l !== -1 ? ++l : (l = -1)
  }
  return i
}
function Lo(e, t) {
  var i = t.dir || t.root,
    n = t.base || (t.name || '') + (t.ext || '')
  return i ? (i === t.root ? i + n : i + e + n) : n
}
var Pe = {
  resolve: function () {
    for (
      var t = '', i = false, n, s = arguments.length - 1;
      s >= -1 && !i;
      s--
    ) {
      var l
      s >= 0 ? (l = arguments[s]) : (n === void 0 && (n = Co.cwd()), (l = n)),
        le(l),
        l.length !== 0 && ((t = l + '/' + t), (i = l.charCodeAt(0) === 47))
    }
    return (
      (t = Qi(t, !i)),
      i ? (t.length > 0 ? '/' + t : '/') : t.length > 0 ? t : '.'
    )
  },
  normalize: function (t) {
    if ((le(t), t.length === 0)) return '.'
    var i = t.charCodeAt(0) === 47,
      n = t.charCodeAt(t.length - 1) === 47
    return (
      (t = Qi(t, !i)),
      t.length === 0 && !i && (t = '.'),
      t.length > 0 && n && (t += '/'),
      i ? '/' + t : t
    )
  },
  isAbsolute: function (t) {
    return le(t), t.length > 0 && t.charCodeAt(0) === 47
  },
  join: function () {
    if (arguments.length === 0) return '.'
    for (var t, i = 0; i < arguments.length; ++i) {
      var n = arguments[i]
      le(n), n.length > 0 && (t === void 0 ? (t = n) : (t += '/' + n))
    }
    return t === void 0 ? '.' : Pe.normalize(t)
  },
  relative: function (t, i) {
    if (
      (le(t),
      le(i),
      t === i || ((t = Pe.resolve(t)), (i = Pe.resolve(i)), t === i))
    )
      return ''
    for (var n = 1; n < t.length && t.charCodeAt(n) === 47; ++n);
    for (
      var s = t.length, l = s - n, u = 1;
      u < i.length && i.charCodeAt(u) === 47;
      ++u
    );
    for (
      var r = i.length, o = r - u, c = l < o ? l : o, g = -1, h = 0;
      h <= c;
      ++h
    ) {
      if (h === c) {
        if (o > c) {
          if (i.charCodeAt(u + h) === 47) return i.slice(u + h + 1)
          if (h === 0) return i.slice(u + h)
        } else
          l > c && (t.charCodeAt(n + h) === 47 ? (g = h) : h === 0 && (g = 0))
        break
      }
      var m = t.charCodeAt(n + h),
        S = i.charCodeAt(u + h)
      if (m !== S) break
      m === 47 && (g = h)
    }
    var C = ''
    for (h = n + g + 1; h <= s; ++h)
      (h === s || t.charCodeAt(h) === 47) &&
        (C.length === 0 ? (C += '..') : (C += '/..'))
    return C.length > 0
      ? C + i.slice(u + g)
      : ((u += g), i.charCodeAt(u) === 47 && ++u, i.slice(u))
  },
  _makeLong: function (t) {
    return t
  },
  dirname: function (t) {
    if ((le(t), t.length === 0)) return '.'
    for (
      var i = t.charCodeAt(0), n = i === 47, s = -1, l = true, u = t.length - 1;
      u >= 1;
      --u
    )
      if (((i = t.charCodeAt(u)), i === 47)) {
        if (!l) {
          s = u
          break
        }
      } else l = false
    return s === -1 ? (n ? '/' : '.') : n && s === 1 ? '//' : t.slice(0, s)
  },
  basename: function (t, i) {
    if (i !== void 0 && typeof i != 'string')
      throw new TypeError('"ext" argument must be a string')
    le(t)
    var n = 0,
      s = -1,
      l = true,
      u
    if (i !== void 0 && i.length > 0 && i.length <= t.length) {
      if (i.length === t.length && i === t) return ''
      var r = i.length - 1,
        o = -1
      for (u = t.length - 1; u >= 0; --u) {
        var c = t.charCodeAt(u)
        if (c === 47) {
          if (!l) {
            n = u + 1
            break
          }
        } else
          o === -1 && ((l = false), (o = u + 1)),
            r >= 0 &&
              (c === i.charCodeAt(r)
                ? --r === -1 && (s = u)
                : ((r = -1), (s = o)))
      }
      return n === s ? (s = o) : s === -1 && (s = t.length), t.slice(n, s)
    } else {
      for (u = t.length - 1; u >= 0; --u)
        if (t.charCodeAt(u) === 47) {
          if (!l) {
            n = u + 1
            break
          }
        } else s === -1 && ((l = false), (s = u + 1))
      return s === -1 ? '' : t.slice(n, s)
    }
  },
  extname: function (t) {
    le(t)
    for (
      var i = -1, n = 0, s = -1, l = true, u = 0, r = t.length - 1;
      r >= 0;
      --r
    ) {
      var o = t.charCodeAt(r)
      if (o === 47) {
        if (!l) {
          n = r + 1
          break
        }
        continue
      }
      s === -1 && ((l = false), (s = r + 1)),
        o === 46
          ? i === -1
            ? (i = r)
            : u !== 1 && (u = 1)
          : i !== -1 && (u = -1)
    }
    return i === -1 ||
      s === -1 ||
      u === 0 ||
      (u === 1 && i === s - 1 && i === n + 1)
      ? ''
      : t.slice(i, s)
  },
  format: function (t) {
    if (t === null || typeof t != 'object')
      throw new TypeError(
        'The "pathObject" argument must be of type Object. Received type ' +
          typeof t,
      )
    return Lo('/', t)
  },
  parse: function (t) {
    le(t)
    var i = { root: '', dir: '', base: '', ext: '', name: '' }
    if (t.length === 0) return i
    var n = t.charCodeAt(0),
      s = n === 47,
      l
    s ? ((i.root = '/'), (l = 1)) : (l = 0)
    for (
      var u = -1, r = 0, o = -1, c = true, g = t.length - 1, h = 0;
      g >= l;
      --g
    ) {
      if (((n = t.charCodeAt(g)), n === 47)) {
        if (!c) {
          r = g + 1
          break
        }
        continue
      }
      o === -1 && ((c = false), (o = g + 1)),
        n === 46
          ? u === -1
            ? (u = g)
            : h !== 1 && (h = 1)
          : u !== -1 && (h = -1)
    }
    return (
      u === -1 || o === -1 || h === 0 || (h === 1 && u === o - 1 && u === r + 1)
        ? o !== -1 &&
          (r === 0 && s
            ? (i.base = i.name = t.slice(1, o))
            : (i.base = i.name = t.slice(r, o)))
        : (r === 0 && s
            ? ((i.name = t.slice(1, u)), (i.base = t.slice(1, o)))
            : ((i.name = t.slice(r, u)), (i.base = t.slice(r, o))),
          (i.ext = t.slice(u, o))),
      r > 0 ? (i.dir = t.slice(0, r - 1)) : s && (i.dir = '/'),
      i
    )
  },
  sep: '/',
  delimiter: ':',
  win32: null,
  posix: null,
}
Pe.posix = Pe
var ne = Pe
var Mo = /title="(.*?)"/
var Io = /vue="(.*?)"/
var Do = /html="(.*?)"/
var Po = /react="(.*?)"/
var Bo = /description="(.*?)"/
var $o = /order="(.*?)"/
var Uo = /select="(.*?)"/
var jo = /github="(.*?)"/
var zo = /gitlab="(.*?)"/
var Fo = /stackblitz="(.*?)"/
var Wo = /codesandbox="(.*?)"/
var Ko = /codeplayer="(.*?)"/
var Go = /scope="(.*?)"/
var Ho = /vueFiles=("\{((.|\n)*?)\}"|"\[((.|\n)*?)\]")/
var qo = /reactFiles=("\{((.|\n)*?)\}"|"\[((.|\n)*?)\]")/
var Xo = /htmlFiles=("\{((.|\n)*?)\}"|"\[((.|\n)*?)\]")/
var Ji = (e, t, i, n) => {
  var je
  const {
    demoDir: s,
    tab: l = {},
    stackblitz: u = { show: false },
    codesandbox: r = { show: false },
    codeplayer: o = { show: false },
  } = n || {}
  let {
    order: c = 'vue,react,html',
    visible: g = true,
    select: h = (l.order || 'vue,react,html').split(',')[0] || 'vue',
  } = l
  const m = {
      vue: '',
      title: '',
      description: '',
      html: '',
      react: '',
    },
    S = t.content.match(Mo),
    C = t.content.match(Io),
    L = t.content.match(Do),
    d = t.content.match(Po),
    _ = t.content.match(Bo),
    b = t.content.match($o),
    A = t.content.match(Uo),
    x = t.content.match(jo),
    k = t.content.match(zo),
    p = t.content.match(Fo),
    v = t.content.match(Wo),
    f = t.content.match(Ko),
    O = ((je = t.content.match(Go)) == null ? void 0 : je[1]) || '',
    a = t.content.match(Ho),
    E = t.content.match(qo),
    w = t.content.match(Xo),
    M = s || ne.dirname(i.path)
  b != null && b[1] && (c = b[1]), A != null && A[1] && (h = A[1])
  let P = '',
    j = ''
  x != null && x[1] && (P = x[1]),
    k != null && k[1] && (j = k[1]),
    p != null && p[1] && (u.show = p[1] === 'true'),
    v != null && v[1] && (r.show = v[1] === 'true'),
    f != null && f[1] && (o.show = f[1] === 'true'),
    C != null && C[1] && (m.vue = ne.join(M, C[1]).replace(/\\/g, '/')),
    L != null && L[1] && (m.html = ne.join(M, L[1]).replace(/\\/g, '/')),
    d != null && d[1] && (m.react = ne.join(M, d[1]).replace(/\\/g, '/')),
    (m.title = S ? S[1] : ''),
    (m.description = _ ? _[1] : '')
  const F = m.vue
      ? ne
          .resolve(s || ne.dirname(i.path), (C == null ? void 0 : C[1]) || '.')
          .replace(/\\/g, '/')
      : '',
    y = m.html
      ? ne
          .resolve(s || ne.dirname(i.path), (L == null ? void 0 : L[1]) || '.')
          .replace(/\\/g, '/')
      : '',
    T = m.react
      ? ne
          .resolve(s || ne.dirname(i.path), (d == null ? void 0 : d[1]) || '.')
          .replace(/\\/g, '/')
      : '',
    R = ne.resolve(M, m.vue || m.react || m.html || '.').replace(/\\/g, '/'),
    I = ko(R),
    $ = `react${I}`
  oe(i, 'vitepress-demo-plugin', '{ VitepressDemoBox }'),
    oe(i, 'vitepress-demo-plugin/dist/style.css'),
    oe(i, 'vue', '{ ref, onMounted }'),
    m.vue && oe(i, F, I),
    m.react &&
      (oe(i, 'react', '{ createElement as reactCreateElement }'),
      oe(i, 'react-dom/client', '{ createRoot as reactCreateRoot }'),
      oe(i, T, $, true))
  const G = m.html ? `TempCodeHtml${I}` : "''",
    Y = m.react ? `TempCodeReact${I}` : "''",
    he = m.vue ? `TempCodeVue${I}` : "''"
  m.html && oe(i, `${y}?raw`, G),
    m.react && oe(i, `${T}?raw`, Y),
    m.vue && oe(i, `${F}?raw`, he)
  const X = {
    vue: {},
    react: {},
    html: {},
  }
  function J(se) {
    return se
      .replace(/'/g, '"')
      .replace(/\\n/g, '')
      .trim()
      .replace(/^"/, '')
      .replace(/"$/, '')
      .replace(/,(\s|\n)*\}$/, '}')
      .replace(/,(\s|\n)*\]$/, ']')
  }
  const Ue = {
    vue: J((a == null ? void 0 : a[1]) || ''),
    react: J((E == null ? void 0 : E[1]) || ''),
    html: J((w == null ? void 0 : w[1]) || ''),
  }
  for (const se in Ue) {
    let Ze = Ue[se]
    if (Ze)
      try {
        const Le = JSON.parse(Ze)
        Array.isArray(Le)
          ? Le.forEach((de) => {
              const ge = ne.basename(de)
              X[se][ge] = de
            })
          : (X[se] = Le)
        for (const de in X[se]) {
          const ge = X[se][de]
          if (ge) {
            const ze = ne
              .resolve(s || ne.dirname(i.path), ge || '.')
              .replace(/\\/g, '/')
            if (import_fs.default.existsSync(ze)) {
              const re = import_fs.default.readFileSync(ze, 'utf-8')
              X[se][de] = re
            } else delete X[se][de]
          } else delete X[se][de]
        }
      } catch {}
  }
  return `
  <ClientOnly>
    <vitepress-demo-box 
      title="${m.title}"
      description="${m.description}"
      select="${h}"
      order="${c}"
      github="${P}"
      gitlab="${j}"
      theme="${(n == null ? void 0 : n.theme) || ''}"
      lightTheme="${(n == null ? void 0 : n.lightTheme) || ''}"
      darkTheme="${(n == null ? void 0 : n.darkTheme) || ''}"
      stackblitz="${encodeURIComponent(JSON.stringify(u))}"
      codesandbox="${encodeURIComponent(JSON.stringify(r))}"
      codeplayer="${encodeURIComponent(JSON.stringify(o))}"
      files="${encodeURIComponent(JSON.stringify(X))}"
      scope="${O || ''}"
      :visible="!!${g}"
      ${
        m.html
          ? `
            :htmlCode="${G}"
            `
          : ''
      }
      ${
        m.vue
          ? `
            :vueCode="${he}"
            `
          : ''
      }
      ${
        m.react
          ? `
            :reactCode="${Y}"
            :reactComponent="${$}"
            :reactCreateRoot="reactCreateRoot"
            :reactCreateElement="reactCreateElement"
            `
          : ''
      }
      >
      ${
        m.vue
          ? `
            <template #vue>
              <${I}></${I}>
            </template>
            `
          : ''
      }
    </vitepress-demo-box>
  </ClientOnly>`
}
var Jo = (e, t) => {
  const i = e.renderer.rules.html_inline,
    n = e.renderer.rules.html_block
  ;(e.renderer.rules.html_inline = (s, l, u, r, o) => {
    const c = s[l]
    return (
      (c.content = c.content.replace(/<!--[\s\S]*?-->/g, '')),
      Zi.some((g) => g.test(c.content)) ? Ji(e, c, r, t) : i(s, l, u, r, o)
    )
  }),
    (e.renderer.rules.html_block = (s, l, u, r, o) => {
      const c = s[l]
      return (
        (c.content = c.content.replace(/<!--[\s\S]*?-->/g, '')),
        Zi.some((g) => g.test(c.content)) ? Ji(e, c, r, t) : n(s, l, u, r, o)
      )
    })
}
export { Qo as VitepressDemoBox, Jo as vitepressDemoPlugin }
/*! Bundled license information:

vitepress-demo-plugin/dist/index.js:
  (*!
   * is-whitespace <https://github.com/jonschlinkert/is-whitespace>
   *
   * Copyright (c) 2014-2015, Jon Schlinkert.
   * Licensed under the MIT License.
   *)
  (*!
   * is-extendable <https://github.com/jonschlinkert/is-extendable>
   *
   * Copyright (c) 2015, Jon Schlinkert.
   * Licensed under the MIT License.
   *)
  (*!
   * Determine if an object is a Buffer
   *
   * @author   Feross Aboukhadijeh <https://feross.org>
   * @license  MIT
   *)
  (*!
   * condense-newlines <https://github.com/jonschlinkert/condense-newlines>
   *
   * Copyright (c) 2014 Jon Schlinkert, contributors.
   * Licensed under the MIT License
   *)
  (*!
   * pretty <https://github.com/jonschlinkert/pretty>
   *
   * Copyright (c) 2013-2015, 2017, Jon Schlinkert.
   * Released under the MIT License.
   *)
*/
//# sourceMappingURL=vitepress-demo-plugin.js.map
