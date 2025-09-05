import React from "react";
import { Linkedin, Instagram } from "lucide-react";

const aboutLinks = [
  "About Good Will",
  "Programs", 
  "Campus Locations",
  "Our Faculty",
  "Accreditations & Memberships",
  "VISA Application Information",
];

const workWithUsLinks = ["Become a Partner", "Apply Now"];

export const Footer = () => {
  return (
    <footer className="w-full bg-[#fafafa] py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-12 lg:gap-16">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Quick Actions */}
            <div className="lg:col-span-2">
              <div className="flex flex-col gap-4 lg:gap-6">
                <div className="space-y-3 lg:space-y-4">
                  <div className="text-[#243646] text-xl lg:text-2xl font-light tracking-tight hover:text-[#e2af44] transition-colors cursor-pointer">
                    Visit Our Campuses
                  </div>
                  <div className="text-[#243646]/70 text-xl lg:text-2xl font-light tracking-tight hover:text-[#e2af44] transition-colors cursor-pointer">
                    Download a Brochure
                  </div>
                  <div className="text-[#243646]/70 text-xl lg:text-2xl font-light tracking-tight hover:text-[#e2af44] transition-colors cursor-pointer">
                    Apply to a program
                  </div>
                  <div className="text-[#243646]/70 text-xl lg:text-2xl font-light tracking-tight hover:text-[#e2af44] transition-colors cursor-pointer">
                    Contact Us
                  </div>
                </div>
              </div>
            </div>

            {/* About Links */}
            <div className="flex flex-col gap-4 lg:gap-6">
              <h3 className="text-[#243646]/60 text-xs lg:text-sm font-normal tracking-wider uppercase">
                ABOUT
              </h3>
              <div className="flex flex-col gap-3 lg:gap-4">
                {aboutLinks.map((link, index) => (
                  <a
                    key={index}
                    href="#"
                    className="text-[#243646] text-sm lg:text-base font-light hover:text-[#e2af44] transition-colors"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>

            {/* Work With Us & Social */}
            <div className="flex flex-col gap-6 lg:gap-8">
              <div className="flex flex-col gap-4 lg:gap-6">
                <h3 className="text-[#243646]/60 text-xs lg:text-sm font-normal tracking-wider uppercase">
                  WORK WITH US
                </h3>
                <div className="flex flex-col gap-3 lg:gap-4">
                  {workWithUsLinks.map((link, index) => (
                    <a
                      key={index}
                      href="#"
                      className="text-[#243646] text-sm lg:text-base font-light hover:text-[#e2af44] transition-colors"
                    >
                      {link}
                    </a>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-4 lg:gap-6">
                <h3 className="text-[#243646]/60 text-xs lg:text-sm font-normal tracking-wider uppercase">
                  CONNECT WITH US
                </h3>
                <div className="flex flex-col gap-3 lg:gap-4">
                  <a href="#" className="flex items-center gap-2 text-[#243646] text-sm lg:text-base font-light hover:text-[#e2af44] transition-colors">
                    <Linkedin className="w-4 h-4" />
                    LinkedIn
                  </a>
                  <a href="#" className="flex items-center gap-2 text-[#243646] text-sm lg:text-base font-light hover:text-[#e2af44] transition-colors">
                    <Instagram className="w-4 h-4" />
                    Instagram
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Logo */}
          <div className="flex justify-center lg:justify-start">
            <img
              className="w-16 h-16 lg:w-20 lg:h-20 object-cover rounded-full"
              alt="Goodwill Logo"
              src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=96&h=96&fit=crop"
            />
          </div>

          {/* Bottom Footer */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 lg:pt-8 border-t border-[#243646]/20">
            <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
              <a href="#" className="text-[#243646] text-xs lg:text-sm font-light hover:text-[#e2af44] transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-[#243646] text-xs lg:text-sm font-light hover:text-[#e2af44] transition-colors">
                Terms and Conditions
              </a>
            </div>

            <div className="text-[#243646] text-xs lg:text-sm font-light text-center sm:text-right">
              © Good Will Institute. All Rights Reserved
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};