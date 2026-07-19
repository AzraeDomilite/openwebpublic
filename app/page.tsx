import Link from 'next/link';
import sections from '@/content/sections.json';

type Section = { heading: string; body: string };

export default function Page() {
  const items = sections as Section[];
  return (
    <main style={{ fontFamily: 'system-ui, -apple-system, sans-serif', color: '#1a1a1a', maxWidth: 720, margin: '0 auto', padding: '48px 20px' }}>
      <header style={{ textAlign: 'center', marginBottom: 40 }}>
        <h1 style={{ fontSize: 32, fontWeight: 700, letterSpacing: '-0.02em', margin: 0 }}>OpenWeb</h1>
        <p style={{ color: '#6b6b6b', marginTop: 8 }}>Ce site est construit par vous, et codé par l’IA.</p>
      </header>
      {items.map((s, i) => (
        <section key={i} style={{ borderTop: '1px solid #eee', padding: '20px 0' }}>
          <h2 style={{ fontSize: 19, margin: '0 0 6px' }}>{s.heading}</h2>
          <p style={{ margin: 0, color: '#333' }}>{s.body}</p>
        </section>
      ))}
      <p style={{ borderTop: '1px solid #eee', padding: '20px 0 0', margin: 0 }}>
        <Link href="/faq" style={{ color: '#0066cc' }}>Consulter la FAQ →</Link>
      </p>
    </main>
  );
}
