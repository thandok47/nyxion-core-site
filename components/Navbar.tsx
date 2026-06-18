import Link from "next/link"
import { useState } from "react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-gray-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-indigo-400">
          NYXION CORE
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-indigo-400">Home</Link>
          <Link href="/about" className="hover:text-indigo-400">About</Link>
          <Link href="/projects" className="hover:text-indigo-400">Projects</Link>

          {/* Services Dropdown */}
          <div className="group relative">
            <button className="hover:text-indigo-400">Services ▾</button>
            <div className="absolute hidden group-hover:block bg-gray-800 mt-2 rounded-lg shadow-lg">
              <Link href="/services" className="block px-4 py-2 hover:text-indigo-400">All Services</Link>
              <Link href="/services/incident-response" className="block px-4 py-2 hover:text-indigo-400">Incident Response</Link>
              <Link href="/services/threat-intel" className="block px-4 py-2 hover:text-indigo-400">Threat Intelligence</Link>
              <Link href="/services/vulnerability-management" className="block px-4 py-2 hover:text-indigo-400">Vulnerability Management</Link>
              <Link href="/services/quantum-crypto" className="block px-4 py-2 hover:text-indigo-400">Quantum Crypto</Link>
              <Link href="/services/appsec" className="block px-4 py-2 hover:text-indigo-400">Application Security</Link>
              <Link href="/services/data-center" className="block px-4 py-2 hover:text-indigo-400">Data Center Security</Link>
              <Link href="/services/education" className="block px-4 py-2 hover:text-indigo-400">Education Solutions</Link>
              <Link href="/services/healthcare" className="block px-4 py-2 hover:text-indigo-400">Healthcare Solutions</Link>
            </div>
          </div>

          {/* Governance Dropdown */}
          <div className="group relative">
            <button className="hover:text-indigo-400">Governance ▾</button>
            <div className="absolute hidden group-hover:block bg-gray-800 mt-2 rounded-lg shadow-lg">
              <Link href="/governance" className="block px-4 py-2 hover:text-indigo-400">Governance Overview</Link>
              <Link href="/governance/playbooks" className="block px-4 py-2 hover:text-indigo-400">Playbooks</Link>
              <Link href="/governance/policies" className="block px-4 py-2 hover:text-indigo-400">Policies</Link>
              <Link href="/governance/legal" className="block px-4 py-2 hover:text-indigo-400">Legal</Link>
            </div>
          </div>

          <Link href="/contact" className="hover:text-indigo-400">Contact</Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 px-6 py-4 space-y-2">
          <Link href="/" className="block hover:text-indigo-400">Home</Link>
          <Link href="/about" className="block hover:text-indigo-400">About</Link>
          <Link href="/projects" className="block hover:text-indigo-400">Projects</Link>
          <Link href="/services" className="block hover:text-indigo-400">Services</Link>
          <Link href="/governance" className="block hover:text-indigo-400">Governance</Link>
          <Link href="/contact" className="block hover:text-indigo-400">Contact</Link>
        </div>
      )}
    </nav>
  )
}
