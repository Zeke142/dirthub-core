import fs from "fs";
import readline from "readline";
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const { Configuration, OpenAIApi } = require("openai");

const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY
});
const openai = new OpenAIApi(config);

const file = "./dirtbrain/logbook-index.md";
const content = fs.readFileSync(file, "utf-8");
const entries = content
  .split("\n")
  .filter(line => line.startsWith("| ") && line.includes("20"))
  .slice(0, 20); // Limit for test

async function embedAndScore(query) {
  const queryEmbed = await getEmbedding(query);

  const scores = await Promise.all(
    entries.map(async entry => {
      const entryEmbed = await getEmbedding(entry);
      const score = cosineSimilarity(queryEmbed, entryEmbed);
      return { entry, score };
    })
  );

  scores.sort((a, b) => b.score - a.score);
  console.table(scores.slice(0, 5));
}

async function getEmbedding(text) {
  const res = await openai.createEmbedding({
    model: "text-embedding-ada-002",
    input: text
  });
  return res.data.data[0].embedding;
}

function cosineSimilarity(a, b) {
  const dot = a.reduce((sum, val, i) => sum + val * b[i], 0);
  const magA = Math.sqrt(a.reduce((sum, val) => sum + val ** 2, 0));
  const magB = Math.sqrt(b.reduce((sum, val) => sum + val ** 2, 0));
  return dot / (magA * magB);
}

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
rl.question("🧠 Ask the Logbook: ", async (q) => {
  await embedAndScore(q);
  rl.close();
});