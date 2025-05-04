
import React from "react";
import Layout from "@/components/layout/Layout";
import HeroLandingSection from "@/components/index-sections/HeroLandingSection";
import WhatWeOfferSection from "@/components/index-sections/WhatWeOfferSection";
import HowItWorksSection from "@/components/index-sections/HowItWorksSection";
import { TestimonialsSection } from "@/components/index-sections/TestimonialsSection";
import StatsSection from "@/components/index-sections/StatsSection";
import FinalCtaSection from "@/components/index-sections/FinalCtaSection";

const Index = () => (
  <Layout fullWidth>
    <div className="overflow-x-hidden"> {/* Control horizontal overflow from cards */}
      <HeroLandingSection />
      <div className="mt-12 md:mt-0"> {/* Reduced top margin on mobile for better content flow */}
        <StatsSection />
        <WhatWeOfferSection />
        <HowItWorksSection />
        <TestimonialsSection />
        <FinalCtaSection />
      </div>
    </div>
  </Layout>
);

export default Index;
