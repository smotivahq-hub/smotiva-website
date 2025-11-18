
// src/components/home/ClientFeedback.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

// Dummy Testimonial Data
const testimonials = [
  {
    id: 1,
    quote: "Smotiva transformed our brand identity with Nigerian creativity and global standards. The attention to detail on our web app was impeccable.",
    name: "Tunde Oladipo",
    title: "CEO, Innovate Hub",
  },
  {
    id: 2,
    quote: "Working with Smotiva felt like a true partnership. Their digital strategy led to a 40% increase in our online conversions within the first quarter.",
    name: "Aisha Bello",
    title: "Marketing Director, Grace Foods",
  },
  {
    id: 3,
    quote: "The training sessions provided by their consultancy team were world-class. Our team is now equipped with cutting-edge design methodologies.",
    name: "Chijioke Nnadi",
    title: "CTO, Tech Solutions LTD",
  },
  {
    id: 4,
    quote: "Exceptional design and seamless execution. They delivered a product that was functional, beautiful, and completely scalable. Highly recommended!",
    name: "Femi Adekunle",
    title: "Founder, Propel Real Estate",
  },
];

// Framer Motion Variants for scroll reveal
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.8, 
      ease: [0.42, 0, 0.58, 1] 
    } 
  },
};

// Testimonial Card Component
const TestimonialCard = ({ quote, name, title }) => (
  // Force fixed width for carousel effect, but allow flex-shrink to be 0
  <motion.div 
    className="shrink-0 w-80 sm:w-96 p-8 bg-white rounded-xl shadow-2xl border-t-4 border-accent-teal/50 transition duration-300 hover:border-accent-teal hover:shadow-3xl"
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
  >
    <div className="flex mb-4 text-accent-teal">
        {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="#00C4CC" strokeWidth={0} />)}
    </div>
    <p className="text-xl font-body font-medium italic text-neutral-dark mb-6 leading-relaxed">
      "{quote}"
    </p>
    <div className="pt-4 border-t border-neutral-gray/20">
      <p className="text-lg font-heading font-bold text-primary-dark">{name}</p>
      <p className="text-sm font-body text-neutral-gray">{title}</p>
    </div>
  </motion.div>
);


export default function ClientFeedback() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // State to control the carousel position (Placeholder for real sliding logic)
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };
  
  return (
    // Section uses a white background for high contrast with the previous dark section
    <section ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <motion.div 
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={sectionVariants}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-heading font-extrabold text-primary-dark mb-2">
            Client Feedback
          </h2>
          <p className="text-lg font-body text-neutral-gray max-w-xl mx-auto">
            Hear directly from the clients whose success stories define our work.
          </p>
        </motion.div>
        
        {/* Testimonial Slider Area */}
        <div className="relative">
          <motion.div
            className="flex space-x-8 overflow-x-hidden pt-4 pb-8"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={sectionVariants}
          >
            {/* NOTE ON CAROUSEL LOGIC: 
              In a full production build, we would use Framer Motion's 'drag' props 
              or a dedicated carousel library to control the 'x' position dynamically. 
              Here, we simulate the carousel effect visually. 
            */}
            {testimonials.map((testimonial, index) => (
              <div 
                  key={testimonial.id}
                  // Simple logic to show a few items while keeping the flow flexible
                  className={`transition-opacity duration-500 ${
                    (index >= currentIndex && index < currentIndex + 3) ? 'opacity-100' : 'opacity-0 md:opacity-100'
                  }`}
              >
                  <TestimonialCard {...testimonial} />
              </div>
            ))}
            
          </motion.div>
          
          {/* Slider Navigation Buttons (Floating) */}
          <div className="flex justify-center md:justify-end space-x-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full bg-primary-dark text-white shadow-lg flex items-center justify-center transition duration-300 hover:bg-accent-teal disabled:opacity-50"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full bg-primary-dark text-white shadow-lg flex items-center justify-center transition duration-300 hover:bg-accent-teal disabled:opacity-50"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}