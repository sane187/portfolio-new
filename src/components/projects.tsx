'use client';

import type { FC } from 'react';
import ProjectCard from './project-card';
import { motion } from 'framer-motion';

interface Project {
  id: string;
  title: string;
  description: string;
  imageId: string;
  link: string;
  tags: string[];
}

interface ProjectsProps {
  projects: Project[];
}

const Projects: FC<ProjectsProps> = ({ projects }) => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.section
      id="projects"
      className="max-w-6xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-primary">
          My Projects
        </h2>
        <p className="mt-4 text-lg leading-8 text-muted-foreground">
          A selection of my work, showcasing my skills in web development and design.
        </p>
      </div>
      <motion.div
        className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.1 }}
      >
        {projects.map((project) => (
          <motion.div key={project.id} variants={itemVariants}>
            <ProjectCard {...project} />
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Projects;
