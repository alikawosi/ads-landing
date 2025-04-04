
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, BarChart, Users, PieChart, ShieldCheck, Car, Target } from 'lucide-react';
import { COMPANY_NAME, TAGLINE, FEATURES } from '@/constants';

const Index = () => {
  return (
    <Layout>
      {/* Hero Section - Asymmetric layout with stats and visuals */}
      <section className="relative pt-20 pb-16 md:py-28 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="z-10">
              <div className="inline-flex items-center px-3 py-1 mb-6 rounded-full bg-saas-blue/10 text-saas-blue text-sm font-medium">
                <span className="w-2 h-2 rounded-full bg-saas-blue mr-2"></span>
                Revolutionizing Car Dealerships
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
                {COMPANY_NAME} makes it <br className="hidden md:block" />
                <span className="text-saas-blue">easier to grow</span> your dealership.
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-lg">
                {TAGLINE} Transform how you sell cars with AI-powered insights and automation.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Button size="lg" className="rounded-full" asChild>
                  <Link to="/signup" className="px-8">
                    Book a Demo
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="rounded-full group" asChild>
                  <Link to="/about" className="px-8">
                    <span>See how it works</span>
                    <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-saas-blue/5 rounded-2xl"></div>
              
              {/* Stats Card */}
              <div className="absolute top-10 right-0 md:right-10 animate-float">
                <Card className="shadow-lg border-0 bg-white dark:bg-gray-800 p-4 w-56 rounded-xl">
                  <CardContent className="p-0">
                    <div className="text-center p-2">
                      <h3 className="text-4xl font-bold text-saas-blue">$1,292,571</h3>
                      <p className="text-gray-500 text-sm mt-1">TOTAL REVENUE INCREASE</p>
                    </div>
                    <div className="flex h-16 items-end justify-between px-2">
                      {[40, 65, 45, 80, 55, 70, 50, 75, 60].map((height, i) => (
                        <div 
                          key={i} 
                          className="w-2 rounded-t-sm bg-gradient-to-t from-saas-gray/40 to-saas-blue/80"
                          style={{ height: `${height}%` }}
                        ></div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              {/* Performance Card */}
              <div className="absolute bottom-0 md:bottom-10 left-10 animate-float" style={{ animationDelay: '0.5s' }}>
                <Card className="shadow-lg border-0 bg-gray-900 text-white p-4 w-44 rounded-xl">
                  <CardContent className="p-0">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-xs text-gray-400">Performance</span>
                    </div>
                    <div className="relative h-24 flex items-center justify-center">
                      <div className="w-20 h-20 rounded-full border-4 border-saas-blue/30 relative">
                        <svg className="w-full h-full" viewBox="0 0 100 100">
                          <circle 
                            cx="50" cy="50" r="38" 
                            fill="none" 
                            stroke="currentColor" 
                            strokeWidth="12" 
                            strokeDasharray="239.56" 
                            strokeDashoffset="58.7" 
                            className="text-saas-blue animate-pulse"
                            transform="rotate(-90 50 50)"
                          />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center text-xl font-bold">
                          82%
                        </div>
                      </div>
                    </div>
                    <div className="text-center text-gray-400 text-xs mt-1">
                      Transactions optimization
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              {/* Dashboard mockup */}
              <div className="relative mx-auto max-w-md w-full">
                <div className="bg-gradient-to-tr from-saas-blue/80 to-gray-900 rounded-2xl p-1 shadow-2xl">
                  <div className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden">
                    <img
                      src="/lovable-uploads/f054ab4a-f69e-4774-a1b0-f241ea7d4fb8.png"
                      alt="Dashboard Preview"
                      className="w-full h-auto rounded-lg shadow-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Background decorative elements */}
        <div className="absolute top-1/4 right-0 w-64 h-64 bg-saas-blue/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-saas-gray/5 rounded-full blur-3xl"></div>
      </section>
      
      {/* Key metrics section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
            <div className="flex flex-col items-center text-center p-6 rounded-xl bg-white dark:bg-gray-800 shadow-sm border border-gray-100 dark:border-gray-700">
              <div className="text-5xl font-bold text-saas-blue mb-2">40%</div>
              <p className="text-gray-600 dark:text-gray-300">Faster Inventory Turnover</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 rounded-xl bg-white dark:bg-gray-800 shadow-sm border border-gray-100 dark:border-gray-700">
              <div className="text-5xl font-bold text-saas-blue mb-2">20K<span className="text-xl align-text-top">+</span></div>
              <p className="text-gray-600 dark:text-gray-300">Dealerships Trust Us</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 rounded-xl bg-white dark:bg-gray-800 shadow-sm border border-gray-100 dark:border-gray-700">
              <div className="text-5xl font-bold text-saas-blue mb-2">$3.2M</div>
              <p className="text-gray-600 dark:text-gray-300">Average Annual Sales Growth</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features section with asymmetric layout */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">AI-Powered Solutions Designed Specifically for Car Dealerships</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">Our advanced features help you make data-driven decisions and optimize your entire operation.</p>
          </div>
          
          {/* Feature grid with alternating layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            {/* Feature item 1 */}
            <div className="relative">
              <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-saas-blue via-saas-gray to-saas-blue opacity-30 blur"></div>
              <div className="relative bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                <div className="w-14 h-14 rounded-full bg-saas-blue/10 flex items-center justify-center mb-6">
                  <Car className="h-7 w-7 text-saas-blue" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Inventory Optimization</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Our AI analyzes market trends and customer preferences to recommend the optimal inventory mix, helping you stock what sells faster.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="h-6 w-6 rounded-full bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 flex items-center justify-center mr-2 mt-1">✓</span>
                    <span>Reduce average days to sell by 40%</span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-6 w-6 rounded-full bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 flex items-center justify-center mr-2 mt-1">✓</span>
                    <span>Optimize pricing based on market data</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Feature item 2 */}
            <div className="relative mt-10 lg:mt-20">
              <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-saas-blue via-saas-gray to-saas-blue opacity-30 blur"></div>
              <div className="relative bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                <div className="w-14 h-14 rounded-full bg-saas-blue/10 flex items-center justify-center mb-6">
                  <Target className="h-7 w-7 text-saas-blue" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Customer Matching</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Match the right vehicles to the right customers with our AI-powered recommendation engine based on customer behavior patterns.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="h-6 w-6 rounded-full bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 flex items-center justify-center mr-2 mt-1">✓</span>
                    <span>Increase closing rates by 35%</span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-6 w-6 rounded-full bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 flex items-center justify-center mr-2 mt-1">✓</span>
                    <span>Personalized vehicle recommendations</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Integration Showcase */}
          <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h3 className="text-2xl font-bold mb-4">Seamless Integration</h3>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
                Our platform integrates with your existing dealership management systems - no complex setup required.
              </p>
              <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-100 dark:border-gray-700">
                <p className="text-gray-600 dark:text-gray-300">
                  "Our team will help you choose the type of connection and select the payment functionality that meets your current needs."
                </p>
                <div className="mt-4 flex items-center">
                  <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 mr-3"></div>
                  <div>
                    <div className="font-semibold">John Stevens</div>
                    <div className="text-sm text-gray-500">Integration Specialist</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-tr from-saas-blue/20 to-transparent rounded-2xl blur-lg"></div>
                <img 
                  src="/placeholder.svg" 
                  alt="Integration" 
                  className="relative rounded-lg shadow-lg mx-auto"
                />
                <div className="absolute -bottom-4 -right-4 bg-white dark:bg-gray-800 p-3 rounded-lg shadow-lg">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm font-medium">Compatible with 30+ CRMs</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonial Section with curved design */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted by Dealerships Nationwide</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">See what our customers have to say about us</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-100 dark:border-gray-700">
              <div className="flex items-center mb-4">
                <div className="text-saas-blue">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-xl">★</span>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                "AutoAI's inventory optimization has completely transformed our business. We're selling cars faster and at better margins."
              </p>
              <div className="flex items-center mt-6">
                <div className="w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-700 mr-4"></div>
                <div>
                  <div className="font-semibold">Michael Rodriguez</div>
                  <div className="text-sm text-gray-500">California Motors</div>
                </div>
              </div>
            </div>
            
            {/* Testimonial 2 */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-100 dark:border-gray-700">
              <div className="flex items-center mb-4">
                <div className="text-saas-blue">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-xl">★</span>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                "The predictive analytics have given us insights we never had before. We can anticipate market trends months in advance."
              </p>
              <div className="flex items-center mt-6">
                <div className="w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-700 mr-4"></div>
                <div>
                  <div className="font-semibold">Sarah Johnson</div>
                  <div className="text-sm text-gray-500">Prestige Auto Group</div>
                </div>
              </div>
            </div>
            
            {/* Testimonial 3 */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-100 dark:border-gray-700">
              <div className="flex items-center mb-4">
                <div className="text-saas-blue">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-xl">★</span>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                "Customer matching feature has increased our closing rate by 40%. The system knows what cars to show to which customers."
              </p>
              <div className="flex items-center mt-6">
                <div className="w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-700 mr-4"></div>
                <div>
                  <div className="font-semibold">David Thompson</div>
                  <div className="text-sm text-gray-500">Elite Motors</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute left-0 right-0 bottom-0 h-16 bg-gray-50 dark:bg-gray-950 transform -skew-y-1"></div>
      </section>
      
      {/* CTA section with gradient background */}
      <section className="py-20 bg-gradient-to-r from-saas-blue to-saas-blue/80 text-white relative">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Dealership?</h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of dealerships already using our AI solutions to optimize inventory, match customers, and increase profits.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="bg-white text-saas-blue hover:bg-gray-100 rounded-full px-8" asChild>
                <Link to="/signup">Start Free Trial</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20 rounded-full px-8" asChild>
                <Link to="/contact">Schedule Demo</Link>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-white/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-xl"></div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
