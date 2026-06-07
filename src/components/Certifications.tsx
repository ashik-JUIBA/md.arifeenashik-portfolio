/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Award, CheckCircle, Calendar, Sparkles } from "lucide-react";
import { CERTIFICATIONS } from "../data";

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="py-20 bg-white border-b border-gray-100"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Title row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="max-w-md">
            <p className="text-xs font-mono font-bold uppercase tracking-widest text-indigo-600 mb-1">
              [ Validation ]
            </p>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-gray-900 tracking-tight">
              CERTIFICATIONS
            </h2>
          </div>
          <p className="text-xs font-semibold text-gray-400 font-mono flex items-center gap-1">
            <CheckCircle size={14} className="text-indigo-600" /> ACCREDITED PROFESSIONAL PATHS
          </p>
        </div>

        {/* Certificate Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CERTIFICATIONS.map((cert) => (
            <div
              key={cert.id}
              className="bg-[#E9EDF2]/40 rounded-[2rem] border border-gray-200/80 p-6 sm:p-8 flex gap-6 items-start hover:shadow-lg transition-shadow"
            >
              <div className="p-4 bg-white shadow-sm border border-gray-200/50 rounded-2xl text-indigo-600 shrink-0">
                <Award size={28} />
              </div>

              <div className="flex-1 flex flex-col justify-between h-full">
                <div>
                  <h3 className="font-sans font-extrabold text-lg text-gray-900 leading-snug tracking-tight mb-2">
                    {cert.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-2 text-xs font-mono font-bold text-gray-500 uppercase">
                    <span>{cert.issuer}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1"><Calendar size={12} /> Class of {cert.date}</span>
                  </div>
                </div>

                <div className="mt-4 flex items-center gap-1 text-[10px] text-indigo-600 font-mono font-bold bg-indigo-50/60 border border-indigo-100/50 rounded-lg px-2.5 py-1 w-fit">
                  <Sparkles size={10} /> Verified ID Verified Credentials
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
