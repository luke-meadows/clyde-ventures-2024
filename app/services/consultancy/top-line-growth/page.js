import AnimationWrapper from '@components/AnimationWrapper';
import CaseStudies from '@components/CaseStudies';
import MainHero from '@components/MainHero';
import Solutions from '@components/Solutions';
import WhyChooseClyde from '@components/WhyChooseClyde';
import ContactSection from '@components/contact/ContactSection';
export const metadata = {
  title: 'Clyde Ventures - Top-Line Growth Consultancy',
  description:
    'Discover Clyde Ventures’ consultancy services focused on driving top-line growth through innovative strategies and solutions.',
};
export default function TopLineGrowthPage() {
  return (
    <AnimationWrapper>
      <MainHero hero="top-line-growth"></MainHero>
      <Solutions solution="top-line-growth" />
      <div className="page-break" />
      <CaseStudies caseStudyTopic="Top Line Growth" />
      <div className="page-break" />
      <WhyChooseClyde title="Why Choose Clyde Heading Placeholder" />
      <div className="page-break" />
      <ContactSection />
    </AnimationWrapper>
  );
}
