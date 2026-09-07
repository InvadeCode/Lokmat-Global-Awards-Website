import React, { useState, useEffect } from "react";
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";
import { motion, AnimatePresence } from "motion/react";
import { Phone, MapPin, ArrowUpRight, HelpCircle, ChevronDown, ChevronUp, Send, CheckCircle } from "lucide-react";

export default function Contact() {
  // AIO, GEO, and SEO Best Practices: Dynamic Title and Description Updates
  useEffect(() => {
    document.title = "Contact Our Offices & Bureau | Lokmat Events";
    
    // Update Meta Description dynamically for SEO/AIO scrapers
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Get in touch with Lokmat Media Pvt. Ltd. Office Address: Law College Rd, Shanti Sheela Society, Erandwane, Pune, Maharashtra 411038. Phone: 020 6684 8586.");
    }
  }, []);

  // Department contact specifics
  const departments = [
    {
      title: "Corporate Sponsorships",
      phone: "020 6684 8586",
      desc: "For corporate integrations, brand activations, and premium delegate partnerships."
    },
    {
      title: "Press & PR Bureau",
      phone: "020 6684 8586",
      desc: "For media credentials, press releases, interview bookings, and editorial inquiries."
    },
    {
      title: "Speaker Bureau & Jury",
      phone: "020 6684 8586",
      desc: "To nominate industry figures, submit proposals, or inquire about conclave agendas."
    }
  ];

  // FAQ Accordion Data
  const faqs = [
    {
      question: "How are award nominees selected and evaluated?",
      answer: "Nominations go through a multi-stage evaluation. First, an independent research agency vets all submissions. Next, an eminent external jury consisting of industry veterans, academic experts, and retired public servants reviews the shortlisted entries to select the final winners. No internal Lokmat employees have voting rights in the jury decision."
    },
    {
      question: "Can I nominate my own company or brand for an award?",
      answer: "Yes, our nomination windows typically open 4-5 months prior to the respective award ceremony. You can submit your candidacy through the official category nomination links published on our website or by contacting our desk at 020 6684 8586 with your corporate portfolio."
    },
    {
      question: "Are global conventions (e.g. London, Singapore) open to general attendees?",
      answer: "Global chapters are invite-only curated forums targeting trade delegates, policymakers, and corporate sponsors. However, a limited number of premium delegate passes are allocated for external executives. You can request a delegate pass by calling our office or filling out our contact form."
    },
    {
      question: "How can I obtain press credentials for a Lokmat Event?",
      answer: "Members of registered news outlets and trade journals can apply for press accreditation. Please contact our communications desk at 020 6684 8586 or submit an inquiry through our contact form at least 14 working days before the scheduled event with your credentials and coverage outline."
    },
    {
      question: "Where are your main administrative offices located?",
      answer: "Our primary corporate office is Lokmat Media Pvt. Ltd., located at Law College Rd, Shanti Sheela Society, Erandwane, Pune, Maharashtra 411038."
    }
  ];

  // States
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    subject: "General Inquiry",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const toggleFaq = (idx: number) => {
    setOpenFaqIdx(openFaqIdx === idx ? null : idx);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.message) {
      alert("Please fill in all required fields.");
      return;
    }
    // Save contact message locally
    const existingMessages = localStorage.getItem("lokmat_contact_messages");
    const list = existingMessages ? JSON.parse(existingMessages) : [];
    list.push({ ...formData, id: Date.now(), timestamp: new Date().toISOString() });
    localStorage.setItem("lokmat_contact_messages", JSON.stringify(list));
    setSubmitted(true);
  };

  const handleReset = () => {
    setFormData({
      name: "",
      phone: "",
      subject: "General Inquiry",
      message: ""
    });
    setSubmitted(false);
  };

  return (
    <div className="w-[100vw] overflow-x-hidden min-h-screen bg-[#FAFAFA] text-[#111111] flex flex-col font-sans">
      <Navbar />

      <main className="flex-1 w-[100vw] pt-[159px] pb-16 md:pt-[195px] md:pb-24 px-[3%] relative">
        <div className="w-full flex flex-col items-center text-center">
            
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto mb-16"
            >
              <span className="text-red-600 font-bold tracking-[0.3em] uppercase text-xs mb-3 block">Global Coordinates</span>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight tracking-tight mb-6">
                Connect With Us
              </h1>
              <p className="text-lg md:text-xl text-gray-500 font-light leading-relaxed max-w-3xl mx-auto">
                Reach out to our global offices, connect with specialized departmental bureaus, or explore our frequently asked questions.
              </p>
            </motion.div>
            
            {/* Location Cards: Balanced 2-Column Layout */}
            <div className="w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 text-left mb-16 md:mb-20">
              <div className="bg-white p-8 md:p-10 border border-gray-200 rounded-2xl shadow-sm flex flex-col justify-between group hover:border-red-200 hover:shadow-md transition-all duration-300">
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
                    <MapPin className="w-7 h-7" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-red-600 mb-2 block">Corporate Headquarters</span>
                  <h3 className="text-2xl font-bold mb-4 text-[#111111]">Office Address</h3>
                  <p className="text-gray-600 leading-relaxed font-normal text-base">
                    <strong className="text-[#111111] font-bold block mb-1">Lokmat Media Pvt. Ltd.</strong>
                    Law College Rd, Shanti Sheela Society,<br />
                    Erandwane, Pune, Maharashtra 411038
                  </p>
                </div>
                <a 
                  href="https://maps.google.com/?q=Lokmat+Media+Pvt.+Ltd.+Law+College+Rd+Pune+411038"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pt-6 border-t border-gray-100 mt-8 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-gray-500 group-hover:text-red-600 transition-colors"
                >
                  <span>View on Google Maps</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>

              <div className="bg-white p-8 md:p-10 border border-gray-200 rounded-2xl shadow-sm flex flex-col justify-between group hover:border-red-200 hover:shadow-md transition-all duration-300">
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
                    <Phone className="w-7 h-7" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-red-600 mb-2 block">Direct Communication</span>
                  <h3 className="text-2xl font-bold mb-4 text-[#111111]">Phone Number</h3>
                  <div className="text-gray-600 leading-relaxed text-base space-y-2">
                    <a 
                      href="tel:02066848586"
                      className="text-2xl sm:text-3xl font-bold text-[#111111] hover:text-red-600 transition-colors block tracking-tight mb-2"
                    >
                      020 6684 8586
                    </a>
                    <p className="text-sm text-gray-500 font-light">
                      Office Hours: Monday – Friday, 9:30 AM – 6:00 PM IST
                    </p>
                    <p className="text-xs text-gray-400 font-mono">
                      Central Switchboard Desk • Pune
                    </p>
                  </div>
                </div>
                <a 
                  href="tel:02066848586"
                  className="pt-6 border-t border-gray-100 mt-8 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-gray-500 group-hover:text-red-600 transition-colors"
                >
                  <span>Call 020 6684 8586</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Department Split Grid */}
            <section className="w-full py-12 md:py-16 bg-white border border-gray-200 rounded-2xl shadow-sm mb-16 md:mb-20 px-6 md:px-12">
              <div className="w-full text-left">
                <div className="mb-10">
                  <span className="text-red-600 font-bold tracking-[0.3em] uppercase text-xs mb-3 block">Specialized Channels</span>
                  <h2 className="text-2xl md:text-4xl font-bold tracking-tight">Departmental Directories</h2>
                  <p className="text-gray-500 font-light text-sm md:text-base mt-2">
                    Avoid delays by routing your business needs directly to the responsible administrative coordinators.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {departments.map((dept, i) => (
                    <div key={i} className="border border-gray-200 p-8 rounded-2xl bg-[#FAFAFA] hover:border-red-200 transition-all duration-300 flex flex-col justify-between">
                      <div>
                        <h3 className="text-lg font-bold text-[#111111] mb-2">{dept.title}</h3>
                        <p className="text-gray-500 font-light text-sm leading-relaxed mb-6">{dept.desc}</p>
                      </div>
                      <div className="pt-4 border-t border-gray-200/60 flex items-center justify-between">
                        <span className="text-xs text-gray-400 font-medium uppercase tracking-wider">Phone</span>
                        <a href="tel:02066848586" className="text-sm font-semibold text-[#111111] hover:text-red-600 transition-colors flex items-center gap-1.5">
                          <Phone className="w-3.5 h-3.5 text-red-600" />
                          {dept.phone}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Split Contact Form and FAQ */}
            <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 text-left mb-8 md:mb-10 items-start">
              
              {/* Form Block (7 Columns) */}
              <div className="lg:col-span-7 bg-white p-8 md:p-12 border border-gray-200 rounded-2xl shadow-sm">
                <h2 className="text-2xl font-bold mb-3">Send us a message</h2>
                <p className="text-gray-400 font-light text-sm leading-relaxed mb-8">
                  Have a general question? Complete the credentials below and we will route it to the appropriate officer.
                </p>

                <AnimatePresence mode="wait">
                  {!submitted ? (
                    <motion.form 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex flex-col gap-6" 
                      onSubmit={handleSubmit}
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="flex flex-col gap-2">
                          <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Full Name *</label>
                          <input 
                            type="text" 
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-red-600 focus:bg-white transition-all" 
                            placeholder="e.g. Aditi Sharma" 
                          />
                        </div>
                        <div className="flex flex-col gap-2">
                          <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Phone Number *</label>
                          <input 
                            type="tel" 
                            required
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-red-600 focus:bg-white transition-all" 
                            placeholder="e.g. 020 6684 8586" 
                          />
                        </div>
                      </div>

                      <div className="flex flex-col gap-2">
                        <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Subject Of Inquiry</label>
                        <select 
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-red-600 focus:bg-white transition-all cursor-pointer font-medium"
                        >
                          <option value="General Inquiry">General Event Query</option>
                          <option value="Award Nominations">Award Nomination Processes</option>
                          <option value="Press Accreditations">Press / Media Accreditation</option>
                          <option value="Website Feedback">Technical Website Issue</option>
                        </select>
                      </div>

                      <div className="flex flex-col gap-2">
                        <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Message Body *</label>
                        <textarea 
                          rows={6} 
                          required
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-red-600 focus:bg-white transition-all resize-none" 
                          placeholder="Please provide complete details regarding your inquiry..." 
                        />
                      </div>

                      <button 
                        type="submit"
                        className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#111111] text-white rounded-2xl overflow-hidden font-bold tracking-widest uppercase text-sm hover:bg-red-600 hover:scale-105 transition-all duration-300 shadow-xl self-start"
                      >
                        <span className="relative z-10">Send Message</span>
                        <Send className="relative z-10 w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                      </button>
                    </motion.form>
                  ) : (
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="text-center py-12 space-y-6"
                    >
                      <div className="w-16 h-16 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto shadow-sm">
                        <CheckCircle className="w-8 h-8" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-xl font-bold">Message Lodged Successfully!</h3>
                        <p className="text-gray-500 font-light text-sm max-w-md mx-auto leading-relaxed">
                          Thank you, <strong>{formData.name}</strong>. Your message regarding <em>{formData.subject}</em> has been safely logged in our communications panel. A response will be issued within 1-2 business days.
                        </p>
                      </div>
                      <button 
                        onClick={handleReset}
                        className="px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-2xl font-bold text-sm uppercase tracking-widest hover:scale-105 transition-all duration-300"
                      >
                        Send Another Message
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* FAQ Block (5 Columns) */}
              <div className="lg:col-span-5 space-y-6">
                <div className="flex items-center gap-2 mb-6">
                  <HelpCircle className="w-6 h-6 text-red-600 shrink-0" />
                  <h2 className="text-2xl font-bold text-[#111111]">F.A.Q. Bureau</h2>
                </div>
                
                <div className="space-y-4">
                  {faqs.map((faq, idx) => {
                    const isOpen = openFaqIdx === idx;
                    return (
                      <div 
                        key={idx} 
                        className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm transition-all duration-300"
                      >
                        <button
                          onClick={() => toggleFaq(idx)}
                          className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-sm text-[#111111] hover:text-red-600 transition-colors"
                        >
                          <span>{faq.question}</span>
                          {isOpen ? <ChevronUp className="w-4 h-4 shrink-0 text-red-600" /> : <ChevronDown className="w-4 h-4 shrink-0 text-gray-400" />}
                        </button>
                        
                        <AnimatePresence initial={false}>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="border-t border-gray-200 bg-neutral-50/50"
                            >
                              <div className="p-5 text-xs text-gray-500 font-light leading-relaxed">
                                {faq.answer}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              </div>

            </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
