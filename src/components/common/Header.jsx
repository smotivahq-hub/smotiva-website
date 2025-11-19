import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

// Navigation items configuration
const navItems = [
  { name: 'Home', to: '/' },
  { name: 'About', to: '/about' },
  { name: 'Services', to: '/services' },
  { name: 'Projects', to: '/projects' },
  { name: 'Blog', to: '/blog' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Dynamic Scroll Effect Logic: Listen to scroll position
  useEffect(() => {
    const handleScroll = () => {
      // Set 'scrolled' to true if user scrolls more than 50px
      setScrolled(window.scrollY > 50); 
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handler to close menu after navigation
  const handleCloseMenu = () => {
    setIsOpen(false);
  };

  // Mobile Menu Variants (SLIDE IN FROM RIGHT SIDE)
  const menuVariants = {
    hidden: { x: '100%' },
    visible: {
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 20,
      },
    },
    exit: {
      x: '100%',
      transition: {
        type: 'tween',
        duration: 0.3
      },
    },
  };

  // Icon animation transition properties
  const iconTransition = { duration: 0.3 };

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 overflow-x-hidden ${
        scrolled
          // State on Scroll: Primary Dark (95% opacity) with blur
          ? 'bg-primary-dark backdrop-blur-md shadow-2xl'
          // Initial State: Primary Dark (20% opacity) with subtle blur
          : 'bg-primary-dark/20 shadow-none'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Adjusted heights: Mobile is 14/16 (slimmer), Desktop is 20/24 */}
        <div className={`flex justify-between items-center transition-all duration-300 ${scrolled ? 'h-16 md:h-16' : 'h-16 md:h-20'}`}>
          
          {/* Logo/Brand Name */}
          <div className="shrink-0">
            <NavLink
              to="/"
              onClick={handleCloseMenu}
              className={`text-2xl md:text-3xl font-heading font-extrabold tracking-widest cursor-pointer transition duration-300 transform hover:scale-105 text-white`}
            >
              <img 
                  src="/LOGO WHITE PNG.png" 
                  alt="Smotiva Logo" 
                  className="h-6 md:h-7 md:w-auto max-w-full"
                  />
            </NavLink>
          </div>

          {/* Desktop Navigation & CTA */}
          <div className="hidden md:flex items-center space-x-10">
            <nav>
              <ul className="flex space-x-2 font-body">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <NavLink
                      to={item.to}
                      onClick={handleCloseMenu}
                      className={({ isActive }) =>
                        // New dynamic "Pill-Shaped Chip" hover effect
                        `text-base font-medium tracking-normal py-2 px-4 transition-all duration-300 rounded-full inline-block ${
                          isActive
                            ? 'text-accent-teal bg-primary-dark/50' // Active: Teal text, subtle dark background
                            : 'text-neutral-light hover:text-accent-teal hover:bg-primary-dark/20' // Hover: Teal text, light dark background
                        }`
                      }
                    >
                      {item.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
            
            {/* Contact CTA Button (No change needed) */}
            <NavLink 
              to="/contact" 
              onClick={handleCloseMenu} 
              className="bg-accent-teal hover:bg-opacity-80 text-secondary-dark font-heading font-bold py-[7px] px-7 rounded-lg transition duration-300 text-base transform hover:-translate-y-0.5 border-2 border-accent-teal inline-flex items-center justify-center"
            >
              Contact Us
            </NavLink>
          </div>

          {/* Mobile Menu Button (Icon Smooth Transition) */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-accent-teal p-2 focus:outline-none transition duration-300 rounded"
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={isOpen ? 'close' : 'menu'}
                  initial={{ opacity: 0, rotate: isOpen ? -90 : 90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: isOpen ? 90 : -90 }}
                  transition={iconTransition}
                >
                  {isOpen ? <X size={28} /> : <Menu size={28} />}
                </motion.div>
              </AnimatePresence>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel (Slide-in from right overlay) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 top-14 md:hidden bg-primary-dark backdrop-blur-md z-40"
          >
            <div className="flex flex-col h-full p-6 space-y-4">
              {navItems.map((item, index) => (
                <NavLink
                  key={item.name}
                  to={item.to}
                  onClick={handleCloseMenu}
                  className={({ isActive }) =>
                    `text-3xl font-heading font-bold py-3 transition duration-300 border-b border-primary-dark/50 ${
                      isActive ? 'text-accent-teal' : 'text-neutral-light hover:text-accent-cyan'
                    }`
                  }
                >
                  <motion.span
                     initial={{ opacity: 0, x: 20 }}
                     animate={{ opacity: 1, x: 0 }}
                     transition={{ delay: 0.2 + index * 0.05 }}
                  >
                     {item.name}
                  </motion.span>
                </NavLink>
              ))}
              
              {/* Mobile Contact Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navItems.length * 0.05 + 0.3 }}
                className="pt-6"
              >
                <NavLink
                  to="/contact"
                  onClick={handleCloseMenu}
                  className="block w-full text-center bg-accent-teal hover:bg-opacity-80 text-secondary-dark font-heading font-bold py-3 rounded-lg transition duration-300 shadow-lg text-xl"
                >
                  Get Started Today
                </NavLink>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}