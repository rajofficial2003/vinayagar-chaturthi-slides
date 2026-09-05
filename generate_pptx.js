const PptxGenJS = require("pptxgenjs");
const path = require("path");

const pptx = new PptxGenJS();

// Slide Layout 16:9
pptx.layout = "LAYOUT_16x9";
pptx.title = "Vinayagar Chaturthi Ulla 2026 - Sponsorship Proposal";
pptx.author = "India Media House";

// Color Palette matching White & Saffron theme while preserving heading text colors
const COLORS = {
  bgCream: "FFFDF9",       // Warm Ivory White Background
  cardBg: "FFFFFF",        // Pure White Card
  saffron: "E65100",       // Deep Saffron Accent
  saffronPrimary: "FF8800",// Saffron Primary
  saffronDark: "C63D00",   // Dark Crimson Saffron
  maroon: "800000",        // Preserved Heading Text Color
  gold: "D4AF37",          // Devotional Gold
  goldLight: "FBBF24",     // Bright Gold
  textDark: "2A2A2A",      // Dark Gray Text
  textMuted: "666666",     // Muted Gray
  red: "DC2626",           // Red
  blue: "0284C7",          // Blue
  purple: "9333EA",        // Purple
  green: "16A34A",         // Green
  border: "FFE0B2"         // Saffron Soft Border
};

const assetsDir = path.join(__dirname, "assets");

// Helper to add slide header for light slides
function addSlideHeader(slide, titleText) {
  slide.addText(`─── ✤ ${titleText.toUpperCase()} ✤ ───`, {
    x: 0.5, y: 0.4, w: 12.33, h: 0.5,
    fontSize: 20, bold: true, color: COLORS.maroon, align: "center", fontFace: "Arial"
  });
}

// Helper to add slide number ribbon
function addRibbon(slide, num) {
  slide.addShape(pptx.shapes.RECTANGLE, {
    x: 12.5, y: 7.0, w: 0.83, h: 0.5,
    fill: { color: COLORS.saffron }
  });
  slide.addText(`${num}`, {
    x: 12.5, y: 7.0, w: 0.83, h: 0.5,
    fontSize: 14, bold: true, color: "FFFFFF", align: "center", fontFace: "Arial"
  });
}

// -------------------------------------------------------------
// SLIDE 1: Cover Page (Rich Saffron Theme)
// -------------------------------------------------------------
const slide1 = pptx.addSlide();
slide1.background = { color: COLORS.saffronDark };

// Border
slide1.addShape(pptx.shapes.RECTANGLE, {
  x: 0.2, y: 0.2, w: 12.93, h: 7.1,
  fill: { color: COLORS.saffronDark }, line: { color: COLORS.gold, width: 3 }
});

// Left Column: Logos & Titles
slide1.addImage({ path: path.join(assetsDir, "india_tamil_logo.jpg"), x: 0.6, y: 0.6, w: 1.0, h: 1.0 });
slide1.addImage({ path: path.join(assetsDir, "india_divine_logo.jpg"), x: 1.8, y: 0.6, w: 1.0, h: 1.0 });

// Main Tamil Title
slide1.addText("விநாயகர் சதுர்த்தி உலா\n2026", {
  x: 0.6, y: 1.8, w: 6.8, h: 1.6,
  fontSize: 34, bold: true, color: "FFFFFF", fontFace: "Arial"
});

// Presented By Block
slide1.addText("PRESENTED BY", {
  x: 0.6, y: 3.5, w: 6.8, h: 0.3,
  fontSize: 11, bold: true, color: COLORS.goldLight, fontFace: "Arial"
});

slide1.addText("INDIA MEDIA HOUSE", {
  x: 0.6, y: 3.8, w: 6.8, h: 0.5,
  fontSize: 22, bold: true, color: "FFFFFF", fontFace: "Arial"
});

