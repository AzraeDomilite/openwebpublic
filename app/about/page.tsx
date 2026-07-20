import Link from 'next/link';

export const metadata = {
  title: 'À propos — OpenWeb',
  description: 'Ce qu’est OpenWeb et comment ce site est construit',
};

export default function AboutPage() {
  return (
    <main style={{ fontFamily: 'system-ui, -apple-system, sans-serif', color: '#1a1a1a', maxWidth: 720, margin: '0 auto', padding: '48px 20px' }}>
      <header style={{ textAlign: 'center', marginBottom: 40 }}>
        <h1 style={{ fontSize: 32, fontWeight: 700, letterSpacing: '-0.02em', margin: 0 }}>À propos</h1>
        <p style={{ color: '#6b6b6b', marginTop: 8 }}>Ce qu’est OpenWeb</p>
      </header>
      <section style={{ borderTop: '1px solid #eee', padding: '20px 0' }}>
        <p style={{ margin: 0, color: '#333' }}>
          OpenWeb est un site construit par sa communauté et codé par l’IA. Chaque
          évolution part d’une proposition votée par consensus : rien n’est ajouté
          sans ce vote. Une fois une proposition adoptée, un agent implémente le
          changement directement dans le code, puis la modification est publiée.
        </p>
      </section>
      <section style={{ borderTop: '1px solid #eee', padding: '20px 0' }}>
        <p style={{ margin: 0, color: '#333' }}>
          Le site est un export statique (Next.js) déployé sur GitHub Pages, sans
          serveur ni appel réseau au runtime : ce que vous voyez est entièrement
          pré-généré. Ce fonctionnement le rend simple, transparent et entièrement
          gouverné par celles et ceux qui y participent.
        </p>
      </section>
      <p style={{ marginTop: 32 }}>
        <Link href="/" style={{ color: '#0066cc' }}>← Retour à l’accueil</Link>
      </p>
    </main>
  );
}
