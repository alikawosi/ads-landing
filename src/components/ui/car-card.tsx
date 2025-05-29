
import React, { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useIsMobile, useIsExtraSmall } from "@/hooks/use-mobile";
import { Loader2, Heart, Plus } from "lucide-react";

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
  onCheckValuation?: () => void;
  onFavorite?: () => void;
  onAddToList?: () => void;
  showValuation?: boolean;
  carData?: any; // Add this to pass the full car data for valuation
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
  onCheckValuation,
  onFavorite,
  onAddToList,
  showValuation = false,
  carData,
}: CarCardProps) => {
  const isMobile = useIsMobile();
  const isExtraSmall = useIsExtraSmall();
  const [isLoading, setIsLoading] = useState(false);
  const [showEstimatedPrice, setShowEstimatedPrice] = useState(false);
  const [localEstimatedPrice, setLocalEstimatedPrice] = useState<number | null>(estimatedPrice || null);
  const [localPriceTag, setLocalPriceTag] = useState<"good" | "fair" | "high" | null>(priceTag || null);

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

  const handleCheckValuation = async (e: React.MouseEvent) => {
    e.stopPropagation();
    
    if (onCheckValuation) {
      setIsLoading(true);
      try {
        await onCheckValuation();
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleFavorite = (e: React.MouseEvent) => {
    e.stopPropagation();
    onFavorite?.();
  };

  const handleAddToList = (e: React.MouseEvent) => {
    e.stopPropagation();
    onAddToList?.();
  };

  // Update local state when props change
  React.useEffect(() => {
    if (estimatedPrice) {
      setLocalEstimatedPrice(estimatedPrice);
      setShowEstimatedPrice(true);
    }
    if (priceTag) {
      setLocalPriceTag(priceTag);
    }
  }, [estimatedPrice, priceTag]);

  return (
    <Card 
      className={cn(
        "overflow-hidden transition-all hover:shadow-lg w-full max-w-full mx-auto cursor-pointer hover:scale-[1.02] h-full flex flex-col", 
        className
      )}
      onClick={onClick}
    >
      <div className="aspect-video w-full relative overflow-hidden">
        <img
          src={image}
          alt={`${make} ${model}`}
          className="w-full h-full object-cover"
        />
      </div>
      
      <CardHeader className={isExtraSmall ? "p-3" : "p-4"}>
        <div className="flex justify-between items-start">
          <div className="flex-1">
            <div className="flex items-center justify-between gap-2">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-base md:text-lg font-bold">{make} {model}</h3>
                  {localPriceTag && (
                    <Badge 
                      variant={getPriceTagVariant(localPriceTag)}
                      className="capitalize text-xs"
                    >
                      {localPriceTag}
                    </Badge>
                  )}
                </div>
                <p className="text-sm text-muted-foreground">{year}</p>
              </div>
              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-8 w-8 p-0 hover:bg-red-50 hover:text-red-600"
                  onClick={handleFavorite}
                >
                  <Heart className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-8 w-8 p-0 hover:bg-blue-50 hover:text-blue-600"
                  onClick={handleAddToList}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className={cn(isExtraSmall ? "p-3 pt-0" : "p-4 pt-0", "flex-grow")}>
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <div className="text-xl md:text-2xl font-bold">£{price.toLocaleString()}</div>
            <div className="text-xs md:text-sm text-muted-foreground">
              {mileage?.toLocaleString() || 'N/A'} miles
            </div>
          </div>
          
          {/* Fixed space for estimated price content */}
          <div className="min-h-[60px] pt-2">
            {showEstimatedPrice && localEstimatedPrice && (
              <div className="space-y-1 border-t pt-2">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-muted-foreground">Est. Value:</span>
                  <span className="font-semibold">£{localEstimatedPrice.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-muted-foreground">Difference:</span>
                  <span className={`font-bold ${price > localEstimatedPrice ? 'text-red-500' : 'text-green-500'}`}>
                    {price > localEstimatedPrice ? '+' : ''}£{Math.abs(price - localEstimatedPrice).toLocaleString()}
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </CardContent>
      
      <CardFooter className={isExtraSmall ? "p-3 pt-0" : "p-4 pt-0"}>
        <Button 
          variant="outline"
          className="w-full bg-zinc-50 hover:bg-zinc-100 border-zinc-200 text-zinc-700"
          size={isMobile ? "sm" : "default"}
          onClick={handleCheckValuation}
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Loading...
            </>
          ) : (
            "Check Valuation"
          )}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CarCard;
