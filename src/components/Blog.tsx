/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useMemo, useEffect, FormEvent } from "react";
import { 
  BookOpen, 
  Plus, 
  Search, 
  Tag, 
  Calendar, 
  Clock, 
  ArrowRight, 
  X, 
  Filter, 
  Check, 
  Sparkles, 
  User, 
  PenTool,
  SlidersHorizontal,
  ChevronRight
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { BlogPost } from "../types";
import { getStoredBlogPosts, saveBlogPosts } from "../blogData";

const CATEGORIES = ["All", "Marketing", "Digital Creation", "Branding", "Corporate Strategy"];

export default function Blog() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  
  // Publishing Form State
  const [isPublishingOpen, setIsPublishingOpen] = useState<boolean>(false);
  const [formTitle, setFormTitle] = useState<string>("");
  const [formExcerpt, setFormExcerpt] = useState<string>("");
  const [formContent, setFormContent] = useState<string>("");
  const [formCategory, setFormCategory] = useState<BlogPost["category"]>("Marketing");
  const [formTags, setFormTags] = useState<string>("");
  const [formImageUrl, setFormImageUrl] = useState<string>("");
  const [isFormFeatured, setIsFormFeatured] = useState<boolean>(false);
  const [successMsg, setSuccessMsg] = useState<string>("");

  // Load from local storage
  useEffect(() => {
    setPosts(getStoredBlogPosts());
  }, []);

  // Filter & Search Logic
  const filteredPosts = useMemo(() => {
    return posts.filter(post => {
      const matchesCategory = activeCategory === "All" || post.category === activeCategory;
      const matchesSearch = 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [posts, activeCategory, searchQuery]);

  // Featured Post logic (highest priority is post marked isFeatured, else the newest)
  const featuredPost = useMemo(() => {
    const featured = posts.find(post => post.isFeatured);
    if (featured) return featured;
    return posts[0] || null;
  }, [posts]);

  // Regular grid posts (exclude the current featured post to prevent repetition)
  const regularPosts = useMemo(() => {
    if (!featuredPost) return filteredPosts;
    return filteredPosts.filter(post => post.id !== featuredPost.id);
  }, [filteredPosts, featuredPost]);

  const handlePublish = (e: FormEvent) => {
    e.preventDefault();
    if (!formTitle || !formExcerpt || !formContent) return;

    // Convert comma tags to array
    const tagArray = formTags
      ? formTags.split(",").map(t => t.trim()).filter(Boolean)
      : ["Marketing", "Strategy"];

    // Fallback image if empty
    const imgUrl = formImageUrl.trim() || "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop";

    const newPost: BlogPost = {
      id: `blog-${Date.now()}`,
      title: formTitle,
      excerpt: formExcerpt,
      content: formContent,
      category: formCategory,
      tags: tagArray,
      publishedAt: new Date().toLocaleDateString("en-US", {
        month: "short",
        day: "2-digit",
        year: "numeric"
      }),
      readTime: `${Math.max(1, Math.ceil(formContent.split(" ").length / 180))} min read`,
      imageUrl: imgUrl,
      isFeatured: isFormFeatured,
      author: "Md. Arifeen Ashik"
    };

    let updatedPosts = [newPost, ...posts];

    // If new post is featured, make sure it is the ONLY featured post
    if (isFormFeatured) {
      updatedPosts = updatedPosts.map(p => 
        p.id === newPost.id ? { ...p, isFeatured: true } : { ...p, isFeatured: false }
      );
    }

    setPosts(updatedPosts);
    saveBlogPosts(updatedPosts);

    // Reset form
    setFormTitle("");
    setFormExcerpt("");
    setFormContent("");
    setFormTags("");
    setFormImageUrl("");
    setIsFormFeatured(false);
    
    setSuccessMsg("Insight successfully published!");
    setTimeout(() => {
      setSuccessMsg("");
      setIsPublishingOpen(false);
    }, 2000);
  };

  return (
    <section 
      id="blog" 
      className="py-24 bg-[#E9EDF2] relative overflow-hidden border-t border-white/60"
    >
      {/* Dynamic graphic bubble */}
      <div className="absolute top-1/4 left-[-15%] w-[600px] h-[600px] bg-[#6366F1]/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-[-15%] w-[500px] h-[500px] bg-[#A855F7]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <p className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-[#6366F1] mb-2">
              [ Strategic Thinking ]
            </p>
            <h2 className="font-display font-black text-4xl sm:text-5xl text-[#141414] tracking-tighter uppercase leading-none">
              Strategic <span className="text-outline">Insights</span>
            </h2>
            <p className="text-xs sm:text-sm font-semibold text-gray-700 mt-3 font-sans leading-relaxed max-w-xl">
              Published articles, case teardowns, and analytical business structures regarding branding workflows, digital content systems, and corporate alignment.
            </p>
          </div>

          <button
            onClick={() => setIsPublishingOpen(!isPublishingOpen)}
            className="flex items-center gap-2 px-6 py-3.5 bg-[#141414] hover:bg-[#6366F1] text-white text-[10px] font-mono font-bold uppercase tracking-widest rounded-2xl transition-all hover:scale-[1.02] active:scale-95 shadow-md self-start md:self-end cursor-pointer"
          >
            {isPublishingOpen ? <X size={13} /> : <Plus size={13} />}
            {isPublishingOpen ? "Cancel Publisher" : "Publish Article"}
          </button>
        </div>

        {/* Collapsible Publisher Suite */}
        <AnimatePresence>
          {isPublishingOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, marginBottom: 0 }}
              animate={{ opacity: 1, height: "auto", marginBottom: 40 }}
              exit={{ opacity: 0, height: 0, marginBottom: 0 }}
              transition={{ duration: 0.4 }}
              className="overflow-hidden bg-white/45 backdrop-blur-xl border border-white/60 p-6 sm:p-10 rounded-[2.5rem] shadow-xl"
            >
              <h3 className="font-display font-black text-xl text-[#141414] uppercase tracking-tight mb-6 flex items-center gap-2">
                <PenTool size={18} className="text-[#6366F1]" /> Write Strategic Insight
              </h3>

              {successMsg ? (
                <div className="bg-emerald-50 border border-emerald-100 p-6 rounded-2xl text-center text-emerald-800">
                  <span className="inline-block p-2 bg-emerald-500 text-white rounded-full mb-3">
                    <Check size={20} />
                  </span>
                  <p className="font-mono text-xs uppercase tracking-widest font-black leading-none">{successMsg}</p>
                </div>
              ) : (
                <form onSubmit={handlePublish} className="grid grid-cols-1 md:grid-cols-12 gap-6">
                  <div className="md:col-span-8 flex flex-col gap-4">
                    
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[9px] font-mono font-black text-gray-500 uppercase tracking-widest">
                        Article Title*
                      </label>
                      <input
                        type="text"
                        required
                        value={formTitle}
                        onChange={(e) => setFormTitle(e.target.value)}
                        placeholder="e.g., Growth Marketing Blueprint: Scaling Local FMCG Outlets"
                        className="w-full bg-white border border-white/70 rounded-xl px-4 py-3 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-[#6366F1] focus:border-[#6366F1] transition-all"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-[9px] font-mono font-black text-gray-500 uppercase tracking-widest">
                        Short Excerpt Summary*
                      </label>
                      <input
                        type="text"
                        required
                        value={formExcerpt}
                        onChange={(e) => setFormExcerpt(e.target.value)}
                        placeholder="A sentence summarizing the thesis of this strategy..."
                        className="w-full bg-white border border-white/70 rounded-xl px-4 py-3 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-[#6366F1] focus:border-[#6366F1] transition-all"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-[9px] font-mono font-black text-gray-500 uppercase tracking-widest">
                        Article Content Markdown*
                      </label>
                      <textarea
                        required
                        rows={8}
                        value={formContent}
                        onChange={(e) => setFormContent(e.target.value)}
                        placeholder="Write full strategy post content here..."
                        className="w-full bg-white border border-white/70 rounded-xl p-4 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-[#6366F1] focus:border-[#6366F1] transition-all resize-none font-sans"
                      />
                    </div>

                  </div>

                  <div className="md:col-span-4 flex flex-col gap-4">
                    
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[9px] font-mono font-black text-gray-500 uppercase tracking-widest">
                        Primary Category
                      </label>
                      <select
                        value={formCategory}
                        onChange={(e) => setFormCategory(e.target.value as BlogPost["category"])}
                        className="w-full bg-white border border-white/70 rounded-xl px-4 py-2.5 text-xs font-bold focus:outline-none focus:ring-2 focus:ring-[#6366F1]"
                      >
                        <option value="Marketing">Marketing</option>
                        <option value="Digital Creation">Digital Creation</option>
                        <option value="Branding">Branding</option>
                        <option value="Corporate Strategy">Corporate Strategy</option>
                      </select>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-[9px] font-mono font-black text-gray-500 uppercase tracking-widest">
                        Tags (Comma separated)
                      </label>
                      <input
                        type="text"
                        value={formTags}
                        onChange={(e) => setFormTags(e.target.value)}
                        placeholder="e.g., Lead Gen, Strategy, Branding"
                        className="w-full bg-white border border-white/70 rounded-xl px-4 py-3 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-[#6366F1]"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-[9px] font-mono font-black text-gray-500 uppercase tracking-widest">
                        Image URL (Unsplash Link)
                      </label>
                      <input
                        type="text"
                        value={formImageUrl}
                        onChange={(e) => setFormImageUrl(e.target.value)}
                        placeholder="Leave blank for generic matching fallback photo"
                        className="w-full bg-white border border-white/70 rounded-xl px-4 py-3 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-[#6366F1]"
                      />
                    </div>

                    {/* Checkbox for Featured Post */}
                    <div className="flex items-center gap-2.5 mt-2 bg-white/30 border border-white/40 p-3 rounded-xl">
                      <input
                        type="checkbox"
                        id="isFeatured"
                        checked={isFormFeatured}
                        onChange={(e) => setIsFormFeatured(e.target.checked)}
                        className="w-4 h-4 rounded border-gray-300 text-[#6366F1] focus:ring-[#6366F1]"
                      />
                      <label htmlFor="isFeatured" className="text-[10px] font-mono font-bold text-gray-700 uppercase tracking-wide cursor-pointer select-none">
                        Feature this article prominently
                      </label>
                    </div>

                    <button
                      type="submit"
                      className="mt-4 w-full py-3.5 px-6 bg-[#6366F1] hover:bg-[#141414] text-white font-mono text-[10px] font-bold uppercase tracking-widest rounded-xl shadow-md transition-all cursor-pointer"
                    >
                      Publish to Live Timeline
                    </button>

                  </div>
                </form>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Featured Post Card (Prominent display for high strategic relevance) */}
        {featuredPost && activeCategory === "All" && !searchQuery && (
          <div className="mb-14">
            <p className="text-[9px] font-mono font-extrabold text-[#6366F1] uppercase tracking-[0.25em] mb-4 flex items-center gap-1">
              <Sparkles size={11} className="animate-pulse" /> [ Featured Publication ]
            </p>
            <div 
              onClick={() => setSelectedPost(featuredPost)}
              className="group relative bg-[#141414] text-white rounded-[3rem] overflow-hidden border border-white/10 shadow-xl cursor-pointer hover:border-[#6366F1]/55 transition-all duration-300 grid grid-cols-1 lg:grid-cols-12"
            >
              <div className="lg:col-span-6 relative aspect-video lg:aspect-auto min-h-[300px]">
                <img 
                  src={featuredPost.imageUrl} 
                  alt={featuredPost.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.01] transition-all duration-700" 
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#141414] via-[#141414]/30 to-transparent"></div>
                
                {/* Category Pill Tag */}
                <div className="absolute top-6 left-6 bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/20 text-[9px] font-mono font-black uppercase tracking-widest text-[#FFF]">
                  {featuredPost.category}
                </div>
              </div>

              <div className="lg:col-span-6 p-8 sm:p-12 flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap gap-4 text-[9px] font-mono font-extrabold text-gray-400 uppercase tracking-widest mb-4">
                    <span className="flex items-center gap-1"><Calendar size={11} /> {featuredPost.publishedAt}</span>
                    <span className="flex items-center gap-1"><Clock size={11} /> {featuredPost.readTime}</span>
                  </div>

                  <h3 className="font-display font-black text-2xl sm:text-3xl text-white tracking-tight leading-tight group-hover:text-[#6366F1] transition-all uppercase">
                    {featuredPost.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-gray-300 font-semibold leading-relaxed mt-4">
                    {featuredPost.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-6">
                    {featuredPost.tags.map((tag, tIdx) => (
                      <span 
                        key={tIdx} 
                        className="bg-white/5 border border-white/10 text-gray-300 font-mono text-[9px] px-2.5 py-1 rounded-xl uppercase tracking-wider"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#6366F1] group-hover:text-white transition-all">
                  <div className="flex items-center gap-1.5 text-gray-300">
                    <User size={12} className="text-[#6366F1]" />
                    <span className="text-[10px] font-mono uppercase font-black">{featuredPost.author}</span>
                  </div>
                  <span className="flex items-center gap-1">
                    Read Insights <ArrowRight size={13} className="group-hover:translate-x-1.5 transition-transform" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Filter & Live Search Toolbar */}
        <div className="bg-white/45 backdrop-blur-xl border border-white/60 p-4 rounded-[2rem] shadow-sm mb-10 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Categories Button List */}
          <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2.5 rounded-2xl text-[9px] font-mono font-bold uppercase tracking-widest transition-all cursor-pointer ${
                  activeCategory === cat
                    ? "bg-[#141414] text-white shadow-md shadow-black/10"
                    : "bg-white/40 hover:bg-white text-gray-800 border border-white/45"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Live Search Inputs */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={14} />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search strategy insights..."
              className="w-full bg-white/45 backdrop-blur-sm border border-white/55 rounded-2xl pl-11 pr-4 py-2.5 text-xs font-semibold placeholder-gray-500 text-gray-850 focus:outline-none focus:ring-2 focus:ring-[#6366F1] focus:border-[#6366F1] transition-all font-sans"
            />
          </div>
        </div>

        {/* Posts Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {regularPosts.map((post) => (
              <motion.div
                key={post.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelectedPost(post)}
                className="group cursor-pointer bg-white/45 backdrop-blur-xl rounded-[2.5rem] border border-white/65 overflow-hidden shadow-sm hover:shadow-xl hover:border-[#6366F1] transition-all duration-300 flex flex-col h-full"
              >
                <div className="relative aspect-video overflow-hidden bg-gray-200 border-b border-white/50">
                  <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500" referrerPolicy="no-referrer" />
                  
                  {/* Category Pill Tag */}
                  <div className="absolute top-4 left-4 bg-white/55 backdrop-blur-md px-3 py-1.5 rounded-xl text-[8px] font-black font-mono text-gray-800 tracking-wider uppercase border border-white/45">
                    {post.category}
                  </div>
                </div>

                <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Timestamp and duration */}
                    <div className="flex items-center gap-3 text-[9px] font-mono font-black text-gray-500 uppercase tracking-wider mb-3">
                      <span className="flex items-center gap-1"><Calendar size={10} /> {post.publishedAt}</span>
                      <span className="flex items-center gap-1"><Clock size={10} /> {post.readTime}</span>
                    </div>

                    <h4 className="text-base font-black text-[#141414] group-hover:text-[#6366F1] transition-colors tracking-tight line-clamp-2 uppercase leading-tight">
                      {post.title}
                    </h4>

                    <p className="text-xs text-gray-600 font-semibold tracking-wide leading-relaxed mt-2.5 line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>

                  <div>
                    {/* Tags pill cloud */}
                    <div className="flex flex-wrap gap-1 mt-5">
                      {post.tags.slice(0, 3).map((tag, tIdx) => (
                        <span key={tIdx} className="bg-white/45 border border-white/60 text-[#141414] px-2 py-0.5 rounded-lg text-[8px] font-mono font-bold uppercase tracking-wider">
                          #{tag}
                        </span>
                      ))}
                    </div>

                    {/* Author bar section footer */}
                    <div className="mt-5 pt-4 border-t border-white/55 flex items-center justify-between text-[10px] font-mono font-black uppercase text-gray-500">
                      <span className="text-gray-600 tracking-wide">{post.author}</span>
                      <span className="text-[#6366F1] group-hover:translate-x-1 transition-transform flex items-center gap-0.5">
                        Read Card <ChevronRight size={10} />
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {filteredPosts.length === 0 && (
            <div className="col-span-full py-16 text-center text-gray-500">
              <BookOpen size={24} className="mx-auto mb-3 opacity-60 text-[#6366F1]" />
              <p className="font-mono text-xs uppercase tracking-widest font-black text-gray-500 mb-1">Inquiry Nullified</p>
              <p className="text-xs font-semibold text-gray-600 font-sans">No strategy articles matched current search querying or filters.</p>
            </div>
          )}
        </div>

      </div>

      {/* Deep Immersive Article Prose Reader Modal */}
      <AnimatePresence>
        {selectedPost && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedPost(null)}
              className="absolute inset-0 bg-[#141414]/30 backdrop-blur-xl"
            ></motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.3 }}
              className="relative z-10 w-full max-w-3xl bg-[#E9EDF2]/90 backdrop-blur-2xl rounded-[3rem] border border-white/60 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
            >
              {/* Header Action bar */}
              <div className="flex items-center justify-between px-8 py-5 border-b border-white/40 bg-white/35">
                <div className="flex items-center gap-1.5 font-mono text-[9px] font-extrabold tracking-widest text-[#141414] uppercase">
                  <span>PUBLISHED IN</span>
                  <ChevronRight size={10} className="text-[#6366F1]" />
                  <span className="text-[#6366F1]">{selectedPost.category}</span>
                </div>
                <button
                  onClick={() => setSelectedPost(null)}
                  className="p-1.5 hover:bg-white/60 rounded-full text-gray-600 hover:text-gray-900 transition-colors cursor-pointer"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Scrollable prose box */}
              <div className="overflow-y-auto p-6 sm:p-10 flex-grow">
                <div className="relative h-60 w-full rounded-2xl overflow-hidden mb-8 border border-white/50 shadow-md">
                  <img src={selectedPost.imageUrl} alt={selectedPost.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  
                  {/* Title overlay in image card */}
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <p className="text-[9px] font-mono uppercase tracking-widest text-indigo-200 mb-2 leading-none">Original Insight Block</p>
                    <h3 className="font-display font-black text-xl sm:text-2xl text-white tracking-tight uppercase leading-tight line-clamp-2">
                      {selectedPost.title}
                    </h3>
                  </div>
                </div>

                <div className="flex flex-wrap gap-5 text-[10px] font-mono font-bold text-gray-500 uppercase tracking-wider mb-6 border-b border-white/50 pb-4">
                  <span className="flex items-center gap-1 text-gray-600"><User size={11} className="text-[#6366F1]" /> {selectedPost.author}</span>
                  <span className="flex items-center gap-1"><Calendar size={11} /> {selectedPost.publishedAt}</span>
                  <span className="flex items-center gap-1"><Clock size={11} /> {selectedPost.readTime}</span>
                </div>

                {/* Prose content using tailwind formatting helpers explicitly */}
                <div className="prose prose-sm max-w-none text-gray-800 font-sans leading-relaxed text-xs sm:text-sm font-semibold space-y-4">
                  {selectedPost.content.split("\n\n").map((para, pIdx) => {
                    if (para.startsWith("### ")) {
                      return (
                        <h4 key={pIdx} className="font-display font-black text-sm uppercase tracking-tight text-[#141414] mt-6 mb-2">
                          {para.replace("### ", "")}
                        </h4>
                      );
                    }
                    if (para.startsWith("1. ") || para.startsWith("- ")) {
                      return (
                        <ul key={pIdx} className="list-disc pl-5 space-y-1.5 my-4">
                          {para.split("\n").map((li, lIdx) => (
                            <li key={lIdx} className="text-gray-700">
                              {li.replace(/^[-\d.]\s+/, "")}
                            </li>
                          ))}
                        </ul>
                      );
                    }
                    return (
                      <p key={pIdx} className="text-gray-700 whitespace-pre-line">
                        {para}
                      </p>
                    );
                  })}
                </div>

                {/* Tags array list */}
                <div className="mt-8 pt-6 border-t border-white/50 flex flex-wrap gap-2">
                  {selectedPost.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="bg-white/55 border border-white/50 text-[#141414] font-mono text-[9px] uppercase tracking-widest px-3 py-1.5 rounded-xl">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Close controls footer */}
              <div className="px-8 py-5 border-t border-white/40 bg-white/35 flex justify-end">
                <button
                  onClick={() => setSelectedPost(null)}
                  className="px-6 py-3 text-xs font-bold text-gray-750 bg-white/50 hover:bg-white rounded-2xl border border-white/50 transition-colors uppercase tracking-widest cursor-pointer"
                >
                  Close Insight
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
