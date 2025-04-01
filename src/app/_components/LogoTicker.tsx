"use client";
import React from "react";
import acmelogo from "../../../public/logo-acme.png";
import quantumLogo from "../../../public/logo-quantum.png";
import celestial from "../../../public/logo-celestial.png";
import echo from "../../../public/logo-echo.png";
import pulse from "../../../public/logo-pulse.png";
import apex from "../../../public/logo-apex.png";
import Image from "next/image";
import { motion } from "framer-motion";
type Props = {};

const images = [acmelogo, quantumLogo, echo, celestial, pulse, apex];

const LogoTicker = (props: Props) => {


  return (
    <div className="bg-white py-8 md:py-12">
      <div className="container">
        <div
          className="flex overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black, transparent)",
          }}
        >
          <motion.div
            className="flex gap-14 flex-none pr-14"
            animate={{ translateX: "-50%" }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
          >
            {images.map((image, index) => (
              <Image
                className="h-8 w-auto"
                key={index}
                src={image}
                alt={`Logo ${image}`}
              />
            ))}
            {images.map((image, index) => (
              <Image
                className="h-8 w-auto"
                key={index}
                src={image}
                alt={`Logo ${image}`}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default LogoTicker;
