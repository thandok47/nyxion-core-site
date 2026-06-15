export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8 mt-16">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <p>© 2026 NYXION CORE — Sovereign Ecosystem</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="https://github.com/thandok47" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400">GitHub</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400">LinkedIn</a>
          <a href="mailto:thandovkhumalo@icloud.com" className="hover:text-indigo-400">Email</a>
        </div>
      </div>
    </footer>
  )
}
