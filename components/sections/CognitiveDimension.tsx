'use client';

import { motion } from 'framer-motion';
import { Brain, CheckCircle } from 'lucide-react';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { siteContent } from '@/lib/data/contentData';

export function CognitiveDimension() {
  const { cognitive } = siteContent;

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section className="py-24 px-6 bg-background relative overflow-hidden">
      {/* Accent background */}
      <div className="absolute right-0 top-1/2 w-96 h-96 bg-accent/5 rounded-full transform translate-x-1/3 -translate-y-1/2 blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section header */}
        <ScrollReveal className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <Brain className="w-8 h-8 text-accent" />
            <span className="text-accent text-sm font-medium uppercase tracking-widest">
              Dimension 1
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-balance">
            {cognitive.title}
          </h2>
          <p className="text-lg text-muted-foreground mb-6 text-balance">
            {cognitive.subtitle}
          </p>
          <p className="text-base text-muted-foreground/80 text-balance">
            {cognitive.description}
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Key points */}
          <ScrollReveal delay={0.1}>
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-white mb-6">
                Points clés de messagerie
              </h3>
              {cognitive.keyPoints.map((point, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-3"
                >
                  <div className="flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-accent mt-1" />
                  </div>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    {point}
                  </p>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>

          {/* Insights */}
          <ScrollReveal delay={0.2}>
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-white mb-6">
                Perspectives stratégiques
              </h3>
              {cognitive.insights.map((insight, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 10 }}
                  className="p-4 bg-card border border-border rounded-lg hover:border-accent/50 transition-colors"
                >
                  <p className="text-sm text-muted-foreground">
                    {insight}
                  </p>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
