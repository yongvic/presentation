'use client';

import { motion } from 'framer-motion';
import { Award, Target, Brain, Heart, Zap } from 'lucide-react';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { siteContent } from '@/lib/data/contentData';

export function SynthesisSection() {
  const { synthesis } = siteContent;

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const takeaways = [
    {
      icon: Brain,
      title: 'Cognitive Strategy',
      description: synthesis.keyTakeaways[0],
    },
    {
      icon: Heart,
      title: 'Affective Connection',
      description: synthesis.keyTakeaways[1],
    },
    {
      icon: Zap,
      title: 'Conative Action',
      description: synthesis.keyTakeaways[2],
    },
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-black to-background relative overflow-hidden">
      {/* Accent elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-accent rounded-full mix-blend-screen blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-accent/50 rounded-full mix-blend-screen blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section header */}
        <ScrollReveal className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Award className="w-8 h-8 text-accent" />
            <span className="text-accent text-sm font-medium uppercase tracking-widest">
              Analysis Summary
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-balance">
            {synthesis.title}
          </h2>
          <p className="text-lg text-muted-foreground mb-6 text-balance">
            {synthesis.subtitle}
          </p>
          <p className="text-base text-muted-foreground/80 max-w-2xl mx-auto text-balance">
            {synthesis.description}
          </p>
        </ScrollReveal>

        {/* Three pillars */}
        <motion.div
          className="grid md:grid-cols-3 gap-8 mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          {takeaways.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -10 }}
                className="p-6 bg-card border border-border rounded-lg hover:border-accent/50 transition-all hover:shadow-lg hover:shadow-accent/10 text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <IconComponent className="w-8 h-8 text-accent" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Conclusion */}
        <ScrollReveal delay={0.3}>
          <div className="p-8 bg-gradient-to-r from-accent/10 to-accent/5 border border-accent/30 rounded-lg text-center">
            <p className="text-lg text-white leading-relaxed text-balance">
              {synthesis.conclusion}
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
