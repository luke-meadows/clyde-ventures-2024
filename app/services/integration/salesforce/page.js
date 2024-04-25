import AnimationWrapper from '@components/AnimationWrapper';
import CaseStudies from '@components/CaseStudies';
import MainHero from '@components/MainHero';
import SalesforceSolutions from '@components/Solutions';
import WhyChooseClyde from '@components/WhyChooseClyde';
import ContactSection from '@components/contact/ContactSection';
import Image from 'next/image';

export default function IntegrationPage() {
  return (
    <AnimationWrapper>
      <MainHero hero="salesforce">
        <Image
          src="/images/sf-partner-logo-rectangle.png"
          width={200}
          height={100}
        />
      </MainHero>
      <SalesforceSolutions solution="salesforce" />
      <div className="page-break" />
      <CaseStudies caseStudyTopic="Salesforce" />
      <div className="page-break" />
      <WhyChooseClyde title="Why Choose Clyde Heading Placeholder" />
      <div className="page-break" />
      <ContactSection />
    </AnimationWrapper>
  );
}
