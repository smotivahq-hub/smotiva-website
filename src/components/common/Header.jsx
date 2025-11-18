// src/components/common/Header.jsx
import { useState } from 'react';
import { Menu, X } from 'lucide-react'; // For clean mobile icons
import { NavLink, useNavigate } from 'react-router-dom'

// Navigation items configuration
const navItems = [
  { name: 'Home', page: 'home', to: '/' },
  { name: 'About', page: 'about', to: '/about' },
  { name: 'Services', page: 'services', to: '/services' },
  { name: 'Projects', page: 'projects', to: '/projects' },
  { name: 'Blog', page: 'blog', to: '/blog' },
];

export default function Header({ onNavigate }) {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate()

  // Handles navigation and ensures the mobile menu closes after selection
  const handleNavigation = (page, to) => {
    if (onNavigate) onNavigate(page);
    if (to) navigate(to);
    setIsOpen(false);
  };

  return (
    // Sticky header with a premium, slightly blurred background
    <header className="sticky top-0 z-50 bg-primary-dark backdrop-blur-sm shadow-2xl transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo/Brand Brand */}
                <div className="shrink-0">
                <a 
                  href="#" 
                  onClick={() => handleNavigation('home')}
                  className="cursor-pointer hover:opacity-80 transition duration-300 transform hover:scale-105"
                >
                  <img 
                  src="/LOGO WHITE PNG.png" 
                  alt="Smotiva Logo" 
                  className="h-7 w-auto"
                  />
                </a>
                </div>

                {/* Desktop Navigation & CTA */}
          <div className="hidden md:flex items-center space-x-10">
            <nav>
              <ul className="flex space-x-8 font-body">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <NavLink
                      to={item.to}
                      className={({ isActive }) =>
                        `relative text-base font-medium tracking-tight py-2 transition duration-300 ${isActive ? 'text-accent-teal' : 'text-neutral-light hover:text-accent-teal'}`
                      }
                      onClick={() => handleNavigation(item.page, item.to)}
                    >
                      {item.name}
                      <span className="absolute bottom-0 left-0 w-full h-[3px] bg-accent-teal transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
            
            {/* Contact CTA Button (Teal Accent) */}
            <NavLink to="/contact" onClick={() => handleNavigation('contact', '/contact')} className="bg-accent-teal hover:bg-opacity-80 text-secondary-dark font-heading font-bold py-2.5 px-7 rounded-full transition duration-300 shadow-xl text-base transform hover:-translate-y-0.5 border-2 border-accent-teal inline-flex items-center justify-center">
              Contact Us
            </NavLink>
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
            <NavLink
              key={item.name}
              to={item.to}
              onClick={() => handleNavigation(item.page, item.to)}
              className="block text-white font-body text-lg uppercase tracking-wider px-3 py-3 rounded-lg hover:bg-primary-dark transition duration-300 hover:text-accent-teal"
            >
              {item.name}
            </NavLink>
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