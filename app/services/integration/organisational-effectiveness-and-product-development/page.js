import AnimationWrapper from '@components/AnimationWrapper';
import CaseStudies from '@components/CaseStudies';
import MainHero from '@components/MainHero';
import OrganisationalEffectivenessProductDevelopmentText from '@components/OrganisationalEffectivenessProductDevelopmentText';
import Solutions from '@components/Solutions';
import WhyChooseClyde from '@components/WhyChooseClyde';
import ContactSection from '@components/contact/ContactSection';
export const metadata = {
  title:
    'Clyde Ventures - Organizational Effectiveness & Product Development Integration',
  description:
    'Explore Clyde Ventures’ integration services focused on enhancing organizational effectiveness and driving product development.',
};
export default function IntegrationPage() {
  return (
    <AnimationWrapper>
      <MainHero hero="process-design"></MainHero>
      <Solutions solution="process-design" />
      <div className="page-break" />
      <OrganisationalEffectivenessProductDevelopmentText />
      <CaseStudies caseStudyTopic="Organisational Effectiveness and Product Development" />
      <div className="page-break" />
      <WhyChooseClyde title="Why Choose Clyde Heading Placeholder" />
      <div className="page-break" />
      <ContactSection />
    </AnimationWrapper>
  );
}
