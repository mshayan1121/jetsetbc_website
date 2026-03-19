const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "..", "jetset_blogs.json");
const data = JSON.parse(fs.readFileSync(filePath, "utf8"));

const fill = {
  "top-benefits-of-choosing-business-centers-in-business-bay-for-your-startup": {
    "What makes Business Bay": "Business Bay is central, well-connected, and surrounded by key commercial services, which helps startups build credibility and operate efficiently.",
    "Can new businesses eventually grow": "Yes. Most business centers offer scalable options so you can move to larger offices or add desks as your team expands.",
    "Does Jetset Business Center assist with setting up a business": "Yes. Jetset supports setup needs like licensing, registration guidance, and day-to-day office services for new businesses.",
  },
  "the-future-of-business-setup-in-dubai-trends-to-watch-in-2025": {
    "What’s the main difference between mainland, free zone, and offshore setup": "Mainland allows direct UAE market access, free zones focus on simplified setup and international trade benefits, and offshore structures are ideal for holding assets or international operations without a local physical office.",
  },
  "how-to-choose-and-book-the-right-meeting-or-conference-room-in-dubai": {
    "How much does it cost to rent a meeting or conference room in Dubai": "Pricing depends on location, room size, and included amenities, with options ranging from affordable hourly rates to premium full-day packages.",
    "Are catering services available in rented meeting rooms": "Yes. Many venues offer tea, coffee, snacks, and full catering add-ons based on your event requirements.",
    "Do meeting rooms in Dubai come with video conferencing facilities": "Most professional venues include video conferencing, screens, and high-speed internet for hybrid and remote collaboration.",
  },
};

let updated = 0;

for (const post of data) {
  const mapping = fill[post.slug];
  if (!mapping || !post.content.includes("## Frequently Asked Questions")) {
    continue;
  }

  const lines = post.content.split("\n");
  let changed = false;

  for (let i = 0; i < lines.length; i += 1) {
    const line = lines[i].trim();
    if (!line.startsWith("- **") || !line.endsWith("**")) {
      continue;
    }

    const question = line.slice(4, -2);
    const key = Object.keys(mapping).find((k) => question.startsWith(k));
    if (!key) continue;

    lines[i] = `${line} ${mapping[key]}`;
    changed = true;
  }

  if (changed) {
    post.content = lines.join("\n");
    updated += 1;
  }
}

fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf8");
console.log(`Filled missing FAQ answers in ${updated} posts.`);
