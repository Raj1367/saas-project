import Image from "next/image";
import React from "react";
import logo from "../../../public/logosaas.png";
import Link from "next/link";
import SocialX from "../../../public/social-x.svg";
import SocialPin from "../../../public/social-pin.svg";
import SocialInsta from "../../../public/social-insta.svg";
import SocialLinkedin from "../../../public/social-linkedin.svg";
import SocialYoutube from "../../../public/social-youtube.svg";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="bg-black text-[#bcbcbc] text-sm py-10 text-center">
      <div className="container">
        <div className="inline-flex relative before:content-[''] before:top-0 before:bottom-0 before:blur before:w-full before:bg-[linear-gradient(to_right,#f8b7ff,#fb92cf,#ffdd9b,#c2f0b1,#2fd8fe)] before:absolute">
          <Image src={logo} height={40} alt="logo" className="relative" />
        </div>
        <nav className="flex flex-col md:flex-row md:justify-center gap-6 mt-6" >
          <Link href="">About</Link> 
          <Link href="">Features</Link>
          <Link href="">Customers</Link>
          <Link href="">Pricing</Link>
          <Link href="">Help</Link>
          <Link href="">Careers</Link>
        </nav>
        <div className="flex justify-center gap-6 mt-6">
          <SocialX />
          <SocialInsta />
          <SocialLinkedin />
          <SocialPin />
          <SocialYoutube />
        </div>
        <p className="mt-6"> &copy; 2025 Prism Inc. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
