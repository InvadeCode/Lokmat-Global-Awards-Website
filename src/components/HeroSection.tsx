import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { useRef, useState } from "react";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { useEvents } from "@/src/hooks/useEvents";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import { Link } from "react-router-dom";
import { formatDate } from "@/src/lib/utils";
import image1 from "../assets/images/regenerated_image_1782986234817.jpg";
import image2 from "../assets/images/regenerated_image_1782985355671.jpg";
import image4 from "../assets/images/regenerated_image_1782985362017.jpg";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const { events } = useEvents();
  // Filter out dummy upcoming events for the latest events section
  const latestEvents = events.filter(e => !e.title.includes("Digital Transformation") && !e.title.includes("Youth Conclave")).slice(0, 6);
  const [hoveredEventId, setHoveredEventId] = useState<string | null>(null);

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const [emblaRef] = useEmblaCarousel(
    { loop: true, align: "center", dragFree: true },
    [AutoScroll({ playOnInit: true, speed: 1.2, stopOnInteraction: false })]
  );

  // Slider Images Array
  const carouselImages = [
    image1,
    image2,
    image4,
  ];

  return (
    <div ref={containerRef} className="relative h-[100vh] w-[100vw] flex flex-col overflow-hidden bg-[#FAFAFA] pt-24 pb-8 px-[3%]">
      {/* Abstract Background Elements */}
      <motion.div style={{ y, opacity }} className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[#FAFAFA] z-10 bg-opacity-90" />
        <div className="absolute inset-0 z-10 bg-[linear-gradient(to_right,rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_0%,#000_70%,transparent_100%)]" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-lokmat-red rounded-full mix-blend-multiply filter blur-[120px] opacity-5 text-red-500 animate-pulse z-0" />
        <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-orange-500 rounded-full mix-blend-multiply filter blur-[150px] opacity-10 z-0" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 w-full flex flex-col h-full justify-between mt-4 md:mt-8">
        
        <div className="flex flex-col lg:flex-row items-center lg:items-center gap-16 lg:gap-12 w-full mt-auto mb-auto">
          {/* Left Side: Text */}
          <div className="w-full lg:w-[50%] xl:w-[50%] flex flex-col text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="space-y-6"
            >
            <motion.p 
              initial={{ opacity: 0, tracking: "0em" }}
              animate={{ opacity: 1, tracking: "0.2em" }}
              transition={{ duration: 1.2, delay: 0.2 }}
              className="text-red-600 text-xs md:text-sm font-bold uppercase tracking-[0.2em] mb-4 z-10"
            >
              A Legacy of Excellence
            </motion.p>
            
            <h1 className="text-4xl md:text-6xl lg:text-[4.5rem] xl:text-[5.5rem] font-bold leading-none tracking-tight mt-5 mb-3 z-10 relative flex flex-col gap-3">
              <div className="relative flex items-end">
                <img 
                  src="/lokmat-logo.png" 
                  alt="LOKMAT" 
                  className="h-12 md:h-16 lg:h-[4.5rem] xl:h-[5.5rem] w-auto object-contain object-left -mb-4 -ml-2 translate-y-[6px]"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                    const fallback = document.getElementById('lokmat-fallback-text');
                    if (fallback) fallback.style.display = 'block';
                  }}
                />
                <span id="lokmat-fallback-text" className="text-[#111111] hidden -mb-2 translate-y-[6px]">LOKMAT</span>
              </div>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 block pb-4 pr-6 -mr-6 text-[calc(100%+5px)]">Experiences</span>
            </h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="text-gray-600 max-w-xl text-lg md:text-xl font-light mt-6"
            >
              A curated platform for Lokmat’s flagship events and awards, celebrating leadership, culture, talent, enterprise and public impact across India, globe and beyond.
            </motion.p>
          </motion.div>
        </div>

        {/* Right Side: Gallery Slider */}
        <div className="w-full lg:w-[50%] relative mt-10 md:mt-0 items-center justify-center hidden md:flex">
          
          {/* Abstract background shapes behind slider */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] xl:w-[90%] aspect-square border-[1px] border-dashed border-red-600/30 rounded-full z-0 pointer-events-none"
          />
          <motion.div 
            animate={{ rotate: -360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] xl:w-[66%] aspect-square border-[1px] border-red-600/10 rounded-full z-0 pointer-events-none"
          />

          {/* Slider Container with Mask */}
          <div 
            className="w-full overflow-hidden z-10 [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]" 
            ref={emblaRef}
          >
            <div className="flex touch-pan-y flex-row items-center">
              {carouselImages.map((src, index) => (
                <div 
                  key={index} 
                  className="flex-[0_0_auto] min-w-0 px-4 xl:px-6"
                >
                  <motion.div 
                    whileHover={{ scale: 1.02, rotate: index % 2 === 0 ? 2 : -2 }}
                    className="relative overflow-hidden rounded-3xl w-[600px] h-[400px] shadow-xl border-[6px] border-white group"
                  >
                    <img 
                      src={src} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                      alt={`Experience ${index + 1}`} 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Full Width Latest Events Below the Text and Slider */}
      {latestEvents.length > 0 && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="relative z-10 w-full border-t border-gray-200 mt-8 pt-8 pb-4"
        >
          <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-gray-400 mb-6">Latest Events</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {latestEvents.map((event) => (
              <Link 
                key={event.id}
                to={`/event/${event.id}`}
                className="group border border-gray-200 rounded-xl p-4 flex flex-col justify-between transition-colors duration-300 hover:border-red-200 hover:bg-neutral-50 h-36"
                onMouseEnter={() => setHoveredEventId(event.id)}
                onMouseLeave={() => setHoveredEventId(null)}
              >
                <div className="flex flex-col gap-1 w-full">
                  <span className={`text-[9px] font-mono uppercase tracking-widest ${event.category.includes('Upcoming') ? 'text-red-600 font-bold animate-pulse' : 'text-gray-500'}`}>
                    {event.category}
                  </span>
                  <h4 className="text-sm font-semibold text-[#111111] group-hover:text-red-600 transition-colors duration-300 line-clamp-2">
                    {event.title.split(' – ').map((part, i) => (
                      <span key={i}>
                        {part}
                        {i === 0 && event.title.includes(' – ') && <br />}
                      </span>
                    ))}
                  </h4>
                </div>
                <div className="flex items-center justify-between w-full mt-2">
                  <span className="text-[10px] text-gray-400 font-medium">{formatDate(event.date)} | {event.location.split(',')[0]}</span>
                  <div className="w-6 h-6 flex-shrink-0 rounded-full border border-gray-200 flex items-center justify-center group-hover:border-red-600 group-hover:bg-red-50 text-gray-400 group-hover:text-red-600 transition-all transform group-hover:scale-110">
                    <ArrowUpRight className="w-3 h-3" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </motion.div>
      )}

      </div>
    </div>
  );
}
