
import React from "react";

interface PriceDisplayProps {
  price: number;
}

const PriceDisplay: React.FC<PriceDisplayProps> = ({ price }) => {
  return (
    <div className="mt-6 mb-8">
      <div className="flex items-end">
        <span className="text-4xl font-bold">£{price}</span>
        <span className="text-sm text-gray-500 dark:text-gray-400 ml-2 pb-1">/month</span>
      </div>
    </div>
  );
};

export default PriceDisplay;
