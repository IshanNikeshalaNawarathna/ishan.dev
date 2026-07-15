"use client";

import React, { useState } from "react";
import { experience, CareerNode, CommitMilestone } from "@/data/portfolio";
import { GitBranch, GitCommit, GitMerge, Clock, MapPin, ChevronRight, User } from "lucide-react";

export default function GitTimeline() {
  const [selectedCommit, setSelectedCommit] = useState<string | null>(experience[0].commits[0].sha);

  // Return background/text colors for commit types
  const getCommitTypeStyles = (type: CommitMilestone["type"]) => {
    switch (type) {
      case "feature":
        return "bg-emerald-500/10 text-emerald-400 border-emerald-500/30";
      case "refactor":
        return "bg-sky-500/10 text-sky-400 border-sky-500/30";
      case "deploy":
        return "bg-purple-500/10 text-purple-400 border-purple-500/30";
      case "fix":
        return "bg-red-500/10 text-red-400 border-red-500/30";
      case "init":
        return "bg-amber-500/10 text-amber-400 border-amber-500/30";
      default:
        return "bg-zinc-500/10 text-zinc-400 border-zinc-500/30";
    }
  };

  const getBranchColor = (branch: CareerNode["branch"]) => {
    switch (branch) {
      case "main":
        return "text-sky-400 border-sky-400/30 bg-sky-500/10";
      case "dev-backend":
        return "text-emerald-400 border-emerald-400/30 bg-emerald-500/10";
      case "dev-frontend":
        return "text-pink-400 border-pink-400/30 bg-pink-500/10";
      default:
        return "text-purple-400 border-purple-400/30 bg-purple-500/10";
    }
  };

  return (
    <section id="experience" className="py-20 border-b border-border/20 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-xs font-mono tracking-widest text-primary uppercase">
            Work History
          </h2>
          <h3 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Interactive Git Log Timeline
          </h3>
          <p className="text-base text-secondary">
            Trace my software engineering career log. Branches represent companies, and commits record major milestones and features developed.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Timeline Commits Stream (Left Side) */}
          <div className="lg:col-span-7 space-y-8 relative pl-6 border-l border-border/60">
            {experience.map((node, nodeIdx) => (
              <div key={node.id} className="relative space-y-4">
                {/* Timeline Node Point representing a Git Branch creation */}
                <span className="absolute -left-[35px] top-1 flex h-6 w-6 items-center justify-center rounded-full bg-background border-2 border-primary">
                  <GitBranch size={12} className="text-primary" />
                </span>

                {/* Node Header details */}
                <div className="flex flex-wrap items-center gap-3">
                  <h4 className="text-lg font-bold text-foreground leading-tight">
                    {node.role} <span className="text-secondary font-medium">@</span> {node.company}
                  </h4>
                  <span className={`px-2.5 py-0.5 rounded-full border text-[10px] font-mono ${getBranchColor(node.branch)}`}>
                    branch: {node.branch}
                  </span>
                </div>

                {/* Sub details: time range & location */}
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-secondary font-mono">
                  <span className="flex items-center space-x-1">
                    <Clock size={12} />
                    <span>{node.period}</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <MapPin size={12} />
                    <span>{node.location}</span>
                  </span>
                </div>

                {/* Job Description text */}
                <p className="text-sm text-secondary pr-4 leading-relaxed">
                  {node.description}
                </p>

                {/* Commits Container under this node */}
                <div className="space-y-3 pt-2 pl-4 border-l-2 border-dashed border-border">
                  {node.commits.map((commit) => {
                    const isSelected = selectedCommit === commit.sha;
                    return (
                      <div
                        key={commit.sha}
                        onClick={() => setSelectedCommit(commit.sha)}
                        className={`flex items-start p-3 rounded-xl border text-left cursor-pointer transition-all duration-300 ${
                          isSelected
                            ? "bg-card border-primary/50 glow-border"
                            : "bg-card/20 border-border/60 hover:border-primary/30 hover:bg-card/45"
                        }`}
                      >
                        {/* Commit icon */}
                        <div className="p-1.5 mr-3 rounded-lg bg-background border border-border flex-shrink-0">
                          <GitCommit size={14} className={isSelected ? "text-primary animate-pulse" : "text-secondary"} />
                        </div>

                        {/* Commit Metadata & Message */}
                        <div className="flex-1 space-y-1.5">
                          <div className="flex items-center justify-between">
                            <span className="font-mono text-xs font-bold text-primary">
                              commit {commit.sha}
                            </span>
                            <span className="font-mono text-[10px] text-secondary">
                              {commit.date}
                            </span>
                          </div>
                          
                          <p className="text-sm font-medium text-foreground pr-2 leading-snug">
                            {commit.message}
                          </p>

                          <div className="flex items-center space-x-2 text-[10px] font-mono text-secondary">
                            <span className={`px-1.5 py-0.5 rounded border capitalize ${getCommitTypeStyles(commit.type)}`}>
                              {commit.type}
                            </span>
                            <span className="flex items-center space-x-1">
                              <User size={10} />
                              <span>{commit.author}</span>
                            </span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Merging marker (visual link logic) */}
                {nodeIdx < experience.length - 1 && (
                  <div className="flex items-center text-xs font-mono text-secondary/60 pt-4 pl-4 space-x-2 select-none">
                    <GitMerge size={12} />
                    <span>{`merge branch '${node.branch}' into main`}</span>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Commit Inspector Display (Right Side) */}
          <div className="lg:col-span-5 sticky top-24">
            <div className="w-full rounded-2xl border border-border/80 bg-card p-6 shadow-xl glow-card space-y-6 text-left">
              {/* Box Title */}
              <div className="flex justify-between items-center pb-4 border-b border-border">
                <div className="flex items-center space-x-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-primary" />
                  <span className="font-mono text-xs text-secondary uppercase font-bold tracking-wider">
                    Commit Inspector
                  </span>
                </div>
                <span className="font-mono text-[10px] text-zinc-500">v1.0</span>
              </div>

              {/* Inspector Content */}
              {selectedCommit ? (
                (() => {
                  // Find selected commit
                  let foundCommit: CommitMilestone | undefined;
                  let foundNode: CareerNode | undefined;
                  
                  for (const node of experience) {
                    const commit = node.commits.find((c) => c.sha === selectedCommit);
                    if (commit) {
                      foundCommit = commit;
                      foundNode = node;
                      break;
                    }
                  }

                  if (!foundCommit || !foundNode) return null;

                  return (
                    <div className="space-y-4">
                      {/* SHA Header */}
                      <div className="space-y-1">
                        <span className="font-mono text-[10px] text-secondary">COMMIT HASH</span>
                        <div className="flex items-center space-x-2">
                          <code className="px-2 py-1 bg-background border border-border rounded text-sm text-primary font-bold">
                            {foundCommit.sha}
                          </code>
                          <span className="text-secondary text-xs font-mono">
                            on {foundNode.branch}
                          </span>
                        </div>
                      </div>

                      {/* Author & Date */}
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <span className="font-mono text-[10px] text-secondary block">AUTHOR</span>
                          <span className="text-sm font-medium text-foreground">{foundCommit.author}</span>
                        </div>
                        <div>
                          <span className="font-mono text-[10px] text-secondary block">DATE TIMESTAMP</span>
                          <span className="text-sm font-medium text-foreground">{foundCommit.date}</span>
                        </div>
                      </div>

                      {/* Message */}
                      <div className="space-y-1">
                        <span className="font-mono text-[10px] text-secondary">MESSAGE</span>
                        <p className="text-sm font-semibold text-foreground bg-background/50 p-3 rounded-lg border border-border/40">
                          {foundCommit.message}
                        </p>
                      </div>

                      {/* Milestones / Impact details */}
                      <div className="space-y-3">
                        <span className="font-mono text-[10px] text-secondary block">IMPACT & METRICS CHANGED</span>
                        <ul className="space-y-2">
                          {foundCommit.details?.map((detail, index) => (
                            <li key={index} className="flex items-start text-sm text-secondary">
                              <ChevronRight size={16} className="text-primary mt-0.5 mr-1.5 flex-shrink-0" />
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  );
                })()
              ) : (
                <div className="py-12 text-center text-secondary text-sm">
                  Select a commit node on the timeline to inspect milestone details.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
