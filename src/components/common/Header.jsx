// src/components/common/Header.jsx
import { useState } from 'react';
import { Menu, X } from 'lucide-react'; // For clean mobile icons

// Navigation items configuration
const navItems = [
  { name: 'Home', page: 'home' },
  { name: 'About', page: 'about' },
  { name: 'Services', page: 'services' },
  { name: 'Projects', page: 'projects' },
  { name: 'Blog', page: 'blog' },
];

export default function Header({ onNavigate }) {
  const [isOpen, setIsOpen] = useState(false);

  // Handles navigation and ensures the mobile menu closes after selection
  const handleNavigation = (page) => {
    onNavigate(page);
    setIsOpen(false);
  };

  return (
    // Sticky header with a premium, slightly blurred background
    <header className="sticky top-0 z-50 bg-primary-dark backdrop-blur-sm shadow-2xl transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo/Brand Name */}
          <div className="shrink-0">
            <a 
              href="#" 
              onClick={() => handleNavigation('home')}
              className="text-3xl font-heading font-extrabold text-white tracking-widest cursor-pointer hover:text-accent-teal transition duration-300 transform hover:scale-105"
            >
              Smotiva
            </a>
          </div>

          {/* Desktop Navigation & CTA */}
          <div className="hidden md:flex items-center space-x-10">
            <nav>
              <ul className="flex space-x-8 font-body">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <a
                      href={`#${item.page}`}
                      onClick={() => handleNavigation(item.page)}
                      className="text-neutral-light hover:text-accent-teal transition duration-300 relative group text-base font-medium uppercase tracking-wider py-2"
                    >
                      {item.name}
                      {/* Premium underline effect */}
                      <span className="absolute bottom-0 left-0 w-full h-[3px] bg-accent-teal transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            
            {/* Contact CTA Button (Teal Accent) */}
            <button
              onClick={() => handleNavigation('contact')}
              className="bg-accent-teal hover:bg-opacity-80 text-secondary-dark font-heading font-bold py-2.5 px-7 rounded-full transition duration-300 shadow-xl text-base transform hover:-translate-y-0.5 border-2 border-accent-teal"
            >
              Contact Us
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-accent-teal p-2 focus:outline-none transition duration-300 border-2 border-transparent hover:border-accent-teal rounded"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel (Slide-down effect) */}
      <div 
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-screen opacity-100 py-6' : 'max-h-0 opacity-0 overflow-hidden'
        } bg-secondary-dark/95`}
      >
        <div className="px-4 space-y-3">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={`#${item.page}`}
              onClick={() => handleNavigation(item.page)}
              className="block text-white font-body text-lg uppercase tracking-wider px-3 py-3 rounded-lg hover:bg-primary-dark transition duration-300 hover:text-accent-teal"
            >
              {item.name}
            </a>
          ))}
          {/* Mobile Contact Button */}
          <button
            onClick={() => handleNavigation('contact')}
            className="w-full mt-4 bg-accent-teal hover:bg-opacity-90 text-secondary-dark font-heading font-bold py-3 rounded-lg transition duration-300 shadow-md text-base"
          >
            Contact Us
          </button>
        </div>
      </div>
    </header>
  );
}