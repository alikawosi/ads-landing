
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock } from 'lucide-react';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  imageSrc?: string;
}

const HeroSection = ({
  title,
  subtitle,
  ctaText = "Get Started",
  ctaLink = "/signup",
  secondaryCtaText,
  secondaryCtaLink,
  imageSrc = "/lovable-uploads/74eb8123-02ad-48f5-ad7c-ae04f435a26b.png",
}: HeroSectionProps) => {
  return (
    <section className="relative overflow-hidden py-20 lg:py-24">
      <div className="absolute inset-0 z-0 bg-white dark:bg-gray-950"></div>
      
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gray-50 dark:bg-gray-900 rounded-bl-[100px]"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 rounded-full bg-saas-blue/5 blur-3xl"></div>
        <div className="absolute top-40 right-20 w-72 h-72 rounded-full bg-saas-blue/5 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content area */}
          <div className="flex flex-col space-y-6 max-w-xl">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-saas-blue/10 text-saas-blue text-sm font-medium w-fit">
              <span className="w-2 h-2 rounded-full bg-saas-blue mr-2"></span>
              AI-Powered Dealership Solution
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              {title.split(' ').map((word, i) => 
                i % 3 === 0 ? <span key={i} className="text-saas-blue">{word} </span> : <span key={i}>{word} </span>
              )}
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-lg">
              {subtitle}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="rounded-md bg-saas-blue hover:bg-saas-blue/90 shadow-lg shadow-saas-blue/20 group" asChild>
                <Link to={ctaLink} className="px-8 flex items-center gap-2">
                  {ctaText} <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              
              {secondaryCtaText && (
                <Button size="lg" variant="outline" className="rounded-md border-saas-blue text-saas-blue hover:bg-saas-blue/10" asChild>
                  <Link to={secondaryCtaLink || "#"} className="px-8">{secondaryCtaText}</Link>
                </Button>
              )}
            </div>
            
            {/* Featured metrics */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-4 border border-gray-100 dark:border-gray-700 flex items-center gap-4">
                <div className="w-12 h-12 bg-saas-blue/10 rounded-full flex items-center justify-center">
                  <Clock className="h-6 w-6 text-saas-blue" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-saas-blue">40%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Faster Inventory</div>
                </div>
              </div>
              
              <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-4 border border-gray-100 dark:border-gray-700 flex items-center gap-4">
                <div className="w-12 h-12 bg-saas-blue/10 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-saas-blue">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <div>
                  <div className="text-2xl font-bold text-saas-blue">35%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Higher Sales</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right image/showcase area */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden border border-gray-100 dark:border-gray-700 p-2 max-w-md w-full">
              {/* Main featured product image */}
              <div className="rounded-xl overflow-hidden">
                <img
                  src={imageSrc}
                  alt="AI Dashboard"
                  className="w-full h-auto object-cover"
                />
              </div>
              
              {/* Floating product cards */}
              <div className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 w-48 transform rotate-[-8deg]">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-sm">New Lead</h3>
                  <div className="text-xs px-2 py-1 bg-green-100 text-green-800 rounded-full">New</div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <img 
                      src="/public/lovable-uploads/a2d656a0-53ed-413b-837a-bfc11a3bc040.png" 
                      alt="Car thumbnail" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-xs">John Smith</div>
                    <div className="text-xs text-gray-500">Interested in SUVs</div>
                  </div>
                </div>
              </div>
              
              <div className="absolute top-10 -right-5 bg-white dark:bg-gray-800 p-3 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 transform rotate-[5deg]">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-saas-blue/90 flex items-center justify-center shadow-lg z-10">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <div className="text-xs font-medium">AI Match: 92%</div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -z-10 w-full h-full max-w-md max-h-[80%] rounded-full bg-gradient-to-r from-saas-blue/30 to-saas-blue/5 blur-3xl -top-10 -right-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
