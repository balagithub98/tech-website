import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import heroBg from '../assets/hero-bg.png';

/**
 * Hero component displays the landing section of the homepage. It showcases a
 * beautiful background image and introduces the brand with a headline,
 * sub‑headline and a call to action. The component is responsive and
 * gracefully scales on smaller screens.
 */
const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-24 md:pt-32 pb-16 md:pb-24">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Abstract technology network"
          className="w-full h-full object-cover object-center"
        />
        {/* Overlay for better contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />
      </div>
      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center text-white">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-4">
          Empowering Your Digital Journey
        </h1>
        <p className="max-w-2xl text-base sm:text-lg md:text-xl text-gray-200 mb-8">
          Build modern and responsive applications effortlessly with our cutting‑edge
          technology stack.
        </p>
        <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-6">
          <Link
            to="/features"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary-600 hover:bg-primary-700 text-white font-medium transition-transform transform hover:-translate-y-1 shadow-lg"
          >
            Explore Features
            <ArrowRight className="ml-2" size={18} />
          </Link>
          <Link
            to="/about"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-white hover:bg-white hover:text-primary-700 text-white font-medium transition-transform transform hover:-translate-y-1"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;