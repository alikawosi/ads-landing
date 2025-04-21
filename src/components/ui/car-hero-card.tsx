
import React from "react";
import { Car, Calendar, Key, DollarSign, ArrowUp, ArrowDown, Percent } from "lucide-react";
import { cn } from "@/lib/utils";

interface CarHeroCardProps {
  title: string;
  model: string;
  year: number;
  price: number;
  highlight?: string;
  animationClass?: string;
}

const CarHeroCard = ({
  title,
  model,
  year,
  price,
  highlight,
  animationClass,
}: CarHeroCardProps) => {
  return (
    <div
      className={cn(
        "bg-white dark:bg-gray-900 rounded-xl shadow-lg flex flex-col px-6 py-4 items-start min-w-[220px] max-w-[260px] border car-card-hover transition-all duration-300 hover:-translate-y-1 hover:shadow-xl",
        animationClass
      )}
      style={{ borderRadius: "20px" }}
    >
      <div className="flex items-center gap-2 mb-3">
        <Car size={28} className="text-saas-blue" />
        <span className="font-semibold text-lg">{title}</span>
      </div>
      <div className="flex items-center gap-2 mb-2">
        <Key size={16} className="text-gray-400" />
        <span className="text-sm">{model}</span>
      </div>
      <div className="flex items-center gap-2 mb-2">
        <Calendar size={16} className="text-gray-400" />
        <span className="text-sm">{year}</span>
      </div>
      <div className="flex items-center gap-2 mb-2">
        <DollarSign size={16} className="text-gray-400" />
        <span className="text-lg font-bold text-saas-blue">${price.toLocaleString()}</span>
      </div>
      {highlight && (
        <span className="text-xs bg-saas-blue/10 text-saas-blue px-3 py-1 rounded-full mt-2">
          {highlight}
        </span>
      )}
    </div>
  );
};

export default CarHeroCard;
