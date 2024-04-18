import AnimationWrapper from '@components/AnimationWrapper';
import CaseStudies from '@components/CaseStudies';
import MainHero from '@components/MainHero';
import Solutions from '@components/Solutions';
import WhyChooseClyde from '@components/WhyChooseClyde';

export default function OpexOptimisationPage() {
  return (
    <AnimationWrapper>
      <MainHero hero="business-and-culture-change"></MainHero>
      <Solutions solution="business-and-culture-change" />
      <div className="page-break" />
      <CaseStudies caseStudyTopic="Business & Culture Change" />
      <div className="page-break" />
      <WhyChooseClyde title="Why Choose Clyde Heading Placeholder" />
      <div className="page-break" />
    </AnimationWrapper>
  );
}
