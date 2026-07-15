"use client";

import React, { useState } from "react";
import { projects } from "@/data/portfolio";
import { ExternalLink, Code2, Sparkles, FolderDot } from "lucide-react";
import { GithubIcon } from "./icons";

export default function ProjectsGrid() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", "Full-Stack", "Frontend", "Backend", "Cloud"];

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 border-b border-border/20 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="text-left space-y-4 max-w-2xl">
            <h2 className="text-xs font-mono tracking-widest text-primary uppercase">
              Portfolio
            </h2>
            <h3 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Featured Software Products
            </h3>
            <p className="text-base text-secondary">
              A curated collection of system tools, web applications, and DevOps configurations developed using robust engineering principles.
            </p>
          </div>

          {/* Filtering tabs */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all duration-300 border ${
                  activeCategory === cat
                    ? "bg-primary border-primary text-background shadow-md shadow-primary/20"
                    : "border-border hover:border-primary/50 text-secondary hover:text-foreground bg-card/25"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl border border-border p-6 bg-card/45 backdrop-blur-sm glow-border-hover flex flex-col h-full space-y-5 transition-all duration-300 text-left"
            >
              {/* Card Header info */}
              <div className="flex justify-between items-start">
                <div className="p-2.5 rounded-xl bg-background border border-border">
                  <FolderDot size={20} className="text-primary" />
                </div>
                
                {/* Links */}
                <div className="flex items-center space-x-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg border border-border bg-background text-secondary hover:text-primary hover:border-primary/50 transition-all duration-200"
                      title="View GitHub Repository"
                    >
                      <GithubIcon size={16} />
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg border border-border bg-background text-secondary hover:text-primary hover:border-primary/50 transition-all duration-200"
                      title="View Live Demo"
                    >
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              </div>

              {/* Title & Category details */}
              <div className="space-y-1.5">
                <div className="flex items-center space-x-2">
                  <h4 className="text-xl font-bold text-foreground">
                    {project.title}
                  </h4>
                  <span className="px-2 py-0.5 rounded-full bg-background border border-border text-[9px] font-mono text-secondary">
                    {project.category}
                  </span>
                </div>
                <p className="text-xs text-primary font-mono font-medium">
                  Role: {project.role}
                </p>
              </div>

              {/* Description */}
              <p className="text-sm text-secondary leading-relaxed">
                {project.description}
              </p>

              {/* Collapsible Key Accomplishments list */}
              <div className="space-y-2 pt-2 border-t border-border/60">
                <p className="text-[10px] font-mono text-secondary uppercase tracking-wider font-bold">
                  Key Achievements
                </p>
                <ul className="space-y-1.5 text-xs text-secondary">
                  {project.achievements.map((ach, idx) => (
                    <li key={idx} className="flex items-start">
                      <Sparkles size={12} className="text-accent mt-0.5 mr-1.5 flex-shrink-0" />
                      <span>{ach}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech stack pills */}
              <div className="flex flex-wrap gap-1.5 pt-4 mt-auto">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="flex items-center px-2.5 py-1 rounded-lg bg-background border border-border text-[10px] font-mono text-zinc-300"
                  >
                    <Code2 size={10} className="mr-1 text-secondary" />
                    <span>{tag}</span>
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
