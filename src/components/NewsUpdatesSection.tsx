import { motion } from "motion/react";
import { MoveRight } from "lucide-react";

export default function NewsUpdatesSection() {
  const news = [
    {
      date: "Oct 12, 2024",
      title: "Lokmat Maharashtrian of the Year 2024 Nominees Announced",
      category: "Press Release"
    },
    {
      date: "Sep 28, 2024",
      title: "New Cultural Conclave Set to Launch in Pune this Winter",
      category: "Announcement"
    },
    {
      date: "Aug 15, 2024",
      title: "Impact Report: How the Women Summit changes lives.",
      category: "Editorial"
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-white border-t border-gray-100">
      <div className="w-[100vw] px-[3%]">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold leading-[1.12] tracking-tight text-[#111111]">
              News & <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-500 pr-2">Updates</span>
            </h2>
          </motion.div>
          <motion.button 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm font-bold uppercase tracking-widest text-red-600 hover:text-red-700 flex items-center gap-2 group"
          >
            All Updates
            <MoveRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer border-b border-gray-200 pb-8 hover:border-red-600 transition-colors"
            >
              <div className="flex justify-between items-center mb-4">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">{item.date}</span>
                <span className="text-[10px] font-bold text-red-600 bg-red-50 px-2 py-1 uppercase">{item.category}</span>
              </div>
              <h3 className="text-xl font-medium leading-snug group-hover:text-red-600 transition-colors">
                {item.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
