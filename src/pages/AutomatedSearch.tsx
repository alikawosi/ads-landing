
import React from 'react';
import Layout from '../components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Bot, Car, Check, Search, Database, BarChart, TrendingUp, CheckCircle, AlertTriangle, ExternalLink } from 'lucide-react';
import CTASection from '@/components/ui/cta-section';
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableHeader, TableBody, TableHead, TableRow, TableCell } from "@/components/ui/table";

const AutomatedSearch = () => {
  // Updated sample car data with more fields to match the table design
  const rawCarData = [
    {
      id: 1,
      name: "BMW M3 Competition",
      year: 2023,
      mileage: 15000,
      price: 72000,
      estimated_value: 69000,
      price_tag: "high" as const,
      image_url: "/placeholder.svg",
      link: "https://example.com/bmw-m3"
    },
    {
      id: 2,
      name: "Mercedes-Benz C-Class",
      year: 2022,
      mileage: 25000,
      price: 35000,
      estimated_value: 34500,
      price_tag: "fair" as const,
      image_url: "/placeholder.svg",
      link: "https://example.com/mercedes-c"
    },
    {
      id: 3,
      name: "Audi A4",
      year: 2021,
      mileage: 45000,
      price: 22000,
      estimated_value: 24000,
      price_tag: "good" as const,
      image_url: "/placeholder.svg",
      link: "https://example.com/audi-a4"
    },
    {
      id: 4,
      name: "Porsche 911 Carrera",
      year: 2023,
      mileage: 5000,
      price: 72000,
      estimated_value: 86000,
      price_tag: "good" as const,
      image_url: "/placeholder.svg",
      link: "https://example.com/porsche-911"
    },
  ];

  // Sort car data: good first, then fair, then high
  const carData = [...rawCarData].sort((a, b) => {
    const priceTagOrder = { good: 0, fair: 1, high: 2 };
    return priceTagOrder[a.price_tag] - priceTagOrder[b.price_tag];
  });

  // Helper functions for the table
  const formatPrice = (price) => {
    return `£${price.toLocaleString()}`;
  };

  const calculateDifference = (listedPrice, estimatedValue) => {
    if (!listedPrice || !estimatedValue) return null;
    
    const diff = estimatedValue - listedPrice;
    const percentage = (Math.abs(diff) / estimatedValue) * 100;
    const isGoodDeal = diff > 0;
    const isFairDeal = Math.abs(percentage) < 5;
    
    return {
      diff,
      percentage,
      isGoodDeal,
      isFairDeal
    };
  };

  const getPriceTagBadge = (tag) => {
    let variant: "default" | "secondary" | "destructive" | "outline" = "default";
    let className = "";
    
    switch (tag) {
      case "good":
        variant = "default";
        className = "bg-green-500 hover:bg-green-600 text-white";
        break;
      case "fair":
        variant = "secondary"; 
        className = "bg-amber-200 hover:bg-amber-300 text-amber-900";
        break;
      case "high":
        variant = "destructive";
        break;
      default:
        variant = "outline";
    }
    
    return (
      <Badge variant={variant} className={`capitalize ${className}`}>
        {tag} price
      </Badge>
    );
  };

  return (
    <Layout>
      <div className="py-20 md:py-28">
        {/* Updated Hero Section with table layout */}
        <section className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950 relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-4 space-y-6 z-10">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                  <span className="w-2 h-2 rounded-full bg-primary mr-2"></span>
                  AI-Powered Vehicle Analysis
                </div>
                <h1 className="text-4xl md:text-6xl font-bold">
                  Advanced Vehicle Data Analysis
                </h1>
                <p className="text-xl text-muted-foreground">
                  Transform your automotive data processing with intelligent automation and real-time insights
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="group" asChild>
                    <Link to="/signup">
                      Start Driving
                      <Car className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link to="/demo">Book Test Drive!</Link>
                  </Button>
                </div>
              </div>
              
              <div className="lg:col-span-8 mt-10 lg:mt-0">
                <Card className="w-full border-0 shadow-sm">
                  <CardContent className="pt-4">
                    <Table>
                      <TableBody>
                        {carData.map((car) => {
                          const difference = calculateDifference(
                            car.price,
                            car.estimated_value
                          );
                          return (
                            <TableRow key={car.id}>
                              <TableCell>
                                <div className="flex items-center gap-3">
                                  {car.image_url && (
                                    <img
                                      src={car.image_url}
                                      alt={car.name || "Car"}
                                      className="w-10 h-10 object-cover rounded-md"
                                    />
                                  )}
                                  <div>
                                    <p className="font-medium text-sm">
                                      {car.name || "Unknown"}
                                    </p>
                                    <p className="text-xs text-muted-foreground">
                                      {car.year && `${car.year} • `}
                                      {car.mileage &&
                                        `${car.mileage.toLocaleString()} miles`}
                                    </p>
                                  </div>
                                </div>
                              </TableCell>
                              <TableCell className="text-sm">{formatPrice(car.price)}</TableCell>
                              <TableCell className="text-sm">
                                {car.estimated_value ? (
                                  formatPrice(car.estimated_value)
                                ) : (
                                  <span className="text-muted-foreground">
                                    Not processed
                                  </span>
                                )}
                              </TableCell>
                              <TableCell>
                                {difference ? (
                                  <div className="flex items-center gap-2">
                                    <Badge
                                      variant={
                                        difference.isGoodDeal
                                          ? "default"
                                          : difference.isFairDeal
                                          ? "secondary"
                                          : "destructive"
                                      }
                                      className={
                                        difference.isFairDeal
                                          ? "bg-amber-200 text-amber-900 hover:bg-amber-300"
                                          : ""
                                      }
                                    >
                                      {difference.isGoodDeal ? (
                                        <CheckCircle className="h-3.5 w-3.5 mr-1" />
                                      ) : (
                                        <AlertTriangle className="h-3.5 w-3.5 mr-1" />
                                      )}
                                      {difference.percentage.toFixed(1)}%
                                    </Badge>
                                    <span
                                      className={
                                        difference.isGoodDeal
                                          ? "text-green-600"
                                          : difference.isFairDeal
                                          ? "text-amber-600"
                                          : "text-red-600"
                                      }
                                    >
                                      {difference.diff > 0 ? "+" : ""}£
                                      {Math.abs(difference.diff).toLocaleString()}
                                    </span>
                                  </div>
                                ) : (
                                  <span className="text-muted-foreground">N/A</span>
                                )}
                              </TableCell>
                              <TableCell>{getPriceTagBadge(car.price_tag)}</TableCell>
                              <TableCell className="text-right">
                                <div className="flex justify-end">
                                  {car.link && (
                                    <Button variant="ghost" size="sm" asChild>
                                      <a
                                        href={car.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                      >
                                        <ExternalLink className="h-4 w-4 mr-1" />
                                        View
                                      </a>
                                    </Button>
                                  )}
                                </div>
                              </TableCell>
                            </TableRow>
                          );
                        })}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
                
                {/* Decorative elements */}
                <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10"></div>
                <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10"></div>
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
