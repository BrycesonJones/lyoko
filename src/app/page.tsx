"use client";

import { useQuery } from "@tanstack/react-query";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import HeroSection from "@/components/hero-section";
import FeaturesSection from "@/components/features-section";
import TestimonialsSection from "@/components/testimonials-section";
import CTASection from "@/components/cta-section";

const Home = () => {
  const { data: user } = useQuery({
    queryKey: ["/api/user/profile"],
    retry: false,
    enabled: true,
  });
  const isLoggedIn = !!user;

  return (
    <div className="min-h-screen bg-black text-white relative">
      <Header isLoggedIn={isLoggedIn} />

      <div className="pt-16 relative z-10">
        <HeroSection />
        <FeaturesSection />
        <TestimonialsSection />
        <CTASection />
      </div>

      <Footer />
    </div>
  );
};

export default Home;
