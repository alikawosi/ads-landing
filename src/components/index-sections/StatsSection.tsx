
import React from "react";

const stats = [
  { label: "Average Increase in Inventory Turnover", value: "40%" },
  { label: "Higher Customer Satisfaction Scores", value: "35%" },
  { label: "Average Increase in Annual Revenue", value: "28%" }
];

const StatsSection = () => (
  <section className="py-16 bg-gray-50 dark:bg-gray-900">
    <div className="container mx-auto px-4 md:px-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, idx) => (
          <div key={idx} className="flex flex-col items-center text-center p-6 rounded-lg bg-white dark:bg-gray-800 shadow-md">
            <div className="text-5xl font-bold text-saas-blue mb-2">{stat.value}</div>
            <p className="text-gray-600 dark:text-gray-300">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default StatsSection;
