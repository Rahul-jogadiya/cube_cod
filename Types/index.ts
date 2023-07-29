import { MouseEventHandler } from "react";

export interface CustomButton {
  title: string;
  BtnClass: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface NavbarLink {
  title: string;
  url: string;
}

export interface TitleHeading {
  title: string;
  headingClass: string;
  subHeadingClass: string;
  imgUrl: string;
  imgWidth: number;
  imgHeight: number;
}
