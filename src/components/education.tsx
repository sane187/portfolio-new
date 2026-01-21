'use client';

import type { FC } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';

interface Education {
  degree: string;
  institution: string;
  dates: string;
}

interface EducationProps {
  educations: Education[];
}

const Education: FC<EducationProps> = ({ educations }) => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <motion.section
      id="education"
      className="max-w-4xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-bold tracking-tight text-center sm:text-4xl text-primary">
        Education
      </h2>
      <motion.div
        className="mt-8 grid gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        {educations.map((edu, index) => {
          return (
            <motion.div key={index} variants={itemVariants}>
              <Card className="bg-card border-border/60 hover:border-primary/50 transition-colors duration-300">
                <CardHeader className="grid grid-cols-[auto,1fr,auto] items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div className='w-full'>
                    <CardTitle>{edu.degree}</CardTitle>
                    <p className="text-sm text-muted-foreground">{edu.institution}</p>
                  </div>
                  {edu.dates && <div className="text-sm text-muted-foreground justify-self-end">{edu.dates}</div>}
                </CardHeader>
              </Card>
            </motion.div>
          );
        })}
      </motion.div>
    </motion.section>
  );
};

export default Education;
