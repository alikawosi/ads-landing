
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const TESTIMONIALS = [
  {
    content:
      "\"Since implementing this platform, our inventory turnover has increased by 35%. The AI recommendations for which vehicles to stock have been spot on.\"",
    author: "Michael Rodriguez",
    company: "California Motors"
  },
  {
    content:
      "\"The customer matching feature has completely transformed our sales approach. We're closing deals faster and customers are happier with their purchases.\"",
    author: "Sarah Johnson",
    company: "Prestige Auto Group"
  },
  {
    content:
      "\"The predictive analytics have given us a competitive edge in our market. We know what vehicles to stock before our competition does.\"",
    author: "David Thompson",
    company: "Elite Motors"
  }
];

class TestimonialsSection extends React.Component {
  render() {
    return (
      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-16">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-saas-blue/10 text-saas-blue text-sm font-medium mb-4">
              <span className="w-2 h-2 rounded-full bg-saas-blue mr-2"></span>
              Success Stories
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted by dealerships nationwide</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl">
              See how auto dealerships across the country have transformed their business with our platform.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((testimonial, idx) => (
              <Card className="bg-white dark:bg-gray-800 shadow-md border-0" key={idx}>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="text-saas-blue">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-lg">★</span>
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">{testimonial.content}</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center overflow-hidden mr-3">
                      <img 
                        src={`/src/assets/avatar-${idx + 1}.png`} 
                        alt={testimonial.author}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-semibold">{testimonial.author}</div>
                      <div className="text-sm text-gray-500">{testimonial.company}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export default TestimonialsSection;
