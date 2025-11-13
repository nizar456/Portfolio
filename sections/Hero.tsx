
import React, { useRef } from 'react';
import { useOnScreen } from '../hooks/useOnScreen';

export const Hero: React.FC = () => {
    const ref = useRef<HTMLDivElement>(null);
    const isVisible = useOnScreen(ref, { threshold: 0.3 });

    return (
        <section id="home" ref={ref} className="min-h-screen flex items-center justify-center py-20">
            <div className={`container mx-auto flex flex-col md:flex-row items-center justify-between gap-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="md:w-1/2 text-center md:text-left">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
                        Hi, I'm <span className="text-cyan-400">Nizar Fikhane</span>
                        <br />
                        Computer Engineering Student
                    </h1>
                    <p className="mt-6 text-lg text-slate-400 max-w-xl mx-auto md:mx-0">
                        Seeking a final-year internship in Software Development. I'm passionate about designing and building robust, scalable applications with a focus on clean code and modern architecture.
                    </p>
                    <div className="mt-8 flex justify-center md:justify-start gap-4">
                        <a href="#contact" className="bg-cyan-500 text-white font-semibold px-6 py-3 rounded-md hover:bg-cyan-600 transition-colors duration-300">
                            Get in Touch
                        </a>
                        <a href="#projects" className="bg-slate-700 text-white font-semibold px-6 py-3 rounded-md hover:bg-slate-600 transition-colors duration-300">
                            View My Work
                        </a>
                    </div>
                </div>
                <div className="md:w-1/3 mt-10 md:mt-0">
                    <div className="relative w-64 h-64 sm:w-80 sm:h-80 mx-auto">
                         <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-full blur-xl animate-pulse"></div>
                         <img 
                             src="assets/images/profil.png" 
                             alt="Nizar Fikhane" 
                             className="relative w-full h-full object-cover rounded-full shadow-2xl border-4 border-slate-800"
                         />
                    </div>
                </div>
            </div>
        </section>
    );
};
