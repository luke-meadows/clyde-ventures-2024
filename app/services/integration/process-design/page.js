import AnimationWrapper from '@components/AnimationWrapper';
import CaseStudies from '@components/CaseStudies';
import MainHero from '@components/MainHero';
import Solutions from '@components/Solutions';
import WhyChooseClyde from '@components/WhyChooseClyde';
import Image from 'next/image';

export default function IntegrationPage() {
  return (
    <AnimationWrapper>
      <MainHero hero="process-design"></MainHero>
      <Solutions solution="process-design" />
      <div className="page-break" />
      <CaseStudies caseStudyTopic="Process Design" />
      <div className="page-break" />
      <WhyChooseClyde title="Why Choose Clyde Heading Placeholder" />
      <div className="page-break" />
    </AnimationWrapper>
  );
}
