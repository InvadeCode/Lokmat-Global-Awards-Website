import React, { useEffect } from "react";
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";
import EventCard from "@/src/components/EventCard";
import { useEvents } from "@/src/hooks/useEvents";
import { motion } from "motion/react";
import { Globe2, Sparkles, HeartHandshake, ShieldCheck, Award } from "lucide-react";

export default function LOWS() {
  const { events, loading } = useEvents();

  useEffect(() => {
    document.title = "Lokmat One World Summit & Awards (LOWS) | Lokmat Events";
    window.scrollTo(0, 0);
  }, []);

  // Filter events corresponding to LOWS (Dubai, Baku, Hong Kong & Macau, Cairo/Egypt)
  const lowsEvents = events.filter((e) => 
    e.id === "dubai-2023" || 
    e.id === "baku-2024" || 
    e.id === "hong-kong-macau-2025" || 
    e.id === "cairo-2026" ||
    e.title.toLowerCase().includes("one world") ||
    e.category.toLowerCase().includes("summit")
  );

  const corePillars = [
    {
      icon: Globe2,
      title: "One World Philosophy",
      description: "Uniting leaders across borders, cultures, and industries under a shared vision of global harmony and growth."
    },
    {
      icon: Sparkles,
      title: "Cross-Industry Innovation",
      description: "Bringing together visionaries in tech, governance, arts, and sustainability to exchange transformational ideas."
    },
    {
      icon: HeartHandshake,
      title: "Cultural Exchange",
      description: "Blending recognition of Indian leadership with international diplomacy and civilizational heritage."
    },
    {
      icon: ShieldCheck,
      title: "Impact & Sustainability",
      description: "Addressing global challenges, climate responsibility, and social progress collectively with international partners."
    }
  ];

  return (
    <div className="w-[100vw] overflow-x-hidden min-h-screen bg-[#FAFAFA] text-[#111111] flex flex-col font-sans">
      <Navbar />

      <main className="flex-1 w-[100vw] pt-32 pb-24 md:pt-40 md:pb-32 relative">
        {/* Hero Section */}
        <div className="w-full px-[3%] mb-16 md:mb-24">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-[0.25em] uppercase bg-red-50 text-red-600 border border-red-100 mb-6">
                Lokmat One World Summit & Awards
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight tracking-tight mb-8">
                Uniting Global Leaders Under One Vision
              </h1>
              <p className="text-lg md:text-xl text-gray-600 font-light leading-relaxed max-w-3xl mx-auto">
                The Lokmat One World Summit and Awards (LOWS) celebrates extraordinary global leadership, cross-cultural progress, and human excellence across key global destinations.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Content Overview Section */}
        <section className="py-16 bg-white border-y border-gray-100 mb-20">
          <div className="w-full px-[3%] max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6 space-y-6">
                <span className="text-red-600 font-bold tracking-[0.3em] uppercase text-xs block">About LOWS</span>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                  A Shared Platform for Vision, Excellence & Humanity
                </h2>
                <p className="text-gray-600 font-light leading-relaxed text-base md:text-lg">
                  Built on the foundational conviction that global progress relies on shared vision, LOWS brings together leaders from over 150 nations, industries, and disciplines.
                </p>
                <p className="text-gray-600 font-light leading-relaxed text-base">
                  From the inaugural international debut in Dubai and Flame Towers in Baku, to the vibrant economic nexus of Hong Kong and the civilizational crossroads of Cairo (Egypt), LOWS combines high-level summit discussions with prestigious award recognitions that inspire future generations.
                </p>
              </div>

              <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {corePillars.map((pillar, idx) => {
                  const Icon = pillar.icon;
                  return (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      className="p-6 rounded-2xl bg-[#FAFAFA] border border-gray-200 hover:border-red-200 hover:shadow-md transition-all"
                    >
                      <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center mb-4">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="font-bold text-lg mb-2">{pillar.title}</h3>
                      <p className="text-gray-500 text-xs font-light leading-relaxed">{pillar.description}</p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Editions & Cards Section */}
        <section className="w-full px-[3%] max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-red-600 font-bold tracking-[0.3em] uppercase text-xs mb-3 block">Summit Chapters</span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">LOWS Summit & Award Editions</h2>
            <p className="text-gray-500 font-light mt-4 text-base md:text-lg">
              Explore the four landmark international chapters of LOWS in Dubai, Baku, Hong Kong, and Egypt. Click any card to read full event details, watch videos, and view photo galleries.
            </p>
          </div>

          {loading ? (
            <div className="flex justify-center items-center py-20">
              <div className="w-10 h-10 border-4 border-red-600/20 border-t-red-600 rounded-full animate-spin" />
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {lowsEvents.map((event, idx) => (
                <EventCard key={event.id} event={event} index={idx} />
              ))}
            </div>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
}
