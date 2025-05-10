"use client";
import React from "react";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { PRICING_TIERS } from "@/constants";
import BillingToggle from "@/components/pricing/BillingToggle";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

interface PricingTier {
  title: string;
  monthlyPrice: number;
  buttonText: string;
  popular: boolean;
  inverse: boolean;
  enterprise: boolean;
  link: string;
  features: string[];
}

interface PricingCardProps {
  tier: PricingTier;
  billingType: string;
}

interface PricingSectionState {
  billingType: string;
}

class PricingCard extends React.Component<PricingCardProps> {
  render() {
    const {
      title,
      monthlyPrice,
      enterprise,
      buttonText,
      popular,
      inverse,
      features,
      link,
    } = this.props.tier;

    // Calculate price based on billing type
    const price =
      this.props.billingType === "monthly"
        ? monthlyPrice
        : Math.round(monthlyPrice * 12 * 0.8);

    // Update the billing period text
    const billingPeriod =
      this.props.billingType === "monthly" ? "month" : "year";

    // Show savings message for all non-enterprise accounts on annual billing
    const showSavings = !enterprise && this.props.billingType === "annual";

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
        <div className="mb-4">
          {enterprise ? (
            <span className="text-4xl font-bold tracking-tighter leading-none">
              {"Contact Sales"}
            </span>
          ) : (
            <>
              <div className="flex items-baseline gap-1 mt-[30px]">
                <span className="text-4xl font-bold tracking-tighter leading-none">
                  £{price}
                </span>
                <span className="tracking-tight font-bold text-gray-500">
                  / {billingPeriod}
                </span>
              </div>
              {showSavings && (
                <p
                  className={twMerge(
                    "text-sm mt-2 font-medium",
                    inverse ? "text-amber-200" : "text-emerald-600"
                  )}
                >
                  Save 20% with annual billing
                </p>
              )}
            </>
          )}
        </div>
        <Button size={"lg"} className="w-full sm:w-auto  px-6 md:px-8">
          <Link to={link} className="flex items-center gap-2">
            {buttonText}
          </Link>
        </Button>
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
        className=" bg-gray-50 rounded-md dark:bg-gray-900"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex flex-col  max-w-7xl mx-auto px-4 py-10 lg:px-8">
          <div className="flex flex-col items-center text-center mb-16">
            <div className="">
              <BillingToggle
                value={this.state.billingType}
                onValueChange={this.handleBillingTypeChange}
              />
            </div>
          </div>
          <div className="flex flex-col gap-6 items-center lg:flex-row lg:items-end lg:justify-center">
            {PRICING_TIERS.map((tier, index) => (
              <PricingCard
                key={index}
                tier={tier}
                billingType={this.state.billingType}
              />
            ))}
          </div>
        </div>
      </motion.section>
    );
  }
}
