import Link from "next/link";
import ProjectCarousel from "@/components/ProjectCarousel";

export default function ProjectsPreview() {
  return (
    <section id="projects" className="bg-white py-16 border-t border-gray-200">
      <div className="max-w-[1200px] mx-auto px-6">

        <span className="text-[10px] font-semibold text-accent uppercase tracking-widest">Selected Work</span>
        <h2 className="font-serif text-3xl font-bold text-ink mt-2 mb-1">Projects</h2>
        <p className="text-ink/50 mb-14">What I build beyond 9-5</p>

        <ProjectCarousel />

        <div className="flex justify-center mt-10">
          <Link
            href="/projects"
            className="inline-block px-8 py-3 border border-ink/25 rounded text-sm font-medium text-ink hover:bg-gray-50 transition-colors"
          >
            View all projects
          </Link>
        </div>

      </div>
    </section>
  );
}
