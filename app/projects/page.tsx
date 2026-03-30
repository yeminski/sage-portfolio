import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/content";
import AnimatedH1 from "@/components/career/AnimatedH1";

export const metadata: Metadata = {
  title: "Projects | Sage",
  description:
    "Case competition projects showcasing Sage's product thinking in Fintech, from embedded wallets to ESG robo-advisors.",
};

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16 min-h-screen bg-white">
        {/* Page header */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-[1200px] mx-auto px-6 py-16">
            <span className="text-[10px] font-semibold text-accent uppercase tracking-widest">
              Featured Work
            </span>
            <AnimatedH1
              className="font-serif text-4xl md:text-5xl font-bold text-ink mt-2 mb-3"
              animationDelay="80ms"
            >
              Projects
            </AnimatedH1>
            <p className="text-ink/50">
              0-to-1 product work built outside of work: research, roadmap, and interactive prototypes to explore.
            </p>
          </div>
        </div>

        {/* Project cards */}
        <div className="bg-paper">
          <div className="max-w-[1200px] mx-auto px-6 py-16">
            {projects.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>
        </div>
      </main>
      <Footer letsTalkBg="bg-white" />
    </>
  );
}
