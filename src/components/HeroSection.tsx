import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { useEvents } from "@/src/hooks/useEvents";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import { Link } from "react-router-dom";
import { formatDate } from "@/src/lib/utils";

const image1 = "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=800";
const image2 = "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=800";
const image4 = "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=800";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const { events } = useEvents();
  // Latest events section
  const latestEvents = events.slice(0, 6);
  const [, setHoveredEventId] = useState<string | null>(null);

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const [emblaRef] = useEmblaCarousel(
    { loop: true, align: "start", dragFree: true },
    [AutoScroll({ playOnInit: true, speed: 1.2, stopOnInteraction: false })]
  );

  // Original Authentic Event Images
  const carouselImages = [
    {
      src: "https://static.wixstatic.com/media/548938_e7d535855ae14a3eab331ff35834918c~mv2.jpg",
      fallback: image1,
      title: "Singapore Convention"
    },
    {
      src: "https://static.wixstatic.com/media/548938_01de16ecda2648ee8f744a76a35e1a11~mv2.jpg",
      fallback: image2,
      title: "London Savoy Convention"
    },
    {
      src: "https://static.wixstatic.com/media/548938_e27482ebd1ef499db675193aa77055e0~mv2.jpg",
      fallback: image4,
      title: "Dubai International Awards"
    },
    {
      src: "https://static.wixstatic.com/media/548938_31fa24f8914e4eb19bd3b336095f4a0b~mv2.jpg",
      fallback: image1,
      title: "Baku Flame Towers Summit"
    },
    {
      src: "https://static.wixstatic.com/media/548938_c154eed85ef3434684d993283d8b3f5c~mv2.jpg",
      fallback: image2,
      title: "Hong Kong & Macau Summit"
    },
    {
      src: "https://static.wixstatic.com/media/548938_f48ad9abc61a4ff1bb526c86dd36123c~mv2.jpg",
      fallback: image4,
      title: "Cairo One World Summit"
    }
  ];

  return (
    <div ref={containerRef} className="relative h-[100vh] w-[100vw] flex flex-col overflow-hidden bg-[#FAFAFA] pt-20 pb-6 px-[3%]">
      {/* Abstract Background Elements */}
      <motion.div style={{ y, opacity }} className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[#FAFAFA] z-10 bg-opacity-90" />
        <div className="absolute inset-0 z-10 bg-[linear-gradient(to_right,rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_0%,#000_70%,transparent_100%)]" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-lokmat-red rounded-full mix-blend-multiply filter blur-[120px] opacity-5 text-red-500 animate-pulse z-0" />
        <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-orange-500 rounded-full mix-blend-multiply filter blur-[150px] opacity-10 z-0" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 w-full flex flex-col h-full justify-between mt-2 md:mt-4">
        
        <div className="flex flex-col lg:flex-row items-center lg:items-center gap-4 lg:gap-2 w-full mt-auto mb-auto translate-y-[15px]">
          {/* Left Side: Text */}
          <div className="w-full lg:w-[38%] xl:w-[38%] flex flex-col text-left pr-2">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="space-y-4"
            >
              <motion.p 
                initial={{ opacity: 0, tracking: "0em" }}
                animate={{ opacity: 1, tracking: "0.2em" }}
                transition={{ duration: 1.1, delay: 0.2 }}
                className="text-red-600 text-xs md:text-sm font-bold uppercase tracking-[0.2em] mb-2 z-10"
              >
                A Legacy of Excellence
              </motion.p>
              
              <h1 className="text-4xl md:text-5xl lg:text-[4.4rem] xl:text-[5.3rem] font-bold leading-none tracking-tight mt-3 mb-2 z-10 relative flex flex-col gap-2">
                <div className="relative flex items-end">
                  <img 
                    src="/lokmat-logo.png" 
                    alt="LOKMAT" 
                    className="h-11 md:h-15 lg:h-[4.4rem] xl:h-[5.2rem] w-auto object-contain object-left -mb-3 -ml-2 translate-y-[4px]"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                      const fallback = document.getElementById('lokmat-fallback-text');
                      if (fallback) fallback.style.display = 'block';
                    }}
                  />
                  <span id="lokmat-fallback-text" className="text-[#111111] hidden -mb-2 translate-y-[4px]">LOKMAT</span>
                </div>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 block pb-3 pr-4 -mr-4 text-[calc(100%+4px)]">Experiences</span>
              </h1>
              
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.9, delay: 0.5 }}
                className="text-gray-600 max-w-xl text-base md:text-xl font-light mt-4 leading-relaxed"
              >
                A curated platform for Lokmat’s flagship events and awards, celebrating leadership, culture, talent, enterprise and public impact across India, globe and beyond.
              </motion.p>
            </motion.div>
          </div>

          {/* Right Side: Gallery Slider (Width increased to reduce horizontal gap) */}
          <div className="w-full lg:w-[62%] xl:w-[62%] relative mt-8 md:mt-0 items-center justify-center hidden md:flex">
            
            {/* Abstract background shapes behind slider */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] xl:w-[95%] aspect-square border-[1px] border-dashed border-red-600/30 rounded-full z-0 pointer-events-none"
            />
            <motion.div 
              animate={{ rotate: -360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] xl:w-[70%] aspect-square border-[1px] border-red-600/10 rounded-full z-0 pointer-events-none"
            />

            {/* Slider Container with Mask */}
            <div 
              className="w-full overflow-hidden z-10 py-6 [mask-image:linear-gradient(to_right,transparent_0%,black_12%,black_88%,transparent_100%)]" 
              ref={emblaRef}
            >
              <div className="flex touch-pan-y flex-row items-center py-6">
                {carouselImages.map((imgObj, index) => (
                  <div 
                    key={index} 
                    className="flex-[0_0_auto] min-w-0 px-3 xl:px-5 py-4"
                  >
                    <motion.div 
                      whileHover={{ scale: 1.02, rotate: index % 2 === 0 ? 1.5 : -1.5 }}
                      className="relative overflow-hidden rounded-3xl w-[660px] h-[410px] shadow-[0_22px_45px_rgba(0,0,0,0.18)] border-[5px] border-white group"
                    >
                      <img 
                        src={imgObj.src} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                        alt={imgObj.title} 
                        loading="eager"
                        fetchPriority="high"
                        decoding="async"
                        referrerPolicy="no-referrer"
                        onError={(e) => {
                          // Gracefully fall back if network blocks external URL
                          (e.target as HTMLImageElement).src = imgObj.fallback;
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                      <div className="absolute bottom-4 left-6 z-10 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="text-xs font-bold uppercase tracking-widest bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                          {imgObj.title}
                        </span>
                      </div>
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
            transition={{ duration: 0.8, delay: 0.8 }}
            className="relative z-10 w-full border-t border-gray-200 mt-6 pt-6 pb-2"
          >
            <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-gray-400 mb-4">Latest Events</h3>
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

