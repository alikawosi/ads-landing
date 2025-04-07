
import React from 'react';
import Layout from '../components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ChevronRight, Bot, Car, Check, Search } from 'lucide-react';
import HeroSection from '@/components/ui/hero-section';
import CTASection from '@/components/ui/cta-section';

const Gear1SearchingAgent = () => {
  return (
    <Layout>
      <div className="py-20 md:py-28">
        {/* Hero Section */}
        <HeroSection
          title="AI-Powered Car Search Agent"
          subtitle="Find your perfect car match based on your preferences, budget, and needs"
          ctaText="Try Gear 1 Now"
          ctaLink="/demo"
          secondaryCtaText="How It Works"
          secondaryCtaLink="#how-it-works"
        />

        {/* How It Works Section */}
        <section id="how-it-works" className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">How Gear 1 Searching Agent Works</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Our AI-powered search agent scans thousands of listings to find the perfect car at the right price
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Search className="h-8 w-8 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3">1. Share Your Preferences</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Tell our AI what you're looking for - budget, make, model, features, and any other requirements
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Bot className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3">2. AI Does the Work</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Our intelligent agent searches thousands of listings and analyzes each one against your criteria
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Car className="h-8 w-8 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3">3. Get Personalized Results</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Receive a curated list of vehicles that match your preferences with price analysis and recommendations
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src="/lovable-uploads/f054ab4a-f69e-4774-a1b0-f241ea7d4fb8.png" 
                  alt="AI Car Search Interface" 
                  className="rounded-lg shadow-xl w-full"
                />
              </div>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-green-100 dark:bg-green-900 p-2 rounded-full">
                    <Check className="h-5 w-5 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Price Analysis</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Get detailed insights on whether a car is priced fairly, with market comparisons and historical data
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-green-100 dark:bg-green-900 p-2 rounded-full">
                    <Check className="h-5 w-5 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Natural Language Preferences</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Just tell our AI what you want in conversational language - no need to fill complex forms
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-green-100 dark:bg-green-900 p-2 rounded-full">
                    <Check className="h-5 w-5 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Customized Recommendations</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Our AI learns from your feedback to provide increasingly personalized car suggestions
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-green-100 dark:bg-green-900 p-2 rounded-full">
                    <Check className="h-5 w-5 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Negotiation Tips</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Get data-driven advice on how to negotiate the best possible price for your chosen vehicle
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="bg-gray-50 dark:bg-gray-900 py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white dark:bg-gray-800 p-8 md:p-10 rounded-xl shadow-lg">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="w-24 h-24 rounded-full overflow-hidden mx-auto md:mx-0">
                    <img 
                      src="/placeholder.svg" 
                      alt="User testimonial" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-lg text-gray-600 dark:text-gray-300 italic mb-6">
                      "Gear 1 saved me countless hours of searching. I told the AI exactly what I wanted, and within minutes 
                      it found me three perfect matches. I ended up buying the second car on the list and saved $3,200 
                      because the AI identified it was priced below market value."
                    </p>
                    <div>
                      <h4 className="font-semibold">Michael Rodriguez</h4>
                      <p className="text-gray-500 dark:text-gray-400">Honda Civic Owner</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CTASection
          title="Ready to find your perfect car?"
          subtitle="Let our AI agent do the hard work for you"
          ctaText="Try Gear 1 Now"
          ctaLink="/demo"
          backgroundClass="bg-gradient-to-r from-green-500 to-blue-600"
        />
      </div>
    </Layout>
  );
};

export default Gear1SearchingAgent;
