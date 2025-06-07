export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <div className="p-8">
        <h1 className="text-4xl font-bold mb-4">DirtHub</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-6 border rounded shadow">
            <h2 className="text-xl font-semibold mb-2">Buyers</h2>
            <p>Find clean fill and screened dirt fast, with no callbacks.</p>
          </div>
          <div className="p-6 border rounded shadow">
            <h2 className="text-xl font-semibold mb-2">Sellers</h2>
            <p>List your excess soil and get matched to real jobs.</p>
          </div>
          <div className="p-6 border rounded shadow">
            <h2 className="text-xl font-semibold mb-2">Transport</h2>
            <p>Offer hauling services and reduce empty runs.</p>
          </div>
        </div>

        {/* ✅ Tailwind render test */}
        <div className="bg-green-500 text-white p-4 mt-8 rounded">
          ✅ Tailwind is working if this box is green
        </div>
      </div>
    </main>
  );
}