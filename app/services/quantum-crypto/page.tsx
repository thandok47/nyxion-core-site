export default function QuantumCrypto() {
  return (
    <main className="min-h-screen bg-gray-900 text-white px-6 py-16">
      <header className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-extrabold">Quantum Secure Cryptography</h1>
        <p className="text-gray-300 mt-4">Future-proof encryption and sovereign communications for the quantum era.</p>
        <a href="/contact" className="inline-block mt-6 bg-indigo-500 text-white px-6 py-3 rounded-lg">Request Assessment</a>
      </header>

      <section className="max-w-5xl mx-auto space-y-8">
        <div>
          <h2 className="text-2xl font-bold text-indigo-400 mb-2">What We Deliver</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>PQC readiness assessment</li>
            <li>Migration roadmap</li>
            <li>Implementation of PQC primitives</li>
            <li>Key management guidance</li>
            <li>Quantum-secure VPNs and hybrid architectures</li>
            <li>Optional QKD pilot channels</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-indigo-400 mb-2">Timeline and SLAs</h2>
          <p className="text-gray-300">Assessment in 2–3 weeks; roadmap in 4 weeks; implementation over 3–9 months; optional QKD pilot in 6–12 months. SLA tiers available for Enterprise, Professional, and Starter packages.</p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-indigo-400 mb-2">Fixed-Price Pilot</h2>
          <p className="text-gray-300">12 Week Fixed Scope: assessment, roadmap, pilot PQC implementation, compliance snapshot. Price: R120,000.</p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-indigo-400 mb-2">Contact</h2>
          <p className="text-gray-300">To request an assessment or pilot, use the contact form or email services@nyxioncore.example with subject “Quantum Crypto Assessment Request”.</p>
        </div>
      </section>
    </main>
  )
}
