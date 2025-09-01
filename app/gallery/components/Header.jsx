import React from 'react';
import { Menu } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
              <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                <span className="text-blue-600 font-bold text-sm">GW</span>
              </div>
            </div>
            <div>
              <h1 className="text-lg sm:text-xl font-semibold text-gray-900" style={{ fontFamily: 'Helvetica Neue, sans-serif' }}>
                Good Will Institute of Hospitality & Catering Technology
              </h1>
            </div>
          </div>
          <button className="lg:hidden">
            <Menu className="h-6 w-6 text-gray-600" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;