// src/components/about/AboutHero.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function AboutHero() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  // Framer Motion Variants for a clean title drop-in
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

  return (
    // Section uses a lighter gray background matching the About.jpg UI
    <section ref={ref} className="bg-neutral-light pt-24 pb-16 text-neutral-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Main Title */}
        <motion.h1
          variants={titleVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-6xl font-heading font-extrabold mb-4"
        >
          About Us
        </motion.h1>
      </div>
    </section>
  );
}