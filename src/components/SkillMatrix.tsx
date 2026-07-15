"use client";

import React, { useState } from "react";
import { skills } from "@/data/portfolio";
import { Code, Layout, Database, Server, Cpu, ChevronRight, Terminal } from "lucide-react";

type CategoryType = "Languages" | "Frontend" | "Backend" | "Databases" | "DevOps & Cloud";

export default function SkillMatrix() {
  const [activeTab, setActiveTab] = useState<CategoryType>("Languages");

  const categories: CategoryType[] = ["Languages", "Frontend", "Backend", "Databases", "DevOps & Cloud"];

  // Map category to icon
  const getCategoryIcon = (category: CategoryType) => {
    switch (category) {
      case "Languages":
        return <Code size={18} className="text-sky-400" />;
      case "Frontend":
        return <Layout size={18} className="text-pink-500" />;
      case "Backend":
        return <Server size={18} className="text-emerald-400" />;
      case "Databases":
        return <Database size={18} className="text-yellow-400" />;
      case "DevOps & Cloud":
        return <Cpu size={18} className="text-purple-400" />;
    }
  };

  // Map category descriptive intro
  const getCategoryDesc = (category: CategoryType) => {
    switch (category) {
      case "Languages":
        return "Strong foundational languages used to write clean algorithms, compile efficient microservices, and program high-performance utilities.";
      case "Frontend":
        return "Creating state-of-the-art web apps with component-driven designs, type-safe layouts, fluid transitions, and performance optimizations.";
      case "Backend":
        return "Engineering concurrent message gateways, service orchestration networks, low-latency queues, and robust distributed APIs.";
      case "Databases":
        return "Designing transactional tables, modeling key-value memory grids, optimizing execution indexes, and scaling data retrieval.";
      case "DevOps & Cloud":
        return "Automating deployment infrastructure, cluster scheduling, continuous pipelines, and container topologies.";
    }
  };

  // Real-world use case descriptions for each skill to look highly professional
  const getSkillDetails = (name: string) => {
    switch (name) {
      case "TypeScript":
        return "Type-safe interfaces, custom decorators, and modular Next.js application architectures.";
      case "JavaScript":
        return "Asynchronous event loops, DOM mechanics, and dynamic responsive scripts.";
      case "Java":
        return "Enterprise architecture, concurrency utilities, and robust Object-Oriented patterns.";
      case "Go":
        return "High-performance TCP streams, channels concurrency, and lightweight web services.";
      case "Python":
        return "Script automation, analytical processing, and local developer telemetry parsing.";
      case "SQL":
        return "Complex relational queries, indexing plans, and stored procedure optimization.";
      case "Next.js":
        return "Server-Side Rendering (SSR), App Router structures, edge handlers, and SEO configurations.";
      case "React":
        return "Dynamic virtual render reconciliation, custom hooks, and unified global context.";
      case "Tailwind CSS":
        return "Utility-first design systems, dynamic styling tokens, and responsive fluid selectors.";
      case "Redux Toolkit":
        return "Global state slice storage, middlewear handlers, and asynchronous dispatch pipelines.";
      case "HTML5/CSS3":
        return "Semantic structure layouts, CSS variables themes, and custom animation curves.";
      case "Node.js":
        return "High-concurrency servers, file system integrations, and package orchestration.";
      case "Express":
        return "RESTful endpoint routing, custom authentication middleware, and error interceptors.";
      case "Spring Boot":
        return "IoC dependency injections, JDBC database connectors, and microservice architectures.";
      case "GraphQL":
        return "Federated schema designs, granular query payloads, and subscription push channels.";
      case "gRPC":
        return "Protocol buffers definitions, stream channels, and microservices RPC communication.";
      case "PostgreSQL":
        return "JSONB document storage, relational tables design, and transaction lock optimization.";
      case "MongoDB":
        return "NoSQL document collections, aggregation pipeline filters, and scaling strategies.";
      case "Redis":
        return "Distributed session storage, caching policies, and pub/sub message brokers.";
      case "Prisma":
        return "Object-Relational Mapping (ORM) database migrations, type-safe queries, and seed scripts.";
      case "Docker":
        return "Multi-stage building images, secure volumes, and containers compose routing.";
      case "Kubernetes":
        return "Custom resource controllers, deployment nodes management, and cluster load balancers.";
      case "AWS (S3, EC2, Lambda)":
        return "Serverless function compute, bucket storage, and identity access IAM configuration.";
      case "CI/CD (GitHub Actions)":
        return "Automated testing verification, deploy scripts rollback, and build tasks pipelines.";
      case "Terraform":
        return "Infrastructure as Code (IaC) configuration, cloud resources state tracking, and nodes provisioning.";
      default:
        return "Professional system engineering integration and structural application programming.";
    }
  };

  const activeSkills = skills.filter((s) => s.category === activeTab);

  return (
    <section id="skills" className="py-20 border-b border-border/20 relative">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_50%_50%_at_50%_100%,var(--glow-color),transparent_100%)] opacity-20" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-xs font-mono tracking-widest text-primary uppercase">
            Capabilities
          </h2>
          <h3 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Engineering Console
          </h3>
          <p className="text-base text-secondary">
            Select a specialized engineering stack from the console menu below to view specific proficiencies and use cases.
          </p>
        </div>

        {/* Console Showcase Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column - Category Selection Tabs (Server Menu style) */}
          <div className="lg:col-span-4 space-y-2">
            <p className="text-[10px] font-mono text-secondary uppercase tracking-widest px-3 mb-3 select-none text-left">
              Select Module
            </p>
            <div className="flex flex-col space-y-1 bg-card/20 border border-border p-2 rounded-2xl backdrop-blur-sm">
              {categories.map((cat) => {
                const isActive = activeTab === cat;
                const skillCount = skills.filter((s) => s.category === cat).length;
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveTab(cat)}
                    className={`flex items-center justify-between px-4 py-3.5 rounded-xl text-sm font-medium transition-all duration-300 text-left ${
                      isActive
                        ? "bg-primary text-background shadow-md shadow-primary/20 glow-border"
                        : "hover:bg-foreground/5 text-secondary hover:text-foreground"
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <span className={isActive ? "text-background" : "text-primary"}>
                        {getCategoryIcon(cat)}
                      </span>
                      <span className="capitalize">{cat}</span>
                    </div>
                    <span className={`text-[10px] font-mono px-2 py-0.5 rounded border ${
                      isActive 
                        ? "border-background/20 bg-background/15 text-background" 
                        : "border-border bg-background/50 text-secondary"
                    }`}>
                      {skillCount} units
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column - Spec Sheet Details Panel (Server Rack Console style) */}
          <div className="lg:col-span-8">
            <div className="w-full rounded-2xl border border-border/80 bg-card/40 p-6 shadow-xl backdrop-blur-md glow-card text-left flex flex-col h-full min-h-[400px]">
              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b border-border/60 mb-6">
                <div className="flex items-center space-x-2">
                  <Terminal size={16} className="text-primary animate-pulse" />
                  <span className="font-mono text-xs text-secondary uppercase font-bold tracking-wider">
                    MODULE::{activeTab.toUpperCase().replace(" ", "_")}
                  </span>
                </div>
                <span className="font-mono text-[9px] text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded">
                  active_state
                </span>
              </div>

              {/* Description */}
              <p className="text-sm text-foreground mb-8 leading-relaxed">
                {getCategoryDesc(activeTab)}
              </p>

              {/* Skills Detailed Spec List */}
              <div className="space-y-6 flex-1">
                {activeSkills.map((skill) => {
                  // Calculate proficiency blocks (e.g. 9 blocks out of 10 for 90%)
                  const totalBlocks = 10;
                  const activeBlocks = Math.round(skill.level / 10);
                  
                  return (
                    <div key={skill.name} className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 p-4 rounded-xl border border-border bg-background/30 hover:border-primary/30 transition-all duration-300">
                      {/* Left: Skill name and details */}
                      <div className="space-y-1.5 max-w-md">
                        <div className="flex items-center space-x-2">
                          <ChevronRight size={14} className="text-primary" />
                          <h4 className="font-mono text-sm font-bold text-foreground">
                            {skill.name}
                          </h4>
                        </div>
                        <p className="text-xs text-secondary leading-normal">
                          {getSkillDetails(skill.name)}
                        </p>
                      </div>

                      {/* Right: Server Status Bar indicator blocks */}
                      <div className="flex flex-col sm:items-end justify-center space-y-1.5 flex-shrink-0">
                        <span className="font-mono text-[10px] text-secondary">
                          Proficiency: <span className="text-primary font-bold">{skill.level}%</span>
                        </span>
                        
                        {/* Status block grid layout */}
                        <div className="flex space-x-1">
                          {Array.from({ length: totalBlocks }).map((_, i) => {
                            const isLit = i < activeBlocks;
                            return (
                              <div
                                key={i}
                                className={`h-4 w-2.5 rounded-sm border transition-all duration-500 ${
                                  isLit
                                    ? "bg-primary border-primary/50 shadow-[0_0_8px_var(--glow-color)]"
                                    : "bg-background border-border"
                                }`}
                              />
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
