
import React from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  title: string;
  subtitle: string;
  faqs: FAQItem[];
}

export class FAQSection extends React.Component<FAQSectionProps> {
  renderFAQItem(faq: FAQItem, index: number) {
    return (
      <div key={index} className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm">
        <h3 className="text-xl font-semibold mb-3">{faq.question}</h3>
        <p className="text-gray-600 dark:text-gray-300">
          {faq.answer}
        </p>
      </div>
    );
  }
  
  render() {
    const { title, subtitle, faqs } = this.props;
    
    return (
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">{title}</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              {subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {faqs.map((faq, index) => this.renderFAQItem(faq, index))}
          </div>
        </div>
      </section>
    );
  }
}

export default FAQSection;
