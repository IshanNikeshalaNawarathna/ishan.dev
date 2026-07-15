"use client";

import React from "react";
import { personalInfo } from "@/data/portfolio";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";

export default function Footer() {
  return (
    <footer className="w-full border-t border-border/40 bg-background py-8 mt-auto transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo / Credits */}
          <div className="text-left md:w-1/3">
            <span className="font-mono text-sm font-bold text-foreground">
              ishan<span className="text-primary">.dev</span>
            </span>
            <p className="text-[11px] text-secondary mt-1">
              Engineered with Next.js, TypeScript & Tailwind CSS.
            </p>
          </div>

          {/* Copyright */}
          <div className="text-center md:w-1/3">
            <p className="text-xs text-secondary font-mono">
              &copy; {new Date().getFullYear()} Ishan Nikeshala Nawarathna.
            </p>
          </div>

          {/* Socials & Status */}
          <div className="flex flex-col md:items-end gap-2 md:w-1/3">
            <div className="flex justify-center space-x-4">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:text-primary transition-colors"
              >
                <GithubIcon size={18} />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:text-primary transition-colors"
              >
                <LinkedinIcon size={18} />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-secondary hover:text-primary transition-colors"
              >
                <Mail size={18} />
              </a>
            </div>
            
            {/* System Status indicator */}
            <div className="flex items-center space-x-1.5 justify-center md:justify-end text-[9px] font-mono text-secondary">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              <span>status: operational</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
