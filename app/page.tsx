// Page blanche — point de départ. La communauté propose, vote, et l'IA code
// cette page (et le reste du site) tour après tour, via des PR auto-validées.
export default function Page() {
  return (
    <main
      style={{
        minHeight: '100dvh',
        display: 'grid',
        placeItems: 'center',
        fontFamily: 'system-ui, -apple-system, sans-serif',
        color: '#c8c8c8',
      }}
    >
      <p style={{ fontSize: 14, letterSpacing: '0.02em' }}>page blanche</p>
    </main>
  );
}
