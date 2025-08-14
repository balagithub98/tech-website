import React from 'react';
import { Shield, ShoppingCart, Star, Rocket } from 'lucide-react';

/**
 * A type representing a single feature card's configuration.
 */
interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

/**
 * A reusable card component for displaying a feature with an icon, title
 * and description. On hover the card lifts slightly and the icon pulses
 * to provide a delightful micro‑interaction.
 */
const FeatureCard: React.FC<Feature> = ({ icon, title, description }) => (
  <div className="group bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md border border-gray-200 dark:border-gray-700 transition-transform transform hover:-translate-y-1 hover:shadow-lg">
    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900 mb-4 transition-transform group-hover:scale-110">
      <div className="text-primary-600 dark:text-primary-400">
        {icon}
      </div>
    </div>
    <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-100">{title}</h3>
    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{description}</p>
  </div>
);

/**
 * Section component containing a set of feature cards arranged in a
 * responsive grid. It introduces the core benefits of the technology
 * stack.
 */
const FeaturesSection: React.FC = () => {
  const features: Feature[] = [
    {
      icon: <Shield size={24} />, // shield icon representing security
      title: 'Secure by Design',
      description: 'Built with modern best practices to ensure your data remains protected and your application stays robust.',
    },
    {
      icon: <ShoppingCart size={24} />, // cart icon representing e‑commerce support
      title: 'E‑Commerce Ready',
      description: 'Seamlessly integrate your store and offer an exceptional shopping experience across devices.',
    },
    {
      icon: <Star size={24} />, // star icon representing quality
      title: 'Top‑Quality Components',
      description: 'Reusable, accessible and beautiful components help you build polished interfaces in no time.',
    },
    {
      icon: <Rocket size={24} />, // rocket icon representing performance
      title: 'Blazing Fast',
      description: 'Optimized bundle sizes and modern tooling deliver lightning‑fast load times and smooth interactions.',
    },
  ];

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-800 dark:text-gray-100 text-center mb-4">
          Powerful Features
        </h2>
        <p className="text-center max-w-2xl mx-auto text-gray-600 dark:text-gray-400 mb-12">
          Everything you need to craft beautiful applications, with performance and security baked in.
        </p>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;