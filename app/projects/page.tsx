"use client"

import { useState } from "react"

export default function Projects() {
  const projects = [
    {
      name: "S.H.A.D.O.W OS",
      desc: "Secure architecture and resilience-focused operating system prototype.",
      roadmap: ["2026: Skeleton modules", "2027: Telemetry integration", "2028: Core release"],
      stack: ["Python", "Rust", "Linux"],
    },
    {
      name: "shadow_prototype",
      desc: "Proof-of-concept layer for resilience testing and workflow validation.",
      roadmap: ["2026: Logger + playbooks", "2027: Workflow expansion", "2028: Merge into S.H.A.D.O.W"],
      stack: ["Python", "SQL", "Linux"],
    },
    {
      name: "BL4CK Language",
      desc: "Sovereign programming language and compiler prototype for secure systems.",
      roadmap: ["2026: Parser prototype", "2027: Compiler integration", "2028: Dialect support"],
      stack: ["Rust", "LLVM", "Python"],
    },
    {
      name: "Lumos Core",
      desc: "Resilience strategies and compliance modules for enterprise and municipal use.",
      roadmap: ["2026: Compliance framework", "2027: Enterprise integration", "2028: Municipal deployment"],
      stack: ["Node.js", "PostgreSQL", "Docker"],
    },
    {
      name: "Ignis Opps",
      desc: "Municipal outreach and energy projects, focusing on waste-to-energy plants.",
      roadmap: ["2026: Pilot plant", "2027: Municipal expansion", "2028: Nationwide deployment"],
      stack: ["IoT", "Energy Systems", "Linux"],
    },
  ]

  const [activeProject, setActiveProject] = useState(projects[0])

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white px-6 py-16">
      {/* Header */}
      <section className="text-center mb-12">
        <h1 className="text-5xl font-extrabold">NYXION CORE Projects</h1>
        <p className="mt-4 text-xl text-gray-400">
          Explore our prototypes, languages, and outreach initiatives shaping the sovereign ecosystem.
        </p>
      </section>

      {/* Project Selector */}
      <section className="flex flex-wrap justify-center gap-4 mb-12">
        {projects.map((project) => (
          <button
            key={project.name}
            onClick={() => setActiveProject(project)}
            className={`px-4 py-2 rounded-lg transition ${
              activeProject.name === project.name
                ? "bg-indigo-600 text-white"
                : "bg-gray-700 text-gray-300 hover:bg-gray-600"
            }`}
          >
            {project.name}
          </button>
        ))}
      </section>

      {/* Active Project Card */}
      <section className="max-w-4xl mx-auto bg-gray-800 p-10 rounded-lg shadow-lg transition duration-500">
        <h2 className="text-3xl font-bold text-indigo-400">{activeProject.name}</h2>
        <p className="mt-4 text-gray-300">{activeProject.desc}</p>

        {/* Tech Stack */}
        <div className="mt-6">
          <h3 className="text-xl font-semibold text-indigo-300">Tech Stack</h3>
          <ul className="mt-2 flex flex-wrap gap-3">
            {activeProject.stack.map((tech) => (
              <li
                key={tech}
                className="px-3 py-1 bg-gray-900 rounded-lg text-gray-300 hover:bg-indigo-600 hover:text-white transition"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>

        {/* Roadmap */}
        <div className="mt-6">
          <h3 className="text-xl font-semibold text-indigo-300">Roadmap</h3>
          <ul className="mt-2 space-y-2">
            {activeProject.roadmap.map((step, index) => (
              <li
                key={index}
                className="flex items-center gap-2 text-gray-300 hover:text-indigo-400 transition"
              >
                <span className="w-3 h-3 bg-indigo-500 rounded-full"></span>
                {step}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  )
}
