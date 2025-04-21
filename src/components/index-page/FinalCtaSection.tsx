
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const FinalCtaSection = () => (
  <section className="py-20 bg-saas-blue text-white">
    <div className="container mx-auto px-4 md:px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to transform your dealership?</h2>
        <p className="text-xl mb-8 opacity-90">
          Join thousands of dealerships already using our AI solutions to optimize inventory, match customers, and increase profits.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" className="bg-white text-saas-blue hover:bg-gray-100" asChild>
            <Link to="/signup">
              Start Free Trial
            </Link>
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20" asChild>
            <Link to="/demo">
              Schedule Demo
            </Link>
          </Button>
        </div>
      </div>
    </div>
  </section>
);

export default FinalCtaSection;
