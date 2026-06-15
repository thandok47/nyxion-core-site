"use client"
import Link from "next/link"
import { useState } from "react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-gray-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-indigo-400">
          NYXION CORE
        </Link>
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-indigo-400">Home</Link>
          <Link href="/about" className="hover:text-indigo-400">About</Link>
          <Link href="/projects" className="hover:text-indigo-400">Projects</Link>
          <Link href="/legal" className="hover:text-indigo-400">Legal</Link>
          <Link href="/contact" className="hover:text-indigo-400">Contact</Link>
        </div>
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">☰</button>
      </div>
      {isOpen && (
        <div className="md:hidden bg-gray-800 px-6 py-4 space-y-2">
          <Link href="/" className="block hover:text-indigo-400">Home</Link>
          <Link href="/about" className="block hover:text-indigo-400">About</Link>
          <Link href="/projects" className="block hover:text-indigo-400">Projects</Link>
          <Link href="/legal" className="block hover:text-indigo-400">Legal</Link>
          <Link href="/contact" className="block hover:text-indigo-400">Contact</Link>
        </div>
      )}
    </nav>
  )
}
