'use client'

import { HeroBannerSection } from './sections/HeroBannerSection'
import { NavigationSection } from './sections/NavigationSection'
import { ProgramDetailsSection } from './sections/ProgramDetailsSection'
import { CourseOverviewSection } from './sections/CourseOverviewSection'
import { EnrollmentInfoSection } from './sections/EnrollmentInfoSection'
import { ContactInfoSection } from './sections/ContactInfoSection'
import { FooterSection } from '../../../components/Footer'

export const GoodwillPrograms = () => {
  return (
    <div className="bg-white w-full min-h-screen">
      <div className="bg-white w-full  mx-auto">
        {/* Header Section */}
        {/* Main Content Sections */}
        <main className="flex flex-col w-full">
          <HeroBannerSection />
          <div className="flex flex-col w-full items-center px-4 max-w-7xl mx-auto">
            <NavigationSection />
            <ProgramDetailsSection />
            <CourseOverviewSection />
          </div>
          <div className='w-full'>
          <EnrollmentInfoSection />
          </div>
        </main>
      </div>
    </div>
  )
}