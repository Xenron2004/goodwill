'use client'

import { Button } from '../ui/button'

export const CourseOverviewSection = () => {
  const courseDetails = [
    {
      label: "Eligibility",
      value: "Intermediate (Pass) & Above",
    },
    {
      label: "Duration",
      value: "3 Years",
    },
    {
      label: "Age requirement",
      value: "18+ Years",
    },
    {
      label: "Placement",
      value: "Hotel, Cruise Lines & Abroad Jobs",
    },
   
  ]

  return (
    <section className="flex flex-col lg:flex-row items-start gap-8 lg:gap-[154px] w-full py-8 md:py-16 max-w-7xl">
      <div className="flex flex-col w-full lg:max-w-[496px] items-start gap-8 lg:gap-[54px]">
        <h1 className="w-full lg:max-w-[452px] font-['Playfair_Display',Helvetica] font-medium text-[#243646] text-3xl md:text-4xl lg:text-[56px] tracking-[0] leading-tight lg:leading-[72.8px]">
          Bachelor in Hotel Management
        </h1>

        <div className="flex flex-col items-start justify-between w-full gap-8">
          <div className="flex flex-col items-start gap-9 w-full">
            <div className="flex flex-col w-full max-w-[217px] items-start gap-6">
              {courseDetails.map((detail, index) => (
                <div
                  key={index}
                  className="flex flex-col items-start gap-2 w-full"
                >
                  <div className="flex flex-col h-6 items-start gap-1.5 w-full">
                    <h3 className="w-full font-['Helvetica_Neue-Medium',Helvetica] font-medium text-[#243646] text-sm md:text-base tracking-[0] leading-6">
                      {detail.label}
                    </h3>
                  </div>
                  <p className="w-full font-['Helvetica_Neue-Medium',Helvetica] font-light text-[#243646cc] text-sm md:text-base tracking-[0] leading-6">
                    {detail.value}
                  </p>
                </div>
              ))}
            </div>

            <p className="w-full font-['Helvetica_Neue-Medium',Helvetica] font-light text-[#243646b2] text-sm md:text-base tracking-[0] leading-6">
              A comprehensive degree providing in-depth hospitality education
              with international perspectives. Graduates are prepared for
              leadership roles across hotels, cruise lines, and abroad job
              markets.
            </p>
          </div>

          <Button
            variant="ghost"
            className="inline-flex items-center justify-center gap-2.5 px-0 py-0.5 h-auto border-b border-solid border-[#243646] rounded-none bg-transparent hover:bg-transparent w-full md:w-auto"
          >
            <span className="font-['Helvetica_Neue-Medium',Helvetica] font-normal text-[#243646] text-base md:text-[17px] tracking-[0] leading-[normal]">
              Get free consultation
            </span>
          </Button>
        </div>
      </div>

      <div
        className="w-full lg:w-[542px] h-[400px] md:h-[600px] lg:h-[813px] bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "url('https://images.pexels.com/photos/1449773/pexels-photo-1449773.jpeg?auto=compress&cs=tinysrgb&w=542&h=813&fit=crop')" 
        }}
      />
    </section>
  )
}