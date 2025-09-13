"use client";

import Link from "next/link";
import { Button } from "../../../components/ui/button";
import { motion } from "framer-motion";

export function CareerOpportunitiesSection() {
  const addresses = [
    "​Door No. 47-3-31, Sri Venkateswara Towers, Ground floor, Opp. Subbayya Gari Hotel , Dwarakanagar, Vizag .",
    "D.No. 8-30-9, Old 4S College Building, Opp. RTC Complex Road, Thotapalem, Near Sachivalayam, Vizianagaram",
  ];

  const contactInfo = [
    "Email: info@goodwillinstitutes.in, jobs@goodwillinstitutes.in",
    "Phone: +91 95944 65739, +91 97007 77723",
  ];

  return (
    <section className="flex flex-col lg:flex-row w-full items-start justify-between gap-8 relative">
      <div className="flex flex-col w-full lg:w-[478px] items-start gap-8 lg:gap-12 relative">
        <div className="flex flex-col items-start gap-6 lg:gap-10 relative self-stretch w-full">
          <div className="flex flex-col items-start gap-5 relative self-stretch w-full">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.6 }}
              viewport={{ once: true }}
              className="relative self-stretch mt-[-1.00px] font-['Playfair_Display',Helvetica] font-normal text-black text-3xl lg:text-5xl tracking-[0] leading-normal"
            >
              Contact & Enroll
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="relative w-full lg:w-[434px] font-['Helvetica_Neue-Light',Helvetica] font-light text-[#243646b2] text-sm lg:text-base tracking-[0] leading-relaxed lg:leading-6"
            >
              Ready to launch your global career? Take the first step toward
              high-paying international opportunities in hospitality, cruise
              lines, and energy sectors. Apply today or fill out our quick
              contact form to receive detailed program information, career
              guidance, and personalized support from our admissions team.
            </motion.p>
          </div>

          <div className="flex flex-col w-full lg:w-[378px] items-start gap-6 lg:gap-[25px] relative">
            <div className="flex flex-col items-start gap-3 lg:gap-1.5 relative self-stretch w-full">
              <h3 className="relative self-stretch mt-[-1.00px] font-['Helvetica_Neue-Medium',Helvetica] font-medium text-[#243646] text-sm  lg:text-base tracking-[0] leading-6">
                Address
              </h3>

              <div className="flex flex-col items-start gap-3 relative self-stretch w-full">
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

              <div className="flex flex-col items-start gap-2 relative max-w-[500px]  self-stretch w-full">
                {contactInfo.map((contact, index) => (
                  <div
                    key={`contact-${index}`}
                    className=" items-start justify-start gap-2.5 px-0 py-[3px] relative w-full  border-b-[0.5px] border-solid border-[#24364699]"
                  >
                    <div className="relative mt-[-0.50px] font-['Helvetica_Neue-Light',Helvetica] font-light text-[#24364699] text-sm lg:text-base tracking-[0] leading-6 ">
                      {contact}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 lg:gap-6 relative">
          <Link href="/contact">
            <Button className="flex items-center justify-center gap-2.5 px-6 py-2.5 bg-[#243646] rounded-full h-auto w-full sm:w-auto">
              <span className="relative w-fit mt-[-1.00px] font-['Helvetica_Neue-Regular',Helvetica] font-normal text-white text-sm lg:text-base tracking-[0] leading-normal whitespace-nowrap">
                Get Free Consultation
              </span>
            </Button>
          </Link>

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

      {/* <div
        className="w-full lg:w-[542px] h-[400px] lg:h-[723px] overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/Ten.jpg')" }}
      ></div> */}
      <div
        // style={{ width: "542px", height: "750px" }}
        className="max-w-[542px] w-full  h-[500px] md:h-[700px] "
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7590099.095677327!2d77.92617885000003!3d21.737529358550262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3be5bac24fd121%3A0x652c0501ffb6b2a8!2sGood%20Will%20Institute%20of%20Hospitality%20and%20Hotel%20Management!5e0!3m2!1sen!2sin!4v1757184632298!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
}
