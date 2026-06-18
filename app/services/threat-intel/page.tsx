export default function ThreatIntel() {
  return (
    <main className="min-h-screen bg-gray-900 text-white px-6 py-16">
      <header className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-extrabold">Threat Intelligence</h1>
        <p className="text-gray-300 mt-4">Anticipate, detect, and neutralize threats before they impact your business.</p>
        <a href="/contact" className="inline-block mt-6 bg-indigo-500 text-white px-6 py-3 rounded-lg">Request Assessment</a>
      </header>

      <section className="max-w-5xl mx-auto space-y-8">
        <div>
          <h2 className="text-2xl font-bold text-indigo-400 mb-2">What We Deliver</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>Custom threat feeds and IOCs</li>
            <li>Weekly intelligence briefs</li>
            <li>Detection rule packs for SIEM/IDS</li>
            <li>Threat actor profiles and campaign mapping</li>
            <li>Predictive analytics and quarterly workshops</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-indigo-400 mb-2">Timeline and SLAs</h2>
          <p className="text-gray-300">Onboarding in 2–4 weeks; weekly briefs every Friday; detection packs monthly; workshops quarterly. SLA tiers available for Enterprise, Professional, and Starter subscriptions.</p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-indigo-400 mb-2">Fixed-Price Pilot</h2>
          <p className="text-gray-300">Threat Intel Pilot — 6 Week Fixed Scope: baseline assessment, one detection pack, two briefs, 90-minute workshop. Price: R55,000.</p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-indigo-400 mb-2">Contact</h2>
          <p className="text-gray-300">To request an assessment or pilot, use the contact form or email services@nyxioncore.example with subject “Threat Intel Assessment Request”.</p>
        </div>
      </section>
    </main>
  )
}
