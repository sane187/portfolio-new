import {
  NAME,
  ROLE,
  EMAIL,
  GITHUB,
  LINKEDIN,
  SUMMARY,
  EDUCATION,
  WORK_EXPERIENCE,
  SKILLS,
} from '@/data/cv-data';
import { Globe, Github, Linkedin, Mail } from 'lucide-react';

export default function CVPage() {
  // A simple, print-friendly CV layout
  return (
    <main className="p-8 sm:p-12 md:p-16 bg-background text-foreground font-body max-w-5xl mx-auto">
      <header className="flex flex-col items-center text-center border-b pb-8 mb-8">
        <h1 className="text-5xl font-bold tracking-tight text-primary">{NAME}</h1>
        <h2 className="text-2xl font-medium text-muted-foreground mt-2">{ROLE}</h2>
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-6 text-sm">
          <a href={`mailto:${EMAIL}`} className="flex items-center gap-2 hover:text-primary">
            <Mail className="w-4 h-4" />
            {EMAIL}
          </a>
          <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary">
            <Linkedin className="w-4 h-4" />
            linkedin.com/in/arpitjoshi
          </a>
          <a href={GITHUB} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary">
            <Github className="w-4 h-4" />
            github.com/arpitjoshi
          </a>
        </div>
      </header>

      <section className="mb-12">
        <h3 className="text-2xl font-bold text-primary border-b-2 border-primary/50 pb-2 mb-4">Summary</h3>
        <div className="space-y-4 text-foreground/80">
          {SUMMARY.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h3 className="text-2xl font-bold text-primary border-b-2 border-primary/50 pb-2 mb-6">Work Experience</h3>
        <div className="space-y-8">
          {WORK_EXPERIENCE.map((exp, index) => (
            <div key={index}>
              <h4 className="text-xl font-semibold">{exp.title}</h4>
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 text-muted-foreground">
                <p className="font-medium text-foreground/90">{exp.company}</p>
                <span>·</span>
                <p>{exp.location}</p>
                <span>·</span>
                <p>{exp.dates}</p>
              </div>
              <ul className="mt-4 space-y-2 text-foreground/80 list-disc list-inside">
                {exp.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h3 className="text-2xl font-bold text-primary border-b-2 border-primary/50 pb-2 mb-6">Education</h3>
        <div className="space-y-6">
          {EDUCATION.map((edu, index) => (
            <div key={index}>
              <h4 className="text-xl font-semibold">{edu.degree}</h4>
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 text-muted-foreground">
                <p className="font-medium text-foreground/90">{edu.institution}</p>
                <span>·</span>
                <p>{edu.dates}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-2xl font-bold text-primary border-b-2 border-primary/50 pb-2 mb-4">Skills</h3>
        <ul className="columns-2 sm:columns-3 md:columns-4 gap-x-8 text-foreground/80">
          {SKILLS.map(skill => <li key={skill.name} className='mb-1'>{skill.name}</li>)}
        </ul>
      </section>
    </main>
  );
}
