const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "..", "jetset_blogs.json");
const data = JSON.parse(fs.readFileSync(filePath, "utf8"));

function normalizeAnswerStart(answer) {
  let out = answer.trim();
  out = out.replace(/^es\.\s*/i, "Yes. ");
  out = out.replace(/^o\.\s*/i, "No. ");
  out = out.replace(/^ost\s+/i, "Most ");
  out = out.replace(/^ubai\s+/i, "Dubai ");
  out = out.replace(/^t depends\.\s*/i, "It depends. ");
  out = out.replace(/^bsolutely\.\s*/i, "Absolutely. ");
  out = out.replace(/^ndeed\.\s*/i, "Indeed. ");
  return out;
}

function normalizeFaqLine(line) {
  const cleaned = line.replace(/^\s*-\s+/, "").replace(/\*\*/g, "").trim();
  const qIdx = cleaned.indexOf("?");
  if (qIdx === -1) return `- ${cleaned}`;

  const question = cleaned.slice(0, qIdx + 1).trim();
  let answer = cleaned.slice(qIdx + 1).trim();
  answer = normalizeAnswerStart(answer);

  if (!answer) {
    return `- **${question}**`;
  }
  return `- **${question}** ${answer}`;
}

let updatedPosts = 0;

for (const post of data) {
  if (!post.content || !post.content.includes("## Frequently Asked Questions")) {
    continue;
  }

  const parts = post.content.split("## Frequently Asked Questions");
  const before = parts[0].trimEnd();
  const after = parts.slice(1).join(" ").replace(/\r/g, "");

  const rawLines = after.split("\n").map((l) => l.trim()).filter(Boolean);
  const faqBulletLines = rawLines.filter((line) => line.startsWith("- "));

  if (faqBulletLines.length === 0) {
    continue;
  }

  const normalizedBullets = faqBulletLines.map(normalizeFaqLine);
  const divider = before.endsWith("---") ? "" : "\n\n---";
  post.content = `${before}${divider}\n\n## Frequently Asked Questions\n\n${normalizedBullets.join("\n\n")}`;
  updatedPosts += 1;
}

fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf8");
console.log(`Normalized FAQ formatting in ${updatedPosts} posts.`);
