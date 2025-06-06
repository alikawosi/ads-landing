import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  BarChart,
  Bot,
  Contact,
  PhoneCall,
  Target,
  Zap,
} from "lucide-react";
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
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          AI-powered tools to supercharge your car dealership
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl">
          Our intelligent platform uses AI to streamline your workflow — from
          sourcing cars to evaluating them and connecting with sellers
          instantly.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <Card className="bg-white dark:bg-gray-800 border-0 shadow-md hover:shadow-lg transition-shadow overflow-hidden">
          <div className="h-2 bg-saas-blue w-full"></div>
          <CardContent className="p-6">
            <div className="w-12 h-12 rounded-full bg-saas-blue/10 flex items-center justify-center mb-4">
              <BarChart className="h-6 w-6 text-saas-blue" />
            </div>
            <h3 className="text-xl font-bold mb-2">AI Valuation</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Instantly get smart, market-aware car valuations powered by
              machine learning.
            </p>
          </CardContent>
        </Card>
        <Card className="bg-white dark:bg-gray-800 border-0 shadow-md hover:shadow-lg transition-shadow overflow-hidden">
          <div className="h-2 bg-saas-blue w-full"></div>
          <CardContent className="p-6">
            <div className="w-12 h-12 rounded-full bg-saas-blue/10 flex items-center justify-center mb-4">
              <Bot className="h-6 w-6 text-saas-blue" />
            </div>
            <h3 className="text-xl font-bold mb-2">Smart Car Search</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Use AI to search listings from multiple sources and find the best
              matches based on your preferences.
            </p>
          </CardContent>
        </Card>
        <Card className="bg-white dark:bg-gray-800 border-0 shadow-md hover:shadow-lg transition-shadow overflow-hidden">
          <div className="h-2 bg-saas-blue w-full"></div>
          <CardContent className="p-6">
            <div className="w-12 h-12 rounded-full bg-saas-blue/10 flex items-center justify-center mb-4">
              <PhoneCall className="h-6 w-6 text-saas-blue" />
            </div>
            <h3 className="text-xl font-bold mb-2">Direct Contact</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Get connected faster with intelligent lead handling and direct
              outreach to car owners.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
);

export default WhatWeOfferSection;
