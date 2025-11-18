import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CheckCircle, Play } from 'lucide-react'; 

// Data matching the exact list items from the "Why Smotiva.jpg" UI
const benefits = [
  { 
    title: 'Purpose-Driven Design', 
    description: 'Every project starts with a clear motive – your end goal. We ensure design serves a strategic business purpose.',
  },
  {
    title: 'Professional Delivery',
    description: 'We maintain global creative standards blended with deep local Nigerian insight, delivering world-class quality without compromise.',
  },
  {
    title: 'Innovation & Growth',
    description: 'Our team constantly learns, adapts, and evolves with the latest design and technology trends to keep your brand future-proof.',
  },
  {
    title: 'Affordable Quality',
    description: 'We deliver professional, high-impact digital results without demanding a premium budget, optimizing resources for maximum ROI.',
  },
  {
    title: 'Timeliness & Discipline',
    description: 'We respect your time and project deadlines rigorously, ensuring reliable delivery exactly when promised.',
  },
];

// Framer Motion Variants for the overall section
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.1,
    },
  },
};

// Framer Motion Variants for the individual list items
const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.5, ease: 'easeOut' } 
  },
};

// Framer Motion Variant for the image (right column)
const imageVariant = {
    hidden: { opacity: 0, x: 50, scale: 0.95 },
    visible: { 
        opacity: 1, 
        x: 0, 
        scale: 1, 
        transition: { 
            duration: 0.8, 
            delay: 0.4, 
            ease: [0.17, 0.55, 0.55, 1] 
        } 
    },
};


export default function WhyChooseSmotiva() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2, // Trigger when 20% of the component is visible
  });

  return (
    <section className="py-20 bg-neutral-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading with SEO/Human Copy */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-heading font-extrabold text-primary-dark mb-2">
            Why Choose Smotiva
          </h2>
          <p className="text-lg font-body text-neutral-gray max-w-xl mx-auto">
            Discover the key differentiators that make us the ideal partner for your digital transformation journey in Nigeria and beyond.
          </p>
        </motion.div>

        {/* Two-Column Content Grid */}
        <div ref={ref} className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Column: Benefits List */}
            <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                // Cleaned up border/background for better visibility
                className="p-8 rounded-xl border-4 border-accent-teal/50 bg-white shadow-xl"
            >
                <ul className="space-y-6">
                    {benefits.map((benefit, index) => (
                        <motion.li 
                            key={index}
                            variants={itemVariants}
                            className="flex items-start font-body text-neutral-dark text-base"
                        >
                            {/* Premium Icon/Bullet: Uses small teal triangle for clean visual style */}
                            <Play size={16} fill="#00C4CC" strokeWidth={0} className="text-accent-teal shrink-0 mt-1 mr-3 transform rotate-90" />
                            <div>
                                <h3 className="font-bold text-lg text-primary-dark mb-0.5">{benefit.title}</h3>
                                <p className="text-neutral-gray">{benefit.description}</p>
                            </div>
                        </motion.li>
                    ))}
                </ul>
            </motion.div>

            {/* Right Column: Branded Visual */}
            <motion.div
              variants={imageVariant}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="relative hidden lg:block p-4"
            >
              {/* Large unboxed image positioned to the right for a modern layout */}
              <img
                src="/images/handsome-african-business-man-standing-trendy-formal-black-suit-guy-with-beard-wearing-blue-long-sleeve-sweater.png"
                alt="A confident Nigerian professional man in business casual attire smiling, representing Smotiva's trusted partnership."
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 w-[420px] md:w-[520px] lg:w-[720px] xl:w-[880px] h-auto object-contain pointer-events-none"
                onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/600x600/1E3A8A/FFFFFF?text=Smotiva+Image+Error"; }}
              />
            </motion.div>
        </div>
      </div>
    </section>
  );
}