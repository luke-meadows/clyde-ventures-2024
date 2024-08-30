import AnimationWrapper from '@components/AnimationWrapper';
import MainHero from '@components/MainHero';
import WhyChooseClyde from '@components/WhyChooseClyde';
import ContactSection from '@components/contact/ContactSection';
import SectorIntroSection from '@components/sectors/SectorIntroSection';
export const metadata = {
  title: 'Clyde Ventures - Sectors',
  description:
    'Discover the various sectors Clyde Ventures operates in, including utilities, technology, professional services, and more.',
};

export default function SectorsPage({ sector = 'utilities' }) {
  return (
    <AnimationWrapper>
      <MainHero hero={sector}></MainHero>
      <SectorIntroSection sector={sector} />
      <div className="page-break" />
      <WhyChooseClyde />
      <div className="page-break" />
      <ContactSection />
    </AnimationWrapper>
  );
}
