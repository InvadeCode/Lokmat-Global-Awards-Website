import React, { useEffect } from "react";
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";
import EventCard from "@/src/components/EventCard";
import { useEvents } from "@/src/hooks/useEvents";
import { motion } from "motion/react";
import { Globe, TrendingUp, Building2, Landmark, Award, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function LGEC() {
  const { events, loading } = useEvents();

  useEffect(() => {
    document.title = "Lokmat Global Economic Convention (LGEC) | Lokmat Events";
    window.scrollTo(0, 0);
  }, []);

  // Filter events corresponding to LGEC (Singapore & London)
  const lgecEventIds = ["1", "singapore-2024", "london-2025"];
  const lgecEvents = events.filter((e) => 
    e.title.toLowerCase().includes("economic convention") ||
    e.id === "1" || 
    e.id === "singapore-2024" || 
    e.id === "london-2025"
  );

  const pillars = [
    {
      icon: Globe,
      title: "Global Footprint",
      description: "Positioning Indian business leadership and economic thought within key international trade and finance corridors."
    },
    {
      icon: TrendingUp,
      title: "Strategic Dialogue",
      description: "Convening policymakers, industrial titans, and investors to address cross-border opportunities and emerging markets."
    },
    {
      icon: Building2,
      title: "Industry Collaboration",
      description: "Fostering trade partnerships, institutional alliances, and enterprise growth across global business hubs."
    },
    {
      icon: Award,
      title: "Prestigious Honours",
      description: "Bestowing coveted recognitions such as Maharashtra Ratna, Bharat Bhushan, and Global Sakhi on distinguished achievers."
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
                Lokmat Global Economic Convention
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight tracking-tight mb-8">
                Driving Global Economic Dialogue & Leadership
              </h1>
              <p className="text-lg md:text-xl text-gray-600 font-light leading-relaxed max-w-3xl mx-auto">
                The Lokmat Global Economic Convention (LGEC) serves as an international platform connecting business leaders, policy architects, and innovators across key global economic centers.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Content Overview Section */}
        <section className="py-16 bg-white border-y border-gray-100 mb-20">
          <div className="w-full px-[3%] max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6 space-y-6">
                <span className="text-red-600 font-bold tracking-[0.3em] uppercase text-xs block">About LGEC</span>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                  Where Global Vision Meets Economic Opportunity
                </h2>
                <p className="text-gray-600 font-light leading-relaxed text-base md:text-lg">
                  Evolving beyond traditional awards ceremonies, the Lokmat Global Economic Convention was established to foster high-level intellectual exchange, strategic trade connections, and actionable economic policy insights.
                </p>
                <p className="text-gray-600 font-light leading-relaxed text-base">
                  From landmark venues in Singapore to iconic institutions like The Savoy in London, LGEC brings together influential voices from politics, enterprise, social impact, and the global Indian diaspora to shape the future of international business and economic cooperation.
                </p>
              </div>

              <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {pillars.map((pillar, idx) => {
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
            <span className="text-red-600 font-bold tracking-[0.3em] uppercase text-xs mb-3 block">Convention Editions</span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">LGEC Global Chapters</h2>
            <p className="text-gray-500 font-light mt-4 text-base md:text-lg">
              Explore the international editions of the Lokmat Global Economic Convention. Click on any edition to view full event details, highlights, and photo galleries.
            </p>
          </div>

          {loading ? (
            <div className="flex justify-center items-center py-20">
              <div className="w-10 h-10 border-4 border-red-600/20 border-t-red-600 rounded-full animate-spin" />
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {lgecEvents.map((event, idx) => (
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
