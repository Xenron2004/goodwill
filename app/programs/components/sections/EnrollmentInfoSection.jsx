'use client'

import { ChevronDown } from 'lucide-react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion'

export const EnrollmentInfoSection = () => {
  const accordionItems = [
    {
      id: "industry-connections",
      title: "Industry Connections",
      content:
        "We connect you directly with hotels, cruise lines, and hospitality partners. Through guest lectures, industry visits, and networking events, you'll gain valuable insights and exposure to global career opportunities.",
      defaultOpen: true,
    },
    {
      id: "professional-placements",
      title: "Professional Placements",
      content: "Our dedicated placement team works with leading hotels and cruise lines worldwide to secure positions for our graduates. We maintain partnerships with luxury hotel chains and international cruise companies.",
      defaultOpen: false,
    },
    {
      id: "personalized-career-guidance",
      title: "Personalized Career Guidance",
      content: "Each student receives individual mentoring and career counseling. Our experienced faculty provides guidance on career paths, interview preparation, and professional development to ensure your success.",
      defaultOpen: false,
    },
  ]

  return (
    <section className="w-full bg-[#1e3a54] py-12 md:py-[72px]">
      <div className="flex flex-col items-center gap-8 md:gap-14 max-w-[800px] mx-auto px-4">
        <div className="flex flex-col items-start gap-6 md:gap-7 w-full max-w-4xl">
          <h1 className="w-full font-['Playfair_Display',Helvetica] font-medium text-white text-2xl md:text-3xl lg:text-[42px] text-center tracking-[0] leading-tight md:leading-[normal]">
            Shape Your Future with Industry-Focused Hospitality Programs
          </h1>

          <p className="w-full font-['Helvetica_Neue-Medium',Helvetica] font-light text-white text-sm md:text-base text-center tracking-[0] leading-[22.4px]">
            Our courses combine academic learning with practical training and
            international exposure. From culinary skills to hospitality
            management, each program equips you with industry-ready expertise,
            and the confidence to succeed in hotels, cruise lines, and
            international careers.
          </p>
        </div>

        <div className="w-full">
          <Accordion
            type="single"
            collapsible
            defaultValue="industry-connections"
            className="w-full"
          >
            {accordionItems.map((item, index) => (
              <AccordionItem
                key={item.id}
                value={item.id}
                className={`border-t-[0.8px] border-[#808487cc] ${
                  index === accordionItems.length - 1 
                    ? "border-b-[0.5px] border-b-[#808487cc]" 
                    : ""
                }`}
              >
                <AccordionTrigger className="flex items-center justify-between pl-0 pr-2 md:pr-5 py-4 md:py-6 text-left hover:no-underline [&[data-state=open]>svg]:rotate-180">
                  <div className="flex flex-col items-start gap-3">
                    <h3 className="font-['Helvetica_Neue-Medium',Helvetica] font-medium text-white text-sm md:text-base tracking-[0] leading-[normal]">
                      {item.title}
                    </h3>
                  </div>
                  {/* <ChevronDown className="h-3.5 w-3.5 text-white transition-transform duration-200" /> */}
                </AccordionTrigger>
                {item.content && (
                  <AccordionContent className="pb-4 md:pb-6 pt-0">
                    <div className="w-full max-w-full md:max-w-[550px] font-['Helvetica_Neue-Medium',Helvetica] font-light text-white text-sm md:text-base tracking-[0] leading-[22.4px]">
                      {item.content}
                    </div>
                  </AccordionContent>
                )}
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}