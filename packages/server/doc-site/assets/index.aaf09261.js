var e = Object.defineProperty,
  a = Object.getOwnPropertySymbols,
  r = Object.prototype.hasOwnProperty,
  t = Object.prototype.propertyIsEnumerable,
  l = (a, r, t) =>
    r in a
      ? e(a, r, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (a[r] = t)
'undefined' != typeof require && require
import { R as s, N as o, S as c } from './vendor.5aa942b8.js'
import { R as n } from './index.08554173.js'
var m = '_page_8h207_1',
  i = '_header_8h207_5',
  p = '_logo_8h207_24',
  _ = '_appName_8h207_28',
  v = '_nav_8h207_32',
  b = '_active_8h207_43'
const d = ({ routes: e }) =>
  s.createElement(
    'div',
    { className: m },
    s.createElement(
      'div',
      { className: i },
      s.createElement('img', {
        className: p,
        src: '/assets/logo.1b59be79.svg',
      }),
      s.createElement('div', { className: _ }, 'graphql-kit'),
      s.createElement(
        'nav',
        { className: v },
        s.createElement(o, { to: '/doc', activeClassName: b }, '文档'),
      ),
    ),
    s.createElement(
      c,
      null,
      e.map((e, o) =>
        s.createElement(
          n,
          ((e, s) => {
            for (var o in s || (s = {})) r.call(s, o) && l(e, o, s[o])
            if (a) for (var o of a(s)) t.call(s, o) && l(e, o, s[o])
            return e
          })({ key: o }, e),
        ),
      ),
    ),
  )
export { d as default }
