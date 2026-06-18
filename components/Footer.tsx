export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="grid md:grid-cols-4 gap-8 px-6 max-w-7xl mx-auto">
        
        {/* Company */}
        <div>
          <h3 className="text-white font-bold mb-4">Company</h3>
          <ul className="space-y-2">
            <li><a href="/about" className="hover:text-indigo-400">About Us</a></li>
            <li><a href="/projects" className="hover:text-indigo-400">Projects</a></li>
            <li><a href="/services" className="hover:text-indigo-400">Services</a></li>
            <li><a href="/governance" className="hover:text-indigo-400">Governance</a></li>
            <li><a href="/contact" className="hover:text-indigo-400">Contact</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-white font-bold mb-4">Services</h3>
          <ul className="space-y-2">
            <li><a href="/services/incident-response" className="hover:text-indigo-400">Incident Response</a></li>
            <li><a href="/services/threat-intel" className="hover:text-indigo-400">Threat Intelligence</a></li>
            <li><a href="/services/vulnerability-management" className="hover:text-indigo-400">Vulnerability Management</a></li>
            <li><a href="/services/quantum-crypto" className="hover:text-indigo-400">Quantum Crypto</a></li>
            <li><a href="/services/appsec" className="hover:text-indigo-400">Application Security</a></li>
            <li><a href="/services/data-center" className="hover:text-indigo-400">Data Center Security</a></li>
            <li><a href="/services/education" className="hover:text-indigo-400">Education Solutions</a></li>
            <li><a href="/services/healthcare" className="hover:text-indigo-400">Healthcare Solutions</a></li>
          </ul>
        </div>

        {/* Governance */}
        <div>
          <h3 className="text-white font-bold mb-4">Governance</h3>
          <ul className="space-y-2">
            <li><a href="/governance/playbooks" className="hover:text-indigo-400">Playbooks</a></li>
            <li><a href="/governance/policies" className="hover:text-indigo-400">Policies</a></li>
            <li><a href="/governance/legal" className="hover:text-indigo-400">Legal</a></li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-white font-bold mb-4">Social</h3>
          <ul className="space-y-2">
            <li><a href="https://linkedin.com" className="hover:text-indigo-400">LinkedIn</a></li>
            <li><a href="https://github.com" className="hover:text-indigo-400">GitHub</a></li>
            <li><a href="https://youtube.com" className="hover:text-indigo-400">YouTube</a></li>
            <li><a href="https://twitter.com" className="hover:text-indigo-400">X (Twitter)</a></li>
            <li><a href="https://instagram.com" className="hover:text-indigo-400">Instagram</a></li>
          </ul>
        </div>
      </div>

      <div className="text-center mt-12 text-sm text-gray-500">
        © 2026 NYXION CORE Holdings. All rights reserved. • Cookie Settings • Imprint • Legal • Privacy
      </div>
    </footer>
  )
}