slide1.addText("A Divine Step in Tamil Nadu Media Industry Showcasing Cultural Unity towards Celebrating Vinayagar Chaturthi.", {
  x: 0.6, y: 4.4, w: 6.8, h: 0.8,
  fontSize: 12, color: "E2E8F0", fontFace: "Arial"
});

// Live Badge
slide1.addShape(pptx.shapes.RECTANGLE, {
  x: 0.6, y: 5.4, w: 3.4, h: 0.5,
  fill: { color: "000000" }, line: { color: "FFFFFF", width: 1 }
});

slide1.addText("((( LIVE ))) ON  YouTube", {
  x: 0.6, y: 5.4, w: 3.4, h: 0.5,
  fontSize: 12, bold: true, color: "FFFFFF", align: "center", fontFace: "Arial"
});

// Right Image: Golden Vinayagar Idol
slide1.addImage({
  path: path.join(assetsDir, "vinayagar_gold_cover.jpg"),
  x: 7.6, y: 0.5, w: 5.2, h: 6.5
});

addRibbon(slide1, 1);


// -------------------------------------------------------------
// SLIDE 2: Why India Media House?
// -------------------------------------------------------------
const slide2 = pptx.addSlide();
slide2.background = { color: COLORS.bgCream };
addSlideHeader(slide2, "WHY INDIA MEDIA HOUSE?");

// Table of Followers
const tableHeaders2 = [
  { text: "", options: { fill: { color: COLORS.bgCream } } },
  { text: "India Tamil News", options: { fill: { color: COLORS.bgCream }, bold: true, color: COLORS.maroon, align: "center", fontSize: 12 } },
  { text: "India Tamil Divine", options: { fill: { color: COLORS.bgCream }, bold: true, color: COLORS.maroon, align: "center", fontSize: 12 } }
];

const tableRows2 = [
  [
    { text: "YouTube Subscribers", options: { bold: true, color: COLORS.red, fill: { color: COLORS.cardBg } } },
    { text: "64,510", options: { bold: true, align: "center", fill: { color: COLORS.cardBg } } },
    { text: "2,200+", options: { bold: true, align: "center", fill: { color: COLORS.cardBg } } }
  ],
  [
    { text: "Facebook Followers", options: { bold: true, color: COLORS.blue, fill: { color: COLORS.cardBg } } },
    { text: "1,45,033", options: { bold: true, align: "center", fill: { color: COLORS.cardBg } } },
    { text: "15,000+", options: { bold: true, align: "center", fill: { color: COLORS.cardBg } } }
  ],
  [
    { text: "Instagram Followers", options: { bold: true, color: COLORS.purple, fill: { color: COLORS.cardBg } } },
    { text: "1,569,052", options: { bold: true, align: "center", fill: { color: COLORS.cardBg } } },
    { text: "247,744", options: { bold: true, align: "center", fill: { color: COLORS.cardBg } } }
  ]
];

slide2.addTable([tableHeaders2, ...tableRows2], {
  x: 1.0, y: 1.1, w: 11.33, h: 2.4,
  colW: [4.33, 3.5, 3.5],
  border: { pt: 1, color: COLORS.border },
  fontFace: "Arial"
});

// Official Links Section
slide2.addText("OUR OFFICIAL LINKS", {
  x: 1.0, y: 3.8, w: 11.33, h: 0.3,
  fontSize: 11, bold: true, color: COLORS.maroon, align: "center", fontFace: "Arial"
});

const officialLinks = [
  { name: "India Tamil News", url: "https://youtube.com/@IndiaTamilNews" },
  { name: "India Tamil Divine", url: "https://www.youtube.com/@indiadivine24" },
  { name: "India Media House (Facebook)", url: "https://facebook.com/indiamediahouse.in" },
  { name: "India Media House (Instagram)", url: "https://instagram.com/indiamediahouse.in" }
];

