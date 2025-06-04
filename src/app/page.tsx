export default function HomePage() {
  return (
    <main style={{ fontFamily: 'sans-serif', padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <header style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>DirtHub</h1>
        <p style={{ fontSize: '1.25rem', fontStyle: 'italic', color: '#555' }}>
          Turning waste into opportunity.
        </p>
        <p style={{ fontSize: '1rem', marginTop: '1rem' }}>
          We connect dirt buyers, sellers, and transporters—streamlining your job, reducing waste, and saving money.
        </p>
        <div style={{ marginTop: '2rem' }}>
          <button style={{ marginRight: '1rem', padding: '0.75rem 1.25rem', fontSize: '1rem' }}>
            Get Started
          </button>
          <button style={{ padding: '0.75rem 1.25rem', fontSize: '1rem', backgroundColor: '#eee' }}>
            Learn More
          </button>
        </div>
      </header>

      <section style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '3rem' }}>
        <div style={{ backgroundColor: '#f3f3f3', padding: '1rem', borderRadius: '8px' }}>
          <h3>🛒 Buyers</h3>
          <p>Find clean fill or topsoil fast, without waiting on callbacks or manual coordination.</p>
        </div>
        <div style={{ backgroundColor: '#f3f3f3', padding: '1rem', borderRadius: '8px' }}>
          <h3>🏗 Sellers</h3>
          <p>Offload excess dirt with ease, and get matched with local jobs needing material.</p>
        </div>
        <div style={{ backgroundColor: '#f3f3f3', padding: '1rem', borderRadius: '8px' }}>
          <h3>🚚 Transport</h3>
          <p>Fill your route with verified delivery jobs and reduce empty hauls.</p>
        </div>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2>About DirtHub</h2>
        <p>
          DirtHub is a tech-enabled platform built to simplify dirt logistics. We help construction and landscaping teams
          move material with less waste, less cost, and more transparency.
        </p>
        <ul>
          <li>✅ Sustainable reuse is our strategy</li>
          <li>✅ Transparency builds trust in every exchange</li>
          <li>✅ Every job, big or small, deserves efficiency</li>
        </ul>
      </section>

      <footer style={{ textAlign: 'center', fontSize: '0.875rem', color: '#888', marginTop: '4rem' }}>
        <p>&copy; {new Date().getFullYear()} DirtHub. All rights reserved.</p>
        <p>
          <a href="https://github.com/YOUR-USERNAME/dirthub-core" target="_blank">GitHub</a> |{' '}
          <a href="#">Contact</a> |{' '}
          <a href="#">Privacy</a>
        </p>
      </footer>
    </main>
  );
}