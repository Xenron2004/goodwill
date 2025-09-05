// "use client";
// import React, { useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { Menu, X, Equal } from "lucide-react";

// const navItems = [
//   { name: "HOME", path: "/" },
//   { name: "OUR FLEETS", path: "/our-fleets" },
//   { name: "GALLERY", path: "/gallery" },
//   { name: "ABOUT US", path: "/about" },
//   { name: "PRESS RELEASES", path: "/press-releases" },
// ];

// const sidebarItems = [
//   { name: "Programs", path: "/programs" },
//   { name: "About", path: "/about" },
//   { name: "Training & Placements", path: "/training" },
//   { name: "Gallery", path: "/gallery" },
//   { name: "Contact Us", path: "/contact" },
// ];

// const programsData = {
//   bachelor: {
//     title: "BACHELOR'S",
//     items: [
//       "Bachelor of Science in International Hospitality Business",
//       "Bachelor of Science in Luxury Business",
//       "All Bachelor's degrees",
//     ],
//   },
//   masters: {
//     title: "MASTER'S OF SCIENCE",
//     items: [
//       "Master of Science in Hospitality, Entrepreneurship and Innovation",
//       "Master of Science Real Estate, Finance and Hotel Development",
//       "Master of Science in Luxury Management and Guest Experience",
//       "Master of Science in Hospitality Business Leadership",
//       "All Master's programs",
//     ],
//   },
//   executive: {
//     title: "EXECUTIVE EDUCATION",
//     items: [
//       "Executive Master's in Luxury Management and Guest Experience",
//       "Executive Master of Advanced Studies in Hospitality and Business Leadership",
//       "All Executive Programs",
//     ],
//   },
//   short: {
//     title: "SHORT PROGRAM",
//     items: [
//       "Hospitality Business Summer Program",
//       "Luxury Business Summer Program",
//       "Luxury Hospitality Summer Program",
//       "Semester Abroad",
//       "English Language Programs",
//     ],
//   },
//   online: {
//     title: "ONLINE COURSES",
//     items: [],
//   },
// };

// const bottomLinks = [
//   { name: "Download a Brochure", path: "/brochure" },
//   { name: "Visit Our Campuses", path: "/visit" },
//   { name: "Apply to a program", path: "/apply" },
//   { name: "Contact Us", path: "/contact" },
// ];

// const socialLinks = [
//   { name: "LinkedIn", path: "/linkedin" },
//   { name: "Instagram", path: "/instagram" },
//   { name: "TikTok", path: "/tiktok" },
//   { name: "Manage Cookies", path: "/cookies" },
// ];

// const Navbar = () => {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [dropdownOpen, setDropdownOpen] = useState(false);

//   const toggleMobileMenu = () => {
//     setMobileMenuOpen(!mobileMenuOpen);
//   };

//   const toggleDropdown = () => {
//     setDropdownOpen(!dropdownOpen);
//     // Close mobile menu if it's open
//     if (mobileMenuOpen) {
//       setMobileMenuOpen(false);
//     }
//   };

//   const closeDropdown = () => {
//     setDropdownOpen(false);
//   };

//   return (
//     <>
//       {/* Desktop Navbar */}
//       <nav className="hidden z-50 md:flex w-full max-w-full h-[91px] relative bg-white mx-auto">
//         <div className="w-[335px] bg-white relative flex justify-center items-center custom-clip z-10">
//           <Link href="/" passHref>
//             <div className="w-[px] flex justify-start items-center">
//               <Image
//                 src="/assets/GoodwillSv.png"
//                 alt="Yacht Logo"
//                 width={280}
//                 height={91}
//                 priority
//               />
//             </div>
//           </Link>
//         </div>

//         {/* Bottom Navbar Section */}
//         <div className="absolute left-[254px] right-0 h-[90px] flex items-center justify-between px-4 bg-[#E3AF45]">
//           <div className="flex space-x-14 text-[32px] font-semibold text-white font-['Playfair_Display',Helvetica] pl-40">
//             Good Will Institute of Hospitality & Catering Technology
//           </div>

//           <div className="flex items-center pr-10">
//             <button
//               onClick={toggleDropdown}
//               className="text-white hover:text-gray-200 transition-colors duration-200"
//             >
//               <Equal size={36} />
//             </button>
//           </div>
//         </div>
//       </nav>

