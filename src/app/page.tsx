import PluginPanel from "@/components/PluginPanel";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 p-6 md:p-12 space-y-8">
      <section className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold tracking-tight">
          Welcome to <span className="text-green-600">DirtHub Core</span>
        </h1>
        <p className="mt-4 text-lg text-gray-700">
          Connecting buyers, sellers, and transporters in construction and landscaping.  
          DirtHub turns excavation waste into reusable opportunity — fast, simple, and sustainable.
        </p>
      </section>

      <section className="max-w-3xl mx-auto">
        <PluginPanel />
      </section>

      <footer className="mt-12 text-center text-sm text-gray-400">
        <p>DirtHub™ — Built for the people who move the earth.</p>
      </footer>
    </main>
  );
}