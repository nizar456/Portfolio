
import React, { useRef } from 'react';
import { Section } from '../components/Section';
import { useOnScreen } from '../hooks/useOnScreen';
import { technologies } from '../data/portfolioData';
import { Technology } from '../types';

const TechCard: React.FC<{ tech: Technology, index: number }> = ({ tech, index }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(ref);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${index * 100}ms` }}
      className={`bg-slate-800/50 p-6 rounded-lg border border-slate-700/50 hover:border-cyan-400/50 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300 transform-gpu ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="flex items-center gap-4">
        <div className="bg-slate-700 p-2 rounded-md">
          <img src={tech.icon} alt={`${tech.name} logo`} className="w-8 h-8" />
        </div>
        <h3 className="text-xl font-bold text-white">{tech.name}</h3>
      </div>
      <p className="mt-4 text-slate-400">{tech.description}</p>
    </div>
  );
};

export const Technologies: React.FC = () => {
  return (
    <Section id="technologies" title="My Tech Stack">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {technologies.map((tech, index) => (
          <TechCard key={tech.name} tech={tech} index={index} />
        ))}
      </div>
    </Section>
  );
};