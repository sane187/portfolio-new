import { cvData } from "@/lib/cv-data";
import { projectsData } from "@/lib/projects-data";
import Header from "@/components/header";
import Hero from "@/components/hero";
import About from "@/components/about";
import SkillsChart from "@/components/skills-chart";
import Projects from "@/components/projects";
import Experience from "@/components/experience";
import Education from "@/components/education";
import Footer from "@/components/footer";

type ParseCvOutput = {
  education: string[];
  workExperience: string[];
  skills: string[];
  otherDetails: string[];
};

const mockParsedCv: ParseCvOutput = {
  education: [
    'Bachelor of Engineering in Computer Science | University of Pune | 2014 - 2018',
  ],
  workExperience: [
    `Lead Software Engineer | Tech Innovators Inc. | Pune, IN | Jan 2021 - Present
- Led a team of 4 developers in building a SaaS platform for project management, resulting in a 30% increase in team productivity.
- Architected and implemented a microservices-based backend using Node.js, Express, and Docker, deployed on Google Kubernetes Engine.
- Integrated a GenAI-powered feature for automatic task categorization, reducing manual effort by 50%.
- Mentored junior developers and conducted code reviews to maintain high code quality standards.`,
    `Full-Stack Developer | Digital Solutions Co. | Mumbai, IN | Jun 2018 - Dec 2020
- Developed and maintained client-side applications using React, Redux, and TypeScript.
- Built RESTful APIs with Node.js and connected to PostgreSQL databases.
- Collaborated with UX/UI designers to create responsive and accessible user interfaces.
- Improved application performance by 20% by optimizing API calls and implementing code-splitting.`
  ],
  skills: [
    'JavaScript', 'TypeScript', 'Python', 'HTML', 'CSS/Sass',
    'React', 'Next.js', 'Redux', 'Tailwind CSS', 'Chart.js',
    'Node.js', 'Express.js', 'Flask',
    'PostgreSQL', 'MongoDB', 'Firebase Firestore',
    'Google Cloud Platform (GCP)', 'Firebase', 'Docker', 'Kubernetes', 'CI/CD', 'Vercel',
  
  ],
  otherDetails: [
    "A highly motivated Full-Stack Developer with 5+ years of experience in designing, developing, and deploying modern web applications. Proficient in JavaScript, React, Node.js, and cloud technologies like Firebase and Google Cloud. Passionate about leveraging AI/ML to build intelligent and user-friendly solutions.",
    "I'm a lifelong learner, always excited to pick up new technologies and tackle challenging problems. When I'm not coding, I enjoy exploring new hiking trails and contributing to open-source projects."
  ]
};

export default async function Home() {
  const parsedCv: ParseCvOutput = mockParsedCv;

  const skillsWithProficiency = parsedCv.skills.map((skill) => ({
    name: skill,
    proficiency: Math.floor(Math.random() * 16) + 80, // 80-95%
  }));

  const categorizedProjectsList = projectsData.map((project) => {
      return { ...project, categories: [], tags: project.title.split(' ').filter(t => t.length > 2) };
    }
  );

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Hero />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24 sm:space-y-32 md:space-y-40 my-24 sm:my-32">
            <About aboutText={parsedCv.otherDetails.join("\n\n")} />
            <SkillsChart skills={skillsWithProficiency} />
            <Projects projects={categorizedProjectsList} />
            <Experience experiences={parsedCv.workExperience} />
            <Education educations={parsedCv.education} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
