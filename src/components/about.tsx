import type { FC } from 'react';

interface AboutProps {
  aboutText: string;
}

const About: FC<AboutProps> = ({ aboutText }) => {
  return (
    <section id="about" className="max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold tracking-tight text-center sm:text-4xl text-primary">
        About Me
      </h2>
      <p className="mt-6 text-lg leading-8 text-center text-muted-foreground">
        A brief introduction to my professional journey and passions.
      </p>
      <div className="mt-8 text-center text-foreground/80 space-y-4">
        {aboutText.split('\n\n').map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
};

export default About;
