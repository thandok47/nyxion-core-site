export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white px-6 py-16">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-6xl font-extrabold">NYXION CORE</h1>
        <p className="mt-6 text-xl text-gray-400 max-w-2xl mx-auto">
          Sovereign AI & Cybersecurity Ecosystem — building resilience, trust, and transformation across enterprises and communities.
        </p>
        <a
          href="/contact"
          className="inline-block mt-8 bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-3 rounded-lg font-bold transition"
        >
          Request Assessment
        </a>
      </section>

      {/* Quick Links Grid */}
      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <HomeCard title="About" desc="Our mission, vision, and segmented life states." link="/about" />
        <HomeCard title="Projects" desc="Explore prototypes like S.H.A.D.O.W, BL4CK, Lumos, and Ignis Opps." link="/projects" />
        <HomeCard title="Services" desc="Enterprise security and social impact solutions." link="/services" />
        <HomeCard title="Governance" desc="Playbooks, Policies, and Legal compliance framework." link="/governance" />
        <HomeCard title="Contact" desc="Get in touch for partnerships, assessments, or inquiries." link="/contact" />
      </section>

      {/* Footer Teaser */}
      <section className="text-center mt-20 text-gray-400">
        <p>© 2026 NYXION CORE Holdings • Johannesburg, South Africa</p>
      </section>
    </main>
  )
}

// Reusable HomeCard component
function HomeCard({ title, desc, link }) {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition transform duration-300">
      <h3 className="text-2xl font-bold text-indigo-400 mb-2">{title}</h3>
      <p className="text-gray-300 mb-4">{desc}</p>
      <a href={link} className="text-indigo-400 hover:text-indigo-200">Explore →</a>
    </div>
  )
}
