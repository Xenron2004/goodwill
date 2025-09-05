import React from "react";
import { FacultyCard } from "../../components/FacultyCard";

const facultyData = [
  {
    name: "Vijay Kumar Pedapati",
    role: "Director",
    image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop",
  },
  {
    name: "Vidya Sagar Pedapati",
    role: "Director", 
    image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop",
  },
  {
    name: "Ms. Sravya",
    role: "Secretary",
    image: "https://images.pexels.com/photos/3184293/pexels-photo-3184293.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop",
  },
];

export const FacultySection = () => {
  return (
    <section className="w-full bg-white py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8 lg:gap-12">
          <div className="flex flex-col w-full max-w-2xl items-center gap-4 lg:gap-5 text-center">
            <h2 className="font-['Playfair_Display',Helvetica] font-medium text-[#243646] text-2xl lg:text-[48px] xl:text-[48px] leading-tight">
              Meet Our Faculty
            </h2>

            <p className="font-normal font-['Helvetica_Neue-Regular',Helvetica]  text-[#243646]/70 text-sm lg:text-base leading-relaxed">
              We're natural leaders, inspiring others with our passion and
              conviction. You can feel our energy.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 w-full max-w-4xl">
            {facultyData.map((faculty, index) => (
              <FacultyCard
                key={index}
                name={faculty.name}
                role={faculty.role}
                image={faculty.image}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
