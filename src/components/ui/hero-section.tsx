
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import CarCard from './car-card';

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
  imageSrc = "/lovable-uploads/74eb8123-02ad-48f5-ad7c-ae04f435a26b.png", // Default image path
}: HeroSectionProps) => {
  return (
    <section className="py-20 md:py-28 overflow-hidden bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col space-y-6 animate-slide-in-left">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-saas-blue/10 text-saas-blue text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-saas-blue mr-2"></span>
              AI-Powered Solutions
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              {title}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              {subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" radius="lg" className="px-8" asChild>
                <Link to={ctaLink} className="flex items-center gap-2">
                  {ctaText} <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              {secondaryCtaText && (
                <Button size="lg" variant="outline" radius="lg" className="px-8" asChild>
                  <Link to={secondaryCtaLink || "#"}>{secondaryCtaText}</Link>
                </Button>
              )}
            </div>
          </div>
          
          <div className="relative animate-slide-in-right">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-saas-blue via-saas-gray to-saas-blue opacity-30 blur-md"></div>
            <div className="relative z-10">
              {/* Car Cards Display */}
              <div className="grid grid-cols-2 gap-4 transform -rotate-6">
                <CarCard
                  imageSrc="/lovable-uploads/f054ab4a-f69e-4774-a1b0-f241ea7d4fb8.png"
                  make="Tesla"
                  model="Model S"
                  year={2023}
                  price={79900}
                  priceRating="fair"
                  className="transform translate-y-4 z-20"
                />
                <CarCard
                  imageSrc="/lovable-uploads/74eb8123-02ad-48f5-ad7c-ae04f435a26b.png"
                  make="BMW"
                  model="X5"
                  year={2022}
                  price={65500}
                  priceRating="good"
                  className="transform -translate-y-4 z-10"
                />
                <CarCard
                  imageSrc="/lovable-uploads/f054ab4a-f69e-4774-a1b0-f241ea7d4fb8.png"
                  make="Mercedes"
                  model="E-Class"
                  year={2023}
                  price={84500}
                  priceRating="high"
                  className="transform translate-x-8 -translate-y-8 z-30"
                />
              </div>
              
              {/* Stats card overlay */}
              <div className="absolute -bottom-4 -right-4 bg-white dark:bg-gray-800 p-3 rounded-lg shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium">40% Faster Sales</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-saas-blue/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-saas-gray/5 rounded-full blur-3xl"></div>
    </section>
  );
};

export default HeroSection;
