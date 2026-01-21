import { cvData } from "@/lib/cv-data-structured";
import { projectsData } from "@/lib/projects-data";
import Header from "@/components/header";
import Hero from "@/components/hero";
import About from "@/components/about";
import SkillsChart from "@/components/skills-chart";
import Projects from "@/components/projects";
import Experience from "@/components/experience";
import Education from "@/components/education";
import Footer from "@/components/footer";


export default async function Home() {

  const skillsWithProficiency = cvData.skills.map((skill) => ({
    name: skill,
    proficiency: Math.floor(Math.random() * 16) + 80, // 80-95%
  }));

  const categorizedProjectsList = projectsData.map((project) => {
      return { ...project, categories: [], tags: project.tags.split('_') };
    }
  );

  const educationStrings = cvData.education.map(edu => `${edu.degree} | ${edu.institution} | ${edu.dates}`);

  const experienceStrings = cvData.workExperience.map(exp => 
    `${exp.title} | ${exp.company} | ${exp.location} | ${exp.dates}\n${exp.points.map(p => `- ${p}`).join('\n')}`
  );

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Hero />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24 sm:space-y-32 md:space-y-40 my-24 sm:my-32">
            <About aboutText={cvData.otherDetails.join("\n\n")} />
            <SkillsChart skills={skillsWithProficiency} />
            <Projects projects={categorizedProjectsList} />
            <Experience experiences={experienceStrings} />
            <Education educations={educationStrings} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
