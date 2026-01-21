'use client';

import { Button } from '@/components/ui/button';
import type { FC } from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

const Hero: FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <section className="relative h-[calc(100vh-56px)] flex items-center justify-center text-center">
      <motion.div
        className="relative z-10 px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          variants={itemVariants}
          className="text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl"
        >
          <span className="block">Arpit Joshi</span>
          <span className="block text-primary">Frontend Developer</span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="mt-4 max-w-md mx-auto text-lg text-muted-foreground sm:text-xl md:mt-5 md:max-w-3xl"
        >
          Crafting modern, responsive, and intelligent web applications from concept to deployment.
        </motion.p>
        
        <motion.div
          variants={itemVariants}
          className="mt-8 flex flex-wrap justify-center gap-4"
        >
          <Button size="lg" asChild>
            <a href="#projects">View My Work</a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a
              href="/api/download-cv"
            >
              Download CV
              <Download className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