//       {/* Mobile Navbar */}
//       <main className="md:hidden w-full bg-white flex justify-between items-center shadow-sm px-4 py-3">
//         <Link href="/">
//           <Image src="/assets/goodwillLogo.svg" alt="Logo" width={40} height={20} />
//         </Link>
//         <button
//           onClick={toggleDropdown}
//           className="text-[#06082E] hover:text-gray-600 transition-colors duration-1000"
//         >
//           <Equal size={28} />
//         </button>
//       </main>

//       {/* Full-Screen Dropdown Menu */}
//       <div
//         className={`fixed inset-0 bg-[#e3af45] z-[100] transform transition-all duration-1000 ease-in-out ${
//           dropdownOpen
//             ? "translate-y-0 opacity-100"
//             : "-translate-y-full opacity-0"
//         }`}
//         style={{ pointerEvents: dropdownOpen ? "auto" : "none" }}
//       >
//         {/* Header with Logo and Close Button */}
//         <div className="flex justify-between  items-center p-6 md:p-8">
//           <div className="flex items-center">
//             <Image
//               src="/assets/goodwillLogo.svg"
//               alt="Institute Logo"
//               width={48}
//               height={40}
//               className=""
//             />
//           </div>
//           <button
//             onClick={closeDropdown}
//             className="text-white hover:text-gray-200 transition-colors duration-1000 flex items-center gap-2 text-lg"
//           >
//             <span className="hidden md:inline">Close</span>
//             <X size={24} />
//           </button>
//         </div>

//         {/* Main Content */}
//         <div className="flex flex-col md:flex-row h-full px-6 md:px-8 pb-8">
//           {/* Left Sidebar */}
//           <div className="w-full md:w-1/4 mb-8 md:mb-0">
//             <nav className="space-y-6">
//               {sidebarItems.map((item, index) => (
//                 <Link
//                   key={item.name}
//                   href={item.path}
//                   onClick={closeDropdown}
//                   className={`block text-2xl md:text-3xl font-light text-white hover:text-gray-200 transition-all duration-600 transform hover:translate-x-2 ${
//                     index === 0
//                       ? "text-white font-normal"
//                       : "text-white/70 hover:font-normal hover:text-white"
//                   }`}
//                   style={{
//                     animationDelay: `${index * 0.1}s`,
//                     animation: dropdownOpen
//                       ? "slideInLeft 1s ease-out forwards"
//                       : "none",
//                   }}
//                 >
//                   {item.name}
//                 </Link>
//               ))}
//             </nav>

//             {/* Bottom Links */}
//             <div className="mt-12 space-y-4">
//               {bottomLinks.map((link, index) => (
//                 <Link
//                   key={link.name}
//                   href={link.path}
//                   onClick={closeDropdown}
//                   className="block text-lg text-white hover:text-gray-200 transition-colors duration-1000 border-b border-white/20 pb-2"
//                   style={{
//                     animationDelay: `${(sidebarItems.length + index) * 0.1}s`,
//                     animation: dropdownOpen
//                       ? "slideInLeft 1s ease-out forwards"
//                       : "none",
//                   }}
//                 >                                 
//                   {link.name}

//                 </Link>
//               ))}
//             </div>
//           </div>

//           {/* Main Content Area */}
//           <div className="flex-1 md:pl-12">
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
//               {/* Bachelor's Programs */}
//               <div
//                 className="space-y-4"
//                 style={{
//                   animationDelay: "0.7s",
//                   animation: dropdownOpen
//                     ? "slideInUp 1s ease-out forwards"
//                     : "none",
//                 }}
//               >
//                 <h3 className="text-xl font-semibold text-white mb-4">
//                   {programsData.bachelor.title}
//                 </h3>
//                 {programsData.bachelor.items.map((item, index) => (
//                   <Link
//                     key={index}
//                     href="#"
//                     onClick={closeDropdown}
//                     className="block text-white/90 hover:text-white transition-colors duration-1000 text-sm leading-relaxed"
//                   >
//                     {item}
//                   </Link>
//                 ))}
//               </div>

//               {/* Master's Programs */}
//               <div
//                 className="space-y-4"
//                 style={{
//                   animationDelay: "0.8s",
//                   animation: dropdownOpen
//                     ? "slideInUp 1s ease-out forwards"
//                     : "none",
//                 }}
//               >
//                 <h3 className="text-xl font-semibold text-white mb-4">
//                   {programsData.masters.title}
//                 </h3>
//                 {programsData.masters.items.map((item, index) => (
//                   <Link
//                     key={index}
//                     href="#"
//                     onClick={closeDropdown}
//                     className="block text-white/90 hover:text-white transition-colors duration-200 text-sm leading-relaxed"
//                   >
//                     {item}
//                   </Link>
//                 ))}
//               </div>

