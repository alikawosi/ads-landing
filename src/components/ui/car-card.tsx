
import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface CarCardProps {
  make: string;
  model: string;
  year: number;
  price: number;
  description?: string;
  image?: string;
  badges?: string[];
  link?: string;
}

const CarCard: React.FC<CarCardProps> = ({
  make,
  model,
  year,
  price,
  description,
  image = "/placeholder.svg",
  badges = [],
  link = "#",
}) => {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <div className="aspect-video relative overflow-hidden">
        <img
          src={image}
          alt={`${make} ${model}`}
          className="object-cover w-full h-full"
        />
        {badges && badges.length > 0 && (
          <div className="absolute top-2 right-2 flex flex-wrap gap-1 justify-end">
            {badges.map((badge, index) => (
              <Badge key={index} variant="secondary" className="bg-white/90 shadow-sm">
                {badge}
              </Badge>
            ))}
          </div>
        )}
      </div>
      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold">{`${make} ${model}`}</h3>
          <span className="text-gray-500">{year}</span>
        </div>
        <div className="mb-4">
          <span className="text-lg font-semibold">£{price.toLocaleString()}</span>
        </div>
        {description && <p className="text-gray-600 dark:text-gray-300 text-sm">{description}</p>}
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button asChild className="w-full group">
          <a href={link}>
            View Details
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CarCard;
