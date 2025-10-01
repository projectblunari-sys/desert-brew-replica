import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import IntroSection from "@/components/IntroSection";
import ScrollingLogos from "@/components/ScrollingLogos";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import ComingSoon from "@/components/ComingSoon";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <IntroSection />
      <ScrollingLogos />
      <About />
      <Gallery />
      <ComingSoon />
      <Footer />
    </div>
  );
};

export default Index;
