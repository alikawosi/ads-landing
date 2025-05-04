import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import CarCascadeCard from "./CarCascadeCard";
import { Car } from "lucide-react";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
}

type AnimationType = "up" | "down";

// --- Fix: move type annotation for gallery positions!
interface CardPosition {
  left: string;
  top: string;
  animation: AnimationType;
}

const carHeroData = [
  {
    model: "Camry XLE",
    year: 2024,
    mileage: 8200,
    price: 27800,
    estimatedPrice: 29300,
    priceTag: "good" as const,
    animation: "up" as AnimationType,
  },
  {
    model: "Accord EX",
    year: 2023,
    mileage: 14300,
    price: 23950,
    estimatedPrice: 24650,
    priceTag: "fair" as const,
    animation: "down" as AnimationType,
  },
  {
    model: "3 Series",
    year: 2024,
    mileage: 2900,
    price: 41200,
    estimatedPrice: 37800,
    priceTag: "high" as const,
    animation: "up" as AnimationType,
  },
  {
    model: "Civic LX",
    year: 2022,
    mileage: 15800,
    price: 18000,
    estimatedPrice: 21900,
    priceTag: "good" as const,
    animation: "down" as AnimationType,
  },
];

// --- Fix: correct type on array! Only use AnimationType
const cardGalleryPositions: CardPosition[] = [
  // (x, y, animationType)
  {
    left: "5%",
    top: "60%",
    animation: "down",
  },
  {
    left: "0%",
    top: "0%",
    animation: "up",
  },
  {
    left: "50%",
    top: "55%",
    animation: "down",
  },
  {
    left: "45%",
    top: "-2%",
    animation: "up",
  },
];
// Only return float class, not fade.
const getFloatAnimationClass = (animationType: AnimationType) => {
  return animationType === "up" ? "animate-float-up" : "animate-float-down";
};

const HeroSection = ({
  title,
  subtitle,
  ctaText = "Start Driving",
  ctaLink = "/signup",
  secondaryCtaText,
  secondaryCtaLink,
}: HeroSectionProps) => {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col space-y-6 animate-slide-in-left">
            <div className="items-center px-3 py-1 rounded-full flex w-48 bg-saas-blue/10 text-saas-blue text-sm font-medium ">
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
              <Button size="lg" className="rounded-[16px] px-8" asChild>
                <Link to={ctaLink} className="flex items-center gap-2">
                  {ctaText}
                  <Car className="h-4 w-4" />
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
          {/* Card "gallery": free placement, not in a line or cascade */}
          <div className="relative h-[410px] min-h-[340px] w-full">
            {carHeroData.map((car, idx) => {
              const pos =
                cardGalleryPositions[idx % cardGalleryPositions.length];
              return (
                <div
                  key={car.model}
                  className={`absolute ${getFloatAnimationClass(
                    pos.animation
                  )} shadow-xl transition-all rounded-xl`}
                  style={{
                    left: pos.left,
                    top: pos.top,
                    zIndex: 30 - idx,
                    width: "260px",
                    animationDelay: `${idx * 0.23}s`,
                  }}
                >
                  <CarCascadeCard {...car} animationClass="" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-saas-blue/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-saas-gray/5 rounded-full blur-3xl"></div>
      <style>
        {`
        @keyframes floatUp {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        @keyframes floatDown {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(15px); }
        }
        .animate-float-up {
          animation: floatUp 3.8s ease-in-out infinite;
        }
        .animate-float-down {
          animation: floatDown 3.8s ease-in-out infinite;
        }
        `}
      </style>
    </section>
  );
};

export default HeroSection;