//               {/* Executive Education & Short Programs */}
//               <div className="space-y-8">
//                 <div
//                   className="space-y-4"
//                   style={{
//                     animationDelay: "0.5s",
//                     animation: dropdownOpen
//                       ? "slideInUp 0.8s ease-out forwards"
//                       : "none",
//                   }}
//                 >
//                   <h3 className="text-xl font-semibold text-white mb-4">
//                     {programsData.executive.title}
//                   </h3>
//                   {programsData.executive.items.map((item, index) => (
//                     <Link
//                       key={index}
//                       href="#"
//                       onClick={closeDropdown}
//                       className="block text-white/90 hover:text-white transition-colors duration-200 text-sm leading-relaxed"
//                     >
//                       {item}
//                     </Link>
//                   ))}
//                 </div>

//                 <div
//                   className="space-y-4"
//                   style={{
//                     animationDelay: "0.6s",
//                     animation: dropdownOpen
//                       ? "slideInUp 0.8s ease-out forwards"
//                       : "none",
//                   }}
//                 >
//                   <h3 className="text-xl font-semibold text-white mb-4">
//                     {programsData.short.title}
//                   </h3>
//                   {programsData.short.items.map((item, index) => (
//                     <Link
//                       key={index}
//                       href="#"
//                       onClick={closeDropdown}
//                       className="block text-white/90 hover:text-white transition-colors duration-200 text-sm leading-relaxed"
//                     >
//                       {item}
//                     </Link>
//                   ))}
//                 </div>
//               </div>
//             </div>

//             {/* Social Links at Bottom Right */}
//             <div className="absolute bottom-8 right-8 hidden md:flex space-x-6">
//               {socialLinks.map((social, index) => (
//                 <Link
//                   key={social.name}
//                   href={social.path}
//                   onClick={closeDropdown}
//                   className="text-white/80 hover:text-white transition-colors duration-200 text-sm"
//                   style={{
//                     animationDelay: `${0.7 + index * 0.1}s`,
//                     animation: dropdownOpen
//                       ? "slideInUp 0.6s ease-out forwards"
//                       : "none",
//                   }}
//                 >
//                   {social.name}
//                 </Link>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Sidebar (Keep existing functionality) */}
//       <div
//         className={`fixed top-0 right-0 w-3/4 h-full bg-white z-50 shadow-lg flex flex-col p-3 space-y-6 transform transition-transform duration-300 md:hidden ${
//           mobileMenuOpen ? "translate-x-0" : "translate-x-full"
//         }`}
//       >
//         <div className="flex justify-end items-center mb-4 space-x-4">
//           <button onClick={toggleMobileMenu} className="text-[#06082E]">
//             <X size={24} />
//           </button>
//         </div>
//         {/* Nav Items */}
//         <nav className="flex flex-col space-y-4 pl-3 py-2">
//           {navItems.map((item) => (
//             <Link
//               key={item.name}
//               href={item.path}
//               onClick={toggleMobileMenu}
//               className="text-md font-medium text-[#06082E]"
//             >
//               {item.name}
//             </Link>
//           ))}
//           <Link href="/contact" passHref>
//             <button className="bg-white text-[#06082E] font-semibold border border-[#06082E] px-6 py-2 rounded-sm hover:bg-blue-600 hover:text-white transition-colors">
//               Contact Us
//             </button>
//           </Link>
//         </nav>

//         <div className="items-center text-sm font-Hind Guntur text-[#06082E] pl-2">
//           <div className="flex items-center space-x-1 pb-4">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="30.88"
//               height="25.55"
//               viewBox="0 0 24 24"
//               fill="#00E6AB"
//             >
//               <path
//                 d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 
//                 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"
//               />
//             </svg>
//             <span>10 Anson Road, International Plaza, Singapore 079903</span>
//           </div>
//           <div className="flex items-center space-x-2">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 24 24"
//               fill="#00E6AB"
//               stroke="currentColor"
//               className="w-6 h-6"
//             >
//               <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 5h14a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2z" />
//             </svg>
//             <span>Email: singapore.office@yacht-intl.com</span>
//           </div>
//         </div>
//       </div>

//       {/* Global Styles for Animations */}
//       <style jsx global>{`
//         .custom-clip {
//           clip-path: polygon(0 0, 80% 0, 100% 100%, 0% 100%);
//         }

