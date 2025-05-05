"use client";
import React from "react";
import { motion } from "framer-motion";
import { TESTIMONIALS } from "@/constants";

type Testimonial = {
  text: string;
  imageSrc: string;
  name: string;
  username: string;
};

interface TestimonialsColumnProps {
  testimonials: Testimonial[];
  className?: string;
  duration: number;
}

class TestimonialsColumn extends React.Component<TestimonialsColumnProps> {
  render() {
    const { testimonials, className, duration } = this.props;

    return (
      <div className={className}>
        <motion.div
          className="flex flex-col gap-8 py-6"
          animate={{ translateY: "-50%" }}
          transition={{
            duration,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
          }}
        >
          {[...Array(2)].map((_, index) => (
            <React.Fragment key={index}>
              {testimonials.map((testimonial, i) => (
                <div
                  key={`${testimonial.name}-${index}-${i}`}
                  className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md text-sm max-w-xs"
                >
                  <div className="text-gray-800 dark:text-gray-200 mb-4 leading-relaxed">
                    {testimonial.text}
                  </div>
                  <div className="flex items-center gap-3 mt-4">
                    <img
                      src={`/assets/${testimonial.imageSrc}`}
                      alt={testimonial.name}
                      width={40}
                      height={40}
                      className="h-10 w-10 rounded-full object-cover"
                    />
                    <div className="flex flex-col">
                      <span className="font-semibold text-gray-900 dark:text-white">
                        {testimonial.name}
                      </span>
                      <span className="text-gray-500 dark:text-gray-400 text-xs">
                        {testimonial.username}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          ))}
        </motion.div>
      </div>
    );
  }
}

export class TestimonialsSection extends React.Component {
  firstColumn = TESTIMONIALS.slice(0, 3);
  secondColumn = TESTIMONIALS.slice(3, 6);
  thirdColumn = TESTIMONIALS.slice(6, 9);

  render() {
    return (
      <section id="testimonials" className="bg-white dark:bg-gray-950 py-20">
        <div className=" mx-auto ">
          <div className="text-center ">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-saas-blue/10 text-saas-blue text-sm font-medium mb-4">
              <span className="w-2 h-2 rounded-full bg-saas-blue mr-2"></span>
              Testimonials
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">
              What our clients say
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto">
              From smart pricing to seamless outreach, discover how car
              dealerships are succeeding with our AI-driven platform.
            </p>
          </div>

          <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[738px] overflow-hidden">
            <TestimonialsColumn testimonials={this.firstColumn} duration={20} />
            <TestimonialsColumn
              testimonials={this.secondColumn}
              duration={20}
              className="hidden md:block"
            />
            <TestimonialsColumn
              testimonials={this.thirdColumn}
              duration={20}
              className="hidden lg:block"
            />
          </div>
        </div>
      </section>
    );
  }
}
