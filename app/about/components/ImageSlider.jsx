import React from "react";

const images = [
  "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400&h=300",
  "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=400&h=300",
  "https://images.pexels.com/photos/3184293/pexels-photo-3184293.jpeg?auto=compress&cs=tinysrgb&w=400&h=300",
  "https://images.pexels.com/photos/3184294/pexels-photo-3184294.jpeg?auto=compress&cs=tinysrgb&w=400&h=300",
  "https://images.pexels.com/photos/3184295/pexels-photo-3184295.jpeg?auto=compress&cs=tinysrgb&w=400&h=300",
  "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400&h=300",
];

export const ImageSlider = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="flex animate-slide-right gap-4 lg:gap-6">
        {[...images, ...images].map((image, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-32 sm:w-48 lg:w-64 xl:w-80 h-20 sm:h-32 lg:h-40 xl:h-48 bg-cover bg-center rounded-lg shadow-lg"
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
      </div>
    </div>
  );
};