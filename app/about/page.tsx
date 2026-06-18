"use client"

import { useState } from "react"

export default function About() {
  const [activeTab, setActiveTab] = useState("Mission")

  const tabs = {
    Mission: (
      <p className="text-gray-300 mt-4">
        NYXION CORE is a sovereign ecosystem designed to integrate AI, cybersecurity, and resilience.
        Our mission is to build systems that empower communities, protect data, and redefine trust.
      </p>
    ),
    Vision: (
      <p className="text-gray-300 mt-4">
        We envision a shockwave ecosystem that transforms the status quo through innovation,
        philanthropy, and segmented life states — Academic, Business, Adventure, Sensitive, and Restricted.
      </p>
    ),
    States: (
      <ul className="mt-4 space-y-2 text-gray-300">
        <li><span className="text-indigo-400 font-semibold">Academic:</span> Certifications, learning, and knowledge expansion.</li>
        <li><span className="text-indigo-400 font-semibold">Business:</span> Holding company, subsidiaries, and ecosystem growth.</li>
        <li><span className="text-indigo-400 font-semibold">Adventure:</span> Monthly explorations, events, and creative outreach.</li>
        <li><span className="text-indigo-400 font-semibold">Sensitive:</span> Insurance, savings, and wealth security.</li>
        <li><span className="text-indigo-400 font-semibold">Restricted:</span> Advanced prototypes and sovereign defense modules.</li>
      </ul>
    ),
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white px-6 py-16">
      {/* Header */}
      <section className="text-center mb-12">
        <h1 className="text-5xl font-extrabold">About NYXION CORE</h1>
        <p className="mt-4 text-xl text-gray-400">
          Sovereign AI & Cybersecurity Ecosystem — built for resilience, trust, and transformation.
        </p>
      </section>

      {/* Dynamic Tabs */}
      <section className="max-w-4xl mx-auto">
        <div className="flex justify-center gap-6 mb-8">
          {Object.keys(tabs).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-lg transition ${
                activeTab === tab
                  ? "bg-indigo-600 text-white"
                  : "bg-gray-700 text-gray-300 hover:bg-gray-600"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg transition duration-500">
          {tabs[activeTab]}
        </div>
      </section>

      {/* Values Section */}
      <section className="grid md:grid-cols-3 gap-8 mt-16">
        {[
          { title: "Resilience", desc: "Fault-tolerant systems and recovery workflows." },
          { title: "Security", desc: "Quantum-secure architecture and compliance enforcement." },
          { title: "Community", desc: "Philanthropy, outreach, and ecosystem trust." },
        ].map((value) => (
          <div
            key={value.title}
            className="p-6 bg-gray-900 rounded-lg hover:scale-105 transition transform duration-300 shadow-lg hover:shadow-indigo-500/50"
          >
            <h3 className="text-2xl font-bold text-indigo-400">{value.title}</h3>
            <p className="mt-2 text-gray-300">{value.desc}</p>
          </div>
        ))}
      </section>
    </div>
  )
}
