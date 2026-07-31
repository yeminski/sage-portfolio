import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ExperienceSection from "@/components/career/ExperienceSection";
import AnimatedH1 from "@/components/career/AnimatedH1";
import { experienceSummary } from "@/data/experience";

export const metadata: Metadata = {
  title: "Experience | Sage",
  description:
    "Sage's full work history: product management across B2B, consumer, and startup environments.",
};

export default function ExperiencePage() {
  return (
    <>
      <Navbar />
      <main className="pt-16 min-h-screen bg-white">
        {/* Page header */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-[1200px] mx-auto px-6 py-16">
            <span className="text-[10px] font-semibold text-accent uppercase tracking-widest">
              Work History
            </span>
            <AnimatedH1
              className="font-serif text-4xl md:text-5xl font-bold text-ink mt-2 mb-3"
              animationDelay="100ms"
            >
              Experience
            </AnimatedH1>
            <p className="text-ink/50">{experienceSummary}</p>
          </div>
        </div>

        {/* Experience cards */}
        <div className="bg-paper">
          <div className="max-w-[1200px] mx-auto px-6 py-8">
            <ExperienceSection />
          </div>
        </div>
      </main>
      <Footer letsTalkBg="bg-white" />
    </>
  );
}
