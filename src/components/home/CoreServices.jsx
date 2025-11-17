// src/components/home/CoreServices.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Zap, LayoutGrid, Code, Monitor } from 'lucide-react'; 

// Data matching the structure in Home.jpg
const servicesData = [
  {
    id: 1,
    title: 'Brand Identity & Design',
    description: 'We develop compelling visual identities, logos, and comprehensive style guides that accurately reflect your mission and captivate your audience.',
    icon: Zap,
    imagePlaceholder: 'Brand Design Visual',
  },
  {
    id: 2,
    title: 'Tech Strategy & Digital Solutions',
    description: 'From customized web applications to robust e-commerce platforms, we engineer scalable digital tools designed to drive efficiency and growth.',
    icon: Code,
    imagePlaceholder: 'Digital Solutions Interface',
  },
  {
    id: 3,
    title: 'Creative Content & Media',
    description: 'Engage your audience with high-quality content, including compelling copywriting, professional photography, and dynamic videography.',
    icon: LayoutGrid,
    imagePlaceholder: 'Creative Content Studio',
  },
  {
    id: 4,
    title: 'Training & Consultancy',
    description: 'Empower your internal teams with bespoke training programs and strategic consulting to master new technologies and design methodologies.',
    icon: Monitor,
    imagePlaceholder: 'Consulting Session',
  },
];

// Framer Motion Variants for scroll reveal
const fadeIn = {
  hidden: { opacity: 0, x: 0 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      delay: i * 0.1, // Staggered delay
      ease: [0.42, 0, 0.58, 1], // Custom cubic-bezier for smoothness
    },
  }),
};

// Item component for each service
const ServiceItem = ({ service, index }) => {
  // Determine if the item is on the left (odd index) or right (even index) for layout
  const isOdd = index % 2 !== 0; 
  
  // Custom initial position based on column for a "slide in" effect
  const initialX = isOdd ? 50 : -50; 

  return (
    <motion.div
      initial={{ opacity: 0, x: initialX }}
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }} // Trigger when 40% visible
      custom={index}
      variants={{
        visible: {
          opacity: 1,
          x: 0,
          transition: {
            duration: 0.8,
            delay: index * 0.15, 
            ease: [0.42, 0, 0.58, 1],
          },
        },
      }}
      className={`grid grid-cols-1 md:grid-cols-2 gap-6 items-start py-8 ${isOdd ? 'md:pl-16' : 'md:pr-16'}`}
    >
      {/* Visual Block (Dark Slate) - Renders first on left, second on right */}
      <div className={`order-1 ${isOdd ? 'md:order-2' : 'md:order-1'}`}>
        <div className="h-64 rounded-xl bg-secondary-dark p-6 flex items-center justify-center shadow-2xl transition duration-500 hover:scale-[1.02]">
          <service.icon size={60} className="text-accent-teal opacity-70" />
        </div>
      </div>
      
      {/* Text Content - Renders second on left, first on right */}
      <div className={`order-2 ${isOdd ? 'md:order-1 text-right' : 'md:order-2 text-left'}`}>
        <service.icon size={32} className={`mb-3 ${isOdd ? 'ml-auto' : 'mr-auto'} text-accent-teal`} />
        <h3 className="text-2xl font-heading font-bold text-neutral-dark mb-3">
          {service.title}
        </h3>
        <p className="text-neutral-gray font-body text-base leading-relaxed">
          {service.description}
        </p>
        <button className={`mt-4 text-sm font-semibold uppercase tracking-wider transition duration-300 ${isOdd ? 'text-accent-teal hover:text-primary-dark' : 'text-accent-teal hover:text-primary-dark'}`}>
          Explore Service &rarr;
        </button>
      </div>
    </motion.div>
  );
};


export default function CoreServices() {
  const [ref, inView] = useInView({
    triggerOnce: true, 
    threshold: 0.1, 
  });
  
  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-heading font-extrabold text-primary-dark mb-2">
            Our Core Services
          </h2>
          <p className="text-lg font-body text-neutral-gray max-w-xl mx-auto">
            A selection of our integrated services designed to achieve exceptional digital results for every client.
          </p>
        </motion.div>

        {/* Services List (Zig-Zag) */}
        <div className="space-y-12">
          {servicesData.map((service, index) => (
            <ServiceItem key={service.id} service={service} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
}   