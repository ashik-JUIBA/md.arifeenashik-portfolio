/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { Plus, Minus, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { FAQS_DATA } from "../data";

export default function Faq() {
  const [expandedId, setExpandedId] = useState<string | null>("faq-1");

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section
      id="faq"
      className="py-24 bg-[#E9EDF2]/40 border-b border-gray-200"
    >
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Title center */}
        <div className="text-center mb-16">
          <p className="text-xs font-mono font-bold uppercase tracking-widest text-indigo-600 mb-1">
            [ Clarifications ]
          </p>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-gray-900 tracking-tight">
            QUESTION & ANSWERS
          </h2>
          <div className="h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mt-3 rounded-full w-16 mx-auto"></div>
        </div>

        {/* FAQ list */}
        <div className="flex flex-col border-t border-gray-300">
          {FAQS_DATA.map((faq) => {
            const isExpanded = expandedId === faq.id;
            return (
              <div
                key={faq.id}
                className="border-b border-gray-300 bg-white/40 hover:bg-white/75 transition-all duration-300"
              >
                {/* Header button clicker */}
                <button
                  type="button"
                  onClick={() => toggleExpand(faq.id)}
                  className="w-full py-6 px-4 md:px-8 flex items-center justify-between text-left focus:outline-none cursor-pointer group"
                >
                  <div className="flex items-center gap-4">
                    <HelpCircle size={18} className="text-indigo-600 shrink-0" />
                    <h3 className="font-sans font-extrabold text-sm sm:text-base text-gray-800 tracking-tight group-hover:text-indigo-600 transition-colors">
                      {faq.question}
                    </h3>
                  </div>
                  
                  {/* Chevron plus/minus indicator */}
                  <div className="flex items-center justify-center w-7 h-7 rounded-full border border-gray-300 group-hover:border-indigo-600 transition-colors shrink-0 ml-2">
                    {isExpanded ? (
                      <Minus size={12} className="text-indigo-600" />
                    ) : (
                      <Plus size={12} className="text-gray-600 group-hover:text-indigo-600" />
                    )}
                  </div>
                </button>

                {/* Body paragraph content Panel */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                      className="overflow-hidden bg-white/80"
                    >
                      <div className="pb-6 pt-1 px-8 md:px-14">
                        <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-sans font-medium">
                          {faq.answer}
                        </p>
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
