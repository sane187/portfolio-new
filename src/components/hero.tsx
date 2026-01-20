import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
import type { FC } from 'react';

const Hero: FC = () => {
  return (
    <section className="relative h-[calc(100vh-56px)] flex items-center justify-center text-center">
      <div className="relative z-10 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
          <span className="block animate-load-in-bounce">Arpit Joshi</span>
          <span className="block text-primary animate-load-in-bounce [animation-delay:200ms]">Frontend Developer</span>
        </h1>
        <p className="mt-4 max-w-md mx-auto text-lg text-muted-foreground sm:text-xl md:mt-5 md:max-w-3xl">
          Crafting modern, responsive, and intelligent web applications from concept to deployment.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button size="lg" asChild>
            <a href="#projects">View My Work</a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="#about">
              More About Me <ArrowDown className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
