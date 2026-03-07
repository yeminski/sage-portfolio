import Link from "next/link";
import ProjectCarousel from "@/components/ProjectCarousel";

export default function ProjectsPreview() {
  return (
    <section id="projects" className="pt-12 pb-24 bg-gray-100">
      <div className="max-w-[1200px] mx-auto px-6">

        <h2 className="text-3xl font-bold text-ink mb-1">Projects</h2>
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
