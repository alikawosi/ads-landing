
import React from 'react';
import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/ui/hero-section';
import FeatureSection from '@/components/ui/feature-section';
import TestimonialSection from '@/components/ui/testimonial-section';
import CTASection from '@/components/ui/cta-section';
import { FEATURES, TESTIMONIALS, COMPANY_NAME, TAGLINE } from '@/constants';

const Index = () => {
  return (
    <Layout>
      <HeroSection
        title={`Transform Your Dealership with ${COMPANY_NAME}`}
        subtitle={TAGLINE}
        ctaText="Start Free Trial"
        ctaLink="/signup"
        secondaryCtaText="Learn More"
        secondaryCtaLink="/about"
      />
      
      <FeatureSection
        title="AI-Powered Features Designed for Car Dealerships"
        subtitle="Our solutions are specifically tailored to help you sell more cars and optimize your operations."
        features={FEATURES}
      />
      
      <div className="bg-white dark:bg-gray-900 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="rounded-lg overflow-hidden shadow-xl animate-slide-in">
                <img
                  src="/placeholder.svg"
                  alt="Dashboard Preview"
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div className="order-1 md:order-2 animate-slide-in-right">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Streamline Your Car Sales Process</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                Our intuitive dashboard provides real-time insights into your inventory, 
                customer preferences, and market trends. Make data-driven decisions and 
                stay ahead of the competition.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="h-6 w-6 rounded-full bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 flex items-center justify-center mr-2 mt-1">✓</span>
                  <span>Reduce average days to sell by 40%</span>
                </li>
                <li className="flex items-start">
                  <span className="h-6 w-6 rounded-full bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 flex items-center justify-center mr-2 mt-1">✓</span>
                  <span>Increase profit margins with smart pricing</span>
                </li>
                <li className="flex items-start">
                  <span className="h-6 w-6 rounded-full bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 flex items-center justify-center mr-2 mt-1">✓</span>
                  <span>Optimize inventory based on real market demand</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <TestimonialSection 
        title="Trusted by Dealerships Nationwide"
        subtitle="See what our customers have to say about us"
        testimonials={TESTIMONIALS}
      />
      
      <CTASection
        title="Ready to Revolutionize Your Car Dealership?"
        subtitle="Join thousands of dealerships already using our AI solutions."
        ctaText="Start Free Trial"
        ctaLink="/signup"
        secondaryCtaText="Contact Sales"
        secondaryCtaLink="/contact"
      />
    </Layout>
  );
};

export default Index;
