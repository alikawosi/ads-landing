
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

export type PriceRating = 'good' | 'fair' | 'high';

export interface CarCardProps {
  imageSrc: string;
  make: string;
  model: string;
  year: number;
  price: number;
  priceRating: PriceRating;
  className?: string;
}

export const getPriceRatingColor = (rating: PriceRating): string => {
  switch (rating) {
    case 'good':
      return 'bg-green-500 hover:bg-green-600';
    case 'fair':
      return 'bg-yellow-500 hover:bg-yellow-600';
    case 'high':
      return 'bg-red-500 hover:bg-red-600';
    default:
      return 'bg-gray-500 hover:bg-gray-600';
  }
};

const CarCard = ({ imageSrc, make, model, year, price, priceRating, className }: CarCardProps) => {
  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(price);

  return (
    <Card className={cn("overflow-hidden border-0 shadow-md transition-transform hover:shadow-xl hover:-translate-y-1", className)}>
      <div className="relative">
        <img 
          src={imageSrc} 
          alt={`${year} ${make} ${model}`} 
          className="w-full h-40 object-cover"
        />
        <Badge className={cn("absolute top-2 right-2 text-white", getPriceRatingColor(priceRating))}>
          {priceRating.toUpperCase()} PRICE
        </Badge>
      </div>
      <CardContent className="p-4">
        <h3 className="font-bold text-lg">{year} {make} {model}</h3>
        <p className="text-2xl font-bold text-saas-blue mt-2">{formattedPrice}</p>
      </CardContent>
    </Card>
  );
};

export default CarCard;
