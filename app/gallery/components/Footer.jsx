import React from 'react';
import { Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold text-xs">GW</span>
                </div>
              </div>
              <span className="text-gray-900 font-medium" style={{ fontFamily: 'Helvetica Neue, sans-serif' }}>
                GoodWill Institute
              </span>
            </div>
            <div className="space-y-2">
              <a href="#" className="block text-gray-600 hover:text-blue-600 transition-colors text-sm">
                Visit Our Campuses
              </a>
              <a href="#" className="block text-gray-600 hover:text-blue-600 transition-colors text-sm">
                Download a Brochure
              </a>
              <a href="#" className="block text-gray-600 hover:text-blue-600 transition-colors text-sm">
                Apply to a program
              </a>
              <a href="#" className="block text-gray-600 hover:text-blue-600 transition-colors text-sm">
                Contact Us
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-gray-900 font-semibold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              ABOUT
            </h3>
            <div className="space-y-2">
              <a href="#" className="block text-gray-600 hover:text-blue-600 transition-colors text-sm">
                About Good Will
              </a>
              <a href="#" className="block text-gray-600 hover:text-blue-600 transition-colors text-sm">
                Programs
              </a>
              <a href="#" className="block text-gray-600 hover:text-blue-600 transition-colors text-sm">
                Campus Locations
              </a>
              <a href="#" className="block text-gray-600 hover:text-blue-600 transition-colors text-sm">
                Our Faculty
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-gray-900 font-semibold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              WORK WITH US
            </h3>
            <div className="space-y-2">
              <a href="#" className="block text-gray-600 hover:text-blue-600 transition-colors text-sm">
                Become a Partner
              </a>
              <a href="#" className="block text-gray-600 hover:text-blue-600 transition-colors text-sm">
                Apply Now
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-gray-900 font-semibold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              CONNECT WITH US
            </h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
            <div className="flex space-x-4 text-xs text-gray-500">
              <a href="#" className="hover:text-gray-700 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-gray-700 transition-colors">Online courses</a>
              <a href="#" className="hover:text-gray-700 transition-colors">Terms and Conditions</a>
            </div>
            <p className="text-xs text-gray-500">
              © Good Will Institute. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;