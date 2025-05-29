import React from "react";
import HeroSection from "@/components/ui/hero-section";

const HeroLandingSection = () => {
  return (
    <div className="mb-8 md:mb-0">
      <HeroSection
        title="Save Time, Cut Costs, Drive Success!"
        subtitle="Find  undervalued cars in minutes and increase your profits."
        ctaText="Start Driving"
        ctaLink={import.meta.env.VITE_APP_URL}
        secondaryCtaText="Book Demo"
        secondaryCtaLink="/demo"
      />
    </div>
  );
};

export default HeroLandingSection;
