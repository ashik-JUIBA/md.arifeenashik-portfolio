/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { X, Printer, Copy, Check, CheckCircle2, Award } from "lucide-react";
import { useState } from "react";
import { motion } from "motion/react";
import { PERSONAL_INFO, EDUCATION_DATA, EXPERIENCE_DATA, LEADERSHIP_DATA, VOLUNTARY_EXPERIENCE_DATA, ACHIEVEMENTS_DATA } from "../data";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopyText = () => {
    const rawResumeText = `
MD. ARIFEEN ASHIK
Address: ${PERSONAL_INFO.contact.address}
Phone: ${PERSONAL_INFO.contact.phone}
Email: ${PERSONAL_INFO.contact.email}
LinkedIn: ${PERSONAL_INFO.contact.linkedin}

-- ABOUT ME --
${PERSONAL_INFO.detailedIntro}

-- EDUCATION --
${EDUCATION_DATA.map(edu => `${edu.degree}\n${edu.institution} (${edu.duration}) | ${edu.gpa}`).join("\n\n")}

-- WORK EXPERIENCE --
${EXPERIENCE_DATA.map(job => `${job.role} at ${job.company} (${job.duration})\n${job.description.map(d => `• ${d}`).join("\n")}`).join("\n\n")}

-- VOLUNTARY EXPERIENCE --
${VOLUNTARY_EXPERIENCE_DATA.map(vol => `${vol.role} - ${vol.organization} (${vol.duration})\n${vol.bullets.map(b => `• ${b}`).join("\n")}`).join("\n\n")}

-- CLUB INVOLVEMENT --
${LEADERSHIP_DATA.map(club => `• ${club.club} [${club.role}]`).join("\n")}

-- SKILLS AND TOOLS --
• MS Office
• Teamwork and Communication
• Canva Designing
• Event Logistics
• CapCut- Editing
• Content Writing

-- ACHIEVEMENTS --
${ACHIEVEMENTS_DATA.map(ach => `• ${ach.title} (${ach.subtitle})`).join("\n")}

-- ADDITIONAL INFORMATION --
• Language: Bangla, English, Hindi, Spanish (learning)
• Courses: Digital Marketing - UY Lab (2025), Content Creation CapCut - ICT Bangla Academy (2025)
    `;
    
    navigator.clipboard.writeText(rawResumeText);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4">
      {/* Background Dim Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm print:hidden"
      />

      {/* Main Dialog Modal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        transition={{ duration: 0.3 }}
        className="relative z-10 w-full max-w-4xl bg-white rounded-[2rem] border border-gray-200 shadow-2xl flex flex-col max-h-[95vh] sm:max-h-[92vh] print:max-h-none print:rounded-none print:shadow-none print:border-none print:w-full"
      >
        
        {/* Actions bar */}
        <div className="flex items-center justify-between px-6 sm:px-8 py-4 border-b border-gray-150 bg-gray-50/80 rounded-t-[2rem] print:hidden">
          <div className="flex items-center gap-2">
            <span className="p-1.5 bg-blue-100 text-blue-600 rounded-lg">
              <Award size={16} />
            </span>
            <span className="text-xs font-bold font-mono tracking-wider uppercase text-gray-500">
              Interactive Executive CV
            </span>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              onClick={handleCopyText}
              className="px-3 py-1.5 bg-white border border-gray-200 rounded-xl text-xs font-semibold text-gray-700 hover:bg-gray-50 active:scale-95 transition-all flex items-center gap-1.5 shadow-sm cursor-pointer"
            >
              {copied ? (
                <>
                  <Check size={13} className="text-emerald-600" />
                  <span className="text-emerald-700 font-bold">Copied Plain Text!</span>
                </>
              ) : (
                <>
                  <Copy size={13} />
                  <span>Copy Plain Text</span>
                </>
              )}
            </button>

            <button
              onClick={handlePrint}
              className="px-4 py-1.5 bg-[#2563EB] text-white rounded-xl text-xs font-bold hover:bg-blue-700 active:scale-95 transition-all flex items-center gap-1.5 shadow-md shadow-blue-500/10 cursor-pointer"
            >
              <Printer size={13} />
              <span>Print / Download PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 hover:bg-gray-200/60 rounded-full text-gray-400 hover:text-gray-700 transition-all cursor-pointer ml-1"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Outer body wrapper supporting native scroll and browser print override */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-10 bg-white print:p-0 print:overflow-visible">
          
          <div 
            id="resume-print-area" 
            className="flex flex-col gap-6 text-left text-gray-900 leading-relaxed font-sans max-w-3xl mx-auto p-4 sm:p-8 border border-gray-150 rounded-2xl shadow-sm bg-white print:p-0 print:border-none print:shadow-none"
            style={{ fontFamily: '"Inter", sans-serif' }}
          >
            {/* Topmost thick blue line exactly like the screenshot */}
            <div className="w-full h-1 bg-[#2563EB] mb-1" />

            {/* CV Name */}
            <div className="flex justify-between items-start gap-4">
              <div className="flex-1">
                <h1 className="font-sans font-black text-3xl sm:text-4xl text-[#141414] tracking-tight uppercase">
                  {PERSONAL_INFO.fullName}
                </h1>
              </div>
            </div>

            {/* Split layout: Info block & Photo block */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start border-t border-b border-[#2563EB] py-4 my-1">
              
              {/* Contact info */}
              <div className="md:col-span-8 flex flex-col gap-2.5 text-xs sm:text-sm text-gray-800">
                <div className="flex items-start gap-2.5">
                  <span className="font-extrabold text-[#2563EB] uppercase tracking-wider w-20 shrink-0 font-mono text-[11px]">Address:</span>
                  <span className="text-gray-700 font-semibold">{PERSONAL_INFO.contact.address}</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="font-extrabold text-[#2563EB] uppercase tracking-wider w-20 shrink-0 font-mono text-[11px]">Phone:</span>
                  <span className="text-gray-700 font-semibold font-mono">{PERSONAL_INFO.contact.phone}</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="font-extrabold text-[#2563EB] uppercase tracking-wider w-20 shrink-0 font-mono text-[11px]">Email:</span>
                  <a href={`mailto:${PERSONAL_INFO.contact.email}`} className="text-gray-700 font-semibold hover:text-[#2563EB] transition-colors">{PERSONAL_INFO.contact.email}</a>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="font-extrabold text-[#2563EB] uppercase tracking-wider w-20 shrink-0 font-mono text-[11px]">Linked In:</span>
                  <a href={PERSONAL_INFO.contact.linkedin} target="_blank" rel="noreferrer" className="text-gray-700 font-semibold hover:text-[#2563EB] transition-colors">
                    www.linkedin.com/in/ashik-arifeen-1a04bb331
                  </a>
                </div>
              </div>

              {/* Photo component precisely rendered inside a frame like the printed copy */}
              <div className="md:col-span-4 flex justify-end">
                <div className="relative w-28 h-32 border-2 border-gray-200 p-1 bg-white shadow-sm rounded-md overflow-hidden shrink-0">
                  <img
                    src={PERSONAL_INFO.profileImage}
                    alt={PERSONAL_INFO.fullName}
                    className="w-full h-full object-cover object-center"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>

            </div>

            {/* ABOUT ME SECTION */}
            <div>
              <h2 className="text-sm font-black uppercase tracking-wider text-[#2563EB] border-b border-[#2563EB] pb-1 mb-2.5 font-sans">
                ABOUT ME
              </h2>
              <p className="text-xs sm:text-[13px] text-gray-700 leading-relaxed font-semibold">
                {PERSONAL_INFO.detailedIntro}
              </p>
            </div>

            {/* EDUCATION SECTION */}
            <div>
              <h2 className="text-sm font-black uppercase tracking-wider text-[#2563EB] border-b border-[#2563EB] pb-1 mb-3.5 font-sans">
                EDUCATION
              </h2>
              <div className="flex flex-col gap-4">
                {EDUCATION_DATA.map((edu) => (
                  <div key={edu.id} className="flex flex-col gap-1">
                    <div className="flex justify-between items-start gap-4">
                      <h3 className="text-xs sm:text-sm font-extrabold text-[#111111]">
                        {edu.degree}
                      </h3>
                      <span className="text-[11px] font-bold text-gray-500 uppercase font-mono shrink-0">{edu.duration}</span>
                    </div>
                    <p className="text-xs font-bold text-[#141414] italic">
                      {edu.institution}
                    </p>
                    <ul className="list-disc pl-5 mt-1">
                      {edu.details.map((point, idx) => (
                        <li key={idx} className="text-xs text-gray-600 font-semibold">
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* WORK EXPERIENCE SECTION */}
            <div>
              <h2 className="text-sm font-black uppercase tracking-wider text-[#2563EB] border-b border-[#2563EB] pb-1 mb-3.5 font-sans">
                WORK EXPERIENCE
              </h2>
              <div className="flex flex-col gap-4">
                {EXPERIENCE_DATA.map((job) => (
                  <div key={job.id} className="flex flex-col gap-1">
                    <div className="flex justify-between items-start gap-4">
                      <h3 className="text-xs sm:text-sm font-extrabold text-[#111111]">
                        {job.role}, <span className="font-bold text-gray-700">{job.company}</span>
                      </h3>
                      <span className="text-[11px] font-bold text-gray-500 uppercase font-mono shrink-0">{job.duration}</span>
                    </div>
                    <ul className="list-disc pl-5 mt-1.5 flex flex-col gap-1.5">
                      {job.description.map((point, idx) => (
                        <li key={idx} className="text-xs text-gray-600 font-semibold leading-relaxed">
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* VOLUNTARY EXPERIENCE */}
            <div>
              <h2 className="text-sm font-black uppercase tracking-wider text-[#2563EB] border-b border-[#2563EB] pb-1 mb-3.5 font-sans">
                VOLUNTARY EXPERIENCE
              </h2>
              <div className="flex flex-col gap-4">
                {VOLUNTARY_EXPERIENCE_DATA.map((vol) => (
                  <div key={vol.id} className="flex flex-col gap-1">
                    <div className="flex justify-between items-start gap-4">
                      <h3 className="text-xs sm:text-sm font-extrabold text-[#111111]">
                        {vol.role}, <span className="font-bold text-gray-700">{vol.organization}</span>
                      </h3>
                      <span className="text-[11px] font-bold text-gray-500 uppercase font-mono shrink-0">{vol.duration}</span>
                    </div>
                    <ul className="list-disc pl-5 mt-1.5 flex flex-col gap-1.5">
                      {vol.bullets.map((bullet, idx) => (
                        <li key={idx} className="text-xs text-gray-600 font-semibold leading-relaxed">
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* CLUB INVOLVEMENT */}
            <div>
              <h2 className="text-sm font-black uppercase tracking-wider text-[#2563EB] border-b border-[#2563EB] pb-1 mb-2.5 font-sans">
                CLUB INVOLVEMENT
              </h2>
              <div className="flex flex-col gap-2 text-xs text-gray-800 font-bold">
                {LEADERSHIP_DATA.map((club) => (
                  <div key={club.id} className="flex items-center gap-1.5 leading-snug">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] shrink-0"></span>
                    <span>
                      {club.club} <span className="text-gray-500 font-semibold">[{club.role}]</span>
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* SKILLS AND TOOLS */}
            <div>
              <h2 className="text-sm font-black uppercase tracking-wider text-[#2563EB] border-b border-[#2563EB] pb-1 mb-2.5 font-sans">
                SKILLS AND TOOLS
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-y-2 gap-x-4 text-xs font-semibold text-gray-700">
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] shrink-0"></span>
                  <span>MS Office</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] shrink-0"></span>
                  <span>Canva Designing</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] shrink-0"></span>
                  <span>CapCut- Editing</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] shrink-0"></span>
                  <span>Teamwork and Communication</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] shrink-0"></span>
                  <span>Event Logistics</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-700 shrink-0"></span>
                  <span>Content Writing</span>
                </div>
              </div>
            </div>

            {/* ACHIEVEMENTS */}
            <div>
              <h2 className="text-sm font-black uppercase tracking-wider text-[#2563EB] border-b border-[#2563EB] pb-1 mb-2.5 font-sans">
                ACHIEVEMENTS
              </h2>
              <ul className="list-disc pl-5 flex flex-col gap-1 text-xs text-gray-700 font-semibold leading-relaxed">
                <li>
                  <strong className="text-gray-900 font-extrabold">2nd Round- OVER THE WALL</strong> (Marico Flagship Business Competition)
                </li>
                <li>
                  <strong className="text-gray-900 font-extrabold">CHAMPION - Fastwind 5.0</strong> | Badminton Men's Single - IBA-JU Sports Club
                </li>
                <li>
                  <strong className="text-gray-900 font-extrabold">CHAMPION - Fastwind 7.0</strong> | Badminton Men's Doubles - IBA-JU Sports Club
                </li>
              </ul>
            </div>

            {/* ADDITIONAL INFORMATION */}
            <div>
              <h2 className="text-sm font-black uppercase tracking-wider text-[#2563EB] border-b border-[#2563EB] pb-1 mb-2.5 font-sans">
                ADDITIONAL INFORMATION
              </h2>
              <ul className="list-disc pl-5 flex flex-col gap-1.5 text-xs text-gray-700 font-semibold leading-relaxed">
                <li>
                  <span className="font-extrabold text-[#2563EB] font-mono mr-1">Language:</span> Bangla, English, Hindi, Spanish (learning)
                </li>
                <li>
                  <span className="font-extrabold text-[#2563EB] font-mono mr-1">Courses:</span> Digital Marketing - UY Lab (2025), Content Creation CapCut - ICT Bangla Academy (2025)
                </li>
              </ul>
            </div>

          </div>

        </div>

        {/* print area helper instructions */}
        <div className="px-6 py-4 bg-gray-50 text-center font-mono text-[10px] text-gray-400 border-t border-gray-150 rounded-b-[2rem] print:hidden">
          * Hint: Save as PDF in your print dialog to download this high-fidelity CV as an elegant document.
        </div>

      </motion.div>
    </div>
  );
}
