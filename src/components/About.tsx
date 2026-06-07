/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { GraduationCap, Award, Globe, BookOpen, Star, HelpCircle } from "lucide-react";
import { PERSONAL_INFO, CORE_STATS } from "../data";

export default function About({ onDownloadCV }: { onDownloadCV: () => void }) {
  const leadershipCharacteristics = [
    {
      title: "Impact Communication",
      desc: "Honed through direct B2B pitching and leading event logs. Strong presentation structures."
    },
    {
      title: "Empathetic Leadership",
      desc: "Serving in critical operational roles across multiple premier university club bureaus."
    },
    {
      title: "Strategic Innovation",
      desc: "Infusing academic marketing paradigms with modern generative AI prompt optimization."
    },
    {
      title: "Adaptive Agile Focus",
      desc: "Blending rigorous business studies at J.U. with high-paced on-ground logistics execution."
    }
  ];

  return (
    <section
      id="about"
      className="py-24 bg-[#E9EDF2] relative overflow-hidden"
    >
      {/* Background ambient blurring node */}
      <div className="absolute top-1/2 right-[-10%] w-[400px] h-[400px] bg-indigo-300/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Title Block */}
        <div className="text-center md:text-left max-w-3xl mb-16">
          <p className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-[#6366F1] mb-2">
            [ Story & Goals ]
          </p>
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-[#141414] tracking-tighter uppercase leading-none">
            An Analytical Approach <br />
            To <span className="text-outline">Business & Branding</span>
          </h2>
        </div>

        {/* Content Structure */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Extensive Personal Narrative */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <h3 className="text-xl sm:text-2xl font-black text-[#141414] uppercase tracking-tight">
              Bridging Creative Storytelling with Corporate Operations
            </h3>
            
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-medium">
              {PERSONAL_INFO.detailedIntro}
            </p>

            <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-medium">
              With a CGPA of <strong className="text-[#6366F1] font-extrabold">3.58</strong> in the marketing major at <strong className="text-gray-900 font-extrabold">IBA, Jahangirnagar University</strong>, I align corporate paradigms with consumer behavior psychology. My time as an outbound executive at CreatiCore taught me high-value sales pipeline management and how to capture the interest of global prospects under tight timelines.
            </p>

            {/* Strategic characteristics grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              {leadershipCharacteristics.map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 glass-panel glass-panel-hover rounded-3xl"
                >
                  <h4 className="text-xs font-black uppercase tracking-wider text-[#141414] flex items-center gap-2 mb-1.5 font-sans">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6366F1]"></span>
                    {item.title}
                  </h4>
                  <p className="text-xs text-gray-600 leading-relaxed font-semibold">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Micro Call-to-action */}
            <div className="mt-4 flex items-center gap-4">
              <button
                onClick={onDownloadCV}
                className="px-8 py-4 bg-[#141414] hover:bg-[#6366F1] text-white font-bold text-xs tracking-widest uppercase rounded-2xl transition-all shadow-md active:scale-95 flex items-center gap-2"
              >
                Download Resume (PDF)
              </button>
            </div>
          </div>

          {/* Right Column: Statistics Cards & Academic Milestones */}
          <div className="lg:col-span-5 flex flex-col gap-6 lg:pl-4">
            
            {/* Elegant Portrait Frame exactly containing the requested image */}
            <div className="relative overflow-hidden rounded-[32px] border border-white/50 glass-panel p-3 shadow-lg">
              <div className="relative h-72 sm:h-80 w-full rounded-[24px] overflow-hidden bg-gray-100">
                <img
                  src={PERSONAL_INFO.profileImage}
                  alt={PERSONAL_INFO.fullName}
                  className="w-full h-full object-cover object-center scale-102 hover:scale-105 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-3 left-3 bg-white/70 backdrop-blur-md border border-white/40 text-[9px] font-mono font-black uppercase px-3 py-1.5 rounded-xl tracking-wider shadow-sm text-[#141414]">
                  MD. ARIFEEN ASHIK
                </div>
              </div>
            </div>

            {/* Bento Statistics Showcase */}
            <div className="grid grid-cols-2 gap-4">
              {CORE_STATS.map((stat, idx) => (
                <div
                  key={idx}
                  className="p-6 glass-panel glass-panel-hover rounded-[32px] flex flex-col justify-center items-center text-center group"
                >
                  <span className="font-sans font-black text-3xl sm:text-4xl text-[#141414] group-hover:scale-110 group-hover:text-[#6366F1] transition-transform duration-300">
                    {stat.value}
                  </span>
                  <span className="text-[9px] font-extrabold text-gray-500 uppercase tracking-widest mt-1.5 font-mono leading-none">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Highlight Spotlight Card styled matching the black current-role block */}
            <div className="bg-[#141414] text-white p-8 rounded-[32px] relative overflow-hidden shadow-xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#A855F7]/20 rounded-full blur-2xl pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#6366F1]/20 rounded-full blur-2xl pointer-events-none"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-2 text-[#6366F1] font-mono text-[10px] font-extrabold uppercase tracking-widest mb-3 animate-pulse">
                  <Star size={12} className="fill-[#6366F1]" /> Executive Ambition
                </div>
                <h4 className="text-sm font-black uppercase tracking-wider mb-2 font-display">
                  Multinational Career Track & USA MBA
                </h4>
                <p className="text-xs text-gray-300 leading-relaxed mb-4 font-semibold">
                  “My long-term mission is to direct regional marketing networks for top-tier FMCG, tech and telecom players, backed by research-focused executive learning in prestigious US business schools.”
                </p>
                <div className="flex items-center gap-3 border-t border-white/10 pt-4 text-[10px] text-gray-400 font-mono font-bold uppercase tracking-wider">
                  <span className="flex items-center gap-1">
                    <Globe size={11} className="text-[#6366F1]" /> Multilingual Mastery
                  </span>
                  <span>•</span>
                  <span>5 Tongues Spoken</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
