'use client';

import type { FC } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { motion } from 'framer-motion';

interface Skill {
  name: string;
  proficiency: number;
  category: string;
}

interface SkillsChartProps {
  skills: Skill[];
}

const SkillsChart: FC<SkillsChartProps> = ({ skills }) => {
  const categorizedSkills = skills.reduce((acc, skill) => {
    const category = skill.category;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  const categoryOrder = ['Languages', 'Frameworks & Libraries', 'Tools & Platforms', 'AI/ML', 'Other'];
  
  const sortedCategorizedSkills = Object.entries(categorizedSkills).sort(([a], [b]) => {
      const indexA = categoryOrder.indexOf(a);
      const indexB = categoryOrder.indexOf(b);
      // Put 'Other' at the end
      if (indexA === -1) return 1;
      if (indexB === -1) return -1;
      return indexA - indexB;
  });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: 'spring',
      },
    },
  };


  return (
    <motion.section
      id="skills"
      className="max-w-6xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-bold tracking-tight text-center sm:text-4xl text-primary">
        Skills & Technologies
      </h2>
      <p className="mt-4 text-lg leading-8 text-center text-muted-foreground">
        A snapshot of the technologies I work with.
      </p>
      <motion.div
        className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.1 }}
      >
        {sortedCategorizedSkills.map(([category, skills]) => {
          if (skills.length === 0) return null;
          return (
            <motion.div key={category} variants={itemVariants}>
              <Card className="flex flex-col bg-accent/5 backdrop-blur-md border border-accent/10 rounded-2xl shadow-lg hover:shadow-primary/10 hover:-translate-y-1 transition-all duration-300 h-full">
                <CardHeader>
                  <CardTitle className="text-xl">{category}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-5 flex-grow">
                  {skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-1.5">
                        <p className="text-sm font-medium text-foreground/90">{skill.name}</p>
                        <p className="text-xs text-muted-foreground">{skill.proficiency}%</p>
                      </div>
                      <Progress value={skill.proficiency} className="h-2" aria-label={`${skill.name} proficiency`} />
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          )
        })}
      </motion.div>
    </motion.section>
  );
};

export default SkillsChart;
