'use client';

import { cvData } from '@/lib/cv-data-structured';
import { Button } from '@/components/ui/button';
import { Download, Mail, Linkedin, Github } from 'lucide-react';

const CvPage = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="max-w-4xl mx-auto p-8 sm:p-12 print:p-8 bg-white">
      <header className="flex justify-between items-start mb-8 print:mb-6">
        <div>
          <h1 className="text-4xl font-bold text-gray-800">{cvData.name}</h1>
          <p className="text-lg text-gray-600">Frontend Developer</p>
        </div>
        <div className="flex items-center gap-4 print:hidden">
            <Button onClick={handlePrint} >
                Download PDF
                <Download className="ml-2 h-4 w-4" />
            </Button>
        </div>
      </header>

      <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-8 print:mb-6 text-sm text-gray-700">
        <div className="flex flex-wrap gap-x-6 gap-y-2">
            <a href={`mailto:${cvData.contact.email}`} className="flex items-center gap-2 hover:text-primary">
                <Mail className="w-4 h-4"/>
                {cvData.contact.email}
            </a>
            <a href={cvData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary">
                <Linkedin className="w-4 h-4"/>
                {cvData.contact.linkedin.replace('https://', '')}
            </a>
            <a href={cvData.contact.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary">
                <Github className="w-4 h-4"/>
                {cvData.contact.github.replace('https://', '')}
            </a>
        </div>
        <div>{cvData.contact.location}</div>
      </div>

      <main>
        <section className="mb-8 print:mb-6">
          <h2 className="text-xl font-bold border-b-2 border-gray-300 pb-2 mb-4 text-gray-800">Summary</h2>
          {cvData.otherDetails.map((para, index) => (
            <p key={index} className="text-gray-700 mb-2">{para}</p>
          ))}
        </section>

        <section className="mb-8 print:mb-6">
          <h2 className="text-xl font-bold border-b-2 border-gray-300 pb-2 mb-4 text-gray-800">Work Experience</h2>
          <div className="space-y-6">
            {cvData.workExperience.map((exp, index) => (
              <div key={index}>
                <div className="flex justify-between items-baseline">
                  <h3 className="text-lg font-semibold text-gray-800">{exp.title}</h3>
                  <div className="text-sm text-gray-600">{exp.dates}</div>
                </div>
                <div className="flex justify-between items-baseline mb-2">
                  <p className="text-md text-gray-700">{exp.company}</p>
                  <p className="text-sm text-gray-600">{exp.location}</p>
                </div>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  {exp.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8 print:mb-6">
          <h2 className="text-xl font-bold border-b-2 border-gray-300 pb-2 mb-4 text-gray-800">Education</h2>
          <div className="space-y-4">
            {cvData.education.map((edu, index) => (
              <div key={index}>
                <div className="flex justify-between items-baseline">
                  <h3 className="text-lg font-semibold text-gray-800">{edu.degree}</h3>
                  <div className="text-sm text-gray-600">{edu.dates}</div>
                </div>
                <p className="text-md text-gray-700">{edu.institution}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold border-b-2 border-gray-300 pb-2 mb-4 text-gray-800">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {cvData.skills.map((skill, index) => (
                <span key={index} className="bg-gray-200 text-gray-800 text-sm font-medium px-3 py-1 rounded-full">{skill}</span>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default CvPage;
