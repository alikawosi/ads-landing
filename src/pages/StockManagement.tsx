
import React from 'react';
import Layout from '../components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, BarChart2, TrendingUp, PieChart } from 'lucide-react';
import CTASection from '@/components/ui/cta-section';

const StockManagement = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center mb-6">
              <Badge className="bg-blue-500 text-white text-sm px-3 py-1">Coming Soon</Badge>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Intelligent Stock Management Solution
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Transform your dealership's inventory management with AI-powered insights, real-time tracking, and predictive analytics.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" radius="lg" variant="default" asChild>
                <Link to="/contact" className="flex items-center gap-2">
                  Join Waitlist
                </Link>
              </Button>
              <Button size="lg" radius="lg" variant="outline" asChild>
                <Link to="/demo">Request Demo</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12 md:mb-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              Coming Soon to Transform Your Inventory Management
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Our comprehensive stock management solution is currently in development and will be available soon.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Feature 1 */}
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg border border-gray-100 dark:border-gray-700">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-4">
                <BarChart2 className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Real-time Inventory Tracking</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Track your inventory in real-time with advanced monitoring tools and get instant updates on stock levels.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg border border-gray-100 dark:border-gray-700">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-4">
                <TrendingUp className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Predictive Analytics</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Use AI-powered analytics to predict market trends and optimize your inventory for maximum profitability.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg border border-gray-100 dark:border-gray-700">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mb-4">
                <PieChart className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Comprehensive Reporting</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Generate detailed reports on inventory performance, turnover rates, and profit margins to inform your decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              Development Timeline
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Our stock management solution is currently in development. Here's our planned timeline:
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative space-y-8">
              {/* Timeline Line */}
              <div className="absolute left-4 top-5 bottom-5 w-0.5 bg-gray-300 dark:bg-gray-600"></div>
              
              {/* Phase 1 */}
              <div className="relative flex items-start">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-500 text-white mr-4 z-10">
                  <span className="text-sm font-bold">1</span>
                </div>
                <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow-sm">
                  <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">Research Phase</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    We're currently researching the best technologies and methodologies to ensure our solution meets the highest standards.
                  </p>
                  <div className="flex items-center mt-3 text-sm text-blue-600 dark:text-blue-400">
                    <CheckCircle className="h-4 w-4 mr-1" /> Completed
                  </div>
                </div>
              </div>

              {/* Phase 2 */}
              <div className="relative flex items-start">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-500 text-white mr-4 z-10">
                  <span className="text-sm font-bold">2</span>
                </div>
                <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow-sm">
                  <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">Development Phase</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Our engineering team is building the core functionality and designing the user interface for maximum usability.
                  </p>
                  <div className="flex items-center mt-3 text-sm text-amber-600 dark:text-amber-400">
                    <span className="w-2 h-2 bg-amber-500 rounded-full mr-1"></span> In Progress
                  </div>
                </div>
              </div>

              {/* Phase 3 */}
              <div className="relative flex items-start">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-300 dark:bg-gray-600 text-gray-700 dark:text-gray-300 mr-4 z-10">
                  <span className="text-sm font-bold">3</span>
                </div>
                <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow-sm">
                  <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">Beta Testing</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    We'll invite select dealerships to beta test the solution and provide feedback for improvements.
                  </p>
                  <div className="flex items-center mt-3 text-sm text-gray-500 dark:text-gray-400">
                    <span className="w-2 h-2 bg-gray-500 rounded-full mr-1"></span> Coming Q3 2025
                  </div>
                </div>
              </div>

              {/* Phase 4 */}
              <div className="relative flex items-start">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-300 dark:bg-gray-600 text-gray-700 dark:text-gray-300 mr-4 z-10">
                  <span className="text-sm font-bold">4</span>
                </div>
                <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow-sm">
                  <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">Official Launch</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    The full release of our Stock Management solution with all features and integrations.
                  </p>
                  <div className="flex items-center mt-3 text-sm text-gray-500 dark:text-gray-400">
                    <span className="w-2 h-2 bg-gray-500 rounded-full mr-1"></span> Expected Q4 2025
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection 
        title="Be the First to Know When We Launch"
        subtitle="Join our waitlist to receive updates and early access to our Stock Management solution."
        ctaText="Join Waitlist"
        ctaLink="/contact"
        backgroundClass="bg-saas-blue"
      />
    </Layout>
  );
};

export default StockManagement;
