
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Car } from 'lucide-react';

interface CTASectionProps {
  title: string;
  subtitle?: string;
  ctaText: string;
  ctaLink: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  backgroundClass?: string;
}

const CTASection = ({
  title,
  subtitle,
  ctaText,
  ctaLink,
  secondaryCtaText,
  secondaryCtaLink,
  backgroundClass = "bg-saas-blue"
}: CTASectionProps) => {
  return (
    <section className={`py-16 md:py-20 ${backgroundClass}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            {title}
          </h2>
          {subtitle && (
            <p className="text-xl mb-8 text-white/80">
              {subtitle}
            </p>
          )}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" radius="lg" variant="default" className="bg-white text-saas-blue hover:bg-gray-100" asChild>
              <Link to={ctaLink} className="flex items-center gap-2">
                {ctaText} <Car size={16} />
              </Link>
            </Button>
            {secondaryCtaText && (
              <Button size="lg" radius="lg" variant="outline" className="border-white text-white hover:bg-white/20" asChild>
                <Link to={secondaryCtaLink || "#"}>{secondaryCtaText}</Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
