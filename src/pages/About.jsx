// src/pages/About.jsx (Updated)
import React from 'react';
import AboutHero from '../components/about/AboutHero';
import MissionVisionValues from '../components/about/MissionVisionValues';
import TeamSection from '../components/about/TeamSection'; // NEW IMPORT
import HomeCta from '../components/home/HomeCta'; 

export default function About({ onNavigate }) {
  return (
    <div className="min-h-screen">
      <AboutHero />
      <MissionVisionValues />
      
      {/* --------------------- TEAM SECTION --------------------- */}
      <TeamSection />
      {/* -------------------------------------------------------- */}
      
      <HomeCta onNavigate={onNavigate} /> 
    </div>
  );
}