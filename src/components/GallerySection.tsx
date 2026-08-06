import { motion } from "motion/react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";

const image1 = "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=800";
const image2 = "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80&w=800";
const image3 = "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=800";
const image4 = "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=800";
const image5 = "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800";
const image6 = "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=800";
const image7 = "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=800";

export default function GallerySection() {
  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7
  ];

  const [emblaRef] = useEmblaCarousel(
    { loop: true, align: "center", dragFree: true },
    [AutoScroll({ playOnInit: true, speed: 1.5, stopOnInteraction: false })]
  );

  return (
    <section className="py-24 md:py-32 bg-white overflow-hidden flex flex-col">
      <div className="w-[100vw] px-[3%] mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
            Curated <span className="bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">Gallery</span>
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mt-6"></div>
        </motion.div>
      </div>

      <div className="relative w-full">
        {/* Edge Blur Overlays */}
        <div className="absolute top-0 left-0 w-16 md:w-32 lg:w-48 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 w-16 md:w-32 lg:w-48 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
        
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex touch-pan-y flex-row">
            {images.map((src, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 px-2 lg:px-4"
              >
                <div className="relative overflow-hidden rounded-xl w-[600px] h-[400px] group shadow-sm bg-gray-100">
                  <img 
                    src={src} 
                    alt={`Gallery image ${index + 1}`} 
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
