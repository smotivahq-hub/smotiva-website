export default function Button({ children, onClick, className = '' }){
  return (
    <button onClick={onClick} className={`px-4 py-2 rounded-md font-medium bg-blue-500 text-white hover:bg-blue-600 transition-colors ${className}`}>
      {children}
    </button>
  )
}
