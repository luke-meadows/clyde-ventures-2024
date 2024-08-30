import AnimationWrapper from '@components/AnimationWrapper';
import CaseStudies from '@components/CaseStudies';
import MainHero from '@components/MainHero';
import SalesforceSolutions from '@components/Solutions';
import WhyChooseClyde from '@components/WhyChooseClyde';
import ContactSection from '@components/contact/ContactSection';
import Image from 'next/image';
export const metadata = {
  title: 'Clyde Ventures - Salesforce Integration',
  description:
    'Explore how Clyde Ventures helps businesses implement and optimize Salesforce to enhance customer relationship management.',
};
export default function IntegrationPage() {
  return (
    <AnimationWrapper>
      <MainHero hero="salesforce">
        <div className="md:hidden mt-2">
          <Image
            src="/images/sf-partner-logo-square.png"
            width={100}
            height={100}
          />
        </div>
        <div className="hidden md:block">
          <Image
            src="/images/sf-partner-logo-rectangle.png"
            width={200}
            height={100}
          />
        </div>
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
