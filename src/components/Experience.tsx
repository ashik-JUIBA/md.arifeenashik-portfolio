/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Briefcase, Landmark, Calendar, UserCheck, Star, Trophy } from "lucide-react";
import { EXPERIENCE_DATA, LEADERSHIP_DATA, VOLUNTARY_EXPERIENCE_DATA, ACHIEVEMENTS_DATA } from "../data";

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-24 bg-[#E9EDF2] relative overflow-hidden"
    >
      {/* Absolute blurring decoration bubble */}
      <div className="absolute top-1/2 left-[-10%] w-[450px] h-[450px] bg-purple-300/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Title Panel */}
        <div className="max-w-xl mb-16">
          <p className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-[#6366F1] mb-2">
            [ My Background ]
          </p>
          <h2 className="font-display font-black text-4xl sm:text-5xl text-[#141414] tracking-tighter uppercase leading-none">
            Experience & <span className="text-outline">Leadership</span>
          </h2>
          <p className="text-xs sm:text-sm font-semibold text-gray-700 mt-3 font-sans leading-relaxed">
            A cohesive merge between active corporate outreach execution and top-tier student advisory governance.
          </p>
        </div>

        {/* Dual Track Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Column: Corporate Career Track */}
          <div className="flex flex-col gap-8">
            <h3 className="text-[10px] font-mono font-black text-gray-500 uppercase tracking-widest flex items-center gap-2 mb-2 border-b border-white/50 pb-3 leading-none">
              <Briefcase size={14} className="text-[#6366F1]" /> Professional Experience
            </h3>

            {EXPERIENCE_DATA.map((job) => (
              <div
                key={job.id}
                className="bg-white/40 backdrop-blur-md border border-white/60 p-8 rounded-[2rem] hover:bg-white/50 transition-all relative overflow-hidden group shadow-sm/5"
              >
                {/* Decorative border glow */}
                <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-[#6366F1] to-[#A855F7]"></div>

                {/* Date stamp */}
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/60 border border-white/55 text-[#131313] text-[9px] font-extrabold uppercase tracking-widest mb-4 font-mono">
                  <Calendar size={11} className="text-[#6366F1]" /> {job.duration}
                </span>

                <h4 className="text-lg font-black text-[#141414] tracking-tight uppercase group-hover:text-[#6366F1] transition-colors leading-tight">
                  {job.role}
                </h4>
                <p className="text-[10px] font-extrabold text-gray-500 font-mono mb-6 uppercase tracking-wider">
                  {job.company} — Corporate B2B Agent
                </p>

                {/* Key Bullet points responsibilities */}
                <ul className="flex flex-col gap-3 mb-6">
                  {job.description.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2 text-xs sm:text-sm text-gray-700 leading-relaxed font-semibold">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#6366F1] mt-2 shrink-0"></span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Numerical metrics stats box inside the card */}
                {job.stats && (
                  <div className="grid grid-cols-2 gap-4 border-t border-white/55 pt-6">
                    {job.stats.map((s, sIdx) => (
                      <div key={sIdx} className="bg-white/35 rounded-2xl p-4 border border-white/50">
                        <span className="block font-sans font-black text-2xl text-[#141414]">
                          {s.value}
                        </span>
                        <span className="block text-[8px] uppercase font-bold text-gray-500 tracking-widest font-mono">
                          {s.label}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Micro quote regarding sales skill styled with Deep Glass black panel */}
            <div className="p-6 bg-[#141414] text-white rounded-[2rem] shadow-md border border-white/10 flex gap-4 items-start relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#6366F1]/10 rounded-full blur-xl pointer-events-none"></div>
              <Trophy size={20} className="text-amber-300 shrink-0 mt-1" />
              <div className="relative z-10">
                <h4 className="text-[10px] font-mono font-black uppercase tracking-widest text-[#6366F1] leading-none">Sales Pitch Mastery</h4>
                <p className="text-xs text-gray-300 mt-2 leading-relaxed font-semibold pr-2">
                  “Leading B2B presentations taught me active objection handling, value proposition framing, and the operational integrity of database administration.”
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: University Advisory Leadership Board */}
          <div className="flex flex-col gap-8">
            <h3 className="text-[10px] font-mono font-black text-gray-500 uppercase tracking-widest flex items-center gap-2 mb-2 border-b border-white/50 pb-3 leading-none">
              <Landmark size={14} className="text-[#6366F1]" /> Student Governance Board
            </h3>

            <div className="flex flex-col gap-8">
              {LEADERSHIP_DATA.map((item, idx) => (
                <div
                  key={item.id}
                  className="bg-white/40 backdrop-blur-md border border-white/60 p-6 sm:p-8 rounded-[2rem] relative overflow-hidden group hover:bg-white/50 hover:border-[#6366F1] transition-all duration-300 shadow-sm/5"
                >
                  {/* Badge */}
                  <span className="absolute top-6 right-6 font-mono text-[9px] font-black uppercase bg-white/60 border border-white/50 text-[#141414] px-3 py-1 rounded-full tracking-wider">
                    {item.badge}
                  </span>

                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2.5 bg-white/55 text-[#6366F1] border border-white/40 rounded-2xl">
                      <UserCheck size={16} />
                    </div>
                    <div>
                      <h4 className="text-sm sm:text-base font-black text-[#141414] tracking-tight uppercase leading-snug">
                        {item.role}
                      </h4>
                      <p className="text-[9px] font-mono font-extrabold text-gray-500 uppercase tracking-wider">
                        {item.club}
                      </p>
                    </div>
                  </div>

                  <p className="text-xs text-gray-700 font-semibold mb-4 italic leading-relaxed">
                    “{item.description}”
                  </p>

                  {/* Club responsibilities list expanded layout */}
                  <div className="border-t border-white/55 pt-4">
                    <p className="text-[8px] font-mono font-black text-gray-500 uppercase tracking-widest mb-2">Key Management Areas</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {item.responsibilities.map((resp, rIdx) => (
                        <div key={rIdx} className="flex items-start gap-1.5 font-sans">
                          <span className="text-[#6366F1] font-black text-xs mt-0.5">•</span>
                          <span className="text-xs text-gray-600 leading-tight font-semibold">
                            {resp}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>

        {/* Brand New Section: Voluntary Experiences & Achievements Trophy Shelf */}
        <div className="mt-16 pt-16 border-t border-white/50 grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Voluntary Initiatives timeline */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <h3 className="text-[10px] font-mono font-black text-gray-500 uppercase tracking-widest flex items-center gap-2 mb-2 pb-3 border-b border-white/50 leading-none">
              <Star size={14} className="text-[#6366F1]" /> Voluntary Experience & Campaigns
            </h3>

            <div className="flex flex-col gap-5">
              {VOLUNTARY_EXPERIENCE_DATA.map((vol) => (
                <div 
                  key={vol.id} 
                  className="bg-white/30 backdrop-blur-md border border-white/50 p-6 rounded-3xl hover:bg-white/40 transition-all flex flex-col gap-2"
                >
                  <div className="flex justify-between items-start gap-2">
                    <div>
                      <h4 className="text-sm font-black text-[#141414] uppercase leading-tight">
                        {vol.role}
                      </h4>
                      <p className="text-[10px] font-mono font-extrabold text-indigo-600 uppercase tracking-wider mt-0.5">
                        {vol.organization}
                      </p>
                    </div>
                    <span className="text-[9px] font-extrabold font-mono text-gray-400 bg-white/60 px-2.5 py-1 rounded-full shrink-0">
                      {vol.duration}
                    </span>
                  </div>
                  <p className="text-xs text-gray-700 font-semibold leading-relaxed mt-1">
                    {vol.bullets[0]}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Trophy Shelf section */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <h3 className="text-[10px] font-mono font-black text-gray-500 uppercase tracking-widest flex items-center gap-2 mb-2 pb-3 border-b border-white/50 leading-none">
              <Trophy size={14} className="text-amber-500" /> Trophies & Major Milestones
            </h3>

            <div className="grid grid-cols-1 gap-4">
              {ACHIEVEMENTS_DATA.map((ach) => (
                <div 
                  key={ach.id} 
                  className="bg-[#141414] text-white p-6 rounded-[2rem] relative overflow-hidden group shadow-lg"
                >
                  <div className="absolute top-0 right-0 w-16 h-16 bg-amber-500/10 rounded-full blur-xl group-hover:scale-150 transition-all duration-500 pointer-events-none" />
                  <div className="flex items-start gap-4">
                    <span className="p-2.5 bg-amber-500/10 text-amber-400 rounded-2xl shrink-0 mt-0.5">
                      <Trophy size={16} />
                    </span>
                    <div>
                      <h4 className="text-xs sm:text-sm font-black tracking-tight uppercase text-white group-hover:text-amber-300 transition-colors leading-snug">
                        {ach.title}
                      </h4>
                      <p className="text-[10px] sm:text-xs text-gray-400 font-medium font-semibold leading-relaxed mt-1">
                        {ach.subtitle}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
