export default function Card({ title, children }){
  return (
    <div className="bg-slate-800 rounded-lg p-4 shadow-sm border border-blue-500/20">
      {title && <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>}
      <div className="text-gray-300">{children}</div>
    </div>
  )
}
