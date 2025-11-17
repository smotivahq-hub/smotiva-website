// src/components/home/IndustriesWeServe.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Building, GraduationCap, DollarSign, Heart, ShoppingBag, Globe } from 'lucide-react'; 

// Data matching the six industry icons/titles from the UI
const industryData = [
  { icon: Building, title: 'Real Estate & Construction' },
  { icon: GraduationCap, title: 'Education & Training' },
  { icon: DollarSign, title: 'Finance & Fintech' },
  { icon: Heart, title: 'Health & Wellness' },
  { icon: ShoppingBag, title: 'Retail & E-commerce' },
  { icon: Globe, title: 'Logistics & Supply Chain' },
];

// Framer Motion Variants for the staggered grid reveal
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08, // Subtle, fast stagger for the dense grid
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 80,
      damping: 10,
    },
  },
};

const IndustryCard = ({ icon: Icon, title }) => {
  return (
    <motion.div variants={itemVariants} className="p-4 sm:p-6 text-center rounded-xl bg-secondary-dark/70 border-b-4 border-accent-teal/50 transition-all duration-300 hover:bg-secondary-dark hover:shadow-2xl hover:border-accent-teal cursor-default">
      <div className="flex justify-center mb-3">
        {/* The icon circle uses neutral-light border for contrast on the dark background */}
        <div className="p-3 inline-flex items-center justify-center rounded-full border-2 border-neutral-light/50 text-accent-teal transition duration-300 group-hover:text-accent-cyan">
          <Icon size={30} />
        </div>
      </div>
      <h3 className="text-sm sm:text-base font-body font-semibold text-neutral-light">
        {title}
      </h3>
    </motion.div>
  );
};


export default function IndustriesWeServe() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.15, // Trigger when 15% of the section is visible
  });
  
  return (
    // Section uses dark slate background as per UI
    <section className="py-20 bg-secondary-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-heading font-extrabold text-white mb-2">
            Industries We Serve
          </h2>
          <p className="text-lg font-body text-neutral-gray max-w-xl mx-auto">
            Our expertise is leveraged across various sectors, delivering custom digital transformation solutions.
          </p>
        </motion.div>

        {/* Industry Cards Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          // Responsive Grid: 2 columns on small, 3 on medium, 6 on large
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6"
        >
          {industryData.map((item, index) => (
            <IndustryCard key={index} {...item} />
          ))}
        </motion.div>

      </div>
    </section>
  );
}