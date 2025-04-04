
import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { Quote } from 'lucide-react';

interface TestimonialProps {
  content: string;
  author: string;
  role: string;
  image?: string;
}

const TestimonialCard = ({ content, author, role, image }: TestimonialProps) => {
  return (
    <Card className="border-0 shadow-lg dark:bg-gray-800">
      <CardContent className="p-8">
        <Quote className="h-10 w-10 text-saas-blue opacity-20 mb-4" />
        <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">{content}</p>
        <div className="flex items-center">
          {image ? (
            <img 
              src={image} 
              alt={author} 
              className="h-12 w-12 rounded-full mr-4 object-cover"
            />
          ) : (
            <div className="h-12 w-12 rounded-full bg-saas-blue flex items-center justify-center text-white mr-4">
              {author.charAt(0)}
            </div>
          )}
          <div>
            <h4 className="font-semibold">{author}</h4>
            <p className="text-sm text-gray-500 dark:text-gray-400">{role}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

interface TestimonialSectionProps {
  testimonials: TestimonialProps[];
  title: string;
  subtitle?: string;
}

const TestimonialSection = ({ testimonials, title, subtitle }: TestimonialSectionProps) => {
  return (
    <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          {subtitle && <p className="text-xl text-gray-600 dark:text-gray-300">{subtitle}</p>}
        </div>
        
        <Carousel className="max-w-5xl mx-auto">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2 p-4">
                <div className="h-full">
                  <TestimonialCard {...testimonial} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-8 gap-4">
            <CarouselPrevious className="static" />
            <CarouselNext className="static" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialSection;