//         .custom-clip {
//           clip-path: polygon(0 0, 80% 0, 100% 100%, 0% 100%);
//         }

//         @keyframes slideInLeft {
//           from {
//             opacity: 0;
//             transform: translateX(-30px);
//           }
//           to {
//             opacity: 1;
//             transform: translateX(0);
//           }
//         }

//         @keyframes slideInUp {
//           from {
//             opacity: 0;
//             transform: translateY(20px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         /* Prevent body scroll when dropdown is open */
//         ${dropdownOpen ? "body { overflow: hidden; }" : ""}
//       `}</style>
//     </>
//   );
// };

// export default Navbar;

























































































// "use client";
// import React, { useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { X, Equal } from "lucide-react";

// const navItems = [
//   { name: "HOME", path: "/" },
//   { name: "OUR FLEETS", path: "/our-fleets" },
//   { name: "GALLERY", path: "/gallery" },
//   { name: "ABOUT US", path: "/about" },
//   { name: "PRESS RELEASES", path: "/press-releases" },
// ];

// const sidebarItems = [
//   { name: "Programs", path: "/programs" },
//   { name: "About", path: "/about" },
//   { name: "Training & Placements", path: "/training" },
//   { name: "Gallery", path: "/gallery" },
//   { name: "Contact Us", path: "/contact" },
// ];

// const bottomLinks = [
//   { name: "Download a Brochure", path: "/brochure" },
//   { name: "Visit Our Campuses", path: "/visit" },
//   { name: "Apply to a program", path: "/apply" },
//   { name: "Contact Us", path: "/contact" },
// ];

// const socialLinks = [
//   { name: "LinkedIn", path: "/linkedin" },
//   { name: "Instagram", path: "/instagram" },
//   { name: "TikTok", path: "/tiktok" },
//   { name: "Manage Cookies", path: "/cookies" },
// ];

// const Navbar = () => {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [dropdownOpen, setDropdownOpen] = useState(false);

//   const toggleDropdown = () => {
//     setDropdownOpen(!dropdownOpen);
//     if (mobileMenuOpen) setMobileMenuOpen(false);
//   };

//   const closeDropdown = () => setDropdownOpen(false);

//   return (
//     <>
//       {/* Desktop Navbar */}
//       <nav className="hidden md:flex w-full h-[91px] relative bg-white z-50">
//         <div className="w-[335px] flex justify-center items-center custom-clip z-10">
//           <Link href="/" passHref>
//             <Image
//               src="/assets/GoodwillSv.png"
//               alt="Yacht Logo"
//               width={280}
//               height={91}
//               priority
//             />
//           </Link>
//         </div>

//         <div className="absolute left-[254px] right-0 h-[90px] flex items-center justify-between px-4 bg-[#E3AF45]">
//           <h1 className="pl-40 text-[32px] font-semibold text-white font-['Playfair_Display',Helvetica]">
//             Good Will Institute of Hospitality & Catering Technology
//           </h1>
//           <button
//             onClick={toggleDropdown}
//             className="text-white hover:text-gray-200 transition-colors duration-200 pr-10"
//           >
//             <Equal size={36} />
//           </button>
//         </div>
//       </nav>

//       {/* Mobile Navbar */}
//       <main className="md:hidden w-full bg-white flex justify-between items-center shadow-sm px-4 py-3">
//         <Link href="/">
//           <Image src="/assets/goodwillLogo.svg" alt="Logo" width={40} height={20} />
//         </Link>
//         <button
//           onClick={toggleDropdown}
//           className="text-[#06082E] hover:text-gray-600 transition-colors duration-500"
//         >
//           <Equal size={28} />
//         </button>
//       </main>

//       {/* Full-Screen Right-Side Dropdown */}
//       <div
//         className={`fixed inset-0 z-[100] bg-[#e3af45] transform transition-transform duration-700 ease-in-out ${
//           dropdownOpen ? "translate-x-0" : "translate-x-full"
//         }`}
//         style={{ pointerEvents: dropdownOpen ? "auto" : "none" }}
//       >
//         {/* Header */}
//         <div className="flex justify-between items-center p-6 md:p-8">
//           <Image src="/assets/goodwillLogo.svg" alt="Logo" width={48} height={40} />
//           <button
//             onClick={closeDropdown}
//             className="text-white hover:text-gray-200 flex items-center gap-2 text-lg transition-colors duration-500"
//           >
//             <span className="hidden md:inline">Close</span>
//             <X size={24} />
//           </button>
//         </div>

