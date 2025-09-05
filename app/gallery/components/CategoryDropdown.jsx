"use client";
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const CategoryDropdown = ({ categories, selectedCategory, onCategoryChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-6  px-5 py-3 bg-[#ECECEC]   shadow-sm transition-all duration-200  "
        style={{ fontFamily: 'Helvetica Neue, sans-serif' }}
      >
        <span className="text-gray-700 font-medium">{selectedCategory}</span>
        <ChevronDown 
          className={`h-4 w-4 text-gray-500 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>
      
      {isOpen && (
        <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200  shadow-sm z-50 animate-in slide-in-from-top-2 duration-200">
          <div className="py-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  onCategoryChange(category);
                  setIsOpen(false);
                }}
                className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 transition-colors duration-150 ${
                  selectedCategory === category ? 'bg-blue-50 text-[#1E3A54] font-medium' : 'text-gray-700'
                }`}
                style={{ fontFamily: 'Helvetica Neue, sans-serif' }}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoryDropdown;