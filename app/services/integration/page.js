import AnimationWrapper from '@components/AnimationWrapper';
import CaseStudies from '@components/CaseStudies';
import MainHero from '@components/MainHero';
import Solutions from '@components/Solutions';
import WhyChooseClyde from '@components/WhyChooseClyde';

export default function IntegrationPage() {
  return (
    <AnimationWrapper>
      <MainHero hero="integration"></MainHero>
      <Solutions solution="integration" />
      <div className="page-break" />
      <CaseStudies caseStudyTopic="Integration" />
      <div className="page-break" />
      <WhyChooseClyde title="Why Choose Clyde Heading Placeholder" />
      <div className="page-break" />
    </AnimationWrapper>
  );
}
