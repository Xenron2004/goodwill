// import { Button } from "../../../components/ui/button";

// export function EmpowermentSection() {
//   const imageCards = [
//     {
//       backgroundImage: "https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg",
//     },
//     {
//       backgroundImage: "https://images.pexels.com/photos/2467558/pexels-photo-2467558.jpeg",
//     },
//     {
//       backgroundImage: "https://images.unsplash.com/photo-1462539405390-d0bdb635c7d1?auto=format&fit=crop&w=1200",
//     },
//     {
//       backgroundImage: "https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg",
//     },
//   ];

//   return (
//     <section className="relative self-stretch w-full bg-[#153856] py-16 lg:py-24">
//       <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="relative w-full">
//           {/* Main content */}
//           <div className="flex flex-col items-center gap-6 lg:gap-8 relative z-10">
//             <header className="flex flex-col items-center gap-3 relative w-full text-center">
//               <p className="relative font-['Helvetica_Neue-Medium',Helvetica] font-medium text-white text-sm lg:text-base text-center tracking-[0] leading-relaxed whitespace-nowrap">
//                 STUDENT'S LIFE
//               </p>

//               <h2 className="relative max-w-4xl font-['Playfair_Display',Helvetica] font-medium text-3xl lg:text-5xl text-center tracking-[0] leading-tight lg:leading-[72px]">
//                 <span className="text-white">
//                   From day one, you'll gain real-world skills, industry
//                   exposure, and{" "}
//                 </span>
//                 <span className="text-[#d9d9dd3b]">
//                   valuable connections that shape your career for life.
//                 </span>
//               </h2>
//             </header>

//             <Button className="flex w-auto h-[45px] items-center justify-center gap-2.5 px-6 py-2.5 relative bg-white hover:bg-gray-100 text-[#153856] font-['Helvetica_Neue-Regular',Helvetica] font-normal text-lg tracking-[0.18px] leading-[23.4px]">
//               Download Brochure
//             </Button>
//           </div>

//           {/* Background images - hidden on mobile for better performance */}
//           <div className="hidden lg:grid lg:grid-cols-2 gap-4 absolute inset-0 opacity-20 pointer-events-none">
//             {imageCards.map((card, index) => (
//               <div
//                 key={index}
//                 className="rounded-md bg-cover bg-center"
//                 style={{
//                   backgroundImage: `url(${card.backgroundImage})`,
//                 }}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }



































"use client";
import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '../../../components/ui/button';


