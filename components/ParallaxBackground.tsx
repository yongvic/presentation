'use client';

import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';

export function ParallaxBackground() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollY } = useScroll();

  // Parallaxe : l'image se déplace vers le haut plus lentement que le scroll
  const y = useTransform(scrollY, [0, 3000], ['0%', '-30%']);
  const scale = useTransform(scrollY, [0, 1500], [1, 1.15]);
  const opacity = useTransform(scrollY, [0, 800, 2000, 3000], [0.18, 0.25, 0.18, 0.1]);

  return (
    <div
      ref={ref}
      className="fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    >
      <motion.div
        className="absolute inset-0 w-full h-full"
        style={{ y, scale }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/OIP.webp"
          alt=""
          className="w-full h-full object-cover"
          style={{ willChange: 'transform' }}
        />
      </motion.div>

      {/* Overlay sombre pour garder le texte lisible */}
      <motion.div
        className="absolute inset-0 bg-black"
        style={{ opacity }}
      />

      {/* Overlay gradient permanent pour assurer la lisibilité */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70" />
    </div>
  );
}
