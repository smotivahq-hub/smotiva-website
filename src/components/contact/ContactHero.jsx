// src/components/contact/ContactHero.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function ContactHero({ onNavigate }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleNavigation = (page) => {
    if (onNavigate) {
      onNavigate(page);
    }
  };
  
  // Framer Motion Variants for a striking, centered entrance
  const contentVariants = {
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
    // Section uses the vibrant teal background matching the Contact.jpg UI
    <section ref={ref} className="bg-accent-teal py-24 text-primary-dark">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <motion.div
          variants={contentVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl font-heading font-extrabold mb-4 leading-tight">
            Let's Build Something That Inspires
          </h1>
          
          {/* Subtitle / Description */}
          <p className="text-lg font-body mb-8 max-w-2xl mx-auto">
            Whether you’re ready to start a project, request a quote, or just say hello—we’d love to hear from you. Our team is always open to new collaborations, ideas, and opportunities.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex justify-center space-x-4">
            <button
              onClick={() => handleNavigation('consultation')}
              className="bg-primary-dark hover:bg-secondary-dark text-white font-heading font-bold py-3 px-8 rounded-full transition duration-300 shadow-xl text-lg transform hover:-translate-y-0.5"
            >
              Book a Consultation
            </button>
            <button
              onClick={() => handleNavigation('start-project')}
              className="border-2 border-primary-dark text-primary-dark font-heading font-semibold py-3 px-8 rounded-full transition duration-300 text-lg hover:bg-primary-dark hover:text-white"
            >
              Start a Project
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}