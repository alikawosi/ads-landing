import React, { useEffect } from "react";
import Layout from "@/components/layout/Layout";
import TermlyPolicy from "@/components/termly/TermlyPolicy";

const Terms = () => {
  useEffect(() => {
    // Add Termly script
    const script = document.createElement("script");
    script.src = "https://app.termly.io/embed.min.js";
    script.setAttribute("data-auto-block", "on");
    script.setAttribute(
      "data-website-uuid",
      "c7b7d90a-ba00-4660-92c0-e69aede86132"
    );
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Clean up
      document.body.removeChild(script);
    };
  }, []);

  return (
    <Layout>
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <TermlyPolicy policyId="a06b5e7c-36cc-4d40-a366-037d9386a1ce" />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Terms;
