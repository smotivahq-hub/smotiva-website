// src/pages/Blog.jsx (Updated)
import React from 'react';
import BlogHero from '../components/blog/BlogHero';
import BlogGrid from '../components/blog/BlogGrid'; // NEW IMPORT
import HomeCta from '../components/home/HomeCta'; 

export default function Blog({ onNavigate }) {
  return (
    <div className="min-h-screen overflow-hidden">
      <BlogHero />
      
      {/* --------------------- BLOG GRID --------------------- */}
      <BlogGrid />
      {/* ----------------------------------------------------- */}
      
      <HomeCta onNavigate={onNavigate} /> 
    </div>
  );
}