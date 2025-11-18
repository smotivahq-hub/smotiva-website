import React, { Suspense, lazy } from 'react'
import Header from './components/common/Header'
import Footer from './components/common/Footer'
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom'

// Lazy-loaded page components
const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Services = lazy(() => import('./pages/Services'))
const Projects = lazy(() => import('./pages/Projects'))
const Blog = lazy(() => import('./pages/Blog'))
const Contact = lazy(() => import('./pages/Contact'))

export default function App(){
  const navigate = useNavigate()

  const routeFromPage = (page) => {
    switch(page){
      case 'home': return '/'
      case 'about': return '/about'
      case 'services': return '/services'
      case 'projects': return '/projects'
      case 'blog': return '/blog'
      case 'contact': return '/contact'
      default: return '/'
    }
  }

  const onNavigate = (page) => {
    const to = routeFromPage(page)
    navigate(to)
  }

  return (
    <div className="min-h-screen text-neutral-light font-body">
      <Header onNavigate={onNavigate} />

      <main>
        <Suspense fallback={<div className="min-h-[40vh] flex items-center justify-center">Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home onNavigate={onNavigate} />} />
            <Route path="/about" element={<About onNavigate={onNavigate} />} />
            <Route path="/services" element={<Services onNavigate={onNavigate} />} />
            <Route path="/projects" element={<Projects onNavigate={onNavigate} />} />
            <Route path="/blog" element={<Blog onNavigate={onNavigate} />} />
            <Route path="/contact" element={<Contact onNavigate={onNavigate} />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </main>

      <Footer onNavigate={onNavigate} />
    </div>
  )
}
