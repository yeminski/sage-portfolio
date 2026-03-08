import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ExperienceViewToggle from "@/components/career/ExperienceViewToggle";

export const metadata: Metadata = {
  title: "Experience | Sage",
  description:
    "Sage's full work history — product management across B2B, consumer, and startup environments.",
};

export default function ExperiencePage() {
  return (
    <>
      <Navbar />
      <main className="pt-16 min-h-screen bg-paper">
        {/* Page header */}
        <div className="border-b border-gray-100">
          <div className="max-w-[1200px] mx-auto px-6 py-16">
            <span className="text-[10px] font-semibold text-accent uppercase tracking-widest">
              Work History
            </span>
            <h1 className="text-3xl font-bold text-ink mt-2 mb-1">
              Experience
            </h1>
            <p className="text-ink/50">
              Product management across hardware, e-commerce, and service — from early-stage startups to a global enterprise. Click any tag to explore what I worked on.
            </p>
          </div>
        </div>

        {/* Experience cards */}
        <div className="max-w-[1200px] mx-auto px-6 py-16">
          <ExperienceViewToggle />
        </div>
      </main>
      <Footer />
    </>
  );
}
