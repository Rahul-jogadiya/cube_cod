import { CustomButton, Hero, TitleHeading } from "@/Components";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="container">
        <TitleHeading
          headingClass="justify-end"
          subHeadingClass="right-12"
          title="Services"
          imgUrl="/services-icon.svg"
          imgHeight={0}
          imgWidth={110}
        />
      </div>
    </main>
  );
}
