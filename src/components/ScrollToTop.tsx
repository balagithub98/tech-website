import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * ScrollToTop listens for location changes and scrolls the window back
 * to the top. This improves user experience when navigating between
 * pages in a single‑page application.
 */
const ScrollToTop: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [pathname]);
  return <>{children}</>;
};

export default ScrollToTop;