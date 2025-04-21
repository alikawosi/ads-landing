
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, BarChart, Target, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const WhatWeOfferSection = () => (
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
);

export default WhatWeOfferSection;
