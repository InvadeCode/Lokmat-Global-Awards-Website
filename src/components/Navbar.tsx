import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import logoImg from "@/src/assets/images/regenerated_image_1781776475830.png";
import { navigationData } from "@/src/config/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  const toggleDropdown = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  const isActive = (href?: string) => {
    return href && location.pathname === href;
  };

  const isDropdownActive = (items?: { href: string }[]) => {
    return items?.some(item => location.pathname === item.href);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-[3%] py-6 border-b border-gray-200 bg-white/80 backdrop-blur-md w-[100vw]">
      <Link to="/" className="flex items-center gap-3">
        <img src={logoImg} alt="Lokmat Logo" className="h-8 md:h-10 w-auto object-contain mix-blend-multiply" />
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-10 text-sm font-bold tracking-widest uppercase text-gray-500">
        {navigationData.map((item) => (
          <div key={item.label} className="relative group">
            {item.items ? (
              <div className="flex items-center gap-1 cursor-pointer hover:text-red-600 transition-colors py-2 group-hover:text-red-600">
                <span className={isDropdownActive(item.items) ? "text-red-600" : ""}>{item.label}</span>
                <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                
                <div className="absolute top-full left-0 pt-2 w-48 transition-all origin-top opacity-0 scale-y-0 invisible group-hover:opacity-100 group-hover:scale-y-100 group-hover:visible">
                  <div className="flex flex-col bg-white border border-gray-100 shadow-lg rounded-lg overflow-hidden">
                    {item.items.map((subItem) => (
                      <Link 
                        key={subItem.label} 
                        to={subItem.href} 
                        className={`px-4 py-3 text-xs hover:bg-gray-50 hover:text-red-600 transition-colors ${isActive(subItem.href) ? 'text-red-600 bg-gray-50' : 'text-gray-500'}`}
                        onClick={() => setOpenDropdown(null)}
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              item.label === "Contact" ? (
                <Link 
                  to={item.href!} 
                  className={`px-6 py-2 border rounded-full transition-all ${isActive(item.href) ? 'bg-red-600 text-white border-red-600' : 'border-gray-300 hover:border-[#111111] hover:text-[#111111] text-[#111111]'}`}
                >
                  {item.label}
                </Link>
              ) : (
                <Link 
                  to={item.href!} 
                  className={`hover:text-red-600 transition-colors py-2 ${isActive(item.href) ? 'text-red-600' : ''}`}
                >
                  {item.label}
                </Link>
              )
            )}
          </div>
        ))}
      </div>

      {/* Mobile Menu Toggle */}
      <button className="md:hidden p-2 text-gray-600" onClick={toggleMenu}>
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-lg overflow-hidden md:hidden"
          >
            <div className="flex flex-col px-[3%] py-4">
              {navigationData.map((item) => (
                <div key={item.label} className="border-b border-gray-100 last:border-none">
                  {item.items ? (
                    <div>
                      <button 
                        onClick={() => toggleDropdown(item.label)}
                        className="flex items-center justify-between w-full py-4 text-sm font-bold tracking-widest uppercase text-gray-600 hover:text-red-600"
                      >
                        <span className={isDropdownActive(item.items) ? "text-red-600" : ""}>{item.label}</span>
                        <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === item.label ? 'rotate-180' : ''}`} />
                      </button>
                      <AnimatePresence>
                        {openDropdown === item.label && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="bg-gray-50 flex flex-col"
                          >
                            {item.items.map((subItem) => (
                              <Link 
                                key={subItem.label} 
                                to={subItem.href} 
                                onClick={() => setIsOpen(false)}
                                className={`pl-8 pr-4 py-3 text-xs font-bold tracking-widest uppercase hover:text-red-600 ${isActive(subItem.href) ? 'text-red-600' : 'text-gray-500'}`}
                              >
                                {subItem.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link 
                      to={item.href!} 
                      onClick={() => setIsOpen(false)}
                      className={`block py-4 text-sm font-bold tracking-widest uppercase hover:text-red-600 ${isActive(item.href) ? 'text-red-600' : 'text-gray-600'}`}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
