import type { Metadata } from 'next';
import '../globals.css';

export const metadata: Metadata = {
  title: 'Arpit Joshi | CV',
  description: 'CV for Arpit Joshi, a modern portfolio showcasing professional projects and skills.',
};

export default function CvLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;900&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body bg-white text-black">
        {children}
      </body>
    </html>
  );
}
