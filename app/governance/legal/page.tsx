export default function Legal() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white px-6 py-16">
      <h1 className="text-5xl font-extrabold mb-10">Legal & Compliance</h1>
      <p className="text-gray-300 mb-12 max-w-3xl">
        NYXION CORE is committed to transparency, compliance, and ethical governance.
        This section outlines our Terms & Conditions and Privacy Policy.
      </p>

      {/* Terms & Conditions */}
      <div className="bg-gray-800 rounded-lg p-6 shadow-lg mb-12">
        <h2 className="text-2xl font-bold text-indigo-400 mb-4">Terms & Conditions</h2>
        <p className="text-gray-300 mb-4">
          These Terms & Conditions govern the use of NYXION CORE prototypes and services.
          By accessing or using our systems, you agree to comply with these terms.
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-300">
          <li>Use prototypes for educational and professional demonstration purposes only.</li>
          <li>Do not attempt unauthorized access, reverse engineering, or exploitation.</li>
          <li>Respect intellectual property and licensing agreements.</li>
          <li>NYXION CORE reserves the right to update these terms at any time.</li>
        </ul>
      </div>

      {/* Privacy Policy */}
      <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
        <h2 className="text-2xl font-bold text-indigo-400 mb-4">Privacy Policy</h2>
        <p className="text-gray-300 mb-4">
          NYXION CORE values privacy and data protection. This policy explains how we handle
          information across our prototypes and site.
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-300">
          <li>We do not collect personal data beyond what is voluntarily shared.</li>
          <li>Any stored data is encrypted and protected with industry standards.</li>
          <li>We comply with GDPR, POPIA, and ISO27001 frameworks.</li>
          <li>Users may request deletion of their data at any time.</li>
        </ul>
      </div>
    </main>
  )
}
