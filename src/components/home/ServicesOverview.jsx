export default function ServicesOverview(){
  return (
    <section className="py-12">
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="p-4 bg-secondary-dark rounded border border-accent-teal/20 font-body text-neutral-light">Design</div>
        <div className="p-4 bg-secondary-dark rounded border border-accent-teal/20 font-body text-neutral-light">Development</div>
        <div className="p-4 bg-secondary-dark rounded border border-accent-teal/20 font-body text-neutral-light">Strategy</div>
      </div>
    </section>
  )
}
