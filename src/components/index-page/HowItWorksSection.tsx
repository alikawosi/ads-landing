
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { COMPANY_NAME } from "@/constants";

const HowItWorksSection = () => (
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
        <div className="hidden md:block absolute top-24 left-[20%] right-[20%] h-0.5 bg-saas-blue/30"></div>
        <div className="relative flex flex-col items-center text-center">
          <div className="w-12 h-12 rounded-full bg-saas-blue text-white flex items-center justify-center text-xl font-bold mb-6 relative z-10">1</div>
          <h3 className="text-xl font-bold mb-3">Connect your DMS</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Quick integration with your existing Dealership Management System.
          </p>
        </div>
        <div className="relative flex flex-col items-center text-center">
          <div className="w-12 h-12 rounded-full bg-saas-blue text-white flex items-center justify-center text-xl font-bold mb-6 relative z-10">2</div>
          <h3 className="text-xl font-bold mb-3">AI Analysis</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Our AI analyzes your inventory, market data, and customer preferences.
          </p>
        </div>
        <div className="relative flex flex-col items-center text-center">
          <div className="w-12 h-12 rounded-full bg-saas-blue text-white flex items-center justify-center text-xl font-bold mb-6 relative z-10">3</div>
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
);

export default HowItWorksSection;
