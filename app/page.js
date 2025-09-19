import AboutSection from "./components/aboutSection";
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
    </div>
  )
}
