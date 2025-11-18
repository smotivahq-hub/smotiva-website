import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Heart, Building, GraduationCap, Users, Lightbulb } from 'lucide-react'; 

// Data matching the six industry titles from the Industries We Serve.png UI
const industryData = [
  { 
    icon: Briefcase, 
    title: 'Startups & SMEs',
    description: 'Helping new businesses and small-to-medium enterprises stand out with strong branding and scalable digital tools.',
  },
  { 
    icon: Heart, 
    title: 'NGOs & Non-Profits',
    description: 'Designing impactful communication campaigns and digital strategies that drive donations and community engagement.',
  },
  { 
    icon: Building, 
    title: 'Corporate Organizations',
    description: 'Building robust digital solutions, content infrastructure, and internal systems for large-scale enterprise growth and efficiency.',
  },
  { 
    icon: GraduationCap, 
    title: 'Education & Training',
    description: 'Providing design and tech education platforms, bespoke learning systems, and strategic digital tools for the next generation.',
  },
  { 
    icon: Lightbulb, 
    title: 'Creative Entrepreneurs',
    description: 'Supporting individuals and solopreneurs with the essential branding and digital tools required to express their vision and grow their personal brand.',
  },
  { 
    icon: Users, 
    title: 'Agencies & Consulting Firms',
    description: 'Partnering with other agencies and firms to provide high-level development, design overflow, and specialized technology consulting.',
  },
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

const IndustryCard = ({ icon: Icon, title, description }) => {
  return (
    <motion.div variants={itemVariants} className="p-6 text-center rounded-xl bg-secondary-dark/80 border-2 border-accent-teal/50 transition-all duration-300 hover:bg-secondary-dark hover:border-accent-teal cursor-default shadow-lg">
      <div className="flex flex-col items-center mb-4 h-full">
        {/* Icon Circle */}
        <div className="p-3 inline-flex items-center justify-center rounded-full border-2 border-accent-cyan/50 text-accent-teal transition duration-300 group-hover:text-accent-cyan mb-3">
          <Icon size={30} />
        </div>
        
        {/* Title */}
        <h3 className="text-lg font-heading font-semibold text-white mb-2">
          {title}
        </h3>
        
        {/* Description (New SEO/Human Content) */}
        <p className="text-sm font-body text-neutral-gray flex-grow">
            {description}
        </p>
      </div>
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
        
        {/* Section Heading with SEO/Human Copy */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-heading font-extrabold text-white mb-2">
            Industries We Serve: Targeted Digital Impact
          </h2>
          <p className="text-lg font-body text-neutral-gray max-w-2xl mx-auto">
            Our expertise is leveraged across **key industry sectors**, delivering custom digital transformation solutions that meet the unique needs and challenges of your domain.
          </p>
        </motion.div>

        {/* Industry Cards Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          // Responsive Grid: 2 columns on small, 3 on medium, 6 on large
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6 gap-6"
        >
          {industryData.map((item, index) => (
            <IndustryCard key={index} {...item} />
          ))}
        </motion.div>

      </div>
    </section>
  );
}