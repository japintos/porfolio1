import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.webxpert.com.ar'),
  title: 'Julio A. Pintos — Portfolio',
  description:
    'Julio A. Pintos — Fullstack Developer y Tech Lead en Posadas, Misiones. Desarrollo web, e-commerce, APIs y optimización SEO técnica.',
  alternates: {
    canonical: '/japintos',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    url: 'https://www.webxpert.com.ar/japintos',
    title: 'Julio A. Pintos — Portfolio',
    description:
      'Fullstack Developer y Tech Lead en Posadas, Misiones. Desarrollo web, e-commerce, APIs y optimización SEO técnica.',
    images: ['/Img/foto_Perfil.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Julio A. Pintos — Portfolio',
    description:
      'Fullstack Developer y Tech Lead en Posadas, Misiones. Desarrollo web, e-commerce, APIs y optimización SEO técnica.',
    images: ['/Img/foto_Perfil.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
