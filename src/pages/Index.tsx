import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Shield, Zap, BarChart, Target, Users } from 'lucide-react';
import { COMPANY_NAME } from '@/constants';
import FeatureSection from '@/components/ui/feature-section';

const Index = () => {
  // Features for the main feature section
  const features = [
    {
      title: "Inventory Optimization",
      description: "AI-powered analysis to help you stock vehicles that sell faster",
      icon: "BarChart"
    },
    {
      title: "Customer Matching",
      description: "Match customers with their ideal vehicles to increase closing rates",
      icon: "Target"
    },
    {
      title: "Price Prediction",
      description: "Set optimal prices based on market data and demand analytics",
      icon: "LineChart"
    },
    {
      title: "Lead Qualification",
      description: "Automatically qualify and prioritize leads most likely to convert",
      icon: "FilterX"
    },
    {
      title: "Competitor Analysis",
      description: "Track and analyze competitor pricing and inventory strategies",
      icon: "Users"
    },
    {
      title: "Performance Analytics",
      description: "Comprehensive dashboards to track all aspects of your business",
      icon: "BarChart"
    }
  ];

  return (
    <Layout fullWidth>
      {/* Hero Section - Full width with gradient background */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-950 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 lg:pr-8">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">
                Transform your dealership with 
                <span className="text-saas-blue block mt-2">AI-powered insights</span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-lg">
                Our platform helps car dealerships optimize inventory, match customers to vehicles, and increase profits through data-driven decisions.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Button size="lg" className="rounded-md" asChild>
                  <Link to="/demo" className="px-8">
                    Book a Demo
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="rounded-md group" asChild>
                  <Link to="/about" className="px-8 flex items-center">
                    <span>Learn more</span>
                    <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
              
              {/* Trust indicators */}
              <div className="hidden md:block">
                <p className="text-sm text-gray-500 mb-3">TRUSTED BY LEADING DEALERSHIPS</p>
                <div className="flex items-center space-x-6">
                  <div className="h-6 w-24 bg-gray-200 dark:bg-gray-700 rounded"></div>
                  <div className="h-6 w-24 bg-gray-200 dark:bg-gray-700 rounded"></div>
                  <div className="h-6 w-24 bg-gray-200 dark:bg-gray-700 rounded"></div>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-6 flex justify-center">
              <div className="relative w-full max-w-lg">
                {/* Main image with gradient border */}
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-saas-blue via-saas-gray to-saas-blue opacity-30 blur-md"></div>
                <div className="relative rounded-xl overflow-hidden shadow-2xl">
                  <img
                    src="/lovable-uploads/f054ab4a-f69e-4774-a1b0-f241ea7d4fb8.png"
                    alt="Dashboard Preview"
                    className="w-full h-auto"
                  />
                </div>
                
                {/* Floating stats card */}
                <div className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg max-w-[200px] animate-float">
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-saas-blue">40% Faster</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Inventory Turnover</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-1/4 right-0 w-64 h-64 bg-saas-blue/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-saas-gray/5 rounded-full blur-3xl"></div>
      </section>
      
      {/* What we offer section */}
      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-16">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-saas-blue/10 text-saas-blue text-sm font-medium mb-4">
              <span className="w-2 h-2 rounded-full bg-saas-blue mr-2"></span>
              What we offer
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">One platform to optimize your entire dealership</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl">
              Our comprehensive platform provides all the tools you need to make data-driven decisions
              and stay ahead of the competition.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature cards */}
            <Card className="bg-white dark:bg-gray-800 border-0 shadow-md hover:shadow-lg transition-shadow overflow-hidden">
              <div className="h-2 bg-saas-blue w-full"></div>
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-saas-blue/10 flex items-center justify-center mb-4">
                  <BarChart className="h-6 w-6 text-saas-blue" />
                </div>
                <h3 className="text-xl font-bold mb-2">Inventory Analytics</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Make smarter purchasing decisions based on market demand and historical sales data.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white dark:bg-gray-800 border-0 shadow-md hover:shadow-lg transition-shadow overflow-hidden">
              <div className="h-2 bg-saas-blue w-full"></div>
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-saas-blue/10 flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-saas-blue" />
                </div>
                <h3 className="text-xl font-bold mb-2">Customer Matching</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Connect the right customers to the right vehicles to increase closing rates.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white dark:bg-gray-800 border-0 shadow-md hover:shadow-lg transition-shadow overflow-hidden">
              <div className="h-2 bg-saas-blue w-full"></div>
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-saas-blue/10 flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-saas-blue" />
                </div>
                <h3 className="text-xl font-bold mb-2">Automated Follow-ups</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Never miss an opportunity with intelligent follow-up reminders and templates.
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline" className="rounded-md group" asChild>
              <Link to="/about" className="flex items-center justify-center">
                <span>View all features</span>
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* How it works section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-16">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-saas-blue/10 text-saas-blue text-sm font-medium mb-4">
              <span className="w-2 h-2 rounded-full bg-saas-blue mr-2"></span>
              How it works
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple steps to transform your dealership</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl">
              Our platform is designed to be intuitive and easy to use, so you can start seeing results right away.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-24 left-[20%] right-[20%] h-0.5 bg-saas-blue/30"></div>
            
            {/* Step 1 */}
            <div className="relative flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-saas-blue text-white flex items-center justify-center text-xl font-bold mb-6 relative z-10">
                1
              </div>
              <h3 className="text-xl font-bold mb-3">Connect your DMS</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Quick integration with your existing Dealership Management System.
              </p>
            </div>
            
            {/* Step 2 */}
            <div className="relative flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-saas-blue text-white flex items-center justify-center text-xl font-bold mb-6 relative z-10">
                2
              </div>
              <h3 className="text-xl font-bold mb-3">AI Analysis</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Our AI analyzes your inventory, market data, and customer preferences.
              </p>
            </div>
            
            {/* Step 3 */}
            <div className="relative flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-saas-blue text-white flex items-center justify-center text-xl font-bold mb-6 relative z-10">
                3
              </div>
              <h3 className="text-xl font-bold mb-3">Optimize & Grow</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Act on data-driven insights to increase sales and maximize profits.
              </p>
            </div>
          </div>
          
          <div className="mt-16 bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-4">See the platform in action</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Book a personalized demo to see how {COMPANY_NAME} can transform your dealership operations and boost your bottom line.
                </p>
                <Button className="w-full md:w-auto" asChild>
                  <Link to="/contact">
                    Schedule Demo
                  </Link>
                </Button>
              </div>
              <div className="bg-gray-100 dark:bg-gray-700 p-8 md:p-0 flex items-center justify-center">
                <img 
                  src="/placeholder.svg" 
                  alt="Platform Preview" 
                  className="max-w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Main feature section */}
      <FeatureSection 
        title="AI-Powered Features Designed for Car Dealerships" 
        subtitle="Everything you need to optimize your operation and drive more sales"
        features={features}
      />
      
      {/* Testimonials section */}
      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-16">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-saas-blue/10 text-saas-blue text-sm font-medium mb-4">
              <span className="w-2 h-2 rounded-full bg-saas-blue mr-2"></span>
              Success Stories
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted by dealerships nationwide</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl">
              See how auto dealerships across the country have transformed their business with our platform.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Testimonial 1 */}
            <Card className="bg-white dark:bg-gray-800 shadow-md border-0">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="text-saas-blue">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-lg">★</span>
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  "Since implementing this platform, our inventory turnover has increased by 35%. The AI recommendations for which vehicles to stock have been spot on."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 mr-3"></div>
                  <div>
                    <div className="font-semibold">Michael Rodriguez</div>
                    <div className="text-sm text-gray-500">California Motors</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Testimonial 2 */}
            <Card className="bg-white dark:bg-gray-800 shadow-md border-0">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="text-saas-blue">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-lg">★</span>
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  "The customer matching feature has completely transformed our sales approach. We're closing deals faster and customers are happier with their purchases."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 mr-3"></div>
                  <div>
                    <div className="font-semibold">Sarah Johnson</div>
                    <div className="text-sm text-gray-500">Prestige Auto Group</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Testimonial 3 */}
            <Card className="bg-white dark:bg-gray-800 shadow-md border-0">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="text-saas-blue">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-lg">★</span>
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  "The predictive analytics have given us a competitive edge in our market. We know what vehicles to stock before our competition does."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 mr-3"></div>
                  <div>
                    <div className="font-semibold">David Thompson</div>
                    <div className="text-sm text-gray-500">Elite Motors</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Stats section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center text-center p-6 rounded-lg bg-white dark:bg-gray-800 shadow-md">
              <div className="text-5xl font-bold text-saas-blue mb-2">40%</div>
              <p className="text-gray-600 dark:text-gray-300">Average Increase in Inventory Turnover</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 rounded-lg bg-white dark:bg-gray-800 shadow-md">
              <div className="text-5xl font-bold text-saas-blue mb-2">35%</div>
              <p className="text-gray-600 dark:text-gray-300">Higher Customer Satisfaction Scores</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 rounded-lg bg-white dark:bg-gray-800 shadow-md">
              <div className="text-5xl font-bold text-saas-blue mb-2">28%</div>
              <p className="text-gray-600 dark:text-gray-300">Average Increase in Annual Revenue</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Final CTA section */}
      <section className="py-20 bg-saas-blue text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to transform your dealership?</h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of dealerships already using our AI solutions to optimize inventory, match customers, and increase profits.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="bg-white text-saas-blue hover:bg-gray-100" asChild>
                <Link to="/signup">
                  Start Free Trial
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20" asChild>
                <Link to="/demo">
                  Schedule Demo
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
