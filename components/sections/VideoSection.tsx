'use client';

import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { siteContent } from '@/lib/data/contentData';

export function VideoSection() {
  const { videoSection } = siteContent;

  return (
    <section className="py-24 px-6 bg-black/50 relative">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <ScrollReveal className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-balance">
            {videoSection.title}
          </h2>
          <p className="text-lg text-muted-foreground text-balance">
            {videoSection.description}
          </p>
        </ScrollReveal>

        {/* Video embed */}
        <ScrollReveal delay={0.2}>
          <div className="relative w-full aspect-video rounded-lg overflow-hidden border border-border/50 hover:border-border transition-colors">
            <iframe
              className="absolute inset-0 w-full h-full"
              src={`https://www.youtube.com/embed/${videoSection.youtubeEmbedId}`}
              title={videoSection.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
