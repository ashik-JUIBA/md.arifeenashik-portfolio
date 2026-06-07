/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Sparkles, Globe, BrainCircuit, CheckSquare } from "lucide-react";
import { LANGUAGES_DATA, SKILL_CATEGORIES } from "../data";

export default function Skills() {
  const customProgressSkills = [
    { name: "Digital Marketing Strategy", level: "Advanced", pct: 90 },
    { name: "Canva & Creative Brand Design", level: "Elite Mastery", pct: 95 },
    { name: "Presentation & Infographic Design", level: "Advanced", pct: 90 },
    { name: "Video Production (CapCut)", level: "Advanced", pct: 85 },
    { name: "AI Workflow & Prompt Engineering", level: "Intermediate / Active", pct: 78 },
    { name: "Lead Sourcing & B2B Pitching", level: "Intermediate", pct: 80 }
  ];

  return (
    <section
      id="skills"
      className="py-24 bg-[#E9EDF2] relative overflow-hidden"
    >
      {/* Background active glow bubbles */}
      <div className="absolute bottom-1/4 left-[-10%] w-[380px] h-[380px] bg-indigo-300/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-xl mb-16">
          <p className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-[#6366F1] mb-2">
            [ My Capabilities ]
          </p>
          <h2 className="font-display font-black text-4xl sm:text-5xl text-[#141414] tracking-tighter uppercase leading-none">
            Tactical <span className="text-outline">Skills</span> & Toolsets
          </h2>
          <p className="text-xs sm:text-sm font-semibold text-gray-700 mt-3 font-sans leading-relaxed">
            A comprehensive matrix representing design engineering, technical administrative software, and multilingual capabilities.
          </p>
        </div>

        {/* Dynamic Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Column 1: Core Functional Progress Bars (7 Columns) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <h3 className="text-[10px] font-mono font-black text-gray-500 uppercase tracking-widest flex items-center gap-2 mb-2 border-b border-white/50 pb-3 leading-none">
              <BrainCircuit size={14} className="text-[#6366F1]" /> Tactical Skill Metrics
            </h3>

            <div className="bg-white/45 backdrop-blur-md border border-white/60 p-6 md:p-8 rounded-[2rem] grid grid-cols-1 gap-6 shadow-sm/5">
              {customProgressSkills.map((skill, index) => (
                <div key={index} className="flex flex-col">
                  {/* Top line with label and percentage output */}
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="text-sm font-extrabold text-[#141414] font-sans tracking-tight">
                      {skill.name}
                    </span>
                    <span className="text-xs font-bold text-[#6366F1] font-mono">
                      {skill.level} ({skill.pct}%)
                    </span>
                  </div>

                  {/* Slider bar container */}
                  <div className="w-full h-2 bg-white/40 border border-white/40 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-[#6366F1] via-indigo-500 to-[#A855F7] rounded-full"
                      style={{ width: `${skill.pct}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Tool categories & Multilingual meters (5 Columns) */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            
            {/* Tag Categories Card */}
            <div>
              <h3 className="text-[10px] font-mono font-black text-gray-500 uppercase tracking-widest flex items-center gap-2 mb-4 border-b border-white/50 pb-3 leading-none">
                <CheckSquare size={14} className="text-[#6366F1]" /> Applied Software Tools
              </h3>

              <div className="flex flex-col gap-4">
                {SKILL_CATEGORIES.map((category, idx) => (
                  <div
                    key={idx}
                    className="bg-white/45 backdrop-blur-md border border-white/60 p-5 rounded-[2rem] shadow-sm/5"
                  >
                    <p className="text-[9px] font-mono font-black text-gray-500 uppercase mb-3 tracking-wider">
                      {category.title}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((word, wIdx) => (
                        <span
                          key={wIdx}
                          className="bg-white/50 text-[#141414] px-3 py-1.5 rounded-xl text-[10px] font-mono font-bold uppercase tracking-wider border border-white/55 hover:border-[#6366F1] hover:bg-white transition-all duration-200 cursor-default"
                        >
                          {word}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Languages Section with Meter */}
            <div>
              <h3 className="text-[10px] font-mono font-black text-gray-500 uppercase tracking-widest flex items-center gap-2 mb-4 border-b border-white/50 pb-3 leading-none">
                <Globe size={14} className="text-[#6366F1]" /> Languages Mastery
              </h3>
              
              <div className="bg-[#141414] text-white rounded-[2rem] p-6 sm:p-8 border border-white/10 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#A855F7]/10 rounded-full blur-xl pointer-events-none"></div>
                <div className="relative z-10 flex flex-col gap-4">
                  {LANGUAGES_DATA.map((lang, idx) => (
                    <div key={idx} className="flex flex-col gap-1.5">
                      <div className="flex justify-between items-end">
                        <span className="text-[9px] font-mono font-black uppercase text-gray-300">
                          {lang.name}
                        </span>
                        <span className="text-[10px] font-bold text-[#6366F1] font-sans tracking-wide">
                          {lang.level}
                        </span>
                      </div>
                      <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-[#6366F1] via-indigo-500 to-[#A855F7] rounded-full"
                          style={{ width: `${lang.percent}%` }}
                        />
                      </div>
                    </div>
                  ))}
                  
                  {/* Micro quote regarding arabic / spanish learning status */}
                  <p className="text-[10px] text-gray-400 font-semibold italic mt-2 border-t border-white/5 pt-3 leading-relaxed">
                    * Actively learning conversational Spanish vocabulary to drive international client support versatility.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
