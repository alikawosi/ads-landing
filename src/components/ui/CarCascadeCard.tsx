
import React from 'react';
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface CarCascadeCardProps {
  model: string;
  year: number;
  mileage: number;
  price: number;
  estimatedPrice: number;
  priceTag: 'good' | 'fair' | 'high';
  animation?: 'up' | 'down';
  animationClass?: string;
}

export const getPriceTagVariant = (tag: 'good' | 'fair' | 'high') => {
  switch (tag) {
    case "good":
      return "default";
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
  animationClass = ""
}: CarCascadeCardProps) => {
  const priceDifference = price - estimatedPrice;
  const formattedDifference = priceDifference > 0 
    ? `+£${Math.abs(priceDifference).toLocaleString()}` 
    : `-£${Math.abs(priceDifference).toLocaleString()}`;

  return (
    <Card className={cn("w-full shadow-md bg-white dark:bg-gray-800", animationClass)}>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-bold text-lg">{model}</h3>
            <p className="text-muted-foreground text-sm">{year} • {mileage.toLocaleString()} miles</p>
          </div>
          <Badge 
            variant={getPriceTagVariant(priceTag)} 
            className="capitalize"
          >
            {priceTag} Price
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="pt-2">
        <div className="border-t pt-3 space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-muted-foreground text-sm">Listed Price</span>
            <span className="font-semibold">£{price.toLocaleString()}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-muted-foreground text-sm">Est. Value</span>
            <span className="font-semibold">£{estimatedPrice.toLocaleString()}</span>
          </div>
          <div className="flex justify-between items-center pt-2 border-t">
            <span className="text-muted-foreground text-sm">Difference</span>
            <span className={`font-bold ${priceDifference > 0 ? "text-red-500" : "text-green-500"}`}>
              {formattedDifference}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CarCascadeCard;