officialLinks.forEach((lnk, i) => {
  const row = Math.floor(i / 2);
  const col = i % 2;
  const xPos = 1.0 + col * 5.8;
  const yPos = 4.3 + row * 1.2;

  slide2.addShape(pptx.shapes.RECTANGLE, {
    x: xPos, y: yPos, w: 5.5, h: 1.0,
    fill: { color: COLORS.cardBg }, line: { color: COLORS.border, width: 1 }
  });

  slide2.addText(lnk.name, {
    x: xPos + 0.3, y: yPos + 0.15, w: 5.0, h: 0.3,
    fontSize: 11, bold: true, color: COLORS.maroon, fontFace: "Arial"
  });

  slide2.addText(lnk.url, {
    x: xPos + 0.3, y: yPos + 0.5, w: 5.0, h: 0.3,
    fontSize: 10, color: COLORS.textMuted, fontFace: "Arial", hyperlink: { url: lnk.url }
  });
});

addRibbon(slide2, 2);


// -------------------------------------------------------------
// SLIDE 3: Our Reach & Performance (3 Screenshot Dashboard Cards in Millions)
// -------------------------------------------------------------
const slide3 = pptx.addSlide();
slide3.background = { color: COLORS.bgCream };
addSlideHeader(slide3, "OUR REACH & PERFORMANCE");

slide3.addText("Verified Analytics & High-Impact Viewership Proof (All figures in Millions)", {
  x: 0.5, y: 0.9, w: 12.33, h: 0.3,
  fontSize: 10, color: COLORS.textMuted, align: "center", fontFace: "Arial"
});

// Card 1: India Tamil News Lifetime
slide3.addShape(pptx.shapes.RECTANGLE, {
  x: 0.8, y: 1.3, w: 3.7, h: 4.8,
  fill: { color: COLORS.cardBg }, line: { color: COLORS.border, width: 1 }
});
slide3.addShape(pptx.shapes.RECTANGLE, {
  x: 0.8, y: 1.3, w: 3.7, h: 0.4,
  fill: { color: COLORS.saffron }
});
slide3.addText("INDIA TAMIL NEWS - LIFETIME", {
  x: 0.8, y: 1.3, w: 3.7, h: 0.4,
  fontSize: 10, bold: true, color: "FFFFFF", align: "center", fontFace: "Arial"
});
slide3.addImage({
  path: path.join(assetsDir, "yt_main_lifetime_views.jpg"),
  x: 0.9, y: 1.8, w: 3.5, h: 2.2
});
slide3.addText("HIGHLIGHTED VIEWS:\n40.2M Views\n(40,215,467 Exact • 10.5L Watch Hrs)", {
  x: 0.9, y: 4.1, w: 3.5, h: 1.8,
  fontSize: 11, bold: true, color: COLORS.saffron, align: "center", fontFace: "Arial"
});

// Card 2: India Tamil News 90 Days
slide3.addShape(pptx.shapes.RECTANGLE, {
  x: 4.8, y: 1.3, w: 3.7, h: 4.8,
  fill: { color: COLORS.cardBg }, line: { color: COLORS.border, width: 1 }
});
slide3.addShape(pptx.shapes.RECTANGLE, {
  x: 4.8, y: 1.3, w: 3.7, h: 0.4,
  fill: { color: COLORS.saffron }
});
slide3.addText("INDIA TAMIL NEWS - 90 DAYS", {
  x: 4.8, y: 1.3, w: 3.7, h: 0.4,
  fontSize: 10, bold: true, color: "FFFFFF", align: "center", fontFace: "Arial"
});
slide3.addImage({
  path: path.join(assetsDir, "yt_main_90days_views.jpg"),
  x: 4.9, y: 1.8, w: 3.5, h: 2.2
});
slide3.addText("HIGHLIGHTED VIEWS:\n4.37M Views\n(4,375,079 Exact • 1.4L Watch Hrs)", {
  x: 4.9, y: 4.1, w: 3.5, h: 1.8,
  fontSize: 11, bold: true, color: COLORS.saffron, align: "center", fontFace: "Arial"
});

