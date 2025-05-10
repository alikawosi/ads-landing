import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import { useIsMobile } from "@/hooks/use-mobile";

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
  ctaLink = import.meta.env.VITE_APP_URL,
  secondaryCtaText,
  secondaryCtaLink,
  backgroundClass = "bg-saas-blue",
}) => {
  const isMobile = useIsMobile();

  const handleCTAClick = () => {
    if (
      ctaLink === import.meta.env.VITE_APP_URL ||
      ctaLink === "import.meta.env.VITE_APP_URL"
    ) {
      window.open(
        import.meta.env.VITE_APP_URL,
        "_blank",
        "noopener,noreferrer"
      );
    }
  };

  return (
    <section className={`py-12 md:py-24 ${backgroundClass}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-white">
            {title}
          </h2>
          <p className="text-base sm:text-lg md:text-xl mb-6 md:mb-8 text-white/90">
            {subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {ctaLink === import.meta.env.VITE_APP_URL ||
            ctaLink === "import.meta.env.VITE_APP_URL" ? (
              <Button
                size={isMobile ? "default" : "lg"}
                className="w-full sm:w-auto bg-white text-saas-blue hover:bg-gray-100 group"
                onClick={handleCTAClick}
              >
                {ctaText}
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            ) : (
              <Button
                size={isMobile ? "default" : "lg"}
                className="w-full sm:w-auto bg-white text-saas-blue hover:bg-gray-100 group"
                asChild
              >
                <Link to={ctaLink}>
                  {ctaText}
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            )}

            {secondaryCtaText && secondaryCtaLink && (
              <Button
                size={isMobile ? "default" : "lg"}
                variant="outline"
                className="w-full sm:w-auto border-white text-white bg-saas-blue hover:bg-white/10"
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
