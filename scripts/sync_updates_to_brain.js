// scripts/sync_updates_to_brain.js

const fs = require("fs");
const path = "./dirtbrain";
const today = new Date().toISOString().slice(0, 10);

// ✅ Forced update to ensure test result appears
const updates = [
  {
    file: "logbook-index.md",
    summary: `- ✅ Forced test update from GitHub Action at ${new Date().toISOString()}`
  },
  {
    file: "tech-rules.md",
    summary: `- 🧪 Confirmed GitHub Action writes to .md files – ${today}`
  }
];

// 🔁 Append updates to each target file
updates.forEach(update => {
  const filePath = `${path}/${update.file}`;

  if (fs.existsSync(filePath)) {
    const newEntry = `\n\n---\n### 🧠 Auto Update – ${today}\n${update.summary}`;
    fs.appendFileSync(filePath, newEntry);
    console.log(`✅ Updated: ${update.file}`);
  } else {
    console.warn(`⚠️ File not found: ${update.file}`);
  }
});