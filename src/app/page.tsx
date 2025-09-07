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
  InteractiveBike,
  FloatingReserveButton
} from '@/components/sections';


export default function Home() {
  return (
    <ScrollWrapper className="min-h-screen">
      <main className="space-y-0">
        <Navbar />

        <HeroVideo />
        
        <SliceTransition transitionType="disintegrate">
          <ScrollVideo 
            videoSrc="/videos/velareShowcase.mp4"
            title="Revolutionary Design"
            subtitle="Where Form Meets Function"
            sectionId="design-reveal"
          />
        </SliceTransition>
        
        <SliceTransition transitionType="glitch">
          <ScrollVideo 
            videoSrc="/videos/velareShowcase.mp4"
            title="Advanced Technology"
            subtitle="The Future of Electric Mobility"
            sectionId="technology-showcase"
          />
        </SliceTransition>
        
        <SliceTransition transitionType="disintegrate">
          <InteractiveBike />
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
