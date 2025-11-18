// src/pages/Contact.jsx (Updated)
import React from 'react';
import ContactHero from '../components/contact/ContactHero';
import ContactForm from '../components/contact/ContactForm'; // NEW IMPORT
import HomeCta from '../components/home/HomeCta';

export default function Contact({ onNavigate }) {
  return (
    <div className="min-h-screen">
      <ContactHero onNavigate={onNavigate} />
      
      {/* --------------------- CONTACT FORM --------------------- */}
      <ContactForm />
      {/* -------------------------------------------------------- */}
      
      <HomeCta onNavigate={onNavigate} /> 
    </div>
  );
}