# 🛠️ DirtHub Tech Rules

## ✅ Tailwind v4
- Do **not** use `@tailwindcss/postcss`.
- Instead, use `tailwindcss` directly in `postcss.config.js`.

## ✅ Next.js 15
- Use `app/` directory structure.
- Enable Turbopack for fast local dev.

## ✅ Deployment Rules
- Frontend: Vercel
- Backend: Railway (Node/Express)

## ❌ Avoid
- Manual `.env` sharing — use GitHub secrets
- Outdated `postcss` plugins in Tailwind v4 builds