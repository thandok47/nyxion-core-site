import policies from "../../policies.json"

export default function Policies() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white px-6 py-16">
      <h1 className="text-5xl font-extrabold mb-10">Security Policies</h1>
      <p className="text-gray-300 mb-12 max-w-3xl">
        These policies define the governance and compliance standards across NYXION CORE prototypes.
        They ensure resilience, accountability, and adherence to cybersecurity best practices.
      </p>

      <div className="space-y-12">
        {Object.entries(policies).map(([key, value]) => (
          <div key={key} className="bg-gray-800 rounded-lg p-6 shadow-lg">
            <h2 className="text-2xl font-bold text-indigo-400 capitalize">
              {key.replace(/_/g, " ")}
            </h2>
            <ul className="list-disc list-inside mt-4 space-y-2 text-gray-300">
              {value.rules.map((rule: string, index: number) => (
                <li key={index}>{rule}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </main>
  )
}
