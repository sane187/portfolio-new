'use client';

import { Button } from '@/components/ui/button';
import type { FC } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero: FC = () => {
  const name = "Arpit Joshi";
  const title = "Frontend Developer";

  const sentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const letter = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  const subtitleContainer = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: (name.length + title.length) * 0.08 + 0.5,
        duration: 0.5,
      },
    },
  };

  return (
    <section className="relative h-[calc(100vh-56px)] flex items-center justify-center text-center">
      <div className="relative z-10 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
          <motion.span
            className="block"
            variants={sentence}
            initial="hidden"
            animate="visible"
          >
            {name.split("").map((char, index) => (
              <motion.span key={char + "-" + index} variants={letter} className="inline-block">
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </motion.span>
          <motion.span
            className="block text-primary"
            variants={sentence}
            initial="hidden"
            animate="visible"
          >
            {title.split("").map((char, index) => (
              <motion.span key={char + "-" + index} variants={letter} className="inline-block">
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </motion.span>
        </h1>

        <motion.div
          variants={subtitleContainer}
          initial="hidden"
          animate="visible"
        >
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
