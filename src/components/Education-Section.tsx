export default function EducationSection() {
    return (
      <div>
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Education</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-gray-700">
              Software Engineering
            </h3>
            <p className="text-gray-500 italic">FPT University, HCM | 2022 - 2026</p>
            <p className="text-gray-600 mt-1">GPA: 3.3/4.0</p>
            <p className="text-gray-600">Thesis: &quot;Advancements in Machine Learning for Web Applications&quot;</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-700">
              Cultural Exchange Program
            </h3>
            <p className="text-gray-500 italic">UOW Selangor University, Malaysia | 2023 - 2023</p>
            <p className="text-gray-600 mt-1">Graduated with 8/10</p>
            <p className="text-gray-600">Relevant Skills:Soft skills, English</p>
          </div>
        </div>
      </div>
    );
  }