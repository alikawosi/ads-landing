
import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

interface CarCardProps {
  model: string;
  make: string;
  year: number;
  price: number;
  mileage: number;
  priceTag?: "good" | "fair" | "high";
  image?: string;
  dealType?: string;
  className?: string;
}

const CarCard = ({
  model,
  make,
  year,
  price,
  mileage,
  priceTag = "fair",
  image = "/placeholder.svg",
  dealType = "Used",
  className,
}: CarCardProps) => {
  const isMobile = useIsMobile();
  
  const badgeVariant = {
    good: "success",
    fair: "secondary",
    high: "destructive",
  }[priceTag] as "success" | "secondary" | "destructive" | "default";

  return (
    <Card className={cn("overflow-hidden transition-all hover:shadow-lg w-full mx-auto max-w-xs", className)}>
      <div className="aspect-video w-full relative">
        <img
          src={image}
          alt={`${make} ${model}`}
          className="w-full h-full object-cover"
        />
        <Badge className="absolute top-3 right-3">{dealType}</Badge>
      </div>
      <CardHeader className="p-4 md:p-6">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-base md:text-lg font-bold">{make} {model}</h3>
            <p className="text-sm text-muted-foreground">{year}</p>
          </div>
          <Badge variant={badgeVariant}>
            {priceTag === "good" ? "Good Deal" : priceTag === "fair" ? "Fair Deal" : "High Price"}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="p-4 md:p-6 pt-0">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2 md:gap-4">
          <div className="text-xl md:text-2xl font-bold">£{price.toLocaleString()}</div>
          <div className="text-xs md:text-sm text-muted-foreground">
            {mileage.toLocaleString()} miles
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 md:p-6 pt-0">
        <Button className="w-full group" size={isMobile ? "sm" : "default"}>
          View Details
          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CarCard;
