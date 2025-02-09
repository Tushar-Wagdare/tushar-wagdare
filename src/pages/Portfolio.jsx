import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ChevronDownIcon } from 'lucide-react'

// Import section components
import Hero from '../components/sections/Hero'
import About from '../components/sections/About'
import Experience from '../components/sections/Experience'
import Skills from '../components/sections/Skills'
import Projects from '../components/sections/Projects'
import Education from '../components/sections/Education'
import Contact from '../components/sections/Contact'
import { aboutData, experienceData, skillsData, projectsData, educationData } from '../data/portfolioData'; // Correct relative path


export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'skills', 'projects', 'education', 'contact']
      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900 bg-opacity-90 backdrop-blur-sm">
        <nav className="container mx-auto px-6 py-4">
          <ul className="flex justify-center space-x-6 overflow-x-auto md:overflow-visible">
            {['Home', 'About', 'Experience', 'Skills', 'Projects', 'Education', 'Contact'].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className={`text-sm font-medium hover:text-blue-400 transition-colors whitespace-nowrap ${
                    activeSection === item.toLowerCase() ? 'text-blue-400' : ''
                  }`}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main className="pt-16">
        <Hero />
        <About aboutData={aboutData} />
        <Experience experienceData={experienceData} />
        <Skills skillsData={skillsData} />
        <Projects projectsData={projectsData} />
        <Education educationData={educationData} />
        <Contact />
      </main>
    </div>
  )
}