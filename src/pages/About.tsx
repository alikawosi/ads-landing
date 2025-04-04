
import React from 'react';
import Layout from '@/components/layout/Layout';
import { COMPANY_NAME, TEAM_MEMBERS } from '@/constants';

const About = () => {
  return (
    <Layout>
      <div className="pt-20 pb-16 md:pt-28 md:pb-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">About {COMPANY_NAME}</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              Transforming the car dealership industry through artificial intelligence
            </p>
          </div>
        </div>
      </div>

      <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                {COMPANY_NAME} was founded in 2020 with a simple mission: to bring the power of artificial intelligence to car dealerships of all sizes.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                Our founder, Alex Morgan, spent 15 years working in the automotive industry and saw firsthand the challenges dealerships face in inventory management, customer matching, and market analysis.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Today, we're proud to serve dealerships across the country, helping them leverage AI to increase sales, optimize operations, and provide better customer experiences.
              </p>
            </div>
            <div className="animate-slide-in-right">
              <img src="/placeholder.svg" alt="Company History" className="rounded-lg shadow-xl" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Mission</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              To democratize access to AI technology in the automotive industry, enabling dealerships of all sizes to compete effectively in the digital age.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-md animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <h3 className="text-xl font-semibold mb-3 text-saas-blue">Innovation</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We're constantly pushing the boundaries of what's possible with AI in the automotive sector.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-md animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-xl font-semibold mb-3 text-saas-blue">Accessibility</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We make advanced AI tools accessible to dealerships of all sizes, not just the large groups.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-md animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <h3 className="text-xl font-semibold mb-3 text-saas-blue">Impact</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We measure our success by the tangible business impact we create for our customers.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              The talented people behind our innovative AI solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TEAM_MEMBERS.map((member, index) => (
              <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="mb-4 mx-auto w-40 h-40 rounded-full overflow-hidden border-4 border-saas-blue">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-saas-blue mb-3">{member.role}</p>
                <p className="text-gray-600 dark:text-gray-300 max-w-xs mx-auto">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