// Card 3: India Tamil Divine Lifetime
slide3.addShape(pptx.shapes.RECTANGLE, {
  x: 8.8, y: 1.3, w: 3.7, h: 4.8,
  fill: { color: COLORS.cardBg }, line: { color: COLORS.border, width: 1 }
});
slide3.addShape(pptx.shapes.RECTANGLE, {
  x: 8.8, y: 1.3, w: 3.7, h: 0.4,
  fill: { color: COLORS.saffron }
});
slide3.addText("INDIA TAMIL DIVINE - LIFETIME", {
  x: 8.8, y: 1.3, w: 3.7, h: 0.4,
  fontSize: 10, bold: true, color: "FFFFFF", align: "center", fontFace: "Arial"
});
slide3.addImage({
  path: path.join(assetsDir, "yt_divine_lifetime_views.jpg"),
  x: 8.9, y: 1.8, w: 3.5, h: 2.2
});
slide3.addText("HIGHLIGHTED VIEWS:\n0.78M Views\n(788,019 Exact • 11.0K Watch Hrs)", {
  x: 8.9, y: 4.1, w: 3.5, h: 1.8,
  fontSize: 11, bold: true, color: COLORS.saffron, align: "center", fontFace: "Arial"
});

// Meta Performance Strip
slide3.addShape(pptx.shapes.RECTANGLE, {
  x: 0.8, y: 6.3, w: 11.7, h: 0.5,
  fill: { color: COLORS.cardBg }, line: { color: COLORS.border, width: 1 }
});
slide3.addText("META SOCIAL: 1.8M Total Views (+320.2%) | 1.2M Reach (+392.7%) | IG: 1.56M Views | FB: 0.24M Views", {
  x: 0.8, y: 6.3, w: 11.7, h: 0.5,
  fontSize: 10, bold: true, color: COLORS.saffron, align: "center", fontFace: "Arial"
});

addRibbon(slide3, 3);


// -------------------------------------------------------------
// SLIDE 4: Advertisement Placements
// -------------------------------------------------------------
const slide4 = pptx.addSlide();
slide4.background = { color: COLORS.bgCream };
addSlideHeader(slide4, "ADVERTISEMENT PLACEMENTS");

slide4.addText("Multiple high-visibility ad opportunities in YouTube & Meta", {
  x: 0.5, y: 0.9, w: 12.33, h: 0.4,
  fontSize: 11, color: COLORS.textMuted, align: "center", fontFace: "Arial"
});

const adTypesList = [
  { title: "VJ ANCHOR SHOUT OUT", limit: "1 Brand Only", color: COLORS.red },
  { title: "VOICE OVER AD", limit: "3 Brands Only", color: "EA580C" },
  { title: "L-BAND & BANNER", limit: "15 + 15 Brands Only", color: COLORS.green },
  { title: "ROTATING LOGO", limit: "15 Brands Only", color: COLORS.blue }
];

adTypesList.forEach((ad, idx) => {
  const yPos = 1.5 + idx * 1.15;

  slide4.addShape(pptx.shapes.RECTANGLE, {
    x: 1.5, y: yPos, w: 10.33, h: 0.95,
    fill: { color: COLORS.cardBg }, line: { color: COLORS.border, width: 1 }
  });

  slide4.addText(ad.title, {
    x: 2.0, y: yPos + 0.25, w: 6.0, h: 0.4,
    fontSize: 16, bold: true, color: COLORS.textDark, fontFace: "Arial"
  });

  slide4.addShape(pptx.shapes.RECTANGLE, {
    x: 8.5, y: yPos + 0.2, w: 2.8, h: 0.55,
    fill: { color: COLORS.saffronLight }, line: { color: COLORS.border, width: 1 }
  });

  slide4.addText(ad.limit, {
    x: 8.5, y: yPos + 0.2, w: 2.8, h: 0.55,
    fontSize: 12, bold: true, color: COLORS.saffron, align: "center", fontFace: "Arial"
  });
});

