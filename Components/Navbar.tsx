import { navbar } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import CustomButton from "./CustomButton";

const Navbar = () => {
  return (
    <nav className="fixed left-0 top-0 w-full h-9">
      <div className="container flex items-center justify-between bg-black">
        <Link href="#" className="company_logo">
          <Image src="/logo.png" alt="Company Logo" width={50} height={50} />
        </Link>
        <div>
          <ul className="flex items-center justify-end gap-9">
            {navbar.map((el, index) => {
              return (
                <li>
                  <Link
                    href={el.url}
                    key={index}
                    className="text-zinc-400 font-normal duration-300 hover:text-blue-500"
                  >
                    {el.title}
                  </Link>
                </li>
              );
            })}
            <CustomButton
              BtnClass="custom_btn hover:border-zinc-600 hover:text-blue-500"
              title="Sign In"
            />
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
