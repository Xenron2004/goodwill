import React from 'react'
import Header from '../gallery/components/Header'
import CategoryDropdown from '../gallery/components/CategoryDropdown'
import GalleryGrid from '../gallery/components/GalleryGrid'
import { galleryData } from '../gallery/data/galleryData'
import {CareerOpportunitiesSection} from '../components/sections/CareerOpportunitiesSection'
import { FooterSection } from '../../components/Footer'
import Navbar from '../../components/Navbar'


const Contact = () => {
  return (
    // <section>
    //      <header className="w-full relative">
    //       <div className="w-full relative">
    //         <div className="flex flex-col md:flex-row justify-center min-h-[91px]">
    //           <img
    //             className="w-full md:w-[280px] h-[91px] object-cover"
    //             alt="Hotel exterior view"
    //             src="https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=280&h=91&fit=crop"
    //           />
    //           <div className="flex-1 bg-[#e2af44] relative p-4 md:p-0">
    //             <div className="absolute w-[31px] h-3 top-4 md:top-10 right-4 md:right-[100px]">
    //               <div className="absolute w-[31px] top-0 left-0 h-0.5 bg-white" />
    //               <div className="absolute w-[31px] top-2.5 left-0 h-0.5 bg-white" />
    //             </div>
    //             <div className="pt-4 md:left-[81px] font-['Playfair_Display',Helvetica] font-semibold text-white text-lg md:text-[32px] tracking-[0] leading-[normal] ">
    //               Good Will Institute of Hospitality & Catering Technology
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //       <img
    //         className="absolute w-[84px] h-[82px] top-[5px] left-4 md:left-20 object-cover rounded-lg"
    //         alt="Institute logo"
    //         src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=84&h=82&fit=crop"
    //       />
    //     </header>
    //     <div className='w-full flex flex-col items-center  justify-center bg-white '>

        
    //     <div className='flex flex-col items-start max-w-7xl w-11/12 justify-start  '>
    //       <h1 className='font- text-[100px]'>Contact Us</h1>
          
    //     </div>
    //     </div>

    // </section>





      <div className="min-h-screen">
      
      {/* Hero Section */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto  px-4 sm:px-6 lg:px-8">
          <div className=" flex flex-col gap-8">
            <h1 
              className="text-4xl sm:text-5xl lg:text-[100px] max-w-[804px] w-full font-bold text-gray-900 mb-6 leading-relaxed"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Contact Us
            </h1>
            <div className="flex flex-col  max-w-7xl w-full lg:flex-row lg:items-center lg:justify-between">
              <div
                className="text-lg font-light text-gray-600 leading-relaxed max-w-2xl mb-8 lg:mb-0"
                style={{ fontFamily: 'Helvetica Neue, sans-serif' }}
              >
              <span className='font-medium'>Turn Your Ambitions Into a World-Class Career.</span> Step into global opportunities in hospitality, cruise lines, and oil & gas industries. Connect with us today to explore our programs, receive expert career advice, and get personalized guidance from our dedicated admissions team.
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
          
         <CareerOpportunitiesSection/>
        </div>
      </section>

    </div>
  )
}

export default Contact
