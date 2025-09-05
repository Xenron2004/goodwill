import React from "react";
import { ImageSlider } from "../../components/ImageSlider";

export const HeroSection = () => {
  return (
    <section className="w-full bg-[#1e3a54] overflow-hidden relative">
      <div className="max-w-7xl  flex flex-col items-center justify-center mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16">
        {/* Hero Content */}
        <div className="flex flex-col lg:flex-row place-items-end justify-start   gap-6 lg:gap-16 mb-12 lg:mb-20">
          <div className="flex flex-col gap-8 max-w-3xl">
            <h1 className="text-2xl font-['Playfair_Display',Helvetica] sm:text-3xl lg:text-[68px] lg:leading-[76px] xl:text-[72px] xl:leading-[80px] 2xl:text-[80px] 2xl:leading-[88px]">
              <span className="text-[#5fd5b1] font-normal italic font-playfair block mb-2">
                Excellence in
              </span>
              <span className="font-playfair font-semibold text-white">
                Hospitality & Cruise Careers
              </span>
            </h1>
          </div>

          <div className="flex flex-col w-full lg:w-auto lg:max-w-sm gap-4 lg:gap-6">
            <div className="flex flex-col gap-2">
              <h2 className="font-medium font-['Helvetica_Neue-Regular',Helvetica] text-white text-xs lg:text-sm tracking-wider uppercase">
                ABOUT GOODWILL
              </h2>
            </div>

            <p className="font-light font-['Helvetica_Neue-Regular',Helvetica] text-white text-sm lg:text-base leading-relaxed">
              We provide world-class hospitality training, preparing students
              for careers in hotel management, cruise lines, and the global
              energy sector — with learning that's enjoyable and
              workplace-ready.
            </p>
          </div>
        </div>

        <div className="w-full h-px bg-white/20 mb-20 " />

        {/* Image Slider */}
        <div className="mb-12 w-screen lg:mb-20">
          <ImageSlider />
        </div>

        {/* Promise Section */}
        <div className="flex flex-col gap-8 lg:gap-12 mb-12 lg:mb-20">
          <div className="flex flex-col gap-6 lg:gap-8">
            <div className="flex flex-col max-w-7xl gap-4 lg:gap-6">
              <h3 className="font-medium text-white text-xs lg:text-sm tracking-wider uppercase">
                OUR PROMISE
              </h3>

              <p className="font-['Playfair_Display',Helvetica] font-medium text-white text-3xl sm:text-2xl lg:text-4xl xl:text-5xl leading-relaxed sm:leading-[36px] lg:leading-[48px] xl:leading-[60px]">
                We lead by example, doing the right things the right way. We
                inspire excellence, drive responsible growth, and create a
                positive impact in our communities.
              </p>
            </div>

            <div className="w-full h-px bg-white/20" />
          </div>

          <div className="flex flex-col lg:flex-row justify-between gap-6 lg:gap-8 max-w-5xl">
            <h4 className="lg:max-w-xs font-['Helvetica_Neue-Regular',Helvetica] font-medium text-white text-sm lg:text-base leading-relaxed">
              Leading with Purpose and Values.
            </h4>

            <p className="lg:max-w-md font-['Helvetica_Neue-Regular',Helvetica] font-light text-white text-sm lg:text-base leading-relaxed">
              We deliver world-class hospitality training, blending academic
              excellence with practical skills and real-world experience.
              Focused on teamwork, communication, and professionalism, we
              prepare students to thrive in today's global hospitality and
              service industries.
            </p>
          </div>
        </div>

        {/* Career Section */}
        <div className="w-full h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] bg-gradient-to-r from-black/40 to-black/20 overflow-hidden relative">
          <div
            className="absolute inset-0 bg-cover bg-center transform transition-transform duration-500 hover:scale-105"
            style={{
              backgroundImage: "url('/assets/Nineteen.jpg')",
            }}
          >
            <div className="absolute inset-0 bg-black/40" />
            <div className="relative z-10 flex flex-col max-w-xl gap-4 lg:gap-6 p-6 lg:p-12 h-full justify-center">
              <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-['Playfair_Display',Helvetica] font-medium text-white leading-relaxed">
                Where Careers Take Off Worldwide
              </h2>

              <p className="font-light tracking-wide font-['Helvetica_Neue-Regular',Helvetica] text-white text-sm lg:text-base leading-relaxed">
                Hospitality is one of the few industries offering global
                opportunities, rapid career growth, and competitive salaries.
                With strong demand for skilled professionals and less saturation
                than many fields, hotel management opens doors to careers in
                hotels, resorts, cruise lines, aviation, and tourism.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
