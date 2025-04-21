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
const carHeroData = [{
  model: "Camry XLE",
  year: 2024,
  mileage: 8200,
  price: 27800,
  estimatedPrice: 29300,
  priceTag: "good" as const,
  animation: "up"
}, {
  model: "Accord EX",
  year: 2023,
  mileage: 14300,
  price: 23950,
  estimatedPrice: 24650,
  priceTag: "fair" as const,
  animation: "down"
}, {
  model: "3 Series",
  year: 2024,
  mileage: 2900,
  price: 41200,
  estimatedPrice: 37800,
  priceTag: "high" as const,
  animation: "up"
}, {
  model: "Civic LX",
  year: 2022,
  mileage: 15800,
  price: 21600,
  estimatedPrice: 21900,
  priceTag: "good" as const,
  animation: "down"
}];
const cardGalleryPositions = [
// (x, y, animationType)
{
  left: "4%",
  top: "20%",
  animation: "up"
}, {
  left: "28%",
  top: "50%",
  animation: "down"
}, {
  left: "55%",
  top: "25%",
  animation: "up"
}, {
  left: "73%",
  top: "55%",
  animation: "down"
}];
const getAnimationClass = (animationType: "up" | "down") => {
  return animationType === "up" ? "animate-fade-in-up" : "animate-fade-in-down";
};
const HeroSection = ({
  title,
  subtitle,
  ctaText = "Get Started",
  ctaLink = "/signup",
  secondaryCtaText,
  secondaryCtaLink
}: HeroSectionProps) => {
  return <section className="pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col space-y-6 animate-slide-in-left">
            <div className="items-center px-3 py-1 rounded-full bg-saas-blue/10 text-saas-blue text-sm font-medium w-auto">
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
              {secondaryCtaText && <Button size="lg" variant="outline" className="rounded-[16px] px-8" asChild>
                  <Link to={secondaryCtaLink || "#"}>{secondaryCtaText}</Link>
                </Button>}
            </div>
          </div>
          {/* Card "gallery": free placement, not in a line or cascade */}
          <div className="relative h-[410px] min-h-[340px] w-full">
            {carHeroData.map((car, idx) => {
            const pos = cardGalleryPositions[idx % cardGalleryPositions.length];
            return <div key={car.model} className={`
                    absolute
                    ${getAnimationClass(pos.animation)}
                    shadow-xl
                    transition-all
                    rounded-xl
                  `} style={{
              left: pos.left,
              top: pos.top,
              zIndex: 30 - idx,
              width: '260px',
              animationDelay: `${idx * 0.23}s`
            }}>
                  <CarCascadeCard {...car} animationClass="" />
                </div>;
          })}
          </div>
        </div>
      </div>
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-saas-blue/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-saas-gray/5 rounded-full blur-3xl"></div>
      {/* Inject custom fade-in-down keyframes if missing */}
      <style>
        {`
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-down {
          animation: fadeInDown 0.7s cubic-bezier(0.38,0.56,0.17,0.99) forwards;
        }
        `}
      </style>
    </section>;
};
export default HeroSection;