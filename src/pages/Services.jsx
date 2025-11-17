// src/pages/Services.jsx
import React from 'react';
import ServicesHero from '../components/services/ServicesHero';

export default function Services() {
  return (
    <div className="min-h-screen">
      {/* --------------------- HERO SECTION --------------------- */}
      <ServicesHero />
      {/* -------------------------------------------------------- */}
      
      {/* Placeholder for the main Services Grid component */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-heading font-bold text-neutral-dark text-center">
          Detailed Services Grid Component Next...
        </h2>
      </div>
    </div>
  );
}