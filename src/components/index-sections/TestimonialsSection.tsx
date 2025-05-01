"use client";
import React from "react";
import { motion } from "framer-motion";

import avatar1 from "@/assets/avatar-1.png";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";
import avatar4 from "@/assets/avatar-4.png";
import avatar5 from "@/assets/avatar-5.png";
import avatar6 from "@/assets/avatar-6.png";
import avatar7 from "@/assets/avatar-7.png";
import avatar8 from "@/assets/avatar-8.png";
import avatar9 from "@/assets/avatar-9.png";

const testimonials = [
  {
    text: "Since using this platform, our stock turnover increased by 35%. The AI suggestions on what to buy have been incredibly accurate.",
    imageSrc: avatar1,
    name: "Michael Rodriguez",
    username: "California Motors",
  },
  {
    text: "We’re closing deals faster thanks to the customer-matching features. Our team is more efficient and customers are more satisfied.",
    imageSrc: avatar2,
    name: "Sarah Johnson",
    username: "Prestige Auto Group",
  },
  {
    text: "Predictive analytics gave us a market edge. We stock the right cars before competitors even react.",
    imageSrc: avatar3,
    name: "David Thompson",
    username: "Elite Motors",
  },
  {
    text: "Love the experience. Smooth interface and smart recommendations.",
    imageSrc: avatar9,
    name: "Casey Harper",
    username: "Elite Auto Source",
  },
  {
    text: "This app streamlined how we find, price, and reach out to owners. Game changer for our workflow.",
    imageSrc: avatar4,
    name: "Casey Jordan",
    username: "AutoSmart Ltd",
  },
  {
    text: "Our sourcing team now spends half the time researching. AI does the hard work for us.",
    imageSrc: avatar5,
    name: "Taylor Kim",
    username: "MotorLink Solutions",
  },
  {
    text: "Love the experience. Smooth interface and smart recommendations.",
    imageSrc: avatar9,
    name: "Casey Harper",
    username: "Elite Auto Source",
  },
  {
    text: "We integrated it in days, and it’s now core to our dealership operations.",
    imageSrc: avatar6,
    name: "Riley Smith",
    username: "DriveNow Auto",
  },
  {
    text: "Efficient, intuitive, and packed with features that matter. Highly recommended.",
    imageSrc: avatar7,
    name: "Jordan Patels",
    username: "Prime Auto Group",
  },
  {
    text: "Everything in one place—valuation, search, and outreach. This is what digital dealerships should be.",
    imageSrc: avatar8,
    name: "Sam Dawson",
    username: "CarDirect HQ",
  },
  {
    text: "Love the experience. Smooth interface and smart recommendations.",
    imageSrc: avatar9,
    name: "Casey Harper",
    username: "Elite Auto Source",
  },
  ,
  {
    text: "Love the experience. Smooth interface and smart recommendations.",
    imageSrc: avatar9,
    name: "Casey Harper",
    username: "Elite Auto Source",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

type Testimonial = {
  text: string;
  imageSrc: string;
  name: string;
  username: string;
};

const TestimonialsColumn = ({
  testimonials,
  className,
  duration,
}: {
  testimonials: Testimonial[];
  className?: string;
  duration: number;
}) => (
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
      {[...Array(2)].fill(0).map((_, index) => (
        <React.Fragment key={index}>
          {testimonials.map(({ text, imageSrc, name, username }) => (
            <div
              key={name + index}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md text-sm max-w-xs"
            >
              <div className="text-gray-800 dark:text-gray-200 mb-4 leading-relaxed">
                {text}
              </div>
              <div className="flex items-center gap-3 mt-4">
                <img
                  src={imageSrc}
                  alt={name}
                  width={40}
                  height={40}
                  className="h-10 w-10 rounded-full object-cover"
                />
                <div className="flex flex-col">
                  <span className="font-semibold text-gray-900 dark:text-white">
                    {name}
                  </span>
                  <span className="text-gray-500 dark:text-gray-400 text-xs">
                    {username}
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

const TestimonialsSection = () => {
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
          <TestimonialsColumn testimonials={firstColumn} duration={20} />
          <TestimonialsColumn
            testimonials={secondColumn}
            duration={20}
            className="hidden md:block"
          />
          <TestimonialsColumn
            testimonials={thirdColumn}
            duration={20}
            className="hidden lg:block"
          />
        </div>
      </div>
    </section>
  );
};

export { TestimonialsSection };
