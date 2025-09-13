// import { Card, CardContent } from "../../../components/ui/card";
// import { Separator } from "../../../components/ui/separator";

// export function ProgramsSection() {
//   const salaryData = [
//     {
//       amount: "24 Lakhs/p.a.",
//       label: "Highest Package",
//       showSeparator: true,
//     },
//     {
//       amount: "10 Lakhs/p.a.",
//       label: "Average Package",
//       showSeparator: true,
//     },
//     {
//       amount: "5 Lakhs/p.a.",
//       label: "Lowest Package",
//       showSeparator: false,
//     },
//   ];

//   return (
//     <section className="flex flex-col w-full items-center gap-8 lg:gap-14 relative">
//       <header className="flex flex-col w-full max-w-[640px] items-center gap-5 relative text-center">
//         <h2 className="relative self-stretch font-['Playfair_Display',Helvetica] font-medium text-[#243646] text-3xl lg:text-5xl text-center tracking-[0] leading-normal">
//           Our Students Achieve Global Salary Standards
//         </h2>

//         <p className="relative self-stretch font-['Helvetica-Regular',Helvetica] font-normal text-[#243646b3] text-sm lg:text-base text-center tracking-[0.16px] leading-relaxed lg:leading-[20.8px]">
//           Real success, real numbers — from first job offers to thriving
//           international careers.
//         </p>
//       </header>

//       <Card className="w-full border-0 shadow-none bg-transparent">
//         <CardContent className="flex flex-col lg:flex-row items-center justify-between relative w-full p-0 gap-8 lg:gap-0">
//           {salaryData.map((item, index) => (
//             <div key={index} className="flex items-center relative w-full lg:w-auto">
//               <div className="flex w-full lg:w-[349px] items-center justify-center py-6 px-5 relative">
//                 <div className="flex flex-col w-full lg:w-[284px] items-center justify-between gap-4 lg:gap-0 lg:h-[95px] relative">
//                   <div className="relative w-fit font-['Playfair_Display',Helvetica] font-medium text-[#243646] text-3xl lg:text-5xl text-center tracking-[0] leading-tight lg:leading-[62.4px] whitespace-nowrap">
//                     {item.amount}
//                   </div>

//                   <div className="flex flex-col w-full lg:w-[225px] items-center gap-3 relative">
//                     <div className="relative self-stretch font-['Helvetica_Neue-Medium',Helvetica] font-medium text-[#243646] text-sm lg:text-base text-center tracking-[0] leading-normal whitespace-nowrap">
//                       {item.label}
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {item.showSeparator && (
//                 <Separator
//                   orientation="vertical"
//                   className="hidden lg:block h-[95px] w-[0.8px] bg-[#243646cc]"
//                 />
//               )}
//             </div>
//           ))}
//         </CardContent>
//       </Card>
//     </section>
//   );
// }

"use client";
import { Card, CardContent } from "../../../components/ui/card";
import { Separator } from "../../../components/ui/separator";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

// CountUp hook (starts when triggered = true)
function useCountUp(target, duration = 2000, start = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return; // wait until start is true

    let startVal = 0;
    const increment = target / (duration / 16); // ~60fps
    const timer = setInterval(() => {
      startVal += increment;
      if (startVal >= target) {
        clearInterval(timer);
        setCount(target);
      } else {
        setCount(Math.floor(startVal));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [target, duration, start]);

  return count;
}

export function ProgramsSection() {
  const salaryData = [
    {
      amount: 24,
      label: "Highest Package",
      showSeparator: true,
    },
    {
      amount: 10,
      label: "Average Package",
      showSeparator: true,
    },
    {
      amount: 5,
      label: "Lowest Package",
      showSeparator: false,
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  // ref for observing section
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  return (
    <section
      ref={sectionRef}
      className="flex flex-col w-full items-center gap-8 lg:gap-14 relative"
    >
      <header className="flex flex-col w-full max-w-[640px] items-center gap-5 relative text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, delay: 0.4 }}
          viewport={{ once: true }}
          className="relative self-stretch font-['Playfair_Display',Helvetica] font-medium text-[#243646] text-3xl lg:text-5xl text-center leading-normal"
        >
          Our Students Achieve Global Salary Standards
        </motion.h2>

        <motion.p 
         initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.6 }}
              viewport={{ once: true }}
        className="relative self-stretch font-['Helvetica-Regular',Helvetica] font-normal text-[#243646b3] text-sm lg:text-base text-center leading-relaxed lg:leading-[20.8px]">
          Real success, real numbers — from first job offers to thriving
          international careers.
        </motion.p>
      </header>

      <Card className="w-full border-0 shadow-none bg-transparent">
        <CardContent className="flex flex-col lg:flex-row items-center justify-between relative w-full p-0 gap-8 lg:gap-0">
          <motion.div
            className="flex w-full flex-col lg:flex-row justify-between items-center"
            variants={container}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {salaryData.map((itemData, index) => {
              const count = useCountUp(
                itemData.amount,
                2000 + index * 500, // staggered count speed
                isInView // only start when visible
              );

              return (
                <motion.div
                  key={index}
                  className="flex items-center relative w-full lg:w-auto"
                  variants={item}
                >
                  <div className="flex w-full lg:w-[349px] items-center justify-center py-6 px-5 relative">
                    <div className="flex flex-col w-full lg:w-[284px] items-center justify-between gap-4 lg:gap-0 lg:h-[95px] relative">
                      <div className="relative w-fit font-['Playfair_Display',Helvetica] font-medium text-[#243646] text-3xl lg:text-5xl text-center leading-tight lg:leading-[62.4px] whitespace-nowrap">
                        {count} Lakhs/p.a.
                      </div>

                      <div className="flex flex-col w-full lg:w-[225px] items-center gap-3 relative">
                        <div className="relative self-stretch font-['Helvetica_Neue-Medium',Helvetica] font-medium text-[#243646] text-sm lg:text-base text-center">
                          {itemData.label}
                        </div>
                      </div>
                    </div>
                  </div>

                  {itemData.showSeparator && (
                    <Separator
                      orientation="vertical"
                      className="hidden lg:block h-[95px] w-[0.8px] bg-[#243646cc]"
                    />
                  )}
                </motion.div>
              );
            })}
          </motion.div>
        </CardContent>
      </Card>
    </section>
  );
}
