import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

export default function PartnersCtaSection() {
  return (
    <section className="py-16 md:py-24 bg-[#FAFAFA] border-t border-gray-200">
      <div className="w-[100vw] px-[3%]">
        <div className="bg-gradient-to-r from-red-600 via-orange-500 to-red-600 bg-[length:200%_auto] animate-gradient p-10 md:p-16 rounded-[2.5rem] shadow-[0_20px_60px_-15px_rgba(220,38,38,0.5)] relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-12 text-white border border-white/20">
          
          {/* subtle background pattern */}
          <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay" />
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-white/30 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-black/20 rounded-full blur-3xl pointer-events-none" />
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 space-y-6 relative z-10"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-white leading-tight">
              <span>Partner With </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-white drop-shadow-sm">Excellence</span>
            </h2>
            <p className="text-white/90 text-lg max-w-2xl font-medium leading-relaxed">
              Align your brand with Lokmat’s most prestigious events, awards and leadership platforms. Reach influential audiences through trusted media visibility, high-impact on-ground experiences and curated opportunities built for national recognition and global brand presence.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative z-10 flex flex-col sm:flex-row gap-4"
          >
            <button className="bg-white text-red-600 px-8 py-5 font-bold uppercase tracking-widest text-sm hover:bg-gray-50 hover:scale-105 transition-all duration-300 rounded-2xl flex items-center justify-center gap-2 shadow-xl group">
              <span>Enquire Now</span>
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
