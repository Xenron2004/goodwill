'use client'

import { Button } from '../ui/button'

export const HeroBannerSection = () => {
  return (
    <>
    <section className="flex flex-col items-center gap-8 md:gap-14 relative w-full px-4 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row w-full items-start md:items-end justify-between relative gap-8 md:gap-0">
        <div className="flex flex-col max-w-full md:max-w-[801px] items-start gap-6 md:gap-10 relative">
          <h1 className="relative mt-[50px] md:mt-20 lg:mt-[100px] font-['Playfair_Display',Helvetica] font-medium text-[#243646] text-3xl md:text-5xl lg:text-[74px] tracking-[0] leading-tight md:leading-[normal]">
            Hospitality Programs for Global Careers
          </h1>

          <p className="relative max-w-full md:max-w-[644px] font-['Helvetica_Neue-Medium',Helvetica] font-light text-[#000000b2] text-sm md:text-base tracking-[0] leading-6">
            Our programs provide hands-on learning in hospitality and culinary
            management, designed to build practical skills, global exposure, and
            career opportunities across hotels, cruise lines, and international
            industries.
          </p>
        </div>

        <Button className="flex w-full md:w-[150px] h-11 items-center justify-center gap-2.5 px-4 py-2.5 bg-[#243646] hover:bg-[#243646]/90 text-white font-['Helvetica_Neue-Medium',Helvetica] font-normal text-sm md:text-base tracking-[0] leading-[normal] whitespace-nowrap">
          Enquire Now
        </Button>
      </div>

      {/* <div 
        className="relative w-full h-[400px] md:h-[600px] lg:h-[740px] bg-cover bg-center bg-no-repeat " 
        style={{ 
          backgroundImage: "url('https://images.pexels.com/photos/1579739/pexels-photo-1579739.jpeg?auto=compress&cs=tinysrgb&w=1280&h=740&fit=crop')" 
        }} 
      /> */}
    </section>
      <div 
        className="relative mt-[60px] md:mt-20 lg:mt-[100px] w-full h-[400px] md:h-[600px] lg:h-[700px] bg-cover bg-center bg-no-repeat " 
        style={{ 
          backgroundImage: "url('/assets/Twenty.jpg')" 
        }} 
      />
    </>
  )
}