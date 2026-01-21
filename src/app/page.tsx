import { projectsData } from "@/lib/projects-data";
import Header from "@/components/header";
import Hero from "@/components/hero";
import About from "@/components/about";
import SkillsChart from "@/components/skills-chart";
import Projects from "@/components/projects";
import Experience from "@/components/experience";
import Education from "@/components/education";
import Footer from "@/components/footer";
import { SUMMARY, SKILLS, WORK_EXPERIENCE, EDUCATION } from "@/data/cv-data";

export default async function Home() {
  const categorizedProjectsList = projectsData.map((project) => {
      return { ...project, categories: [], tags: project.tags.split('_') };
    }
  );

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Hero />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24 sm:space-y-32 md:space-y-40 my-24 sm:my-32">
            <About aboutText={SUMMARY.join("\n\n")} />
            <SkillsChart skills={SKILLS} />
            <Projects projects={categorizedProjectsList} />
            <Experience experiences={WORK_EXPERIENCE} />
            <Education educations={EDUCATION} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
