
import React from 'react';
import Layout from '@/components/layout/Layout';
import { COMPANY_NAME } from '@/constants';

const Terms = () => {
  return (
    <Layout>
      <div className="pt-20 pb-16 md:pt-28 md:pb-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">Terms & Conditions</h1>
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
              These Terms and Conditions ("Terms") govern your access to and use of {COMPANY_NAME}'s services, website, and applications (collectively, the "Services"). Please read these Terms carefully before using our Services.
            </p>
            
            <h2>Acceptance of Terms</h2>
            <p>
              By accessing or using our Services, you agree to be bound by these Terms. If you do not agree to these Terms, you may not access or use the Services.
            </p>
            
            <h2>Description of Services</h2>
            <p>
              {COMPANY_NAME} provides AI-powered solutions for car dealerships, including inventory analysis, customer matching, market price prediction, and other related services. The specific features and functionality available to you depend on the subscription plan you select.
            </p>
            
            <h2>Account Registration</h2>
            <p>
              To use certain features of our Services, you must create an account. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete.
            </p>
            <p>
              You are responsible for safeguarding your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.
            </p>
            
            <h2>Subscription and Payment</h2>
            <p>
              Certain aspects of our Services require a paid subscription. By subscribing to our Services, you agree to pay the applicable fees as they become due. All fees are non-refundable except as expressly set forth in these Terms.
            </p>
            <p>
              We may change our fees at any time with notice to you. If you do not accept the fee change, you have the right to reject the change by canceling your subscription before the fee change takes effect.
            </p>
            
            <h2>Intellectual Property Rights</h2>
            <p>
              The Services and their contents, features, and functionality are owned by {COMPANY_NAME} and are protected by copyright, trademark, and other intellectual property laws.
            </p>
            <p>
              You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material on our Services without our prior written consent.
            </p>
            
            <h2>User Content</h2>
            <p>
              You retain ownership of any content you submit to our Services ("User Content"). By submitting User Content, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, adapt, publish, translate, and distribute your User Content in connection with providing and improving our Services.
            </p>
            
            <h2>Prohibited Uses</h2>
            <p>
              You agree not to use our Services:
            </p>
            <ul>
              <li>In any way that violates applicable laws or regulations</li>
              <li>To transmit any material that is defamatory, obscene, or offensive</li>
              <li>To engage in any conduct that restricts or inhibits anyone's use or enjoyment of the Services</li>
              <li>To attempt to gain unauthorized access to the Services or related systems</li>
              <li>To engage in any automated use of the system, such as using scripts to send messages or upload content</li>
            </ul>
            
            <h2>Termination</h2>
            <p>
              We may terminate or suspend your account and access to our Services immediately, without prior notice or liability, for any reason, including if you breach these Terms.
            </p>
            
            <h2>Limitation of Liability</h2>
            <p>
              In no event will {COMPANY_NAME}, its affiliates, or their licensors, service providers, employees, agents, officers, or directors be liable for damages of any kind arising from the use of our Services, including but not limited to direct, indirect, incidental, punitive, and consequential damages.
            </p>
            
            <h2>Changes to Terms</h2>
            <p>
              We may revise and update these Terms from time to time at our sole discretion. All changes are effective immediately when we post them. Your continued use of the Services following the posting of revised Terms means that you accept and agree to the changes.
            </p>
            
            <h2>Governing Law</h2>
            <p>
              These Terms and any dispute arising out of or related to these Terms or the Services shall be governed by and construed in accordance with the laws of the State of California, without giving effect to any choice or conflict of law provision.
            </p>
            
            <h2>Contact Information</h2>
            <p>
              If you have any questions about these Terms, please contact us at:
            </p>
            <p>
              Email: legal@autoai.example.com<br />
              Address: 123 AI Boulevard, Silicon Valley, CA 94025
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Terms;
