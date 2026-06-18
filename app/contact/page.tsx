export default function Contact() {
  return (
    <main className="min-h-screen bg-gray-900 text-white px-6 py-16">
      {/* Header */}
      <header className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-5xl font-extrabold">Contact Us</h1>
        <p className="mt-4 text-xl text-gray-400">
          Get in touch with NYXION CORE for assessments, partnerships, or inquiries.
        </p>
      </header>

      {/* Contact Form */}
      <section className="max-w-3xl mx-auto bg-gray-800 p-8 rounded-lg shadow-lg mb-16">
        <form className="space-y-6">
          <div>
            <label className="block text-gray-300 mb-2">Name</label>
            <input
              type="text"
              placeholder="Your full name"
              className="w-full px-4 py-2 rounded-lg bg-gray-900 text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label className="block text-gray-300 mb-2">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 rounded-lg bg-gray-900 text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label className="block text-gray-300 mb-2">Message</label>
            <textarea
              rows={5}
              placeholder="Write your message here..."
              className="w-full px-4 py-2 rounded-lg bg-gray-900 text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-3 rounded-lg transition"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* Social Links */}
      <section className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-indigo-400 mb-6">Connect With Us</h2>
        <div className="flex flex-wrap justify-center gap-6 text-gray-300">
          <a href="#" className="hover:text-indigo-400">LinkedIn (coming soon)</a>
          <a href="#" className="hover:text-indigo-400">Instagram (coming soon)</a>
          <a href="#" className="hover:text-indigo-400">X / Twitter (coming soon)</a>
          <a href="#" className="hover:text-indigo-400">Facebook (coming soon)</a>
          <a href="#" className="hover:text-indigo-400">WhatsApp (coming soon)</a>
          <a href="#" className="hover:text-indigo-400">GitHub (coming soon)</a>
        </div>
      </section>
    </main>
  )
}
