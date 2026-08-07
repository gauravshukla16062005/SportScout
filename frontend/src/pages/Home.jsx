import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import SportsSection from "../components/SportsSection";
import AIPipeline from "../components/AIpipeline";
import WhyChooseUs from "../components/WhyChooseUs";
import AboutSection from "../components/AboutSection";
import DashboardPreview from "../components/DashboardPreview";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <SportsSection />
        <AIPipeline />
        <WhyChooseUs />
        <AboutSection />
        <DashboardPreview />
      </main>

      <Footer />
    </>
  );
}