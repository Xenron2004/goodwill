// import {
//   Avatar,
//   AvatarFallback,
//   AvatarImage,
// } from "../../../components/ui/avatar";
// import { Card, CardContent } from "../../../components/ui/card";

// export function StudentSuccessSection() {
//   const testimonials = [
//     {
//       quote:
//         "Good Will's industry-focused modules and safety simulations gave me the confidence to work offshore. The placement team was with me every step of the way.",
//       name: "Ananya P.",
//       position: "Oil & Gas Safety Officer – Working in Abu Dhabi",
//       avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
//     },
//     {
//       quote:
//         "From day one, it was about applying skills, not just learning them. The faculty's industry experience made the training authentic and relevant.",
//       name: "Rajesh K.",
//       position: "Cruise Ship Manager – Mediterranean Routes",
//       avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg",
//     },
//     {
//       quote:
//         "The international exposure and hands-on training prepared me for real-world challenges. I'm now working with a leading hospitality chain.",
//       name: "Priya S.",
//       position: "Hotel Operations Manager – Dubai",
//       avatar: "https://images.pexels.com/photos/1239288/pexels-photo-1239288.jpeg",
//     },
//      {
//       quote:
//         "The international exposure and hands-on training prepared me for real-world challenges. I'm now working with a leading hospitality chain.",
//       name: "Priya S.",
//       position: "Hotel Operations Manager – Dubai",
//       avatar: "https://images.pexels.com/photos/1239288/pexels-photo-1239288.jpeg",
//     }, {
//       quote:
//         "The international exposure and hands-on training prepared me for real-world challenges. I'm now working with a leading hospitality chain.",
//       name: "Priya S.",
//       position: "Hotel Operations Manager – Dubai",
//       avatar: "https://images.pexels.com/photos/1239288/pexels-photo-1239288.jpeg",
//     }, {
//       quote:
//         "The international exposure and hands-on training prepared me for real-world challenges. I'm now working with a leading hospitality chain.",
//       name: "Priya S.",
//       position: "Hotel Operations Manager – Dubai",
//       avatar: "https://images.pexels.com/photos/1239288/pexels-photo-1239288.jpeg",
//     },
//   ];

//   return (
//     <section className="flex flex-col w-full items-center gap-8 lg:gap-14 relative">
//       <header className="relative w-full max-w-[494px] font-['Playfair_Display',Helvetica] font-normal text-black text-3xl lg:text-5xl text-center tracking-[0] leading-tight lg:leading-[62.4px]">
//         Voices of Success from Around the Globe
//       </header>

//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 w-full relative">
//         {testimonials.map((testimonial, index) => (
//           <Card
//             key={index}
//             className="relative w-full h-auto lg:h-[507px] bg-[#2436460d] rounded-md overflow-hidden border-0"
//           >
//             <CardContent className="flex flex-col w-full items-start gap-8 lg:gap-[120px] relative p-6 lg:p-7">
//               <div className="flex flex-col items-start relative self-stretch w-full">
//                 <div className="relative self-stretch mt-[-1.00px] font-['Playfair_Display',Helvetica] font-medium text-black text-2xl lg:text-[32px] tracking-[0.32px] leading-tight lg:leading-9">
//                   " "
//                 </div>

//                 <div className="relative self-stretch font-['Playfair_Display',Helvetica] font-normal text-[#243646] text-lg lg:text-2xl tracking-[0.24px] leading-relaxed lg:leading-9">
//                   {testimonial.quote}
//                 </div>
//               </div>

//               <div className="flex items-center justify-start gap-3 relative self-stretch w-full">
//                 <Avatar className="relative w-12 h-12 lg:w-16 lg:h-16">
//                   <AvatarImage
//                     src={testimonial.avatar}
//                     alt={`${testimonial.name} avatar`}
//                     className="object-cover"
//                   />
//                   <AvatarFallback>
//                     {testimonial.name
//                       .split(" ")
//                       .map((n) => n[0])
//                       .join("")}
//                   </AvatarFallback>
//                 </Avatar>

//                 <div className="flex flex-col flex-1 items-start gap-2 relative">
//                   <div className="relative self-stretch font-['Helvetica_Neue-Medium',Helvetica] font-medium text-[#243646] text-sm lg:text-base tracking-[0.16px] leading-normal">
//                     {testimonial.name}
//                   </div>

