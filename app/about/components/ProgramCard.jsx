"use client";

export const ProgramCard = ({ title, description, image, className = "" }) => {
  return (
    <div
      tabIndex={0}
      className={`group relative w-full h-48 sm:h-64 lg:h-80 xl:h-96 overflow-hidden cursor-pointer transition-all duration-500 shadow-lg hover:shadow-xl ${className}`}
    >
      {/* Background Image with hover zoom effect */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-out group-hover:scale-105"
        style={{ backgroundImage: `url(${image})` }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/30 transition-colors duration-300 group-hover:bg-black/60" />

      {/* Centered Content */}
      <div className="absolute inset-0 flex items-center justify-center px-4 text-center">
        <div className="max-w-md">
          {/* Title — always visible */}
          <h3 className="font-['Playfair_Display',Helvetica] font-semibold text-white text-lg sm:text-xl lg:text-2xl">
            {title}
          </h3>

          {/* Description — shows on hover */}
          <p className="mt-3 text-white/90 text-sm sm:text-base leading-relaxed opacity-0 translate-y-2 transition-all font-['Helvetica-Regular',Helvetica] duration-500 group-hover:opacity-100 group-hover:translate-y-0">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};
