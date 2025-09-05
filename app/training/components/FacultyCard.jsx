import React from "react";

export const FacultyCard = ({ name, role, image }) => {
  return (
    <div className="flex flex-col items-center gap-4 lg:gap-6 group">
      <div className="relative w-full max-w-[305px] h-48 sm:h-64 lg:h-[423px] overflow-hidden  shadow-lg">
        <div
          className="w-full h-full bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
          style={{ backgroundImage: `url(${image})` }}
        />
      </div>

      <div className="flex flex-col items-center gap-1 text-center">
        <h3 className="font-playfair font-medium text-[#243646] text-base lg:text-lg xl:text-xl">
          {name}
        </h3>
        <p className="font-light text-[#243646]/70 text-sm lg:text-base">
          {role}
        </p>
      </div>
    </div>
  );
};