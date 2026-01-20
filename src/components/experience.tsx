import type { FC } from 'react';
import { Briefcase } from 'lucide-react';

interface ExperienceProps {
  experiences: string[];
}

const Experience: FC<ExperienceProps> = ({ experiences }) => {
  return (
    <section id="experience" className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold tracking-tight text-center sm:text-4xl text-primary">
        Work Experience
      </h2>
      <div className="relative mt-12">
        <div className="absolute left-6 top-0 h-full w-0.5 bg-border -translate-x-1/2" aria-hidden="true"></div>
        <div className="space-y-12">
          {experiences.map((exp, index) => {
            const lines = exp.split('\n');
            const header = lines[0];
            const descriptionPoints = lines.slice(1).map(l => l.replace(/^- /, ''));

            const [title, company, location, dates] = header.split(' | ');

            return (
              <div key={index} className="relative flex items-start gap-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-card border border-border/60 shadow-sm shrink-0">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1 pt-1.5">
                  <h3 className="text-lg font-semibold text-foreground">{title || 'Job Title'}</h3>
                  <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                    <p className="text-base text-muted-foreground">{company ? `${company.trim()}${location ? `, ${location.trim()}` : ''}` : 'Company'}</p>
                    {dates && (
                      <>
                        <span className="text-muted-foreground">·</span>
                        <p className="text-sm text-muted-foreground">{dates.trim()}</p>
                      </>
                    )}
                  </div>
                  {descriptionPoints.length > 0 && descriptionPoints[0].trim() !== '' && (
                  <ul className="mt-4 space-y-2 text-foreground/80 list-disc list-inside">
                    {descriptionPoints.map((point, i) => (
                      <li key={i}>{point.trim()}</li>
                    ))}
                  </ul>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
