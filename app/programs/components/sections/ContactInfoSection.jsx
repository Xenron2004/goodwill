'use client'

const navigationItems = [
  { text: "Visit Our Campuses", opacity: "opacity-70 hover:opacity-100" },
  { text: "Download a Brochure", opacity: "opacity-70 hover:opacity-100" },
  { text: "Apply to a program", opacity: "opacity-70 hover:opacity-100" },
  { text: "Contact Us", opacity: "opacity-70 hover:opacity-100" },
]

const aboutLinks = [
  "About Good Will",
  "Programs",
  "Campus Locations",
  "Our Faculty",
  "Accreditations & Memberships",
  "VISA Application Information",
]

const workWithUsLinks = ["Become a Partner", "Apply Now"]

const socialLinks = [
  { icon: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=16&h=16&fit=crop", alt: "LinkedIn", text: "LinkedIn" },
  { icon: "https://images.pexels.com/photos/1591056/pexels-photo-1591056.jpeg?auto=compress&cs=tinysrgb&w=16&h=16&fit=crop", alt: "Instagram", text: "Instagram" },
  { icon: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=16&h=16&fit=crop", alt: "TikTok", text: "TikTok" },
]

export const ContactInfoSection = () => {
  return (
    <footer className="flex flex-col w-full items-start pt-12 md:pt-20 pb-0 px-0 relative bg-[#fafafa]">
      <div className="flex-col max-w-7xl gap-5 px-4 md:px-12 py-0 w-full flex items-start relative mx-auto">
        <div className="flex flex-col w-full items-center pt-0 pb-8 md:pb-[120px] px-0 relative">
          <div className="justify-center gap-6 md:gap-12 self-stretch w-full flex-[0_0_auto] flex flex-col lg:flex-row items-start relative">
            <div className="flex flex-col w-full lg:max-w-[560px] lg:w-[512px] items-start justify-center pt-0 pb-6 px-0 relative self-stretch">
              <div className="flex flex-col w-full hover:opacity-100 lg:max-w-[560px] gap-3 flex-1 grow items-start relative">
                {navigationItems.map((item, index) => (
                  <div
                    key={index}
                    className={`flex-col self-stretch w-full flex-[0_0_auto] ${item.opacity} flex items-start relative`}
                  >
                    <div className="flex w-full flex-col items-start relative self-stretch flex-[0_0_auto]">
                      <div className="relative self-stretch font-['Helvetica_Neue-Medium',Helvetica] font-light hover:opacity-100 text-[#243646] text-xl md:text-2xl lg:text-[32px] tracking-[-0.96px] leading-tight lg:leading-[38px]">
                        {item.text}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex w-full lg:max-w-[560px] lg:w-[512px] justify-center gap-4 md:gap-8 self-stretch items-start relative flex-col md:flex-row">
              <div className="flex-col flex-1 self-stretch grow flex items-start relative">
                <div className="flex gap-[16.5px] w-full mb-[-106.00px] flex-col items-start relative self-stretch flex-[0_0_auto]">
                  <div className="relative w-fit font-helvetica font-normal text-[#24364699] text-xs md:text-sm leading-[14px]">
                    <span className="tracking-[0.14px] leading-[22px] font-['Helvetica_Neue-Medium',Helvetica]">
                      ABOUT
                    </span>
                  </div>

                  <div className="flex flex-col self-stretch w-full items-start gap-4 relative flex-[0_0_auto]">
                    {aboutLinks.map((link, index) => (
                      <div
                        key={index}
                        className="flex pt-0 pb-px px-0 w-full flex-col items-start relative self-stretch flex-[0_0_auto]"
                      >
                        <div className="flex items-start relative flex-[0_0_auto]">
                          <div className="relative w-fit font-['Helvetica_Neue-Medium',Helvetica] font-light text-[#243646] text-sm md:text-base tracking-[0.16px] leading-[normal]">
                            {link}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex-col flex-1 self-stretch grow flex items-start relative">
                <div className="flex gap-[16.5px] w-full flex-col items-start relative self-stretch flex-[0_0_auto]">
                  <div className="relative w-fit font-helvetica font-normal text-[#24364699] text-xs md:text-sm leading-[14px]">
                    <span className="tracking-[0.14px] leading-[22px] font-['Helvetica_Neue-Medium',Helvetica]">
                      WORK WITH US
                    </span>
                  </div>

                  <div className="flex flex-col self-stretch w-full items-start gap-4 relative flex-[0_0_auto]">
                    {workWithUsLinks.map((link, index) => (
                      <div
                        key={index}
                        className="flex pt-0 pb-px px-0 w-full flex-col items-start relative self-stretch flex-[0_0_auto]"
                      >
                        <div className="flex items-start relative flex-[0_0_auto]">
                          <div className="relative w-fit font-['Helvetica_Neue-Medium',Helvetica] font-light text-[#243646] text-sm md:text-base tracking-[0.16px] leading-[normal]">
                            {link}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex-col w-full md:max-w-56 md:w-56 gap-6 md:gap-8 self-stretch flex items-start relative">
              <div className="flex-col gap-[16.5px] self-stretch w-full flex-[0_0_auto] flex items-start relative">
                <div className="relative w-fit font-['Helvetica_Neue-Medium',Helvetica] font-normal text-[#24364699] text-xs md:text-sm tracking-[0.14px] leading-[22px]">
                  CONNECT WITH US
                </div>

                <div className="flex-col gap-4 self-stretch w-full flex-[0_0_auto] flex items-start relative">
                  {socialLinks.map((social, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-2 relative self-stretch w-full flex-[0_0_auto]"
                    >
                      <img
                        className="relative w-4 h-4 flex-shrink-0 rounded"
                        alt={social.alt}
                        src={social.icon}
                      />
                      <div className="relative w-fit font-['Helvetica_Neue-Medium',Helvetica] font-light text-[#243646] text-sm md:text-base tracking-[0.16px] leading-5">
                        {social.text}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <img
          className="relative w-20 md:w-[122.81px] h-auto md:h-[119.96px] object-cover rounded-lg"
          alt="Good Will Institute logo"
          src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=123&h=120&fit=crop"
        />

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between pt-[25px] pb-8 px-0 relative self-stretch w-full border-t border-solid border-[#24364633] gap-4 md:gap-0">
          <div className="inline-flex flex-col flex-[0_0_auto] items-start relative">
            <div className="inline-flex flex-col md:flex-row items-start gap-2 md:gap-4 relative flex-[0_0_auto]">
              <div className="inline-flex flex-col items-start relative self-stretch flex-[0_0_auto]">
                <div className="relative w-fit font-['Helvetica_Neue-Medium',Helvetica] font-light text-[#243646] text-xs md:text-sm tracking-[0.14px] leading-[22px]">
                  Privacy Policy
                </div>
              </div>

              <div className="inline-flex gap-2.5 flex-col items-start relative self-stretch flex-[0_0_auto]">
                <div className="relative w-fit font-['Helvetica_Neue-Medium',Helvetica] font-light text-[#243646] text-xs md:text-base tracking-[0.16px] leading-[normal]">
                  Online courses&nbsp;&nbsp; Terms and Conditions
                </div>
              </div>
            </div>
          </div>

          <div className="relative w-fit font-['Helvetica_Neue-Medium',Helvetica] font-light text-[#243646] text-xs md:text-sm tracking-[0.14px] leading-[22px]">
            © Good Will Institute. All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  )
}