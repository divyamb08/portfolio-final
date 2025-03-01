import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectSection from "./components/ProjectSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import ExperienceTimeline from "./components/ExperienceTimeline";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"
import ScrollToTopButton from "./components/ScrollToTopButton";
import Head from 'next/head';

// import AchievementsSection from "./components/AchievementsSection";


export default function Home() {
  return (
    <>
      <Head>
        <title>Home - Divyam Bansal Portfolio</title>
        <meta
          name="description"
          content="Welcome to the portfolio of Divyam Bansal, a Software Engineer and Data Scientist specializing in web development and data analysis."
        />
      </Head>
      <main className="flex min-h-screen flex-col">
        {/* <Navbar /> */}
        <div className="container min-h-screen mt-24 mx-auto px-12 py-4">
          <SpeedInsights />
          <Analytics />
          <HeroSection />
          <ProjectSection />
          {/* <AchievementsSection /> */}
          <AboutSection />
          <ExperienceTimeline/>
          <EmailSection />
        </div>
        <Footer />
        <ScrollToTopButton />
      </main>
    </>
  );
}