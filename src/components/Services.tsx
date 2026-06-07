/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { Plus, Minus, CheckCircle, Sparkles, AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { SERVICES_DATA } from "../data";

export default function Services() {
  const [expandedId, setExpandedId] = useState<string | null>("srv-1");

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section
      id="services"
      className="py-24 bg-[#E9EDF2] relative overflow-hidden"
    >
      {/* Decorative Blur Ambient Node */}
      <div className="absolute top-1/4 left-[-10%] w-[350px] h-[350px] bg-purple-300/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <p className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-[#6366F1] mb-2">
              [ Capabilities ]
            </p>
            <h2 className="font-display font-black text-4xl sm:text-5xl text-[#141414] tracking-tighter uppercase leading-none">
              Capabilities & <span className="text-outline">Services</span>
            </h2>
          </div>
          <p className="text-xs font-extrabold uppercase tracking-widest text-gray-500 font-mono flex items-center gap-1.5 border-b-2 border-[#6366F1] pb-1 w-fit">
            <Sparkles size={12} className="text-[#6366F1]" /> WHAT I WILL DELIVER
          </p>
        </div>

        {/* Accordion Rows */}
        <div className="flex flex-col gap-4">
          {SERVICES_DATA.map((service, index) => {
            const isExpanded = expandedId === service.id;
            return (
              <div
                key={service.id}
                id={`service-${service.id}`}
                className={`transition-all duration-300 rounded-[2rem] border ${
                  isExpanded 
                    ? "bg-white/50 backdrop-blur-xl border-white/70 shadow-lg px-4 md:px-8" 
                    : "bg-white/20 backdrop-blur-md border-white/30 hover:bg-white/35 hover:border-white/50 px-4 md:px-8"
                }`}
              >
                {/* Accordion Header row */}
                <button
                  type="button"
                  onClick={() => toggleExpand(service.id)}
                  className="w-full py-7 flex items-center justify-between text-left focus:outline-none cursor-pointer group"
                >
                  <div className="flex items-center gap-6 md:gap-12 w-11/12">
                    {/* Index Indicator */}
                    <span className="font-mono text-xs font-black text-gray-400 group-hover:text-[#6366F1] transition-colors">
                      {(index + 1).toString().padStart(2, "0")}
                    </span>
 
                    {/* Left title and tagline */}
                    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-8">
                      <h3 className="font-display font-black text-lg sm:text-xl md:text-2xl tracking-tight text-[#141414] group-hover:text-[#6366F1] transition-colors uppercase">
                        {service.title}
                      </h3>
                      <span className="text-xs sm:text-sm text-gray-500 font-semibold tracking-wide leading-none group-hover:text-gray-700 transition-colors">
                        — {service.tagline}
                      </span>
                    </div>
                  </div>
 
                  {/* Toggle Sign */}
                  <div className="flex items-center justify-center w-8 h-8 rounded-full border border-white/60 bg-white/40 group-hover:border-[#6366F1] group-hover:bg-white transition-all">
                    {isExpanded ? (
                      <Minus size={14} className="text-[#6366F1] animate-spin-once" />
                    ) : (
                      <Plus size={14} className="text-gray-600 group-hover:text-[#6366F1]" />
                    )}
                  </div>
                </button>
 
                {/* Expanded Details Panel */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <div className="pb-8 pt-2 pl-12 sm:pl-20 pr-4 md:pr-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                        
                        {/* Descriptive Block */}
                        <div className="lg:col-span-6">
                           <p className="text-sm text-gray-700 leading-relaxed font-semibold mb-4">
                            {service.description}
                          </p>
                          <div className="flex items-center gap-1.5 text-[9px] font-mono font-black uppercase tracking-wider text-[#6366F1] bg-white/60 w-fit px-3 py-1.5 rounded-full border border-white/50">
                            <Sparkles size={11} className="text-[#6366F1]" /> Gen-Z Ready Strategy
                          </div>
                        </div>
 
                        {/* Bullets lists */}
                        <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                          {service.bullets.map((bullet, bIdx) => (
                            <div
                              key={bIdx}
                              className="flex items-start gap-2.5 bg-white/30 backdrop-blur-sm border border-white/50 p-3.5 rounded-2xl hover:border-[#6366F1] hover:bg-white/60 transition-all"
                            >
                              <CheckCircle size={14} className="text-[#6366F1] mt-0.5 shrink-0" />
                              <span className="text-xs font-bold text-[#141414] leading-tight">
                                {bullet}
                              </span>
                            </div>
                          ))}
                        </div>
 
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
 
      </div>
    </section>
  );
}
