import React from 'react';
import Hero from '../components/Hero';
import FeaturesSection from '../components/FeaturesSection';
import CTASection from '../components/CTASection';

/**
 * Home page composes the hero, feature and call to action sections
 * to introduce the site to new visitors. All sections are modular
 * components located in the components folder.
 */
const Home: React.FC = () => {
  return (
    <main>
      <Hero />
      <FeaturesSection />
      <CTASection />
    </main>
  );
};

export default Home;