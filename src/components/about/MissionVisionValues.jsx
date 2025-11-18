// src/components/about/MissionVisionValues.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Target, Eye, Heart, Zap, Code, Users } from 'lucide-react';

// Data for Core Values
const coreValues = [
  { icon: Heart, name: 'Integrity', desc: 'Operating with honesty and transparency.' },
  { icon: Zap, name: 'Creativity', desc: 'Pushing boundaries in design and problem-solving.' },
  { icon: Code, name: 'Innovation', desc: 'Adopting future-proof technologies and methods.' },
  { icon: Target, name: 'Excellence', desc: 'Committing to high-quality, measurable results.' },
  { icon: Users, name: 'Collaboration', desc: 'Fostering strong partnerships with clients.' },
];

// Framer Motion Variants for scroll reveal
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const boxItemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 100, damping: 15 },
  },
};

const valueItemVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4 },
  },
};


const ContentBox = ({ title, content, icon: Icon, delay }) => (
    <motion.div variants={boxItemVariants} className="p-8 rounded-xl bg-secondary-dark text-white shadow-2xl transition duration-300 border-l-4 border-accent-teal/50">
        <h3 className="text-2xl font-heading font-bold mb-4 flex items-center">
            {title}
        </h3>
        <p className="font-body text-neutral-gray leading-relaxed">{content}</p>
        <button className="mt-4 text-sm font-semibold uppercase tracking-wider text-accent-teal hover:text-accent-cyan transition duration-300">
            Learn More &rarr;
        </button>
    </motion.div>
);


export default function MissionVisionValues() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Section: Who We Are */}
        <div className="grid lg:grid-cols-12 gap-10 items-start mb-16">
            <motion.div 
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7 }}
                className="lg:col-span-4"
            >
                
            </motion.div>
            <motion.div 
                initial={{ opacity: 0, x: 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="lg:col-span-8 space-y-4"
            >
                <h2 className="text-3xl font-heading font-extrabold text-primary-dark">
                    Who We Are
                </h2>
                <p className="text-lg font-body text-neutral-dark">
                    Smotiva is a collective of visionary designers, expert developers, and strategic consultants dedicated to building digital legacies. We are driven by a singular passion: transforming complex ideas into elegant, impactful digital experiences.
                </p>
                <p className="text-neutral-gray font-body">
                    Born out of a desire to blend world-class technological execution with authentic Nigerian creativity, our team operates at the intersection of innovation and measurable results. We don't just build products; we craft foundations for sustained growth.
                </p>
                <div className="flex space-x-4 pt-4">
                    <button className="bg-accent-teal text-secondary-dark font-heading font-semibold py-2 px-6 rounded-full transition duration-300 hover:bg-opacity-90">
                        Our Process
                    </button>
                    <button className="border-2 border-primary-dark text-primary-dark font-heading font-semibold py-2 px-6 rounded-full transition duration-300 hover:bg-primary-dark hover:text-white">
                        See Portfolio
                    </button>
                </div>
            </motion.div>
        </div>
        
        {/* Mission, Vision, and Core Values Grid */}
        <motion.div 
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="grid lg:grid-cols-3 gap-8"
        >
            {/* Left Column (Mission & Vision) */}
            <div className="lg:col-span-2 space-y-8">
                <ContentBox 
                    title="Our Mission"
                    content="To empower businesses and communities globally by delivering innovative, future-proof digital solutions that are rooted in strategic thinking and exceptional design."
                    icon={Target}
                    delay={0}
                />
                <ContentBox 
                    title="Our Vision"
                    content="To be recognized as the premier African digital agency, known for setting the standard in creative technology, measurable results, and ethical leadership."
                    icon={Eye}
                    delay={0.2}
                />
                {/* Note: Added the Mission/Vision content for visual consistency with the UI boxes */}
            </div>

            {/* Right Column (Core Values) - The distinctive sidebar */}
            <motion.div 
                variants={boxItemVariants}
                className="lg:col-span-1 p-8 rounded-xl bg-primary-dark text-white shadow-2xl"
            >
                <h3 className="text-3xl font-heading font-extrabold mb-6">
                    Our Core Values
                </h3>
                <motion.ul 
                    variants={containerVariants}
                    className="space-y-6"
                >
                    {coreValues.map((value, index) => {
                        const Icon = value.icon;
                        return (
                            <motion.li key={index} variants={valueItemVariants} className="flex items-center space-x-4">
                                <div className="p-3 rounded-full bg-accent-teal text-primary-dark shrink-0 shadow-lg">
                                    <Icon size={24} />
                                </div>
                                <div>
                                    <p className="text-lg font-heading font-bold text-white">{value.name}</p>
                                    <p className="text-sm font-body text-neutral-gray">{value.desc}</p>
                                </div>
                            </motion.li>
                        );
                    })}
                </motion.ul>
            </motion.div>
        </motion.div>
      </div>
    </section>
  );
}