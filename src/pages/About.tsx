import React from 'react';
import { CheckCircle } from 'lucide-react';

/**
 * About page explains the philosophy and tools behind this project. It also
 * highlights the technologies used in building the site in an easy‑to‑read
 * list with icons.
 */
const About: React.FC = () => {
  const technologies = [
    {
      name: 'React 18',
      description: 'Modern component‑based UI library with hooks for building dynamic interfaces.',
    },
    {
      name: 'TypeScript',
      description: 'Typed superset of JavaScript providing type safety and improved developer tooling.',
    },
    {
      name: 'Vite',
      description: 'Next‑generation build tool that offers instant reloads and fast builds.',
    },
    {
      name: 'Tailwind CSS',
      description: 'Utility‑first CSS framework enabling rapid styling and responsive layouts.',
    },
    {
      name: 'React Router DOM v7',
      description: 'Declarative routing library for building single‑page applications.',
    },
    {
      name: 'Lucide React',
      description: 'Collection of beautiful, customizable SVG icons for React.',
    },
  ];

  return (
    <main className="pt-24 md:pt-28 bg-white dark:bg-gray-900">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold mb-6 text-gray-800 dark:text-gray-100 text-center">
          About This Project
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
          This demonstration website showcases a modern technology stack used
          to build responsive, interactive and accessible web applications.
          The tools and libraries integrated here are carefully chosen to provide
          a delightful development experience while delivering fast, production‑ready
          code. Below is a brief overview of each technology powering this site.
        </p>
        <ul className="space-y-6">
          {technologies.map((tech) => (
            <li key={tech.name} className="flex items-start">
              <CheckCircle className="flex-shrink-0 text-primary-600 dark:text-primary-400 mt-1" size={20} />
              <div className="ml-3">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">{tech.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{tech.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
};

export default About;