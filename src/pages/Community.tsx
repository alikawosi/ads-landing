
import React from "react";
import Layout from "@/components/layout/Layout";
import { Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const Community = () => {
  return (
    <Layout>
      <section className="py-16 min-h-[50vh] bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-950 text-center flex flex-col items-center justify-center">
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-saas-blue/10 text-saas-blue text-lg font-bold mb-6">
          <Users className="mr-2" /> Community & Collaboration <span className="ml-4 bg-blue-500 text-white uppercase px-3 py-1 rounded-full text-xs">Coming Soon</span>
        </div>
        <h1 className="text-4xl font-bold mb-4">Join the autodealersolution Community</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-xl mx-auto">
          Connect, share, and grow your dealership business with a network of industry leaders.
          Get early access to beta features, discuss best practices, and be part of a growing community of professionals.
        </p>
        <Button size="lg" className="rounded-[16px]" disabled>
          Request Early Access
        </Button>
        <div className="mt-12 max-w-lg mx-auto text-saas-blue/80 font-medium">
          Community features: Live Q&A, Collaboration Boards, Marketplace, and more—coming soon!
        </div>
      </section>
    </Layout>
  );
};

export default Community;
