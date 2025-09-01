import React from "react";
import { Header } from "./components/Header";
import { HeroSection } from "./sections/HeroSection/HeroSection";
import { ProgramsSection } from "./sections/ProgramsSection/ProgramsSection";
import { DirectorsSection } from "./sections/DirectorsSection/DirectorsSection";
import { FacultySection } from "./sections/FacultySection/FacultySection";
import { Footer } from "./components/Footer";
import { FooterSection } from "../../components/Footer";

 const GoodwillAbout = () => {
  return (
    <div className="bg-white w-full min-h-screen">
     
      <main className="w-full">
        <HeroSection />
        <ProgramsSection />
        <DirectorsSection />
        <FacultySection />
      </main>
      
     
    </div>
  );

};

export default GoodwillAbout;