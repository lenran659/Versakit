import { V as o, y as r, A as u } from './chunks/theme.BKnsVfWH.js'
import {
  o as l,
  a as m,
  q as e,
  l as a,
  L as i,
  u as n,
} from './chunks/framework.D5-Ddbi5.js'
const g = JSON.parse(
    '{"title":"","description":"","frontmatter":{"layout":"page"},"headers":[],"relativePath":"team.md","filePath":"team.md"}',
  ),
  c = { name: 'team.md' },
  d = Object.assign(c, {
    setup(h) {
      const s = [
        {
          avatar:
            'https://avatars.githubusercontent.com/u/74483049?s=400&u=102dfac48d0067d9d7a5576134e409590bbfaafe&v=4',
          name: 'Jannik',
          title: 'Creator',
          links: [{ icon: 'github', link: 'https://github.com/lenran659' }],
        },
        {
          avatar: 'https://avatars.githubusercontent.com/u/131731035?v=4',
          name: 'Pei',
          title: 'UI Designer | Developer',
          links: [{ icon: 'github', link: 'https://github.com/Dream-2022' }],
        },
        {
          avatar: 'https://avatars.githubusercontent.com/u/122306263?v=4',
          name: 'JustHappy',
          title: 'Developer',
          links: [{ icon: 'github', link: 'https://github.com/Simonmie' }],
        },
        {
          avatar: 'https://avatars.githubusercontent.com/u/128499037?v=4',
          name: 'ZHuuO',
          title: 'Developer',
          links: [{ icon: 'github', link: 'https://github.com/ZHuuO' }],
        },
        {
          avatar: 'https://avatars.githubusercontent.com/u/184910937?v=4',
          name: 'StriveToLearnCode',
          title: 'Developer',
          links: [
            { icon: 'github', link: 'https://github.com/StriveToLearnCode' },
          ],
        },
        {
          avatar: 'https://avatars.githubusercontent.com/u/180088207?v=4',
          name: 'Fofow',
          title: 'Developer',
          links: [{ icon: 'github', link: 'https://github.com/Natorx' }],
        },
      ]
      return (p, t) => (
        l(),
        m('div', null, [
          e(i(u), null, {
            default: a(() => [
              e(i(o), null, {
                title: a(() => t[0] || (t[0] = [n('团队成员')])),
                lead: a(
                  () => t[1] || (t[1] = [n(' 我们是一群热爱开源的人。 ')]),
                ),
                _: 1,
              }),
              e(i(r), { size: 'small', members: s }),
            ]),
            _: 1,
          }),
        ])
      )
    },
  })
export { g as __pageData, d as default }
