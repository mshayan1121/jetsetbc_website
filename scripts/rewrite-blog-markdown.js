const fs = require("fs");
const path = require("path");

const jsonPath = path.join(__dirname, "..", "jetset_blogs.json");
const data = JSON.parse(fs.readFileSync(jsonPath, "utf8"));

function stripBoilerplate(content) {
  return content
    .replace(/\n\nSave my name, email[^\n]*\n\n/g, "\n\n")
    .replace(/\n\nOur mission at Jetset Business Center[^\n]*\n\nOur mission at Jetset Business Center[^\n]*\.\s*$/s, "")
    .replace(/\n\nOur mission at Jetset Business Center[^\n]*\.\s*$/gm, "")
    .trim();
}

function addBold(text) {
  return text
    .replace(/\b(Dubai|free zone|mainland|flexi desk|business registration in Dubai|Business Bay|Jetset Business Center|Ejari|conference room rental|meeting room|Virtual Ejari)\b/gi, "**$1**")
    .replace(/\b(trade license|business setup|free zones|mainland company)\b/gi, "**$1**");
}

function rewriteToMarkdown(content) {
  let s = stripBoilerplate(content);
  const blocks = s.split(/\n\n+/).map((b) => b.trim()).filter(Boolean);
  const out = [];
  let i = 0;

  // Intro: first 1-3 paragraphs until we hit a clear section start
  const intro = [];
  while (i < blocks.length && i < 4) {
    const p = blocks[i];
    if (/^[1-9]\)\s+[A-Z]|^Q[1-9]:|^1\.\s+[A-Z]/.test(p)) break;
    if (p.length < 100 && /^(Today|Your first|The cost of|Before we|Why is|Here are|To help)/i.test(p) && intro.length >= 1) break;
    intro.push(addBold(p));
    i++;
  }
  if (intro.length) {
    out.push(intro.join("\n\n"));
    out.push("");
  }

  // Section triggers: phrase -> ## heading
  const sectionTriggers = [
    [/^Today, foreigners can own|^Before, they needed|^This is used when you want to operate inside the UAE/i, "Why Dubai? Full Ownership and Mainland vs Free Zone"],
    [/^To start business registration in Dubai, most foreigners only need/i, "What You Need to Start"],
    [/^Many free zones give the license/i, "Speed and Cost"],
    [/^Many people think you must rent a full office/i, "Do You Need a Real Office?"],
    [/^Yes\. You can start your company without flying/i, "Can You Register Remotely?"],
    [/^Dubai banks are serious|^Banks like things simple/i, "Banking and Visas"],
    [/^If you plan to sell inside the UAE/i, "Mainland vs Free Zone: Quick Guide"],
    [/^Jetset Business Center helps with complete/i, "Get Help With Your Setup"],
    [/^The cost of starting a company in Dubai depends/i, "What Affects Your Costs"],
    [/^Your first choice is the business jurisdiction/i, "Jurisdiction: Free Zone vs Mainland"],
    [/^Your chosen activity defines your license type/i, "License Type and Activities"],
    [/^Compare several free zones/i, "Budget Tips"],
    [/^Dubai offers a clear and structured path/i, "Summary"],
    [/^Business Bay is one of Dubai's busiest/i, "Why Business Bay?"],
    [/^A company's address affects how others see it/i, "Credibility and Professional Image"],
    [/^Many startups face tight budgets/i, "Cost-Effective Start"],
    [/^Time matters when building a startup/i, "Ready-to-Use Offices"],
    [/^Startups grow and change quickly/i, "Flexible Terms"],
    [/^Business centers provide on-site support/i, "On-Site Support"],
    [/^Working in a business center places you near/i, "Networking and Collaboration"],
    [/^Remote work has changed how people work/i, "Why Meeting Rooms Matter for Remote Teams"],
    [/^More people now use the rental of meeting rooms/i, "Who Uses Meeting Room Rentals?"],
    [/^A short rental period, like three months/i, "Why a 3-Month Rental Works"],
    [/^Meeting rooms are not only for team talks/i, "How Businesses Use Meeting Rooms"],
    [/^Dubai is not just about tall towers/i, "Why Dubai for Business?"],
    [/^In the past, many investors picked free zones/i, "Mainland, Free Zone, and Offshore in 2025"],
    [/^Not every business needs a physical presence/i, "Offshore Business Setup"],
    [/^Finding the right conference room rental/i, "Why the Right Space Matters"],
    [/^In a city like Dubai/i, "1. Location"],
    [/^Some meetings are small, some are big/i, "2. Room Size and Setup"],
    [/^We've all been in meetings where the internet/i, "3. Tech and Connectivity"],
    [/^No one wants to sit in a dusty room/i, "4. Cleanliness and Comfort"],
    [/^Sometimes you need help setting up the projector/i, "5. On-Site Support"],
    [/^Business plans can change fast/i, "6. Flexible Booking and Pricing"],
    [/^While the basics matter most/i, "7. Extra Amenities"],
    [/^Ejari means "My Rent"|^Ejari means \"My Rent\"/i, "What Is Ejari?"],
    [/^Here's a list of the documents you'll need/i, "Documents Required for Ejari"],
    [/^If you are continuing in the same property/i, "Ejari Renewal"],
    [/^Even though the Ejari process is straightforward/i, "Common Mistakes to Avoid"],
    [/^One of the first and most important decisions/i, "Choosing the Right Business Structure"],
    [/^Depending on your company type and license/i, "Understanding Sponsorship"],
    [/^In Dubai, paperwork and documentation/i, "Documentation and Paperwork"],
    [/^A lot of people try to save money by setting up/i, "Skipping Professional Help"],
    [/^Many business owners start their setup by only looking/i, "Budgeting for Hidden Costs"],
    [/^Every business area or license authority/i, "Choosing the Right Free Zone"],
    [/^If you plan to hire staff in the future/i, "Planning for Visas"],
    [/^Every license in Dubai is connected/i, "Defining Your Business Activity Clearly"],
    [/^Doing business in Dubai\? Planning a meeting/i, "Why Book Near Burj Khalifa?"],
    [/^Dubai is a great place to start a business/i, "Why Business Setup Consultants Matter"],
    [/^Setting up a business in Dubai can be confusing/i, "How Consultants Help"],
    [/^After sorting out the legal stuff/i, "Why Business Bay?"],
    [/^Dubai is often hailed as one of the best places/i, "Why Dubai for Office Space?"],
    [/^Dubai's location is one of its strongest/i, "Strategic Location"],
    [/^Dubai is renowned for its favorable business/i, "Tax Benefits and Ownership"],
    [/^If you're thinking about starting a business in Dubai/i, "Why Business Bay?"],
    [/^Prime Tower Dubai is a tall, stylish building/i, "Prime Tower Dubai"],
    [/^A business center is more than just an office/i, "What a Business Center Offers"],
    [/^Dubai is a global business hub/i, "Why the Right Venue Matters"],
    [/^Selecting the right venue requires/i, "Factors to Consider"],
    [/^Booking a meeting or conference room/i, "How to Book"],
    [/^Finding the right office for rent in Business Bay/i, "Key Considerations"],
    [/^A well-connected office can improve/i, "Location and Connectivity"],
    [/^The size and layout of your office/i, "Size and Layout"],
    [/^When renting an office, it's crucial/i, "Costs Beyond Rent"],
    [/^The lease agreement plays a vital role/i, "Lease Terms"],
    [/^Business Bay is strategically located/i, "Strategic Location"],
    [/^Networking is crucial for business success/i, "Business Ecosystem"],
    [/^So, you've got an important meeting coming up/i, "Why Rent a Meeting Room?"],
    [/^You don't want your team or clients/i, "What to Look For"],
    [/^If you are renting a property in Dubai/i, "What Is Ejari?"],
    [/^Before learning how to do Ejari online/i, "Why Ejari Matters"],
    [/^Once you have the required documents/i, "Steps to Register"],
    [/^The business district of Dubai now serves/i, "Why Coworking in Dubai?"],
    [/^Business Bay is Dubai's commercial heartbeat/i, "Why Prime Tower and Business Bay?"],
  ];

  while (i < blocks.length) {
    const p = blocks[i];

    // FAQ block
    if (/^[1-9]\)\s+[A-Z]|^Q[1-9]:\s|^\d+\.\s+[A-Z][^.?]*\?/.test(p)) {
      out.push("---", "", "## Frequently Asked Questions", "");
      while (i < blocks.length) {
        const line = blocks[i];
        if (!/^[1-9]\)|^Q[1-9]:|^\d+\.\s+/.test(line) && (out.length > 0 && !line.includes("?"))) break;
        const qMatch = line.match(/^([1-9]\)|Q[1-9]:|\d+\.)\s*(.+)/i);
        if (qMatch) {
          const rest = qMatch[2];
          const qEnd = rest.search(/\?\s+[A-Z]/);
          const question = qEnd > 0 ? rest.slice(0, qEnd + 1) : rest.split(/(?<=[.?])\s+/)[0] || rest;
          const answer = qEnd > 0 ? rest.slice(qEnd + 1).trim() : rest.replace(question, "").trim();
          out.push(`- **${question.trim()}** ${answer}`);
        } else {
          out.push(`- ${addBold(line)}`);
        }
        out.push("");
        i++;
      }
      continue;
    }

    let sectionAdded = false;
    for (const [pattern, heading] of sectionTriggers) {
      if (pattern.test(p) && p.length < 400) {
        out.push("---", "", `## ${heading}`, "", addBold(p));
        out.push("");
        i++;
        sectionAdded = true;
        break;
      }
    }
    if (sectionAdded) continue;

    out.push(addBold(p));
    out.push("");
    i++;
  }

  return out.join("\n").replace(/\n{3,}/g, "\n\n").replace(/^\n*---\n\n/, "").trim();
}

data.forEach((post) => {
  post.content = rewriteToMarkdown(post.content);
});

fs.writeFileSync(jsonPath, JSON.stringify(data, null, 2), "utf8");
console.log(`Rewrote ${data.length} blog posts to Markdown.`);
