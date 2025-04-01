"use client";
import React, { useRef } from "react";
import ArowRight from "../../../public/arrow-right.svg";
import CogImage from "../../../public/cog.png";
import cylinder from "../../../public/cylinder.png";
import noodle from "../../../public/noodle.png";
import { motion, useScroll, useTransform } from "framer-motion";

type Props = {};

const Hero = (props: Props) => {
  
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section
      ref={heroRef}
      className="pt-8 pb-20 md:pt-5 md:pb-10 gradient-primary overflow-x-clip"
    >
      <div className="container">
        <div className="md:flex items-center">
          <div className="md:w-[470px]">
            <div className="tag">Version 2.0 is here</div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6">
              Pathway to productivity
            </h1>
            <p className="text-xl text-[#010DE] tracking-tight mt-6">
              Celebrate the joy of accomplishmnet with an app designed to trap
              your progress, motivate your efforts and celebrate your successes.
            </p>
            <div className="flex gap-1 items-center mt-[30px] ">
              <button className="btn btn-primary">Get for free</button>
              <button className="btn btn-text gap-1 bg-white">
                <span>Learn more</span>
                <ArowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
          <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative">
            <motion.img
              src={CogImage.src}
              alt="Cog Image"
              className="md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg:left-0"
              animate={{ translateY: [-30, 30] }}
              transition={{
                repeat: Infinity,
                repeatType: "mirror",
                duration: 3,
                ease: "easeInOut",
              }}
            />
            <motion.img
              src={cylinder.src}
              height={220}
              width={220}
              alt="cylinder"
              className="hidden md:block -top-8 -left-32 absolute"
              style={{ translateY }}
            />
            <motion.img
              src={noodle.src}
              alt="noodle image"
              width={220}
              height={220}
              className={`hidden lg:block absolute top-[524px] left-[448px]`}
              style={{ translateY, rotate: 30 }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
