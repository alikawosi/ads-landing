
import React from 'react';
import Layout from '../components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Bot, Car, Check, Search, Database, BarChart } from 'lucide-react';
import CTASection from '@/components/ui/cta-section';
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AutomatedSearch = () => {
  const carCards = [
    {
      make: "BMW",
      model: "M3 Competition",
      year: 2023,
      mileage: "15,000",
      price: 72000,
      estimatedPrice: 69000,
      priceTag: "high",
      difference: "+£3,000",
    },
    {
      make: "Mercedes-Benz",
      model: "C-Class",
      year: 2022,
      mileage: "25,000",
      price: 35000,
      estimatedPrice: 34500,
      priceTag: "fair",
      difference: "+£500",
    },
    {
      make: "Audi",
      model: "A4",
      year: 2021,
      mileage: "45,000",
      price: 22000,
      estimatedPrice: 24000,
      priceTag: "good",
      difference: "-£2,000",
    },
    {
      make: "Porsche",
      model: "911 Carrera",
      year: 2023,
      mileage: "5,000",
      price: 72000,
      estimatedPrice: 86000,
      priceTag: "good",
      difference: "+£14,000",
    },
    {
      make: "Tesla",
      model: "Model 3",
      year: 2022,
      mileage: "18,000",
      price: 42000,
      estimatedPrice: 41000,
      priceTag: "fair",
      difference: "+£1,000",
    },
  ];

  const getPriceTagVariant = (tag: string) => {
    switch (tag) {
      case "good":
        return "default"; // Using default badge variant for "good"
      case "fair":
        return "secondary"; // Using secondary badge variant for "fair"
      case "high":
        return "destructive"; // Using destructive badge variant for "high"
      default:
        return "default";
    }
  };

  return (
    <Layout>
      <div className="py-20 md:py-28">
        {/* Hero Section with Card Stack */}
        <section className="py-20 relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="flex-col text-center">
              <div className="relative">
                <div className="flex justify-center items-center relative top-32">
                  {carCards.map((car, index) => (
                    <Card
                      key={index}
                      className={`absolute w-full max-w-sm shadow-lg`}
                      style={{
                        transform: `translateX(${
                          index > carCards.length / 2
                            ? (index - Math.floor(carCards.length / 2)) * 100
                            : -index * 100
                        }px) rotate(${
                          index > carCards.length / 2
                            ? (index - Math.floor(carCards.length / 2)) * 8
                            : -index * 8
                        }deg)
                        translateY(${
                          index > carCards.length / 2
                            ? (index - Math.floor(carCards.length / 2)) * 48
                            : index * 48
                        }px)`,
                        zIndex: carCards.length - index,
                        animationDelay: `${
                          Math.abs(index - Math.floor(carCards.length / 2)) * 0.2
                        }s`,
                      }}
                    >
                      <CardHeader className="pb-2">
                        <div className="flex justify-between items-start">
                          <div className="space-y-1 text-left">
                            <CardTitle className="text-2xl font-bold">
                              {car.model}
                            </CardTitle>
                            <p className="text-muted-foreground text-sm">
                              {car.make}
                            </p>
                            <div className="text-muted-foreground text-sm mt-2">
                              <p>
                                {car.year} • {car.mileage} miles
                              </p>
                            </div>
                          </div>
                          <Badge
                            variant={getPriceTagVariant(car.priceTag)}
                            className="capitalize"
                          >
                            {car.priceTag} Price
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent className="pt-4">
                        <div className="border-t pt-3 mt-3 space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="text-muted-foreground text-sm">
                              Listed Price
                            </span>
                            <span className="font-semibold">
                              £{car.price.toLocaleString()}
                            </span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-muted-foreground text-sm">
                              Est. Value
                            </span>
                            <span className="font-semibold">
                              £{car.estimatedPrice.toLocaleString()}
                            </span>
                          </div>
                          <div className="flex justify-between items-center pt-2 border-t">
                            <span className="text-muted-foreground text-sm">
                              Difference
                            </span>
                            <span
                              className={`font-bold ${
                                car.difference.startsWith("+")
                                  ? "text-red-500"
                                  : "text-green-500"
                              }`}
                            >
                              {car.difference}
                            </span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
              <div className="relative mt-8 inset-0 pointer-events-none z-10 pt-60 bg-gradient-to-b from-transparent via-background/75 to-background">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 z-10 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                  Advanced Vehicle Data Analysis
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10">
                  Transform your automotive data processing with intelligent
                  automation and real-time insights
                </p>
                <div className="flex gap-4 justify-center">
                  <Link to="/signup">
                    <Button size="lg" className="group">
                      Start Free Trial
                      <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">How Automated Search Works</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Our AI-powered search agent scans thousands of listings to find the perfect car at the right price
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Search className="h-8 w-8 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3">1. Share Your Preferences</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Tell our AI what you're looking for - budget, make, model, features, and any other requirements
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Bot className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3">2. AI Does the Work</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Our intelligent agent searches thousands of listings and analyzes each one against your criteria
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Car className="h-8 w-8 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3">3. Get Personalized Results</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Receive a curated list of vehicles that match your preferences with price analysis and recommendations
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src="/lovable-uploads/f054ab4a-f69e-4774-a1b0-f241ea7d4fb8.png" 
                  alt="AI Car Search Interface" 
                  className="rounded-lg shadow-xl w-full"
                />
              </div>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-green-100 dark:bg-green-900 p-2 rounded-full">
                    <Check className="h-5 w-5 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Price Analysis</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Get detailed insights on whether a car is priced fairly, with market comparisons and historical data
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-green-100 dark:bg-green-900 p-2 rounded-full">
                    <Check className="h-5 w-5 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Natural Language Preferences</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Just tell our AI what you want in conversational language - no need to fill complex forms
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-green-100 dark:bg-green-900 p-2 rounded-full">
                    <Check className="h-5 w-5 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Customized Recommendations</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Our AI learns from your feedback to provide increasingly personalized car suggestions
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-green-100 dark:bg-green-900 p-2 rounded-full">
                    <Check className="h-5 w-5 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Negotiation Tips</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Get data-driven advice on how to negotiate the best possible price for your chosen vehicle
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="bg-gray-50 dark:bg-gray-900 py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white dark:bg-gray-800 p-8 md:p-10 rounded-xl shadow-lg">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="w-24 h-24 rounded-full overflow-hidden mx-auto md:mx-0">
                    <img 
                      src="/placeholder.svg" 
                      alt="User testimonial" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-lg text-gray-600 dark:text-gray-300 italic mb-6">
                      "Automated Search saved me countless hours of searching. I told the AI exactly what I wanted, and within minutes 
                      it found me three perfect matches. I ended up buying the second car on the list and saved $3,200 
                      because the AI identified it was priced below market value."
                    </p>
                    <div>
                      <h4 className="font-semibold">Michael Rodriguez</h4>
                      <p className="text-gray-500 dark:text-gray-400">Honda Civic Owner</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CTASection
          title="Ready to find your perfect car?"
          subtitle="Let our AI agent do the hard work for you"
          ctaText="Try Automated Search Now"
          ctaLink="/demo"
          backgroundClass="bg-gradient-to-r from-green-500 to-blue-600"
        />
      </div>
    </Layout>
  );
};

export default AutomatedSearch;
