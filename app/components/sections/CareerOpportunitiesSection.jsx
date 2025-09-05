import { Button } from "../../../components/ui/button";

export function CareerOpportunitiesSection() {
  const addresses = [
    "Vizag – Sri Venkateswara Towers, Dwarakanagar",
    "Vizianagaram – Thotapalem, near RTC Complex Road",
    "Navi Mumbai – Kukreja Plaza",
  ];

  const contactInfo = [
    "Email: info@goodwillinstitutes.in, jobs@goodwillinstitutes.in",
    "Phone: +91 79977 78855",
  ];

  return (
    <section className="flex flex-col lg:flex-row w-full items-start justify-between gap-8 relative">
      <div className="flex flex-col w-full lg:w-[478px] items-start gap-8 lg:gap-12 relative">
        <div className="flex flex-col items-start gap-6 lg:gap-10 relative self-stretch w-full">
          <div className="flex flex-col items-start gap-5 relative self-stretch w-full">
            <h2 className="relative self-stretch mt-[-1.00px] font-['Playfair_Display',Helvetica] font-normal text-black text-3xl lg:text-5xl tracking-[0] leading-normal">
              Contact & Enroll
            </h2>

            <p className="relative w-full lg:w-[434px] font-['Helvetica_Neue-Light',Helvetica] font-light text-[#243646b2] text-sm lg:text-base tracking-[0] leading-relaxed lg:leading-6">
              Ready to launch your global career? Take the first step toward
              high-paying international opportunities in hospitality, cruise
              lines, and energy sectors. Apply today or fill out our quick
              contact form to receive detailed program information, career
              guidance, and personalized support from our admissions team.
            </p>
          </div>

          <div className="flex flex-col w-full lg:w-[378px] items-start gap-6 lg:gap-[25px] relative">
            <div className="flex flex-col items-start gap-3 lg:gap-1.5 relative self-stretch w-full">
              <h3 className="relative self-stretch mt-[-1.00px] font-['Helvetica_Neue-Medium',Helvetica] font-medium text-[#243646] text-sm  lg:text-base tracking-[0] leading-6">
                Address
              </h3>

              <div className="flex flex-col items-start gap-2 relative self-stretch w-full">
                {addresses.map((address, index) => (
                  <div
                    key={`address-${index}`}
                    className="inline-flex items-start justify-start gap-2.5 px-0 py-[3px] relative w-full border-b-[0.5px] border-dashed border-[#24364699]"
                  >
                    <div className="relative mt-[-0.50px] font-['Helvetica_Neue-Light',Helvetica] font-light text-[#24364699] text-sm lg:text-base tracking-[0] leading-6">
                      {address}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col items-start gap-3 lg:gap-1.5 relative self-stretch w-full">
              <h3 className="relative self-stretch mt-[-1.00px] font-['Helvetica_Neue-Medium',Helvetica] font-medium text-[#243646] text-sm lg:text-base tracking-[0] leading-6">
                Talk to Us
              </h3>

              <div className="flex flex-col items-start gap-2 relative self-stretch w-full">
                {contactInfo.map((contact, index) => (
                  <div
                    key={`contact-${index}`}
                    className="inline-flex items-start justify-start gap-2.5 px-0 py-[3px] relative w-full border-b-[0.5px] border-solid border-[#24364699]"
                  >
                    <div className="relative mt-[-0.50px] font-['Helvetica_Neue-Light',Helvetica] font-light text-[#24364699] text-sm lg:text-base tracking-[0] leading-6 break-all">
                      {contact}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 lg:gap-6 relative">
          <Button className="flex items-center justify-center gap-2.5 px-6 py-2.5 bg-[#243646] rounded-full h-auto w-full sm:w-auto">
            <span className="relative w-fit mt-[-1.00px] font-['Helvetica_Neue-Regular',Helvetica] font-normal text-white text-sm lg:text-base tracking-[0] leading-normal whitespace-nowrap">
              Get Free Consultation
            </span>
          </Button>

          <Button
            variant="secondary"
            className="inline-flex items-center justify-center gap-2.5 px-6 py-2.5 bg-[#2436461a] rounded-full h-auto w-full sm:w-auto"
          >
            <span className="relative w-fit mt-[-1.00px] font-['Helvetica_Neue-Regular',Helvetica] font-normal text-[#243646] text-sm lg:text-base tracking-[0] leading-normal whitespace-nowrap">
              Download Brochure
            </span>
          </Button>
        </div>
      </div>

      <div className="w-full lg:w-[542px] h-[400px] lg:h-[723px] overflow-hidden bg-cover bg-center"
           style={{backgroundImage: "url('/assets/Ten.jpg')"}}>
      </div>
    </section>
  );
}