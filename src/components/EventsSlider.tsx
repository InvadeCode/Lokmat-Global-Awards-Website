import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import EventCard from "@/src/components/EventCard";
import { LokmatEvent } from "@/src/types";
import { motion } from "motion/react";

interface EventsSliderProps {
  events: LokmatEvent[];
}

export default function EventsSlider({ events }: EventsSliderProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, align: "start", skipSnaps: false });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  const chunkedEvents = [];
  for (let i = 0; i < events.length; i += 2) {
    chunkedEvents.push(events.slice(i, i + 2));
  }

  return (
    <div className="relative w-full">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex touch-pan-y flex-row items-stretch">
          {chunkedEvents.map((chunk, chunkIndex) => (
            <div className="flex-[0_0_100%] min-w-0 pr-4 md:pr-12 flex flex-col lg:flex-row gap-8 items-stretch" key={chunkIndex}>
              {chunk.map((event, index) => (
                <div className="w-full lg:w-1/2 h-full flex flex-col cursor-pointer" key={event.id}>
                  <EventCard event={event} index={index} />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex gap-4 mt-8 md:mt-12 justify-center md:justify-end pr-4 md:pr-12">
        <button
          onClick={scrollPrev}
          disabled={!prevBtnEnabled}
          className={`w-14 h-14 rounded-2xl border flex items-center justify-center transition-all duration-300 ${
            prevBtnEnabled 
              ? "border-gray-300 text-[#111111] hover:border-red-600 hover:text-red-600 hover:bg-red-50 hover:scale-105" 
              : "border-gray-100 text-gray-300 cursor-not-allowed"
          }`}
          aria-label="Previous slide"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
        <button
          onClick={scrollNext}
          disabled={!nextBtnEnabled}
          className={`w-14 h-14 rounded-2xl border flex items-center justify-center transition-all duration-300 cursor-pointer ${
            nextBtnEnabled 
              ? "border-red-600 text-red-600 hover:bg-red-600 hover:text-white hover:scale-105" 
              : "border-gray-100 text-gray-300 cursor-not-allowed"
          }`}
          aria-label="Next slide"
        >
          <ArrowRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}
