// src/components/projects/ProjectsGrid.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowUpRight } from 'lucide-react';

// Data for the projects (matching the grid structure in Project.jpg)
const projectsData = [
  { id: 1, title: 'TopTier Homes & Properties Ltd', category: 'Web App & Branding', link: '#' },
  { id: 2, title: 'Discreet Technology', category: 'Software Development', link: '#' },
  { id: 3, title: 'CloudMedia', category: 'Visual Identity', link: '#' },
  { id: 4, title: 'Power Solutions', category: 'E-commerce Platform', link: '#' },
  { id: 5, title: 'The Alchemist', category: 'Content Strategy', link: '#' },
  { id: 6, title: 'EcoPilot', category: 'Mobile UI/UX', link: '#' },
  { id: 7, title: 'Smotiva Creative Launch', category: 'Marketing Campaign', link: '#' },
  { id: 8, title: 'Church Element Tutorials', category: 'Educational Portal', link: '#' },
  { id: 9, title: 'Inspire Transformation', category: 'Leadership Branding', link: '#' },
  // The final project card sits alone in the UI
  { id: 10, title: 'The School of Prophets', category: 'Custom CMS', link: '#' },
];

// Framer Motion Variants for the staggered grid reveal
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05, 
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 80,
      damping: 10,
    },
  },
};

const ProjectCard = ({ project }) => {
  return (
    <motion.a 
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      variants={itemVariants} 
      // Dark card theme matching the UI, with premium hover effects
      className="block p-6 rounded-xl bg-secondary-dark/70 text-white shadow-xl transition-all duration-300 hover:bg-secondary-dark hover:shadow-2xl hover:border-accent-teal border-b-4 border-transparent group"
    >
      <div className="h-28 mb-4 flex items-end justify-between">
          <div className="space-y-1">
              <h3 className="text-xl font-heading font-bold mb-1 group-hover:text-accent-cyan transition duration-300">
                  {project.title}
              </h3>
              <p className="text-sm font-body text-neutral-gray group-hover:text-neutral-light transition duration-300">
                  {project.category}
              </p>
          </div>
          <ArrowUpRight size={24} className="text-accent-teal opacity-50 group-hover:opacity-100 transition duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-1" />
      </div>
      
      {/* Visual Placeholder (Matching the dark box in the UI) */}
      <div className="bg-primary-dark/50 h-32 rounded-lg flex items-center justify-center border border-accent-teal/20">
          <span className="text-xs text-neutral-light/50">Visual Preview</span>
      </div>
    </motion.a>
  );
};


export default function ProjectsGrid() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  // Separate the last project to handle the unique layout
  const gridProjects = projectsData.slice(0, 9);
  const finalProject = projectsData[9];

  return (
    <section className="py-20 bg-neutral-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <h2 className="text-center text-2xl font-heading font-bold text-primary-dark mb-8">
            Featured Projects
        </h2>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          // Responsive Grid: 1 column on small, 2 on medium, 3 on large (matching UI structure)
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {/* First 9 Projects */}
          {gridProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}

          {/* Tenth Project (The School of Prophets) - Occupies one column below the main 3x3 grid */}
          <div className="lg:col-span-3 flex justify-center mt-4">
              <div className="w-full max-w-sm">
                 <ProjectCard project={finalProject} />
              </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}  