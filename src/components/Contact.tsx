/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, SyntheticEvent } from "react";
import { Mail, Phone, MapPin, Linkedin, Facebook, Instagram, Send, CheckCircle, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { PERSONAL_INFO } from "../data";

// Import branding post as background element for the card left
import brandingPost from "../assets/images/branding_mockup_1780669436877.png";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessToast, setShowSuccessToast] = useState(false);

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccessToast(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setShowSuccessToast(false), 5000);
    }, 1500);
  };

  return (
    <section
      id="contact"
      className="py-24 bg-[#E9EDF2] relative overflow-hidden"
    >
      {/* Background active glow bubble */}
      <div className="absolute top-1/2 left-[10%] w-[420px] h-[420px] bg-indigo-300/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Main Title Row & Large Primary Button */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-16 gap-8">
          <div className="max-w-xl">
            <p className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-[#6366F1] mb-2">
              [ Let's Synchronize ]
            </p>
            <h2 className="font-display font-black text-4xl sm:text-5xl text-[#141414] tracking-tighter uppercase leading-none">
              Get In <span className="text-outline">Touch</span>
            </h2>
            <p className="text-xs sm:text-sm font-semibold text-gray-700 mt-3 font-sans leading-relaxed">
              Ready to push your branding campaigns, create slide decks, or onboard an operations lead? Let’s initiate a project together.
            </p>
          </div>

          {/* Large prominent 'Contact me' button requested by user */}
          <div className="shrink-0">
            <a
              href={`mailto:${PERSONAL_INFO.contact.email}?subject=Direct Collaboration Proposal`}
              className="inline-flex items-center gap-3 px-10 py-6 bg-[#6366F1] hover:bg-[#141414] text-white text-xs font-mono font-black uppercase tracking-[0.2em] rounded-3xl transition-all hover:scale-[1.03] active:scale-95 shadow-lg hover:shadow-indigo-500/10 cursor-pointer w-full sm:w-auto justify-center group"
            >
              <span>CONNECT WITH ASHIK NOW</span>
              <Sparkles size={14} className="text-amber-300 animate-pulse group-hover:rotate-12 transition-transform" />
            </a>
          </div>
        </div>

        {/* Contact UI Card Container */}
        <div className="bg-white/45 backdrop-blur-xl border border-white/60 rounded-[3rem] overflow-hidden shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-0 mb-16">
          
          {/* Card Left: Premium Graphic Image Block (5 columns) */}
          <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-full">
            <img
              src={brandingPost}
              alt="Md. Arifeen Ashik Branding graphic"
              className="absolute inset-0 w-full h-full object-cover brightness-95"
              referrerPolicy="no-referrer"
            />
            {/* Dark Gradient Overlay to ensure typography legibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/40 to-transparent" />
            
            {/* Visual labels on graphic left page */}
            <div className="absolute bottom-10 left-10 right-10 z-10 text-white">
              <span className="text-[9px] uppercase font-mono tracking-widest text-amber-400 font-extrabold bg-white/10 px-2.5 py-1 rounded-md backdrop-blur-sm border border-white/10">
                Strategic Alliance
              </span>
              <h3 className="text-2xl sm:text-3xl font-display font-black tracking-tight leading-tight mt-3 mb-4 uppercase">
                LET'S BUILD YOUR BRAND.
              </h3>
              <p className="text-xs text-gray-300 font-semibold font-sans leading-relaxed">
                Connect directly for outbound sales consultations, professional slide architectures, or long-term multinational corporate internships.
              </p>
            </div>
          </div>

          {/* Card Right: Elegant Clean Form Interface (7 columns) */}
          <div className="lg:col-span-7 bg-white/35 backdrop-blur-md p-8 sm:p-12 md:p-16 flex flex-col justify-center relative">
            <h4 className="font-display font-black text-xl sm:text-2xl text-[#141414] tracking-tight mb-8">
              LET'S TALK
            </h4>

            {/* Custom toast feedback */}
            <AnimatePresence>
              {showSuccessToast && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mb-6 p-4 rounded-2xl bg-white/70 border border-white/50 text-[#141414] flex gap-3 items-start shadow-sm"
                >
                  <CheckCircle size={16} className="text-[#6366F1] shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-xs font-extrabold uppercase tracking-wide">Successfully Dispatched!</h5>
                    <p className="text-xs text-gray-700 mt-1 leading-relaxed font-semibold">
                      Your business query is in. Md. Arifeen Ashik will response back to you at <strong>{PERSONAL_INFO.contact.email}</strong> shortly.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              
              {/* Dual inputs: Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-[9px] font-mono font-black text-gray-500 uppercase tracking-widest">
                    Full Name*
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your name"
                    className="w-full bg-white/45 backdrop-blur-sm border border-white/55 rounded-2xl px-4 py-3.5 text-xs font-semibold text-gray-850 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#6366F1] focus:border-[#6366F1] transition-all font-sans"
                  />
                </div>
                
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-[9px] font-mono font-black text-gray-500 uppercase tracking-widest">
                    Email Address*
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="Enter email address"
                    className="w-full bg-white/45 backdrop-blur-sm border border-white/55 rounded-2xl px-4 py-3.5 text-xs font-semibold text-gray-850 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#6366F1] focus:border-[#6366F1] transition-all font-sans"
                  />
                </div>
              </div>

              {/* Subject Input */}
              <div className="flex flex-col gap-2">
                <label htmlFor="subject" className="text-[9px] font-mono font-black text-gray-500 uppercase tracking-widest">
                  Subject Line
                </label>
                <input
                  id="subject"
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="Enter your message focus"
                  className="w-full bg-white/45 backdrop-blur-sm border border-white/55 rounded-2xl px-4 py-3.5 text-xs font-semibold text-gray-850 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#6366F1] focus:border-[#6366F1] transition-all font-sans"
                />
              </div>

              {/* Message Input */}
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-[9px] font-mono font-black text-gray-500 uppercase tracking-widest">
                  Message*
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about your project, target objectives, or campaign specs..."
                  className="w-full bg-white/45 backdrop-blur-sm border border-white/55 rounded-2xl px-4 py-3.5 text-xs font-semibold text-gray-850 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#6366F1] focus:border-[#6366F1] transition-all font-sans resize-none"
                />
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-2 w-full py-4 px-6 bg-[#141414] border border-white/10 text-white rounded-2xl text-xs font-bold uppercase tracking-widest hover:bg-[#6366F1] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-white/50 border-t-white rounded-full animate-spin"></span>
                    Transmitting...
                  </span>
                ) : (
                  <>
                    Send Message
                    <Send size={12} />
                  </>
                )}
              </button>

            </form>
          </div>

        </div>

        {/* Contact Specs Block in 6 grid bento columns */}
        <div id="contact-specs-grid" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-10 border-t border-white/50">
          
          {/* Physical Address Card */}
          <div className="flex gap-4 items-center p-5 rounded-2xl bg-white/45 border border-white/55 hover:bg-white/60 hover:border-[#6366F1] transition-all">
            <div className="p-3 bg-white/60 border border-white/45 text-[#6366F1] rounded-2xl">
              <MapPin size={18} />
            </div>
            <div>
              <p className="text-[9px] font-mono font-black text-gray-500 uppercase tracking-wider">Address Location</p>
              <p className="text-xs font-extrabold text-[#141414] mt-1 line-clamp-1">{PERSONAL_INFO.contact.address}</p>
            </div>
          </div>

          {/* Phone Card */}
          <div className="flex gap-4 items-center p-5 rounded-2xl bg-white/45 border border-white/55 hover:bg-white/60 hover:border-[#6366F1] transition-all">
            <div className="p-3 bg-white/60 border border-white/45 text-[#6366F1] rounded-2xl">
              <Phone size={18} />
            </div>
            <div>
              <p className="text-[9px] font-mono font-black text-gray-500 uppercase tracking-wider">Call Directly</p>
              <a href={`tel:${PERSONAL_INFO.contact.phone}`} className="text-xs font-extrabold text-[#131313] mt-1 hover:text-[#6366F1] block tracking-wide hover:underline">
                {PERSONAL_INFO.contact.phone}
              </a>
            </div>
          </div>

          {/* Email Card */}
          <div className="flex gap-4 items-center p-5 rounded-2xl bg-white/45 border border-white/55 hover:bg-white/60 hover:border-[#6366F1] transition-all">
            <div className="p-3 bg-white/60 border border-white/45 text-[#6366F1] rounded-2xl">
              <Mail size={18} />
            </div>
            <div>
              <p className="text-[9px] font-mono font-black text-gray-500 uppercase tracking-wider">Business Email</p>
              <a href={`mailto:${PERSONAL_INFO.contact.email}`} className="text-xs font-extrabold text-[#6366F1] mt-1 block hover:underline">
                {PERSONAL_INFO.contact.email}
              </a>
            </div>
          </div>

          {/* LinkedIn Card */}
          <div className="flex gap-4 items-center p-5 rounded-2xl bg-white/45 border border-white/55 hover:bg-white/60 hover:border-[#6366F1] transition-all">
            <div className="p-3 bg-white/60 border border-white/45 text-[#6366F1] rounded-2xl">
              <Linkedin size={18} />
            </div>
            <div>
              <p className="text-[9px] font-mono font-black text-gray-500 uppercase tracking-wider">Professional Hub</p>
              <a href={PERSONAL_INFO.contact.linkedin} target="_blank" rel="noreferrer" className="text-xs font-extrabold text-[#141414] mt-1 block hover:text-[#6366F1] hover:underline">
                Linkedin Connect
              </a>
            </div>
          </div>

          {/* Facebook Card */}
          <div className="flex gap-4 items-center p-5 rounded-2xl bg-white/45 border border-white/55 hover:bg-white/60 hover:border-[#6366F1] transition-all">
            <div className="p-3 bg-white/60 border border-white/45 text-[#6366F1] rounded-2xl">
              <Facebook size={18} />
            </div>
            <div>
              <p className="text-[9px] font-mono font-black text-gray-500 uppercase tracking-wider">Social Network</p>
              <a href={PERSONAL_INFO.contact.facebook} target="_blank" rel="noreferrer" className="text-xs font-extrabold text-[#141414] mt-1 block hover:text-[#6366F1] hover:underline">
                Facebook Profile
              </a>
            </div>
          </div>

          {/* Instagram Card */}
          <div className="flex gap-4 items-center p-5 rounded-2xl bg-white/45 border border-white/55 hover:bg-white/60 hover:border-[#6366F1] transition-all">
            <div className="p-3 bg-white/60 border border-white/45 text-[#6366F1] rounded-2xl">
              <Instagram size={18} />
            </div>
            <div>
              <p className="text-[9px] font-mono font-black text-gray-500 uppercase tracking-wider">Creative Studio</p>
              <a href={PERSONAL_INFO.contact.instagram} target="_blank" rel="noreferrer" className="text-xs font-extrabold text-[#141414] mt-1 block hover:text-[#6366F1] hover:underline">
                Instagram Insights
              </a>
            </div>
          </div>

        </div>

      </div>

      {/* Styled Brand Footer */}
      <footer className="mt-16 bg-[#E9EDF2] border-t border-white/50 pt-12 pb-8">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Logo signature */}
          <div className="flex flex-col items-center md:items-start gap-1">
            <span className="font-display font-black text-lg text-[#141414] uppercase tracking-tighter">
              ashik<span className="text-[#6366F1]">.</span>arifeen
            </span>
            <span className="text-[9px] font-mono text-gray-500 uppercase tracking-widest font-extrabold">
              © {new Date().getFullYear()} Md. Arifeen Ashik • All Rights Reserved
            </span>
          </div>

          {/* Core Footer Link Navigation */}
          <div className="flex flex-wrap justify-center gap-6 text-[10px] font-mono font-black uppercase tracking-widest text-gray-500">
            <a href="#home" className="hover:text-[#6366F1] transition-colors">Home</a>
            <a href="#about" className="hover:text-[#6366F1] transition-colors">About</a>
            <a href="#services" className="hover:text-[#6366F1] transition-colors">Services</a>
            <a href="#portfolio" className="hover:text-[#6366F1] transition-colors">Portfolio</a>
            <a href="#contact" className="hover:text-[#6366F1] transition-colors">Contact</a>
          </div>

          {/* Social icons row */}
          <div className="flex items-center gap-3">
            <a
              href={PERSONAL_INFO.contact.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 bg-white/50 border border-white/50 text-gray-700 hover:text-[#6366F1] hover:bg-white rounded-xl transition-all"
            >
              <Linkedin size={14} />
            </a>
            <a
              href={PERSONAL_INFO.contact.facebook}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 bg-white/50 border border-white/50 text-gray-700 hover:text-[#6366F1] hover:bg-white rounded-xl transition-all"
            >
              <Facebook size={14} />
            </a>
            <a
              href={PERSONAL_INFO.contact.instagram}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 bg-white/50 border border-white/50 text-gray-700 hover:text-[#6366F1] hover:bg-white rounded-xl transition-all"
            >
              <Instagram size={14} />
            </a>
          </div>

        </div>
      </footer>

    </section>
  );
}
