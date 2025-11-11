import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Testimonials } from "@/components/Testimonials";
import { Benefits } from "@/components/Benefits";
import { FAQ } from "@/components/FAQ";
import { Pricing } from "@/components/Pricing";
import { StickyCTA } from "@/components/StickyCTA";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <Benefits />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Footer />
      <StickyCTA />
    </div>
  );
};

export default Index;
