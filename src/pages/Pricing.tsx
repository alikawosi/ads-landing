
import React from 'react';
import Layout from '@/components/layout/Layout';
import PricingCard from '@/components/pricing/PricingCard';
import CTASection from '@/components/ui/cta-section';
import { PRICING_PLANS } from '@/constants';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Pricing = () => {
  return (
    <Layout>
      <div className="pt-20 pb-16 md:pt-28 md:pb-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">Pricing Plans</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              Choose the plan that works best for your dealership
            </p>
          </div>
        </div>
      </div>

      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <Tabs defaultValue="monthly" className="w-[300px] mx-auto">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="monthly">Monthly</TabsTrigger>
                <TabsTrigger value="annually">Annually</TabsTrigger>
              </TabsList>
              <TabsContent value="monthly">
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">Billed monthly</p>
              </TabsContent>
              <TabsContent value="annually">
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">Billed annually, save 20%</p>
              </TabsContent>
            </Tabs>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {PRICING_PLANS.map((plan, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <PricingCard {...plan} />
              </div>
            ))}
          </div>

          <div className="mt-16 text-center max-w-3xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4">Enterprise Solution</h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              Need a custom solution for your multi-location dealership group?
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Contact our sales team for a personalized quote and demo.
            </p>
            <div className="flex justify-center">
              <a href="/contact" className="btn-primary">Contact Sales</a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Everything you need to know about our pricing and plans
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Can I change plans later?</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Is there a free trial?</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Yes, we offer a 14-day free trial for all plans. No credit card required to start.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">How does vehicle counting work?</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Vehicle counts are based on active listings in your inventory at any given time, not the total number processed.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Do you offer refunds?</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We offer a 30-day money-back guarantee if you're not satisfied with our service.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Transform Your Dealership?"
        subtitle="Get started with a 14-day free trial. No credit card required."
        ctaText="Start Free Trial"
        ctaLink="/signup"
        secondaryCtaText="Contact Sales"
        secondaryCtaLink="/contact"
      />
    </Layout>
  );
};

export default Pricing;
