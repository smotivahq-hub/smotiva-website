export default function Header({ onNavigate }) {
  return (
    <header className="bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="text-white font-bold text-xl">Smotiva</div>
        <nav className="space-x-4">
          <button onClick={() => onNavigate('home')} className="text-sm text-slate-300 hover:text-white">Home</button>
          <button onClick={() => onNavigate('services')} className="text-sm text-slate-300 hover:text-white">Services</button>
          <button onClick={() => onNavigate('projects')} className="text-sm text-slate-300 hover:text-white">Projects</button>
          <button onClick={() => onNavigate('about')} className="text-sm text-slate-300 hover:text-white">About</button>
          <button onClick={() => onNavigate('contact')} className="text-sm text-slate-300 hover:text-white">Contact</button>
        </nav>
      </div>
    </header>
  )
}
