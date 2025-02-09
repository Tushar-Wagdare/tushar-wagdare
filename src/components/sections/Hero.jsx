import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDownIcon } from 'lucide-react';
import HeroBackground from '../HeroBackground';
import { aboutData } from '../../data/portfolioData'; // Import aboutData

function Hero() {
  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden">
      <HeroBackground />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-bold mb-4 text-white"
        >
          {aboutData.name}
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-2xl text-gray-300 mb-8"
        >
          {aboutData.title}
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <a
            href="#about"
            className="bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors"
          >
            Learn More
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <ChevronDownIcon className="animate-bounce text-white" size={32} />
      </motion.div>
    </section>
  );
}

export default Hero;