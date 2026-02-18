'use client';

import { motion } from 'framer-motion';
import { siteContent } from '@/lib/data/contentData';

export function Footer() {
  const { footer } = siteContent;
  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <footer className="border-t border-border bg-black/70 backdrop-blur-sm py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Title */}
          <motion.h3 variants={itemVariants} className="text-2xl font-bold text-white mb-2">
            {footer.course}
          </motion.h3>

          {/* Institution */}
          <motion.p variants={itemVariants} className="text-muted-foreground mb-1">
            {footer.institution}
          </motion.p>

          {/* Year */}
          <motion.p variants={itemVariants} className="text-muted-foreground text-sm mb-6">
            {currentYear}
          </motion.p>

          {/* Subtitle */}
          <motion.div variants={itemVariants}>
            <span className="inline-block px-3 py-1 bg-accent/10 border border-accent/30 rounded-full text-xs text-accent font-medium">
              {footer.subtitle}
            </span>
          </motion.div>

          {/* Divider */}
          <motion.div variants={itemVariants} className="my-8 h-px bg-border" />

          {/* Bottom text */}
          <motion.p variants={itemVariants} className="text-xs text-muted-foreground/60">
            Merci à Vous.
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
}
