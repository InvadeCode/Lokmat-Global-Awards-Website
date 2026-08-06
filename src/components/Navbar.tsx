import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, PlayCircle, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import logoImg from "@/src/assets/images/regenerated_image_1781776475830.png";
import { navigationData } from "@/src/config/navigation";

interface SpeechData {
  title: string;
  speaker: string;
  role: string;
  videoEmbedUrl: string;
  description: string;
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [selectedSpeech, setSelectedSpeech] = useState<SpeechData | null>(null);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  const toggleDropdown = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  const isActive = (href?: string) => {
    return href && location.pathname === href;
  };

  const isDropdownActive = (items?: { href: string }[], parentHref?: string) => {
    if (parentHref && location.pathname === parentHref) return true;
    return items?.some(item => location.pathname === item.href);
  };

  const marqueeItems: SpeechData[] = [
    {
      title: "Lokmat: World’s Largest Marathi Media Conglomerate",
      speaker: "Lokmat Media Group",
      role: "50+ Years of Journalistic Heritage",
      videoEmbedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      description: "Discover Lokmat's five decades of trusted journalism, grassroots impact, and global economic leadership."
    },
    {
      title: "Hosting India’s Most Influential Voices",
      speaker: "Global Conclave Platform",
      role: "Lokmat Experiences Keynotes",
      videoEmbedUrl: "https://www.youtube.com/embed/5qap5aO4i9A",
      description: "Highlights from flagship international summits in London, Baku, Dubai, Singapore, and world capitals."
    },
    {
      title: "Anil Agarwal on Transformative Leadership",
      speaker: "Anil Agarwal",
      role: "Founder & Chairman, Vedanta Resources",
      videoEmbedUrl: "https://www.youtube.com/embed/L_LUpnjgPso",
      description: "Vedanta Chairman Anil Agarwal addresses corporate leaders on nation building, enterprise innovation, and sustainable growth."
    },
    {
      title: "Gautam Singhania on Enterprise Excellence",
      speaker: "Gautam Singhania",
      role: "Chairman & Managing Director, Raymond Group",
      videoEmbedUrl: "https://www.youtube.com/embed/3JZ_D3ELwOQ",
      description: "Gautam Singhania shares insights on brand legacy, global manufacturing excellence, and future-forward enterprise."
    },
    {
      title: "Vikram Doraiswami on Global Diplomacy",
      speaker: "H.E. Vikram Doraiswami",
      role: "High Commissioner of India to the United Kingdom",
      videoEmbedUrl: "https://www.youtube.com/embed/tgbNymZ7vqY",
      description: "High Commissioner Vikram Doraiswami delivers keynote address on India-UK bilateral trade, diaspora impact, and diplomatic ties at Lokmat London Summit."
    }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full">
      {/* Top Black Marquee Strip */}
      <div className="w-full bg-[#111111] border-b border-white/10 text-white text-xs md:text-sm font-semibold tracking-[0px] py-2 overflow-hidden shadow-sm relative z-20">
        <div className="animate-marquee flex items-center whitespace-nowrap">
          {[0, 1, 2].map((seqKey) => (
            <div key={seqKey} className="flex items-center gap-[9px] shrink-0 pr-[9px]">
              {marqueeItems.map((item, idx) => (
                <React.Fragment key={idx}>
                  <button
                    onClick={() => setSelectedSpeech(item)}
                    className="text-gray-200 hover:text-yellow-400 transition-colors duration-200 cursor-pointer font-semibold"
                  >
                    <span>{item.title}</span>
                  </button>
                  <span className="text-red-500/80 select-none">•</span>
                </React.Fragment>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className="flex items-center justify-between px-[3%] py-4 md:py-5 border-b border-gray-200 bg-white/90 backdrop-blur-md w-full relative z-10">
        <Link to="/" className="flex items-center gap-3">
          <img src={logoImg} alt="Lokmat Logo" referrerPolicy="no-referrer" className="h-8 md:h-10 w-auto object-contain mix-blend-multiply" />
        </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-bold tracking-widest uppercase text-gray-500">
        {navigationData.map((item) => (
          <div key={item.label} className="relative group">
            {item.items ? (
              <div className="flex items-center gap-1 cursor-pointer hover:text-red-600 transition-colors py-2 group-hover:text-red-600">
                {item.href ? (
                  item.isExternal || item.href.startsWith("http") ? (
                    <a href={item.href} target="_blank" rel="noopener noreferrer" className="hover:text-red-600">
                      {item.label}
                    </a>
                  ) : (
                    <Link to={item.href} className={isDropdownActive(item.items, item.href) ? "text-red-600" : ""}>
                      {item.label}
                    </Link>
                  )
                ) : (
                  <span className={isDropdownActive(item.items, item.href) ? "text-red-600" : ""}>{item.label}</span>
                )}
                <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                
                <div className="absolute top-full left-0 pt-2 min-w-[280px] transition-all origin-top opacity-0 scale-y-0 invisible group-hover:opacity-100 group-hover:scale-y-100 group-hover:visible">
                  <div className="flex flex-col bg-white border border-gray-100 shadow-xl rounded-xl overflow-hidden">
                    {item.items.map((subItem) => (
                      subItem.isExternal || subItem.href.startsWith("http") ? (
                        <a 
                          key={subItem.label} 
                          href={subItem.href} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="px-5 py-3.5 text-sm font-bold tracking-widest uppercase whitespace-nowrap hover:bg-gray-50 hover:text-red-600 transition-colors text-gray-500"
                          onClick={() => setOpenDropdown(null)}
                        >
                          {subItem.label}
                        </a>
                      ) : (
                        <Link 
                          key={subItem.label} 
                          to={subItem.href} 
                          className={`px-5 py-3.5 text-sm font-bold tracking-widest uppercase whitespace-nowrap hover:bg-gray-50 hover:text-red-600 transition-colors ${isActive(subItem.href) ? 'text-red-600 bg-gray-50' : 'text-gray-500'}`}
                          onClick={() => setOpenDropdown(null)}
                        >
                          {subItem.label}
                        </Link>
                      )
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              item.isExternal || (item.href && item.href.startsWith("http")) ? (
                <a 
                  href={item.href!} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-red-600 transition-colors py-2 flex items-center gap-1"
                >
                  {item.label}
                </a>
              ) : item.label === "Contact" ? (
                <Link 
                  to={item.href!} 
                  className={`px-5 py-2 border rounded-2xl font-bold uppercase tracking-widest text-sm hover:scale-105 transition-all duration-300 ${isActive(item.href) ? 'bg-red-600 text-white border-red-600' : 'border-gray-300 hover:border-[#111111] hover:text-[#111111] text-[#111111]'}`}
                >
                  {item.label}
                </Link>
              ) : (
                <Link 
                  to={item.href!} 
                  className={`hover:text-red-600 transition-colors py-2 ${isActive(item.href) ? 'text-red-600' : ''}`}
                >
                  {item.label}
                </Link>
              )
            )}
          </div>
        ))}
      </div>

      {/* Mobile Menu Toggle */}
      <button className="md:hidden p-2 text-gray-600" onClick={toggleMenu}>
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-lg overflow-hidden md:hidden"
          >
            <div className="flex flex-col px-[3%] py-4">
              {navigationData.map((item) => (
                <div key={item.label} className="border-b border-gray-100 last:border-none">
                  {item.items ? (
                    <div>
                      <button 
                        onClick={() => toggleDropdown(item.label)}
                        className="flex items-center justify-between w-full py-4 text-sm font-bold tracking-widest uppercase text-gray-600 hover:text-red-600"
                      >
                        <span className={isDropdownActive(item.items) ? "text-red-600" : ""}>{item.label}</span>
                        <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === item.label ? 'rotate-180' : ''}`} />
                      </button>
                      <AnimatePresence>
                        {openDropdown === item.label && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="bg-gray-50 flex flex-col"
                          >
                            {item.items.map((subItem) => (
                              <Link 
                                key={subItem.label} 
                                to={subItem.href} 
                                onClick={() => setIsOpen(false)}
                                className={`pl-8 pr-4 py-3 text-sm font-bold tracking-widest uppercase hover:text-red-600 ${isActive(subItem.href) ? 'text-red-600' : 'text-gray-500'}`}
                              >
                                {subItem.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    item.isExternal || (item.href && item.href.startsWith("http")) ? (
                      <a 
                        href={item.href!} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        onClick={() => setIsOpen(false)}
                        className="block py-4 text-sm font-bold tracking-widest uppercase hover:text-red-600 text-gray-600"
                      >
                        {item.label}
                      </a>
                    ) : (
                      <Link 
                        to={item.href!} 
                        onClick={() => setIsOpen(false)}
                        className={`block py-4 text-sm font-bold tracking-widest uppercase hover:text-red-600 ${isActive(item.href) ? 'text-red-600' : 'text-gray-600'}`}
                      >
                        {item.label}
                      </Link>
                    )
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>

    {/* Speech Video Modal */}
    <AnimatePresence>
      {selectedSpeech && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="bg-[#0f0f13] text-white border border-white/10 rounded-3xl w-full max-w-3xl overflow-hidden shadow-2xl relative"
          >
            {/* Header */}
            <div className="p-5 sm:p-6 border-b border-white/10 flex items-start justify-between gap-4 bg-gradient-to-r from-red-950/40 via-black to-black">
              <div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-500/20 text-red-400 font-bold text-xs uppercase tracking-wider mb-2">
                  <PlayCircle className="w-3.5 h-3.5 text-red-400" /> Lokmat Keynote Speech
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-white leading-tight">
                  {selectedSpeech.title}
                </h3>
                <p className="text-xs text-gray-400 mt-1 font-medium">
                  {selectedSpeech.speaker} — <span className="text-red-400">{selectedSpeech.role}</span>
                </p>
              </div>
              <button
                onClick={() => setSelectedSpeech(null)}
                className="p-2 rounded-full bg-white/10 text-gray-300 hover:text-white hover:bg-white/20 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Video Embed */}
            <div className="relative w-full aspect-video bg-black">
              <iframe
                src={`${selectedSpeech.videoEmbedUrl}?autoplay=1`}
                title={selectedSpeech.title}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            {/* Description */}
            <div className="p-5 sm:p-6 bg-[#0f0f13] flex items-center justify-between gap-4">
              <p className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed">
                {selectedSpeech.description}
              </p>
              <button
                onClick={() => setSelectedSpeech(null)}
                className="px-4 py-2 text-xs font-bold uppercase tracking-wider bg-white/10 hover:bg-white/20 text-white rounded-xl transition-colors shrink-0"
              >
                Close Video
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  </header>
  );
}
