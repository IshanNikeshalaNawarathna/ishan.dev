import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import GitTimeline from "@/components/GitTimeline";
import EducationSection from "@/components/EducationSection";
import ProjectsGrid from "@/components/ProjectsGrid";
import SkillMatrix from "@/components/SkillMatrix";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import CommandPalette from "@/components/CommandPalette";
import FloatingActions from "@/components/FloatingActions";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1 w-full">
        <Hero />
        <GitTimeline />
        <EducationSection />
        <ProjectsGrid />
        <SkillMatrix />
        <ContactSection />
      </main>
      <Footer />

      {/* Overlays and Floating Action triggers */}
      <CommandPalette />
      <FloatingActions />
    </>
  );
}
