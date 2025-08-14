import React from 'react';
import { Github, Twitter, Linkedin } from 'lucide-react';

/**
 * Footer component for the site. Displays copyright information and
 * social media links. Icons have hover transitions for subtle interactivity.
 */
const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 dark:bg-gray-950 border-t border-gray-200 dark:border-gray-700 py-6 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          © {new Date().getFullYear()} TechSite. All rights reserved.
        </p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a
            href="#"
            className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a
            href="#"
            className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            aria-label="Twitter"
          >
            <Twitter size={20} />
          </a>
          <a
            href="#"
            className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;