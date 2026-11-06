import { portfolioData } from "@/data/portfolioData";
import { Award, GraduationCap, Star, BookOpen, Check } from "lucide-react";

export default function AwardsEducation() {
  const { awards, education } = portfolioData;

  return (
    <section id="awards" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Awards & Recognition Column */}
          <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-b from-amber-500/10 via-slate-900/90 to-slate-950/90 border border-amber-500/30 shadow-2xl relative overflow-hidden flex flex-col justify-between">
            {/* Ambient amber glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 blur-[80px] rounded-full pointer-events-none -z-10" />

            <div>
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-500/20 border border-amber-500/30 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-6">
                <Star className="w-3.5 h-3.5 fill-amber-300" />
                <span>Honors &amp; Recognition</span>
              </div>

              {awards.map((award, idx) => (
                <div key={idx} className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="p-3.5 rounded-2xl bg-amber-500/20 text-amber-400 border border-amber-500/30 shadow-lg shadow-amber-500/10">
                      <Award className="w-8 h-8" />
                    </div>
                    <div>
                      <span className="text-xs font-mono text-amber-400 uppercase tracking-widest">
                        {award.organization} · {award.year}
                      </span>
                      <h3 className="text-2xl font-extrabold text-white mt-1">
                        {award.title}
                      </h3>
                      <div className="mt-2 inline-block px-3 py-1 rounded-full bg-amber-500/10 text-amber-300 text-xs font-medium border border-amber-500/20">
                        {award.badge}
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-slate-300 leading-relaxed pt-2">
                    {award.description}
                  </p>

                  <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 text-xs text-slate-400 space-y-1.5 font-mono">
                    <div className="text-amber-400/90">// Recognition Criteria</div>
                    <div>• Exemplary ownership in clinical microservice releases</div>
                    <div>• 40% Next.js page speed optimization &amp; SSE data streams</div>
                    <div>• Standardizing state management with Redux Toolkit</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-6 mt-6 border-t border-slate-800 text-xs text-slate-400 flex items-center justify-between">
              <span>Verified Industry Accolade</span>
              <span className="text-amber-400 font-mono">Encipher Health Inc</span>
            </div>
          </div>

          {/* Education Column */}
          <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-b from-indigo-500/10 via-slate-900/90 to-slate-950/90 border border-indigo-500/30 shadow-2xl relative overflow-hidden flex flex-col justify-between">
            {/* Ambient blue/indigo glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 blur-[80px] rounded-full pointer-events-none -z-10" />

            <div>
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-indigo-500/20 border border-indigo-500/30 text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-6">
                <BookOpen className="w-3.5 h-3.5" />
                <span>Academic Foundation</span>
              </div>

              <div className="flex items-start gap-4 mb-4">
                <div className="p-3.5 rounded-2xl bg-indigo-500/20 text-indigo-400 border border-indigo-500/30 shadow-lg shadow-indigo-500/10">
                  <GraduationCap className="w-8 h-8" />
                </div>
                <div>
                  <span className="text-xs font-mono text-indigo-400 uppercase tracking-widest">
                    {education.period}
                  </span>
                  <h3 className="text-2xl font-extrabold text-white mt-1">
                    {education.degree}
                  </h3>
                  <p className="text-sm font-medium text-slate-300 mt-1">
                    {education.institution}
                  </p>
                </div>
              </div>

              <div className="mt-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-indigo-950/60 border border-indigo-500/30 text-indigo-300 text-sm font-mono font-bold">
                <span>Academic Standing:</span>
                <span className="text-white">{education.score}</span>
              </div>

              <div className="mt-6 space-y-3">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
                  Core Foundations &amp; Principles
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                  {[
                    "Data Structures & Algorithms",
                    "Object-Oriented Design (OOP)",
                    "Database Systems (DBMS)",
                    "Microservices Architecture",
                    "Computer Networks & Protocols",
                    "Cloud Computing & Storage",
                  ].map((topic) => (
                    <div
                      key={topic}
                      className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800/80 flex items-center gap-2"
                    >
                      <Check className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                      <span>{topic}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-800 text-xs text-slate-400 flex items-center justify-between">
              <span>Engineering Degree</span>
              <span className="text-indigo-400 font-mono">Anna University Affiliated</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

