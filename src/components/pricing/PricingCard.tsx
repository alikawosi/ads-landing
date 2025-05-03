import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import PriceDisplay from "./PriceDisplay";
import FeaturesList from "./FeaturesList";
import { EXTERNAL_APP_URL } from "@/constants";

interface PricingCardProps {
  name: string;
  price: {
    monthly: number;
    annually: number;
  };
  description: string;
  features: string[];
  popular?: boolean;
  cta?: string;
  priceId?: string;
  billingType: string;
}

class PricingCard extends React.Component<PricingCardProps> {
  static defaultProps = {
    popular: false,
    cta: "Subscribe",
    priceId: "",
  };

  renderPopularBadge() {
    if (this.props.popular) {
      return (
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <span className="bg-saas-blue text-white text-xs font-semibold px-3 py-1 rounded-full">
            MOST POPULAR
          </span>
        </div>
      );
    }
    return null;
  }

  render() {
    const { name, price, description, features, popular, cta, billingType } =
      this.props;

    const displayPrice =
      billingType === "monthly" ? price.monthly : price.annually;

    return (
      <Card
        className={`relative h-full flex flex-col ${
          popular ? "border-saas-blue shadow-lg" : "border-gray-200"
        }`}
      >
        {this.renderPopularBadge()}
        <CardHeader>
          <CardTitle>{name}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent className="flex-grow">
          <PriceDisplay price={displayPrice} />
          <FeaturesList features={features} />
        </CardContent>
        <CardFooter>
          <SubscribeButton
            popular={popular}
            cta={cta}
            name={name}
            priceId={`${name}-${billingType}`}
          />
        </CardFooter>
      </Card>
    );
  }
}

interface SubscribeButtonProps {
  popular?: boolean;
  cta: string;
  name: string;
  priceId: string;
}

const SubscribeButton: React.FC<SubscribeButtonProps> = ({
  popular,
  cta,
  name,
  priceId,
}) => {
  const handleSubscribe = () => {
    window.open(EXTERNAL_APP_URL, "_blank", "noopener,noreferrer");
  };

  return (
    <Button
      className={`w-full ${
        popular ? "bg-saas-blue hover:bg-saas-blue/90" : ""
      }`}
      variant={popular ? "default" : "outline"}
      onClick={handleSubscribe}
    >
      {cta}
    </Button>
  );
};

export default PricingCard;
