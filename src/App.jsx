export default function App() {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-slate-800 to-slate-900">
      <header className="border-b border-slate-700 backdrop-blur-sm sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <h1 className="text-2xl font-bold text-white">Smotiva</h1>
        </nav>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <section className="text-center">
          <h2 className="text-5xl sm:text-6xl font-bold text-white mb-6">
            Welcome to <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-400">Smotiva</span>
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-8">
            Build something amazing with a clean, modern foundation.
          </p>
          <button className="px-8 py-3 bg-linear-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300">
            Get Started
          </button>
        </section>
      </main>
    </div>
  )
}
