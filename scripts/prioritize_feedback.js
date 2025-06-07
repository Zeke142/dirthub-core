const fs = require("fs");
const file = "./dirtbrain/user-feedback.md";
const content = fs.readFileSync(file, "utf-8");

const entries = content.split(/## Feedback Entry/).slice(1);
const priorityMap = { "High": 0, "Medium": 0, "Low": 0 };

entries.forEach(entry => {
  const text = entry.toLowerCase();
  if (text.includes("not clear") || text.includes("confusing")) priorityMap["Medium"]++;
  if (text.includes("deploy") || text.includes("build failed")) priorityMap["High"]++;
  if (text.includes("feature") || text.includes("add")) priorityMap["Low"]++;
});

console.log("📊 Feedback Priority Summary:");
console.table(priorityMap);
