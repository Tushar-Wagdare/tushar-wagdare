import React from 'react';
import { aboutData } from '../../data/portfolioData'; // Import aboutData

function About() {
  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8">About Me</h2>
        <p className="text-lg text-gray-300 mb-6">{aboutData.summary}</p>
        <ul className="list-none text-gray-400">
          <li>
            <strong>Name:</strong> {aboutData.name}
          </li>
          <li>
            <strong>Title:</strong> {aboutData.title}
          </li>
          <li>
            <strong>Location:</strong> {aboutData.location}
          </li>
          <li>
            <strong>Email:</strong>{' '}
            <a
              href={`mailto:${aboutData.email}`}
              className="text-blue-500 hover:text-blue-400"
            >
              {aboutData.email}
            </a>
          </li>
          <li>
            <strong>LinkedIn:</strong>{' '}
            <a
              href={aboutData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-400"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <strong>GitHub:</strong>{' '}
            <a
              href={aboutData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-400"
            >
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default About;