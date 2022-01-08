import { BannerSection } from '../components/BannerSection';
import { MethodSection } from '../components/MethodSection';
import { MissionContentSection } from '../components/MissionContentSection';

export default function Home() {
  return (
    <main>
      <BannerSection />

      <MissionContentSection />

      <MethodSection />
    </main>
  );
}
