import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CoreCapabilities from "@/components/CoreCapabilities";
import ProjectsPreview from "@/components/ProjectsPreview";
import Footer from "@/components/Footer";

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <CoreCapabilities />
        <ProjectsPreview />
      </main>
      <Footer />
    </>
  );
}
