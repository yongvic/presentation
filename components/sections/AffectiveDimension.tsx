'use client';

import { motion } from 'framer-motion';
import { Heart, Sparkles } from 'lucide-react';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { siteContent } from '@/lib/data/contentData';

export function AffectiveDimension() {
  const { affective } = siteContent;

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <section className="py-24 px-6 bg-black/50 relative overflow-hidden">
      {/* Accent background */}
      <div className="absolute left-0 bottom-0 w-96 h-96 bg-accent/5 rounded-full transform -translate-x-1/3 blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section header */}
        <ScrollReveal className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <Heart className="w-8 h-8 text-accent" />
            <span className="text-accent text-sm font-medium uppercase tracking-widest">
              Dimension 2
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-balance">
            {affective.title}
          </h2>
          <p className="text-lg text-muted-foreground mb-6 text-balance">
            {affective.subtitle}
          </p>
          <p className="text-base text-muted-foreground/80 text-balance">
            {affective.description}
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left column - Key points and emotions */}
          <ScrollReveal delay={0.1}>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-4">
                  Key Elements
                </h3>
                <ul className="space-y-3">
                  {affective.keyPoints.map((point, index) => (
                    <li
                      key={index}
                      className="flex gap-3 text-muted-foreground text-base"
                    >
                      <Sparkles className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Emotion badges */}
              <div>
                <h3 className="text-2xl font-semibold text-white mb-4">
                  Emotional Triggers
                </h3>
                <div className="flex flex-wrap gap-3">
                  {affective.emotionWords.map((word, index) => (
                    <motion.div
                      key={index}
                      variants={badgeVariants}
                      initial="hidden"
                      whileInView="visible"
                      transition={{
                        delay: index * 0.1,
                        duration: 0.5,
                      }}
                      viewport={{ once: true }}
                      className="px-4 py-2 bg-accent/10 border border-accent/30 rounded-full text-sm text-accent font-medium hover:bg-accent/20 transition-colors"
                    >
                      {word}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right column - Insights */}
          <ScrollReveal delay={0.2}>
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">
                Emotional Strategy
              </h3>
              <div className="space-y-4">
                {affective.insights.map((insight, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -5 }}
                    className="p-4 bg-background border border-border rounded-lg hover:border-accent/50 transition-all hover:shadow-lg hover:shadow-accent/10"
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
