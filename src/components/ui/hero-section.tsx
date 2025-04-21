
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import CarCascadeCard from "./CarCascadeCard";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
}

const carHeroData = [
  {
    model: "Camry XLE",
    year: 2024,
    mileage: 8200,
    price: 27800,
    estimatedPrice: 29300,
    priceTag: "good" as const,
    animationClass: "animate-float z-30"
  },
  {
    model: "Accord EX",
    year: 2023,
    mileage: 14300,
    price: 23950,
    estimatedPrice: 24650,
    priceTag: "fair" as const,
    animationClass: "ml-8 -mt-4 z-20 animate-slide-in-right"
  },
  {
    model: "3 Series",
    year: 2024,
    mileage: 2900,
    price: 41200,
    estimatedPrice: 37800,
    priceTag: "high" as const,
    animationClass: "ml-16 -mt-7 z-10 animate-slide-in-right"
  },
];

const HeroSection = ({
  title,
  subtitle,
  ctaText = "Get Started",
  ctaLink = "/signup",
  secondaryCtaText,
  secondaryCtaLink,
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
            <p className="text-xl text-gray-600 dark:text-gray-300">{subtitle}</p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="rounded-[16px] px-8" asChild>
                <Link to={ctaLink} className="flex items-center gap-2">
                  {ctaText}
                </Link>
              </Button>
              {secondaryCtaText && (
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-[16px] px-8"
                  asChild
                >
                  <Link to={secondaryCtaLink || "#"}>{secondaryCtaText}</Link>
                </Button>
              )}
            </div>
          </div>
          <div className="relative flex items-center justify-center h-72 md:h-80 animate-slide-in-right">
            {/* Cascading car hero cards */}
            <div className="relative w-[400px] h-full flex">
              {carHeroData.map((car, idx) => (
                <div
                  key={car.model}
                  className={`absolute left-0 top-0 ${car.animationClass}`}
                  style={{
                    zIndex: 30 - idx,
                    transform: `translateY(${idx * 28}px) translateX(${idx * 46}px)`,
                  }}
                >
                  <CarCascadeCard {...car} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Decorative background elements */}
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-saas-blue/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-saas-gray/5 rounded-full blur-3xl"></div>
    </section>
  );
};

export default HeroSection;
