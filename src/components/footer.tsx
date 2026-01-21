import { Github, Linkedin } from 'lucide-react';
import type { FC } from 'react';

const Footer: FC = () => {
  return (
    <footer className="bg-card/50 border-t border-border/60 opacity-0 animate-fade-in-up" style={{ animationDelay: '1.9s' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center py-6 gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Arpit Joshi. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="https://github.com/arpitjoshi" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </a>
            <a href="https://linkedin.com/in/arpitjoshi" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
