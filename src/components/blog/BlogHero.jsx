// src/components/blog/BlogHero.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function BlogHero() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  // Framer Motion Variants for a sharp, clean reveal
  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.6, 
        ease: [0.42, 0, 0.58, 1] 
      } 
    },
  };

  return (
    // Section uses a dark background matching the Blog.jpg UI
    <section ref={ref} className="bg-secondary-dark pt-24 pb-16 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Main Title */}
        <motion.h1
          variants={titleVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-6xl font-heading font-extrabold mb-4"
        >
          Blog Page
        </motion.h1>
        
        {/* Subtitle / Description (kept minimal as per the UI) */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-lg font-body text-neutral-gray max-w-xl mx-auto"
        >
          Insights, strategy, and innovation from the Smotiva team.
        </motion.p>
      </div>
    </section>
  );
}   