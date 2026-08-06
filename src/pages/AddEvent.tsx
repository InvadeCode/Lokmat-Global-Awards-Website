import { useState, type ChangeEvent, type FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { useEvents } from "@/src/hooks/useEvents";
import { LokmatEvent } from "@/src/types";

export default function AddEvent() {
  const navigate = useNavigate();
  const { addEvent } = useEvents();
  const [success, setSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [formData, setFormData] = useState<Omit<LokmatEvent, "id" | "createdAt">>({
    title: "",
    date: "",
    location: "",
    description: "",
    category: "Award",
    imageUrl: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Fallback image if empty
    const finalData = {
      ...formData,
      imageUrl: formData.imageUrl.trim() || "https://images.unsplash.com/photo-1505236858219-8359eb29e329?q=80&w=2062&auto=format&fit=crop"
    };

    const added = await addEvent(finalData);
    setIsSubmitting(false);
    
    if (added) {
      setSuccess(true);
      setTimeout(() => {
        navigate("/");
      }, 2000);
    }
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#111111] flex flex-col pt-12 pb-24 font-sans">
      <div className="w-[100vw] px-[3%] max-w-3xl mx-auto">
        
        {/* Navigation */}
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-gray-500 hover:text-red-600 transition-colors mb-16 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm tracking-widest uppercase font-bold">Back to Showcase</span>
        </button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Publish an <span className="text-red-600">Event</span>
          </h1>
          <p className="text-gray-500 font-light text-lg mb-12">
            Secure CMS endpoint for internal Lokmat publishers. Details entered here will be immediately reflected on the public showcase.
          </p>

          <AnimatePresence mode="wait">
            {success ? (
              <motion.div 
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center p-16 bg-red-50 border border-red-200 rounded-2xl text-center space-y-6 shadow-sm"
              >
                <CheckCircle2 className="w-16 h-16 text-red-600" />
                <h3 className="text-2xl font-bold text-[#111111]">Event Published Safely</h3>
                <p className="text-gray-500">Redirecting to the main showcase...</p>
              </motion.div>
            ) : (
              <motion.form 
                key="form"
                onSubmit={handleSubmit}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-8 bg-white p-8 md:p-12 rounded-3xl border border-gray-100 shadow-sm"
              >
                
                <div className="space-y-2">
                  <label htmlFor="title" className="text-sm font-medium text-gray-700">Event Title</label>
                  <input 
                    required
                    type="text"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    placeholder="e.g. Lokmat Connect 2026"
                    className="w-full bg-[#FAFAFA] border border-gray-200 rounded-xl px-4 py-3 text-[#111111] placeholder-gray-400 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-all"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label htmlFor="date" className="text-sm font-medium text-gray-700">Date</label>
                    <input 
                      required
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full bg-[#FAFAFA] border border-gray-200 rounded-xl px-4 py-3 text-[#111111] placeholder-gray-400 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-all [color-scheme:light]"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="category" className="text-sm font-medium text-gray-700">Category</label>
                    <select
                      required
                      id="category"
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      className="w-full bg-[#FAFAFA] border border-gray-200 rounded-xl px-4 py-3 text-[#111111] focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-all appearance-none"
                    >
                      <option value="Award">Award Ceremony</option>
                      <option value="Summit">Summit</option>
                      <option value="Conclave">Conclave</option>
                      <option value="Cultural">Cultural Event</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="location" className="text-sm font-medium text-gray-700">Location</label>
                  <input 
                    required
                    type="text"
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="e.g. NSCI Dome, Mumbai"
                    className="w-full bg-[#FAFAFA] border border-gray-200 rounded-xl px-4 py-3 text-[#111111] placeholder-gray-400 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="description" className="text-sm font-medium text-gray-700">Summary / Description</label>
                  <textarea 
                    required
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Describe the significance of the event..."
                    className="w-full bg-[#FAFAFA] border border-gray-200 rounded-xl px-4 py-3 text-[#111111] placeholder-gray-400 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-all resize-none"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="imageUrl" className="text-sm font-medium text-gray-700">Cover Image URL (Optional)</label>
                  <input 
                    type="url"
                    id="imageUrl"
                    name="imageUrl"
                    value={formData.imageUrl}
                    onChange={handleChange}
                    placeholder="https://example.com/image.jpg"
                    className="w-full bg-[#FAFAFA] border border-gray-200 rounded-xl px-4 py-3 text-[#111111] placeholder-gray-400 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-all"
                  />
                </div>

                <button 
                  disabled={isSubmitting}
                  type="submit"
                  className="w-full bg-[#111111] text-white hover:bg-red-600 font-bold py-4 rounded-2xl hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed mt-4 uppercase tracking-[0.2em] text-sm shadow-md"
                >
                  {isSubmitting ? "Publishing..." : "Publish Event to Live Showcase"}
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
