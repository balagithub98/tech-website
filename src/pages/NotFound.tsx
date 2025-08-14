import React from 'react';
import { Link } from 'react-router-dom';

/**
 * NotFound page is displayed whenever the user navigates to a route that
 * doesn’t exist. It provides a friendly message and a link back to the
 * homepage.
 */
const NotFound: React.FC = () => {
  return (
    <main className="min-h-[60vh] flex flex-col items-center justify-center px-4 py-16">
      <h1 className="text-6xl font-extrabold text-primary-600 dark:text-primary-400 mb-4">
        404
      </h1>
      <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 text-center">
        Oops! The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        to="/"
        className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-md font-medium"
      >
        Return Home
      </Link>
    </main>
  );
};

export default NotFound;