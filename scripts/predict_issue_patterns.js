// scripts/predict_issue_patterns.js

const fs = require("fs");
const file = "./dirtbrain/logbook-index.md";
const content = fs.readFileSync(file, "utf-8");

// Extract all issues using the tag format
const issues = content.match(/\| Issue \| \d{4}-\d{2}-\d{2}([\s\S]+?)(?=\n\| |$)/g);
const tagCounts = {};

issues?.forEach(issue => {
  if (issue.includes("PostCSS")) tagCounts["PostCSS"] = (tagCounts["PostCSS"] || 0) + 1;
  if (issue.includes("Vercel")) tagCounts["Vercel Deploy"] = (tagCounts["Vercel Deploy"] || 0) + 1;
  if (issue.includes("dark mode")) tagCounts["Dark Mode"] = (tagCounts["Dark Mode"] || 0) + 1;
  if (issue.includes("SWC")) tagCounts["SWC Cache"] = (tagCounts["SWC Cache"] || 0) + 1;
});

console.log("🧠 Top recurring issues:");
console.table(tagCounts);
