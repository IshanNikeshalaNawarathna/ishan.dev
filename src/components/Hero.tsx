"use client";

import React, { useState, useEffect } from "react";
import { ArrowRight, Code2, Sparkles } from "lucide-react";
import { personalInfo } from "@/data/portfolio";

const words = [
  "Distributed Systems",
  "Cloud Architecture",
  "Full-Stack Applications",
  "DevOps Automation"
];

export default function Hero() {
  const [activeWordIndex, setActiveWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  
  // Custom typewriting logic
  useEffect(() => {
    let timer: NodeJS.Timeout;
    const activeWord = words[activeWordIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    if (!isDeleting && displayedText === activeWord) {
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayedText === "") {
      timer = setTimeout(() => {
        setIsDeleting(false);
        setActiveWordIndex((prev) => (prev + 1) % words.length);
      }, 0);
    } else {
      timer = setTimeout(() => {
        setDisplayedText(
          isDeleting
            ? activeWord.slice(0, displayedText.length - 1)
            : activeWord.slice(0, displayedText.length + 1)
        );
      }, typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, activeWordIndex]);

  return (
    <section className="relative overflow-hidden pt-20 pb-16 md:pt-28 md:pb-24 border-b border-border/20">
      {/* Background gradients */}
      <div className="absolute top-1/4 left-1/4 -z-10 h-[250px] w-[250px] rounded-full bg-primary/10 blur-[100px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 -z-10 h-[300px] w-[300px] rounded-full bg-accent/5 blur-[120px]" />
      
      {/* Visual blueprint grids */}
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center text-left">
          {/* Pitch column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full border border-border bg-card/60 text-xs font-medium text-secondary animate-fade-in relative">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Available for New Projects</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.1]">
              Hi, I&apos;m <br />
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent glow-text font-extrabold">
                {personalInfo.name}
              </span>
            </h1>

            <h2 className="text-xl sm:text-2xl font-semibold text-foreground flex items-center h-8">
              <span>I build&nbsp;</span>
              <span className="text-primary font-mono border-r-2 border-primary animate-pulse pr-1">
                {displayedText}
              </span>
            </h2>

            <p className="text-base sm:text-lg text-secondary leading-relaxed max-w-xl">
              {personalInfo.bio}
            </p>

            {/* Micro details stats card */}
            <div className="grid grid-cols-3 gap-4 border-y border-border/20 py-4">
              <div>
                <p className="text-xl sm:text-2xl font-bold text-foreground font-mono">4+</p>
                <p className="text-xs text-secondary font-mono">Years Experience</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-bold text-foreground font-mono">15+</p>
                <p className="text-xs text-secondary font-mono">Completed Projects</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-bold text-foreground font-mono">99.9%</p>
                <p className="text-xs text-secondary font-mono">Uptime Focus</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#projects"
                className="flex items-center space-x-2 px-5 py-3 rounded-xl bg-primary text-background font-medium hover:bg-primary-hover shadow-lg shadow-primary/20 transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <span>View Projects</span>
                <ArrowRight size={16} />
              </a>

              <a
                href="#contact"
                className="flex items-center space-x-2 px-5 py-3 rounded-xl border border-border bg-card/40 text-foreground font-medium hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <span>Get In Touch</span>
              </a>
            </div>
          </div>

          {/* Visual Interactive Code Box Mockup */}
          <div className="lg:col-span-5 w-full">
            <div className="w-full rounded-xl overflow-hidden border border-border/80 bg-zinc-950/80 shadow-2xl glow-card backdrop-blur-xl font-mono text-xs select-none">
              {/* Header */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-zinc-900/50">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <span className="text-[10px] text-secondary">engineer.ts — Editor</span>
                <Code2 size={14} className="text-secondary" />
              </div>

              {/* Code Workspace */}
              <div className="p-5 text-left space-y-1.5 overflow-x-auto text-zinc-300">
                <div>
                  <span className="text-pink-500">const</span> <span className="text-blue-400">developer</span> = &#123;
                </div>
                <div className="pl-4">
                  <span className="text-sky-400">name</span>: <span className="text-emerald-400">{`"Ishan Nikeshala N."`}</span>,
                </div>
                <div className="pl-4">
                  <span className="text-sky-400">role</span>: <span className="text-emerald-400">{`"Software Engineer"`}</span>,
                </div>
                <div className="pl-4">
                  <span className="text-sky-400">skills</span>: [
                </div>
                <div className="pl-8 text-secondary">
                  <span className="text-emerald-400">{`"Next.js"`}</span>, <span className="text-emerald-400">{`"Tailwind"`}</span>, <span className="text-emerald-400">{`"TypeScript"`}</span>,
                </div>
                <div className="pl-8 text-secondary">
                  <span className="text-emerald-400">{`"Go"`}</span>, <span className="text-emerald-400">{`"Node.js"`}</span>, <span className="text-emerald-400">{`"Docker"`}</span>
                </div>
                <div className="pl-4">],</div>
                <div className="pl-4">
                  <span className="text-sky-400">status</span>: <span className="text-emerald-400">{`"ScaleAllTheThings"`}</span>,
                </div>
                <div className="pl-4">
                  <span className="text-sky-400">motto</span>: <span className="text-pink-500">()</span> <span className="text-pink-500">=&gt;</span> <span className="text-purple-400">{"`"}</span>
                </div>
                <div className="pl-8 text-primary font-bold">
                  Write clean, modular code
                </div>
                <div className="pl-8 text-primary font-bold">
                  that scales under pressure.
                </div>
                <div className="pl-4 text-purple-400">{"`"}</div>
                <div>{`};`}</div>
                
                {/* Simulated build task success indicator */}
                <div className="pt-4 mt-4 border-t border-border/50 text-[10px] text-secondary">
                  <p className="text-emerald-400 font-bold flex items-center space-x-1">
                    <Sparkles size={10} className="mr-1" />
                    <span>✓ Build success: 0 warnings (145ms)</span>
                  </p>
                  <p className="mt-1">guest@ishan-dev:~$ npm run start</p>
                  <p className="text-blue-400">Listening on http://localhost:3000</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
