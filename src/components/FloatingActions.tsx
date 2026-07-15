"use client";

import React, { useState, useEffect } from "react";
import { useAppContext } from "./ThemeProvider";
import { ArrowUp, Command } from "lucide-react";

export default function FloatingActions() {
  const { setIsPaletteOpen } = useAppContext();
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col space-y-3">
      {/* Scroll to Top */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="p-3 rounded-full border border-border bg-card/85 text-secondary hover:text-primary hover:border-primary/50 shadow-xl backdrop-blur-md transition-all duration-300 transform hover:-translate-y-1"
          title="Scroll to Top"
        >
          <ArrowUp size={18} />
        </button>
      )}

      {/* Command Palette Trigger */}
      <button
        onClick={() => setIsPaletteOpen(true)}
        className="hidden md:flex p-3 rounded-full border border-border bg-card/85 text-secondary hover:text-primary hover:border-primary/50 shadow-xl backdrop-blur-md transition-all duration-300 transform hover:-translate-y-1"
        title="Open Command Palette (Ctrl+K)"
      >
        <Command size={18} />
      </button>
    </div>
  );
}

