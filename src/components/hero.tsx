'use client';

import { Button } from '@/components/ui/button';
import type { FC } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero: FC = () => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1], // easeOut
      },
    },
  };

  return (
    <section className="relative h-[calc(100vh-56px)] flex items-center justify-center text-center">
      <motion.div
        className="relative z-10 px-4 sm:px-6 lg:px-8"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          variants={item}
          className="text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl"
        >
          <span className="block">
            Arpit Joshi
          </span>
          <span className="block text-primary">
            Frontend Developer
          </span>
        </motion.h1>

        <motion.div variants={item}>
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
      </motion.div>
    </section>
  );
};

export default Hero;
