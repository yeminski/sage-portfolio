import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/content";

export const metadata: Metadata = {
  title: "Projects | Sage",
  description:
    "Case competition projects showcasing Sage's product thinking in Fintech — from embedded wallets to ESG robo-advisors.",
};

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16 min-h-screen bg-paper">
        {/* Page header */}
        <div className="border-b border-gray-100">
          <div className="max-w-[1200px] mx-auto px-6 py-16">
            <span className="text-[10px] font-semibold text-accent uppercase tracking-widest">
              Case Competitions
            </span>
            <h1 className="text-3xl font-bold text-ink mt-2 mb-1">
              Projects
            </h1>
            <p className="text-ink/50">
              0-to-1 product work built outside of work — research, roadmap, and interactive prototypes to explore.
            </p>
          </div>
        </div>

        {/* Project cards */}
        <div className="max-w-[1200px] mx-auto px-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
