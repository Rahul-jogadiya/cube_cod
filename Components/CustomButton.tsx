"use Client";
import React from "react";
import { CustomButton } from "@/Types";

const CustomButton = ({ title, BtnClass, handleClick }: CustomButton) => {
  return (
    <button
      type={"button"}
      className={`py-2 px-9 border-2 rounded-md  ${BtnClass}`}
      onClick={handleClick}
    >
      {title}
    </button>
  );
};

export default CustomButton;
