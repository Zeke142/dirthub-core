const fs = require("fs");
const file = "./dirtbrain/logbook-index.md";
const tag = process.argv[2] || "| Task |";

const content = fs.readFileSync(file, "utf-8");
const entries = content.split("\n").filter(line => line.includes(tag));

console.log(`🧠 Entries with tag "${tag}":`);
entries.forEach((entry, i) => {
  console.log(`${i + 1}. ${entry.trim()}`);
});