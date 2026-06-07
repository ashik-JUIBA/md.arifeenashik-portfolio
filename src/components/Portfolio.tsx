/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { ArrowUpRight, Filter, X, Sparkles, CheckCircle2, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { PORTFOLIO_PROJECTS } from "../data";
import { Project } from "../types";

interface PortfolioProps {
  projects?: Project[];
}

export default function Portfolio({ projects = PORTFOLIO_PROJECTS }: PortfolioProps) {
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Derive unique categories dynamically from active projects
  const presetCategories = ["Canva Design", "Branding", "Social Media Campaign", "Video Editing & Production", "University Project"];
  const dynamicCategories = Array.from(new Set(projects.map(p => p.category)));
  const categories = ["All", ...Array.from(new Set([...presetCategories, ...dynamicCategories]))];

  const filteredProjects = activeFilter === "All"
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <section
      id="portfolio"
      className="py-24 bg-[#E9EDF2] relative overflow-hidden"
    >
      {/* Background ambient light effects */}
      <div className="absolute top-1/3 right-[-10%] w-[500px] h-[500px] bg-indigo-300/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Title and info line */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <p className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-[#6366F1] mb-2">
              [ Creative Output ]
            </p>
            <h2 className="font-display font-black text-4xl sm:text-5xl text-[#141414] tracking-tighter uppercase leading-none">
              Strategic <span className="text-outline">Portfolio</span>
            </h2>
            <p className="text-xs sm:text-sm font-semibold text-gray-700 mt-3 font-sans leading-relaxed">
              Curated strategic visual campaigns, slide architectures on Canva, and club operational models used for top corporate challenges.
            </p>
          </div>

          {/* Client spotlight list */}
          <div className="bg-white/45 backdrop-blur-xl border border-white/60 p-4 rounded-3xl flex flex-wrap items-center gap-4 text-[10px] font-mono leading-none">
            <span className="font-extrabold text-[#141414] flex items-center gap-1">
              <Sparkles size={11} className="text-[#A855F7] animate-pulse" /> ENGAGEMENTS:
            </span>
            <div className="flex flex-wrap gap-2">
              {["Grameenphone", "Dabur Bangladesh", "Arla Foods"].map((brand) => (
                <span key={brand} className="bg-white/75 px-3 py-1.5 rounded-xl text-[#141414] border border-white/50 font-extrabold tracking-wider uppercase">
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Filter Controls Bar */}
        <div className="relative z-10 flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-white/50">
          <span className="text-[10px] font-mono font-black text-gray-500 flex items-center gap-1.5 mr-2">
            <Filter size={11} /> FILTER BY:
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2.5 rounded-2xl text-[10px] font-bold uppercase tracking-widest transition-all cursor-pointer ${
                activeFilter === cat
                  ? "bg-[#141414] text-white shadow-md shadow-black/10"
                  : "bg-white/30 backdrop-blur-sm hover:bg-white/50 border border-white/40 text-gray-850"
              }`}
            >
              {cat === "Video Editing & Production" ? "Video Editing" : cat}
            </button>
          ))}
        </div>

        {/* Portfolio Masonry/Dynamic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                onClick={() => setSelectedProject(project)}
                className="group relative cursor-pointer bg-white/40 backdrop-blur-xl rounded-[2.5rem] border border-white/60 overflow-hidden shadow-sm hover:shadow-xl hover:border-[#6366F1] transition-all duration-300"
              >
                {/* Fixed container size 4:3 for standard portfolio templates */}
                <div className="relative aspect-4/3 overflow-hidden bg-gray-200 border-b border-white/50">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Category Pill Tag */}
                  <div className="absolute top-4 left-4 bg-white/55 backdrop-blur-md px-3 py-1.5 rounded-xl text-[9px] font-extrabold font-mono text-gray-800 tracking-widest uppercase shadow-sm border border-white/40">
                    {project.category}
                  </div>

                  {/* Absolute Click to Expand visual glow cue */}
                  <div className="absolute right-4 bottom-4 w-9 h-9 bg-[#141414]/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all scale-75 group-hover:scale-100 shadow-lg">
                    <ArrowUpRight size={14} className="text-white" />
                  </div>
                </div>

                {/* Info Text Content panel */}
                <div className="p-6 md:p-8 flex flex-col justify-between">
                  <div>
                    <span className="text-[9px] uppercase tracking-widest font-extrabold font-mono text-[#6366F1] mb-2 block">
                      {project.brandContext || "CREATIVE FORMAT"}
                    </span>
                    <h3 className="text-base font-black text-[#141414] group-hover:text-[#6366F1] transition-colors tracking-tight line-clamp-1">
                      {project.title}
                    </h3>
                    <p className="text-xs text-gray-600 font-semibold tracking-wide leading-relaxed mt-2 line-clamp-2">
                      {project.description}
                    </p>
                  </div>
                  
                  {/* Tags Pill cloud */}
                  <div className="flex flex-wrap gap-1.5 mt-5">
                    {project.tags.slice(0, 3).map((tag, tIdx) => (
                      <span key={tIdx} className="bg-white/45 border border-white/60 text-[#141414] px-2.5 py-1 rounded-xl text-[9px] font-mono font-bold uppercase tracking-wider">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Modal Project Showcase Overlay */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              {/* Backing Blur Layer */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
                className="absolute inset-0 bg-[#141414]/30 backdrop-blur-xl"
              ></motion.div>
              
              {/* Main Dialog box with high-end glass style */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 10 }}
                transition={{ duration: 0.3 }}
                className="relative z-10 w-full max-w-4xl bg-[#E9EDF2]/90 backdrop-blur-2xl rounded-[3rem] border border-white/60 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
              >
                {/* Top Action Header bar */}
                <div className="flex items-center justify-between px-8 py-5 border-b border-white/40 bg-white/35 backdrop-blur-sm">
                  <div className="flex items-center gap-1.5 font-mono text-[9px] font-extrabold tracking-widest text-[#141414] uppercase">
                    <span>CASE WORKCASE</span>
                    <ChevronRight size={10} className="text-[#6366F1]" />
                    <span className="text-[#6366F1]">{selectedProject.category}</span>
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="p-1.5 hover:bg-white/60 rounded-full text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    <X size={18} />
                  </button>
                </div>

                {/* Dual Column Layout - Scroller panel */}
                <div className="overflow-y-auto p-6 md:p-8 flex-1">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    
                    {/* Visual Media Column */}
                    <div className="lg:col-span-7 flex flex-col gap-4">
                      <div className="rounded-3xl overflow-hidden bg-gray-200 border border-white/60 shadow-md">
                        <img
                          src={selectedProject.image}
                          alt={selectedProject.title}
                          className="w-full object-cover max-h-[400px]"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div className="text-center font-mono text-[9px] text-gray-500 font-extrabold uppercase tracking-widest">
                        * Designed on industry standard templates (Canva, CapCut)
                      </div>
                    </div>

                    {/* Meta Specs Content Column */}
                    <div className="lg:col-span-5 flex flex-col gap-6">
                      
                      <div>
                        <span className="text-[9px] font-extrabold font-mono uppercase bg-white/60 border border-white/50 text-[#6366F1] px-3.5 py-1.5 rounded-full w-fit block">
                          {selectedProject.brandContext || "BRAND CASEWORK"}
                        </span>
                        <h4 className="text-lg md:text-xl font-black text-[#141414] tracking-tight uppercase mt-3 font-display">
                          {selectedProject.title}
                        </h4>
                      </div>

                      <div className="p-5 bg-white/40 border border-white/60 rounded-3xl">
                        <p className="text-[9px] font-mono font-black text-gray-405 uppercase tracking-wide">Case Analysis</p>
                        <p className="text-xs text-gray-700 leading-relaxed mt-2 font-semibold">
                          {selectedProject.description}
                        </p>
                      </div>

                      {/* Fact spec grid */}
                      <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 bg-white/40 border border-white/60 rounded-2xl">
                          <p className="text-[9px] font-mono font-black text-gray-500 uppercase tracking-widest">My Role</p>
                          <p className="text-xs font-extrabold text-[#141414] mt-1.5 uppercase tracking-wide">{selectedProject.role || "Creator"}</p>
                        </div>
                        <div className="p-4 bg-white/40 border border-white/60 rounded-2xl">
                          <p className="text-[9px] font-mono font-black text-gray-500 uppercase tracking-widest">Project Standard</p>
                          <p className="text-xs font-extrabold text-[#141414] mt-1.5 flex items-center gap-1 uppercase tracking-wide">
                            <CheckCircle2 size={12} className="text-[#6366F1]" /> BBA Standard
                          </p>
                        </div>
                      </div>

                      {/* Skills/Tools list */}
                      <div>
                        <p className="text-[9px] font-mono font-black text-gray-500 uppercase tracking-widest mb-2">Engaged Toolsets</p>
                        <div className="flex flex-wrap gap-1.5">
                          {selectedProject.tags.map((tag, tIdx) => (
                            <span key={tIdx} className="bg-[#6366F1] text-white font-mono text-[9px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded-xl">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                    </div>

                  </div>
                </div>

                {/* Footer with action */}
                <div className="px-8 py-5 border-t border-white/40 bg-white/35 backdrop-blur-sm flex justify-end gap-3 rounded-b-[3rem]">
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="px-6 py-3 text-xs font-bold text-gray-705 bg-white/50 hover:bg-white rounded-2xl border border-white/50 cursor-pointer transition-colors uppercase tracking-widest"
                  >
                    Close
                  </button>
                  <a
                    href="#contact"
                    onClick={() => setSelectedProject(null)}
                    className="px-6 py-3 text-xs font-bold text-white bg-[#141414] hover:bg-[#6366F1] rounded-2xl transition-all shadow-md uppercase tracking-widest cursor-pointer"
                  >
                    Collaborate
                  </a>
                </div>

              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
