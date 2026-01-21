'use client';

import { Button } from '@/components/ui/button';
import type { FC } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero: FC = () => {
  const title = "Arpit Joshi";
  const subtitle = "Frontend Developer";

  // This container variant now accepts a delay for its children's animation.
  const container = (delay: number = 0) => ({
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.06,
        delayChildren: delay,
      },
    },
  });

  const letterVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        ease: 'easeOut',
        duration: 0.4,
      },
    },
  };
  
  const descriptionAndButtons = {
      hidden: { opacity: 0, y: 20 },
      visible: {
          opacity: 1,
          y: 0,
          transition: {
              delay: 1.3, // Delay to start after text animation
              duration: 0.6,
              ease: "easeInOut"
          },
      },
  };

  // This component animates each letter of the text.
  const AnimatedLetters = ({ text, className, delay = 0 }: { text: string, className?: string, delay?: number }) => (
    <motion.span
      className={`whitespace-nowrap ${className}`}
      variants={container(delay)}
      initial="hidden"
      animate="visible"
    >
      {text.split("").map((char, index) => (
        <motion.span key={index} variants={letterVariant} className="inline-block">
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </motion.span>
  );

  return (
    <section className="relative h-[calc(100vh-56px)] flex items-center justify-center text-center">
      <div className="relative z-10 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
          <span className="block">
            <AnimatedLetters text={title} />
          </span>
          <span className="block text-primary">
            {/* A small delay is added for a lagging effect */}
            <AnimatedLetters text={subtitle} delay={0.3} />
          </span>
        </h1>

        <motion.div initial="hidden" animate="visible" variants={descriptionAndButtons}>
          <p className="mt-4 max-w-md mx-auto text-lg text-muted-foreground sm:text-xl md:mt-5 md:max-w-3xl">
            Crafting modern, responsive, and intelligent web applications from concept to deployment.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button size="lg" asChild>
              <a href="#projects">View My Work</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="/cv" target="_blank" rel="noopener noreferrer">
                View CV
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
