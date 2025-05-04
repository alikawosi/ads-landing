
import React from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const stats = [
  { label: "Reducing Costs of Dealerships", value: "35%" },
  { label: "Saving Time for Finding Suitable Car", value: "7 Hours" },
  { label: "Average Increase in Annual Revenue", value: "43%" },
];

const StatsSection = () => {
  const isMobile = useIsMobile();
  
  return (
    <section className="py-8 md:py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center p-4 md:p-6 rounded-lg bg-white dark:bg-gray-800 shadow-md"
            >
              <div className="text-3xl md:text-5xl font-bold text-saas-blue mb-2">
                {stat.value}
              </div>
              <p className="text-sm md:text-base text-gray-600 dark:text-gray-300">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
