export default function HomePage() {
  return (
    <main className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-800 dark:text-zinc-100 transition-colors">
      <div className="p-8">
        <h1 className="text-4xl font-bold mb-4">DirtHub</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 border rounded-lg shadow bg-zinc-100 dark:bg-zinc-900">
            <h2 className="text-xl font-semibold mb-2">Buy Dirt</h2>
            <p>Find clean fill and screened soil from nearby sources.</p>
          </div>
          <div className="p-6 border rounded-lg shadow bg-zinc-100 dark:bg-zinc-900">
            <h2 className="text-xl font-semibold mb-2">Sell Dirt</h2>
            <p>List your excess soil and reach local buyers fast.</p>
          </div>
          <div className="p-6 border rounded-lg shadow bg-zinc-100 dark:bg-zinc-900">
            <h2 className="text-xl font-semibold mb-2">Transport Dirt</h2>
            <p>Offer hauling services and connect with buyers/sellers.</p>
          </div>
        </div>
      </div>
    </main>
  );
}