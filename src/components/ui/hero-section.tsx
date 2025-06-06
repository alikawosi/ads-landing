
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import CarCascadeCard from "./CarCascadeCard";
import CarSearchForm from "./car-search-form";
import { Car } from "lucide-react";
import { useIsMobile, useIsExtraSmall } from "@/hooks/use-mobile";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
}

type AnimationType = "up" | "down";

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

// Desktop card positions
const desktopCardPositions: CardPosition[] = [
  { left: "5%", top: "60%", animation: "down" },
  { left: "0%", top: "0%", animation: "up" },
  { left: "50%", top: "55%", animation: "down" },
  { left: "45%", top: "-2%", animation: "up" },
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
  const isMobile = useIsMobile();
  const isExtraSmall = useIsExtraSmall();

  return (
    <section className="pt-16 pb-16 md:pt-24 md:pb-24 overflow-hidden bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="flex flex-col space-y-4 md:space-y-6 animate-slide-in-left text-center order-2 lg:order-1 lg:text-left">
            <div className="items-center px-3 py-1 rounded-full flex w-48 mx-auto lg:mx-0 bg-saas-blue/10 text-saas-blue text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-saas-blue mr-2"></span>
              AI-Powered Solutions
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
              {title}
            </h1>
            {/* Car Search Form */}
            <div className="bg-white p-6 rounded-lg shadow-lg border max-w-4xl mx-auto lg:mx-0 w-full">
              <p className="text-lg mb-4 md:text-xl text-gray-600 dark:text-gray-300">
                {subtitle}
              </p>
              <CarSearchForm />
            </div>

            <div className="mt-4 md:mt-8 flex items-center gap-3 md:gap-4 justify-center lg:justify-start">
              <div className="flex -space-x-3 md:-space-x-4">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary/20 flex items-center justify-center border-2 border-white"
                  >
                    <span className="text-xs md:text-sm text-primary font-bold">
                      {i}+
                    </span>
                  </div>
                ))}
              </div>
              <p className="text-xs md:text-sm text-muted-foreground">
                <span className="font-bold">5,000+</span> cars found today
              </p>
            </div>
          </div>

          {/* Card "gallery" with fixed z-index to prevent overlapping clickable areas - only show on desktop */}
          <div
            className="relative h-[220px] sm:h-[300px] md:h-[380px] w-full order-1 lg:order-2 overflow-visible hidden lg:block"
            style={{ zIndex: 0 }}
          >
            <div className="relative h-full w-full">
              {carHeroData.map((car, idx) => {
                const pos = desktopCardPositions[idx % desktopCardPositions.length];
                return (
                  <div
                    key={car.model}
                    className={`absolute ${getFloatAnimationClass(
                      pos.animation
                    )} shadow-xl transition-all rounded-xl`}
                    style={{
                      left: pos.left,
                      top: pos.top,
                      zIndex: 10 - idx, // Reduced z-index to avoid blocking clicks
                      width: "260px",
                      animationDelay: `${idx * 0.23}s`,
                      pointerEvents: "none", // Make cards non-interactive to prevent click blocking
                    }}
                  >
                    <CarCascadeCard {...car} animationClass="" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Background elements with adjusted z-index and pointer-events */}
      <div
        className="absolute top-1/4 right-0 w-64 h-64 bg-saas-blue/5 rounded-full blur-3xl"
        style={{ pointerEvents: "none", zIndex: -1 }}
      ></div>
      <div
        className="absolute bottom-0 left-0 w-96 h-96 bg-saas-gray/5 rounded-full blur-3xl"
        style={{ pointerEvents: "none", zIndex: -1 }}
      ></div>

      {/* Animation styles */}
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
