import { GithubIcon, LinkedinIcon, MailIcon, PhoneIcon } from 'lucide-react';
import React from 'react';
import { contactData } from '../../data/portfolioData';  // Import contactData

function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8">Contact</h2>
        <div className="flex flex-col items-center space-y-4">
          <a
            href={`mailto:${contactData.email}`}
            className="flex items-center text-lg hover:text-blue-400 transition-colors"
          >
            <MailIcon className="mr-2" /> {contactData.email}
          </a>
          <a
            href={`tel:${contactData.phone}`}
            className="flex items-center text-lg hover:text-blue-400 transition-colors"
          >
            <PhoneIcon className="mr-2" /> {contactData.phone}
          </a>
          <a
            href={contactData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-lg hover:text-blue-400 transition-colors"
          >
            <LinkedinIcon className="mr-2" /> LinkedIn
          </a>
          <a
            href={contactData.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-lg hover:text-blue-400 transition-colors"
          >
            <GithubIcon className="mr-2" /> GitHub
          </a>
          <p className="text-gray-300 mt-4">Located in {contactData.location}</p>
        </div>
      </div>
    </section>
  );
}

export default Contact;