import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import FeaturesPage from './pages/Features';
import About from './pages/About';
import NotFound from './pages/NotFound';

/**
 * Top‑level component for the application. It sets up the global layout
 * including the navigation bar, footer and router definitions. The
 * ScrollToTop component ensures that each route navigates to the top
 * of the page when changed.
 */
const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <ScrollToTop>
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/features" element={<FeaturesPage />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </ScrollToTop>
    </div>
  );
};

export default App;