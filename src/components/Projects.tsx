"use client";

import { useState } from "react";
import { portfolioData, Project } from "@/data/portfolioData";
import {
  FolderGit2,
  ExternalLink,
  Layers,
  Sparkles,
  CheckCircle,
  TrendingUp,
  Cpu,
  ChevronRight,
  X,
} from "lucide-react";

export default function Projects() {
  const { projects } = portfolioData;
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const categories = ["All", "AI & Real-Time", "Enterprise", "Web Performance"];

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-20 md:py-28 relative bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Case Studies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Key Engineering Projects
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl text-base sm:text-lg">
            Production-grade systems built for real-time document workflows, auditing, and high-volume clinical analytics.
          </p>

          {/* Filter Tabs */}
          <div className="mt-8 flex flex-wrap justify-center gap-2 p-1.5 rounded-2xl bg-slate-900 border border-slate-800">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/20"
                    : "text-slate-400 hover:text-white hover:bg-slate-800/60"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 shadow-xl group"
            >
              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono">
                    {project.category}
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-slate-800/80 flex items-center justify-center text-slate-400 group-hover:text-cyan-400 group-hover:bg-slate-800 transition-colors">
                    <Layers className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs font-mono text-cyan-400/80 mt-1 mb-3">
                  {project.subtitle}
                </p>

                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Highlights List */}
                <div className="space-y-2 mb-6">
                  {project.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <CheckCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                {/* Impact Metric Callout */}
                {project.metrics && (
                  <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800/80 mb-5 flex items-center gap-2 text-xs text-amber-300 font-medium">
                    <TrendingUp className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>{project.metrics}</span>
                  </div>
                )}

                {/* Tech Tags */}
                <div className="pt-4 border-t border-slate-800/80 mb-5 flex flex-wrap gap-1.5">
                  {project.technologies.slice(0, 6).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded-md bg-slate-900 border border-slate-800 text-[11px] font-mono text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 6 && (
                    <span className="px-2 py-0.5 rounded-md bg-slate-900 border border-slate-800 text-[11px] font-mono text-cyan-400">
                      +{project.technologies.length - 6} more
                    </span>
                  )}
                </div>

                {/* Card Action */}
                <button
                  onClick={() => setActiveModalProject(project)}
                  className="w-full py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700/80 hover:border-cyan-500/50 text-slate-200 hover:text-cyan-300 text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <span>View Project Specs</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for Deep Project Inspection */}
        {activeModalProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto p-6 sm:p-8 rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl">
              <button
                onClick={() => setActiveModalProject(null)}
                className="absolute top-5 right-5 p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 mb-2">
                <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono">
                  {activeModalProject.category}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white">
                {activeModalProject.title}
              </h3>
              <p className="text-sm font-mono text-cyan-400 mt-1">
                {activeModalProject.subtitle}
              </p>

              <div className="mt-5 text-sm text-slate-300 leading-relaxed">
                {activeModalProject.description}
              </div>

              {activeModalProject.metrics && (
                <div className="mt-4 p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center gap-2 text-sm text-amber-300 font-medium">
                  <TrendingUp className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Key Result: {activeModalProject.metrics}</span>
                </div>
              )}

              <div className="mt-6">
                <h4 className="text-xs uppercase font-mono tracking-wider text-slate-400 mb-3">
                  Technical Architecture &amp; Delivery Highlights
                </h4>
                <div className="space-y-2.5">
                  {activeModalProject.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-3 text-sm text-slate-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-slate-800">
                <h4 className="text-xs uppercase font-mono tracking-wider text-slate-400 mb-3">
                  Technologies Utilized
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeModalProject.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-lg bg-slate-950 border border-slate-800 text-xs font-mono text-cyan-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 flex justify-end">
                <button
                  onClick={() => setActiveModalProject(null)}
                  className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-sm font-semibold transition-colors"
                >
                  Close Specification
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

