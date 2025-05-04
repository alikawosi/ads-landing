
import React, { useEffect } from 'react';
import Layout from '@/components/layout/Layout';

const Terms = () => {
  useEffect(() => {
    // Add Termly script
    const script = document.createElement('script');
    script.src = "https://app.termly.io/embed.min.js";
    script.setAttribute('data-auto-block', 'on');
    script.setAttribute('data-website-uuid', 'c7b7d90a-ba00-4660-92c0-e69aede86132');
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Clean up
      document.body.removeChild(script);
    };
  }, []);

  return (
    <Layout>
      <div className="pt-20 pb-16 md:pt-28 md:pb-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">Terms & Conditions</h1>
          </div>
        </div>
      </div>

      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div id="termly-embed" data-type="terms" data-website-uuid="c7b7d90a-ba00-4660-92c0-e69aede86132"></div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Terms;
