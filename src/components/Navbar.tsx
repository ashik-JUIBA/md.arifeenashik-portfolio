/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { Menu, X, Linkedin, Facebook, Instagram } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { PERSONAL_INFO } from "../data";

interface NavbarProps {
  activeTab: string;
}

export default function Navbar({ activeTab }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Q&A", href: "#faq" },
    { name: "Blog", href: "#blog" },
    { name: "Contact", href: "#contact" },
    { name: "Admin", href: "#admin" }
  ];

  return (
    <header
      id="navbar-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/45 backdrop-blur-xl border-b border-white/65 py-3 shadow-md/5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10 xl:px-14 flex items-center justify-between gap-4">
        {/* Brand Logo matching Design HTML */}
        <a
          href="#home"
          id="nav-logo"
          className="font-sans font-black text-xl tracking-tighter uppercase text-[#141414] hover:opacity-85 transition-opacity flex-shrink-0"
        >
          ashik<span className="text-[#6366F1]">.arifeen</span>
        </a>

        {/* Desktop Links with active tracking states */}
        <nav id="desktop-nav" className="hidden lg:flex items-center gap-2 xl:gap-5.5 lg:gap-3.5">
          {navLinks.map((link) => {
            const linkTab = link.href.replace("#", "");
            const isActive = activeTab === linkTab;
            return (
              <a
                key={link.href}
                href={link.href}
                className={`text-[9.5px] lg:text-[10px] xl:text-[11px] font-bold uppercase tracking-wider xl:tracking-widest transition-colors relative group py-2 px-1 xl:px-2 ${
                  isActive ? "text-[#6366F1]" : "text-[#141414] hover:text-[#6366F1]"
                }`}
              >
                {link.name}
                <span className={`absolute bottom-0 left-0 h-0.5 bg-[#6366F1] transition-all duration-300 ${
                  isActive ? "w-full" : "w-0 group-hover:w-full"
                }`}></span>
              </a>
            );
          })}
        </nav>

        {/* Right Corner Buttons styling from Design HTML */}
        <div className="hidden lg:flex items-center gap-4 xl:gap-6 flex-shrink-0">
          <div className="flex items-center gap-1.5 xl:gap-2">
            <a
              href={PERSONAL_INFO.contact.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full hover:bg-white/60 text-gray-700 hover:text-[#6366F1] transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin size={16} />
            </a>
            <a
              href={PERSONAL_INFO.contact.facebook}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full hover:bg-white/60 text-gray-700 hover:text-[#6366F1] transition-all"
              aria-label="Facebook"
            >
              <Facebook size={16} />
            </a>
            <a
              href={PERSONAL_INFO.contact.instagram}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full hover:bg-white/60 text-gray-700 hover:text-[#6366F1] transition-all"
              aria-label="Instagram"
            >
              <Instagram size={16} />
            </a>
          </div>

          <a
            href="#contact"
            id="nav-cta"
            className="px-6 py-2.5 bg-white/60 backdrop-blur-md border border-white/40 hover:bg-white text-[#141414] rounded-full text-xs font-bold uppercase tracking-widest shadow-sm hover:shadow-md transition-all active:scale-95"
          >
            Hire Me
          </a>
        </div>

        <button
          id="mobile-nav-toggle"
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 rounded-full text-gray-800 hover:bg-gray-200/60 transition-colors focus:outline-none"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-[#E9EDF2]/95 backdrop-blur-lg border-b border-gray-200 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-5 max-w-7xl mx-auto">
              {navLinks.map((link) => {
                const linkTab = link.href.replace("#", "");
                const isActive = activeTab === linkTab;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-base font-semibold py-1 border-b border-gray-200/30 transition-colors ${
                      isActive ? "text-[#6366F1] pl-2 border-[#6366F1]/40" : "text-gray-800 hover:text-indigo-600"
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
              <div className="flex items-center gap-4 pt-4">
                <a
                  href={PERSONAL_INFO.contact.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 bg-white rounded-full text-indigo-600 hover:bg-indigo-50 shadow-sm"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href={PERSONAL_INFO.contact.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 bg-white rounded-full text-indigo-1200 hover:bg-indigo-50 shadow-sm"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href={PERSONAL_INFO.contact.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 bg-white rounded-full text-indigo-600 hover:bg-indigo-50 shadow-sm"
                >
                  <Instagram size={20} />
                </a>
              </div>
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="w-full text-center tracking-wider py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-bold uppercase text-xs"
              >
                Hire Ashik
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
