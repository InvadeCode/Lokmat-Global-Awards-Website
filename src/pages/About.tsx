import React, { useEffect } from "react";
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";
import VisionMissionSection from "@/src/components/VisionMissionSection";
import AboutBrandSection from "@/src/components/AboutBrandSection";
import { motion } from "motion/react";
import { Award, Shield, Target, Globe, Milestone, Users, Star, ArrowUpRight, Sparkles, Linkedin } from "lucide-react";

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
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800",
      linkedin: "https://www.linkedin.com",
    },
    {
      name: "Jane Smith",
      role: "Editor-in-Chief",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800",
      linkedin: "https://www.linkedin.com",
    },
    {
      name: "Michael Johnson",
      role: "Joint Managing Director",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800",
      linkedin: "https://www.linkedin.com",
    },
    {
      name: "Emily Davis",
      role: "Managing Director",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=800",
      linkedin: "https://www.linkedin.com",
    },
    {
      name: "David Wilson",
      role: "Executive Director",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800",
      linkedin: "https://www.linkedin.com",
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
        <AboutBrandSection />

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

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 xl:gap-6">
              {leaders.map((leader, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  className="bg-white border border-gray-200 p-5 rounded-2xl flex flex-col justify-between hover:border-red-200 hover:shadow-xl transition-all duration-300 group"
                >
                  <div>
                    {/* Image in 3:4 ratio */}
                    <div className="relative w-full aspect-[3/4] rounded-xl overflow-hidden mb-4 bg-gray-100">
                      <img
                        src={leader.image}
                        alt={leader.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    {/* Name & Designation */}
                    <h3 className="text-xl font-bold text-[#111111] mb-1">
                      {leader.name}
                    </h3>
                    <p className="text-red-600 text-xs font-bold uppercase tracking-wider">
                      {leader.role}
                    </p>
                  </div>

                  {/* LinkedIn Icon Action */}
                  <div className="pt-4 mt-4 border-t border-gray-100 flex items-center justify-between">
                    <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">LinkedIn</span>
                    <a
                      href={leader.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${leader.name}'s LinkedIn Profile`}
                      className="w-9 h-9 rounded-2xl border border-gray-200 bg-[#FAFAFA] flex items-center justify-center text-gray-600 hover:text-white hover:bg-[#0A66C2] hover:border-[#0A66C2] hover:scale-105 transition-all duration-300 shadow-sm"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
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
