import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { LokmatEvent } from "@/src/types";

import { formatDate } from "@/src/lib/utils";

interface SimpleEventCardProps {
  event: LokmatEvent;
}

export default function SimpleEventCard({ event }: SimpleEventCardProps) {
  const isUpcoming = event.category.toLowerCase().includes("upcoming");
  
  return (
    <div className={`w-full h-full bg-white rounded-xl border border-gray-100 p-6 flex flex-col transition-colors cursor-pointer ${isUpcoming ? 'hover:border-red-600' : 'hover:border-gray-300'}`}>
      <div className="flex-1 flex flex-col">
        <span className={`text-[11px] font-bold tracking-widest uppercase mb-4 ${isUpcoming ? 'text-red-500' : 'text-gray-500'}`}>
          {event.category}
        </span>
        
        <h3 className={`text-xl lg:text-2xl font-bold leading-tight mb-8 ${isUpcoming ? 'text-red-600' : 'text-[#111111]'}`}>
          {(() => {
            const parts = event.title.split(' – ');
            const eventName = parts[0];
            const eventPlaceYear = parts[1];
            return (
              <span className="inline-flex flex-wrap items-baseline gap-x-2">
                <span>{eventName}</span>
                {eventPlaceYear && (
                  <span className="font-normal text-gray-500 text-base lg:text-lg">
                    – {eventPlaceYear}
                  </span>
                )}
              </span>
            );
          })()}
        </h3>
      </div>
      
      <div className="mt-auto flex items-center justify-between border-t border-gray-100 pt-4">
        <span className="text-gray-500 text-sm font-medium">
          {formatDate(event.date)} | {event.location.split(',')[0]}
        </span>
        
        <Link to={`/event/${event.id}`} className={`h-10 w-10 rounded-full border flex items-center justify-center transition-transform duration-300 hover:scale-110 ${isUpcoming ? 'border-red-600 text-red-600 hover:bg-red-600 hover:text-white' : 'border-gray-200 text-gray-500 hover:border-[#111111] hover:text-[#111111]'}`}>
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
