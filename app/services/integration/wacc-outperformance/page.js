import AnimationWrapper from '@components/AnimationWrapper';
import CaseStudies from '@components/CaseStudies';
import MainHero from '@components/MainHero';
import Solutions from '@components/Solutions';
import WhyChooseClyde from '@components/WhyChooseClyde';
import ContactSection from '@components/contact/ContactSection';
export const metadata = {
  title: 'Clyde Ventures - WACC Outperformance Integration',
  description:
    'Discover how Clyde Ventures’ integration services help businesses achieve WACC outperformance and financial efficiency.',
};
export default function IntegrationPage() {
  return (
    <AnimationWrapper>
      <MainHero hero="wacc-outperformance"></MainHero>
      <Solutions solution="wacc-outperformance" />
      <div className="page-break" />
      <CaseStudies caseStudyTopic="WACC Outperformance" />
      <div className="page-break" />
      <WhyChooseClyde title="Why Choose Clyde Heading Placeholder" />
      <div className="page-break" />
      <ContactSection />
    </AnimationWrapper>
  );
}
