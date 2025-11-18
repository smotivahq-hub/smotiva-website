// src/pages/Home.jsx (Updated)
import React from 'react';
import HeroSection from '../components/home/HeroSection';
import OurExpertise from '../components/home/OurExpertise';
import CoreServices from '../components/home/CoreServices';
import IndustriesWeServe from '../components/home/IndustriesWeServe';
import WhyChooseSmotiva from '../components/home/WhyChooseSmotiva';
import ClientFeedback from '../components/home/ClientFeedback';
import HomeCta from '../components/home/HomeCta'; // NEW IMPORT

export default function Home({ onNavigate }) {
  return (
    <div className="min-h-screen overflow-hidden">
      {/* Note: Header is rendered in App.jsx */}
      <HeroSection onNavigate={onNavigate} /> 
      <OurExpertise />
      <CoreServices />
      <IndustriesWeServe />
      <WhyChooseSmotiva />
      <ClientFeedback />
      
      {/* --------------------- FINAL CTA SECTION --------------------- */}
      <HomeCta onNavigate={onNavigate} />
      {/* ------------------------------------------------------------- */}
      
      {/* Note: Footer is rendered in App.jsx */}
    </div>
  );
}