
import React, { useRef } from 'react';
import { useOnScreen } from '../hooks/useOnScreen';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}

export const Section: React.FC<SectionProps> = ({ id, title, children, className }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(ref);

  return (
    <section 
      id={id} 
      ref={ref}
      className={`py-20 md:py-28 min-h-[50vh] transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'} ${className || ''}`}
    >
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16 text-white">
          {title}<span className="text-cyan-400">.</span>
        </h2>
        {children}
      </div>
    </section>
  );
};
