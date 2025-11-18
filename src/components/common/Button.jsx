export default function Button({ children, onClick, className = '' }){
  return (
    <button
      onClick={onClick}
      className={`px-5 py-2.5 rounded-full font-semibold bg-accent-teal text-secondary-dark hover:bg-accent-cyan shadow-soft transform-gpu hover:-translate-y-0.5 focus:outline-none focus-visible:ring-4 focus-visible:ring-accent-teal/20 ${className}`}
    >
      {children}
    </button>
  )
}
