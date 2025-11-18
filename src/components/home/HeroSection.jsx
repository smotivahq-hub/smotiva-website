import React from 'react';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';

export default function HeroSection() {

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
    // Note: The Header is fixed/transparent, so we add padding here to ensure content sits below the header's height (h-24)
    <section className="relative overflow-hidden pt-32 pb-18 md:pt-20 md:pb-0 bg-primary-dark min-h-[600px] md:min-h-[250px] lg:min-h-[700px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <motion.div 
          className="lg:grid lg:grid-cols-12 lg:gap-12 items-center"
          variants={container} // Apply container variants
          initial="hidden"
          animate="show"
        >
          
          {/* Left Column: Text Content and CTAs */}
          <div className="lg:col-span-7 xl:col-span-6 text-center lg:text-left mb-12 lg:mb-0">
            
            {/* Animated Title (Using UI text) */}
            <motion.h1 
              variants={item}
              className="text-4xl sm:text-6xl lg:text-6xl font-heading font-bold text-white mb-6 leading-tighter tracking-tight"
            >
              <span className='text-accent-teal'>Smotiva</span> - Godswill ### Smart Creativity <br className="hidden sm:inline" /> 
              for Digital Generation
            </motion.h1>
            
            {/* Animated Subtext (Using UI text + SEO/Human tweak) */}
            <motion.p 
              variants={item}
              className="text-xl text-neutral-light/80 font-body mb-10 max-w-xl lg:max-w-full mx-auto lg:mx-0"
            >
              We're a creative agency that transforms ideas into visuals, videos, and websites that attract, inspire, and deliver results.
            </motion.p>

            {/* CTA Buttons (Using NavLink) */}
            <motion.div
              variants={item}
              className="flex flex-col md:flex-row lg:flex-row justify-center lg:justify-start items-center w-full gap-3 lg:gap-4"
            >
              <NavLink
                to="/contact"
                className="w-full lg:w-auto text-center bg-accent-teal hover:bg-opacity-80 text-secondary-dark font-heading font-bold py-3 px-8 rounded-lg transition duration-300 shadow-xl text-lg transform hover:-translate-y-0.5"
              >
                Book a Consultation
              </NavLink>
              <NavLink
                to="/projects"
                className="w-full lg:w-auto text-center bg-transparent border border-accent-light text-white font-heading font-semibold py-3 px-8 rounded-lg transition duration-300 text-lg hover:bg-accent-light hover:text-secondary-dark"
              >
                Start a Project
              </NavLink>
            </motion.div>
          </div>

          {/* Right Column: Image and Visuals */}
          <motion.div 
            className="lg:col-span-5 xl:col-span-6 hidden lg:flex justify-center lg:justify-end"
            variants={imageVariant}
          >
             {/* SEO Optimized Placeholder - Describes the image for screen readers and SEO */}
             <div className="relative w-full max-w-md lg:max-w-2xl h-auto">
               <img
                 src="/images/Hue_Saturation 1.png"
                 alt="beautiful-black-woman-with-afro-curls-hairstyle-smiling-model-sweater-trendy-jeans-clothes"
                 className="w-full md:w-[720px] h-auto object-contain mx-auto"
               />
             </div>
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