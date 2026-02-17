'use client';

import { motion } from 'framer-motion';
import { Zap, TrendingUp } from 'lucide-react';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { siteContent } from '@/lib/data/contentData';

export function ConativeDimension() {
  const { conative } = siteContent;

  const listVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

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
            <Zap className="w-8 h-8 text-accent" />
            <span className="text-accent text-sm font-medium uppercase tracking-widest">
              Dimension 3
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-balance">
            {conative.title}
          </h2>
          <p className="text-lg text-muted-foreground mb-6 text-balance">
            {conative.subtitle}
          </p>
          <p className="text-base text-muted-foreground/80 text-balance">
            {conative.description}
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Key points with icons */}
          <ScrollReveal delay={0.1}>
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-white mb-6">
                Conversion Tactics
              </h3>
              <motion.div
                variants={listVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {conative.keyPoints.map((point, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="flex gap-3 mb-4 p-4 bg-card border border-border rounded-lg hover:border-accent/50 transition-colors group"
                  >
                    <TrendingUp className="w-5 h-5 text-accent flex-shrink-0 mt-1 group-hover:animate-pulse" />
                    <p className="text-sm text-muted-foreground">
                      {point}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </ScrollReveal>

          {/* Insights column */}
          <ScrollReveal delay={0.2}>
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">
                Campaign Impact
              </h3>
              <div className="space-y-4">
                {conative.insights.map((insight, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    className="p-4 bg-gradient-to-r from-accent/10 to-accent/5 border border-accent/20 rounded-lg hover:border-accent/50 transition-all"
                  >
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {insight}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
