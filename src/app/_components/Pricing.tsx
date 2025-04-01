"use client";
import pricingTiers from "../../../data/Pricing";
import CheckIcon from "../../../public/check.svg";
import React from "react";
import { motion } from "framer-motion";

type Props = {};

const Pricing = (props: Props) => {
  return (
    <section className="py-24 bg-white">
      <div className="container">
        <div className="max-w-[540px] mx-auto">
          <h2 className="section-title">Pricing</h2>
          <p className="section-description mt-5">
            Free forever. Upgrade for unlimited tasks, better security and
            exclusive features.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row lg:items-end gap-6 items-center mt-10 lg:justify-center">
          {pricingTiers.map((tier, index) => (
            <div
              className={`p-10 rounded-3xl ${
                tier.popular
                  ? "border border-black bg-black text-white"
                  : "border border-[#f1f1f1] bg-white"
              }  shadow-[0_7px_14px_#EAEAEA] max-w-xs w-full`}
              key={index}
            >
              <div className="flex justify-between">
                <h3
                  className={`text-lg font-bold ${
                    tier.popular ? "text-white" : "text-black/50"
                  } leading-none`}
                >
                  {tier.title}
                </h3>
                {tier.popular && (
                  <div className="inline-flex text-sm px-4 py-1.5 rounded-xl border-2">
                    <motion.span
                      animate={{ backgroundPositionX: "100%" }}
                      transition={{ repeat: Infinity, ease: "linear", repeatType:"loop", duration:1 }}
                      className="gradient-rainbow"
                    >
                      Popular
                    </motion.span>
                  </div>
                )}
              </div>

              <div className="flex items-baseline gap-4 mt-[30px]">
                <span className="text-4xl font-bold tracking-tighter">
                  ${tier.monthlyPrice}
                </span>
                <span
                  className={`tracking-tight font-bold ${
                    tier.popular ? "text-white" : "text-black/50"
                  }`}
                >
                  month
                </span>
              </div>
              <button
                className={`btn ${
                  tier.popular ? "btn-secondary" : "btn-primary"
                } w-full mt-[30px]`}
              >
                {tier.buttonText}
              </button>
              <ul className="flex flex-col  items-center gap-5 mt-8">
                {tier.features.map((feature, index) => (
                  <li
                    className="text-sm flex items-center gap-4 w-full"
                    key={index}
                  >
                    <CheckIcon className="w-5 h-5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
