'use client';

import type { FC } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

interface Skill {
  name: string;
  proficiency: number;
}

interface SkillsChartProps {
  skills: Skill[];
}

const SkillsChart: FC<SkillsChartProps> = ({ skills }) => {

  const getSkillCategory = (skillName: string): string => {
    const categories: Record<string, string[]> = {
      'Languages': ['JavaScript', 'TypeScript', 'Python', 'HTML', 'CSS/Sass'],
      'Frameworks & Libraries': ['React', 'Next.js', 'Redux', 'Tailwind CSS', 'Chart.js', 'Node.js', 'Express.js', 'Flask'],
      'Tools & Platforms': ['PostgreSQL', 'MongoDB', 'Firebase', 'Firebase Firestore', 'Google Cloud Platform (GCP)', 'Docker', 'Kubernetes', 'CI/CD', 'Vercel'],
    };

    for (const category in categories) {
      if (categories[category].includes(skillName)) {
        return category;
      }
    }
    return 'Other';
  };

  const categorizedSkills = skills.reduce((acc, skill) => {
    const category = getSkillCategory(skill.name);
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

  return (
    <section id="skills" className="max-w-6xl mx-auto opacity-0 animate-fade-in-up" style={{ animationDelay: '1.1s' }}>
      <h2 className="text-3xl font-bold tracking-tight text-center sm:text-4xl text-primary">
        Skills & Technologies
      </h2>
      <p className="mt-4 text-lg leading-8 text-center text-muted-foreground">
        A snapshot of the technologies I work with.
      </p>
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {sortedCategorizedSkills.map(([category, skills]) => {
          if (skills.length === 0) return null;
          return (
            <Card key={category} className="flex flex-col bg-accent/5 backdrop-blur-md border border-accent/10 rounded-2xl shadow-lg hover:shadow-primary/10 hover:-translate-y-1 transition-all duration-300">
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
          )
        })}
      </div>
    </section>
  );
};

export default SkillsChart;
