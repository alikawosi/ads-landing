
import React from 'react';
import Layout from '../components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ChevronRight, BarChart2, Target, Zap } from 'lucide-react';

const MarketingTool = () => {
  return (
    <Layout>
      <div className="py-20 md:py-28">
        {/* Hero Section */}
        <section className="container mx-auto px-4 md:px-6 mb-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Marketing Solution
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Streamline your marketing operations with our comprehensive platform designed for growth
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
              <div className="bg-white dark:bg-gray-800 p-6 rounded-[12px] shadow-md">
                <div className="bg-indigo-100 dark:bg-indigo-900 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Target className="text-indigo-600 dark:text-indigo-300" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Campaign Management</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Plan, execute, and track your marketing campaigns from a single dashboard.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-[12px] shadow-md">
                <div className="bg-pink-100 dark:bg-pink-900 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Zap className="text-pink-600 dark:text-pink-300" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Automation</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Automate repetitive tasks and focus on strategic initiatives that drive growth.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-[12px] shadow-md">
                <div className="bg-orange-100 dark:bg-orange-900 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <BarChart2 className="text-orange-600 dark:text-orange-300" />
                </div>
                <h3 className="text-xl font-semibold mb-3">ROI Analysis</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Measure the effectiveness of your marketing efforts with detailed ROI reports.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 md:px-6 py-16">
          <div className="bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-[12px] p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Transform your marketing strategy</h2>
              <p className="text-xl mb-8">
                Join thousands of businesses that have improved their marketing performance with our tool.
              </p>
              <Button size="lg" variant="secondary" className="bg-white text-purple-600 hover:bg-gray-100" asChild>
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

export default MarketingTool;
