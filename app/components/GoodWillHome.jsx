import { FooterSection } from "../../components/Footer";
import { EnrollmentInfoSection } from "../programs/components/sections/EnrollmentInfoSection";
import { CareerOpportunitiesSection } from "./sections/CareerOpportunitiesSection";
import { ContactSection } from "./sections/ContactSection";
import { EmpowermentSection } from "./sections/EmpowermentSection";
import { HighlightsSection } from "./sections/HighlightsSection";
import { OverviewSection } from "./sections/OverviewSection";
import { ProgramsSection } from "./sections/ProgramsSection";
import Statistics from "./sections/Statistics";
import { StudentSuccessSection } from "./sections/StudentSuccessSection";
import { TestimonialsSection } from "./sections/TestimonialsSection";

export function GoodWillHome() {
  return (
    <main className="flex flex-col w-full items-center  ">
      <div className="w-full  mx-auto">
        <OverviewSection />
      </div>
      <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 ">
        <HighlightsSection />
      </div>

      <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 ">
        <ProgramsSection />
      </div>

      <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-20 ">
        <TestimonialsSection />
      </div>
      
      {/* <div className="w-full  ">
        <Statistics/>
      </div> */}

      <div className="w-full">
        {/* <EmpowermentSection /> */}
        <EnrollmentInfoSection />
      </div>
      <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-14 ">
        <StudentSuccessSection />
      </div>
      <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-14 ">
        <CareerOpportunitiesSection />
      </div>
    </main>
  );
}
