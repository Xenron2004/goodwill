'use client'

import Link from 'next/link'
import { Button } from '../ui/button'

export const ProgramDetailsSection = () => {
  const programDetails = [
    {
      label: "Eligibility",
      value: "10th and above",
    },
    {
      label: "Duration",
      value: "60 Days Only",
    },
    {
      label: "Age requirement",
      value: "20-28 Years",
    },
    {
      label: "Placement",
      value: "Hotel & Cruise Lines",
    },
  ]

  return (
    <section className="flex flex-col lg:flex-row items-start gap-8 lg:gap-[154px] w-full py-8 md:py-16 max-w-7xl">
      <div 
        className="flex-shrink-0 w-full lg:w-[542px] h-[400px] md:h-[600px] lg:h-[813px] bg-cover bg-center bg-no-repeat order-2 lg:order-1" 
        style={{ 
          backgroundImage: "url('/assets/TwentyOne.jpg')" 
        }} 
      />

      <div className="flex flex-col w-full lg:w-[496px] items-start gap-8 lg:gap-[54px] order-1 lg:order-2">
        <h1 className="w-full lg:w-[452px] font-['Playfair_Display',Helvetica] font-medium text-[#243646] text-3xl md:text-4xl lg:text-[56px] tracking-[0] leading-tight lg:leading-[72.8px]">
          Crash Course for Culinary Arts
        </h1>

        <div className="flex flex-col items-start justify-between w-full gap-8">
          <div className="flex flex-col items-start gap-9 w-full">
            <div className="flex flex-col w-full max-w-[217px] items-start gap-6">
              {programDetails.map((detail, index) => (
                <div
                  key={index}
                  className="flex flex-col items-start gap-2 w-full"
                >
                  <div className="flex flex-col h-6 items-start gap-1.5 w-full">
                    <div className="font-['Helvetica_Neue-Medium',Helvetica] font-medium text-[#243646] text-sm md:text-base tracking-[0] leading-6">
                      {detail.label}
                    </div>
                  </div>
                  <div className="font-['Helvetica_Neue-Medium',Helvetica] font-light text-[#243646cc] text-sm md:text-base tracking-[0] leading-6">
                    {detail.value}
                  </div>
                </div>
              ))}
            </div>

            <p className="font-['Helvetica_Neue-Medium',Helvetica] font-light text-[#243646b2] text-sm md:text-base tracking-[0] leading-6">
              A fast-track program offering intensive culinary training with
              real-world practice. Designed for young professionals seeking
              quick entry into hotels and cruise lines within just two months.
            </p>
          </div>
         
         <Link href="/contact">
          <Button
            variant="ghost"
            className="inline-flex items-center justify-center gap-2.5 px-0 py-0.5 h-auto border-b border-[#243646] rounded-none hover:bg-transparent w-full md:w-auto"
          >
            <span className="font-['Helvetica_Neue-Medium',Helvetica] font-normal text-[#243646] text-base md:text-[17px] tracking-[0] leading-[normal]">
              Get free consultation
            </span>
          </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}