//         {/* Sidebar Items */}
//         <div className="flex flex-col h-full px-6 md:px-8 pb-8">
//           <div className="w-full md:w-1/3 mb-8">
//             <nav className="space-y-6">
//               {sidebarItems.map((item, index) => (
//                 <Link
//                   key={item.name}
//                   href={item.path}
//                   onClick={closeDropdown}
//                   className={`block text-2xl md:text-3xl font-light text-white transition-all duration-500 hover:translate-x-2 ${
//                     index === 0
//                       ? "text-white font-normal"
//                       : "text-white/70 hover:font-normal hover:text-white"
//                   }`}
//                 >
//                   {item.name}
//                 </Link>
//               ))}
//             </nav>

//             {/* Bottom Links */}
//             <div className="mt-12 space-y-4">
//               {bottomLinks.map((link) => (
//                 <Link
//                   key={link.name}
//                   href={link.path}
//                   onClick={closeDropdown}
//                   className="block text-lg text-white hover:text-gray-200 border-b border-white/20 pb-2 transition-colors duration-500"
//                 >
//                   {link.name}
//                 </Link>
//               ))}
//             </div>
//           </div>

//           {/* Social Links */}
//           <div className="absolute bottom-8 right-8 hidden md:flex space-x-6">
//             {socialLinks.map((social) => (
//               <Link
//                 key={social.name}
//                 href={social.path}
//                 onClick={closeDropdown}
//                 className="text-white/80 hover:text-white text-sm transition-colors duration-300"
//               >
//                 {social.name}
//               </Link>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Mobile Slide-Out Sidebar */}
//       <div
//         className={`fixed top-0 right-0 w-3/4 h-full bg-white z-50 shadow-lg flex flex-col p-3 space-y-6 transform transition-transform duration-500 md:hidden ${
//           mobileMenuOpen ? "translate-x-0" : "translate-x-full"
//         }`}
//       >
//         <div className="flex justify-end mb-4">
//           <button onClick={() => setMobileMenuOpen(false)} className="text-[#06082E]">
//             <X size={24} />
//           </button>
//         </div>
//         <nav className="flex flex-col space-y-4 pl-3">
//           {navItems.map((item) => (
//             <Link
//               key={item.name}
//               href={item.path}
//               onClick={() => setMobileMenuOpen(false)}
//               className="text-md font-medium text-[#06082E]"
//             >
//               {item.name}
//             </Link>
//           ))}
//           <Link href="/contact" passHref>
//             <button className="mt-2 bg-white text-[#06082E] font-semibold border border-[#06082E] px-6 py-2 rounded-sm hover:bg-[#06082E] hover:text-white transition-colors">
//               Contact Us
//             </button>
//           </Link>
//         </nav>
//       </div>

//       {/* Styles */}
//       <style jsx global>{`
//         .custom-clip {
//           clip-path: polygon(0 0, 80% 0, 100% 100%, 0% 100%);
//         }
//       `}</style>
//     </>
//   );
// };

// export default Navbar;



































"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { X, Equal } from "lucide-react";

const navItems = [
  { name: "HOME", path: "/" },
  { name: "OUR FLEETS", path: "/our-fleets" },
  { name: "GALLERY", path: "/gallery" },
  { name: "ABOUT US", path: "/about" },
  { name: "PRESS RELEASES", path: "/press-releases" },
];

const sidebarItems = [
  { name: "Programs", path: "/programs" },
  { name: "About", path: "/about" },
  { name: "Training & Placements", path: "/training" },
  { name: "Gallery", path: "/gallery" },
  { name: "Contact Us", path: "/contact" },
];

const bottomLinks = [
  { name: "Bachelor in Hotel Management", path: "/programs" },
  { name: "Diploma in Hotel Management", path: "/programs" },
  { name: "Crash Course for Cruise Lines", path: "/programs" },
  { name: "Crash Course for Culinary Arts", path: "/programs" },
];

