export default function Governance() {
  return (
    <main className="min-h-screen bg-gray-900 text-white px-6 py-16">
      <header className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-5xl font-extrabold">Governance</h1>
        <p className="text-gray-300 mt-4">
          NYXION CORE governance ensures resilience, accountability, and compliance across all prototypes and services.
        </p>
      </header>

      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-indigo-400 mb-8">Compliance Framework</h2>
        <p className="text-gray-300 mb-6">
          Our governance framework integrates operational playbooks, security policies, and legal documentation into one cohesive system.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          <GovernanceCard title="Playbooks" desc="Operational guides for incident response, IDS integration, and secure architecture." link="/playbooks" />
          <GovernanceCard title="Policies" desc="Governance rules covering password policy, MFA, and compliance standards." link="/policies" />
          <GovernanceCard title="Legal" desc="Terms & Conditions, Privacy Policy, and compliance placeholders." link="/legal" />
        </div>
      </section>

      <section className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-indigo-400 mb-8">Why Governance Matters</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>Demonstrates accountability and compliance readiness.</li>
          <li>Provides recruiters and clients with confidence in NYXION CORE’s maturity.</li>
          <li>Ensures operational resilience through documented frameworks.</li>
          <li>Aligns with industry standards and regulatory requirements.</li>
        </ul>
      </section>
    </main>
  )
}

// Reusable GovernanceCard component
function GovernanceCard({ title, desc, link }) {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-bold text-indigo-300 mb-2">{title}</h3>
      <p className="text-gray-300 mb-4">{desc}</p>
      <a href={link} className="text-indigo-400 hover:text-indigo-200">Explore →</a>
    </div>
  )
}
