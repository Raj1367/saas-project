"use client";
import React from "react";
import TestimonialData from "../../../data/Testimonials";
import Image from "next/image";
import { div } from "motion/react-m";
import { motion } from "framer-motion";

type Testimonial = {
  text: string;
  imageSrc: string;
  name: string;
  username: string;
};

type TestimonialsColumnProps = {
  column: Testimonial[];
  className?: string;
};

const TestimonialsColumn: React.FC<TestimonialsColumnProps> = ({
  column,
  className,
}) => {
  return (
    <div className={`relative overflow-hidden h-[600px] pt-6 ${className}`}>
      <motion.div
        animate={{ y: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
          duration: 12,
        }}
        className="flex flex-col gap-6"
      >
        {[...new Array(2)].map((_, index) => (
          <React.Fragment key={index}>
            {column.map((data, idx) => (
              <div
                key={idx}
                className="border border-[#f1f1f1] bg-white shadow-md max-w-xs w-full p-6 rounded-3xl text-center"
              >
                <div className="line-clamp-3">{data.text}</div>
                <div className="flex items-center gap-2 mt-5">
                  <Image
                    width={40}
                    height={40}
                    src={data.imageSrc}
                    alt={data.name}
                    className="rounded-full"
                  />
                  <div className="flex flex-col">
                    <div className="font-medium tracking-tight leading-5">
                      {data.name}
                    </div>
                    <div className="leading-5 text-gray-500">
                      {data.username}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
};

const Testimonials = () => {
  const firstColumn = TestimonialData.slice(0, 3);
  const secondColumn = TestimonialData.slice(3, 6);
  const thirdColumn = TestimonialData.slice(6, 9);

  return (
    <section className="bg-white py-6 md:py-0">
      <div className="container">
        <div className="flex justify-center">
          <div className="tag">Testimonials</div>
        </div>
        <div className="max-w-[540px] mx-auto">
          <h2 className="section-title mt-5">What our users say</h2>
          <p className="section-description mt-5">
            From intuitive design to powerful features, our app has become an
            essential tool for users around the world.
          </p>
        </div>

        <div
          className="flex justify-center gap-6 mt-10"
          style={{
            maskImage:
              "linear-gradient(to bottom, transparent, black 25%, black 75%, transparent)",
          }}
        >
          <TestimonialsColumn column={firstColumn} className="flex flex-col" />
          <TestimonialsColumn
            column={secondColumn}
            className="hidden md:flex flex-col"
          />
          <TestimonialsColumn
            column={thirdColumn}
            className="hidden lg:flex flex-col"
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
