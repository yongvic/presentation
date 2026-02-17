'use client';

import { motion } from 'framer-motion';
import { teamMembers } from '@/lib/data/teamMembers';
import { siteContent } from '@/lib/data/contentData';
import { ScrollReveal } from '@/components/animations/ScrollReveal';

export function TeamSection() {
  const { team } = siteContent;

  const containerVariants = {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section
      id="team-section"
      className="py-24 px-6 bg-background relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-balance">
            {team.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            {team.description}
          </p>
        </ScrollReveal>

        {/* Team grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {teamMembers.map((member, index) => {
            const IconComponent = member.icon;
            return (
              <motion.div
                key={member.id}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="group bg-card border border-border rounded-lg p-6 hover:bg-card/80 transition-all duration-300"
              >
                <div className="mb-4 p-3 bg-accent/10 rounded-lg inline-block group-hover:bg-accent/20 transition-colors">
                  <IconComponent className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {member.name}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {member.role}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
