
import React from "react";
import HeroSection from "@/components/ui/hero-section";

class HeroLandingSection extends React.Component {
  render() {
    return (
      <HeroSection
        title="Save Time, Cut Costs, Drive Success!"
        subtitle="Find undermarket valued cars in minutes and increase your profits."
        ctaText="Start Free Trial"
        ctaLink="/signup"
        secondaryCtaText="Book a Demo"
        secondaryCtaLink="/demo"
      />
    );
  }
}

export default HeroLandingSection;
