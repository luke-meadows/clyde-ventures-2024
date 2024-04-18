import AnimationWrapper from '@components/AnimationWrapper';
import CaseStudies from '@components/CaseStudies';
import MainHero from '@components/MainHero';
import Solutions from '@components/Solutions';
import WhyChooseClyde from '@components/WhyChooseClyde';

export default function TopLineGrowthPage() {
  return (
    <AnimationWrapper>
      <MainHero hero="top-line-growth"></MainHero>
      <Solutions solution="top-line-growth" />
      <div className="page-break" />
      <CaseStudies caseStudyTopic="Top Line Growth" />
      <div className="page-break" />
      <WhyChooseClyde title="Why Choose Clyde Heading Placeholder" />
      <div className="page-break" />
    </AnimationWrapper>
  );
}
