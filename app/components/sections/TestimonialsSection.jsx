import { Button } from "../../../components/ui/button";
import Image from "next/image";


export function TestimonialsSection() {
  return (
    <section className="flex flex-col lg:flex-row w-full max-w-[1120px] items-start justify-between gap-8 relative">
      <div
        className="relative flex-1 w-full lg:max-w-[542px] h-[400px] lg:h-[722px] overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/assets/Ten.jpg')",
        }}
      >
        <div className="absolute top-8 left-8 flex items-center gap-3">
          <div className="flex flex-col items-center justify-center p-1  rounded-full">
            <Image
              src="/assets/GoodwillLogo.svg" // path from public/
              alt="Goodwill Logo"
              width={48}
              height={48}
              className="object-contain"
            />
          </div>
          <div className="font-['Helvetica_Neue-Regular',Helvetica] font-normal text-white tracking-[0] leading-relaxed text-sm whitespace-nowrap">
            GoodWill Institute
          </div>
        </div>
      </div>

      <div className="flex flex-col flex-1 w-full lg:max-w-[432px] items-start gap-6 lg:gap-[35px] relative">
        <div className="flex flex-col items-start gap-6 lg:gap-8 relative self-stretch w-full">
          <h2 className="relative w-full max-w-[374px] mt-[-1.00px] font-['Playfair_Display',Helvetica] font-normal text-black text-3xl lg:text-5xl tracking-[0] leading-tight lg:leading-[62.4px]">
            Shaping Careers with Excellence
          </h2>

          <div className="flex flex-col items-start gap-6 lg:gap-[30px] relative self-stretch w-full">
            <p className="relative self-stretch mt-[-1.00px] font-['Helvetica_Neue-Light',Helvetica] font-light text-[#243646] text-sm lg:text-base tracking-[0] leading-relaxed lg:leading-[22.4px]">
              Founded with a vision to empower aspiring professionals, Good Will
              Institute stands as a premier destination for hospitality and
              industrial training.
            </p>

            <p className="relative self-stretch font-['Helvetica_Neue-Light',Helvetica] font-light text-[#243646] text-sm lg:text-base tracking-[0] leading-relaxed lg:leading-6">
              We combine world-class academic instruction with immersive
              workplace learning, practical skill development, and strong
              industry partnerships – all designed to equip students with the
              expertise and confidence needed for success in today's global job
              market.
            </p>
          </div>
        </div>

        <Button
          variant="ghost"
          className="inline-flex items-center justify-center gap-2.5 px-0 py-0.5 h-auto mb-[-1.00px] ml-[-1.00px] border-b cursor-pointer border-solid border-[#243646] bg-transparent hover:bg-transparent rounded-none"
        >
          <span className="relative w-fit mt-[-0.50px] font-['Helvetica_Neue-Regular',Helvetica] font-normal text-[#243646] text-base lg:text-[17px] tracking-[0] leading-normal whitespace-nowrap">
            More about us
          </span>
        </Button>
      </div>
    </section>
  );
}


