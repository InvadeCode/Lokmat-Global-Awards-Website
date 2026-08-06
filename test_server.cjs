var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// server.ts
var server_exports = {};
module.exports = __toCommonJS(server_exports);
var import_express = __toESM(require("express"), 1);
var import_path = __toESM(require("path"), 1);
var events = [
  {
    id: "7",
    title: "Lokmat Digital Transformation Summit",
    date: "2026-09-10",
    location: "Bangalore, Karnataka",
    description: "A premier summit bringing together tech leaders, innovators, and policymakers to discuss the roadmap for India's digital future.",
    category: "Upcoming Summit",
    imageUrl: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format&fit=crop&q=80",
    createdAt: Date.now() - 5e3
  },
  {
    id: "4",
    title: "Lokmat Global Youth Conclave",
    date: "2026-11-15",
    location: "New Delhi, India",
    description: "An interactive platform for the youth to engage with global leaders and discuss the future of technology, entrepreneurship, and sustainable growth.",
    category: "Upcoming Conclave",
    imageUrl: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format&fit=crop&q=80",
    createdAt: Date.now() - 1e4
  },
  {
    id: "1",
    title: "Lokmat Global Economic Convention \u2013 Singapore, 2024",
    date: "2024",
    location: "Singapore",
    description: "Held at the Shangri-La Hotel, this edition marked the first Lokmat Global Economic Convention, evolving beyond an awards ceremony into a platform for dialogue. It brought together business leaders, policymakers, and innovators to discuss global economic trends, entrepreneurship, and social impact. The \u201Cconvention\u201D format enabled panel discussions, exchanges, and actionable insights, positioning Lokmat as not just a recogniser of excellence, but a facilitator of global economic thought leadership.",
    category: "Past Convention",
    imageUrl: "https://static.wixstatic.com/media/548938_e7d535855ae14a3eab331ff35834918c~mv2.jpg",
    videoUrl: "https://video.wixstatic.com/video/548938_7509a0a87488442ca70f19ff9821dc87/1080p/mp4/file.mp4",
    createdAt: Date.now() - 6e4
  },
  {
    id: "dubai-2023",
    title: "Lokmat International Awards \u2013 Dubai, 2023",
    date: "2023",
    location: "Dubai",
    description: "The Dubai edition marked Lokmat\u2019s global debut, transforming the awards into an international platform of prestige and influence. Hosted at the Grand Hyatt, it brought together leaders across sectors and geographies. Its defining strength was storytelling\u2014each awardee\u2019s journey was presented with narrative depth and visual richness. As the first international edition, it established a bold, inclusive vision, blending recognition with cross-cultural dialogue.",
    category: "Past Award",
    imageUrl: "https://static.wixstatic.com/media/548938_e27482ebd1ef499db675193aa77055e0~mv2.jpg",
    videoUrl: "https://video.wixstatic.com/video/548938_fe4a1e10b26b44e6bfde7aa94966bd3b/480p/mp4/file.mp4",
    gallery: [
      "https://static.wixstatic.com/media/548938_e27482ebd1ef499db675193aa77055e0~mv2.jpg",
      "https://static.wixstatic.com/media/548938_2f1808df0b0b4e80a0ba733650a0db15~mv2.jpg",
      "https://static.wixstatic.com/media/548938_6dd00c145aac47b6bdf40b683f982968~mv2.jpg",
      "https://static.wixstatic.com/media/548938_a14443078d4b410191b30a24d8839c04~mv2.jpg",
      "https://static.wixstatic.com/media/548938_ec71c951ee4a481fa68dcb6d95d01b33~mv2.jpg",
      "https://static.wixstatic.com/media/548938_7bb51081bba74cdf921b3bc4cb4935a0~mv2.jpg"
    ],
    createdAt: Date.now() - 65e3
  },
  {
    id: "hong-kong-macau-2025",
    title: "Lokmat Global Convention \u2013 Summit & Awards, Hong Kong & Macau, 2025",
    date: "2025",
    location: "Hong Kong & Macau",
    description: "This edition marked Lokmat\u2019s strategic entry into the Greater China region, positioning the platform within a key global economic corridor. Hosted in Hong Kong, it brought together voices from India across business, policy, and industry, reflecting the country\u2019s global outlook and ambitions. The convention emphasized presence and engagement, creating visibility for Indian leadership while fostering dialogue on international markets, cross-border opportunities, and the evolving role of India on the global stage.",
    category: "Past Summit & Awards",
    imageUrl: "https://static.wixstatic.com/media/548938_c154eed85ef3434684d993283d8b3f5c~mv2.jpg",
    videoUrl: "https://video.wixstatic.com/video/548938_a451c54c18a848bfb0c1862c682082fd/1080p/mp4/file.mp4",
    gallery: [
      "https://static.wixstatic.com/media/548938_c154eed85ef3434684d993283d8b3f5c~mv2.jpg",
      "https://static.wixstatic.com/media/548938_30e8b7fde488472a881490e41fe8e18a~mv2.jpg",
      "https://static.wixstatic.com/media/548938_fab36fabbc74484b9d4f9a66702fef69~mv2.jpg",
      "https://static.wixstatic.com/media/548938_007934490b504024afc2cc6ccc472252~mv2.jpg",
      "https://static.wixstatic.com/media/548938_29614dff8fbb4da69212e1af35d7961e~mv2.jpg",
      "https://static.wixstatic.com/media/548938_11904c4021e84c8ead2f68bd201bbe9c~mv2.jpg"
    ],
    createdAt: Date.now() - 67e3
  },
  {
    id: "london-2025",
    title: "Lokmat Global Economic Convention \u2013 London, 2025",
    date: "2025",
    location: "London",
    description: "Held at The Savoy, London, this edition elevated the Lokmat Global Economic Convention to a wider global stage, building on its Singapore debut. It brought together influential voices from politics, business, and social impact, alongside prominent global Indian leaders, creating a powerful confluence of perspectives. The platform enabled meaningful dialogue on economic direction, leadership, and responsibility, while recognitions such as Bharat Bhushan, Kohinoor of India Award, Maharashtra Ratna  and Global Sakhi Award added ceremonial prestige and gravitas.",
    category: "Past Convention",
    imageUrl: "https://static.wixstatic.com/media/548938_01de16ecda2648ee8f744a76a35e1a11~mv2.jpg",
    videoUrl: "https://video.wixstatic.com/video/548938_9fe3ce3c905f4b5697077579576aa818/1080p/mp4/file.mp4",
    gallery: [
      "https://static.wixstatic.com/media/548938_01de16ecda2648ee8f744a76a35e1a11~mv2.jpg",
      "https://static.wixstatic.com/media/548938_1a80b09511e349ce901734792adee261~mv2.jpg",
      "https://static.wixstatic.com/media/548938_df252ce18e1b452fa31ce152c358856a~mv2.jpg",
      "https://static.wixstatic.com/media/548938_aea6244b1b4647ab81f194a1e49b41cd~mv2.jpg",
      "https://static.wixstatic.com/media/548938_1024fa5c4e6b41709f36a98f7d398d3a~mv2.jpg",
      "https://static.wixstatic.com/media/548938_677525051cc843be800ff94bdefbc0ef~mv2.jpg"
    ],
    createdAt: Date.now() - 68e3
  },
  {
    id: "cairo-2026",
    title: "Lokmat One World Summit and Awards \u2013 Cairo, 2026",
    date: "2026",
    location: "Cairo",
    description: "Held in Cairo, this edition further strengthened the One World Summit vision, bringing together global leaders, innovators, and industry voices on a shared platform. It emphasized cross-industry dialogue and collaborative thinking, blending recognition with meaningful intellectual exchange. Set against a city rich in civilizational legacy, the summit underscored leadership, innovation, and societal impact, while setting the stage for future editions, including the upcoming Mauritius chapter.",
    category: "Past Summit & Awards",
    imageUrl: "https://static.wixstatic.com/media/548938_f48ad9abc61a4ff1bb526c86dd36123c~mv2.jpg",
    videoUrl: "https://video.wixstatic.com/video/548938_52570e309bdb42edac5e01f01a264d5f/1080p/mp4/file.mp4",
    gallery: [
      "https://static.wixstatic.com/media/548938_f48ad9abc61a4ff1bb526c86dd36123c~mv2.jpg",
      "https://static.wixstatic.com/media/548938_e7d3e1979a4744b79da66690874091b9~mv2.jpg",
      "https://static.wixstatic.com/media/548938_e5cba0d41a6d4055abe0f39a47e999af~mv2.jpg",
      "https://static.wixstatic.com/media/548938_4726a3324014489a9fc72f013ab14bfe~mv2.jpg",
      "https://static.wixstatic.com/media/548938_fb341ebfdd434a53bb8b88849b274423~mv2.jpg",
      "https://static.wixstatic.com/media/548938_b0499c9230344b5aa1cba0ac802d8880~mv2.jpg"
    ],
    createdAt: Date.now() - 69e3
  },
  {
    id: "baku-2024",
    title: "Lokmat One World Summit and Awards \u2013 Baku, 2024",
    date: "2024-11-20",
    location: "Baku, Azerbaijan",
    description: "Hosted at the iconic Flame Towers, this was the first edition of the Lokmat One World Summit and Awards, built on the idea of uniting diverse leaders under one global vision. The \u201COne World\u201D philosophy emphasized collaboration across industries, cultures, and nations. Bringing together over 150 leaders, it blended recognition with discussions on sustainability, innovation, and progress, creating a platform where challenges and shared futures could be addressed collectively.",
    category: "Past Summit & Awards",
    imageUrl: "https://static.wixstatic.com/media/548938_31fa24f8914e4eb19bd3b336095f4a0b~mv2.jpg",
    videoUrl: "https://video.wixstatic.com/video/548938_acb9d7cf46164d29abd916abcbf3bae3/1080p/mp4/file.mp4",
    gallery: [
      "https://static.wixstatic.com/media/548938_31fa24f8914e4eb19bd3b336095f4a0b~mv2.jpg",
      "https://static.wixstatic.com/media/548938_7c6fc72928a346979bc09fc548fb6f2c~mv2.jpg",
      "https://static.wixstatic.com/media/548938_178658f08f6d487697300102e2df05ed~mv2.jpg",
      "https://static.wixstatic.com/media/548938_df3137aca94d4ffdb8ec6f3730c99f92~mv2.jpg",
      "https://static.wixstatic.com/media/548938_60d5ac560b6c4236a2aba9cd75a4c542~mv2.jpg",
      "https://static.wixstatic.com/media/548938_e72e0a23d7194c1cb1497c0c0fc99b6c~mv2.jpg"
    ],
    createdAt: Date.now() - 7e4
  }
];
async function startServer() {
  const app = (0, import_express.default)();
  const PORT = 4001;
  app.use(import_express.default.json());
  app.get("/api/events", (req, res) => {
    const sortedEvents = [...events].sort((a, b) => b.createdAt - a.createdAt);
    res.json(sortedEvents);
  });
  app.post("/api/events", (req, res) => {
    const newEvent = {
      ...req.body,
      id: Math.random().toString(36).substring(2, 9),
      createdAt: Date.now()
    };
    events.push(newEvent);
    res.status(201).json(newEvent);
  });
  const isProduction = process.env.NODE_ENV === "production" || process.argv.some((arg) => arg.includes("server.cjs"));
  if (!isProduction) {
    const { createServer: createViteServer } = await import("vite");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa"
    });
    app.use(vite.middlewares);
  } else {
    const distPath = import_path.default.join(process.cwd(), "dist");
    app.use(import_express.default.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(import_path.default.join(distPath, "index.html"));
    });
  }
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}
startServer();
//# sourceMappingURL=server.cjs.map
