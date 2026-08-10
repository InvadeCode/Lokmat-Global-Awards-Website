import React from "react";
import { LokmatEvent } from "@/src/types";

interface Winner {
  id: string;
  name: string;
  designation: string;
  image: string;
}

interface AwardData {
  awardName: string;
  awardSubtitle?: string;
  trophyImage: string;
  winners: Winner[];
}

const defaultWinners1: Winner[] = [
  { id: "1", name: "Rajesh Sharma", designation: "Managing Director, Apex Global", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400" },
  { id: "2", name: "Anita Kulkarni", designation: "Founder, Innovate Tech", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400" },
  { id: "3", name: "Vikramaditya Roy", designation: "CEO, Horizon Ventures", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400" },
  { id: "4", name: "Sunita Deshmukh", designation: "Group President, FinCorp", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400" },
  { id: "5", name: "Dr. Arvind Patel", designation: "Chairman, LifeCare Health", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400" },
  { id: "6", name: "Priya Nair", designation: "Global Partner, Matrix Law", image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&q=80&w=400" },
  { id: "7", name: "Rohan Kapoor", designation: "Co-Founder, GreenGrid Power", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400" },
  { id: "8", name: "Meera Sen", designation: "Executive VP, Global Logistics", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400" },
  { id: "9", name: "Sanjay Joshi", designation: "Chief Architect, Urban Build", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400" },
  { id: "10", name: "Kavita Malhotra", designation: "Director, Brand Strategy", image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=400" }
];

const defaultWinners2: Winner[] = [
  { id: "1", name: "Tan Ah Hock", designation: "Managing Director, Lion City Holdings", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400" },
  { id: "2", name: "Smita Deshpande", designation: "CEO, FinTech Global", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400" },
  { id: "3", name: "Ketan Parekh", designation: "Group Chairman, Parekh Enterprises", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400" },
  { id: "4", name: "Michelle Lim", designation: "Founder, ASEAN Green Future", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400" },
  { id: "5", name: "Arjun Singhal", designation: "Managing Partner, Singhal Capital", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400" },
  { id: "6", name: "Chloe Wong", designation: "Vice President, Temasek Advisory", image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&q=80&w=400" },
  { id: "7", name: "Deepak Bhalla", designation: "Chief Technology Officer, CloudNet", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400" },
  { id: "8", name: "Sujata Bose", designation: "Head of Asia Operations, BioPharm", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400" },
  { id: "9", name: "Marcus Tan", designation: "Senior Director, Singapore Port Trust", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400" },
  { id: "10", name: "Rutuja Shinde", designation: "Executive Director, Lokmat Media", image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=400" }
];

const defaultWinners3: Winner[] = [
  { id: "1", name: "Dr. Sameer Al-Mansoor", designation: "Head of Infrastructure, Nile Horizon", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400" },
  { id: "2", name: "Farida Hassan", designation: "Chairperson, Arab Tech Council", image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=400" },
  { id: "3", name: "Amitabh Banerjee", designation: "Director, Global Trade Corp", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400" },
  { id: "4", name: "Salma El-Sayed", designation: "Founder, EcoEnergy Africa", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400" },
  { id: "5", name: "Tariq Mahmud", designation: "CEO, Cairo Capital Holdings", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400" },
  { id: "6", name: "Nisha Varma", designation: "Senior Vice President, Apex Bank", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400" },
  { id: "7", name: "Omar Farooq", designation: "Chief Innovation Officer, Digit", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400" },
  { id: "8", name: "Leila Khalil", designation: "Managing Director, SilkRoad Logistics", image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&q=80&w=400" },
  { id: "9", name: "Pradeep Agrawal", designation: "Chairman, Agrawal Industries", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400" },
  { id: "10", name: "Zainab Ibrahim", designation: "Director, Cultural Heritage Council", image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=400" }
];

const awardDataMap: Record<string, AwardData[]> = {
  // Dubai - 1 Trophy
  "dubai-2023": [
    {
      awardName: "Dubai Trophy",
      awardSubtitle: "Lokmat International Awards 2023 – Dubai",
      trophyImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800",
      winners: [
        { id: "1", name: "Sheikh Rashid Al-Maktoum", designation: "Patron, Middle East Innovation", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400" },
        { id: "2", name: "Priya Sundaram", designation: "Founder, Gulf Retail Group", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400" },
        { id: "3", name: "Vijay Kulkarni", designation: "Chairman, Kulkarni Global", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400" },
        { id: "4", name: "Aisha Al-Zahra", designation: "Director, Dubai Media City", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400" },
        { id: "5", name: "Sunil Wadhwa", designation: "CEO, Emirates Energy Corp", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400" },
        { id: "6", name: "Fatima Al-Hashimi", designation: "Chairperson, Arab Women Leadership", image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&q=80&w=400" },
        { id: "7", name: "Nitin Gadkari", designation: "Union Minister, Govt of India", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400" },
        { id: "8", name: "Nandita Das", designation: "Filmmaker & Social Activist", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400" },
        { id: "9", name: "Ramesh Raskar", designation: "Professor & Innovator, MIT Media Lab", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400" },
        { id: "10", name: "Anjali Tendulkar", designation: "Philanthropist & Medical Doctor", image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=400" }
      ]
    }
  ],

  // Singapore - 3 Awards
  "singapore-2024": [
    {
      awardName: "Marudhar Sanman",
      awardSubtitle: "Lokmat Global Economic Convention 2024 – Singapore",
      trophyImage: "https://images.unsplash.com/photo-1578269174936-2709b6aeb913?auto=format&fit=crop&q=80&w=800",
      winners: defaultWinners2
    },
    {
      awardName: "Global Women Excellence Awards",
      awardSubtitle: "Lokmat Global Economic Convention 2024 – Singapore",
      trophyImage: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?auto=format&fit=crop&q=80&w=800",
      winners: defaultWinners1
    },
    {
      awardName: "Global Trailblazer Award",
      awardSubtitle: "Lokmat Global Economic Convention 2024 – Singapore",
      trophyImage: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&q=80&w=800",
      winners: defaultWinners3
    }
  ],
  "1": [
    {
      awardName: "Marudhar Sanman",
      awardSubtitle: "Lokmat Global Economic Convention 2024 – Singapore",
      trophyImage: "https://images.unsplash.com/photo-1578269174936-2709b6aeb913?auto=format&fit=crop&q=80&w=800",
      winners: defaultWinners2
    },
    {
      awardName: "Global Women Excellence Awards",
      awardSubtitle: "Lokmat Global Economic Convention 2024 – Singapore",
      trophyImage: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?auto=format&fit=crop&q=80&w=800",
      winners: defaultWinners1
    },
    {
      awardName: "Global Trailblazer Award",
      awardSubtitle: "Lokmat Global Economic Convention 2024 – Singapore",
      trophyImage: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&q=80&w=800",
      winners: defaultWinners3
    }
  ],

  // Baku - 3 Awards
  "baku-2024": [
    {
      awardName: "Lokmat Global Trailblazer Awards",
      awardSubtitle: "Lokmat One World Summit & Awards 2024 – Baku",
      trophyImage: "https://images.unsplash.com/photo-1578269174936-2709b6aeb913?auto=format&fit=crop&q=80&w=800",
      winners: [
        { id: "1", name: "Ilham Guliyev", designation: "Director, Caspian Energy Forum", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400" },
        { id: "2", name: "Suman Saxena", designation: "Founder, GreenEarth Foundation", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400" },
        { id: "3", name: "Leyla Mammadova", designation: "CEO, Baku Tech Hub", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400" },
        { id: "4", name: "Gaurav Verma", designation: "Managing Partner, Horizon Law", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400" },
        { id: "5", name: "Eldar Aliyev", designation: "President, Silk Road Aviation", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400" },
        { id: "6", name: "Radhika Merchant", designation: "VP Corporate Strategy, Reliance", image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&q=80&w=400" },
        { id: "7", name: "Rashad Hasanov", designation: "Chief Sustainability Officer, Caspian", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400" },
        { id: "8", name: "Divya Rastogi", designation: "Head of AI, NextGen Robotics", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400" },
        { id: "9", name: "Fuad Rustamov", designation: "Chairman, Baku Commerce Guild", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400" },
        { id: "10", name: "Shalini Kapoor", designation: "Director, Global Cultural Exchange", image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=400" }
      ]
    },
    {
      awardName: "Lokmat Global Industry Awards",
      awardSubtitle: "Lokmat One World Summit & Awards 2024 – Baku",
      trophyImage: "https://images.unsplash.com/photo-1614036417651-efe5912149d8?auto=format&fit=crop&q=80&w=800",
      winners: defaultWinners1
    },
    {
      awardName: "Lokmat Global Excellence Awards",
      awardSubtitle: "Lokmat One World Summit & Awards 2024 – Baku",
      trophyImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800",
      winners: defaultWinners2
    }
  ],

  // Hong Kong - 1 Trophy
  "hong-kong-macau-2025": [
    {
      awardName: "Hong Kong Trophy",
      awardSubtitle: "Lokmat Global Convention 2025 – Hong Kong & Macau",
      trophyImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800",
      winners: [
        { id: "1", name: "Chen Wei", designation: "President, East Asia Capital", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400" },
        { id: "2", name: "Pooja Mehta", designation: "VP Marketing, Global Reach", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400" },
        { id: "3", name: "Raymond Leung", designation: "CEO, Pearl River Maritime", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400" },
        { id: "4", name: "Ananya Singhania", designation: "Founder, Luxe Living", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400" },
        { id: "5", name: "David Wu", designation: "Chief Architect, Hong Kong Skyline", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400" },
        { id: "6", name: "Grace Ho", designation: "Managing Director, Victoria Bay Tech", image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&q=80&w=400" },
        { id: "7", name: "Karan Shah", designation: "Head of FinTech, Nexus Asia", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400" },
        { id: "8", name: "Li Jing", designation: "Chairperson, Macau Heritage Trust", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400" },
        { id: "9", name: "Manish Chawla", designation: "Group CFO, Pacific Ventures", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400" },
        { id: "10", name: "Sui Ling", designation: "Director, Global Trade Advisory", image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=400" }
      ]
    }
  ],

  // London - 5 Awards
  "london-2025": [
    {
      awardName: "Lokmat Bharat Bhushan Award",
      awardSubtitle: "Lokmat Global Economic Convention 2025 – London",
      trophyImage: "https://images.unsplash.com/photo-1578269174936-2709b6aeb913?auto=format&fit=crop&q=80&w=800",
      winners: defaultWinners1
    },
    {
      awardName: "Lokmat Global Sakhi Award London",
      awardSubtitle: "Lokmat Global Economic Convention 2025 – London",
      trophyImage: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?auto=format&fit=crop&q=80&w=800",
      winners: defaultWinners2
    },
    {
      awardName: "Lokmat Gujarat Ratna Award",
      awardSubtitle: "Lokmat Global Economic Convention 2025 – London",
      trophyImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800",
      winners: defaultWinners3
    },
    {
      awardName: "Lokmat Kohinoor of India Award",
      awardSubtitle: "Lokmat Global Economic Convention 2025 – London",
      trophyImage: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&q=80&w=800",
      winners: defaultWinners1
    },
    {
      awardName: "Lokmat Maharashtra Ratna Award",
      awardSubtitle: "Lokmat Global Economic Convention 2025 – London",
      trophyImage: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=800",
      winners: defaultWinners2
    }
  ],

  // Cairo - 2 Awards
  "cairo-2026": [
    {
      awardName: "Lokmat Global Excellence Award",
      awardSubtitle: "Lokmat One World Summit & Awards 2026 – Cairo",
      trophyImage: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?auto=format&fit=crop&q=80&w=800",
      winners: defaultWinners3
    },
    {
      awardName: "Lokmat Global Icon Award",
      awardSubtitle: "Lokmat One World Summit & Awards 2026 – Cairo",
      trophyImage: "https://images.unsplash.com/photo-1578269174936-2709b6aeb913?auto=format&fit=crop&q=80&w=800",
      winners: defaultWinners1
    }
  ]
};

interface AwardWinnersSectionProps {
  event: LokmatEvent;
}

export default function AwardWinnersSection({ event }: AwardWinnersSectionProps) {
  // Get awards list for event
  let awardsList = awardDataMap[event.id];

  // Fallback check by location name
  if (!awardsList) {
    const loc = (event.location || "").toLowerCase();
    if (loc.includes("dubai")) {
      awardsList = awardDataMap["dubai-2023"];
    } else if (loc.includes("singapore")) {
      awardsList = awardDataMap["singapore-2024"];
    } else if (loc.includes("baku")) {
      awardsList = awardDataMap["baku-2024"];
    } else if (loc.includes("hong kong") || loc.includes("macau")) {
      awardsList = awardDataMap["hong-kong-macau-2025"];
    } else if (loc.includes("london")) {
      awardsList = awardDataMap["london-2025"];
    } else if (loc.includes("cairo") || loc.includes("egypt")) {
      awardsList = awardDataMap["cairo-2026"];
    }
  }

  // Generic fallback if still not matched
  if (!awardsList || awardsList.length === 0) {
    const baseTitle = event.title.split(' – ')[0] || event.title;
    awardsList = [
      {
        awardName: `${baseTitle} Trophy`,
        awardSubtitle: event.title,
        trophyImage: "https://images.unsplash.com/photo-1578269174936-2709b6aeb913?auto=format&fit=crop&q=80&w=800",
        winners: defaultWinners1,
      }
    ];
  }

  return (
    <div className="w-full space-y-16 my-12 pt-10 border-t border-gray-200">
      {awardsList.map((data, index) => (
        <section key={index} className="w-full">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-stretch">
            {/* Left Column: White Card with Trophy Image & Award Title/Subtitle ONLY */}
            <div className="w-full lg:w-4/12 flex flex-col">
              <div className="bg-white border border-gray-200 shadow-[0_8px_30px_rgba(0,0,0,0.04)] p-5 sm:p-6 rounded-3xl flex flex-col justify-between h-full">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#111111] mb-1.5 leading-snug">
                    {data.awardName}
                  </h3>

                  {data.awardSubtitle && (
                    <p className="text-gray-500 text-xs font-medium tracking-wide mb-4">
                      {data.awardSubtitle}
                    </p>
                  )}
                </div>

                {/* Trophy Image Display with subtle light grey border */}
                <div className="relative w-full flex-1 min-h-[260px] sm:min-h-[300px] lg:min-h-[280px] rounded-2xl overflow-hidden border border-gray-200 bg-gray-50 flex items-center justify-center">
                  <img
                    src={data.trophyImage}
                    alt={data.awardName}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      e.currentTarget.src = "https://images.unsplash.com/photo-1578269174936-2709b6aeb913?auto=format&fit=crop&q=80&w=800";
                    }}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Right Column: Title + 10 Award Winners (5 per row) with matching total height */}
            <div className="w-full lg:w-8/12 flex flex-col justify-between">
              <div className="mb-3">
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#111111]">
                  Award <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-500">Winners</span>
                </h3>
              </div>

              {/* 5 columns grid on md/lg, 2 rows total = 10 items */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 flex-1">
                {data.winners.map((winner) => (
                  <div
                    key={winner.id}
                    className="group flex flex-col bg-white border border-gray-100 rounded-2xl p-2.5 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_25px_rgba(0,0,0,0.06)] hover:border-red-200 transition-all duration-300 justify-between"
                  >
                    {/* 1:1 Square Image */}
                    <div className="w-full aspect-square rounded-xl overflow-hidden bg-gray-100 relative">
                      <img
                        src={winner.image}
                        alt={winner.name}
                        loading="lazy"
                        referrerPolicy="no-referrer"
                        onError={(e) => {
                          e.currentTarget.src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400";
                        }}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    {/* Name & Designation */}
                    <div className="mt-2.5 flex flex-col flex-1 justify-start">
                      <h4 className="font-bold text-[#111111] text-xs sm:text-sm leading-snug line-clamp-1 group-hover:text-red-600 transition-colors">
                        {winner.name}
                      </h4>
                      <p className="text-[10px] sm:text-[11px] font-normal text-gray-500 mt-0.5 leading-tight line-clamp-2">
                        {winner.designation}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}


