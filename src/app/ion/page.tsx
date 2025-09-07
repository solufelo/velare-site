import {
  IONHero,
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

export default function IonPage() {
  return (
    <ScrollWrapper className="min-h-screen">
      <main className="space-y-0">
        <Navbar />

        <IONHero />
        
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
