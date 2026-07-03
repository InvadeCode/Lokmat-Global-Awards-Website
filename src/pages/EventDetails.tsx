import Navbar from "@/src/components/Navbar";
import { useParams, Link } from "react-router-dom";
import { useState, useRef } from "react";
import { useEvents } from "@/src/hooks/useEvents";
import { ArrowLeft, Calendar, MapPin, Share2, Clock, Users, ArrowUpRight, Volume2, VolumeX } from "lucide-react";
import Footer from "@/src/components/Footer";
import { motion } from "motion/react";
import { formatDate } from "@/src/lib/utils";
import EventCard from "@/src/components/EventCard";

export default function EventDetails() {
  const { id } = useParams<{ id: string }>();
  const { events, loading, error } = useEvents();
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const event = events.find((e) => e.id === id);
  const otherEventsList = events.filter((e) => e.id !== id && e.category.toLowerCase().includes("upcoming")).slice(0, 2);

  return (
    <div className="w-[100vw] overflow-x-hidden min-h-screen bg-[#FAFAFA] text-[#111111] flex flex-col font-sans">
      {/* Header Navigation */}
      <Navbar />

      {/* Main Content Start */}
      <main className="flex-1 w-[100vw] pt-32 pb-24 md:pt-40 md:pb-32 px-[3%] relative">
        
        {loading ? (
           <div className="flex flex-col items-center justify-center py-32 space-y-4">
             <div className="w-12 h-12 border-4 border-red-600/20 border-t-red-600 rounded-full animate-spin"></div>
             <p className="text-gray-400 font-mono text-sm tracking-widest uppercase">Loading event details</p>
           </div>
        ) : error ? (
           <div className="flex flex-col items-center justify-center py-32 space-y-4">
             <p className="text-red-600 font-mono text-sm tracking-widest uppercase">Error Loading Event</p>
           </div>
        ) : !event ? (
           <div className="flex flex-col items-center justify-center py-32 space-y-4">
             <h2 className="text-4xl font-bold tracking-tight">Event not found</h2>
             <Link to="/" className="text-red-600 flex items-center gap-2 hover:underline">
               <ArrowLeft className="w-4 h-4" /> Back to Home
             </Link>
           </div>
        ) : (
          <div className="w-full flex flex-col items-center animate-in fade-in zoom-in-95 duration-700">
            
            <div className="w-full mb-8">
              <Link to="/" className="inline-flex items-center gap-2 text-sm font-bold tracking-widest uppercase text-gray-500 hover:text-red-600 transition-colors">
                <ArrowLeft className="w-4 h-4" /> 
                Return to Experiences
              </Link>
            </div>

            {/* Event Title */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="w-full mb-8"
            >
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-500 pb-2">
                {event.title.split(' – ').map((part, i) => (
                  <span key={i}>
                    {part}
                    {i === 0 && event.title.includes(' – ') && <br />}
                  </span>
                ))}
              </h1>
            </motion.div>

            {/* Top Media */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="w-full rounded-3xl overflow-hidden aspect-video relative border border-gray-100 shadow-sm mb-12 bg-black group"
            >
              {event.videoUrl ? (
                <>
                  <video 
                    ref={videoRef}
                    src={event.videoUrl} 
                    autoPlay 
                    loop 
                    muted={isMuted}
                    playsInline
                    className="w-full h-full object-contain md:object-cover cursor-pointer"
                    onClick={toggleMute}
                  />
                  <button 
                    onClick={toggleMute}
                    className="absolute bottom-6 right-6 z-20 w-12 h-12 rounded-full bg-black/50 text-white backdrop-blur-md flex items-center justify-center hover:bg-black/70 transition-colors opacity-0 group-hover:opacity-100"
                  >
                    {isMuted ? <VolumeX className="w-6 h-6" /> : <Volume2 className="w-6 h-6" />}
                  </button>
                </>
              ) : (
                <img 
                  src={event.imageUrl} 
                  alt={event.title} 
                  className="w-full h-full object-cover"
                />
              )}
              <div className="absolute top-6 left-6 z-20">
                <span className="px-4 py-2 rounded-sm text-xs font-bold tracking-widest uppercase bg-white/95 text-[#111111] backdrop-blur-md shadow-sm">
                  {event.category}
                </span>
              </div>
            </motion.div>

            <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 w-full">
              {/* Left Column - At A Glance */}
              <div className="w-full lg:w-4/12 flex flex-col gap-8 order-2 lg:order-1">
                <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] sticky top-32">
                  <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-gray-400 mb-6">At A Glance</h4>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center text-red-600 flex-shrink-0">
                        <Calendar className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 font-medium uppercase tracking-widest">Date</p>
                        <p className="font-semibold text-lg mt-1">{formatDate(event.date)}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center text-red-600 flex-shrink-0">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 font-medium uppercase tracking-widest">Location</p>
                        <p className="font-semibold text-lg mt-1">{event.location}</p>
                      </div>
                    </div>

                  </div>
                </div>
              </div>

              {/* Right Column - Details */}
              <div className="w-full lg:w-8/12 flex flex-col justify-start order-1 lg:order-2">
                <motion.div 
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="text-xl md:text-2xl text-gray-500 font-light leading-relaxed mb-12 mt-4">
                    {event.description}
                  </div>
                  
                  {/* Additional dummy content to make it look like a detailed page */}
                  <div className="space-y-12">
                     <div>
                        <h4 className="text-xl font-bold mb-6 tracking-tight">Event Gallery</h4>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                          {(event?.gallery || [
                            "https://static.wixstatic.com/media/548938_e7d535855ae14a3eab331ff35834918c~mv2.jpg",
                            "https://static.wixstatic.com/media/548938_16da964fa0a64825b25b0d428948b731~mv2.jpg",
                            "https://static.wixstatic.com/media/548938_bd414512485f4f8d829f43bf08dddcd7~mv2.jpg",
                            "https://static.wixstatic.com/media/548938_4f37d9ddf20743fe9a52e3db9eacc36d~mv2.jpg",
                            "https://static.wixstatic.com/media/548938_8e1a682b5aeb4f79b98b882fa070c4f4~mv2.jpg",
                            "https://static.wixstatic.com/media/548938_67cac5d58a9e41628c58f9bf88989ffe~mv2.jpg"
                          ]).map((img, idx) => (
                            <img key={idx} src={img} alt={`Gallery ${idx + 1}`} className="w-full aspect-[4/3] object-cover rounded-xl shadow-sm hover:opacity-90 transition-opacity cursor-pointer bg-gray-100" />
                          ))}
                        </div>
                     </div>
                  </div>
                </motion.div>
                
                {/* Mobile version of facts */}
                <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm mt-12 block lg:hidden w-full">
                  <div className="flex flex-col sm:flex-row gap-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center text-red-600 flex-shrink-0">
                        <Calendar className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 font-medium uppercase tracking-widest">Date</p>
                        <p className="font-semibold text-base mt-1">{new Date(event.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center text-red-600 flex-shrink-0">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 font-medium uppercase tracking-widest">Location</p>
                        <p className="font-semibold text-base mt-1">{event.location}</p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
            
            {/* Explore More Events Section */}
            {otherEventsList.length > 0 && (
              <div className="mt-32 border-t border-gray-200 pt-16">
                <div className="flex items-center justify-between mb-12">
                  <h3 className="text-3xl font-bold tracking-tight">Explore More Events</h3>
                  <Link to="/all-events" className="text-sm font-bold text-gray-500 uppercase tracking-widest hover:text-red-600 transition-colors flex items-center gap-2">
                    View All <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {otherEventsList.map((otherEvent) => (
                    <EventCard key={otherEvent.id} event={otherEvent} />
                  ))}
                </div>
              </div>
            )}
            
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
