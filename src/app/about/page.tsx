import {
  HeroVideo,
  ScrollVideo,
  SliceTransition,
  DetailGrid,
  StorySection,
  Outro,
  ScrollWrapper,
  Navbar,
  Footer,
  FloatingReserveButton
} from '@/components/sections';

export default function AboutPage() {
  return (
    <ScrollWrapper className="min-h-screen">
      <main className="space-y-0">
        <Navbar />

        <HeroVideo />
        
        <SliceTransition transitionType="disintegrate">
          <ScrollVideo 
            videoSrc="/videos/velareShowcase.mp4"
            title="About Velare"
            subtitle="Pioneering the Future of Electric Mobility"
            sectionId="about-showcase"
          />
        </SliceTransition>
        
        <SliceTransition transitionType="particle">
          <DetailGrid />
        </SliceTransition>
        
        <SliceTransition transitionType="glitch">
          <StorySection />
        </SliceTransition>
        
        <SliceTransition transitionType="morph">
          <Outro />
        </SliceTransition>
        <Footer />
      </main>
      
      {/* Floating Reserve Button */}
      <FloatingReserveButton />
    </ScrollWrapper>
  );
}
