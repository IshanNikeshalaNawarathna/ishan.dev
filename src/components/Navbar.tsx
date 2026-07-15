"use client";

import React, { useState } from "react";
import { useAppContext, Theme } from "./ThemeProvider";
import { Command, Menu, X, ChevronDown, Palette } from "lucide-react";

export default function Navbar() {
  const { theme, setTheme, setIsPaletteOpen } = useAppContext();
  const [isOpen, setIsOpen] = useState(false);
  const [showThemes, setShowThemes] = useState(false);

  const navigation = [
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  const themesList: { value: Theme; label: string; color: string }[] = [
    { value: "light", label: "Slate Light", color: "bg-slate-300" },
    { value: "dark", label: "Slate Dark", color: "bg-slate-900" },
    { value: "system", label: "System Theme", color: "bg-sky-500" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/40 backdrop-blur-md bg-background/60 transition-all duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="font-mono text-xl font-bold tracking-tight text-primary">
              ishan<span className="text-foreground">.dev</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-secondary hover:text-primary transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Command Palette Trigger Hint */}
            <button
              onClick={() => setIsPaletteOpen(true)}
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg border border-border bg-card/50 text-xs text-secondary hover:text-primary hover:border-primary/50 transition-all duration-200"
              title="Open Command Palette (Ctrl+K)"
            >
              <Command size={14} />
              <span>Palette</span>
              <kbd className="hidden lg:inline-block px-1.5 py-0.5 ml-1 text-[10px] font-mono border border-border rounded bg-background">
                Ctrl K
              </kbd>
            </button>


            {/* Theme Selector */}
            <div className="relative">
              <button
                onClick={() => setShowThemes(!showThemes)}
                className="flex items-center space-x-1.5 px-3 py-2 rounded-lg border border-border bg-card/50 text-sm hover:border-primary/50 transition-all duration-200"
              >
                <Palette size={16} className="text-primary" />
                <span className="capitalize">{theme}</span>
                <ChevronDown size={14} className="text-secondary" />
              </button>

              {showThemes && (
                <div className="absolute right-0 mt-2 w-48 rounded-xl border border-border bg-card p-2 shadow-xl backdrop-blur-lg">
                  {themesList.map((t) => (
                    <button
                      key={t.value}
                      onClick={() => {
                        setTheme(t.value);
                        setShowThemes(false);
                      }}
                      className={`flex w-full items-center justify-between px-3 py-2 rounded-lg text-sm transition-colors ${
                        theme === t.value
                          ? "bg-primary/10 text-primary font-medium"
                          : "hover:bg-foreground/5 text-secondary hover:text-foreground"
                      }`}
                    >
                      <span>{t.label}</span>
                      <span className={`h-2.5 w-2.5 rounded-full ${t.color}`} />
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center space-x-2">


            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg border border-border bg-card/50 text-secondary hover:text-foreground"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-border bg-background px-4 py-4 space-y-4 shadow-lg">
          <div className="flex flex-col space-y-3">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-base font-medium text-secondary hover:text-primary transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
          </div>

          <div className="border-t border-border/60 pt-4 flex flex-col space-y-4">
            {/* Palette */}
            <button
              onClick={() => {
                setIsOpen(false);
                setIsPaletteOpen(true);
              }}
              className="flex items-center justify-center space-x-2 w-full py-2.5 rounded-lg border border-border bg-card/50 text-sm font-medium"
            >
              <Command size={16} />
              <span>Open Command Palette</span>
            </button>

            {/* Theme list */}
            <div>
              <p className="text-xs font-mono text-secondary mb-2">Select Theme</p>
              <div className="grid grid-cols-2 gap-2">
                {themesList.map((t) => (
                  <button
                    key={t.value}
                    onClick={() => setTheme(t.value)}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-lg border text-xs capitalize ${
                      theme === t.value
                        ? "border-primary bg-primary/5 text-primary"
                        : "border-border bg-card/30 text-secondary"
                    }`}
                  >
                    <span className={`h-2 w-2 rounded-full ${t.color}`} />
                    <span>{t.value}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
