const { execSync } = require("child_process");

const input = process.argv.slice(2).join(" ");
console.log(`🧠 Max is checking the Brain for: "${input}"`);

try {
  const result = execSync(`node scripts/query_dirtbrain.js ${input}`, { encoding: "utf8" });
  console.log(result);
} catch (err) {
  console.error("❌ Could not retrieve from Brain:", err.message);
}