'use client';

import type { FC } from 'react';
import { Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';

interface Experience {
  title: string;
  company: string;
  location: string;
  dates: string;
  description: string[];
}
interface ExperienceProps {
  experiences: Experience[];
}

const Experience: FC<ExperienceProps> = ({ experiences }) => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.section
      id="experience"
      className="max-w-4xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-bold tracking-tight text-center sm:text-4xl text-primary">
        Work Experience
      </h2>
      <div className="relative mt-12">
        <div className="absolute left-6 top-0 h-full w-0.5 bg-border -translate-x-1/2" aria-hidden="true"></div>
        <motion.div
          className="space-y-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
        >
          {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="relative flex items-start gap-6"
                variants={itemVariants}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-card border border-border/60 shadow-sm shrink-0">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1 pt-1.5">
                  <h3 className="text-lg font-semibold text-foreground">{exp.title}</h3>
                  <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                    <p className="text-base text-muted-foreground">{`${exp.company}${exp.location ? `, ${exp.location}` : ''}`}</p>
                    {exp.dates && (
                      <>
                        <span className="text-muted-foreground">·</span>
                        <p className="text-sm text-muted-foreground">{exp.dates}</p>
                      </>
                    )}
                  </div>
                  {exp.description.length > 0 && (
                  <ul className="mt-4 space-y-2 text-foreground/80 list-disc list-inside">
                    {exp.description.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                  )}
                </div>
              </motion.div>
            )
          )}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Experience;
