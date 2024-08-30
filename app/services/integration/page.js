import AnimationWrapper from '@components/AnimationWrapper';
import CaseStudies from '@components/CaseStudies';
import MainHero from '@components/MainHero';
import Solutions from '@components/Solutions';
import WhyChooseClyde from '@components/WhyChooseClyde';
import ContactSection from '@components/contact/ContactSection';
export const metadata = {
  title: 'Clyde Ventures - Integration Services',
  description:
    'Explore Clyde Ventures’ integration services, from Salesforce implementation to organizational effectiveness and product development.',
};
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
      <ContactSection />
    </AnimationWrapper>
  );
}
