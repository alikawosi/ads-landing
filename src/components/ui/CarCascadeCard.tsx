
import React from "react";
import { Car, Tag, TrendingUp, TrendingDown } from "lucide-react";
import { cn } from "@/lib/utils";

type PriceTagType = "good" | "fair" | "high";

interface CarCascadeCardProps {
  model: string;
  year: number;
  mileage: number;
  price: number;
  estimatedPrice: number;
  priceTag: PriceTagType;
  animationClass?: string;
}

const getBadge = (tag: PriceTagType) => {
  switch (tag) {
    case "good":
      return (
        <span className="flex items-center text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full font-semibold gap-1">
          <TrendingDown className="w-3 h-3" /> Good Price
        </span>
      );
    case "fair":
      return (
        <span className="flex items-center text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full font-semibold gap-1">
          <Tag className="w-3 h-3" /> Fair Price
        </span>
      );
    case "high":
      return (
        <span className="flex items-center text-xs bg-red-100 text-red-800 px-2 py-1 rounded-full font-semibold gap-1">
          <TrendingUp className="w-3 h-3" /> High Price
        </span>
      );
    default:
      return null;
  }
};

const CarCascadeCard: React.FC<CarCascadeCardProps> = ({
  model,
  year,
  mileage,
  price,
  estimatedPrice,
  priceTag,
  animationClass,
}) => (
  <div
    className={cn(
      "bg-white dark:bg-gray-900 rounded-xl shadow-xl px-5 py-4 border car-card-hover w-56 relative",
      animationClass
    )}
    style={{ borderRadius: "18px" }}
  >
    <div className="flex items-center gap-2 mb-2">
      <Car size={22} className="text-saas-blue" />
      <span className="font-semibold text-base">{year} {model}</span>
    </div>
    <div className="text-sm text-muted-foreground mb-2">
      Mileage: <strong>{mileage.toLocaleString()} mi</strong>
    </div>
    <div className="mb-1 text-lg font-bold text-saas-blue">
      ${price.toLocaleString()}
    </div>
    <div className="mb-2 text-xs text-gray-500">
      Est. Value: <span className="font-semibold">${estimatedPrice.toLocaleString()}</span>
    </div>
    <div>{getBadge(priceTag)}</div>
  </div>
);

export default CarCascadeCard;
