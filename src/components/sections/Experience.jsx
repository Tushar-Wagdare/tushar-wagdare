import React from 'react';
import { experienceData } from '../../data/portfolioData.js'; // Import experienceData

function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8">Relevant  Experience</h2>
        {experienceData.map((exp, index) => (
          <div key={index} className="bg-gray-800 rounded-lg p-6 mb-6">
            <h3 className="text-xl font-semibold mb-2">{exp.title}</h3>
            <p className="text-gray-400 mb-4">
              {exp.company}  {exp.dates}  {exp.location}
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              {exp.responsibilities.map((responsibility, i) => (
                <li key={i}>{responsibility}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;