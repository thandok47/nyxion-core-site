import playbooks from "../../playbooks.json"

export default function Playbooks() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white px-6 py-16">
      <h1 className="text-5xl font-extrabold mb-10">Cybersecurity Playbooks</h1>
      <p className="text-gray-300 mb-12 max-w-3xl">
        These playbooks codify resilience and operational discipline across NYXION CORE prototypes.
        Each guide provides step‑by‑step actions for handling security operations.
      </p>

      <div className="space-y-12">
        {Object.entries(playbooks).map(([key, value]) => (
          <div key={key} className="bg-gray-800 rounded-lg p-6 shadow-lg">
            <h2 className="text-2xl font-bold text-indigo-400 capitalize">
              {key.replace("_", " ")}
            </h2>
            <ol className="list-decimal list-inside mt-4 space-y-2 text-gray-300">
              {value.steps.map((step: string, index: number) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
          </div>
        ))}
      </div>
    </main>
  )
}