// Footer Pill
slide4.addShape(pptx.shapes.RECTANGLE, {
  x: 2.5, y: 6.2, w: 8.33, h: 0.6,
  fill: { color: COLORS.saffron }
});

slide4.addText("All placements are visible in both YouTube , Facebook & Instagram", {
  x: 2.5, y: 6.2, w: 8.33, h: 0.6,
  fontSize: 12, bold: true, color: "FFFFFF", align: "center", fontFace: "Arial"
});

addRibbon(slide4, 4);


// -------------------------------------------------------------
// SLIDE 5: Ad Placements Preview
// -------------------------------------------------------------
const slide5 = pptx.addSlide();
slide5.background = { color: COLORS.bgCream };
addSlideHeader(slide5, "AD PLACEMENTS PREVIEW");

slide5.addText("Where your brand will appear", {
  x: 0.5, y: 0.9, w: 12.33, h: 0.4,
  fontSize: 11, color: COLORS.textMuted, align: "center", fontFace: "Arial"
});

// Player Mockup Box
slide5.addShape(pptx.shapes.RECTANGLE, {
  x: 1.5, y: 1.4, w: 10.33, h: 5.2,
  fill: { color: "000000" }, line: { color: "333333", width: 2 }
});

slide5.addImage({
  path: path.join(assetsDir, "vinayagar_gold_cover.jpg"),
  x: 1.5, y: 1.4, w: 10.33, h: 5.2
});

// Overlay callouts
// 1. Rotating Logo (Top Right Corner)
slide5.addShape(pptx.shapes.RECTANGLE, {
  x: 9.3, y: 1.6, w: 2.2, h: 0.8,
  fill: { color: "000000" }, line: { color: COLORS.gold, width: 1.5 }
});
slide5.addText("ROTATING LOGO\n[YOUR LOGO]\n(Top Right Corner)", {
  x: 9.3, y: 1.6, w: 2.2, h: 0.8,
  fontSize: 9, bold: true, color: COLORS.goldLight, align: "center", fontFace: "Arial"
});

// 2. Voice Over Ad (Top Left)
slide5.addShape(pptx.shapes.RECTANGLE, {
  x: 3.2, y: 1.6, w: 2.8, h: 0.7,
  fill: { color: "000000" }, line: { color: "FFFFFF", width: 1 }
});
slide5.addText("VOICE OVER AD\n(Audio Mention in VO)", {
  x: 3.2, y: 1.6, w: 2.8, h: 0.7,
  fontSize: 9, bold: true, color: "FFFFFF", align: "center", fontFace: "Arial"
});

// 3. VJ Anchor Shout Out (Screen Center - Big Size)
slide5.addShape(pptx.shapes.RECTANGLE, {
  x: 4.4, y: 3.0, w: 4.6, h: 1.5,
  fill: { color: "000000" }, line: { color: COLORS.saffronPrimary, width: 3 }
});
slide5.addText("VJ ANCHOR SHOUT OUT\n(Prominent Center Screen Mention)", {
  x: 4.4, y: 3.0, w: 4.6, h: 1.5,
  fontSize: 14, bold: true, color: COLORS.goldLight, align: "center", fontFace: "Arial"
});

// 4. L-Band Ad (Left Top to Bottom Right L-Shape Frame)
// Vertical Left Strip
slide5.addShape(pptx.shapes.RECTANGLE, {
  x: 1.5, y: 1.4, w: 1.4, h: 4.6,
  fill: { color: COLORS.saffron }, line: { color: COLORS.gold, width: 1 }
});
slide5.addText("L-BAND AD\n(Left Strip)", {
  x: 1.5, y: 2.8, w: 1.4, h: 1.5,
  fontSize: 11, bold: true, color: "FFFFFF", align: "center", fontFace: "Arial"
});

