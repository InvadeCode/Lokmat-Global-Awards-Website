import React, { useEffect } from "react";
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";
import VisionMissionSection from "@/src/components/VisionMissionSection";
import { motion } from "motion/react";
import { Award, Shield, Target, Globe, Milestone, Users, Star, ArrowUpRight, Sparkles } from "lucide-react";

export default function About() {
  // AIO, GEO, and SEO Best Practices: Dynamic Title and Description Updates
  useEffect(() => {
    document.title = "About Our Legacy | Lokmat Premium Events & Awards";
    
    // Update Meta Description dynamically for SEO/AIO scrapers
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Explore the prestigious 50+ year history of Lokmat Network's events, conventions, and awards. Learn about our core values, leadership team, and global milestones.");
    }

    // Add dynamic geo region specific meta for About page
    const geoRegion = document.querySelector('meta[name="geo.region"]');
    if (geoRegion) {
      geoRegion.setAttribute("content", "IN-MH");
    }
  }, []);

  const values = [
    {
      icon: Award,
      title: "Excellence",
      desc: "We set the highest benchmarks for execution, speaker curations, and recognition. Only the truly exceptional are honored.",
    },
    {
      icon: Shield,
      title: "Integrity",
      desc: "Our selection panels and award processes are governed by rigorous transparency, objective criteria, and respected external juries.",
    },
    {
      icon: Target,
      title: "Dynamic Impact",
      desc: "We don't just host events; we build platforms that trigger dialogue, shape public policies, and champion lasting social change.",
    },
    {
      icon: Globe,
      title: "Global Reach",
      desc: "Expanding regional pride onto global centers of influence like London, Singapore, Dubai, Cairo, and Baku, connecting the Indian diaspora.",
    }
  ];

  const milestones = [
    {
      year: "1971",
      title: "Founding Legacy",
      desc: "Inception of Lokmat as a primary publication, building the foundational trust and deep regional connection with millions.",
    },
    {
      year: "2010",
      title: "Lokmat Maharashtrian of the Year",
      desc: "Launched India's largest regional awards property, celebrating remarkable individuals across public service, science, art, and sport.",
    },
    {
      year: "2023",
      title: "International Debut in Dubai",
      desc: "The Lokmat International Awards debuted at Grand Hyatt, Dubai, celebrating cross-border excellence and international trade ties.",
    },
    {
      year: "2024",
      title: "Singapore Economic Convention & Baku",
      desc: "Evolved into global economic dialogue platforms at Shangri-La Hotel, Singapore and Flame Towers, Baku, convening high-level trade networks.",
    },
    {
      year: "2025",
      title: "London Savoy & Hong Kong Chapters",
      desc: "Hosted the prestigious Global Economic Convention at The Savoy, London, and strategic corridors in Hong Kong & Macau, recognizing Global Sakhis & Kohinoors.",
    },
    {
      year: "2026 & Beyond",
      title: "One World Vision & Cairo",
      desc: "Strengthened collaborative global leadership ties in Cairo, Egypt, paving the path for the upcoming highly anticipated Mauritius chapter.",
    }
  ];

  const leaders = [
    {
      name: "John Doe",
      role: "Chairman",
      desc: "Visionary leader driving the editorial integrity and strategic expansion of our global footprint.",
      initials: "JD",
    },
    {
      name: "Jane Smith",
      role: "Editor-in-Chief",
      desc: "Renowned journalist and public figure, steering our intellectual direction and community connections.",
      initials: "JS",
    },
    {
      name: "Michael Johnson",
      role: "Joint Managing Director",
      desc: "Chief architect of our modern experience platforms, organizing international conclaves and integrating digital-first content platforms.",
      initials: "MJ",
    },
    {
      name: "Emily Davis",
      role: "Managing Director",
      desc: "Pioneering business operations, industrial alignments, and corporate partnerships across all global and national summit chapters.",
      initials: "ED",
    }
  ];

  return (
    <div className="w-full overflow-x-hidden min-h-screen bg-[#FAFAFA] text-[#111111] flex flex-col font-sans">
      <Navbar />
      
      <main className="flex-1 w-full pt-32 pb-24 md:pt-40 md:pb-32 relative">
        {/* Hero Header */}
        <div className="w-full px-[3%] text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <span className="text-red-600 font-bold tracking-[0.3em] uppercase text-xs mb-3 block">Who We Are</span>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight tracking-tight mb-6">
              Our Vision & Legacy
            </h1>
            <p className="text-lg md:text-xl text-gray-500 font-light leading-relaxed max-w-3xl mx-auto">
              Connecting visionaries, celebrating exceptional leaders, and bringing regional pride to the world stage since 1971.
            </p>
          </motion.div>
        </div>

        {/* About the Brand Section */}
        <section className="w-full px-[3%] mb-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto bg-white border border-gray-200/80 rounded-3xl p-8 md:p-12 shadow-xl shadow-gray-100/50 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-red-600 via-orange-500 to-amber-500" />
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-4">
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-100 text-red-600 font-bold text-xs uppercase tracking-[0.2em] mb-3">
                  <Sparkles className="w-3.5 h-3.5" /> About The Brand
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-[#111111] leading-tight">
                  Lokmat Experiences
                </h2>
                <p className="text-xs uppercase tracking-widest text-red-600 font-semibold mt-1">
                  Legacy of Excellence & Impact
                </p>
              </div>
              <div className="lg:col-span-8 border-t lg:border-t-0 lg:border-l border-gray-100 pt-6 lg:pt-0 lg:pl-8">
                <p className="text-gray-600 font-light text-base md:text-lg leading-relaxed">
                  Born from the deeply trusted five-decade journalistic legacy of Lokmat Media Group, <strong>Lokmat Experiences</strong> is India's premier platform for high-impact summits, prestigious award conclaves, and international economic forums. We bridge regional leadership with global influence—curating transformative gatherings in iconic capitals across the world while celebrating grassroots changemakers, corporate titans, and cultural pioneers who shape our collective future.
                </p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Primary Interactive Vision & Mission Section */}
        <VisionMissionSection />

        {/* Vision & Values Section */}
        <section className="py-20 bg-white border-t border-b border-gray-100">
          <div className="w-full px-[3%]">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-red-600 font-bold tracking-[0.3em] uppercase text-xs mb-3 block">Guided by Purpose</span>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Our Core Values</h2>
              <p className="text-gray-500 font-light mt-4 text-base md:text-lg">
                Behind every global convention, high-profile summit, and prestigious awards ceremony is a set of guiding principles we hold sacred.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((v, idx) => {
                const IconComponent = v.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    className="p-8 rounded-2xl border border-gray-200 bg-[#FAFAFA] hover:bg-white hover:border-red-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center text-red-600 mb-6 group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-[#111111] group-hover:text-red-600 transition-colors duration-300">
                      {v.title}
                    </h3>
                    <p className="text-gray-500 font-light leading-relaxed text-sm">
                      {v.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Milestones Timeline */}
        <section className="py-24 bg-[#FAFAFA] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/5 rounded-full filter blur-[100px] pointer-events-none" />
          
          <div className="w-full px-[3%]">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <span className="text-red-600 font-bold tracking-[0.3em] uppercase text-xs mb-3 block">Chronology of Impact</span>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Our Major Milestones</h2>
              <p className="text-gray-500 font-light mt-4 text-base md:text-lg">
                The journey of a regional powerhouse evolving into a major orchestrator of global thought leadership.
              </p>
            </div>

            <div className="relative max-w-4xl mx-auto">
              {/* Vertical line connector */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-gray-200 -translate-x-1/2" />

              <div className="space-y-12">
                {milestones.map((m, idx) => {
                  const isLeft = idx % 2 === 0;
                  return (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.6 }}
                      className={`relative flex flex-col md:flex-row items-start ${
                        isLeft ? "md:flex-row-reverse" : ""
                      }`}
                    >
                      {/* Timeline Dot */}
                      <div className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full border-4 border-white bg-red-600 shadow-md -translate-x-1/2 flex items-center justify-center z-10">
                        <Milestone className="w-3 h-3 text-white" />
                      </div>

                      {/* Content panel */}
                      <div className="w-full md:w-[45%] pl-12 md:pl-0">
                        <div className={`p-8 bg-white border border-gray-150 rounded-2xl shadow-sm hover:border-red-200 transition-all duration-300 ${
                          isLeft ? "md:text-right" : "md:text-left"
                        }`}>
                          <span className="inline-block px-3 py-1 bg-red-50 text-red-600 font-bold text-sm rounded-lg mb-4">
                            {m.year}
                          </span>
                          <h3 className="text-xl font-bold text-[#111111] mb-3">
                            {m.title}
                          </h3>
                          <p className="text-gray-500 text-sm font-light leading-relaxed">
                            {m.desc}
                          </p>
                        </div>
                      </div>

                      {/* Empty side for layout spacing */}
                      <div className="hidden md:block w-[10%]"></div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Section */}
        <section className="py-24 bg-white border-t border-gray-100">
          <div className="w-full px-[3%]">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-red-600 font-bold tracking-[0.3em] uppercase text-xs mb-3 block">Governing Board</span>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Our Visionary Leadership</h2>
              <p className="text-gray-500 font-light mt-4 text-base md:text-lg">
                The distinguished executive stewards driving the intellectual depth, global operations, and regional integrity of the Lokmat portfolio.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {leaders.map((leader, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  className="bg-[#FAFAFA] border border-gray-200 p-8 rounded-2xl flex flex-col justify-between hover:border-red-200 hover:shadow-lg transition-all duration-300"
                >
                  <div>
                    {/* Visual avatar badge */}
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-red-600 to-orange-500 flex items-center justify-center text-white font-bold text-lg mb-6 shadow-md shadow-red-600/20">
                      {leader.initials}
                    </div>
                    <h3 className="text-xl font-bold text-[#111111] mb-1">
                      {leader.name}
                    </h3>
                    <p className="text-red-600 text-xs font-bold uppercase tracking-wider mb-4">
                      {leader.role}
                    </p>
                    <p className="text-gray-500 font-light text-sm leading-relaxed mb-6">
                      {leader.desc}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-gray-400 group cursor-pointer hover:text-red-600 transition-colors">
                    <span className="text-xs font-bold uppercase tracking-widest">Read Full Profile</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
