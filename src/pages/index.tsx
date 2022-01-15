import { AboutSection } from '../components/AboutSection';
import { BannerSection } from '../components/BannerSection';
import { EditionsSection } from '../components/EditionsSection';
import { EducatorsSection } from '../components/EducatorsSection';
import { Footer } from '../components/Footer';
import { MethodSection } from '../components/MethodSection';
import { MissionContentSection } from '../components/MissionContentSection';
import { SubscriptionSection } from '../components/SubscriptionSection';
import { TestimonialsSection } from '../components/TestimonialsSection';

export default function Home() {
  return (
    <main>
      <BannerSection />

      <MissionContentSection />

      <MethodSection />

      <EditionsSection />

      <EducatorsSection />

      <SubscriptionSection />

      <TestimonialsSection />

      <AboutSection />

      <Footer />
    </main>
  );
}
