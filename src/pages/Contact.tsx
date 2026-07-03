import Navbar from "@/src/components/Navbar";
import { Link } from "react-router-dom";
import Footer from "@/src/components/Footer";
import { motion } from "motion/react";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

export default function Contact() {
  return (
    <div className="w-[100vw] overflow-x-hidden min-h-screen bg-[#FAFAFA] text-[#111111] flex flex-col font-sans">
      <Navbar />

      <main className="flex-1 w-[100vw] pt-32 pb-24 md:pt-40 md:pb-32 px-[3%] relative">
        <div className="w-full flex flex-col items-center animate-in fade-in zoom-in-95 duration-700 text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight tracking-tight mb-8">
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl text-gray-500 font-light leading-relaxed mb-16 max-w-3xl mx-auto">
              Get in touch to learn more about our upcoming initiatives, partnership integrations, or media inquiries.
            </p>
            
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left mb-16">
              <div className="bg-white p-10 border border-gray-200 rounded-2xl shadow-sm flex flex-col gap-4 group hover:border-red-200 transition-colors">
                <MapPin className="w-8 h-8 text-red-600" />
                <h3 className="text-xl font-bold">Headquarters</h3>
                <p className="text-gray-500 leading-relaxed font-light">
                  Lokmat Media Pvt. Ltd.<br />
                  Mumbai, Maharashtra, India
                </p>
              </div>
              <div className="bg-white p-10 border border-gray-200 rounded-2xl shadow-sm flex flex-col gap-4 group hover:border-red-200 transition-colors">
                <Mail className="w-8 h-8 text-red-600" />
                <h3 className="text-xl font-bold">Inquiries</h3>
                <p className="text-gray-500 leading-relaxed font-light">
                  <a href="mailto:events@lokmat.com" className="hover:text-red-600 transition-colors">events@lokmat.com</a><br />
                  <a href="mailto:press@lokmat.com" className="hover:text-red-600 transition-colors">press@lokmat.com</a>
                </p>
              </div>
              <div className="bg-white p-10 border border-gray-200 rounded-2xl shadow-sm flex flex-col gap-4 group hover:border-red-200 transition-colors">
                <Phone className="w-8 h-8 text-red-600" />
                <h3 className="text-xl font-bold">Phone</h3>
                <p className="text-gray-500 leading-relaxed font-light">
                  +91-XXXX-XXXXXX<br />
                  Mon-Fri, 9am - 6pm IST
                </p>
              </div>
            </div>

            <div className="w-full bg-white p-8 md:p-12 border border-gray-200 rounded-2xl shadow-sm text-left max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold mb-8">Send us a message</h2>
              <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-gray-500 uppercase tracking-widest">Name</label>
                    <input type="text" className="w-full p-4 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-red-600 transition-colors" placeholder="John Doe" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-gray-500 uppercase tracking-widest">Email</label>
                    <input type="email" className="w-full p-4 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-red-600 transition-colors" placeholder="john@example.com" />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-gray-500 uppercase tracking-widest">Subject</label>
                  <input type="text" className="w-full p-4 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-red-600 transition-colors" placeholder="How can we help?" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-gray-500 uppercase tracking-widest">Message</label>
                  <textarea rows={6} className="w-full p-4 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-red-600 transition-colors resize-none" placeholder="Your message..."></textarea>
                </div>
                <button className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#111111] text-white rounded-lg overflow-hidden transition-all duration-300 hover:bg-red-600 hover:shadow-xl self-start">
                  <span className="relative z-10 font-bold tracking-widest uppercase text-sm">Send Message</span>
                  <ArrowUpRight className="relative z-10 w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </button>
              </form>
            </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
