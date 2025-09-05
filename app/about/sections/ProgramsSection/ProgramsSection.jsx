import React from "react";
import { ProgramCard } from "../../components/ProgramCard";

const programsData = [
  {
    title: "Bachelor in Hotel Management",
    description: "In-depth academic and practical training for leadership roles in global hospitality.",
    image: '/assets/One.jpg',
  },
  {
    title: "Diploma in Hotel Management", 
    description: "Fast-track skill development for entry into the hospitality industry.",
    image: "/assets/Two.jpg",
  },
  {
    title: "Crash Course for Cruise Lines",
    description: "Specialized training for cruise ship careers with hands-on experience.",
    image: "/assets/Three.jpg",
  },
  {
    title: "Crash Course for Culinary Arts",
    description: "Professional culinary training for aspiring chefs and kitchen professionals.",
    image: "/assets/Four.jpg",
  },
];

export const ProgramsSection = () => {
  return (
    <section className="w-full bg-white py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8 lg:gap-12 mb-8 lg:mb-12">
          <div className="flex flex-col w-full max-w-2xl items-center gap-4 lg:gap-5 text-center">
            <h2 className="font-['Playfair_Display',Helvetica] font-medium text-[#243646] text-2xl lg:text-3xl xl:text-4xl leading-tight">
              Explore Our Programs
            </h2>

            <p className="font-normal font-['Helvetica_Neue-Regular',Helvetica] text-[#243646]/70 text-sm lg:text-base leading-relaxed">
              Career-Focused Training & Global Opportunities — Tailored
              Programs to Launch You into Hospitality, Oil & Gas, and
              International Education.
            </p>
          </div>

          {/* Programs Grid */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
            {programsData.map((program, index) => (
              <ProgramCard
                key={index}
                title={program.title}
                description={program.description}
                image={program.image}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};