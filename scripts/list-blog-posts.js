const fs = require("node:fs");

const posts = JSON.parse(fs.readFileSync("jetset_blogs.json", "utf8"));

console.log(`count ${posts.length}`);
for (const [i, post] of posts.entries()) {
  console.log(`\n#${i + 1}`);
  console.log(`slug: ${post.slug}`);
  console.log(`title: ${post.title}`);
  console.log(`image: ${post.image}`);
}