export function EmpowermentSection() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('empowerment-section');
      if (!element) return;

      const rect = element.getBoundingClientRect();
      const elementHeight = rect.height;
      const windowHeight = window.innerHeight;
      
      // Calculate scroll progress through the section - extremely slow and visible transition
      const elementTop = rect.top;
      const elementBottom = rect.bottom;
      
      // Progress from 0 to 1 as element comes into view and passes through
      let progress = 0;
      
      if (elementTop <= windowHeight && elementBottom >= 0) {
        // Make animation extremely slow and visible by using much larger threshold
        const visibleTop = Math.max(0, windowHeight - elementTop);
        const visibleHeight = Math.min(elementHeight, visibleTop);
        // Increased threshold to 3.0 for extremely slow and visible animation
        progress = Math.min(1, visibleHeight / (windowHeight * 3.0));
      }
      
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const imageCards = [
    {
      id: 'top-left',
      backgroundImage: "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=600",
      position: 'top-8 left-8 md:top-12 md:left-16 lg:top-20 lg:left-24',
      size: 'w-32 h-24 md:w-48 md:h-32 lg:w-64 lg:h-[360px]',
      animation: 'animate-float-1'
    },
    {
      id: 'top-right',
      backgroundImage: "https://images.pexels.com/photos/3182743/pexels-photo-3182743.jpeg?auto=compress&cs=tinysrgb&w=600",
      position: 'top-8 right-8 md:top-12 md:right-16 lg:top-20 lg:right-24',
      size: 'w-32 h-28 md:w-48 md:h-36 lg:w-64 lg:h-[440px]',
      animation: 'animate-float-2'
    },
    {
      id: 'bottom-left',
      backgroundImage: "https://images.pexels.com/photos/3182767/pexels-photo-3182767.jpeg?auto=compress&cs=tinysrgb&w=600",
      position: 'bottom-8 left-8 md:bottom-12 md:left-16 lg:bottom-20 lg:left-24',
      size: 'w-32 h-28 md:w-48 md:h-36 lg:w-64 lg:h-[440px]',
      animation: 'animate-float-3'
    },
    {
      id: 'bottom-right',
      backgroundImage: "https://images.pexels.com/photos/3182799/pexels-photo-3182799.jpeg?auto=compress&cs=tinysrgb&w=600",
      position: 'bottom-8 right-8 md:bottom-12 md:right-16 lg:bottom-20 lg:right-24',
      size: 'w-32 h-24 md:w-48 md:h-32 lg:w-64 lg:h-[360px]',
      animation: 'animate-float-4'
    },
  ];

  // Extremely slow and visible text animation values
  // Extended the scroll range for maximum visibility
  const whiteTextOpacity = useTransform(
    scrollYProgress, 
    [0,  0.4, 0.55, 0.7, 0.85, 1], 
    [0, 0.3, 0.5, 0.7, 0.9, 1]
  );
  
  const greyTextOpacity = useTransform(
    scrollYProgress, 
    [0, 0.1, 0.25, 0.4, 0.55, 0.7, 0.85, 1], 
    [1, 1, 0.9, 0.7, 0.5, 0.3, 0.1, 0]
  );

  // Add very smooth scale animation for maximum interactivity
  const textScale = useTransform(
    scrollYProgress,
    [0, 0.2, 0.5, 0.8, 1],
    [0.98, 1, 1.01, 1.02, 1]
  );

  return (
    <section 
      id="empowerment-section"
      className="relative self-stretch w-full bg-[#153856] py-20 lg:py-32 overflow-hidden"
    >
      {/* Custom CSS for floating animations - slower and smoother */}
      <style jsx>{`
        @keyframes float1 {
          0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
          25% { transform: translateY(-8px) translateX(4px) rotate(1deg); }
          50% { transform: translateY(-4px) translateX(-2px) rotate(-0.5deg); }
          75% { transform: translateY(-12px) translateX(6px) rotate(0.8deg); }
        }
        @keyframes float2 {
          0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
          25% { transform: translateY(-6px) translateX(-3px) rotate(-0.8deg); }
          50% { transform: translateY(-10px) translateX(5px) rotate(1.2deg); }
          75% { transform: translateY(-2px) translateX(-4px) rotate(-0.3deg); }
        }
        @keyframes float3 {
          0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
          25% { transform: translateY(-4px) translateX(6px) rotate(0.6deg); }
          50% { transform: translateY(-8px) translateX(-1px) rotate(-1deg); }
          75% { transform: translateY(-6px) translateX(3px) rotate(0.4deg); }
        }
        @keyframes float4 {
          0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
          25% { transform: translateY(-5px) translateX(-2px) rotate(-0.5deg); }
          50% { transform: translateY(-9px) translateX(4px) rotate(0.8deg); }
          75% { transform: translateY(-3px) translateX(-5px) rotate(-0.2deg); }
        }
        .animate-float-1 { animation: float1 9s ease-in-out infinite; }
        .animate-float-2 { animation: float2 8.5s ease-in-out infinite; }
        .animate-float-3 { animation: float3 10s ease-in-out infinite; }
        .animate-float-4 { animation: float4 8.8s ease-in-out infinite; }
      `}</style>

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="relative w-full min-h-[120vh] lg:min-h-[140vh] flex items-center justify-center">
          {/* Floating background images */}
          <div className="absolute inset-0 pointer-events-none">
            {imageCards.map((card) => (
              <motion.div
                key={card.id}
                className={`absolute ${card.position} ${card.size} ${card.animation} rounded-2xl shadow-2xl bg-cover bg-center border-4 border-white/20 backdrop-blur-sm`}
                style={{
                  backgroundImage: `url(${card.backgroundImage})`,
                }}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 0.9, scale: 1, y: 0 }}
                transition={{ 
                  duration: 1.5, 
                  delay: 0.3,
                  ease: "easeOut"
                }}
                whileHover={{ 
                  scale: 1.05, 
                  transition: { duration: 0.4, ease: "easeOut" } 
                }}
              />
            ))}
          </div>

          {/* Main content */}
          <div className="flex flex-col items-center gap-8 lg:gap-12 relative z-10 max-w-5xl mx-auto text-center px-4">
            <motion.header 
              className="flex flex-col items-center gap-4 relative w-full"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            >
              <motion.p 
                className="relative font-['Helvetica_Neue-Medium',Helvetica] font-medium text-sm lg:text-base text-center tracking-[0] leading-relaxed whitespace-nowrap text-white/90"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                STUDENT'S LIFE
              </motion.p>

              <motion.div 
                className="relative max-w-4xl font-['Playfair_Display',Helvetica] font-medium text-2xl sm:text-3xl lg:text-5xl text-center tracking-[0] leading-tight lg:leading-[1.2]"
                style={{ scale: textScale }}
              >
                {/* White text layer - appears on scroll */}
                <motion.h2 
                  className="absolute inset-0 text-white"
                  style={{ opacity: whiteTextOpacity }}
                >
                  From day one, you'll gain real-world skills, industry
                  exposure, and valuable connections that shape your career for life.
                </motion.h2>
                
                {/* Grey text layer - fades on scroll */}
                <motion.h2 
                  className="relative text-white/25"
                  style={{ opacity: greyTextOpacity }}
                >
                  From day one, you'll gain real-world skills, industry
                  exposure, and valuable connections that shape your career for life.
                </motion.h2>
              </motion.div>
            </motion.header>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
            >
              <Button 
                className="flex w-auto h-[50px] items-center justify-center gap-2.5 px-8 py-3 relative bg-white hover:bg-gray-100 text-[#153856] font-['Helvetica_Neue-Regular',Helvetica] font-normal text-lg tracking-[0.18px] leading-[23.4px] transition-all duration-500 hover:scale-105 hover:shadow-2xl rounded-lg"
              >
                Enquire Now
              </Button>
            </motion.div>
          </div>

          {/* Enhanced decorative elements */}
          <div className="absolute inset-0 pointer-events-none">
            <motion.div 
              className="absolute top-0 left-0 w-40 h-40 md:w-60 md:h-60 bg-gradient-to-br from-white/8 to-transparent rounded-full blur-3xl"
              animate={{ 
                scale: [1, 1.3, 1],
                opacity: [0.2, 0.4, 0.2],
                x: [0, 20, 0],
                y: [0, -10, 0]
              }}
              transition={{ 
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div 
              className="absolute bottom-0 right-0 w-40 h-40 md:w-60 md:h-60 bg-gradient-to-tl from-white/8 to-transparent rounded-full blur-3xl"
              animate={{ 
                scale: [1.3, 1, 1.3],
                opacity: [0.4, 0.2, 0.4],
                x: [0, -20, 0],
                y: [0, 10, 0]
              }}
              transition={{ 
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 3
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

