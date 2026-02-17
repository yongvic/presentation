'use client';

import { motion } from 'framer-motion';
import { PhoneShowcase } from '../PhoneShowcase';
import { ScrollReveal } from '../animations/ScrollReveal';

export function ProductShowcase() {
  const phones = [
    {
      id: 1,
      path: '/phone-1.jpg',
      title: 'Design Premium',
    },
    {
      id: 2,
      path: '/phone-2.jpg',
      title: 'Intelligence IA',
    },
    {
      id: 3,
      path: '/phone-3.jpg',
      title: 'Performance Ultime',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  return (
    <section className="relative min-h-screen bg-black py-20 overflow-hidden">
      {/* Background gradient */}
      <motion.div
        className="absolute inset-0 opacity-30"
        initial={{ backgroundPosition: '0% 0%' }}
        animate={{ backgroundPosition: '100% 100%' }}
        transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse' }}
        style={{
          backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(139, 92, 246, 0.3) 0%, transparent 50%)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-4 text-balance">
              Galaxy S25 Ultra
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto text-balance">
              Découvrez le téléphone qui redéfinit les standards de l'industrie avec son design premium et ses capacités IA révolutionnaires
            </p>
          </div>
        </ScrollReveal>

        {/* Phones Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center justify-items-center mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {phones.map((phone, index) => (
            <PhoneShowcase
              key={phone.id}
              imagePath={phone.path}
              title={phone.title}
              delay={index * 0.2}
            />
          ))}
        </motion.div>

        {/* Features Highlight */}
        <ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
            {[
              {
                title: 'IA Intégrée',
                description: 'Gemini IA au cœur de chaque fonctionnalité pour une expérience personnalisée',
                icon: '🤖',
              },
              {
                title: 'Design Titanium',
                description: 'Matériaux premium avec finition premium pour une durabilité ultime',
                icon: '✨',
              },
              {
                title: 'Écran Immersif',
                description: 'Affichage AMOLED 1440p pour des couleurs éclatantes et des noirs profonds',
                icon: '📱',
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-b from-purple-500/10 to-transparent rounded-2xl p-8 border border-purple-500/20 hover:border-purple-500/50 transition-colors"
                whileHover={{ y: -10, borderColor: 'rgba(139, 92, 246, 0.5)' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
