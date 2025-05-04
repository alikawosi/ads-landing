
import React from "react";
import { Check } from "lucide-react";

interface FeaturesListProps {
  features: string[];
}

const FeaturesList: React.FC<FeaturesListProps> = ({ features }) => {
  return (
    <ul className="space-y-3 mt-6">
      {features.map((feature, index) => (
        <li key={index} className="flex items-start">
          <div className="mr-3 mt-1">
            <Check className="h-4 w-4 text-green-500" />
          </div>
          <span className="text-gray-700 dark:text-gray-300 text-sm">{feature}</span>
        </li>
      ))}
    </ul>
  );
};

export default FeaturesList;
