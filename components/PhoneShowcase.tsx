'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface PhoneShowcaseProps {
  imagePath: string;
  title?: string;
  delay?: number;
}

export function PhoneShowcase({ imagePath, title, delay = 0 }: PhoneShowcaseProps) {
  return (
    <motion.div
      className="flex flex-col items-center gap-4"
      initial={{ opacity: 0, scale: 0.8, rotateY: 20 }}
      whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: true, margin: '-100px' }}
    >
      <motion.div
        className="relative w-full max-w-xs"
        whileHover={{ 
          scale: 1.05,
          rotateY: -10,
          rotateX: 5,
        }}
        transition={{ type: 'spring', stiffness: 100 }}
      >
        {/* Phone shadow effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-purple-500/20 to-purple-500/0 rounded-3xl blur-xl"
          animate={{
            y: [0, 20, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Phone container with border glow */}
        <motion.div
          className="relative rounded-3xl overflow-hidden border-8 border-purple-500/30 bg-black shadow-2xl"
          animate={{
            boxShadow: [
              '0 0 20px rgba(139, 92, 246, 0.3)',
              '0 0 40px rgba(139, 92, 246, 0.6)',
              '0 0 20px rgba(139, 92, 246, 0.3)',
            ],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <Image
            src={imagePath}
            alt="Galaxy S25 Ultra"
            width={300}
            height={600}
            className="w-full h-auto object-cover"
            priority
          />

          {/* Shine effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent rounded-3xl"
            animate={{
              x: [-100, 400],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </motion.div>
      </motion.div>

      {/* Title with animation */}
      {title && (
        <motion.h3
          className="text-lg font-semibold text-white text-center mt-4"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: delay + 0.3 }}
          viewport={{ once: true }}
        >
          {title}
        </motion.h3>
      )}
    </motion.div>
  );
}
