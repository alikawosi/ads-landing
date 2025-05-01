import React from "react";
import Layout from "@/components/layout/Layout";
import HeroLandingSection from "@/components/index-sections/HeroLandingSection";
import WhatWeOfferSection from "@/components/index-sections/WhatWeOfferSection";
import HowItWorksSection from "@/components/index-sections/HowItWorksSection";
import FeatureSection from "@/components/ui/feature-section";
import { TestimonialsSection } from "@/components/index-sections/TestimonialsSection";
import StatsSection from "@/components/index-sections/StatsSection";
import FinalCtaSection from "@/components/index-sections/FinalCtaSection";
import Pricing from "./Pricing";
import { PricingSection } from "@/components/index-sections/PricingSection";

const features = [
  {
    title: "Inventory Optimization",
    description:
      "AI-powered analysis to help you stock vehicles that sell faster",
    icon: "BarChart",
  },
  {
    title: "Customer Matching",
    description:
      "Match customers with their ideal vehicles to increase closing rates",
    icon: "Target",
  },
  {
    title: "Price Prediction",
    description: "Set optimal prices based on market data and demand analytics",
    icon: "LineChart",
  },
  {
    title: "Lead Qualification",
    description:
      "Automatically qualify and prioritize leads most likely to convert",
    icon: "FilterX",
  },
  {
    title: "Competitor Analysis",
    description:
      "Track and analyze competitor pricing and inventory strategies",
    icon: "Users",
  },
  {
    title: "Performance Analytics",
    description:
      "Comprehensive dashboards to track all aspects of your business",
    icon: "BarChart",
  },
];

const Index = () => (
  <Layout fullWidth>
    <HeroLandingSection />
    <StatsSection />
    <WhatWeOfferSection />
    <HowItWorksSection />
    <PricingSection />
    {/* <FeatureSection 
      title="AI-Powered Features Designed for Car Dealerships" 
      subtitle="Everything you need to optimize your operation and drive more sales"
      features={features}
    /> */}
    <TestimonialsSection />
    <FinalCtaSection />
  </Layout>
);

export default Index;
