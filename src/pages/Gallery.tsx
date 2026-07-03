import Navbar from "@/src/components/Navbar";
import { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "@/src/components/Footer";
import { motion } from "motion/react";
import { ArrowDown } from "lucide-react";

import galImg1 from "@/src/assets/images/regenerated_image_1781851211887.jpg";
import galImg2 from "@/src/assets/images/regenerated_image_1781771489896.jpg";
import galImg3 from "@/src/assets/images/regenerated_image_1781771494283.jpg";
import galImg4 from "@/src/assets/images/regenerated_image_1781771497526.jpg";
import galImg5 from "@/src/assets/images/regenerated_image_1781850977043.jpg";
import galImg6 from "@/src/assets/images/regenerated_image_1781851022066.jpg";
import galImg7 from "@/src/assets/images/regenerated_image_1781771508431.jpg";
import galImg8 from "@/src/assets/images/regenerated_image_1781850983557.jpg";
import galImg9 from "@/src/assets/images/regenerated_image_1781850987032.jpg";
import galImg10 from "@/src/assets/images/regenerated_image_1781771514614.jpg";
import galImg11 from "@/src/assets/images/regenerated_image_1781851037770.jpg";
import galImg12 from "@/src/assets/images/regenerated_image_1781851041625.jpg";

const GALLERY_IMAGES = [
  galImg1,
  galImg2,
  galImg3,
  galImg4,
  galImg5,
  galImg6,
  galImg7,
  galImg8,
  galImg9,
  galImg10,
  galImg11,
  galImg12,
  "https://images.unsplash.com/photo-1561489401-fc2876ced162?w=800&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=800&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1509822929063-6b6cfc9b42f2?w=800&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?w=800&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1531058020387-3be344556be6?w=800&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1523580494112-071dcb92a71d?w=800&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?w=800&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=800&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1525610553991-2bede1a236e2?w=800&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1522158637959-30385a09e0aa?w=800&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1519750783826-e2420f4d687f?w=800&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=800&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=800&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=800&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?w=800&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1478147424095-2fc4a49db4c8?w=800&auto=format&fit=crop&q=80",
];

export default function Gallery() {
  const [visibleCount, setVisibleCount] = useState(12);

  const loadMore = () => {
    setVisibleCount(prev => Math.min(prev + 12, GALLERY_IMAGES.length));
  };

  const visibleImages = GALLERY_IMAGES.slice(0, visibleCount);

  return (
    <div className="w-[100vw] overflow-x-hidden min-h-screen bg-[#FAFAFA] text-[#111111] flex flex-col font-sans">
      <Navbar />

      <main className="flex-1 w-[100vw] pt-32 pb-24 md:pt-40 md:pb-32 px-[3%] relative">
        <div className="w-full flex flex-col items-center animate-in fade-in zoom-in-95 duration-700 text-center mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight tracking-tight mb-8">
              Gallery
            </h1>
            <p className="text-base md:text-lg text-gray-500 font-light leading-relaxed max-w-3xl mx-auto">
              Explore moments from Lokmat’s landmark events, award ceremonies, <br className="hidden md:block" /> leadership forums and cultural celebrations.
            </p>
        </div>
        
        <div className="w-full mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[150px] md:auto-rows-[250px] gap-[20px] grid-flow-dense">
                {visibleImages.map((src, idx) => {
                    const pattern = [
                        "col-span-2 row-span-2",
                        "col-span-1 row-span-2",
                        "col-span-1 row-span-2",
                        "col-span-2 row-span-1",
                        "col-span-2 row-span-1",
                        "col-span-2 row-span-2",
                        "col-span-1 row-span-1",
                        "col-span-1 row-span-1",
                        "col-span-2 row-span-1",
                        "col-span-2 row-span-1",
                        "col-span-1 row-span-1",
                        "col-span-1 row-span-1",
                    ];
                    const spanClass = pattern[idx % pattern.length];
                    
                    return (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: (idx % 12) * 0.05 }}
                            className={`group cursor-pointer relative bg-zinc-100 overflow-hidden grayscale-0 hover:grayscale transition-all duration-700 rounded-[6px] ${spanClass}`}
                        >
                            <img 
                                src={src} 
                                alt={`Gallery image ${idx + 1}`} 
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                loading="lazy"
                                referrerPolicy="no-referrer"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 pointer-events-none" />
                        </motion.div>
                    );
                })}
            </div>

            {visibleCount < GALLERY_IMAGES.length && (
                <div className="mt-16 flex justify-center">
                    <button 
                        onClick={loadMore}
                        className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 border border-gray-300 text-[#111111] rounded-full overflow-hidden transition-all duration-300 hover:border-[#111111] hover:bg-gray-50"
                    >
                        <span className="relative z-10 font-bold tracking-widest uppercase text-sm">Load More</span>
                        <ArrowDown className="relative z-10 w-4 h-4 transition-transform group-hover:translate-y-1" />
                    </button>
                </div>
            )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
