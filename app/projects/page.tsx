import playbooks from "../playbooks.json"

export default function Projects() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white px-6 py-16">
      <h1 className="text-5xl font-extrabold mb-6">Our Projects</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="p-6 bg-gray-800 rounded-lg hover:scale-105 transition">
          <h2 className="text-2xl font-bold text-indigo-400">SHADOW OS</h2>
          <p className="text-gray-300 mt-2">A secure operating system designed for resilience and sovereignty.</p>
        </div>
        <div className="p-6 bg-gray-800 rounded-lg hover:scale-105 transition">
          <h2 className="text-2xl font-bold text-indigo-400">BL4CK Language</h2>
          <p className="text-gray-300 mt-2">A programming language tailored for AI and cybersecurity integration.</p>
        </div>
      </div>
    </main>
  )
}
