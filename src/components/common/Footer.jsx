export default function Footer(){
  return (
    <footer className="border-t border-accent-teal bg-secondary-dark mt-12 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-neutral-gray">
        © {new Date().getFullYear()} Smotiva. All rights reserved.
      </div>
    </footer>
  )
}
