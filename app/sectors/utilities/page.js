import AnimationWrapper from '@components/AnimationWrapper';
import MainHero from '@components/MainHero';
import WhyChooseClyde from '@components/WhyChooseClyde';
import SectorIntroSection from '@components/sectors/SectorIntroSection';

export default function UtilitiesPage() {
  return (
    <AnimationWrapper>
      <MainHero hero="utilities"></MainHero>
      <SectorIntroSection />
      <div className="page-break" />
      <WhyChooseClyde title="Why Choose Clyde Heading Placeholder" />
      <div className="page-break" />
    </AnimationWrapper>
  );
}
