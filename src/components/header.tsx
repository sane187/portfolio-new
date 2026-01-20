'use client';

import { useState } from 'react';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const navItems = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container relative flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#" className="flex items-center space-x-2 z-10">
          <span className="font-bold text-lg">Arpit Joshi</span>
        </a>

        <nav className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center gap-8 text-sm font-medium">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group relative text-foreground/70 transition-colors duration-300 hover:text-white"
            >
              <span>{item.label}</span>
              <span className="absolute bottom-[-4px] left-0 h-0.5 w-full origin-center scale-x-0 transform bg-accent transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
            </a>
          ))}
        </nav>
        
        <div className="flex items-center gap-2 z-10">
          <Button asChild className="hidden md:flex">
            <a href="mailto:arpit.joshi.dev@example.com">Contact Me</a>
          </Button>

          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <div className="flex flex-col space-y-6 p-6">
                  <a href="#" className="font-bold text-lg" onClick={() => setIsMobileMenuOpen(false)}>
                    Arpit Joshi
                  </a>
                  <nav className="flex flex-col space-y-4">
                    {navItems.map((item) => (
                      <a
                        key={item.href}
                        href={item.href}
                        className="text-lg transition-colors hover:text-primary"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.label}
                      </a>
                    ))}
                  </nav>
                   <Button asChild>
                    <a href="mailto:arpit.joshi.dev@example.com">Contact Me</a>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
