import React from "react";
import ArowRight from "../../../public/arrow-right.svg";
import star from "../../../public/star.png";
import spring from "../../../public/spring.png";
import Image from "next/image";
type Props = {};

const CallToAction = (props: Props) => {
  return (
    <section className="bg-gradient-to-b from-white to-[#d2dcff] py-32 overflow-x-clip">
      <div className="container">
        <div className="max-w-[540px] mx-auto relative">
          <h2 className="section-title">Signup for free today</h2>
          <p className="section-description mt-5">
            Celebarte the joy of accomplishment with an app designed to track
            your progress and motivate your efforts
          </p>
          <Image
            src={star}
            width={360}
            height={360}
            alt=""
            className="absolute -left-[350px] -top-[137px]"
          />
          <Image
            src={spring}
            width={360}
            height={360}
            alt=""
            className="absolute -right-[331px] -top-[19px]"
          />
        </div>
        <div className="flex gap-2 mt-10  justify-center">
          <button className="btn btn-primary">Get for free</button>
          <button className="btn btn-text gap-1 bg-white">
            <span>Learn more</span>
            <ArowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
