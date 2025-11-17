export default function Footer(){
  return (
    <footer className="border-t border-slate-700 mt-12 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-slate-400">
        © {new Date().getFullYear()} Smotiva. All rights reserved.
      </div>
    </footer>
  )
}
