# Math Game - Changelog & Roadmap

Deployed at: https://yyaanniivv.github.io/math

---

## ✅ Done

| Version | Changes |
|---------|---------|
| **v0.6** (PR #7) | MUI v4 → v5 migration (`@mui/material`, `@mui/codemod`) |
| **v0.5** (PR #6) | GitHub Pages deploy fix for Vite (`peaceiris/actions-gh-pages`) |
| **v0.4** (PR #5) | CRA → Vite migration + TypeScript 5.x + React 18 |
| **v0.3** (PR #3) | CI/CD: GitHub Actions auto-deploy to Pages |
| **v0.2** (PR #2) | Node.js 26.10.0 + `engines.node` in package.json |
| **v0.1** (PR #1) | Security: removed `eval()`, `useRef` over `getElementById`, `const` for setters |

---

## 🎯 Next Up (Quick Wins PR)

| Task | File | Effort |
|------|------|--------|
| Fix `useEffect` missing dependency (`generateProblem`) | `src/App.tsx:92` | 5 min |
| Fix/remove boilerplate test ("learn react") | `src/App.test.tsx` | 10 min |

---

## 🌱 Later (Enhancements)

- Implement division (`:`) operation
- Accessibility (ARIA, keyboard nav, contrast)
- PWA support (manifest, offline)
- i18n (react-i18next, proper RTL)
- Keyboard numpad support (Enter, Backspace, 0-9)
- Persist settings to localStorage
- Sound/haptic feedback
- Unit tests for `calculate`/`generateProblem`/`checkProblem`

---

*Updated 2026-10-11*