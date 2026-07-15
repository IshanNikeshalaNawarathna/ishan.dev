"use client";

import React from "react";
import { personalInfo } from "@/data/portfolio";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 border-b border-border/20 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-xs font-mono tracking-widest text-primary uppercase">
            Get In Touch
          </h2>
          <h3 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Connect With Me
          </h3>
          <p className="text-base text-secondary">
            Feel free to reach out for project collaboration, architectural consulting, or software engineering inquiries.
          </p>
        </div>

        {/* 3-Column Responsive Grid of Connection Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto text-center">
          {/* Email link card */}
          <a
            href={`mailto:${personalInfo.email}`}
            className="flex flex-col items-center justify-center p-8 rounded-2xl border border-border bg-card/25 hover:border-primary/50 hover:bg-card/45 backdrop-blur-sm transition-all duration-300 group glow-border-hover space-y-4"
          >
            <div className="p-4 rounded-full bg-background border border-border text-primary group-hover:bg-primary group-hover:text-background transition-colors duration-300">
              <Mail size={22} />
            </div>
            <div>
              <span className="font-mono text-[9px] text-secondary uppercase tracking-widest block mb-1">
                Direct Email
              </span>
              <span className="text-sm font-semibold text-foreground break-all">
                {personalInfo.email}
              </span>
            </div>
          </a>

          {/* LinkedIn Link Card */}
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center p-8 rounded-2xl border border-border bg-card/25 hover:border-primary/50 hover:bg-card/45 backdrop-blur-sm transition-all duration-300 group glow-border-hover space-y-4"
          >
            <div className="p-4 rounded-full bg-background border border-border text-primary group-hover:bg-primary group-hover:text-background transition-colors duration-300">
              <LinkedinIcon size={22} />
            </div>
            <div>
              <span className="font-mono text-[9px] text-secondary uppercase tracking-widest block mb-1">
                LinkedIn Network
              </span>
              <span className="text-sm font-semibold text-foreground">
                linkedin.com/in/ishannikeshala
              </span>
            </div>
          </a>

          {/* GitHub Link Card */}
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center p-8 rounded-2xl border border-border bg-card/25 hover:border-primary/50 hover:bg-card/45 backdrop-blur-sm transition-all duration-300 group glow-border-hover space-y-4"
          >
            <div className="p-4 rounded-full bg-background border border-border text-primary group-hover:bg-primary group-hover:text-background transition-colors duration-300">
              <GithubIcon size={22} />
            </div>
            <div>
              <span className="font-mono text-[9px] text-secondary uppercase tracking-widest block mb-1">
                Open Source
              </span>
              <span className="text-sm font-semibold text-foreground">
                github.com/ishannikeshala
              </span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
