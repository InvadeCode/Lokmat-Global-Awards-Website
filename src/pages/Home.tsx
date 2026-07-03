import { motion } from "motion/react";
import Navbar from "@/src/components/Navbar";
import HeroSection from "@/src/components/HeroSection";
import EventCard from "@/src/components/EventCard";
import AlternativeEventCard from "@/src/components/AlternativeEventCard";
import AboutSection from "@/src/components/AboutSection";
import ImpactSection from "@/src/components/ImpactSection";
import GallerySection from "@/src/components/GallerySection";
import PartnersCtaSection from "@/src/components/PartnersCtaSection";
import NewsUpdatesSection from "@/src/components/NewsUpdatesSection";
import Footer from "@/src/components/Footer";
import { Link } from "react-router-dom";
import { useEvents } from "@/src/hooks/useEvents";
import { LayoutGrid, AlertCircle } from "lucide-react";

export default function Home() {
  const { events, loading, error } = useEvents();
  return (
    <div className="w-[100vw] overflow-x-hidden min-h-screen bg-[#FAFAFA] text-[#111111] flex flex-col font-sans">
      <Navbar />
      <HeroSection />
      
      <AboutSection />
      
      <main className="bg-white w-[100vw] px-[3%] py-24 md:py-32">
        <div className="flex flex-col md:flex-row items-baseline justify-between mb-20 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight leading-tight md:whitespace-nowrap">
              Lokmat Global <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 pr-1 pb-1">Economic Convention</span>
            </h2>
            <div className="w-24 h-1 bg-red-600 mt-6"></div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-2 text-gray-400 font-mono text-sm tracking-widest uppercase"
          >
            <LayoutGrid className="w-4 h-4" />
            <span>Curated Selection</span>
          </motion.div>
        </div>

        {/* Dynamic Events List */}
        <div className="flex flex-col relative w-full">
          {loading ? (
            <div className="flex flex-col items-center justify-center py-32 space-y-4">
              <div className="w-12 h-12 border-4 border-red-600/20 border-t-red-600 rounded-full animate-spin"></div>
              <p className="text-gray-400 font-mono text-sm tracking-widest uppercase">Loading masterworks</p>
            </div>
          ) : error ? (
            <div className="flex flex-col items-center justify-center py-32 text-center space-y-4 bg-gray-50 rounded-2xl border border-red-600/30">
              <AlertCircle className="w-12 h-12 text-red-600" />
              <p className="text-gray-600 max-w-md">{error}</p>
            </div>
          ) : events.length === 0 ? (
            <div className="text-center py-32 text-gray-500 font-light text-xl">
              No events scheduled yet.
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
                {events
                  .filter(e => e.title.includes("Lokmat Global Economic Convention"))
                  .slice(0, 2)
                  .map(event => (
                    <EventCard key={event.id} event={event} />
                  ))}
              </div>

              <div className="flex flex-col md:flex-row items-baseline justify-between mb-16 gap-8">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight leading-tight md:whitespace-nowrap">
                    Lokmat <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 pr-1 pb-1">One World</span> Summit & Awards
                  </h2>
                  <div className="w-24 h-1 bg-red-600 mt-6"></div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="flex items-center gap-2 text-gray-400 font-mono text-sm tracking-widest uppercase"
                >
                  <LayoutGrid className="w-4 h-4" />
                  <span>Global Influence</span>
                </motion.div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {events
                  .filter(e => !e.title.includes("Lokmat Global Economic Convention") && !e.category.toLowerCase().includes("upcoming"))
                  .slice(0, 4)
                  .map(event => (
                    <AlternativeEventCard key={event.id} event={event} />
                  ))}
              </div>
            </>
          )}
        </div>
      </main>

      <ImpactSection />
      
      <GallerySection />
      
      <PartnersCtaSection />
      
      <NewsUpdatesSection />
      
      <Footer />
    </div>
  );
}
