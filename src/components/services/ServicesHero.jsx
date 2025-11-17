// src/components/services/ServicesHero.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function ServicesHero() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  // Framer Motion Variants for smooth content reveal
  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.7, 
        ease: [0.42, 0, 0.58, 1] 
      } 
    },
  };
  
  const subtitleVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.7, 
        delay: 0.2,
        ease: [0.42, 0, 0.58, 1] 
      } 
    },
  };


  return (
    // Section uses a dark background matching the top of the Services.jpg UI
    <section ref={ref} className="bg-secondary-dark pt-24 pb-16 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Main Title */}
        <motion.h1
          variants={titleVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-6xl font-heading font-extrabold mb-4"
        >
          Our Services
        </motion.h1>
        
        {/* Subtitle / Description */}
        <motion.p
          variants={subtitleVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-lg font-body text-neutral-gray max-w-3xl mx-auto"
        >
          Creativity meets clarity—where ideas become brands that move people. We help individuals, startups, and established brands design visuals, build digital presence, and refine strategy, setting them up for massive, meaningful results.
        </motion.p>
      </div>
    </section>
  );
}