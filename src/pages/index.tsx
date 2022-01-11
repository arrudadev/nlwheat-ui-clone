import { BannerSection } from '../components/BannerSection';
import { EditionsSection } from '../components/EditionsSection';
import { MethodSection } from '../components/MethodSection';
import { MissionContentSection } from '../components/MissionContentSection';

export default function Home() {
  return (
    <main>
      <BannerSection />

      <MissionContentSection />

      <MethodSection />

      <EditionsSection />
    </main>
  );
}
