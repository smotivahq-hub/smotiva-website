export default function Card({ title, children }){
  return (
    <div className="bg-secondary-dark rounded-lg p-4 shadow-sm border border-accent-teal/20">
      {title && <h3 className="text-lg font-semibold text-white mb-2 font-heading">{title}</h3>}
      <div className="text-neutral-light font-body">{children}</div>
    </div>
  )
}
