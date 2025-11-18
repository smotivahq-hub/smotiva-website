// src/pages/Services.jsx (Updated)
import React from 'react';
import ServicesHero from '../components/services/ServicesHero';
import ServicesGrid from '../components/services/ServicesGrid'; // NEW IMPORT
import HomeCta from '../components/home/HomeCta'; // Reusing the CTA

export default function Services({ onNavigate }) {
  return (
    <div className="min-h-screen">
      <ServicesHero />
      
      {/* --------------------- SERVICES GRID --------------------- */}
      <ServicesGrid />
      {/* --------------------------------------------------------- */}
      
      {/* The Services page UI includes the standard CTA at the bottom */}
      <HomeCta onNavigate={onNavigate} /> 
    </div>
  );
}