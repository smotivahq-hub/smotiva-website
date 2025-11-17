// src/components/home/OurExpertise.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Lightbulb, Code, Users, TrendingUp } from 'lucide-react'; // Using relevant icons

// Data for the Expertise Cards
const expertiseData = [
  {
    icon: Lightbulb,
    title: 'Digital Strategy',
    description: 'We craft comprehensive digital roadmaps tailored to your long-term business goals, ensuring maximum impact and measurable ROI.',
    color: 'accent-teal',
  },
  {
    icon: Code,
    title: 'Innovative Technology',
    description: 'Building custom software, web platforms, and mobile apps using cutting-edge, scalable, and secure technology stacks.',
    color: 'accent-cyan',
  },
  {
    icon: Users,
    title: 'Brand Experience Design',
    description: 'Creating visually stunning and user-centric interfaces and identity systems that captivate audiences and foster loyalty.',
    color: 'primary-dark',
  },
  {
    icon: TrendingUp,
    title: 'Growth & Optimization',
    description: 'Data-driven marketing and performance optimization services focused on scaling your visibility and revenue streams.',
    color: 'neutral-gray',
  },
];

// Framer Motion Variants for smooth reveal on scroll
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 15,
    },
  },
};

const ExpertiseCard = ({ icon: Icon, title, description, color }) => {
  return (
    <motion.div variants={itemVariants} className="p-8 rounded-xl shadow-2xl bg-white border-b-4 border-l-2" 
      // Dynamic border color based on the card's accent
      style={{ borderColor: color === 'primary-dark' ? '#1E3A8A' : color === 'accent-teal' ? '#00C4CC' : color === 'accent-cyan' ? '#38BDF8' : '#9CA3AF' }}
    >
      <div className={`text-${color} mb-4`}>
        <Icon size={40} className={`text-${color}`} style={{ color: color === 'primary-dark' ? '#1E3A8A' : color === 'accent-teal' ? '#00C4CC' : color === 'accent-cyan' ? '#38BDF8' : '#9CA3AF' }}/>
      </div>
      <h3 className="text-xl font-heading font-bold text-neutral-dark mb-3">
        {title}
      </h3>
      <p className="text-neutral-gray font-body text-sm leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
};


export default function OurExpertise() {
  // Use React Intersection Observer to trigger Framer Motion animation when in view
  const [ref, inView] = useInView({
    triggerOnce: true, // Only animate once
    threshold: 0.2,    // Start animation when 20% of the component is visible
  });

  return (
    <section className="py-20 bg-neutral-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-heading font-extrabold text-neutral-dark mb-2">
            Our Expertise
          </h2>
          <p className="text-lg font-body text-neutral-gray max-w-2xl mx-auto">
            We focus on core disciplines that ensure your brand is not just visible, but dominant and future-proof.
          </p>
        </motion.div>

        {/* Expertise Cards Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {expertiseData.map((item, index) => (
            <ExpertiseCard key={index} {...item} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}