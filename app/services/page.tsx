export default function ServicesLanding() {
  return (
    <main className="min-h-screen bg-gray-900 text-white px-6 py-16">
      <header className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-5xl font-extrabold">Our Services</h1>
        <p className="text-gray-300 mt-4">
          NYXION CORE delivers sovereign cybersecurity solutions for enterprises, municipalities, and social impact sectors.
        </p>
      </header>

      {/* Enterprise Security Section */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-indigo-400 mb-8">Enterprise Security</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <ServiceCard title="Incident Response" desc="Rapid containment, forensics, and recovery playbooks." link="/services/incident-response" />
          <ServiceCard title="Threat Intelligence" desc="AI-driven monitoring and tailored detection rules." link="/services/threat-intel" />
          <ServiceCard title="Vulnerability Management" desc="Continuous scanning, patching, and compliance reporting." link="/services/vulnerability-management" />
          <ServiceCard title="Quantum Secure Cryptography" desc="Future-proof encryption and sovereign communications." link="/services/quantum-crypto" />
          <ServiceCard title="Application Security" desc="Shift-left security to prevent vulnerabilities before release." link="/services/appsec" />
          <ServiceCard title="Data Center Security" desc="Comprehensive protection for on-prem and hybrid infrastructure." link="/services/data-center" />
        </div>
      </section>

      {/* Social Impact Section */}
      <section className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-indigo-400 mb-8">Social Impact</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <ServiceCard title="Education Solutions" desc="Secure digital learning platforms and literacy programs." link="/services/education" />
          <ServiceCard title="Healthcare Solutions" desc="Secure diagnostics, patient data protection, and clinic support." link="/services/healthcare" />
        </div>
      </section>
    </main>
  )
}

// Reusable ServiceCard component
function ServiceCard({ title, desc, link }) {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-bold text-indigo-300 mb-2">{title}</h3>
      <p className="text-gray-300 mb-4">{desc}</p>
      <a href={link} className="text-indigo-400 hover:text-indigo-200">Learn more →</a>
    </div>
  )
}
