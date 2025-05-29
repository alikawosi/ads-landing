
import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Eye } from "lucide-react";
import { cn } from "@/lib/utils";
import { useIsMobile, useIsExtraSmall } from "@/hooks/use-mobile";

interface CarCardProps {
  model: string;
  make: string;
  year: number;
  price: number;
  mileage: number;
  image?: string;
  estimatedPrice?: number;
  priceTag?: "good" | "fair" | "high";
  className?: string;
  onClick?: () => void;
  onViewDetails?: () => void;
  onCheckValuation?: () => void;
  showValuation?: boolean;
}

const CarCard = ({
  model,
  make,
  year,
  price,
  mileage,
  image = "/placeholder.svg",
  estimatedPrice,
  priceTag,
  className,
  onClick,
  onViewDetails,
  onCheckValuation,
  showValuation = false,
}: CarCardProps) => {
  const isMobile = useIsMobile();
  const isExtraSmall = useIsExtraSmall();

  const getPriceTagVariant = (tag: "good" | "fair" | "high") => {
    switch (tag) {
      case "good":
        return "default";
      case "fair":
        return "secondary";
      case "high":
        return "destructive";
      default:
        return "default";
    }
  };

  return (
    <Card 
      className={cn(
        "overflow-hidden transition-all hover:shadow-lg w-full max-w-full mx-auto cursor-pointer hover:scale-[1.02]", 
        className
      )}
      onClick={onClick}
    >
      <div className="aspect-video w-full relative">
        <img
          src={image}
          alt={`${make} ${model}`}
          className="w-full h-full object-cover"
        />
        {showValuation && priceTag && (
          <Badge 
            variant={getPriceTagVariant(priceTag)}
            className="absolute top-3 right-3 capitalize"
          >
            {priceTag}
          </Badge>
        )}
      </div>
      
      <CardHeader className={isExtraSmall ? "p-3" : "p-4"}>
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-base md:text-lg font-bold">{make} {model}</h3>
            <p className="text-sm text-muted-foreground">{year}</p>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className={isExtraSmall ? "p-3 pt-0" : "p-4 pt-0"}>
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <div className="text-xl md:text-2xl font-bold">£{price.toLocaleString()}</div>
            <div className="text-xs md:text-sm text-muted-foreground">
              {mileage.toLocaleString()} miles
            </div>
          </div>
          
          {showValuation && estimatedPrice && (
            <div className="space-y-1 pt-2 border-t">
              <div className="flex justify-between items-center text-sm">
                <span className="text-muted-foreground">Est. Value:</span>
                <span className="font-semibold">£{estimatedPrice.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-muted-foreground">Difference:</span>
                <span className={`font-bold ${price > estimatedPrice ? 'text-red-500' : 'text-green-500'}`}>
                  {price > estimatedPrice ? '+' : ''}£{Math.abs(price - estimatedPrice).toLocaleString()}
                </span>
              </div>
            </div>
          )}
        </div>
      </CardContent>
      
      <CardFooter className={isExtraSmall ? "p-3 pt-0" : "p-4 pt-0"}>
        <div className="flex gap-2 w-full">
          <Button 
            className="flex-1 group" 
            size={isMobile ? "sm" : "default"}
            onClick={(e) => {
              e.stopPropagation();
              onViewDetails?.();
            }}
          >
            <Eye className="mr-1 h-4 w-4" />
            View Details
          </Button>
          <Button 
            variant="outline"
            className="flex-1 bg-green-50 hover:bg-green-100 border-green-200 text-green-700"
            size={isMobile ? "sm" : "default"}
            onClick={(e) => {
              e.stopPropagation();
              onCheckValuation?.();
            }}
          >
            Check Valuation
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default CarCard;
