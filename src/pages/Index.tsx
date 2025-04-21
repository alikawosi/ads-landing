
import React from "react";
import Layout from "@/components/layout/Layout";
import FeatureSection from "@/components/ui/feature-section";

// New separated components for sections
import HeroLandingSection from "@/components/index-page/HeroLandingSection";
import WhatWeOfferSection from "@/components/index-page/WhatWeOfferSection";
import HowItWorksSection from "@/components/index-page/HowItWorksSection";
import TestimonialsSection from "@/components/index-page/TestimonialsSection";
import StatsSection from "@/components/index-page/StatsSection";
import FinalCtaSection from "@/components/index-page/FinalCtaSection";

const features = [
  {
    title: "Inventory Optimization",
    description: "AI-powered analysis to help you stock vehicles that sell faster",
    icon: "BarChart",
  },
  {
    title: "Customer Matching",
    description: "Match customers with their ideal vehicles to increase closing rates",
    icon: "Target",
  },
  {
    title: "Price Prediction",
    description: "Set optimal prices based on market data and demand analytics",
    icon: "LineChart",
  },
  {
    title: "Lead Qualification",
    description: "Automatically qualify and prioritize leads most likely to convert",
    icon: "FilterX",
  },
  {
    title: "Competitor Analysis",
    description: "Track and analyze competitor pricing and inventory strategies",
    icon: "Users",
  },
  {
    title: "Performance Analytics",
    description: "Comprehensive dashboards to track all aspects of your business",
    icon: "BarChart",
  },
];

const Index = () => (
  <Layout fullWidth>
    <HeroLandingSection />
    <WhatWeOfferSection />
    <HowItWorksSection />
    <FeatureSection 
      title="AI-Powered Features Designed for Car Dealerships" 
      subtitle="Everything you need to optimize your operation and drive more sales"
      features={features}
    />
    <TestimonialsSection />
    <StatsSection />
    <FinalCtaSection />
  </Layout>
);

export default Index;
