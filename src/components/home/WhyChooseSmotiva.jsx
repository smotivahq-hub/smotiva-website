// src/components/home/WhyChooseSmotiva.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CheckCircle } from 'lucide-react'; 

// Data for the benefits list
const benefits = [
  'Deep industry insight and strategic consulting.',
  'Commitment to measurable results and ROI.',
  'Nigerian creativity blended with global standards.',
  'Agile and transparent development processes.',
  'Dedicated post-launch support and maintenance.',
  'Innovative solutions tailored to future scalability.',
];

// Framer Motion Variants for the overall section
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.1,
    },
  },
};

// Framer Motion Variants for the individual list items
const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.5, ease: 'easeOut' } 
  },
};

// Framer Motion Variant for the image (right column)
const imageVariant = {
    hidden: { opacity: 0, x: 50, scale: 0.95 },
    visible: { 
        opacity: 1, 
        x: 0, 
        scale: 1, 
        transition: { 
            duration: 0.8, 
            delay: 0.4, 
            ease: [0.17, 0.55, 0.55, 1] 
        } 
    },
};


export default function WhyChooseSmotiva() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2, // Trigger when 20% of the component is visible
  });

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-heading font-extrabold text-primary-dark mb-2">
            Why Choose Smotiva
          </h2>
          <p className="text-lg font-body text-neutral-gray max-w-xl mx-auto">
            Our unique value proposition and commitment to excellence set us apart from the competition.
          </p>
        </motion.div>

        {/* Two-Column Content Grid */}
        <div ref={ref} className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Column: Benefits List */}
            <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className="p-8 rounded-xl border border-accent-cyan/30 bg-neutral-light/50"
            >
                <ul className="space-y-5">
                    {benefits.map((benefit, index) => (
                        <motion.li 
                            key={index}
                            variants={itemVariants}
                            className="flex items-start font-body text-neutral-dark text-lg"
                        >
                            <CheckCircle size={24} className="text-accent-teal flex-shrink-0 mt-1 mr-3" />
                            <span>{benefit}</span>
                        </motion.li>
                    ))}
                </ul>
            </motion.div>

            {/* Right Column: Branded Visual */}
            <motion.div
                variants={imageVariant}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className="p-4 flex justify-center lg:justify-end"
            >
                <div className="relative w-full max-w-md h-96 rounded-xl overflow-hidden shadow-2xl">
                    
                    {/* Optional: Add a subtle overlay for a graphic design feel */}
                    <div className="absolute inset-0 bg-primary-dark/10 mix-blend-multiply pointer-events-none"></div>
                </div>
            </motion.div>
        </div>
      </div>
    </section>
  );
}