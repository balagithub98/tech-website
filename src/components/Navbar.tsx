import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import DarkModeToggle from './DarkModeToggle';

/**
 * Navbar component renders a responsive navigation bar. It collapses into
 * a hamburger menu on small screens and stays visible on medium/large
 * screens. Active links are styled differently to indicate the current page.
 */
const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);

  // Define your navigation links here for reuse in both mobile and desktop views.
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Features', path: '/features' },
    { name: 'About', path: '/about' },
  ];

  // Helper to compute a className for NavLink based on active state.
  const getNavLinkClass = (isActive: boolean): string => {
    const base = 'block px-3 py-2 rounded-md text-sm font-medium transition-colors';
    const activeClasses = 'text-primary-600 dark:text-primary-400';
    const inactiveClasses = 'text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400';
    return `${base} ${isActive ? activeClasses : inactiveClasses}`;
  };

  return (
    <header className="bg-white/70 backdrop-blur-md dark:bg-gray-900/70 shadow-md fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Brand/logo */}
        <Link
          to="/"
          className="text-xl font-extrabold tracking-tight text-primary-700 dark:text-primary-400"
          onClick={() => setOpen(false)}
        >
          TechSite
        </Link>
        {/* Desktop navigation */}
        <nav className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) => getNavLinkClass(!!isActive)}
              onClick={() => setOpen(false)}
            >
              {link.name}
            </NavLink>
          ))}
        </nav>
        {/* Action buttons: dark mode toggle and mobile menu toggler */}
        <div className="flex items-center space-x-2">
          {/* Dark mode toggle hidden on mobile to keep header compact */}
          <div className="hidden md:block">
            <DarkModeToggle />
          </div>
          {/* Mobile menu toggle button */}
          <button
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-500"
            aria-label="Toggle menu"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
          </button>
        </div>
      </div>
      {/* Mobile menu overlay */}
      {open && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
          <nav className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) => getNavLinkClass(!!isActive)}
                onClick={() => setOpen(false)}
              >
                {link.name}
              </NavLink>
            ))}
          </nav>
          {/* Dark mode toggle on mobile menu */}
          <div className="px-3 py-2 border-t border-gray-200 dark:border-gray-700">
            <DarkModeToggle />
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;