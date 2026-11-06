"use client";

import { portfolioData } from "@/data/portfolioData";
import {
  ArrowRight,
  Download,
  Sparkles,
  MapPin,
  Mail,
  Phone,
  Code2,
  Server,
  Zap,
  TrendingUp,
} from "lucide-react";

export default function Hero() {
  const { personal, stats } = portfolioData;

  const statIcons = [
    <Code2 key="code" className="w-5 h-5 text-cyan-400" />,
    <Zap key="zap" className="w-5 h-5 text-amber-400" />,
    <Server key="server" className="w-5 h-5 text-emerald-400" />,
    <TrendingUp key="trending" className="w-5 h-5 text-purple-400" />,
  ];

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-cyan-500/15 via-blue-600/15 to-purple-600/10 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-500/10 blur-[100px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          {/* Top Status Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 shadow-inner mb-6">
            <Sparkles className="w-4 h-4 text-cyan-400 animate-spin" style={{ animationDuration: "6s" }} />
            <span className="text-xs sm:text-sm font-medium text-slate-300">
              Healthcare Tech &amp; Cloud Systems Engineer
            </span>
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
            <span className="text-xs text-cyan-400 font-mono">Salem, Tamil Nadu</span>
          </div>

          {/* Profile Avatar Badge */}
          <div className="relative mb-6 group">
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl p-1 bg-gradient-to-tr from-cyan-500 via-blue-500 to-indigo-600 shadow-xl shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition-all duration-300 transform group-hover:scale-105">
              <div className="w-full h-full rounded-[22px] bg-slate-950 flex flex-col items-center justify-center border border-slate-800">
                <span className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent font-mono tracking-tighter">
                  &lt;MG/&gt;
                </span>
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest mt-0.5">
                  Full Stack
                </span>
              </div>
            </div>
            {/* Status dot */}
            <div className="absolute -bottom-1 -right-1 px-2.5 py-0.5 rounded-full bg-slate-900 border border-emerald-500/40 text-emerald-400 text-[10px] font-mono flex items-center gap-1 shadow-md">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Active</span>
            </div>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white max-w-4xl leading-[1.12]">
            Engineering{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-500 bg-clip-text text-transparent">
              Scalable
            </span>{" "}
            &amp;{" "}
            <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
              Real-Time
            </span>{" "}
            Web Platforms
          </h1>

          {/* Subtitle / Bio */}
          <p className="mt-6 text-base sm:text-xl text-slate-400 max-w-2xl leading-relaxed">
            Hi, I’m <span className="text-white font-semibold">{personal.name}</span>. I build high-throughput healthcare applications, low-latency microservices with <span className="text-cyan-300">Java &amp; Spring Boot</span>, and responsive dashboards with <span className="text-blue-300">React, Next.js &amp; TypeScript</span>.
          </p>

          {/* Direct Contact Chips */}
          <div className="mt-6 flex flex-wrap justify-center items-center gap-3 text-xs sm:text-sm text-slate-400 font-mono">
            <a
              href={`mailto:${personal.email}`}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 hover:text-cyan-300 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-cyan-400" />
              <span>{personal.email}</span>
            </a>
            <a
              href={`tel:${personal.phone}`}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 hover:text-cyan-300 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>{personal.phone}</span>
            </a>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-purple-400" />
              <span>{personal.location}</span>
            </span>
          </div>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <a
              href="#projects"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-500 hover:from-cyan-300 hover:to-blue-400 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all transform hover:-translate-y-0.5"
            >
              <span>Explore Key Projects</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-slate-200 bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 hover:border-slate-600 transition-all"
            >
              <span>Contact Me</span>
            </a>

            <a
              href="#experience"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-medium text-slate-300 hover:text-cyan-300 transition-colors"
            >
              <Download className="w-4 h-4 text-cyan-400" />
              <span>View Experience</span>
            </a>
          </div>

          {/* Live Production Metrics Grid */}
          <div className="mt-16 w-full max-w-5xl grid grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((item, idx) => (
              <div
                key={item.label}
                className="relative p-5 rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-slate-800/80 hover:border-cyan-500/40 transition-all duration-300 text-left group backdrop-blur-sm shadow-md"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2 rounded-xl bg-slate-800/70 group-hover:bg-cyan-950/40 transition-colors">
                    {statIcons[idx]}
                  </div>
                  <span className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                    {item.value}
                  </span>
                </div>
                <div className="font-semibold text-sm text-slate-200">
                  {item.label}
                </div>
                <div className="text-xs text-slate-400 mt-1">
                  {item.change}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
