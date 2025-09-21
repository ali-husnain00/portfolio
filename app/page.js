import AboutSection from "./components/aboutSection";
import ContactSection from "./components/contactSection";
import HeroSection from "./components/heroSection";
import ProjectsSection from "./components/projectsSection";
import SkillsSection from "./components/skillsSection";

export default function Home() {
  return (
    <div className="w-full min-h-screen">
      <HeroSection/>
      <AboutSection/>
      <SkillsSection/>
      <ProjectsSection/>
      <ContactSection/>
    </div>
  )
}
