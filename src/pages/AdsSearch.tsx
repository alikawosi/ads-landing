import React, { useState, useEffect } from "react";
import Layout from "../components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Search,
  Database,
  Globe,
  ChevronRight,
  Car,
} from "lucide-react";
import CTASection from "@/components/ui/cta-section";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import CarCascadeCard from "@/components/ui/CarCascadeCard";
import { EXTERNAL_APP_URL } from "@/constants";

const AdsSearch = () => {
  const adListings = [
    {
      make: "BMW",
      model: "X5",
      year: 2023,
      source: "Autotrader",
      price: 65000,
      location: "London",
      sellerType: "Private",
      priceTag: "fair",
      posting: "2 days ago",
    },
    {
      make: "Audi",
      model: "Q7",
      year: 2022,
      source: "Gumtree",
      price: 58000,
      location: "Manchester",
      sellerType: "Private",
      priceTag: "good",
      posting: "5 days ago",
    },
    {
      make: "Mercedes-Benz",
      model: "GLE",
      year: 2021,
      source: "Motors.co.uk",
      price: 45000,
      location: "Birmingham",
      sellerType: "Dealer",
      priceTag: "high",
      posting: "1 day ago",
    },
    {
      make: "Volkswagen",
      model: "Tiguan",
      year: 2023,
      source: "Motors.co.uk",
      price: 32000,
      location: "Leeds",
      sellerType: "Private",
      priceTag: "good",
      posting: "3 days ago",
    },
    {
      make: "Toyota",
      model: "Land Cruiser",
      year: 2022,
      source: "Auto Trader",
      price: 52000,
      location: "Glasgow",
      sellerType: "Dealer",
      priceTag: "fair",
      posting: "Just posted",
    },
  ];

  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveCardIndex((prev) => (prev + 1) % adListings.length);
        setIsAnimating(false);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, [adListings.length]);

  const getPriceTagVariant = (tag: string) => {
    switch (tag) {
      case "good":
        return "success"; // Using default badge variant for "good"
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
        {/* Hero Section with Interactive Cards */}
        <section className="py-20 relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
              <div className="lg:w-1/2 text-center lg:text-left">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                  Find Your Perfect Car Across Every Platform
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground mb-10">
                  One search to rule them all - access AutoTrader, Gumtree,
                  Motors.co.uk and more with a single click
                </p>
                <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                  <a
                    href={EXTERNAL_APP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button size="lg">
                      Start Driving
                      <Car className="ml-2" />
                    </Button>
                  </a>
                  <Link to="/demo">
                    <Button size="lg" variant="outline">
                      Book Demo
                    </Button>
                  </Link>
                </div>

                <div className="mt-8 flex items-center gap-4 justify-center lg:justify-start">
                  <div className="flex -space-x-4">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center border-2 border-white"
                      >
                        <span className="text-xs text-primary font-bold">
                          {i}+
                        </span>
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    <span className="font-bold">5,000+</span> cars found today
                  </p>
                </div>
              </div>

              <div className="lg:w-1/2 relative h-[500px]">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl" />

                <div className="relative w-full h-full flex items-center justify-center">
                  {adListings.map((listing, index) => (
                    <div
                      key={index}
                      className={`absolute transition-all duration-700 ease-in-out ${
                        index === activeCardIndex
                          ? "opacity-100 z-30 scale-100 translate-y-0"
                          : index === (activeCardIndex + 1) % adListings.length
                          ? "opacity-70 z-20 scale-95 translate-y-8 translate-x-8"
                          : index === (activeCardIndex + 2) % adListings.length
                          ? "opacity-40 z-10 scale-90 translate-y-16 translate-x-16"
                          : "opacity-0 scale-85 -translate-y-8 -translate-x-8"
                      }`}
                    >
                      <Card className="w-full max-w-md shadow-xl hover:shadow-2xl transition-all bg-white">
                        <CardHeader className="pb-2">
                          <div className="flex justify-between items-start">
                            <div className="space-y-1 text-left">
                              <CardTitle className="text-2xl font-bold">
                                {listing.model}
                              </CardTitle>
                              <p className="text-muted-foreground text-sm">
                                {listing.make}
                              </p>
                              <div className="text-muted-foreground text-sm mt-2">
                                <p>
                                  {listing.year} • {listing.source}
                                </p>
                              </div>
                            </div>
                            <Badge
                              variant={getPriceTagVariant(listing.priceTag)}
                              className={`capitalize text-xs font-semibold `}
                            >
                              {listing.priceTag} Deal
                            </Badge>
                          </div>
                        </CardHeader>
                        <CardContent className="pt-4">
                          <div className="border-t pt-3 mt-3 space-y-2">
                            <div className="flex justify-between items-center">
                              <span className="text-muted-foreground text-sm">
                                Price
                              </span>
                              <span className="font-semibold">
                                £{listing.price.toLocaleString()}
                              </span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-muted-foreground text-sm">
                                Location
                              </span>
                              <span className="font-semibold">
                                {listing.location}
                              </span>
                            </div>
                            <div className="flex justify-between items-center pt-2 border-t">
                              <span className="text-muted-foreground text-sm">
                                Seller
                              </span>
                              <span className="font-bold">
                                {listing.sellerType}
                              </span>
                            </div>
                            <div className="flex justify-between items-center pt-1">
                              <span className="text-muted-foreground text-sm">
                                Posted
                              </span>
                              <span className="text-sm text-blue-500">
                                {listing.posting}
                              </span>
                            </div>
                          </div>
                          <div className="mt-4 pt-2 border-t">
                            <Button className="w-full group">
                              View Listing
                              <ArrowRight className="ml-1 group-hover:translate-x-1 transition-transform" />
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section
          id="how-it-works"
          className="py-16 bg-gray-50 dark:bg-gray-900"
        >
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">How ADS Search Works</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Our platform aggregates listings from all major automotive
                marketplaces to give you the most comprehensive view of
                available vehicles
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Search className="h-8 w-8 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  1. Set Your Parameters
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Enter your search criteria including make, model, year range,
                  price range, and location preferences
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Database className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  2. We Search Everything
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Our system instantly queries multiple platforms including
                  AutoTrader, Gumtree, Motors.co.uk, and more
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Globe className="h-8 w-8 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  3. Get Unified Results
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  View all matching vehicles in one place with standardized
                  information and direct links to original listings
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold text-center mb-12">
              Key Features
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <img
                  src="/lovable-uploads/f054ab4a-f69e-4774-a1b0-f241ea7d4fb8.png"
                  alt="ADS Search Interface"
                  className="rounded-lg shadow-xl w-full"
                />
              </div>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-green-100 dark:bg-green-900 p-2 rounded-full">
                    <Search className="h-5 w-5 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      Multi-Platform Search
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Search across AutoTrader, Gumtree, Motors.co.uk, and other
                      marketplaces simultaneously
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-green-100 dark:bg-green-900 p-2 rounded-full">
                    <Database className="h-5 w-5 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      Private Seller Focus
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Filter results to show only private sellers, avoiding
                      dealer markups and finding genuine direct-sale
                      opportunities
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-green-100 dark:bg-green-900 p-2 rounded-full">
                    <Globe className="h-5 w-5 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      Real-Time Listings
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Access the most recent listings with continuous updates
                      and notifications for new matches to your search criteria
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-green-100 dark:bg-green-900 p-2 rounded-full">
                    <Search className="h-5 w-5 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      Advanced Filtering
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Refine your search with detailed specifications like
                      mileage ranges, specific features, and condition reports
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
                      "ADS Search changed how I shop for cars. I was spending
                      hours checking different websites, but now I can see
                      everything in one place. Found a private seller on Gumtree
                      I would have missed otherwise and saved over £2,000
                      compared to similar dealer listings."
                    </p>
                    <div>
                      <h4 className="font-semibold">Sarah Thompson</h4>
                      <p className="text-gray-500 dark:text-gray-400">
                        Volkswagen Golf Owner
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CTASection
          title="Ready to revolutionize your vehicle search?"
          subtitle="Access every major automotive marketplace with one powerful tool"
          ctaText="Start Driving Now"
          ctaLink="EXTERNAL_APP_URL"
          backgroundClass="bg-gradient-to-r from-blue-500 to-purple-600"
        />
      </div>
    </Layout>
  );
};

export default AdsSearch;
