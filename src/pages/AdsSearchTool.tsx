
import React from 'react';
import Layout from '../components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ChevronRight, Search, BarChart, Rocket } from 'lucide-react';

const AdsSearchTool = () => {
  return (
    <Layout>
      <div className="py-20 md:py-28">
        {/* Hero Section */}
        <section className="container mx-auto px-4 md:px-6 mb-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Advanced ADS Searching Tool
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Find the most relevant and high-converting ads for your business with our powerful search engine
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/demo">Book a Demo</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/contact">Contact Sales</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-gray-50 dark:bg-gray-900 py-16">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Search className="text-blue-600 dark:text-blue-300" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Intelligent Search</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Our AI-powered search algorithm finds the most relevant ads based on your criteria.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <div className="bg-green-100 dark:bg-green-900 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <BarChart className="text-green-600 dark:text-green-300" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Performance Analytics</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Track and analyze the performance of ads with detailed reports and insights.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <div className="bg-purple-100 dark:bg-purple-900 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Rocket className="text-purple-600 dark:text-purple-300" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Competitor Analysis</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Gain insights into your competitors' advertising strategies and performance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 md:px-6 py-16">
          <div className="bg-saas-blue text-white rounded-xl p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to upgrade your ads search?</h2>
              <p className="text-xl mb-8">
                Get access to our powerful ADS Searching Tool and start finding the most effective ads for your business.
              </p>
              <Button size="lg" variant="secondary" className="bg-white text-saas-blue hover:bg-gray-100" asChild>
                <Link to="/demo">
                  Schedule a Demo <ChevronRight className="ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default AdsSearchTool;
