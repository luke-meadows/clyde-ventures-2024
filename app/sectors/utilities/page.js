import AnimationWrapper from '@components/AnimationWrapper';
import MainHero from '@components/MainHero';
import WhyChooseClyde from '@components/WhyChooseClyde';

export default function UtilitiesPage() {
  return (
    <AnimationWrapper>
      <MainHero hero="utilities"></MainHero>
      <div className="page-break" />
      <WhyChooseClyde title="Why Choose Clyde Heading Placeholder" />
      <div className="page-break" />
    </AnimationWrapper>
  );
}
