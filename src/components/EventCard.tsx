import React from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Calendar, MapPin, ArrowUpRight } from "lucide-react";
import { LokmatEvent } from "@/src/types";
import { formatDate } from "@/src/lib/utils";
import OptimizedImage from "@/src/components/OptimizedImage";

interface EventCardProps {
  event: LokmatEvent;
  index: number;
}

const EventCard: React.FC<EventCardProps> = ({ event, index }) => {
  return (
    <Link to={`/event/${event.id}`} className="block w-full h-full" onClick={() => window.scrollTo(0,0)}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="group relative flex flex-col xl:flex-row gap-6 p-6 w-full h-full items-stretch bg-white border border-gray-200 hover:border-red-600 transition-colors rounded-[20px] cursor-pointer"
      >
      {/* Visual Anchor */}
      <div className="w-full xl:w-[45%] overflow-hidden rounded-[14px] bg-gray-50 relative border border-gray-100 shadow-sm flex-shrink-0 min-h-[200px]">
        <div className="absolute inset-0 bg-gradient-to-t from-[black]/30 to-transparent z-10" />
        <motion.div 
          initial={{ scale: 1.2 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="absolute inset-0 w-full h-full"
        >
          <OptimizedImage 
            src={event.imageUrl} 
            alt={event.title}
            className="absolute inset-0 object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 ease-out"
          />
        </motion.div>
        <div className="absolute top-4 left-4 z-20">
          <span className={`px-3 py-1 rounded-sm text-[10px] font-bold tracking-widest uppercase bg-white/95 backdrop-blur-md shadow-sm ${event.category.includes('Upcoming') ? 'text-red-600 animate-pulse' : 'text-[#111111]'}`}>
            {event.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col justify-center space-y-4 pb-16 xl:pb-0 relative">
        <div className="space-y-3">
          <h3 className="text-xl lg:text-2xl font-bold leading-tight text-[#111111] group-hover:text-red-600 transition-colors duration-300">
            {event.title.split(' – ').map((part, i) => (
              <span key={i}>
                {part}
                {i === 0 && event.title.includes(' – ') && <br />}
              </span>
            ))}
          </h3>
          <p className="text-gray-500 text-sm font-light leading-relaxed line-clamp-4">
            {event.description}
          </p>
        </div>

        <div className="flex flex-col items-start gap-4 pt-2 text-sm font-medium text-gray-500">
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-red-600" />
            <span className="text-base">{formatDate(event.date)}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-red-600" />
            <span className="text-base">{event.location}</span>
          </div>
        </div>
      </div>
      
      {/* Decorative arrow */}
      <div className="absolute bottom-6 right-6 flex items-center justify-center">
        <div className="h-14 w-14 rounded-full border border-red-600 text-red-600 group-hover:border-red-600 group-hover:bg-red-600 flex items-center justify-center group-hover:text-white bg-white shadow-sm transition-transform duration-300 group-hover:scale-110 cursor-pointer">
          <ArrowUpRight className="w-6 h-6" />
        </div>
      </div>
    </motion.div>
    </Link>
  );
}

export default EventCard;