const socialLinks = [
  { name: "LinkedIn", path: "/linkedin" },
  { name: "Instagram", path: "/instagram" },
  { name: "Twitter", path: "/tiktok" },
  { name: "Facebook", path: "/cookies" },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
    if (mobileMenuOpen) setMobileMenuOpen(false);
  };

  const closeDropdown = () => setDropdownOpen(false);

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="hidden md:flex w-full h-[91px] relative bg-white z-50">
        <div className="w-[335px] flex justify-center items-center custom-clip z-10">
          <Link href="/" passHref>
            <Image
              src="/assets/GoodwillSv.png"
              alt="Yacht Logo"
              width={280}
              height={91}
              priority
            />
          </Link>
        </div>

        <div className="absolute left-[254px] right-0 h-[90px] flex items-center justify-between px-4 bg-[#E3AF45]">
          <h1 className="pl-40 text-[32px] font-semibold text-white font-['Playfair_Display',Helvetica]">
            Good Will Institute of Hospitality & Catering Technology
          </h1>
          <button
            onClick={toggleDropdown}
            className="text-white hover:text-gray-200 transition-colors duration-200 pr-10"
          >
            <Equal size={36} />
          </button>
        </div>
      </nav>

      {/* Mobile Navbar */}
      <main className="md:hidden w-full bg-white flex justify-between items-center shadow-sm px-4 py-3">
        <Link href="/">
          {/* <Image src="/assets/goodwillLogo.svg" alt="Logo" width={40} height={20} /> */}
          <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToHM2UNbpvAWqNTFK3vWZrAJoprrWoqB5h7g&s" alt="Logo" width={40} height={20} />
        </Link>
        <button
          onClick={toggleDropdown}
          className="text-[#06082E] hover:text-gray-600 transition-colors duration-500"
        >
          <Equal size={28} />
        </button>
      </main>

      {/* Right-Side Dropdown (Desktop: 30% width, Mobile: full) */}
      <div
        className={`fixed top-0 right-0 h-full z-[100] bg-[#e3af45] transform transition-transform duration-500 ease-in-out 
        ${dropdownOpen ? "translate-x-0" : "translate-x-full"} 
        w-full md:w-[30%]`}
        style={{ pointerEvents: dropdownOpen ? "auto" : "none" }}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-6 md:p-8">
          <Image src="/assets/GoodLogo.svg" alt="Logo" width={48} height={40} />
          <button
            onClick={closeDropdown}
            className="text-white hover:text-gray-200 flex items-center gap-2 text-lg transition-colors duration-500"
          >
            <span className="hidden md:inline">Close</span>
            <X size={24} />
          </button>
        </div>

        {/* Sidebar Items */}
        <div className="flex flex-col h-full px-6 md:px-8 pb-8">
          <div className="w-full mb-8">
            <nav className="space-y-6">
              {sidebarItems.map((item, index) => (
                <Link
                  key={item.name}
                  href={item.path}
                  onClick={closeDropdown}
                  className={`block text-2xl md:text-3xl font-light text-white transition-all duration-500 hover:translate-x-2 ${
                    index === 0
                      ? "text-white font-normal"
                      : "text-white/70 hover:font-normal hover:text-white"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Bottom Links */}
            <div className="mt-12 space-y-4">
              {bottomLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.path}
                  onClick={closeDropdown}
                  className="block text-lg text-white hover:text-gray-200 border-b border-white/20 pb-2 transition-colors duration-500"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="absolute bottom-8 right-8 hidden md:flex space-x-6">
            {socialLinks.map((social) => (
              <Link
                key={social.name}
                href={social.path}
                onClick={closeDropdown}
                className="text-white/80 hover:text-white text-sm transition-colors duration-300"
              >
                {social.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Slide-Out Sidebar */}
      <div
        className={`fixed top-0 right-0 w-3/4 h-full bg-white z-50 shadow-lg flex flex-col p-3 space-y-6 transform transition-transform duration-500 md:hidden ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end mb-4">
          <button onClick={() => setMobileMenuOpen(false)} className="text-[#06082E]">
            <X size={24} />
          </button>
        </div>
        <nav className="flex flex-col space-y-4 pl-3">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              onClick={() => setMobileMenuOpen(false)}
              className="text-md font-medium text-[#06082E]"
            >
              {item.name}
            </Link>
          ))}
          <Link href="/contact" passHref>
            <button className="mt-2 bg-white text-[#06082E] font-semibold border border-[#06082E] px-6 py-2 rounded-sm hover:bg-[#06082E] hover:text-white transition-colors">
              Contact Us
            </button>
          </Link>
        </nav>
      </div>

      {/* Styles */}
      <style jsx global>{`
        .custom-clip {
          clip-path: polygon(0 0, 80% 0, 100% 100%, 0% 100%);
        }
      `}</style>
    </>
  );
};

export default Navbar;
