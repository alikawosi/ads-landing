import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { COMPANY_NAME } from "@/constants";
import { motion } from "framer-motion";

const stepVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const steps = [
  {
    title: "Set Your Preferences",
    desc: "Describe your ideal car—our AI takes it from there.",
  },
  {
    title: "AI Search & Valuation",
    desc: "We scan multiple sources and deliver a curated list with smart valuations.",
  },
  {
    title: "Instant Contact",
    desc: "Reach out to car owners directly with AI-assisted messaging and calls.",
  },
];

const HowItWorksSection = () => (
  <motion.section
    className="py-20 bg-gray-50 dark:bg-gray-900"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.8 }}
  >
    <div className="container mx-auto px-4 md:px-6">
      <div className="flex flex-col items-center text-center mb-16">
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-saas-blue/10 text-saas-blue text-sm font-medium mb-4">
          <span className="w-2 h-2 rounded-full bg-saas-blue mr-2"></span>
          How it works
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Let AI handle the heavy lifting
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl">
          From setting preferences to finding and connecting with sellers, our
          AI-driven process makes it seamless and smart.
        </p>
      </div>

      {/* Steps with connecting line */}
      <div className="relative">
        {/* Connecting line */}
        <div className="hidden md:block absolute top-[34px] left-0 right-0 h-0.5 bg-saas-blue/30 z-0"></div>
        <div className="md:hidden absolute top-0 bottom-0 left-[calc(50%-1px)] w-0.5 bg-saas-blue/30 z-0"></div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center relative z-10">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              className="flex flex-col items-center"
              variants={stepVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={i}
            >
              <div className="w-12 h-12 mb-4 rounded-full bg-saas-blue text-white flex items-center justify-center text-xl font-bold z-10">
                {i + 1}
              </div>
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA section */}
      <div className="mt-20 bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="p-8 md:p-12 flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-4">
              Experience the AI advantage
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Book a custom demo to explore how {COMPANY_NAME} transforms car
              sourcing and sales using artificial intelligence.
            </p>
            <Button className="w-full md:w-auto" asChild>
              <Link to="/contact">Schedule Demo</Link>
            </Button>
          </div>
          <div className="bg-gray-100 dark:bg-gray-700 p-8 md:p-0 flex items-center justify-center">
            <img
              src="/placeholder.svg"
              alt="Platform Preview"
              className="max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  </motion.section>
);

export default HowItWorksSection;
