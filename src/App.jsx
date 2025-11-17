import { useState } from 'react'
import Header from './components/common/Header'
import Footer from './components/common/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Projects from './pages/Projects'
import Blog from './pages/Blog'
import Contact from './pages/Contact'

export default function App(){
  const [page, setPage] = useState('home')

  function renderPage(){
    switch(page){
      case 'home': return <Home />
      case 'about': return <About />
      case 'services': return <Services />
      case 'projects': return <Projects />
      case 'blog': return <Blog />
      case 'contact': return <Contact />
      default: return <Home />
    }
  }

  return (
    <div className="min-h-screen bg-primary-dark text-neutral-light font-body">
      <Header onNavigate={setPage} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {renderPage()}
      </main>

      <Footer />
    </div>
  )
}
