
import React from 'react';
import { Check } from 'lucide-react';

interface FeaturesListProps {
  features: string[];
}

export class FeaturesList extends React.Component<FeaturesListProps> {
  render() {
    const { features } = this.props;
    
    return (
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <Check className="h-5 w-5 text-saas-blue mr-2 flex-shrink-0" />
            <span className="text-gray-700 dark:text-gray-300">{feature}</span>
          </li>
        ))}
      </ul>
    );
  }
}

export default FeaturesList;
