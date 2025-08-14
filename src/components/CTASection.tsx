import React from 'react';
import { Link } from 'react-router-dom';

/**
 * CTA (Call to Action) section encourages users to take the next step. It
 * displays a concise message and a primary button to direct users to a
 * particular page. The background and text colors adapt automatically
 * based on the current color scheme.
 */
const CTASection: React.FC = () => {
  return (
    <section className="py-12 bg-primary-600 dark:bg-primary-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
        <h3 className="text-2xl font-semibold">Ready to build something amazing?</h3>
        <Link
          to="/about"
          className="inline-flex items-center px-6 py-3 rounded-md bg-white text-primary-700 font-medium hover:bg-gray-50 transition-colors shadow"
        >
          Get Started
        </Link>
      </div>
    </section>
  );
};

export default CTASection;