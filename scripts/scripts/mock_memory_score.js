const fs = require("fs");
const file = "./dirtbrain/logbook-index.md";
const query = process.argv.slice(2).join(" ").toLowerCase();

const content = fs.readFileSync(file, "utf-8");
const lines = content.split("\n");

const scored = lines
  .filter(line => line.includes("|") && line.includes("20"))
  .map(line => {
    const lc = line.toLowerCase();
    const score = (query.match(/\w+/g) || [])
      .map(word => lc.includes(word) ? 1 : 0)
      .reduce((a, b) => a + b, 0);
    return { entry: line.trim(), score };
  })
  .filter(e => e.score > 0)
  .sort((a, b) => b.score - a.score);

console.log(`🧠 Top matches for "${query}":`);
console.table(scored.slice(0, 5));