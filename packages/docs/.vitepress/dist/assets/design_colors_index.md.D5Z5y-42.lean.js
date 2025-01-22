import { g as b } from './chunks/theme.BKnsVfWH.js'
import {
  d as m,
  o as d,
  a as c,
  F as n,
  y as _,
  b as e,
  t as o,
  n as x,
  _ as g,
  u as p,
  q as h,
} from './chunks/framework.D5-Ddbi5.js'
const y = { class: 'gradient-container' },
  v = { class: 'color-box' },
  k = { class: 'color-box-title' },
  C = { class: 'row-box-left' },
  w = { class: 'row-box-right' },
  S = m({
    __name: 'colorDemo',
    setup(u) {
      const s = {
        Slate: {
          name: '石板色',
          list: [
            '#f8fafc',
            '#f1f5f9',
            '#e2e8f0',
            '#cbd5e1',
            '#94a3b8',
            '#64748b',
            '#475569',
            '#334155',
            '#1e293b',
            '#0f172a',
            '#020617',
          ],
        },
        Gray: {
          list: [
            '#f9fafb',
            '#f3f4f6',
            '#e5e7eb',
            '#d1d5db',
            '#9ca3af',
            '#6b7280',
            '#4b5563',
            '#374151',
            '#1f2937',
            '#111827',
            '#030712',
          ],
        },
        Zinc: {
          list: [
            '#fafafa',
            '#f4f4f5',
            '#e4e4e7',
            '#d4d4d8',
            '#a1a1aa',
            '#71717a',
            '#52525b',
            '#3f3f46',
            '#27272a',
            '#18181b',
            '#09090b',
          ],
        },
        Neutral: {
          list: [
            '#fafafa',
            '#f5f5f5',
            '#e5e5e5',
            '#d4d4d4',
            '#a3a3a3',
            '#737373',
            '#525252',
            '#404040',
            '#262626',
            '#171717',
            '#0a0a0a',
          ],
        },
        Stone: {
          list: [
            '#fafaf9',
            '#f5f5f4',
            '#e7e5e4',
            '#d6d3d1',
            '#a8a29e',
            '#78716c',
            '#57534e',
            '#44403c',
            '#292524',
            '#1c1917',
            '#0c0a09',
          ],
        },
        Red: {
          list: [
            '#fef2f2',
            '#fee2e2',
            '#fecaca',
            '#fca5a5',
            '#f87171',
            '#ef4444',
            '#dc2626',
            '#b91c1c',
            '#991b1b',
            '#7f1d1d',
            '#450a0a',
          ],
        },
        Orange: {
          list: [
            '#fff7ed',
            '#ffedd5',
            '#fed7aa',
            '#fdba74',
            '#fb923c',
            '#f97316',
            '#ea580c',
            '#c2410c',
            '#9a3412',
            '#7c2d12',
            '#431407',
          ],
        },
        Amber: {
          list: [
            '#fffbeb',
            '#fef3c7',
            '#fde68a',
            '#fcd34d',
            '#fbbf24',
            '#f59e0b',
            '#d97706',
            '#b45309',
            '#92400e',
            '#78350f',
            '#451a03',
          ],
        },
        Yellow: {
          list: [
            '#fefce8',
            '#fef9c3',
            '#fef08a',
            '#fde047',
            '#facc15',
            '#eab308',
            '#ca8a04',
            '#a16207',
            '#854d0e',
            '#713f12',
            '#422006',
          ],
        },
        Lime: {
          list: [
            '#f7fee7',
            '#ecfccb',
            '#d9f99d',
            '#bef264',
            '#a3e635',
            '#84cc16',
            '#65a30d',
            '#4d7c0f',
            '#3f6212',
            '#365314',
            '#1a2e05',
          ],
        },
        Green: {
          list: [
            '#f0fdf4',
            '#dcfce7',
            '#bbf7d0',
            '#86efac',
            '#4ade80',
            '#22c55e',
            '#16a34a',
            '#15803d',
            '#166534',
            '#14532d',
            '#052e16',
          ],
        },
        Emerald: {
          list: [
            '#ecfdf5',
            '#d1fae5',
            '#a7f3d0',
            '#6ee7b7',
            '#34d399',
            '#10b981',
            '#059669',
            '#047857',
            '#065f46',
            '#064e3b',
            '#022c22',
          ],
        },
        Teal: {
          list: [
            '#f0fdfa',
            '#ccfbf1',
            '#99f6e4',
            '#5eead4',
            '#2dd4bf',
            '#14b8a6',
            '#0d9488',
            '#0f766e',
            '#115e59',
            '#134e4a',
            '#042f2e',
          ],
        },
        Cyan: {
          list: [
            '#ecfeff',
            '#cffafe',
            '#a5f3fc',
            '#67e8f9',
            '#22d3ee',
            '#06b6d4',
            '#0891b2',
            '#0e7490',
            '#155e75',
            '#164e63',
            '#083344',
          ],
        },
        Sky: {
          list: [
            '#f0f9ff',
            '#e0f2fe',
            '#bae6fd',
            '#7dd3fc',
            '#38bdf8',
            '#0ea5e9',
            '#0284c7',
            '#0369a1',
            '#075985',
            '#0c4a6e',
            '#082f49',
          ],
        },
        Blue: {
          list: [
            '#eff6ff',
            '#dbeafe',
            '#bfdbfe',
            '#93c5fd',
            '#60a5fa',
            '#3b82f6',
            '#2563eb',
            '#1d4ed8',
            '#1e40af',
            '#1e3a8a',
            '#172554',
          ],
        },
        Indigo: {
          list: [
            '#eef2ff',
            '#e0e7ff',
            '#c7d2fe',
            '#a5b4fc',
            '#818cf8',
            '#6366f1',
            '#4f46e5',
            '#4338ca',
            '#3730a3',
            '#312e81',
            '#1e1b4b',
          ],
        },
        Violet: {
          list: [
            '#f5f3ff',
            '#ede9fe',
            '#ddd6fe',
            '#c4b5fd',
            '#a78bfa',
            '#8b5cf6',
            '#7c3aed',
            '#6d28d9',
            '#5b21b6',
            '#4c1d95',
            '#2e1065',
          ],
        },
        Purple: {
          list: [
            '#faf5ff',
            '#f3e8ff',
            '#e9d5ff',
            '#d8b4fe',
            '#c084fc',
            '#a855f7',
            '#9333ea',
            '#7e22ce',
            '#6b21a8',
            '#581c87',
            '#3b0764',
          ],
        },
        Fuchsia: {
          list: [
            '#fdf4ff',
            '#fae8ff',
            '#f5d0fe',
            '#f0abfc',
            '#e879f9',
            '#d946ef',
            '#c026d3',
            '#a21caf',
            '#86198f',
            '#701a75',
            '#4a044e',
          ],
        },
        Pink: {
          list: [
            '#fdf2f8',
            '#fce7f3',
            '#fbcfe8',
            '#f9a8d4',
            '#f472b6',
            '#ec4899',
            '#db2777',
            '#be185d',
            '#9d174d',
            '#831843',
            '#500724',
          ],
        },
        Rose: {
          list: [
            '#fff1f2',
            '#ffe4e6',
            '#fecdd3',
            '#fda4af',
            '#fb7185',
            '#f43f5e',
            '#e11d48',
            '#be123c',
            '#9f1239',
            '#881337',
            '#4c0519',
          ],
        },
      }
      function f(l) {
        const r = l.target.querySelector('.row-box-right'),
          a = r.textContent || r.innerText
        navigator.clipboard &&
          navigator.clipboard
            .writeText(a)
            .then(() => {
              b({ type: 'success', content: `内容已复制成功！${a}` })
            })
            .catch((t) => {
              b({ type: 'error', content: '内容复制失败，浏览器不支持！' }),
                console.error('复制失败:', t)
            })
      }
      return (l, r) => (
        d(),
        c('div', y, [
          (d(!0),
          c(
            n,
            null,
            _(
              Object.keys(s),
              (a) => (
                d(),
                c('div', { key: a, class: 'color-boxes' }, [
                  e('div', v, [
                    e('div', k, o(a), 1),
                    (d(!0),
                    c(
                      n,
                      null,
                      _(
                        s[`${a}`].list,
                        (t, i) => (
                          d(),
                          c(
                            'div',
                            {
                              key: i,
                              style: x({ backgroundColor: t }),
                              class: 'row-box',
                              onClick: f,
                            },
                            [
                              e('div', C, o(a) + ' - ' + o(i), 1),
                              e('div', w, o(t), 1),
                            ],
                            4,
                          )
                        ),
                      ),
                      128,
                    )),
                  ]),
                ])
              ),
            ),
            128,
          )),
        ])
      )
    },
  }),
  P = g(S, [['__scopeId', 'data-v-debcf9d6']]),
  O = JSON.parse(
    '{"title":"Color 色彩","description":"","frontmatter":{},"headers":[],"relativePath":"design/colors/index.md","filePath":"design/colors/index.md"}',
  ),
  B = { name: 'design/colors/index.md' },
  V = Object.assign(B, {
    setup(u) {
      return (s, f) => (
        d(),
        c('div', null, [
          f[0] ||
            (f[0] = e(
              'h1',
              { id: 'color-色彩', tabindex: '-1' },
              [
                p('Color 色彩 '),
                e(
                  'a',
                  {
                    class: 'header-anchor',
                    href: '#color-色彩',
                    'aria-label': 'Permalink to "Color 色彩"',
                  },
                  '​',
                ),
              ],
              -1,
            )),
          f[1] ||
            (f[1] = e(
              'h2',
              { id: '基础色板', tabindex: '-1' },
              [
                p('基础色板 '),
                e(
                  'a',
                  {
                    class: 'header-anchor',
                    href: '#基础色板',
                    'aria-label': 'Permalink to "基础色板"',
                  },
                  '​',
                ),
              ],
              -1,
            )),
          f[2] || (f[2] = e('p', null, '为您的项目定制默认调色板。', -1)),
          h(P),
        ])
      )
    },
  })
export { O as __pageData, V as default }
