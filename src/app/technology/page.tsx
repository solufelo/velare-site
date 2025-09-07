import {
  TechnologyHero,
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

export default function TechnologyPage() {
  return (
    <ScrollWrapper className="min-h-screen">
      <main className="space-y-0">
        <Navbar />

        <TechnologyHero />
        
        <SliceTransition transitionType="disintegrate">
          <ScrollVideo 
            videoSrc="/videos/velareShowcase.mp4"
            title="Advanced Technology"
            subtitle="The Future of Electric Mobility"
            sectionId="technology-showcase"
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
