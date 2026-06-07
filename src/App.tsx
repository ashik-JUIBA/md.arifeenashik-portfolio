/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { ArrowUp, Sparkles, Star } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import Faq from "./components/Faq";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import ResumeModal from "./components/ResumeModal";
import AdminPanel from "./components/AdminPanel";

import { PORTFOLIO_PROJECTS } from "./data";
import { Project } from "./types";

export default function App() {
  const [isCVModalOpen, setIsCVModalOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeTab, setActiveTab] = useState("home");

  // Load custom projects from localStorage if available, or default to static templates
  const [projects, setProjects] = useState<Project[]>(() => {
    const saved = localStorage.getItem("ashik_portfolio_projects");
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error("Error loading portfolio projects", e);
      }
    }
    return PORTFOLIO_PROJECTS;
  });

  const handleAddProject = (newProject: Project) => {
    const updated = [newProject, ...projects];
    setProjects(updated);
    localStorage.setItem("ashik_portfolio_projects", JSON.stringify(updated));
  };

  const handleDeleteProject = (id: string) => {
    const updated = projects.filter(p => p.id !== id);
    setProjects(updated);
    localStorage.setItem("ashik_portfolio_projects", JSON.stringify(updated));
  };

  const handleResetDefaults = () => {
    setProjects(PORTFOLIO_PROJECTS);
    localStorage.removeItem("ashik_portfolio_projects");
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.toLowerCase().replace("#", "") || "home";
      setActiveTab(hash);
      
      // Force smooth view entry to top focal range
      window.scrollTo({ top: 0, behavior: "instant" });
    };
    
    window.addEventListener("hashchange", handleHash);
    handleHash(); // Set initial hash state

    return () => window.removeEventListener("hashchange", handleHash);
  }, []);

  // Guarantee elegant offset focus if selecting about on the front-page
  useEffect(() => {
    if (activeTab === "about") {
      setTimeout(() => {
        const aboutEl = document.getElementById("about");
        if (aboutEl) {
          aboutEl.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 150);
    }
  }, [activeTab]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const isFrontPage = activeTab === "home" || activeTab === "about";

  return (
    <div className="bg-[#E9EDF2]/30 text-gray-900 min-h-screen font-sans selection:bg-indigo-600 selection:text-white">
      
      {/* Premium Status Bar (Anti-Slop, Pure Design rhythm line) */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 h-1.5 w-full fixed top-0 left-0 right-0 z-50 pointer-events-none" />

      {/* Navigation Suite */}
      <Navbar activeTab={activeTab} />

      {/* Core Panels Grid */}
      <main className="relative min-h-[80vh]">
        <AnimatePresence mode="wait">
          {isFrontPage ? (
            <motion.div
              key="front-page"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              {/* HERO BLOCK */}
              <Hero onDownloadCV={() => setIsCVModalOpen(true)} />

              {/* ABOUT & METRICS */}
              <About onDownloadCV={() => setIsCVModalOpen(true)} />
            </motion.div>
          ) : (
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, scale: 0.98, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: -15 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="pt-24 sm:pt-28 pb-12"
            >
              {activeTab === "services" && <Services />}
              {activeTab === "portfolio" && <Portfolio projects={projects} />}
              {activeTab === "experience" && <Experience />}
              {activeTab === "admin" && (
                <AdminPanel 
                  projects={projects} 
                  onAddProject={handleAddProject} 
                  onDeleteProject={handleDeleteProject} 
                  onResetDefaults={handleResetDefaults} 
                />
              )}
              {activeTab === "skills" && (
                <div className="flex flex-col gap-12">
                  <Skills />
                  <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
                    <div className="border-t-2 border-[#6366F1]/10" />
                  </div>
                  <Certifications />
                </div>
              )}
              {activeTab === "faq" && <Faq />}
              {activeTab === "blog" && <Blog />}
              {activeTab === "contact" && <Contact />}
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Scrolling indicators/back-to-top */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-40 p-3 bg-gray-900 hover:bg-gray-800 text-white rounded-xl shadow-lg hover:shadow-indigo-500/20 active:scale-95 transition-all text-xs border border-gray-800 flex items-center justify-center cursor-pointer"
            title="Scroll To Top"
            aria-label="Scroll To Top"
          >
            <ArrowUp size={16} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Interactive CV Resume Overlay modal */}
      <AnimatePresence>
        {isCVModalOpen && (
          <ResumeModal
            isOpen={isCVModalOpen}
            onClose={() => setIsCVModalOpen(false)}
          />
        )}
      </AnimatePresence>

    </div>
  );
}

