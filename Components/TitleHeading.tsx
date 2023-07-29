import { TitleHeading } from "@/Types";
import Image from "next/image";
import React from "react";

const TitleHeading = ({
  headingClass,
  subHeadingClass,
  title,
  imgUrl,
  imgWidth,
  imgHeight,
}: TitleHeading) => {
  return (
    <div className={`flex items-center relative ${headingClass}`}>
      <h1 className={`absolute h1 text-6xl	 ${subHeadingClass}`}>{title}</h1>
      <Image src={imgUrl} alt={title} width={imgWidth} height={imgHeight} />
    </div>
  );
};

export default TitleHeading;
