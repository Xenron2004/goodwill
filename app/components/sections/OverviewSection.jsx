// import { MenuIcon } from "lucide-react";
// import { Button } from "../../../components/ui/button";
// import Navbar from "../../../components/Navbar";

// export function OverviewSection() {
//   return (
//     <section className=" w-full h-[500px] sm:h-[600px] lg:h-[740px] bg-gradient-to-r from-black/30 to-black/30 bg-[url('/assets/HeroBg.mp4')] bg-cover bg-center">
//       <main className="flex flex-col w-full max-w-[733px] items-start gap-6 lg:gap-9 absolute top-32 sm:top-40 lg:top-[222px] left-4 sm:left-8 lg:left-20 px-4 lg:px-0">
//         <h2 className="relative self-stretch mt-[-1.00px] font-['Playfair_Display',Helvetica] font-semibold text-white text-2xl sm:text-3xl lg:text-5xl tracking-[0] leading-tight lg:leading-[72px]">
//           Launch Your World-Class Hospitality Career in Just 60 Days
//         </h2>

//         <p className="relative w-full max-w-[629px] font-['Helvetica-Regular',Helvetica] font-normal text-white text-sm sm:text-base lg:text-[17px] tracking-[0] leading-relaxed lg:leading-[25.5px]">
//           Join India's leading hospitality and hotel management institute,
//           offering hands-on training, internationally recognized certifications,
//           and guaranteed placements with top cruise lines, luxury hotels, and
//           oil & gas companies — all within just 60 days.
//         </p>
//          <Button className="w-auto h-10 bg-white text-black hover:bg-gray-100 rounded-[32px] font-['Helvetica-Regular',Helvetica] font-normal text-sm sm:text-base lg:text-[17px] tracking-[0] leading-[25.5px] px-6">
//           Apply Now
//         </Button>
//       </main>


//     </section>
//   );
// }



import { MenuIcon } from "lucide-react";
import { Button } from "../../../components/ui/button";
import Navbar from "../../../components/Navbar";

export function OverviewSection() {
  return (
    <section className="relative w-full h-[500px] sm:h-[600px] lg:h-[740px] overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        poster="/assets/HeroFallback.jpg" // optional fallback image
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/assets/HeosBg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content */}
      <main className=" z-10 flex flex-col w-full max-w-[733px] items-start gap-6 lg:gap-8 absolute top-32 sm:top-40 lg:top-[180px] left-4 sm:left-8 lg:left-32 px-4 lg:px-0">
        <h2 className="font-['Playfair_Display',Helvetica] font-semibold text-white text-2xl sm:text-3xl lg:text-5xl leading-tight lg:leading-[72px]">
          Launch Your World-Class Hospitality Career in Just 60 Days
        </h2>

        <p className="w-full max-w-[629px] font-['Helvetica-Regular',Helvetica] font-normal text-white text-sm sm:text-base lg:text-[17px] leading-relaxed lg:leading-[25.5px]">
          Join India's leading hospitality and hotel management institute,
          offering hands-on training, internationally recognized certifications,
          and guaranteed placements with top cruise lines, luxury hotels, and
          oil & gas companies — all within just 60 days.
        </p>

        <Button className="w-auto h-10 bg-white text-black hover:bg-gray-100 rounded-[32px] font-['Helvetica-Regular',Helvetica] text-sm sm:text-base lg:text-[17px] px-6">
          Apply Now
        </Button>
      </main>
    </section>
  );
}

