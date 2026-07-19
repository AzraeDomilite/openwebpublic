import Link from 'next/link';

export const metadata = {
  title: 'FAQ — OpenWeb',
  description: 'Questions fréquentes sur le fonctionnement du site',
};

type Item = { question: string; answer: string };

const faq: Item[] = [
  {
    question: 'Qui décide de ce qui est ajouté au site ?',
    answer:
      'La communauté. Chaque évolution du site provient d’une proposition votée par consensus ; rien n’est ajouté sans ce vote.',
  },
  {
    question: 'Qui écrit le code ?',
    answer:
      'Une IA. Une fois la proposition adoptée, un agent implémente le changement directement dans le code du site, puis la modification est publiée.',
  },
  {
    question: 'Comment le site est-il mis en ligne ?',
    answer:
      'Le site est un export statique (Next.js) déployé sur GitHub Pages. Il ne comporte aucun serveur ni appel réseau au runtime : ce que vous voyez est entièrement pré-généré.',
  },
];

export default function FaqPage() {
  return (
    <main style={{ fontFamily: 'system-ui, -apple-system, sans-serif', color: '#1a1a1a', maxWidth: 720, margin: '0 auto', padding: '48px 20px' }}>
      <header style={{ textAlign: 'center', marginBottom: 40 }}>
        <h1 style={{ fontSize: 32, fontWeight: 700, letterSpacing: '-0.02em', margin: 0 }}>FAQ</h1>
        <p style={{ color: '#6b6b6b', marginTop: 8 }}>Comment fonctionne ce site ?</p>
      </header>
      {faq.map((item, i) => (
        <section key={i} style={{ borderTop: '1px solid #eee', padding: '20px 0' }}>
          <h2 style={{ fontSize: 19, margin: '0 0 6px' }}>{item.question}</h2>
          <p style={{ margin: 0, color: '#333' }}>{item.answer}</p>
        </section>
      ))}
      <p style={{ marginTop: 32 }}>
        <Link href="/" style={{ color: '#0066cc' }}>← Retour à l’accueil</Link>
      </p>
    </main>
  );
}
