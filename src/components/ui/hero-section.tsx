
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

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
    <section className="py-20 md:py-28 overflow-hidden bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col space-y-6 animate-slide-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 dark:text-white">
              {title}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              {subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" asChild>
                <Link to={ctaLink} className="flex items-center gap-2">
                  {ctaText} <ArrowRight size={16} />
                </Link>
              </Button>
              {secondaryCtaText && (
                <Button size="lg" variant="outline" asChild>
                  <Link to={secondaryCtaLink || "#"}>{secondaryCtaText}</Link>
                </Button>
              )}
            </div>
          </div>
          
          <div className="relative animate-fade-in">
            <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-saas-blue via-saas-gray to-saas-blue opacity-30 blur"></div>
            <div className="relative hero-animation">
              {imageSrc ? (
                <img
                  src={imageSrc}
                  alt="Hero"
                  className="rounded-lg shadow-xl w-full max-w-md mx-auto"
                />
              ) : (
                <div className="bg-gray-200 rounded-lg h-72 w-full flex items-center justify-center">
                  <span className="text-gray-500">Image Placeholder</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
