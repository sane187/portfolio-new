import type { FC } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { GraduationCap } from 'lucide-react';

interface EducationProps {
  educations: string[];
}

const Education: FC<EducationProps> = ({ educations }) => {
  return (
    <section id="education" className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold tracking-tight text-center sm:text-4xl text-primary">
        Education
      </h2>
      <div className="mt-8 grid gap-8">
        {educations.map((edu, index) => {
          const [degree, institution, dates] = edu.split(' | ');
          return (
            <Card key={index} className="bg-card border-border/60 hover:border-primary/50 transition-colors duration-300">
              <CardHeader className="grid grid-cols-[auto,1fr,auto] items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div className='w-full'>
                  <CardTitle>{degree || 'Degree'}</CardTitle>
                  <p className="text-sm text-muted-foreground">{institution || 'Institution'}</p>
                </div>
                {dates && <div className="text-sm text-muted-foreground justify-self-end">{dates}</div>}
              </CardHeader>
            </Card>
          );
        })}
      </div>
    </section>
  );
};

export default Education;
