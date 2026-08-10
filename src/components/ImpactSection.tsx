import { motion } from "motion/react";

export default function ImpactSection() {
  const stats = [
    { 
      label: "Continents", 
      value: "3", 
      suffix: "Asia · Europe · Africa", 
      color: "from-red-500 to-orange-500" 
    },
    { 
      label: "Distinguished Awardees", 
      value: "400+", 
      suffix: "Recognised Across Editions", 
      color: "from-orange-500 to-yellow-400" 
    },
    { 
      label: "Global Attendees", 
      value: "2,000+", 
      suffix: "Leaders, Changemakers and Delegates", 
      color: "from-yellow-500 to-red-500" 
    },
  ];

  return (
    <section className="border-t border-gray-100 bg-white py-16 md:py-22 relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.4, 0.6, 0.4],
          rotate: [0, 90, 0]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-gradient-to-r from-red-100 to-orange-100 rounded-full mix-blend-multiply filter blur-[100px] pointer-events-none" 
      />
      
      <motion.div 
        animate={{ 
          scale: [1, 1.5, 1],
          opacity: [0.3, 0.5, 0.3],
          y: [0, 50, 0]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-r from-orange-100 to-yellow-100 rounded-full mix-blend-multiply filter blur-[100px] pointer-events-none" 
      />

      <div className="w-[100vw] px-[3%] my-[3%] relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
          <div className="lg:w-2/5 pt-1">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex flex-col justify-between sm:h-[397px]"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold leading-[1.12] tracking-tight text-[#111111]">
                <span className="block text-[#111111]">Impact by the</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-500 block mt-1.5 pr-2">Numbers</span>
              </h2>
              
              <div className="bg-white border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-6 rounded-2xl relative overflow-hidden my-[3%]">
                <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-red-500 to-orange-400" />
                <p className="text-sm md:text-base italic text-gray-600 leading-snug font-sans relative z-10 pl-2">
                  "Creating national impact through recognition, culture and meaningful conversations. Lokmat Experiences brings together influential voices, iconic platforms and high-impact events that set new benchmarks for credibility, scale and prestige."
                </p>
                {/* Quote mark decoration */}
                <span className="absolute -bottom-8 -right-4 text-8xl text-gray-50 font-serif font-black pointer-events-none select-none leading-none">"</span>
              </div>
            </motion.div>
          </div>

          <div className="lg:w-3/5 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 w-full p-[3%]">
            {stats.map((stat, i) => (
              <div key={stat.label} className={`flex flex-col m-[3%] ${i === 1 ? 'sm:mt-8' : i === 2 ? 'sm:mt-16' : ''}`}>
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.7, delay: i * 0.2 }}
                  className="h-full"
                >
                  <motion.div
                    whileHover={{ y: -8, scale: 1.02 }}
                    animate={{ y: [0, -8, 0] }}
                    transition={{ 
                      y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 },
                      scale: { duration: 0.2 },
                    }}
                    className="flex flex-col items-center justify-center text-center p-7 sm:p-8 bg-white/70 backdrop-blur-md border border-gray-100 rounded-[2rem] shadow-[0_12px_36px_rgba(0,0,0,0.035)] hover:shadow-[0_24px_50px_rgba(0,0,0,0.07)] transition-shadow duration-300 relative overflow-hidden h-full aspect-[4/5] sm:aspect-auto sm:h-[397px]"
                  >
                    {/* Hover Glow */}
                    <div className={`absolute inset-0 opacity-0 hover:opacity-[0.03] transition-opacity duration-500 bg-gradient-to-br ${stat.color} pointer-events-none`} />
                    
                    <h3 className={`text-[52px] xl:text-[68px] font-black tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-br ${stat.color} relative z-10`}>
                      {stat.value}
                    </h3>
                    
                    <div className="w-full relative z-10 mt-auto">
                      <span className="text-[#111111] text-xs sm:text-sm font-bold uppercase tracking-widest block mb-3 leading-snug">
                        {stat.label}
                      </span>
                      <span className="font-sans text-[11px] sm:text-xs font-medium text-gray-600 bg-white/90 border border-gray-100 px-3.5 py-2 rounded-2xl inline-block shadow-sm max-w-full leading-snug">
                        {stat.suffix}
                      </span>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
