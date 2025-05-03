
import React, { useState, useEffect } from 'react';
import Layout from '../components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight, PenSquare, Share2, BarChart2, MessageSquare } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import HeroSection from '@/components/ui/hero-section';

const MarketingTool = () => {
  // Sample social media posts for the interactive display
  const socialPosts = [
    {
      id: 1,
      title: "New BMW X5 in Stock",
      platform: "Instagram",
      content: "Check out our latest BMW X5 with premium features. Limited time offer!",
      engagement: "2.3K likes",
      performance: "high",
      posted: "2 days ago",
    },
    {
      id: 2,
      title: "Honda Civic Special Deal",
      platform: "Facebook",
      content: "The new Honda Civic is now available. Book a test drive today!",
      engagement: "1.5K likes",
      performance: "fair",
      posted: "1 week ago",
    },
    {
      id: 3,
      title: "Mercedes E-Class Showcase",
      platform: "TikTok",
      content: "Luxury redefined - see the new Mercedes E-Class in our showroom",
      engagement: "15K views",
      performance: "good",
      posted: "3 days ago",
    },
    {
      id: 4,
      title: "Toyota RAV4 Adventure Ready",
      platform: "LinkedIn",
      content: "The perfect SUV for your next adventure - Toyota RAV4 now in stock!",
      engagement: "850 likes",
      performance: "fair",
      posted: "5 days ago",
    },
    {
      id: 5,
      title: "Volkswagen Golf Video Tour",
      platform: "TikTok",
      content: "Take a virtual tour of the all-new Volkswagen Golf. #NewCar #Volkswagen",
      engagement: "22K views",
      performance: "high",
      posted: "Just posted",
    },
  ];

  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveCardIndex((prev) => (prev + 1) % socialPosts.length);
        setIsAnimating(false);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, [socialPosts.length]);

  const getPerformanceColor = (performance) => {
    switch (performance) {
      case "good":
        return "text-green-500";
      case "high":
        return "text-blue-500";
      case "fair":
        return "text-amber-500";
      default:
        return "text-gray-500";
    }
  };

  return (
    <Layout>
      <div className="py-20 md:py-28">
        {/* Hero Section */}
        <HeroSection 
          title="Boost Your Vehicle Marketing Reach" 
          subtitle="Seamlessly create and manage social media posts across all platforms to maximize your inventory visibility" 
          ctaText="Start Driving" 
          ctaLink="https://www.app.autodealersolution.com"
          secondaryCtaText="Schedule Demo"
          secondaryCtaLink="/demo"
        />

        {/* Interactive Social Post Display */}
        <section className="py-20 relative overflow-hidden bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Marketing Made Simple</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Create, schedule and track your social media posts across all platforms from a single dashboard
              </p>
            </div>

            <div className="flex flex-col lg:flex-row items-center gap-16 max-w-6xl mx-auto">
              <div className="lg:w-1/2 order-2 lg:order-1">
                <div className="space-y-6 animate-fade-in-up">
                  <h3 className="text-2xl font-bold">One Platform, All Social Media</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Post your inventory once and distribute it across Instagram, Facebook, TikTok, LinkedIn and more with tailored content for each platform.
                  </p>
                  
                  <div className="flex flex-col space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center">
                        <Share2 className="h-5 w-5 text-green-600 dark:text-green-400" />
                      </div>
                      <div>
                        <p className="font-medium">Multi-platform distribution</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                        <BarChart2 className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <p className="font-medium">Real-time engagement analytics</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center">
                        <MessageSquare className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                      </div>
                      <div>
                        <p className="font-medium">AI-powered content generation</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="pt-4">
                    <Button size="lg" className="group">
                      Explore Features
                      <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </div>
              
              {/* Social Post Cards */}
              <div className="lg:w-1/2 order-1 lg:order-2 relative h-[450px]">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl" />
                
                <div className="relative w-full h-full flex items-center justify-center">
                  {socialPosts.map((post, index) => (
                    <div
                      key={post.id}
                      className={`absolute transition-all duration-700 ease-in-out ${
                        index === activeCardIndex
                          ? "opacity-100 z-30 scale-100 translate-y-0"
                          : index === (activeCardIndex + 1) % socialPosts.length
                          ? "opacity-70 z-20 scale-95 translate-y-8 translate-x-8"
                          : index === (activeCardIndex + 2) % socialPosts.length
                          ? "opacity-40 z-10 scale-90 translate-y-16 translate-x-16"
                          : "opacity-0 scale-85 -translate-y-8 -translate-x-8"
                      }`}
                    >
                      <Card className="w-full max-w-md shadow-xl hover:shadow-2xl transition-all bg-white/90">
                        <CardHeader className="pb-2">
                          <div className="flex justify-between items-start">
                            <div>
                              <CardTitle className="text-xl font-bold">
                                {post.title}
                              </CardTitle>
                              <p className="text-sm text-primary font-medium mt-1">
                                {post.platform}
                              </p>
                            </div>
                            <div className={`text-sm font-medium ${getPerformanceColor(post.performance)}`}>
                              {post.performance} performer
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-600 dark:text-gray-300 mb-4">
                            {post.content}
                          </p>
                          <div className="flex justify-between items-center pt-4 border-t">
                            <span className="text-sm text-muted-foreground">
                              {post.engagement}
                            </span>
                            <span className="text-sm">
                              Posted: {post.posted}
                            </span>
                          </div>
                          <div className="mt-4 pt-2 border-t">
                            <Button className="w-full group">
                              View Analytics
                              <ArrowRight className="ml-1 group-hover:translate-x-1 transition-transform" />
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  ))}
                  
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {socialPosts.map((_, index) => (
                      <button
                        key={index}
                        className={`w-3 h-3 rounded-full transition-all ${
                          index === activeCardIndex ? "bg-primary scale-125" : "bg-gray-300 hover:bg-gray-400"
                        }`}
                        onClick={() => {
                          setIsAnimating(true);
                          setTimeout(() => {
                            setActiveCardIndex(index);
                            setIsAnimating(false);
                          }, 300);
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-white dark:bg-gray-950 py-16">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-[12px] shadow-md">
                <div className="bg-indigo-100 dark:bg-indigo-900 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <PenSquare className="text-indigo-600 dark:text-indigo-300" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Create Posts for Your Stock</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Easily create engaging posts for your inventory with our templates and AI-powered copy suggestions
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-[12px] shadow-md">
                <div className="bg-pink-100 dark:bg-pink-900 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Share2 className="text-pink-600 dark:text-pink-300" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Post on Social Media</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Publish your content across TikTok, Instagram, Facebook, and other platforms with a single click
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-[12px] shadow-md">
                <div className="bg-orange-100 dark:bg-orange-900 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <BarChart2 className="text-orange-600 dark:text-orange-300" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Follow Up and Manage</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Track performance, manage comments, and optimize your social media strategy with detailed analytics
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">How Our Marketing Tool Works</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Streamline your social media marketing workflow with our intuitive three-step process
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-white dark:bg-gray-800 p-8 rounded-[12px] shadow-md text-center">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-6">
                  <PenSquare className="h-8 w-8 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3">1. Create Content</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Select vehicles from your inventory and use our AI tools to generate engaging posts tailored to each platform
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-8 rounded-[12px] shadow-md text-center">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Share2 className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3">2. Schedule & Publish</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Set up publishing schedules or post immediately across multiple social media platforms simultaneously
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-8 rounded-[12px] shadow-md text-center">
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-6">
                  <BarChart2 className="h-8 w-8 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3">3. Track & Optimize</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Monitor engagement, analyze performance metrics, and refine your strategy based on real-time data
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
                Join thousands of businesses that have improved their social media presence and increased sales with our marketing solution.
              </p>
              <Button size="lg" variant="secondary" className="bg-white text-purple-600 hover:bg-gray-100" asChild>
                <a href="https://www.app.autodealersolution.com" target="_blank" rel="noopener noreferrer">
                  Start Driving Now <ChevronRight className="ml-2" />
                </a>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default MarketingTool;
