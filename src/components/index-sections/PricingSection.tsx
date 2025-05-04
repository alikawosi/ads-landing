"use client";
import React from "react";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { PRICING_TIERS } from "@/constants";
import BillingToggle from "@/components/pricing/BillingToggle";

interface PricingTier {
  title: string;
  monthlyPrice: number;
  buttonText: string;
  popular: boolean;
  inverse: boolean;
  features: string[];
}

interface PricingCardProps {
  tier: PricingTier;
}

interface PricingSectionState {
  billingType: string;
}

class PricingCard extends React.Component<PricingCardProps> {
  render() {
    const { title, monthlyPrice, buttonText, popular, inverse, features } =
      this.props.tier;
    const monthlyOrAnnualPrice = this.props.tier.monthlyPrice;

    return (
      <div
        className={twMerge(
          "p-10 rounded-3xl border border-[#F1F1F1] shadow-[0_7px_14px_#EAEAEA] max-w-sm w-full",
          inverse === true && "border-black bg-black text-white"
        )}
      >
        <div className="flex justify-between">
          <h3
            className={twMerge(
              "text-lg font-bold text-black/50",
              inverse === true && "text-white/60"
            )}
          >
            {title}
          </h3>
          {popular === true && (
            <div className="inline-flex text-sm px-4 py-1.5 rounded-xl border border-white/20">
              <motion.span
                animate={{ backgroundPositionX: "100%" }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "linear",
                  repeatType: "loop",
                }}
                className="bg-[linear-gradient(to_right,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF)] [background-size:200%] text-transparent bg-clip-text font-medium"
              >
                Popular
              </motion.span>
            </div>
          )}
        </div>
        <div>
          <div className="flex items-baseline gap-1 mt-[30px]">
            <span className="text-4xl font-bold tracking-tighter leading-none">
              £{monthlyOrAnnualPrice}
            </span>
            <span className="tracking-tight font-bold text-black/50">
              /month
            </span>
          </div>
        </div>
        <button
          className={twMerge(
            "btn btn-primary w-full mt-[30px]",
            inverse === true && "bg-white text-black"
          )}
        >
          {buttonText}
        </button>
        <ul className="flex flex-col gap-5 mt-8">
          {features.map((feature, index) => (
            <li key={index} className="text-sm flex items-center gap-4">
              <Check className="h-6 w-6" /> <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export class PricingSection extends React.Component<{}, PricingSectionState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      billingType: "monthly",
    };
  }

  handleBillingTypeChange = (value: string) => {
    this.setState({ billingType: value });
  };

  render() {
    return (
      <motion.section
        className="py-20 bg-gray-50 dark:bg-gray-900"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="">
          <div className="flex flex-col items-center text-center mb-16">
            <div className="mt-8">
              <BillingToggle
                value={this.state.billingType}
                onValueChange={this.handleBillingTypeChange}
              />
            </div>
          </div>
          <div className="flex flex-col gap-6 items-center mt-10 lg:flex-row lg:items-end lg:justify-center">
            {PRICING_TIERS.map((tier, index) => (
              <PricingCard key={index} tier={tier} />
            ))}
          </div>
        </div>
      </motion.section>
    );
  }
}
