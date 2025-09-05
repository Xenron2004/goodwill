'use client'

import { Button } from '../ui/button'

export const NavigationSection = () => {
  const programDetails = [
    {
      label: "Eligibility",
      value: "10th Pass & Inter (Pass or Fail)",
    },
    {
      label: "Duration",
      value: "1 Year & 2 years (options available)",
    },
    {
      label: "Age requirement",
      value: "15+ Years",
    },
    {
      label: "Placement",
      value: "Hotel, Cruise Lines & Abroad Jobs",
    },
  
  ]

  return (
    <section className="flex flex-col lg:flex-row items-start gap-8 lg:gap-[154px] w-full py-8 md:py-16 max-w-7xl">
      <div className="flex flex-col w-full lg:w-[496px] items-start gap-8 lg:gap-[54px]">
        <h1 className="w-full lg:w-[452px] font-['Playfair_Display',Helvetica] font-medium text-[#243646] text-3xl md:text-4xl lg:text-[56px] tracking-[0] leading-tight lg:leading-[72.8px]">
          Diploma in Hotel Management
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
                    <h3 className="w-full font-['Helvetica_Neue-Medium',Helvetica] font-medium text-[#243646] text-sm md:text-base tracking-[0] leading-6">
                      {detail.label}
                    </h3>
                  </div>
                  <p className="font-['Helvetica_Neue-Medium',Helvetica] font-light text-[#243646cc] text-sm md:text-base tracking-[0] leading-6">
                    {detail.value}
                  </p>
                </div>
              ))}
            </div>

            <p className="font-['Helvetica_Neue-Medium',Helvetica] font-light text-[#243646b2] text-sm md:text-base tracking-[0] leading-6">
              An immersive diploma that combines academic foundations with
              applied training. Students gain industry experience preparing them
              for roles in hotels, cruise lines, and global hospitality careers.
            </p>
          </div>

          <Button
            variant="ghost"
            className="h-auto inline-flex items-center justify-center gap-2.5 px-0 py-0.5 border-b border-[#243646] rounded-none hover:bg-transparent w-full md:w-auto"
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
          backgroundImage: "url('/assets/Two.jpg')" 
        }} 
      />
    </section>
  )
}