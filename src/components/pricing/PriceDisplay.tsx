
import React from 'react';

interface PriceDisplayProps {
  price: number;
  period?: string;
}

export class PriceDisplay extends React.Component<PriceDisplayProps> {
  render() {
    const { price, period = "month" } = this.props;
    
    return (
      <div className="mb-6">
        <span className="text-3xl font-bold">${price}</span>
        <span className="text-gray-500 dark:text-gray-400">/{period}</span>
      </div>
    );
  }
}

export default PriceDisplay;
