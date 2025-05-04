import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { EXTERNAL_APP_URL } from "@/constants";

interface CTASectionProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  backgroundClass?: string;
}

const CTASection: React.FC<CTASectionProps> = ({
  title,
  subtitle,
  ctaText,
  ctaLink = EXTERNAL_APP_URL,
  secondaryCtaText,
  secondaryCtaLink,
  backgroundClass = "bg-saas-blue",
}) => {
  const handleCTAClick = () => {
    if (ctaLink === EXTERNAL_APP_URL || ctaLink === "EXTERNAL_APP_URL") {
      window.open(EXTERNAL_APP_URL, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <section className={`py-16 md:py-24 ${backgroundClass}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            {title}
          </h2>
          <p className="text-xl mb-8 text-white/90">{subtitle}</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {ctaLink === EXTERNAL_APP_URL || ctaLink === "EXTERNAL_APP_URL" ? (
              <Button
                size="lg"
                className="bg-white text-saas-blue hover:bg-gray-100 group"
                onClick={handleCTAClick}
              >
                {ctaText}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            ) : (
              <Button
                size="lg"
                className="bg-white text-saas-blue hover:bg-gray-100 group"
                asChild
              >
                <Link to={ctaLink}>
                  {ctaText}
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            )}

            {secondaryCtaText && secondaryCtaLink && (
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white bg-saas-blue hover:bg-white/10"
                asChild
              >
                <Link to={secondaryCtaLink}>{secondaryCtaText}</Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
