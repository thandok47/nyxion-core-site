export default function IncidentResponse() {
  return (
    <main className="min-h-screen bg-gray-900 text-white px-6 py-16">
      <header className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-extrabold">Incident Response</h1>
        <p className="text-gray-300 mt-4">Rapid containment, forensic clarity, and resilient recovery to minimise business impact.</p>
        <a href="/contact" className="inline-block mt-6 bg-indigo-500 text-white px-6 py-3 rounded-lg">Request Assessment</a>
      </header>

      <section className="max-w-5xl mx-auto space-y-8">
        <div>
          <h2 className="text-2xl font-bold text-indigo-400 mb-2">What We Deliver</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>Initial triage and containment; 24/7 on-call activation</li>
            <li>Forensic evidence package with chain of custody</li>
            <li>Root cause analysis and remediation plan</li>
            <li>Recovery validation and post-incident workshop</li>
            <li>Optional 24/7 IR retainer with guaranteed SLA</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-indigo-400 mb-2">Timeline and SLAs</h2>
          <p className="text-gray-300">Initial response within 4–24 hours; containment within 24 hours; full report within 7–14 days. Retainer clients receive accelerated SLAs.</p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-indigo-400 mb-2">Fixed-Price Pilot</h2>
          <p className="text-gray-300">IR Pilot — 4 Week Fixed Scope: assessment, tabletop, simulated incident, remediation roadmap, 60-minute debrief. Price: R45,000.</p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-indigo-400 mb-2">Contact</h2>
          <p className="text-gray-300">To request an assessment or pilot, use the contact form or email services@nyxioncore.example with subject “IR Assessment Request”.</p>
        </div>
      </section>
    </main>
  )
}
