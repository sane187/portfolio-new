import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: 'Arpit Joshi | Portfolio',
  description: 'A modern portfolio showcasing professional projects and skills by Arpit Joshi.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;900&display=swap" rel="stylesheet" />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-body antialiased"
        )}
      >
        <div className="fixed inset-0 -z-10 h-full w-full bg-background bg-[linear-gradient(to_right,#ffffff0c_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0c_1px,transparent_1px)] bg-[size:2rem_2rem]" />
        <div className="fixed inset-0 -z-20 h-full w-full bg-transparent bg-[radial-gradient(ellipse_at_top,hsl(var(--primary)/0.15),transparent_70%)]" aria-hidden="true" />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
