import React from "react";
import CustomButton from "./CustomButton";
import Image from "next/image";

const Hero = () => {
  return (
    <header className="h-screen">
      <section className="container flex items-center justify-between h-screen">
        <div className="w-[550px] p-5">
          <h1 className="h1 text-5xl">
            Professional Developer,
            <span className="text-slate-300"> Let's Get To Work </span>
          </h1>
          <p className="text-slate-300 mb-10 text-xl">
            Here at <span className="text-blue-500">CubeCod</span>, we help all
            organizations turning to a tech company in order to compete
            tomorrow.
          </p>
          <CustomButton BtnClass="custom_btn" title="Let's have a Talk" />
        </div>
        <div className="right_hero">
          <Image src="/logo.png" alt="Hero Image" width={560} height={560} />
        </div>
      </section>
    </header>
  );
};

export default Hero;
