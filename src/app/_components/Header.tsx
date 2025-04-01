import React from "react";
import ArowRight from "../../../public/arrow-right.svg";
import Logo from "../../../public/logosaas.png";
import Image from "next/image";
import MenuIcon from "../../../public/menu.svg";
import Link from "next/link";
type Props = {};

const Header = (props: Props) => {

  return (
    <header className="sticky top-0 backdrop-blur-sm z-20">
      <div className="flex justify-center items-center bg-black py-3 text-white text-sm gap-3">
        <p className="text-white/60 hidden md:block">
          Streamline work flow and boost your productivity
        </p>
        <div className="inline-flex gap-1 items-center">
          <p>Get started for free</p>
          <ArowRight className="h-4 w-4 inline-flex justify-center items-center" />
        </div>
      </div>
      <div className="py-5">
        <div className="container">
          <div className="flex items-center justify-between">
            <Image src={Logo} alt="Logo" height={40} width={40} />
            <MenuIcon className="h-5 w-5 md:hidden" />
            <nav className="hidden md:flex gap-6 text-black/60 items-center">
              <Link href="">About</Link>
              <Link href="">Features</Link>
              <Link href="">Customers</Link>
              <Link href="">Help</Link>
              <button className="bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex items-center justify-center tracking-tight">
                Get for Free
              </button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
