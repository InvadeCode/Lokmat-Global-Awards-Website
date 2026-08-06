import React, { useState } from "react";
import { X, Send, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function EnquiryModal({ isOpen, onClose }: EnquiryModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    designation: "",
    industry: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Store inquiry locally
    try {
      const existing = localStorage.getItem("lokmat_enquiries");
      const list = existing ? JSON.parse(existing) : [];
      list.push({ ...formData, id: Date.now(), timestamp: new Date().toISOString() });
      localStorage.setItem("lokmat_enquiries", JSON.stringify(list));
    } catch {
      // LocalStorage fallback handling
    }

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      designation: "",
      industry: "",
      message: "",
    });
    setIsSubmitted(false);
  };

  const handleClose = () => {
    handleReset();
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-red-600/90 backdrop-blur-md">
          {/* Backdrop Overlay Click to Close */}
          <div
            className="fixed inset-0 bg-red-700/60 transition-opacity"
            onClick={handleClose}
            aria-hidden="true"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative z-10 w-full max-w-xl my-8 bg-white rounded-3xl shadow-2xl overflow-hidden border border-red-100"
          >
            {/* Form Header */}
            <div className="p-6 sm:p-8 bg-white border-b border-gray-100 flex items-start justify-between gap-4">
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-red-50 text-red-600 font-bold text-xs uppercase tracking-widest mb-2">
                  Lokmat Experiences
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] tracking-tight">
                  Enquiry Form
                </h2>
                <p className="text-xs sm:text-sm text-gray-500 font-light mt-1">
                  Please fill in your details below and our team will connect with you.
                </p>
              </div>

              {/* Close Icon Button */}
              <button
                onClick={handleClose}
                aria-label="Close modal"
                className="p-2.5 rounded-full bg-gray-100 text-gray-500 hover:text-[#111111] hover:bg-red-50 hover:text-red-600 transition-colors shrink-0 focus:outline-none"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Form Content / Success State */}
            <div className="p-6 sm:p-8 bg-white">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="enquiry-name" className="text-xs font-bold text-gray-700 uppercase tracking-wider">
                      Name <span className="text-red-600">*</span>
                    </label>
                    <input
                      id="enquiry-name"
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Aditi Sharma"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm font-medium text-[#111111] placeholder:text-gray-400 focus:outline-none focus:border-red-600 focus:bg-white transition-all"
                    />
                  </div>

                  {/* Grid for Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Email ID */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="enquiry-email" className="text-xs font-bold text-gray-700 uppercase tracking-wider">
                        Email ID <span className="text-red-600">*</span>
                      </label>
                      <input
                        id="enquiry-email"
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. aditi@company.com"
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm font-medium text-[#111111] placeholder:text-gray-400 focus:outline-none focus:border-red-600 focus:bg-white transition-all"
                      />
                    </div>

                    {/* Phone Number */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="enquiry-phone" className="text-xs font-bold text-gray-700 uppercase tracking-wider">
                        Phone Number <span className="text-red-600">*</span>
                      </label>
                      <input
                        id="enquiry-phone"
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="e.g. +91 98200 12345"
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm font-medium text-[#111111] placeholder:text-gray-400 focus:outline-none focus:border-red-600 focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  {/* Grid for Designation & Industry */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Designation */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="enquiry-designation" className="text-xs font-bold text-gray-700 uppercase tracking-wider">
                        Designation <span className="text-red-600">*</span>
                      </label>
                      <input
                        id="enquiry-designation"
                        type="text"
                        name="designation"
                        required
                        value={formData.designation}
                        onChange={handleChange}
                        placeholder="e.g. VP Marketing / Managing Director"
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm font-medium text-[#111111] placeholder:text-gray-400 focus:outline-none focus:border-red-600 focus:bg-white transition-all"
                      />
                    </div>

                    {/* Industry */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="enquiry-industry" className="text-xs font-bold text-gray-700 uppercase tracking-wider">
                        Industry <span className="text-red-600">*</span>
                      </label>
                      <input
                        id="enquiry-industry"
                        type="text"
                        name="industry"
                        required
                        value={formData.industry}
                        onChange={handleChange}
                        placeholder="e.g. Media, Technology, Real Estate"
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm font-medium text-[#111111] placeholder:text-gray-400 focus:outline-none focus:border-red-600 focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  {/* Brief Message */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="enquiry-message" className="text-xs font-bold text-gray-700 uppercase tracking-wider">
                      Brief Message <span className="text-red-600">*</span>
                    </label>
                    <textarea
                      id="enquiry-message"
                      name="message"
                      rows={3}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Share brief details regarding your enquiry..."
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm font-medium text-[#111111] placeholder:text-gray-400 focus:outline-none focus:border-red-600 focus:bg-white transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 px-6 bg-red-600 hover:bg-red-700 text-white font-bold uppercase tracking-widest text-xs rounded-xl shadow-lg shadow-red-600/30 flex items-center justify-center gap-2 transition-all hover:scale-[1.01] active:scale-[0.99] disabled:opacity-60"
                    >
                      {isSubmitting ? (
                        <span>Submitting...</span>
                      ) : (
                        <>
                          <span>Submit Enquiry</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              ) : (
                /* Submission Success View */
                <div className="py-8 text-center flex flex-col items-center justify-center space-y-4">
                  <div className="w-16 h-16 bg-red-50 text-red-600 rounded-full flex items-center justify-center shadow-inner">
                    <CheckCircle2 className="w-10 h-10 text-red-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#111111]">Enquiry Submitted!</h3>
                  <p className="text-sm text-gray-500 max-w-sm font-light leading-relaxed">
                    Thank you, <strong>{formData.name}</strong>. Your enquiry has been safely received. Our partnership team will contact you shortly via <strong>{formData.email}</strong>.
                  </p>
                  <div className="pt-4 flex gap-3">
                    <button
                      onClick={handleClose}
                      className="px-6 py-3 bg-red-600 text-white font-bold text-xs uppercase tracking-widest rounded-xl hover:bg-red-700 transition-colors shadow-md"
                    >
                      Close Window
                    </button>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
