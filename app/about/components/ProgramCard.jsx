
"use client"; 
import React, { useState } from "react";

export const ProgramCard = ({ title, description, image, className = "" }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative w-full h-48 sm:h-64 lg:h-80 xl:h-96 overflow-hidden rounded-lg cursor-pointer transition-all duration-500 shadow-lg hover:shadow-xl ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500"
        style={{ backgroundImage: `url(${image})` }}
      />
      
      {/* Overlay */}
      <div className={`absolute inset-0 bg-black transition-all duration-500 ${isHovered ? 'bg-opacity-70' : 'bg-opacity-20'}`} />
      
      {/* Content - Hidden by default, shown on hover */}
      <div className={`absolute inset-0 flex flex-col justify-center items-center p-4 lg:p-6 transition-all duration-500 ${isHovered ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'}`}>
        <div className="text-center">
          <h3 className="font-playfair font-medium text-white text-lg lg:text-xl xl:text-2xl mb-3 lg:mb-4">
            {title}
          </h3>
          <p className="font-light text-white text-sm lg:text-base leading-relaxed max-w-sm">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};