import React, { useState, useEffect } from "react";
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";
import PartnersCtaSection from "@/src/components/PartnersCtaSection";
import { motion, AnimatePresence } from "motion/react";
import { Check, ShieldCheck, Briefcase, Award, Sparkles, Building, Send, Globe, Users, Trophy } from "lucide-react";

export default function Partners() {
  // AIO, GEO, and SEO Best Practices: Dynamic Title and Description Updates
  useEffect(() => {
    document.title = "Our Corporate Partners & Sponsorships | Lokmat Events";
    
    // Update Meta Description dynamically for SEO/AIO scrapers
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Explore elite corporate sponsorship opportunities with Lokmat Premium Events. Review our partnership packages, audience reach, past sponsors, and submit dynamic inquiry decks.");
    }
  }, []);

  const stats = [
    { label: "Aggregate Media Reach", value: "50M+" },
    { label: "Influential Speakers", value: "150+" },
    { label: "Global Summit Locations", value: "10+" },
    { label: "Active Brands Aligned", value: "500+" }
  ];

  const packages = [
    {
      name: "Platinum Global Partner",
      price: "Inquire for Pricing",
      popular: true,
      tagline: "Absolute category exclusivity & prominent dual branding across all summits.",
      features: [
        "Primary title dual-logo placement on all global marketing collaterals",
        "Keynote speaker slot for company executive in 3 international chapters",
        "VVIP front-row lounge seating (10 invites per global convention)",
        "Double-spread full-page editorial feature in Lokmat Daily newspaper",
        "Exclusive post-event networking dinner hosting rights with delegates",
        "Premium full-screen video ads played during the primary award broadcast"
      ]
    },
    {
      name: "Gold Presenting Partner",
      price: "Inquire for Pricing",
      popular: false,
      tagline: "Exceptional visual prominence and dedicated session hosting privileges.",
      features: [
        "Secondary presenting logo placement on global conclave backdrops",
        "Dedicated panel moderator or panelist slot for company representative",
        "VIP seating tier (6 invites per national/international chapter)",
        "Full-page premium advertisement in the official Summit Souvenir booklet",
        "Prominent logo feature on all digital & social media campaign channels",
        "Dedicated product/service experience kiosk at the venue lobby"
      ]
    },
    {
      name: "Technology & Innovation Ally",
      price: "Inquire for Pricing",
      popular: false,
      tagline: "Position your brand as the technical engine of our digital experience.",
      features: [
        "Exclusive 'Powered by' branding on the official mobile app and website",
        "Interactive display integrations inside the main networking lounge",
        "Custom technical demonstration showcase slot on the main stage",
        "4 VIP passes to all domestic and international events",
        "Targeted opt-in email newsletter campaign feature to 50,000+ delegates",
        "Technical whitepaper inclusion in the digital delegate kits"
      ]
    }
  ];

  const categorizedSponsors = [
    {
      category: "Finance & Institutional",
      brands: ["State Bank of India", "HDFC Bank", "ICICI Prudential", "LIC India", "Union Bank"]
    },
    {
      category: "Real Estate & Infrastructure",
      brands: ["Lodha Group", "Godrej Properties", "Hiranandani", "K Raheja Corp", "Runwal"]
    },
    {
      category: "Technology & Automobile",
      brands: ["Tata Motors", "Mahindra & Mahindra", "Jio Platforms", "Infosys", "Intel India"]
    },
    {
      category: "Lifestyle, Hospitality & Luxury",
      brands: ["The Taj Hotels", "Shangri-La International", "The Savoy London", "Air India", "Raymond"]
    }
  ];

  // Contact Form States
  const [formData, setFormData] = useState({
    companyName: "",
    contactPerson: "",
    email: "",
    phone: "",
    selectedTier: "Platinum Global Partner",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.companyName || !formData.email || !formData.contactPerson) {
      alert("Please fill out the required fields.");
      return;
    }
    // Save locally
    const existingInquiries = localStorage.getItem("lokmat_partner_inquiries");
    const list = existingInquiries ? JSON.parse(existingInquiries) : [];
    list.push({ ...formData, id: Date.now(), timestamp: new Date().toISOString() });
    localStorage.setItem("lokmat_partner_inquiries", JSON.stringify(list));
    setSubmitted(true);
  };

  const handleReset = () => {
    setFormData({
      companyName: "",
      contactPerson: "",
      email: "",
      phone: "",
      selectedTier: "Platinum Global Partner",
      message: ""
    });
    setSubmitted(false);
  };

  return (
    <div className="w-[100vw] overflow-x-hidden min-h-screen bg-[#FAFAFA] text-[#111111] flex flex-col font-sans">
      <Navbar />

      <main className="flex-1 w-[100vw] pt-32 pb-24 md:pt-40 md:pb-32 relative">
        
        {/* Page Title */}
        <div className="w-full px-[3%] text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <span className="text-red-600 font-bold tracking-[0.3em] uppercase text-xs mb-3 block">Collaborative Growth</span>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight tracking-tight mb-6">
              Our Corporate Partners
            </h1>
            <p className="text-lg md:text-xl text-gray-500 font-light leading-relaxed max-w-3xl mx-auto">
              Align your brand with regional pride and global influence. Explore prestigious integration packages designed for high-value business networks.
            </p>
          </motion.div>
        </div>

        {/* Reach & Influence Statistics Banner */}
        <section className="mb-20">
          <div className="w-[100vw] px-[3%]">
            <div className="bg-white border border-gray-150 rounded-3xl p-8 md:p-12 shadow-sm grid grid-cols-2 lg:grid-cols-4 gap-8 divide-y md:divide-y-0 lg:divide-x divide-gray-150">
              {stats.map((stat, i) => (
                <div key={i} className={`flex flex-col items-center text-center p-4 ${i > 1 ? 'pt-8 md:pt-4' : ''}`}>
                  <span className="text-4xl md:text-6xl font-bold text-red-600 tracking-tight mb-2">
                    {stat.value}
                  </span>
                  <span className="text-gray-500 font-light text-xs md:text-sm uppercase tracking-widest">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Existing CTA Section (Provides visual entry point) */}
        <div className="mb-24">
          <PartnersCtaSection />
        </div>

        {/* Sponsorship Packages / Grid */}
        <section className="py-20 bg-white border-t border-b border-gray-100">
          <div className="w-[100vw] px-[3%]">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-red-600 font-bold tracking-[0.3em] uppercase text-xs mb-3 block">Sponsorship Tiers</span>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Our Curated Packages</h2>
              <p className="text-gray-500 font-light mt-4 text-base md:text-lg">
                Choose the perfect level of visibility to align with your corporate marketing roadmap, media strategies, and networking requirements.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {packages.map((pkg, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className={`border rounded-3xl p-8 flex flex-col justify-between relative shadow-sm transition-all duration-300 ${
                    pkg.popular 
                      ? "border-red-600 bg-[#FAFAFA] ring-2 ring-red-600/10 shadow-xl lg:-translate-y-2" 
                      : "border-gray-150 bg-white hover:border-red-200 hover:shadow-lg"
                  }`}
                >
                  {pkg.popular && (
                    <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-red-600 text-white font-bold text-xs uppercase tracking-widest px-4 py-1.5 rounded-full shadow-md flex items-center gap-1">
                      <Sparkles className="w-3.5 h-3.5" /> High Impact Exclusivity
                    </span>
                  )}

                  <div>
                    <h3 className="text-2xl font-bold text-[#111111] mb-2">{pkg.name}</h3>
                    <p className="text-gray-400 font-light text-xs uppercase tracking-wider mb-4 font-mono">{pkg.price}</p>
                    <p className="text-gray-600 text-sm font-light leading-relaxed mb-6 pb-6 border-b border-gray-100">
                      {pkg.tagline}
                    </p>

                    <ul className="space-y-4 mb-8">
                      {pkg.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-red-50 text-red-600 flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="w-3.5 h-3.5 stroke-[3]" />
                          </div>
                          <span className="text-gray-600 text-sm font-light leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a 
                    href="#partnership-form"
                    className={`w-full py-4 text-center font-bold uppercase tracking-widest text-xs rounded-xl transition-all duration-300 block ${
                      pkg.popular 
                        ? "bg-red-600 text-white hover:bg-red-700 shadow-md shadow-red-600/20" 
                        : "bg-[#111111] text-white hover:bg-red-600"
                    }`}
                  >
                    Request Integration Kit
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Past Sponsors Showcase */}
        <section className="py-20 bg-[#FAFAFA]">
          <div className="w-[100vw] px-[3%]">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-red-600 font-bold tracking-[0.3em] uppercase text-xs mb-3 block">Proven Trust</span>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Our Past Aligned Brands</h2>
              <p className="text-gray-500 font-light mt-4 text-base md:text-lg">
                India's top corporate companies, public sector undertakings, and global luxury giants trust Lokmat to host their elite brand narratives.
              </p>
            </div>

            <div className="space-y-10 max-w-5xl mx-auto">
              {categorizedSponsors.map((cat, idx) => (
                <div key={idx} className="bg-white border border-gray-150 p-8 rounded-2xl shadow-sm">
                  <h3 className="text-xs uppercase tracking-widest font-bold text-gray-400 mb-6 font-mono border-b border-gray-100 pb-3 flex items-center gap-2">
                    <Building className="w-4 h-4 text-red-600" /> {cat.category}
                  </h3>
                  <div className="flex flex-wrap gap-4">
                    {cat.brands.map((brand, bIdx) => (
                      <span 
                        key={bIdx}
                        className="px-5 py-3 bg-[#FAFAFA] border border-gray-150 rounded-xl text-sm font-medium text-[#111111] hover:border-red-200 hover:bg-red-50/20 hover:text-red-600 transition-all duration-300 cursor-default"
                      >
                        {brand}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partnership Inquiry Form */}
        <section id="partnership-form" className="py-24 bg-white border-t border-gray-100">
          <div className="w-[100vw] px-[3%]">
            <div className="max-w-4xl mx-auto bg-[#FAFAFA] border border-gray-150 rounded-[2rem] p-8 md:p-16 shadow-sm">
              <div className="text-center max-w-2xl mx-auto mb-12">
                <span className="text-red-600 font-bold tracking-[0.3em] uppercase text-xs mb-3 block">Corporate Inquiry</span>
                <h2 className="text-3xl font-bold tracking-tight text-[#111111]">Become A Corporate Sponsor</h2>
                <p className="text-gray-500 font-light mt-3 text-sm md:text-base">
                  Leave your commercial coordinates below. Our global sponsorship and partnership integration desk will revert within 24 business hours with custom pitch presentations.
                </p>
              </div>

              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.form 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit} 
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-2">
                        <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Company / Brand Name *</label>
                        <input 
                          type="text" 
                          required
                          value={formData.companyName}
                          onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                          className="w-full p-4 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600/20 transition-all" 
                          placeholder="e.g. Tata Group" 
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Contact Person Name *</label>
                        <input 
                          type="text" 
                          required
                          value={formData.contactPerson}
                          onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                          className="w-full p-4 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600/20 transition-all" 
                          placeholder="e.g. John Smith" 
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-2">
                        <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Corporate Email Address *</label>
                        <input 
                          type="email" 
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full p-4 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600/20 transition-all" 
                          placeholder="e.g. partner@tatamotors.com" 
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Direct Telephone Number</label>
                        <input 
                          type="tel" 
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full p-4 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600/20 transition-all" 
                          placeholder="e.g. +91 98200 XXXXX" 
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Preferred Integration Tier</label>
                      <select 
                        value={formData.selectedTier}
                        onChange={(e) => setFormData({ ...formData, selectedTier: e.target.value })}
                        className="w-full p-4 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-red-600 transition-all cursor-pointer font-medium"
                      >
                        <option value="Platinum Global Partner">Platinum Global Partner (Maximum Branding)</option>
                        <option value="Gold Presenting Partner">Gold Presenting Partner (Session Host)</option>
                        <option value="Technology & Innovation Ally">Technology & Innovation Ally</option>
                        <option value="Custom Event Alignment">Custom Event-Specific Association</option>
                      </select>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Specific Target Outcomes / Message</label>
                      <textarea 
                        rows={4} 
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full p-4 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600/20 transition-all resize-none" 
                        placeholder="Detail any target locations (e.g. London, Dubai) or customized brand integrations of interest..."
                      />
                    </div>

                    <button 
                      type="submit"
                      className="group relative inline-flex items-center justify-center gap-3 px-10 py-5 bg-[#111111] text-white rounded-xl overflow-hidden transition-all duration-300 hover:bg-red-600 hover:shadow-xl self-start"
                    >
                      <span className="relative z-10 font-bold tracking-widest uppercase text-xs">Submit Partnership Inquiry</span>
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
                    <div className="w-20 h-20 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto shadow-md">
                      <ShieldCheck className="w-10 h-10" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold text-[#111111]">Inquiry Received Successfully!</h3>
                      <p className="text-gray-500 font-light max-w-lg mx-auto text-sm md:text-base">
                        Thank you for reaching out to Lokmat. A copy of your inquiry for <strong>{formData.selectedTier}</strong> has been logged in our regional system. Our corporate relations director will email you within 24 hours.
                      </p>
                    </div>
                    <button 
                      onClick={handleReset}
                      className="px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-xl font-bold text-xs uppercase tracking-widest transition-colors"
                    >
                      Submit Another Inquiry
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
