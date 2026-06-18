export default function DataCenterSecurity() {
  return (
    <main className="min-h-screen bg-gray-900 text-white px-6 py-16">
      <header className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-extrabold">Data Center Security</h1>
        <p className="text-gray-300 mt-4">Comprehensive protection for on-prem and hybrid infrastructure.</p>
        <a href="/contact" className="inline-block mt-6 bg-indigo-500 text-white px-6 py-3 rounded-lg">Request Assessment</a>
      </header>

      <section className="max-w-5xl mx-auto space-y-8">
        <div>
          <h2 className="text-2xl font-bold text-indigo-400 mb-2">What We Deliver</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>Network segmentation plan</li>
            <li>BL4CK protocol guidance</li>
            <li>IDS/IPS monitoring and alerting</li>
            <li>Physical and logical security reviews</li>
            <li>Incident playbooks</li>
            <li>Optional managed service</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-indigo-400 mb-2">Timeline and SLAs</h2>
          <p className="text-gray-300">Assessment in 3–6 weeks; remediation over 2–4 months; quarterly reviews. SLA tiers available for Enterprise, Professional, and Starter packages.</p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-indigo-400 mb-2">Fixed-Price Pilot</h2>
          <p className="text-gray-300">10 Week Fixed Scope: assessment, segmentation plan, IDS integration, resilience test. Price: R95,000.</p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-indigo-400 mb-2">Contact</h2>
          <p className="text-gray-300">To request an assessment or pilot, use the contact form or email services@nyxioncore.example with subject “Data Center Assessment Request”.</p>
        </div>
      </section>
    </main>
  )
}
