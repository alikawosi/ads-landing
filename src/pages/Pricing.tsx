
import React from 'react';
import Layout from '@/components/layout/Layout';
import PricingCard from '@/components/pricing/PricingCard';
import BillingToggle from '@/components/pricing/BillingToggle';
import FAQSection from '@/components/pricing/FAQSection';
import CTASection from '@/components/ui/cta-section';
import { PRICING_PLANS } from '@/constants';

interface PricingState {
  billingType: string;
}

class Pricing extends React.Component<{}, PricingState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      billingType: 'monthly'
    };
  }
  
  handleBillingTypeChange = (value: string) => {
    this.setState({ billingType: value });
  };

  renderHeader() {
    return (
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
    );
  }

  renderPricingCards() {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {PRICING_PLANS.map((plan, index) => (
          <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
            <PricingCard 
              name={plan.name}
              description={plan.description} 
              price={plan.price}
              features={plan.features}
              popular={plan.popular}
              cta={plan.cta}
              billingType={this.state.billingType}
            />
          </div>
        ))}
      </div>
    );
  }

  renderEnterpriseSolution() {
    return (
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
    );
  }

  getFAQs() {
    return [
      {
        question: "Can I change plans later?",
        answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle."
      },
      {
        question: "Is there a free trial?",
        answer: "Yes, we offer a 14-day free trial for all plans. No credit card required to start."
      },
      {
        question: "How does vehicle counting work?",
        answer: "Vehicle counts are based on active listings in your inventory at any given time, not the total number processed."
      },
      {
        question: "Do you offer refunds?",
        answer: "We offer a 30-day money-back guarantee if you're not satisfied with our service."
      }
    ];
  }

  render() {
    return (
      <Layout>
        {this.renderHeader()}
        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <BillingToggle 
                value={this.state.billingType} 
                onValueChange={this.handleBillingTypeChange} 
              />
            </div>

            {this.renderPricingCards()}
            {this.renderEnterpriseSolution()}
          </div>
        </section>
        <FAQSection
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about our pricing and plans"
          faqs={this.getFAQs()}
        />
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
  }
}

export default Pricing;
