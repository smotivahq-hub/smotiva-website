export default function Button({ children, onClick, className = '' }){
  return (
    <button onClick={onClick} className={`px-4 py-2 rounded-md font-medium bg-accent-teal text-primary-dark hover:bg-accent-cyan transition-colors ${className}`}>
      {children}
    </button>
  )
}
