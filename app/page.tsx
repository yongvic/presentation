import { HeroSection } from '@/components/sections/HeroSection';
import { VideoSection } from '@/components/sections/VideoSection';
import { CognitiveDimension } from '@/components/sections/CognitiveDimension';
import { AffectiveDimension } from '@/components/sections/AffectiveDimension';
import { ConativeDimension } from '@/components/sections/ConativeDimension';
import { Footer } from '@/components/sections/Footer';
import { ParallaxBackground } from '@/components/ParallaxBackground';

export default function Home() {
  return (
    <>
      {/* Image de fond animée au défilement (parallaxe) */}
      <ParallaxBackground />

      {/* Contenu principal au-dessus du fond */}
      <main className="relative z-10 w-full overflow-x-hidden">
        <HeroSection />
        <VideoSection />
        <CognitiveDimension />
        <AffectiveDimension />
        <ConativeDimension />
        <Footer />
      </main>
    </>
  );
}
