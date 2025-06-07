const fs = require("fs");

const logs = fs.readFileSync("./dirtbrain/logbook-index.md", "utf-8");
const feedback = fs.readFileSync("./dirtbrain/user-feedback.md", "utf-8");

const report = {
  totalTasks: (logs.match(/\| Task \|/g) || []).length,
  totalIssues: (logs.match(/\| Issue \|/g) || []).length,
  totalFeedback: (feedback.match(/## Feedback Entry/g) || []).length,
  recentThemes: []
};

if (logs.includes("PostCSS")) report.recentThemes.push("PostCSS issues");
if (logs.includes("SWC")) report.recentThemes.push("SWC warnings");
if (feedback.includes("not clear")) report.recentThemes.push("UI confusion");
if (feedback.includes("deploy")) report.recentThemes.push("Deployment feedback");

console.log("📚 DirtHub Learning Report:");
console.log(`📝 Tasks: ${report.totalTasks}`);
console.log(`🐞 Issues: ${report.totalIssues}`);
console.log(`📣 Feedback: ${report.totalFeedback}`);
console.log(`🧠 Themes:`, report.recentThemes);