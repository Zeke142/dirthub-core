'use client';
import { useEffect, useState } from 'react';

export default function HomePage() {
  const [ping, setPing] = useState<string>('Loading...');

  useEffect(() => {
    const fetchPing = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/ping`);
        const data = await res.json();
        setPing(data.message);
      } catch (error) {
        setPing('Failed to fetch 😢');
      }
    };

    fetchPing();
  }, []);

  return (
    <main className="p-8 text-xl">
      <h1 className="text-3xl font-bold">DirtHub Core 🚜</h1>
      <p>Backend Ping: <strong>{ping}</strong></p>
    </main>
  );
}