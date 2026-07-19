// [DÉMO PIPELINE] Premier "build" simulé de l'agent : la page blanche gagne un titre.
// Démontre branche -> PR -> auto-merge sur CI verte -> deploy. Réversible (git revert).
export default function Page() {
  return (
    <main
      style={{
        minHeight: '100dvh',
        display: 'grid',
        placeItems: 'center',
        textAlign: 'center',
        fontFamily: 'system-ui, -apple-system, sans-serif',
        color: '#1a1a1a',
      }}
    >
      <div>
        <h1 style={{ fontSize: 32, fontWeight: 700, letterSpacing: '-0.02em', margin: 0 }}>
          OpenWeb
        </h1>
        <p style={{ color: '#6b6b6b', marginTop: 8 }}>
          Ce site est construit par vous, et codé par l’IA.
        </p>
      </div>
    </main>
  );
}
