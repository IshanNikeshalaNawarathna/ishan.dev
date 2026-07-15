"use client";

import React, { useState, useEffect, useRef } from "react";
import { useAppContext } from "./ThemeProvider";
import { Search, Sparkles, ArrowRight } from "lucide-react";

interface PaletteItem {
  id: string;
  title: string;
  category: "Navigation" | "Themes" | "System";
  icon: React.ReactNode;
  shortcut?: string;
  action: () => void;
}

export default function CommandPalette() {
  const { isPaletteOpen, setIsPaletteOpen, setTheme } = useAppContext();
  const [search, setSearch] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isPaletteOpen) {
      setTimeout(() => {
        setSearch("");
        setSelectedIndex(0);
      }, 0);
      setTimeout(() => inputRef.current?.focus(), 100);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isPaletteOpen]);

  const items: PaletteItem[] = [
    // Navigation
    {
      id: "nav-exp",
      title: "Go to Experience",
      category: "Navigation",
      icon: <ArrowRight size={16} />,
      action: () => {
        document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" });
      },
    },
    {
      id: "nav-edu",
      title: "Go to Education",
      category: "Navigation",
      icon: <ArrowRight size={16} />,
      action: () => {
        document.getElementById("education")?.scrollIntoView({ behavior: "smooth" });
      },
    },
    {
      id: "nav-proj",
      title: "Go to Projects",
      category: "Navigation",
      icon: <ArrowRight size={16} />,
      action: () => {
        document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
      },
    },
    {
      id: "nav-skills",
      title: "Go to Skills",
      category: "Navigation",
      icon: <ArrowRight size={16} />,
      action: () => {
        document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" });
      },
    },
    {
      id: "nav-contact",
      title: "Go to Contact",
      category: "Navigation",
      icon: <ArrowRight size={16} />,
      action: () => {
        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
      },
    },
    // Themes
    {
      id: "theme-light",
      title: "Switch Theme to Slate Light",
      category: "Themes",
      icon: <Sparkles size={16} className="text-slate-400" />,
      action: () => setTheme("light"),
    },
    {
      id: "theme-dark",
      title: "Switch Theme to Slate Dark",
      category: "Themes",
      icon: <Sparkles size={16} className="text-sky-400" />,
      action: () => setTheme("dark"),
    },
    {
      id: "theme-system",
      title: "Follow System Theme",
      category: "Themes",
      icon: <Sparkles size={16} className="text-emerald-400" />,
      action: () => setTheme("system"),
    },
  ];

  const filteredItems = items.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase()) ||
    item.category.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    // Scroll the selected item into view if necessary
    const activeEl = containerRef.current?.querySelector(`[data-index="${selectedIndex}"]`);
    if (activeEl) {
      activeEl.scrollIntoView({ block: "nearest" });
    }
  }, [selectedIndex]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isPaletteOpen) return;

      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % filteredItems.length);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
      } else if (e.key === "Enter") {
        e.preventDefault();
        if (filteredItems[selectedIndex]) {
          filteredItems[selectedIndex].action();
          setIsPaletteOpen(false);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isPaletteOpen, selectedIndex, filteredItems, setIsPaletteOpen]);

  if (!isPaletteOpen) return null;

  // Group filtered items by category
  const categories = Array.from(new Set(filteredItems.map((item) => item.category)));

  let itemGlobalIndex = 0;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center p-4 pt-[15vh] bg-background/80 backdrop-blur-sm"
      onClick={() => setIsPaletteOpen(false)}
    >
      <div
        className="w-full max-w-lg overflow-hidden rounded-xl border border-border bg-card shadow-2xl glow-card"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input */}
        <div className="flex items-center border-b border-border px-4 py-3">
          <Search size={18} className="text-secondary mr-3 flex-shrink-0" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Type a command or search..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setSelectedIndex(0);
            }}
            className="w-full bg-transparent text-sm text-foreground outline-none placeholder-secondary"
          />
          <kbd className="hidden sm:inline-block px-1.5 py-0.5 text-[10px] font-mono border border-border rounded bg-background/50 text-secondary">
            ESC
          </kbd>
        </div>

        {/* Search Results */}
        <div ref={containerRef} className="max-h-[350px] overflow-y-auto p-2 space-y-3">
          {filteredItems.length === 0 ? (
            <div className="py-6 text-center text-sm text-secondary">{`No results found for "${search}"`}</div>
          ) : (
            categories.map((category) => {
              const categoryItems = filteredItems.filter((item) => item.category === category);
              return (
                <div key={category} className="space-y-1">
                  <h3 className="px-3 text-[10px] font-mono tracking-wider text-secondary uppercase">
                    {category}
                  </h3>
                  {categoryItems.map((item) => {
                    const currentIndex = itemGlobalIndex++;
                    const isSelected = currentIndex === selectedIndex;
                    return (
                      <button
                        key={item.id}
                        data-index={currentIndex}
                        onClick={() => {
                          item.action();
                          setIsPaletteOpen(false);
                        }}
                        className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm text-left transition-colors ${
                          isSelected
                            ? "bg-primary text-background font-medium"
                            : "hover:bg-foreground/5 text-secondary hover:text-foreground"
                        }`}
                      >
                        <div className="flex items-center space-x-3">
                          <span className={isSelected ? "text-background" : "text-primary"}>
                            {item.icon}
                          </span>
                          <span>{item.title}</span>
                        </div>
                        {item.shortcut && (
                          <kbd
                            className={`px-1.5 py-0.5 text-[10px] font-mono border rounded ${
                              isSelected
                                ? "bg-background/20 border-background/20 text-background"
                                : "bg-background/50 border-border text-secondary"
                            }`}
                          >
                            {item.shortcut}
                          </kbd>
                        )}
                      </button>
                    );
                  })}
                </div>
              );
            })
          )}
        </div>

        {/* Footer info */}
        <div className="flex justify-between items-center px-4 py-2 bg-background/40 border-t border-border text-[10px] text-secondary font-mono">
          <div className="flex items-center space-x-2">
            <span>↑↓ to navigate</span>
            <span>•</span>
            <span>↵ to select</span>
          </div>
          <span>Ishan.dev Console</span>
        </div>
      </div>
    </div>
  );
}
