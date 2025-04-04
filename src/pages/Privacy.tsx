
import React from 'react';
import Layout from '@/components/layout/Layout';
import { COMPANY_NAME } from '@/constants';

const Privacy = () => {
  return (
    <Layout>
      <div className="pt-20 pb-16 md:pt-28 md:pb-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">Privacy Policy</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              Last updated: April 1, 2025
            </p>
          </div>
        </div>
      </div>

      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto prose prose-lg dark:prose-invert">
            <p>
              This Privacy Policy describes how {COMPANY_NAME} ("we", "us", or "our") collects, uses, and discloses your information when you use our services, website, and applications (collectively, the "Services").
            </p>
            
            <h2>Information We Collect</h2>
            <p>
              We collect several types of information from and about users of our Services, including:
            </p>
            <ul>
              <li>
                <strong>Personal Data:</strong> We may collect personal information that you provide to us, such as your name, email address, telephone number, company name, and job title.
              </li>
              <li>
                <strong>Usage Data:</strong> We automatically collect information about your interaction with our Services, including pages visited, time spent, and other statistical data.
              </li>
              <li>
                <strong>Dealership Data:</strong> When you use our Services, we process information related to your dealership, including inventory data, sales records, and customer information that you input into our system.
              </li>
            </ul>
            
            <h2>How We Use Your Information</h2>
            <p>
              We use the information we collect for various purposes, including:
            </p>
            <ul>
              <li>Providing, maintaining, and improving our Services</li>
              <li>Processing transactions and sending related information</li>
              <li>Sending administrative messages and communications</li>
              <li>Responding to your comments, questions, and requests</li>
              <li>Providing customer support</li>
              <li>Training and improving our AI models to better serve your needs</li>
              <li>Monitoring and analyzing trends, usage, and activities in connection with our Services</li>
              <li>Detecting, preventing, and addressing technical issues</li>
            </ul>
            
            <h2>Data Security</h2>
            <p>
              We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>
            
            <h2>Data Retention</h2>
            <p>
              We will retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, and as required by applicable laws and regulations.
            </p>
            
            <h2>Third-Party Services</h2>
            <p>
              Our Services may contain links to third-party websites or services. We are not responsible for the privacy practices or content of these third-party sites. We encourage you to review the privacy policies of any third-party services you access.
            </p>
            
            <h2>Your Rights</h2>
            <p>
              Depending on your location, you may have certain rights regarding your personal information, such as:
            </p>
            <ul>
              <li>The right to access personal information we hold about you</li>
              <li>The right to request correction of inaccurate information</li>
              <li>The right to request deletion of your information</li>
              <li>The right to object to processing of your information</li>
              <li>The right to data portability</li>
            </ul>
            
            <h2>Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date at the top.
            </p>
            
            <h2>Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <p>
              Email: privacy@autoai.example.com<br />
              Address: 123 AI Boulevard, Silicon Valley, CA 94025
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Privacy;
