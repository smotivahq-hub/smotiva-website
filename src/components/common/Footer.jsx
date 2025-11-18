// src/components/common/Footer.jsx
import React from 'react';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react'; 
import { motion } from 'framer-motion';

// Data for footer links
const quickLinks = [
  { name: 'Home', page: 'home' },
  { name: 'About Us', page: 'about' },
  { name: 'Services', page: 'services' },
  { name: 'Projects', page: 'projects' },
  { name: 'Contact', page: 'contact' },
];

const serviceLinks = [
  'Brand Identity & Design',
  'Digital Solutions',
  'Content & Media',
  'Training & Consultancy',
];

export default function Footer({ onNavigate }) {

  const handleNavigation = (page) => {
    // This connects the footer links back to the main App state navigation
    if (onNavigate) {
      onNavigate(page);
    }
  };

  return (
    // The entire footer is enclosed in the secondary dark color
    <motion.footer 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-secondary-dark"
    >
      
      {/* Main Footer Content Row */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-10 lg:gap-8 border-b border-neutral-gray/30 pb-10">
            
            {/* Column 1: Logo and Mission */}
            <div className="col-span-2 md:col-span-2">
                              <a 
                  href="#" 
                  onClick={() => handleNavigation('home')}
                  className="cursor-pointer hover:opacity-80 transition duration-300 transform hover:scale-105 "
                >
                  <img 
                  src="/LOGO WHITE PNG.png" 
                  alt="Smotiva Logo" 
                  className="h-7 md: w-auto mb-4"
                  />
                </a>
              <p className="text-neutral-gray font-body text-sm leading-relaxed max-w-sm">
                Smotiva is a forward-thinking innovation and design company that leverages technology, creativity, and motivational strategies to empower people, businesses, and communities.
              </p>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h4 className="text-lg font-heading font-semibold text-white mb-4 uppercase">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={`#${link.page}`}
                      onClick={() => handleNavigation(link.page)}
                      className="text-neutral-gray font-body text-base hover:text-accent-teal transition duration-200 flex items-center group"
                    >
                      {link.name}
                      <ArrowRight size={14} className="ml-2 opacity-0 group-hover:opacity-100 transform -translate-x-1 group-hover:translate-x-0 transition-all duration-300 text-accent-cyan" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Services */}
            <div>
              <h4 className="text-lg font-heading font-semibold text-white mb-4 uppercase">
                Services
              </h4>
              <ul className="space-y-3">
                {serviceLinks.map((service) => (
                  <li key={service}>
                    <a
                      href="#services" 
                      onClick={() => handleNavigation('services')}
                      className="text-neutral-gray font-body text-base hover:text-accent-teal transition duration-200"
                    >
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Contact Info */}
            <div>
              <h4 className="text-lg font-heading font-semibold text-white mb-4 uppercase">
                Contact Info
              </h4>
              <ul className="space-y-3 font-body text-base">
                <li className="flex items-start text-neutral-gray">
                  <MapPin size={18} className="text-accent-teal mr-3 mt-1 shrink-0" />
                  <p>Abuja, Nigeria</p>
                </li>
                <li className="flex items-start">
                  <Phone size={18} className="text-accent-teal mr-3 mt-1 shrink-0" />
                  <a href="tel:+2348037038180" className="text-neutral-gray hover:text-accent-teal transition duration-200">
                    +234 803 703 8180
                  </a>
                </li>
                <li className="flex items-start">
                  <Mail size={18} className="text-accent-teal mr-3 mt-1 shrink-0" />
                  <a href="mailto:info@smotiva.com" className="text-neutral-gray hover:text-accent-teal transition duration-200">
                    info@smotiva.com
                  </a>
                </li>
              </ul>
            </div>

          </div>

          {/* Bottom Legal Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 text-neutral-gray text-sm font-body">
            <p className="order-2 md:order-1 mt-4 md:mt-0">
              © 2025 Smotiva. All rights reserved.
            </p>
            <div className="order-1 md:order-2 space-x-6">
              <a href="#" className="hover:text-accent-teal transition duration-200">Privacy Policy</a>
              <a href="#" className="hover:text-accent-teal transition duration-200">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}