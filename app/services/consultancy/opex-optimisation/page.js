import AnimationWrapper from '@components/AnimationWrapper';
import CaseStudies from '@components/CaseStudies';
import MainHero from '@components/MainHero';
import Solutions from '@components/Solutions';
import WhyChooseClyde from '@components/WhyChooseClyde';
import ContactSection from '@components/contact/ContactSection';

export default function OpexOptimisationPage() {
  return (
    <AnimationWrapper>
      <MainHero hero="opex-optimisation"></MainHero>
      <Solutions solution="opex-optimisation" />
      <div className="page-break" />
      <CaseStudies caseStudyTopic="Opex Optimisation" />
      <div className="page-break" />
      <WhyChooseClyde title="Why Choose Clyde Heading Placeholder" />
      <div className="page-break" />
      <ContactSection />
    </AnimationWrapper>
  );
}
