"use client";
import React, { useState } from 'react';
import Header from './components/Header';
import CategoryDropdown from './components/CategoryDropdown';
import GalleryGrid from './components/GalleryGrid';
import Footer from './components/Footer';
import { galleryData } from './data/galleryData';
import {FooterSection} from '../../components/Footer'

const GalleryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('Campus');
  const categories = Object.keys(galleryData);

  return (
    <div className="min-h-screen bg-gray-50">
    
      
      {/* Hero Section */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto  px-4 sm:px-6 lg:px-8">
          <div className="">
            <h1 
              className="text-4xl sm:text-5xl lg:text-[74px] max-w-[804px] w-full font-bold text-gray-900 mb-6 leading-relaxed"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Experience Life at GoodWill
            </h1>
            <div className="flex flex-col  max-w-7xl w-full lg:flex-row lg:items-center lg:justify-between">
              <div
                className="text-lg font-light text-gray-600 leading-relaxed max-w-2xl mb-8 lg:mb-0"
                style={{ fontFamily: 'Helvetica Neue, sans-serif' }}
              >
                Explore our vibrant campus, immersive training sessions, and inspiring career journeys 
                through a curated collection of photos that capture student life, hands-on learning, 
                and global hospitality opportunities.
              </div>
              <div className="lg:ml-8 flex-shrink-0">
                <CategoryDropdown
                  categories={categories}
                  selectedCategory={selectedCategory}
                  onCategoryChange={setSelectedCategory}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider Line */}
      <div className="border-t border-gray-200"></div>

      {/* Gallery Section */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            {/* <h2 
              className="text-3xl font-bold text-gray-900 mb-4"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              {selectedCategory}
            </h2> */}
            {/* <div className="w-24 h-1 bg-blue-600 rounded"></div> */}
          </div>
          
          <GalleryGrid items={galleryData[selectedCategory]} />
        </div>
      </section>

    </div>
  );
};

export default GalleryPage;