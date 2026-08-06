import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import aboutImg from "../assets/images/regenerated_image_1781771489896.jpg";

interface AboutSectionProps {
  showButton?: boolean;
}

export default function AboutSection({ showButton = true }: AboutSectionProps) {
  return (
    <section className="border-t border-gray-100 bg-[#FAFAFA] relative overflow-hidden py-12 md:py-20">
      {/* Decorative background blur */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-red-600/5 rounded-full mix-blend-multiply filter blur-[100px] -translate-y-1/2 pointer-events-none" />

      <div className="w-[100vw] px-[3%]">
        <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-[90px]">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 xl:w-[45%] pr-4 pb-4 lg:pr-6 lg:pb-6"
          >
            <div className="relative aspect-[10/9] w-full group cursor-pointer">
              <div className="absolute inset-0 bg-red-600 translate-x-4 translate-y-4 rounded-[12px] transition-transform duration-500 ease-out group-hover:translate-x-6 group-hover:translate-y-6" />
              <img 
                src={aboutImg} 
                alt="About Lokmat Events" 
                loading="lazy"
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover rounded-[12px] grayscale group-hover:grayscale-0 transition-all duration-700 shadow-xl group-hover:-translate-x-2 group-hover:-translate-y-2"
              />
              {/* Overlay Text */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur border border-white/50 p-6 rounded-[12px] shadow-xl transition-all duration-500 ease-out group-hover:-translate-x-2 group-hover:-translate-y-4 group-hover:shadow-2xl">
                <p className="text-sm font-bold tracking-[0.2em] uppercase text-red-600 mb-2">Since 1971</p>
                <p className="text-[#111111] font-medium text-lg group-hover:text-red-600 transition-colors duration-300">Pioneering Regional Journalism & Culture</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 xl:w-[55%] space-y-8"
          >
            <div>
              <span className="text-red-600 font-bold tracking-[0.3em] uppercase text-sm mb-4 block">The Legacy</span>
              <h2 className="text-4xl md:text-6xl font-bold leading-[1.1] tracking-tight text-[#111111]">
                Shaping <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-500 pr-2">Narratives</span><br/>
                That Inspire India
              </h2>
            </div>
            
            <p className="text-lg text-gray-600 leading-relaxed font-light">
              Lokmat Events & Awards brings together influential leaders, creators, entrepreneurs, artists, policymakers, industry voices and changemakers through high-impact events, awards, summits and cultural platforms.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed font-light">
              Built on Lokmat’s trusted media legacy, every experience is designed to celebrate excellence, spark meaningful conversations, create national visibility and recognise the people and ideas shaping India’s future.
            </p>

            {showButton && (
              <div className="pt-4">
                <Link to="/about" className="inline-flex items-center gap-4 text-[#111111] hover:text-red-600 group transition-colors uppercase tracking-[0.2em] font-bold text-sm">
                  <span>Discover Our History</span>
                  <div className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center group-hover:border-red-600 transition-colors">
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
