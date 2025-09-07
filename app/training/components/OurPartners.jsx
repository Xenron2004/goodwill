"use client";
import React from "react";
import Image from "next/image";
import goodWillLogo from "../../../public/assets/goodwillLogo.svg";
const OurPartners = () => {
  return (
    <div className="text-center  max-w-6xl w-11/12 ">
      <h1 className="text-4xl font-['Playfair_Display',Helvetica] font-bold text-gray-900 mb-4">
        Our Training Partners
      </h1>
      <div className="flex flex-col gap-16 md:flex-row items-center justify-between py-10">
        <Image
        //   src={goodWillLogo}
        src="https://bemyhr.in/_next/static/media/BeLogoss.df378aec.png"
          alt="Our Training Parteners"
          width={400}
          height={600}
          className="object-cover"
          priority
        />
        <div className="text-gray-700 text-start font-['Helvetica_Neue-Medium',Helvetica] text-lg max-w-full ">
         A trusted name in human resource solutions, with over a decade of expertise in empowering businesses and professionals. Renowned for its commitment to excellence and strong industry partnerships, BeMyHR has built a reputation for delivering reliable HR services, fostering talent growth, and enabling organizations to achieve sustainable success in today’s competitive landscape.
        </div>
      </div>
    </div>
  );
};
export default OurPartners;
