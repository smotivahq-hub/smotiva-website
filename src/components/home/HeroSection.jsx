// src/components/home/HeroSection.jsx
import React from 'react';
import { motion } from 'framer-motion';

export default function HeroSection({ onNavigate }) {

  const handleNavigation = (page) => {
    if (onNavigate) {
      onNavigate(page);
    }
  };

  // 1. Define Framer Motion Variants for smooth entrance
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Delay between each child element
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8, 
        ease: [0.17, 0.55, 0.55, 1] // Custom ease for smooth movement
      } 
    },
  };
  
  // Variants for the Image (comes in from the side)
  const imageVariant = {
    hidden: { opacity: 0, x: 50 },
    show: { 
      opacity: 1, 
      x: 0, 
      transition: { 
        duration: 0.9, 
        ease: [0.17, 0.55, 0.55, 1],
        delay: 0.5 // Start the image animation slightly later
      } 
    },
  };

  return (
    <section className="relative overflow-hidden pt-20 pb-32 md:pt-32 md:pb-40 bg-gradient-to-br from-primary-dark to-secondary-dark/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <motion.div 
          className="lg:grid lg:grid-cols-12 lg:gap-12 items-center"
          variants={container} // Apply container variants
          initial="hidden"
          animate="show"
        >
          
          {/* Left Column: Text Content and CTAs */}
          <div className="lg:col-span-7 xl:col-span-6 text-center lg:text-left mb-12 lg:mb-0">
            
            {/* Animated Title */}
            <motion.h1 
              variants={item} // Apply item variant
              className="text-5xl sm:text-6xl lg:text-7xl font-heading font-extrabold text-white mb-6 leading-tight"
            >
              Smart Creativity <br className="hidden sm:inline" /> 
              for Digital Generation.
            </motion.h1>
            
            {/* Animated Subtext */}
            <motion.p 
              variants={item} // Apply item variant
              className="text-xl text-neutral-light/80 font-body mb-10 max-w-xl lg:max-w-full mx-auto lg:mx-0"
            >
              We are a team of passionate digital experts driving innovation through design, technology, and strategic thinking.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              variants={item} // Apply item variant
              className="flex justify-center lg:justify-start space-x-4"
            >
              <button
                onClick={() => handleNavigation('contact')}
                className="bg-accent-teal hover:bg-opacity-80 text-secondary-dark font-heading font-bold py-3 px-8 rounded-full transition duration-300 shadow-xl text-lg transform hover:translate-y-[-2px]"
              >
                Book a Consultation
              </button>
              <button
                onClick={() => handleNavigation('projects')}
                className="bg-transparent border-2 border-accent-light text-white font-heading font-semibold py-3 px-8 rounded-full transition duration-300 text-lg hover:bg-accent-light hover:text-secondary-dark"
              >
                Learn More
              </button>
            </motion.div>
          </div>

          {/* Right Column: Image and Visuals */}
          <motion.div 
            className="lg:col-span-5 xl:col-span-6 flex justify-center lg:justify-end"
            variants={imageVariant} // Apply image variant
          >
             
          </motion.div>
        </motion.div>
      </div>
      
      {/* Background Shape Overlay */}
      <div className="absolute inset-0 opacity-10">
        {/* SVG code for background shape remains here */}
      </div>
    </section>
  );
}