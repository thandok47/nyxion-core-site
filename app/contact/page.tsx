export default function Contact() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white px-6 py-16">
      <h1 className="text-5xl font-extrabold mb-6">Contact Us</h1>
      <p className="text-gray-300 max-w-3xl mb-6">
        Reach out to NYXION CORE for collaborations, inquiries, or support.
      </p>
      <form className="space-y-4 max-w-lg">
        <input type="text" placeholder="Your Name" className="w-full p-3 rounded bg-gray-800 text-white" />
        <input type="email" placeholder="Your Email" className="w-full p-3 rounded bg-gray-800 text-white" />
        <textarea placeholder="Your Message" className="w-full p-3 rounded bg-gray-800 text-white h-32"></textarea>
        <button type="submit" className="px-6 py-3 bg-indigo-600 rounded-lg hover:bg-indigo-500 transition font-semibold">
          Send Message
        </button>
      </form>
    </main>
  )
}
