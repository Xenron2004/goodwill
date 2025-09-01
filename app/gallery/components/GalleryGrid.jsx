import React from 'react';

const GalleryGrid = ({ items }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
      {items.map((item, index) => (
        <div 
          key={index}
          className="group relative overflow-hidden  transition-all duration-300 transform"
        >
          <div className="aspect-[4/3] relative">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            {/* <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300"></div> */}
          </div>
          <div className="py-4">
            <h3 
              className="text-xl font-semibold text-gray-600 mb-2 group-hover:text-[#E3AF45] transition-colors duration-300"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              {item.title}
            </h3>
            <p 
              className="text-gray-600 text-sm leading-relaxed"
              style={{ fontFamily: 'Helvetica Neue, sans-serif' }}
            >
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GalleryGrid;