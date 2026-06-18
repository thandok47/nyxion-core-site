export default function ApplicationSecurity() {
  return (
    <main className="min-h-screen bg-gray-900 text-white px-6 py-16">
      <header className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-extrabold">Application Security</h1>
        <p className="text-gray-300 mt-4">Shift-left security to prevent vulnerabilities before release.</p>
        <a href="/contact" className="inline-block mt-6 bg-indigo-500 text-white px-6 py-3 rounded-lg">Request Assessment</a>
      </header>

      <section className="max-w-5xl mx-auto space-y-8">
        <div>
          <h2 className="text-2xl font-bold text-indigo-400 mb-2">What We Deliver</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>Secure code reviews</li>
            <li>SAST/DAST integration</li>
            <li>Dependency scanning</li>
            <li>Remediation guidance and developer training</li>
            <li>Secure CI/CD pipelines</li>
            <li>Threat modeling workshops</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-indigo-400 mb-2">Timeline and SLAs</h2>
          <p className="text-gray-300">Baseline assessment in 2 weeks; CI/CD integration in 4–6 weeks; remediation cycles per sprint; quarterly reviews. SLA tiers available for Enterprise, Professional, and Starter packages.</p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-indigo-400 mb-2">Fixed-Price Pilot</h2>
          <p className="text-gray-300">8 Week Fixed Scope: code review, pipeline assessment, dependency scan, remediation roadmap. Price: R75,000.</p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-indigo-400 mb-2">Contact</h2>
          <p className="text-gray-300">To request an assessment or pilot, use the contact form or email services@nyxioncore.example with subject “AppSec Assessment Request”.</p>
        </div>
      </section>
    </main>
  )
}
