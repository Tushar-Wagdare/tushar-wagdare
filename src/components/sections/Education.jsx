import React from 'react';
import { educationData } from '../../data/portfolioData';  // Import educationData

function Education() {
  return (
    <section id="education" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8">Education</h2>
        <div className="space-y-6">
          {educationData.map((edu, index) => (
            <div key={index} className="bg-gray-700 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">{edu.degree}</h3>
              <p className="text-gray-300">{edu.institution}, {edu.location}</p>
              <p className="text-gray-400">{edu.dates}</p>
              {edu.details && (
                <p className="text-gray-300 mt-2">{edu.details}</p>
              )}
              <p className="text-blue-400 mt-2">{edu.grade}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;