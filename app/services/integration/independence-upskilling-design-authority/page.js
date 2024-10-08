import AnimationWrapper from '@components/AnimationWrapper';
import CaseStudies from '@components/CaseStudies';
import MainHero from '@components/MainHero';
import Solutions from '@components/Solutions';
import WhyChooseClyde from '@components/WhyChooseClyde';
import ContactSection from '@components/contact/ContactSection';
export const metadata = {
  title:
    'Clyde Ventures - Independence & Upskilling Design Authority Integration',
  description:
    'Discover how Clyde Ventures helps businesses achieve independence and upskill through specialized design authority integration services.',
};
export default function IntegrationPage() {
  return (
    <AnimationWrapper>
      <MainHero hero="independence-upskilling-and-design-authority"></MainHero>
      <Solutions solution="independence-upskilling-and-design-authority" />
      <div className="page-break" />
      <CaseStudies caseStudyTopic="Independence, Upskilling and Design Authority" />
      <div className="page-break" />
      <WhyChooseClyde topic="Independence, Upskilling and Design Authority strategy" />
      <div className="page-break" />
      <ContactSection />
    </AnimationWrapper>
  );
}
