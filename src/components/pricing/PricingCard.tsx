
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface PricingCardProps {
  name: string;
  price: number;
  description: string;
  features: string[];
  priceId: string;
  popular?: boolean;
}

const PricingCard = ({
  name,
  price,
  description,
  features,
  priceId,
  popular = false,
}: PricingCardProps) => {
  const navigate = useNavigate();

  const handleSubscribe = () => {
    // Here you would implement the actual subscription logic
    // This is just a placeholder that redirects to signup
    navigate('/signup', { state: { plan: name, priceId } });
  };

  return (
    <Card className={`relative h-full flex flex-col ${popular ? 'border-saas-blue shadow-lg' : 'border-gray-200'}`}>
      {popular && (
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <span className="bg-saas-blue text-white text-xs font-semibold px-3 py-1 rounded-full">
            MOST POPULAR
          </span>
        </div>
      )}
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="mb-6">
          <span className="text-3xl font-bold">${price}</span>
          <span className="text-gray-500 dark:text-gray-400">/month</span>
        </div>
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <Check className="h-5 w-5 text-saas-blue mr-2 flex-shrink-0" />
              <span className="text-gray-700 dark:text-gray-300">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button 
          className={`w-full ${popular ? 'bg-saas-blue hover:bg-saas-blue/90' : ''}`} 
          variant={popular ? 'default' : 'outline'}
          onClick={handleSubscribe}
        >
          Subscribe
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PricingCard;
