
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
    <section className="relative overflow-hidden py-0 min-h-[90vh]">
      {/* Split background - left white, right dark */}
      <div className="absolute inset-0 z-0">
        <div className="flex h-full">
          <div className="w-1/2 bg-white dark:bg-gray-900"></div>
          <div className="w-1/2 bg-gray-100 dark:bg-gray-950"></div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-16 h-16 border-t-2 border-l-2 border-saas-blue/30 rounded-tl-xl"></div>
      <div className="hidden lg:block absolute bottom-20 right-10 w-24 h-24 rounded-full bg-saas-blue/10"></div>
      <div className="absolute top-1/3 right-1/3 w-6 h-6 rounded-full bg-saas-blue/20 animate-pulse-slow"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10 py-16 md:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[70vh]">
          {/* Left content area */}
          <div className="flex flex-col space-y-6 animate-slide-in-left">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-saas-blue/10 text-saas-blue text-sm font-medium w-fit">
              <span className="w-2 h-2 rounded-full bg-saas-blue mr-2"></span>
              AI-Powered Dealership Solution
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-none">
              {title.split(' ').map((word, i) => 
                i % 3 === 0 ? <span key={i} className="text-saas-blue">{word} </span> : <span key={i}>{word} </span>
              )}
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-lg">
              {subtitle}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="rounded-full bg-saas-blue hover:bg-saas-blue/90 shadow-lg group" asChild>
                <Link to={ctaLink} className="px-8 flex items-center gap-2">
                  {ctaText} <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              
              {secondaryCtaText && (
                <Button size="lg" variant="outline" className="rounded-full border-saas-blue text-saas-blue hover:bg-saas-blue/10" asChild>
                  <Link to={secondaryCtaLink || "#"} className="px-8">{secondaryCtaText}</Link>
                </Button>
              )}
            </div>
            
            {/* Featured metric */}
            <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-4 mt-8 max-w-xs border border-gray-100 dark:border-gray-700">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-saas-blue/10 rounded-full flex items-center justify-center">
                  <Clock className="h-6 w-6 text-saas-blue" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-saas-blue">40%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Faster Inventory Turnover</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right image/showcase area */}
          <div className="relative animate-slide-in-right flex justify-center">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-saas-blue/20 via-transparent to-saas-gray/20 filter blur-xl opacity-70"></div>
            
            <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden border border-gray-100 dark:border-gray-700 p-2 w-full max-w-lg mx-auto">
              {/* Main featured product image */}
              <div className="rounded-xl overflow-hidden">
                <img
                  src={imageSrc}
                  alt="AI Dashboard"
                  className="w-full h-auto object-cover"
                />
              </div>
              
              {/* Overlay product card - like the discount coupon in the reference */}
              <div className="absolute -bottom-2 -right-2 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg border border-gray-100 dark:border-gray-700 w-64">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold">Featured Vehicle</h3>
                  <div className="text-xs px-2 py-1 bg-green-100 text-green-800 rounded-full">Hot Deal</div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 bg-gray-200 dark:bg-gray-700 rounded overflow-hidden">
                    <img 
                      src="/public/lovable-uploads/a2d656a0-53ed-413b-837a-bfc11a3bc040.png" 
                      alt="Car thumbnail" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-semibold">Tesla Model 3</div>
                    <div className="flex justify-between items-center">
                      <div className="text-lg font-bold text-saas-blue">$42,990</div>
                      <div className="text-xs text-gray-500 flex items-center">
                        <Clock size={12} className="mr-1" /> 30 min
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Recommendation tag - like the chef recommendation */}
              <div className="absolute -left-4 top-1/3 flex items-center">
                <div className="w-12 h-12 rounded-full bg-saas-blue/90 flex items-center justify-center shadow-lg z-10">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <div className="bg-white dark:bg-gray-800 py-2 px-4 rounded-r-lg shadow-md -ml-2 pl-6">
                  <div className="text-sm font-medium">AI Recommended</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
