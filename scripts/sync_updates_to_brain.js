const fs = require("fs");
const path = "./dirtbrain";
const today = new Date().toISOString().slice(0, 10);

// Example auto-updates
const updates = [
  { file: "tech-rules.md", summary: "- Tailwind v4 must not use `@tailwindcss/postcss`. Use `tailwindcss` directly." },
  { file: "sprint-system.md", summary: "- Daily standups now include bot sync + user priority review." }
];

updates.forEach(update => {
  const filePath = `${path}/${update.file}`;
  if (fs.existsSync(filePath)) {
    fs.appendFileSync(filePath, `\n\n---\n### 🧠 Auto Update – ${today}\n${update.summary}`);
    console.log(`✅ Updated: ${update.file}`);
  } else {
    console.warn(`⚠️ Missing file: ${update.file}`);
  }
});