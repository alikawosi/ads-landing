
import React from "react";
import Layout from "@/components/layout/Layout";
import TermlyPolicy from "@/components/termly/TermlyPolicy";

const Privacy = () => {
  return (
    <Layout>
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <TermlyPolicy policyId="faa79a0b-79fe-4d6b-9c55-1688b5e4f2ce" />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Privacy;
