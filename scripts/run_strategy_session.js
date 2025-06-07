const fs = require("fs");

const logs = fs.readFileSync("./dirtbrain/logbook-index.md", "utf-8");
const feedback = fs.readFileSync("./dirtbrain/user-feedback.md", "utf-8");

const summary = {
  tasksCompleted: (logs.match(/\| Task \|/g) || []).length,
  newIssues: (logs.match(/\| Issue \|/g) || []).length,
  feedbackCount: (feedback.match(/## Feedback Entry/g) || []).length,
  opportunities: []
};

if (feedback.includes("not clear")) summary.opportunities.push("Improve UI clarity (labels/buttons)");
if (logs.includes("plugin")) summary.opportunities.push("Add more modular plugins (e.g. seller, map tool)");
if (logs.includes("PostCSS")) summary.opportunities.push("Explore Tailwind plugin simplification");

console.log("🧠 Monthly Strategy Snapshot:");
console.log(`✅ Tasks Completed: ${summary.tasksCompleted}`);
console.log(`🐞 Issues Logged: ${summary.newIssues}`);
console.log(`📣 Feedback Entries: ${summary.feedbackCount}`);
console.log(`💡 Opportunities:`);
summary.opportunities.forEach((o, i) => console.log(`${i + 1}. ${o}`));