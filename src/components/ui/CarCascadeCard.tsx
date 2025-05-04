
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

interface CarCascadeCardProps {
  model: string;
  year: number;
  mileage: number;
  price: number;
  estimatedPrice: number;
  priceTag: "good" | "fair" | "high";
  animation?: "up" | "down";
  animationClass?: string;
}

export const getPriceTagVariant = (tag: "good" | "fair" | "high") => {
  switch (tag) {
    case "good":
      return "success";
    case "fair":
      return "secondary"; // This will now use amber-200 color
    case "high":
      return "destructive";
    default:
      return "default";
  }
};

const CarCascadeCard = ({
  model,
  year,
  mileage,
  price,
  estimatedPrice,
  priceTag,
  animationClass = "",
}: CarCascadeCardProps) => {
  const isMobile = useIsMobile();
  const priceDifference = price - estimatedPrice;
  const formattedDifference =
    priceDifference > 0
      ? `+£${Math.abs(priceDifference).toLocaleString()}`
      : `-£${Math.abs(priceDifference).toLocaleString()}`;

  return (
    <Card
      className={cn(
        "w-full shadow-md bg-white dark:bg-gray-800",
        animationClass
      )}
    >
      <CardHeader className={`${isMobile ? 'p-2' : 'pb-2'}`}>
        <div className="flex justify-between items-start">
          <div>
            <h3 className={`font-bold ${isMobile ? 'text-sm' : 'text-lg'}`}>{model}</h3>
            <p className={`text-muted-foreground ${isMobile ? 'text-xs' : 'text-sm'}`}>
              {year} • {mileage.toLocaleString()} miles
            </p>
          </div>
          <Badge variant={getPriceTagVariant(priceTag)} className={`capitalize ${isMobile ? 'text-xs px-1' : ''}`}>
            {priceTag}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className={`${isMobile ? 'p-2 pt-1' : 'pt-2'}`}>
        <div className="border-t pt-1 space-y-1">
          <div className="flex justify-between items-center">
            <span className={`text-muted-foreground ${isMobile ? 'text-xs' : 'text-sm'}`}>Listed Price</span>
            <span className={`font-semibold ${isMobile ? 'text-xs' : ''}`}>£{price.toLocaleString()}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className={`text-muted-foreground ${isMobile ? 'text-xs' : 'text-sm'}`}>Est. Value</span>
            <span className={`font-semibold ${isMobile ? 'text-xs' : ''}`}>
              £{estimatedPrice.toLocaleString()}
            </span>
          </div>
          <div className="flex justify-between items-center pt-1 border-t">
            <span className={`text-muted-foreground ${isMobile ? 'text-xs' : 'text-sm'}`}>Difference</span>
            <span
              className={`font-bold ${isMobile ? 'text-xs' : ''} ${
                priceDifference > 0 ? "text-red-500" : "text-green-500"
              }`}
            >
              {formattedDifference}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CarCascadeCard;
