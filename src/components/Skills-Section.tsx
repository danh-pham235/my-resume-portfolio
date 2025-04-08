export default function SkillsSection() {
    return (
      <div>
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Technical Skills</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>JavaScript, TypeScript</li>
              <li>React, Next.js</li>
              <li>HTML, CSS, Tailwind CSS</li>
              <li>Git, GitHub</li>
              <li>Java</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Soft Skills</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>Problem Solving</li>
              <li>Team Collaboration</li>
              <li>Time Management</li>
              <li>Communication</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }