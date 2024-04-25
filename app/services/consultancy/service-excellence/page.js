import AnimationWrapper from '@components/AnimationWrapper';
import CaseStudies from '@components/CaseStudies';
import MainHero from '@components/MainHero';
import Solutions from '@components/Solutions';
import WhyChooseClyde from '@components/WhyChooseClyde';
import ContactSection from '@components/contact/ContactSection';

export default function ServiceExcellencePage() {
  return (
    <AnimationWrapper>
      <MainHero hero="service-excellence"></MainHero>
      <Solutions solution="service-excellence" />
      <div className="page-break" />
      <CaseStudies caseStudyTopic="Service Excellence" />
      <div className="page-break" />
      <WhyChooseClyde title="Why Choose Clyde Heading Placeholder" />
      <div className="page-break" />
      <ContactSection />
    </AnimationWrapper>
  );
}
