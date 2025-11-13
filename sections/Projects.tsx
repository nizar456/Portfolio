
import React, { useRef } from 'react';
import { Section } from '../components/Section';
import { useOnScreen } from '../hooks/useOnScreen';
import { projects } from '../data/portfolioData';
import { Project } from '../types';

const ProjectCard: React.FC<{ project: Project, index: number }> = ({ project, index }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(ref);

  return (
    <div 
        ref={ref}
        style={{ transitionDelay: `${index * 100}ms` }}
        className={`bg-slate-800/50 rounded-lg overflow-hidden border border-slate-700/50 flex flex-col transition-all duration-500 transform-gpu ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-white">{project.title}</h3>
        <p className="mt-2 text-slate-400 flex-grow">{project.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.techStack.map(tech => (
            <span key={tech} className="bg-slate-700 text-cyan-400 text-xs font-semibold px-2.5 py-1 rounded-full">
              {tech}
            </span>
          ))}
        </div>
        <div className="mt-6 pt-4 border-t border-slate-700 flex items-center gap-4">
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
            GitHub
          </a>
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export const Projects: React.FC = () => {
  return (
    <Section id="projects" title="Featured Projects">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </Section>
  );
};
