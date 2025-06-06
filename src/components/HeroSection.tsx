'use client'

export default function HeroSection() {
  return (
    <section className="px-4 py-12 bg-white dark:bg-gray-900 text-black dark:text-white transition-colors duration-300">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">DirtHub</h1>
        <p className="text-lg mb-6">
          Turning waste into opportunity.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-blue-600 text-white dark:bg-blue-400 dark:text-black px-6 py-2 rounded hover:opacity-90">
            Get Started
          </button>
          <button className="bg-gray-100 text-gray-900 dark:bg-gray-700 dark:text-white px-6 py-2 rounded hover:opacity-90">
            Learn More
          </button>
        </div>
      </div>
    </section>
  )
}