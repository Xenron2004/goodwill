"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const sliderImages = [
  "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600&h=800",
  "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600&h=800",
  "https://images.pexels.com/photos/3184293/pexels-photo-3184293.jpeg?auto=compress&cs=tinysrgb&w=600&h=800",
  "https://images.pexels.com/photos/3184294/pexels-photo-3184294.jpeg?auto=compress&cs=tinysrgb&w=600&h=800",
  "https://images.pexels.com/photos/3184295/pexels-photo-3184295.jpeg?auto=compress&cs=tinysrgb&w=600&h=800",
];

export const DirectorsSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setCurrentImageIndex(
            (prevIndex) => (prevIndex + 1) % sliderImages.length
          );
          return 0;
        }
        return prev + 1;
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full bg-white py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-16">
          {/* Left Side - Image Slider */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative w-full h-64 sm:h-80 lg:h-[400px] xl:h-[500px] rounded-lg overflow-hidden shadow-lg">
              {/* Header with Logo */}
              <div className="absolute top-4 left-4 lg:top-6 lg:left-6 z-10">
                <div className="bg-white/90 backdrop-blur-sm rounded-lg p-2 lg:p-3">
                  <div className="flex items-center gap-2 lg:gap-3">
                    <div className="w-6 h-6 lg:w-8 lg:h-8 bg-[#e2af44] rounded-full flex items-center justify-center">
                      <img
                        className="w-4 h-4 lg:w-5 lg:h-5 object-cover rounded-full"
                        alt="Goodwill Logo"
                        src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=32&h=32&fit=crop"
                      />
                    </div>
                    <span className="text-xs lg:text-sm font-medium text-gray-700">
                      GoodWill Institute
                    </span>
                  </div>
                </div>
              </div>

              {/* Progress Bars */}
              <div className="absolute top-4 right-4 lg:top-6 lg:right-6 z-10 flex flex-col gap-1">
                {sliderImages.map((_, index) => (
                  <div
                    key={index}
                    className="w-12 lg:w-16 h-0.5 bg-white/30  overflow-hidden"
                  >
                    <div
                      className={`h-full bg-white transition-all duration-100 ease-linear ${
                        index === currentImageIndex
                          ? "opacity-100"
                          : "opacity-50"
                      }`}
                      style={{
                        width:
                          index === currentImageIndex
                            ? `${progress}%`
                            : index < currentImageIndex
                            ? "100%"
                            : "0%",
                      }}
                    />
                  </div>
                ))}
              </div>

              {/* Images */}
              {sliderImages.map((image, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 bg-cover bg-center transition-all duration-700 ease-in-out ${
                    index === currentImageIndex
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-105"
                  }`}
                  style={{ backgroundImage: `url(${image})` }}
                />
              ))}
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6 lg:gap-8">
            <div className="flex flex-col gap-6 lg:gap-8">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.6 }}
                viewport={{ once: true }}
                className="font-['Playfair_Display',Helvetica] font-normal text-black text-xl sm:text-2xl lg:text-3xl xl:text-4xl leading-tight"
              >
                Message from the Directors
              </motion.h2>

              <div className="flex flex-col gap-4 lg:gap-6">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  viewport={{ once: true }}
                  className="font-light font-['Helvetica_Neue-Regular',Helvetica] text-[#666d80] text-sm lg:text-base leading-relaxed"
                >
                  Now is your moment to make the right choice for a successful
                  career and a better future.
                </motion.p>

                <p className="font-light font-['Helvetica_Neue-Regular',Helvetica] text-[#666d80] text-sm lg:text-base tracking-wide leading-relaxed">
                  With over a decade of experience in teaching and recruitment,
                  Good Will Institute is dedicated to nurturing young, talented
                  individuals—from bustling cities to rural villages—by
                  connecting them to the best career opportunities across the
                  globe.
                </p>

                <p className="font-light font-['Helvetica_Neue-Regular',Helvetica] text-[#666d80] text-sm lg:text-base leading-relaxed">
                  Our mission is to not only build your skills but also to bring
                  pride and happiness to your families. Join hands with Good
                  Will and let's turn your dreams into reality.
                </p>
              </div>
            </div>

            {/* Directors */}
            <div className="flex flex-col sm:flex-row gap-6 lg:gap-10 pt-4">
              <div className="flex flex-col gap-1">
                <h4 className="font-medium font-['Helvetica_Neue-Regular',Helvetica]  text-[#243646] text-base lg:text-lg">
                  Vijay Kumar
                </h4>
                <p className="font-light font-['Helvetica_Neue-Regular',Helvetica] text-[#243646]/70 text-sm lg:text-base">
                  Director
                </p>
              </div>

              <div className="flex flex-col gap-1">
                <h4 className="font-medium font-['Helvetica_Neue-Regular',Helvetica] text-[#243646] text-base lg:text-lg">
                  Vidya Sagar
                </h4>
                <p className="font-normal font-['Helvetica_Neue-Regular',Helvetica] text-[#243646]/70 text-sm lg:text-base">
                  Director
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
