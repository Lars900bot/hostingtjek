import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: {
    default: 'HostingTjek – Sammenlign webhosting i Danmark',
    template: '%s | HostingTjek',
  },
  description:
    'Sammenlign webhosting i Danmark. Find det billigste og bedste hosting til din hjemmeside med vores upartiske tests og anmeldelser.',
  metadataBase: new URL('https://hostingtjek.dk'),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="da">
      <body>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
