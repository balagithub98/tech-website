import React from 'react';
import FeaturesSection from '../components/FeaturesSection';

/**
 * Features page provides more comprehensive information about the core
 * capabilities of the technology stack. Currently it reuses the
 * FeaturesSection component. Additional content can be added here.
 */
const FeaturesPage: React.FC = () => {
  return (
    <main className="pt-24 md:pt-28">
      <section className="py-12 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold mb-4 text-gray-800 dark:text-gray-100">
            Explore Our Features
          </h1>
          <p className="max-w-xl mx-auto text-gray-600 dark:text-gray-400">
            Dive deeper into the tools and technologies that make building modern web apps a breeze.
          </p>
        </div>
      </section>
      <FeaturesSection />
    </main>
  );
};

export default FeaturesPage;