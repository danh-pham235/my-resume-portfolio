import Image from "next/image";
import ExperienceSection from "@/components/Experience-Section";
import EducationSection from "@/components/Education-Section";
import SkillsSection from "@/components/Skills-Section";
import ProfileSection from "@/components/Profile-Section";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 via-blue-50 to-gray-200 text-gray-900 p-6 font-sans">
      {/* Header Section */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <div className="relative inline-block">
          <Image
            src="/avatar.jpg"
            alt="Profile"
            width={180}
            height={180}
            className="rounded-full border-4 border-gray-200 shadow-xl"
          />
        </div>
        <h1 className="text-5xl font-extrabold text-gray-800 mt-6">
        <span className="text-purple-600">Pham The Danh</span>
        </h1>
        <p className="text-xl font-medium text-gray-600 mt-2">
          Front-End Developer
        </p>
        <div className="mt-4">
          <ProfileSection />
        </div>
      </div>

      {/* Timeline Section */}
      <div className="max-w-4xl mx-auto relative">
        {/* Vertical Timeline Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-300 h-full"></div>

        {/* Experience Section */}
        <div className="relative mb-12">
          <div className="flex items-center justify-center mb-4">
            <div className="w-8 h-8 bg-purple-600 rounded-full border-4 border-white z-10"></div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <ExperienceSection />
          </div>
        </div>

        {/* Skills Section */}
        <div className="relative mb-12">
          <div className="flex items-center justify-center mb-4">
            <div className="w-8 h-8 bg-blue-600 rounded-full border-4 border-white z-10"></div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <SkillsSection />
          </div>
        </div>

        {/* Education Section */}
        <div className="relative mb-12">
          <div className="flex items-center justify-center mb-4">
            <div className="w-8 h-8 bg-green-600 rounded-full border-4 border-white z-10"></div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <EducationSection />
          </div>
        </div>
      </div>
    </div>
  );
}