import AnimationWrapper from '@components/AnimationWrapper';
import MainHero from '@components/MainHero';
import WhatWeDo from '@components/WhatWeDo';
import ContactSection from '@components/contact/ContactSection';
export const metadata = {
  title: 'Clyde Ventures - Services',
  description:
    'Explore the wide range of services offered by Clyde Ventures, including consultancy, integration, education, and more.',
};
export default function ServicesPage() {
  return (
    <AnimationWrapper>
      <MainHero hero="services"></MainHero>
      <WhatWeDo />
      <div className="page-break" />
      <ContactSection />
    </AnimationWrapper>
  );
}
