import { Facebook, Instagram, Linkedin, Youtube, Twitter, MapPin, Phone, Mail, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import footerLogo from "../assets/images/regenerated_image_1781776578908.png";
import { navigationData } from "@/src/config/navigation";

export default function Footer() {
  return (
    <footer className="bg-[#e40009] text-white pt-16 md:pt-24 pb-8 relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-red-800 rounded-full mix-blend-multiply filter blur-[120px] opacity-50 pointer-events-none transform translate-x-1/3 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-red-600 rounded-full mix-blend-multiply filter blur-[100px] opacity-50 pointer-events-none transform -translate-x-1/2 translate-y-1/3"></div>

      <div className="w-full px-[3%] relative z-10">
        
        {/* Top Newsletter Section */}
        <div className="bg-red-800/40 border border-white/10 rounded-3xl p-8 md:p-12 mb-16 flex flex-col md:flex-row items-center justify-between gap-8 backdrop-blur-sm">
          <div className="md:w-1/2">
            <h3 className="text-2xl md:text-3xl font-bold mb-3 tracking-tight">Join Our Newsletter</h3>
            <p className="text-red-100 text-lg">
              Stay updated with the latest Lokmat events, award announcements, and exclusive highlights.
            </p>
          </div>
          <div className="md:w-1/2 w-full">
            <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="w-full px-6 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-red-200 focus:outline-none focus:ring-2 focus:ring-white/50 focus:bg-white/20 transition-all font-medium"
                required
              />
              <button 
                type="submit" 
                className="px-8 py-4 bg-white text-[#e40009] font-bold rounded-full hover:bg-gray-100 transition-colors flex items-center justify-center gap-2 whitespace-nowrap"
              >
                Subscribe
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>

        {/* Main Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Area */}
          <div className="md:col-span-2 lg:col-span-2 flex flex-col items-start pr-0 lg:pr-12">
            <img 
              src={footerLogo} 
              alt="Lokmat Events Logo" 
              loading="lazy"
              referrerPolicy="no-referrer"
              className="w-[300px] h-[100px] object-contain mb-6"
            />
            <p className="text-red-100 leading-relaxed mb-8 text-lg">
              Celebrating excellence, leadership, culture, business, entertainment, and community impact through landmark events and prestigious awards.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-red-800/50 flex items-center justify-center hover:bg-white hover:text-[#e40009] transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-red-800/50 flex items-center justify-center hover:bg-white hover:text-[#e40009] transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-red-800/50 flex items-center justify-center hover:bg-white hover:text-[#e40009] transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-red-800/50 flex items-center justify-center hover:bg-white hover:text-[#e40009] transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-red-800/50 flex items-center justify-center hover:bg-white hover:text-[#e40009] transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Dynamic Footer Menu */}
          <div className="col-span-1 lg:col-span-2 grid grid-cols-2 md:grid-cols-3 gap-8">
            {navigationData.map((menu) => (
              <div key={menu.label}>
                {menu.href ? (
                  <h4 className="text-lg font-bold mb-4 tracking-wide">
                    <Link to={menu.href} className="hover:text-white transition-colors flex items-center group">
                      <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 -ml-5 transition-all text-red-300" />
                      {menu.label}
                    </Link>
                  </h4>
                ) : (
                  <h4 className="text-lg font-bold mb-4 tracking-wide">{menu.label}</h4>
                )}
                {menu.items && (
                  <ul className="space-y-3 text-red-100 font-medium text-[15px]">
                    {menu.items.map((item) => (
                      <li key={item.label}>
                        <Link to={item.href} className="hover:text-white transition-colors flex items-center group">
                          <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 -ml-5 transition-all text-red-300" />
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-10 border-t border-b border-white/10 mb-8">
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
          <p>© 2026 Lokmat Events & Awards. All Rights Reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-6">
            <Link to="/" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/" className="hover:text-white transition-colors">Terms & Conditions</Link>
            <Link to="/" className="hover:text-white transition-colors">Disclaimer</Link>
            {/* Hidden CMS Link for Admin */}
            <a href="/add-event" className="opacity-0 cursor-default hover:opacity-100 focus:opacity-100 transition-opacity">/admin</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
