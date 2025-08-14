import React, { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

/**
 * DarkModeToggle toggles between light and dark themes by adding or removing
 * the `dark` class on the HTML root. It persists the selected theme in
 * localStorage so the preference is remembered across sessions.
 */
const DarkModeToggle: React.FC = () => {
  const [isDark, setIsDark] = useState<boolean>(() => {
    // Initialize dark mode based on user preference or saved value.
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('color-theme');
      if (stored) return stored === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('color-theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('color-theme', 'light');
    }
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-500"
      aria-label="Toggle dark mode"
    >
      {isDark ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
};

export default DarkModeToggle;