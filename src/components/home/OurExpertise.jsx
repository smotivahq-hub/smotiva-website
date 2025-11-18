import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Lightbulb, Code, Users, TrendingUp } from 'lucide-react'; // Using relevant icons

// Data for the Expertise Cards
const expertiseData = [
  {
    icon: Lightbulb,
    title: 'Digital Strategy & Consulting',
    description: 'We craft data-driven roadmaps and strategic plans tailored to your long-term business goals, ensuring maximum impact and measurable ROI.',
  },
  {
    icon: Code,
    title: 'Innovative Technology Solutions',
    description: 'Building custom software, high-performance web platforms, and mobile apps using scalable and secure modern technology stacks.',
  },
  {
    icon: Users,
    title: 'Brand Experience Design (UX/UI)',
    description: 'Creating visually stunning and user-centric interfaces and identity systems that captivate audiences and foster lasting loyalty.',
  },
  {
    icon: TrendingUp,
    title: 'Performance & Growth Marketing',
    description: 'Data-driven marketing and optimization services focused on rapidly scaling your visibility, traffic, and revenue streams.',
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

const ExpertiseCard = ({ icon: Icon, title, description }) => {
  return (
    <motion.div 
      variants={itemVariants} 
      // CRITICAL FIX: Consistent border on all sides (border-2 border-accent-teal)
      className="p-8 rounded-xl shadow-2xl bg-white border-2 border-accent-teal/50 hover:border-accent-teal transition duration-300 transform hover:scale-[1.02]"
    >
      <div className="mb-4">
        {/* CRITICAL FIX: Icon uses direct Tailwind color (text-accent-teal) */}
        <Icon size={40} className="text-accent-teal" />
      </div>
      <h3 className="text-xl font-heading font-bold text-primary-dark mb-3">
        {title}
      </h3>
      <p className="text-neutral-gray font-body text-base leading-relaxed">
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
    // CRITICAL FIX: Changed background to bg-white for a cleaner look
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading with SEO/Human Copy */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-heading font-extrabold text-primary-dark mb-2 tracking-tight">
            Our Expertise
          </h2>
          <p className="text-lg font-body text-neutral-gray max-w-2xl mx-auto">
            Our approach fuses strategic thinking, innovative technology, and creative design to build **digital brands** that are not only visible today but are also positioned for future growth and market dominance.
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