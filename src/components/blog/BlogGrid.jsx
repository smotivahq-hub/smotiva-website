// src/components/blog/BlogGrid.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Clock, Tag, Search } from 'lucide-react';

// Dummy Blog Data
const blogPosts = [
  { id: 1, title: 'Mastering Digital Strategy in 2026', summary: 'A deep dive into the trends shaping marketing and design next year.', category: 'Strategy', date: 'Nov 15, 2025', isFeatured: true },
  { id: 2, title: 'The Nigerian Creative Blending Tech and Culture', summary: 'How local talent is disrupting the global digital landscape.', category: 'Culture', date: 'Nov 10, 2025' },
  { id: 3, title: 'UX Design Principles for High-Converting E-commerce', summary: 'Essential tips to reduce bounce rates and increase cart value.', category: 'Design', date: 'Nov 5, 2025' },
  { id: 4, title: 'Vite and React: A Frontend Power Couple', summary: 'Optimizing your development workflow for lightning-fast speeds.', category: 'Technology', date: 'Oct 28, 2025' },
  { id: 5, title: 'Building a Brand Narrative That Resonates', summary: 'Steps to craft a story that captivates your ideal audience.', category: 'Branding', date: 'Oct 20, 2025' },
];

// Framer Motion Variants for staggered content reveal
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 100, damping: 15 },
  },
};

const PostCard = ({ post, delay }) => (
  <motion.article 
    variants={itemVariants}
    initial="hidden"
    animate="visible"
    transition={{ delay: delay }}
    className="bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:translate-y-[-3px] border-t-4 border-transparent hover:border-accent-teal"
  >
    <div className="p-6">
      <div className="flex items-center text-sm font-body text-neutral-gray mb-3 space-x-4">
        <span className="flex items-center text-xs uppercase tracking-wider text-accent-teal">
            <Tag size={14} className="mr-1" /> {post.category}
        </span>
        <span className="flex items-center">
            <Clock size={14} className="mr-1" /> {post.date}
        </span>
      </div>
      <h3 className="text-xl font-heading font-bold text-primary-dark mb-3 leading-snug">
        {post.title}
      </h3>
      <p className="text-neutral-gray font-body text-base mb-4 line-clamp-3">
        {post.summary}
      </p>
      <a href={`#blog-${post.id}`} className="font-semibold text-sm text-accent-cyan hover:text-primary-dark transition duration-200">
        Read More &rarr;
      </a>
    </div>
  </motion.article>
);


export default function BlogGrid() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const featuredPost = blogPosts.find(p => p.isFeatured) || blogPosts[0];
  const regularPosts = blogPosts.filter(p => !p.isFeatured);

  return (
    <section className="py-20 bg-neutral-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div ref={ref} className="grid lg:grid-cols-3 gap-10">
          
          {/* Main Content Area (2/3 width) */}
          <div className="lg:col-span-2">
            
            {/* Featured Post (Full Width) */}
            {inView && (
              <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7 }} className="mb-10 p-8 bg-white rounded-xl shadow-2xl border-l-8 border-accent-teal">
                  <h2 className="text-3xl font-heading font-extrabold text-primary-dark mb-4">
                      {featuredPost.title}
                  </h2>
                  <p className="text-neutral-dark font-body text-lg mb-4">
                      {featuredPost.summary}
                  </p>
                  <div className="flex items-center text-sm font-body text-neutral-gray space-x-4">
                      <span className="flex items-center text-xs uppercase tracking-wider text-accent-teal">
                          <Tag size={16} className="mr-1" /> {featuredPost.category}
                      </span>
                      <span className="flex items-center">
                          <Clock size={16} className="mr-1" /> {featuredPost.date}
                      </span>
                  </div>
              </motion.div>
            )}

            {/* Regular Posts Grid (Two Columns) */}
            <h3 className="text-2xl font-heading font-bold text-primary-dark mb-6 border-b border-neutral-gray/20 pb-3">
                Recent Articles
            </h3>
            <div className="grid sm:grid-cols-2 gap-8">
              {regularPosts.map((post, index) => (
                <PostCard key={post.id} post={post} delay={inView ? (index * 0.1 + 0.3) : 0} />
              ))}
            </div>
            
          </div>
          
          {/* Sidebar Area (1/3 width) */}
          <div className="lg:col-span-1 space-y-8 mt-10 lg:mt-0">
            
            {/* Search Widget */}
            <motion.div initial={{ opacity: 0, x: 20 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.4, duration: 0.5 }} className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-accent-cyan">
              <h4 className="text-lg font-heading font-bold text-primary-dark mb-4">Search Articles</h4>
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Keywords..."
                  className="w-full p-3 pl-10 border border-neutral-gray/30 rounded-lg focus:border-accent-teal focus:ring-accent-teal transition duration-200 text-neutral-dark font-body"
                />
                <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-gray" />
              </div>
            </motion.div>

            {/* Categories Widget */}
            <motion.div initial={{ opacity: 0, x: 20 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.5, duration: 0.5 }} className="bg-white p-6 rounded-xl shadow-lg">
              <h4 className="text-lg font-heading font-bold text-primary-dark mb-4">Categories</h4>
              <ul className="space-y-2 font-body text-neutral-dark">
                {['Strategy', 'Design', 'Technology', 'Culture', 'Branding'].map(cat => (
                  <li key={cat}>
                    <a href={`#category-${cat.toLowerCase()}`} className="flex justify-between items-center text-neutral-gray hover:text-accent-teal transition duration-200">
                      {cat} <span className="text-sm">({cat.length + 3})</span>
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
          
        </motion.div>
      </div>
    </section>
  );
}