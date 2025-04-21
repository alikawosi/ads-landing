
import React from "react";
import { Car, Tag, TrendingUp, TrendingDown, ArrowUp, ArrowDown, Percent } from "lucide-react";
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

const calculatePriceDifference = (price: number, estimatedPrice: number): { percent: number; isLower: boolean; signedPercent: string } => {
  const difference = ((price - estimatedPrice) / estimatedPrice) * 100;
  const percent = Math.abs(difference).toFixed(1);
  return {
    percent: percent as unknown as number,
    isLower: difference < 0,
    signedPercent: `${difference > 0 ? "+" : ""}${difference.toFixed(1)}`,
  };
};

const CarCascadeCard: React.FC<CarCascadeCardProps> = ({
  model,
  year,
  mileage,
  price,
  estimatedPrice,
  priceTag,
  animationClass,
}) => {
  const { percent, isLower, signedPercent } = calculatePriceDifference(price, estimatedPrice);

  return (
    <div
      className={cn(
        "bg-white dark:bg-gray-900 rounded-xl shadow-xl px-5 py-4 border car-card-hover w-64 max-w-xs relative transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl",
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
      <div className="mb-2 text-sm font-bold">
        Difference: <span className={isLower ? "text-green-600" : "text-red-600"}>
          {signedPercent}%
        </span>
      </div>
      <div className="flex justify-between items-center">
        <div>{getBadge(priceTag)}</div>
        <div className={cn(
          "flex items-center font-bold text-sm",
          isLower ? "text-green-600" : "text-red-600"
        )}>
          {isLower ? <ArrowDown size={14} /> : <ArrowUp size={14} />}
          {percent}
          <Percent size={12} />
        </div>
      </div>
    </div>
  );
};

export default CarCascadeCard;
