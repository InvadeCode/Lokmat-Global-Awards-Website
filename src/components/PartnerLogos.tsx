import { motion } from "motion/react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";

const partners = [
  { name: "Partner 1", url: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
  { name: "Partner 2", url: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
  { name: "Partner 3", url: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" },
  { name: "Partner 4", url: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" },
  { name: "Partner 5", url: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" },
  { name: "Partner 6", url: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" },
  { name: "Partner 7", url: "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg" },
  { name: "Partner 8", url: "https://upload.wikimedia.org/wikipedia/commons/b/b8/Lenovo_logo_2015.svg" },
];

export default function PartnerLogos() {
  const [emblaRef] = useEmblaCarousel({ loop: true, dragFree: true }, [
    AutoScroll({ playOnInit: true, speed: 1.5, stopOnInteraction: false, stopOnMouseEnter: false })
  ]);

  return (
    <section className="bg-white py-[77px] lg:py-[115px] border-b border-gray-100">
      <div className="w-[100vw] px-[3%]">
        <div className="text-center mb-[82px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-red-600 font-bold tracking-[0.3em] uppercase text-sm mb-4 block">Our Network</span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#111111]">
              Trusted By Global Partners
            </h2>
          </motion.div>
        </div>

        <div className="relative">
          {/* Gradient Edges for Blur Effect */}
          <div className="absolute top-0 bottom-0 left-0 w-24 md:w-48 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 bottom-0 right-0 w-24 md:w-48 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          {/* Slider */}
          <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
            <div className="flex touch-pan-y items-center">
              {partners.map((partner, index) => (
                <div 
                  key={index} 
                  className="flex-[0_0_auto] min-w-[150px] md:min-w-[200px] px-6 md:px-10 opacity-60 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0 flex items-center justify-center"
                >
                  <img 
                    src={partner.url} 
                    alt={partner.name} 
                    className="h-8 md:h-12 w-auto object-contain pointer-events-none" 
                    loading="lazy" 
                  />
                </div>
              ))}
              {/* Duplicate for seamless infinite scrolling */}
              {partners.map((partner, index) => (
                <div 
                  key={`dup-${index}`} 
                  className="flex-[0_0_auto] min-w-[150px] md:min-w-[200px] px-6 md:px-10 opacity-60 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0 flex items-center justify-center"
                >
                  <img 
                    src={partner.url} 
                    alt={partner.name} 
                    className="h-8 md:h-12 w-auto object-contain pointer-events-none" 
                    loading="lazy" 
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
