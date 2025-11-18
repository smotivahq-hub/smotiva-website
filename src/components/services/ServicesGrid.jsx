// src/components/services/ServicesGrid.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Palette, Layers, Smartphone, Settings, Film, Briefcase, Zap, Star } from 'lucide-react';

// Data for the eight service blocks (matching the UI structure)
const detailedServices = [
  {
    id: 1,
    icon: Palette,
    title: 'Brand Identity Strategy',
    desc: 'Crafting the foundational narrative, visual identity, and strategic positioning for new and existing brands.',
    deliverables: ['Logo & Visual Systems', 'Brand Guidelines', 'Brand Positioning', 'Identity Refresh'],
  },
  {
    id: 2,
    icon: Layers,
    title: 'UX/UI & Product Design',
    desc: 'Designing user-centric, intuitive interfaces for web applications, mobile apps, and enterprise software.',
    deliverables: ['Wireframing & Prototyping', 'User Research', 'Interface Design', 'Usability Testing'],
  },
  {
    id: 3,
    icon: Smartphone,
    title: 'Mobile App Development',
    desc: 'Building native and cross-platform mobile applications with scalable architecture and premium performance.',
    deliverables: ['iOS & Android Apps', 'React Native / Flutter', 'API Integration', 'App Store Deployment'],
  },
  {
    id: 4,
    icon: Settings,
    title: 'Web Design & Development',
    desc: 'Creating custom, high-performance websites and large-scale digital platforms using modern frameworks.',
    deliverables: ['Custom Web Portals', 'E-commerce Solutions', 'CMS Integration', 'Frontend & Backend'],
  },
  {
    id: 5,
    icon: Film,
    title: 'Content Creation & Copywriting',
    desc: 'Producing engaging visual and written content that aligns with your brand voice and drives audience action.',
    deliverables: ['Website Copy', 'Blog Management', 'Professional Photography', 'Video Production'],
  },
  {
    id: 6,
    icon: Briefcase,
    title: 'Marketing Strategy & SEO',
    desc: 'Developing data-driven strategies for visibility, acquisition, and conversion across digital channels.',
    deliverables: ['SEO & Audits', 'PPC Management', 'Social Media Strategy', 'Performance Analytics'],
  },
  {
    id: 7,
    icon: Zap,
    title: 'Product & Dev Consulting',
    desc: 'Providing expert guidance on product roadmap, technology choices, and optimizing development workflows.',
    deliverables: ['Technical Audits', 'Agile Transformation', 'Product Roadmapping', 'Team Training'],
  },
  {
    id: 8,
    icon: Star,
    title: 'Growth & Partnership Scaling',
    desc: 'Focused services to accelerate market entry, business development, and strategic long-term partnerships.',
    deliverables: ['Market Research', 'Partnership Sourcing', 'M&A Advisory', 'Scale Planning'],
  },
];

// Framer Motion Variants for the staggered grid reveal
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08, 
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
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

const ServiceCard = ({ service }) => {
  const Icon = service.icon;
  return (
    <motion.div
      variants={itemVariants}
      className="bg-secondary-dark rounded-xl shadow-xl transition-transform duration-300 transform hover:-translate-y-2 hover:shadow-2xl border-t-4 border-accent-teal/30 overflow-hidden"
    >

      {/* Visual Placeholder (Matching the gray box in the UI) */}
      <div className="bg-neutral-light h-40 w-full rounded-t-xl flex items-center justify-center">
        <Icon size={50} className="text-neutral-gray opacity-60" />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-lg font-heading font-bold text-accent-teal mb-2">
          {service.title}
        </h3>
        <p className="text-neutral-light/80 font-body text-sm mb-4 leading-relaxed">
          {service.desc}
        </p>

        {/* Deliverables List */}
        <div className="mt-4 pt-4 border-t border-neutral-gray/20">
          <p className="text-xs font-semibold uppercase tracking-wider text-accent-teal mb-2">Key Deliverables:</p>
          <ul className="space-y-1">
            {service.deliverables.map((item, index) => (
              <li key={index} className="flex items-center text-xs font-body text-neutral-light">
                <span className="w-2 h-2 bg-accent-cyan rounded-full mr-3 shrink-0"></span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};


export default function ServicesGrid() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  return (
    <section className="py-20 bg-neutral-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          // Responsive Grid: 1 column on small, 2 on medium, 4 on large (for better density)
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {detailedServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}   