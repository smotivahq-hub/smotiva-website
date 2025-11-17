// src/pages/Home.jsx (Updated)
import React from 'react';
import HeroSection from '../components/home/HeroSection';
import OurExpertise from '../components/home/OurExpertise'; // NEW IMPORT

export default function Home({ onNavigate }) {
  return (
    <div className="min-h-screen">
      <HeroSection onNavigate={onNavigate} /> 
      
      {/* --------------------- NEW SECTION --------------------- */}
      <OurExpertise />
      {/* ------------------------------------------------------- */}
      
      {/* Placeholder for the next sections: Our Core Services, etc. */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-heading font-bold text-neutral-dark text-center">
          More Home Page Sections Coming Soon...
        </h2>
      </div>
    </div>
  );
}   