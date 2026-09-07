import React, { useState } from "react";
import { motion } from "motion/react";
import {
  Sparkles,
  Building2,
  Award,
  Users,
  Globe
} from "lucide-react";

export default function AboutBrandSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const numericalCards = [
    {
      id: "hubs",
      number: "7",
      title: "Business Hubs",
      icon: Building2
    },
    {
      id: "awardees",
      number: "400+",
      title: "Awardees",
      icon: Award
    },
    {
      id: "attendees",
      number: "2000+",
      title: "Global Attendees",
      icon: Users
    },
    {
      id: "continents",
      number: "3",
      title: "Continents",
      icon: Globe
    }
  ];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  return (
    <section className="w-full px-[3%] my-12 relative">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        onMouseMove={handleMouseMove}
        className="w-full rounded-3xl bg-[#0b0b0e] text-white p-6 sm:p-10 lg:p-12 shadow-2xl border border-white/10 relative overflow-hidden group"
      >
        {/* Dynamic Background Video with Brand Colors */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-25 mix-blend-screen scale-105 filter contrast-125 saturate-150"
          >
            <source
              src="https://assets.mixkit.co/videos/preview/mixkit-red-and-orange-abstract-lights-41484-large.mp4"
              type="video/mp4"
            />
          </video>
          {/* Brand Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0e] via-[#0b0b0e]/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0b0b0e] via-transparent to-[#0b0b0e]/90" />
          
          {/* Dynamic Animated Ambient Blobs */}
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-red-600/20 rounded-full blur-[120px] animate-pulse pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-orange-500/20 rounded-full blur-[120px] animate-pulse pointer-events-none" />
        </div>

        {/* Mouse Spotlight */}
        <div
          className="pointer-events-none absolute -inset-px transition duration-300 opacity-0 group-hover:opacity-100"
          style={{
            background: `radial-gradient(700px circle at ${mousePos.x}px ${mousePos.y}px, rgba(220, 38, 38, 0.18), transparent 45%)`
          }}
        />

        {/* Top Brand Glowing Ribbon */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-600 via-orange-500 to-amber-400" />

        {/* Header Badge & Brand Title */}
        <div className="relative z-10 mb-8 pb-8 border-b border-white/10">
          <div>
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/15 border border-red-500/30 text-red-400 font-bold text-xs uppercase tracking-[0.25em] mb-3 backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-red-400 animate-pulse" /> About The Brand
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold leading-[1.12] tracking-tight text-white">
              Lokmat <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-400 to-amber-300 pr-2">Media Group</span>
            </h2>
            <p className="text-xs sm:text-sm uppercase tracking-[0.2em] font-semibold text-red-400 mt-2">
              Legacy of Excellence & Impact
            </p>
          </div>
        </div>

        {/* Narrative Paragraphs */}
        <div className="relative z-10 mb-10 space-y-4">
          <p className="text-gray-200 font-light text-sm sm:text-base md:text-lg leading-relaxed">
            <strong className="text-white font-bold">Lokmat Media Pvt. Ltd.</strong> is a leading media company with interests in a diversified portfolio of publishing, broadcast, digital, entertainment and community. It has an employee strength of more than 3,000 and has a PAN-India network of offices.
          </p>
          <p className="text-gray-200 font-light text-sm sm:text-base md:text-lg leading-relaxed">
            Lokmat Media Group publishes India's No.1 Marathi daily <span className="text-white font-semibold">‘Lokmat’</span>, along with <span className="text-white font-semibold">‘Lokmat Samachar’</span> and <span className="text-white font-semibold">‘Lokmat Times’</span>, with a combined readership of 2.56 Cr (source: All India, Total Readership, IRS 2019, Q4). Keeping abreast with the changing digital landscape, Lokmat Group makes its content available for its readers through its multilingual news portals and mobile news app.
          </p>
          <p className="text-gray-200 font-light text-sm sm:text-base md:text-lg leading-relaxed">
            Lokmat entered the TV space in 2008 and it co-owns a 24-hour news and current affairs channel <span className="text-white font-semibold">‘News18 Lokmat’</span> (formerly known as IBN Lokmat), through a JV with the Network18 Group.
          </p>
          <p className="text-gray-200 font-light text-sm sm:text-base md:text-lg leading-relaxed">
            Lokmat’s experiential marketing division – <span className="text-white font-semibold">‘Taplight’</span> organizes various annual properties like <span className="text-white font-semibold">‘Lokmat Maharashtrian of the Year’</span>, <span className="text-white font-semibold">‘Lokmat Most Stylish’</span>, <span className="text-white font-semibold">‘Lokmat DIA’</span>, <span className="text-white font-semibold">‘Lokmat Infra Conclave’</span>, <span className="text-white font-semibold">'Lokmat Maha Marathon'</span>, <span className="text-white font-semibold">‘Lokmat Women Summit’</span> etc., which are the benchmarks in their respective categories. It also provides comprehensive 360-degree marketing solutions to clients including ‘BTL’ promotions and client-led activations. It is the largest event management company in Maharashtra in terms of the number of events held. This division also runs various community forums focused on Women, Youth and Children.
          </p>
        </div>

        {/* Numerical Cards Grid */}
        <div className="relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {numericalCards.map((card, idx) => {
              const Icon = card.icon;
              const isHovered = hoveredCard === idx;

              return (
                <div
                  key={card.id}
                  onMouseEnter={() => setHoveredCard(idx)}
                  className={`relative p-6 sm:p-7 rounded-2xl border transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-default group/card ${
                    isHovered
                      ? "bg-gradient-to-b from-white/15 to-white/5 border-red-500/80 shadow-xl shadow-red-600/20 -translate-y-1"
                      : "bg-white/[0.03] border-white/10 hover:bg-white/[0.08] hover:border-white/20"
                  }`}
                >
                  {/* Subtle Card Glow Effect */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br from-red-600/20 via-orange-500/10 to-transparent transition-opacity duration-300 pointer-events-none ${
                      isHovered ? "opacity-100" : "opacity-0"
                    }`}
                  />

                  <div className="relative z-10 flex flex-col justify-between h-full">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 mb-6 ${
                        isHovered
                          ? "bg-gradient-to-br from-red-600 to-orange-500 text-white shadow-lg shadow-red-600/40 scale-105"
                          : "bg-red-500/10 border border-red-500/20 text-red-500"
                      }`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>

                    <div>
                      <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-2">
                        {card.number}
                      </div>

                      <h3 className="text-base sm:text-lg font-bold text-red-500 tracking-wide">
                        {card.title}
                      </h3>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
