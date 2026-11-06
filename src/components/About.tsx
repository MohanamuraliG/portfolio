import { portfolioData } from "@/data/portfolioData";
import {
  Activity,
  Layers,
  ShieldCheck,
  Server,
  Award,
  GraduationCap,
  Sparkles,
  Check,
} from "lucide-react";

export default function About() {
  const { personal, education } = portfolioData;

  const coreStrengths = [
    {
      title: "Real-Time Streaming Pipelines",
      desc: "Built Server-Sent Events (SSE) data pipelines for live clinical updates and background file processing states, slashing server overhead by 35%.",
      icon: <Activity className="w-5 h-5 text-cyan-400" />,
      color: "border-cyan-500/30",
    },
    {
      title: "Frontend Performance & Next.js",
      desc: "Architected strategic code-splitting and dynamic lazy loading in Next.js, cutting initial page load times by 40% and optimizing Time-to-Interactive (TTI).",
      icon: <Layers className="w-5 h-5 text-blue-400" />,
      color: "border-blue-500/30",
    },
    {
      title: "Backend Microservices & Java",
      desc: "Engineered secure REST APIs in Java and Spring Boot for high-throughput clinical dashboards, minimizing data retrieval latency.",
      icon: <Server className="w-5 h-5 text-emerald-400" />,
      color: "border-emerald-500/30",
    },
    {
      title: "Enterprise RBAC & Compliance",
      desc: "Programmed role-based access control across multi-tenant applications, dynamically rendering ECharts dashboards and securing Azure Blob storage.",
      icon: <ShieldCheck className="w-5 h-5 text-purple-400" />,
      color: "border-purple-500/30",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Engineering Profile</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Architecting Robust &amp; High-Throughput Web Applications
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl text-base sm:text-lg">
            A developer who bridges the gap between scalable enterprise backends and fluid, high-performance user interfaces.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive Developer Profile & Code Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-b from-slate-900 to-[#0a0d14] border border-slate-800 shadow-xl relative overflow-hidden">
              {/* Card Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                  <span className="text-xs text-slate-500 font-mono ml-2">mohanamurali.profile.ts</span>
                </div>
                <span className="text-xs text-cyan-400 font-mono">v1.2.0</span>
              </div>

              {/* Bio Content */}
              <div className="mt-5 space-y-4 text-sm text-slate-300 leading-relaxed">
                <p>
                  {personal.bio}
                </p>
                <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800/80 font-mono text-xs space-y-1.5">
                  <div className="text-slate-400">// Current Core Stack</div>
                  <div>
                    <span className="text-purple-400">const</span>{" "}
                    <span className="text-cyan-300">stack</span> = &#123;
                  </div>
                  <div className="pl-4 text-slate-300">
                    frontend: <span className="text-emerald-300">&quot;React, Next.js, TypeScript&quot;</span>,
                  </div>
                  <div className="pl-4 text-slate-300">
                    backend: <span className="text-emerald-300">&quot;Java 17, Spring Boot, REST&quot;</span>,
                  </div>
                  <div className="pl-4 text-slate-300">
                    cloudDB: <span className="text-emerald-300">&quot;MongoDB, PostgreSQL, Azure&quot;</span>,
                  </div>
                  <div className="pl-4 text-slate-300">
                    streaming: <span className="text-emerald-300">&quot;Server-Sent Events (SSE)&quot;</span>
                  </div>
                  <div>&#125;;</div>
                </div>
              </div>

              {/* Quick Specs */}
              <div className="mt-6 pt-5 border-t border-slate-800 grid grid-cols-2 gap-4 text-xs">
                <div>
                  <span className="text-slate-500 block">Location</span>
                  <span className="text-slate-200 font-semibold">{personal.location}</span>
                </div>
                <div>
                  <span className="text-slate-500 block">Experience</span>
                  <span className="text-slate-200 font-semibold">{personal.yearsOfExperience}</span>
                </div>
                <div>
                  <span className="text-slate-500 block">Company</span>
                  <span className="text-cyan-400 font-semibold">Encipher Health Inc</span>
                </div>
                <div>
                  <span className="text-slate-500 block">Status</span>
                  <span className="text-emerald-400 font-semibold">Ready for New Challenges</span>
                </div>
              </div>
            </div>

            {/* Academic Credential Card */}
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 flex items-start gap-4">
              <div className="p-3 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 shrink-0">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-mono text-indigo-400 uppercase tracking-wider">{education.period}</span>
                <h4 className="text-sm font-bold text-white mt-0.5">{education.degree}</h4>
                <p className="text-xs text-slate-400 mt-0.5">{education.institution}</p>
                <div className="mt-2 inline-block px-2.5 py-0.5 rounded-full bg-slate-800 text-cyan-300 text-xs font-mono">
                  {education.score}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Core Competency Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {coreStrengths.map((item) => (
              <div
                key={item.title}
                className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800/80 hover:border-slate-700 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group"
              >
                <div className="p-3 rounded-xl bg-slate-800/80 inline-block mb-4 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-400 mt-2 leading-relaxed">
                  {item.desc}
                </p>
                <div className="mt-4 flex items-center gap-1.5 text-xs text-cyan-400/90 font-medium">
                  <Check className="w-4 h-4" />
                  <span>Production Tested</span>
                </div>
              </div>
            ))}

            {/* Award highlight mini card */}
            <div className="sm:col-span-2 p-6 rounded-2xl bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-transparent border border-amber-500/20 flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-3.5">
                <div className="p-3 rounded-xl bg-amber-500/20 text-amber-400">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">Impactful Youngster Award (2025)</h4>
                  <p className="text-xs text-slate-400">Encipher Health Inc · For high technical ownership &amp; execution</p>
                </div>
              </div>
              <a
                href="#awards"
                className="text-xs font-semibold text-amber-400 hover:text-amber-300 underline underline-offset-4"
              >
                Read Award Details →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

