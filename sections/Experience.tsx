
import React, { useRef } from 'react';
import { Section } from '../components/Section';
import { useOnScreen } from '../hooks/useOnScreen';
import { experience } from '../data/portfolioData';
import { ExperienceItem as ExperienceItemType } from '../types';

const ExperienceItem: React.FC<{ item: ExperienceItemType, index: number }> = ({ item, index }) => {
    const ref = useRef<HTMLDivElement>(null);
    const isVisible = useOnScreen(ref);

    return (
        <div 
            ref={ref}
            style={{ transitionDelay: `${index * 150}ms` }}
            className={`relative pl-8 sm:pl-12 transition-all duration-700 transform-gpu ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
        >
            <div className="absolute left-0 top-1 h-full border-l-2 border-slate-700"></div>
            <div className="absolute left-[-6px] top-1 w-4 h-4 bg-slate-700 rounded-full border-4 border-slate-900 transition-colors duration-500 group-hover:bg-cyan-400"></div>
            <div className="mb-10 group">
                <p className="text-sm font-medium text-cyan-400">{item.dateRange}</p>
                <h3 className="mt-1 text-xl font-bold text-white">{item.title}</h3>
                <h4 className="text-md text-slate-400">{item.company}</h4>
                <p className="mt-2 text-slate-400">{item.description}</p>
            </div>
        </div>
    );
};

export const Experience: React.FC = () => {
  return (
    <Section id="experience" title="Work Experience">
      <div className="max-w-3xl mx-auto">
        {experience.map((item, index) => (
          <ExperienceItem key={item.title} item={item} index={index} />
        ))}
      </div>
    </Section>
  );
};