// Horizontal Bottom Strip
slide5.addShape(pptx.shapes.RECTANGLE, {
  x: 1.5, y: 6.0, w: 10.33, h: 0.6,
  fill: { color: COLORS.saffron }, line: { color: COLORS.gold, width: 1 }
});
slide5.addText("L-BAND & BANNER ── YOUR BRAND HERE ── (Bottom Banner Strip)", {
  x: 1.5, y: 6.0, w: 10.33, h: 0.6,
  fontSize: 11, bold: true, color: "FFFFFF", align: "center", fontFace: "Arial"
});

addRibbon(slide5, 5);


// -------------------------------------------------------------
// SLIDE 6: Special Pricing
// -------------------------------------------------------------
const slide6 = pptx.addSlide();
slide6.background = { color: COLORS.bgCream };

slide6.addText("VINAYAGAR CHATURTHI SPECIAL PRICING", {
  x: 0.5, y: 0.4, w: 12.33, h: 0.5,
  fontSize: 22, bold: true, color: COLORS.maroon, align: "center", fontFace: "Arial"
});

slide6.addText("Exclusive Festival Offer – Limited Slots Only!", {
  x: 0.5, y: 0.9, w: 12.33, h: 0.4,
  fontSize: 11, color: COLORS.textMuted, align: "center", fontFace: "Arial"
});

// Pricing Table
const tableHeaders6 = [
  { text: "AD TYPE", options: { fill: { color: COLORS.saffron }, bold: true, color: "FFFFFF", fontSize: 11 } },
  { text: "USUAL MARKET PRICE (INR)", options: { fill: { color: COLORS.saffron }, bold: true, color: "FFFFFF", align: "center", fontSize: 11 } },
  { text: "VINAYAGAR CHATURTHI SPECIAL PRICE (INR)", options: { fill: { color: COLORS.saffronDark }, bold: true, color: COLORS.goldLight, align: "center", fontSize: 11 } }
];

const tableRows6 = [
  [
    { text: "VJ ANCHOR SHOUT OUT (1 Brand Only)", options: { bold: true, fill: { color: COLORS.cardBg } } },
    { text: "₹8,000", options: { align: "center", color: "000000", strike: true, fill: { color: COLORS.cardBg } } },
    { text: "₹5,000 / per ad", options: { bold: true, align: "center", color: COLORS.saffron, fontSize: 13, fill: { color: COLORS.cardBg } } }
  ],
  [
    { text: "VOICE OVER AD (3 Brands Only)", options: { bold: true, fill: { color: COLORS.cardBg } } },
    { text: "₹6,000", options: { align: "center", color: "000000", strike: true, fill: { color: COLORS.cardBg } } },
    { text: "₹4,000 / per ad", options: { bold: true, align: "center", color: COLORS.saffron, fontSize: 13, fill: { color: COLORS.cardBg } } }
  ],
  [
    { text: "L-BAND & BANNER (15 + 15 Brands Only)", options: { bold: true, fill: { color: COLORS.cardBg } } },
    { text: "₹4,000", options: { align: "center", color: "000000", strike: true, fill: { color: COLORS.cardBg } } },
    { text: "₹2,500 / per ad", options: { bold: true, align: "center", color: COLORS.saffron, fontSize: 13, fill: { color: COLORS.cardBg } } }
  ],
  [
    { text: "ROTATING LOGO (15 Brands Only)", options: { bold: true, fill: { color: COLORS.cardBg } } },
    { text: "₹3,000", options: { align: "center", color: "000000", strike: true, fill: { color: COLORS.cardBg } } },
    { text: "₹1,500 / per ad", options: { bold: true, align: "center", color: COLORS.saffron, fontSize: 13, fill: { color: COLORS.cardBg } } }
  ]
];

slide6.addTable([tableHeaders6, ...tableRows6], {
  x: 1.0, y: 1.5, w: 11.33, h: 3.8,
  colW: [5.33, 3.0, 3.0],
  border: { pt: 1, color: COLORS.border },
  fontFace: "Arial"
});

// Footer Pill
slide6.addShape(pptx.shapes.RECTANGLE, {
  x: 1.5, y: 5.7, w: 10.33, h: 0.6,
  fill: { color: COLORS.saffron }
});

