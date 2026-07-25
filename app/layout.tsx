import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Onkar Raut | Video Editor & Content Creator',
  description: 'Onkar Raut – Video Editor & Content Creator helping brands and creators make content that captures attention.',
  keywords: 'video editor, content creator, reels, YouTube, brand commercials, Onkar Raut, REWIRED',
  authors: [{ name: 'Onkar Raut' }],
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1.0,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
