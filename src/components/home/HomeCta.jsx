// src/components/home/HomeCta.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function HomeCta({ onNavigate }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleNavigation = (page) => {
    if (onNavigate) {
      onNavigate(page);
    }
  };
  
  // Framer Motion Variants for the content block
  const ctaVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      transition: { 
        duration: 0.8, 
        ease: [0.17, 0.55, 0.55, 1] 
      } 
    },
  };

  return (
    // Section uses a rich, dark background (Primary Dark) for impact
    <section className="bg-primary-dark py-24 sm:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <motion.div
          ref={ref}
          variants={ctaVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Main Title */}
          <h2 className="text-4xl sm:text-5xl font-heading font-extrabold text-white mb-4 leading-tight">
            Let's create something exceptional together
          </h2>
          
          {/* Supporting Text */}
          <p className="text-neutral-light/90 font-body text-lg mb-10 max-w-2xl mx-auto">
            Whether you’re launching a brand, designing visuals, or building a digital experience, we’ll bring your vision to life with creativity and purpose.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex justify-center space-x-4">
            <button
              onClick={() => handleNavigation('contact')}
              className="bg-accent-teal hover:bg-opacity-80 text-secondary-dark font-heading font-bold py-3 px-8 rounded-full transition duration-300 shadow-2xl text-lg transform hover:-translate-y-0.5 border-2 border-accent-teal"
            >
              Book a Consultation
            </button>
            <button
              onClick={() => handleNavigation('projects')}
              className="border-2 border-accent-light text-white font-heading font-semibold py-3 px-8 rounded-full transition duration-300 text-lg hover:bg-accent-light hover:text-secondary-dark"
            >
              Start a Project
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}