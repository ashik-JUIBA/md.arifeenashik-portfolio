/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { ArrowUpRight, Download, Briefcase, Zap, Sparkles } from "lucide-react";
import { PERSONAL_INFO } from "../data";

export default function Hero({ onDownloadCV }: { onDownloadCV: () => void }) {
  const floatingTags = [
    { text: "Digital Marketing", color: "bg-purple-100 text-purple-700 border-purple-200/50 hover:bg-purple-600 hover:text-white" },
    { text: "Branding", color: "bg-indigo-100 text-indigo-700 border-indigo-200/50 hover:bg-indigo-600 hover:text-white" },
    { text: "Leadership", color: "bg-amber-100 text-amber-700 border-amber-200/50 hover:bg-amber-600 hover:text-white" },
    { text: "Canva Design", color: "bg-blue-100 text-blue-700 border-blue-200/50 hover:bg-blue-600 hover:text-white" },
    { text: "AI Prompt Engineering", color: "bg-pink-100 text-pink-700 border-pink-200/50 hover:bg-pink-600 hover:text-white" },
    { text: "Video Editing", color: "bg-teal-100 text-teal-700 border-teal-200/50 hover:bg-teal-600 hover:text-white" }
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-16 md:py-36 flex items-center overflow-hidden bg-[#E9EDF2]"
    >
      {/* Absolute Decorative Blobs for premium ambiance */}
      <div className="absolute top-1/6 left-[-10%] w-[500px] h-[500px] bg-indigo-400/20 rounded-full blur-3xl pointer-events-none animate-pulse"></div>
      <div className="absolute bottom-1/6 right-[-10%] w-[600px] h-[600px] bg-purple-400/20 rounded-full blur-3xl pointer-events-none animate-pulse" style={{ animationDelay: "3s" }}></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Side: Copywriting Content */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          
          {/* Subheader Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel shadow-sm w-fit mb-6"
          >
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-600"></span>
            </span>
            <span className="text-[10px] font-extrabold tracking-widest uppercase text-gray-800 flex items-center gap-1 font-mono">
              <Sparkles size={12} className="text-indigo-600 animate-pulse" /> Young Marketing Innovator
            </span>
          </motion.div>

          {/* Large Big Headings styling matching the design HTML */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h1 className="font-display font-black text-5xl sm:text-6xl md:text-7xl lg:text-7xl text-[#141414] leading-[0.85] tracking-tighter mb-6 uppercase">
              MD. ARIFEEN<br />
              <span className="text-outline">ASHIK</span>
            </h1>
            
            <div className="flex items-center gap-2 mb-4">
              <span className="h-0.5 w-8 bg-indigo-600"></span>
              <p className="text-sm sm:text-base font-extrabold text-indigo-600 uppercase tracking-widest font-mono">
                {PERSONAL_INFO.tagline}
              </p>
            </div>
          </motion.div>

          {/* Intro description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-xl mb-8 font-medium"
          >
            {PERSONAL_INFO.shortIntro}
          </motion.p>

          {/* Interactive floating / hoverable skill labels */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-10"
          >
            <p className="text-[10px] uppercase tracking-widest font-mono text-gray-500 font-extrabold mb-3 flex items-center gap-1.5">
              <Zap size={12} className="text-[#6366F1]" /> Core Focus Areas
            </p>
            <div className="flex flex-wrap gap-2.5 max-w-xl">
              {floatingTags.map((tag, idx) => (
                <motion.span
                  key={idx}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/40 backdrop-blur-md border border-white/60 text-[#141414] cursor-default font-bold text-[10px] font-mono uppercase tracking-widest px-3.5 py-1.5 rounded-full shadow-sm hover:bg-white hover:border-[#6366F1] transition-all duration-300"
                >
                  {tag.text}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Interactive CTAs styled using Design HTML specs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center gap-4"
          >
            <a
              href="#contact"
              className="px-10 py-5 bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-black rounded-full shadow-lg shadow-blue-500/25 transition-all hover:scale-[1.03] active:scale-95 flex items-center gap-3 text-xs uppercase tracking-[0.2em] cursor-pointer"
            >
              Contact Me
              <ArrowUpRight size={15} className="text-white" />
            </a>

            <a
              href="#portfolio"
              className="px-8 py-4.5 bg-[#141414] hover:bg-[#6366F1] text-white font-bold rounded-full shadow-md transition-all hover:scale-[1.02] active:scale-95 flex items-center gap-2 group text-xs uppercase tracking-widest cursor-pointer"
            >
              View Portfolio
              <ArrowUpRight size={13} className="text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>

            <button
              onClick={onDownloadCV}
              className="px-8 py-4.5 bg-white/60 hover:bg-white border border-white/45 backdrop-blur-md text-[#141414] font-bold rounded-full shadow-sm transition-all hover:scale-[1.02] active:scale-95 flex items-center gap-2 text-xs uppercase tracking-widest cursor-pointer"
            >
              <Download size={13} className="text-[#6366F1]" />
              Download CV
            </button>
          </motion.div>

        </div>

        {/* Right Side: Professional Image Crop Frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5 flex justify-center relative"
        >
          {/* Framed Graphic Border mimicking UI designs */}
          <div className="relative w-80 h-96 sm:w-96 sm:h-[480px] lg:w-full lg:h-[500px]">
            {/* Background geometric design block */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#6366F1] to-[#A855F7] rounded-[2.5rem] rotate-3 opacity-90 shadow-2xl"></div>
            
            {/* White card border wrapper */}
            <div className="absolute inset-0 bg-white/40 backdrop-blur-md p-3 rounded-[2.5rem] border border-white/50 shadow-xl overflow-hidden -rotate-1 hover:rotate-0 transition-transform duration-500 group">
              <div className="relative w-full h-full rounded-[2rem] overflow-hidden bg-gray-100">
                
                {/* Profile Image with absolute render layout */}
                <img
                  src={PERSONAL_INFO.profileImage}
                  alt={PERSONAL_INFO.fullName}
                  className="w-full h-full object-cover object-center transition-all duration-700 scale-102 hover:scale-105"
                  referrerPolicy="no-referrer"
                />

                {/* Ambient glass signature */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/45 backdrop-blur-xl border border-white/60 p-4 rounded-2xl shadow-lg">
                  <p className="text-[9px] font-extrabold text-gray-500 uppercase tracking-widest font-mono">Current Base</p>
                  <p className="text-xs font-extrabold text-[#141414] tracking-tight leading-tight">Mirpur, Dhaka, Bangladesh</p>
                  <div className="mt-1.5 flex items-center gap-1 text-[9px] text-[#141414] font-mono font-extrabold uppercase">
                    <Briefcase size={10} className="text-indigo-600" /> BBA Student & Creator
                  </div>
                </div>

                {/* Absolute Floating tags mimicking UI grids */}
                <div className="absolute top-4 left-4 bg-white/30 backdrop-blur-md border border-white/40 text-gray-900 text-[9px] font-mono font-black uppercase px-3 py-1 rounded-full tracking-wider shadow-sm">
                  IBA JU
                </div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
