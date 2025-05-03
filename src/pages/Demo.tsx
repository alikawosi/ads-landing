import React from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, CheckCircle2, Clock, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { CALENDAR_BOOKING_URL, COMPANY_NAME } from "@/constants";
import CarCard from "@/components/ui/car-card";

// Calendar booking URL

const Demo = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-saas-blue/10 text-saas-blue text-sm font-medium mb-4">
                <span className="w-2 h-2 rounded-full bg-saas-blue mr-2"></span>
                Schedule a Personalized Demo
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                See how {COMPANY_NAME} can transform your dealership
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                Join thousands of dealerships already using our AI-powered
                platform to optimize inventory, match customers to vehicles, and
                increase profits through data-driven decisions.
              </p>

              <Button
                size="lg"
                className="rounded-md group"
                onClick={() => window.open(CALENDAR_BOOKING_URL, "_blank")}
              >
                <Calendar className="mr-2 h-5 w-5" />
                Book Your Demo Now
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            <div className="relative">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-saas-blue via-saas-gray to-saas-blue opacity-30 blur-md"></div>
              <div className="relative p-1 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl">
                <img
                  src="/lovable-uploads/f054ab4a-f69e-4774-a1b0-f241ea7d4fb8.png"
                  alt="Dashboard Preview"
                  className="rounded-xl w-full"
                />

                {/* Floating stats card */}
                <div className="absolute -top-6 -right-6 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg w-48 animate-float">
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mr-4">
                      <CheckCircle2 className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Revenue Increase</p>
                      <p className="text-xl font-bold text-green-600">+28%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll See in the Demo */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-saas-blue/10 text-saas-blue text-sm font-medium mb-4">
              <span className="w-2 h-2 rounded-full bg-saas-blue mr-2"></span>
              What You'll See
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Explore Our Platform Features
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              During the demo, our product specialist will walk you through
              these key features and show you how they can benefit your
              dealership.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white dark:bg-gray-800 shadow-md border-0">
              <div className="h-2 bg-saas-blue w-full"></div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Inventory Analytics</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 dark:text-gray-300">
                      AI-powered inventory optimization
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 dark:text-gray-300">
                      Market demand forecasting
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 dark:text-gray-300">
                      Price prediction models
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white dark:bg-gray-800 shadow-md border-0">
              <div className="h-2 bg-saas-blue w-full"></div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Customer Matching</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 dark:text-gray-300">
                      Preference-based matching
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 dark:text-gray-300">
                      Lead qualification scoring
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 dark:text-gray-300">
                      Automated follow-up system
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white dark:bg-gray-800 shadow-md border-0">
              <div className="h-2 bg-saas-blue w-full"></div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">
                  Performance Analytics
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 dark:text-gray-300">
                      Real-time sales dashboards
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 dark:text-gray-300">
                      Competitor analysis tools
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 dark:text-gray-300">
                      ROI reporting and forecasts
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-16 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-saas-blue/10 text-saas-blue text-sm font-medium mb-4">
              <span className="w-2 h-2 rounded-full bg-saas-blue mr-2"></span>
              What to Expect
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Your Demo Experience
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg">
              <div className="w-12 h-12 bg-saas-blue/10 rounded-full flex items-center justify-center mb-4">
                <Clock className="h-6 w-6 text-saas-blue" />
              </div>
              <h3 className="text-xl font-bold mb-2">30-Minute Session</h3>
              <p className="text-gray-600 dark:text-gray-300">
                A focused walkthrough of our platform tailored to your
                dealership's specific needs.
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg">
              <div className="w-12 h-12 bg-saas-blue/10 rounded-full flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-saas-blue" />
              </div>
              <h3 className="text-xl font-bold mb-2">Expert Guidance</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Presentation by a product specialist who understands the auto
                dealership industry.
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg">
              <div className="w-12 h-12 bg-saas-blue/10 rounded-full flex items-center justify-center mb-4">
                <CheckCircle2 className="h-6 w-6 text-saas-blue" />
              </div>
              <h3 className="text-xl font-bold mb-2">Custom Analysis</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Get insights on how our tools can address your specific
                challenges and opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Example Results */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-saas-blue/10 text-saas-blue text-sm font-medium mb-4">
              <span className="w-2 h-2 rounded-full bg-saas-blue mr-2"></span>
              Real Results
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Proven Success with Dealerships
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              See examples of how our platform has transformed other
              dealerships.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white dark:bg-gray-800 shadow-md border-0">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="text-saas-blue">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-lg">
                        ★
                      </span>
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  "After implementing the AI inventory optimization, we've seen
                  a 35% increase in inventory turnover and 28% boost in gross
                  profit."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 mr-3"></div>
                  <div>
                    <div className="font-semibold">Michael Rodriguez</div>
                    <div className="text-sm text-gray-500">
                      California Motors
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white dark:bg-gray-800 shadow-md border-0">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="text-saas-blue">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-lg">
                        ★
                      </span>
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  "The customer matching system has helped us increase our
                  closing rate by 40% while reducing the time from first contact
                  to sale."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 mr-3"></div>
                  <div>
                    <div className="font-semibold">Sarah Johnson</div>
                    <div className="text-sm text-gray-500">
                      Prestige Auto Group
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white dark:bg-gray-800 shadow-md border-0">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="text-saas-blue">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-lg">
                        ★
                      </span>
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  "We've reduced our marketing spend by 30% while increasing
                  lead quality. The ROI on this platform has been exceptional."
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

      {/* Final CTA */}
      <section className="py-16 md:py-20 bg-saas-blue">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Ready to transform your dealership?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Schedule your personalized demo today and see how our AI-powered
              platform can help you sell more cars and increase your profits.
            </p>

            <Button
              size="lg"
              className="bg-white text-saas-blue hover:bg-gray-100"
              onClick={() => window.open(CALENDAR_BOOKING_URL, "_blank")}
            >
              <Calendar className="mr-2 h-5 w-5" />
              Book Your Demo Now
            </Button>

            <p className="mt-6 text-white/80 text-sm">
              30-minute personalized session • No obligation • See real results
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Demo;
