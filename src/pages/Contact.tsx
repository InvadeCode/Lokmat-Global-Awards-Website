import React, { useState, useEffect } from "react";
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";
import { motion, AnimatePresence } from "motion/react";
import { Mail, Phone, MapPin, ArrowUpRight, HelpCircle, ChevronDown, ChevronUp, Send, CheckCircle, Globe, Users } from "lucide-react";

export default function Contact() {
  // AIO, GEO, and SEO Best Practices: Dynamic Title and Description Updates
  useEffect(() => {
    document.title = "Contact Our Global Offices & Press Bureau | Lokmat Events";
    
    // Update Meta Description dynamically for SEO/AIO scrapers
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Get in touch with Lokmat Premium Events. Access department contacts for sponsorships, press accreditation, speaker nominations, or locate regional offices in Maharashtra & India.");
    }
  }, []);

  // Department contact specifics
  const departments = [
    {
      title: "Corporate Sponsorships",
      email: "sponsor@lokmat.com",
      phone: "+91-22-6635-5555 (Ext. 204)",
      desc: "For corporate integrations, brand activations, and premium delegates."
    },
    {
      title: "Press & PR Bureau",
      email: "press@lokmat.com",
      phone: "+91-22-6635-5555 (Ext. 112)",
      desc: "For media credentials, press releases, interview bookings, and photos."
    },
    {
      title: "Speaker Bureau & Jury",
      email: "speakers@lokmat.com",
      phone: "+91-22-6635-5555 (Ext. 301)",
      desc: "To nominate industry figures or inquire about panel agendas."
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
      answer: "Yes, our nomination windows typically open 4-5 months prior to the respective award ceremony. You can submit your candidacy through the official category nomination links published on our website or by contacting our Speaker Bureau directly with your corporate portfolio."
    },
    {
      question: "Are global conventions (e.g. London, Singapore) open to general attendees?",
      answer: "Global chapters are invite-only curated forums targeting trade delegates, policymakers, and corporate sponsors. However, a limited number of premium delegate passes are allocated for external executives. You can request a delegate pass by filling out our partnership or contact form."
    },
    {
      question: "How can I obtain press credentials for a Lokmat Event?",
      answer: "Members of registered news outlets and trade journals can apply for press accreditation. Please email press@lokmat.com at least 14 working days before the scheduled event with your credentials and coverage outline. Late applications are not entertained."
    },
    {
      question: "Where are your main administrative offices located?",
      answer: "Our primary corporate office is Lokmat Media Pvt. Ltd., located in Mumbai, Maharashtra, India. We also have key regional headquarters in Nagpur, Pune, Aurangabad, and New Delhi, as well as coordinating teams in London and Dubai."
    }
  ];

  // States
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "General Inquiry",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const toggleFaq = (idx: number) => {
    setOpenFaqIdx(openFaqIdx === idx ? null : idx);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
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
      email: "",
      subject: "General Inquiry",
      message: ""
    });
    setSubmitted(false);
  };

  return (
    <div className="w-[100vw] overflow-x-hidden min-h-screen bg-[#FAFAFA] text-[#111111] flex flex-col font-sans">
      <Navbar />

      <main className="flex-1 w-[100vw] pt-[159px] pb-24 md:pt-[195px] md:pb-32 px-[3%] relative">
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
            
            {/* Location Cards */}
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left mb-20 max-w-6xl mx-auto">
              <div className="bg-white p-10 border border-gray-150 rounded-2xl shadow-sm flex flex-col justify-between group hover:border-red-200 transition-colors duration-300">
                <div>
                  <MapPin className="w-8 h-8 text-red-600 mb-6" />
                  <h3 className="text-xl font-bold mb-3">Headquarters</h3>
                  <p className="text-gray-500 leading-relaxed font-light text-sm">
                    Lokmat Media Pvt. Ltd.<br />
                    Lokmat Bhawan, Mumbai,<br />
                    Maharashtra, 400011, India
                  </p>
                </div>
                <div className="pt-6 border-t border-gray-100 mt-6 flex items-center justify-between text-xs text-gray-400 group-hover:text-red-600 transition-colors">
                  <span>Get Driving Directions</span>
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              <div className="bg-white p-10 border border-gray-150 rounded-2xl shadow-sm flex flex-col justify-between group hover:border-red-200 transition-colors duration-300">
                <div>
                  <Mail className="w-8 h-8 text-red-600 mb-6" />
                  <h3 className="text-xl font-bold mb-3">Electronic Mail</h3>
                  <p className="text-gray-500 leading-relaxed font-light text-sm">
                    For events: <a href="mailto:events@lokmat.com" className="font-medium text-[#111111] hover:text-red-600 transition-colors">events@lokmat.com</a><br />
                    For general press: <a href="mailto:press@lokmat.com" className="font-medium text-[#111111] hover:text-red-600 transition-colors">press@lokmat.com</a>
                  </p>
                </div>
                <div className="pt-6 border-t border-gray-100 mt-6 flex items-center justify-between text-xs text-gray-400 group-hover:text-red-600 transition-colors">
                  <span>Open Mail Application</span>
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              <div className="bg-white p-10 border border-gray-150 rounded-2xl shadow-sm flex flex-col justify-between group hover:border-red-200 transition-colors duration-300">
                <div>
                  <Phone className="w-8 h-8 text-red-600 mb-6" />
                  <h3 className="text-xl font-bold mb-3">Direct Support</h3>
                  <p className="text-gray-500 leading-relaxed font-light text-sm">
                    Switchboard: +91-22-6635-5555<br />
                    Office Hours: Mon-Fri, 9am - 6pm IST<br />
                    Coordinating desk: Mumbai
                  </p>
                </div>
                <div className="pt-6 border-t border-gray-100 mt-6 flex items-center justify-between text-xs text-gray-400 group-hover:text-red-600 transition-colors">
                  <span>Call Reception Desk</span>
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </div>

            {/* Department Split Grid */}
            <section className="w-full py-16 bg-white border-t border-b border-gray-100 mb-20">
              <div className="max-w-6xl mx-auto px-4 text-left">
                <div className="mb-12">
                  <span className="text-red-600 font-bold tracking-[0.3em] uppercase text-xs mb-3 block">Specialized Channels</span>
                  <h2 className="text-2xl md:text-4xl font-bold tracking-tight">Departmental Directories</h2>
                  <p className="text-gray-500 font-light text-sm md:text-base mt-2">
                    Avoid delays by routing your business needs directly to the responsible administrative coordinators.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {departments.map((dept, i) => (
                    <div key={i} className="border border-gray-150 p-8 rounded-2xl bg-[#FAFAFA] hover:border-red-100 transition-all duration-300">
                      <h3 className="text-lg font-bold text-[#111111] mb-2">{dept.title}</h3>
                      <p className="text-gray-500 font-light text-sm leading-relaxed mb-6">{dept.desc}</p>
                      <div className="space-y-2 text-xs font-mono">
                        <p className="text-gray-400">Email: <a href={`mailto:${dept.email}`} className="text-red-600 hover:underline">{dept.email}</a></p>
                        <p className="text-gray-400 font-sans">Tel: <span className="text-[#111111] font-medium">{dept.phone}</span></p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Split Contact Form and FAQ */}
            <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 text-left mb-16 items-start">
              
              {/* Form Block (7 Columns) */}
              <div className="lg:col-span-7 bg-white p-8 md:p-12 border border-gray-150 rounded-2xl shadow-sm">
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
                          <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Email Address *</label>
                          <input 
                            type="email" 
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-red-600 focus:bg-white transition-all" 
                            placeholder="e.g. aditi@example.com" 
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
                        className="bg-white border border-gray-150 rounded-xl overflow-hidden shadow-sm transition-all duration-300"
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
                              className="border-t border-gray-100 bg-neutral-50/50"
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
