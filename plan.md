# Math Game - Improvement Plan

## Project Overview
A simple math practice game for kids built with React + TypeScript + Material-UI (v4). Currently deployed at https://yyaanniivv.github.io/math

---

## ✅ DONE

### PR #1: Security & React Best Practices
- [x] **Remove `eval()`** → Added `src/utils/calculate.ts` with safe switch-based calculation
- [x] **Replace `document.getElementById` with `useRef`** → React ref for result input
- [x] **Fix `let` → `const`** for all state setters

### PR #2: Node.js Upgrade
- [x] **Upgrade `.nvmrc`** → `v26.10.0` (Current, per user request)
- [x] **Add `engines.node`** → `>=26.0.0` in `package.json`

### PR #3: CI/CD
- [x] **GitHub Actions workflow** → Auto-deploy to GitHub Pages on push to main
- [x] Uses `.nvmrc` for Node version, official `actions/deploy-pages@v4`

---

## 🟡 Quick Wins (15-30 min each)

### 4. Fix `useEffect` missing dependency warning
- **File**: `src/App.tsx:92`
- **Issue**: `generateProblem` missing from dependency array
- **Fix**: Add `generateProblem` to `useEffect` deps or wrap in `useCallback`

### 5. Fix/remove boilerplate test
- **File**: `src/App.test.tsx`
- **Issue**: CRA boilerplate test looks for "learn react" (app shows Hebrew)
- **Fix**: Delete or rewrite to test actual app behavior

### 6. Add ESLint + Prettier config
- Add `.eslintrc.js`, `.prettierrc`, `lint`/`format` scripts
- Run in CI

### 7. Implement division (`:`) operation
- Currently hidden: `<option value=":" hidden>חילוק</option>`
- `calculate.ts` already supports it — just unhide and wire up

---

## 🟠 High Priority: Stack Modernization (2-4 hrs each)

### 8. Migrate Create React App → Vite
- **Why**: CRA deprecated since 2022, no updates
- **Benefits**: Faster dev server, smaller bundles, modern defaults
- **Effort**: ~2-3 hrs (config, scripts, path aliases)

### 9. Upgrade React 16 → 18+
- Current: `^16.13.1` (EOL)
- Target: `^18.2.0` or `^19.0.0`
- Enables concurrent features, auto-batching

### 10. Upgrade TypeScript 3.7 → 5.x
- Current: `~3.7.2`
- Target: `^5.0.0`
- Enable `strict: true` in `tsconfig.json`

### 11. Migrate Material-UI v4 → MUI v5+
- Current: `@material-ui/core@^4.11.0` (deprecated)
- Target: `@mui/material@^5.x` or `^6.x`
- Use `@mui/codemod` for automated migration

---

## 🟢 Nice to Have (Enhancements)

| Task | Effort |
|------|--------|
| Accessibility (ARIA, keyboard nav, contrast) | ~1-2 hrs |
| PWA support (manifest.json, offline) | ~1 hr |
| i18n (react-i18next, proper RTL) | ~2 hrs |
| Keyboard support for numpad (Enter, Backspace, 0-9) | ~30 min |
| Persist settings to localStorage | ~30 min |
| Sound/haptic feedback | ~1 hr |
| Unit tests for calculate/generateProblem/checkProblem | ~1-2 hrs |

---

## 📋 Suggested Next Steps

| Phase | Tasks | Est. Effort |
|-------|-------|-------------|
| **Quick Wins PR** | 4, 5, 6, 7 | 30-45 min |
| **Vite Migration PR** | 8 | 2-3 hrs |
| **React/TS/MUI Upgrade PR** | 9, 10, 11 | 2-4 hrs |
| **Polish PR** | Enhancements | 3-6 hrs |

---

## 🔗 Related Resources
- [MUI v4 to v5 Migration Guide](https://mui.com/material-ui/migration/migration-v4/)
- [Create React App → Vite Migration](https://vitejs.dev/guide/#migrating-from-create-react-app)
- [React 18 Upgrade Guide](https://react.dev/blog/2022/03/29/react-v18)
- [TypeScript 5 Migration](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-5-0.html)

---

*Updated 2026-10-08 — Reflects PRs #1, #2, #3 merged*