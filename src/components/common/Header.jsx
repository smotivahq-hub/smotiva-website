export default function Header({ onNavigate }) {
  return (
    <header className="bg-primary-dark border-b border-accent-teal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="text-white font-bold text-xl font-heading">Smotiva</div>
        <nav className="space-x-4">
          <button onClick={() => onNavigate('home')} className="text-sm text-neutral-light hover:text-accent-teal transition-colors">Home</button>
          <button onClick={() => onNavigate('services')} className="text-sm text-neutral-light hover:text-accent-teal transition-colors">Services</button>
          <button onClick={() => onNavigate('projects')} className="text-sm text-neutral-light hover:text-accent-teal transition-colors">Projects</button>
          <button onClick={() => onNavigate('about')} className="text-sm text-neutral-light hover:text-accent-teal transition-colors">About</button>
          <button onClick={() => onNavigate('contact')} className="text-sm text-neutral-light hover:text-accent-teal transition-colors">Contact</button>
        </nav>
      </div>
    </header>
  )
}
