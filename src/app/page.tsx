'use client';
import { useState, useEffect } from 'react';
import { ShoppingCart, PackageCheck, Truck } from 'lucide-react';

export default function HomePage() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  return (
    <main className="font-sans px-4 py-8 max-w-3xl mx-auto min-h-screen transition-colors duration-300 bg-[#7a5c39] text-white dark:bg-black dark:text-white">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-2">DirtHub</h1>
        <p className="text-lg italic text-white/80 mb-4">
          Turning waste into opportunity.
        </p>
        <p className="text-base text-white/90">
          We connect dirt buyers, sellers, and transporters—streamlining your job, reducing waste, and saving money.
        </p>
        <div className="mt-6 flex justify-center space-x-4">
          <button className="bg-white text-black px-5 py-2 rounded hover:bg-gray-200 transition">
            Get Started
          </button>
          <button className="bg-gray-100 text-black px-5 py-2 rounded hover:bg-gray-300 transition">
            Learn More
          </button>
        </div>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="mt-6 text-sm underline text-white/80 hover:text-white"
        >
          Toggle {darkMode ? 'Light' : 'Dark'} Mode
        </button>
      </header>

      <section className="space-y-4 mb-12">
        <div className="bg-white/10 backdrop-blur-sm p-4 rounded shadow flex items-start gap-4">
          <ShoppingCart className="w-6 h-6 mt-1 text-white" />
          <div>
            <h3 className="text-xl font-semibold mb-1">Buyers</h3>
            <p>Find clean fill or topsoil fast, without waiting on callbacks or manual coordination.</p>
          </div>
        </div>
        <div className="bg-white/10 backdrop-blur-sm p-4 rounded shadow flex items-start gap-4">
          <PackageCheck className="w-6 h-6 mt-1 text-white" />
          <div>
            <h3 className="text-xl font-semibold mb-1">Sellers</h3>
            <p>Offload excess dirt with ease, and get matched with local jobs needing material.</p>
          </div>
        </div>
        <div className="bg-white/10 backdrop-blur-sm p-4 rounded shadow flex items-start gap-4">
          <Truck className="w-6 h-6 mt-1 text-white" />
          <div>
            <h3 className="text-xl font-semibold mb-1">Transport</h3>
            <p>Fill your route with verified delivery jobs and reduce empty hauls.</p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">About DirtHub</h2>
        <p className="mb-4">
          DirtHub is a tech-enabled platform built to simplify dirt logistics. We help construction and landscaping teams
          move material with less waste, less cost, and more transparency.
        </p>
        <ul className="list-disc list-inside space-y-1 text-white/90">
          <li>✅ Sustainable reuse is our strategy</li>
          <li>✅ Transparency builds trust in every exchange</li>
          <li>✅ Every job, big or small, deserves efficiency</li>
        </ul>
      </section>

      <footer className="text-center text-sm text-white/70 mt-16">
        <p>&copy; {new Date().getFullYear()} DirtHub. All rights reserved.</p>
        <p className="space-x-2 mt-1">
          <a href="https://github.com/YOUR-USERNAME/dirthub-core" className="hover:underline" target="_blank">GitHub</a>
          <span>|</span>
          <a href="#" className="hover:underline">Contact</a>
          <span>|</span>
          <a href="#" className="hover:underline">Privacy</a>
        </p>
      </footer>
    </main>
  );
}