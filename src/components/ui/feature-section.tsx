
import React from 'react';
import { 
  BarChart, Users, LineChart, FilterX, MessageSquare, Wrench, 
  ShieldCheck, Zap, Award, RotateCcw, Lightbulb, Gauge
} from 'lucide-react';

interface FeatureProps {
  title: string;
  description: string;
  icon: string;
}

// Icon mapping
const iconComponents = {
  BarChart: BarChart,
  Users: Users,
  LineChart: LineChart,
  FilterX: FilterX,
  MessageSquare: MessageSquare,
  Wrench: Wrench,
  ShieldCheck: ShieldCheck,
  Zap: Zap,
  Award: Award,
  RotateCcw: RotateCcw,
  Lightbulb: Lightbulb,
  Gauge: Gauge,
};

const Feature = ({ title, description, icon }: FeatureProps) => {
  const IconComponent = iconComponents[icon as keyof typeof iconComponents] || BarChart;
  
  return (
    <div className="p-6 rounded-lg border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow bg-white dark:bg-gray-800 group">
      <div className="w-12 h-12 rounded-full bg-saas-blue/10 flex items-center justify-center mb-4 group-hover:bg-saas-blue/20 transition-colors">
        <IconComponent className="h-6 w-6 text-saas-blue" />
      </div>
      <h3 className="text-lg font-semibold mb-2 group-hover:text-saas-blue transition-colors">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  );
};

interface FeatureSectionProps {
  title: string;
  subtitle?: string;
  features: FeatureProps[];
}

const FeatureSection = ({ title, subtitle, features }: FeatureSectionProps) => {
  return (
    <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          {subtitle && <p className="text-xl text-gray-600 dark:text-gray-300">{subtitle}</p>}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <Feature {...feature} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
