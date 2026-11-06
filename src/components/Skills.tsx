"use client";

import { useState } from "react";
import { portfolioData } from "@/data/portfolioData";
import {
  Code2,
  Server,
  Database,
  Terminal,
  Cpu,
  Layers,
  Sparkles,
} from "lucide-react";

export default function Skills() {
  const { skillCategories } = portfolioData;
  const [activeTab, setActiveTab] = useState<string>("All");

  const categories = ["All", ...skillCategories.map((c) => c.title)];

  const filteredCategories =
    activeTab === "All"
      ? skillCategories
      : skillCategories.filter((c) => c.title === activeTab);

  const getCategoryIcon = (title: string) => {
    switch (title) {
      case "Frontend Engineering":
        return <Layers className="w-4 h-4 text-cyan-400" />;
      case "Backend & Systems":
        return <Server className="w-4 h-4 text-emerald-400" />;
      case "Databases & Cloud":
        return <Database className="w-4 h-4 text-purple-400" />;
      default:
        return <Terminal className="w-4 h-4 text-amber-400" />;
    }
  };

  return (
    <section id="skills" className="py-20 md:py-28 relative bg-slate-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Proficiencies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Tools &amp; Technologies I Work With
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl text-base sm:text-lg">
            A battle-tested full stack toolkit spanning modern reactive frontends, resilient microservices, and robust cloud data storage.
          </p>

          {/* Interactive Filter Pills */}
          <div className="mt-8 flex flex-wrap justify-center gap-2 p-1.5 rounded-2xl bg-slate-900 border border-slate-800">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                  activeTab === cat
                    ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/20"
                    : "text-slate-400 hover:text-white hover:bg-slate-800/60"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredCategories.map((cat) => (
            <div
              key={cat.title}
              className="p-6 sm:p-7 rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-slate-800/90 hover:border-slate-700/90 transition-all duration-300 shadow-xl"
            >
              <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-6">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-slate-800">
                    {getCategoryIcon(cat.title)}
                  </div>
                  <h3 className="text-lg font-bold text-white tracking-tight">
                    {cat.title}
                  </h3>
                </div>
                <span className="text-xs font-mono text-slate-500">
                  {cat.skills.length} competencies
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {cat.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800/70 hover:border-cyan-500/30 transition-all duration-200 group"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-slate-200 group-hover:text-cyan-300 transition-colors">
                        {skill.name}
                      </span>
                      <span className="text-xs font-mono text-cyan-400/90">
                        {skill.level}%
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full h-1.5 rounded-full bg-slate-800 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 group-hover:from-cyan-400 group-hover:to-teal-400 transition-all duration-500"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Highlighted Tool Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-cyan-950/30 via-blue-950/20 to-purple-950/20 border border-cyan-500/20 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Sparkles className="w-6 h-6 text-cyan-400 shrink-0" />
            <div>
              <h4 className="text-sm sm:text-base font-bold text-white">Full-Stack Specialization</h4>
              <p className="text-xs sm:text-sm text-slate-400">
                Seamless end-to-end integration: React/Next.js frontend + Java Spring Boot REST microservices + MongoDB/Azure storage.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 shrink-0">
            {["Next.js", "TypeScript", "Java 17", "Spring Boot", "SSE", "MongoDB"].map((badge) => (
              <span
                key={badge}
                className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-700 text-xs font-mono text-cyan-300"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

