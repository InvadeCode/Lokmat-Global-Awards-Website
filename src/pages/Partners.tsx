import React from "react";
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";
import PartnersCtaSection from "@/src/components/PartnersCtaSection";

export default function Partners() {
  return (
    <div className="w-[100vw] overflow-x-hidden min-h-screen bg-[#FAFAFA] text-[#111111] flex flex-col font-sans">
      <Navbar />
      <main className="flex-1 w-[100vw] pt-32 pb-24 md:pt-40 md:pb-32 relative">
        <PartnersCtaSection />
      </main>
      <Footer />
    </div>
  );
}
