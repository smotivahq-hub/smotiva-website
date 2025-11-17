export default function ServicesOverview(){
  return (
    <section className="py-12">
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="p-4 bg-slate-800 rounded border border-blue-500/20 text-gray-300">Design</div>
        <div className="p-4 bg-slate-800 rounded border border-blue-500/20 text-gray-300">Development</div>
        <div className="p-4 bg-slate-800 rounded border border-blue-500/20 text-gray-300">Strategy</div>
      </div>
    </section>
  )
}
