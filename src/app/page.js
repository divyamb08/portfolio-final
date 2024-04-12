import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectSection from "./components/ProjectSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import ExperienceTimeline from "./components/ExperienceTimeline";
// import AchievementsSection from "./components/AchievementsSection";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#004c4c]">
      <Navbar />
      <div className="container min-h-screen mt-24 mx-auto px-12 py-4">
        <HeroSection />
        {/* <AchievementsSection /> */}
        <AboutSection />
        <ExperienceTimeline/>
        <ProjectSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}