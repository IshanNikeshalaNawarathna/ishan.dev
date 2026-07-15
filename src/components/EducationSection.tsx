"use client";

import React, { useState } from "react";
import { education } from "@/data/portfolio";
import { GraduationCap, Calendar, Award, Building, X, Sparkles, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

export default function EducationSection() {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [activeImgIndex, setActiveImgIndex] = useState(0);

  const handlePrev = (total: number) => {
    setActiveImgIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  };

  const handleNext = (total: number) => {
    setActiveImgIndex((prev) => (prev === total - 1 ? 0 : prev + 1));
  };

  return (
    <section id="education" className="py-20 border-b border-border/20 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-xs font-mono tracking-widest text-primary uppercase">
            Education
          </h2>
          <h3 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Academic Qualifications
          </h3>
          <p className="text-base text-secondary">
            My formal engineering foundation and university graduation highlights.
          </p>
        </div>

        {/* Credentials and Photos Container */}
        {education.map((edu) => {
          const totalImages = edu.images.length;
          const activeImage = edu.images[activeImgIndex];

          return (
            <div key={edu.id} className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start text-left">
              {/* Academic Details Card (Left 7 Cols) */}
              <div className="lg:col-span-7 space-y-6 bg-card/25 border border-border p-6 sm:p-8 rounded-2xl backdrop-blur-sm glow-border-hover transition-all duration-300">
                <div className="flex items-center space-x-3 pb-4 border-b border-border/60">
                  <div className="p-3 rounded-xl bg-background border border-border">
                    <GraduationCap size={24} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl sm:text-2xl font-bold text-foreground">
                      {edu.degree}
                    </h4>
                    <p className="text-xs text-primary font-mono font-medium flex items-center space-x-1.5 mt-0.5">
                      <Building size={12} />
                      <span>{edu.institution}</span>
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-secondary leading-relaxed">
                  {edu.description}
                </p>

                {/* Duration and Timeline marker */}
                <div className="flex items-center space-x-2 text-xs font-mono text-secondary bg-background/50 border border-border/40 w-fit px-3 py-1.5 rounded-lg">
                  <Calendar size={12} className="text-primary" />
                  <span>Academic Period: {edu.period}</span>
                </div>

                {/* Honors list */}
                <div className="space-y-3 pt-4 border-t border-border/40">
                  <p className="text-xs font-mono text-secondary uppercase tracking-wider font-bold flex items-center space-x-1">
                    <Award size={14} className="text-primary" />
                    <span>Academic Honors & Recognitions</span>
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-secondary">
                    {edu.achievements.map((ach, idx) => (
                      <li key={idx} className="flex items-start bg-background/30 p-2.5 rounded-xl border border-border/40">
                        <Sparkles size={12} className="text-accent mt-0.5 mr-2 flex-shrink-0" />
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Showcase Slideshow (Right 5 Cols) */}
              <div className="lg:col-span-5 space-y-4">
                <div className="flex justify-between items-center px-1">
                  <p className="text-[10px] font-mono text-secondary uppercase tracking-widest select-none">
                    Graduation Gallery
                  </p>
                  <span className="text-[10px] font-mono text-secondary px-1.5 py-0.5 rounded border border-border bg-background/50">
                    {activeImgIndex + 1} / {totalImages}
                  </span>
                </div>

                {/* Active Image Stage */}
                <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden border border-border/80 group bg-black/40 shadow-xl">
                  {/* Graduation Picture */}
                  <Image
                    src={activeImage}
                    alt={`Ishan graduation picture ${activeImgIndex + 1}`}
                    fill
                    sizes="(max-w-768px) 100vw, 33vw"
                    className="object-cover transition-all duration-700 filter brightness-95 group-hover:scale-[1.02]"
                    priority
                  />

                  {/* Glassmorphism Navigation Overlays */}
                  <div className="absolute inset-x-0 inset-y-0 flex items-center justify-between px-3 pointer-events-none">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handlePrev(totalImages);
                      }}
                      className="p-2 rounded-xl bg-background/60 hover:bg-background/90 text-foreground border border-border/40 shadow-lg backdrop-blur-md transition-all pointer-events-auto transform -translate-x-2 group-hover:translate-x-0 opacity-0 group-hover:opacity-100"
                      title="Previous Image"
                    >
                      <ChevronLeft size={18} />
                    </button>
                    
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleNext(totalImages);
                      }}
                      className="p-2 rounded-xl bg-background/60 hover:bg-background/90 text-foreground border border-border/40 shadow-lg backdrop-blur-md transition-all pointer-events-auto transform translate-x-2 group-hover:translate-x-0 opacity-0 group-hover:opacity-100"
                      title="Next Image"
                    >
                      <ChevronRight size={18} />
                    </button>
                  </div>

                  {/* Zoom click trigger zone */}
                  <div 
                    onClick={() => setLightboxImage(activeImage)}
                    className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center cursor-pointer"
                  >
                    <div className="p-3 rounded-full bg-primary text-background shadow-lg transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300 flex items-center space-x-1.5 text-xs font-semibold font-mono">
                      <ZoomIn size={16} />
                      <span>Click to Zoom</span>
                    </div>
                  </div>
                </div>

                {/* Horizontal Thumbnails Scrollbar strip */}
                <div className="flex space-x-2 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-border scrollbar-track-transparent">
                  {edu.images.map((img, idx) => {
                    const isSelected = idx === activeImgIndex;
                    return (
                      <button
                        key={idx}
                        onClick={() => setActiveImgIndex(idx)}
                        className={`relative w-16 h-12 rounded-lg overflow-hidden flex-shrink-0 border transition-all duration-300 ${
                          isSelected
                            ? "border-primary shadow-[0_0_8px_var(--glow-color)] scale-95"
                            : "border-border/60 hover:border-primary/50 opacity-60 hover:opacity-100"
                        }`}
                      >
                        <Image
                          src={img}
                          alt={`Thumbnail ${idx + 1}`}
                          fill
                          sizes="64px"
                          className="object-cover"
                        />
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Lightbox full-screen modal */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4 animate-fade-in"
          onClick={() => setLightboxImage(null)}
        >
          {/* Close button */}
          <button
            onClick={() => setLightboxImage(null)}
            className="absolute top-6 right-6 p-2.5 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white transition-colors"
          >
            <X size={20} />
          </button>
          
          {/* Zoomed Image */}
          <div className="relative max-w-4xl max-h-[85vh] w-full aspect-[4/3] overflow-hidden rounded-xl border border-zinc-800" onClick={(e) => e.stopPropagation()}>
            <Image
              src={lightboxImage}
              alt="Zoomed graduation photo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      )}
    </section>
  );
}