slide6.addText("All prices are inclusive of placement in YouTube , Facebook & Instagram", {
  x: 1.5, y: 5.7, w: 10.33, h: 0.6,
  fontSize: 11, bold: true, color: "FFFFFF", align: "center", fontFace: "Arial"
});

addRibbon(slide6, 6);


// -------------------------------------------------------------
// SLIDE 7: Partner With Us
// -------------------------------------------------------------
const slide7 = pptx.addSlide();
slide7.background = { color: COLORS.bgCream };
addSlideHeader(slide7, "PARTNER WITH US");

slide7.addText("Be a part of the biggest cultural celebration and showcase your brand to lakhs of audiences!", {
  x: 0.5, y: 0.9, w: 12.33, h: 0.4,
  fontSize: 11, color: COLORS.textMuted, align: "center", fontFace: "Arial"
});

// Benefits Grid
const benefits = ["Massive Reach", "High Engagement", "Brand Visibility", "Trusted Channels"];
benefits.forEach((ben, i) => {
  const xPos = 1.0 + i * 2.95;
  slide7.addShape(pptx.shapes.RECTANGLE, {
    x: xPos, y: 1.5, w: 2.6, h: 0.8,
    fill: { color: COLORS.cardBg }, line: { color: COLORS.border, width: 1 }
  });
  slide7.addText(ben, {
    x: xPos, y: 1.5, w: 2.6, h: 0.8,
    fontSize: 11, bold: true, color: COLORS.textDark, align: "center", fontFace: "Arial"
  });
});

// Callout Banner
slide7.addShape(pptx.shapes.RECTANGLE, {
  x: 1.0, y: 2.6, w: 11.33, h: 1.0,
  fill: { color: COLORS.saffron }
});

slide7.addText("விநாயகர் சதுர்த்தி உலா 2026\nLet's celebrate together. Let's grow together.", {
  x: 1.0, y: 2.6, w: 11.33, h: 1.0,
  fontSize: 16, bold: true, color: "FFFFFF", align: "center", fontFace: "Arial"
});

// Booking Details
slide7.addText("SLOT BOOKINGS", {
  x: 1.0, y: 3.9, w: 6.0, h: 0.3,
  fontSize: 11, bold: true, color: COLORS.maroon, fontFace: "Arial"
});

slide7.addText("📞 +91 9XXXXXXXXX\n💬 +91 9XXXXXXXXX\n✉️ contact@indiamediahouse.in\n🌐 www.indiamediahouse.in", {
  x: 1.0, y: 4.3, w: 6.0, h: 1.8,
  fontSize: 12, color: COLORS.textDark, fontFace: "Arial"
});

// Right Image: Vinayagar Line Art
slide7.addImage({
  path: path.join(assetsDir, "vinayagar_saffron_black.jpg"),
  x: 8.5, y: 3.9, w: 2.2, h: 2.2
});

// Footer Logos
slide7.addImage({ path: path.join(assetsDir, "india_tamil_logo.jpg"), x: 4.5, y: 6.3, w: 0.5, h: 0.5 });
slide7.addText("INDIA MEDIA HOUSE", {
  x: 5.1, y: 6.3, w: 3.0, h: 0.5,
  fontSize: 12, bold: true, color: COLORS.maroon, align: "center", fontFace: "Arial"
});
slide7.addImage({ path: path.join(assetsDir, "india_divine_logo.jpg"), x: 8.2, y: 6.3, w: 0.5, h: 0.5 });

addRibbon(slide7, 7);


// Save presentation
const outputPath = path.join(__dirname, "Vinayagar_Chaturthi_2026_Sponsorship_Proposal.pptx");
pptx.writeFile({ fileName: outputPath }).then((fileName) => {
  console.log(`PPTX successfully generated at: ${fileName}`);
}).catch((err) => {
  console.error("Error generating PPTX:", err);
});
