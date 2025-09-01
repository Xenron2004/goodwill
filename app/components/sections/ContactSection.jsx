const navigationItems = [
  { text: "Visit Our Campuses", opacity: "opacity-70" },
  { text: "Download a Brochure", opacity: "opacity-70" },
  { text: "Apply to a program", opacity: "opacity-70" },
  { text: "Contact Us", opacity: "opacity-70" },
];

const aboutLinks = [
  "About Good Will",
  "Programs",
  "Campus Locations",
  "Our Faculty",
  "Accreditations & Memberships",
  "VISA Application Information",
];

const workWithUsLinks = ["Become a Partner", "Apply Now"];

const socialLinks = [
  { text: "LinkedIn" },
  { text: "Instagram" },
  { text: "TikTok" },
];

const legalLinks = ["Privacy Policy", "Online courses Terms and Conditions"];

export function ContactSection() {
  return (
    <footer className="flex flex-col w-full items-start pt-12 lg:pt-20 pb-0 px-0 relative bg-wwwglionedualabaster">
      <div className="flex-col max-w-[1280px] mx-auto gap-5 px-4 sm:px-6 lg:px-12 py-0 w-full flex items-start relative">
        <div className="flex flex-col items-start pt-0 pb-8 lg:pb-[120px] px-0 relative self-stretch w-full">
          <div className="flex flex-col lg:flex-row justify-center gap-8 lg:gap-12 self-stretch w-full items-start relative">
            <div className="flex flex-col w-full lg:max-w-[560px] lg:w-[512px] items-start justify-center pt-0 pb-6 px-0 relative">
              <div className="flex flex-col cursor-pointer w-full lg:max-w-[560px] items-start gap-3 relative">
                {navigationItems.map((item, index) => (
                  <div
                    key={index}
                    className={`flex-col self-stretch cursor-pointer w-full ${item.opacity} hover:opacity-100 flex items-start relative`}
                  >
                    <div className="flex w-full flex-col items-start relative self-stretch">
                      <div className="relative self-stretch mt-[-1.00px] font-['Helvetica_Neue-Light',Helvetica] font-light text-wwwglionedupickled-bluewood text-xl lg:text-[32px] tracking-[-0.96px] leading-tight lg:leading-[38px]">
                        {item.text}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col lg:flex-row w-full lg:max-w-[560px] lg:w-[512px] justify-center gap-6 lg:gap-4 items-start relative">
              <div className="flex flex-col items-start relative flex-1">
                <div className="flex gap-4 lg:gap-[16.5px] w-full flex-col items-start relative self-stretch">
                  <div className="relative w-fit mt-[-1.00px] font-['Helvetica_Neue-Light',Helvetica] font-normal text-wwwglionedupickled-bluewood-60 text-sm leading-[14px]">
                    <span className="font-[number:var(--www-glion-edu-semantic-link-upper-font-weight)] tracking-[var(--www-glion-edu-semantic-link-upper-letter-spacing)] leading-[var(--www-glion-edu-semantic-link-upper-line-height)] font-www-glion-edu-semantic-link-upper [font-style:var(--www-glion-edu-semantic-link-upper-font-style)] text-[length:var(--www-glion-edu-semantic-link-upper-font-size)]">
                      ABOUT
                    </span>
                  </div>

                  <div className="flex flex-col items-start gap-4 relative self-stretch w-full">
                    {aboutLinks.map((link, index) => (
                      <div
                        key={index}
                        className="flex flex-col items-start pt-0 pb-px px-0 relative self-stretch w-full"
                      >
                        <div className="flex items-start relative">
                          <div className="relative w-fit mt-[-1.00px] font-['Helvetica_Neue-Light',Helvetica] font-light text-wwwglionedupickled-bluewood text-sm lg:text-base tracking-[0.16px] leading-normal">
                            {link === "Accreditations & Memberships" ? (
                              <>
                                Accreditations &<br />Memberships
                              </>
                            ) : (
                              link
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-start relative flex-1">
                <div className="flex gap-4 lg:gap-[16.5px] w-full flex-col items-start relative self-stretch">
                  <div className="relative w-fit mt-[-1.00px] font-['Helvetica_Neue-Light',Helvetica] font-normal text-wwwglionedupickled-bluewood-60 text-sm leading-[14px]">
                    <span className="font-[number:var(--www-glion-edu-semantic-link-upper-font-weight)] tracking-[var(--www-glion-edu-semantic-link-upper-letter-spacing)] leading-[var(--www-glion-edu-semantic-link-upper-line-height)] font-www-glion-edu-semantic-link-upper [font-style:var(--www-glion-edu-semantic-link-upper-font-style)] text-[length:var(--www-glion-edu-semantic-link-upper-font-size)]">
                      WORK WITH US
                    </span>
                  </div>

                  <div className="flex flex-col self-stretch w-full items-start gap-4 relative">
                    {workWithUsLinks.map((link, index) => (
                      <div
                        key={index}
                        className="flex flex-col items-start pt-0 pb-px px-0 relative self-stretch w-full"
                      >
                        <div className="flex items-start relative">
                          <div className="relative w-fit mt-[-1.00px] font-['Helvetica_Neue-Light',Helvetica] font-light text-wwwglionedupickled-bluewood text-sm lg:text-base tracking-[0.16px] leading-normal whitespace-nowrap">
                            {link}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex-col w-full lg:max-w-56 lg:w-56 gap-6 lg:gap-8 flex items-start relative">
              <div className="flex-col gap-4 lg:gap-[16.5px] self-stretch w-full flex items-start relative">
                <div className="relative w-fit mt-[-1.00px] font-www-glion-edu-semantic-link-upper font-[number:var(--www-glion-edu-semantic-link-upper-font-weight)] text-wwwglionedupickled-bluewood-60 text-[length:var(--www-glion-edu-semantic-link-upper-font-size)] tracking-[var(--www-glion-edu-semantic-link-upper-letter-spacing)] leading-[var(--www-glion-edu-semantic-link-upper-line-height)] whitespace-nowrap [font-style:var(--www-glion-edu-semantic-link-upper-font-style)]">
                  CONNECT WITH US
                </div>

                <div className="flex-col gap-4 self-stretch w-full flex items-start relative">
                  {socialLinks.map((social, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-2 relative self-stretch w-full"
                    >
                      <div className="w-4 h-4 bg-[#243646] rounded-sm"></div>
                      <div className="relative w-fit mt-[-1.00px] font-['Helvetica_Neue-Light',Helvetica] font-light text-wwwglionedupickled-bluewood text-sm lg:text-base tracking-[0.16px] leading-5 whitespace-nowrap">
                        {social.text}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[122.81px] h-[119.96px] bg-[#e2af44] rounded-lg mx-auto lg:mx-0"></div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 pt-[25px] pb-8 px-0 relative self-stretch w-full border-t border-solid border-[#24364633]">
          <div className="inline-flex flex-col items-start relative">
            <div className="inline-flex flex-wrap items-start gap-4 relative">
              {legalLinks.map((link, index) => (
                <div
                  key={index}
                  className="inline-flex flex-col items-start relative"
                >
                  <div className="relative w-fit mt-[-1.00px] font-www-glion-edu-semantic-link font-[number:var(--www-glion-edu-semantic-link-font-weight)] text-wwwglionedupickled-bluewood text-[length:var(--www-glion-edu-semantic-link-font-size)] tracking-[var(--www-glion-edu-semantic-link-letter-spacing)] leading-[var(--www-glion-edu-semantic-link-line-height)] [font-style:var(--www-glion-edu-semantic-link-font-style)]">
                    {link}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="w-fit font-www-glion-edu-helvetica-neue-light font-[number:var(--www-glion-edu-helvetica-neue-light-font-weight)] text-wwwglionedupickled-bluewood tracking-[var(--www-glion-edu-helvetica-neue-light-letter-spacing)] leading-[var(--www-glion-edu-helvetica-neue-light-line-height)] relative text-[length:var(--www-glion-edu-helvetica-neue-light-font-size)] text-center lg:text-left [font-style:var(--www-glion-edu-helvetica-neue-light-font-style)]">
            © Good Will Institute. All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
}