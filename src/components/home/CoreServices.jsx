import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Check } from 'lucide-react'; 
import { NavLink } from 'react-router-dom';

// Data matching the structure in Our Core Services.jpg
const servicesData = [
  {
    id: 1,
    title: 'Brand Identity & Design',
    description: 'We help businesses and individuals create powerful, recognizable brand identities that reflect their authentic story and core values.',
    // Image Placeholder 1: Nigerian designer
    imgSrc: '/images/services/s1.png',
    imgAlt: 'A Nigerian graphic designer sketching a new logo concept on a tablet, symbolizing brand identity development.',
    deliverables: [
      'Logo Design & Brand Kits',
      'Corporate Stationery Design',
      'Marketing Collateral (Flyers, Banners, Brochures)',
      'Social Media Visuals',
    ],
  },
  {
    id: 2,
    title: 'Technology & Digital Solutions',
    description: 'We leverage state-of-the-art technology to build robust digital platforms, bringing your brand closer to its target audience efficiently.',
    // Image Placeholder 2: Nigerian developer/engineer
    imgSrc: '/images/services/s2.png',
    imgAlt: 'A Nigerian software engineer working on a complex coding interface with multiple monitors, representing digital solutions.',
    deliverables: [
      'Web Design & Development',
      'UI/UX Design',
      'Mobile-Friendly Applications',
      'Dashboard & Admin Panel Interfaces',
    ],
  },
  {
    id: 3,
    title: 'Creative Content & Media',
    description: 'We create and manage engaging, high-quality content—visual and written—that successfully builds audience trust and connects deeply with customers.',
    // Image Placeholder 3: Nigerian content creator
    imgSrc: '/images/services/s3.png',
    imgAlt: 'A Nigerian videographer operating a camera and lighting, symbolizing professional content and media creation.',
    deliverables: [
      'Content Strategy & Design',
      'Frictionless Video Tutorials',
      'Motion Graphics & Explainers',
      'Social Media Management',
    ],
  },
  {
    id: 4,
    title: 'Training & Consultancy',
    description: 'We empower individuals and teams with practical skills and strategies, providing the expert guidance necessary to master technology and achieve business growth.',
    // Image Placeholder 4: Nigerian consultant leading a session
    imgSrc: '/images/services/s4.png',
    imgAlt: 'A Nigerian consultant presenting to a diverse group of professionals in a training session, focused on growth strategies.',
    deliverables: [
      'Graphic Design & Tech Skills Training',
      'Business Growth & Brand Strategy Consulting',
      'Content Creation Masterclasses',
      'Digital Transformation Workshops',
    ],
  },
];

// Framer Motion Variants for scroll reveal (retained for premium animation)
const itemVariants = {
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.42, 0, 0.58, 1],
    },
  },
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
      variants={itemVariants}
      className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center py-8" 
    >
      
      {/* Visual Block (Image replacing the Icon/Div) - Renders first on left, second on right */}
      <div className={`order-1 ${isOdd ? 'md:order-2' : 'md:order-1'}`}>
        <div className="h-72 rounded-xl  p-2 shadow-2xl transition duration-500 hover:scale-[1.02]  overflow-hidden">
          {/* CRITICAL FIX: Replaced icon div with image tag */}
          <img 
            src={service.imgSrc} 
            alt={service.imgAlt} 
            className="w-full h-full object-cover rounded-lg opacity-80 transition duration-500 group-hover:opacity-100" 
            // Fallback for placeholder images
            onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/600x400/1E3A8A/FFFFFF?text=Smotiva+Image+Error"; }}
          />
        </div>
      </div>
      
      {/* Text Content - Renders second on left, first on right */}
      <div className={`order-2 ${isOdd ? 'md:order-1' : 'md:order-2'}`}>
        <h3 className="text-2xl font-heading font-bold text-primary-dark mb-3">
          {service.title}
        </h3>
        <p className="text-neutral-gray font-body text-base leading-relaxed mb-4">
          {service.description}
        </p>
        
        {/* Deliverables List (Using Check Icon) */}
        <ul className="space-y-2 font-body text-neutral-dark">
          {service.deliverables.map((item, i) => (
            <li key={i} className="flex items-center text-sm">
              <span className="shrink-0 inline-flex items-center justify-center w-4 h-4 rounded-full border border-accent-teal text-white bg-accent-teal mr-3">
                <Check size={10} aria-hidden="true" />
              </span>
              <span className="leading-snug">{item}</span>
            </li>
          ))}
        </ul>

        {/* CTA Link (Using NavLink to Services Page) */}
        <NavLink 
          to="/services" 
          className="mt-6 inline-flex items-center text-sm font-semibold uppercase tracking-wider text-accent-teal hover:text-primary-dark transition duration-300"
        >
          Explore Service Details &rarr;
        </NavLink>
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
        
        {/* Section Heading with SEO/Human Copy */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-heading font-extrabold text-primary-dark mb-2 tracking-tight">
            Our Core Services: Integrated Digital Solutions
          </h2>
          <p className="text-lg font-body text-neutral-gray max-w-xl mx-auto">
            From visionary **brand identity** to robust **digital solutions**, we offer an integrated suite of services designed to achieve exceptional, measurable results for every client.
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