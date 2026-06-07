/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { 
  Plus, 
  Trash2, 
  Lock, 
  Unlock, 
  Database, 
  FileText, 
  Check, 
  AlertCircle, 
  FolderPlus, 
  RefreshCw, 
  Sparkles, 
  ChevronRight,
  ExternalLink,
  Tag,
  Briefcase
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Project } from "../types";

// Curated high quality image assets for quick picker if they don't have an external URL handy
const QUICK_IMAGERY_TEMPLATES = [
  {
    name: "Research/Paper",
    url: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=800&auto=format&fit=crop",
    category: "Research Paper"
  },
  {
    name: "Case Analysis",
    url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    category: "Case Study"
  },
  {
    name: "Canva Creative",
    url: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop",
    category: "Canva Design"
  },
  {
    name: "Campaign/Ads",
    url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=850&auto=format&fit=crop",
    category: "Social Media Campaign"
  },
  {
    name: "Video Studio",
    url: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=800&auto=format&fit=crop",
    category: "Video Editing & Production"
  }
];

interface AdminPanelProps {
  projects: Project[];
  onAddProject: (project: Project) => void;
  onDeleteProject: (id: string) => void;
  onResetDefaults: () => void;
}

export default function AdminPanel({ projects, onAddProject, onDeleteProject, onResetDefaults }: AdminPanelProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [pinInput, setPinInput] = useState("");
  const [pinError, setPinError] = useState("");
  
  // Form States
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("University Project");
  const [customCategory, setCustomCategory] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [linkUrl, setLinkUrl] = useState("");
  const [role, setRole] = useState("Lead Author & Strategist");
  const [brandContext, setBrandContext] = useState("IBA JU BBA casework");
  const [tagsInput, setTagsInput] = useState("");
  
  const [showSuccessToast, setShowSuccessToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const handleAuthenticationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (pinInput === "1234" || pinInput.toLowerCase() === "admin") {
      setIsAuthenticated(true);
      setPinError("");
    } else {
      setPinError("Incorrect security code. (Hint: 'admin' or '1234')");
    }
  };

  const handleCreateProject = (e: React.FormEvent) => {
    e.preventDefault();

    if (!title.trim() || !description.trim()) {
      alert("Title and Description are required to list a new portfolio card!");
      return;
    }

    const finalCategory = category === "Custom" ? customCategory.trim() : category;
    if (!finalCategory) {
      alert("Please provide or select a valid collection category!");
      return;
    }

    const finalImage = imageUrl.trim() || "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=800&auto=format&fit=crop";
    const finalTags = tagsInput
      ? tagsInput.split(",").map(tag => tag.trim()).filter(tag => tag.length > 0)
      : ["Casework", finalCategory];

    const newProj: Project = {
      id: "proj-custom-" + Date.now(),
      title: title.trim(),
      category: finalCategory,
      description: description.trim(),
      image: finalImage,
      link: linkUrl.trim() || undefined,
      tags: finalTags,
      role: role.trim() || undefined,
      brandContext: brandContext.trim() || undefined
    };

    onAddProject(newProj);

    // Toast message trigger
    setToastMessage(`"${title.substring(0, 30)}..." successfully posted to the portfolio!`);
    setShowSuccessToast(true);
    setTimeout(() => setShowSuccessToast(false), 4500);

    // Reset fields
    setTitle("");
    setDescription("");
    setImageUrl("");
    setLinkUrl("");
    setTagsInput("");
    setCustomCategory("");
  };

  const handleQuickImageSelect = (url: string, defaultCat: string) => {
    setImageUrl(url);
    if (category !== "Custom") {
      setCategory(defaultCat);
    }
  };

  return (
    <section id="admin" className="py-24 bg-[#E9EDF2] relative overflow-hidden min-h-[90vh]">
      
      {/* Dynamic Success Toast */}
      <AnimatePresence>
        {showSuccessToast && (
          <motion.div
            initial={{ opacity: 0, y: -50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.9 }}
            className="fixed top-24 left-1/2 -translate-x-1/2 z-50 bg-[#141414] text-white py-4 px-6 rounded-3xl border border-white/20 shadow-2xl flex items-center gap-3 backdrop-blur-md max-w-md w-11/12"
          >
            <div className="p-2 bg-indigo-600 rounded-2xl text-white">
              <Check size={16} />
            </div>
            <div>
              <p className="text-[10px] font-black font-mono text-indigo-400 tracking-wider uppercase">SUCCESSFULLY LISTED</p>
              <p className="text-xs font-semibold mt-1 text-gray-250 leading-relaxed font-sans">{toastMessage}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="absolute top-10 left-[-15%] w-[600px] h-[600px] bg-purple-300/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-[-15%] w-[600px] h-[600px] bg-indigo-300/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Title Group */}
        <div className="mb-14">
          <p className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-[#6366F1] mb-2">
            [ System Engine ]
          </p>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h2 className="font-display font-black text-4xl sm:text-5xl text-[#141414] tracking-tighter uppercase leading-none">
                Admin <span className="text-outline">Dashboard</span>
              </h2>
              <p className="text-xs sm:text-sm font-semibold text-gray-700 mt-3 font-sans max-w-xl">
                Maintain and enrich Ashik's professional credentials. Add, upload, or prune projects, researches, papers, and case analysis files in real-time.
              </p>
            </div>
            {isAuthenticated && (
              <button
                type="button"
                onClick={onResetDefaults}
                className="px-5 py-3 rounded-2xl bg-white/50 hover:bg-red-50 hover:text-red-600 hover:border-red-200 border border-white/60 text-xs font-bold text-gray-750 transition-all flex items-center gap-2 cursor-pointer shadow-sm"
              >
                <RefreshCw size={14} className="animate-spin-slow" />
                Reset Portfolio Data
              </button>
            )}
          </div>
        </div>

        {/* Lock barrier screen */}
        {!isAuthenticated ? (
          <div className="max-w-md mx-auto aspect-square md:aspect-auto md:py-16 px-8 bg-white/45 backdrop-blur-xl border border-white/65 rounded-[3.5rem] shadow-xl flex flex-col justify-center items-center text-center">
            <div className="w-16 h-16 bg-[#141414]/5 rounded-full flex items-center justify-center text-[#6366F1] mb-6 relative">
              <Lock size={26} className="text-[#6366F1]" />
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-purple-500 rounded-full animate-ping opacity-75"></div>
            </div>
            
            <h3 className="font-display font-black text-2xl text-[#141414] uppercase tracking-tight">Security Verifier</h3>
            <p className="text-xs font-semibold text-gray-650 mt-2 max-w-xs leading-relaxed font-sans">
              Enter the system access credentials below to unlock the publication controls.
            </p>

            <form onSubmit={handleAuthenticationSubmit} className="w-full mt-8 flex flex-col gap-4">
              <div className="relative">
                <input
                  type="password"
                  placeholder="Enter secret PIN (try: admin)"
                  value={pinInput}
                  onChange={(e) => setPinInput(e.target.value)}
                  className="w-full px-5 py-4 rounded-2xl bg-white/80 border border-white/60 focus:outline-none focus:ring-2 focus:ring-[#6366F1]/40 focus:border-[#6366F1] text-center text-sm font-bold tracking-widest text-[#141414] shadow-sm transition-all"
                />
              </div>

              {pinError && (
                <div className="flex items-center gap-1.5 text-xs text-red-600 font-bold bg-red-100/30 p-3 rounded-xl border border-red-200/50 justify-center">
                  <AlertCircle size={13} />
                  <span>{pinError}</span>
                </div>
              )}

              <button
                type="submit"
                className="w-full py-4 rounded-2xl bg-[#141414] text-white hover:bg-[#6366F1] font-bold text-xs uppercase tracking-widest transition-all cursor-pointer shadow-md shadow-black/10 flex items-center justify-center gap-2"
              >
                <Unlock size={14} /> Verify & Unlock
              </button>
            </form>

            <span className="text-[10px] uppercase font-mono font-black text-gray-500 tracking-wider mt-6">
              * DEMO ACCESS HINT: <code className="bg-[#141414]/10 px-1 py-0.5 rounded text-indigo-700">admin</code> OR <code className="bg-[#141414]/10 px-1 py-0.5 rounded text-indigo-700">1234</code>
            </span>
          </div>
        ) : (
          /* Main Dashboard Layout */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Column: Create Form */}
            <div className="lg:col-span-7 bg-white/45 backdrop-blur-xl border border-white/65 rounded-[3rem] p-6 sm:p-10 shadow-lg">
              <div className="flex items-center gap-2 mb-8 border-b border-gray-200/40 pb-5">
                <div className="p-3 bg-indigo-50 text-[#6366F1] rounded-2xl border border-[#6366F1]/10">
                  <FolderPlus size={20} />
                </div>
                <div>
                  <h3 className="font-display font-black text-lg sm:text-xl text-[#141414] uppercase tracking-tight">Upload New Asset</h3>
                  <p className="text-[11px] font-semibold text-gray-600 font-sans mt-0.5">List a project, research paper, case study, or agency presentation</p>
                </div>
              </div>

              <form onSubmit={handleCreateProject} className="flex flex-col gap-6">
                
                {/* Title */}
                <div>
                  <label className="block text-[10px] font-mono font-black text-gray-600 uppercase tracking-widest mb-2">
                    Title & Subject Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Impact of AI Prompts on BBA Marketing Curriculums"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full px-4 py-3.5 rounded-2xl bg-white/80 border border-white/60 focus:outline-none focus:ring-2 focus:ring-[#6366F1]/30 focus:border-[#6366F1] text-xs font-bold text-[#141414]"
                  />
                </div>

                {/* Category Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-mono font-black text-gray-600 uppercase tracking-widest mb-2">
                      Collection Category *
                    </label>
                    <select
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      className="w-full px-4 py-3.5 rounded-2xl bg-white/85 border border-white/60 focus:outline-none focus:ring-2 focus:ring-[#6366F1]/30 focus:border-[#6366F1] text-xs font-bold text-[#141414]"
                    >
                      <option value="Canva Design">Canva Design</option>
                      <option value="Branding">Branding</option>
                      <option value="Social Media Campaign">Social Media Campaign</option>
                      <option value="Video Editing & Production">Video Editing</option>
                      <option value="University Project">University Project</option>
                      <option value="Research Paper">Research Paper</option>
                      <option value="Case Study">Case Study</option>
                      <option value="Custom">Custom Choice...</option>
                    </select>
                  </div>

                  {category === "Custom" && (
                    <motion.div
                      initial={{ scale: 0.95, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                    >
                      <label className="block text-[10px] font-mono font-black text-gray-600 uppercase tracking-widest mb-2">
                        Type Custom Category Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Academic Paper, Campaign Deck"
                        value={customCategory}
                        onChange={(e) => setCustomCategory(e.target.value)}
                        className="w-full px-4 py-3.5 rounded-2xl bg-white/80 border border-white/60 focus:outline-none focus:ring-2 focus:ring-[#6366F1]/30 focus:border-[#6366F1] text-xs font-bold text-[#141414]"
                      />
                    </motion.div>
                  )}
                </div>

                {/* Meta details (Role & Brand Context) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-mono font-black text-gray-600 uppercase tracking-widest mb-2">
                      My Professional Role
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Lead Author, Strategic Creator"
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                      className="w-full px-4 py-3.5 rounded-2xl bg-white/80 border border-white/60 focus:outline-none focus:ring-2 focus:ring-[#6366F1]/30 focus:border-[#6366F1] text-xs font-bold text-[#141414]"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono font-black text-gray-600 uppercase tracking-widest mb-2">
                      Brand / Academic Context
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. IBA JU Marketing Casework"
                      value={brandContext}
                      onChange={(e) => setBrandContext(e.target.value)}
                      className="w-full px-4 py-3.5 rounded-2xl bg-white/80 border border-white/60 focus:outline-none focus:ring-2 focus:ring-[#6366F1]/30 focus:border-[#6366F1] text-xs font-bold text-[#141414]"
                    />
                  </div>
                </div>

                {/* Image Picker / Input */}
                <div>
                  <label className="block text-[10px] font-mono font-black text-gray-600 uppercase tracking-widest mb-2">
                    Visual Image Source URL
                  </label>
                  <input
                    type="url"
                    placeholder="https://images.unsplash.com/... (or choose template below)"
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
                    className="w-full px-4 py-3.5 rounded-2xl bg-white/80 border border-white/60 focus:outline-none focus:ring-2 focus:ring-[#6366F1]/30 focus:border-[#6366F1] text-xs font-bold text-[#141414] mb-3"
                  />
                  
                  {/* Curated visual templates */}
                  <div>
                    <span className="block text-[8px] font-mono font-black text-gray-500 uppercase tracking-widest mb-2">
                      OR CHOOSE CURATED PROFESSIONAL PHOTO PRESETS:
                    </span>
                    <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                      {QUICK_IMAGERY_TEMPLATES.map((img) => {
                        const isSelected = imageUrl === img.url;
                        return (
                          <button
                            type="button"
                            key={img.name}
                            onClick={() => handleQuickImageSelect(img.url, img.category)}
                            className={`p-1 bg-white border rounded-xl overflow-hidden text-left transition-all ${
                              isSelected 
                                ? "border-[#6366F1] ring-2 ring-[#6366F1]/20 scale-102"
                                : "border-white/80 hover:border-indigo-400"
                            }`}
                          >
                            <div className="relative aspect-video rounded-lg overflow-hidden bg-gray-150 mb-1">
                              <img src={img.url} alt={img.name} className="w-full h-full object-cover" />
                              {isSelected && (
                                <div className="absolute inset-0 bg-[#6366F1]/55 flex items-center justify-center text-white">
                                  <Check size={11} className="stroke-[3]" />
                                </div>
                              )}
                            </div>
                            <span className="block text-[8px] font-mono leading-none text-gray-600 text-center truncate font-extrabold uppercase">
                              {img.name}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Tags input */}
                <div>
                  <label className="block text-[10px] font-mono font-black text-gray-600 uppercase tracking-widest mb-1">
                    Skills / Tag Attributes (comma separated)
                  </label>
                  <p className="text-[9px] font-sans text-gray-500 mb-2">Add target toolsets used during production.</p>
                  <input
                    type="text"
                    placeholder="e.g. Academic Research, Canva Guide, Literature Review"
                    value={tagsInput}
                    onChange={(e) => setTagsInput(e.target.value)}
                    className="w-full px-4 py-3.5 rounded-2xl bg-white/80 border border-white/60 focus:outline-none focus:ring-2 focus:ring-[#6366F1]/30 focus:border-[#6366F1] text-xs font-bold text-[#141414]"
                  />
                </div>

                {/* External Links */}
                <div>
                  <label className="block text-[10px] font-mono font-black text-gray-600 uppercase tracking-widest mb-2">
                    Target Resource Link / Document URL (Optional)
                  </label>
                  <input
                    type="url"
                    placeholder="e.g. https://linkedin.com/posts/... or Drive Link"
                    value={linkUrl}
                    onChange={(e) => setLinkUrl(e.target.value)}
                    className="w-full px-4 py-3.5 rounded-2xl bg-white/80 border border-white/60 focus:outline-none focus:ring-2 focus:ring-[#6366F1]/30 focus:border-[#6366F1] text-xs font-bold text-[#141414]"
                  />
                </div>

                {/* Detailed Description */}
                <div>
                  <label className="block text-[10px] font-mono font-black text-gray-600 uppercase tracking-widest mb-2">
                    Case Abstract / Analytical Overview *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Detail the case objectives, your research methodology, strategic outcomes, and quantitative metrics tracked..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="w-full px-4 py-3.5 rounded-2xl bg-white/80 border border-white/60 focus:outline-none focus:ring-2 focus:ring-[#6366F1]/30 focus:border-[#6366F1] text-xs font-semibold text-gray-800 leading-relaxed font-sans"
                  />
                </div>

                {/* Write Button */}
                <button
                  type="submit"
                  className="mt-4 w-full py-4 bg-[#141414] hover:bg-[#6366F1] text-white rounded-2xl text-xs font-bold uppercase tracking-widest transition-all cursor-pointer shadow-lg shadow-indigo-500/10 active:scale-98 flex items-center justify-center gap-2"
                >
                  <Plus size={14} /> Publish to Live Portfolio
                </button>

              </form>
            </div>

            {/* Right Column: Collection Catalog Listing */}
            <div className="lg:col-span-5 flex flex-col gap-8">
              
              {/* Asset counter metadata */}
              <div className="p-6 bg-[#6366F1] rounded-[2.5rem] text-white shadow-xl relative overflow-hidden">
                <div className="absolute right-[-10%] top-[-20%] w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
                <div className="flex items-center gap-2 font-mono text-[9px] font-bold uppercase tracking-widest text-indigo-200">
                  <Database size={11} />
                  <span>Interactive Database Status</span>
                </div>
                <div className="mt-4 flex items-baseline gap-2">
                  <span className="text-4xl font-display font-black tracking-tight">{projects.length}</span>
                  <span className="text-xs text-indigo-100 font-bold uppercase tracking-wider">Indexed Assets</span>
                </div>
                <p className="text-xs text-indigo-100/90 leading-relaxed mt-4 font-semibold">
                  Changes persist locally on your current device. To refresh the entire catalog back to Ashik's curated high-conversion default templates, select the reset tool above.
                </p>
              </div>

              {/* Simple Catalog scrollbar list */}
              <div className="bg-white/45 backdrop-blur-xl border border-white/65 rounded-[3rem] p-6 shadow-md flex flex-col h-[520px]">
                <h4 className="font-display font-black text-sm text-[#141414] uppercase tracking-wider mb-4 border-b border-gray-200/40 pb-3 flex items-center justify-between">
                  <span>INDEXED ITEMS</span>
                  <span className="bg-white/70 backdrop-blur text-[8px] font-mono px-2 py-1 rounded-lg text-indigo-600 border border-white">
                    LIST VIEW
                  </span>
                </h4>

                <div className="overflow-y-auto space-y-3 pr-1 flex-1 max-h-[420px]">
                  {projects.map((proj) => (
                    <div 
                      key={proj.id}
                      className="group flex gap-3 p-3 bg-white/50 hover:bg-white rounded-2xl border border-white/60 transition-all justify-between items-center"
                    >
                      <div className="flex items-center gap-3 overflow-hidden">
                        <div className="w-10 h-10 rounded-xl overflow-hidden bg-gray-200 border border-white/50 flex-shrink-0">
                          <img src={proj.image} alt="" className="w-full h-full object-cover" />
                        </div>
                        <div className="overflow-hidden">
                          <h5 className="text-[11px] font-bold text-[#141414] uppercase tracking-wide truncate">{proj.title}</h5>
                          <span className="inline-block text-[8px] font-mono font-black text-[#6366F1]/80 uppercase tracking-widest mt-0.5">
                            {proj.category}
                          </span>
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={() => onDeleteProject(proj.id)}
                        className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all flex-shrink-0 cursor-pointer"
                        title="Delete asset cards"
                      >
                        <Trash2 size={13} />
                      </button>
                    </div>
                  ))}
                  
                  {projects.length === 0 && (
                    <div className="text-center py-12 flex flex-col justify-center items-center text-gray-500">
                      <FileText size={24} className="mb-2 text-gray-300" />
                      <p className="text-xs font-semibold">No assets found</p>
                      <button onClick={onResetDefaults} className="text-[10px] font-mono font-bold text-indigo-600 hover:underline tracking-wider uppercase mt-2">
                        Get standard assets
                      </button>
                    </div>
                  )}
                </div>

              </div>

            </div>

          </div>
        )}

      </div>
    </section>
  );
}