//                   <div className="relative self-stretch font-['Helvetica_Neue-Regular',Helvetica] font-normal text-[#243646b2] text-xs lg:text-[15px] tracking-[0.15px] leading-relaxed lg:leading-[21px]">
//                     {testimonial.position}
//                   </div>
//                 </div>
//               </div>
//             </CardContent>
//           </Card>
//         ))}
//       </div>
//     </section>
//   );
// }

"use client";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../components/ui/avatar";
import { Card, CardContent } from "../../../components/ui/card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { motion } from "framer-motion";

import "swiper/css";

export function StudentSuccessSection() {
  const testimonials = [
    {
      quote:
        "Good Will's industry-focused modules and safety simulations gave me the confidence to work offshore. The placement team was with me every step of the way.",
      name: "Ananya P.",
      position: "Oil & Gas Safety Officer – Working in Abu Dhabi",
      avatar:
        "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    },
    {
      quote:
        "From day one, it was about applying skills, not just learning them. The faculty's industry experience made the training authentic and relevant.",
      name: "Rajesh K.",
      position: "Cruise Ship Manager – Mediterranean Routes",
      avatar:
        "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg",
    },
    {
      quote:
        "The international exposure and hands-on training prepared me for real-world challenges. I'm now working with a leading hospitality chain.",
      name: "Priya S.",
      position: "Hotel Operations Manager – Dubai",
      avatar:
        "https://images.pexels.com/photos/1239288/pexels-photo-1239288.jpeg",
    },
    {
      quote:
        "The training was practical and focused on global standards. Today I’m thriving in my career thanks to Good Will.",
      name: "Vikas R.",
      position: "Luxury Hotel Supervisor – Singapore",
      avatar:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
    },
    {
      quote:
        "The training was practical and focused on global standards. Today I’m thriving in my career thanks to Good Will.",
      name: "Vikas R.",
      position: "Luxury Hotel Supervisor – Singapore",
      avatar:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
    },
    {
      quote:
        "The training was practical and focused on global standards. Today I’m thriving in my career thanks to Good Will.",
      name: "Vikas R.",
      position: "Luxury Hotel Supervisor – Singapore",
      avatar:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
    },
  ];

  return (
    <section className="flex flex-col w-full items-center gap-8 lg:gap-14 relative">
      <motion.header
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.6 }}
        viewport={{ once: true }}
        className="relative w-full max-w-[494px] font-['Playfair_Display',Helvetica] font-normal text-black text-3xl lg:text-5xl text-center tracking-[0] leading-tight lg:leading-[62.4px]"
      >
        Voices of Success from Around the Globe
      </motion.header>

      {/* Swiper Slider */}
      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        breakpoints={{
          1024: { slidesPerView: 3 }, // 3 cards on large screens
          768: { slidesPerView: 2 }, // 2 cards on tablets
        }}
        className="w-full"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <Card className="relative w-full h-auto lg:h-[507px] bg-[#2436460d] overflow-hidden border-0">
              <CardContent className="flex flex-col w-full items-start gap-8 lg:gap-[120px] relative p-6 lg:p-7">
                <div className="flex flex-col items-start relative self-stretch w-full">
                  <div className="relative self-stretch mt-[-1.00px] font-['Playfair_Display',Helvetica] font-medium text-black text-2xl lg:text-[32px] tracking-[0.32px] leading-tight lg:leading-9">
                    " "
                  </div>

                  <div className="relative self-stretch font-['Playfair_Display',Helvetica] font-normal text-[#243646] text-lg lg:text-2xl tracking-[0.24px] leading-relaxed lg:leading-9">
                    {testimonial.quote}
                  </div>
                </div>

                <div className="flex items-center justify-start gap-3 relative self-stretch w-full">
                  <Avatar className="relative w-12 h-12 lg:w-16 lg:h-16">
                    <AvatarImage
                      src={testimonial.avatar}
                      alt={`${testimonial.name} avatar`}
                      className="object-cover"
                    />
                    <AvatarFallback>
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>

                  <div className="flex flex-col flex-1 items-start gap-2 relative">
                    <div className="relative self-stretch font-['Helvetica_Neue-Medium',Helvetica] font-medium text-[#243646] text-sm lg:text-base tracking-[0.16px] leading-normal">
                      {testimonial.name}
                    </div>

                    <div className="relative self-stretch font-['Helvetica_Neue-Regular',Helvetica] font-normal text-[#243646b2] text-xs lg:text-[15px] tracking-[0.15px] leading-relaxed lg:leading-[21px]">
                      {testimonial.position}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
