# 🛠️ Resolution Library

This file stores known fixes for common recurring issues in the DirtHub system.

---

### PostCSS Fails (Tailwind v4)
- ❌ Remove `@tailwindcss/postcss`
- ✅ Use `tailwindcss` directly in `postcss.config.js`

---

### Vercel Cache Bug
- 🔁 Clear build cache manually in Vercel dashboard
- 🔐 Avoid stacking plugins in `postcss.config.js`

---

### Dark Mode Toggle Crash
- 🚫 Remove toggle UI if using Tailwind v4
- ✅ Rely on `prefers-color-scheme` in `tailwind.config.js`

---

### SWC Cache Warning (Next.js 15)
- 🧹 Clear cache with `vercel --force`
- 👀 Monitor Next.js changelog for patch notes
