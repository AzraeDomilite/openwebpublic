import type { ReactNode } from 'react';

export const metadata = {
  title: 'OpenWeb',
  description: 'Un site construit par la communauté et codé par l’IA',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
