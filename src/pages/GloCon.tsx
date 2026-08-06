import React, { useEffect } from "react";
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";
import EventCard from "@/src/components/EventCard";
import { useEvents } from "@/src/hooks/useEvents";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Globe, ArrowRight, TrendingUp, Sparkles, Award, ExternalLink } from "lucide-react";

export default function GloCon() {
  const { events, loading } = useEvents();

  useEffect(() => {
    document.title = "GloCon - Lokmat Global Conventions & Summits | Lokmat Events";
    window.scrollTo(0, 0);
  }, []);

  // Filter events for both LGEC and LOWS
  const lgecEvents = events.filter((e) => 
    e.id === "1" || e.id === "singapore-2024" || e.id === "london-2025" || e.title.toLowerCase().includes("economic convention")
  );

  const lowsEvents = events.filter((e) => 
    e.id === "dubai-2023" || e.id === "baku-2024" || e.id === "hong-kong-macau-2025" || e.id === "cairo-2026"
  );

  return (
    <div className="w-[100vw] overflow-x-hidden min-h-screen bg-[#FAFAFA] text-[#111111] flex flex-col font-sans">
      <Navbar />

      <main className="flex-1 w-[100vw] pt-32 pb-24 md:pt-40 md:pb-32 relative">
        {/* Main Hero Header */}
        <div className="w-full px-[3%] mb-16 md:mb-20">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-[0.25em] uppercase bg-red-50 text-red-600 border border-red-100 mb-6">
                Lokmat Global Initiative
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight tracking-tight mb-8">
                GloCon – Global Conventions & Summits
              </h1>
              <p className="text-lg md:text-xl text-gray-600 font-light leading-relaxed max-w-3xl mx-auto">
                Lokmat Network's premier international convention umbrella bringing together economic powerhouses, industry leaders, and global visionaries through two distinct series: LGEC and LOWS.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Highlighted Sub-Series Cards */}
        <section className="w-full px-[3%] max-w-7xl mx-auto mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* LGEC Box */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 md:p-10 rounded-3xl bg-white border border-gray-200 hover:border-red-600 transition-all shadow-sm flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center font-bold">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-red-600 bg-red-50 px-3 py-1 rounded-full">
                    2 Global Editions
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-red-600 transition-colors">
                  LGEC – Lokmat Global Economic Convention
                </h2>
                <p className="text-gray-600 font-light leading-relaxed mb-8 text-base">
                  Focusing on trade policies, industrial growth, investment opportunities, and international economic partnerships. Featuring landmark chapters in Singapore and London.
                </p>
              </div>
              <Link 
                to="/lgec" 
                className="inline-flex items-center gap-2 font-bold text-sm text-red-600 hover:text-red-700 uppercase tracking-widest pt-4 border-t border-gray-100"
              >
                Explore LGEC Page <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>

            {/* LOWS Box */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 md:p-10 rounded-3xl bg-white border border-gray-200 hover:border-red-600 transition-all shadow-sm flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center font-bold">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-red-600 bg-red-50 px-3 py-1 rounded-full">
                    4 Global Editions
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-red-600 transition-colors">
                  LOWS – Lokmat One World Summit & Awards
                </h2>
                <p className="text-gray-600 font-light leading-relaxed mb-8 text-base">
                  Celebrating cross-border leadership, innovation, cultural heritage, and human progress under the "One World" philosophy. Hosted in Dubai, Baku, Hong Kong, and Egypt.
                </p>
              </div>
              <Link 
                to="/lows" 
                className="inline-flex items-center gap-2 font-bold text-sm text-red-600 hover:text-red-700 uppercase tracking-widest pt-4 border-t border-gray-100"
              >
                Explore LOWS Page <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* LGEC Section Cards */}
        <section className="w-full px-[3%] max-w-7xl mx-auto mb-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4 border-b border-gray-200 pb-6">
            <div>
              <span className="text-red-600 font-bold tracking-[0.3em] uppercase text-xs block mb-2">LGEC Series</span>
              <h2 className="text-3xl font-bold tracking-tight">Lokmat Global Economic Convention Cards</h2>
            </div>
            <Link to="/lgec" className="text-sm font-bold text-red-600 hover:underline inline-flex items-center gap-1">
              View LGEC Overview <ExternalLink className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {lgecEvents.map((event, idx) => (
              <EventCard key={event.id} event={event} index={idx} />
            ))}
          </div>
        </section>

        {/* LOWS Section Cards */}
        <section className="w-full px-[3%] max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4 border-b border-gray-200 pb-6">
            <div>
              <span className="text-red-600 font-bold tracking-[0.3em] uppercase text-xs block mb-2">LOWS Series</span>
              <h2 className="text-3xl font-bold tracking-tight">Lokmat One World Summit & Awards Cards</h2>
            </div>
            <Link to="/lows" className="text-sm font-bold text-red-600 hover:underline inline-flex items-center gap-1">
              View LOWS Overview <ExternalLink className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {lowsEvents.map((event, idx) => (
              <EventCard key={event.id} event={event} index={idx} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
