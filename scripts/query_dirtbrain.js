const fs = require("fs");
const path = require("path");

const brainDir = "./dirtbrain";
const query = process.argv.slice(2).join(" ").toLowerCase();
const results = [];

fs.readdirSync(brainDir).forEach(file => {
  const filePath = path.join(brainDir, file);
  const content = fs.readFileSync(filePath, "utf-8");

  if (content.toLowerCase().includes(query)) {
    results.push({
      file,
      snippet: content
        .split("\n")
        .find(line => line.toLowerCase().includes(query))
        .trim()
    });
  }
});

console.log(`🔎 Results for: "${query}"`);
console.table(results);