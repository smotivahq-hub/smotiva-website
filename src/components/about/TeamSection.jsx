export default function TeamSection(){
  return (
    <section className="py-12">
      <div className="max-w-4xl mx-auto">
        <h3 className="text-2xl font-bold text-white mb-6 font-heading">Meet the team</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-secondary-dark p-4 rounded border border-accent-teal/20 font-body text-neutral-light">Member A</div>
          <div className="bg-secondary-dark p-4 rounded border border-accent-teal/20 font-body text-neutral-light">Member B</div>
          <div className="bg-secondary-dark p-4 rounded border border-accent-teal/20 font-body text-neutral-light">Member C</div>
        </div>
      </div>
    </section>
  )
}
