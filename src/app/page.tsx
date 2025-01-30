import AboutSection from "@/app/(landing-page)/about-section";
import EmailSection from "@/app/(landing-page)/email-section";
import Footer from "@/app/(landing-page)/footer";
import HeroSection from "@/app/(landing-page)/hero-section";
import Navbar from "@/components/Navbar";
import ProjectSection from "@/components/ProjectSection/ProjectSection";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <AboutSection />
        <ProjectSection />
        <EmailSection />
        <Footer />
      </div>
    </main>
  );
}
