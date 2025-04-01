"use client";
import React, { useRef } from "react";
import productImage from "../../../public/product-image.png";
import Image from "next/image";
import pryamid from "../../../public/pyramid.png";
import tube from "../../../public/tube.png";
import { motion, useScroll, useTransform } from "framer-motion";

const ProductShowcase = () => {
  const ProductShowcaseRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ProductShowcaseRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section
      ref={ProductShowcaseRef}
      className="bg-gradient-to-b from-[#ffffff] to-[#d2dCff] py-24 overflow-x-clip"
    >
      <div className="container">
        <div className="max-w-[540px] mx-auto">
          <div className="flex justify-center">
            <div className="tag">Boost Your productivity </div>
          </div>
          <h2 className="section-title mt-5">
            A more effective way to track your progress
          </h2>
          <p className="section-description mt-5">
            Effortlessly trun your ideas into a fully functional, responseive,
            website in just minutes with this template.
          </p>
        </div>
        <div className="relative">
          <Image src={productImage} alt="productImage" className="mt-10" />
          <motion.img
            src={pryamid.src}
            height={262}
            width={262}
            alt="prymaid"
            className="hidden md:block mt-10 absolute -right-36 -top-32"
            style={{ translateY }}
          />
          <motion.img
            src={tube.src}
            height={248}
            width={248}
            alt="tube"
            className="hidden md:block mt-10 absolute bottom-24 -left-36"
            style={{ translateY }}
          />
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
