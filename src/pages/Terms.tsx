
import React from "react";
import Layout from "@/components/layout/Layout";
import TermlyPolicy from "@/components/termly/TermlyPolicy";

const Terms = () => {
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
