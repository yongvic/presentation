import { HeroSection } from '@/components/sections/HeroSection';
import { VideoSection } from '@/components/sections/VideoSection';
import { CognitiveDimension } from '@/components/sections/CognitiveDimension';
import { AffectiveDimension } from '@/components/sections/AffectiveDimension';
import { ConativeDimension } from '@/components/sections/ConativeDimension';
import { Footer } from '@/components/sections/Footer';

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden">
      <HeroSection />
      <VideoSection />
      <CognitiveDimension />
      <AffectiveDimension />
      <ConativeDimension />
      <Footer />
    </main>
  );
}
