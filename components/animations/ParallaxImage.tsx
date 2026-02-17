'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

interface ParallaxImageProps {
  src: string;
  alt: string;
  offset?: number;
  className?: string;
  width?: number;
  height?: number;
}

export function ParallaxImage({
  src,
  alt,
  offset = 50,
  className = '',
  width = 800,
  height = 600,
}: ParallaxImageProps) {
  const ref = useRef(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, offset]);

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        quality={85}
        priority={false}
        className="w-full h-auto object-cover"
      />
    </motion.div>
  );
}
