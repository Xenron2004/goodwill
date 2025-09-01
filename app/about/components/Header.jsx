"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full h-auto relative bg-white shadow-sm">
      <div className="w-full relative">
        <div className="flex items-center justify-between h-16 lg:h-20 px-4 lg:px-8">
          {/* Logo */}
          <div className="flex items-center gap-3 z-20">
            <img
              className="w-12 h-12 lg:w-16 lg:h-16 object-cover rounded-full"
              alt="Goodwill Logo"
              src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop"
            />
          </div>

          {/* Desktop Header */}
          <div className="hidden lg:flex items-center flex-1 ml-6">
            <div className="bg-[#e2af44] h-20 flex-1 flex items-center justify-center relative rounded-r-lg">
              <h1 className="text-white text-lg xl:text-xl 2xl:text-2xl font-medium font-playfair text-center px-8">
                Good Will Institute of Hospitality & Catering Technology
              </h1>
              
              {/* Hamburger Menu Icon */}
              <div className="absolute right-6 top-1/2 transform -translate-y-1/2">
                <div className="w-6 h-4 flex flex-col justify-between">
                  <div className="w-full h-0.5 bg-white rounded" />
                  <div className="w-full h-0.5 bg-white rounded" />
                  <div className="w-full h-0.5 bg-white rounded" />
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden z-20 p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Header Title */}
        <div className="lg:hidden bg-[#e2af44] py-3 px-4">
          <h1 className="text-white text-base font-medium font-playfair text-center">
            Good Will Institute of Hospitality & Catering Technology
          </h1>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-lg z-10 border-t">
            <nav className="py-4 px-4">
              <ul className="space-y-3">
                <li><a href="#about" className="block py-2 text-gray-700 hover:text-[#e2af44] transition-colors">About</a></li>
                <li><a href="#programs" className="block py-2 text-gray-700 hover:text-[#e2af44] transition-colors">Programs</a></li>
                <li><a href="#faculty" className="block py-2 text-gray-700 hover:text-[#e2af44] transition-colors">Faculty</a></li>
                <li><a href="#contact" className="block py-2 text-gray-700 hover:text-[#e2af44] transition-colors">Contact</a></li>
              </ul>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};