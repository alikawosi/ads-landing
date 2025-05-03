import React from "react";
import HeroSection from "@/components/ui/hero-section";
import { EXTERNAL_APP_URL } from "@/constants";

class HeroLandingSection extends React.Component {
  render() {
    return (
      <HeroSection
        title="Save Time, Cut Costs, Drive Success!"
        subtitle="Find undermarket valued cars in minutes and increase your profits."
        ctaText="Start Driving"
        ctaLink={EXTERNAL_APP_URL}
        secondaryCtaText="Book Demo"
        secondaryCtaLink="/demo"
      />
    );
  }
}

export default HeroLandingSection;
