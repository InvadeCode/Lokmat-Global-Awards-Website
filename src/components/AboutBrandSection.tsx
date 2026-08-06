import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Sparkles,
  Globe,
  Award,
  ShieldCheck,
  Building2,
  Users,
  ArrowRight,
  TrendingUp,
  CheckCircle2,
  Compass
} from "lucide-react";

export default function AboutBrandSection() {
  const [activeFacet, setActiveFacet] = useState<number>(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const facets = [
    {
      id: 0,
      title: "Journalistic Legacy",
      badge: "50+ YEARS OF TRUST",
      icon: ShieldCheck,
      color: "from-red-600 to-orange-500",
      description:
        "Rooted in Lokmat Media Group's five decades of undisputed news credibility, Lokmat Experiences stands as a beacon of uncompromised editorial integrity and community trust.",
      stats: "25M+ Daily Readers & Viewers",
      highlights: ["50+ Years Unbroken Trust", "Deep Grassroots Presence", "Unbiased Editorial Governance"]
    },
    {
      id: 1,
      title: "Global Conclaves",
      badge: "WORLD-CLASS PLATFORMS",
      icon: Globe,
      color: "from-orange-500 to-amber-500",
      description:
        "Hosting flagship summits in world capitals like London, Baku, Dubai, and Singapore—connecting Indian state leadership, global diplomats, and international trade bodies.",
      stats: "20+ International Destinations",
      highlights: ["The Savoy London Summits", "Flame Towers Baku Forums", "Bilateral Trade Conclaves"]
    },
    {
      id: 2,
      title: "Celebrating Changemakers",
      badge: "PRESTIGIOUS HONORS",
      icon: Award,
      color: "from-amber-500 to-red-600",
      description:
        "Honoring grassroots champions, women icons, corporate titans, and youth pioneers through rigorous independent jury audits and unforgettable red-carpet galas.",
      stats: "5,000+ Leaders Celebrated",
      highlights: ["Maharashtrian of the Year", "Lokmat Sakhi Sanman", "National Business Excellence"]
    },
    {
      id: 3,
      title: "Socio-Economic Impact",
      badge: "FUTURE-READY INNOVATION",
      icon: TrendingUp,
      color: "from-red-500 to-rose-600",
      description:
        "Transforming regional success into actionable policy dialogue, fostering cross-border investment, and inspiring the next generation through youth & tech summits.",
      stats: "10M+ Voting & Social Reach",
      highlights: ["Startup & Tech Summits", "Women Empowerment Conclaves", "Policy & Governance Panels"]
    }
  ];

  const currentFacet = facets[activeFacet];
  const FacetIcon = currentFacet.icon;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  return (
    <section className="w-full px-[3%] mb-16 relative">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        onMouseMove={handleMouseMove}
        className="max-w-6xl mx-auto rounded-3xl bg-gradient-to-br from-[#121214] via-[#1a1a1e] to-[#0f0f11] text-white p-8 md:p-12 lg:p-14 shadow-2xl border border-white/10 relative overflow-hidden group"
      >
        {/* Dynamic Mouse Tracking Spotlight */}
        <div
          className="pointer-events-none absolute -inset-px transition duration-300 opacity-0 group-hover:opacity-100"
          style={{
            background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(239, 68, 68, 0.15), transparent 40%)`
          }}
        />

        {/* Top Radiant Glowing Edge */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-600 via-orange-500 to-amber-400" />
        <div className="absolute top-0 left-1/4 w-1/2 h-24 bg-red-600/10 blur-3xl pointer-events-none rounded-full" />

        {/* Header Badge & Title */}
        <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-8 border-b border-white/10">
          <div>
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 font-bold text-xs uppercase tracking-[0.25em] mb-3 backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-red-400 animate-pulse" /> About The Brand
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Lokmat Experiences
            </h2>
            <p className="text-xs sm:text-sm uppercase tracking-[0.2em] font-semibold text-red-400 mt-2">
              India's Premier Conclave, Awards & Global Summit Platform
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="px-4 py-2 rounded-2xl bg-white/5 border border-white/10 text-xs font-semibold text-gray-300 flex items-center gap-2 backdrop-blur-md">
              <Building2 className="w-4 h-4 text-orange-400" /> Lokmat Media Group
            </div>
            <div className="px-4 py-2 rounded-2xl bg-red-500/10 border border-red-500/20 text-xs font-bold text-red-300 flex items-center gap-2">
              <Users className="w-4 h-4 text-red-400" /> Est. 1971
            </div>
          </div>
        </div>

        {/* Main Narrative Paragraph */}
        <div className="relative z-10 mb-12">
          <p className="text-gray-300 font-light text-base md:text-xl leading-relaxed max-w-4xl">
            Born from the deeply trusted five-decade journalistic legacy of{" "}
            <span className="text-white font-semibold underline decoration-red-500/50 underline-offset-4">
              Lokmat Media Group
            </span>
            , <strong className="text-white font-bold">Lokmat Experiences</strong> is India's premier platform for high-impact summits, prestigious award conclaves, and international economic forums. We bridge regional leadership with global influence—curating transformative gatherings in iconic capitals across the world while celebrating grassroots changemakers, corporate titans, and cultural pioneers who shape our collective future.
          </p>
        </div>

        {/* Interactive Facet Tabs Grid */}
        <div className="relative z-10">
          <p className="text-xs uppercase tracking-[0.2em] text-gray-400 font-bold mb-4 flex items-center gap-2">
            <Compass className="w-4 h-4 text-red-400" /> Click a pillar to explore brand capabilities:
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-8">
            {facets.map((facet, idx) => {
              const Icon = facet.icon;
              const isActive = activeFacet === idx;
              return (
                <button
                  key={facet.id}
                  onClick={() => setActiveFacet(idx)}
                  className={`relative text-left p-4 sm:p-5 rounded-2xl border transition-all duration-300 group overflow-hidden ${
                    isActive
                      ? "bg-white/10 border-red-500/80 shadow-lg shadow-red-500/20 ring-1 ring-red-500/50"
                      : "bg-white/[0.03] border-white/10 hover:bg-white/[0.07] hover:border-white/20"
                  }`}
                >
                  {/* Subtle Accent Fill */}
                  {isActive && (
                    <motion.div
                      layoutId="facetActiveBg"
                      className="absolute inset-0 bg-gradient-to-br from-red-600/20 via-orange-600/10 to-transparent rounded-2xl pointer-events-none"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}

                  <div className="relative z-10 flex flex-col justify-between h-full">
                    <div className="flex items-center justify-between mb-3">
                      <div
                        className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors duration-300 ${
                          isActive
                            ? "bg-gradient-to-br from-red-600 to-orange-500 text-white shadow-md shadow-red-600/40"
                            : "bg-white/10 text-gray-300 group-hover:text-white group-hover:bg-white/20"
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-[10px] font-mono text-gray-500 uppercase font-bold">
                        0{idx + 1}
                      </span>
                    </div>

                    <div>
                      <h4
                        className={`text-xs sm:text-sm font-bold transition-colors ${
                          isActive ? "text-white" : "text-gray-300 group-hover:text-white"
                        }`}
                      >
                        {facet.title}
                      </h4>
                      <p className="text-[10px] text-gray-400 uppercase tracking-wider font-semibold mt-0.5 truncate">
                        {facet.badge}
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Dynamic Active Facet Detail Box */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFacet}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 backdrop-blur-xl relative overflow-hidden"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                <div className="md:col-span-8">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-red-500/20 text-red-400">
                      <FacetIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase tracking-widest font-bold text-red-400">
                        {currentFacet.badge}
                      </span>
                      <h3 className="text-xl font-bold text-white">{currentFacet.title}</h3>
                    </div>
                  </div>

                  <p className="text-gray-300 text-sm md:text-base font-light leading-relaxed my-4">
                    {currentFacet.description}
                  </p>

                  <div className="flex flex-wrap gap-2.5">
                    {currentFacet.highlights.map((item, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-gray-200"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-red-400" />
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="md:col-span-4 border-t md:border-t-0 md:border-l border-white/10 pt-4 md:pt-0 md:pl-6 flex flex-col justify-center">
                  <span className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-1">
                    Key Performance Metric
                  </span>
                  <p className="text-xl md:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-orange-400 to-amber-300 mb-2">
                    {currentFacet.stats}
                  </p>
                  <p className="text-xs text-gray-400 font-light leading-snug">
                    Driving measurable socio-economic impact across regional and international chapters.
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
}
