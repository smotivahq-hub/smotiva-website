// src/components/about/TeamSection.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Linkedin, Twitter, Dribbble, Globe } from 'lucide-react';

// Dummy Team Data (structured for consistency with UI)
const teamMembers = [
  {
    id: 1,
    name: 'Adekunle Gold',
    role: 'CEO & Lead Strategist',
    imagePlaceholder: 'Team Member 1',
    social: {
      linkedin: '#',
      twitter: '#',
    },
  },
  {
    id: 2,
    name: 'Chioma Nwafor',
    role: 'Head of Design',
    imagePlaceholder: 'Team Member 2',
    social: {
      linkedin: '#',
      dribbble: '#',
    },
  },
  {
    id: 3,
    name: 'Emeka Okoro',
    role: 'Lead Developer',
    imagePlaceholder: 'Team Member 3',
    social: {
      linkedin: '#',
      globe: '#', // Personal portfolio
    },
  },
  {
    id: 4,
    name: 'Fatima Yusuf',
    role: 'Marketing Manager',
    imagePlaceholder: 'Team Member 4',
    social: {
      linkedin: '#',
      twitter: '#',
    },
  },
  {
    id: 5,
    name: 'Daniel Eke',
    role: 'UX Researcher',
    imagePlaceholder: 'Team Member 5',
    social: {
      linkedin: '#',
      dribbble: '#',
    },
  },
  {
    id: 6,
    name: 'Grace Obi',
    role: 'Project Manager',
    imagePlaceholder: 'Team Member 6',
    social: {
      linkedin: '#',
    },
  },
];

// Framer Motion Variants for staggered grid reveal
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08, // Slightly faster stagger for more cards
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 100, damping: 15 },
  },
};

const SocialIcon = ({ type, link }) => {
  let IconComponent;
  switch (type) {
    case 'linkedin': IconComponent = Linkedin; break;
    case 'twitter': IconComponent = Twitter; break;
    case 'dribbble': IconComponent = Dribbble; break;
    case 'globe': IconComponent = Globe; break;
    default: return null;
  }
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="text-neutral-gray hover:text-accent-teal transition duration-200">
      <IconComponent size={20} />
    </a>
  );
};

const TeamCard = ({ member }) => {
  return (
    <motion.div variants={itemVariants} className="bg-white rounded-xl shadow-xl transition-all duration-300 hover:shadow-2xl hover:translate-y-[-5px] border-b-4 border-transparent hover:border-accent-teal">
      
      {/* Image Placeholder */}
      <div className="h-52 w-full bg-neutral-light rounded-t-xl overflow-hidden flex items-center justify-center border-b border-neutral-gray/20">
        <span className="text-sm font-body text-neutral-gray/70">{member.imagePlaceholder}</span>
      </div>

      {/* Content */}
      <div className="p-6 text-center">
        <h3 className="text-xl font-heading font-bold text-primary-dark mb-1">
          {member.name}
        </h3>
        <p className="text-sm font-body text-accent-teal mb-4">
          {member.role}
        </p>

        {/* Social Links */}
        <div className="flex justify-center space-x-4 pt-4 border-t border-neutral-gray/20">
          {member.social.linkedin && <SocialIcon type="linkedin" link={member.social.linkedin} />}
          {member.social.twitter && <SocialIcon type="twitter" link={member.social.twitter} />}
          {member.social.dribbble && <SocialIcon type="dribbble" link={member.social.dribbble} />}
          {member.social.globe && <SocialIcon type="globe" link={member.social.globe} />}
        </div>
      </div>
    </motion.div>
  );
};


export default function TeamSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-neutral-light">
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
            Meet the Smotiva Team
          </h2>
          <p className="text-lg font-body text-neutral-gray max-w-2xl mx-auto">
            Our collective talent and passion drive innovation and deliver exceptional results for every project.
          </p>
        </motion.div>

        {/* Team Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          // Responsive Grid: 1 col on xs, 2 on sm, 3 on md, 4 on lg
          className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
        >
          {teamMembers.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </motion.div>

      </div>
    </section>
  );
}