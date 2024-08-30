import AnimationWrapper from '@components/AnimationWrapper';
import CaseStudies from '@components/CaseStudies';
import MainHero from '@components/MainHero';
import Solutions from '@components/Solutions';
import WhyChooseClyde from '@components/WhyChooseClyde';
import ContactSection from '@components/contact/ContactSection';
export const metadata = {
  title: 'Clyde Ventures - Consultancy Services',
  description:
    'Discover Clyde Ventures’ consultancy services designed to drive growth, optimize operations, and achieve service excellence.',
};

export default function ConsultancyPage() {
  return (
    <AnimationWrapper>
      <MainHero hero="consultancy"></MainHero>
      <Solutions solution="consultancy" />
      <div className="page-break" />
      <CaseStudies caseStudyTopic="Consultancy" />
      <div className="page-break" />
      <WhyChooseClyde title="Why Choose Clyde Heading Placeholder" />
      <div className="page-break" />
      <ContactSection />
    </AnimationWrapper>
  );
}
