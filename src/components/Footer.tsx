import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import footerLogo from "../assets/images/regenerated_image_1781776578908.png";
import { navigationData } from "@/src/config/navigation";

export default function Footer() {
  return (
    <footer className="bg-[#e40009] text-white pt-10 md:pt-14 pb-6 relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-800 rounded-full mix-blend-multiply filter blur-[120px] opacity-40 pointer-events-none transform translate-x-1/3 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-red-600 rounded-full mix-blend-multiply filter blur-[100px] opacity-40 pointer-events-none transform -translate-x-1/2 translate-y-1/3"></div>

      <div className="w-full px-[3%] relative z-10">
        
        {/* Top Newsletter Section */}
        <div className="bg-red-800/40 border border-white/10 rounded-2xl p-6 md:p-8 mb-10 flex flex-col md:flex-row items-center justify-between gap-6 backdrop-blur-sm">
          <div className="md:w-1/2">
            <h3 className="text-xl md:text-2xl font-bold mb-2 tracking-tight">Join Our Newsletter</h3>
            <p className="text-red-100 text-sm md:text-base">
              Stay updated with the latest Lokmat events, award announcements,<br className="hidden sm:block" /> and exclusive highlights.
            </p>
          </div>
          <div className="md:w-1/2 w-full">
            <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="w-full px-5 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-red-200 focus:outline-none focus:ring-2 focus:ring-white/50 focus:bg-white/20 transition-all font-medium text-sm"
                required
              />
              <button 
                type="submit" 
                className="px-6 py-3 bg-white text-[#e40009] font-bold uppercase tracking-widest text-xs rounded-xl hover:bg-gray-50 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 whitespace-nowrap shadow-md"
              >
                Subscribe
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>

        {/* Main Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-8 mb-10">
          
          {/* Brand Area */}
          <div className="md:col-span-2 lg:col-span-2 flex flex-col items-start pr-0 lg:pr-12">
            <img 
              src={footerLogo} 
              alt="Lokmat Events Logo" 
              loading="lazy"
              referrerPolicy="no-referrer"
              className="w-[240px] h-[75px] object-contain mb-3"
            />
            <p className="text-red-100 leading-relaxed text-sm">
              Celebrating excellence, leadership, culture, business, entertainment, and community impact through landmark events and prestigious awards.
            </p>
          </div>

          {/* Dynamic Footer Menu */}
          <div className="col-span-1 lg:col-span-2 grid grid-cols-2 md:grid-cols-3 gap-8">
            {navigationData.map((menu) => (
              <div key={menu.label}>
                {menu.href ? (
                  <h4 className="text-lg font-bold mb-4 tracking-wide whitespace-nowrap">
                    {menu.isExternal || menu.href.startsWith("http") ? (
                      <a href={menu.href} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center group whitespace-nowrap">
                        <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 -ml-5 transition-all text-red-300" />
                        <span className="whitespace-nowrap">{menu.label}</span>
                      </a>
                    ) : (
                      <Link to={menu.href} className="hover:text-white transition-colors flex items-center group whitespace-nowrap">
                        <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 -ml-5 transition-all text-red-300" />
                        <span className="whitespace-nowrap">{menu.label}</span>
                      </Link>
                    )}
                  </h4>
                ) : (
                  <h4 className="text-lg font-bold mb-4 tracking-wide whitespace-nowrap">{menu.label}</h4>
                )}
                {menu.items && (
                  <ul className="space-y-3 text-red-100 font-medium text-[15px]">
                    {menu.items.map((item) => (
                      <li key={item.label} className="whitespace-nowrap">
                        {item.isExternal || item.href.startsWith("http") ? (
                          <a href={item.href} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center group whitespace-nowrap">
                            <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 -ml-5 transition-all text-red-300 flex-shrink-0" />
                            <span className="whitespace-nowrap">{item.label}</span>
                          </a>
                        ) : (
                          <Link to={item.href} className="hover:text-white transition-colors flex items-center group whitespace-nowrap">
                            <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 -ml-5 transition-all text-red-300 flex-shrink-0" />
                            <span className="whitespace-nowrap">{item.label}</span>
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-6 border-t border-b border-white/10 mb-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-red-800/40 flex items-center justify-center flex-shrink-0">
              <MapPin className="w-6 h-6 text-red-200" />
            </div>
            <div>
              <p className="text-sm text-red-200 font-medium uppercase tracking-wider mb-1">Corporate Office</p>
              <p className="font-medium">Lokmat Media Pvt. Ltd.<br/>Mumbai, Maharashtra, India</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-red-800/40 flex items-center justify-center flex-shrink-0">
              <Phone className="w-6 h-6 text-red-200" />
            </div>
            <div>
              <p className="text-sm text-red-200 font-medium uppercase tracking-wider mb-1">Phone</p>
              <p className="font-medium">+91 22 1234 5678</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-red-800/40 flex items-center justify-center flex-shrink-0">
              <Mail className="w-6 h-6 text-red-200" />
            </div>
            <div>
              <p className="text-sm text-red-200 font-medium uppercase tracking-wider mb-1">Email</p>
              <a href="mailto:events@lokmat.com" className="font-medium hover:text-red-200 transition-colors">events@lokmat.com</a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-4 text-red-200 text-sm font-medium">
          <p>© 2026 Lokmat GLOCON. All Rights Reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-6">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link>
            <Link to="/disclaimer" className="hover:text-white transition-colors">Disclaimer</Link>
            {/* Hidden CMS Link for Admin */}
            <a href="/add-event" className="opacity-0 cursor-default hover:opacity-100 focus:opacity-100 transition-opacity">/admin</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
